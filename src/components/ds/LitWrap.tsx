import type { ReactNode } from 'react';
import { cx } from './cx';

/** "Lit edge" 1px gradient border — brightest at the top, fading to nothing at the bottom. */
export interface LitWrapProps {
  children: ReactNode;
  /** `dark` for black/purple sections, `light` for white sections. */
  on?: 'dark' | 'light';
  className?: string;
}

export function LitWrap({ children, on = 'dark', className }: LitWrapProps) {
  return (
    <div className={cx(on === 'light' ? 'lit-wrap-light' : 'lit-wrap', className)}>{children}</div>
  );
}
