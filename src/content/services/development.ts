import type { Service } from '@/content/types';

/**
 * Development services — the build side of Tekvion Innovations.
 *
 * Grounded in real delivery experience: 49+ projects shipped, 42 of them on
 * WordPress and 7 on Bubble.io, including multilingual builds across eight
 * languages, AI/LLM product work, and hybrid marketing-site + app architectures.
 */
export const developmentServices: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    category: 'Development',
    icon: 'code-2',
    short:
      'A bespoke website engineered around your business, your content and your buyers — never a recycled template.',
    metaTitle: 'Custom Website Development Services',
    metaDescription:
      'Custom website development for businesses that have outgrown templates. Bespoke builds with fast Core Web Vitals, clean technical SEO and editable content.',
    heroTitle: 'Custom Website Development Built Around Your Business',
    heroIntro:
      'Templates force your business to fit someone else’s layout. We do the opposite: we map how you sell, what you publish and who you serve, then build a site whose structure, content model and interface follow that reality. Every build ships fast, editable by your team, and readable by search engines from day one.',
    whatYouGet: [
      {
        title: 'Information architecture mapped to demand',
        description:
          'Before a pixel is drawn we map every page, its purpose and the keyword or question it answers. You get a sitemap, URL plan and internal-linking model, so the site scales to fifty pages without turning into a maze nobody can navigate.',
      },
      {
        title: 'A design-to-code build with no template lock-in',
        description:
          'We build the layouts your design calls for rather than bending a purchased theme. That means no unused page-builder bloat, no licence you cannot cancel, and no third-party update that silently breaks your homepage on a Tuesday morning.',
      },
      {
        title: 'A content model your team can actually edit',
        description:
          'Repeatable content — services, locations, case studies, team, FAQs — becomes structured fields via ACF and custom post types. Editors fill in labelled boxes instead of rebuilding layouts, so the design stays consistent long after we hand over.',
      },
      {
        title: 'A performance budget enforced before launch',
        description:
          'We set weight and Core Web Vitals targets at kickoff and hold the build to them: right-sized responsive images, deferred scripts, minimal plugin load, and a Lighthouse pass on real page templates rather than an empty homepage.',
      },
      {
        title: 'Technical SEO built in, not bolted on',
        description:
          'Semantic heading order, unique titles and descriptions, canonical tags, schema markup, XML sitemap, robots rules and clean redirects from any old URLs. Search visibility is a build decision, and we make it during the build.',
      },
      {
        title: 'Multilingual and multi-region readiness',
        description:
          'We have shipped sites in English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian, including right-to-left layouts. If a second language is on your roadmap, we structure the build for it now instead of retrofitting it later.',
      },
      {
        title: 'Handover, training and documentation',
        description:
          'You receive a recorded walkthrough of your own site, written editing notes, and admin credentials you own outright. Nothing about your website should require a support ticket to change a headline or publish a new service page.',
      },
    ],
    process: [
      {
        title: 'Discovery and scope',
        description:
          'A working session on your offer, buyers, competitors and current analytics. We agree the page list, must-have functionality, integrations, languages and success measures, then write a fixed scope so nothing important is discovered halfway through the build.',
      },
      {
        title: 'Architecture and wireframes',
        description:
          'We produce the sitemap, URL structure and low-fidelity wireframes for every unique template. You approve structure and messaging before visual design begins, which is far cheaper than reworking finished pages.',
      },
      {
        title: 'Visual design in Figma',
        description:
          'Desktop and mobile designs for each template, built on a type scale, spacing system and component set rather than one-off pages. You review a clickable prototype and sign off before development starts.',
      },
      {
        title: 'Build, content modelling and integrations',
        description:
          'We develop the templates, wire the editable fields, migrate or write the content, and connect forms, booking, payment or CRM integrations. You get a staging URL from week one and can watch it come together.',
      },
      {
        title: 'QA, launch and aftercare',
        description:
          'Cross-browser and device testing, accessibility checks, form and redirect testing, analytics verification, then a scheduled go-live with DNS and SSL handled. Thirty days of post-launch support follow every launch.',
      },
    ],
    deliverables: [
      'Approved sitemap, URL plan and page-level content brief',
      'Figma designs for every unique template, desktop and mobile',
      'Fully built, responsive website on your own hosting account',
      'Custom fields and post types for every repeatable content block',
      'On-page SEO setup: titles, descriptions, schema, XML sitemap, robots.txt',
      'Redirect map from all previous URLs where a site is being replaced',
      'GA4 and Google Tag Manager configured with goal tracking',
      'Recorded training walkthrough plus written editor documentation',
      '30 days of post-launch support and bug fixes',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'ACF',
      'PHP',
      'Next.js',
      'React',
      'TypeScript',
      'WPML',
      'Figma',
      'Kinsta',
      'Hostinger',
      'Cloudflare',
      'GA4',
      'GTM',
      'Lighthouse',
    ],
    idealFor: [
      'You have outgrown a template and keep hitting layout limits',
      'Your site needs structured, repeatable content such as services or locations',
      'You want to edit pages yourself without paying an agency for text changes',
      'Search visibility and page speed genuinely affect your pipeline',
      'A second language or region is on the roadmap in the next year',
      'You need one accountable team for design, build, SEO and launch',
    ],
    faqs: [
      {
        question: 'How long does a custom website take to build?',
        answer:
          'A focused brochure or service site typically runs six to eight weeks from kickoff to launch. Larger builds with listings, memberships, e-commerce or multiple languages usually take ten to sixteen weeks. The single biggest variable is content: when copy, images and product data are ready at kickoff, projects finish on the early end of the range, and when they are written during the build the timeline stretches.',
      },
      {
        question: 'Will I be able to edit the site myself afterwards?',
        answer:
          'Yes, and we design for it. Repeating content lives in labelled custom fields, so adding a service, team member or case study is a form you fill in rather than a layout you rebuild. You get a recorded walkthrough of your own admin, written notes and full ownership of the hosting and domain. Most clients publish new pages themselves within a week of launch.',
      },
      {
        question: 'Do you build on WordPress or on a custom framework?',
        answer:
          'Both, depending on the job. WordPress with a clean custom build suits content-led sites, service businesses and stores where your team publishes regularly, which is why 42 of our projects run on it. Next.js suits sites where speed, custom interfaces or an API-driven front end matter more than day-to-day editing. We recommend the stack in discovery and explain the trade-offs before you commit.',
      },
      {
        question: 'What happens to my existing SEO rankings?',
        answer:
          'We protect them deliberately. Before launch we crawl the old site, record every indexed URL, and build a one-to-one redirect map so no link equity is lost. Page titles, headings and body copy for ranking pages are carried across or improved rather than discarded. After go-live we resubmit the sitemap and monitor Search Console for crawl errors and coverage drops.',
      },
      {
        question: 'Do you write the content or do I?',
        answer:
          'Either works. Most clients supply core messaging and we edit it into page-ready structure with headings, meta titles and calls to action. If you would rather hand it over entirely, we write from a discovery interview and your existing material. What we never do is fill your site with placeholder text and launch, so content readiness is tracked as a project milestone.',
      },
    ],
    relatedProjectSlugs: ['cloverfour', 'hyperspace-international', 'forever-day-one', 'e-mobility-search'],
    relatedServiceSlugs: [
      'website-design',
      'wordpress-development',
      'headless-jamstack-development',
      'seo-services',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    category: 'Development',
    icon: 'blocks',
    short:
      'Clean, fast, plugin-light WordPress builds you can run yourself, from single-site brochures to 200-location retail estates.',
    metaTitle: 'WordPress Development Agency',
    metaDescription:
      'Professional WordPress development: custom themes, ACF content models, WooCommerce, multilingual builds and fast, secure sites you can edit without a developer.',
    heroTitle: 'WordPress Development for Sites That Have to Perform',
    heroIntro:
      'WordPress is the backbone of our studio: 42 of our 49 delivered projects run on it, from a Hebrew right-to-left learning platform to a UK flooring retailer with 220-plus showrooms. We build it the disciplined way — few plugins, structured fields, real performance budgets — so the site stays fast and safe for years, not weeks.',
    whatYouGet: [
      {
        title: 'A build without plugin sprawl',
        description:
          'Most slow, fragile WordPress sites are carrying thirty plugins doing the work of five. We audit every dependency, replace what we can with a few lines of code, and document why each remaining plugin earns its place in your install.',
      },
      {
        title: 'Structured content with ACF and custom post types',
        description:
          'Properties, courses, locations, staff, products or events become their own content type with their own fields, archives and templates. Editors add entries through a clear form and the site lays them out correctly everywhere they appear.',
      },
      {
        title: 'Page building that stays on brand',
        description:
          'Where clients want layout freedom we use Breakdance or Elementor with a locked global style set: your colours, type scale and spacing as reusable presets. Marketing can assemble a new landing page without inventing a fourth shade of blue.',
      },
      {
        title: 'Multilingual and RTL builds',
        description:
          'We have shipped WordPress in German, French, Italian, Polish, Dutch, Norwegian and Hebrew, including full right-to-left layouts. Translations are wired with WPML, with hreflang tags and language-aware navigation configured correctly for search.',
      },
      {
        title: 'Speed and Core Web Vitals work',
        description:
          'Object and page caching, image conversion and lazy loading, critical CSS, script deferral and a Cloudflare layer in front. We test on real templates and real content, then hand you the before and after Lighthouse reports.',
      },
      {
        title: 'Security and update hygiene from day one',
        description:
          'Hardened logins with two-factor, disabled file editing, sane file permissions, automated off-site backups, and a staging environment where every core, theme and plugin update is tested before it ever touches production.',
      },
    ],
    process: [
      {
        title: 'Requirements and content mapping',
        description:
          'We list every content type your site needs, the fields each one carries, and how the pieces relate — courses to instructors, showrooms to regions, services to case studies. That map becomes the database design before any code is written.',
      },
      {
        title: 'Environment and theme setup',
        description:
          'We provision hosting on Kinsta or Hostinger, create staging and production environments, install the base theme and build system, and set up version control so every change is tracked and reversible.',
      },
      {
        title: 'Template and field development',
        description:
          'Each unique template is built and connected to its fields: archives, single views, filters, search and forms. We build with real content rather than dummy text so edge cases like long titles and missing images surface early.',
      },
      {
        title: 'Integration and quality assurance',
        description:
          'Forms, CRM, payments, booking and analytics are connected and tested end to end. We then run cross-browser, mobile, accessibility and performance passes, and fix everything found before you see the launch checklist.',
      },
      {
        title: 'Launch, backup and handover',
        description:
          'Push to production with DNS and SSL managed, backups scheduled, security hardening applied, and an admin walkthrough recorded for your team. Ongoing care is optional but always offered, never assumed.',
      },
    ],
    deliverables: [
      'Custom WordPress build on hosting you own and control',
      'Custom post types and ACF field groups for every repeatable content set',
      'Reusable global style presets in Breakdance or Elementor',
      'Staging environment mirroring production for safe updates',
      'Performance report with before and after Core Web Vitals figures',
      'Security hardening checklist applied and documented',
      'Automated off-site backup schedule',
      'WPML configuration and hreflang setup on multilingual builds',
      'Recorded admin training and written editor guide',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'Elementor',
      'ACF',
      'PHP',
      'MySQL',
      'WPML',
      'WooCommerce',
      'Kinsta',
      'Hostinger',
      'Cloudflare',
      'GA4',
      'Lighthouse',
    ],
    idealFor: [
      'You publish regularly and need a CMS your team already understands',
      'Your current WordPress site is slow, plugin-heavy or breaks on updates',
      'You need custom content types such as listings, courses or locations',
      'You are launching in more than one language or a right-to-left script',
      'You want an owned platform with no per-seat or per-template licence fees',
      'You need e-commerce and content living in one system',
    ],
    faqs: [
      {
        question: 'Why does WordPress get a reputation for being slow?',
        answer:
          'Because most WordPress sites are assembled from a heavy multipurpose theme plus dozens of overlapping plugins, each loading its own CSS and JavaScript on every page. WordPress itself is not the problem. When we build lean templates, keep the plugin count low, serve properly sized images and put caching plus a CDN in front, WordPress comfortably hits good Core Web Vitals scores on real content.',
      },
      {
        question: 'Do you use a page builder or hand-code the theme?',
        answer:
          'It depends who maintains the site. If your marketing team wants to assemble landing pages independently, we build with Breakdance or Elementor on locked global styles so layouts stay on brand. If the site is developer-maintained and speed is paramount, we hand-build templates with ACF instead. We recommend one in discovery and explain the maintenance trade-off honestly.',
      },
      {
        question: 'Can you work on my existing WordPress site rather than rebuild it?',
        answer:
          'Often, yes. We start with an audit covering theme quality, plugin load, security posture, performance and code health, then tell you plainly whether fixing is cheaper than rebuilding. Where the foundation is sound we improve it incrementally. Where a nulled theme, abandoned plugins or hacked files are involved, a clean rebuild usually costs less than repeated firefighting.',
      },
      {
        question: 'How do you handle plugin and core updates safely?',
        answer:
          'Updates are applied on a staging clone first, checked against your key templates and forms, then promoted to production once verified. An off-site backup is taken immediately before every production update so a rollback takes minutes. Under a maintenance plan we do this on a fixed monthly cycle and send you a written record of what changed.',
      },
      {
        question: 'Can WordPress handle a large site with hundreds of pages?',
        answer:
          'Yes, with the right architecture. We have delivered large retail and directory builds, including a flooring retailer supporting more than 220 showrooms and a multi-country expat directory spanning 60-plus country sections. Scale is handled with structured content types, sensible taxonomies, indexed queries and caching — not by adding more plugins on top of a generic theme.',
      },
    ],
    relatedProjectSlugs: ['tapi', 'ronival', 'mediseo', 'afik'],
    relatedServiceSlugs: [
      'custom-website-development',
      'wordpress-plugin-theme-development',
      'woocommerce-development',
      'website-maintenance-support',
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wordpress-plugin-theme-development',
    title: 'WordPress Plugin & Theme Development',
    category: 'Development',
    icon: 'plug',
    short:
      'Custom plugins and themes that add the exact functionality your site needs, without stacking another dependency you cannot control.',
    metaTitle: 'WordPress Plugin & Theme Development',
    metaDescription:
      'Custom WordPress plugin and theme development: bespoke functionality, admin tools and block themes built to WordPress standards and maintained without bloat.',
    heroTitle: 'Custom WordPress Plugin and Theme Development',
    heroIntro:
      'Sometimes the plugin you need does not exist — or the three that come close each bring a settings panel, a licence key and a security surface you did not ask for. We write focused custom plugins and themes that do precisely one job, follow WordPress coding standards, and survive core updates without drama.',
    whatYouGet: [
      {
        title: 'A plugin scoped to one job',
        description:
          'We define the single problem the plugin solves and build for that, with no upsell screens or unrelated features. Smaller surface area means fewer bugs, faster load, less to review at security-audit time and a much simpler upgrade path.',
      },
      {
        title: 'Admin interfaces your team can use',
        description:
          'Settings screens, custom columns, bulk actions, meta boxes and dashboard widgets built with native WordPress UI components. Staff get tools that look and behave like the rest of the admin instead of an alien control panel.',
      },
      {
        title: 'Custom and block theme development',
        description:
          'Classic themes, child themes and block themes with theme.json, built from your design system so global styles, fonts and spacing are defined once. Editors get curated block patterns rather than a blank canvas and infinite choices.',
      },
      {
        title: 'Third-party integrations inside WordPress',
        description:
          'We wrap external APIs — CRMs, booking systems, payment providers, LLM endpoints — in a plugin with proper authentication, transient caching, retry handling and error logging, so an upstream outage degrades gracefully instead of white-screening your site.',
      },
      {
        title: 'Standards-compliant, reviewable code',
        description:
          'WordPress Coding Standards, sanitised inputs, escaped outputs, nonce-protected actions, prepared database statements and translation-ready strings throughout. Your next developer can read it, and a security reviewer can sign it off.',
      },
      {
        title: 'Documentation and update path',
        description:
          'Every build ships with a README covering hooks, filters, settings and known limits, plus a changelog. Where useful we add a private update server so your team can roll out new versions across multiple sites cleanly.',
      },
    ],
    process: [
      {
        title: 'Functional specification',
        description:
          'We write down exactly what the plugin or theme must do, the user roles involved, the data it stores and the edge cases it must survive. Ambiguity here is what turns a two-week build into a two-month one, so we resolve it in writing first.',
      },
      {
        title: 'Architecture and data design',
        description:
          'We decide where data belongs — post meta, custom tables, options or an external API — and design the hooks and filters other code will use. Getting this right keeps the plugin performant as your record count grows.',
      },
      {
        title: 'Build in a versioned environment',
        description:
          'Development happens in Git with a local and staging environment, coding standards enforced, and incremental demos so you can steer the build rather than react to it at the end.',
      },
      {
        title: 'Testing across roles and scenarios',
        description:
          'We test each user role, permission boundary, failure state and upgrade path, including deactivation and reactivation, and confirm the plugin behaves with your existing theme and plugin stack rather than only in isolation.',
      },
      {
        title: 'Deployment and knowledge transfer',
        description:
          'We deploy to production, verify against real data, and hand over the repository, documentation and a walkthrough for whoever maintains it next — your team, ours, or a developer you hire later.',
      },
    ],
    deliverables: [
      'Custom plugin or theme as an installable, versioned package',
      'Full source code in a Git repository you own',
      'Functional specification signed off before development',
      'Admin settings screens and role-based permissions',
      'Developer README documenting hooks, filters and options',
      'Translation-ready strings with a POT file',
      'Changelog and semantic version numbering',
      'Upgrade and rollback instructions',
    ],
    techStack: [
      'WordPress',
      'PHP',
      'ACF',
      'MySQL',
      'JavaScript',
      'React',
      'WP-CLI',
      'Git',
      'WordPress REST API',
      'Composer',
      'WPML',
    ],
    idealFor: [
      'No existing plugin does what your workflow actually requires',
      'You are paying licence fees for plugins you use ten percent of',
      'A third-party plugin is slowing your site or failing security review',
      'You need WordPress to talk to an internal system or private API',
      'You run several sites that need the same custom functionality',
      'You want a design system enforced in the block editor',
    ],
    faqs: [
      {
        question: 'Is a custom plugin cheaper than buying an off-the-shelf one?',
        answer:
          'Not on day one, and we will say so. A commercial plugin costs less upfront and makes sense when it matches your needs closely. Custom becomes the better economics when you would otherwise stack three plugins to approximate one workflow, when annual licence fees across multiple sites add up, or when a plugin is being used so far outside its intended purpose that it breaks with every update.',
      },
      {
        question: 'Will a custom plugin break when WordPress updates?',
        answer:
          'It should not, because we build against documented WordPress APIs, hooks and filters rather than patching core files or relying on undocumented internals. That is exactly what the API layer is for. We test against WordPress release candidates for clients on a maintenance plan, and where a deprecation is announced we schedule the change before the release lands.',
      },
      {
        question: 'Do I own the code you write?',
        answer:
          'Yes. You receive the full source in a repository you control, with no licence key, no phone-home call and no obligation to keep working with us afterwards. Plugins built on WordPress inherit GPL obligations for their WordPress-derived parts, which we explain up front rather than leaving in the small print. Practically speaking, you can hand the code to any competent WordPress developer tomorrow.',
      },
      {
        question: 'Can you take over a plugin another developer built?',
        answer:
          'Usually. We start with a code review covering structure, security, standards compliance and the update path, then give you an honest assessment: maintainable as-is, worth refactoring, or cheaper to rewrite. Where the code is sound we take over maintenance and add features. Where it stores data in ways that will not scale, we tell you before you invest further.',
      },
      {
        question: 'Can you build a block theme instead of a classic theme?',
        answer:
          'Yes. We build full site editing themes with theme.json driving colours, typography, spacing and layout, plus curated block patterns and template parts for your key page types. This suits teams who want editors composing pages inside the native editor with guard rails. For sites needing complex conditional templates, a classic or hybrid theme is often still the pragmatic choice.',
      },
    ],
    relatedProjectSlugs: ['afik', 'tapi', 'lock-stock', 'universal-spirituality'],
    relatedServiceSlugs: [
      'wordpress-development',
      'php-development',
      'api-development-integrations',
      'website-maintenance-support',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    category: 'Development',
    icon: 'shopping-cart',
    short:
      'Online stores built to sell: fast catalogues, frictionless checkout and the reporting to see what is actually working.',
    metaTitle: 'E-commerce Website Development Services',
    metaDescription:
      'E-commerce development on WooCommerce and Shopify. Fast catalogues, optimised checkout, payments, shipping and tracking built for stores that need to convert.',
    heroTitle: 'E-commerce Development That Turns Browsers Into Buyers',
    heroIntro:
      'A store is not a brochure with a buy button. It is a catalogue that has to load fast on a phone, a search that has to find the right product, and a checkout that has to survive tax, shipping and payment reality. We have built stores across multi-category retail, sustainable cosmetics and Nordic lifestyle brands, and we build them around the numbers that matter.',
    whatYouGet: [
      {
        title: 'A catalogue structure that scales',
        description:
          'Categories, attributes, variations and filters designed around how customers actually shop rather than how your spreadsheet is organised. Faceted filtering, in-stock sorting and clean category URLs keep large ranges browsable and indexable.',
      },
      {
        title: 'Product pages engineered to convert',
        description:
          'Gallery, variant selection, stock signals, delivery expectations, sizing or spec detail, cross-sells and reviews arranged in the order buyers ask about them. Every element earns its place; nothing is there because the theme demo had it.',
      },
      {
        title: 'A checkout with the friction removed',
        description:
          'Guest checkout, address autofill, real-time shipping rates, local payment methods and a mobile-first form layout. We measure the drop-off at each step after launch and tune the worst one instead of guessing which field is the problem.',
      },
      {
        title: 'Payments, tax and shipping configured properly',
        description:
          'Stripe, PayPal and regional gateways wired with live and test modes, tax rules for the territories you sell into, and shipping zones with weight or price-based rates. Refunds and partial refunds tested before your first real order.',
      },
      {
        title: 'E-commerce analytics you can act on',
        description:
          'GA4 enhanced e-commerce through Google Tag Manager: item views, add-to-cart, checkout steps and purchase, with revenue attributed to channels. You see which products, campaigns and categories actually earn money, not just traffic.',
      },
      {
        title: 'Speed work aimed at the pages that sell',
        description:
          'Category and product templates are where store speed is won or lost. We optimise image delivery, defer non-critical scripts, cache aggressively around the cart, and hold those templates to a Core Web Vitals target on real devices.',
      },
      {
        title: 'Operational handover for the people running it',
        description:
          'Your team is trained on adding products, running promotions, managing stock and processing orders and refunds, with written runbooks for the tasks that only come up quarterly. The store should not depend on us to launch a sale.',
      },
    ],
    process: [
      {
        title: 'Commercial discovery',
        description:
          'Product range, margins, average order value, delivery model, territories, tax obligations and the platforms you already use for stock or accounting. This decides the platform recommendation more than any design preference does.',
      },
      {
        title: 'Catalogue and taxonomy design',
        description:
          'We model products, variants, attributes and collections, then design navigation and filtering around them. Where you are migrating, we map and clean the existing product data before it touches the new store.',
      },
      {
        title: 'Store build and payment setup',
        description:
          'Templates, cart and checkout are built and styled, then payments, shipping, tax and email notifications are configured and tested end to end in sandbox mode against realistic orders.',
      },
      {
        title: 'Test orders and pre-launch QA',
        description:
          'We place live test orders across devices and payment methods, verify confirmation emails, invoices, stock decrements and refunds, and check every analytics event fires exactly once.',
      },
      {
        title: 'Launch and post-launch tuning',
        description:
          'We go live with redirects in place, watch the first days of real orders and funnel data closely, and fix the friction the data exposes while the launch is still fresh.',
      },
    ],
    deliverables: [
      'Fully configured store with catalogue, cart and checkout',
      'Product data import or migration with cleaned attributes',
      'Payment gateways live-tested with refund handling verified',
      'Shipping zones, rates and tax rules configured per territory',
      'Transactional email templates styled to your brand',
      'GA4 enhanced e-commerce tracking via Google Tag Manager',
      'Redirect map from any previous store URLs',
      'Store operations runbook and staff training recording',
      '30 days of post-launch support covering order-flow issues',
    ],
    techStack: [
      'WooCommerce',
      'WordPress',
      'Shopify',
      'PHP',
      'Stripe',
      'PayPal',
      'Cloudflare',
      'Kinsta',
      'GA4',
      'GTM',
      'Figma',
      'Lighthouse',
    ],
    idealFor: [
      'You are launching a store and want the commercial setup right first time',
      'Your current store is slow or loses customers during checkout',
      'You sell across multiple countries, currencies or tax regimes',
      'Your catalogue is large enough that search and filtering really matter',
      'You cannot currently tell which products or channels drive profit',
      'You need content marketing and the shop in one platform',
    ],
    faqs: [
      {
        question: 'Should I choose WooCommerce or Shopify?',
        answer:
          'WooCommerce suits stores that also publish heavily, need unusual product logic, or want to avoid transaction fees and per-app subscriptions. Shopify suits teams who want hosting, PCI compliance and updates handled for them and are happy inside its conventions. We ask about catalogue complexity, content strategy, in-house technical capacity and margin structure, then recommend one and explain what you give up either way.',
      },
      {
        question: 'Can you migrate my existing store without losing orders or SEO?',
        answer:
          'Yes. We export products, customers and order history, clean and map the data, then import into the new platform and reconcile counts before launch. Old category and product URLs are redirected one to one, and we keep ranking page titles and descriptions intact. We schedule cutover for a quiet trading window and monitor Search Console closely for the following weeks.',
      },
      {
        question: 'How do you improve checkout conversion?',
        answer:
          'First we measure it. GA4 funnel tracking shows exactly where people abandon: the cart, the address step, shipping selection or payment. Then we fix the specific cause — forced account creation, surprise shipping costs, too many fields, no trust signals, or slow payment loading. Guessing at checkout changes wastes money; the funnel data usually points at one or two obvious culprits.',
      },
      {
        question: 'Do you handle product photography and descriptions?',
        answer:
          'We do not shoot photography in-house, and we would rather tell you than subcontract it quietly. We do specify exactly what you need — shot list, aspect ratios, background treatment and file sizes — and we optimise and structure what you supply. For descriptions we can write templates for your first products and set the pattern your team follows for the rest of the range.',
      },
      {
        question: 'What ongoing costs should I budget for after launch?',
        answer:
          'Expect hosting, your domain and SSL, payment processing fees, and any premium extensions for shipping, subscriptions or accounting sync. On WooCommerce we keep paid extensions to what genuinely earns its keep. Beyond that, budget for maintenance: stores handle money, so security patching, backups and update testing are not optional. We quote all of it before launch, not after.',
      },
    ],
    relatedProjectSlugs: ['wegets', 'loofys', 'aromashop', 'tapi'],
    relatedServiceSlugs: [
      'woocommerce-development',
      'shopify-development',
      'conversion-rate-optimisation',
      'website-speed-optimisation',
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    category: 'Development',
    icon: 'shopping-bag',
    short:
      'Shopify stores set up and customised properly, so you get a hosted platform without inheriting a generic theme demo.',
    metaTitle: 'Shopify Development & Store Setup',
    metaDescription:
      'Shopify development and store customisation: theme work, collections, checkout setup, app selection and analytics for merchants who want hosting handled.',
    heroTitle: 'Shopify Development and Store Customisation',
    heroIntro:
      'Shopify removes hosting, PCI compliance and platform updates from your plate, which is exactly right for some merchants. What it does not remove is the work of building a store that looks like your brand and sells like it should. We handle the theme customisation, catalogue design, app decisions and tracking that separate a real store from an installed template.',
    whatYouGet: [
      {
        title: 'Theme customisation in Liquid, not just settings toggles',
        description:
          'We start from a solid theme and modify sections, snippets and templates in Liquid to match your design. You get the layouts your brand needs while keeping the theme updatable, rather than a fork nobody dares to touch again.',
      },
      {
        title: 'Collection and metafield architecture',
        description:
          'Automated collections driven by tags and conditions, plus metafields and metaobjects for spec tables, care instructions, ingredient lists or size guides. Merchandising rules run themselves instead of needing manual curation every season.',
      },
      {
        title: 'Checkout and post-purchase configuration',
        description:
          'Shopify Payments and alternative gateways, shipping profiles and rates, tax regions, discount logic, abandoned-cart recovery and branded order status and notification emails, all tested with real test orders before you open.',
      },
      {
        title: 'A deliberate, minimal app stack',
        description:
          'Every app costs money monthly and adds scripts to your storefront. We pick the smallest set that covers reviews, email, shipping and subscriptions, remove the ones you inherited, and document what each remaining app is actually for.',
      },
      {
        title: 'Storefront speed work',
        description:
          'Shopify hosting is fast; most slow Shopify stores are slowed by their own theme and apps. We audit script weight, defer and remove what is not needed, right-size imagery, and measure the product and collection templates that carry your traffic.',
      },
      {
        title: 'Tracking and merchant reporting',
        description:
          'GA4 with enhanced e-commerce, Google Tag Manager where needed, conversion tracking for your ad channels, and a walkthrough of Shopify Analytics so your team reads sessions, conversion rate and AOV correctly instead of only revenue.',
      },
    ],
    process: [
      {
        title: 'Store and catalogue planning',
        description:
          'We map your product structure into Shopify’s model — products, variants, options, tags and collections — and identify anything that needs metafields or an app. Doing this before import prevents painful restructuring later.',
      },
      {
        title: 'Theme selection and design mapping',
        description:
          'We choose a base theme whose section structure fits your design intent, then map each designed page to sections we will customise or build, so effort goes into what differentiates your store rather than rebuilding the basics.',
      },
      {
        title: 'Build, import and configuration',
        description:
          'Liquid customisation, product import, collection rules, navigation, payments, shipping and tax setup, plus the app installs your operations genuinely require, all assembled in a development environment.',
      },
      {
        title: 'Test orders and launch',
        description:
          'We run test transactions across devices and payment methods, verify emails, taxes, discounts and refunds, connect the domain, and go live with redirects from any previous store in place.',
      },
    ],
    deliverables: [
      'Customised Shopify theme with brand-matched sections',
      'Product, variant and collection structure with metafields configured',
      'Payments, shipping profiles, tax regions and discounts set up',
      'Branded notification and order status emails',
      'Documented app stack with monthly cost summary',
      'GA4 and ad-platform conversion tracking configured',
      'Redirect map from previous store URLs',
      'Merchant training recording for products, orders and promotions',
    ],
    techStack: [
      'Shopify',
      'Liquid',
      'JavaScript',
      'Shopify Metafields',
      'Stripe',
      'PayPal',
      'Figma',
      'GA4',
      'GTM',
      'Cloudflare',
      'Lighthouse',
    ],
    idealFor: [
      'You want hosting, security and PCI compliance handled by the platform',
      'Your team is small and wants fewer moving parts to maintain',
      'You sell physical products with straightforward variant structures',
      'You are moving off a marketplace and need your own storefront',
      'Your current Shopify theme looks like every other Shopify theme',
      'App subscriptions are creeping up and nobody knows what they all do',
    ],
    faqs: [
      {
        question: 'Is Shopify the right platform for my business?',
        answer:
          'It is a strong fit when you want the platform maintained for you, your catalogue fits Shopify’s product and variant model, and you are comfortable with transaction and app fees. It is a weaker fit when you publish heavy content alongside the shop, need unusual pricing or bundling logic, or want to avoid recurring app subscriptions. We will tell you honestly if WooCommerce suits you better.',
      },
      {
        question: 'How much of the store is theme settings versus custom code?',
        answer:
          'We aim to do as much as possible through sections and theme settings, because that keeps the store easy for your team to edit and the theme easy to update. Custom Liquid comes in for layouts, merchandising logic or content structures the theme does not offer. We document every customisation so a future developer knows what was changed and why.',
      },
      {
        question: 'Which apps do I actually need?',
        answer:
          'Fewer than most stores install. Typically one for email and abandoned carts, one for reviews, and something for shipping or subscriptions if your model requires it. We check whether native Shopify features already cover the need first, since each app adds a monthly fee and usually storefront JavaScript. We give you the list with costs before installing anything.',
      },
      {
        question: 'Can you move my store from WooCommerce to Shopify?',
        answer:
          'Yes. We export products, variants, customers and order history, restructure the data to fit Shopify’s model, and import with counts reconciled before launch. URL structures differ between the platforms, so we build a full redirect map from old product and category URLs to the new ones and monitor Search Console after cutover to catch anything missed.',
      },
    ],
    /* Empty on purpose: every store in the portfolio is WooCommerce. Showing
       those builds under "live projects where this work did the heavy lifting"
       would present WordPress delivery as Shopify delivery evidence. */
    relatedProjectSlugs: [],
    relatedServiceSlugs: [
      'ecommerce-development',
      'woocommerce-development',
      'website-migration-replatforming',
      'conversion-rate-optimisation',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    category: 'Development',
    icon: 'store',
    short:
      'WooCommerce stores built lean and fast, with the product logic, content and reporting your business actually runs on.',
    metaTitle: 'WooCommerce Development Services',
    metaDescription:
      'WooCommerce development and optimisation: custom product logic, fast catalogues, checkout tuning, multi-currency and speed work for WordPress online stores.',
    heroTitle: 'WooCommerce Development for Stores That Need Room to Grow',
    heroIntro:
      'WooCommerce gives you a store and a content platform in one system, with no transaction fees and no limits on how products behave. It also gives you enough rope to build something slow. We have delivered WooCommerce stores for multi-category retail, Dutch sustainable cosmetics and the Norwegian market — built lean, hosted properly and tuned for speed.',
    whatYouGet: [
      {
        title: 'Product logic that matches how you sell',
        description:
          'Variable products, bundles, subscriptions, minimum quantities, trade pricing or region-specific availability implemented with as little custom code as the job needs. Woo bends to unusual commercial models where hosted platforms simply refuse.',
      },
      {
        title: 'Catalogue performance work',
        description:
          'Shop and category pages are the heaviest queries in WooCommerce. We index correctly, cache product loops, keep faceted filtering off the main query where needed, and serve modern image formats so large catalogues stay fast on mobile.',
      },
      {
        title: 'A checkout tuned for your market',
        description:
          'Field sets trimmed to what you truly need, local payment methods enabled, shipping rates by zone and weight, VAT or sales tax handled per territory, and mobile layouts tested on real handsets rather than a desktop browser resized.',
      },
      {
        title: 'Multi-currency and multi-language selling',
        description:
          'Where you sell across borders we pair WooCommerce with WPML for translated products and checkout, plus currency switching and territory-appropriate tax. We have shipped Dutch and Norwegian storefronts and know where the edge cases hide.',
      },
      {
        title: 'Content and commerce in one place',
        description:
          'Buying guides, comparison posts and category copy live in the same CMS as the products, with internal links from content straight into the relevant collections. That is the compounding SEO advantage WooCommerce has over hosted platforms.',
      },
      {
        title: 'Hosting and operations set up for a store',
        description:
          'Stores need more than shared hosting: object caching, cache exclusions for cart and checkout, ample PHP workers, staging for safe updates and off-site backups. We configure this on Kinsta or comparable infrastructure and document it.',
      },
    ],
    process: [
      {
        title: 'Commercial and catalogue review',
        description:
          'We look at product types, variant counts, pricing rules, shipping model, tax territories and order volume, then decide what needs core WooCommerce, a paid extension or a small amount of custom code.',
      },
      {
        title: 'Store architecture and hosting setup',
        description:
          'Hosting provisioned with object caching and staging, WooCommerce installed with a lean extension set, and product data imported or migrated with attributes and images cleaned during the process.',
      },
      {
        title: 'Template and checkout build',
        description:
          'Shop, category, product and checkout templates built to your design, with the cart flow, upsells and stock messaging implemented and every template checked against real product data.',
      },
      {
        title: 'Transactional testing',
        description:
          'Live test orders across payment methods, tax territories and shipping zones, checking invoices, stock decrement, refunds, failed payments and every transactional email in both desktop and mobile clients.',
      },
      {
        title: 'Launch and performance verification',
        description:
          'Cutover with redirects, cache rules verified around cart and checkout, Core Web Vitals measured on category and product templates, and the first week of live orders and funnel data reviewed together.',
      },
    ],
    deliverables: [
      'WooCommerce store built on hosting you own',
      'Imported and cleaned product catalogue with attributes and variations',
      'Custom templates for shop, category, product, cart and checkout',
      'Payment gateways and shipping zones configured and live-tested',
      'Tax rules configured per selling territory',
      'Object caching and store-safe cache exclusions configured',
      'WPML setup for translated products and checkout where required',
      'GA4 enhanced e-commerce tracking through Google Tag Manager',
      'Store operations guide plus staff training recording',
    ],
    techStack: [
      'WooCommerce',
      'WordPress',
      'PHP',
      'MySQL',
      'ACF',
      'WPML',
      'Stripe',
      'PayPal',
      'Kinsta',
      'Cloudflare',
      'GA4',
      'GTM',
      'Lighthouse',
    ],
    idealFor: [
      'You want a store and a content site in one system you own',
      'Your pricing, bundling or availability rules are not standard',
      'Transaction fees and app subscriptions are eating your margin',
      'You sell in more than one language or currency',
      'Your existing WooCommerce store is slow on category pages',
      'SEO and content marketing are central to how you acquire customers',
    ],
    faqs: [
      {
        question: 'Is WooCommerce fast enough for a large catalogue?',
        answer:
          'Yes, with the right hosting and build. WooCommerce slows down when it runs on shared hosting without object caching, carries a heavy multipurpose theme, and stacks a dozen extensions. On managed hosting with Redis object caching, lean templates, indexed queries and a CDN, stores with thousands of products perform well. The platform is rarely the bottleneck; the configuration usually is.',
      },
      {
        question: 'Which WooCommerce extensions do you recommend?',
        answer:
          'As few as possible, and only where core cannot do the job. Typically that means a shipping extension if your rates are complex, a payment gateway beyond Stripe and PayPal for local methods, and a subscriptions or bookings extension if your model needs it. Each one is a recurring cost and a maintenance obligation, so we justify every addition against what it earns you.',
      },
      {
        question: 'Can you sell in multiple currencies and languages?',
        answer:
          'Yes. We pair WooCommerce with WPML for translated product content, categories and checkout, add a currency switcher with per-currency pricing, and configure tax rules per territory. We have shipped Dutch and Norwegian storefronts and multilingual WordPress builds across eight languages, so we know the details that catch people out, such as translated URLs, hreflang and transactional email language.',
      },
      {
        question: 'How do you handle updates without breaking the shop?',
        answer:
          'Every WooCommerce, WordPress, theme and extension update is applied on a staging clone first, then checked against the critical path: add to cart, checkout, payment, order email and stock adjustment. Only after that does it go to production, with an off-site backup taken immediately beforehand. For stores taking daily orders this discipline is the difference between an update and an outage.',
      },
      {
        question: 'Can you take over an existing WooCommerce store?',
        answer:
          'Yes, starting with an audit of theme quality, extension load, hosting configuration, security and checkout performance. You get a prioritised list separating quick wins from structural work, with honest costs for each. Often the first month is caching, image handling and removing redundant extensions, which produces a visible speed change before any redesign work is even discussed.',
      },
    ],
    relatedProjectSlugs: ['loofys', 'aromashop', 'wegets'],
    relatedServiceSlugs: [
      'ecommerce-development',
      'wordpress-development',
      'website-speed-optimisation',
      'website-maintenance-support',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'headless-jamstack-development',
    title: 'Headless & Jamstack Development',
    category: 'Development',
    icon: 'server',
    short:
      'Decoupled front ends on Next.js with your content in a CMS you already know — near-instant pages, no plugin baggage.',
    metaTitle: 'Headless & Jamstack Development',
    metaDescription:
      'Headless and Jamstack development with Next.js and React. Decoupled front ends, static generation and API-driven content for sites that must be fast and secure.',
    heroTitle: 'Headless and Jamstack Development with Next.js',
    heroIntro:
      'Going headless separates where your content lives from how it is rendered. Editors keep a familiar CMS, while the public site is a statically generated Next.js front end that loads in milliseconds and exposes almost no attack surface. We build this split when speed, security or a custom interface justifies it — and we say so when it does not.',
    whatYouGet: [
      {
        title: 'A statically generated Next.js front end',
        description:
          'Pages are pre-rendered at build time and served from a CDN edge, so visitors get HTML immediately rather than waiting on a database query. Interactive components hydrate only where they are genuinely needed.',
      },
      {
        title: 'Your existing CMS, decoupled',
        description:
          'WordPress can stay as the editing environment, exposed through the REST API or GraphQL while the public front end is rebuilt on Next.js. Your team keeps the admin they know; visitors stop paying the cost of a PHP page render.',
      },
      {
        title: 'A content API layer with sensible caching',
        description:
          'We build a typed data layer between CMS and front end, with revalidation rules, fallbacks and error handling. If the CMS is briefly unavailable, the site keeps serving its last good build instead of showing an error page.',
      },
      {
        title: 'A drastically reduced attack surface',
        description:
          'With no database and no PHP execution on the public host, the usual WordPress attack vectors do not apply to visitor-facing pages. The CMS sits behind authentication on its own origin, hidden from public crawling and probing.',
      },
      {
        title: 'SEO parity with a traditional server-rendered site',
        description:
          'Static generation means crawlers receive full HTML, not an empty shell. We ship per-route metadata, canonical URLs, Open Graph tags, JSON-LD structured data, an enumerated XML sitemap and robots rules as part of the build.',
      },
      {
        title: 'A component library the site is assembled from',
        description:
          'Typed, reusable React components with consistent tokens for colour, type and spacing. New page types are composed from existing pieces, so the tenth page costs far less to build than the first.',
      },
    ],
    process: [
      {
        title: 'Fit assessment',
        description:
          'We check whether headless is genuinely the right call. Content-editing needs, publishing frequency, preview requirements, team capability and budget all feed in. Roughly half the time we recommend a well-built traditional stack instead, and explain why.',
      },
      {
        title: 'Content modelling and API design',
        description:
          'We define the content types, fields and relationships, then design the query layer the front end consumes, including how draft previews and scheduled publishing will work for editors.',
      },
      {
        title: 'Front-end build in Next.js',
        description:
          'Routing, layouts, components, static generation and metadata are built with TypeScript throughout. We wire structured data and internal linking as part of the templates, not as a later pass.',
      },
      {
        title: 'Deployment pipeline setup',
        description:
          'Git-based continuous deployment with preview builds per branch, plus rebuild hooks so publishing in the CMS triggers a fresh static build automatically rather than requiring a developer.',
      },
      {
        title: 'Launch and editor enablement',
        description:
          'DNS cutover with redirects, Lighthouse and Search Console verification, then training so editors understand the publish-to-live flow and know what to expect from build times.',
      },
    ],
    deliverables: [
      'Next.js front end in a Git repository you own',
      'Typed content layer connecting the CMS to the front end',
      'Reusable React component library with design tokens',
      'Static generation for every route with an enumerated sitemap',
      'Per-route metadata, Open Graph tags and JSON-LD structured data',
      'CI/CD pipeline with per-branch preview deployments',
      'CMS rebuild webhooks so publishing triggers deployment',
      'Editor guide covering the publish-to-live workflow',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'WordPress REST API',
      'GraphQL',
      'Node.js',
      'Supabase',
      'Vercel',
      'Cloudflare',
      'Git',
      'Figma',
      'Lighthouse',
      'GA4',
    ],
    idealFor: [
      'Page speed is a competitive or commercial requirement, not a nice-to-have',
      'You want a marketing site decoupled from the app it advertises',
      'Security or compliance rules out running a public CMS',
      'Your front end needs custom interactivity a CMS theme cannot deliver',
      'You have or can hire developers comfortable with React',
      'Content volume is high but changes are predictable and schedulable',
    ],
    faqs: [
      {
        question: 'Is headless always faster than WordPress?',
        answer:
          'Not automatically. A well-built WordPress site with lean templates, caching and a CDN can score excellently on Core Web Vitals. Headless raises the ceiling, particularly for first-byte time and consistency under load, because pages are pre-rendered and served from the edge. The gain is real but it comes with more build complexity, so the site should have a reason to need it.',
      },
      {
        question: 'Will my editors lose the WordPress interface?',
        answer:
          'No. In a decoupled setup WordPress remains the editing environment with the same admin, media library and roles your team already uses. What changes is that publishing triggers a rebuild of the static front end rather than instantly changing a live PHP page. We configure preview builds so editors can see draft content before it goes public.',
      },
      {
        question: 'What are the honest downsides of going headless?',
        answer:
          'More moving parts: a CMS, a front-end repository and a deployment pipeline instead of one system. Preview and form handling need deliberate work rather than coming free. Plugin features that render on the front end no longer apply, so anything from the plugin ecosystem must be rebuilt. And your maintenance requires developers, not just an editor. For many businesses that trade is not worth it.',
      },
      {
        question: 'Can forms and search still work on a static site?',
        answer:
          'Yes. Forms post to a hosted form endpoint or a small serverless function, with client-side validation and a proper success state. Search can be handled with a prebuilt index generated at build time for smaller sites, or a hosted search service for large content sets. Both are planned at architecture stage so they are not discovered as gaps late in the build.',
      },
      {
        question: 'Have you shipped hybrid architectures like this before?',
        answer:
          'Yes. We build split stacks where a fast marketing front end sits on one platform and the application sits on another — LineaScore runs a WordPress landing site in front of a Bubble.io reporting product on an app subdomain. The pattern lets each layer be optimised for a different job, and lets one layer be replaced without touching the other. Where a product outgrows that arrangement entirely we rebuild it outright, as we did for The Boomerang, moving it off Bubble.io onto a custom MERN, Next.js and Supabase application.',
      },
    ],
    relatedProjectSlugs: ['the-boomerang', 'freetoolsgrid', 'lineascore'],
    relatedServiceSlugs: [
      'nextjs-development',
      'website-speed-optimisation',
      'api-development-integrations',
      'web-hosting-devops',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'custom-web-application-development',
    title: 'Custom Web Application Development',
    category: 'Development',
    icon: 'layout-dashboard',
    short:
      'Web applications, dashboards and admin platforms that run your operation instead of a spreadsheet held together by hope.',
    metaTitle: 'Custom Web Application Development',
    metaDescription:
      'Custom web application development: dashboards, portals, admin panels and internal tools built in Bubble.io or Next.js, with workflows and role-based access.',
    heroTitle: 'Custom Web Application Development for Real Workflows',
    heroIntro:
      'When a business outgrows spreadsheets and shared drives, it needs software shaped around its actual process. We build web applications — client portals, operational dashboards, admin panels, internal tools — using Bubble.io where speed of iteration wins and coded stacks where it does not. We have shipped reporting platforms, AI research tools and the admin systems behind live mobile apps.',
    whatYouGet: [
      {
        title: 'A data model designed before any screen',
        description:
          'We map the entities your business works with, how they relate, and which states they move through. Getting this right first is why applications stay flexible; getting it wrong is why so many need rebuilding in eighteen months.',
      },
      {
        title: 'Role-based access and permissions',
        description:
          'Admins, staff, clients and read-only viewers each see exactly what they should. Privacy rules are enforced at the data layer, not just hidden in the interface, so a curious user cannot reach records simply by editing a URL.',
      },
      {
        title: 'Workflow automation that removes manual steps',
        description:
          'Scheduled jobs, status transitions, notification emails, approval chains and recurring tasks run without anyone remembering to trigger them, built in code or in n8n where a visual workflow is easier to change. Every hour of repeated admin work removed is the clearest return the application delivers.',
      },
      {
        title: 'Dashboards and reporting for the people deciding',
        description:
          'Filterable lists, saved views, charts and CSV exports built around the questions your managers actually ask. We have built graph-based data displays and dynamic, configurable report generation including branded PDF output.',
      },
      {
        title: 'Integrations with the systems you already run',
        description:
          'Payment providers, CRMs, email platforms, calendars, cloud storage and LLM APIs connected through documented endpoints, with authentication, rate-limit handling, retries and error logging, so an upstream failure is visible in a log rather than silently losing a record.',
      },
      {
        title: 'A staged rollout rather than a big-bang launch',
        description:
          'We ship a working core to a small group, watch real usage, then extend. This surfaces the requirements interviews always miss and keeps you from paying to build features nobody ends up using.',
      },
    ],
    process: [
      {
        title: 'Process mapping',
        description:
          'We sit with the people doing the work and document the current process end to end, including the workarounds and the spreadsheet nobody admits to. The application is designed to fit that reality, then improve it.',
      },
      {
        title: 'Data model and platform decision',
        description:
          'We design the schema and relationships, then choose the platform honestly: Bubble.io for fast iteration and operational tools, a coded MERN or Next.js stack on MongoDB or Supabase Postgres where performance, scale, code ownership or specific libraries demand it.',
      },
      {
        title: 'Prototype of the critical path',
        description:
          'We build the single most important workflow first and put it in front of real users within weeks. Feedback on something clickable is worth far more than sign-off on a specification document.',
      },
      {
        title: 'Iterative build in reviewed cycles',
        description:
          'Remaining modules are built in short cycles with a working demo at the end of each. You reprioritise between cycles as you learn what matters, rather than waiting months to see the whole thing.',
      },
      {
        title: 'Rollout, training and support',
        description:
          'Data migration, staff training, a pilot group, then full rollout with a support window while usage settles and the inevitable real-world edge cases are ironed out.',
      },
    ],
    deliverables: [
      'Documented data model with entities, relationships and states',
      'Working web application with role-based access control',
      'Admin panel for managing users, records and configuration',
      'Automated workflows, notifications and scheduled jobs',
      'Reporting views with filters, saved views and CSV or PDF export',
      'Third-party and API integrations with error logging',
      'Data migration from existing spreadsheets or systems',
      'User and administrator documentation plus training sessions',
      'Post-launch support window covering fixes and refinements',
    ],
    techStack: [
      'Bubble.io',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'REST APIs',
      'n8n',
      'Stripe',
      'Figma',
      'Cloudflare',
      'GA4',
    ],
    idealFor: [
      'Your operation runs on spreadsheets that several people edit at once',
      'Staff re-key the same data into two or three different systems',
      'Clients need a portal to submit, track or download their own records',
      'Off-the-shelf software fits sixty percent of your process and fights the rest',
      'You need reports your current tools cannot produce',
      'A mobile app needs a web back office to administer it',
    ],
    faqs: [
      {
        question: 'How do you decide between Bubble.io and a coded application?',
        answer:
          'We weigh iteration speed against long-term constraints. Bubble.io wins when requirements are still moving, the user base is measured in hundreds rather than millions, and getting a working tool live in weeks matters more than owning the source. A coded stack wins when you need specific libraries, unusual performance characteristics, full code ownership or a technical due-diligence story for investors.',
      },
      {
        question: 'How long before we have something usable?',
        answer:
          'Usually four to eight weeks for a first working version of the core workflow on Bubble.io, and longer for coded builds. We deliberately sequence the most valuable path first so you get real usage and real feedback early. Full feature sets typically land over three to six months of iterative cycles, with each cycle producing something you can actually try.',
      },
      {
        question: 'Who owns the application and its data?',
        answer:
          'You do. On coded builds you get the repository and the infrastructure accounts. On Bubble.io the application lives in a Bubble account registered to you, with us added as collaborators, and your data is exportable at any time. We do not hold your platform hostage, and transferring ownership to your team or another developer is a straightforward handover.',
      },
      {
        question: 'Can the application talk to the tools we already use?',
        answer:
          'Yes, wherever those tools offer an API. We regularly connect payment providers, CRMs, email platforms, calendars, cloud storage and LLM APIs. We handle authentication, rate limits, retries and logging so integrations fail visibly and recoverably. Where a system has no API, we look at scheduled file exchange or a manual import path rather than pretending an integration exists.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Applications are living systems, so we include a support window covering fixes and small refinements after rollout. Beyond that, most clients keep a monthly retainer for improvements, monitoring and new modules as the business changes. Roughly half our engagements are with clients who have stayed with us for two years or more, which is mostly how ongoing product work goes.',
      },
    ],
    relatedProjectSlugs: ['the-boomerang', 'lineascore', 'tylo-ai', 'swayed'],
    relatedServiceSlugs: [
      'mern-stack-development',
      'bubble-nocode-development',
      'api-development-integrations',
      'ai-llm-integration',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'bubble-nocode-development',
    title: 'Bubble.io & No-Code Development',
    category: 'Development',
    icon: 'zap',
    short:
      'Full-stack Bubble.io applications built by developers, so you get real architecture at no-code speed.',
    metaTitle: 'Bubble.io Development Agency',
    metaDescription:
      'Bubble.io development for SaaS products, marketplaces, AI tools and admin panels. Full-stack no-code builds with real data design, privacy rules and workflows.',
    heroTitle: 'Bubble.io Development for Products That Need to Ship',
    heroIntro:
      'Bubble.io lets us build a working, database-backed application in weeks rather than quarters — but only if it is architected like software rather than assembled like a slide deck. We have delivered seven Bubble products, including AI research and interview platforms, an AI image-generation SaaS, a marketplace admin panel and a reporting tool with custom PDF generation.',
    whatYouGet: [
      {
        title: 'A database designed for how the product will grow',
        description:
          'Data types, fields, option sets and relationships planned before workflows are built. Bubble applications get slow and expensive when everything is stuffed into one bloated type; a clean schema keeps searches fast and workload units sane.',
      },
      {
        title: 'Privacy rules enforced at the data layer',
        description:
          'Bubble’s privacy rules are the real security boundary, and hiding an element is not security. We set explicit rules per data type so users can only retrieve records they are entitled to, then test them from each role’s perspective.',
      },
      {
        title: 'Workflows built to be readable and maintainable',
        description:
          'Named, grouped and commented workflows with reusable custom events and backend workflows for anything long-running. The next developer — or you — can open the editor and understand what happens without reverse-engineering it.',
      },
      {
        title: 'API and AI integrations through the API Connector',
        description:
          'Payments, email, storage and multiple AI or LLM providers wired with proper authentication, timeouts, error states and cost awareness. We have integrated multiple AI models into live products, including image generation and conversational tools.',
      },
      {
        title: 'Responsive interfaces that hold up on mobile',
        description:
          'Built with Bubble’s responsive engine using containers and constraints rather than fixed positions, then tested on real handsets. Most Bubble apps that feel broken on phones were designed at one desktop width and never checked.',
      },
      {
        title: 'Performance and cost management',
        description:
          'We monitor workload unit consumption, replace expensive repeated searches with cached values, move heavy work to backend workflows, and tell you what your Bubble plan will realistically cost at your expected usage before you launch.',
      },
    ],
    process: [
      {
        title: 'Product definition and scope',
        description:
          'We define the core user journeys and the minimum feature set that makes the product genuinely useful. Bubble makes adding features easy, which is precisely why disciplined scoping matters more here, not less.',
      },
      {
        title: 'Database and privacy architecture',
        description:
          'Data types, relationships, option sets and privacy rules are designed and documented before build. This is the part that determines whether the app is still fast and safe once it holds real volume.',
      },
      {
        title: 'Core build with weekly demos',
        description:
          'Pages, reusable elements and workflows are built in priority order, with a live demo link you can use every week. Feedback goes straight into the next cycle instead of accumulating into a late redesign.',
      },
      {
        title: 'Integration and testing',
        description:
          'External APIs, payments and AI providers are connected and tested against failure cases as well as happy paths. We test every user role against the privacy rules and confirm mobile behaviour on real devices.',
      },
      {
        title: 'Launch on your domain and handover',
        description:
          'Deployment to live on your own domain or app subdomain, version control noted, workload monitoring in place, and an editor walkthrough so your team can make simple changes themselves.',
      },
    ],
    deliverables: [
      'Live Bubble.io application on a Bubble account you own',
      'Documented database schema with data types and relationships',
      'Privacy rules configured and tested per user role',
      'Named, organised workflows including backend workflows',
      'API Connector setup for payments, email and AI providers',
      'Responsive layouts verified on real mobile devices',
      'Admin panel for managing users, content and settings',
      'Workload unit report with expected running costs',
      'Editor walkthrough recording plus written handover notes',
    ],
    techStack: [
      'Bubble.io',
      'Bubble API Connector',
      'REST APIs',
      'Stripe',
      'OpenAI API',
      'Anthropic API',
      'JavaScript',
      'Figma',
      'Next.js',
      'WordPress',
      'GA4',
    ],
    idealFor: [
      'You need a working product in front of users within weeks',
      'Requirements are still evolving and will change during the build',
      'You are validating a SaaS idea before committing to a coded platform',
      'A mobile app needs a web admin panel to run behind it',
      'Your internal tool needs logins, roles and a real database',
      'You want to iterate without a full engineering team on payroll',
    ],
    faqs: [
      {
        question: 'Is Bubble.io suitable for a real, revenue-generating product?',
        answer:
          'Yes, when it is built properly. Our Bubble projects include live AI SaaS products with paying users, a reporting platform with custom PDF generation, and admin panels running the operations behind released mobile apps. The limits are real but specific: very high concurrent load, unusual computation, and situations where you must own source code. We flag those in discovery rather than after signing.',
      },
      {
        question: 'What happens if we outgrow Bubble?',
        answer:
          'It is a manageable transition, not a cliff, and we have done it. We supported The Boomerang on Bubble.io for six to eight months, then rebuilt the product on MERN, Next.js and Supabase when a custom solution became the better fit. Your data is exportable, and where a migration looks likely we keep integrations behind clean API boundaries so external services do not need rewiring when the move happens.',
      },
      {
        question: 'How much does a Bubble application cost to run?',
        answer:
          'You pay Bubble a monthly plan plus workload units based on actual usage, and any third-party API costs on top such as LLM calls or payment fees. Poorly built apps burn workload units through repeated searches and unnecessary workflows. We monitor consumption during the build, optimise the expensive paths, and give you a realistic monthly estimate before launch.',
      },
      {
        question: 'Can Bubble handle AI and LLM features?',
        answer:
          'Yes, and it is one of the things we do most. Through the API Connector we integrate LLM and AI image models for conversational products, generated content and analysis features. We have built an adaptive AI interview platform, an AI research tool with graph-based data display, and an AI image generation suite for tattoo artists. Key details are streaming behaviour, timeouts, retries and per-user cost control.',
      },
      {
        question: 'Will I be locked out of my own app?',
        answer:
          'No. The application is created under a Bubble account registered to you, and we work as collaborators on it. You hold the billing, the domain and the data, and can remove our access at any time. We also provide an editor walkthrough so your team can handle content and simple changes without needing us for every adjustment.',
      },
    ],
    relatedProjectSlugs: ['tylo-ai', 'mocki', 'inkgenx', 'lineascore'],
    relatedServiceSlugs: [
      'saas-product-development',
      'custom-web-application-development',
      'ai-llm-integration',
      'mobile-app-development',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    category: 'Development',
    icon: 'package',
    short:
      'From idea to a subscription product with real users: onboarding, billing, admin and the marketing site that sells it.',
    metaTitle: 'SaaS Product Development Services',
    metaDescription:
      'SaaS product development from MVP to launch: subscription billing, onboarding, multi-tenant data, admin tooling and the marketing site that converts trials.',
    heroTitle: 'SaaS Product Development From MVP to Paying Users',
    heroIntro:
      'Building the software is only part of shipping a SaaS product. You also need signup and onboarding, subscription billing that handles upgrades and failures, an admin view of what users are doing, and a marketing site that turns interest into trials. We build all four — and we have shipped live SaaS products in AI research, interview coaching, image generation and automated reporting.',
    whatYouGet: [
      {
        title: 'An MVP scoped to prove the core value',
        description:
          'We identify the one thing your product must do better than the alternatives and build that first, properly. Everything else waits until real users have told you it matters, which is cheaper than building a roadmap on assumptions.',
      },
      {
        title: 'Multi-tenant data architecture',
        description:
          'Accounts, workspaces, team members and per-plan limits designed from the start, with strict data isolation between tenants enforced at the data layer. Retrofitting proper tenancy onto a single-user prototype is one of the most expensive rewrites there is.',
      },
      {
        title: 'Subscription billing that survives real life',
        description:
          'Stripe subscriptions with trials, plan changes, proration, coupons, failed-payment retries, dunning emails and cancellation flows. Plan entitlements are enforced in the product itself, so downgrades actually restrict access rather than just changing an invoice.',
      },
      {
        title: 'Onboarding that gets users to first value fast',
        description:
          'Signup, verification, a guided first-run experience and sensible starter data so a new account is never an empty screen. Most trial churn happens in the first session, and this is where it is either prevented or guaranteed.',
      },
      {
        title: 'Admin and support tooling',
        description:
          'An internal panel to view accounts, impersonate for support, adjust plans, issue credits and inspect activity. Without it, every support request becomes a developer request, and that cost grows with every customer you add.',
      },
      {
        title: 'A marketing site built to convert trials',
        description:
          'Positioning, pricing page, feature pages and a signup path, built fast and SEO-ready on WordPress or Next.js. We routinely split the marketing site and the application across platforms and domains, which keeps each one easy to change.',
      },
      {
        title: 'Product analytics from day one',
        description:
          'Signup, activation, feature usage, conversion and churn tracked from launch rather than added after a fundraising conversation. You need to know which features earn retention before you decide what to build next.',
      },
    ],
    process: [
      {
        title: 'Product and market definition',
        description:
          'We pin down the specific user, the job they are hiring your product for, the pricing model and what the first version must include to be worth paying for. Scope discipline here is what keeps an MVP an MVP.',
      },
      {
        title: 'Architecture and platform choice',
        description:
          'Data model, tenancy, plan entitlements and integration points designed, then platform chosen: Bubble.io for fast iteration and early traction, a coded MERN and Next.js stack on Supabase or another Postgres where scale, code ownership or diligence requirements demand it.',
      },
      {
        title: 'MVP build and private beta',
        description:
          'We build the core loop and put it in front of a small group of real users under an invite gate, watching behaviour rather than relying on stated preferences.',
      },
      {
        title: 'Billing, onboarding and admin',
        description:
          'Once the core is validated we add subscriptions, entitlement enforcement, onboarding flows and the internal admin tooling that makes the product supportable at volume.',
      },
      {
        title: 'Public launch and iteration',
        description:
          'Marketing site live, analytics verified, launch executed, then a steady cycle of improvements driven by activation and retention data rather than by whoever shouted most recently.',
      },
    ],
    deliverables: [
      'Working SaaS application with authentication and account management',
      'Multi-tenant data model with enforced isolation between accounts',
      'Stripe subscription billing with trials, upgrades and dunning',
      'Plan entitlements enforced inside the product',
      'Onboarding flow with guided first-run experience',
      'Internal admin panel with support impersonation',
      'Marketing site with pricing and feature pages',
      'Product analytics tracking activation, conversion and churn',
      'Technical and user documentation plus handover session',
    ],
    techStack: [
      'Bubble.io',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'Stripe',
      'OpenAI API',
      'Anthropic API',
      'WordPress',
      'Figma',
      'GA4',
      'GTM',
    ],
    idealFor: [
      'You have a validated problem and need a product in front of users',
      'You are a founder without an in-house engineering team yet',
      'An internal tool you built is worth selling to others in your industry',
      'A services business wants a productised, subscription version of its offer',
      'You need billing, onboarding and admin, not just the core feature',
      'You want the app and the marketing site delivered by one team',
    ],
    faqs: [
      {
        question: 'How long does an MVP take?',
        answer:
          'On Bubble.io, a focused MVP covering one core workflow with authentication and basic billing typically takes eight to twelve weeks. Coded builds run longer. The determining factor is scope discipline: founders who insist on three user types and a mobile app in version one see timelines double. We push hard for a narrow first release because it gets you real feedback sooner.',
      },
      {
        question: 'Should the marketing site and the app be on the same platform?',
        answer:
          'Usually not, and we build them separately by default. Marketing pages need speed, SEO and frequent copy edits; the application needs workflows and a database. We commonly ship the marketing site on WordPress or Next.js with the product on an app subdomain — as with our reporting SaaS and hybrid Next.js builds. Each side can then change without risking the other.',
      },
      {
        question: 'Can you handle subscription billing properly?',
        answer:
          'Yes, and it is more work than most founders expect. Beyond taking payments there are trials, plan changes with proration, coupons, tax handling, failed-payment retries, dunning emails, cancellation and reactivation. Crucially, plan limits must be enforced inside the product so downgrades really restrict access. We implement this with Stripe and test each state before launch.',
      },
      {
        question: 'What if we raise funding and need to scale the team?',
        answer:
          'We build with that transition in mind. Coded projects ship with documented repositories, environment setup notes and a clean commit history so an incoming team can take over. Bubble projects come with a documented schema and organised workflows, and we help plan a staged migration if you outgrow the platform. We are also happy to work alongside your first hires during the handover.',
      },
      {
        question: 'Do you take equity instead of fees?',
        answer:
          'No. We work on a fee basis, which keeps the relationship straightforward and our incentives aligned with delivering the specific product you need. What we do offer is phased scoping so budget goes to the version that proves the idea first, then to expansion once there is evidence. Most of our product clients stay with us for two years or more.',
      },
    ],
    relatedProjectSlugs: ['lineascore', 'tylo-ai', 'mocki', 'ubcruit'],
    relatedServiceSlugs: [
      'bubble-nocode-development',
      'custom-web-application-development',
      'headless-jamstack-development',
      'landing-page-development',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Development',
    icon: 'smartphone',
    short:
      'Mobile products delivered end to end: installable web apps, plus the admin panels and API back ends that run native apps.',
    metaTitle: 'Mobile App Development Services',
    metaDescription:
      'Mobile app development covering installable progressive web apps and the Bubble.io admin panels, APIs and back ends that power live native mobile applications.',
    heroTitle: 'Mobile App Development and the Platforms Behind Them',
    heroIntro:
      'A mobile app is only the part users tap. Behind it sits the database, the admin panel, the API and the operational tooling your team works in daily — and that is where we have delivered, including the Bubble.io web admin platforms running a two-sided beauty marketplace and a healthcare mobile product. For many businesses we also build an installable web app instead, at a fraction of the cost.',
    whatYouGet: [
      {
        title: 'An honest recommendation on native versus web',
        description:
          'Many mobile ideas do not need an app store listing at all. We assess whether push notifications, offline use, camera access or store presence genuinely require a native shell, or whether an installable progressive web app delivers the same outcome sooner and cheaper.',
      },
      {
        title: 'The web admin panel your operations team lives in',
        description:
          'User management, provider or content moderation, listings, bookings, support tools and reporting, built in Bubble.io. This is exactly what we delivered behind a live hairstyle marketplace app and a healthcare mobile product.',
      },
      {
        title: 'The back end and API layer your app calls',
        description:
          'Data model, authentication, business logic and documented endpoints your native developers consume, with versioning, error handling and rate limiting considered so the app and the back end can evolve at different speeds.',
      },
      {
        title: 'Installable progressive web apps',
        description:
          'Home-screen installation, offline caching, push notifications where the platform supports them, and app-like navigation — delivered from one codebase, updated instantly, with no store review queue between you and a fix.',
      },
      {
        title: 'Two-sided marketplace mechanics',
        description:
          'Separate journeys for customers and providers, matching and availability logic, booking flows, moderation and payout tracking. We have built the operational platform behind exactly this model in the beauty services sector.',
      },
      {
        title: 'Mobile-first interface design',
        description:
          'Thumb-reachable navigation, touch targets sized for real fingers, forms that use the correct mobile keyboards, and layouts tested on actual handsets rather than a desktop browser narrowed to phone width.',
      },
    ],
    process: [
      {
        title: 'Platform assessment',
        description:
          'We map required capabilities against what web can genuinely do today, and give you a clear recommendation: progressive web app, native shell with a web-built back office, or fully native with partner developers for the client application.',
      },
      {
        title: 'Data model and API design',
        description:
          'Users, roles, records and states are designed alongside the endpoints the mobile client will consume. This becomes the contract between whoever builds the app and whoever builds the platform behind it.',
      },
      {
        title: 'Admin platform and back-end build',
        description:
          'We build the operational side in Bubble.io: authentication, permissions, moderation tooling, reporting and the workflows your staff use every day, tested with real data before launch.',
      },
      {
        title: 'Mobile interface build or integration',
        description:
          'Either we build the installable web app front end, or we integrate and test against your native developers’ client, resolving API mismatches and edge cases together.',
      },
      {
        title: 'Launch, monitoring and iteration',
        description:
          'Release, monitor real usage and errors, then iterate on the friction that appears once actual users arrive rather than the friction predicted in a planning document.',
      },
    ],
    deliverables: [
      'Platform recommendation with honest cost and capability comparison',
      'Documented data model and API specification for the mobile client',
      'Web admin panel with role-based access and moderation tools',
      'Installable progressive web app where a native shell is not required',
      'Push notification and offline strategy appropriate to the platform',
      'Operational reporting and export tooling for the team',
      'Mobile interface designs tested on real devices',
      'Admin training recording and written operations runbook',
    ],
    techStack: [
      'Bubble.io',
      'Next.js',
      'React',
      'TypeScript',
      'REST APIs',
      'Service Workers',
      'Web Push',
      'Stripe',
      'Figma',
      'Cloudflare',
      'GA4',
      'Lighthouse',
    ],
    idealFor: [
      'You have a native app and need a proper web admin panel behind it',
      'Your mobile idea needs validating before store-listed development',
      'You run a two-sided marketplace needing customer and provider journeys',
      'Your team manages app users and content through a database directly',
      'An installable web app would meet your needs faster than a native build',
      'You need one team owning the back end while another builds the app',
    ],
    faqs: [
      {
        question: 'Do you build native iOS and Android apps yourselves?',
        answer:
          'We are straight about this: our delivered mobile work is the platform side — Bubble.io web admin panels, back ends and APIs powering live native apps, including a two-sided beauty marketplace and a healthcare product. For the native client itself we either build an installable progressive web app, or work alongside native developers while we own the back end and admin platform.',
      },
      {
        question: 'Would a progressive web app work instead of a native app?',
        answer:
          'Often, yes. Installable web apps handle home-screen launch, offline caching, push notifications on most platforms, camera and location access, and app-like navigation. They do not suit heavy 3D, deep hardware integration, or businesses whose customers genuinely search the app stores to discover them. We walk through your specific requirements and give you a straight answer before you spend anything.',
      },
      {
        question: 'Why does an app need a separate admin panel?',
        answer:
          'Because someone has to run it. Approving providers, moderating content, handling refunds, resolving support tickets, adjusting listings and reading usage reports all happen outside the customer app. Without a purpose-built panel, staff end up editing database records directly, which is slow, error-prone and impossible to delegate safely. It is the piece most app projects underestimate.',
      },
      {
        question: 'How do the app and the back end stay in sync?',
        answer:
          'Through a documented API contract agreed before either side starts building, with versioned endpoints so the back end can change without breaking older app versions already installed on people’s phones. We handle authentication, error responses and rate limiting explicitly, and we test against real client calls on real devices rather than assuming a written specification alone will hold up in production.',
      },
      {
        question: 'Can you take over the back end of an existing app?',
        answer:
          'Yes, provided we can review what exists: the data model, current admin arrangements and how the client application authenticates. We start with an audit and a written assessment of what is sound, what needs work and what should be replaced. Where there is no real admin tooling, that is usually the first thing we build because it immediately reduces day-to-day cost.',
      },
    ],
    relatedProjectSlugs: ['swayed', 'bostmd', 'mocki'],
    relatedServiceSlugs: [
      'progressive-web-apps',
      'bubble-nocode-development',
      'custom-web-application-development',
      'api-development-integrations',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'progressive-web-apps',
    title: 'Progressive Web Apps',
    category: 'Development',
    icon: 'globe',
    short:
      'App-like experiences that install to the home screen, work offline and update instantly — with no app store in the way.',
    metaTitle: 'Progressive Web App (PWA) Development',
    metaDescription:
      'Progressive web app development: installable, offline-capable web apps with push notifications and app-like speed, without app store review or two codebases.',
    heroTitle: 'Progressive Web App Development Without the App Store',
    heroIntro:
      'A progressive web app installs to the home screen, opens without browser chrome, works when the connection drops and updates the moment you deploy. For most businesses weighing up a native app, it delivers the experience customers actually wanted — from one codebase, discoverable in search, with no review queue standing between a bug and its fix.',
    whatYouGet: [
      {
        title: 'Installable app experience',
        description:
          'A proper web app manifest with icons for every device size, a standalone display mode, splash screen and theme colour, plus a considered install prompt that appears once a visitor has shown intent rather than immediately on arrival.',
      },
      {
        title: 'Offline capability via service workers',
        description:
          'A caching strategy matched to your content: app shell cached first, critical pages precached, API responses served stale-while-revalidate, and a designed offline screen instead of the browser’s dinosaur when the network disappears.',
      },
      {
        title: 'Push notifications where supported',
        description:
          'Web push for re-engagement on supported platforms, with permission requested in context rather than on first load, a preference centre for users, and honest guidance from us on current platform limitations before you build a strategy on it.',
      },
      {
        title: 'Performance held to app-like standards',
        description:
          'A progressive web app that stutters defeats the point. We enforce a performance budget, code-split routes, preload critical assets, use modern image formats and verify Core Web Vitals on mid-range Android hardware, not just flagship devices.',
      },
      {
        title: 'Native-feeling interface patterns',
        description:
          'Bottom navigation within thumb reach, instant route transitions, skeleton states instead of spinners, pull-to-refresh where it fits, and correct mobile keyboard types on every input. The details are what make it stop feeling like a website.',
      },
      {
        title: 'Discoverable and indexable, unlike an app',
        description:
          'Your progressive web app is still a website: every screen has a URL, renders server-side or statically, and can rank in search and be shared as a link. You get app-like engagement without giving up the acquisition channel that search provides.',
      },
    ],
    process: [
      {
        title: 'Requirements and capability check',
        description:
          'We list the device capabilities you need — offline, notifications, camera, location, background sync — and verify each against current browser support on your users’ actual platforms before committing to the approach.',
      },
      {
        title: 'Architecture and caching strategy',
        description:
          'We decide what is cached, for how long, and how updates reach installed users. Getting the caching model right early prevents the classic progressive web app failure where users are stuck on a stale version.',
      },
      {
        title: 'Build with an enforced performance budget',
        description:
          'The application is built in Next.js with route-level code splitting, the service worker registered and tested, and bundle size checked at each stage rather than measured with dismay at the end.',
      },
      {
        title: 'Device and network testing',
        description:
          'Testing on real iOS and Android devices across throttled networks and fully offline, verifying install flow, update flow, notifications and every offline fallback screen behaves as designed.',
      },
      {
        title: 'Launch and adoption tracking',
        description:
          'We go live and then measure what matters: install rate, notification opt-in, offline sessions and repeat engagement, so improvements target the step where users are actually dropping out.',
      },
    ],
    deliverables: [
      'Installable progressive web app with complete manifest and icon set',
      'Service worker with a documented caching and update strategy',
      'Designed offline experience and fallback screens',
      'Web push notification setup with a user preference centre',
      'Lighthouse progressive web app and performance audit results',
      'Device test report across real iOS and Android handsets',
      'In-context install prompt with tracked conversion',
      'Analytics for installs, notification opt-ins and offline usage',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Service Workers',
      'Web App Manifest',
      'Web Push',
      'IndexedDB',
      'WordPress REST API',
      'Cloudflare',
      'Figma',
      'Lighthouse',
      'GA4',
    ],
    idealFor: [
      'You want an app experience without funding two native codebases',
      'App store review cycles would slow your release cadence unacceptably',
      'Your users work in places with unreliable or intermittent connectivity',
      'You need to be found in search as well as used repeatedly',
      'You are testing whether an app is worth building at all',
      'Your existing site is used heavily on mobile by returning visitors',
    ],
    faqs: [
      {
        question: 'How is a progressive web app different from a normal website?',
        answer:
          'A progressive web app is a website with three additions: a manifest so it can install to the home screen and open without browser chrome, a service worker so it keeps working offline and loads instantly on repeat visits, and optional push notifications. Underneath it is still a site with URLs that search engines can crawl, which a native app can never be.',
      },
      {
        question: 'Do progressive web apps work on iPhones?',
        answer:
          'Yes. iOS supports home-screen installation, standalone display, service workers and offline caching, and recent versions support web push for apps added to the home screen. There are still differences from Android, including storage eviction after long inactivity and a less prominent install flow. We test on real iOS devices and tell you the specific limitations for your use case.',
      },
      {
        question: 'Can a progressive web app be listed in the app stores?',
        answer:
          'It can be packaged for the Google Play Store using a trusted web activity, so Android users can install it from the store as usual. Apple’s App Store rules are stricter about apps that are only a website wrapper, so listing there typically requires genuine native functionality. If store presence is essential to how customers find you, we will say so early.',
      },
      {
        question: 'What does offline actually mean in practice?',
        answer:
          'It depends on the caching strategy we design with you. At minimum, previously visited pages and the app shell load instantly without a connection. Beyond that we can cache reference content for full offline reading, queue form submissions and sync them when the connection returns, or store user data locally in IndexedDB. Full offline write support costs more, so we scope it to what you need.',
      },
      {
        question: 'Will a progressive web app hurt my SEO?',
        answer:
          'Done correctly it helps. We build with server-side rendering or static generation so crawlers receive full HTML, keep a real URL for every screen, and ship proper metadata and structured data. The speed improvements from caching also support Core Web Vitals. The one genuine risk is a client-only rendering approach that shows crawlers an empty shell, which we do not build.',
      },
    ],
    relatedProjectSlugs: ['mocki', 'wegets', 'inkgenx'],
    relatedServiceSlugs: [
      'mobile-app-development',
      'website-speed-optimisation',
      'custom-web-application-development',
      'headless-jamstack-development',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mern-stack-development',
    title: 'MERN Stack Development',
    category: 'Development',
    icon: 'layers',
    short:
      'Custom applications in MongoDB, Express, React and Node — the coded stack we move products onto when no-code stops paying its way.',
    metaTitle: 'MERN Stack Development Services',
    metaDescription:
      'MERN stack development with MongoDB, Express, React and Node. Custom applications, internal panels and migrations off no-code platforms, built for you to own.',
    heroTitle: 'MERN Stack Development for Products That Outgrew No-Code',
    heroIntro:
      'MERN — MongoDB, Express, React and Node.js — is what we build on when a product needs code it owns outright. We know that transition first-hand: we supported The Boomerang on Bubble.io for six to eight months, then rebuilt the product as a custom MERN and Next.js application on Supabase, including the internal panel that replaced the Airtable they had been paying for alongside it.',
    whatYouGet: [
      {
        title: 'A data model designed before the first screen',
        description:
          'We map entities, relationships and states, then pick the store that fits them — MongoDB where records are document-shaped and still moving, Supabase Postgres where relational integrity and row-level security matter more. That decision gets made once, deliberately, rather than inherited from a tutorial.',
      },
      {
        title: 'One language across the whole stack',
        description:
          'TypeScript runs from the data layer through the Express API into the React front end, with shared types so a field renamed on the server breaks the build rather than somebody’s screen. Fewer runtime surprises, and far less guesswork for whoever maintains the codebase next.',
      },
      {
        title: 'An API layer with authentication done properly',
        description:
          'Express endpoints with real session or token authentication, role checks enforced server-side, validated request bodies and consistent error responses. Permissions live in the API rather than in whether the interface renders a button, so a curious user with a browser console gets nowhere.',
      },
      {
        title: 'Internal panels that replace the tools you rent',
        description:
          'Operations software you subscribe to usually does one job your team genuinely needs. For The Boomerang we built a Data Team Panel that replaced the Airtable running alongside their no-code platform, putting the same records in a database they own and can query directly.',
      },
      {
        title: 'Automation wired into the product, not bolted beside it',
        description:
          'Scheduled syncs, background jobs, notifications and multi-step integrations, built in n8n where a visual workflow is easier for your team to change and in code where it belongs in the repository. We built exactly this pairing for The Boomerang, and documented both halves.',
      },
      {
        title: 'Code, infrastructure and data you own outright',
        description:
          'The repository, the database, the hosting accounts and the environment configuration all sit in your name from the first commit. No proprietary editor, no per-seat editor licence, and no awkward conversation about export limits if you decide to continue with someone else.',
      },
    ],
    process: [
      {
        title: 'Audit and migration assessment',
        description:
          'Where a system already exists we go through its data model, workflows and integrations, and separate what must be carried over from what was only ever a workaround for the old platform. A rebuild is the one chance to leave those workarounds behind.',
      },
      {
        title: 'Schema and API contract design',
        description:
          'We design the database schema, the endpoints the front end will call and the authentication model, then write them down. Front end and back end can then be built in parallel against an agreed contract instead of waiting on each other.',
      },
      {
        title: 'Core build in reviewed cycles',
        description:
          'The most important workflow is built and deployed first, then the rest in short cycles with a working environment you can use at the end of each. You reprioritise as you see it running rather than at a launch meeting.',
      },
      {
        title: 'Data migration and parallel running',
        description:
          'We import your existing records, reconcile counts on both sides, and run the new system alongside the old one while your team works in it on real data. Discrepancies surface while there is still a fallback.',
      },
      {
        title: 'Cutover, monitoring and handover',
        description:
          'We switch traffic over with monitoring and error reporting already in place, keep the previous platform readable for a defined period, and hand across the repository, infrastructure and documentation with a walkthrough for your team.',
      },
    ],
    deliverables: [
      'Node.js and Express API with documented endpoints and authentication',
      'React front end, delivered as a Next.js application where routing and SEO matter',
      'MongoDB or Supabase Postgres schema with migrations under version control',
      'Internal admin or data panel with role-based access',
      'Data migration from the previous platform with record counts reconciled',
      'n8n or in-code automations covering scheduled and event-driven work',
      'Git repository, environment configuration and deployment pipeline in your accounts',
      'Technical documentation plus a handover walkthrough for your team or next developer',
    ],
    techStack: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'REST APIs',
      'n8n',
      'Stripe',
      'Git',
      'Vercel',
      'Cloudflare',
    ],
    idealFor: [
      'Your no-code application is hitting cost, performance or capability limits',
      'You pay monthly for a tool holding data that should live in your own database',
      'Investors or enterprise buyers expect to see source code and infrastructure',
      'The product needs logic your current platform simply cannot express',
      'Your team needs an internal panel around the data, not only a customer-facing app',
      'You want one team owning the rebuild, the migration and the cutover',
    ],
    faqs: [
      {
        question: 'Should we rebuild in MERN or stay on our no-code platform?',
        answer:
          'Stay if the platform still fits. Rebuilding costs real money and time, and a working no-code product with room left in it is not a problem that needs solving. The case for moving arrives when platform costs scale faster than revenue, when a feature you need cannot be expressed there at all, or when owning the source becomes a commercial requirement. We tell you which of those applies before quoting anything.',
      },
      {
        question: 'You mention MERN and Supabase — which database do you actually use?',
        answer:
          'Whichever fits the data. MERN traditionally means MongoDB, and we use it where records are document-shaped and the schema is still moving. On The Boomerang rebuild we used Supabase, which is Postgres, because the data was relational and row-level security let us enforce permissions at the database itself. Express, React and Node stay the same either way, so the label matters less than the fit.',
      },
      {
        question: 'How do you migrate without stopping the business?',
        answer:
          'In stages. We stand the new system up alongside the old one, migrate data with record counts reconciled on both sides, and run the two in parallel while your team works in the new panel on real records. Only once the new system is demonstrably correct do we cut traffic over, and the previous platform stays readable for a defined period afterwards in case something needs checking.',
      },
      {
        question: 'Do you build the front end in plain React or in Next.js?',
        answer:
          'Next.js in almost every case. It gives us routing, server rendering and static generation without assembling them ourselves, which matters the moment any part of the product has to be found in search or shared as a link. Plain React with a client-side router is still the right answer for an application that lives entirely behind a login and never needs indexing.',
      },
      {
        question: 'Who maintains the application after launch?',
        answer:
          'Whoever you want to. The handover is built for either answer: you get the repository, the infrastructure accounts, environment notes and a recorded walkthrough, so an in-house developer or another agency can pick it up cleanly. Most clients keep us on a monthly retainer for improvements and monitoring instead, and roughly half our engagements have run for two years or more.',
      },
    ],
    relatedProjectSlugs: ['the-boomerang'],
    relatedServiceSlugs: [
      'nextjs-development',
      'custom-web-application-development',
      'bubble-nocode-development',
      'n8n-automation',
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nextjs-development',
    title: 'Next.js Development',
    category: 'Development',
    icon: 'rocket',
    short:
      'Next.js sites and applications on the App Router — statically generated, server-rendered where it counts, and indexable by default.',
    metaTitle: 'Next.js Development Agency',
    metaDescription:
      'Next.js development for websites and web apps: App Router, server components, static generation and SEO built into every route, on hosting you control.',
    heroTitle: 'Next.js Development for Sites and Apps That Load Instantly',
    heroIntro:
      'Next.js is what we reach for when a site has to be fast, indexable and genuinely interactive at the same time. FreeToolsGrid, our own free-tools product, runs on it. So does the site you are reading. So does The Boomerang front end we rebuilt after moving that product off Bubble.io. We build on the App Router with static generation as the default and server rendering where it earns its place.',
    whatYouGet: [
      {
        title: 'Static generation by default',
        description:
          'Routes are prerendered at build time and served as finished HTML, so the first byte is a file rather than a database query. Server rendering is kept for the routes that genuinely need per-request data, which is a much shorter list than most builds assume.',
      },
      {
        title: 'App Router architecture used as designed',
        description:
          'Nested layouts, route groups, streaming and server components used properly rather than bolted onto an older pattern. Data fetching happens on the server where credentials stay safe, and the browser ships JavaScript only for the components that actually need to be interactive.',
      },
      {
        title: 'SEO built into the route, not added by a plugin',
        description:
          'Per-route metadata, canonical URLs, Open Graph and Twitter tags, JSON-LD structured data, an enumerated XML sitemap and robots rules, all generated from the same content the pages render. Nothing drifts out of sync, because there is only one source of truth.',
      },
      {
        title: 'A typed component library the site is assembled from',
        description:
          'TypeScript components built on design tokens for colour, type and spacing, so the tenth page costs a fraction of the first. New sections get composed from existing pieces instead of hand-built, which is what keeps layouts consistent as a site grows past fifty pages.',
      },
      {
        title: 'Content in a form your team can genuinely work with',
        description:
          'Typed content files where a site changes on a release cadence, or a headless CMS with rebuild webhooks where editors publish daily. We recommend one based on who edits and how often, not on which is more interesting for us to build.',
      },
      {
        title: 'Deployment, previews and hosting you control',
        description:
          'Git-based deployment with a preview build for every branch, environment configuration documented, and hosting on Vercel, Cloudflare or any plain static host. The repository and the accounts are yours, so moving hosts later is a configuration change rather than a rebuild.',
      },
    ],
    process: [
      {
        title: 'Fit assessment',
        description:
          'We check whether Next.js is genuinely the right answer for your situation or whether a well-built WordPress site would serve you better. Publishing frequency, who edits, budget and the level of custom interactivity all feed into that recommendation, and we give it honestly.',
      },
      {
        title: 'Routes, content model and data sources',
        description:
          'We map every route, decide which are static and which need server rendering, define the content model, and settle where the content lives — typed files, a headless CMS or an API — before any component is written.',
      },
      {
        title: 'Design system and component build',
        description:
          'Tokens for colour, type, spacing and motion come first, then the shared components every page is composed from. Building this layer up front is why later templates take days rather than weeks.',
      },
      {
        title: 'Route implementation with metadata and schema',
        description:
          'Pages are built alongside their metadata, structured data and internal linking rather than in a later SEO pass, and the whole site is checked as a static build so nothing depends on a server that will not exist in production.',
      },
      {
        title: 'Performance verification, launch and handover',
        description:
          'Lighthouse and Core Web Vitals measured on real templates, redirects mapped from any previous site, DNS and SSL handled at cutover, then the repository, pipeline and an editor walkthrough handed over.',
      },
    ],
    deliverables: [
      'Next.js App Router site or application in a Git repository you own',
      'Typed, reusable React component library built on design tokens',
      'Static generation for every route, with an enumerated XML sitemap',
      'Per-route metadata, Open Graph tags and JSON-LD structured data',
      'Content layer as typed files or a connected headless CMS with rebuild hooks',
      'CI/CD pipeline with a preview deployment per branch',
      'Core Web Vitals report measured on real page templates',
      'Redirect map from any previous URLs, plus an editor and developer guide',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Supabase',
      'WordPress REST API',
      'GraphQL',
      'Vercel',
      'Cloudflare',
      'Git',
      'Figma',
      'Lighthouse',
      'GA4',
    ],
    idealFor: [
      'Page speed is a commercial requirement rather than a nice-to-have',
      'Your site needs custom interactivity a CMS theme cannot deliver cleanly',
      'You want a marketing front end decoupled from the application behind it',
      'Content changes on a release cadence rather than several times a day',
      'You have or can hire developers who are comfortable with React',
      'You want the source, the pipeline and the hosting accounts in your name',
    ],
    faqs: [
      {
        question: 'Is Next.js better than WordPress for my site?',
        answer:
          'Not universally, and we will say so. WordPress wins when non-technical people publish frequently and need an editor with a media library, which is why 42 of our builds run on it. Next.js wins on raw speed, custom interfaces and sites that are really applications wearing a marketing site. The honest test is who edits the content and how often, so we ask that before recommending either.',
      },
      {
        question: 'Who edits the content on a Next.js site?',
        answer:
          'That depends on the setup we choose together. For sites that change on a release cadence, content lives in typed files and updates ship with a deployment, which suits teams with a developer in reach. Where editors publish daily we connect a headless CMS with rebuild webhooks, so publishing triggers a fresh static build automatically and nobody needs to touch the repository.',
      },
      {
        question: 'Have you actually shipped Next.js work, or is it a side interest?',
        answer:
          'It is delivery work. FreeToolsGrid is our own product, built and maintained by us on Next.js. This site is a Next.js App Router build. The Boomerang front end is Next.js on a MERN and Supabase back end after we moved that product off Bubble.io. We also pair Next.js marketing front ends with applications hosted elsewhere, which is a split we have shipped repeatedly.',
      },
      {
        question: 'Where does a Next.js site have to be hosted?',
        answer:
          'Nowhere in particular. Vercel is the simplest option and the one we default to, but a fully static build runs equally well on Cloudflare Pages, Netlify or any plain static host, which keeps you portable. Where a project needs server rendering or API routes we discuss hosting at architecture stage rather than discovering the constraint after the build is finished.',
      },
      {
        question: 'Can Next.js run an application, not just a website?',
        answer:
          'Yes, and we build both. Route handlers, server actions and server components cover authentication, forms and data work, with a database such as Supabase Postgres or MongoDB behind them. For heavier products we pair a Next.js front end with a separate Node and Express API so the two can scale and be deployed independently, which is the shape of our MERN builds.',
      },
    ],
    relatedProjectSlugs: ['freetoolsgrid', 'the-boomerang'],
    relatedServiceSlugs: [
      'mern-stack-development',
      'headless-jamstack-development',
      'website-speed-optimisation',
      'custom-website-development',
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'php-development',
    title: 'PHP Development',
    category: 'Development',
    icon: 'code',
    short:
      'Custom PHP work — plugins, backend logic, integrations and legacy maintenance — in the language 42 of our delivered builds already run on.',
    metaTitle: 'Custom PHP Development Services',
    metaDescription:
      'Custom PHP development: bespoke WordPress plugins, backend logic, API integrations and legacy codebase maintenance, written to standards you can audit.',
    heroTitle: 'Custom PHP Development and Legacy Codebase Work',
    heroIntro:
      'PHP is the language underneath most of what we have delivered. Forty-two of our forty-nine projects run on WordPress, which means custom plugins, theme code, WooCommerce logic and API integrations written in PHP every week. We also take on the codebases other developers left behind, where the first job is understanding what exists before changing any of it.',
    whatYouGet: [
      {
        title: 'Backend logic written to standards, not to a deadline',
        description:
          'Structured, namespaced code with sanitised input, escaped output, prepared statements and nonce-protected actions as the default rather than a hardening pass afterwards. A security reviewer, an auditor or your next developer can read it without needing us to translate.',
      },
      {
        title: 'Custom plugins and functionality inside WordPress',
        description:
          'Most of the PHP we write lives in WordPress: bespoke plugins, WooCommerce logic, custom post types, admin screens and REST endpoints. We are straightforward that this is where our PHP depth sits, rather than claiming a framework practice we do not run.',
      },
      {
        title: 'Third-party APIs wrapped safely',
        description:
          'CRMs, payment providers, booking systems, shipping carriers and LLM endpoints wrapped with authentication, transient caching, timeouts, retries and error logging. When an upstream provider has an outage, your site degrades visibly in a log instead of white-screening for customers.',
      },
      {
        title: 'Performance work at the query level',
        description:
          'Slow PHP is usually slow queries. We profile the actual page, find the unindexed lookup or the loop firing one database call per row, and fix the cause rather than caching over it. Object caching and transients then keep the fixed version fast under real traffic.',
      },
      {
        title: 'Legacy code assessed honestly before anyone commits',
        description:
          'We review structure, dependency versions, security posture and PHP version compatibility, then tell you plainly whether the codebase is maintainable as it stands, worth refactoring, or cheaper to replace. That assessment is written down before a direction is chosen.',
      },
      {
        title: 'Upgrades that survive the next PHP release',
        description:
          'Deprecated functions, removed extensions and changed defaults are what break older PHP applications. We test against current PHP versions, fix the incompatibilities on a staging clone first, and hand you a written record of what changed and why it needed changing.',
      },
    ],
    process: [
      {
        title: 'Code review and scoping',
        description:
          'We read what exists before proposing anything: structure, dependencies, database usage, PHP version and the security posture. You get a written assessment separating the work that is genuinely required from the work that would merely be tidy.',
      },
      {
        title: 'Environment and version control setup',
        description:
          'Local and staging environments matching production PHP and database versions, the codebase brought into Git if it is not already, and a deployment path established so nothing has to be edited on a live server again.',
      },
      {
        title: 'Build against coding standards',
        description:
          'Development happens in small, reviewable commits with WordPress or PSR coding standards enforced, input and output handling applied consistently, and translation-ready strings wherever the code produces user-facing text.',
      },
      {
        title: 'Testing across roles and failure states',
        description:
          'We test each user role and permission boundary, the upgrade path, and what happens when an external service is slow or unavailable, rather than confirming only that the happy path works on a developer machine.',
      },
      {
        title: 'Deployment and documentation',
        description:
          'A backup is taken, the release goes out through the deployment path rather than by hand, and you receive the repository, a README covering hooks, settings and known limits, and a changelog for the version shipped.',
      },
    ],
    deliverables: [
      'Custom PHP code delivered in a Git repository you own',
      'Written assessment of the existing codebase where one is being taken over',
      'Bespoke WordPress plugin or functionality package, installable and versioned',
      'API integrations with authentication, caching, retries and error logging',
      'PHP version compatibility fixes verified on a staging clone',
      'Query and performance profiling report with the fixes applied',
      'Developer README covering hooks, filters, settings and known limits',
      'Changelog, semantic version numbering and rollback instructions',
    ],
    techStack: [
      'PHP',
      'WordPress',
      'WooCommerce',
      'MySQL',
      'MariaDB',
      'ACF',
      'Composer',
      'WP-CLI',
      'WordPress REST API',
      'Git',
      'Kinsta',
      'Hostinger',
      'Cloudflare',
    ],
    idealFor: [
      'You need functionality no existing plugin or package actually provides',
      'A PHP codebase was inherited and nobody currently understands it',
      'Your host is warning you about an unsupported, end-of-life PHP version',
      'An integration between WordPress and an internal system needs building',
      'Pages are slow and the cause is queries rather than images or scripts',
      'You want code a security reviewer or an acquirer can read without excuses',
    ],
    faqs: [
      {
        question: 'Do you build in Laravel or Symfony?',
        answer:
          'We will be straight with you: our PHP depth is WordPress-centred, across 42 delivered builds, plus the plugins, integrations and backend logic those required. We use Composer, namespacing and modern PHP practices within that work, but we do not run a Laravel or Symfony practice and would rather say so than take a project that is a poor fit for us and a poor outcome for you.',
      },
      {
        question: 'Can you take over a PHP codebase another developer wrote?',
        answer:
          'Usually, yes, and it is a large part of what we do. We start by reading the code and giving you a written assessment covering structure, security, dependency health and PHP version compatibility. Where the foundation is sound we take over maintenance and add features. Where it stores data in ways that will not scale, we tell you that before you invest further in it.',
      },
      {
        question: 'My site runs an old PHP version — what is the actual risk?',
        answer:
          'Unsupported PHP versions stop receiving security patches, so known vulnerabilities simply stay open, and hosts eventually force an upgrade on their own schedule rather than yours. The practical risk is that the forced upgrade breaks a site nobody has tested. We upgrade on a staging clone first, fix the deprecations found, and only then move production.',
      },
      {
        question: 'How do you avoid breaking a live site while changing its code?',
        answer:
          'Nothing gets edited on production. Changes are written locally, reviewed in Git, tested on a staging clone that matches the live PHP and database versions, and released through a deployment path with a backup taken immediately beforehand. That discipline is why a rollback takes minutes instead of becoming an evening of restoring files by hand.',
      },
      {
        question: 'Do I own the PHP code you write?',
        answer:
          'Yes. You get the full source in a repository you control, with no licence key and no phone-home call. Code built on WordPress inherits GPL obligations for its WordPress-derived parts, which we explain up front rather than leaving in small print. In practice you can hand the repository to any competent PHP developer tomorrow and they can carry on with it.',
      },
    ],
    /* Deliberately empty. The PHP work on our WordPress builds is custom theme
       and plugin code inside those projects; no project record claims
       `php-development` as a service, so we do not front those case studies
       here as PHP engagements. The band self-removes when this list is empty. */
    relatedProjectSlugs: [],
    relatedServiceSlugs: [
      'wordpress-plugin-theme-development',
      'wordpress-development',
      'api-development-integrations',
      'website-maintenance-support',
    ],
  },
];
