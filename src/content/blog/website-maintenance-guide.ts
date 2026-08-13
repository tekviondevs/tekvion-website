import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'website-maintenance-guide',
  title: 'Website Maintenance: What It Should Actually Include',
  metaTitle: 'Website Maintenance: What It Should Include',
  metaDescription:
    'Website maintenance is far more than plugin updates. Here is what a real plan covers — backups, security, speed, uptime, content — and how to scope one.',
  category: 'Support',
  tags: ['Website Maintenance', 'WordPress', 'Security', 'Backups', 'Performance'],
  publishedAt: '2026-02-10',
  readingMinutes: 10,
  authorSlug: 'shaharyar-ansari',
  excerpt:
    'Most sites do not break on launch day — they decay quietly over the following year. This is what a maintenance plan should actually cover, how often each task should run, and how to tell a real agreement from a line item.',
  relatedServiceSlugs: [
    'website-maintenance-support',
    'website-security-malware-removal',
    'web-hosting-devops',
    'website-speed-optimisation',
  ],
  relatedPostSlugs: [
    'core-web-vitals-wordpress-guide',
    'website-redesign-checklist',
    'how-much-does-a-website-cost',
  ],
  body: [
    {
      type: 'p',
      text: 'Very few websites fail on launch day. They fail eighteen months later, quietly and in slow motion — a payment gateway that stops settling because its plugin fell three major versions behind, a contact form that has been silently discarding enquiries since a PHP upgrade, a homepage that now takes six seconds to paint on a mid-range Android phone because nobody has looked at the image pipeline since the day it went live.',
    },
    {
      type: 'p',
      text: 'The frustrating part is that almost none of that is dramatic. There is no single catastrophic event to point at, which is exactly why it goes unnoticed until someone says “we are not getting enquiries any more”. By then the fix is rarely a small one. We have taken over enough neglected sites across our 49+ delivered projects to know the pattern well: the recovery cost is almost always a multiple of what steady maintenance would have cost over the same period.',
    },
    {
      type: 'p',
      text: 'The other problem is that “monthly maintenance” has become one of the vaguest line items in the industry. Two agencies can quote the same figure, and one of them is running weekly restore-tested backups, staged updates and uptime monitoring while the other is logging in once a month to click “Update All” and hope. This guide sets out what maintenance should genuinely include, how often each task belongs on the calendar, and what to insist on before you sign anything.',
    },

    { type: 'h2', text: 'What website maintenance actually is' },
    {
      type: 'p',
      text: 'A live website is not a finished artefact. It is a running system sitting on top of a stack that keeps moving underneath it — PHP releases, browser engine updates, TLS certificate rotations, WordPress core, WooCommerce, your theme, every plugin, your payment processor’s API, and the search engines’ own expectations of speed and accessibility. Maintenance is the discipline of keeping your site correct and safe as that ground shifts.',
    },
    {
      type: 'p',
      text: 'That framing matters, because it tells you what belongs in a plan and what does not. Anything required to keep the site working, secure, fast and trustworthy is maintenance. Anything that changes what the site does is a project.',
    },

    { type: 'h3', text: 'Maintenance is not the same as hosting' },
    {
      type: 'p',
      text: 'Good managed hosting — Kinsta, WP Engine, Cloudways and similar — gives you server-level patching, a firewall, a CDN and automated nightly snapshots. That is the foundation, and we recommend it, but it stops at the server boundary. Your host does not know that a plugin update broke your booking flow, does not test your checkout, and will not notice that your Largest Contentful Paint has drifted past three seconds. Hosting keeps the machine healthy. Maintenance keeps the website healthy.',
    },

    { type: 'h3', text: 'Maintenance is not a retainer for new work' },
    {
      type: 'p',
      text: 'Blending the two is where most agreements sour. If your maintenance hours are being consumed by new landing pages, the security review quietly stops happening — and neither side notices until something goes wrong. We keep them separate: a fixed care plan for the health of the site, and quoted work for anything that adds functionality. Small content edits are the sensible exception, and they should be capped explicitly in the agreement rather than left to goodwill.',
    },

    { type: 'h2', text: 'The five layers of a plan that actually works' },
    {
      type: 'p',
      text: 'Strip away the marketing language and every credible maintenance plan is doing five things. If a proposal is missing one of these layers entirely, that is the question to ask before you talk about price.',
    },

    { type: 'h3', text: '1. Updates, applied in the right order' },
    {
      type: 'p',
      text: 'Updates are the visible part of maintenance and the part most often done badly. Clicking “Update All” on production at 2pm on a Tuesday is not a process — it is a gamble with your revenue. The order we follow on every site we look after is deliberately boring:',
    },
    {
      type: 'ol',
      items: [
        'Take a fresh full backup — database and files — and confirm it completed before touching anything.',
        'Apply updates on a staging copy that mirrors production, including its PHP version.',
        'Run the checks that matter for that specific site: the enquiry form, the checkout, the login, the booking calendar, the language switcher.',
        'Compare key templates visually against production to catch layout regressions a functional test would miss.',
        'Deploy to production in a low-traffic window, then re-run the same checks live.',
        'Watch error logs and uptime for the following 24 hours, and keep the rollback point available until you are confident.',
      ],
    },
    {
      type: 'p',
      text: 'Security patches are the exception to the staging queue — a known, actively exploited vulnerability in a plugin you run should be patched immediately, then verified. Everything else can wait for the next scheduled window.',
    },

    { type: 'h3', text: '2. Backups you have actually restored' },
    {
      type: 'p',
      text: 'An untested backup is a belief, not a safety net. We have seen backup plugins reporting green for months while silently skipping the uploads directory, and hosts retaining seven days of snapshots when the malware infection being cleaned up was three weeks old. A real backup policy is specific about all of the following:',
    },
    {
      type: 'ul',
      items: [
        'Frequency, matched to how often the site changes — nightly for a brochure site, near-continuous for a store taking orders around the clock.',
        'Scope: database, uploads, themes, plugins and any custom code, not just the database.',
        'Off-site storage in a separate provider from the host, so one compromised account cannot take both.',
        'Retention long enough to reach back past a slow-burning problem — 30 days minimum, with monthly archives on commerce sites.',
        'A documented restore procedure with a known recovery time, tested at least twice a year against a staging environment.',
      ],
    },
    {
      type: 'callout',
      title: 'The only test that counts',
      text: 'Ask your provider when they last restored your site from backup — not when they last took one. If the answer is “we have never needed to”, the restore path is untested and your real recovery time is unknown.',
    },

    { type: 'h3', text: '3. Security: hardening plus monitoring' },
    {
      type: 'p',
      text: 'Almost every WordPress compromise we have been called in to clean traces back to one of three causes: an outdated plugin with a public exploit, a weak or reused administrator password, or an abandoned plugin that has not shipped a release in years and never will. Hardening addresses the first two; a dependency audit addresses the third. Sensible configuration defaults cost nothing and close a surprising amount of surface area:',
    },
    {
      type: 'code',
      language: 'php',
      code: `/* wp-config.php — baseline hardening for a production site */
define( 'DISALLOW_FILE_EDIT', true );      // no theme/plugin editing from wp-admin
define( 'WP_AUTO_UPDATE_CORE', 'minor' );  // security releases land automatically
define( 'FORCE_SSL_ADMIN', true );         // admin and login always over HTTPS
define( 'WP_POST_REVISIONS', 20 );         // stop revisions bloating the database
define( 'WP_DEBUG', false );               // never expose stack traces publicly
define( 'WP_DEBUG_LOG', true );            // but keep logging to a private file`,
    },
    {
      type: 'p',
      text: 'On top of that: enforced two-factor authentication for every administrator, least-privilege roles so editors are not administrators, a web application firewall at the edge, rate-limited login endpoints, and file-integrity monitoring that alerts when a core file changes unexpectedly. Add a quarterly review of every installed plugin, removing anything unmaintained or no longer used. Deleting a plugin is the most reliable way to secure it.',
    },

    { type: 'h3', text: '4. Performance and Core Web Vitals' },
    {
      type: 'p',
      text: 'Performance degrades by accretion. Nobody adds five seconds to a page; people add a tracking script, an uncompressed hero image, a slider plugin and a font weight, and six months later the page is unrecognisable. Because Core Web Vitals feed into Google’s ranking systems and are measured on real users rather than a lab test, this drift shows up in both experience and visibility.',
    },
    {
      type: 'p',
      text: 'Google’s published thresholds for a “good” experience are Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1, assessed at the 75th percentile of page loads. A maintenance plan should track those figures monthly from field data rather than a one-off lab run, flag any metric trending toward its threshold, and treat regressions as defects with a cause — usually a new script, an unsized image, or a plugin that queues render-blocking CSS on every page whether or not it is used.',
    },

    { type: 'h3', text: '5. Content integrity and the small stuff' },
    {
      type: 'p',
      text: 'The least glamorous layer, and the one clients notice first. Broken internal links after a page is renamed, 404s accumulating in Search Console, an SSL certificate quietly approaching expiry, a copyright year stuck two years in the past, a phone number changed everywhere except the footer, form submissions landing in spam because an SPF record was never updated. None of it is technically difficult. All of it erodes trust, and all of it needs someone whose job it is to look.',
    },

    { type: 'h2', text: 'How often should each task run?' },
    {
      type: 'p',
      text: 'Cadence should follow risk and rate of change. A five-page brochure site and a WooCommerce store with a thousand SKUs do not need the same schedule. The table below is the baseline we work from and then adjust per site.',
    },
    {
      type: 'table',
      headers: ['Task', 'Brochure / marketing site', 'E-commerce or web app'],
      rows: [
        ['Uptime and SSL monitoring', 'Continuous, 1-minute checks', 'Continuous, 1-minute checks'],
        ['Off-site backup', 'Nightly', 'Hourly or on transaction'],
        ['Plugin and theme updates', 'Monthly, staged', 'Fortnightly, staged'],
        ['Critical security patches', 'Within 24 hours', 'Within 24 hours'],
        ['Malware and integrity scan', 'Weekly', 'Daily'],
        ['Core Web Vitals review', 'Monthly', 'Monthly'],
        ['Broken link and 404 audit', 'Quarterly', 'Monthly'],
        ['Backup restore test', 'Twice yearly', 'Quarterly'],
        ['Plugin inventory and cull', 'Quarterly', 'Quarterly'],
        ['PHP and platform version review', 'Twice yearly', 'Twice yearly'],
      ],
    },

    { type: 'h2', text: 'What a good agreement puts in writing' },
    {
      type: 'p',
      text: 'You cannot audit work you cannot see, so the contract should make the invisible visible. Before signing, check that the document is explicit about each of these:',
    },
    {
      type: 'ul',
      items: [
        'The exact scope — which of the five layers above are covered, and which are billed separately.',
        'A staging environment, and a commitment that updates are tested there before production.',
        'Response times, split between a routine request and a site that is down or compromised.',
        'Who owns the hosting account, domain and DNS. It should be you, with the agency holding delegated access.',
        'A monthly report showing what was updated, what was scanned, current performance figures and what needs attention.',
        'What happens if the site is hacked — whether clean-up is included or quoted, and what the recovery time objective is.',
        'An exit clause: how credentials, backups and documentation are handed over if you leave.',
      ],
    },
    {
      type: 'p',
      text: 'On cost, we will not quote a universal figure because there is not an honest one — a static five-page site and a multilingual store with custom integrations sit in different worlds. The useful comparison is not plan versus nothing; it is plan versus the alternative. An emergency malware clean-up, a rebuild of a store that fell too far behind to update safely, or the revenue lost while a checkout is broken all cost considerably more than a year of steady care, and they arrive without warning.',
    },

    { type: 'h2', text: 'How we approach maintenance at Tekvion' },
    {
      type: 'p',
      text: 'We maintain a large share of the sites we build, and a fair number we did not. The work starts with an audit rather than a subscription: current platform and PHP versions, the full plugin inventory with maintenance status, backup and restore reality, security configuration, field performance data, and any custom code that will complicate future updates. That produces a short remediation list, and only once it is cleared does the site move onto a routine schedule.',
    },
    {
      type: 'p',
      text: 'From there, every site we look after gets its own staging environment and a documented set of critical user journeys — the specific paths that must work after any change. For a WooCommerce store that is add-to-cart through to payment confirmation. For the Hebrew right-to-left learning platform we built, it is the course catalogue and enrolment flow with RTL layout intact. For the multilingual clinic and coaching sites we run in German, French, Italian, Polish, Dutch and Norwegian, it includes the language switcher and each locale’s enquiry form, because translation plugins are a common casualty of core updates.',
    },
    {
      type: 'p',
      text: 'Our Bubble.io products need a different rhythm. There are no plugin updates to stage, but there is API and LLM dependency management — the AI research, mock-interview and image-generation platforms we have built all depend on third-party models whose endpoints, pricing and deprecation schedules change without asking. Watching for those changes, and keeping usage limits and error handling sane, is maintenance in exactly the same sense.',
    },
    {
      type: 'p',
      text: 'What ties it together is reporting you can actually read: what changed, what was found, what we recommend, and what it will cost if you want it done. Most of our clients stay with us for two years or more, and that only works when the monthly report is honest about the months where the correct answer was “nothing needed doing”.',
    },

    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'If you are not certain what is currently covered, start with three questions: when was the last successful restore test, which plugins have not shipped an update in over a year, and what are your Core Web Vitals on mobile right now. The answers will tell you more about your risk than any proposal will.',
    },
    {
      type: 'p',
      text: 'From there, the work usually splits across a handful of our services. Ongoing website maintenance and support covers the schedule itself. If a scan turns up something nasty, website security and malware removal handles clean-up and hardening. Hosting and DevOps is where staging environments, deployments and monitoring live. And if the performance review shows drift past Google’s thresholds, website speed optimisation is the focused engagement that pulls it back. Tell us the URL and what worries you about it, and we will tell you honestly which of those you need — and which you do not.',
    },
  ],
};
