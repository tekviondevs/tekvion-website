import { Button, Container, SectionHeading, ServiceCard } from '@/components/ds';
import { featuredServices, services } from '@/content/services';

/**
 * "What We Offer" — the eight featured services in a 4/2/1 grid, each card
 * linking through to its detail page. Ported from `sections-a.jsx` (Offer).
 */
export function WhatWeOffer() {
  return (
    <section className="band--dark home-offer" aria-labelledby="home-offer-title">
      <Container>
        <SectionHeading
          id="home-offer-title"
          onDark
          emphasis="Offer"
          kicker="Bring your digital vision to life with our full-service web solutions:"
        >
          What We
        </SectionHeading>

        <div className="grid grid--4 mt-12">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              on="dark"
              title={service.title}
              href={`/services/${service.slug}`}
            >
              {service.short}
            </ServiceCard>
          ))}
        </div>

        <div className="home-offer__more">
          <Button href="/services" variant="ghost-light" arrow>
            {`Explore all ${services.length} services`}
          </Button>
        </div>
      </Container>
    </section>
  );
}
