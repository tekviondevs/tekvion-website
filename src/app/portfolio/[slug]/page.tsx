import { Fragment } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge, Button, Icon, SectionHeading, ServiceCard } from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand } from '@/components/site';
import { CaseStudyMeta } from '@/components/site/portfolio/CaseStudyMeta';
import { MoreWork } from '@/components/site/portfolio/MoreWork';
import '@/components/site/portfolio/portfolio.css';
import { featuredProjects, getProject } from '@/content/projects';
import { getServices } from '@/content/services';
import { JsonLd, breadcrumbs, creativeWork } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Only featured projects carry a caseStudy object, so only they get a page. */
export function generateStaticParams(): Array<{ slug: string }> {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    return { title: 'Case study not found', robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: project.caseStudy.metaTitle,
    description: project.caseStudy.metaDescription,
    path: `/portfolio/${project.slug}`,
    imageAlt: `${project.name} — ${project.descriptor}, built by Tekvion Innovations`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = project?.caseStudy;

  if (!project || !caseStudy) notFound();

  const services = getServices(project.serviceSlugs);
  const moreWork = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: project.name, path: `/portfolio/${project.slug}` },
  ];

  return (
    <>
      <SectionBand tone="dark" space="hero">
        <Breadcrumbs
          items={[
            { name: 'Portfolio', path: '/portfolio' },
            { name: project.name, path: `/portfolio/${project.slug}` },
          ]}
          on="dark"
          includeSchema={false}
        />

        <Badge className="tk-cs-hero__badge">Case Study</Badge>
        <h1 className="tk-cs-hero__title">{project.name}</h1>
        <p className="tk-cs-hero__descriptor">{project.descriptor}</p>
        <p className="lead muted tk-cs-hero__summary">{project.summary}</p>

        <CaseStudyMeta project={project} />

        <div className="cluster tk-cs-hero__actions">
          <Button href={project.url} size="lg" external arrow>
            Visit the live site
          </Button>
          <Button href="/portfolio" size="lg" variant="ghost-light">
            All projects
          </Button>
        </div>
      </SectionBand>

      <SectionBand
        tone="light"
        width="narrow"
        className="tk-cs-body"
        labelledBy="case-study-challenge"
      >
        <article className="prose">
          <h2 id="case-study-challenge">The challenge</h2>
          {caseStudy.challenge.map((paragraph, index) => (
            <p key={`challenge-${index}`}>{paragraph}</p>
          ))}

          {caseStudy.approach.map((section) => (
            <Fragment key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </Fragment>
          ))}

          <h2 id="case-study-outcome">The outcome</h2>
          {caseStudy.outcome.map((paragraph, index) => (
            <p key={`outcome-${index}`}>{paragraph}</p>
          ))}
        </article>
      </SectionBand>

      <SectionBand tone="dark" labelledBy="case-study-highlights">
        <SectionHeading
          id="case-study-highlights"
          onDark
          emphasis="highlights"
          kicker="What this build actually contains — facts from the project, not projected results."
        >
          Project
        </SectionHeading>
        <ul className="tk-cs-highlights__list">
          {caseStudy.highlights.map((highlight) => (
            <li key={highlight} className="tk-cs-highlights__item">
              <Icon name="circle-check" size={18} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </SectionBand>

      {services.length > 0 ? (
        <SectionBand tone="light" labelledBy="case-study-services">
          <SectionHeading
            id="case-study-services"
            emphasis="used"
            kicker={`The parts of what we do that ${project.name} needed. Each one is a service you can brief us on:`}
          >
            Services
          </SectionHeading>
          <div className="tk-cs-services__grid">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                on="light"
                icon={service.icon}
                href={`/services/${service.slug}`}
              >
                {service.short}
              </ServiceCard>
            ))}
          </div>
        </SectionBand>
      ) : null}

      <MoreWork projects={moreWork} />

      <PageCta
        title={`Need something like ${project.name}?`}
        sub="Send us the brief. We will tell you what it takes, what it costs, and whether we are the right team for it."
      />

      <JsonLd
        schema={[creativeWork(project), breadcrumbs(trail)]}
        id={`case-study-${project.slug}`}
      />
    </>
  );
}
