import type { Industry } from '@/content/types';

/**
 * The eight verticals we actively serve, in the order used by the Industries
 * band on the home page. Every name in `clients` is a real delivered client
 * taken from the Tekvion portfolio record — nothing here is invented.
 */
export const industries: Industry[] = [
  {
    slug: 'coaching-personal-brands',
    title: 'Coaching & Personal Brands',
    description: 'Premium coaching websites that convert visitors into clients.',
    clients: [
      'Cloverfour',
      'In Harmony Education',
      'Your Brain Coach D',
      'Elizabeth O’Neill',
      'Forever Day One',
    ],
  },
  {
    slug: 'healthcare-clinics',
    title: 'Healthcare & Clinics',
    description: 'Trust-led websites for clinics, doctors, and care providers.',
    clients: [
      'Mediseo',
      'Tagesklinik Waldfriede',
      'Mothers Assist Elderly',
      'BostMD',
      'MHTT',
      'Akademia Falizycia',
    ],
  },
  {
    slug: 'real-estate-property',
    title: 'Real Estate & Property',
    description: 'Listings, lead-gen, and buyer-journey websites.',
    clients: ['Ronival', 'DeLong Investments LLC', 'Casa Forte'],
  },
  {
    slug: 'education-e-learning',
    title: 'Education & E-Learning',
    description:
      'LMS, certification, and course-catalog platforms (incl. multilingual).',
    clients: [
      'Afik',
      'Forever Day One',
      'In Harmony Education',
      'Universal Spirituality',
    ],
  },
  {
    slug: 'saas-ai-products',
    title: 'SaaS & AI Products',
    description: 'Modern marketing sites and full Bubble.io applications.',
    clients: ['Tylo AI', 'Mocki', 'InkGenX', 'LineaScore', 'Boomerang'],
  },
  {
    slug: 'community-non-profit',
    title: 'Community & Non-Profit',
    description: 'Membership, religious, and community organisation sites.',
    clients: [
      'Dar ul Arqam (DUACCN)',
      'Universal Spirituality',
      'Apollo Kulturhaus',
      'SV Bad Heilbrunn',
    ],
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-Commerce & Retail',
    description: 'WooCommerce and multi-category stores built to sell.',
    clients: ['Tapi Carpets & Floors', 'Wegets', 'Loofys', 'Aromashop'],
  },
  {
    slug: 'recruitment-hr',
    title: 'Recruitment & HR',
    description: 'Executive-search and SaaS recruitment platforms.',
    clients: ['E-Mobility Search', 'Ubcruit', 'Vitacode'],
  },
];

/** Look up a single industry by slug. Returns `undefined` if not found. */
export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
