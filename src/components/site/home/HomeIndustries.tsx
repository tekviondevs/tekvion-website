import { Container, LitWrap, SectionHeading, ServiceCard } from '@/components/ds';
import { industries } from '@/content/industries';

/**
 * "Industries We Serve" — the black-to-purple gradient band from
 * `sections-a.jsx`. Cards carry the lit-edge border over the section's own
 * blue-to-purple fill; no per-card decorative gradients.
 */
export function HomeIndustries() {
  return (
    <section className="band--industries section" aria-labelledby="home-industries-title">
      <Container>
        <SectionHeading
          id="home-industries-title"
          onDark
          emphasis="Serve"
          kicker="We speak your language. Here is who we help:"
        >
          Industries We
        </SectionHeading>

        <div className="grid grid--4 mt-12">
          {industries.map((industry) => (
            <LitWrap key={industry.slug}>
              <ServiceCard on="purple" title={industry.title} className="home-industry-card">
                {industry.description}
              </ServiceCard>
            </LitWrap>
          ))}
        </div>
      </Container>
    </section>
  );
}
