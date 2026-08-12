import type { Faq } from '@/content/types';
import { FaqRow, SectionHeading } from '@/components/ds';
import { SectionBand } from '@/components/site/SectionBand';

/**
 * Accordion FAQ band. Used on the services index with the company FAQs and on
 * every detail page with that service's own questions. The matching FAQPage
 * JSON-LD is emitted by the page so it is never duplicated.
 */
export interface ServiceFaqBandProps {
  faqs: Faq[];
  tone?: 'dark' | 'light';
  id?: string;
  headingLead?: string;
  headingEmphasis?: string;
  kicker?: string;
}

export function ServiceFaqBand({
  faqs,
  tone = 'dark',
  id = 'faqs',
  headingLead = 'Frequently Asked',
  headingEmphasis = 'Questions',
  kicker,
}: ServiceFaqBandProps) {
  if (faqs.length === 0) return null;

  const headingId = `${id}-heading`;

  return (
    <SectionBand id={id} tone={tone} width="narrow" labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        onDark={tone === 'dark'}
        emphasis={headingEmphasis}
        kicker={kicker}
      >
        {headingLead}
      </SectionHeading>
      <div className="tk-svc-faqs">
        {faqs.map((faq) => (
          <FaqRow key={faq.question} question={faq.question} on={tone}>
            {faq.answer}
          </FaqRow>
        ))}
      </div>
    </SectionBand>
  );
}
