import type { Metadata } from 'next';
import { Container, FaqRow, Icon, SectionHeading, Underline } from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand } from '@/components/site';
import { ContactForm } from '@/components/site/forms/ContactForm';
import '@/components/site/forms/forms.css';
import { CALENDLY_URL, contact, faqs, socials } from '@/content/company';
import { faqPage, JsonLd, professionalService, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata, siteName, SITE_URL } from '@/lib/seo';

const DESCRIPTION =
  'Talk to the people who will actually build your site. Book a 30-minute call, email business@tekvion.net or send the form — we reply within one working day.';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description: DESCRIPTION,
  path: '/contact',
});

const CONTACT_URL = absoluteUrl('/contact');

const contactPageSchema: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${CONTACT_URL}#contactpage`,
  url: CONTACT_URL,
  name: `Contact ${siteName}`,
  description: DESCRIPTION,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: { '@id': `${SITE_URL}/#professionalservice` },
};

/** What a visitor can genuinely expect, drawn from how we already work. */
const expectations: Array<{ icon: string; term: string; detail: string }> = [
  {
    icon: 'mail',
    term: 'New enquiries',
    detail:
      'A reply from one of the founders, usually within one working day, Monday to Friday. Not an auto-responder and not a sales sequence.',
  },
  {
    icon: 'file-text',
    term: 'Project briefs',
    detail:
      'Send a brief through the form and we come back with a written, itemised figure — usually within one working day of receiving enough detail to price it properly.',
  },
  {
    icon: 'calendar',
    term: 'Booked calls',
    detail:
      'Pick a 30-minute slot on our booking page and you get a founder on the call, not a salesperson. Come with the problem; you do not need a specification written first.',
  },
  {
    icon: 'wrench',
    term: 'Care-plan clients',
    detail:
      'Support requests from clients on a maintenance plan are picked up the same working day wherever possible, and urgent site-down issues jump the queue.',
  },
  {
    icon: 'clock',
    term: 'Working hours',
    detail:
      'Our studio runs on Pakistan Standard Time (UTC+5). We keep flexible hours so calls can overlap European and North American working days.',
  },
];

export default function ContactPage() {
  const address = `${contact.addressLine}, ${contact.city}, ${contact.country}`;

  return (
    <>
      <JsonLd schema={[contactPageSchema, professionalService(), faqPage(faqs)]} id="contact" />

      {/* ---------------------------------------------------------------- Hero */}
      <SectionBand tone="dark" space="hero" width="narrow">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} on="dark" />
        <h1 className="tk-page-hero__title">
          Contact <Underline>Us</Underline>
        </h1>
        <p className="tk-page-hero__kicker">
          Tell us what you are building — a new site, a rebuild, a custom application in MERN,
          Next.js or PHP, a GoHighLevel and automation set-up, or a site that needs someone reliable
          looking after it. A founder reads every message that arrives here. Two ways in: book a
          30-minute call, or send the form below.
        </p>
        <div className="tk-page-hero__meta">
          <span>
            <Icon name="mail" size={16} />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </span>
          <span>
            <Icon name="phone" size={16} />
            <a href={contact.phoneHref}>{contact.phone}</a>
          </span>
          <span>
            <Icon name="map-pin" size={16} />
            {address}
          </span>
        </div>
      </SectionBand>

      {/* ------------------------------------------------------- Form and details */}
      <section className="band--light section" aria-label="Send a message and contact details">
        <Container width="narrow">
          <div className="tk-contact__grid">
            <ContactForm />

            <aside className="tk-contact__aside" aria-label="Contact details">
              <div className="tk-info-card">
                <p className="tk-info-card__label">
                  <Icon name="calendar" size={14} />
                  Book a call
                </p>
                <p className="tk-info-card__value">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Pick a 30-minute slot
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
                <p className="tk-info-card__note">
                  Straight into a founder&apos;s calendar. Bring the problem — you do not need a
                  specification written before we talk.
                </p>
              </div>

              <div className="tk-info-card">
                <p className="tk-info-card__label">
                  <Icon name="mail" size={14} />
                  Email
                </p>
                <p className="tk-info-card__value">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
                <p className="tk-info-card__note">
                  The fastest route. Attach anything useful — sitemaps, wireframes, a competitor
                  site you like.
                </p>
              </div>

              <div className="tk-info-card">
                <p className="tk-info-card__label">
                  <Icon name="phone" size={14} />
                  Phone
                </p>
                <p className="tk-info-card__value">
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </p>
                <p className="tk-info-card__note">
                  Prefer to talk it through? Call us, or use the booking link above to take a
                  30-minute slot at a time that suits your timezone.
                </p>
              </div>

              <div className="tk-info-card">
                <p className="tk-info-card__label">
                  <Icon name="map-pin" size={14} />
                  Studio
                </p>
                <p className="tk-info-card__value">{address}</p>
                <p className="tk-info-card__note">
                  We work remotely with clients across four continents and in more than ten
                  countries. Visits are by appointment.
                </p>
              </div>

              <div className="tk-info-card">
                <p className="tk-info-card__label">
                  <Icon name="users" size={14} />
                  Elsewhere
                </p>
                <div className="tk-info-card__socials">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      className="tk-social-chip"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={social.label.toLowerCase()} size={15} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Response expectations */}
      <SectionBand tone="dark" width="narrow" labelledBy="response-times-title">
        <SectionHeading id="response-times-title" onDark emphasis="hear from us">
          When you will
        </SectionHeading>
        <ul className="tk-response-list grid grid--2 grid--gap-lg mt-12">
          {expectations.map((item) => (
            <li key={item.term}>
              <Icon name={item.icon} size={18} />
              <div>
                <p className="tk-response-list__term">{item.term}</p>
                <p className="tk-response-list__detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </SectionBand>

      {/* ------------------------------------------------------------------- FAQ */}
      <SectionBand tone="light" width="narrow" labelledBy="contact-faq-title">
        <SectionHeading
          id="contact-faq-title"
          emphasis="questions"
          kicker="The things people ask us before they get in touch:"
        >
          Frequently asked
        </SectionHeading>
        <div className="stack mt-12">
          {faqs.map((faq, index) => (
            <FaqRow key={faq.question} question={faq.question} on="light" defaultOpen={index === 0}>
              <p>{faq.answer}</p>
            </FaqRow>
          ))}
        </div>
      </SectionBand>

      <PageCta
        title="Ready when you are"
        sub="Send a brief and we will come back with a written scope, a firm timeline and a fixed price."
      />
    </>
  );
}
