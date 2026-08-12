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
- `#FFAD00` — amber, emphasis only (heading underlines, newsletter band). Never buttons or links
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
public/team/suleman-buzdar.jpg
```

Drop a real photo at the same path and filename — that is the only step. Portrait crop, ideally
800×1000 or larger. The About page renders a CSS initials avatar behind the `<img>` and reveals it
via `onError`, so a missing or broken file degrades gracefully rather than showing a broken image.

---

## Forms

All forms are static-safe: a plain `<form>` posting to a single endpoint constant.

```ts
// src/content/company.ts
export const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_ME';
```

Replace `REPLACE_ME` with the real Formspree (or equivalent) form ID. The contact, quote and
newsletter forms all post there. No API routes, no server runtime, no secrets in the repo.

While the placeholder is in place every form says so rather than pretending to work: the contact
and quote forms render `EndpointNotice` and fall back to a pre-addressed `mailto:`, and the amber
`NewsletterBand` swaps its input for an "Email to subscribe" button. All three switch to the real
POST automatically the moment `FORM_ENDPOINT` no longer contains `REPLACE_ME`.

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

The site publishes **no prices, price bands or starting figures**, anywhere — not on `/quote`, not
in `company.faqs`, not in Terms. No price for Tekvion work exists in the source records, and the
prior site plan states the policy directly: *"Rather than publish ballpark numbers that may not
apply to your project, we prefer to look at your brief and send back a fixed quote."* The budget
selects on the contact and quote forms ask the client for a range; they are questions, never our
rates. The cost blog post quotes **market** rates and says so. Do not add figures without written
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

Approved proof numbers: 49+ projects delivered · 42 WordPress builds · 7 Bubble.io builds ·
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
