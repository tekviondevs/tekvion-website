import type { Service, ServiceCategory } from '@/content/types';
import { SectionHeading, ServiceCard } from '@/components/ds';
import { SectionBand } from '@/components/site/SectionBand';
import { serviceCount, serviceIcon } from './helpers';

/**
 * One category block on the services index: an eyebrow with the count, the
 * underlined category heading, a one-line introduction, and a card per
 * service linking through to its detail page.
 */
export interface ServiceCategorySectionProps {
  category: ServiceCategory;
  services: Service[];
  /** Anchor target for the jump nav, e.g. "design". */
  id: string;
  /** One sentence explaining what this group of services is for. */
  intro: string;
  /** Heading text before the underlined word, e.g. "Growth &". */
  headingLead?: string;
  /** The word that carries the amber underline. */
  headingEmphasis: string;
  tone: 'dark' | 'light';
}

export function ServiceCategorySection({
  category,
  services,
  id,
  intro,
  headingLead,
  headingEmphasis,
  tone,
}: ServiceCategorySectionProps) {
  const headingId = `${id}-heading`;

  return (
    <SectionBand id={id} tone={tone} labelledBy={headingId}>
      <p className="tk-svc-cat__eyebrow">
        {category} — {serviceCount(services.length)}
      </p>
      <SectionHeading
        id={headingId}
        onDark={tone === 'dark'}
        emphasis={headingEmphasis}
        kicker={intro}
      >
        {headingLead}
      </SectionHeading>
      <div className="grid grid--3 grid--gap-lg tk-svc-cat__grid">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            icon={serviceIcon(service.icon)}
            href={`/services/${service.slug}`}
            on={tone}
          >
            {service.short}
          </ServiceCard>
        ))}
      </div>
    </SectionBand>
  );
}
