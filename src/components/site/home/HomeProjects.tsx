import Link from 'next/link';
import { Button, Container, Icon, LitWrap, ProjectCard } from '@/components/ds';
import { getProjects } from '@/content/projects';

/**
 * "Our Projects" — ported from `sections-a.jsx`, with the mockup's fictional
 * BrightLearn / Lume / NovaCRM entries replaced by three real, live, featured
 * builds that each have a full case study: a UK national retailer on
 * WordPress, a right-to-left Hebrew learning platform, and a Bubble.io AI
 * product. One from each of the three stacks we sell.
 */
const HOME_PROJECT_SLUGS = ['tapi', 'afik', 'tylo-ai'];

export function HomeProjects() {
  const featured = getProjects(HOME_PROJECT_SLUGS);

  return (
    <section className="band--light home-projects" aria-labelledby="home-projects-title">
      <Container>
        <div className="home-projects__head">
          <h2 id="home-projects-title" className="home-projects__title">
            Our <b>Projects</b>
          </h2>
          <p className="home-projects__aside">
            Here is a sneak peek at what we have built
            <Link href="/portfolio" className="home-projects__arrow" aria-label="View all work">
              <span className="pa pa1" aria-hidden="true">
                <Icon name="arrow-right" size={18} />
              </span>
              <span className="pa pa2" aria-hidden="true">
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          </p>
        </div>

        <div className="grid grid--3 grid--gap-lg">
          {featured.map((project) => (
            <LitWrap key={project.slug} on="light">
              <ProjectCard project={project} />
            </LitWrap>
          ))}
        </div>

        <div className="home-projects__more">
          <Button href="/portfolio" variant="secondary-dark" arrow>
            View all work
          </Button>
        </div>
      </Container>
    </section>
  );
}
