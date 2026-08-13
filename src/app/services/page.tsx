import type { Metadata } from 'next';
import type { ServiceCategory } from '@/content/types';
import { Button, Icon, SectionHeading, Underline } from '@/components/ds';
import { PageCta, SectionBand, TrustedBy } from '@/components/site';
import {
  ProcessTimeline,
  ServiceCategorySection,
  ServiceFaqBand,
  serviceCount,
} from '@/components/site/services';
import '@/components/site/services/services.css';
import { CALENDLY_URL, faqs, processSteps } from '@/content/company';
import { services, servicesByCategory } from '@/content/services';
import { breadcrumbs, JsonLd, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Web Design, Development & Automation Services',
  description:
    'Design, development, automation and support services from a studio with 49+ delivered projects on WordPress, Bubble.io, MERN, Next.js, PHP and GoHighLevel.',
  path: '/services',
});

/* -------------------------------------------------------------------------- */
/*  Category presentation — anchors, underlined word, and the one-line intro    */
/* -------------------------------------------------------------------------- */

interface CategoryPresentation {
  id: string;
  headingLead?: string;
  headingEmphasis: string;
  intro: string;
  tone: 'dark' | 'light';
}

const presentation: Record<ServiceCategory, CategoryPresentation> = {
  Design: {
    id: 'design',
    headingEmphasis: 'Design',
    intro:
      'Everything that decides how your site looks, reads and behaves — settled in Figma before a line of it gets built.',
    tone: 'light',
  },
  Development: {
    id: 'development',
    headingEmphasis: 'Development',
    intro:
      'The build itself: WordPress for content, commerce and learning platforms, Bubble.io for products with real application logic, Next.js where raw speed is the point.',
    tone: 'dark',
  },
  'Automation & CRM': {
    id: 'automation',
    headingLead: 'Automation &',
    headingEmphasis: 'CRM',
    intro:
      'The operations layer around the site: GoHighLevel for CRM, pipelines and funnels, and AI, n8n and Make.com for the work that used to be done by hand.',
    tone: 'light',
  },
  'Growth & Optimisation': {
    id: 'growth',
    headingLead: 'Growth &',
    headingEmphasis: 'Optimisation',
    intro:
      'What happens after launch — getting found, loading fast, and turning the traffic you already have into enquiries.',
    tone: 'dark',
  },
  'Platform & Support': {
    id: 'platform',
    headingLead: 'Platform &',
    headingEmphasis: 'Support',
    intro:
      'Keeping the site live, safe and current, plus the migrations, integrations and infrastructure work that sits underneath it.',
    tone: 'light',
  },
};

/* -------------------------------------------------------------------------- */
/*  Structured data                                                            */
/* -------------------------------------------------------------------------- */

const serviceItemList: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services offered by Tekvion Innovations',
  numberOfItems: services.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    description: service.short,
    url: absoluteUrl(`/services/${service.slug}`),
  })),
};

const heroFacts: string[] = [
  `${services.length} services`,
  `${servicesByCategory.length} categories`,
  '49+ projects delivered',
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        id="services-index"
        schema={[
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          serviceItemList,
          /* No FAQPage here: the same eight company FAQs are published once, on
             /contact. The per-service FAQPage nodes on /services/[slug] are
             unique to each page and stay. */
        ]}
      />

      {/* Hero ------------------------------------------------------------- */}
      <SectionBand tone="dark" space="hero" labelledBy="services-title" className="tk-svc-hero">
        <p className="tk-svc-hero__eyebrow">
          <span className="tk-svc-hero__eyebrow-text">Our Services</span>
        </p>
        <h1 id="services-title" className="tk-svc-hero__title">
          What We <Underline delay={0.3}>Offer</Underline>
        </h1>
        <p className="tk-svc-hero__intro">
          {services.length} services across {servicesByCategory.length} categories — design,
          development on WordPress, Bubble.io, MERN, Next.js and PHP, automation and CRM in
          GoHighLevel, n8n and Make.com, plus growth and platform support. Every one is work we have
          actually shipped for paying clients, not a line item on a menu. Tell us the outcome you
          need and we will tell you which of these gets you there.
        </p>

        <ul className="tk-svc-hero__meta">
          {heroFacts.map((fact) => (
            <li key={fact}>
              <Icon name="check" size={15} strokeWidth={2.5} />
              {fact}
            </li>
          ))}
        </ul>

        <div className="cluster tk-svc-hero__actions">
          <Button href={CALENDLY_URL} size="lg" arrow>
            Book a Call<span className="sr-only"> (opens in a new tab)</span>
          </Button>
          <Button href="/portfolio" size="lg" variant="ghost-light">
            View Our Work
          </Button>
        </div>

        <nav aria-label="Service categories">
          <ul className="tk-svc-jump">
            {servicesByCategory.map((group) => (
              <li key={group.category}>
                <a href={`#${presentation[group.category].id}`}>
                  {group.category}
                  <span className="tk-svc-jump__count">{serviceCount(group.services.length)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SectionBand>

      {/* Every service, grouped by category -------------------------------- */}
      {servicesByCategory.map((group) => {
        const meta = presentation[group.category];
        return (
          <ServiceCategorySection
            key={group.category}
            id={meta.id}
            category={group.category}
            services={group.services}
            intro={meta.intro}
            headingLead={meta.headingLead}
            headingEmphasis={meta.headingEmphasis}
            tone={meta.tone}
          />
        );
      })}

      {/* How we work ------------------------------------------------------- */}
      {/* Tones alternate light/dark down the page; the five category bands
          above end on light, so this one and everything after it flip. */}
      <SectionBand tone="dark" width="narrow" labelledBy="process-heading">
        <SectionHeading
          id="process-heading"
          onDark
          emphasis="Runs"
          kicker="The same four stages whichever service you start with — so you always know what happens next and who owes what."
        >
          How Every Project
        </SectionHeading>
        <ProcessTimeline steps={processSteps} on="dark" idPrefix="services-index" />
      </SectionBand>

      <TrustedBy on="light" />

      <ServiceFaqBand
        faqs={faqs}
        tone="dark"
        kicker="Scope, cost, ownership and what happens after launch — answered plainly."
      />

      <PageCta
        title="Not sure which service you need?"
        sub="Send us the problem rather than the specification. We will tell you what it actually takes, what it costs, and how long it runs."
      />
    </>
  );
}
