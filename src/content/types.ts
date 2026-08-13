/**
 * Shared content types for the Tekvion Innovations website.
 *
 * All site content is authored as typed TypeScript data under `src/content/`.
 * There is no CMS and no MDX — pages import these structures directly, which
 * keeps every route statically generated and fully crawlable.
 */

/* -------------------------------------------------------------------------- */
/*  Company                                                                    */
/* -------------------------------------------------------------------------- */

export interface ContactDetails {
  email: string;
  phone: string;
  phoneHref: string;
  addressLine: string;
  city: string;
  country: string;
  countryCode: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProofPoint {
  /** The headline figure, e.g. "49+" */
  value: string;
  /** What the figure counts, e.g. "Projects delivered" */
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

/* -------------------------------------------------------------------------- */
/*  Team                                                                       */
/* -------------------------------------------------------------------------- */

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  /** Two-letter initials used by the branded avatar fallback. */
  initials: string;
  /** Public path to the portrait; a placeholder ships at this path. */
  photo: string;
  bio: string;
  focus: string[];
  linkedin?: string;
  /** Personal portfolio site, linked from the team card when present. */
  portfolio?: string;
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | 'Design'
  | 'Development'
  | 'Automation & CRM'
  | 'Growth & Optimisation'
  | 'Platform & Support';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Lucide icon name, e.g. "layout-dashboard". */
  icon: string;
  /** One sentence, outcome-focused — used on cards and in the footer. */
  short: string;
  /** Page <title> (<= 60 chars). */
  metaTitle: string;
  /** Page meta description (150-160 chars). */
  metaDescription: string;
  /** H1 for the detail page. */
  heroTitle: string;
  /** 2-3 sentence intro under the H1. */
  heroIntro: string;
  /** "What you get" — the substance of the offer. */
  whatYouGet: ServiceFeature[];
  /** How we deliver this specific service. */
  process: ProcessStep[];
  /** Concrete artefacts the client receives. */
  deliverables: string[];
  /** Tools and platforms used. */
  techStack: string[];
  /** Signals that this service is the right fit. */
  idealFor: string[];
  faqs: Faq[];
  relatedProjectSlugs: string[];
  relatedServiceSlugs: string[];
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectStack = 'WordPress' | 'Bubble.io' | 'Shopify' | 'Next.js' | 'Hybrid';

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  /** Short descriptor shown under the name, e.g. "Business Coaching Consultancy". */
  descriptor: string;
  url: string;
  industry: string;
  stack: ProjectStack;
  /** Additional platforms/tools, e.g. ["WooCommerce", "WPML"]. */
  tech: string[];
  /** Language(s) the site ships in. */
  languages: string[];
  country: string;
  /** One-paragraph summary used on cards and the portfolio index. */
  summary: string;
  /** Slugs of services this project demonstrates. */
  serviceSlugs: string[];
  /** Featured projects get a full case-study page at /portfolio/[slug]. */
  featured: boolean;
  /** Present on featured projects only. */
  caseStudy?: {
    metaTitle: string;
    metaDescription: string;
    challenge: string[];
    approach: CaseStudySection[];
    outcome: string[];
    /** Factual, verifiable highlights — never invented metrics. */
    highlights: string[];
  };
}

/* -------------------------------------------------------------------------- */
/*  Blog                                                                       */
/* -------------------------------------------------------------------------- */

export type BlockNode =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  /** Page <title> (<= 60 chars). */
  metaTitle: string;
  /** Meta description (150-160 chars). */
  metaDescription: string;
  category: string;
  tags: string[];
  /** ISO date, e.g. "2026-03-14". */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  /** Slug of the team member who wrote it. */
  authorSlug: string;
  /** 1-2 sentence summary for cards and the index page. */
  excerpt: string;
  /** Ordered content blocks. Headings become anchor-linked TOC entries. */
  body: BlockNode[];
  /** Services this post should funnel readers toward. */
  relatedServiceSlugs: string[];
  relatedPostSlugs: string[];
}

/* -------------------------------------------------------------------------- */
/*  Misc                                                                       */
/* -------------------------------------------------------------------------- */

export interface Industry {
  slug: string;
  title: string;
  description: string;
  /** Real client names we have delivered for in this industry. */
  clients: string[];
}
