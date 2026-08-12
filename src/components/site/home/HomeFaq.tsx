import { Container, FaqRow, SectionHeading } from '@/components/ds';
import { faqs } from '@/content/company';

/**
 * FAQ accordion — the mockup left every answer as "Answer copy pending", so
 * these are the real, published answers from `company.faqs`. The matching
 * FAQPage JSON-LD is emitted once, by the page.
 */
export function HomeFaq() {
  return (
    <section className="band--dark home-faq" aria-labelledby="home-faq-title">
      <Container width="narrow">
        <SectionHeading id="home-faq-title" onDark emphasis="Questions">
          Frequently Asked
        </SectionHeading>

        <div className="home-faq__list">
          {faqs.map((faq) => (
            <FaqRow key={faq.question} question={faq.question}>
              {faq.answer}
            </FaqRow>
          ))}
        </div>
      </Container>
    </section>
  );
}
