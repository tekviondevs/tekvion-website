import type { Metadata } from 'next';

/**
 * Canonical site constants and the metadata helper every route uses.
 *
 * The brand facts below are duplicated deliberately: `src/content/company.ts`
 * holds them for page copy, while the SEO/chrome layer needs them without
 * reaching into the content layer (JSON-LD, canonical URLs, the footer).
 * If a fact changes, change it in both places.
 */

export const SITE_URL = 'https://tekvion.net';

/** Public brand name — used everywhere the site is named. */
export const siteName = 'Tekvion Innovations';

/** Registered entity — footer fine print, Privacy and Terms only. */
export const legalName = 'Tekvion Solutions';

export const tagline = 'Think. Build. Launch.';

export const foundingYear = '2021';

export const defaultDescription =
  'Tekvion Innovations is a full-service web agency. We design, build, launch and maintain fast websites and web apps — 49+ projects delivered across four continents.';

export const contact = {
  email: 'business@tekvion.net',
  phone: '+92 301 1114200',
  phoneHref: 'tel:+923011114200',
  addressLine: 'River Gardens',
  city: 'Islamabad',
  country: 'Pakistan',
  countryCode: 'PK',
} as const;

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tekvion-solutions/', icon: 'linkedin' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61589129080087',
    icon: 'facebook',
  },
] as const;

/** Default Open Graph / Twitter card image shipped at public/assets/og-image.png. */
export const defaultOgImage = {
  url: '/assets/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Tekvion Innovations — Think. Build. Launch.',
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export interface BuildMetadataInput {
  /** Page title without the brand suffix — the root template appends it. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/seo-services". Use "/" for home. */
  path: string;
  /** Site-relative image path; falls back to the default OG card. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Set on thin utility pages that should stay out of the index. */
  noIndex?: boolean;
}

/** Builds a complete Metadata object: canonical + Open Graph + Twitter card. */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const images = [
    image
      ? { url: image, width: 1200, height: 630, alt: imageAlt ?? title }
      : { ...defaultOgImage, alt: imageAlt ?? defaultOgImage.alt },
  ];

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type,
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: 'en_GB',
      images,
      ...(type === 'article'
        ? { publishedTime, modifiedTime, authors }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: images.map((entry) => entry.url),
    },
  };
}

/** Root metadata for src/app/layout.tsx. */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} — Web Design & Development Agency`,
    /**
     * Short brand suffix on purpose. Every authored page title is written to
     * fit 60 characters, and appending the full "Tekvion Innovations" (22
     * characters) pushed 48 of the 58 routes past that budget and into SERP
     * truncation. "Tekvion" costs 10 characters, matches the domain, and keeps
     * the brand in every rendered <title>; the full name still ships in
     * `og:title`, the Organization/WebSite JSON-LD and `siteName`.
     */
    template: '%s | Tekvion',
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: SITE_URL }],
  creator: siteName,
  publisher: legalName,
  category: 'technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: `${siteName} — Web Design & Development Agency`,
    description: defaultDescription,
    url: SITE_URL,
    siteName,
    locale: 'en_GB',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Web Design & Development Agency`,
    description: defaultDescription,
    images: [defaultOgImage.url],
  },
  formatDetection: { telephone: false },
};
