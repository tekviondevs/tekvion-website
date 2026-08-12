import type { ReactNode } from 'react';
import { Underline } from './Underline';
import { cx } from './cx';

/**
 * Centred section heading with the emphasised phrase carrying the amber
 * draw-in underline, plus an optional single-line kicker.
 */
export interface SectionHeadingProps {
  children?: ReactNode;
  /** The word or phrase that receives the amber underline. */
  emphasis?: string;
  /** One conversational line under the heading, usually ending in a colon. */
  kicker?: string;
  onDark?: boolean;
  align?: 'center' | 'left';
  /** Semantic level — pages that already own an h2 can drop to h3 without losing the look. */
  level?: 2 | 3 | 4;
  id?: string;
  className?: string;
}

export function SectionHeading({
  children,
  emphasis,
  kicker,
  onDark = false,
  align = 'center',
  level = 2,
  id,
  className,
}: SectionHeadingProps) {
  const Tag = `h${level}` as 'h2' | 'h3' | 'h4';

  return (
    <div
      className={cx(
        'tk-heading',
        align === 'left' ? 'tk-heading--left' : 'tk-heading--center',
        onDark && 'tk-heading--on-dark',
        className,
      )}
    >
      <Tag id={id} className="tk-heading__title">
        {children}
        {children && emphasis ? ' ' : null}
        {emphasis ? <Underline>{emphasis}</Underline> : null}
      </Tag>
      {kicker ? <p className="tk-heading__kicker">{kicker}</p> : null}
    </div>
  );
}
