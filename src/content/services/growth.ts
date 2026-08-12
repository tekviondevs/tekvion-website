import type { Service } from '@/content/types';

/**
 * Growth & Optimisation services.
 *
 * Everything here is grounded in work Tekvion has actually delivered: SEO-aware
 * builds for marketing agencies (Mediseo, Magnific Media), multilingual sites
 * across eight languages, WooCommerce stores, and lead-generation sites for
 * multi-location service businesses.
 */
export const growthServices: Service[] = [
  {
    slug: 'seo-services',
    title: 'SEO Services',
    category: 'Growth & Optimisation',
    icon: 'search',
    short:
      'Technical and on-page SEO that gets your pages crawled, indexed, ranked and clicked by people ready to buy.',
    metaTitle: 'SEO Services for WordPress & Business Websites',
    metaDescription:
      'Technical SEO, on-page optimisation and internal linking for WordPress and WooCommerce sites. We fix what blocks rankings and build pages that earn traffic.',
    heroTitle: 'SEO Services That Turn Search Traffic Into Enquiries',
    heroIntro:
      'Most sites do not rank badly because of one missing keyword. They rank badly because of thin templates, broken internal linking, slow pages, duplicate URLs and content written for nobody in particular. We audit the whole picture, fix the technical foundations first, then rebuild your page structure and content around the searches your buyers actually type. We have built SEO-aware sites for marketing agencies themselves, including Mediseo in Germany and Magnific Media, so we know what an SEO team expects from a developer.',
    whatYouGet: [
      {
        title: 'Full technical SEO audit',
        description:
          'A crawl of every URL on your site checked against indexability, canonical logic, redirect chains, orphan pages, duplicate parameters, XML sitemap accuracy and robots rules. You get a prioritised fix list with the estimated impact and effort of each item, not a 90-page automated PDF.',
      },
      {
        title: 'Keyword and search-intent mapping',
        description:
          'We map every commercial, comparison and informational query in your niche to a single target URL so your own pages stop competing with each other. Each page gets one primary keyword, a supporting cluster, and a defined job: rank, convert, or support the pages that do.',
      },
      {
        title: 'On-page optimisation across templates',
        description:
          'Titles, meta descriptions, H1 through H3 hierarchy, image alt text, anchor copy and above-the-fold framing rewritten page by page. Where a template drives hundreds of URLs, such as a product or location template, we fix the template so every page inherits the improvement at once.',
      },
      {
        title: 'Site architecture and internal linking',
        description:
          'We rebuild navigation, breadcrumbs, hub pages and contextual links so authority flows to the pages that earn revenue. Deep pages stop sitting four clicks from the homepage, related services link to each other, and every case study points back at the service it demonstrates.',
      },
      {
        title: 'Structured data and rich results',
        description:
          'Valid JSON-LD for Organization, LocalBusiness, Service, Product, Article, FAQPage and BreadcrumbList, implemented in the theme rather than bolted on by a plugin. Everything is validated in the Rich Results Test so you qualify for the enhanced listings your competitors are already showing.',
      },
      {
        title: 'International and multilingual SEO',
        description:
          'We have shipped sites in English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian, including right-to-left Hebrew layouts. That means correct hreflang clusters, per-language URL structures, translated metadata and slugs, and language-aware sitemaps rather than a machine-translation widget.',
      },
      {
        title: 'Local and multi-location SEO',
        description:
          'For businesses with branches, showrooms or service areas we build genuinely distinct location pages, consistent NAP data, store-locator markup and Google Business Profile alignment. We built this pattern for UK multi-site retail and self-storage operators with sites across several regions.',
      },
    ],
    process: [
      {
        title: 'Crawl, baseline and competitor gap',
        description:
          'We crawl the site, pull twelve months of Search Console and analytics data, and benchmark your visible keyword set against three named competitors. The output is a written baseline so every later change can be measured against a real starting point rather than a feeling.',
      },
      {
        title: 'Keyword and URL map',
        description:
          'We produce a spreadsheet mapping every target query to one URL, flagging cannibalisation, gaps that need a new page, and pages that should be merged or redirected. You approve this map before a single line of copy or code changes.',
      },
      {
        title: 'Technical remediation',
        description:
          'We implement the fix list in a staging environment: redirects, canonicals, sitemap and robots corrections, schema, heading hierarchy, crawl-budget waste, and any Core Web Vitals blockers. Everything is verified on staging, then released in a single controlled deployment.',
      },
      {
        title: 'On-page and content rollout',
        description:
          'Templates and priority pages are rewritten against the keyword map, with new hub pages or location pages built where the map calls for them. We supply content briefs so your own writers can extend the system without breaking it.',
      },
      {
        title: 'Measure, report and iterate',
        description:
          'We track indexation, impressions, average position and landing-page entrances in Search Console and GA4, and report monthly on movement per page cluster. Each report ends with the next three actions, so the work compounds instead of stalling after launch.',
      },
    ],
    deliverables: [
      'Technical SEO audit with a prioritised, effort-scored fix list',
      'Keyword-to-URL map covering every indexable page',
      'Rewritten title tags, meta descriptions and heading structure',
      'Implemented JSON-LD schema, validated in the Rich Results Test',
      'Corrected XML sitemap, robots.txt and canonical logic',
      'Redirect map for any merged, removed or restructured URLs',
      'Internal linking plan plus the links implemented in your CMS',
      'Content briefs for the new or rewritten pages in the plan',
      'Search Console and GA4 reporting view with a monthly commentary',
    ],
    techStack: [
      'WordPress',
      'Rank Math',
      'Yoast SEO',
      'WPML',
      'ACF',
      'WooCommerce',
      'Screaming Frog',
      'Google Search Console',
      'GA4',
      'GTM',
      'Ahrefs',
      'Lighthouse',
      'Schema.org JSON-LD',
      'Cloudflare',
    ],
    idealFor: [
      'Your site was rebuilt or migrated and traffic dropped afterwards',
      'You rank for your brand name but almost nothing else',
      'Several of your pages target the same keyword and none of them win',
      'You are expanding into a second language or a second country',
      'You run multiple locations and need pages that do not read as duplicates',
      'An SEO agency has given you a fix list and you need a developer to execute it',
    ],
    faqs: [
      {
        question: 'How long before we see results from SEO?',
        answer:
          'Technical fixes such as indexation errors, broken canonicals and redirect chains can show movement within two to four weeks because you are removing blockers rather than building authority. Ranking gains from new or rewritten content typically appear across three to six months, and competitive commercial terms take longer. We report monthly so you can see impressions and average position moving well before revenue does.',
      },
      {
        question: 'Do you write the content as well, or only fix the technical side?',
        answer:
          'Both, depending on what you need. Some clients want the full package: audit, fixes, keyword map and written pages. Others have an in-house writer or an SEO agency and want us purely as the development team that implements the plan correctly. We are comfortable in either role and have delivered SEO-aware builds directly for marketing agencies who then run their own content programme on top.',
      },
      {
        question: 'Will I need to rebuild my website to improve rankings?',
        answer:
          'Usually not. Most WordPress sites can be fixed in place: template corrections, schema, internal linking, speed work and content changes. A rebuild is only worth recommending when the theme or page builder generates unfixable markup, the site is on an abandoned platform, or the URL structure is so tangled that repairing it costs more than replacing it. We tell you which situation you are in during the audit.',
      },
      {
        question: 'Can you handle SEO for a site in another language?',
        answer:
          'Yes. We have shipped sites in eight languages including German, French, Italian, Polish, Dutch, Norwegian and right-to-left Hebrew. Multilingual SEO means translated slugs and metadata, correct hreflang clusters that reference each other in both directions, language-specific sitemaps and locale-aware structured data. Translation plugins alone do not achieve this, which is why multilingual sites so often rank in one language only.',
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer:
          'No, and you should be wary of anyone who does. Nobody controls Google rankings. What we do control is whether your pages are crawlable, fast, correctly structured, properly linked and genuinely more useful than the results currently ranking. We commit to the work and the reporting, and we tell you honestly when a keyword is not realistically winnable with the budget available.',
      },
      {
        question: 'What happens after the initial project ends?',
        answer:
          'Search results change constantly, so most clients move onto a monthly retainer covering content production, new page builds, internal linking upkeep, Search Console monitoring and reporting. You are not obliged to. If you prefer to take it in house we hand over the keyword map, the reporting view and documentation of every convention we used so your team can continue without us.',
      },
    ],
    relatedProjectSlugs: ['mediseo', 'ronival', 'lock-stock', 'afik'],
    relatedServiceSlugs: [
      'website-speed-optimisation',
      'conversion-rate-optimisation',
      'website-redesign',
      'wordpress-development',
    ],
  },

  {
    slug: 'website-speed-optimisation',
    title: 'Website Speed Optimisation',
    category: 'Growth & Optimisation',
    icon: 'gauge',
    short:
      'We make slow sites fast, fixing Core Web Vitals at the hosting, template and asset layers rather than installing another cache plugin.',
    metaTitle: 'Website Speed Optimisation & Core Web Vitals',
    metaDescription:
      'Fix slow WordPress and WooCommerce sites for good. We tune hosting, templates, scripts and images so your pages pass Core Web Vitals on real mobile devices.',
    heroTitle: 'Website Speed Optimisation That Passes Core Web Vitals',
    heroIntro:
      'A cache plugin hides a slow site; it does not fix one. Real speed work means finding the bloated page-builder markup, the render-blocking third-party script, the unindexed database query and the 2MB hero image that are actually costing you seconds. We profile your site on real mobile hardware, fix the causes in order of impact, and leave you with guardrails so the gains survive your next round of content edits.',
    whatYouGet: [
      {
        title: 'Real-device performance profiling',
        description:
          'We measure with Lighthouse, WebPageTest and your own Search Console field data on throttled mobile connections, not just a desktop score. You see which of LCP, INP and CLS is failing, on which templates, and which specific resource is responsible for each failure.',
      },
      {
        title: 'Hosting and server-layer tuning',
        description:
          'PHP version and worker configuration, object caching, full-page caching rules, GZIP or Brotli compression, HTTP/2 and TTFB reduction. We work daily with Kinsta, Hostinger and Cloudflare, and will tell you plainly when the hosting itself is the ceiling on your performance.',
      },
      {
        title: 'Critical render path optimisation',
        description:
          'We defer or inline what belongs where: critical CSS above the fold, deferred non-critical stylesheets, delayed third-party scripts, preconnect and preload hints for genuinely blocking resources, and self-hosted fonts with sensible display settings to stop invisible-text flashes.',
      },
      {
        title: 'Image and media overhaul',
        description:
          'Bulk conversion to WebP or AVIF, correct responsive srcset sizes per breakpoint, explicit width and height attributes to eliminate layout shift, lazy loading below the fold, eager loading for the LCP image, and video embeds replaced with click-to-load facades.',
      },
      {
        title: 'Plugin, theme and database audit',
        description:
          'We profile which plugins load assets on pages that do not need them, find slow or repeated database queries with Query Monitor, remove abandoned plugins, clean post revisions and expired transients, and add indexes where a large WooCommerce catalogue needs them.',
      },
      {
        title: 'Page-builder markup cleanup',
        description:
          'Breakdance and Elementor can output deeply nested wrappers and duplicate stylesheets. We rebuild the worst offending templates with flatter markup and shared styles, keeping your editing experience intact while removing the DOM weight that slows every page on the site.',
      },
      {
        title: 'Guardrails and handover',
        description:
          'You receive documented rules for image sizes, script additions and plugin approvals, plus a lightweight monitoring setup so a regression is caught in days rather than at the next annual review. Speed is only useful if it holds after we leave.',
      },
    ],
    process: [
      {
        title: 'Baseline and diagnosis',
        description:
          'We benchmark your key templates, home, service, product, blog and checkout, against lab and field data, then produce a written diagnosis naming each bottleneck and its cost in milliseconds. No work starts until we can point at the specific causes.',
      },
      {
        title: 'Staging clone and quick wins',
        description:
          'Everything is done on a staging copy first. We apply the server, caching, compression and image-layer wins that carry the least risk, remeasure, and confirm the gain before touching templates or code where a regression could break layout.',
      },
      {
        title: 'Deep template and code work',
        description:
          'We then take on the harder items: critical CSS, script deferral, page-builder markup, query optimisation and database cleanup. Each change is measured on its own so we know exactly what earned the improvement and can roll back anything that did not.',
      },
      {
        title: 'Cross-device verification',
        description:
          'Every optimised template is checked on mobile, tablet and desktop, in Chrome, Safari and Firefox, with forms, filters, carts and interactive elements exercised. Fast and broken is worse than slow and working, so functional verification is a gate before release.',
      },
      {
        title: 'Deploy, monitor and document',
        description:
          'We release to production during a low-traffic window, remeasure the same templates live, then hand over a before-and-after report, the maintenance rules and monitoring. We recheck field data after four weeks once Search Console has enough real-user samples.',
      },
    ],
    deliverables: [
      'Before-and-after Lighthouse and WebPageTest reports for every key template',
      'Written diagnosis naming each bottleneck and its measured cost',
      'Configured caching, compression and CDN rules',
      'Converted, resized and correctly attributed image library',
      'Optimised critical CSS and a documented script loading strategy',
      'Plugin audit with removal and replacement recommendations',
      'Database cleanup and index report',
      'Performance maintenance rules for your content team',
      'Core Web Vitals monitoring view in Search Console',
    ],
    techStack: [
      'WordPress',
      'WooCommerce',
      'Breakdance',
      'Elementor',
      'PHP',
      'Lighthouse',
      'WebPageTest',
      'PageSpeed Insights',
      'Query Monitor',
      'Cloudflare',
      'Kinsta',
      'Hostinger',
      'WP Rocket',
      'Redis object cache',
      'Next.js',
    ],
    idealFor: [
      'Search Console reports your URLs as failing Core Web Vitals',
      'Your site scores well on desktop but poorly on mobile',
      'Traffic arrives but visitors leave before the page finishes loading',
      'Your WooCommerce catalogue, filters or cart have become sluggish',
      'Years of plugin additions have accumulated with nothing removed',
      'You are about to spend on ads and do not want to pay for bounced clicks',
    ],
    faqs: [
      {
        question: 'How fast can my site realistically get?',
        answer:
          'It depends on your starting point and your constraints. A typical WordPress marketing site loaded with plugins can usually reach a passing Core Web Vitals grade and a large mobile improvement in largest contentful paint. Sites carrying heavy third-party tools such as chat widgets, ad pixels and booking embeds have a lower ceiling, because we can defer those scripts but cannot delete revenue-critical functionality. We give you a realistic target after the diagnosis, not before.',
      },
      {
        question: 'Will speed work break my site design?',
        answer:
          'Not if it is done properly. Everything happens on a staging clone first, each change is measured and verified independently, and every template is exercised across browsers and devices before release. The genuine risk area is aggressive CSS and JavaScript deferral, which is exactly why we test interactive elements such as sliders, filters, forms and carts as a release gate rather than an afterthought.',
      },
      {
        question: 'Is a caching plugin not enough on its own?',
        answer:
          'A cache plugin helps time to first byte for repeat visitors, which is worth having, but it does nothing about a 2MB hero image, a page builder producing thousands of DOM nodes, four separate icon-font libraries, or a chat widget loading 400KB of JavaScript before your content renders. Those are the things Core Web Vitals actually measures, and they are the reason so many well-cached sites still fail.',
      },
      {
        question: 'Does site speed genuinely affect rankings?',
        answer:
          'Core Web Vitals are a confirmed ranking signal, though a modest one compared with relevance and authority. The bigger commercial effect is behavioural: slow pages lose visitors before they see your offer, and that shows up in bounce, conversion and ad cost per acquisition. We treat speed as a conversion and cost problem first, and a ranking tiebreaker second.',
      },
      {
        question: 'Do you also handle the hosting migration if my host is the problem?',
        answer:
          'Yes. Sometimes the honest answer after profiling is that no amount of front-end work overcomes an oversold shared server. In that case we quote the migration separately, move the site to Kinsta, Hostinger or a comparable environment with staging, backups and object caching, and verify performance on the new stack before pointing DNS. You keep full ownership of the hosting account throughout.',
      },
    ],
    relatedProjectSlugs: ['tapi', 'wegets', 'loofys', 'mediseo'],
    relatedServiceSlugs: [
      'seo-services',
      'website-maintenance-support',
      'web-hosting-devops',
      'ecommerce-development',
    ],
  },

  {
    slug: 'conversion-rate-optimisation',
    title: 'Conversion Rate Optimisation',
    category: 'Growth & Optimisation',
    icon: 'target',
    short:
      'We find where visitors abandon your site and rebuild those steps so more of the traffic you already pay for becomes enquiries and orders.',
    metaTitle: 'Conversion Rate Optimisation (CRO) Services',
    metaDescription:
      'Turn the traffic you already pay for into enquiries and sales. We analyse drop-off, rewrite the offer, rebuild key pages and test against real behaviour.',
    heroTitle: 'Conversion Rate Optimisation That Grows Revenue Without More Traffic',
    heroIntro:
      'Doubling your traffic is expensive. Doubling the share of visitors who actually enquire is usually cheaper, faster and permanent. We instrument your site so you can see exactly where people hesitate and leave, then redesign those specific moments: the offer above the fold, the form that asks too much, the pricing page that answers the wrong question, the checkout that surprises people with shipping. Every change is measured against a defined conversion event, so you know what worked.',
    whatYouGet: [
      {
        title: 'Conversion audit of your key journeys',
        description:
          'We walk your top three revenue paths, such as ad landing page to enquiry or category to checkout, as a first-time visitor on a phone. Every point of friction, ambiguity, unanswered objection and unnecessary click is logged with a screenshot and a specific recommendation.',
      },
      {
        title: 'Behavioural data, not opinions',
        description:
          'Scroll depth, rage clicks, dead clicks, session recordings and funnel drop-off configured in GA4 and Microsoft Clarity. Instead of arguing about button colours we look at where 60 percent of users stop scrolling, and what the last thing they saw was.',
      },
      {
        title: 'Offer and messaging rewrite',
        description:
          'Most conversion problems are clarity problems. We rewrite hero propositions, proof sections, pricing framing and calls to action so a visitor understands what you do, who it is for, what it costs and what happens next, within the first screen of the page.',
      },
      {
        title: 'Form and checkout redesign',
        description:
          'We reduce fields to what you genuinely act on, add inline validation and sensible input types, break long briefs into progressive steps, surface delivery costs early, and remove the dead ends that leave people staring at an error they cannot resolve.',
      },
      {
        title: 'Trust and objection handling',
        description:
          'Real credentials, real client names, guarantees, response times, security and returns information placed at the exact point of hesitation rather than buried on an About page. We only ever use verifiable proof, never invented testimonials or fabricated statistics.',
      },
      {
        title: 'Structured testing and measurement',
        description:
          'Each change is deployed against a defined primary conversion event with a stated hypothesis. Where traffic supports a split test we run one; where it does not, we run sequential before-and-after measurement over matched periods and say honestly how confident the result is.',
      },
    ],
    process: [
      {
        title: 'Define the conversion that matters',
        description:
          'We agree the single primary event, such as a qualified enquiry, booked call or completed order, plus supporting micro-conversions. Without this, every later claim of improvement is unfalsifiable. We check your current tracking actually records it correctly before proceeding.',
      },
      {
        title: 'Instrument and observe',
        description:
          'We configure GA4 events, funnels and Clarity recordings, then collect at least two to four weeks of behaviour depending on your traffic volume. Alongside the data we run our own heuristic walkthrough of each journey on mobile and desktop.',
      },
      {
        title: 'Prioritise the fix list',
        description:
          'Findings are scored by expected impact, confidence in the evidence and implementation effort. You get a ranked backlog rather than fifty equally weighted suggestions, so the first release addresses the drop-off that is costing the most money.',
      },
      {
        title: 'Build and release in increments',
        description:
          'We implement changes in small batches in your CMS, whether that is WordPress with Breakdance or Elementor, WooCommerce, or a Bubble.io application, and release them in a controlled order so results stay attributable to specific changes.',
      },
      {
        title: 'Measure, keep, discard, repeat',
        description:
          'After each release we compare against baseline, keep what wins, roll back what does not and document why. CRO is a loop, not a project, and the documented log of what has already been tried is one of the more valuable things you keep.',
      },
    ],
    deliverables: [
      'Conversion audit document with annotated screenshots per journey',
      'Configured GA4 conversion events, funnels and Clarity recordings',
      'Prioritised fix backlog scored by impact, confidence and effort',
      'Rewritten hero, offer, proof and call-to-action copy for key pages',
      'Rebuilt forms, enquiry flows or checkout steps',
      'Test plan with hypotheses and defined success criteria per change',
      'Before-and-after performance report per release',
      'Running log of tests, results and decisions',
    ],
    techStack: [
      'GA4',
      'GTM',
      'Microsoft Clarity',
      'Hotjar',
      'Looker Studio',
      'WordPress',
      'Breakdance',
      'Elementor',
      'WooCommerce',
      'Bubble.io',
      'Figma',
    ],
    idealFor: [
      'You are paying for traffic that arrives but rarely converts',
      'Your enquiry form is seen far more often than it is submitted',
      'Cart abandonment is high and you do not know at which step',
      'Sales says the leads you do get are poorly qualified',
      'You have redesigned on instinct before and results did not move',
      'You want more revenue without increasing the advertising budget',
    ],
    faqs: [
      {
        question: 'How much traffic do I need before CRO is worth doing?',
        answer:
          'For statistically valid split testing you generally want several hundred conversions a month, which most small business sites do not have. That does not make CRO pointless below that threshold. At lower volumes we rely on session recordings, funnel drop-off, heuristic review and sequential before-and-after measurement over matched periods, and we are explicit about how confident any given result is rather than dressing up noise as a win.',
      },
      {
        question: 'What conversion rate should I be aiming for?',
        answer:
          'Benchmarks vary enormously by industry, price point and traffic source, so a single target number is usually misleading. Branded search converts far better than cold display traffic, and a fifteen thousand pound service enquiry behaves nothing like a twenty pound checkout. We set your target against your own historic baseline segmented by channel, which is the only comparison that tells you whether the work is actually paying for itself.',
      },
      {
        question: 'Do you redesign the whole site or just specific pages?',
        answer:
          'We start with the specific pages and steps where the data shows money leaking, usually landing pages, the enquiry form and the checkout. That is faster, cheaper and gives cleaner attribution than a full rebuild. If the audit shows the underlying template, navigation or information architecture is the root cause, we will say so and quote a redesign separately rather than patching around it indefinitely.',
      },
      {
        question: 'Can you improve conversion on a Bubble.io application?',
        answer:
          'Yes. We have built seven Bubble.io products including AI tools and marketplace admin platforms, so we can work directly inside the application on signup flows, onboarding steps, pricing pages, empty states and activation prompts. For SaaS the meaningful conversion is usually activation or trial-to-paid rather than a form submission, so we instrument and optimise against that instead.',
      },
      {
        question: 'How long does a CRO engagement take?',
        answer:
          'The audit and instrumentation phase takes roughly two to three weeks, including the observation window needed to collect meaningful behavioural data. The first build release follows within another two to three weeks. After that most clients continue in monthly cycles, because conversion work compounds: each release teaches you something about your audience that improves the accuracy of the next one.',
      },
    ],
    relatedProjectSlugs: ['wegets', 'in-harmony-education', 'your-brain-coach-d', 'lock-stock'],
    relatedServiceSlugs: [
      'landing-page-development',
      'analytics-tracking-setup',
      'ui-ux-design',
      'ecommerce-development',
    ],
  },

  {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    category: 'Growth & Optimisation',
    icon: 'layout-dashboard',
    short:
      'Fast, single-purpose landing pages built for a specific campaign, audience and offer, with tracking wired in from day one.',
    metaTitle: 'Landing Page Development for Campaigns & Ads',
    metaDescription:
      'High-converting landing pages built for ad campaigns, launches and lead generation. Fast, mobile-first, tracked end to end and editable by your own team.',
    heroTitle: 'Landing Page Development Built Around One Offer and One Action',
    heroIntro:
      'Sending paid traffic to your homepage wastes it. A homepage serves everyone; a landing page serves one audience arriving from one advert with one question in mind. We build focused pages that answer that question, remove every competing exit and make the next step obvious, then wire tracking in so you can see cost per lead per campaign rather than guessing. We have built program launch pages for coaching brands, pre-launch waitlist pages and SaaS marketing landings that hand off to a separate application.',
    whatYouGet: [
      {
        title: 'Message-matched campaign pages',
        description:
          'The headline continues the promise made in the advert or email that sent the visitor. We build a page per audience or offer where the campaign justifies it, so cold prospecting traffic and warm retargeting traffic each get the argument they actually need.',
      },
      {
        title: 'A single-purpose layout',
        description:
          'No competing navigation, no site-wide menu pulling attention away, no eight different calls to action. One offer, one primary action, repeated at the natural decision points down the page, with supporting proof and objection handling positioned between them.',
      },
      {
        title: 'Conversion-focused copy structure',
        description:
          'We structure hero, problem, solution, proof, how it works, pricing or offer terms, frequently asked objections and a closing call to action. You supply the domain knowledge and we shape it into a page that reads as a persuasive argument rather than a brochure.',
      },
      {
        title: 'Forms that people finish',
        description:
          'Short forms asking only what you will genuinely use, with inline validation, sensible mobile keyboards, progressive multi-step layouts for longer briefs, spam protection, and a real success state plus autoresponder rather than a blank page after submit.',
      },
      {
        title: 'Speed as a design constraint',
        description:
          'Landing pages carry the most expensive traffic on your site, so they get the tightest performance budget: optimised hero media, minimal scripts, deferred third-party tags and no page-builder bloat. Slow landing pages inflate your cost per acquisition on every single click.',
      },
      {
        title: 'Tracking and lead routing wired in',
        description:
          'GA4 conversion events, GTM triggers, ad platform conversion tags with UTM preservation, and submissions routed to your inbox, CRM or spreadsheet. You can attribute leads back to campaign and creative from the first day the page is live.',
      },
      {
        title: 'A reusable template system',
        description:
          'We build the page as a reusable block system in Breakdance or Elementor so your team can spin up the next variant without a developer. Sections are documented, styles are shared, and duplicating a page does not duplicate the maintenance burden.',
      },
    ],
    process: [
      {
        title: 'Offer and audience workshop',
        description:
          'A working session to pin down who the page is for, where they are arriving from, what they already believe, what objection stops them and what single action counts as success. Most weak landing pages fail here rather than in design.',
      },
      {
        title: 'Wireframe and copy structure',
        description:
          'We produce a section-by-section wireframe with the argument written out in draft before any visual design. Approving the structure and the words first means design decisions serve the message instead of decorating a page nobody has stress-tested.',
      },
      {
        title: 'Design and build',
        description:
          'The page is designed in Figma or built directly in Breakdance depending on how bespoke the visual treatment needs to be, then built mobile-first with real content. Where a variant is needed for a second audience we build it from the same block system.',
      },
      {
        title: 'Tracking, testing and QA',
        description:
          'We configure GA4 and GTM, fire test submissions through the full path to your inbox or CRM, verify UTM parameters survive the form, and check rendering and form behaviour across mobile, tablet and desktop browsers before anything goes live.',
      },
      {
        title: 'Launch and post-campaign review',
        description:
          'We release the page, confirm conversions are recording correctly against live traffic, and review performance with you after the first campaign window with specific recommendations for the next iteration or the next variant.',
      },
    ],
    deliverables: [
      'Live landing page, or a set of variants, on your domain',
      'Section-by-section wireframe and approved copy structure',
      'Mobile, tablet and desktop layouts verified across browsers',
      'Working form with validation, spam protection and success state',
      'Autoresponder or notification email routing to inbox or CRM',
      'GA4 and GTM conversion tracking with UTM preservation',
      'Reusable block template so your team can build the next page',
      'Editing guide covering how to duplicate and change sections safely',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'Elementor',
      'ACF',
      'Next.js',
      'React',
      'Figma',
      'GA4',
      'GTM',
      'Mailchimp',
      'Zapier',
      'Cloudflare',
    ],
    idealFor: [
      'You are about to run paid ads and have nowhere purpose-built to send them',
      'Your campaign traffic currently lands on a general homepage',
      'You are launching a product, course or program on a fixed date',
      'You need a waitlist or pre-launch capture page quickly',
      'You want a separate page per audience segment or per advert',
      'Your current landing page loads slowly and inflates your cost per lead',
    ],
    faqs: [
      {
        question: 'How quickly can a landing page be live?',
        answer:
          'A single page built on your existing site styling, with copy you supply, is typically live within five to seven working days including tracking and testing. If we are writing the copy, designing a bespoke visual treatment or building several audience variants, allow two to three weeks. Campaign deadlines are common in this work, so tell us the launch date at the start and we will plan the build backwards from it.',
      },
      {
        question: 'Should the landing page sit on my main domain or a separate one?',
        answer:
          'Almost always your main domain, as a subdirectory such as yoursite.com/offer. It inherits your domain trust, your existing tracking and your SSL, and it keeps everything in one place to maintain. Separate domains fragment your analytics and start from zero credibility. The rare exception is a fully distinct brand or a joint venture that genuinely needs its own identity and its own future.',
      },
      {
        question: 'Can I edit the page myself afterwards?',
        answer:
          'Yes, that is deliberate. We build in Breakdance or Elementor using a documented block system, so your team can change headlines, swap images, adjust offer terms and duplicate the whole page for the next campaign without waiting on us. You get an editing guide covering which sections are safe to change freely and which ones affect tracking or layout.',
      },
      {
        question: 'Do you write the copy or do I supply it?',
        answer:
          'Either works. Many clients supply their own positioning and we shape it into a page structure that converts. Others want us to run the workshop, interview their sales team about the objections they hear, and write the page from scratch. What we will not do is invent statistics, testimonials or client names to make an offer look stronger than the evidence supports.',
      },
      {
        question: 'Will the page hurt my SEO by duplicating existing content?',
        answer:
          'Not if it is handled correctly. Campaign pages built purely for paid traffic can be excluded from the index, while pages intended to rank organically get their own keyword target, unique copy and a canonical pointing at themselves. Where several audience variants share a lot of wording, we canonicalise to the primary version so search engines are never asked to choose between near-identical pages.',
      },
    ],
    relatedProjectSlugs: ['lineascore', 'in-harmony-education', 'cloverfour', 'mocki'],
    relatedServiceSlugs: [
      'conversion-rate-optimisation',
      'analytics-tracking-setup',
      'website-design',
      'website-speed-optimisation',
    ],
  },

  {
    slug: 'analytics-tracking-setup',
    title: 'Analytics & Tracking Setup',
    category: 'Growth & Optimisation',
    icon: 'line-chart',
    short:
      'Trustworthy GA4, Tag Manager and conversion tracking so you can finally tell which channels and pages produce real revenue.',
    metaTitle: 'Analytics & Tracking Setup: GA4, GTM, Conversions',
    metaDescription:
      'Proper GA4, Google Tag Manager and conversion tracking setup, including ecommerce events, consent mode and dashboards you can actually make decisions from.',
    heroTitle: 'Analytics and Tracking Setup You Can Actually Trust',
    heroIntro:
      'Most businesses have analytics installed and still cannot answer basic questions: which channel produced last month enquiries, which pages start the journeys that end in a sale, how many form submissions were real. Usually the tags were pasted in years ago, conversions were never defined, and half the traffic is filtered into a single unhelpful bucket. We rebuild the measurement layer from the conversion definitions upward, so your reports describe reality and your decisions rest on something solid.',
    whatYouGet: [
      {
        title: 'Measurement plan before any tags',
        description:
          'We document the questions your business needs answered, the events that answer them, and the properties each event must carry. Tagging without this produces hundreds of unused data points and none of the three numbers you actually check every Monday.',
      },
      {
        title: 'Clean GA4 property configuration',
        description:
          'Correct data streams, retention settings, internal traffic and referral exclusions, cross-domain measurement where an app or checkout sits on a subdomain, key events marked as conversions, and channel groupings that stop lumping everything into direct traffic.',
      },
      {
        title: 'Google Tag Manager implementation',
        description:
          'All tags moved into a properly organised GTM container with named triggers and variables, a data layer implemented in the theme rather than scraped from CSS selectors, and versioned publishing so every change is traceable and reversible.',
      },
      {
        title: 'Conversion and lead tracking',
        description:
          'Form submissions, phone taps, email clicks, booking completions, file downloads and chat starts tracked as distinct events with source attribution preserved. UTM parameters carried through multi-step flows so the lead in your inbox is traceable back to its campaign.',
      },
      {
        title: 'Ecommerce and funnel tracking',
        description:
          'Full WooCommerce or Shopify ecommerce events, from item views and add-to-cart through checkout steps to purchase, with product, category, value and coupon data attached. That is what makes drop-off between steps visible instead of a single unexplained gap.',
      },
      {
        title: 'Consent mode and privacy compliance',
        description:
          'Consent Mode v2 wired to your cookie banner so tags respect a user choice, with anonymised measurement where consent is declined. Configured properly for GDPR-facing audiences, which matters given how much of our work ships into European markets.',
      },
      {
        title: 'Dashboards and training',
        description:
          'A Looker Studio dashboard showing the handful of numbers that drive decisions, channel performance, top converting landing pages, funnel drop-off and conversion trend, plus a recorded walkthrough so your team can read it without needing an analyst.',
      },
    ],
    process: [
      {
        title: 'Audit what you have',
        description:
          'We review your existing GA4, GTM, ad platform tags and Search Console for duplicate tags, broken triggers, unfiltered internal traffic, missing conversions and misattributed channels, and quantify how far the current reports diverge from reality.',
      },
      {
        title: 'Write the measurement plan',
        description:
          'Together we define the business questions, the conversion hierarchy from micro to macro, the event and parameter naming convention, and who reads which report. This document becomes the specification everything downstream is built and later verified against.',
      },
      {
        title: 'Implement the data layer and container',
        description:
          'We add a data layer to your WordPress theme, Bubble.io app or Next.js front end, rebuild the GTM container against the naming convention, and connect ad platform conversions so Google Ads and Meta receive the same events GA4 records.',
      },
      {
        title: 'Validate every event',
        description:
          'Each event is verified in GTM preview mode, GA4 DebugView and real-time reports, exercising the whole journey on mobile and desktop, including consent-declined states. Nothing is signed off on the assumption that a tag firing means the data is correct.',
      },
      {
        title: 'Build reporting and hand over',
        description:
          'We build the Looker Studio dashboard, run a live walkthrough with your team, and hand over documentation of every event, trigger and container version so a future developer or agency can extend the setup without reverse engineering it.',
      },
    ],
    deliverables: [
      'Written measurement plan with the full event and parameter dictionary',
      'Configured GA4 property with key events marked as conversions',
      'Organised, documented and versioned GTM container',
      'Data layer implemented in your theme, app or front end',
      'Ecommerce or lead-funnel event tracking end to end',
      'Ad platform conversion tags aligned with GA4 events',
      'Consent Mode v2 configuration tied to your cookie banner',
      'Looker Studio dashboard covering channels, pages and funnel',
      'Validation report plus a recorded training walkthrough',
    ],
    techStack: [
      'GA4',
      'GTM',
      'Google Search Console',
      'Looker Studio',
      'Microsoft Clarity',
      'Consent Mode v2',
      'WordPress',
      'WooCommerce',
      'Shopify',
      'Bubble.io',
      'Next.js',
    ],
    idealFor: [
      'You cannot say which channel produced last month enquiries',
      'GA4 was installed years ago and no conversions were ever configured',
      'Your ad platform reports and your analytics reports disagree',
      'Most of your traffic is classified as direct or unassigned',
      'You need ecommerce funnel data to find where carts are abandoned',
      'You sell into Europe and need consent handled correctly',
    ],
    faqs: [
      {
        question: 'Why do my ad platform numbers not match GA4?',
        answer:
          'They almost never match exactly, and that is expected. Ad platforms credit conversions to the click that led to them and use their own attribution windows and modelling, while GA4 uses its own session and attribution logic. A ten to twenty percent gap is normal. A gap of several times, or one platform showing conversions the other shows none of, means something is genuinely broken, and that is what we diagnose.',
      },
      {
        question: 'Do I need Google Tag Manager, or can tags go straight in the site?',
        answer:
          'For anything beyond a single basic tag, GTM is worth it. It gives you versioning, preview and debug mode, one place to manage every marketing tag, and the ability to change tracking without a developer deployment. Hard-coded tags scattered through a theme are the reason so many sites end up with duplicate pageviews and conversions nobody can trace to a source.',
      },
      {
        question: 'Can you track conversions on a Bubble.io app or a hybrid site?',
        answer:
          'Yes. We have built hybrid architectures where a WordPress or Next.js marketing site hands off to a Bubble.io application on a subdomain, which is exactly the setup that breaks naive tracking. We configure cross-domain measurement and preserve campaign parameters through the handoff, so a signup completed inside the app is still attributable to the advert that started the journey.',
      },
      {
        question: 'How does consent mode affect the accuracy of my data?',
        answer:
          'When a visitor declines cookies, Consent Mode v2 sends anonymised signals rather than nothing at all, and Google models the gap. You lose some granularity, particularly user-level paths, but you keep usable aggregate trends and stay compliant. The alternative, firing tags regardless of consent, is a legal risk in Europe and increasingly likely to be caught by browser and platform enforcement.',
      },
      {
        question: 'What if my historic data is already a mess?',
        answer:
          'We cannot retroactively repair data that was never collected correctly, and we will not pretend otherwise. What we do is establish a clean, documented baseline from the implementation date forward, note in the dashboard where the methodology changed, and keep the old property accessible for rough historic comparison. Within a quarter you have trustworthy year-on-year foundations being built underneath you.',
      },
    ],
    relatedProjectSlugs: ['wegets', 'lineascore', 'tylo-ai', 'loofys'],
    relatedServiceSlugs: [
      'conversion-rate-optimisation',
      'seo-services',
      'landing-page-development',
      'ecommerce-development',
    ],
  },
];
