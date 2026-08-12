import type { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { cx } from './cx';

/**
 * The site's only call-to-action control. Renders an <a>/next/link when `href`
 * is set, otherwise a <button>. Hover = skewed white shine sweep + colour glow;
 * with `arrow`, two arrow glyphs slide through one clipped slot.
 */
export type ButtonVariant = 'primary' | 'secondary-light' | 'secondary-dark' | 'ghost-light';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Show the trailing arrow that slides through its clipped slot on hover. */
  arrow?: boolean;
  /** Internal path, external URL, `#anchor` or `mailto:`/`tel:` link. */
  href?: string;
  /** Force target="_blank" (auto-detected for http(s) URLs). */
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  /** Stretch to the full width of its parent and centre the label. */
  block?: boolean;
  className?: string;
  'aria-label'?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  external,
  type = 'button',
  onClick,
  disabled,
  block,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cx(
    'tk-btn',
    `tk-btn--${variant}`,
    `tk-btn--${size}`,
    block && 'tk-btn--block',
    className,
  );

  const arrowSize = size === 'lg' ? 18 : size === 'sm' ? 15 : 16;

  const inner = (
    <>
      <span className="tk-btn__shine" aria-hidden="true" />
      {children}
      {arrow ? (
        <span className="tk-btn__arrow" aria-hidden="true">
          <Icon name="arrow-right" size={arrowSize} />
          <Icon name="arrow-right" size={arrowSize} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    const isInternalRoute = href.startsWith('/') && !isExternal;

    if (isInternalRoute) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
          {inner}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
