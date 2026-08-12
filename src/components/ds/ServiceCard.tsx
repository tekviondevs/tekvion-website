import type { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { cx } from './cx';

/**
 * Service / value card. On hover the blue disc scales up inside the arrow
 * circle, the arrow slides through its clipped slot, and the card lifts 5px.
 *
 * When `href` is set the card element itself is the link, so the whole surface
 * is the target — the 32px arrow circle alone was well under the 44px minimum
 * and left the rest of the card as dead space.
 */
export interface ServiceCardProps {
  title: string;
  children: ReactNode;
  /** Card surface — inherits its section's palette, never a decorative gradient. */
  on?: 'dark' | 'light' | 'purple';
  /** When set, the whole card becomes a link to this route. */
  href?: string;
  /** Optional leading glyph name (lucide, kebab-case). */
  icon?: string;
  className?: string;
}

export function ServiceCard({
  title,
  children,
  on = 'dark',
  href,
  icon,
  className,
}: ServiceCardProps) {
  const classes = cx('tk-service-card', `tk-service-card--${on}`, className);

  const body = (
    <>
      <div className="tk-service-card__head">
        <h3 className="tk-service-card__title">
          {icon ? (
            <span className="tk-service-card__icon" aria-hidden="true">
              <Icon name={icon} size={22} />
            </span>
          ) : null}
          {title}
        </h3>
        {href ? (
          <span className="tk-arrow-link" aria-hidden="true">
            <span className="tk-arrow-link__disc" />
            <span className="tk-arrow-link__glyph tk-arrow-link__glyph--in">
              <Icon name="arrow-right" size={15} />
            </span>
            <span className="tk-arrow-link__glyph tk-arrow-link__glyph--out">
              <Icon name="arrow-right" size={15} />
            </span>
          </span>
        ) : null}
      </div>
      <p className="tk-service-card__copy">{children}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }

  return <div className={classes}>{body}</div>;
}
