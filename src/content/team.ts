import type { TeamMember } from '@/content/types';

/**
 * The three people behind Tekvion Innovations.
 *
 * Photos: no portraits have been supplied yet. A placeholder ships at each
 * `photo` path and the UI falls back to a branded initials avatar on error.
 * Dropping a real JPG at the same path is the only step needed to swap it in.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: 'jahanzaib-abid',
    name: 'Jahanzaib Abid',
    role: 'Chief Executive Officer',
    initials: 'JA',
    photo: '/team/jahanzaib-abid.jpg',
    bio: 'Jahanzaib co-founded Tekvion in 2021 and leads client strategy, delivery and partnerships. He runs the discovery stage on most projects, turning a rough idea into a written brief, sitemap and scope the rest of the team can build against. He has shaped work for coaching brands, healthcare marketing agencies, executive-search firms and community organisations across Europe, North America and Australia, and stays the point of contact long after launch — a large part of why so many clients stay with us for years.',
    focus: [
      'Client strategy & discovery',
      'Scoping and project delivery',
      'Agency partnerships',
      'Brand and conversion direction',
    ],
  },
  {
    slug: 'shaharyar-ansari',
    name: 'Shaharyar Ansari',
    role: 'Chief Technology Officer',
    initials: 'SA',
    photo: '/team/shaharyar-ansari.jpg',
    bio: 'Shaharyar co-founded Tekvion and owns its technical architecture. He decides which stack a project belongs on, builds the harder parts himself, and holds the line on performance and Core Web Vitals. His work spans custom WordPress themes and WooCommerce stores, multilingual and right-to-left builds such as the Hebrew e-learning platform Afik, and full Bubble.io applications with multi-model AI and LLM integrations behind them. He also handles migrations, hosting environments and the security side of every care plan.',
    focus: [
      'Technical architecture',
      'WordPress & Bubble.io engineering',
      'Performance and Core Web Vitals',
      'AI / LLM and API integrations',
    ],
  },
  {
    slug: 'suleman-buzdar',
    name: 'Suleman Buzdar',
    role: 'Senior Web Developer & Agency Partner',
    initials: 'SB',
    photo: '/team/suleman-buzdar.jpg',
    bio: 'Suleman is our senior web developer and agency partner, responsible for front-end and full-stack delivery. He builds custom WordPress themes and plugins, turns design files into responsive, accessible interfaces, and runs quality assurance before anything reaches staging — cross-browser checks, real-device testing, forms, redirects and accessibility passes. He has delivered e-commerce catalogues, multi-location service sites and content-heavy publishing builds, and is usually the person who spots the edge case everyone else missed.',
    focus: [
      'Front-end and full-stack development',
      'WordPress theme & plugin engineering',
      'Responsive and accessible interfaces',
      'Quality assurance and pre-launch testing',
    ],
  },
];

/** Look up a single team member by slug. Returns `undefined` if not found. */
export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
