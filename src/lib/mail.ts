import nodemailer, { type Transporter } from 'nodemailer';
import { company, contact } from '@/content/company';
import { SITE_URL } from '@/lib/seo';

/**
 * Outbound mail for the contact form.
 *
 * Credentials come from environment variables only — they are read on the
 * server, never bundled, and never sent to the browser. See `.env.example`
 * and the "Email" section of the README for the Hostinger values.
 */

export interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  /** Where enquiry notifications land. Defaults to the SMTP user. */
  to: string;
  /** Display name on the From header. */
  fromName: string;
}

/**
 * Reads and validates the SMTP environment. Returns null when the mailbox has
 * not been configured yet, so the API can answer with a clean "not configured"
 * status and the form can fall back to a mailto link instead of pretending the
 * message was sent.
 */
export function readMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 465);
  if (!Number.isFinite(port) || port <= 0) return null;

  return {
    host,
    port,
    // Port 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    user,
    pass,
    to: process.env.CONTACT_TO?.trim() || user,
    fromName: process.env.SMTP_FROM_NAME?.trim() || company.name,
  };
}

let cached: Transporter | null = null;

function getTransport(config: MailConfig): Transporter {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
    /* Hostinger throttles aggressive senders; a small pool with a connection
       cap keeps us well inside their limits under normal enquiry volume. */
    pool: true,
    maxConnections: 2,
    maxMessages: 50,
  });
  return cached;
}

/* -------------------------------------------------------------------------- */
/*  Escaping + templates                                                       */
/* -------------------------------------------------------------------------- */

/** Submitted values are attacker-controlled: escape before they touch HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Header injection guard. A newline in a header value lets a submitter append
 * arbitrary headers (Bcc, Reply-To), so strip CR/LF from anything that reaches
 * a header rather than a body.
 */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export interface EnquiryField {
  label: string;
  value: string;
}

export interface Enquiry {
  name: string;
  email: string;
  subject: string;
  fields: EnquiryField[];
}

const BRAND_BLUE = '#0065FF';
const INK = '#111111';
const MUTED = '#5b5b5b';

