import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Icon, Underline } from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand } from '@/components/site';
import '@/components/site/forms/forms.css';
import { company, contact } from '@/content/company';
import { JsonLd, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata, SITE_URL } from '@/lib/seo';

const DESCRIPTION =
  'How Tekvion Innovations handles information sent through this website: what the forms collect, why we keep it, who else sees it, and how to have it erased.';

const LAST_UPDATED_ISO = '2026-08-13';
const LAST_UPDATED_LABEL = '13 August 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: DESCRIPTION,
  path: '/privacy-policy',
});

const PAGE_URL = absoluteUrl('/privacy-policy');

const pageSchema: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Privacy Policy',
  description: DESCRIPTION,
  inLanguage: 'en',
  dateModified: LAST_UPDATED_ISO,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const sections: Array<{ id: string; title: string }> = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'scope', title: 'What this policy covers' },
  { id: 'what-we-collect', title: 'What we collect, and why' },
  { id: 'cookies', title: 'Cookies and tracking' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'processors', title: 'Who else handles your data' },
  { id: 'transfers', title: 'Where your data is stored' },
  { id: 'your-rights', title: 'Your rights, and how to use them' },
  { id: 'security', title: 'How we protect your information' },
  { id: 'client-data', title: 'Data on sites we build and maintain' },
  { id: 'children', title: "Children's data" },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us about privacy' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd schema={pageSchema} id="privacy-policy" />

      <SectionBand tone="dark" space="hero" width="article">
        <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} on="dark" />
        <h1 className="tk-page-hero__title">
          Privacy <Underline>Policy</Underline>
        </h1>
        <p className="tk-page-hero__kicker">
          Written to be read, not to be skipped. It explains exactly what happens to anything you
          send us through this website.
        </p>
        <p className="tk-legal__updated">
          <Icon name="calendar" size={15} />
          Last updated {LAST_UPDATED_LABEL}
        </p>
      </SectionBand>

      <section className="band--light section" aria-label="Privacy policy">
        <Container width="article">
          <article className="prose tk-legal">
            <div className="callout tk-legal__summary">
              <p className="callout__title">The short version</p>
              <ul>
                <li>
                  We collect what you type into our contact and quote forms, plus anything you send
                  us by email or phone. Nothing more.
                </li>
                <li>
                  We use it for one thing: to answer you and, if you become a client, to run the
                  project.
                </li>
                <li>
                  This site sets no tracking, advertising or profiling cookies, and runs no
                  analytics scripts. There is no cookie banner because there is nothing to consent
                  to.
                </li>
                <li>We never sell, rent or trade your information. There are no ad networks here.</li>
                <li>
                  Ask us to send you a copy of what we hold, correct it, or delete it, and we will —
                  email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </li>
              </ul>
            </div>

            <nav className="toc tk-legal__toc" aria-label="On this page">
              <p className="toc__title">On this page</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id} data-level="2">
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="who-we-are">Who we are</h2>
            <p>
              {company.name} is a web design and development studio founded in{' '}
              {company.foundedYear}. We operate under the registered name {company.legalName} and
              work from {contact.addressLine}, {contact.city}, {contact.country}. This website,{' '}
              <Link href="/">tekvion.net</Link>, is ours, and we are responsible for the personal
              information collected through it.
            </p>
            <p>
              For anything in this policy, the person to write to is{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>. There is no privacy
              department to route you through — the message goes to the founders.
            </p>

            <h2 id="scope">What this policy covers</h2>
            <p>
              This policy applies to tekvion.net and to the enquiries that reach us through it. It
              does not cover the websites and applications we build for clients. When we work on a
              client&apos;s site we act on that client&apos;s instructions, under the agreement we
              have with them, and their own privacy policy governs how visitor data is handled
              there. It also does not cover third-party sites we link to, such as LinkedIn or
              Facebook, which have their own policies.
            </p>

            <h2 id="what-we-collect">What we collect, and why</h2>

            <h3>The contact form</h3>
            <p>
              Our <Link href="/contact">contact form</Link> asks for your name, email address, an
              optional company name, an optional budget range, and your message. We use these to
              reply to you, to understand whether we are a sensible fit, and to keep the thread
              together if the conversation continues. The lawful basis is simple: you asked us to
              get in touch.
            </p>

            <h3>The quote form</h3>
            <p>
              The <Link href="/quote">quote form</Link> asks for the same contact details plus the
              details of the work: your current website if you have one, the type of project, any
              platform preference, a budget range, a timeline, a description of what you want built,
              and — optionally — how you found us. We use this to prepare a written quote and to
              plan the project if you go ahead. The last field tells us which of our own channels
              are worth continuing with; it is never used to profile you.
            </p>

            <h3>Email, phone and messaging</h3>
            <p>
              If you email us, call us, or message us on LinkedIn or Facebook, we keep that
              correspondence so we have a record of what was discussed and agreed. Files you send us
              — briefs, brand assets, spreadsheets, credentials — are held only for as long as the
              work needs them.
            </p>

            <h3>Newsletter</h3>
            <p>
              If you subscribe to occasional updates from us, we store the email address you gave
              and nothing else. We use it to send infrequent notes about our own work and articles.
              Every message carries an unsubscribe link, and asking us to remove you by email works
              just as well. We do not add clients or enquirers to that list automatically.
            </p>

            <h3>Server logs</h3>
            <p>
              Like every website, ours is served by a hosting provider that keeps short-lived
              technical logs: IP address, browser and device type, the pages requested, and the time
              of the request. These exist to keep the site up, to diagnose faults, and to spot
              abuse. We do not use them to build a picture of individual visitors, and we do not
              combine them with anything you send us.
            </p>

            <h3>What we do not collect</h3>
            <ul>
              <li>
                No payment details. This site takes no payments; invoices are settled by bank
                transfer, Wise or Payoneer, arranged directly with you.
              </li>
              <li>No advertising identifiers, cross-site trackers or fingerprinting.</li>
              <li>
                No automated decision-making or profiling. A person reads every enquiry and decides
                what to do with it.
              </li>
              <li>No special-category data. Please do not send us any through these forms.</li>
            </ul>

            <h2 id="cookies">Cookies and tracking</h2>
            <p>
              This site sets no tracking cookies, no advertising cookies and no analytics cookies.
              It does not fingerprint your browser, and it does not embed social widgets that watch
              you. That is why you have not been shown a consent banner: there is nothing here to
              consent to.
            </p>
            <p>
              The typefaces used on this site are compiled into it at build time and served from our
              own domain, so loading a page does not tell a font provider that you visited. At the
              time of writing we run no analytics product at all. If we ever add one, we will choose
              a privacy-respecting, cookie-free option, and we will update this page — and this
              paragraph — before it goes live.
            </p>

            <h2 id="retention">How long we keep it</h2>
            <dl>
              <dt>Enquiries that do not become projects</dt>
              <dd>
                Kept for up to 24 months from your last message, in case you come back to us, then
                deleted.
              </dd>
              <dt>Client project records</dt>
              <dd>
                Kept for the life of the working relationship and for a reasonable period afterwards
                so we can support, restore or hand over what we built.
              </dd>
              <dt>Invoices and accounting records</dt>
              <dd>Kept for as long as tax and accounting law requires us to keep them.</dd>
              <dt>Newsletter subscriptions</dt>
              <dd>Kept until you unsubscribe or ask us to remove you.</dd>
              <dt>Server logs</dt>
              <dd>Kept for the short retention window our hosting provider applies, then rotated out.</dd>
            </dl>
            <p>
              If you would rather we deleted something sooner, ask. Unless we are legally required
              to keep it, we will.
            </p>

            <h2 id="processors">Who else handles your data</h2>
            <p>
              We keep the list of companies that touch your information as short as we can. At the
              time of writing it is:
            </p>
            <ul>
              <li>
                <strong>Our hosting provider</strong>, which serves this website and holds the
                technical logs described above.
              </li>
              <li>
                <strong>Our email provider</strong>, which carries and stores the correspondence
                between us.
              </li>
              <li>
                <strong>A form relay service</strong>, if and when the contact and quote forms are
                connected to one. Until that happens the forms fall back to opening a pre-addressed
                message in your own email client, which means your enquiry travels straight from you
                to us with no third party in the middle.
              </li>
              <li>
                <strong>Project and accounting tools</strong> used to run client work — a shared
                project board, invoicing software, and the payment providers named above — which
                apply only once you become a client.
              </li>
            </ul>
            <p>
              None of these companies may use your information for their own purposes. We do not
              sell, rent, trade or otherwise share your data with advertisers, data brokers or
              anyone else.
            </p>

            <h2 id="transfers">Where your data is stored</h2>
            <p>
              We are based in Pakistan and our clients are spread across four continents, so the
              providers we use may store or process data on servers outside your country and outside
              ours. Where a provider offers a choice of region we prefer one close to the people the
              data belongs to. Whichever region applies, the protections described in this policy
              travel with your information.
            </p>

            <h2 id="your-rights">Your rights, and how to use them</h2>
            <p>You can ask us at any time to:</p>
            <ul>
              <li>tell you what personal information we hold about you, and send you a copy;</li>
              <li>correct anything that is wrong or out of date;</li>
              <li>delete what we hold, where we are not legally required to keep it;</li>
              <li>stop using your information for a particular purpose;</li>
              <li>withdraw consent you previously gave, such as a newsletter subscription.</li>
            </ul>
            <p>
              Email <a href={`mailto:${contact.email}`}>{contact.email}</a> with what you want and we
              will deal with it within 30 days. We will not charge you for it, and we will not make
              you jump through hoops — but we may ask a question or two to be sure the request is
              genuinely yours.
            </p>
            <p>
              To be straightforward about it: we are established in Pakistan, not in the UK or the
              European Union, and we make no claim to any certification, seal or accreditation under
              the UK GDPR, the EU GDPR or any other regime. What we do commit to is handling
              requests from anyone, anywhere, to the standard those laws set out.
            </p>

            <h2 id="security">How we protect your information</h2>
            <p>
              This site is served over HTTPS. Access to enquiry email, project files and client
              credentials is limited to the team members who need it, protected by strong unique
              passwords and two-factor authentication, and reviewed when someone&apos;s role
              changes. Client credentials are stored in a password manager, never in plain text and
              never in a chat thread.
            </p>
            <p>
              No system is perfect, and we will not pretend otherwise. If a breach ever affected
              your information, we would tell you what happened, what we did about it, and what you
              should do — promptly and in plain language.
            </p>

            <h2 id="client-data">Data on sites we build and maintain</h2>
            <p>
              When we build or look after a client&apos;s website we may be able to see data that
              site collects — customer orders, form submissions, membership records, support
              tickets. In that situation we act only on the client&apos;s instructions, under the
              terms of our project or care-plan agreement, and we do not use their data for anything
              of our own. If you are a visitor or customer of a site we built, your relationship is
              with that business, and their privacy policy is the one that applies. We will always
              pass a request on to them if you send it to us by mistake.
            </p>

            <h2 id="children">Children&apos;s data</h2>
            <p>
              Our services are sold to businesses and our website is not aimed at children. We do
              not knowingly collect information from anyone under 16. If you believe a child has
              sent us personal information, tell us and we will delete it.
            </p>

            <h2 id="changes">Changes to this policy</h2>
            <p>
              We update this page when what we do changes — a new tool, a new form, an analytics
              product we have decided to add. The date at the top always reflects the current
              version, and material changes will be described in the summary box rather than buried
              in a paragraph. This policy has no version history published online; if you need to
              know what it said on a particular date, ask us and we will tell you.
            </p>

            <h2 id="contact">Contact us about privacy</h2>
            <div className="tk-legal__contact">
              <p>
                <strong>{company.legalName}</strong>
                <br />
                {contact.addressLine}, {contact.city}, {contact.country}
              </p>
              <p>
                Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <br />
                Phone: <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>
                Prefer a form? Use the <Link href="/contact">contact page</Link> and write
                &ldquo;privacy request&rdquo; in the message. Our{' '}
                <Link href="/terms-of-service">terms of service</Link> cover the commercial side of
                working together.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <PageCta
        title="Questions we have not answered here?"
        sub="Ask us directly. We would rather explain how something works than have you guess at it."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
