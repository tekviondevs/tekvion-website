import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge, Container, SectionHeading, ServiceCard } from '@/components/ds';
import { Breadcrumbs, PageCta } from '@/components/site';
import { AuthorCard } from '@/components/site/blog/AuthorCard';
import { BlockRenderer, buildToc } from '@/components/site/blog/BlockRenderer';
import { PostByline } from '@/components/site/blog/PostByline';
import { RelatedPosts } from '@/components/site/blog/RelatedPosts';
import { TableOfContents } from '@/components/site/blog/TableOfContents';
import { getPost, getPosts, posts } from '@/content/blog';
import { getServices } from '@/content/services';
import { getTeamMember } from '@/content/team';
import { JsonLd, blogPosting, countWords } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import '@/components/site/blog/blog.css';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

/** Every post is prerendered at build time. */
export function generateStaticParams(): Array<{ slug: string }> {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: 'Article not found', robots: { index: false, follow: true } };
  }

  const author = getTeamMember(post.authorSlug);

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: author ? [author.name] : undefined,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // authorSlug is validated content: every post names a real team member.
  // A dangling reference means the post is not publishable.
  const author = getTeamMember(post.authorSlug);
  if (!author) notFound();

  const toc = buildToc(post.body);
  const wordCount = countWords(post.body);
  const relatedServices = getServices(post.relatedServiceSlugs).slice(0, 4);
  const relatedPosts = getPosts(post.relatedPostSlugs).slice(0, 3);

  return (
    <>
      <section className="band--dark section--hero tk-post-hero">
        <Container>
          {/* Width-matched to the article column below so both edges line up. */}
          <div className="tk-post-hero__inner">
            <Breadcrumbs
              items={[
                { name: 'Blog', path: '/blog' },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <div className="tk-post-hero__badge">
              <Badge>{post.category}</Badge>
            </div>
            <h1 className="tk-post-hero__title">{post.title}</h1>
            <p className="lead muted">{post.excerpt}</p>
            <PostByline
              author={author}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
              readingMinutes={post.readingMinutes}
              wordCount={wordCount}
            />
          </div>
        </Container>
      </section>

      <section className="band--light section tk-post">
        <Container>
          <div className="tk-post__layout">
            <TableOfContents entries={toc} />
            <div className="tk-post__main">
              <article className="prose tk-post__prose">
                <BlockRenderer blocks={post.body} />
              </article>

              <ul className="tk-post__tags" aria-label="Article tags">
                {post.tags.map((tag) => (
                  <li key={tag} className="tk-chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <AuthorCard author={author} />

              <p className="tk-post__back">
                <Link href="/blog">Back to all articles</Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 ? (
        <section className="band--dark section" aria-labelledby="related-services">
          <Container>
            <SectionHeading
              id="related-services"
              onDark
              emphasis="practice"
              kicker="The services this article draws on, if you would rather we did it for you:"
            >
              Put this into
            </SectionHeading>
            <div className="grid grid--4 grid--gap-lg mt-12">
              {relatedServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  on="dark"
                >
                  {service.short}
                </ServiceCard>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedPosts.length > 0 ? (
        <section className="band--light section" aria-labelledby="keep-reading">
          <Container>
            <SectionHeading id="keep-reading" emphasis="Reading" kicker="More from the same shelf:">
              Keep
            </SectionHeading>
            <div className="mt-12">
              <RelatedPosts posts={relatedPosts} on="light" />
            </div>
          </Container>
        </section>
      ) : null}

      <PageCta />
      <JsonLd schema={blogPosting(post, author)} id="blog-post" />
    </>
  );
}
