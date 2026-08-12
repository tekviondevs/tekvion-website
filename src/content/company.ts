import type {
  ContactDetails,
  Faq,
  ProcessStep,
  ProofPoint,
  SocialLink,
  ValueItem,
} from '@/content/types';

/* -------------------------------------------------------------------------- */
/*  Company profile                                                            */
/* -------------------------------------------------------------------------- */

export interface CompanyProfile {
  /** Public brand name used everywhere on the site. */
  name: string;
  /** Registered / LinkedIn entity name — footer fine print and legal pages only. */
  legalName: string;
  tagline: string;
  foundedYear: number;
  /** Longer positioning paragraph — About page intro, meta descriptions, JSON-LD. */
  positioning: string;
  /** One or two sentences for cards, footers, and social previews. */
  elevatorPitch: string;
}

export const company: CompanyProfile = {
  name: 'Tekvion Innovations',
  legalName: 'Tekvion Solutions',
  tagline: 'Think. Build. Launch.',
  foundedYear: 2021,
  positioning:
    'Tekvion Innovations is a founder-led web design and development studio, established in 2021 and based in Islamabad, Pakistan. We build on two stacks and know both deeply: WordPress for content sites, WooCommerce stores, learning platforms and multi-location service businesses, and Bubble.io for custom applications, marketplaces, AI and LLM products, and the admin panels behind native mobile apps. Forty-nine projects later we still work the same way — a written scope before a line of code, weekly progress you can see, code and credentials that belong to you, and a team that stays on after launch. Most of our clients have been with us for two years or more.',
  elevatorPitch:
    'We design, build, launch and maintain websites and web applications for businesses that need the work done properly — 49+ projects delivered across 4 continents since 2021.',
};

/* -------------------------------------------------------------------------- */
/*  Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contact: ContactDetails = {
  email: 'business@tekvion.net',
  phone: '+92 301 1114200',
  phoneHref: 'tel:+923011114200',
  addressLine: 'River Gardens',
  city: 'Islamabad',
  country: 'Pakistan',
  countryCode: 'PK',
};

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tekvion-solutions/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589129080087' },
];

/* -------------------------------------------------------------------------- */
/*  Proof points — only the verified figures. Never add unverified metrics.     */
/* -------------------------------------------------------------------------- */

export const proofPoints: ProofPoint[] = [
  { value: '49+', label: 'Projects delivered' },
  { value: '42', label: 'WordPress builds' },
  { value: '7', label: 'Bubble.io builds' },
  { value: '4', label: 'Continents served' },
  { value: '10+', label: 'Countries with live clients' },
  { value: '10+', label: 'Years combined experience' },
  { value: '2+', label: 'Years the average client stays' },
];

