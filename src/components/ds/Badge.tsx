import type { ReactNode } from 'react';
import { cx } from './cx';

/** Small pill label: action blue by default, dark on black, light on white. */
export type BadgeTone = 'action' | 'dark' | 'light';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ReactNode;
  className?: string;
}

export function Badge({ children, tone = 'action', icon, className }: BadgeProps) {
  return (
    <span className={cx('tk-badge', `tk-badge--${tone}`, className)}>
      {icon}
      {children}
    </span>
  );
}
