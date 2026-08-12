import { Button, Container } from '@/components/ds';

/** Purple full-bleed closing band that ends every page. */
export interface PageCtaProps {
  title?: string;
  sub?: string;
  /** Override the primary button label (it always points at /quote). */
  primaryLabel?: string;
}

export function PageCta({
  title = 'Let’s Build Something Great',
  sub = 'Tell us what you are building and we will come back with a plan, a timeline, and a fixed price.',
  primaryLabel = 'Get a Free Quote',
}: PageCtaProps) {
  return (
    <section className="tk-page-cta" aria-labelledby="page-cta-title">
      <Container>
        <h2 id="page-cta-title" className="tk-page-cta__title">
          {title}
        </h2>
        <p className="tk-page-cta__sub">{sub}</p>
        <div className="cluster">
          <Button href="/quote" size="lg" arrow>
            {primaryLabel}
          </Button>
          <Button href="/contact" size="lg" variant="secondary-dark">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
