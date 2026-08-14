import { NextResponse } from 'next/server';
import { readMailConfig, sendEnquiry, type EnquiryField } from '@/lib/mail';

/**
 * Contact + enquiry endpoint.
 *
 * Every form on the site posts here. Validation is repeated server-side —
 * the client checks are for usability only and are trivially bypassed.
 *
 * Requires a Node runtime (nodemailer opens a TCP socket, which the edge
 * runtime cannot do) and must never be statically prerendered.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Field key -> label shown in the emails. Anything not listed is ignored. */
const ALLOWED_FIELDS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  budget: 'Budget',
  projectType: 'Project type',
  platform: 'Platform',
  timeline: 'Timeline',
  source: 'How they found us',
  message: 'Message',
};

const MAX_LENGTHS: Record<string, number> = {
  name: 120,
  email: 200,
  company: 160,
  budget: 80,
  projectType: 120,
  platform: 120,
  timeline: 120,
  source: 160,
  message: 5000,
};

const HONEYPOT = '_gotcha';

/* Deliberately permissive: the only address that matters is one a real mail
   server will accept, and over-strict patterns reject valid addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* --------------------------------------------------------------------------
   Rate limiting

   In-memory and therefore per-process: it resets on deploy and does not span
   multiple instances. That is fine for a single Node process on a VPS, which
   is how this site is deployed. Put a proper shared store behind it if the app
   is ever scaled horizontally.
   -------------------------------------------------------------------------- */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 5000) {
    for (const [ip, times] of hits) {
      if (!times.some((time) => now - time < WINDOW_MS)) hits.delete(ip);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export async function POST(request: Request): Promise<NextResponse> {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, code: 'bad_request' }, { status: 400 });
  }

  const read = (key: string): string =>
    typeof payload[key] === 'string' ? (payload[key] as string).trim() : '';

  // Bots fill hidden fields. Answer 200 so they learn nothing, and send nothing.
  if (read(HONEYPOT)) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  const name = read('name');
  const email = read('email');
  const message = read('message');

  if (name.length < 2) errors.name = 'Please tell us your name.';
  if (!EMAIL.test(email)) errors.email = 'Please enter a valid email address.';
  if (message.length < 10) errors.message = 'Please add a little more detail.';

  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    if (read(key).length > max) errors[key] = `That is longer than we can accept.`;
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, code: 'invalid', errors }, { status: 422 });
  }

  if (rateLimited(clientKey(request))) {
    return NextResponse.json({ ok: false, code: 'rate_limited' }, { status: 429 });
  }

  const config = readMailConfig();
  if (!config) {
    /* No SMTP credentials on this deployment. Tell the client plainly so it can
       offer the mailto fallback instead of claiming the message was sent. */
    return NextResponse.json({ ok: false, code: 'not_configured' }, { status: 503 });
  }

  const fields: EnquiryField[] = Object.entries(ALLOWED_FIELDS)
    .map(([key, label]) => ({ label, value: read(key) }))
    .filter((field) => field.value);

  const subject =
    read('_subject') || `Website enquiry from ${name}`;

  try {
    const result = await sendEnquiry(config, { name, email, subject, fields });
    return NextResponse.json({ ok: true, acknowledged: result.acknowledged });
  } catch (error) {
    console.error('[contact] send failed:', error);
    return NextResponse.json({ ok: false, code: 'send_failed' }, { status: 502 });
  }
}

/** Anything other than POST is not meaningful here. */
export function GET(): NextResponse {
  return NextResponse.json({ ok: false, code: 'method_not_allowed' }, { status: 405 });
}
