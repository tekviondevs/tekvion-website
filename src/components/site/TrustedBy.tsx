import { Container, SectionHeading, Stat } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import { projects } from '@/content/projects';

/**
 * Replaces the mockup's fictional testimonial carousel. Shows the real client
 * brand names we have delivered for, plus the verified proof numbers.
 * No quotes, no ratings, no invented people — we have none on record.
 */
export interface TrustedByProps {
  /** Section surface. */
  on?: 'dark' | 'light';
  /** How many client names to show. */
  limit?: number;
  heading?: string;
  emphasis?: string;
  kicker?: string;
  className?: string;
}

/** Verified figures only — see the brand facts in src/lib/seo.ts and the brief. */
const proof: Array<{ value: string; label: string }> = [
  { value: '49+', label: 'projects delivered' },
  { value: '4', label: 'continents served' },
  { value: '10+', label: 'countries with live sites' },
  { value: '2+', label: 'years average client stay' },
];

export function TrustedBy({
  on = 'dark',
  limit = 16,
  heading = 'Trusted by teams across',
  emphasis = 'four continents',
  kicker = 'A selection of the businesses whose sites and products we have built and still look after:',
  className,
}: TrustedByProps) {
  const names = Array.from(new Set(projects.map((project) => project.name))).slice(0, limit);

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

        <ul className="tk-trusted__names">
          {names.map((name) => (
            <li key={name} className="tk-trusted__name">
              {name}
            </li>
          ))}
        </ul>

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
