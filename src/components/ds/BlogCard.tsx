import type { ReactNode } from 'react';
import Link from 'next/link';
import { Badge } from './Badge';
import { Button } from './Button';
import { cx } from './cx';

/**
 * Blog card: 16/10 image well with the category badge top-left and the date
 * badge bottom-right. With no photograph the well renders a branded gradient
 * carrying the post title — never an empty grey box.
 */
export interface BlogCardProps {
  category: string;
  title: string;
  href: string;
  children: ReactNode;
  /** Human-readable date, e.g. "14 March 2026". */
  date?: string;
  /** Optional image path under /public. */
  image?: string;
  /** Alt text — required whenever `image` is set. */
  imageAlt?: string;
  cta?: string;
  on?: 'dark' | 'light';
  className?: string;
}

export function BlogCard({
  category,
  title,
  href,
  children,
  date,
  image,
  imageAlt,
  cta = 'Read More',
  on = 'dark',
  className,
}: BlogCardProps) {
  return (
    <article className={cx('tk-blog-card', `tk-blog-card--${on}`, className)}>
      <div className={cx('tk-blog-card__well', !image && 'tk-blog-card__well--generated')}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
          <img src={image} alt={imageAlt ?? ''} width={640} height={400} loading="lazy" />
        ) : (
          <span className="tk-blog-card__well-label" aria-hidden="true">
            {title}
          </span>
        )}
        <span className="tk-blog-card__badge-tl">
          <Badge>{category}</Badge>
        </span>
        {date ? (
          <span className="tk-blog-card__badge-br">
            <Badge tone="dark">{date}</Badge>
          </span>
        ) : null}
      </div>
      <h3 className="tk-blog-card__title">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="tk-blog-card__excerpt">{children}</p>
      <Button href={href} arrow block variant="primary" aria-label={`${cta}: ${title}`}>
        {cta}
      </Button>
    </article>
  );
}
