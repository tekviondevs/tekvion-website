import type { Service } from '@/content/types';

/**
 * Platform & Support services.
 *
 * Everything that happens after launch, plus the plumbing that keeps a site
 * fast, safe, connected and usable. Grounded in Tekvion's real delivery
 * record: 42 WordPress builds, 7 Bubble.io products, Kinsta-hosted estates,
 * multilingual and RTL work, and clients who stay with us for 2+ years.
 */
export const platformServices: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'website-maintenance-support',
    title: 'Website Maintenance & Support',
    category: 'Platform & Support',
    icon: 'wrench',
    short:
      'Keep your website updated, backed up, monitored and quietly improving every month instead of quietly breaking.',
    metaTitle: 'WordPress Website Maintenance & Support',
    metaDescription:
      'Ongoing WordPress maintenance and support: updates, backups, uptime monitoring, security patching and monthly fixes from a studio running 42 live sites.',
    heroTitle: 'Website maintenance and support that keeps your site live, fast and current',
    heroIntro:
      'A website is not a one-off purchase. Plugins update, PHP versions move on, forms silently stop sending, and the content that made the site useful goes stale. We run monthly maintenance on WordPress and Bubble.io builds so none of that becomes your problem.',
    whatYouGet: [
      {
        title: 'Staged core, theme and plugin updates',
        description:
          'Every update is applied on a staging copy first, checked against your key templates and forms, then pushed to production. If an update breaks a layout or a checkout, we catch it on staging and roll back instead of you hearing about it from a customer.',
      },
      {
        title: 'Off-site backups with tested restores',
        description:
          'Daily database and weekly full-file backups stored away from the web server, with retention you can actually roll back through. We periodically restore a backup to a staging site to prove the archive works, because an untested backup is only a hopeful assumption.',
      },
      {
        title: 'Uptime and form monitoring',
        description:
          'Continuous uptime checks plus scheduled tests of the contact, quote and booking forms that generate your enquiries. Silent form failure after an SMTP or plugin change is the single most expensive fault we find on inherited sites, so we test delivery, not just page load.',
      },
      {
        title: 'Security patching and hardening upkeep',
        description:
          'We track vulnerability disclosures for the plugins you actually run, patch urgently when something serious lands, retire abandoned plugins, and keep admin accounts, file permissions and login protection tidy as staff and contractors come and go.',
      },
      {
        title: 'A monthly pool of content and fix time',
        description:
          'Each plan includes hands-on time for the small jobs that otherwise pile up: new service pages, price and team updates, seasonal banners, broken-link repairs, PDF swaps and layout tweaks. Unused time is not hoarded, but the pool is generous enough to cover real month-to-month change.',
      },
      {
        title: 'Performance and health reporting',
        description:
          'A plain-English monthly report covering what was updated, what broke and was fixed, uptime, backup status, Core Web Vitals movement and any risks we think you should budget for next quarter. No vanity dashboards, no metrics we cannot explain.',
      },
      {
        title: 'A named human to email',
        description:
          'You reach the people who built or inherited your site, not a ticket queue. Most of our clients stay with us for two years or more precisely because the same engineers know the quirks of their build and can answer without re-learning it every time.',
      },
    ],
    process: [
      {
        title: 'Site audit and handover',
        description:
          'We inventory your hosting, DNS, plugins, themes, licences, integrations and admin users, then record the whole stack in a maintenance runbook. Anything already broken or abandoned is flagged with a fix-now or fix-later recommendation before the plan starts.',
      },
      {
        title: 'Stabilise and baseline',
        description:
          'Before routine work begins we set up staging, connect off-site backups, install monitoring, resolve outstanding critical updates and capture baseline Lighthouse and uptime numbers so future months can be measured against something real.',
      },
      {
        title: 'Monthly maintenance cycle',
        description:
          'Updates on staging, regression checks on the templates that matter, production deployment, security review, backup verification and form testing — run on a fixed monthly rhythm so you always know where the site stands.',
      },
      {
        title: 'Requested changes and improvements',
        description:
          'Your queued content edits and small builds are scheduled into the same cycle. Larger pieces of work get quoted separately and scoped properly rather than being squeezed into support hours and delivered badly.',
      },
      {
        title: 'Report and plan ahead',
        description:
          'We send the monthly report, review anything that changed materially, and keep a rolling list of recommended next steps — a PHP version bump, an aging plugin to replace, a section overdue for a rewrite — so nothing becomes an emergency.',
      },
    ],
    deliverables: [
      'Maintenance runbook documenting hosting, DNS, licences, plugins and integrations',
      'Configured staging environment mirroring production',
      'Off-site daily database and weekly full-site backups with a tested restore',
      'Uptime plus contact and enquiry form delivery monitoring',
      'Monthly update log listing every core, theme and plugin change',
      'Monthly maintenance report with uptime, performance and security summary',
      'Included monthly content and small-fix hours',
      'Rolling improvement backlog with priorities and rough effort',
      'Emergency contact route for site-down incidents',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'Elementor',
      'WooCommerce',
      'ACF',
      'PHP',
      'Bubble.io',
      'Kinsta',
      'Hostinger',
      'Cloudflare',
      'WP Staging',
      'UptimeRobot',
      'Lighthouse',
      'GA4',
    ],
    idealFor: [
      'You have a site you rely on for enquiries but nobody in-house owns it',
      'Your plugins and PHP version are months or years behind',
      'You are not certain whether your backups exist, let alone work',
      'Small content changes keep waiting weeks for a freelancer to reply',
      'You run an e-commerce or booking flow where an hour of downtime costs money',
      'Your previous developer disappeared and you need a stable custodian',
    ],
    faqs: [
      {
        question: 'What is actually included in the monthly hours?',
        answer:
          'Content edits, new pages built from your existing design system, image and PDF swaps, price and staff updates, form field changes, broken-link fixes, small layout adjustments and troubleshooting. What is not included is net-new design work, a new template system, or a feature build — those are quoted separately so they get proper scoping instead of being rushed into support time.',
      },
      {
        question: 'Do you maintain sites you did not build?',
        answer:
          'Yes, and a good share of our maintenance clients came to us that way. We start with an audit so we both know what we are inheriting. Occasionally we find a build so fragile that maintenance would be false comfort — a nulled theme, a heavily hacked core, or an abandoned page builder. In that case we say so plainly and quote the rebuild rather than take a monthly fee to prop it up.',
      },
      {
        question: 'What happens if my site goes down at 2am?',
        answer:
          'Uptime monitoring alerts us automatically rather than waiting for you to notice. For site-down incidents we triage as soon as we see the alert, and our first move is usually to restore known-good files or a database snapshot to get you serving again, then diagnose the root cause afterwards. Response commitments differ by plan, so we agree the expectation in writing before you sign.',
      },
      {
        question: 'Can you maintain a Bubble.io application too?',
        answer:
          'We can. Bubble handles its own platform updates, so the work looks different: we watch for workflow and plugin breakages after Bubble version releases, monitor API integrations and third-party keys, manage database and privacy-rule changes, keep an eye on workload units, and deploy changes from development to live safely. We have delivered seven Bubble products, including hybrid builds paired with a WordPress or Next.js front end.',
      },
      {
        question: 'Is there a minimum contract?',
        answer:
          'We work on rolling monthly agreements with a short notice period rather than long lock-ins. The first month usually costs a little more because stabilisation work — staging, backups, monitoring and any overdue critical updates — happens up front. After that it settles into the standard monthly fee. If you leave, you take your runbook, backups and credentials with you.',
      },
    ],
    relatedServiceSlugs: [
      'web-hosting-devops',
      'website-security-malware-removal',
      'website-speed-optimisation',
      'wordpress-development',
    ],
    relatedProjectSlugs: ['tapi', 'ronival', 'mediseo', 'cloverfour'],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-security-malware-removal',
    title: 'Website Security & Malware Removal',
    category: 'Platform & Support',
    icon: 'shield-check',
    short:
      'Clean a hacked site, remove the browser and search warnings, and close the hole that let the attacker in.',
    metaTitle: 'WordPress Malware Removal & Security Services',
    metaDescription:
      'WordPress malware removal and security hardening. We clean hacked sites, remove blacklist warnings, patch the entry point and lock the site down for good.',
    heroTitle: 'WordPress malware removal and website security hardening',
    heroIntro:
      'Most hacked WordPress sites are not personally targeted — they are found by a bot scanning for a plugin that was three updates behind. Cleaning the infection is the easy half. We also find how the attacker got in, close it, and harden the site so the same script cannot walk back through next month.',
    whatYouGet: [
      {
        title: 'Full malware scan and manual code review',
        description:
          'Automated scanners find the obvious payloads. We also read the code: obfuscated eval blocks, base64 injections in theme functions, rogue must-use plugins, backdoors dropped in the uploads folder and injected redirects in the database. Every affected file is compared against clean core and vendor sources.',
      },
      {
        title: 'Clean-up without wrecking your site',
        description:
          'We remove the infection rather than nuking directories and hoping. Core, themes and plugins are replaced with verified clean copies, custom code is cleaned line by line, and injected spam content and hidden admin users are purged from the database. Your content and design survive intact.',
      },
      {
        title: 'Entry-point investigation',
        description:
          'We work backwards through access logs, file modification times and user records to identify how the attacker got in — a vulnerable plugin version, a reused hosting password, an exposed staging site or a compromised local machine. Without that step, a clean site is simply a site waiting to be reinfected.',
      },
      {
        title: 'Blacklist and warning removal',
        description:
          'Once the site is verifiably clean we submit reconsideration requests to Google Safe Browsing, clear the "deceptive site ahead" interstitial, and work through host and email-provider blocklists so your pages and outbound mail stop being flagged.',
      },
      {
        title: 'Hardening pass',
        description:
          'Login rate limiting and two-factor on admin accounts, file-editor disabled, correct file permissions, XML-RPC restricted, unique security keys rotated, database prefix reviewed, abandoned plugins removed and admin users pruned to the people who genuinely need access.',
      },
      {
        title: 'Firewall, WAF and ongoing monitoring',
        description:
          'A Cloudflare or host-level firewall in front of the site, bot filtering on login and XML-RPC endpoints, and file-integrity monitoring that alerts on unexpected changes. We tune the rules against your real traffic so legitimate visitors and payment callbacks are never blocked.',
      },
    ],
    process: [
      {
        title: 'Triage and containment',
        description:
          'We take an immediate forensic snapshot, put the site behind maintenance mode if it is actively serving malware, rotate hosting, database and admin credentials, and stop the bleeding before any clean-up begins.',
      },
      {
        title: 'Scan, diagnose and clean',
        description:
          'A full file and database scan is followed by manual review, then removal of every payload, backdoor and injected record. We rebuild from clean core and vendor packages and diff custom files against version control or the last known-good backup.',
      },
      {
        title: 'Find and close the entry point',
        description:
          'Log analysis and file timestamps point us at the vulnerability. We patch or replace the offending component, fix the credential or configuration weakness behind it, and confirm the same route can no longer be exploited.',
      },
      {
        title: 'Harden and shield',
        description:
          'Hardening rules, firewall configuration, 2FA, permission fixes and monitoring go on together, then we re-scan from outside with independent tools to verify the site reports clean.',
      },
      {
        title: 'Delisting and aftercare',
        description:
          'We file the review requests to clear browser and search warnings, hand over a written incident report describing what happened and what changed, and recommend the monitoring cadence needed to keep the site clean.',
      },
    ],
    deliverables: [
      'Forensic snapshot of the compromised site taken before any changes',
      'Complete malware and backdoor removal across files and database',
      'Written incident report naming the entry point and the fix applied',
      'Rotated credentials, security keys and pruned admin user list',
      'Hardening configuration applied to WordPress, server and file permissions',
      'Firewall or WAF ruleset tuned to your real traffic',
      'Blacklist and Safe Browsing removal requests submitted and tracked',
      'Clean-scan verification report from independent external tools',
      'Prevention checklist covering updates, backups and access control',
    ],
    techStack: [
      'WordPress',
      'PHP',
      'MySQL',
      'Cloudflare',
      'Wordfence',
      'Sucuri SiteCheck',
      'Google Search Console',
      'Kinsta',
      'Hostinger',
      'WP-CLI',
      'SSH',
    ],
    idealFor: [
      'Google is showing a "this site may be hacked" or deceptive-site warning',
      'Visitors are being redirected to spam, casino or pharmacy pages',
      'Your host has suspended the account for malicious files',
      'Spam pages in a foreign language are appearing in your search results',
      'You have cleaned the site once already and the infection came back',
      'You are fine today but have no firewall, 2FA or monitoring in place',
    ],
    faqs: [
      {
        question: 'How quickly can you clean an infected site?',
        answer:
          'Containment — credential rotation, snapshot, taking the site out of harm’s way — happens the same day we get access. A straightforward WordPress infection is usually cleaned and verified within one to two working days. Deeply embedded compromises, sites with several years of unmanaged plugins, or multi-site installations take longer because the manual review is larger. We tell you which case you are in after the first scan.',
      },
      {
        question: 'Why did my site get hacked when it is not important enough to target?',
        answer:
          'Almost no small-business site is targeted personally. Bots crawl the web looking for known vulnerable plugin and theme versions, weak admin passwords and exposed staging copies, then exploit whatever answers. Your site is valuable to an attacker as a host for spam pages, a redirect hop, or a mail relay. That is why patching cadence and login protection matter far more than obscurity does.',
      },
      {
        question: 'Will cleaning the site hurt my SEO?',
        answer:
          'The infection hurts your SEO; the clean-up repairs it. Injected spam pages, cloaked redirects and a Safe Browsing flag all damage rankings and destroy click-through. Once the site is clean we remove the injected URLs properly, submit the reconsideration request, and check Search Console for manual actions and indexed spam pages so the recovery is completed rather than assumed.',
      },
      {
        question: 'Can you just restore an old backup instead?',
        answer:
          'Sometimes a restore is part of the answer, but on its own it is risky. Backups often already contain the backdoor, since infections commonly sit dormant for weeks, and restoring also discards every order, enquiry and content change since that date. We prefer to clean the live site and use backups as a reference for diffing files, then restore only if the compromise is genuinely unrecoverable.',
      },
      {
        question: 'Do those security plugins not handle all of this already?',
        answer:
          'A security plugin is useful for scanning and firewalling, but it runs inside the application it is meant to protect and cannot remove a backdoor it does not recognise, nor tell you which stolen credential was used. We use those tools as one input alongside log analysis, manual code review and host-level or Cloudflare filtering, which sits in front of WordPress rather than inside it.',
      },
    ],
    relatedServiceSlugs: [
      'website-maintenance-support',
      'web-hosting-devops',
      'website-migration-replatforming',
      'wordpress-development',
    ],
    relatedProjectSlugs: ['wegets', 'loofys', 'lock-stock'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-migration-replatforming',
    title: 'Website Migration & Replatforming',
    category: 'Platform & Support',
    icon: 'repeat',
    short:
      'Move hosts, platforms or domains without downtime, broken URLs or a drop in search rankings.',
    metaTitle: 'Website Migration & Replatforming Services',
    metaDescription:
      'Website migration and replatforming without downtime or lost rankings. Host moves, WordPress rebuilds, redirect mapping and full post-launch SEO checks.',
    heroTitle: 'Website migration and replatforming without losing traffic',
    heroIntro:
      'Migrations go wrong in predictable ways: URLs change without redirects, staging gets indexed, email stops working because MX records moved with the site, and nobody notices the drop until the month-end report. We plan around every one of those, and we have moved sites between hosts, builders, domains and stacks enough times to know where the traps are.',
    whatYouGet: [
      {
        title: 'Pre-migration inventory and crawl',
        description:
          'We crawl the live site to capture every indexed URL, its title, canonical, status code and internal links, and record current rankings, traffic and conversion baselines. That inventory becomes the checklist we validate against once you are live on the new platform.',
      },
      {
        title: 'Complete redirect mapping',
        description:
          'Every old URL is mapped to its closest new equivalent with a permanent 301 — including paginated archives, category and tag URLs, uploaded PDFs and images, and legacy query-string pages. Anything genuinely retired gets a considered destination rather than a lazy redirect to the homepage.',
      },
      {
        title: 'Content, media and database migration',
        description:
          'Posts, pages, custom post types, taxonomies, custom fields, users, product catalogues, orders and the full media library are transferred with structure intact. Where the old platform stored content in shortcodes or a discontinued builder, we convert it into clean, maintainable blocks or Breakdance elements.',
      },
      {
        title: 'DNS, email and TLS cutover plan',
        description:
          'A written cutover runbook with lowered TTLs ahead of the switch, a clear record of which DNS entries move and which must not, mail and MX continuity, SSL provisioning on the new host, and a rollback path if anything behaves unexpectedly during propagation.',
      },
      {
        title: 'Replatforming rebuilds, not lift-and-shift copies',
        description:
          'Moving off Wix, Squarespace, an abandoned theme or a dead page builder means rebuilding templates properly in WordPress with Breakdance or blocks. You get a maintainable system with reusable components instead of an exported approximation nobody can edit later.',
      },
      {
        title: 'Post-launch verification and monitoring',
        description:
          'We re-crawl after launch to catch broken links, redirect chains, missing metadata and orphaned pages, resubmit sitemaps, watch Search Console coverage and index status for several weeks, and fix regressions while they are still small.',
      },
      {
        title: 'Multilingual and RTL continuity',
        description:
          'For sites shipping in more than one language we preserve hreflang relationships, per-language URL structures and translation links through the move. We have delivered builds in eight languages, including Hebrew RTL, so we plan the language layer up front rather than repairing it after.',
      },
    ],
    process: [
      {
        title: 'Discovery and risk assessment',
        description:
          'We document the current stack, hosting, DNS, email, integrations and traffic profile, then agree what "no regressions" means in measurable terms: indexed URL count, top landing pages, form endpoints, tracking and revenue paths.',
      },
      {
        title: 'Build and migrate on staging',
        description:
          'A full copy or rebuild is assembled on a password-protected, noindexed staging environment. Content, media and integrations are migrated there, and you review the real thing with real data before anything touches the live domain.',
      },
      {
        title: 'Redirect map and QA',
        description:
          'The redirect map is written, applied on staging and tested URL by URL. We check templates, forms, payment flows, tracking tags and any language variants, then run a Lighthouse and accessibility pass so the new site does not launch slower than the old one.',
      },
      {
        title: 'Cutover',
        description:
          'TTLs come down, the switch happens in a low-traffic window, DNS is updated, SSL is verified, and we work through the launch checklist — redirects, robots.txt, sitemap, search console, analytics, email — with the rollback plan ready.',
      },
      {
        title: 'Stabilisation window',
        description:
          'For the weeks after launch we monitor crawl errors, index coverage, 404 logs, rankings and conversions, add redirects for any URL patterns we missed, and hand over documentation for the new stack.',
      },
    ],
    deliverables: [
      'Full URL inventory and pre-migration performance baseline',
      'Complete 301 redirect map as a reviewable spreadsheet',
      'Staging build of the migrated or rebuilt site for sign-off',
      'Written DNS, email and TLS cutover runbook with rollback steps',
      'Migrated content, media library, users and commerce data',
      'Preserved or corrected hreflang and language URL structure',
      'Post-launch crawl report covering broken links and redirect chains',
      'Refreshed XML sitemap, robots.txt and Search Console submission',
      'Handover documentation for the new hosting and platform',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'WooCommerce',
      'WPML',
      'ACF',
      'PHP',
      'MySQL',
      'Kinsta',
      'Hostinger',
      'Cloudflare',
      'Screaming Frog',
      'Google Search Console',
      'GA4',
      'Lighthouse',
    ],
    idealFor: [
      'You are leaving a slow or unreliable host and cannot risk downtime',
      'You are moving off Wix, Squarespace or a discontinued page builder',
      'A rebrand means a new domain and you need the equity to follow',
      'A previous migration cost you rankings and you want it done properly',
      'You are consolidating several microsites into one platform',
      'Your multilingual site must keep its hreflang and per-language URLs',
    ],
    faqs: [
      {
        question: 'Will my site go down during the migration?',
        answer:
          'It should not. The new site is built and fully tested on staging while the old one keeps serving, so the only moment of change is the DNS cutover. With TTLs lowered in advance, propagation is quick, and both origins stay live during the overlap so visitors reach a working site either way. We schedule the switch for your quietest traffic window and keep a rollback ready.',
      },
      {
        question: 'Will I lose my Google rankings?',
        answer:
          'A well-executed migration keeps URLs identical wherever possible and 301-redirects the rest, which preserves the overwhelming majority of ranking signals. Expect some short-term fluctuation for a few weeks while Google recrawls and consolidates — that is normal. What causes real, lasting losses is missing redirects, a stray noindex left over from staging, or blocked resources, and those are exactly the items on our launch checklist.',
      },
      {
        question: 'Can you move my emails as well as my website?',
        answer:
          'Website hosting and email hosting are separate services that often share a DNS zone, which is why migrations break inboxes. We record your MX, SPF, DKIM and DMARC records before touching anything and carry them across unchanged unless you have asked us to move mail too. If you are also switching to Google Workspace or Microsoft 365, we sequence that separately from the site cutover.',
      },
      {
        question: 'What if the old site was built with a page builder we want to drop?',
        answer:
          'Then it is a replatforming project rather than a copy. Exported builder markup is usually unmaintainable, so we rebuild the templates natively — commonly in Breakdance — and migrate the content into that structure. It is more work up front, but you end up with a component system your team can actually edit, and page weight typically falls sharply once the old builder is gone.',
      },
      {
        question: 'Can you migrate a WooCommerce store with live orders?',
        answer:
          'Yes. Products, variations, categories, customers, orders and coupons all move across. The sequence matters: we migrate the catalogue and test checkout end to end on staging with the payment gateway in sandbox, then run a final delta sync of orders and customers immediately before cutover so nothing placed during the build window is lost. Store downtime is measured in minutes, not hours.',
      },
    ],
    relatedServiceSlugs: [
      'wordpress-development',
      'website-redesign',
      'web-hosting-devops',
      'seo-services',
    ],
    relatedProjectSlugs: ['mediseo', 'tapi', 'lineascore', 'wegets'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'api-development-integrations',
    title: 'API Development & Integrations',
    category: 'Platform & Support',
    icon: 'plug',
    short:
      'Connect your website to the CRM, payment, booking and internal systems your business already runs on.',
    metaTitle: 'API Development & Third-Party Integration Services',
    metaDescription:
      'API development and third-party integrations for WordPress, Bubble.io and Next.js: CRMs, payments, booking systems and custom endpoints built and documented.',
    heroTitle: 'API development and third-party integrations for websites and web apps',
    heroIntro:
      'A website that cannot talk to your other systems creates work rather than saving it — someone retypes every enquiry into the CRM and reconciles orders by hand. We build the connections that remove that step, whether that means consuming a third-party API, exposing your own, or wiring a Bubble.io backend to a marketing front end.',
    whatYouGet: [
      {
        title: 'Third-party API integration',
        description:
          'CRM and marketing platforms, payment gateways, booking and calendar systems, accounting tools, shipping and inventory feeds, SMS and email providers. We read the vendor documentation properly, handle authentication and rate limits correctly, and map fields to your real business data rather than a demo schema.',
      },
      {
        title: 'Custom endpoints on your own site',
        description:
          'Where another system needs to read or write your data we build authenticated REST endpoints — WordPress REST API routes or Bubble Data and Workflow API calls — with validated inputs, permission checks, sensible status codes and predictable JSON shapes your partner developers can work against.',
      },
      {
        title: 'Data mapping and transformation',
        description:
          'The unglamorous work that decides whether an integration survives: matching field names, normalising dates, currencies, phone formats and country codes, deduplicating records, and deciding which system is authoritative when two of them disagree about the same customer.',
      },
      {
        title: 'Reliable sync with retries and idempotency',
        description:
          'Networks fail and vendors have outages. We queue jobs, retry with backoff, make writes idempotent so a retry cannot create duplicate orders or contacts, and log every exchange so a failed sync can be traced and replayed instead of silently disappearing.',
      },
      {
        title: 'Webhooks in both directions',
        description:
          'Real-time updates rather than hourly polling: verified inbound webhooks from payment and booking providers, and outbound webhooks that notify your systems when a form is submitted, an order is paid, or a record changes. Signature verification and replay protection are handled properly.',
      },
      {
        title: 'Secure credential handling',
        description:
          'Keys and tokens live in server-side configuration or environment variables, never in front-end code or a plugin setting exposed to editors. We scope credentials to the minimum permission needed and document the rotation process for the day a key has to change.',
      },
      {
        title: 'Monitoring, documentation and handover',
        description:
          'Integration health checks with failure alerts, a written map of what talks to what, sample requests and responses, and a runbook for common faults. Your next developer should be able to understand the integration without reverse-engineering it.',
      },
    ],
    process: [
      {
        title: 'Map the systems and the data',
        description:
          'We start with the workflow, not the API: what event triggers the exchange, which system owns each field, what has to happen if the two disagree, and what genuinely needs to be real-time versus what can run on a schedule.',
      },
      {
        title: 'Review the API and prototype',
        description:
          'We read the target documentation, confirm rate limits, sandbox availability and auth model, then build a small proof of concept against the sandbox to expose surprises early — undocumented required fields and pagination quirks always show up here.',
      },
      {
        title: 'Build with failure in mind',
        description:
          'The production integration is written with validation, retries, idempotency keys, structured logging and graceful degradation, so an outage at the vendor slows the sync rather than breaking your checkout or contact form.',
      },
      {
        title: 'Test against real edge cases',
        description:
          'We test duplicates, partial failures, timeouts, malformed payloads, expired tokens and out-of-order webhooks in staging before anything touches live data, and confirm the recovery path works as designed.',
      },
      {
        title: 'Deploy, monitor and document',
        description:
          'Go-live is followed by a watching period with alerting on failed jobs, then handover of the integration map, credential inventory, sample payloads and troubleshooting runbook.',
      },
    ],
    deliverables: [
      'Integration map showing systems, data flow direction and triggers',
      'Field-level data mapping document with transformation rules',
      'Working integration deployed to staging and production',
      'Custom authenticated REST or Bubble API endpoints where required',
      'Webhook receivers with signature verification and replay protection',
      'Retry, error-handling and logging layer with an admin-visible log',
      'Credential inventory and rotation procedure',
      'Failure alerting on sync errors',
      'Technical documentation with sample requests and responses',
    ],
    techStack: [
      'WordPress REST API',
      'PHP',
      'Bubble.io API Connector',
      'Next.js',
      'React',
      'Node.js',
      'Stripe',
      'WooCommerce',
      'Zapier',
      'Make',
      'Webhooks',
      'JSON',
      'OAuth 2.0',
      'Postman',
    ],
    idealFor: [
      'Enquiries from your site are being retyped into a CRM by hand',
      'You need bookings or payments to flow straight into your back office',
      'A partner or supplier has given you an API and nobody to implement it',
      'Your Bubble app needs to exchange data with an external service',
      'Reporting means exporting CSVs from three systems and merging them',
      'An existing integration keeps failing silently and nobody can tell why',
    ],
    faqs: [
      {
        question: 'Can you integrate with a system that has poor or no documentation?',
        answer:
          'Often, yes. If there is an API we can inspect — even an undocumented one used by the vendor’s own front end — we can usually map its behaviour, though we will be honest that unofficial endpoints can change without warning. Where no API exists at all, the realistic options are scheduled file or CSV exchange, or a middleware layer. We assess feasibility before quoting rather than after.',
      },
      {
        question: 'Should we use Zapier or Make instead of a custom integration?',
        answer:
          'For low-volume, simple, one-directional flows they are excellent and we recommend them. Custom code earns its place when volume makes per-task pricing expensive, when the logic involves conditional branching or reconciliation, when data must be transformed in ways the no-code tool cannot express, or when a failure needs a proper retry and audit trail. We will tell you which side of that line you are on.',
      },
      {
        question: 'How do you keep API keys safe on a WordPress site?',
        answer:
          'Credentials are stored server-side — environment variables or protected configuration outside the web root — never in JavaScript, theme files in version control, or a plugin field any editor can read. Calls are made from the server, scoped tokens are used where the vendor supports them, and we document rotation. If a key is exposed in a browser request, an attacker can use it as freely as you can.',
      },
      {
        question: 'Do you build integrations for Bubble.io applications?',
        answer:
          'Regularly. Bubble’s API Connector handles outbound calls to third-party services, and its Data and Workflow APIs let external systems read and write your app data. We have built AI and LLM integrations, payment flows and hybrid architectures where a marketing site sits in front of a Bubble application on an app subdomain, as with LineaScore.',
      },
      {
        question: 'What happens when the third party changes their API?',
        answer:
          'Vendors deprecate versions, and it is one of the main reasons integrations decay. We pin to a specific API version where the provider supports it, monitor for failure patterns rather than assuming silence means success, and cover integration health in maintenance plans. When a breaking change is announced we schedule the update inside the deprecation window instead of discovering it the day the endpoint dies.',
      },
    ],
    relatedServiceSlugs: [
      'ai-llm-integration',
      'custom-web-application-development',
      'bubble-nocode-development',
      'analytics-tracking-setup',
    ],
    relatedProjectSlugs: ['lineascore', 'swayed', 'bostmd', 'tylo-ai'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-llm-integration',
    title: 'AI & LLM Integration',
    category: 'Platform & Support',
    icon: 'sparkles',
    short:
      'Put AI to work inside your website or product where it genuinely saves time, not as a novelty chat bubble.',
    metaTitle: 'AI & LLM Integration for Websites and Web Apps',
    metaDescription:
      'AI and LLM integration for websites and apps: assistants, content tools and automations built on real product experience across seven Bubble.io builds.',
    heroTitle: 'AI and LLM integration for websites, apps and internal workflows',
    heroIntro:
      'We have shipped AI-powered products, not just AI features: an adaptive interview coach, a multi-model image generation suite for tattoo artists, and a research platform with graph-based data display. That experience is why we start by asking which task the model is actually better at than your current process, and why we design around the fact that models are confidently wrong sometimes.',
    whatYouGet: [
      {
        title: 'Use-case assessment before any building',
        description:
          'We separate the ideas where a language model genuinely wins — summarising, drafting, classifying, extracting structure from messy text, conversational guidance — from the ones better served by a form, a filter or a rule. You get an honest recommendation, including where the answer is not to build anything.',
      },
      {
        title: 'Retrieval-grounded assistants',
        description:
          'Assistants answer from your documents, product data, policies and knowledge base rather than from general training data, using retrieval over your own content. That is what makes the difference between a support assistant that quotes your actual returns policy and one that invents a plausible one.',
      },
      {
        title: 'Content and workflow tooling',
        description:
          'Internal tools that draft product descriptions in your tone of voice, summarise long enquiry threads, triage and route incoming leads, translate and adapt copy across languages, or extract structured fields from uploaded documents into your database.',
      },
      {
        title: 'Multi-model architecture',
        description:
          'We are not locked to one vendor. Model choice is made per task on capability, latency and cost, with the provider abstracted behind our own interface so switching does not mean rewriting the product. InkGenX runs multiple image models behind a single workflow for exactly this reason.',
      },
      {
        title: 'Prompt design, evaluation and guardrails',
        description:
          'Versioned prompts with structured output schemas, a test set of real inputs to compare changes against, refusal and fallback handling, output validation before anything is saved or shown, and a human review step wherever a wrong answer would carry real consequences.',
      },
      {
        title: 'Cost, latency and rate control',
        description:
          'Token budgeting, caching of repeated queries, streaming responses so the interface feels immediate, request throttling per user, and usage dashboards. AI features fail commercially far more often than technically, and the cause is almost always an unmodelled per-request cost.',
      },
      {
        title: 'Privacy and data-handling decisions made explicitly',
        description:
          'We agree what may be sent to a model provider, what must be redacted, retention and training-opt-out settings, and where processing happens, then document it — so your privacy policy reflects reality and your customers get a straight answer when they ask.',
      },
    ],
    process: [
      {
        title: 'Frame the task and the baseline',
        description:
          'We define the job to be done, what a good output looks like, and what the current process costs in time or accuracy. Without a baseline there is no way to tell whether the AI feature is an improvement or just novel.',
      },
      {
        title: 'Prototype against real data',
        description:
          'We build a narrow prototype using your genuine content and awkward real-world inputs, not curated examples, and put it in front of the people who will use it. Most concepts change materially at this stage, which is exactly what the stage is for.',
      },
      {
        title: 'Engineer the pipeline',
        description:
          'Retrieval and chunking strategy, prompt templates, structured output parsing, validation, fallbacks and logging are built as a proper pipeline rather than a single call, so behaviour is inspectable and each part can be improved independently.',
      },
      {
        title: 'Evaluate and tune',
        description:
          'A fixed evaluation set of real inputs is scored before and after every prompt, model or retrieval change, so improvements are demonstrated rather than felt. We tune retrieval quality first, since most bad answers come from bad context rather than a weak model.',
      },
      {
        title: 'Ship, monitor and iterate',
        description:
          'Launch includes usage and cost monitoring, feedback capture on individual responses, and a review cycle where real conversations drive the next round of prompt and retrieval improvements.',
      },
    ],
    deliverables: [
      'Use-case assessment with a build, buy or do-not-build recommendation',
      'Working prototype tested against your real content',
      'Production AI feature integrated into your site, app or admin panel',
      'Retrieval pipeline over your documents and structured data',
      'Versioned prompt library with structured output schemas',
      'Evaluation set and scoring results for prompt and model changes',
      'Cost, token usage and latency monitoring',
      'Guardrails, fallback behaviour and human-review workflow',
      'Data-handling note covering what is sent, stored and retained',
    ],
    techStack: [
      'Bubble.io',
      'Next.js',
      'React',
      'Node.js',
      'WordPress',
      'PHP',
      'OpenAI API',
      'Anthropic API',
      'Vector search',
      'Webhooks',
      'JSON Schema',
      'Stripe',
    ],
    idealFor: [
      'Your team answers the same customer questions dozens of times a week',
      'You are drowning in unstructured text — enquiries, documents, transcripts',
      'You want an AI feature inside a product, not a bolted-on chat widget',
      'A first AI experiment produced confident nonsense and lost internal trust',
      'You need content adapted across several languages at volume',
      'You are building an AI product and need a team that has shipped one before',
    ],
    faqs: [
      {
        question: 'How do you stop the AI making things up?',
        answer:
          'Three ways, used together. Retrieval grounds every answer in your own documents and data so the model summarises rather than recalls. Structured outputs and validation reject responses that do not match the expected shape before anything is displayed or saved. And scoping keeps the assistant inside its remit, with an explicit "I do not have that information, here is how to reach a person" path instead of a guess.',
      },
      {
        question: 'What does an AI feature cost to run each month?',
        answer:
          'It depends on request volume, how much context each request carries, and which model handles it — which is precisely why we model it before building. We estimate cost per interaction during the prototype, then reduce it with caching, tighter context, and routing simple requests to smaller models. We also set hard usage limits so an unusual traffic spike cannot produce a surprise invoice.',
      },
      {
        question: 'Can you add AI to an existing WordPress site?',
        answer:
          'Yes. Typical patterns are a retrieval-backed assistant over your existing content, AI-assisted drafting inside the admin for editors, automated tagging and internal-link suggestions, and enquiry triage that summarises and routes form submissions. Calls are made server-side so no API key is exposed, and the feature is built to degrade gracefully to your normal contact route if the provider is unavailable.',
      },
      {
        question: 'Which model providers do you work with?',
        answer:
          'We choose per task rather than defaulting to one vendor, and we build behind an abstraction so the provider can change without a rewrite. Reasoning and long-context work, fast cheap classification, and image generation are genuinely different problems with different best answers. InkGenX runs several image models behind one workflow, and Mocki uses conversational models tuned for adaptive, human-like interview dialogue.',
      },
      {
        question: 'Is our data used to train someone else’s model?',
        answer:
          'Not if it is configured correctly. Major providers offer API terms and settings that exclude your data from training, and we enable those explicitly rather than assuming the default. We also agree upfront what is sent at all — personal data can be redacted or replaced with references before a request leaves your systems — and we document the flow so your privacy policy is accurate.',
      },
    ],
    relatedServiceSlugs: [
      'api-development-integrations',
      'bubble-nocode-development',
      'saas-product-development',
      'custom-web-application-development',
    ],
    relatedProjectSlugs: ['tylo-ai', 'mocki', 'inkgenx'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'web-hosting-devops',
    title: 'Web Hosting & DevOps',
    category: 'Platform & Support',
    icon: 'server',
    short:
      'Fast, monitored hosting with staging, backups and a sane deployment process instead of editing files on the live server.',
    metaTitle: 'Managed Web Hosting & DevOps Services',
    metaDescription:
      'Managed web hosting and DevOps: Kinsta and Cloudflare setup, staging pipelines, backups, SSL, CDN tuning and monitoring for fast, reliable WordPress sites.',
    heroTitle: 'Managed web hosting and DevOps for WordPress and modern web stacks',
    heroIntro:
      'Cheap shared hosting is the most common cause of a slow site that no amount of optimisation can fix. We select, configure and run hosting that matches your traffic and stack, put a CDN and cache in front of it, and give you staging plus a deployment process so changes stop being made directly on the live site.',
    whatYouGet: [
      {
        title: 'Hosting selection and provisioning',
        description:
          'We size the environment against your actual traffic, database weight and plugin load — Kinsta or similar managed WordPress hosting for content and commerce sites, Hostinger where budget is the constraint, static or edge hosting for Next.js front ends — and provision it properly rather than accepting defaults.',
      },
      {
        title: 'Staging and deployment pipeline',
        description:
          'A staging environment that mirrors production, one-click push and pull between the two, and a change process where updates and code are tested before release. No more editing theme files over FTP on a live store and hoping nothing white-screens.',
      },
      {
        title: 'CDN, caching and TLS',
        description:
          'Cloudflare in front of the origin with cache rules tuned per route so pages are cached but carts, checkouts and logged-in sessions are not, plus Brotli compression, image and asset delivery from the edge, HTTP/3, HSTS and automated certificate renewal.',
      },
      {
        title: 'Server-level performance tuning',
        description:
          'Current PHP version with OPcache and sensible memory limits, object caching where the database is the bottleneck, cron moved off the WordPress pseudo-cron, database optimisation, and long-lived asset cache headers. This is the layer most speed work skips entirely.',
      },
      {
        title: 'Backups, redundancy and disaster recovery',
        description:
          'Automated daily backups held off-site with defined retention, periodic tested restores, and a written recovery plan stating who does what and how long it takes. We document the recovery point and recovery time you are actually buying, rather than implying zero.',
      },
      {
        title: 'Monitoring and alerting',
        description:
          'Uptime checks from multiple regions, SSL and domain expiry alerts, disk and PHP error monitoring, slow-query logging and Core Web Vitals field data. Alerts route to us so problems are usually being worked before you notice them.',
      },
      {
        title: 'DNS, email and domain management',
        description:
          'Clean DNS records with correct SPF, DKIM and DMARC so your transactional mail reaches inboxes, transactional email routed through a proper sending service rather than the web server, and domain renewal and registrar hygiene documented in one place.',
      },
    ],
    process: [
      {
        title: 'Audit the current environment',
        description:
          'We benchmark server response time, review the PHP and database configuration, check backup and SSL status, examine DNS and mail records, and identify whether your performance problem is the host, the build, or both.',
      },
      {
        title: 'Plan the target architecture',
        description:
          'We recommend a host, plan size and CDN configuration against real requirements, including where the audience is, what traffic peaks look like, and what the site actually needs to run — then agree the migration window and rollback approach.',
      },
      {
        title: 'Provision and migrate',
        description:
          'The new environment is built, the site migrated and tested on a temporary URL, caching and firewall rules tuned, and DNS cut over with lowered TTLs during a quiet period. The old environment stays available until we are certain.',
      },
      {
        title: 'Harden, tune and instrument',
        description:
          'Firewall rules, TLS configuration, backups, cron, object caching and monitoring go on together, then we re-benchmark to confirm the numbers moved and record the new baseline.',
      },
      {
        title: 'Run and review',
        description:
          'Ongoing operations: patching, backup verification, capacity review as traffic grows, cost review as plans change, and a quarterly check on whether the environment still suits the site it is carrying.',
      },
    ],
    deliverables: [
      'Hosting audit with benchmarks and a sized recommendation',
      'Provisioned production environment tuned for your stack',
      'Matching staging environment with push and pull workflow',
      'Cloudflare CDN, cache rules and firewall configuration',
      'Automated off-site backups with a documented tested restore',
      'SSL, HTTP/3 and security header configuration',
      'DNS record set including SPF, DKIM and DMARC for deliverability',
      'Uptime, SSL expiry and error monitoring with alert routing',
      'Infrastructure runbook covering access, recovery and escalation',
    ],
    techStack: [
      'Kinsta',
      'Hostinger',
      'Cloudflare',
      'WordPress',
      'PHP',
      'MySQL',
      'Redis',
      'Nginx',
      'WP-CLI',
      'Next.js',
      'Node.js',
      'Git',
      'Lighthouse',
      'UptimeRobot',
    ],
    idealFor: [
      'Your site is slow and optimisation work has stopped making a difference',
      'You are on shared hosting and traffic has outgrown it',
      'There is no staging site, so every change is made live',
      'Your transactional or contact-form email keeps landing in spam',
      'You have no idea whether your backups could actually be restored',
      'You run a hybrid stack and want one team owning the whole environment',
    ],
    faqs: [
      {
        question: 'Do you resell hosting or do we buy it ourselves?',
        answer:
          'We recommend you own the hosting account and the domain directly, with us added as a collaborator. It keeps you in control, keeps the billing transparent, and means you are never held hostage by an agency relationship. We handle the setup, configuration and day-to-day operations on your account, and if you ever move on, everything is already in your name.',
      },
      {
        question: 'Is managed WordPress hosting worth the extra cost?',
        answer:
          'For a site that generates revenue or leads, almost always. You get server-level caching, a staging environment, automated backups, current PHP versions and support staff who understand WordPress rather than reading a generic script. The price difference against budget shared hosting is usually smaller than the cost of a single day of downtime or one badly handled hack.',
      },
      {
        question: 'Can Cloudflare break my site?',
        answer:
          'Misconfigured, yes — the classic failures are caching a logged-in page, caching the cart or checkout, or an aggressive minifier breaking a script. That is why we set explicit bypass rules for carts, checkouts, admin paths and API endpoints, test each one after enabling, and turn on optimisation features individually rather than switching everything on at once and hoping.',
      },
      {
        question: 'How do you handle deployments without downtime?',
        answer:
          'Changes are made on staging, reviewed, then pushed to production during a low-traffic window with a backup taken immediately beforehand. For code we use version control so a bad release can be reverted quickly, and for database-affecting changes we sequence carefully and verify before releasing cache. For Next.js front ends, atomic deploys mean the switch is instant with rollback available.',
      },
      {
        question: 'What is your recovery time if the server fails completely?',
        answer:
          'It depends on the plan, and we put real numbers in writing rather than vague reassurance. With managed hosting and off-site daily backups, a full restore to a working site is typically measured in hours, with the potential data loss bounded by your backup frequency. If your business needs a tighter window than that, we will tell you what architecture and budget it requires.',
      },
    ],
    relatedServiceSlugs: [
      'website-speed-optimisation',
      'website-maintenance-support',
      'website-security-malware-removal',
      'website-migration-replatforming',
    ],
    relatedProjectSlugs: ['tapi', 'wegets', 'lineascore'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'accessibility-compliance',
    title: 'Accessibility & Compliance',
    category: 'Platform & Support',
    icon: 'accessibility',
    short:
      'Make your website usable by everyone and defensible under WCAG, with fixes in the code rather than an overlay widget.',
    metaTitle: 'Website Accessibility & WCAG Compliance Services',
    metaDescription:
      'Website accessibility audits and WCAG 2.2 AA remediation: keyboard, contrast, screen-reader and RTL fixes done in the code, not with an overlay widget.',
    heroTitle: 'Website accessibility audits and WCAG compliance remediation',
    heroIntro:
      'Roughly one in six people lives with a significant disability, and most inaccessible websites lock them out through small, fixable things: unlabelled buttons, invisible focus states, text over images at 2:1 contrast, forms that only work with a mouse. We audit against WCAG 2.2 AA, fix the code, and show you how to keep it accessible as content changes.',
    whatYouGet: [
      {
        title: 'Audit against WCAG 2.2 level AA',
        description:
          'Automated scanning finds perhaps a third of real issues, so we combine it with manual testing: full keyboard-only navigation, screen reader passes, 200 percent zoom and reflow at 320 pixels, colour contrast measurement, and motion and animation review against reduce-motion preferences.',
      },
      {
        title: 'Prioritised remediation plan',
        description:
          'Every finding is recorded with the failing WCAG success criterion, the affected pages or components, the severity in terms of who is blocked, the recommended fix and a realistic effort estimate — so you can sequence the work rather than face an undifferentiated list of hundreds of items.',
      },
      {
        title: 'Code-level fixes, not an overlay',
        description:
          'We fix the markup: semantic landmarks and heading order, correct form labels and error associations, accessible names on icon-only controls, ARIA used only where native HTML cannot do the job, visible focus indicators, and skip links that actually move focus.',
      },
      {
        title: 'Keyboard and focus management',
        description:
          'Every interactive element reachable and operable by keyboard in a logical order, no keyboard traps, focus moved deliberately when a drawer or modal opens and returned when it closes, and dropdowns, accordions, carousels and tabs rebuilt to the expected interaction patterns.',
      },
      {
        title: 'Colour, contrast and typography repair',
        description:
          'Text and interface contrast measured and corrected to at least 4.5:1 for body copy and 3:1 for large text and interface components, colour never used as the only carrier of meaning, and type sizing and spacing that survive zoom and user stylesheet overrides.',
      },
      {
        title: 'Multilingual and RTL accessibility',
        description:
          'Correct lang attributes per page and per inline language change, proper dir handling and mirrored layouts for right-to-left content, and reading-order checks. Our Hebrew RTL e-learning work and German, Polish, Dutch and Norwegian builds mean this is a routine part of how we work.',
      },
      {
        title: 'Accessibility statement and editor training',
        description:
          'A published accessibility statement documenting your conformance level, known limitations and contact route, plus practical guidance for whoever edits the site on writing alt text, meaningful link text, structured headings and accessible PDFs.',
      },
    ],
    process: [
      {
        title: 'Scope the audit',
        description:
          'We select a representative sample: homepage, key templates, the main conversion path, forms, and any custom interactive components. Auditing every page is wasteful when most issues live in shared templates and repeat everywhere.',
      },
      {
        title: 'Test automatically and manually',
        description:
          'Axe and Lighthouse runs establish the machine-detectable baseline, then a human works through keyboard-only navigation, screen reader output, zoom and reflow, contrast measurement and focus behaviour to find what tools cannot detect.',
      },
      {
        title: 'Report and prioritise',
        description:
          'Findings are documented with criterion references, screenshots, reproduction steps and recommended fixes, grouped into critical blockers, serious barriers and refinements, so remediation starts where it removes the most harm.',
      },
      {
        title: 'Remediate',
        description:
          'We implement the fixes in your templates and components — most repairs live in shared code and clear many pages at once — retesting each item as it is closed rather than leaving verification to the end.',
      },
      {
        title: 'Verify and maintain',
        description:
          'A retest confirms closure, the accessibility statement is published, and we agree an ongoing rhythm: checks after significant releases, editor guidance, and periodic reviews as WCAG and platform behaviour evolve.',
      },
    ],
    deliverables: [
      'WCAG 2.2 AA audit report with criterion-level findings',
      'Prioritised remediation backlog with severity and effort estimates',
      'Keyboard navigation and screen reader test notes',
      'Colour contrast analysis with corrected palette values',
      'Implemented code fixes across templates and components',
      'Accessible form patterns with correct labels and error handling',
      'Published accessibility statement for your site',
      'Editor guidance covering alt text, headings and link text',
      'Post-remediation verification report',
    ],
    techStack: [
      'WCAG 2.2',
      'WAI-ARIA',
      'axe DevTools',
      'Lighthouse',
      'NVDA',
      'VoiceOver',
      'WordPress',
      'Breakdance',
      'React',
      'Next.js',
      'WPML',
      'Figma',
    ],
    idealFor: [
      'You sell to public sector, education or enterprise buyers who ask for conformance',
      'You have received an accessibility complaint or legal notice',
      'Someone installed an overlay widget and you suspect it is not enough',
      'Your site is being redesigned and you want accessibility built in, not retrofitted',
      'You ship in multiple languages, including right-to-left content',
      'Your forms or booking flow cannot be completed without a mouse',
    ],
    faqs: [
      {
        question: 'Do accessibility overlay widgets not solve this?',
        answer:
          'No, and disability advocacy groups have been consistent about that for years. Overlays sit on top of broken markup and guess at intent; they cannot invent a meaningful alt text or fix a form field with no label. They frequently interfere with the assistive technology a user has already configured, and they have not prevented legal claims. We fix the underlying code, which is the only durable answer.',
      },
      {
        question: 'Which standard should we be aiming at?',
        answer:
          'WCAG 2.2 level AA is the practical target and the level referenced by most legislation, including the European Accessibility Act, the EN 301 549 procurement standard, and interpretations of the ADA and UK Equality Act. Level A alone is too low to be meaningful and AAA is not realistic across a whole site. We audit against AA and note AAA items where they are cheap wins.',
      },
      {
        question: 'How long does remediation take?',
        answer:
          'The audit typically takes one to two weeks depending on how many unique templates and custom components exist. Remediation depends on the findings: a well-built WordPress site usually needs one to three weeks because most fixes sit in shared templates and propagate everywhere. A site built on a page builder with heavy custom widgets, or one with bespoke interactive components, takes longer.',
      },
      {
        question: 'Will accessibility work change how the site looks?',
        answer:
          'Mostly not. Visible focus indicators appear, some text or button colours shift to reach contrast thresholds, and occasionally a font size or line height increases. Those changes are small and can be designed to fit your brand rather than imposed as browser defaults. Accessible design is generally clearer design, and the same fixes usually improve conversion for everyone, not only assistive technology users.',
      },
      {
        question: 'Can you keep the site accessible after the fixes?',
        answer:
          'That is the part most projects miss, because accessibility decays with every new page an editor publishes. We include editor guidance on alt text, heading structure and link wording, build accessible patterns into your component library so new pages inherit them, and can add accessibility checks to maintenance releases so regressions are caught while they are still one page rather than fifty.',
      },
    ],
    relatedServiceSlugs: [
      'ui-ux-design',
      'website-redesign',
      'website-maintenance-support',
      'seo-services',
    ],
    relatedProjectSlugs: ['afik', 'mediseo', 'in-harmony-education', 'tapi'],
  },
];
