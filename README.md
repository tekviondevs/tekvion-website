# Tekvion Innovations — website

The marketing site for **Tekvion Innovations** (trading name of Tekvion Solutions), a full-service
web agency founded in 2021: design, development, launch and long-term support for websites and web
apps. Live domain: <https://tekvion.net>.

Every page is statically generated, every route is crawlable, and the whole site runs on any static
host — no database, no runtime environment variables, no external network calls at runtime.

---

## Stack

| Piece | Choice |
|---|---|
| Framework | Next.js 16.3 (App Router), fully static |
| UI | React 19.2, TypeScript strict |
| Styling | Plain CSS — design tokens + component classes. No Tailwind, no CSS-in-JS |
| Icons | `lucide-react`, wrapped by `src/components/ds/Icon.tsx` |
| Fonts | `next/font/google` — Plus Jakarta Sans (600/700/800), DM Sans (400/500) |
| Content | Typed TypeScript data under `src/content/`. No CMS, no MDX |

Dependencies are pinned and already installed. **Do not run `create-next-app` and do not change
dependency versions.**

---

## Running it

```bash
npm run dev        # http://localhost:3000
npm run build      # production build — must pass clean
npm start          # serve the production build
npm run lint       # eslint . (`next lint` no longer exists in Next 16)
npm run typecheck  # tsc --noEmit
```

Node 24, npm.

---

## Where things live

```
src/
  app/
    layout.tsx        root shell: fonts, metadata, nav, main, footer, Organization + WebSite JSON-LD
    globals.css       reset, base, utilities, prose, responsive rules (imports tokens + component CSS)
    tokens.css        design-system tokens, copied verbatim from the DS export
    icon.png          512×512 square favicon — Next emits the <link rel="icon"> tags
    apple-icon.png    180×180 Apple touch icon (opaque background, per the Apple spec)
    not-found.tsx     404
    <route>/page.tsx  one folder per route
  components/
    ds/               design-system primitives (Button, Icon, ServiceCard, FaqRow, …) + ds.css
    site/             site chrome (Nav, Footer, PageCta, TrustedBy, Breadcrumbs, …) + site.css
  content/
    types.ts          shared content types — import from here, never redefine
    company.ts        brand facts, contact, proof numbers, process, values, FAQs, FORM_ENDPOINT
    team.ts           the three team members
    projects.ts       every real delivered project (+ case studies for featured ones)
    services.ts       aggregator over services/<category>.ts
    blog.ts           aggregator over blog/<slug>.ts
  lib/
    seo.ts            SITE_URL, brand constants, buildMetadata(), defaultMetadata
    schema.ts         typed JSON-LD builders + the <JsonLd> renderer
public/
  assets/             logo lockups, icons, 3D hero render, og-image.png,
                      icon-square-192/512 + icon-maskable-512 (PWA manifest tiles)
  team/               team portraits
  favicon.ico         genuine multi-size ICO (16/32/48) for legacy /favicon.ico requests
```

### Styling rules

Seven colours, each with exactly one job — see `src/app/tokens.css`:

- `#1E2EDD` / `#18D7D9` — identity gradient, **logo only**
- `#6900FD` — purple, full-bleed bands only
- `#FFAD00` — amber, emphasis only (heading underlines, `band--amber`). Never buttons or links
- `#0065FF` — the only interactive colour: every button, link and active state
- `#000000` / `#FFFFFF` — sections alternate pure black and pure white. No mid-grey backgrounds

Use the utility classes in `globals.css` (`.container`, `.section`, `.band--dark`, `.grid--4`, …)
and the `SectionBand` component rather than inline styles. Inline `style` is for genuinely dynamic
values only.

Breakpoints: 1180px (footer), 1080px (nav collapses to the drawer), 1024px (4-col → 2-col),
720px (→ 1-col), 560px (gutters shrink to 20px). Nothing may scroll horizontally at 360px.

---

## Adding a blog post

1. Create `src/content/blog/<slug>.ts` exporting `post` typed as `BlogPost` from `@/content/types`.
   Body content is an array of `BlockNode`s (`h2`, `h3`, `p`, `ul`, `ol`, `quote`, `callout`,
   `code`, `table`) so the renderer can emit semantic HTML with anchor-linked headings and a table
   of contents.
2. Import it in `src/content/blog.ts` and add it to the `posts` array. The array is sorted by
   `publishedAt`, newest first.
3. Nothing else. `/blog`, `/blog/<slug>`, the sitemap and the JSON-LD all read from that array.

Required fields: `slug`, `title`, `metaTitle` (≤60 chars), `metaDescription` (150–160 chars),
`category`, `tags`, `publishedAt` (ISO), `readingMinutes`, `authorSlug` (must match a team member),
`excerpt`, `body`, `relatedServiceSlugs`, `relatedPostSlugs`.

## Adding a service