function shell(bodyHtml: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#f4f5f7;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${INK}">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden">
    <tr><td style="background:${BRAND_BLUE};padding:20px 28px">
      <span style="font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.02em">${escapeHtml(company.name)}</span>
    </td></tr>
    <tr><td style="padding:28px">${bodyHtml}</td></tr>
    <tr><td style="padding:18px 28px;border-top:1px solid #e6e6e6;font-size:12px;line-height:1.6;color:${MUTED}">
      ${escapeHtml(company.name)} · ${escapeHtml(contact.addressLine)}, ${escapeHtml(contact.city)}, ${escapeHtml(contact.country)}<br>
      <a href="mailto:${escapeHtml(contact.email)}" style="color:${BRAND_BLUE}">${escapeHtml(contact.email)}</a> ·
      <a href="${SITE_URL}" style="color:${BRAND_BLUE}">${escapeHtml(SITE_URL.replace(/^https?:\/\//, ''))}</a>
    </td></tr>
  </table>
</body></html>`;
}

function notificationBody(enquiry: Enquiry): { html: string; text: string } {
  const rows = enquiry.fields
    .filter((field) => field.value.trim())
    .map(
      (field) =>
        `<tr>
          <td style="padding:8px 0;vertical-align:top;width:150px;font-size:13px;color:${MUTED}">${escapeHtml(field.label)}</td>
          <td style="padding:8px 0;vertical-align:top;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(field.value)}</td>
        </tr>`,
    )
    .join('');

  const html = shell(
    `<h1 style="margin:0 0 4px;font-size:19px">New website enquiry</h1>
     <p style="margin:0 0 20px;font-size:14px;color:${MUTED}">Reply directly to this email to answer ${escapeHtml(enquiry.name)}.</p>
     <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>`,
  );

  const text = [
    'New website enquiry',
    '',
    ...enquiry.fields.filter((f) => f.value.trim()).map((f) => `${f.label}: ${f.value}`),
    '',
    `Reply directly to this email to answer ${enquiry.name}.`,
  ].join('\n');

  return { html, text };
}

function autoReplyBody(enquiry: Enquiry): { html: string; text: string } {
  const firstName = enquiry.name.trim().split(/\s+/)[0] || 'there';

  const summary = enquiry.fields
    .filter((field) => field.value.trim())
    .map(
      (field) =>
        `<tr>
          <td style="padding:6px 0;vertical-align:top;width:130px;font-size:13px;color:${MUTED}">${escapeHtml(field.label)}</td>
          <td style="padding:6px 0;vertical-align:top;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(field.value)}</td>
        </tr>`,
    )
    .join('');

  const html = shell(
    `<h1 style="margin:0 0 14px;font-size:19px">Thanks for getting in touch, ${escapeHtml(firstName)}</h1>
     <p style="margin:0 0 14px;font-size:15px;line-height:1.65">
       We have your message and one of the founders will read it personally — we are a small team, so
       there is no queue and no account manager in between. You can expect a reply within one working day.
     </p>
     <p style="margin:0 0 22px;font-size:15px;line-height:1.65">
       If it is easier to talk it through, you are welcome to book a 30-minute call at a time that suits you:
       <br><a href="${escapeHtml(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/tekvion-innovations/30min')}" style="color:${BRAND_BLUE};font-weight:600">Book a call</a>
     </p>
     <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:${MUTED};text-transform:uppercase;letter-spacing:0.06em">What you sent us</p>
     <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #e6e6e6;padding-top:8px">${summary}</table>
     <p style="margin:22px 0 0;font-size:13px;color:${MUTED}">
       This is an automated confirmation, but replies to it reach us — just hit reply if you want to add anything.
     </p>`,
  );

  const text = [
    `Thanks for getting in touch, ${firstName}`,
    '',
    'We have your message and one of the founders will read it personally. You can expect a reply within one working day.',
    '',
    `Prefer to talk? Book a 30-minute call: ${process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/tekvion-innovations/30min'}`,
    '',
    'What you sent us:',
    ...enquiry.fields.filter((f) => f.value.trim()).map((f) => `  ${f.label}: ${f.value}`),
    '',
    'This is an automated confirmation, but replies to it reach us.',
    '',
    `${company.name} · ${contact.addressLine}, ${contact.city}, ${contact.country}`,
  ].join('\n');

  return { html, text };
}

/* -------------------------------------------------------------------------- */
/*  Send                                                                       */
/* -------------------------------------------------------------------------- */

export interface SendResult {
  notified: boolean;
  acknowledged: boolean;
}

/**
 * Sends the internal notification and the enquirer's acknowledgement.
 *
 * The notification is the one that matters — if it succeeds we report success
 * even when the acknowledgement bounces, because the enquiry is not lost. A
 * failed notification throws so the caller can show the mailto fallback.
 */
export async function sendEnquiry(config: MailConfig, enquiry: Enquiry): Promise<SendResult> {
  const transport = getTransport(config);
  const from = `"${headerSafe(config.fromName)}" <${config.user}>`;
  const replyTo = `"${headerSafe(enquiry.name)}" <${headerSafe(enquiry.email)}>`;

  const notification = notificationBody(enquiry);
  await transport.sendMail({
    from,
    to: config.to,
    // Lets you reply straight from the inbox without copying the address.
    replyTo,
    subject: headerSafe(enquiry.subject),
    text: notification.text,
    html: notification.html,
  });

  let acknowledged = false;
  try {
    const reply = autoReplyBody(enquiry);
    await transport.sendMail({
      from,
      to: `"${headerSafe(enquiry.name)}" <${headerSafe(enquiry.email)}>`,
      replyTo: config.to,
      subject: `We received your message — ${company.name}`,
      text: reply.text,
      html: reply.html,
      /* Stops out-of-office autoresponders replying to our autoresponder. */
      headers: {
        'Auto-Submitted': 'auto-replied',
        'X-Auto-Response-Suppress': 'All',
      },
    });
    acknowledged = true;
  } catch (error) {
    // A bad address on the enquirer's side must not fail their submission.
    console.error('[contact] auto-reply failed:', error);
  }

  return { notified: true, acknowledged };
}
