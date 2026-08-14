import type { Metadata } from 'next';
import { Badge, Icon, LitWrap, SectionHeading, Stat, Underline } from '@/components/ds';
import { PageCta, SectionBand } from '@/components/site';
import { PortfolioFilter } from '@/components/site/portfolio/PortfolioFilter';
import '@/components/site/portfolio/portfolio.css';
import { languagesShipped, proofPoints } from '@/content/company';
import {
  featuredProjects,
  industriesList,
  projects,
  showcaseProjects,
  stacksList,
} from '@/content/projects';
import type { Project } from '@/content/types';
import { JsonLd, breadcrumbs, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

const PATH = '/portfolio';

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio — Websites & Web Apps We Have Built',
  description:
    'Browse the real Tekvion portfolio: WordPress, Bubble.io and hybrid builds delivered for clients across four continents, with thirteen full case studies inside.',
  path: PATH,
});

/**
 * Display order: featured case studies first, then the fully written-up
 * builds, then the handful of live projects whose public write-ups are still
 * short. Nothing marked "needs redesign" or "coming soon" exists in the data
 * at all, so nothing of that kind can reach this grid.
 */
const showcaseSlugs = new Set(showcaseProjects.map((project) => project.slug));

const orderedProjects: Project[] = [
  ...featuredProjects,
  ...showcaseProjects.filter((project) => !project.featured),
  ...projects.filter((project) => !showcaseSlugs.has(project.slug)),
];

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: PATH },
];

const collectionSchema: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${absoluteUrl(PATH)}#collectionpage`,
  name: 'Tekvion Innovations Portfolio',
  url: absoluteUrl(PATH),
  description:
    'Every website and web application delivered by Tekvion Innovations, filterable by industry and by the stack it was built on.',
  inLanguage: 'en',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Delivered projects',
    numberOfItems: orderedProjects.length,
    itemListElement: orderedProjects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.name,
      description: project.descriptor,
      url: project.featured ? absoluteUrl(`${PATH}/${project.slug}`) : project.url,
    })),
  },
};

export default function PortfolioPage() {
  const proof = proofPoints.slice(0, 4);

  return (
    <>
      <SectionBand tone="dark" space="hero">
        <Badge>Portfolio</Badge>
        <h1 className="mt-6">
          Our <Underline>Portfolio</Underline>
        </h1>
        <p className="lead muted tk-pf-hero__lead">
          50+ projects across four continents since 2021. Everything listed below is a real,
          delivered build with a URL you can open right now — {orderedProjects.length} of them,
          including {featuredProjects.length} with a full case study on how they were made.
        </p>
        <ul className="tk-pf-hero__facts">
          <li>
            <Icon name="check" size={16} />
            Every card links to the build itself
          </li>
          <li>
            <Icon name="check" size={16} />
            No mock-ups, no concepts, no stock work
          </li>
          <li>
            <Icon name="check" size={16} />
            Filter by industry or by stack
          </li>
        </ul>
      </SectionBand>

      <SectionBand tone="light" space="tight" labelledBy="portfolio-proof-title">
        <SectionHeading
          id="portfolio-proof-title"
          emphasis="record"
          kicker="The numbers behind the grid — verified, and the only ones we publish:"
        >
          The delivery
        </SectionHeading>
        <div className="tk-pf-proof__grid">
          {proof.map((point) => (
            <LitWrap key={point.label} on="light">
              <Stat value={point.value} label={point.label} on="light" />
            </LitWrap>
          ))}
        </div>
        <p className="tk-pf-proof__note muted">
          Sites shipped in {languagesShipped.slice(0, -1).join(', ')} and{' '}
          {languagesShipped[languagesShipped.length - 1]}.
        </p>
      </SectionBand>

      <SectionBand tone="dark" labelledBy="portfolio-work-title">
        <SectionHeading
          id="portfolio-work-title"
          onDark
          align="left"
          emphasis="the work"
          kicker="Filter by the industry you are in, or by the platform you are considering."
        >
          Browse
        </SectionHeading>

        <PortfolioFilter
          projects={orderedProjects}
          industries={industriesList}
          stacks={stacksList}
        />

        <p className="tk-pf-legend">
          Projects with a written case study open here on the site. The rest link straight out to
          the live build in a new tab — the site itself is the evidence.
        </p>
      </SectionBand>

      <PageCta
        title="Want your project on this page?"
        sub="Tell us what you are building. We will come back with the right stack, a timeline, and a fixed price — not a sales call."
      />

      <JsonLd schema={[collectionSchema, breadcrumbs(trail)]} id="portfolio-index" />
    </>
  );
}
