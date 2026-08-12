import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Icon, Underline } from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand } from '@/components/site';
import '@/components/site/forms/forms.css';
import { company, contact } from '@/content/company';
import { JsonLd, type JsonLdObject } from '@/lib/schema';
import { absoluteUrl, buildMetadata, SITE_URL } from '@/lib/seo';

const DESCRIPTION =
  'The terms covering our web design and development work: quotes, payment, timelines, revisions, code ownership on final payment, liability and governing law.';

const LAST_UPDATED_ISO = '2026-08-13';
const LAST_UPDATED_LABEL = '13 August 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: DESCRIPTION,
  path: '/terms-of-service',
});

const PAGE_URL = absoluteUrl('/terms-of-service');

const pageSchema: JsonLdObject = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Terms of Service',
  description: DESCRIPTION,
  inLanguage: 'en',
  dateModified: LAST_UPDATED_ISO,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const sections: Array<{ id: string; title: string }> = [
  { id: 'who-we-are', title: 'Who these terms are with' },
  { id: 'services', title: 'The services we provide' },
  { id: 'quotes', title: 'Quotes, estimates and scope' },
  { id: 'payment', title: 'Fees and payment' },
  { id: 'timelines', title: 'Timelines and what we need from you' },
  { id: 'revisions', title: 'Revisions and changes' },
  { id: 'ownership', title: 'Intellectual property and ownership' },
  { id: 'third-party', title: 'Third-party platforms and licences' },
  { id: 'portfolio', title: 'Portfolio and credit' },
  { id: 'warranty', title: 'Warranties and what we fix' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'confidentiality', title: 'Confidentiality' },
  { id: 'termination', title: 'Termination' },
  { id: 'force-majeure', title: 'Events outside our control' },
  { id: 'governing-law', title: 'Governing law' },
  { id: 'changes', title: 'Changes to these terms' },
  { id: 'contact', title: 'Contact' },
];

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd schema={pageSchema} id="terms-of-service" />

      <SectionBand tone="dark" space="hero" width="article">
        <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms-of-service' }]} on="dark" />
        <h1 className="tk-page-hero__title">
          Terms of <Underline>Service</Underline>
        </h1>
        <p className="tk-page-hero__kicker">
          The commercial ground rules for working with us — how quotes, payment, timelines,
          ownership and support actually work. No traps, no small print you were meant to miss.
        </p>
        <p className="tk-legal__updated">
          <Icon name="calendar" size={15} />
          Last updated {LAST_UPDATED_LABEL}
        </p>
      </SectionBand>

      <section className="band--light section" aria-label="Terms of service">
        <Container width="article">
          <article className="prose tk-legal">
            <div className="callout tk-legal__summary">
              <p className="callout__title">The short version</p>
              <ul>
                <li>
                  Every project runs against a written scope. If the scope changes, we price the
                  change before we build it.
                </li>
                <li>
                  Standard projects are 50% up front and 50% on launch. Larger builds are split into
                  milestones. Care plans are monthly and you can cancel any time.
                </li>
                <li>
                  On final payment, everything we made for you becomes yours — code, designs,
                  credentials, licences. We do not hold work hostage.
                </li>
                <li>
                  We fix defects in our own work reported within 30 days of launch, free of charge.
                </li>
                <li>
                  Our liability is capped at what you paid us for the project concerned. Pakistani
                  law governs the agreement.
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

            <h2 id="who-we-are">Who these terms are with</h2>
            <p>
              These terms are between you (&ldquo;the client&rdquo;) and {company.name}, the trading
              name of {company.legalName}, a web design and development studio founded in{' '}
              {company.foundedYear} at {contact.addressLine}, {contact.city}, {contact.country}{' '}
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>
            <p>
              They apply to your use of this website and to any work we carry out for you. Where we
              have signed a separate proposal, statement of work or service agreement with you, that
              document takes precedence over anything on this page that conflicts with it.
            </p>

            <h2 id="services">The services we provide</h2>
            <p>
              We design, build, launch and maintain websites and web applications. The full range is
              set out on our <Link href="/services">services pages</Link> and covers design,
              development on WordPress, WooCommerce, Shopify, Bubble.io and modern JavaScript
              stacks, growth work such as SEO and speed optimisation, and ongoing platform support
              including maintenance, security and hosting operations.
            </p>
            <p>
              What we will actually deliver for you is whatever the written scope for your project
              says — not the whole list. We do not provide legal, financial, medical or regulatory
              advice, and nothing we write for your site should be treated as such.
            </p>

            <h2 id="quotes">Quotes, estimates and scope</h2>
            <p>
              Quotes are prepared from the brief you give us. A quote is valid for 30 days from the
              date we send it and assumes the brief is accurate and reasonably complete. If the
              project turns out to be materially different from what was described, we will tell you
              before we start and re-quote rather than absorb it quietly or cut corners.
            </p>
            <p>
              We do not publish price lists or starting bands, because a figure detached from a
              brief is not information you can rely on. Every price we give you is scoped to your
              project and set out in writing. The quote we send is the binding figure.
            </p>
            <p>
              Once you accept a quote, the scope attached to it becomes the definition of the
              project. Anything not in that scope is new work and is quoted separately.
            </p>

            <h2 id="payment">Fees and payment</h2>
            <dl>
              <dt>Standard projects</dt>
              <dd>50% payable before work begins, 50% payable on launch.</dd>
              <dt>Larger builds and applications</dt>
              <dd>
                Split into milestones — typically discovery, design sign-off, build and launch —
                with each invoiced as it completes.
              </dd>
              <dt>Care plans and retainers</dt>
              <dd>Billed monthly in advance. You can cancel at any time before the next billing date.</dd>
              <dt>Methods and currency</dt>
              <dd>
                Bank transfer, Wise or Payoneer. We can invoice in US dollars, pounds sterling or
                euros.
              </dd>
            </dl>
            <p>
              Invoices are payable within 14 days of issue unless the project agreement says
              otherwise. Deposits are non-refundable once work has begun, because the time has
              already been reserved and spent.
            </p>
            <p>
              Third-party costs — domain registration, hosting, premium themes and plugins, fonts,
              stock imagery, API usage, app-store fees, Bubble.io subscription plans — are yours,
              and are either bought in your own name or passed through at cost with the receipt
              attached. We do not mark them up.
            </p>
            <p>
              If an invoice is significantly overdue we may pause work and withhold launch until it
              is settled. We will always warn you before we do that. Any taxes or bank charges
              applicable in your jurisdiction are your responsibility.
            </p>

            <h2 id="timelines">Timelines and what we need from you</h2>
            <p>
              We commit to a firm timeline at the end of the discovery stage, once we know the real
              scope. Meeting it depends on both sides, so the agreement is mutual. From you we need:
            </p>
            <ul>
              <li>content — text, images, logos, product data — by the dates in the schedule;</li>
              <li>feedback and approvals within five working days of each request;</li>
              <li>a single named point of contact who can make decisions;</li>
              <li>
                access we need to do the job: hosting, domain registrar, existing site
                administration, analytics, any third-party accounts to integrate with.
              </li>
            </ul>
            <p>
              Where those are late, the timeline moves by a corresponding amount and we will say so
              at the time rather than at the end. If a project is left dormant on your side for more
              than 60 days we may invoice the work completed and re-schedule the remainder against
              our current availability.
            </p>

            <h2 id="revisions">Revisions and changes</h2>
            <p>
              Every project scope states how many rounds of revision are included at each stage —
              usually at design sign-off and again before launch. Revisions mean refining what was
              agreed: copy edits, spacing, colour, layout adjustments, corrections. They are
              included and expected.
            </p>
            <p>
              New pages, new features, a change of direction after sign-off, extra languages or a
              different platform are new scope, not revisions. We will quote them as a written
              change request and only start once you approve it. This distinction is documented
              before work begins, so nobody is surprised by it later.
            </p>

            <h2 id="ownership">Intellectual property and ownership</h2>
            <p>
              <strong>On receipt of final payment</strong>, ownership of the custom work we produced
              for your project transfers to you: the designs, the custom code, the theme or
              application we built, and the content we wrote for you. You also receive the domain,
              the hosting account, administrator credentials and any licences bought in your name.
            </p>
            <p>
              Until final payment is received, that work remains ours and is licensed to you for
              review and testing only. It may not be launched publicly, transferred to another
              developer, or used commercially before the balance is settled.
            </p>
            <p>
              We keep the right to reuse our own general know-how, techniques, and the generic
              tools, snippets and internal libraries we bring to every project. That reuse never
              includes your content, your branding, your data, or anything specific to your
              business.
            </p>
            <p>
              You confirm that any material you supply — text, images, logos, fonts, data — is yours
              to use, and you indemnify us against claims arising from material you gave us.
            </p>

            <h2 id="third-party">Third-party platforms and licences</h2>
            <p>
              Most builds sit on software we did not write: WordPress, WooCommerce, Shopify,
              Bubble.io, plugins, themes, fonts, payment gateways, hosting providers and APIs. Those
              components stay under their own licences and terms, which continue to apply after
              handover. Some carry recurring fees; where they do, we will tell you before we use
              them.
            </p>
            <p>
              We are not responsible for a third party&apos;s outages, pricing changes, policy
              changes, deprecations or security incidents. Where one affects your site we will tell
              you promptly, explain the options, and quote any remedial work needed.
            </p>

            <h2 id="portfolio">Portfolio and credit</h2>
            <p>
              Unless you tell us otherwise in writing, we may name you as a client and show a
              screenshot, a short description and a link to your site in our{' '}
              <Link href="/portfolio">portfolio</Link>, in proposals, and on our social profiles. We
              will never publish confidential information, commercial figures, or anything from a
              site that has not launched. Ask us to remove your project at any time and we will.
            </p>
            <p>
              We do not put a credit link in your site&apos;s footer unless you offer one, and we
              never make it a condition of the price.
            </p>

            <h2 id="warranty">Warranties and what we fix</h2>
            <p>
              We warrant that we will carry out the work with reasonable care and skill, by people
              competent to do it, and that the delivered work will substantially match the agreed
              scope.
            </p>
            <p>
              For 30 days after launch we will fix, free of charge, any defect in work we built —
              broken functionality, a template that renders incorrectly, a form that does not send.
              That warranty does not cover new features, changes of mind, content edits made by you
              or another party, breakage caused by third-party updates or by plugins we did not
              install, hosting failures, or sites modified by someone else after handover.
            </p>
            <p>
              Beyond that, work is delivered as it stands. We do not warrant that a site will be
              free of every bug, that it will rank in any particular position in a search engine,
              that traffic or revenue will reach any level, or that it will be available without
              interruption. Anyone who promises you those things is guessing.
            </p>

            <h2 id="liability">Limitation of liability</h2>
            <p>
              Nothing in these terms limits liability that cannot lawfully be limited, including
              liability for death or personal injury caused by negligence, or for fraud.
            </p>
            <p>Subject to that:</p>
            <ul>
              <li>
                we are not liable for indirect or consequential loss, loss of profit, loss of
                revenue, loss of business, loss of goodwill, or loss or corruption of data;
              </li>
              <li>
                our total liability arising out of any project is limited to the fees you paid us
                for that project in the twelve months before the claim arose;
              </li>
              <li>
                we are not liable for loss caused by your own changes to the site, by another
                supplier, by a third-party service, or by your failure to maintain the site after
                handover.
              </li>
            </ul>
            <p>
              Backups are part of every care plan we run. If you are not on a care plan, keeping your
              own backups is your responsibility.
            </p>

            <h2 id="confidentiality">Confidentiality</h2>
            <p>
              Each side agrees to keep the other&apos;s non-public information confidential and to
              use it only for the project. That covers your business plans, data, credentials and
              anything else you share with us, and it survives the end of the engagement. We are
              happy to sign your own non-disclosure agreement if you have one.
            </p>

            <h2 id="termination">Termination</h2>
            <p>
              Either of us may end a project by giving 14 days&apos; written notice. Either of us may
              end it immediately if the other commits a material breach and does not put it right
              within 14 days of being asked to.
            </p>
            <p>
              On termination you pay for all work completed and all costs committed up to that date.
              Deposits already paid are not refundable. Once the final balance is settled we hand
              over the work completed to that point, along with the credentials and files that
              belong to you — cleanly, and without argument.
            </p>
            <p>
              Care plans can be cancelled by either side before the next billing date. We do not
              lock support into annual contracts.
            </p>

            <h2 id="force-majeure">Events outside our control</h2>
            <p>
              Neither of us is in breach for delay or failure caused by events beyond reasonable
              control — natural disaster, war, civil unrest, epidemic, nationwide internet or power
              failure, or the collapse of a third-party platform. If such an event occurs we will
              tell you, keep you updated, and agree a revised timeline.
            </p>

            <h2 id="governing-law">Governing law</h2>
            <p>
              These terms and any project agreement are governed by the laws of the Islamic Republic
              of Pakistan, and the courts of Islamabad have exclusive jurisdiction over any dispute.
            </p>
            <p>
              Before anyone goes near a court, both sides agree to raise the issue in writing and
              try in good faith to settle it directly for at least 30 days. In our experience almost
              everything is resolved by a phone call and a revised plan.
            </p>

            <h2 id="changes">Changes to these terms</h2>
            <p>
              We may update this page as our services change. The version that applies to your
              project is the one in force on the date your project agreement was signed or your
              quote accepted; we will not change the rules on you mid-project. The date at the top
              shows when this page was last revised.
            </p>
            <p>
              If any part of these terms is found unenforceable, the rest stays in force. Failing to
              enforce a term on one occasion does not waive it.
            </p>

            <h2 id="contact">Contact</h2>
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
                Questions about a specific clause before you sign? Ask us on the{' '}
                <Link href="/contact">contact page</Link>. How we handle your data is set out in our{' '}
                <Link href="/privacy-policy">privacy policy</Link>.
              </p>
            </div>
          </article>
        </Container>
      </section>

      <PageCta
        title="Clear terms, clear scope, clear price"
        sub="Send us your brief and see it for yourself — a written scope and a fixed figure before anyone starts building."
      />
    </>
  );
}