/* -------------------------------------------------------------------------- */
/*  How we work                                                                */
/* -------------------------------------------------------------------------- */

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery & Strategy',
    description:
      'We start with a focused call to understand your business, audience, goals, and competitors. By the end of this stage we deliver a written brief, sitemap, and clear scope of work — so the rest of the project moves with zero ambiguity.',
  },
  {
    title: 'Design & Build',
    description:
      'Our designers craft a brand-aligned visual direction, then our developers build it on the right stack — WordPress for content and e-commerce, Bubble.io for custom apps. You see progress weekly and approve every milestone.',
  },
  {
    title: 'Test & Launch',
    description:
      'We test on real devices, optimise for Core Web Vitals, set up analytics and search consoles, and migrate from staging to production. Launch day is calm, planned, and reversible.',
  },
  {
    title: 'Support & Scale',
    description:
      'After launch we stay on as your long-term partner — backups, updates, security monitoring, content edits, and iterative improvements. Most of our clients have been with us for 2+ years.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Values                                                                     */
/* -------------------------------------------------------------------------- */

export const values: ValueItem[] = [
  {
    title: 'Transparent Communication',
    description:
      'Clear timelines, weekly progress, and plain answers — even when the answer is “you don’t need that.”',
  },
  {
    title: 'Quick Turnarounds',
    description: 'Fixed scopes and flexible timelines that respect your launch dates.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We stay on after launch: backups, updates, monitoring, and improvements.',
  },
  {
    title: 'Strategic Design',
    description:
      'Every design decision serves performance, SEO, and conversion — not decoration.',
  },
  {
    title: 'Ownership Without Lock-In',
    description:
      'You get the source code, the credentials, and the licences. Portable stacks, no proprietary traps.',
  },
  {
    title: 'Founder-Led Delivery',
    description:
      'Both founders work on every project. No account managers, no hand-offs, no telephone game.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export const whyChoosePoints: string[] = [
  '10+ years of combined team experience',
  'Quick turnaround times',
  'Transparent communication',
  'Fast, scalable, and user-friendly websites',
  'Clear communication with non-technical clients',
  'Reliable long-term support and maintenance',
  'Affordable pricing & flexible timelines',
  'Strategic design for performance & SEO',
  'Experienced team of developers and designers',
  'Scalable solutions for any business size',
];

/* -------------------------------------------------------------------------- */
/*  Languages we have shipped production sites in                              */
/* -------------------------------------------------------------------------- */

export const languagesShipped: string[] = [
  'English',
  'German',
  'French',
  'Italian',
  'Hebrew',
  'Polish',
  'Dutch',
  'Norwegian',
];

/* -------------------------------------------------------------------------- */
/*  Forms                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Static-safe form target. Every form on the site posts here.
 * Swap for a real Formspree (or equivalent) endpoint before launch — see README.
 */
export const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_ME';

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                       */
/* -------------------------------------------------------------------------- */

export const faqs: Faq[] = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most brand and marketing websites go live three to six weeks after we have your content and sign-off. WooCommerce stores, learning platforms and Bubble.io applications usually run six to ten weeks, longer where there are heavy integrations or several languages to manage. We commit to a firm date at the end of the Discovery & Strategy stage rather than guessing before we understand the scope. The single biggest cause of slippage is content and feedback turnaround on your side, so we build a content schedule into the plan from day one and chase it politely.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'It depends entirely on scope, design complexity and the features you need. Rather than publish ballpark numbers that may not apply to your project, we would rather read your brief and price the actual work. Tell us what the site has to do — roughly how many pages, how many languages, whether you need a store, a membership area, an integration or an application behind it — and we come back with a written, itemised figure, a firm timeline and the payment schedule, usually within one working day. That quote is fixed against the scope attached to it, so the number you approve is the number you pay unless you ask us to add something. Send the brief to business@tekvion.net.',
  },
  {
    question: 'Which platforms do you build on?',
    answer:
      'WordPress is our primary stack — 42 of our 49 delivered projects run on it, covering custom themes and plugins, WooCommerce stores, LMS and membership builds, and multilingual sites across eight languages including right-to-left Hebrew. For products with real application logic — marketplaces, AI and LLM tools, reporting and PDF engines, admin panels behind native mobile apps — we build on Bubble.io, where we have shipped seven live products. We also deliver hybrid architectures: a fast marketing front end in WordPress or Next.js paired with a Bubble.io app on a subdomain.',
  },
  {
    question: 'Will I own the website and the code?',
    answer:
      'Yes, completely. On final payment you receive the domain, the hosting account, admin credentials, theme and plugin licences, and the full source code. Nothing is held back and nothing stays on a Tekvion-only account. We build on standard, portable technology, so any competent developer can pick the project up after us — we do not use proprietary builders designed to trap you. If we build you a Bubble.io product, the application lives in your own Bubble workspace under your billing. We stay on because you want us to, not because leaving is difficult.',
  },
  {
    question: 'Do you offer ongoing maintenance after launch?',
    answer:
      'Yes, and most clients take it — a good number have now been with us for two years or more. A care plan covers core, theme and plugin updates applied on staging first, daily off-site backups, uptime and security monitoring, malware scanning, broken-link and form checks, performance reviews, and a monthly allowance of content edits. You get a short written report each month showing exactly what was done and why. Plans are billed monthly and can be cancelled at any time, and we hand everything over cleanly if you ever move on.',
  },
  {
    question: 'Can you redesign or migrate an existing website?',
    answer:
      'Yes — redesigns and replatforming are a large share of what we do. We start by taking stock of what already works: your top landing pages, current rankings, backlinks, and the URLs actually earning traffic. Then we rebuild on a modern stack, migrate the content, and map every old URL to its new home with 301 redirects so the equity carries over. We work on staging and leave the live site untouched until you approve, then watch Search Console for crawl errors and ranking movement after launch. Host moves and Wix or Squarespace migrations are routine for us.',
  },
  {
    question: 'Where are you based and which regions do you serve?',
    answer:
      'We are based at River Gardens in Islamabad, Pakistan, and work remotely with clients worldwide — projects delivered across four continents, with live clients in more than ten countries including the UK, United States, Germany, Switzerland, the Netherlands, Norway, Poland, Italy, Israel, Australia and Mexico. We have shipped sites in eight languages, so translation workflows and right-to-left layouts are familiar ground rather than an experiment. We keep flexible hours to overlap with European and North American working days, and run everything over email, scheduled video calls and a shared project board.',
  },
  {
    question: 'How do payments work?',
    answer:
      'For standard website projects we work on 50% up front and 50% on launch, invoiced against a written scope so there are no surprises at the end. Larger builds and Bubble.io applications are split into milestones — typically discovery, design sign-off, build, and launch — with each stage invoiced as it completes. Care plans are billed monthly in advance and can be cancelled at any time. We accept bank transfer, Wise and Payoneer, and can invoice in US dollars, pounds or euros. What counts as a revision and what counts as new scope is documented before work begins.',
  },
];
