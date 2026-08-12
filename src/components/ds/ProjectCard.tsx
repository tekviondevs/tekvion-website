import Link from 'next/link';
import type { Project } from '@/content/types';
import { Icon } from './Icon';
import { cx } from './cx';

/**
 * Light-surface card for a real delivered project. Featured projects link to
 * their case study; everything else links out to the live site.
 */
export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  /* The stack is usually repeated as the first `tech` entry (e.g. stack
     "WordPress" with tech ["WordPress", ...]). De-duplicate before slicing so a
     card never renders the same chip twice — or collides on the React key. */
  const chips = Array.from(
    new Set([project.industry, project.stack, ...project.tech]),
  ).slice(0, 5);

  return (
    <article className={cx('tk-project-card', className)}>
      <div>
        <h3 className="tk-project-card__name">{project.name}</h3>
        <p className="tk-project-card__descriptor">{project.descriptor}</p>
      </div>
      <div className="tk-project-card__chips">
        {chips.map((chip, index) => (
          <span key={chip} className={cx('tk-chip', index === 0 && 'tk-chip--solid')}>
            {chip}
          </span>
        ))}
      </div>
      <p className="tk-project-card__summary">{project.summary}</p>
      <div className="tk-project-card__actions">
        {project.featured ? (
          <Link
            href={`/portfolio/${project.slug}`}
            className="tk-project-card__link"
            aria-label={`View the ${project.name} case study`}
          >
            View Case Study
            <Icon name="arrow-right" size={16} />
          </Link>
        ) : null}
        <a
          href={project.url}
          className="tk-project-card__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the live ${project.name} site (opens in a new tab)`}
        >
          Visit Site
          <Icon name="arrow-up-right" size={16} />
        </a>
      </div>
    </article>
  );
}
