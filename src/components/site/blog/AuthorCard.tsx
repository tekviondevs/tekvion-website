import type { ReactElement } from 'react';
import Link from 'next/link';
import { LitWrap } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import type { TeamMember } from '@/content/types';
import { AuthorAvatar } from './AuthorAvatar';

/**
 * Author bio card that closes the article. Bio and focus areas come straight
 * from '@/content/team' — no invented credentials.
 */
export interface AuthorCardProps {
  author: TeamMember;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps): ReactElement {
  return (
    <section className={cx('tk-author', className)} aria-labelledby="author-card-title">
      <h2 id="author-card-title" className="tk-author__eyebrow">
        About the author
      </h2>
      <LitWrap on="light">
        <div className="tk-author__inner">
          <div className="tk-author__head">
            <AuthorAvatar
              name={author.name}
              initials={author.initials}
              photo={author.photo}
              size={72}
            />
            <div>
              <h3 className="tk-author__name">{author.name}</h3>
              <p className="tk-author__role">{author.role}</p>
            </div>
          </div>
          <p className="tk-author__bio">{author.bio}</p>
          <ul className="tk-author__focus">
            {author.focus.map((item) => (
              <li key={item} className="tk-chip">
                {item}
              </li>
            ))}
          </ul>
          <p className="tk-author__link">
            <Link href={`/about#${author.slug}`}>Meet the Tekvion team</Link>
          </p>
        </div>
      </LitWrap>
    </section>
  );
}
