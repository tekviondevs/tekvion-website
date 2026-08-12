import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'core-web-vitals-wordpress-guide',
  title: 'Core Web Vitals for WordPress: A Practical Speed Guide',
  metaTitle: 'Core Web Vitals for WordPress: A Speed Guide',
  metaDescription:
    'A practical Core Web Vitals guide for WordPress: what LCP, INP and CLS really measure, where sites lose time, and the fixes that hold up in the field.',
  category: 'Performance',
  tags: ['Core Web Vitals', 'WordPress', 'Performance', 'Technical SEO', 'LCP', 'INP'],
  publishedAt: '2026-06-18',
  readingMinutes: 11,
  authorSlug: 'shaharyar-ansari',
  excerpt:
    'Core Web Vitals are the part of page experience you can actually measure and fix. Here is how we diagnose and repair LCP, INP and CLS on real WordPress sites.',
  relatedServiceSlugs: [
    'website-speed-optimisation',
    'wordpress-development',
    'seo-services',
    'website-maintenance-support',
  ],
  relatedPostSlugs: [
    'website-redesign-checklist',
    'website-maintenance-guide',
    'wordpress-vs-bubble-io-which-to-choose',
  ],
  body: [
    {
      type: 'p',
      text: 'Core Web Vitals are the part of Google’s page experience signals you can genuinely measure, act on, and re-measure. They are also the part most WordPress owners get wrong — not because the metrics are obscure, but because the standard advice (“install a caching plugin and tick every box”) treats a symptom instead of a cause. A site can score beautifully in a synthetic test and still fail for the people actually using it on a mid-range Android phone over a patchy connection.',
    },
    {
      type: 'p',
      text: 'We have shipped 42 WordPress builds — WooCommerce stores, multilingual clinic and coaching sites, a Hebrew RTL learning platform, a large multi-location retail catalogue — and the pattern repeats. The sites that pass their vitals are rarely the ones with the most optimisation plugins installed. They are the ones where somebody decided, deliberately, what loads first, what loads late, and what does not load at all.',
    },
    {
      type: 'p',
      text: 'This guide covers what each metric measures, where WordPress specifically leaks performance, and the fixes we apply in the order we apply them — written both for owners who need to brief a developer properly and for developers who want a repeatable diagnostic path.',
    },

    { type: 'h2', text: 'What Core Web Vitals actually measure' },
    {
      type: 'p',
      text: 'There are three metrics, and each one stands in for a different kind of user frustration: waiting, tapping and getting nothing, and having the page move under your thumb. Understanding which frustration you are fixing keeps you from wasting a week on the wrong thing.',
    },

    { type: 'h3', text: 'Largest Contentful Paint (LCP)' },
    {
      type: 'p',
      text: 'LCP records when the largest visible element in the viewport finishes rendering — usually a hero image, a background image, or a big block of heading text. It is the closest thing we have to a machine-readable answer to “when did this page feel like it had arrived?”. On WordPress, LCP is almost always dominated by two things: how long the server takes to return the first byte of HTML, and how big and how late the hero image is.',
    },

    { type: 'h3', text: 'Interaction to Next Paint (INP)' },
    {
      type: 'p',
      text: 'INP replaced First Input Delay in March 2024 and it is a much harder test. Rather than measuring only the delay before the browser starts handling your first interaction, INP looks at the whole latency of interactions across the visit — input delay, processing time, and the paint that follows — and reports a value close to the worst one. If a menu takes half a second to open, or a variation swatch on a WooCommerce product page freezes the tab while it recalculates price, INP will find it. This is the metric that punishes JavaScript-heavy page builders and stacked third-party scripts.',
    },

    { type: 'h3', text: 'Cumulative Layout Shift (CLS)' },
    {
      type: 'p',
      text: 'CLS scores how much visible content moves around without the user causing it. Images without width and height attributes, late-loading web fonts that swap in at a different metric, cookie banners that inject themselves above the fold, and lazily inserted advert or review widgets are the usual offenders. CLS is typically the cheapest of the three to fix and the one most often ignored.',
    },
    {
      type: 'table',
      headers: ['Metric', 'Good', 'Needs improvement', 'Poor', 'Most common WordPress cause'],
      rows: [
        [
          'LCP',
          '2.5s or less',
          '2.5s – 4.0s',
          'Over 4.0s',
          'Slow TTFB, unoptimised or lazy-loaded hero image',
        ],
        [
          'INP',
          '200ms or less',
          '200ms – 500ms',
          'Over 500ms',
          'Page-builder JavaScript, chat and tracking scripts',
        ],
        [
          'CLS',
          '0.1 or less',
          '0.1 – 0.25',
          'Over 0.25',
          'Images without dimensions, font swap, injected banners',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Those thresholds are Google’s published values, and the assessment is made at the 75th percentile of page loads — meaning three quarters of your real visits must be inside the “good” band before the metric passes. An average will lie to you here. A page can average 2.1 seconds of LCP and still fail because the slowest quarter of visits sit at five seconds.',
    },

    { type: 'h2', text: 'Field data beats lab data, every time' },
    {
      type: 'p',
      text: 'Lighthouse, the tool built into Chrome DevTools and the engine behind most one-click audit reports, is a lab test. It simulates one device on one throttled connection, in one location, with no cache and no logged-in state. It is superb for diagnosis and worthless as a verdict. Field data — the Chrome User Experience Report, visible in PageSpeed Insights and Search Console’s Core Web Vitals report — is what Google actually uses, and it reflects your real audience on their real hardware.',
    },
    {
      type: 'callout',
      title: 'Use the two tools for what each is good at',
      text: 'Read field data (PageSpeed Insights, Search Console, or your own web-vitals collection) to decide whether you have a problem and on which templates. Then use lab tools — Lighthouse, WebPageTest, the DevTools performance panel — to find out why. Never celebrate a Lighthouse score change until the field data confirms it 28 days later.',
    },
    {
      type: 'p',
      text: 'One caution about Search Console: it groups URLs, so a single failing template — your product page, your blog archive — can drag a whole group into “needs improvement”. Fix templates, not individual URLs. On a site with 400 posts, the blog post template is one job, not four hundred.',
    },

    { type: 'h2', text: 'Where WordPress sites actually lose time' },
    {
      type: 'p',
      text: 'Before touching a single setting, we profile. Almost every WordPress performance problem we have inherited falls into one of four buckets, and they are worth attacking in this order because each one changes the numbers the next one produces.',
    },

    { type: 'h3', text: 'Server response time' },
    {
      type: 'p',
      text: 'If your uncached HTML takes 800ms to arrive, no amount of front-end tuning will rescue LCP. Shared hosting on an old PHP version, no persistent object cache, and a database carrying years of autoloaded options and orphaned post meta are the classic combination. Properly resourced managed hosting, a current PHP release, Redis or Memcached for the object cache and full-page caching in front of everything routinely remove more time than every image optimisation put together.',
    },

    { type: 'h3', text: 'Plugin and page-builder overhead' },
    {
      type: 'p',
      text: 'WordPress does not become slow on its own; it becomes slow one plugin at a time. Every active plugin can add queries, enqueue CSS and JavaScript on every page whether or not it is used there, and register admin-ajax or REST calls that run on the front end. Page builders compound the problem by shipping a generic bundle sized for every feature you might use rather than the handful you do use.',
    },
    {
      type: 'ul',
      items: [
        'Audit which assets each plugin enqueues site-wide, and dequeue them on templates that do not need them — a contact-form script has no business loading on a product page.',
        'Replace multi-purpose plugins that do one job for you with a few lines of theme code, where the job is genuinely small.',
        'Check for duplicated functionality: two SEO plugins, two caching layers, or a slider plugin plus a builder that already has a slider.',
        'Remove abandoned plugins entirely rather than leaving them deactivated — deactivated plugins still need updating and still represent risk.',
        'Watch the WordPress Heartbeat API and admin-ajax on busy editorial sites; both quietly consume server resources.',
      ],
    },

    { type: 'h3', text: 'Images and media' },
    {
      type: 'p',
      text: 'Images are the most common LCP element and the easiest to get badly wrong. A 3,000-pixel-wide hero photograph exported straight from a designer’s machine, served as a PNG at full size to a 390-pixel phone screen, will fail LCP on its own. Serve modern formats (WebP or AVIF), generate and actually use the right srcset sizes, and compress deliberately rather than relying on defaults.',
    },

    { type: 'h3', text: 'Fonts, CSS and third-party scripts' },
    {
      type: 'p',
      text: 'Render-blocking CSS in the head delays everything behind it. Web fonts loaded from a third-party origin add a DNS lookup, a connection, and a swap that can shift your layout. Third-party tags — tag managers, chat widgets, heat maps, review carousels, consent tools — are frequently the single largest contributor to poor INP, because they run their JavaScript on the main thread at exactly the moment your visitor is trying to interact.',
    },

    { type: 'h2', text: 'Fixing LCP on WordPress' },
    {
      type: 'p',
      text: 'Work through these in order. Each step is measurable on its own, so you always know what bought you the improvement.',
    },
    {
      type: 'ol',
      items: [
        'Get time to first byte under control: current PHP, persistent object cache, full-page cache, and a CDN in front of the origin so visitors on other continents are not waiting on a single data centre.',
        'Identify the actual LCP element in the DevTools performance panel — do not assume it is the image you think it is.',
        'Stop lazy-loading anything above the fold. A lazily loaded hero image is one of the most common self-inflicted LCP failures on WordPress.',
        'Mark the hero image as high priority so the browser fetches it before decorative assets and scripts.',
        'Preload the font files used by the headline, and self-host them with an appropriate font-display value so text paints immediately.',
        'Inline the small amount of CSS needed for the first viewport and load the rest without blocking rendering.',
        'Re-test in the field after four weeks, not after four minutes.',
      ],
    },
    {
      type: 'p',
      text: 'Recent WordPress releases handle image priority automatically in many themes, but custom hero markup and page builders often defeat the detection. When they do, a small filter in the theme is more reliable than another plugin:',
    },
    {
      type: 'code',
      language: 'php',
      code: `// functions.php — make sure the hero image is fetched first, not lazily.
add_filter(
    'wp_get_attachment_image_attributes',
    function ( $attr, $attachment, $size ) {
        if ( is_front_page() && 'hero-large' === $size ) {
            $attr['loading']       = 'eager';
            $attr['fetchpriority'] = 'high';
            $attr['decoding']      = 'sync';
        }

        return $attr;
    },
    10,
    3
);`,
    },

    { type: 'h2', text: 'Fixing INP on WordPress' },
    {
      type: 'p',
      text: 'INP is a main-thread problem, so the fix is nearly always doing less JavaScript work, doing it later, or doing it somewhere else. Record an interaction trace on a throttled CPU — four to six times slowdown approximates a mid-range phone — and look for long tasks blocking the thread while you click.',
    },
    {
      type: 'ul',
      items: [
        'Defer non-critical scripts and load third-party tags after the page is interactive, not in the head.',
        'Load chat widgets, review embeds and video players on interaction or when they scroll into view, rather than on page load.',
        'Consolidate tracking through a single tag manager and audit what is inside it — most containers accumulate tags nobody remembers adding.',
        'Remove jQuery dependencies where a theme or plugin no longer needs them, and never load two versions of a library.',
        'Break long-running scripts into smaller chunks so the browser can respond between them.',
        'On WooCommerce, look hard at cart fragments and variation scripts — they are frequent causes of sluggish product and cart pages.',
      ],
    },
    {
      type: 'p',
      text: 'One honest trade-off worth naming: some of the things clients most want — a live chat bubble, a booking widget, an embedded review feed — cost interaction latency. The right conversation is not “remove them” but “what does each one earn, and can it load after the visitor has engaged?”',
    },

    { type: 'h2', text: 'Fixing CLS on WordPress' },
    {
      type: 'p',
      text: 'CLS is the quickest win on most sites. Set explicit width and height (or a CSS aspect ratio) on every image, iframe and video embed so the browser reserves the right space before the asset arrives. Reserve height for anything injected by JavaScript — cookie banners, promotional bars, ad slots — by rendering them in a container that already occupies its final space. Self-host fonts and pick a fallback with similar metrics so the swap does not reflow paragraphs. And never animate top, left, width or height when a transform will do the same job without moving anything around it.',
    },

    { type: 'h2', text: 'Choosing a caching stack that does not fight itself' },
    {
      type: 'p',
      text: 'Most inherited sites we audit have two or three overlapping caching layers, each partially configured, each undoing the other. Decide what each layer is responsible for and configure only that.',
    },
    {
      type: 'table',
      headers: ['Layer', 'What it does', 'What it will not fix'],
      rows: [
        [
          'Object cache (Redis / Memcached)',
          'Stores repeated database query results in memory',
          'Front-end payload size or JavaScript execution',
        ],
        [
          'Full-page cache',
          'Serves pre-rendered HTML so PHP does not run per visit',
          'Logged-in, cart and checkout pages, which must stay dynamic',
        ],
        [
          'CDN / edge cache',
          'Serves assets and cached HTML close to the visitor',
          'A slow origin on the first, uncached request',
        ],
        [
          'Browser cache',
          'Avoids re-downloading assets on repeat visits',
          'The first visit — which is the one Google measures hardest',
        ],
      ],
    },
    {
      type: 'p',
      text: 'For e-commerce there is one extra rule: cart, checkout and account pages must be excluded from full-page caching, and cache keys need to respect currency, language and logged-in state. Getting this wrong produces the worst class of bug — one customer seeing another customer’s basket.',
    },

    { type: 'h2', text: 'How we approach this at Tekvion' },
    {
      type: 'p',
      text: 'We start every speed engagement with 28 days of field data, not a Lighthouse screenshot. We identify the two or three templates that carry the most traffic, establish where each one sits against the thresholds, and agree what “done” looks like before we touch anything. That baseline is what makes the work arguable later.',
    },
    {
      type: 'p',
      text: 'From there we work server-first: hosting and PHP version, database hygiene, object cache, page cache, CDN. Only when the HTML arrives quickly do we move to the front end, because front-end numbers measured on a slow origin are noise. Then we go template by template — hero image and priority hints, font strategy, critical CSS, conditional plugin assets, deferred third parties — and re-measure after each change so we know which one paid.',
    },
    {
      type: 'p',
      text: 'The context matters too. A Norwegian WooCommerce store, a German clinic site and a Hebrew RTL learning platform have genuinely different constraints: different fonts and script directions, different currencies and cache keys, different distances between visitor and server. Working across English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian builds for clients on four continents has taught us that “fast” is a local question, and a CDN plus a sensibly located origin is often the highest-value change on the list.',
    },
    {
      type: 'p',
      text: 'Finally, we treat performance as something you maintain rather than something you achieve. Sites regress: a new plugin, a marketing tag added in a hurry, an uncompressed image uploaded by an editor. Ongoing monitoring, with an agreed budget for page weight and third-party scripts, is what keeps the numbers where you put them.',
    },

    { type: 'h2', text: 'Where to start this week' },
    {
      type: 'p',
      text: 'Open Search Console, find the Core Web Vitals report, and note which URL groups fail and on which metric. Run your two highest-traffic templates through PageSpeed Insights and compare the field data against the lab diagnostics. If field data is missing, your traffic is probably too low for CrUX — use lab data plus honest judgement about your audience’s devices. That hour will tell you whether you have a server problem, a payload problem or a JavaScript problem, and those need three different fixes.',
    },
    {
      type: 'p',
      text: 'If you would rather not do it alone, this is exactly the work our website speed optimisation service covers, usually alongside WordPress development where the theme or build itself needs repairing rather than patching. Where the goal is search visibility rather than speed for its own sake, our SEO services team treats vitals as one input among several — and once the numbers are good, ongoing website maintenance and support is what stops them drifting back. Whichever route you take, measure in the field, fix the cause rather than the score, and change one thing at a time.',
    },
  ],
};
