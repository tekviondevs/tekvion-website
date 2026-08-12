import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCard, ProjectCard, SectionHeading, ServiceCard } from '@/components/ds';
import { PageCta, SectionBand } from '@/components/site';
import {
  ProcessTimeline,
  ServiceDetailHero,
  ServiceFaqBand,
  ServiceFeatureGrid,
  ServiceList,
  serviceIcon,
} from '@/components/site/services';
import '@/components/site/services/services.css';
import { postsForService } from '@/content/blog';
import { getProjects, showcaseProjects } from '@/content/projects';
import { getService, getServices, services } from '@/content/services';
import {
  breadcrumbs,
  faqPage,
  JsonLd,
  serviceSchema,
  type JsonLdObject,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/** Prerender all 29 detail pages. */
export function generateStaticParams(): Array<{ slug: string }> {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: 'Service not found', robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

/** Projects with a complete public write-up — never lead with a placeholder card. */
const showcaseSlugs = new Set(showcaseProjects.map((project) => project.slug));

const publishedDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  /* Related content. Anything that fails to resolve is dropped rather than
     rendered as a broken card. */
  const relatedProjects = getProjects(service.relatedProjectSlugs).filter((project) =>
    showcaseSlugs.has(project.slug),
  );
  const relatedServices = getServices(service.relatedServiceSlugs);
  const relatedPosts = postsForService(service.slug);

  /* The closing bands alternate black and white; the ones that only appear
     sometimes take their tone from their position in the sequence. */
  const tail: Array<'projects' | 'services' | 'posts'> = [];
  if (relatedProjects.length > 0) tail.push('projects');
  if (relatedServices.length > 0) tail.push('services');
  if (relatedPosts.length > 0) tail.push('posts');

  const toneFor = (key: 'projects' | 'services' | 'posts'): 'dark' | 'light' =>
    tail.indexOf(key) % 2 === 0 ? 'light' : 'dark';
  const faqTone: 'dark' | 'light' = tail.length % 2 === 1 ? 'dark' : 'light';

  const schema: JsonLdObject[] = [
    serviceSchema(service),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
  ];
  if (service.faqs.length > 0) schema.push(faqPage(service.faqs));

  return (
    <>
      <JsonLd id={`service-${service.slug}`} schema={schema} />

      <ServiceDetailHero service={service} titleId="service-title" />

      {/* What you get ------------------------------------------------------ */}
      <SectionBand tone="light" labelledBy="what-you-get">
        <SectionHeading
          id="what-you-get"
          emphasis="Get"
          kicker="Included as standard on every engagement — not an upsell list."
        >
          What You
        </SectionHeading>
        <ServiceFeatureGrid features={service.whatYouGet} />
      </SectionBand>

      {/* How we deliver ---------------------------------------------------- */}
      <SectionBand tone="dark" width="narrow" labelledBy="how-we-deliver">
        <SectionHeading
          id="how-we-deliver"
          onDark
          emphasis="Deliver It"
          kicker={`Stage by stage, with the approval points marked. ${service.title} follows the same rhythm on every project.`}
        >
          How We
        </SectionHeading>
        <ProcessTimeline steps={service.process} on="dark" idPrefix={`svc-${service.slug}`} />
      </SectionBand>

      {/* What you receive -------------------------------------------------- */}
      <SectionBand tone="light" labelledBy="what-you-receive">
        <SectionHeading
          id="what-you-receive"
          emphasis="Receive"
          kicker="The concrete artefacts handed over at the end — files, access and documentation you keep."
        >
          What You
        </SectionHeading>
        <ServiceList items={service.deliverables} marker="check" columns={2} />
      </SectionBand>

      {/* Ideal for + tools we use ------------------------------------------ */}
      <SectionBand tone="dark">
        <div className="tk-svc-split">
          <section aria-labelledby="ideal-for">
            <h2 id="ideal-for" className="tk-svc-split__title">
              Ideal for
            </h2>
            <p className="tk-svc-split__lead">
              If two or three of these sound like your situation, this is the right place to start.
            </p>
            <ServiceList items={service.idealFor} marker="dot" columns={1} />
          </section>

          <section aria-labelledby="tools-we-use">
            <h2 id="tools-we-use" className="tk-svc-split__title">
              Tools we use
            </h2>
            <p className="tk-svc-split__lead">
              Standard, portable tooling. The licences, accounts and source stay in your name, so
              nothing here is a reason you cannot leave.
            </p>
            <ul className="tk-svc-chips">
              {service.techStack.map((tool) => (
                <li key={tool}>
                  <span className="tk-chip">{tool}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </SectionBand>

      {/* Related case studies ---------------------------------------------- */}
      {relatedProjects.length > 0 ? (
        <SectionBand tone={toneFor('projects')} labelledBy="related-work">
          <SectionHeading
            id="related-work"
            onDark={toneFor('projects') === 'dark'}
            emphasis="Shipped"
            kicker="Live projects where this work did the heavy lifting:"
          >
            Work We Have
          </SectionHeading>
          <div className="grid grid--3 tk-svc-related tk-svc-related--projects">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionBand>
      ) : null}

      {/* Related services --------------------------------------------------- */}
      {relatedServices.length > 0 ? (
        <SectionBand tone={toneFor('services')} labelledBy="related-services">
          <SectionHeading
            id="related-services"
            onDark={toneFor('services') === 'dark'}
            emphasis="Services"
            kicker="Work that usually runs alongside this one:"
          >
            Related
          </SectionHeading>
          <div className="grid grid--3 grid--gap-lg tk-svc-related">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                icon={serviceIcon(related.icon)}
                href={`/services/${related.slug}`}
                on={toneFor('services')}
              >
                {related.short}
              </ServiceCard>
            ))}
          </div>
        </SectionBand>
      ) : null}

      {/* Reading on the subject --------------------------------------------- */}
      {relatedPosts.length > 0 ? (
        <SectionBand tone={toneFor('posts')} labelledBy="related-reading">
          <SectionHeading
            id="related-reading"
            onDark={toneFor('posts') === 'dark'}
            emphasis="Subject"
            kicker="What we have written about this, in more depth than a service page allows:"
          >
            More on the
          </SectionHeading>
          <div className="grid grid--3 grid--gap-lg tk-svc-related">
            {relatedPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                category={post.category}
                title={post.title}
                href={`/blog/${post.slug}`}
                date={publishedDate.format(new Date(post.publishedAt))}
                on={toneFor('posts')}
              >
                {post.excerpt}
              </BlogCard>
            ))}
          </div>
        </SectionBand>
      ) : null}

      {/* FAQs ---------------------------------------------------------------- */}
      <ServiceFaqBand
        faqs={service.faqs}
        tone={faqTone}
        id={`${service.slug}-faqs`}
        kicker={`The questions we get asked most about ${service.title}.`}
      />

      <PageCta
        title={`Ready to start on ${service.title}?`}
        sub="Send us the brief — or just the problem. You will get a written scope, a timeline and a fixed price, usually within one working day."
      />
    </>
  );
}
