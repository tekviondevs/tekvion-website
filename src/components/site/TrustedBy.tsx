import { Container, SectionHeading, Stat } from '@/components/ds';
import { cx } from '@/components/ds/cx';

/**
 * Replaces the mockup's fictional testimonial carousel. A credibility band
 * built purely from verified proof numbers — no quotes, no ratings, no
 * invented people, and no client brand names (client work is shown, with
 * permission and context, on the portfolio pages instead).
 */
export interface TrustedByProps {
  /** Section surface. */
  on?: 'dark' | 'light';
  heading?: string;
  emphasis?: string;
  kicker?: string;
  className?: string;
}

/** Verified figures only — see the brand facts in src/lib/seo.ts and the brief. */
const proof: Array<{ value: string; label: string }> = [
  { value: '49+', label: 'projects delivered' },
  { value: '42', label: 'WordPress builds' },
  { value: '7', label: 'Bubble.io builds' },
  { value: '4', label: 'continents served' },
  { value: '10+', label: 'countries with live sites' },
  { value: '2+', label: 'years average client stay' },
];

export function TrustedBy({
  on = 'dark',
  heading = 'Trusted by teams across',
  emphasis = 'four continents',
  kicker = 'Since 2021 we have built and looked after sites, stores and products for businesses in more than ten countries. These are the real numbers.',
  className,
}: TrustedByProps) {
  return (
    <section
      className={cx(`band--${on}`, 'section', `tk-trusted--${on}`, className)}
      aria-labelledby="trusted-by-title"
    >
      <Container>
        <SectionHeading
          id="trusted-by-title"
          onDark={on === 'dark'}
          emphasis={emphasis}
          kicker={kicker}
        >
          {heading}
        </SectionHeading>

        <div className="tk-trusted__stats">
          {proof.map((item) => (
            <Stat key={item.label} value={item.value} label={item.label} on={on} />
          ))}
        </div>

        <p className="tk-trusted__note muted">
          Sites shipped in English, German, French, Italian, Hebrew, Polish, Dutch and Norwegian.
        </p>
      </Container>
    </section>
  );
}
