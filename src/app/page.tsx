import type { Metadata } from 'next';
import { PageCta, TrustedBy } from '@/components/site';
import {
  Hero,
  HomeFaq,
  HomeIndustries,
  HomeProjects,
  HomeTimeline,
  WhatWeOffer,
  WhyChoose,
} from '@/components/site/home';
import { JsonLd, professionalService } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import '@/components/site/home/home.css';

export const metadata: Metadata = buildMetadata({
  title: 'Web Design & Development Agency',
  description:
    'Tekvion Innovations designs and builds WordPress websites, Bubble.io apps and e-commerce stores that convert — 49+ projects delivered across four continents.',
  path: '/',
});

/**
 * Home page. Section order follows the design export's App composition
 * (hero.jsx): hero, offer, why-choose, projects, trusted-by, industries,
 * timeline, FAQ. The mockup's mid-page CtaBand is the same purple band as the
 * site-wide <PageCta />, so it runs once, last, where every other route also
 * closes — rather than twice.
 *
 * Organization and WebSite JSON-LD already ship from the root layout; this
 * page adds only the ProfessionalService and FAQPage nodes.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <WhyChoose />
      <HomeProjects />
      <TrustedBy on="dark" />
      <HomeIndustries />
      <HomeTimeline />
      <HomeFaq />
      <PageCta />
      {/* The site-wide FAQ is published as FAQPage once, on /contact — the same
          eight questions at three canonical URLs is duplicate structured data. */}
      <JsonLd schema={[professionalService()]} id="home" />
    </>
  );
}
