import Link from 'next/link';
import { Icon } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import { breadcrumbs as breadcrumbSchema, JsonLd, type BreadcrumbItem } from '@/lib/schema';

/**
 * Visible breadcrumb trail for service, blog and case-study pages. Emits the
 * matching BreadcrumbList JSON-LD unless the page renders its own.
 */
export interface BreadcrumbsProps {
  /** The trail after Home, e.g. [{ name: 'Services', path: '/services' }, …]. */
  items: BreadcrumbItem[];
  on?: 'dark' | 'light';
  /** Set false when the page already emits its own BreadcrumbList. */
  includeSchema?: boolean;
  className?: string;
}

export function Breadcrumbs({
  items,
  on = 'dark',
  includeSchema = true,
  className,
}: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cx('tk-breadcrumbs', `tk-breadcrumbs--on-${on}`, className)}
    >
      <ol className="tk-breadcrumbs__list">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.path} className="tk-breadcrumbs__item">
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path}>{item.name}</Link>
                  <span className="tk-breadcrumbs__sep" aria-hidden="true">
                    <Icon name="chevron-right" size={14} />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      {includeSchema ? <JsonLd schema={breadcrumbSchema(trail)} id="breadcrumbs" /> : null}
    </nav>
  );
}
