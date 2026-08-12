import { cx } from './cx';

/** Proof-number tile: one figure, one label. Only the verified figures ever go in here. */
export interface StatProps {
  /** The headline figure, e.g. "49+". */
  value: string;
  /** What the figure counts, e.g. "projects delivered". */
  label: string;
  on?: 'light' | 'dark';
  className?: string;
}

export function Stat({ value, label, on = 'light', className }: StatProps) {
  return (
    <div className={cx('tk-stat', `tk-stat--${on}`, className)}>
      <div className="tk-stat__value">{value}</div>
      <div className="tk-stat__label">{label}</div>
    </div>
  );
}
