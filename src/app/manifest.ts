import type { MetadataRoute } from 'next';
import { defaultDescription, siteName } from '@/lib/seo';

/**
 * Web app manifest served at /manifest.webmanifest.
 *
 * The site is a static marketing site, not an installable app, so this exists
 * for Android/Chrome "add to home screen", the browser theme colour, and the
 * richer link previews some clients build from it.
 *
 * Icons are square PWA tiles generated from the brand mark
 * (`public/assets/icon-gradient.png`): 192px and 512px for Chrome's install
 * criteria, plus a 512px maskable variant whose mark sits inside the 80% safe
 * zone so Android can crop it to any device shape without clipping.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Web Design & Development Agency`,
    short_name: 'Tekvion',
    description: defaultDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: '#0065FF',
    background_color: '#000000',
    lang: 'en',
    dir: 'ltr',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: '/assets/icon-square-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icon-square-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
