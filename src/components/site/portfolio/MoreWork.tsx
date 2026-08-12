import { Button, Container, ProjectCard, SectionHeading } from '@/components/ds';
import type { Project } from '@/content/types';

/**
 * Closing "more work" strip on a case study. Only ever fed other featured
 * projects, so every card here leads to a real, written-up case study.
 */
export interface MoreWorkProps {
  projects: Project[];
  heading?: string;
  emphasis?: string;
  kicker?: string;
}

export function MoreWork({
  projects,
  heading = 'More of our',
  emphasis = 'work',
  kicker = 'Other builds where the brief was awkward and the answer had to be specific:',
}: MoreWorkProps) {
  if (projects.length === 0) return null;

  return (
    <section className="band--dark section" aria-labelledby="more-work-title">
      <Container>
        <SectionHeading id="more-work-title" onDark emphasis={emphasis} kicker={kicker}>
          {heading}
        </SectionHeading>
        <ul className="tk-cs-more__grid">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <div className="cluster tk-cs-more__cta">
          <Button href="/portfolio" variant="ghost-light" arrow>
            See the full portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
