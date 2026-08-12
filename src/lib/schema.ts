import { createElement, Fragment, type ReactElement } from 'react';
import type { BlockNode, BlogPost, Faq, Project, Service, TeamMember } from '@/content/types';
import {
  SITE_URL,
  absoluteUrl,
  contact,
  defaultDescription,
  defaultOgImage,
  foundingYear,
  legalName,
  siteName,
  socials,
} from './seo';

/* -------------------------------------------------------------------------- */
/*  JSON-LD value types (no `any`)                                            */
/* -------------------------------------------------------------------------- */

export type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[];

export interface JsonLdObject {
  [key: string]: JsonLdValue | undefined;
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress: JsonLdObject = {
  '@type': 'PostalAddress',
  streetAddress: contact.addressLine,
  addressLocality: contact.city,
  addressCountry: contact.countryCode,
};

/* -------------------------------------------------------------------------- */
/*  Builders                                                                   */
/* -------------------------------------------------------------------------- */

/** Publisher identity referenced by every other node. */
export function organization(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: siteName,
    legalName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/assets/logo-lockup-gradient.png'),
      width: 560,
      height: 129,
    },
    image: absoluteUrl(defaultOgImage.url),
    description: defaultDescription,
    foundingDate: foundingYear,
    email: contact.email,
    telephone: contact.phone,
    address: postalAddress,
    sameAs: socials.map((social) => social.href),
  };
}

/** WebSite node. No SearchAction — the site has no internal search. */
export function website(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: siteName,
    description: defaultDescription,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** LocalBusiness-flavoured node for Home and Contact. */
export function professionalService(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professionalservice`,
    name: siteName,
    legalName,
    url: SITE_URL,
    image: absoluteUrl(defaultOgImage.url),
    logo: absoluteUrl('/assets/logo-lockup-gradient.png'),
    description: defaultDescription,
    email: contact.email,
    telephone: contact.phone,
    address: postalAddress,
    priceRange: '$$',
    areaServed: 'Worldwide',
    foundingDate: foundingYear,
    knowsLanguage: ['en', 'de', 'fr', 'it', 'he', 'pl', 'nl', 'no'],
    sameAs: socials.map((social) => social.href),
    parentOrganization: { '@id': ORGANIZATION_ID },
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Site-relative path. */
  path: string;
}

/** BreadcrumbList for any nested route. Pass the full trail including Home. */
export function breadcrumbs(items: BreadcrumbItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Service node for /services/[slug]. */
export function serviceSchema(service: Service): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.title,
    category: service.category,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: 'Worldwide',
    ...(service.deliverables.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.title} deliverables`,
            itemListElement: service.deliverables.map((deliverable) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: deliverable },
            })),
          },
        }
      : {}),
  };
}

/** Rough word count for a post body — used for BlogPosting.wordCount. */
export function countWords(body: BlockNode[]): number {
  const words = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length;

  return body.reduce((total, block) => {
    switch (block.type) {
      case 'h2':
      case 'h3':
      case 'p':
        return total + words(block.text);
      case 'ul':
      case 'ol':
        return total + block.items.reduce((sum, item) => sum + words(item), 0);
      case 'quote':
        return total + words(block.text);
      case 'callout':
        return total + words(block.title) + words(block.text);
      case 'code':
        return total + words(block.code);
      case 'table':
        return (
          total +
          block.headers.reduce((sum, header) => sum + words(header), 0) +
          block.rows.reduce(
            (sum, row) => sum + row.reduce((cells, cell) => cells + words(cell), 0),
            0,
          )
        );
      default:
        return total;
    }
  }, 0);
}

/** BlogPosting node for /blog/[slug]. */
export function blogPosting(post: BlogPost, author: TeamMember): JsonLdObject {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: 'en',
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: countWords(post.body),
    timeRequired: `PT${post.readingMinutes}M`,
    image: absoluteUrl(defaultOgImage.url),
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      url: absoluteUrl(`/about#${author.slug}`),
      ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
    },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** CreativeWork node for a portfolio case study. */
export function creativeWork(project: Project): JsonLdObject {
  const url = absoluteUrl(`/portfolio/${project.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#creativework`,
    name: project.name,
    headline: `${project.name} — ${project.descriptor}`,
    description: project.summary,
    url,
    sameAs: project.url,
    inLanguage: project.languages,
    genre: project.industry,
    keywords: [project.stack, ...project.tech].join(', '),
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** FAQPage node — only ever built from real, published answers. */
export function faqPage(faqs: Faq[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  Renderer                                                                   */
/* -------------------------------------------------------------------------- */

export interface JsonLdProps {
  /** One node, or several to emit as a @graph-free list of script tags. */
  schema: JsonLdObject | JsonLdObject[];
  /** Stable id so React does not remount the tag between navigations. */
  id?: string;
}

/**
 * Renders JSON-LD into the document. Written with createElement rather than JSX
 * so the SEO helpers can stay in a plain `.ts` module. The payload is always
 * our own typed data, and `<` is escaped before it reaches the DOM.
 */
export function JsonLd({ schema, id }: JsonLdProps): ReactElement {
  const nodes = Array.isArray(schema) ? schema : [schema];

  return createElement(
    Fragment,
    null,
    ...nodes.map((node, index) =>
      createElement('script', {
        key: id ? `${id}-${index}` : index,
        type: 'application/ld+json',
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(node).replace(/</g, '\\u003c'),
        },
      }),
    ),
  );
}
