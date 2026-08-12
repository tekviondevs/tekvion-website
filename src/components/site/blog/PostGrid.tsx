'use client';

import { useState } from 'react';
import { BlogCard } from '@/components/ds';
import { cx } from '@/components/ds/cx';

/**
 * The full article grid with its category filter.
 *
 * Client component because the filter is stateful; it receives a trimmed,
 * serialisable projection of each post (never the full body) so the payload
 * shipped to the browser stays small.
 */
export interface PostCardData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Pre-formatted on the server, e.g. "18 Jun 2026". */
  date: string;
  readingMinutes: number;
}

export interface PostGridProps {
  posts: PostCardData[];
  /** Categories in display order; "All" is prepended. */
  categories: string[];
  /** Surface the cards sit on. */
  on?: 'dark' | 'light';
}

const ALL = 'All';

export function PostGrid({ posts, categories, on = 'light' }: PostGridProps) {
  const [active, setActive] = useState<string>(ALL);

  const filters = [ALL, ...categories];
  const visible = active === ALL ? posts : posts.filter((post) => post.category === active);

  return (
    <div className="tk-archive">
      <div className="tk-blog-filter" role="group" aria-label="Filter articles by category">
        {filters.map((filter) => {
          const count =
            filter === ALL
              ? posts.length
              : posts.filter((post) => post.category === filter).length;
          const isActive = filter === active;

          return (
            <button
              key={filter}
              type="button"
              className={cx('tk-blog-filter__btn', isActive && 'tk-blog-filter__btn--on')}
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
            >
              {filter}
              <span className="tk-blog-filter__count" aria-hidden="true">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="tk-blog-filter__status" role="status">
        {active === ALL
          ? `Showing all ${posts.length} articles.`
          : `Showing ${visible.length} of ${posts.length} articles in ${active}.`}
      </p>

      <div className="grid grid--3 grid--gap-lg tk-post-grid">
        {visible.map((post) => (
          <BlogCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            category={post.category}
            date={`${post.date} · ${post.readingMinutes} min read`}
            title={post.title}
            cta="Read More"
            on={on}
          >
            {post.excerpt}
          </BlogCard>
        ))}
      </div>
    </div>
  );
}
