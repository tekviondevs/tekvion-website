import type { ReactNode } from 'react';
import { cx } from './cx';

/** 1280px centred content column with 32px gutters (20px below 560px). */
export interface ContainerProps {
  children: ReactNode;
  /** `narrow` = 1000px (FAQ, timeline), `article` = 800px (long-form bodies). */
  width?: 'default' | 'narrow' | 'article';
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'article' | 'aside';
  className?: string;
  id?: string;
}

export function Container({
  children,
  width = 'default',
  as: Tag = 'div',
  className,
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cx('tk-container', width !== 'default' && `tk-container--${width}`, className)}
    >
      {children}
    </Tag>
  );
}
