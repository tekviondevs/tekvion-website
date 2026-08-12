import type { Metadata, Viewport } from 'next';
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/site/Footer';
import { Nav } from '@/components/site/Nav';
import { SkipLink } from '@/components/site/SkipLink';
import { JsonLd, organization, website } from '@/lib/schema';
import { defaultMetadata } from '@/lib/seo';
import './globals.css';

/* Headings: Plus Jakarta Sans 600/700/800. Body: DM Sans 400/500.
   Both are exposed as CSS variables that globals.css maps onto the design
   system's --font-heading / --font-body tokens. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

/* DM Sans ships as a variable font. Pinning `weight` makes next/font request
   static instances that Google no longer serves (404 on the v17 axis URLs), so
   we take the variable file — it covers the 400/500 body weights we use and
   keeps the build reproducible from a cold cache. */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0065FF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body>
        <SkipLink />
        <Nav />
        {/* tabIndex -1 so the skip link and the drawer's route-change close can
            actually move focus here; globals.css suppresses the ring. */}
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <JsonLd schema={[organization(), website()]} id="site" />
      </body>
    </html>
  );
}