1. Add a `Service` object to the right category file under `src/content/services/`
   (`design.ts`, `development.ts`, `growth.ts`, `platform.ts`).
2. It appears automatically in `/services`, gets its own page at `/services/<slug>`, and is added to
   the sitemap. Set `featured: true` to surface it on the homepage grid and in the footer.
3. `icon` is a kebab-case Lucide name. The registry in `src/components/ds/Icon.tsx` holds the
   glyphs the site uses — add the import there if you need one that is not registered yet (unknown
   names fall back to `arrow-right`).

## Adding a project / case study

Add a `Project` to `src/content/projects.ts`. Only ship projects with a **live, working URL**.
Set `featured: true` and fill in `caseStudy` to generate a page at `/portfolio/<slug>`.
Never invent metrics — highlights must be factual and verifiable.

---

## Swapping a team photo

Placeholder portraits (branded identity-gradient tiles with the member's initials) ship at:

```
public/team/jahanzaib-abid.jpg
public/team/shaharyar-ansari.jpg
public/team/ghulam-suleman.jpg
```

Drop a real photo at the same path and filename — that is the only step. Portrait crop, ideally
800×1000 or larger. The About page renders a CSS initials avatar behind the `<img>` and reveals it
via `onError`, so a missing or broken file degrades gracefully rather than showing a broken image.

---

## Conversion paths

There are exactly two, and no others should be added without a decision from the founders:

1. **Book a Call** — the primary CTA site-wide. Every one of them points at
   `CALENDLY_URL` in `src/content/company.ts`
   (`https://calendly.com/tekvion-innovations/30min`). It is off-site, so every anchor
   opens in a new tab with `rel="noopener noreferrer"` and carries a visually-hidden
   "(opens in a new tab)". The visible label is always exactly **Book a Call** — do not
   reword it per page.
2. **The contact form** at `/contact` — the secondary route, labelled "Contact us".

The old `/quote` brief form and its page were **deleted deliberately**. Do not reinstate
them: the booking page replaced them, and a third path would split the funnel.

## Forms and email

The contact form POSTs to the site's own API route, `src/app/api/contact/route.ts`, which sends
**two** emails through the Hostinger mailbox:

1. a **notification** to `CONTACT_TO` (defaults to the SMTP user) with `Reply-To` set to the
   enquirer, so replying from the inbox goes straight back to them;
2. an **automated acknowledgement** to the enquirer, with `Reply-To` set to the studio mailbox.

The acknowledgement is best-effort: if it fails (bad address, remote server rejects it) the
submission still counts as successful, because the enquiry itself already reached the inbox. Only a
failed notification reports an error.

### Setup

1. Copy `.env.example` to `.env.local` and fill in the Hostinger SMTP values. `.env.local` is
   gitignored. **Never** prefix these with `NEXT_PUBLIC_` — that would ship the password to the
   browser.
2. Verify the credentials before relying on them:

   ```bash
   npm run mail:verify                    # connect + authenticate only
   npm run mail:verify -- you@example.com # also send a test message
   ```

3. On the server, set the same variables in the environment (Hostinger's Node app manager, a
   systemd unit, a pm2 ecosystem file, or a `.env.local` deployed alongside the build).

Values come from hPanel → Emails → the mailbox → *Connect Apps & Devices* → manual configuration.
Port `465` is implicit TLS; `587` is STARTTLS and needs `SMTP_SECURE=false`.

> **Quote `SMTP_PASS`.** Unquoted, a `#` in the password starts a comment and everything after it is
> discarded, so the server receives a truncated string and answers `535 authentication failed` —
> indistinguishable from a genuinely wrong password. Single quotes also prevent `$` being expanded
> and preserve trailing spaces. This bit us once already; it applies equally to `.env.local` and to
> whatever sets the environment on the server.

### Requires a Node runtime

The route sets `runtime = 'nodejs'` and `dynamic = 'force-dynamic'`. Nodemailer opens a TCP socket,
which the edge runtime cannot do, and SMTP credentials can only ever live server-side. The site
therefore has to be deployed with `next start` (or an equivalent Node host) — **not** exported to
static files.

If it ever must ship as pure static, set `FORM_ENDPOINT` in `src/content/company.ts` to a
third-party relay URL; the client posts there instead of `/api/contact` with no other change.

### Behaviour and abuse handling

| Condition | Response | What the visitor sees |
|---|---|---|
| Sent successfully | `200` | Success panel |
| Field validation failed | `422` + per-field errors | Inline errors, focus moves to the first |
| More than 5 posts in 10 minutes from one IP | `429` | Rate-limit notice with direct contact details |
| SMTP not configured on this deployment | `503 not_configured` | Pre-filled `mailto:` fallback |
| Send failed | `502` | Error notice plus the `mailto:` fallback |
| Honeypot field filled | `200`, nothing sent | Success panel, so bots learn nothing |

Validation runs **again** on the server — the client-side checks are for usability and are trivially
bypassed. Submitted values are HTML-escaped before they reach the email templates, and CR/LF is
stripped from anything used in a header to prevent header injection.

Rate limiting is in-memory, so it is per-process and resets on deploy. That is correct for a single
Node process on a VPS; put a shared store behind it before scaling horizontally.

### Deliverability

Because the site sends an automated reply, SPF/DKIM/DMARC matter more than usual — auto-replies to
addresses that never opted in are the fastest way to earn a spam reputation. Confirm in hPanel that
`tekvion.net` has an SPF record including Hostinger, DKIM enabled, and ideally a DMARC record. If
the test message lands in spam, that is where to look first.

### Newsletter (removed on purpose)

The amber "Stay Updated" band and its `NewsletterBand` component were **deleted**, not hidden. We
have no subscriber list, no sending infrastructure and no unsubscribe flow, so a signup box would
collect addresses we could not honestly service — and the privacy policy now states plainly that we
run no mailing list. Re-adding it means building the subscriber flow first, and updating
`/privacy-policy` in the same change. `Footer.tsx` and `src/components/ds/index.ts` both carry a
comment saying so.

## Analytics

None is installed — the site makes no external network calls at runtime. To add one, put the script
in `src/app/layout.tsx` using `next/script` with `strategy="afterInteractive"`, immediately before
`</body>`. Keep it to a single provider and re-check Core Web Vitals afterwards.

---

## SEO

- Every route exports `metadata` (or `generateMetadata`) built with `buildMetadata()` from
  `src/lib/seo.ts`: unique title ≤60 chars, description 150–160 chars, canonical URL, Open Graph
  and a `summary_large_image` Twitter card. The 60-char budget is on the **rendered** title, so the
  root template appends the short ` | Tekvion` (10 chars), not the full brand name — authored
  titles therefore have to stay at or under 50 characters. The full "Tekvion Innovations" still
  ships in `og:title`, `siteName` and the Organization/WebSite JSON-LD.
- JSON-LD comes from `src/lib/schema.ts`: `Organization` + `WebSite` in the root layout, `Service` +
  `BreadcrumbList` on service pages, `BlogPosting` + `BreadcrumbList` on posts, `CreativeWork` on
  case studies, `ProfessionalService` on home and contact. The eight company FAQs are published as
  `FAQPage` on `/contact` only — the same node at three canonical URLs is duplicate structured data.
  The per-service FAQPage nodes on `/services/[slug]` are unique to each page and stay.
- The default social card is `public/assets/og-image.png` (1200×630).
- `app/sitemap.ts` and `app/robots.ts` enumerate every static and dynamic route from the content
  files.
- One `<h1>` per page, no skipped heading levels, descriptive `alt` on every image, explicit
  `width`/`height` to prevent layout shift.

### Pricing (deliberately unpublished)

The site publishes **no prices, price bands or starting figures**, anywhere — not in
`company.faqs`, not in Terms, not on any service page. No price for Tekvion work exists in the
source records, and the prior site plan states the policy directly: *"Rather than publish ballpark
numbers that may not apply to your project, we prefer to look at your brief and send back a fixed
quote."* The budget select on the contact form asks the client for a range; it is a question, never
our rates. The cost blog post quotes **market** rates and says so. Do not add figures without written
confirmation from the founders, and if they are ever confirmed, change every one of those places
in the same edit so the site never contradicts itself.

### Brand facts (verified — never invent alternatives)

| Field | Value |
|---|---|
| Public brand | Tekvion Innovations |
| Legal entity | Tekvion Solutions (footer fine print, Privacy and Terms only) |
| Tagline | Think. Build. Launch. |
| Email | business@tekvion.net |
| Phone | +92 301 1114200 |
| Address | River Gardens, Islamabad, Pakistan |
| Founded | 2021 |

These live in two places on purpose: `src/lib/seo.ts` for the SEO/chrome layer and
`src/content/company.ts` for page copy. Change both together.

Approved proof numbers: 50+ projects delivered · 42 WordPress builds · 5 Bubble.io builds ·
1 hybrid build (WordPress + Bubble.io) · 1 custom Next.js build ·
4 continents · clients in 10+ countries · 10+ years combined experience · most clients stay 2+ years.
Nothing else may be presented as a metric, and there are no client testimonials on record — the
`TrustedBy` band shows real client brand names only.

---

## Conventions

- Design-system primitives in `src/components/ds`, page chrome in `src/components/site`; both have
  barrel exports (`@/components/ds`, `@/components/site`).
- `'use client'` only where interactivity requires it: the nav drawer, `FaqRow`, `Underline`'s
  scroll observer, and forms. Everything else is a server component.
- No `any`, no unused imports, no unused locals — `tsconfig.json` enforces the last two.
- British-leaning spelling throughout ("optimise", "specialising").
- Path alias `@/*` → `src/*`.
