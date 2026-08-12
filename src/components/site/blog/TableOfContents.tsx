import type { ReactElement } from 'react';
import { cx } from '@/components/ds/cx';
import type { TocEntry } from './BlockRenderer';

/**
 * Contents list built from the article's h2/h3 blocks. Sticky beside the
 * article on desktop, inline above it on tablet and phone. Ids come from
 * `buildToc()` so they always match the rendered headings.
 */
export interface TableOfContentsProps {
  entries: TocEntry[];
  className?: string;
}

export function TableOfContents({ entries, className }: TableOfContentsProps): ReactElement | null {
  if (entries.length === 0) return null;

  return (
    <nav className={cx('toc', 'tk-post__toc', className)} aria-labelledby="toc-title">
      <h2 className="toc__title" id="toc-title">
        On this page
      </h2>
      <ol>
        {entries.map((entry) => (
          <li key={entry.id} data-level={entry.level}>
            <a href={`#${entry.id}`}>{entry.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
