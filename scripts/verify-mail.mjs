/**
 * SMTP smoke test for the contact form.
 *
 *   npm run mail:verify              -- connect and authenticate only
 *   npm run mail:verify -- you@x.com -- also send a test enquiry to that address
 *
 * Reads .env.local via Node's --env-file flag (see the npm script). Prints the
 * exact failure reason rather than a generic error, because the three things
 * that go wrong here are always the same: wrong port/secure combination, wrong
 * password, or the mailbox not existing yet.
 */
import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST?.trim();
const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS;
const port = Number(process.env.SMTP_PORT ?? 465);
const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
const to = process.env.CONTACT_TO?.trim() || user;
const fromName = process.env.SMTP_FROM_NAME?.trim() || 'Tekvion Innovations';

const missing = [
  !host && 'SMTP_HOST',
  !user && 'SMTP_USER',
  !pass && 'SMTP_PASS',
].filter(Boolean);

if (missing.length) {
  console.error(`\n  Missing: ${missing.join(', ')}`);
  console.error('  Copy .env.example to .env.local and fill it in.\n');
  process.exit(1);
}

console.log(`\n  host   ${host}:${port} (secure: ${secure})`);
console.log(`  user   ${user}`);
console.log(`  notify ${to}\n`);

const transport = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: { user, pass },
  connectionTimeout: 15000,
});

try {
  await transport.verify();
  console.log('  Connection and authentication OK.');
} catch (error) {
  console.error(`\n  FAILED: ${error.message}\n`);
  if (/certificate|self.signed|wrong version/i.test(error.message)) {
    console.error('  Looks like a TLS mismatch. Use port 465 with SMTP_SECURE=true,');
    console.error('  or port 587 with SMTP_SECURE=false.\n');
  } else if (/auth|credential|535|login/i.test(error.message)) {
    console.error('  Authentication was rejected. Check the mailbox password in hPanel,');
    console.error('  and confirm SMTP_USER is the full address (business@tekvion.net).\n');
  } else if (/ENOTFOUND|EAI_AGAIN|timeout|ETIMEDOUT/i.test(error.message)) {
    console.error('  Could not reach the server. Check SMTP_HOST, and confirm the host');
    console.error('  or network is not blocking outbound SMTP.\n');
  }
  process.exit(1);
}

const recipient = process.argv[2];
if (!recipient) {
  console.log('  Pass an address to also send a test message:');
  console.log('    npm run mail:verify -- you@example.com\n');
  process.exit(0);
}

try {
  const info = await transport.sendMail({
    from: `"${fromName}" <${user}>`,
    to: recipient,
    subject: 'Tekvion contact form — SMTP test',
    text: 'If you are reading this, the contact form can send mail through the Hostinger mailbox.',
    html: '<p>If you are reading this, the contact form can send mail through the Hostinger mailbox.</p>',
  });
  console.log(`  Test message sent to ${recipient} (id ${info.messageId})`);
  console.log('  Check spam as well — if it lands there, SPF/DKIM need attention.\n');
} catch (error) {
  console.error(`\n  Send failed: ${error.message}\n`);
  process.exit(1);
}
