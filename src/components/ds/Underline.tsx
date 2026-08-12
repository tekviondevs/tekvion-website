'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Signature motif: a rough hand-drawn amber stroke that draws itself in when
 * the emphasised word scrolls into view. The path is the design system's —
 * never redraw it, never substitute a CSS border.
 */
const UNDERLINE_PATH =
  'M6 10 C 60 4.5, 150 13, 294 7 C 230 2.5, 95 13.5, 12 7.5 C 90 4, 210 12, 290 8.5';

export interface UnderlineProps {
  children: ReactNode;
  color?: string;
  thickness?: number;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
}

export function Underline({
  children,
  color = 'var(--brand-amber)',
  thickness = 5.5,
  delay = 0.1,
}: UnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className="tk-underline">
      {children}
      <svg
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        className="tk-underline__svg"
      >
        <path
          d={UNDERLINE_PATH}
          pathLength={1}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          className={drawn ? 'tk-underline__path tk-underline__path--on' : 'tk-underline__path'}
          style={{ transitionDelay: `${delay}s` }}
        />
      </svg>
    </span>
  );
}
