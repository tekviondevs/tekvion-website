import type { ReactElement } from 'react';
import Link from 'next/link';
import { cx } from '@/components/ds/cx';
import type { TeamMember } from '@/content/types';
import { AuthorAvatar } from './AuthorAvatar';
import { PostDate } from './PostDate';

/**
 * Author, publish date and reading time under the post title. The author is a
 * real team member resolved from '@/content/team' — never a generic byline.
 */
export interface PostBylineProps {
  author: TeamMember;
  /** ISO publish date. */
  publishedAt: string;
  /** ISO date of the last substantive edit, when there has been one. */
  updatedAt?: string;
  readingMinutes: number;
  wordCount?: number;
  className?: string;
}

export function PostByline({
  author,
  publishedAt,
  updatedAt,
  readingMinutes,
  wordCount,
  className,
}: PostBylineProps): ReactElement {
  return (
    <div className={cx('tk-byline', className)}>
      <AuthorAvatar name={author.name} initials={author.initials} photo={author.photo} size={48} />
      <div className="tk-byline__meta">
        <p className="tk-byline__author">
          <Link href={`/about#${author.slug}`}>{author.name}</Link>
          <span className="tk-byline__role">{author.role}</span>
        </p>
        <p className="tk-byline__facts">
          <PostDate iso={publishedAt} />
          <span aria-hidden="true">·</span>
          <span>{readingMinutes} min read</span>
          {wordCount ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{String(wordCount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} words</span>
            </>
          ) : null}
          {updatedAt ? (
            <>
              <span aria-hidden="true">·</span>
              <span>
                Updated <PostDate iso={updatedAt} />
              </span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
