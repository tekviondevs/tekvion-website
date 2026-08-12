import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, FaqRow, Icon, SectionHeading, Underline } from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand, TrustedBy } from '@/components/site';
import type { SelectGroup } from '@/components/site/forms/form-fields';
import { QuoteForm } from '@/components/site/forms/QuoteForm';
import '@/components/site/forms/forms.css';
import { contact, faqs } from '@/content/company';
import { servicesByCategory } from '@/content/services';
import { faqPage, JsonLd, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata, SITE_URL } from '@/lib/seo';

const DESCRIPTION =
  'Send us your project brief and get a written, itemised quote with a fixed scope, a firm timeline and the payment schedule agreed before any work begins.';

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Website Quote',
  description: DESCRIPTION,
  path: '/quote',
});

const QUOTE_URL = absoluteUrl('/quote');

/* The quote FAQ reuses the real, published answers — pricing copy on this page
   must never contradict src/content/company.ts. */
const QUOTE_FAQ_QUESTIONS = [
  'How much does a website cost?',
  'How do payments work?',
  'How long does it take to build a website?',
  'Will I own the website and the code?',
];

const quoteFaqs = QUOTE_FAQ_QUESTIONS.map((question) =>
  faqs.find((faq) => faq.question === question),
).filter((faq): faq is (typeof faqs)[number] => Boolean(faq));

const quotePageSchema: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${QUOTE_URL}#webpage`,
  url: QUOTE_URL,
  name: 'Get a free website quote',
  description: DESCRIPTION,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  significantLink: [absoluteUrl('/services'), absoluteUrl('/portfolio'), absoluteUrl('/contact')],
};

/** Grouped, real service titles for the project-type select. */
const serviceGroups: SelectGroup[] = servicesByCategory.map((group) => ({
  label: group.category,
  options: group.services.map((service) => service.title),
}));

const nextSteps: Array<{ title: string; copy: string }> = [
  {
    title: 'We read your brief',
    copy: 'A founder, not a bot and not a junior account manager. Usually within one working day, Monday to Friday.',
  },
  {
    title: 'A short call if we need one',
    copy: 'Fifteen minutes to settle anything ambiguous — scope, integrations, languages, who owns what. No pitch.',
  },
  {
    title: 'Your quote in writing',
    copy: 'A fixed scope, an itemised price, a firm timeline, and the payment schedule set out in full before anyone starts.',
  },
];

export default function QuotePage() {
  return (
    <>
      <JsonLd schema={[quotePageSchema, faqPage(quoteFaqs)]} id="quote" />

      {/* ---------------------------------------------------------------- Hero */}
      <SectionBand tone="dark" space="hero" width="narrow">
        <Breadcrumbs items={[{ name: 'Get a Quote', path: '/quote' }]} on="dark" />
        <h1 className="tk-page-hero__title">
          Get a Free <Underline>Quote</Underline>
        </h1>
        <p className="tk-page-hero__kicker">
          No obligation, no hard sell, and no drip campaign afterwards. Tell us the shape of the
          project and we will price it honestly — or tell you plainly if we are the wrong studio for
          it.
        </p>
        <div className="tk-page-hero__meta">
          <span>
            <Icon name="check" size={16} />
            Written, itemised scope
          </span>
          <span>
            <Icon name="check" size={16} />
            Usually back within one working day
          </span>
          <span>
            <Icon name="check" size={16} />
            You own the code and credentials
          </span>
        </div>
      </SectionBand>

      {/* ------------------------------------------------------------ Brief form */}
      <section className="band--light section" aria-label="Project brief form">
        <Container width="narrow">
          <div className="tk-contact__grid">
            <QuoteForm serviceGroups={serviceGroups} />

            <aside className="tk-contact__aside" aria-label="What happens after you send the form">
              <div className="tk-next-steps">
                <h2 className="tk-next-steps__title">What happens next</h2>
                <ol className="tk-next-steps__list">
                  {nextSteps.map((step, index) => (
                    <li key={step.title} className="tk-next-step">
                      <span className="tk-next-step__num" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div>
                        <p className="tk-next-step__title">{step.title}</p>
                        <p className="tk-next-step__copy">{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="tk-next-steps__foot">
                  Would rather just talk? Call <a href={contact.phoneHref}>{contact.phone}</a> or
                  email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Proof band */}
      <TrustedBy
        on="dark"
        limit={14}
        heading="Quotes backed by"
        emphasis="delivered work"
        kicker="Every figure below is something we have actually shipped, not a projection:"
      />

      {/* ------------------------------------------------------------- Pricing */}
      <SectionBand tone="light" width="narrow" labelledBy="pricing-title">
        <SectionHeading
          id="pricing-title"
          emphasis="price your project"
          kicker="Almost every brief arrives asking for a ballpark first. Here is why we do not give one:"
        >
          How we
        </SectionHeading>

        <p className="tk-bands__note">
          A number detached from a brief is not information you can act on — it is either a guess we
          would have to walk back later, or a floor set low enough to win the enquiry. So we read
          what you send, price the actual work, and put it in writing: a fixed scope, an itemised
          figure, a firm timeline and the payment schedule, usually back within one working day.
          Standard projects are invoiced 50% up front and 50% on launch; larger builds are split
          into milestones. See the <Link href="/services">full service list</Link>, or read our
          breakdown of{' '}
          <Link href="/blog/how-much-does-a-website-cost">
            what a website really costs in 2026
          </Link>
          .
        </p>
      </SectionBand>

      {/* ------------------------------------------------------------------- FAQ */}
      <SectionBand tone="dark" width="narrow" labelledBy="quote-faq-title">
        <SectionHeading
          id="quote-faq-title"
          onDark
          emphasis="before you ask"
          kicker="The four questions almost every brief arrives with:"
        >
          Answered
        </SectionHeading>
        <div className="stack mt-12">
          {quoteFaqs.map((faq, index) => (
            <FaqRow key={faq.question} question={faq.question} defaultOpen={index === 0}>
              <p>{faq.answer}</p>
            </FaqRow>
          ))}
        </div>
      </SectionBand>

      <PageCta
        title="Prefer to talk it through first?"
        sub="Some projects are easier to scope out loud. Book fifteen minutes with a founder, or send the brief above and we will take it from there."
        primaryLabel="Start your brief"
      />
    </>
  );
}
