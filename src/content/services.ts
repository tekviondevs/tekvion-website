import type { Service, ServiceCategory } from './types';
import { designServices } from './services/design';
import { developmentServices } from './services/development';
import { automationServices } from './services/automation';
import { growthServices } from './services/growth';
import { platformServices } from './services/platform';

/** Every service Tekvion Innovations offers, in display order. */
export const services: Service[] = [
  ...designServices,
  ...developmentServices,
  ...automationServices,
  ...growthServices,
  ...platformServices,
];

export const serviceCategories: ServiceCategory[] = [
  'Design',
  'Development',
  'Automation & CRM',
  'Growth & Optimisation',
  'Platform & Support',
];

export const servicesByCategory: { category: ServiceCategory; services: Service[] }[] =
  serviceCategories.map((category) => ({
    category,
    services: services.filter((service) => service.category === category),
  }));

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}

/** Services surfaced in the homepage "What We Offer" grid and the footer. */
export const featuredServices: Service[] = services.filter((service) => service.featured);
