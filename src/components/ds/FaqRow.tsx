'use client';

import { useId, useState, type ReactNode } from 'react';
import { Icon } from './Icon';
import { cx } from './cx';

/** Dark pill accordion row; the chevron rotates 90deg and the panel animates open. */
export interface FaqRowProps {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
  on?: 'dark' | 'light';
}

export function FaqRow({ question, children, defaultOpen = false, on = 'dark' }: FaqRowProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = `${panelId}-button`;

  return (
    <div className={cx('tk-faq', on === 'light' && 'tk-faq--light')}>
      <button
        type="button"
        id={buttonId}
        className="tk-faq__button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {question}
        <span className="tk-faq__chevron" aria-hidden="true">
          <Icon name="chevron-right" size={18} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        // Kept in the DOM so the height can animate; `inert` takes the closed
        // panel out of the tab order and the accessibility tree.
        inert={!open}
        className={cx('tk-faq__panel', open && 'tk-faq__panel--open')}
      >
        <div className="tk-faq__panel-inner">
          <div className="tk-faq__answer">{children}</div>
        </div>
      </div>
    </div>
  );
}
