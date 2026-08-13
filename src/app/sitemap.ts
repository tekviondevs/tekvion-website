import type { MetadataRoute } from 'next';
import { allRoutes, type RouteKind } from '@/lib/routes';
import { absoluteUrl, SITE_URL } from '@/lib/seo';

/**
 * XML sitemap for https://tekvion.net/sitemap.xml.
 *
 * Every route is enumerated from `src/lib/routes.ts`, which derives the dynamic
 * segments straight from the content layer — so a new service, featured project
 * or blog post appears here with no edit to this file.
 */

type CrawlHint = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

/** Crawl guidance per route family. Priority is relative, not absolute. */
const CRAWL_HINTS: Record<RouteKind, CrawlHint> = {
  // The homepage changes whenever featured work or proof points change.
  home: { changeFrequency: 'weekly', priority: 1 },
  // Index pages gain entries as the portfolio and blog grow.
  pillar: { changeFrequency: 'weekly', priority: 0.9 },
  // Contact rarely changes but must never be deprioritised for crawl.
  conversion: { changeFrequency: 'monthly', priority: 0.8 },
  // The 29 service pages are the commercial core of the site.
  service: { changeFrequency: 'monthly', priority: 0.8 },
  // Case studies are finished artefacts; they are edited rarely.
  caseStudy: { changeFrequency: 'yearly', priority: 0.6 },
  // Posts get refreshed, hence the higher change frequency than case studies.
  post: { changeFrequency: 'monthly', priority: 0.7 },
  // Legal pages must be indexable but should never outrank commercial pages.
  legal: { changeFrequency: 'yearly', priority: 0.3 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => {
    const hint = CRAWL_HINTS[route.kind];

    return {
      /* Next normalises the home canonical to the bare origin, so the sitemap
         has to drop the trailing slash too or the two signals disagree. */
      url: route.path === '/' ? SITE_URL : absoluteUrl(route.path),
      lastModified: new Date(`${route.lastModified}T00:00:00.000Z`),
      changeFrequency: hint.changeFrequency,
      priority: hint.priority,
    };
  });
}
