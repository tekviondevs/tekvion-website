import { Icon } from '@/components/ds';
import { cx } from '@/components/ds/cx';

/**
 * Plain content list used for deliverables ("What you receive") and fit
 * signals ("Ideal for"). Check markers are action blue on light surfaces;
 * the amber dot variant is the design system's bullet on dark bands.
 */
export interface ServiceListProps {
  items: string[];
  /** `check` for deliverables, `dot` for the amber-bulleted fit list. */
  marker?: 'check' | 'dot';
  columns?: 1 | 2;
  className?: string;
}

export function ServiceList({ items, marker = 'check', columns = 2, className }: ServiceListProps) {
  if (items.length === 0) return null;

  return (
    <ul
      className={cx('tk-svc-list', columns === 2 ? 'tk-svc-list--two' : 'tk-svc-list--one', className)}
    >
      {items.map((item) => (
        <li key={item}>
          {marker === 'check' ? (
            <span className="tk-svc-list__check" aria-hidden="true">
              <Icon name="check" size={17} strokeWidth={2.5} />
            </span>
          ) : (
            <span className="tk-svc-list__dot" aria-hidden="true" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
