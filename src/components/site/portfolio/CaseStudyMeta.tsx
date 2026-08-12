import { Icon } from '@/components/ds';
import type { Project } from '@/content/types';

/**
 * Fact strip under the case-study h1: industry, stack, languages, country and
 * the live URL. Every value comes straight from the project record — nothing
 * here is inferred or embellished.
 */
export interface CaseStudyMetaProps {
  project: Project;
}

/** Strips the protocol so the live URL reads as a domain, not a link blob. */
function displayHost(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const facts: Array<{ label: string; value: string }> = [
    { label: 'Industry', value: project.industry },
    { label: 'Stack', value: [project.stack, ...project.tech.slice(0, 2)].join(' · ') },
    { label: 'Languages', value: project.languages.join(', ') },
    { label: 'Region', value: project.country },
  ];

  return (
    <dl className="tk-cs-meta">
      {facts.map((fact) => (
        <div key={fact.label} className="tk-cs-meta__item">
          <dt className="tk-cs-meta__label">{fact.label}</dt>
          <dd className="tk-cs-meta__value">{fact.value}</dd>
        </div>
      ))}
      <div className="tk-cs-meta__item">
        <dt className="tk-cs-meta__label">Live site</dt>
        <dd className="tk-cs-meta__value">
          <a
            className="tk-cs-meta__link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the live ${project.name} site (opens in a new tab)`}
          >
            {displayHost(project.url)}
            <Icon name="arrow-up-right" size={15} />
          </a>
        </dd>
      </div>
    </dl>
  );
}
