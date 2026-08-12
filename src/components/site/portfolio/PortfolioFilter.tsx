'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/ds';
import type { Project, ProjectStack } from '@/content/types';

/**
 * Client-side filter bar for the portfolio index. Two independent button
 * groups (industry and stack) that both default to "All". State is local by
 * design — the canonical, crawlable URL for this page is always /portfolio,
 * and every project already has its own indexable destination.
 */
export interface PortfolioFilterProps {
  /** Every project to offer, already in display order. */
  projects: Project[];
  /** Industry labels, aligned to the eight industry pages. */
  industries: string[];
  /** Stacks in canonical display order. */
  stacks: ProjectStack[];
}

const ALL = 'All';

export function PortfolioFilter({ projects, industries, stacks }: PortfolioFilterProps) {
  const [industry, setIndustry] = useState<string>(ALL);
  const [stack, setStack] = useState<string>(ALL);

  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (industry === ALL || project.industry === industry) &&
          (stack === ALL || project.stack === stack),
      ),
    [projects, industry, stack],
  );

  const isFiltered = industry !== ALL || stack !== ALL;

  const reset = () => {
    setIndustry(ALL);
    setStack(ALL);
  };

  return (
    <>
      <div className="tk-filter">
        <div className="tk-filter__row">
          <span className="tk-filter__label" id="portfolio-filter-industry">
            Industry
          </span>
          <div className="tk-filter__chips" role="group" aria-labelledby="portfolio-filter-industry">
            {[ALL, ...industries].map((option) => (
              <button
                key={option}
                type="button"
                className="tk-filter__chip"
                aria-pressed={industry === option}
                onClick={() => setIndustry(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="tk-filter__row">
          <span className="tk-filter__label" id="portfolio-filter-stack">
            Stack
          </span>
          <div className="tk-filter__chips" role="group" aria-labelledby="portfolio-filter-stack">
            {[ALL, ...stacks].map((option) => (
              <button
                key={option}
                type="button"
                className="tk-filter__chip"
                aria-pressed={stack === option}
                onClick={() => setStack(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="tk-filter__status-row">
          <p className="tk-filter__status" role="status">
            Showing {visible.length} of {projects.length} projects
            {isFiltered ? ` — ${industry === ALL ? 'all industries' : industry}, ${stack === ALL ? 'all stacks' : stack}` : ''}
            .
          </p>
          {isFiltered ? (
            <button type="button" className="tk-filter__reset" onClick={reset}>
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="tk-pf-grid">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="tk-pf-empty">
          We have not shipped anything in that combination yet. Clear the filters to see the whole
          portfolio, or tell us what you are building — the stack follows the problem, not the other
          way round.
        </p>
      )}
    </>
  );
}
