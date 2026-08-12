import type { ReactNode } from 'react';
import { Container } from '@/components/ds';
import { cx } from '@/components/ds/cx';

/**
 * Full-bleed section wrapper for the alternating black / white / purple bands.
 * Handles the band background and vertical rhythm so pages only supply content.
 */
export interface SectionBandProps {
  children: ReactNode;
  tone?: 'dark' | 'light' | 'purple' | 'amber' | 'industries';
  /** Vertical padding preset. */
  space?: 'default' | 'tight' | 'hero' | 'flush-top' | 'flush-bottom' | 'none';
  /** Container width — matches Container's own prop. */
  width?: 'default' | 'narrow' | 'article';
  /** Render children without the inner container (for edge-to-edge content). */
  bleed?: boolean;
  id?: string;
  /** id of the heading that labels this section. */
  labelledBy?: string;
  className?: string;
}

const spaceClass: Record<NonNullable<SectionBandProps['space']>, string> = {
  default: 'section',
  tight: 'section section--tight',
  hero: 'section section--hero',
  'flush-top': 'section section--flush-top',
  'flush-bottom': 'section section--flush-bottom',
  none: '',
};

export function SectionBand({
  children,
  tone = 'light',
  space = 'default',
  width = 'default',
  bleed = false,
  id,
  labelledBy,
  className,
}: SectionBandProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(`band--${tone}`, spaceClass[space], className)}
    >
      {bleed ? children : <Container width={width}>{children}</Container>}
    </section>
  );
}
