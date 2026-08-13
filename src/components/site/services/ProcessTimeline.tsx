import { Fragment } from 'react';
import type { ProcessStep } from '@/content/types';
import { cx } from '@/components/ds/cx';

/**
 * The design system's zig-zag process timeline: numbered cards alternating
 * left and right, joined by a dashed blue-to-purple connector with a dot
 * terminal. Below 720px it collapses to a single column and the connectors
 * are hidden, because a zig-zag on a phone is just a stack with extra gaps.
 */
export interface ProcessTimelineProps {
  steps: ProcessStep[];
  on?: 'dark' | 'light';
  /** Unique per page — keeps the SVG gradient ids from colliding. */
  idPrefix: string;
  className?: string;
}

function Connector({ id, flip }: { id: string; flip: boolean }) {
  return (
    <li
      aria-hidden="true"
      className={cx('tk-svc-timeline__connector', flip && 'tk-svc-timeline__connector--flip')}
    >
      <svg viewBox="0 0 160 70" focusable="false">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0065FF" />
            <stop offset="1" stopColor="#9531FF" />
          </linearGradient>
        </defs>
        <path
          d="M10 4 C 70 10, 118 28, 128 62"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />
        <circle cx="128" cy="62" r="4" fill="#9531FF" />
      </svg>
    </li>
  );
}

export function ProcessTimeline({ steps, on = 'dark', idPrefix, className }: ProcessTimelineProps) {
  if (steps.length === 0) return null;

  return (
    <ol className={cx('tk-svc-timeline', `tk-svc-timeline--${on}`, className)}>
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <li
            className={cx(
              'tk-svc-timeline__item',
              index % 2 === 1 && 'tk-svc-timeline__item--right',
            )}
          >
            <span className="tk-svc-timeline__num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="tk-svc-timeline__title">{step.title}</h3>
              <p className="tk-svc-timeline__copy">{step.description}</p>
            </div>
          </li>
          {index < steps.length - 1 ? (
            <Connector id={`${idPrefix}-connector-${index}`} flip={index % 2 === 1} />
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
