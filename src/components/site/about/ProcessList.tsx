import { LitWrap } from '@/components/ds';
import type { ProcessStep } from '@/content/types';

/** The four delivery stages, numbered, as a single-column-on-mobile grid. */
export interface ProcessListProps {
  steps: ProcessStep[];
}

export function ProcessList({ steps }: ProcessListProps) {
  return (
    <ol className="about-process">
      {steps.map((step, index) => (
        <li key={step.title} className="about-process__item">
          <LitWrap on="light">
            <div className="about-process__card">
              <span className="about-process__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="about-process__title">{step.title}</h3>
              <p className="about-process__copy">{step.description}</p>
            </div>
          </LitWrap>
        </li>
      ))}
    </ol>
  );
}
