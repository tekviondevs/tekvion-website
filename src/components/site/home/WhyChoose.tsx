import { Button, Container, Icon, Stat } from '@/components/ds';
import { CALENDLY_URL, company, proofPoints, whyChoosePoints } from '@/content/company';

/**
 * "Why Choose Tekvion Innovations?" — ported from `sections-a.jsx`.
 *
 * The mockup's grey "team photo placeholder" well is replaced with a real
 * panel of the verified proof numbers; we do not ship stock or invented
 * imagery. Only figures already recorded in `proofPoints` appear here.
 */
export function WhyChoose() {
  const panelProof = proofPoints.slice(0, 6);

  return (
    <section className="band--light section" aria-labelledby="home-why-title">
      <Container className="home-why__inner">
        <div className="home-why__copy">
          <h2 id="home-why-title" className="home-why__title">
            Why Choose <span className="home-why__wordmark">{company.name}?</span>
          </h2>
          <p className="home-why__intro">
            {company.name} is a full-service web agency offering design, development, automation
            and support for businesses of all sizes. Whether you are launching your first site,
            rebuilding an app on a custom stack, or wiring up a CRM and the automations behind it,
            we are here to help. And here is why you should choose us:
          </p>

          <Button href={CALENDLY_URL} variant="secondary-dark" arrow>
            Book a Call<span className="sr-only"> (opens in a new tab)</span>
          </Button>

          <ul className="home-why__points">
            {whyChoosePoints.map((point) => (
              <li key={point} className="home-why__point">
                <span className="home-why__check" aria-hidden="true">
                  <Icon name="check" size={11} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="home-why__proof">
          <div className="home-why__proof-grid">
            {panelProof.map((proof) => (
              <Stat key={proof.label} value={proof.value} label={proof.label} on="light" />
            ))}
          </div>
          <p className="home-why__proof-note muted">
            Most of our clients have been with us for two years or more.
          </p>
        </div>
      </Container>
    </section>
  );
}
