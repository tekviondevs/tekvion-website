import type { ReactElement } from 'react';
import { BlogCard } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import type { BlogPost } from '@/content/types';
import { formatDateShort } from './PostDate';

/** "Keep reading" strip under a post. Same cards as the index, no photography. */
export interface RelatedPostsProps {
  posts: BlogPost[];
  on?: 'dark' | 'light';
  className?: string;
}

export function RelatedPosts({ posts, on = 'dark', className }: RelatedPostsProps): ReactElement | null {
  if (posts.length === 0) return null;

  return (
    <div className={cx('grid', posts.length > 2 ? 'grid--3' : 'grid--2', 'grid--gap-lg', className)}>
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          href={`/blog/${post.slug}`}
          category={post.category}
          date={`${formatDateShort(post.publishedAt)} · ${post.readingMinutes} min read`}
          title={post.title}
          cta="Read More"
          on={on}
        >
          {post.excerpt}
        </BlogCard>
      ))}
    </div>
  );
}
