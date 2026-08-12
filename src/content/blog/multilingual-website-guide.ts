import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'multilingual-website-guide',
  title: 'Building Multilingual Websites That Actually Rank',
  metaTitle: 'Multilingual Websites That Actually Rank',
  metaDescription:
    'How to build multilingual websites that rank: URL structure, hreflang, translation quality, RTL layouts and the WordPress stack we use on real client builds.',
  category: 'SEO',
  tags: ['Multilingual SEO', 'hreflang', 'WordPress', 'International SEO', 'WPML'],
  publishedAt: '2026-03-24',
  readingMinutes: 11,
  authorSlug: 'shaharyar-ansari',
  excerpt:
    'Most multilingual sites fail in search because they were treated as a translation job rather than an architecture decision. Here is how we structure, tag and ship sites that rank in every language they serve.',
  body: [
    {
      type: 'p',
      text: 'Adding a second language to a website looks like a content problem. Get the copy translated, drop it into a language switcher, done. In practice it is an architecture problem, and the sites that quietly underperform in search are almost always the ones where that decision was made last instead of first.',
    },
    {
      type: 'p',
      text: 'We have shipped sites in English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian — a Hebrew right-to-left e-learning platform serving certification courses across Israel, German healthcare and clinic sites, a Dutch WooCommerce store for a sustainable cosmetics brand, a Norwegian retail catalogue, a Polish wellness and education site. Across 49 delivered projects on four continents, the multilingual builds are the ones where the technical groundwork pays for itself fastest, and where shortcuts cost the most to unwind.',
    },
    {
      type: 'p',
      text: 'This guide covers what actually determines whether your translated pages get indexed, ranked and served to the right audience: URL structure, hreflang, translation quality, layout direction, performance parity across locales, and the WordPress stack that holds it all together. No theory you cannot act on this week.',
    },

    { type: 'h2', text: 'Why most multilingual sites underperform in search' },
    {
      type: 'p',
      text: 'Search engines do not reward you for having translated content. They reward you for making it unambiguous which version belongs to which audience, and for making each version genuinely useful in its own language. Nearly every failure we are asked to diagnose traces back to one of a small number of causes.',
    },
    {
      type: 'ul',
      items: [
        'Every language lives on the same URL, swapped client-side by a script — so there is only one page for crawlers to index, and only one language ever ranks.',
        'Translations exist but are not linked to each other, so Google treats them as unrelated thin pages competing with the original.',
        'Machine translation was shipped untouched, producing copy that reads as filler to users and carries none of the search terms people in that market actually type.',
        'The language switcher is the only internal link into the translated tree, so those pages sit three clicks from anywhere and accumulate no internal authority.',
        'Only the homepage and a handful of top pages were translated, leaving users who land deep in a foreign-language site with a dead end.',
        'Auto-redirects based on IP address bounce crawlers — and travelling users — into the wrong locale before they can choose.',
      ],
    },
    {
      type: 'p',
      text: 'None of these are hard to avoid. They are just hard to fix after launch, because each one is baked into how the site is structured rather than what it says.',
    },

    { type: 'h2', text: 'Decide your URL structure before you pick a plugin' },
    {
      type: 'p',
      text: 'This is the first decision and the most expensive one to reverse. Every translated page needs its own crawlable, indexable, permanently stable URL. How you carve that up determines your geo-targeting signals, your hosting complexity and how your authority is distributed.',
    },
    {
      type: 'table',
      headers: ['Structure', 'Example', 'Geo/language signal', 'Best for', 'Main trade-off'],
      rows: [
        [
          'Subdirectory',
          'example.com/de/',
          'Inherited from the root domain',
          'Most sites — especially one brand serving several languages',
          'Cannot be geo-targeted independently at the domain level',
        ],
        [
          'Subdomain',
          'de.example.com',
          'Treated as a separate host',
          'Separate regional teams or separate hosting stacks',
          'Authority is split; more DNS, TLS and analytics overhead',
        ],
        [
          'Country-code TLD',
          'example.de',
          'Strongest single country signal',
          'Serious country-level commitment with local entity and support',
          'Every domain starts from zero; multiplied cost of maintenance',
        ],
        [
          'URL parameter',
          'example.com/?lang=de',
          'Weak and unreliable',
          'Nothing — avoid it',
          'Fragile, ugly, prone to duplicate-content problems',
        ],
      ],
    },
    {
      type: 'p',
      text: 'For the large majority of clients we recommend subdirectories on a single domain. One site to secure, one site to maintain, one pool of domain authority feeding every language, and one place to deploy. We reserve country-code domains for organisations that genuinely operate as separate businesses per market — a local entity, local support hours, local pricing and legal terms. If your German operation is simply your business with German copy, a ccTLD adds cost and dilutes strength for no gain.',
    },
    {
      type: 'h3',
      text: 'Translate the slugs, not just the content',
    },
    {
      type: 'p',
      text: 'If a German visitor searching for zahnarzt-marketing lands on example.com/de/dentist-marketing/, you have thrown away a relevance signal and a small amount of user trust. Localise the slug alongside the copy. This is trivial at build time and painful to retrofit, because every change afterwards requires a redirect you then have to maintain forever.',
    },

    { type: 'h2', text: 'hreflang: the part everybody gets wrong' },
    {
      type: 'p',
      text: 'hreflang tells search engines that two pages are the same content for different audiences. It is not a ranking factor in itself — it is a disambiguation mechanism. Implemented properly, it stops your English page from outranking your German page in Germany, and it stops the two from being read as duplicates. Implemented sloppily, it is ignored entirely.',
    },
    {
      type: 'p',
      text: 'You can declare it in the HTML head, in the XML sitemap, or in HTTP headers for non-HTML files such as PDFs. Pick one method and apply it consistently. On WordPress builds we usually let the translation plugin emit head tags and mirror the same set in the sitemap.',
    },
    {
      type: 'code',
      language: 'html',
      code: `<!-- On every version of the page, including the page itself -->
<link rel="alternate" hreflang="en" href="https://example.com/services/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/leistungen/" />
<link rel="alternate" hreflang="nl" href="https://example.com/nl/diensten/" />
<link rel="alternate" hreflang="he" href="https://example.com/he/sherutim/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/services/" />

<!-- Each version still points its canonical at itself, never at the original -->
<link rel="canonical" href="https://example.com/de/leistungen/" />`,
    },
    { type: 'h3', text: 'The five rules that break most implementations' },
    {
      type: 'ol',
      items: [
        'Annotations must be reciprocal. If the English page points at the German page, the German page must point back — and at every other language in the set. A one-way reference is discarded.',
        'Every page in the set must reference itself. Self-referencing hreflang is not optional; omit it and the cluster is incomplete.',
        'Use absolute URLs with the correct protocol and host. Relative paths and http:// leftovers are a common silent failure.',
        'Use valid codes: ISO 639-1 for language, optionally plus ISO 3166-1 alpha-2 for region — de, de-AT, en-GB. There is no "de-DE" requirement and there is no such thing as an "eu" or "uk" language code.',
        'Never point hreflang at a URL that redirects, 404s, or is blocked by robots.txt or a noindex tag. The target must be the live, indexable page.',
      ],
    },
    {
      type: 'callout',
      title: 'Do not auto-redirect visitors by IP address',
      text: 'Detecting a visitor’s country and forcing them into that locale is one of the most common multilingual mistakes. Crawlers frequently request from a single region, so they may never see your other languages, and real users travelling or working abroad get locked out of the language they read. Suggest the alternative with a dismissible banner and let the visitor choose — then remember that choice.',
    },

    { type: 'h2', text: 'Translation quality is a ranking factor in everything but name' },
    {
      type: 'p',
      text: 'Machine translation has become genuinely good, and we use it as a starting point on large content sets. What it cannot do is know how your market searches. A literal translation of your English page will faithfully reproduce your English keyword strategy in another language, which is almost never the strategy that wins there.',
    },
    { type: 'h3', text: 'Do keyword research per language, not per translation' },
    {
      type: 'p',
      text: 'Search behaviour differs by market in ways that never surface in a translation memory. German audiences search with long compound nouns. Dutch and Norwegian searchers frequently use English loanwords for technical products even when the surrounding sentence is not English. Hebrew queries are often shorter and more colloquial than their formal written equivalents. The right process is: research the target market’s terms first, then write the page around them, then check it against the source for factual consistency — not the other way round.',
    },
    {
      type: 'p',
      text: 'The same applies to everything around the copy. Titles and meta descriptions need to be written for each language, not truncated translations. Currency, date formats, phone number formats, address order, units and legal pages all change per market. On the German clinic and healthcare marketing sites we have built, regulatory language and the way credentials are presented had to be handled locally — that is not something a translation layer can infer.',
    },

    { type: 'h2', text: 'Right-to-left and non-Latin scripts change the build, not just the text' },
    {
      type: 'p',
      text: 'Hebrew and Arabic are where a translation-as-an-afterthought approach falls apart fastest. When we built a Hebrew e-learning platform delivering certification courses in real estate appraisal, mortgage advisory and business valuation, the RTL requirement touched the theme, the course catalogue, the navigation and the forms — not just the strings.',
    },
    {
      type: 'ul',
      items: [
        'Set dir="rtl" and the correct lang attribute on the html element for that locale, so the browser handles bidirectional text properly.',
        'Use CSS logical properties — margin-inline-start, padding-inline-end, inset-inline — instead of left and right, so one stylesheet serves both directions.',
        'Mirror directional icons: arrows, chevrons, progress indicators and breadcrumb separators all need flipping. Logos, clocks and media playback controls do not.',
        'Check that the typeface actually contains the script, and give RTL text its own line-height — Hebrew and Arabic glyphs sit differently from Latin ones.',
        'Test forms, tables and any third-party embed separately. Plugin output and payment widgets are the most common places where a left-to-right layout leaks through.',
        'Never mirror numbers, code samples, or Latin-script brand names that appear inside RTL sentences.',
      ],
    },
    {
      type: 'p',
      text: 'Budget real QA time for this. An RTL build is not a five per cent addition to a project — the layout work is closer to a second front-end pass.',
    },

    { type: 'h2', text: 'Keep performance and technical hygiene equal across locales' },
    {
      type: 'p',
      text: 'Translated pages are frequently slower than the originals, and nobody notices because nobody tests them. Extra plugin queries, unoptimised locale-specific images, a second web font loaded for a non-Latin script, and translation tables joined on every request all add up. Google’s Core Web Vitals thresholds apply per URL, so your German pages are judged on their own: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1.',
    },
    {
      type: 'ul',
      items: [
        'Run field and lab performance tests on at least one page per language, not only the English homepage.',
        'Preload only the font subsets a locale actually needs — do not ship Hebrew glyphs to Dutch visitors.',
        'Watch for text expansion: German copy commonly runs longer than English, which can push buttons, cards and navigation into wrapping or overflow.',
        'Make sure every locale is in the XML sitemap and that translated pages are not accidentally excluded by a noindex rule or a stale robots directive.',
        'Set up a Search Console property or filter per language so you can see indexing and query data separately.',
        'Localise structured data too — the name, description and offer fields in your JSON-LD should be in the page’s language.',
      ],
    },

    { type: 'h2', text: 'Choosing the WordPress translation stack' },
    {
      type: 'p',
      text: '42 of our 49 delivered projects are WordPress builds, so this is the decision we make most often. There is no universally correct answer; there is a correct answer for the size of your content set, your editorial workflow and your budget for ongoing maintenance.',
    },
    {
      type: 'table',
      headers: ['Approach', 'How it works', 'Strengths', 'Watch out for'],
      rows: [
        [
          'WPML',
          'Single site, translations stored alongside originals',
          'Mature, handles WooCommerce and custom fields, translation management workflow, strong RTL support',
          'Commercial licence; adds database queries — pair it with object caching',
        ],
        [
          'Polylang',
          'Single site, one post per language linked as a set',
          'Light, free core, clean permalinks, good for content-led sites',
          'E-commerce and string translation need paid add-ons; less workflow tooling',
        ],
        [
          'Multisite network',
          'One WordPress install, one site per language',
          'Complete separation of content, plugins and teams per market',
          'Duplicated maintenance and updates; hreflang must be wired up manually',
        ],
        [
          'Headless with a translation API',
          'Content served from an API to a Next.js or similar front end',
          'Total control over routing, performance and hreflang output',
          'Highest build cost; only worth it for large or unusual content models',
        ],
      ],
    },
    {
      type: 'p',
      text: 'For a marketing site or clinic site in two to four languages, Polylang or WPML on a single install is almost always the right call. For a WooCommerce store selling into several markets with different catalogues, currencies and tax rules, WPML earns its licence fee. Multisite is worth it when different markets are genuinely run by different people with different plugin needs — otherwise you have just tripled your update workload.',
    },

    { type: 'h2', text: 'A pre-launch checklist' },
    {
      type: 'p',
      text: 'Before a multilingual site goes live, we work through the following. It takes an afternoon and it catches the problems that would otherwise take months to show up in your analytics.',
    },
    {
      type: 'ol',
      items: [
        'Every translated page has its own static URL, and slugs are localised.',
        'hreflang is reciprocal, self-referencing, absolute and validated with a crawler across the whole site, not just a sample.',
        'Each page canonicalises to itself, never to the source language.',
        'The language switcher links to the equivalent page, not to the translated homepage.',
        'Navigation, footer, forms, error messages, cookie notice and email notifications are all translated — not just page bodies.',
        'Titles, meta descriptions, image alt text and structured data are localised.',
        'No IP-based forced redirects; any locale suggestion is dismissible and remembered.',
        'RTL locales have been reviewed page by page on mobile and desktop.',
        'Core Web Vitals checked on a representative page in every language.',
        'XML sitemap includes every locale, and Search Console is configured to report on each.',
      ],
    },

    { type: 'h2', text: 'How we approach multilingual builds at Tekvion' },
    {
      type: 'p',
      text: 'We start by mapping the content, not the languages. Which pages actually need to exist in each market, which are shared, and which are market-specific from the outset? Most clients arrive assuming a full mirror of the site in every language. Often the better answer is a complete core plus a small set of market-specific pages, which costs less to produce and far less to maintain.',
    },
    {
      type: 'p',
      text: 'From there we fix the architecture in writing before any content is produced: URL structure, the hreflang plan, the plugin or platform choice, and how translations will be maintained after launch. We build the English or source version first with the translation layer already installed, so nothing has to be restructured later. Layout is tested against the longest expected translation rather than the shortest, and any RTL locale gets its own front-end pass.',
    },
    {
      type: 'p',
      text: 'Then we hand over a workflow, not just a site. Whoever maintains your content needs to know what happens when a new page is published in one language — who translates it, where the hreflang comes from, and how to check it landed correctly. A multilingual site that nobody can update in every language degrades within a year. We document that process and, where clients prefer it, keep it running under a maintenance arrangement. Most of our clients stay with us for two years or more, and the multilingual builds are the ones where that continuity matters most.',
    },

    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'If you are planning a new multilingual site, the sequence is: decide the URL structure, choose the platform, then write the content — in that order. If you already have translated pages that are not ranking, start with a crawl that validates hreflang and canonical tags across the full site, because that is where the majority of the damage usually sits.',
    },
    {
      type: 'p',
      text: 'This work sits at the intersection of several of the things we do. Our SEO services cover the technical audit, hreflang validation and per-market keyword research. Our WordPress development and custom website development teams handle the build, the RTL front-end work and the translation stack. And if your existing site needs to move to a structure that can support multiple languages properly, our website migration and replatforming service exists to make that transition without losing the rankings you already have. Tell us which languages you need and which markets matter most, and we will tell you honestly what the build actually requires.',
    },
  ],
  relatedServiceSlugs: [
    'seo-services',
    'wordpress-development',
    'custom-website-development',
    'website-migration-replatforming',
  ],
  relatedPostSlugs: [
    'core-web-vitals-wordpress-guide',
    'website-redesign-checklist',
    'how-much-does-a-website-cost',
  ],
};
