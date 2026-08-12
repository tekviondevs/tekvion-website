import { Container, SectionHeading } from '@/components/ds';
import { cx } from '@/components/ds/cx';
import { processSteps } from '@/content/company';

const CONNECTOR_GRADIENT_ID = 'tk-timeline-gradient';

/**
 * Dashed blue-to-purple connector between two timeline cards. Mirrored with
 * `scaleX(-1)` for the right-hand steps; the gradient runs top-to-bottom so
 * the flip leaves it unchanged. Hidden below 900px, where the timeline
 * collapses to a single column.
 */
function Connector({ flip }: { flip: boolean }) {
  return (
    <svg
      viewBox="0 0 160 70"
      className={cx('home-timeline__connector', flip && 'home-timeline__connector--flip')}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 4 C 70 10, 118 28, 128 62"
        fill="none"
        stroke={`url(#${CONNECTOR_GRADIENT_ID})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />
      <circle cx="128" cy="62" r="4" fill="#9531FF" />
    </svg>
  );
}

/**
 * "How We Work" — the alternating step timeline from `sections-b.jsx`, driven
 * by the four real `processSteps`. Rendered as an ordered list so the sequence
 * survives without CSS.
 */
export function HomeTimeline() {
  return (
    <section className="band--dark section" aria-labelledby="home-timeline-title">
      {/* One shared gradient definition — repeating it per connector would
          duplicate the id across the document. */}
      <svg className="home-timeline__defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={CONNECTOR_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0065FF" />
            <stop offset="1" stopColor="#9531FF" />
          </linearGradient>
        </defs>
      </svg>

      <Container width="narrow">
        <SectionHeading id="home-timeline-title" onDark emphasis="Timeline">
          Step-by-step
        </SectionHeading>

        <ol className="home-timeline__list">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={cx(
                'home-timeline__item',
                index % 2 === 1 && 'home-timeline__item--right',
              )}
            >
              <div className="home-timeline__card">
                <span className="home-timeline__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="home-timeline__step-title">{step.title}</h3>
                  <p className="home-timeline__step-copy">{step.description}</p>
                </div>
              </div>
              {index < processSteps.length - 1 ? <Connector flip={index % 2 === 1} /> : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
