import type { Metadata } from 'next';
import {
  Badge,
  Button,
  Icon,
  LitWrap,
  SectionHeading,
  ServiceCard,
  Stat,
  Underline,
} from '@/components/ds';
import { Breadcrumbs, PageCta, SectionBand } from '@/components/site';
import { ProcessList, TeamCard } from '@/components/site/about';
import '@/components/site/about/about.css';
import {
  company,
  contact,
  languagesShipped,
  processSteps,
  proofPoints,
  values,
} from '@/content/company';
import { industries } from '@/content/industries';
import { teamMembers } from '@/content/team';
import {
  JsonLd,
  breadcrumbs as breadcrumbSchema,
  type JsonLdObject,
} from '@/lib/schema';
import { SITE_URL, absoluteUrl, buildMetadata } from '@/lib/seo';

const PATH = '/about';

const description =
  'Meet the team behind Tekvion Innovations, a founder-led web studio in Islamabad building on WordPress and Bubble.io since 2021 — 49+ projects, 4 continents.';

export const metadata: Metadata = buildMetadata({
  title: 'About Tekvion Innovations — Our Story & Team',
  description,
  path: PATH,
});

/* Presentation-only icon mapping for the industries strip. The content layer
   stores no glyph, and every name below is registered in the Icon registry. */
const industryIcons: Record<string, string> = {
  'coaching-personal-brands': 'users',
  'healthcare-clinics': 'heart-pulse',
  'real-estate-property': 'building-2',
  'education-e-learning': 'graduation-cap',
  'saas-ai-products': 'brain',
  'community-non-profit': 'heart',
  'ecommerce-retail': 'shopping-cart',
  'recruitment-hr': 'briefcase',
};

