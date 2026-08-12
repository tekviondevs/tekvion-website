'use client';

import { useState } from 'react';

/**
 * Team portrait with a branded fallback.
 *
 * Portraits ship as 800x1000 JPEGs at `/team/<slug>.jpg`, matching the `photo`
 * paths in `src/content/team.ts`. If a portrait is ever swapped for an SVG or
 * goes missing, we try the `.svg` sibling once and then fall back to the
 * identity-gradient initials avatar — the card never shows a broken image.
 * Dropping a new photo at the same path is the only step needed to replace one.
 */
export interface TeamPhotoProps {
  /** Public path from the content layer, e.g. "/team/jahanzaib-abid.jpg". */
  src: string;
  name: string;
  role: string;
  /** Two-letter initials rendered by the gradient avatar fallback. */
  initials: string;
}

function svgSibling(src: string): string {
  return src.replace(/\.(jpe?g|png|webp)$/i, '.svg');
}

export function TeamPhoto({ src, name, role, initials }: TeamPhotoProps) {
  const [current, setCurrent] = useState<string>(src);
  const [failed, setFailed] = useState<boolean>(false);

  if (failed) {
    return (
      <div className="about-team__avatar" role="img" aria-label={`${name}, ${role}`}>
        <span className="about-team__initials" aria-hidden="true">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={current}
      alt={`${name}, ${role} at Tekvion Innovations`}
      width={800}
      height={1000}
      loading="lazy"
      decoding="async"
      className="about-team__photo"
      onError={() => {
        const next = svgSibling(current);
        if (next !== current) {
          setCurrent(next);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
