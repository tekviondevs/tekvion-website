import { posts } from '@/content/blog';
import { featuredProjects } from '@/content/projects';
import { services } from '@/content/services';

/**
 * Single source of truth for every URL the site publishes.
 *
 * `src/app/sitemap.ts` is the only consumer today, but anything that needs to
 * walk the site (a link checker, a prerender manifest, a nav audit) should read
 * from here rather than re-deriving paths from the content files.
 *
 * Dynamic segments are derived from the content layer, so adding a service,
 * featured project or blog post automatically adds its route.
 */

export type RouteKind =
  | 'home'
  | 'pillar'
  | 'conversion'
  | 'service'
  | 'caseStudy'
  | 'post'
  | 'legal';

export interface SiteRoute {
  /** Site-relative path, always starting with "/" and never trailing-slashed. */
  path: string;
  kind: RouteKind;
  /** ISO date (YYYY-MM-DD) of the most recent meaningful change. */
  lastModified: string;
}

/**
 * Fallback freshness date for routes whose content carries no date of its own
 * (marketing pages, service pages, case studies). Bump this when the site
 * receives a substantive content revision — it is the honest "last edited"
 * signal for those URLs.
 */
export const SITE_REVISED = '2026-08-13';

/** Newest publication date across the blog, used for the /blog index. */
const newestPostDate: string = posts.reduce<string>(
  (latest, post) => {
    const date = post.updatedAt ?? post.publishedAt;
    return date > latest ? date : latest;
  },
  posts[0]?.publishedAt ?? SITE_REVISED,
);

/** Marketing and conversion pages that are not generated from a content list. */
export const staticRoutes: SiteRoute[] = [
  { path: '/', kind: 'home', lastModified: SITE_REVISED },
  { path: '/about', kind: 'pillar', lastModified: SITE_REVISED },
  { path: '/services', kind: 'pillar', lastModified: SITE_REVISED },
  { path: '/portfolio', kind: 'pillar', lastModified: SITE_REVISED },
  { path: '/blog', kind: 'pillar', lastModified: newestPostDate },
  { path: '/contact', kind: 'conversion', lastModified: SITE_REVISED },
  { path: '/quote', kind: 'conversion', lastModified: SITE_REVISED },
  { path: '/privacy-policy', kind: 'legal', lastModified: SITE_REVISED },
  { path: '/terms-of-service', kind: 'legal', lastModified: SITE_REVISED },
];

/** One route per service in the content layer (/services/[slug]). */
export const serviceRoutes: SiteRoute[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  kind: 'service',
  lastModified: SITE_REVISED,
}));

/**
 * One route per featured project (/portfolio/[slug]).
 * Only featured projects carry a `caseStudy` object, so only they get a page.
 */
export const caseStudyRoutes: SiteRoute[] = featuredProjects.map((project) => ({
  path: `/portfolio/${project.slug}`,
  kind: 'caseStudy',
  lastModified: SITE_REVISED,
}));

/** One route per blog post (/blog/[slug]), dated from the post itself. */
export const postRoutes: SiteRoute[] = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  kind: 'post',
  lastModified: post.updatedAt ?? post.publishedAt,
}));

/** Every indexable route on the site, in crawl-priority order. */
export const allRoutes: SiteRoute[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...caseStudyRoutes,
  ...postRoutes,
];
