import type { Project, ProjectStack } from './types';

/**
 * Every delivered project in the Tekvion Innovations portfolio.
 *
 * Sourced verbatim (then tightened into our voice) from the internal portfolio
 * records. Rules applied here:
 *  - Projects the record marks "Needs a Redesign" or "Coming soon" are NOT
 *    listed at all — we never link to them as showcase work.
 *  - Five live builds whose write-ups are still pending internally are listed
 *    for completeness with a short, honest note and are never featured.
 *  - No invented metrics, quotes, people or results appear anywhere below.
 */
export const projects: Project[] = [
  /* ------------------------------------------------------------------ */
  /*  WordPress                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: 'cloverfour',
    name: 'Cloverfour',
    descriptor: 'Coaching & Self-Storage Consultancy',
    url: 'https://www.cloverfour.eu',
    industry: 'Coaching & Personal Development',
    stack: 'WordPress',
    tech: ['WordPress', 'Custom theme', 'Lead capture'],
    languages: ['English'],
    country: 'Europe',
    summary:
      'A multi-service consultancy website combining executive coaching, sales and marketing training, and specialist self-storage industry consulting. Built to position the founder as a thought-leader and to convert business owners into coaching and training clients, with dedicated service pages, a training catalogue, coaching packages, speaker booking and a blog.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'conversion-rate-optimisation',
      'seo-services',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Cloverfour Case Study | Coaching Consultancy Site',
      metaDescription:
        'How we built Cloverfour: one WordPress site carrying executive coaching, sales training and specialist self-storage consulting without splitting the brand.',
      challenge: [
        'Cloverfour is three businesses wearing one name. The founder coaches executives, runs sales and marketing training, and consults inside the self-storage industry — an unusually specialist niche. Each audience arrives with a different problem and a different vocabulary.',
        'The risk with a portfolio that broad is a website that reads as a list of things the owner can do, rather than as authority in anything. We needed a structure that let a self-storage operator and a coaching client each land on a page that felt written for them, while still building one recognisable personal brand.',
      ],
      approach: [
        {
          heading: 'One brand, three routes in',
          body: [
            'We mapped the site around the three practice areas rather than around a generic services page. Coaching, training and self-storage consulting each get their own top-level route with its own supporting pages, so every audience can go deep without wading through the other two.',
            'The homepage does the introduction work: who the founder is, the range of the practice, and three clear doors. Nothing on it tries to sell all three offers at once.',
          ],
        },
        {
          heading: 'Packaging the offer',
          body: [
            'Coaching packages and the training catalogue are laid out as concrete, comparable offers with what is included, who they suit and how to start — the questions buyers actually ask before an enquiry. Speaker booking sits alongside them as its own enquiry route, because event organisers are a separate buying audience with a separate timeline.',
            'Every page ends in a single, obvious next step. We deliberately kept one primary call to action per page instead of competing buttons.',
          ],
        },
        {
          heading: 'Authority content',
          body: [
            'The blog is set up as the thought-leadership engine that the positioning depends on, with a clean article template, structured headings and internal links back into the relevant practice area. Long-form articles on self-storage operations pull in exactly the visitors the consulting arm wants.',
            'We built the whole thing on WordPress with a custom theme so the founder can publish and restructure without needing us in the loop.',
          ],
        },
      ],
      outcome: [
        'Cloverfour now runs as a single credible consultancy brand with three self-contained practice areas, rather than as a scattered list of services. Each one has its own landing route, its own proof and its own enquiry path.',
        'The self-storage consulting arm gave us genuine sector knowledge that we later carried into our build for Lock Stock Self-Storage — one of the reasons that vertical is a real strength for us rather than a claim.',
      ],
      highlights: [
        'Three distinct practice areas — executive coaching, sales and marketing training, self-storage consulting — on one WordPress site',
        'Dedicated coaching package pages and a structured training catalogue',
        'Separate speaker-booking enquiry route for event organisers',
        'Blog architecture built for thought-leadership publishing and internal linking',
        'Custom WordPress theme the client edits without developer support',
      ],
    },
  },
  {
    slug: 'afik',
    name: 'Afik',
    descriptor: 'Hebrew Certification Academy',
    url: 'https://afikil.co.il/',
    industry: 'Education & E-learning',
    stack: 'WordPress',
    tech: ['WordPress', 'RTL theme', 'Course catalogue'],
    languages: ['Hebrew'],
    country: 'Israel',
    summary:
      'A Hebrew-language e-learning platform delivering certification courses in real estate appraisal, mortgage advisory, business valuation and insurance. Built with a right-to-left layout throughout, a structured course catalogue and a built-in financial dictionary for career-focused learners across Israel.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'custom-website-development',
      'ui-ux-design',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Afik Case Study | Hebrew RTL E-Learning Platform',
      metaDescription:
        'How we built Afik: a Hebrew right-to-left e-learning platform for real estate and finance certification, with a course catalogue and financial dictionary.',
      challenge: [
        'Afik trains professionals in real estate appraisal, mortgage advisory, business valuation and insurance, and issues certifications that carry weight in their careers. The audience is decisive and comparison-driven: they want to know the syllabus, the certification, the commitment and the credibility before they enrol.',
        'The build had to be fully Hebrew and fully right-to-left. Retrofitting RTL onto a left-to-right design is where most builds fail — navigation, form fields, icons, list markers, tables and typography all have to be reasoned about in mirrored order, not flipped as an afterthought.',
      ],
      approach: [
        {
          heading: 'Right-to-left as the default, not a plugin',
          body: [
            'We treated Hebrew RTL as the native direction of the whole site rather than as a translation layer applied afterwards. Layout, navigation order, spacing, alignment, iconography and form controls were all set up in mirrored reading order, and typography was chosen and tuned for Hebrew rather than inherited from a Latin type scale.',
            'The result reads as a site designed in Hebrew, which is the only standard that matters to the audience.',
          ],
        },
        {
          heading: 'A catalogue that answers enrolment questions',
          body: [
            'Courses are organised into a structured catalogue grouped by professional track, so a visitor who already knows they want mortgage advisory does not have to browse appraisal content to find it.',
            'Each course page carries the substance a prospective student needs to commit — what the certification covers, who it is for, and how to enrol — laid out in a consistent template so different courses can be compared like for like.',
          ],
        },
        {
          heading: 'The financial dictionary',
          body: [
            'We built the financial dictionary as a first-class section rather than a buried page: a structured, browsable reference of the terminology these professions run on.',
            'It does two jobs. It genuinely helps learners, and it gives the site a body of specific, searchable Hebrew terminology that supports the academy as an authority in its field.',
          ],
        },
      ],
      outcome: [
        'Afik runs as a complete Hebrew-language academy: a browsable certification catalogue, structured course pages and a reference dictionary, all in a native RTL interface.',
        'It is the build behind our right-to-left and multilingual experience, and it sits alongside our German, Polish, Dutch, Italian and Norwegian work as proof that we ship in the language the audience actually reads.',
      ],
      highlights: [
        'Entire interface built natively in Hebrew, right-to-left — navigation, forms, typography and layout',
        'Certification tracks covering real estate appraisal, mortgage advisory, business valuation and insurance',
        'Structured course catalogue with a consistent, comparable course-page template',
        'Built-in financial dictionary as a standalone reference section',
        'WordPress build with an RTL-ready theme the academy maintains itself',
      ],
    },
  },
  {
    slug: 'wegets',
    name: 'Wegets',
    descriptor: 'Multi-Category Deals Store',
    url: 'https://wegets.com/',
    industry: 'E-commerce & Retail',
    stack: 'WordPress',
    tech: ['WordPress', 'WooCommerce'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WooCommerce-powered store aggregating discounted electronics, fashion, home goods and lifestyle products. Designed for fast browsing across wide product verticals, with a deals-driven layout aimed at value-seeking shoppers and a catalogue structure that holds up as the range grows.',
    serviceSlugs: [
      'ecommerce-development',
      'woocommerce-development',
      'wordpress-development',
      'conversion-rate-optimisation',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Wegets Case Study | WooCommerce Retail Store',
      metaDescription:
        'How we built Wegets on WooCommerce: a deals-led store spanning electronics, fashion and home goods, structured for fast browsing across a wide catalogue.',
      challenge: [
        'Wegets sells across electronics, fashion, home goods and lifestyle at discount prices. Wide-catalogue stores have a specific failure mode: the more categories you add, the harder it becomes for a shopper to find anything, and the more the store feels like a warehouse instead of a shop.',
        'The commercial pitch is the deal, so the layout had to lead with price and offer without collapsing into a wall of red badges that shoppers stop believing.',
      ],
      approach: [
        {
          heading: 'Catalogue architecture first',
          body: [
            'Before any design work we set the category and attribute structure, because that is what decides whether a wide store stays navigable. Categories were built to be browsed top-down and filtered sideways, so a shopper can move from a broad vertical to a specific product without dead ends.',
            'Product data was structured so that filtering and sorting keep working as new verticals get added, rather than needing a rebuild each time the range expands.',
          ],
        },
        {
          heading: 'A deals-led storefront',
          body: [
            'The homepage and category pages are laid out around offers — clear pricing, visible savings and fast scanning — because that is what this audience is shopping for. We kept the visual treatment of discounts consistent and restrained so it reads as a genuine price position rather than noise.',
            'Listing pages were designed for speed of comparison: enough information to judge a product from the grid, and a short path from grid to basket.',
          ],
        },
        {
          heading: 'WooCommerce done properly',
          body: [
            'The store runs on WordPress with WooCommerce, configured for a large multi-category range: clean product templates, sensible taxonomy, and a checkout path kept as short as the platform allows.',
            'Everything is editable by the client. Adding a category, running an offer or reorganising a vertical does not require a developer.',
          ],
        },
      ],
      outcome: [
        'Wegets operates as a broad, deals-driven store where the breadth is an asset rather than a navigation problem, and where new verticals slot into an existing structure.',
        'It is one of the WooCommerce builds behind our e-commerce practice, alongside the Dutch store we built for Loofys and the Norwegian catalogue for Aromashop.',
      ],
      highlights: [
        'WooCommerce store spanning electronics, fashion, home goods and lifestyle',
        'Category and attribute architecture designed for a wide, growing catalogue',
        'Deals-led homepage and listing layouts built for fast comparison',
        'Product templates and taxonomy the client manages without developer help',
        'Built on WordPress and WooCommerce end to end',
      ],
    },
  },
  {
    slug: 'in-harmony-education',
    name: 'In Harmony Education',
    descriptor: 'Conscious Parenting Coaching Brand',
    url: 'https://inharmonyeducation.com/',
    industry: 'Coaching & Personal Development',
    stack: 'WordPress',
    tech: ['WordPress', 'Programme landing pages', 'Product sales'],
    languages: ['English'],
    country: 'International',
    summary:
      'A warm, conversion-focused website for a coaching brand serving mothers of daughters. It showcases the signature Mother\'s Mirror 6-week and 6-month programmes, journaling products and one-to-one mentoring through a layout built around trust and emotional storytelling.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'landing-page-development',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'ubcruit',
    name: 'Ubcruit',
    descriptor: 'Automated Job Application Platform',
    url: 'https://www.ubcruit.work/',
    industry: 'Recruitment & HR',
    stack: 'WordPress',
    tech: ['WordPress', 'SaaS marketing layout'],
    languages: ['English'],
    country: 'International',
    summary:
      'A modern SaaS-style marketing site for a recruitment-tech platform that auto-applies to jobs on the user\'s behalf. The design leads with the product\'s set-and-forget value proposition and onboards new job seekers into the service.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'landing-page-development',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'your-brain-coach-d',
    name: 'Your Brain Coach D',
    descriptor: 'Neuroscience-Based Executive Coaching',
    url: 'https://yourbraincoachd.com/',
    industry: 'Coaching & Personal Development',
    stack: 'WordPress',
    tech: ['WordPress', 'Lead capture'],
    languages: ['English'],
    country: 'International',
    summary:
      'A premium coaching website for a brand serving women leaders and corporate teams. It showcases the proprietary Rewire Your Brain Method, corporate workshops and one-to-one coaching with a calm, professional aesthetic that reflects clinical credibility.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'brand-identity-design',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'elizabeth-oneill',
    name: 'Elizabeth O\'Neill',
    descriptor: 'Technical Leadership Coaching',
    url: 'https://elizabethoneill.co.uk/',
    industry: 'Coaching & Personal Development',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'United Kingdom',
    summary:
      'A clean personal-brand website for a coach specialising in engineers moving into leadership roles. Minimal design, focused copy and unambiguous calls to action drive enquiries from senior technology professionals.',
    serviceSlugs: ['website-design', 'wordpress-development', 'ui-ux-design'],
    featured: false,
  },
  {
    slug: 'tapi',
    name: 'Tapi Carpets & Floors',
    descriptor: 'UK National Flooring Retailer',
    url: 'https://www.tapi.co.uk/',
    industry: 'E-commerce & Retail',
    stack: 'WordPress',
    tech: ['WordPress', 'Store locator', 'Booking flows'],
    languages: ['English'],
    country: 'United Kingdom',
    summary:
      'A large-scale retail website for one of the UK\'s leading flooring brands, supporting 220+ showrooms. It carries product catalogues across carpets, vinyl, laminate, LVT and engineered wood, plus booking flows for free home visits, fitting and four-year interest-free finance.',
    serviceSlugs: [
      'wordpress-development',
      'custom-website-development',
      'ecommerce-development',
      'website-speed-optimisation',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Tapi Case Study | UK Flooring Retail Website Build',
      metaDescription:
        'Our work on Tapi Carpets & Floors: a large-scale WordPress retail site supporting 220+ UK showrooms, with product catalogues, home visits and finance flows.',
      challenge: [
        'Tapi is one of the UK\'s leading flooring brands, trading from more than 220 showrooms. A retailer at that scale has to solve two problems at once: present a deep product catalogue across carpets, vinyl, laminate, LVT and engineered wood, and route every visitor to a physical showroom or a home visit.',
        'Flooring is also a considered purchase that almost nobody completes in a browser. Customers want to see samples, get measured, and understand finance before they commit — so the site has to sell the visit, not just the product.',
      ],
      approach: [
        {
          heading: 'Catalogue across five product families',
          body: [
            'We worked within a catalogue structure that separates carpets, vinyl, laminate, LVT and engineered wood as distinct families with their own browsing logic, because customers shop them differently: by pile and fibre in one, by plank format and finish in another.',
            'Templates were built to hold the depth of specification these ranges carry while staying scannable on a phone, which is where most of the early browsing happens.',
          ],
        },
        {
          heading: 'Showroom and home-visit routing',
          body: [
            'With 220+ showrooms, the store locator is core infrastructure rather than a footer link. Every product journey has to be able to answer "where do I see this" and "who measures my room".',
            'Booking flows for free home visits and fitting sit at the end of those journeys, so the site converts browsing into a scheduled appointment — the step that actually moves a flooring sale forward.',
          ],
        },
        {
          heading: 'Finance and reassurance',
          body: [
            'Four-year interest-free finance is a major part of the proposition, so it is explained where the decision happens rather than parked on a single terms page.',
            'The same applies to fitting, measuring and guarantees: reassurance content is placed inside the buying journey, because that is where the hesitation occurs.',
          ],
        },
      ],
      outcome: [
        'The site works as a national retail platform: a deep multi-family catalogue that always terminates in a showroom visit, a home appointment or a finance enquiry.',
        'It is the largest-scale WordPress build in our portfolio and the reference point we work from on multi-location retail, store-locator and booking-flow projects.',
      ],
      highlights: [
        'WordPress build supporting a national chain of 220+ showrooms',
        'Product catalogues across carpets, vinyl, laminate, LVT and engineered wood',
        'Store locator routing customers from product pages to their nearest showroom',
        'Booking flows for free home visits and fitting',
        'Four-year interest-free finance surfaced inside the buying journey',
      ],
    },
  },
  {
    slug: 'e-mobility-search',
    name: 'E-Mobility Search',
    descriptor: 'Specialist Executive Recruitment',
    url: 'https://e-mobilitysearch.com/',
    industry: 'Recruitment & HR',
    stack: 'WordPress',
    tech: ['WordPress', 'Lead capture'],
    languages: ['English'],
    country: 'International',
    summary:
      'A polished corporate site for a global recruitment firm focused on the e-mobility, battery and emerging-technology sectors. Sector pages across R&D, commercial and operations communicate senior-level credibility and capture leads from both candidates and hiring companies.',
    serviceSlugs: ['website-design', 'wordpress-development', 'seo-services'],
    featured: false,
  },
  {
    slug: 'ronival',
    name: 'Ronival',
    descriptor: 'Baja California Sur Property Agency',
    url: 'https://ronival.com/',
    industry: 'Real Estate & Property Finance',
    stack: 'WordPress',
    tech: ['WordPress', 'Property listings system'],
    languages: ['English'],
    country: 'Mexico',
    summary:
      'A property listings and lead-generation website covering Los Cabos, Loreto and La Paz. It combines property search, featured developments, buyer and seller services, financing assistance and relocation guides for international buyers investing in Mexico.',
    serviceSlugs: [
      'wordpress-development',
      'custom-website-development',
      'seo-services',
      'conversion-rate-optimisation',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Ronival Case Study | Mexico Real Estate Site',
      metaDescription:
        'How we built Ronival: a property search and lead-generation site for Los Cabos, Loreto and La Paz, with buyer guides for international investors in Mexico.',
      challenge: [
        'Ronival sells property across Los Cabos, Loreto and La Paz to buyers who are, for the most part, not in Mexico. An international buyer researching a second home or an investment has a longer, more anxious journey than a domestic one: financing works differently, ownership rules are unfamiliar, and the agency has to earn trust before it ever gets an enquiry.',
        'So a listings feed alone was never going to be enough. The site had to be a search tool and an education platform at the same time.',
      ],
      approach: [
        {
          heading: 'Search that respects the geography',
          body: [
            'Property search is organised around the three markets the agency covers, because a buyer looking at Los Cabos is not cross-shopping La Paz in the same session. Featured developments get their own treatment, since new-build inventory sells on the project story rather than on a single unit.',
            'Listing templates were built to answer the questions that decide an enquiry — location, type, price positioning — without burying them under gallery furniture.',
          ],
        },
        {
          heading: 'Buyer and seller journeys, kept separate',
          body: [
            'Buyer services and seller services are distinct routes with distinct content. Merging them is the common mistake in agency sites, and it leaves both audiences reading half-relevant copy.',
            'Financing assistance sits inside the buyer route where the question actually arises, rather than as an isolated page nobody navigates to.',
          ],
        },
        {
          heading: 'Relocation content as the trust layer',
          body: [
            'Relocation and buyer guides do the reassurance work that international purchases depend on: how buying in Baja California Sur works, what to expect, and what the agency handles.',
            'That content is also the site\'s organic search asset. It brings in buyers early in their research, well before they are ready to enquire, and keeps the agency present through the whole decision.',
          ],
        },
      ],
      outcome: [
        'Ronival runs as a combined property search and lead-generation platform: listings and featured developments for buyers who are ready, and structured guidance for the much larger group who are still deciding.',
        'It anchors our real estate experience alongside DeLong Investments in the US private-lending market.',
      ],
      highlights: [
        'Property search covering Los Cabos, Loreto and La Paz',
        'Featured-development presentation for new-build inventory',
        'Separate buyer-services and seller-services journeys',
        'Financing assistance and relocation guides written for international buyers',
        'WordPress build with a listings system the agency maintains',
      ],
    },
  },
  {
    slug: 'dar-ul-arqam',
    name: 'Dar ul Arqam',
    descriptor: 'Community Centre, Naperville',
    url: 'https://duaccn.com/',
    industry: 'Community & Culture',
    stack: 'WordPress',
    tech: ['WordPress', 'Events', 'Member resources'],
    languages: ['English'],
    country: 'United States',
    summary:
      'A community-organisation website for the Dar ul Arqam Community Center of Naperville, built as a hub for religious programmes, events and member resources for the local Muslim community.',
    serviceSlugs: ['website-design', 'wordpress-development', 'website-maintenance-support'],
    featured: false,
  },
  {
    slug: 'vitacode',
    name: 'Vitacode',
    descriptor: 'HR & Finance Outsourcing Partner',
    url: 'https://vitacode.ai/',
    industry: 'Recruitment & HR',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'United States',
    summary:
      'A professional B2B website for an outsourcing firm connecting US-based companies with Pakistani talent. It presents recruitment, payroll, benefits and financial advisory services through a clean, trust-building corporate layout.',
    serviceSlugs: ['website-design', 'wordpress-development', 'conversion-rate-optimisation'],
    featured: false,
  },
  {
    slug: 'delong-investments',
    name: 'DeLong Investments',
    descriptor: 'Private Money Lending for Real Estate',
    url: 'https://delonginvestmentsllc.com/',
    industry: 'Real Estate & Property Finance',
    stack: 'WordPress',
    tech: ['WordPress', 'Lead capture forms'],
    languages: ['English'],
    country: 'United States',
    summary:
      'A finance-industry website for a private money brokerage serving property flippers, landlords and BRRRR investors. Loan product pages cover 100% flip financing and DSCR rental loans, alongside proof-of-funds requests and fast underwriting.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'landing-page-development',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'the-backpack-community',
    name: 'The Backpack Community',
    descriptor: 'Mental Health Community Platform',
    url: 'https://thebackpackcommunity.com/',
    industry: 'Healthcare & Wellness',
    stack: 'WordPress',
    tech: ['WordPress', 'Sign-up capture'],
    languages: ['English'],
    country: 'International',
    summary:
      'A pre-launch landing page and registration system for an upcoming mental wellness community. It captures early sign-ups while clearly signalling crisis support resources to every visitor.',
    serviceSlugs: [
      'landing-page-development',
      'wordpress-development',
      'website-design',
      'accessibility-compliance',
    ],
    featured: false,
  },
  {
    slug: 'loofys',
    name: 'Loofys',
    descriptor: 'Plastic-Free Personal Care Store',
    url: 'https://www.loofys.nl/',
    industry: 'E-commerce & Retail',
    stack: 'WordPress',
    tech: ['WordPress', 'WooCommerce'],
    languages: ['Dutch'],
    country: 'Netherlands',
    summary:
      'A Dutch WooCommerce store for an eco-conscious cosmetics brand selling vegan, handmade shampoo bars, conditioners, body soaps, lotions and accessories. The design reinforces a sustainable, natural brand identity throughout the shopping journey.',
    serviceSlugs: [
      'woocommerce-development',
      'ecommerce-development',
      'website-design',
      'brand-identity-design',
    ],
    featured: false,
  },
  {
    slug: 'magnific-media',
    name: 'Magnific Media',
    descriptor: 'SEO & E-Commerce Marketing Agency',
    url: 'https://magnific.media/',
    industry: 'Marketing & Agencies',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A service-driven agency website offering SEO, local SEO, link building, WordPress SEO and Magento store development, with supporting case-study pages. Built to attract small and mid-sized businesses looking for long-term organic growth.',
    serviceSlugs: ['website-design', 'wordpress-development', 'seo-services'],
    featured: false,
  },
  {
    slug: 'mediseo',
    name: 'Mediseo',
    descriptor: 'Healthcare Digital Marketing Agency',
    url: 'https://mediseo.de/',
    industry: 'Marketing & Agencies',
    stack: 'WordPress',
    tech: ['WordPress', 'German-language build'],
    languages: ['German'],
    country: 'Germany',
    summary:
      'A German agency website specialising in SEO, content marketing and web design for doctors, dentists, physiotherapists, clinics and pharmaceutical brands. Vertical-specific pages frame every service around patient acquisition through search visibility.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'seo-services',
      'landing-page-development',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Mediseo Case Study | German Healthcare Site',
      metaDescription:
        'How we built Mediseo: a German-language agency site for healthcare marketing, with vertical pages for doctors, dentists, clinics and pharmaceutical brands.',
      challenge: [
        'Mediseo sells SEO, content marketing and web design into German healthcare — doctors, dentists, physiotherapists, clinics and pharmaceutical brands. Selling marketing services to marketers-of-record is hard enough; selling them to clinicians who are sceptical of agencies is harder.',
        'A generic agency site would have failed here. Each vertical has different regulation, different patient behaviour and different vocabulary, and the whole thing had to be written and built in German for a German audience — not translated into it.',
      ],
      approach: [
        {
          heading: 'A page per vertical, not a page per service',
          body: [
            'We structured the site around the practice types Mediseo serves rather than around the services it sells. A dentist lands on a page about dental practices; a clinic lands on a page about clinics.',
            'That structure does two things at once: it makes the agency look like a specialist rather than a generalist, and it gives each vertical its own focused, searchable landing page.',
          ],
        },
        {
          heading: 'Built in German',
          body: [
            'The whole site is a German-language build. Copy structure, headings, navigation labels and calls to action were all set in German rather than being retrofitted from an English original, which is where most translated sites start to read wrong.',
            'It is the same discipline we applied to the Tagesklinik Waldfriede clinic pages and to SV Bad Heilbrunn.',
          ],
        },
        {
          heading: 'Patient acquisition as the through-line',
          body: [
            'Every service is framed by what the practice actually wants: more of the right patients booking appointments. Search visibility, content and site design are presented as means to that outcome rather than as deliverables in their own right.',
            'Enquiry routes are short and consistent across verticals, so the site behaves the same way wherever a visitor enters it.',
          ],
        },
      ],
      outcome: [
        'Mediseo presents as a genuine healthcare specialist in its own market and language, with a dedicated landing page for every practice type it serves.',
        'The relationship also produced the Tagesklinik Waldfriede build — a psychiatric day clinic landing experience delivered under the same domain — and it is a large part of why German-language delivery is a standing capability for us.',
      ],
      highlights: [
        'Full German-language WordPress build for the German market',
        'Dedicated vertical pages for doctors, dentists, physiotherapists, clinics and pharmaceutical brands',
        'Every service framed around patient acquisition rather than agency deliverables',
        'Consistent enquiry routes across all verticals',
        'Same engagement produced the Tagesklinik Waldfriede clinic pages',
      ],
    },
  },
  {
    slug: 'mothers-assist-elderly',
    name: 'Mothers Assist Elderly',
    descriptor: 'Connecticut In-Home Care Services',
    url: 'https://mothersassistelderly.com/',
    industry: 'Healthcare & Wellness',
    stack: 'WordPress',
    tech: ['WordPress', 'Contact forms'],
    languages: ['English'],
    country: 'United States',
    summary:
      'A trust-focused website for a non-medical home care provider supporting seniors and people with disabilities across Connecticut. It sets out daily living assistance, transportation and companionship services alongside the provider\'s licensed credentials (HCA.0001760).',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'accessibility-compliance',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'sv-bad-heilbrunn',
    name: 'SV Bad Heilbrunn',
    descriptor: 'Bavarian Community Sports Club',
    url: 'https://sv-bad-heilbrunn.de/',
    industry: 'Sports, Fitness & Apparel',
    stack: 'WordPress',
    tech: ['WordPress', 'Court booking', 'News'],
    languages: ['German'],
    country: 'Germany',
    summary:
      'A community-organisation website for a 1,200-member sports club in Bavaria covering football, tennis, skiing, gymnastics and cardiac rehabilitation. It handles department news, training schedules and court bookings in German.',
    serviceSlugs: [
      'wordpress-development',
      'website-design',
      'custom-website-development',
      'website-maintenance-support',
    ],
    featured: false,
  },
  {
    slug: 'tagesklinik-waldfriede',
    name: 'Tagesklinik Waldfriede',
    descriptor: 'Berlin Psychiatric Day Clinic',
    url: 'https://mediseo.de/tagesklinik-waldfriede/',
    industry: 'Healthcare & Wellness',
    stack: 'WordPress',
    tech: ['WordPress', 'German-language build'],
    languages: ['German'],
    country: 'Germany',
    summary:
      'A specialised healthcare landing experience for a psychiatric day clinic in Berlin. It communicates a calm, professional environment for outpatient psychotherapy, medication management and creative therapies, with appointment-driven calls to action.',
    serviceSlugs: [
      'landing-page-development',
      'wordpress-development',
      'website-design',
      'accessibility-compliance',
    ],
    featured: false,
  },
  {
    slug: 'wuraka',
    name: 'Wuraka',
    descriptor: 'Custom Sports Apparel Manufacturer',
    url: 'https://www.wuraka.com.au/',
    industry: 'Sports, Fitness & Apparel',
    stack: 'WordPress',
    tech: ['WordPress', 'Custom enquiry flow'],
    languages: ['English'],
    country: 'Australia',
    summary:
      'A bold, sport-driven website for a Sydney-based custom teamwear manufacturer. It showcases the in-house design and production process for jerseys, hoodies and athletic gear across soccer, basketball, netball and more, with custom design enquiries and team uniform galleries.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'graphic-visual-design',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'aromashop',
    name: 'Aromashop',
    descriptor: 'Norwegian Lifestyle E-Commerce',
    url: 'https://stg-aromashop-aromashopstg.kinsta.cloud/',
    industry: 'E-commerce & Retail',
    stack: 'WordPress',
    tech: ['WordPress', 'WooCommerce', 'Kinsta hosting'],
    languages: ['Norwegian'],
    country: 'Norway',
    summary:
      'A WooCommerce store serving the Norwegian market with multipurpose aroma products, candy, cosmetics and beauty items from brands including IVG, Fizzy, Dinner Lady and Flavour Craver. Currently running on its Kinsta staging URL pending a move to a production domain.',
    serviceSlugs: [
      'woocommerce-development',
      'ecommerce-development',
      'web-hosting-devops',
      'website-migration-replatforming',
    ],
    featured: false,
  },
  {
    slug: 'akademia-falizycia',
    name: 'Akademia Falizycia',
    descriptor: 'Lifewave Wellness & Education (Poland)',
    url: 'https://akademiafalizycia.pl/',
    industry: 'Healthcare & Wellness',
    stack: 'WordPress',
    tech: ['WordPress', 'Polish-language build'],
    languages: ['Polish'],
    country: 'Poland',
    summary:
      'A Polish-language wellness and education site centred on Lifewave bioelectrode technology and the X39 patch programme. Built to educate prospects across multiple content pages and to recruit independent partners into the Diamond Group network.',
    serviceSlugs: [
      'wordpress-development',
      'website-design',
      'landing-page-development',
      'conversion-rate-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'universal-spirituality',
    name: 'Universal Spirituality',
    descriptor: 'Interfaith Spiritual Library',
    url: 'https://universal-spirituality.net/',
    industry: 'Community & Culture',
    stack: 'WordPress',
    tech: ['WordPress', 'Downloadable resources'],
    languages: ['English'],
    country: 'International',
    summary:
      'A content-rich resource site offering free downloadable books, articles and meditations on Christian and interfaith spirituality. Designed as a long-form digital library with structured navigation across theology, prayer and the afterlife.',
    serviceSlugs: [
      'wordpress-development',
      'website-design',
      'seo-services',
      'website-speed-optimisation',
    ],
    featured: false,
  },
  {
    slug: 'lock-stock',
    name: 'Lock Stock Self-Storage',
    descriptor: 'UK Multi-Site Storage Brand',
    url: 'https://lockstock.biz/',
    industry: 'Self-Storage',
    stack: 'WordPress',
    tech: ['WordPress', 'Location pages', 'Quote enquiries'],
    languages: ['English'],
    country: 'United Kingdom',
    summary:
      'A multi-location storage company website covering Wales and Northwest England. It carries unit-size pages, location pages, 24/7 access information, racking and transport add-ons, and quote enquiries — all built around a no-commitment rental model.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'seo-services',
      'conversion-rate-optimisation',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Lock Stock Case Study | Multi-Site Self-Storage',
      metaDescription:
        'How we built Lock Stock Self-Storage: location and unit-size pages across Wales and Northwest England, built around quote enquiries and no-commitment rental.',
      challenge: [
        'Lock Stock rents storage across multiple sites in Wales and Northwest England. Storage is bought locally and urgently: someone is moving house, clearing an estate, or running out of space in a business, and they want to know what is near them, what size they need, and what it costs.',
        'A single generic site page cannot answer that. Nor can a site that hides pricing behind a contact form, because the visitor will simply try the next operator.',
      ],
      approach: [
        {
          heading: 'Location pages that stand on their own',
          body: [
            'Every site gets its own page carrying the details that decide the booking — where it is, how access works, what is available there — so that a search for storage in a specific town lands on a page about that town rather than on a homepage.',
            'This is the same multi-location discipline we applied to Tapi\'s showroom network, scaled to a regional operator.',
          ],
        },
        {
          heading: 'Sizing before enquiring',
          body: [
            'Unit-size pages let visitors work out what they actually need before they contact anyone. Getting that decision right on the site removes the most common friction in a storage enquiry and means the leads that arrive are already qualified.',
            'Add-ons — racking, transport, 24/7 access — are presented next to the sizes they apply to, not on a separate services page nobody reads.',
          ],
        },
        {
          heading: 'A quote flow built around no commitment',
          body: [
            'The commercial promise is flexible, no-commitment rental, so the enquiry flow was built to feel equally low-commitment: a short quote request rather than an application.',
            'Quote enquiries are the single conversion goal across the whole site, and every page routes to one.',
          ],
        },
      ],
      outcome: [
        'Lock Stock has a site that works the way storage is actually bought: find the nearest site, work out the size, request a quote — with no dead ends between those steps.',
        'Together with our self-storage consulting work for Cloverfour, it gives us real depth in a vertical most web studios have never touched.',
      ],
      highlights: [
        'Individual location pages for sites across Wales and Northwest England',
        'Unit-size pages that let visitors self-qualify before enquiring',
        'Racking, transport and 24/7 access add-ons presented in context',
        'Single quote-enquiry conversion goal across the site',
        'WordPress build the operator updates as sites and availability change',
      ],
    },
  },
  {
    slug: 'hyperspace-international',
    name: 'Hyperspace International',
    descriptor: 'Semiconductor Test Probes',
    url: 'https://hyperspace-intl.com/',
    industry: 'B2B & Industrial',
    stack: 'WordPress',
    tech: ['WordPress', 'Technical product pages'],
    languages: ['English'],
    country: 'International',
    summary:
      'A B2B technical website for a semiconductor test-probe manufacturer established in 2004. It presents pogo pins, MEMS technology and automation equipment including RTM, APM and SAM machines for global semiconductor manufacturers.',
    serviceSlugs: ['website-design', 'wordpress-development', 'custom-website-development'],
    featured: false,
  },
  {
    slug: 'anyexpat',
    name: 'AnyExpat',
    descriptor: 'Global Relocation & Expat Marketplace',
    url: 'https://anyexpat.com/',
    industry: 'Marketplaces & Directories',
    stack: 'WordPress',
    tech: ['WordPress', 'Directory listings', 'Membership'],
    languages: ['English'],
    country: 'International',
    summary:
      'A multi-country directory and marketplace connecting international relocators with vetted English-speaking professionals across real estate, legal, accounting, mortgages, insurance and language services in 60+ countries, with vacation rentals plus membership and affiliate programmes.',
    serviceSlugs: [
      'custom-website-development',
      'wordpress-development',
      'seo-services',
      'api-development-integrations',
    ],
    featured: false,
  },
  {
    slug: 'forever-day-one',
    name: 'Forever Day One',
    descriptor: 'Corporate Learning Design Studio',
    url: 'https://foreverday.one/',
    industry: 'Education & E-learning',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A modern corporate website for a learning design firm creating bespoke leadership, youth, career-transition and organisational-change programmes for enterprises. The layout is built to convey strategic credibility to HR and L&D decision-makers.',
    serviceSlugs: ['website-design', 'wordpress-development', 'ui-ux-design'],
    featured: false,
  },
  {
    slug: 'apollo-kulturhaus',
    name: 'Apollo Kulturhaus',
    descriptor: 'Swiss Cultural Venue & Event Space',
    url: 'http://apollokreuzlingen.ch',
    industry: 'Community & Culture',
    stack: 'WordPress',
    tech: ['WordPress', 'Event calendar'],
    languages: ['German'],
    country: 'Switzerland',
    summary:
      'A vibrant arts-venue website for a cultural house in Kreuzlingen, Switzerland. It carries upcoming concerts, exhibitions and dance events, café and bar information, and a showcase of rentable spaces including the grand hall, foyer, salon and garden.',
    serviceSlugs: [
      'website-design',
      'wordpress-development',
      'graphic-visual-design',
      'website-maintenance-support',
    ],
    featured: false,
  },
  {
    slug: 'mhtt',
    name: 'MHTT',
    descriptor: 'Fitness & Therapy Equipment Repair',
    url: 'https://mhtt.co/',
    industry: 'B2B & Industrial',
    stack: 'WordPress',
    tech: ['WordPress', 'Service request flow'],
    languages: ['English'],
    country: 'International',
    summary:
      'A service-focused website for an equipment repair company supporting chiropractic, physical therapy, tanning, gym, HydroMassage, massage and Power Plate equipment. Services are organised by equipment type alongside parts and equipment sales and repair-request calls to action.',
    serviceSlugs: ['website-design', 'wordpress-development', 'conversion-rate-optimisation'],
    featured: false,
  },
  {
    slug: 'casa-forte',
    name: 'Casa Forte',
    descriptor: 'Italian WordPress Build',
    url: 'https://casaforte.it/',
    industry: 'Business & Professional',
    stack: 'WordPress',
    tech: ['WordPress', 'Italian-language build'],
    languages: ['Italian'],
    country: 'Italy',
    summary:
      'An Italian-language WordPress build from our delivered portfolio. We are keeping the public write-up short until the project is properly documented on our side — it is listed here for completeness of the record rather than as a showcase piece.',
    serviceSlugs: ['wordpress-development', 'website-design'],
    featured: false,
  },
  {
    slug: 'cledor',
    name: 'Cledor',
    descriptor: 'Organisation Website',
    url: 'https://cledor.org/',
    industry: 'Business & Professional',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WordPress build from our delivered portfolio. We are keeping the public write-up short until the project is properly documented on our side — it is listed here for completeness of the record rather than as a showcase piece.',
    serviceSlugs: ['wordpress-development', 'website-design'],
    featured: false,
  },
  {
    slug: 'talc',
    name: 'Talc',
    descriptor: 'WordPress Build',
    url: 'https://talc.tv/',
    industry: 'Business & Professional',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WordPress build from our delivered portfolio. We are keeping the public write-up short until the project is properly documented on our side — it is listed here for completeness of the record rather than as a showcase piece.',
    serviceSlugs: ['wordpress-development', 'website-design'],
    featured: false,
  },
  {
    slug: 'robuste-solutions',
    name: 'Robuste Solutions',
    descriptor: 'Business Services Website',
    url: 'https://robustesolutions.com/',
    industry: 'Business & Professional',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WordPress build from our delivered portfolio. We are keeping the public write-up short until the project is properly documented on our side — it is listed here for completeness of the record rather than as a showcase piece.',
    serviceSlugs: ['wordpress-development', 'website-design'],
    featured: false,
  },
  {
    slug: 'golden-leap-solutions',
    name: 'Golden Leap Solutions',
    descriptor: 'Business Services Website',
    url: 'https://goldenleapsolutions.com/',
    industry: 'Business & Professional',
    stack: 'WordPress',
    tech: ['WordPress'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WordPress build from our delivered portfolio. We are keeping the public write-up short until the project is properly documented on our side — it is listed here for completeness of the record rather than as a showcase piece.',
    serviceSlugs: ['wordpress-development', 'website-design'],
    featured: false,
  },

  /* ------------------------------------------------------------------ */
  /*  Bubble.io and hybrid builds                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: 'tylo-ai',
    name: 'Tylo AI',
    descriptor: 'On-Demand R&D Research Platform',
    url: 'https://www.tylo.ai/',
    industry: 'AI & SaaS Products',
    stack: 'Bubble.io',
    tech: ['Bubble.io', 'Multiple AI/LLM integrations', 'Graph data display'],
    languages: ['English'],
    country: 'International',
    summary:
      'A Bubble.io platform delivering affordable, on-demand technology research for R&D and innovation teams. Backed by a team of scientists and data engineers, it integrates multiple AI and LLM tools and presents findings through an interactive graph-based display of research data.',
    serviceSlugs: [
      'bubble-nocode-development',
      'saas-product-development',
      'ai-llm-integration',
      'custom-web-application-development',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Tylo AI Case Study | Bubble.io Research Platform',
      metaDescription:
        'How we built Tylo AI on Bubble.io: an on-demand R&D research product with multiple AI and LLM integrations and a graph-based view of research findings.',
      challenge: [
        'Tylo AI set out to make serious technology research affordable and on-demand for R&D and innovation teams — work normally delivered as a slow consulting engagement. The product is backed by scientists and data engineers, so the software had to be worthy of the expertise behind it without taking a consulting-length build cycle to ship.',
        'Two things made it non-trivial. It depends on several AI and LLM tools rather than one model, and the output is a body of connected findings, not a block of prose. Research that arrives as an undifferentiated wall of text is not usable by an innovation team.',
      ],
      approach: [
        {
          heading: 'Bubble.io for a product that had to move',
          body: [
            'We built the platform full-stack on Bubble.io: database schema, workflow logic, interface and integrations. For a product still finding the shape of its offer, that means a change in how a research request is structured can ship in days rather than in a release cycle.',
            'The data model was designed around research requests and their results, so new research types could be added without unpicking the schema.',
          ],
        },
        {
          heading: 'Multiple AI and LLM tools, one pipeline',
          body: [
            'Rather than wiring the product to a single model, we integrated multiple AI and LLM tools behind the research workflow, so each stage of an investigation can use whichever tool suits it.',
            'That also protects the product commercially: models change constantly, and an architecture that assumes one vendor ages badly.',
          ],
        },
        {
          heading: 'Making research readable',
          body: [
            'The graph-based display turns the output into something an innovation team can actually navigate — relationships between findings shown as structure rather than buried in paragraphs.',
            'It is the part of the build that changes the product from a report generator into a research tool.',
          ],
        },
      ],
      outcome: [
        'Tylo AI runs as a live Bubble.io product: research requests in, multi-model AI processing, and findings presented through an interactive graph display.',
        'It is the flagship of our AI and LLM integration work, alongside Mocki and InkGenX, and the build we point to when a client wants an AI product shipped rather than prototyped.',
      ],
      highlights: [
        'Full-stack Bubble.io build — database, workflows, interface and integrations',
        'Multiple AI and LLM tools integrated behind one research pipeline',
        'Interactive graph-based display of research data',
        'On-demand research workflows for R&D and innovation teams',
        'Architecture designed so new research types and models can be added without a rebuild',
      ],
    },
  },
  {
    slug: 'mocki',
    name: 'Mocki',
    descriptor: 'AI Mock Interview Platform',
    url: 'https://mocki.online/',
    industry: 'AI & SaaS Products',
    stack: 'Bubble.io',
    tech: ['Bubble.io', 'LLM integration'],
    languages: ['English'],
    country: 'International',
    summary:
      'A Bubble.io application that recreates real interview experiences through adaptive, human-like LLM-driven conversations. It helps job seekers build confidence, sharpen communication and master online interviews, delivered as an interactive AI coaching experience straight from the browser.',
    serviceSlugs: [
      'bubble-nocode-development',
      'ai-llm-integration',
      'saas-product-development',
      'custom-web-application-development',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Mocki Case Study | AI Mock Interview Platform',
      metaDescription:
        'How we built Mocki on Bubble.io: an adaptive, LLM-driven mock interview platform running human-like practice interviews in the browser, with no install.',
      challenge: [
        'Mocki had to do something scripted practice tools cannot: hold an interview that responds to what the candidate actually says. A fixed question list teaches candidates to recite answers; a real interview follows up, probes and changes direction.',
        'It also had to work in a browser with no install, because the moment of need is the night before an interview, and it had to feel human enough that practising in it is not embarrassing.',
      ],
      approach: [
        {
          heading: 'An adaptive interview loop',
          body: [
            'We built the interview as an LLM-driven conversation rather than a questionnaire. Each response feeds the next question, so the session follows the candidate the way an interviewer would.',
            'The workflow logic controls pacing and structure around that loop, so an interview stays coherent from opening question to close instead of drifting.',
          ],
        },
        {
          heading: 'Built browser-first on Bubble.io',
          body: [
            'The whole application is a Bubble.io build — accounts, sessions, conversation state and interface — delivered in the browser with nothing to download.',
            'Choosing Bubble.io meant the conversational experience could be tuned iteratively, which matters for a product whose quality is defined by how the interaction feels rather than by a feature list.',
          ],
        },
        {
          heading: 'Coaching, not just questioning',
          body: [
            'The experience is framed around building confidence and sharpening communication, so the product is positioned as coaching a candidate through practice rather than testing them.',
            'That framing shaped the interface: calm, focused, and free of anything that turns a practice session into an exam.',
          ],
        },
      ],
      outcome: [
        'Mocki is live as an interactive AI interview coach that runs adaptive, human-like practice interviews in the browser.',
        'It is one of three AI and LLM products in our portfolio, alongside Tylo AI and InkGenX, and the clearest example of our conversational AI work.',
      ],
      highlights: [
        'Adaptive, human-like interview conversations driven by an LLM',
        'Full Bubble.io application — accounts, sessions, conversation state and interface',
        'Browser-based delivery with nothing to install',
        'Interview flow logic that keeps a session coherent start to finish',
        'Positioned and designed as coaching rather than testing',
      ],
    },
  },
  {
    slug: 'inkgenx',
    name: 'InkGenX',
    descriptor: 'AI Reference Suite for Tattoo Artists',
    url: 'https://inkgenx.com/',
    industry: 'AI & SaaS Products',
    stack: 'Bubble.io',
    tech: ['Bubble.io', 'Multiple AI image models', 'Subscription'],
    languages: ['English'],
    country: 'International',
    summary:
      'A specialised SaaS for professional tattoo artists, combining a royalty-free reference library with the InkGenX+ AI suite. Multiple AI models power on-demand tattoo image generation and manipulation, giving artists a creative ally for design ideation, style exploration and faster studio workflows.',
    serviceSlugs: [
      'bubble-nocode-development',
      'ai-llm-integration',
      'saas-product-development',
      'custom-web-application-development',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'InkGenX Case Study | AI Image SaaS for Tattoos',
      metaDescription:
        'How we built InkGenX on Bubble.io: a royalty-free reference library plus an AI suite using multiple image models for tattoo generation and manipulation.',
      challenge: [
        'Tattoo artists work from reference constantly, and most of what they find online is legally murky. InkGenX had to solve that with a genuinely royalty-free library, then go further and let artists generate and manipulate reference on demand.',
        'Generic AI image tools do not understand tattoo work — line weight, placement, style lineage, the difference between a flash sheet and a stencil reference. The product had to be built for this trade specifically, and it had to be worth a subscription.',
      ],
      approach: [
        {
          heading: 'Library first, AI second',
          body: [
            'The foundation is a royalty-free reference library that artists can browse and use without licensing anxiety. That is the part that earns daily use.',
            'We structured it for how artists actually search — by style and subject — so the library is a working tool rather than an archive.',
          ],
        },
        {
          heading: 'The InkGenX+ AI suite',
          body: [
            'On top of the library sits InkGenX+, the paid AI tier. We integrated multiple AI image models rather than one, because different models are better at different things, and a tattoo-specific product needs whichever one produces usable reference for the request in front of it.',
            'The suite covers both generation and manipulation, so an artist can create a starting point or rework an existing one inside the same tool.',
          ],
        },
        {
          heading: 'A subscription product on Bubble.io',
          body: [
            'The whole platform is a Bubble.io build: accounts, library, generation workflows, model integrations and the InkGenX+ subscription tier.',
            'Building it this way let the AI feature set expand as models improved, without re-architecting the product each time.',
          ],
        },
      ],
      outcome: [
        'InkGenX is live as a niche-vertical SaaS with a free-to-browse reference library and a paid AI suite built specifically for tattoo work.',
        'It is our proof that a serious AI product can be shipped for a specialist trade audience on a no-code stack — and it completes the AI trio with Tylo AI and Mocki.',
      ],
      highlights: [
        'Royalty-free reference library structured for style and subject browsing',
        'InkGenX+ AI suite powered by multiple AI image models',
        'On-demand tattoo image generation and manipulation in one tool',
        'Subscription tier built into the Bubble.io application',
        'Purpose-built for professional tattoo artists rather than adapted from a general tool',
      ],
    },
  },
  {
    slug: 'swayed',
    name: 'Swayed',
    descriptor: 'Hairstyle Marketplace App & Admin',
    url: 'https://theswayedapp.com/',
    industry: 'Marketplaces & Directories',
    stack: 'Bubble.io',
    tech: ['Bubble.io admin panel', 'Native mobile app'],
    languages: ['English'],
    country: 'International',
    summary:
      'A two-sided marketplace mobile app connecting people looking to update their hairstyle with the right hair professionals. The customer-facing mobile app is paired with a Bubble.io web admin panel for managing users, providers, listings, bookings and overall platform operations.',
    serviceSlugs: [
      'bubble-nocode-development',
      'custom-web-application-development',
      'mobile-app-development',
      'api-development-integrations',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'Swayed Case Study | Marketplace App Admin Panel',
      metaDescription:
        'How we built the Bubble.io web admin panel behind Swayed, a two-sided hairstyle marketplace app: users, providers, listings, bookings and platform ops.',
      challenge: [
        'Swayed is a two-sided marketplace: people who want a new hairstyle on one side, hair professionals on the other. The customer-facing product is a native mobile app, but a marketplace is only as good as the operations behind it.',
        'Someone has to approve providers, resolve listing problems, keep bookings moving and see what is happening on the platform. Doing that inside a mobile app is impractical, and doing it in a database console is worse.',
      ],
      approach: [
        {
          heading: 'A web admin panel for a mobile product',
          body: [
            'We built the operational backend as a Bubble.io web admin panel sitting alongside the mobile app, so the operations team works on a desktop with the screen space the job needs.',
            'This split — native app for consumers, Bubble.io admin for operators — is an architecture we have delivered more than once, and it consistently gets teams operational faster than building bespoke internal tooling.',
          ],
        },
        {
          heading: 'Managing both sides of the marketplace',
          body: [
            'The panel handles users and providers as distinct populations with distinct needs, because a marketplace operator manages supply differently from demand.',
            'Listings and bookings are administrable from the same place, so a problem raised in the app can be resolved without switching tools.',
          ],
        },
        {
          heading: 'Built for day-to-day operations',
          body: [
            'The interface was designed around the tasks operators repeat daily rather than around the database structure underneath. Frequent actions are quick; rare ones are simply available.',
            'Because it is a Bubble.io build, new operational views can be added as the marketplace matures and the team discovers what it needs.',
          ],
        },
      ],
      outcome: [
        'Swayed runs with a consumer mobile app front-of-house and a Bubble.io web admin panel behind it, covering users, providers, listings, bookings and platform operations.',
        'It sits alongside BostMD as our reference for mobile-plus-admin-panel architecture — and it is the pattern we recommend whenever an app team needs operational tooling without a second engineering project.',
      ],
      highlights: [
        'Bubble.io web admin panel powering a two-sided marketplace',
        'Management of both users and providers as separate populations',
        'Listing, booking and platform operations administered from one place',
        'Paired with a customer-facing native mobile app',
        'Extendable operational views as the marketplace grows',
      ],
    },
  },
  {
    slug: 'bostmd',
    name: 'BostMD',
    descriptor: 'Healthcare App Admin Platform',
    url: 'http://bostmd.com/',
    industry: 'Healthcare & Wellness',
    stack: 'Bubble.io',
    tech: ['Bubble.io admin panel', 'Native mobile app'],
    languages: ['English'],
    country: 'International',
    summary:
      'A healthcare mobile application paired with a custom Bubble.io web admin panel. The admin platform powers the operational backend for the BostMD product, managing users, content and workflows behind the consumer-facing app.',
    serviceSlugs: [
      'bubble-nocode-development',
      'custom-web-application-development',
      'mobile-app-development',
    ],
    featured: false,
  },
  {
    slug: 'lineascore',
    name: 'LineaScore',
    descriptor: 'Dynamic Reporting & PDF Platform',
    url: 'https://lineascore.com/',
    industry: 'AI & SaaS Products',
    stack: 'Hybrid',
    tech: ['WordPress (landing)', 'Bubble.io (app)', 'Custom PDF generation'],
    languages: ['English'],
    country: 'International',
    summary:
      'A WordPress marketing landing page paired with a full Bubble.io application on the app subdomain. The platform enables dynamic creation of configurable reports and includes a custom-built dynamic PDF generation feature that turns user inputs into clean, branded, downloadable documents in real time.',
    serviceSlugs: [
      'bubble-nocode-development',
      'saas-product-development',
      'custom-web-application-development',
      'wordpress-development',
    ],
    featured: true,
    caseStudy: {
      metaTitle: 'LineaScore Case Study | Reporting & PDF Engine',
      metaDescription:
        'How we built LineaScore: a WordPress landing page plus a Bubble.io app on a subdomain, with a custom dynamic PDF engine producing branded reports live.',
      challenge: [
        'LineaScore needed two different things that are usually forced into one build. A marketing site has to be fast, editable and search-friendly. A reporting application has to hold configurable inputs, generate documents, and change frequently as the product evolves.',
        'The hard part was the output. The product\'s value is the document a user walks away with, so it needed real dynamic PDF generation — inputs turned into a clean, branded, downloadable report in real time — not a screenshot or a print stylesheet.',
      ],
      approach: [
        {
          heading: 'Split the architecture, deliberately',
          body: [
            'We put the marketing landing page on WordPress and the application on Bubble.io at the app subdomain. Each platform does what it is genuinely best at, and neither compromises for the other.',
            'The marketing team can publish without touching the product, and the product can ship changes without a marketing release.',
          ],
        },
        {
          heading: 'Configurable report creation',
          body: [
            'The application is built around dynamic report creation: users configure inputs and the platform assembles the report from them, rather than choosing from a set of fixed templates.',
            'That required a data model where report structure is data, not hard-coded layout — which is what lets new report configurations be added without a rebuild.',
          ],
        },
        {
          heading: 'A custom dynamic PDF engine',
          body: [
            'We built the dynamic PDF generation feature ourselves. It takes the configured inputs and produces a branded, correctly laid-out document on demand.',
            'Document generation is the piece most no-code stacks handle badly, and getting it right is why the whole product hangs together.',
          ],
        },
      ],
      outcome: [
        'LineaScore runs as a clean two-part product: a WordPress landing page that markets it and a Bubble.io application that delivers it, with real-time branded PDF output at the end of the workflow.',
        'It is our reference build for hybrid architecture and for document-generation features, and one of the reasons we can advise honestly on when to split a stack rather than force one platform to do everything.',
      ],
      highlights: [
        'Hybrid build — WordPress marketing landing page plus a Bubble.io application',
        'Application deployed on the app.lineascore.com subdomain',
        'Dynamic, configurable report creation driven by user inputs',
        'Custom-built dynamic PDF generation producing branded documents in real time',
        'Marketing site and product release cycles fully decoupled',
      ],
    },
  },
  {
    slug: 'boomerang',
    name: 'Boomerang',
    descriptor: 'Next.js Landing + Bubble.io App',
    url: 'https://www.theboomerang.co/',
    industry: 'AI & SaaS Products',
    stack: 'Hybrid',
    tech: ['Next.js (landing)', 'Bubble.io (app)', 'Subdomain deployment'],
    languages: ['English'],
    country: 'International',
    summary:
      'A modern web product with the marketing site built in Next.js and the live application hosted on a Bubble.io subdomain. It demonstrates a clean architectural split: a high-performance marketing front end paired with a rapidly iterable Bubble.io product back end.',
    serviceSlugs: [
      'headless-jamstack-development',
      'bubble-nocode-development',
      'saas-product-development',
      'custom-web-application-development',
    ],
    featured: false,
  },
];

/* -------------------------------------------------------------------------- */
/*  Derived collections and helpers                                            */
/* -------------------------------------------------------------------------- */

/** Canonical display order for stack filters. */
const STACK_ORDER: ProjectStack[] = ['WordPress', 'Bubble.io', 'Hybrid', 'Next.js', 'Shopify'];

/** Projects with a full case study at /portfolio/[slug]. */
export const featuredProjects: Project[] = projects.filter((project) => project.featured);

/**
 * Projects with a complete public write-up. Excludes the handful of live builds
 * whose descriptions are still pending internally, so grids and carousels never
 * lead with a placeholder-style card.
 */
export const showcaseProjects: Project[] = projects.filter(
  (project) => project.industry !== 'Business & Professional',
);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}

