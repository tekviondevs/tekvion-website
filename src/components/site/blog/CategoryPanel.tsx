import type { ReactElement } from 'react';
import { cx } from '@/components/ds/cx';

/**
 * Blog posts ship without photography. Rather than an empty grey image well —
 * a listed defect of the old site — every highlight gets a branded gradient
 * panel carrying the post's category and title.
 *
 * The gradient is the section palette's own blue-to-purple, identical for every
 * category: cards inherit their section's palette and never carry a decorative
 * gradient of their own.
 */

export interface CategoryPanelProps {
  category: string;
  /** Optional post title echoed inside the panel. */
  title?: string;
  className?: string;
}

export function CategoryPanel({ category, title, className }: CategoryPanelProps): ReactElement {
  return (
    <div className={cx('tk-cat-panel', className)} aria-hidden="true">
      <span className="tk-cat-panel__label">{category}</span>
      {title ? <span className="tk-cat-panel__title">{title}</span> : null}
    </div>
  );
}