export default function AboutPage() {
  /* The root layout already emits the full Organization node on every page, so
     this page must NOT emit a second one. The employment relationship is
     expressed from the Person side instead — each member points `worksFor` at
     the same Organization @id — which keeps one company entity on the page. */
  const people: JsonLdObject[] = teamMembers.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl(`${PATH}#${member.slug}`),
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: absoluteUrl(member.photo),
    url: absoluteUrl(`${PATH}#${member.slug}`),
    knowsAbout: member.focus,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  }));

  const aboutPage: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}${PATH}#aboutpage`,
    url: absoluteUrl(PATH),
    name: `About ${company.name}`,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  };

  const trail = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: PATH },
  ]);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <SectionBand tone="dark" space="hero" labelledBy="about-title" className="about-hero">
        <Breadcrumbs
          items={[{ name: 'About', path: PATH }]}
          on="dark"
          includeSchema={false}
          className="about-hero__crumbs"
        />

        <Badge tone="dark" icon={<Icon name="map-pin" size={14} />}>
          Est. {company.foundedYear} · {contact.city}, {contact.country}
        </Badge>

        <h1 id="about-title" className="about-hero__title mt-6">
          We Design &amp; Build <Underline delay={0.3}>for Growth</Underline>
        </h1>

        <p className="about-hero__lead">
          {company.name} is a founder-led web design and development studio. We design, build,
          launch and maintain websites and web applications for coaching brands, clinics, property
          firms, e-commerce stores, education platforms, SaaS companies and AI products — on the
          two stacks we know deeply, and with a team that stays on after launch.
        </p>

        <div className="cluster about-hero__actions">
          <Button href="/quote" size="lg" arrow>
            Start a project
          </Button>
          <Button href="/portfolio" size="lg" variant="secondary-dark">
            See our work
          </Button>
        </div>
      </SectionBand>

      {/* -------------------------------------------------------- Proof band */}
      <SectionBand tone="light" labelledBy="about-proof-title">
        <SectionHeading
          id="about-proof-title"
          emphasis="the Studio"
          kicker="Verified figures only — every one of them maps to work you can open in the portfolio:"
        >
          The Numbers Behind
        </SectionHeading>

        <ul className="about-proof">
          {proofPoints.map((point) => (
            <li key={point.label}>
              <LitWrap on="light">
                <Stat value={point.value} label={point.label} on="light" />
              </LitWrap>
            </li>
          ))}
        </ul>

        <p className="about-proof__note muted">
          No invented metrics, no borrowed case studies, no stock testimonials.
        </p>
      </SectionBand>

      {/* ------------------------------------------------------------- Story */}
      <SectionBand tone="dark" labelledBy="about-story-title">
        <div className="about-story">
          <div className="about-story__copy">
            <h2 id="about-story-title" className="about-story__title">
              Built by developers who <Underline>speak plainly</Underline>
            </h2>

            <p>
              We started Tekvion in {company.foundedYear} because too many businesses were paying
              for websites they could not update, did not own and could not measure. Our answer was
              a studio built on plain language: a written scope before a line of code, weekly
              progress you can actually see, and code and credentials that belong to you at the end.
            </p>
            <p>
              Forty-nine projects later that has not changed. We have delivered across four
              continents, with live clients in more than ten countries, and we have shipped
              production sites in eight languages — including a right-to-left Hebrew e-learning
              platform and multi-language clinic and coaching sites. Most of our clients have been
              with us for two years or more, which is the number we care about most.
            </p>
            <p>
              We work on two stacks and know both deeply rather than claiming to cover everything.
              WordPress carries the majority of our builds: custom themes and plugins, WooCommerce
              stores, LMS and membership platforms, and multi-location service businesses.
              Bubble.io carries our application work: marketplaces, AI and LLM products, reporting
              and PDF engines, and the admin panels behind native mobile apps. Where a project needs
              both, we build a hybrid — a fast marketing front end with the application on a
              subdomain.
            </p>

            <div className="about-story__actions">
              <Button href="/services" variant="secondary-dark" arrow>
                What we do
              </Button>
            </div>
          </div>

          <LitWrap on="dark">
            <div className="about-story__panel">
              <ul className="about-facts">
                <li>
                  <span className="about-facts__label">
                    <Icon name="layers" size={16} /> Delivery stacks
                  </span>
                  <p className="about-facts__value">
                    <strong>42</strong> WordPress builds and <strong>7</strong> Bubble.io products,
                    plus hybrid architectures that pair the two.
                  </p>
                </li>
                <li>
                  <span className="about-facts__label">
                    <Icon name="languages" size={16} /> Languages shipped
                  </span>
                  <ul className="about-facts__chips">
                    {languagesShipped.map((language) => (
                      <li key={language} className="tk-chip">
                        {language}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="about-facts__label">
                    <Icon name="globe" size={16} /> Where we work
                  </span>
                  <p className="about-facts__value">
                    Based at {contact.addressLine}, {contact.city}, working remotely with clients on
                    four continents and in more than ten countries. Flexible hours to overlap with
                    European and North American working days.
                  </p>
                </li>
                <li>
                  <span className="about-facts__label">
                    <Icon name="handshake" size={16} /> After launch
                  </span>
                  <p className="about-facts__value">
                    Care plans covering staged updates, off-site backups, security monitoring and a
                    written monthly report — the reason the average client stays two years or more.
                  </p>
                </li>
              </ul>
            </div>
          </LitWrap>
        </div>
      </SectionBand>

      {/* -------------------------------------------------------------- Team */}
      <SectionBand tone="light" id="team" labelledBy="about-team-title">
        <SectionHeading
          id="about-team-title"
          emphasis="Tekvion"
          kicker="Three people, no account managers. Both founders work on every project:"
        >
          The People Behind
        </SectionHeading>

        <ul className="about-team">
          {teamMembers.map((member) => (
            <li key={member.slug}>
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </SectionBand>

      {/* ------------------------------------------------------------ Values */}
      <SectionBand tone="dark" labelledBy="about-values-title">
        <SectionHeading
          id="about-values-title"
          onDark
          emphasis="Stand For"
          kicker="The principles behind every project:"
        >
          What We
        </SectionHeading>

        <ul className="about-values">
          {values.map((value) => (
            <li key={value.title}>
              <ServiceCard on="dark" title={value.title}>
                {value.description}
              </ServiceCard>
            </li>
          ))}
        </ul>
      </SectionBand>

      {/* ----------------------------------------------------------- Process */}
      <SectionBand tone="light" labelledBy="about-process-title">
        <SectionHeading
          id="about-process-title"
          emphasis="Work"
          kicker="Four stages, the same on every project — so you always know what happens next:"
        >
          How We
        </SectionHeading>

        <ProcessList steps={processSteps} />
      </SectionBand>

      {/* -------------------------------------------------------- Industries */}
      <SectionBand tone="industries" labelledBy="about-industries-title">
        <SectionHeading
          id="about-industries-title"
          onDark
          emphasis="Serve"
          kicker="Eight verticals where we have delivered real, live work:"
        >
          Industries We
        </SectionHeading>

        <ul className="about-industries">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <LitWrap on="dark">
                <div className="about-industries__card">
                  <span className="about-industries__icon">
                    <Icon name={industryIcons[industry.slug] ?? 'briefcase'} size={20} />
                  </span>
                  <h3 className="about-industries__title">{industry.title}</h3>
                  <p className="about-industries__copy">{industry.description}</p>
                </div>
              </LitWrap>
            </li>
          ))}
        </ul>

        <div className="cluster about-industries__actions">
          <Button href="/portfolio" size="lg" variant="secondary-dark" arrow>
            Browse the portfolio
          </Button>
        </div>
      </SectionBand>

      <PageCta
        title="Work with the people who build it"
        sub="Tell us what you are building and we will come back with a plan, a timeline and a fixed price — usually within one working day."
      />

      <JsonLd schema={[aboutPage, ...people, trail]} id="about" />
    </>
  );
}
