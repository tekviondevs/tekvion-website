import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'how-much-does-a-website-cost',
  title: 'What a Website Really Costs in 2026',
  metaTitle: 'What a Website Really Costs in 2026',
  metaDescription:
    'What a website really costs in 2026: the factors that move the price, indicative budget bands, running costs after launch, and how to brief for fair quotes.',
  category: 'Business',
  tags: ['Website Cost', 'Budgeting', 'WordPress', 'Bubble.io', 'Project Planning'],
  publishedAt: '2026-04-15',
  readingMinutes: 9,
  authorSlug: 'jahanzaib-abid',
  excerpt:
    'A website is a range, not a price. Here is an honest breakdown of what moves the number in 2026 — scope, design, functionality, languages and upkeep — plus indicative budget bands and how to brief so quotes are actually comparable.',
  body: [
    {
      type: 'p',
      text: 'It is the first question almost every client asks us, and it is the hardest one to answer in a sentence. “How much does a website cost?” is a bit like asking how much a building costs. A studio flat and a hospital are both buildings. Both need foundations, wiring and a roof. Nobody expects them to carry the same price tag, yet website quotes ranging from a few hundred dollars to five figures are routinely compared as if they describe the same thing.',
    },
    {
      type: 'p',
      text: 'We have delivered 50+ projects — 42 on WordPress, 5 on Bubble.io, one hybrid WordPress-and-Bubble platform and one custom Next.js application — for clients across four continents, from a single Berlin day clinic landing page to a Hebrew, right-to-left e-learning platform and a UK flooring retailer supporting more than 220 showrooms. Looking back across all of them, the cost gap almost never came down to page count. It came down to decisions made in the first two weeks: how much of the design was bespoke, how much custom logic sat behind the pretty layer, how many languages had to be maintained, and who was writing the content.',
    },
    {
      type: 'p',
      text: 'So rather than give you a number that would be wrong for most readers, we will show you what you are actually paying for, the indicative bands we see in 2026, the running costs nobody mentions in the sales call, and how to write a brief that makes three quotes genuinely comparable.',
    },

    { type: 'h2', text: 'Why website pricing varies so wildly' },
    {
      type: 'p',
      text: 'A website price is a bundle of separate purchases sold as one line item. Two agencies can quote the same project and mean completely different things — one is selling a licensed template populated with your logo, the other is selling discovery, bespoke design, custom development, content structuring, technical SEO and a launch plan. Both are honest. They are simply not the same product.',
    },
    {
      type: 'p',
      text: 'The other reason for the spread is that a website has two price tags: what it costs to build, and what it costs to own. A cheap build that needs rescuing in eighteen months is more expensive than a considered build that runs for five years. We have inherited plenty of the former, and rebuilding is always dearer than building once.',
    },

    { type: 'h2', text: 'The six factors that move the number' },
    {
      type: 'p',
      text: 'When we scope a project, almost the entire estimate is driven by six variables. If you can answer these six honestly, you can predict roughly where your project will land before you speak to anyone.',
    },

    { type: 'h3', text: '1. Scope — unique templates, not pages' },
    {
      type: 'p',
      text: 'The unit of work is the template, not the page. A site with forty blog posts and a single post layout is cheaper than an eight-page site where every page is designed from scratch. When we quote, we count distinct layouts: home, service, case study, blog index, blog post, contact, and any one-off pages that refuse to fit a pattern.',
    },

    { type: 'h3', text: '2. Design — template, customised, or bespoke' },
    {
      type: 'p',
      text: 'This is usually the single biggest lever. A licensed theme configured to your brand is fast and cheap. A custom design system — typography ramp, colour roles, component library, motion rules, responsive behaviour designed rather than inherited — takes weeks and shows. Most of our brand-led work, like premium coaching sites, sits in the middle: bespoke where it earns attention, systematic everywhere else.',
    },

    { type: 'h3', text: '3. Functionality — the part you cannot see' },
    {
      type: 'p',
      text: 'Marketing pages are the affordable part. Cost accelerates the moment you need logic: e-commerce checkout and tax rules, membership tiers, course delivery, property or job listings with filters, booking calendars, quote calculators, dynamic PDF generation, CRM and payment integrations, or an LLM-backed feature. Each of those is a small product in its own right.',
    },

    { type: 'h3', text: '4. Content — the most underestimated line' },
    {
      type: 'p',
      text: 'Copy, photography, product data and migration of existing posts are real work. Projects stall on content far more often than on code. If you write the copy yourself, you save money and add calendar time; if we write it, the budget rises and the launch date holds. Neither is wrong — but decide up front, because an unanswered content question is the most common cause of a project drifting past its estimate.',
    },

    { type: 'h3', text: '5. Languages and regions' },
    {
      type: 'p',
      text: 'We have shipped sites in English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian. A second language is rarely a simple duplication: it adds translation management, hreflang and URL structure, localised forms and legal pages, and ongoing editorial overhead. Right-to-left languages such as Hebrew go further still, because the layout itself has to be mirrored and retested.',
    },

    { type: 'h3', text: '6. Performance, accessibility and SEO rigour' },
    {
      type: 'p',
      text: 'Building a site that passes Google’s Core Web Vitals thresholds — Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1 — plus keyboard-accessible navigation, sane heading hierarchy and structured data, is deliberate engineering work. It is also the difference between a site that ranks and a site that merely exists.',
    },

    { type: 'h2', text: 'Indicative budget bands for 2026' },
    {
      type: 'p',
      text: 'The table below reflects what agencies and studios around the mid-market typically charge for each type of project. These are market rates, not Tekvion prices — we do not publish a price list, because a figure detached from a brief is not information you can rely on. Treat the table as a map: a five-page site with a bespoke booking flow can cost more than a thirty-page brochure site. Figures are in US dollars and cover design and build only, excluding paid advertising, ongoing content production and third-party licences.',
    },
    {
      type: 'table',
      headers: ['Project type', 'What it usually includes', 'Indicative build cost', 'Typical timeline'],
      rows: [
        [
          'Single landing page',
          'One conversion-focused page, form, analytics, basic on-page SEO',
          '$600 – $1,500',
          '1 – 2 weeks',
        ],
        [
          'Small business site',
          '5 – 10 pages, customised theme, contact form, blog set-up',
          '$1,500 – $4,000',
          '3 – 5 weeks',
        ],
        [
          'Marketing / content site',
          '15 – 40 pages, custom design system, service architecture, blog, technical SEO',
          '$4,000 – $9,000',
          '5 – 8 weeks',
        ],
        [
          'E-commerce store',
          'WooCommerce or Shopify, catalogue set-up, payments, shipping and tax, checkout tuning',
          '$5,000 – $15,000',
          '6 – 12 weeks',
        ],
        [
          'Multilingual or multi-location',
          'Two or more languages, hreflang, localised forms, location or listing templates',
          '$8,000 – $20,000',
          '8 – 14 weeks',
        ],
        [
          'Custom web application',
          'Bubble.io or hybrid build: accounts, roles, database, workflows, integrations',
          '$10,000 – $40,000+',
          '10 – 20 weeks',
        ],
      ],
    },
    {
      type: 'callout',
      title: 'The cheapest quote is rarely the cheapest project',
      text: 'When one quote is a third of the others, the difference is almost always scope that has been quietly removed — content, revisions, testing, accessibility, SEO foundations or post-launch support. Ask what is excluded before you ask what is included. That single question tells you more than any portfolio.',
    },

    { type: 'h2', text: 'The costs that arrive after launch' },
    {
      type: 'p',
      text: 'A website is a running system, not a delivered file. Budgeting only for the build is the most common planning mistake we see, and it is the reason so many sites quietly decay. Here is what ownership realistically costs each year.',
    },
    {
      type: 'table',
      headers: ['Running cost', 'Typical annual range', 'Notes'],
      rows: [
        ['Domain registration', '$10 – $30', 'Renew early; expired domains are painful to recover'],
        ['Shared or entry hosting', '$60 – $250', 'Fine for brochure sites with modest traffic'],
        [
          'Managed WordPress hosting',
          '$350 – $1,200',
          'Staging, backups, CDN and real support — worth it for revenue-generating sites',
        ],
        ['SSL certificate', '$0', 'Free via Let’s Encrypt on virtually all modern hosts'],
        ['Premium plugins and licences', '$100 – $600', 'Forms, translation, SEO, booking, backups'],
        ['No-code platform plan', '$350 – $2,000+', 'Bubble.io and similar, scaling with usage'],
        ['Maintenance and support', '$600 – $3,600', 'Updates, monitoring, backups, small fixes'],
      ],
    },
    {
      type: 'p',
      text: 'The maintenance line is the one people try to cut first and regret fastest. Unpatched plugins are the leading route into a WordPress site, and a malware clean-up plus reputation recovery costs far more than a year of sensible upkeep.',
    },

    { type: 'h2', text: 'Where budgets actually get wasted' },
    {
      type: 'p',
      text: 'In our experience the money that disappears from a web project is rarely spent on development. It is lost to avoidable churn:',
    },
    {
      type: 'ul',
      items: [
        'Starting design before the content strategy exists, so every page is redrawn once the real copy arrives.',
        'Buying features for a hypothetical future — a members area, a shop, a multi-language rollout — that nobody uses in year one.',
        'Approving work through a committee with no single decision-maker, which turns two revision rounds into six.',
        'Choosing a platform because it is familiar rather than because it fits the logic the business actually needs.',
        'Skipping analytics and event tracking, then having no evidence for what to improve next.',
        'Rebuilding from scratch when a targeted redesign of the templates that convert would have done the job.',
      ],
    },

    { type: 'h2', text: 'Platform choice changes the maths' },
    {
      type: 'p',
      text: 'The stack you choose sets both the build cost and the shape of your running costs. We work in two, and we recommend against our own convenience when the fit is wrong.',
    },
    {
      type: 'p',
      text: 'WordPress remains the most economical route for content sites, service businesses, multi-location operators and most e-commerce. Editors can maintain it, hosting is competitive, and the plugin ecosystem removes whole categories of custom work — which is why 42 of our 50 builds run on it. Bubble.io earns its higher build cost when the product is the logic: accounts, roles, dashboards, marketplaces, document generation, AI features. We have used it for an on-demand research platform with a graph-based data display, an adaptive LLM-driven mock-interview product, and an AI image suite for professional tattoo artists — none of which would have been sensible as WordPress builds.',
    },
    {
      type: 'p',
      text: 'The hybrid option is frequently the cheapest total. Two of our products pair a fast marketing site with a Bubble.io application on an app subdomain, so the pages that need SEO and speed are built for SEO and speed, and the product back-end can be iterated weekly without touching them.',
    },

    { type: 'h2', text: 'How to brief a project so quotes are comparable' },
    {
      type: 'p',
      text: 'If you send three agencies a one-line email, you will receive three unrelated numbers and learn nothing. Send the same structured brief to all three and the differences become meaningful. This is the shape we ask clients for:',
    },
    {
      type: 'ol',
      items: [
        'The commercial goal — enquiries, online sales, bookings, applications — and roughly what one of them is worth to you.',
        'A sitemap, even a rough one, marking which pages are unique layouts and which repeat.',
        'Every function that is not a static page: forms, payments, logins, bookings, filters, calculators, integrations.',
        'Who is writing the copy and supplying images, and by when.',
        'Languages required at launch, and languages planned later.',
        'Anything that must migrate: existing posts, product data, URLs and their redirects.',
        'Your realistic budget range and your immovable deadline, if you have one.',
      ],
    },
    {
      type: 'p',
      text: 'It helps to put that in a single structured block that every quoting party sees identically. Something as simple as this is enough:',
    },
    {
      type: 'code',
      language: 'yaml',
      code: `project: Clinic website rebuild
goal: Increase appointment enquiries from organic search
templates:
  unique: [home, service, team, contact, blog-index, blog-post]
  repeating: 12 service pages, ~30 blog posts
functionality:
  - appointment enquiry form with file upload
  - clinician directory filtered by specialism
  - Google Analytics 4 + conversion events
content:
  copy: client-supplied for 8 pages, agency for 4
  images: licensed stock, no shoot
languages: [de, en]
migration:
  posts: 34 existing articles + 301 redirect map
constraints:
  budget: 6000-9000 USD
  launch: before end of Q3`,
    },
    {
      type: 'p',
      text: 'Every quote you receive against that brief is answering the same question. Where they diverge, you now know exactly why.',
    },

    { type: 'h2', text: 'How we approach pricing at Tekvion' },
    {
      type: 'p',
      text: 'We quote fixed price against a written scope, because clients budget in fixed numbers and hourly estimates transfer all the risk to the person who understands the project least. To get there, we run a short discovery first: goals, sitemap, functionality, content ownership and the platform decision. That conversation is free, and it is the part that makes the number reliable.',
    },
    {
      type: 'p',
      text: 'Three principles shape every estimate we send. First, we scope in phases — if the budget will not cover everything, we ship the pages that earn revenue and schedule the rest, rather than thinning the quality of the whole. Second, we tell you when a cheaper stack will do the job; recommending Bubble.io for a brochure site would be good for our invoice and bad for your running costs. Third, the quote states what is excluded as plainly as what is included, so there are no mid-project surprises about revisions, testing or migration.',
    },
    {
      type: 'p',
      text: 'We also price maintenance separately and openly rather than folding it into the build. Most of our clients stay with us for two years or more, and that only works if the ongoing arrangement is worth renewing on its own merits.',
    },

    { type: 'h2', text: 'Where to go from here' },
    {
      type: 'p',
      text: 'The useful version of “how much does a website cost” is “what is the smallest, best-built thing that moves my business this year, and what does it cost to keep running?” Answer that, and the budget follows logically instead of being negotiated in the dark.',
    },
    {
      type: 'p',
      text: 'If you are starting fresh, our custom website development and website design work is where most projects begin — bespoke design, a proper content structure and technical SEO built in from the first template. If you are selling online, our e-commerce development service covers the catalogue, checkout and payment work that dominates those budgets. And whatever you build, plan for the second price tag: our website maintenance and support arrangements keep the thing you paid for from quietly falling apart. Send us your sitemap and your budget range, and we will tell you honestly whether the two fit.',
    },
  ],
  relatedServiceSlugs: [
    'custom-website-development',
    'website-design',
    'ecommerce-development',
    'website-maintenance-support',
  ],
  relatedPostSlugs: [
    'wordpress-vs-bubble-io-which-to-choose',
    'website-redesign-checklist',
    'website-maintenance-guide',
  ],
};
