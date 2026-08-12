import type { ReactElement } from 'react';
import Link from 'next/link';
import { Badge, Button, LitWrap } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import type { BlogPost, TeamMember } from '@/content/types';
import { CategoryPanel } from './CategoryPanel';
import { PostByline } from './PostByline';

/**
 * Latest-post highlight at the top of the blog index. The left half is the
 * branded category panel that stands in for cover art.
 */
export interface FeaturedPostProps {
  post: BlogPost;
  author: TeamMember;
  /** Eyebrow above the highlight. */
  eyebrow?: string;
  className?: string;
}

export function FeaturedPost({
  post,
  author,
  eyebrow = 'Latest article',
  className,
}: FeaturedPostProps): ReactElement {
  return (
    <section className={cx('tk-featured', className)} aria-labelledby="featured-post-title">
      <h2 id="featured-post-title" className="tk-featured__eyebrow">
        {eyebrow}
      </h2>
      <LitWrap on="dark">
        <div className="tk-featured__inner">
          <CategoryPanel
            category={post.category}
            title={post.title}
            className="tk-featured__panel"
          />
          <div className="tk-featured__copy">
            <Badge>{post.category}</Badge>
            <h3 className="tk-featured__title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="tk-featured__excerpt">{post.excerpt}</p>
            <PostByline
              author={author}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
              readingMinutes={post.readingMinutes}
              className="tk-featured__byline"
            />
            <Button href={`/blog/${post.slug}`} arrow aria-label={`Read the article: ${post.title}`}>
              Read the article
            </Button>
          </div>
        </div>
      </LitWrap>
    </section>
  );
}
