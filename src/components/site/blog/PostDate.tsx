import type { ReactElement } from 'react';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Formats an ISO date (YYYY-MM-DD) as "18 June 2026".
 *
 * Deliberately hand-rolled rather than `toLocaleDateString`: the site is
 * statically generated, and a locale/timezone-dependent formatter would
 * produce a different string on the build machine than in the browser.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-');
  const monthName = MONTHS[Number(month) - 1];
  if (!year || !monthName || !day) return iso;
  return `${Number(day)} ${monthName} ${year}`;
}

/** Short form used on cards, e.g. "18 Jun 2026". */
export function formatDateShort(iso: string): string {
  const [year, month, day] = iso.split('-');
  const monthName = MONTHS[Number(month) - 1];
  if (!year || !monthName || !day) return iso;
  return `${Number(day)} ${monthName.slice(0, 3)} ${year}`;
}

export interface PostDateProps {
  /** ISO date string, e.g. "2026-06-18". */
  iso: string;
  className?: string;
}

/** Machine-readable publish date. */
export function PostDate({ iso, className }: PostDateProps): ReactElement {
  return (
    <time dateTime={iso} className={className}>
      {formatDate(iso)}
    </time>
  );
}
