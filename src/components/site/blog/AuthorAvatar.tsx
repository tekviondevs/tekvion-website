'use client';

import { useState } from 'react';
import { cx } from '@/components/ds/cx';

/**
 * Portrait with a branded initials fallback. The initials sit behind the
 * image on the identity gradient; if the JPG is missing or fails to load the
 * image is dropped and the gradient avatar shows through.
 *
 * Client component purely because it needs the `onError` handler.
 */
export interface AuthorAvatarProps {
  name: string;
  /** Two-letter initials from the team record. */
  initials: string;
  /** Public path to the portrait, e.g. "/team/shaharyar-ansari.jpg". */
  photo: string;
  /** Rendered pixel size (square). */
  size?: number;
  className?: string;
}

export function AuthorAvatar({ name, initials, photo, size = 44, className }: AuthorAvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cx('tk-avatar', className)}
      style={{ width: `${size}px`, height: `${size}px`, fontSize: `${Math.round(size * 0.36)}px` }}
    >
      <span className="tk-avatar__initials" aria-hidden="true">
        {initials}
      </span>
      {failed ? null : (
        // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
        <img
          src={photo}
          alt={`Portrait of ${name}`}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="tk-avatar__img"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
