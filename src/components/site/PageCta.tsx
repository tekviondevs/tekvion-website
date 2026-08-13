import { Button, Container } from '@/components/ds';
import { CALENDLY_URL } from '@/content/company';

/** Purple full-bleed closing band that ends every page. */
export interface PageCtaProps {
  title?: string;
  sub?: string;
}

/**
 * The primary button is fixed: every page closes on the same "Book a Call"
 * action pointing at Calendly, with "Contact us" as the secondary route. The
 * label is deliberately not overridable — one CTA, worded the same everywhere.
 */
export function PageCta({
  title = 'Let’s Build Something Great',
  sub = 'Tell us what you are building and we will come back with a plan, a timeline, and a fixed price.',
}: PageCtaProps) {
  return (
    <section className="tk-page-cta" aria-labelledby="page-cta-title">
      <Container>
        <h2 id="page-cta-title" className="tk-page-cta__title">
          {title}
        </h2>
        <p className="tk-page-cta__sub">{sub}</p>
        <div className="cluster">
          {/* Calendly is off-site — Button adds target="_blank" rel="noopener
              noreferrer" for http(s) hrefs; the hidden span announces it. */}
          <Button href={CALENDLY_URL} size="lg" arrow>
            Book a Call<span className="sr-only"> (opens in a new tab)</span>
          </Button>
          <Button href="/contact" size="lg" variant="secondary-dark">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
