import type { Metadata } from 'next';
import { Container, SectionHeading, Underline } from '@/components/ds';
import { Breadcrumbs, PageCta } from '@/components/site';
import { FeaturedPost } from '@/components/site/blog/FeaturedPost';
import { formatDate, formatDateShort } from '@/components/site/blog/PostDate';
import { PostGrid, type PostCardData } from '@/components/site/blog/PostGrid';
import { blogCategories, posts } from '@/content/blog';
import { getTeamMember } from '@/content/team';
import { JsonLd, type JsonLdObject } from '@/lib/schema';
import { SITE_URL, absoluteUrl, buildMetadata, siteName } from '@/lib/seo';
import '@/components/site/blog/blog.css';

const DESCRIPTION =
  'Long-form guides on WordPress, Bubble.io, site speed, e-commerce and SEO from Tekvion Innovations — written by the people who build and maintain the sites.';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Web Design & Development Insights',
  description: DESCRIPTION,
  path: '/blog',
});

/** Blog + its posts. BreadcrumbList comes from the <Breadcrumbs> component. */
function blogSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl('/blog')}#blog`,
    name: `${siteName} Blog`,
    description: DESCRIPTION,
    url: absoluteUrl('/blog'),
    inLanguage: 'en',
    // Matches the Organization @id emitted once in the root layout.
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      articleSection: post.category,
      keywords: post.tags.join(', '),
      author: {
        '@type': 'Person',
        name: getTeamMember(post.authorSlug)?.name ?? siteName,
      },
    })),
  };
}

export default function BlogIndexPage() {
  const featured = posts[0];
  const featuredAuthor = featured ? getTeamMember(featured.authorSlug) : undefined;

  const cards: PostCardData[] = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: formatDateShort(post.publishedAt),
    readingMinutes: post.readingMinutes,
  }));

  return (
    <>
      <section className="band--dark section--hero tk-blog-hero">
        <Container>
          <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
          <h1 className="tk-blog-hero__title">
            Web design and development <Underline>insights</Underline>
          </h1>
          <p className="lead muted mt-6">
            Stay ahead with tips, trends and web wisdom. Every article here is written by the people
            who build and maintain our clients&rsquo; sites — long-form, specific, and free of
            recycled advice.
          </p>
          <p className="tk-blog-hero__meta">
            {posts.length} articles · {blogCategories.length} categories
            {featured ? ` · latest ${formatDate(featured.publishedAt)}` : ''}
          </p>
        </Container>
      </section>

      {featured && featuredAuthor ? (
        <section className="band--dark section section--flush-top">
          <Container>
            <FeaturedPost post={featured} author={featuredAuthor} />
          </Container>
        </section>
      ) : null}

      <section className="band--light section" aria-labelledby="all-articles">
        <Container>
          <SectionHeading
            id="all-articles"
            emphasis="Articles"
            kicker="Filter by what you are working on right now:"
          >
            All
          </SectionHeading>
          <div className="mt-12">
            <PostGrid posts={cards} categories={blogCategories} on="light" />
          </div>
        </Container>
      </section>

      <PageCta
        title="Got a project that needs this thinking?"
        sub="Tell us what you are building and we will come back with a plan, a timeline, and a fixed price."
      />
      <JsonLd schema={blogSchema()} id="blog-index" />
    </>
  );
}
