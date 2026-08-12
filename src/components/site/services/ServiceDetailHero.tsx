import Link from 'next/link';
import type { Service } from '@/content/types';
import { Badge, Button, Icon, Underline } from '@/components/ds';
import { SectionBand } from '@/components/site/SectionBand';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { serviceIcon, splitHeroTitle } from './helpers';

/**
 * Black hero for a single service: breadcrumb trail, category badge, the H1
 * with the signature amber underline on its opening phrase, the intro, and
 * the two calls to action. BreadcrumbList JSON-LD is emitted by the page, so
 * the trail here renders markup only.
 */
export interface ServiceDetailHeroProps {
  service: Service;
  /** id of the H1 — the section is labelled by it. */
  titleId: string;
}

export function ServiceDetailHero({ service, titleId }: ServiceDetailHeroProps) {
  const { lead, rest } = splitHeroTitle(service.heroTitle);

  return (
    <SectionBand tone="dark" space="hero" labelledBy={titleId} className="tk-svc-hero">
      <div className="tk-svc-hero__crumbs">
        <Breadcrumbs
          on="dark"
          includeSchema={false}
          items={[
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]}
        />
      </div>

      <p className="tk-svc-hero__eyebrow">
        <Link href="/services" className="tk-svc-hero__eyebrow-text">
          Our Services
        </Link>
        <Badge icon={<Icon name={serviceIcon(service.icon)} size={13} />}>{service.category}</Badge>
      </p>

      <h1 id={titleId} className="tk-svc-hero__title">
        <Underline delay={0.3}>{lead}</Underline>
        {rest ? ` ${rest}` : null}
      </h1>

      <p className="tk-svc-hero__intro">{service.heroIntro}</p>

      <div className="cluster tk-svc-hero__actions">
        <Button href="/quote" size="lg" arrow>
          Get a Free Quote
        </Button>
        <Button href="/portfolio" size="lg" variant="ghost-light">
          View Our Work
        </Button>
      </div>
    </SectionBand>
  );
}