/** Every industry we have delivered in, alphabetical, for filter controls. */
export const industriesList: string[] = Array.from(
  new Set(projects.map((project) => project.industry)),
).sort((a, b) => a.localeCompare(b));

/** Every stack represented in the portfolio, in canonical display order. */
export const stacksList: ProjectStack[] = STACK_ORDER.filter((stack) =>
  projects.some((project) => project.stack === stack),
);

export const projectsByIndustry: { industry: string; projects: Project[] }[] =
  industriesList.map((industry) => ({
    industry,
    projects: projects.filter((project) => project.industry === industry),
  }));

/**
 * Real client brand names for the "Trusted by teams across 4 continents" band.
 * Every name below is a live, documented project from the list above — no
 * invented logos, no placeholder brands.
 */
export const clientNames: string[] = [
  'Tapi Carpets & Floors',
  'Lock Stock Self-Storage',
  'Tylo AI',
  'Ronival',
  'Mediseo',
  'Afik',
  'Cloverfour',
  'Mocki',
  'InkGenX',
  'LineaScore',
  'Swayed',
  'BostMD',
  'Wegets',
  'Loofys',
  'Wuraka',
  'AnyExpat',
  'Hyperspace International',
  'SV Bad Heilbrunn',
  'Apollo Kulturhaus',
  'Forever Day One',
  'E-Mobility Search',
  'In Harmony Education',
  'Vitacode',
  'Universal Spirituality',
];
