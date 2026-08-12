import type { MetadataRoute } from 'next';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

/**
 * https://tekvion.net/robots.txt
 *
 * The whole site is public marketing content, so everything is crawlable and
 * nothing is disallowed — including `/_next/` assets, which crawlers need in
 * order to render the pages the way a visitor sees them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
