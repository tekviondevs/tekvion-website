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
    portfolio: 'https://shaharyar.tekvion.net',
    bio: 'Shaharyar co-founded Tekvion and owns its technical architecture. He is a WordPress developer and a MERN developer: custom themes, WooCommerce stores and multilingual, right-to-left builds such as the Hebrew e-learning platform Afik on one side, React and Node applications on the other. He decides which stack a project belongs on, builds the harder parts himself, and holds the line on performance and Core Web Vitals. He also handles AI and LLM integrations, migrations, hosting environments and the security side of every care plan.',
    focus: [
      'WordPress development & architecture',
      'MERN stack development (React, Node)',
      'Performance and Core Web Vitals',
      'AI / LLM and API integrations',
    ],
  },
  {
    slug: 'ghulam-suleman',
    name: 'Ghulam Suleman',
    role: 'Bubble.io & MERN Stack Developer · Agency Partner',
    initials: 'GS',
    photo: '/team/ghulam-suleman.jpg',
    bio: 'Ghulam is an expert Bubble.io and MERN stack developer, and our agency partner on product work. He has built and shipped Bubble.io applications across our portfolio — Tylo AI, Mocki, InkGenX, Swayed, BostMD and LineaScore — covering data structures, workflows, API integrations and admin panels. On the MERN side he worked on The Boomerang’s custom rebuild, moving a live Bubble product onto React and Node with a Supabase database. He is usually the person who spots the edge case everyone else missed.',
    focus: [
      'Bubble.io application development',
      'MERN stack development (React, Node)',
      'Database design and data modelling',
      'API integrations and workflow automation',
    ],
  },
];

/** Look up a single team member by slug. Returns `undefined` if not found. */
export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
