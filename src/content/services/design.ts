import type { Service } from '@/content/types';

/**
 * Category: Design.
 *
 * Five services covering how a Tekvion project looks, reads and behaves before
 * a line of it is built — website design, product interface design, redesigns
 * of existing sites, ongoing graphic work, and brand identity.
 */
export const designServices: Service[] = [
  /* ------------------------------------------------------------------ */
  /*  Website Design                                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: 'website-design',
    title: 'Website Design',
    category: 'Design',
    icon: 'palette',
    short:
      'Conversion-focused website design that looks like your brand and gives visitors an obvious reason to get in touch.',
    metaTitle: 'Website Design Services That Convert Visitors',
    metaDescription:
      'Custom website design from a studio with 49+ delivered projects. Page-by-page layouts, mobile-first design and build-ready files for WordPress developers.',
    heroTitle: 'Website design that earns attention and then converts it',
    heroIntro:
      'We design websites that look like your brand and behave like your best salesperson. Every page is planned around the decision a visitor needs to make, designed mobile-first, and handed over as a build-ready system rather than a flat picture. Across 49 delivered projects and eight shipping languages, that approach has held up on coaching brands, clinics, retailers and B2B manufacturers alike.',
    whatYouGet: [
      {
        title: 'Page-by-page design, not a template skin',
        description:
          'We design every page you genuinely need — home, service, about, pricing, contact, thank-you — as its own layout with its own argument. Nothing is stretched from a single demo, so your service pages do not end up reading like the home page with the words swapped out.',
      },
      {
        title: 'Mobile-first layouts down to 360px',
        description:
          'Most traffic on the sites we ship arrives on a phone, so we design the narrow view first and expand outwards. Tap targets, stacked cards, collapsed navigation and image crops are all specified deliberately rather than left to the browser to improvise.',
      },
      {
        title: 'A visual system, not a one-off picture',
        description:
          'You receive colour roles, a type ramp, a spacing scale, button and form states, plus card and section patterns. Whoever edits the site in two years has rules to follow, which is why our clients keep adding pages without the design quietly drifting apart.',
      },
      {
        title: 'Designed against real copy',
        description:
          'We lay out real headings and realistic body length instead of lorem ipsum. Where copy is missing we write placeholder text at the correct length and flag it, so the layout you approve is the layout that survives contact with your actual content.',
      },
      {
        title: 'Build-ready handoff for WordPress',
        description:
          'Designs are prepared for the way we actually build: Breakdance or Elementor sections, reusable global blocks, and ACF field mapping wherever content repeats. That removes the familiar final-week argument about the developer having changed the design.',
      },
      {
        title: 'Accessibility decided in the design phase',
        description:
          'Colour contrast, visible focus states, heading order and readable line lengths are settled in Figma, not patched after launch. Designing an accessible interface costs almost nothing; retrofitting one costs a rebuild, and it improves the experience for every visitor.',
      },
      {
        title: 'Two structured revision rounds per page',
        description:
          'Feedback is collected in one place against a specific frame rather than scattered across email threads. Each page gets two full revision rounds included, and we tell you plainly and early when a request is a revision versus new scope.',
      },
    ],
    process: [
      {
        title: 'Discovery and page inventory',
        description:
          'We start with your goals, audience, competitors and the enquiries you want more of. From that we agree a page inventory and the specific job each page has to do, so every later design decision has something concrete to be right or wrong about.',
      },
      {
        title: 'Wireframes and structure',
        description:
          'Before any colour, we lay each page out as greyscale blocks: the order of the argument, where proof sits, where the call to action repeats. Structure is signed off here, which makes the visual stage fast and far less contentious.',
      },
      {
        title: 'Visual design in Figma',
        description:
          'We design the home page first to establish the visual system, then roll that system across the rest of the inventory. You review real desktop and mobile frames in a clickable prototype instead of judging static screenshots in a PDF.',
      },
      {
        title: 'Design system and states',
        description:
          'We document components, interaction states and responsive rules, then package what the build needs: exported assets, fonts, the icon set, and a written spec for spacing and breakpoints.',
      },
      {
        title: 'Handover or build',
        description:
          'We either hand the files to your developer with a recorded walkthrough, or build it ourselves in WordPress. Either way the source Figma file is yours to keep — the design is not held hostage to keep you as a client.',
      },
    ],
    deliverables: [
      'Figma source file with desktop and mobile frames for every page',
      'Clickable prototype for stakeholder review and sign-off',
      'Greyscale wireframes covering the agreed page inventory',
      'Design system page: colour roles, type ramp, spacing scale, components',
      'Specified button, link, form, empty and error states',
      'Exported image, icon and logo assets in web-ready formats',
      'Responsive specification for desktop, tablet and 360px mobile',
      'Developer handover notes plus a recorded walkthrough call',
    ],
    techStack: ['Figma', 'WordPress', 'Breakdance', 'Elementor', 'ACF', 'Google Fonts', 'Lighthouse'],
    idealFor: [
      'Your current site came from a template and now looks like everyone else in your sector',
      'You get reasonable traffic but very few enquiries out of it',
      'You are launching a new brand, practice or product and need a site from scratch',
      'Pages look acceptable on desktop and fall apart on a phone',
      'You have a developer who can build but nobody to decide how it should look',
      'Content has been added ad hoc for years and the design no longer holds together',
    ],
    faqs: [
      {
        question: 'Do you design in Figma or straight inside WordPress?',
        answer:
          'We design in Figma first. Designing directly in a page builder feels faster on day one and costs you later, because you end up approving whatever the builder made easy rather than what the page needed. Figma lets us test structure, mobile behaviour and contrast cheaply, and you keep an editable source file afterwards. Once the design is signed off, we build it in WordPress with Breakdance or Elementor.',
      },
      {
        question: 'How many pages does a typical website design include?',
        answer:
          'Most sites we design come to between six and twelve unique layouts: home, about, contact, a service template, a blog index and post template, plus whatever your business genuinely needs. Additional service pages usually reuse the template rather than being designed one by one, which keeps the cost sensible. We agree the exact page inventory during discovery, so the scope is settled long before invoicing.',
      },
      {
        question: 'Can you work with our existing brand guidelines?',
        answer:
          'Yes, and we prefer it. Send your logo files, palette, typefaces and any brand book, and we design inside those constraints while extending them where the web needs things print guidelines never covered: hover states, focus rings, dark sections, form errors, favicon crops. If your guidelines are thin or dated, we can build the missing pieces during the project or handle it properly as brand identity design.',
      },
      {
        question: 'What happens if we do not like the first design?',
        answer:
          'It happens, and it is usually a structure problem rather than a taste problem, which is exactly why we sign off wireframes before any visual work. If the first visual direction misses, we talk it through, agree what specifically is wrong, and produce a second direction rather than nudging the first one endlessly. Two revision rounds per page are included in every design engagement.',
      },
      {
        question: 'Do you write the copy as well?',
        answer:
          'We design against real copy whenever it exists, and we will restructure and tighten what you send at no extra cost. Writing full copy from scratch is a separate engagement that we scope when your content is not ready. What we will not do is design around placeholder nonsense and hand you a layout that breaks the moment your real headline turns out to be twice as long.',
      },
    ],
    relatedServiceSlugs: [
      'ui-ux-design',
      'custom-website-development',
      'website-redesign',
      'conversion-rate-optimisation',
    ],
    relatedProjectSlugs: ['your-brain-coach-d', 'in-harmony-education', 'cloverfour', 'wuraka'],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  /*  UI/UX Design                                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    icon: 'layout-dashboard',
    short:
      'Interface and user-experience design for web apps, dashboards and admin panels, built around how people actually use them.',
    metaTitle: 'UI/UX Design Services for Web Apps and Sites',
    metaDescription:
      'UI/UX design for web apps, dashboards, marketplaces and admin panels. User flows, wireframes, component libraries and clickable prototypes, ready to build.',
    heroTitle: 'UI/UX design that makes a complex product feel obvious',
    heroIntro:
      'Marketing pages have to persuade once; product interfaces have to be used, sometimes every working day. We design the flows, screens and states behind web applications, dashboards, booking systems and content-heavy sites. That includes the seven Bubble.io products we have shipped and the web admin panels running behind live mobile apps.',
    whatYouGet: [
      {
        title: 'User and task mapping',
        description:
          'We list every role that touches the product and what each of them is trying to finish, then map the shortest honest route through it. Screens then exist because a real task needs them, not because a competitor happens to have one.',
      },
      {
        title: 'Flow and information architecture',
        description:
          'Navigation, hierarchy, naming and grouping are decided before pixels. On admin panels and marketplaces this is most of the work: getting the object model and the labels right is what stops staff guessing where anything lives.',
      },
      {
        title: 'Wireframes for every screen and every state',
        description:
          'Not only the happy path. Empty states, loading, partial data, permission errors, validation failures and long-content overflow all get drawn, because those are precisely the screens that make a product feel unfinished when nobody designed them.',
      },
      {
        title: 'High-fidelity UI and a component library',
        description:
          'Buttons, inputs, selects, tables, modals, tabs, toasts and cards are designed once with all their states, then assembled into screens. Because developers build from components, the twentieth screen costs a fraction of the first one.',
      },
      {
        title: 'Interactive prototype for real testing',
        description:
          'A clickable prototype you can put in front of actual users, staff or investors before a line of code exists. Changing a flow in Figma takes an afternoon; changing the same flow after it is built takes a sprint and a budget conversation.',
      },
      {
        title: 'Accessibility and input ergonomics',
        description:
          'Keyboard order, visible focus, target sizes, contrast on data-dense screens, and form errors that say what to fix rather than that something went wrong. Applied through the component library so it holds across every screen automatically.',
      },
    ],
    process: [
      {
        title: 'Product discovery',
        description:
          'We work through the purpose, the user roles, the permissions and the data the product holds. On Bubble.io and web-app work this doubles as a first pass at the data model, because interface problems are usually structure problems wearing a costume.',
      },
      {
        title: 'Flows and information architecture',
        description:
          'We diagram each core journey end to end and agree the navigation model. You approve flows before screens, which is the cheapest possible place to discover a step nobody actually needed.',
      },
      {
        title: 'Wireframes and behaviour rules',
        description:
          'Greyscale screens for every route, including the awkward states. We annotate the rules alongside them — what happens on save, what an administrator sees that a member does not — so the build has answers rather than assumptions.',
      },
      {
        title: 'UI system and screen design',
        description:
          'We design the component library, then compose the screens from it at desktop and mobile widths. Data tables, filters and long forms get particular attention, because that is where product interfaces usually fail first.',
      },
      {
        title: 'Prototype, test, refine',
        description:
          'We assemble the clickable prototype, walk stakeholders or users through it, and fold what we learn back into the screens before anything is handed to development.',
      },
    ],
    deliverables: [
      'User-role and task map for the whole product',
      'End-to-end flow diagrams for every core journey',
      'Wireframes for all screens, including empty, loading and error states',
      'High-fidelity UI screens at desktop and mobile widths',
      'Reusable component library with every interaction state',
      'Clickable Figma prototype for testing and demos',
      'Annotated behaviour, permission and validation notes for developers',
      'Accessibility specification covering focus order, contrast and target sizes',
    ],
    techStack: ['Figma', 'Bubble.io', 'React', 'Next.js', 'WordPress', 'ACF', 'Lighthouse'],
    idealFor: [
      'You are building a web app, dashboard or marketplace rather than a brochure site',
      'Users keep asking support how to do something the product already does',
      'The product grew feature by feature and the navigation stopped making sense',
      'You need something clickable to test with users or show investors before building',
      'Your mobile app needs a web admin panel that operations staff can actually run',
      'Sign-up, onboarding or checkout is where people quietly drop out',
    ],
    faqs: [
      {
        question: 'What is the difference between UI design and UX design?',
        answer:
          'UX is the decision-making: who uses this, what they are trying to finish, what order the steps go in, and what the product should do when something goes wrong. UI is how those decisions become visible and touchable through layout, type, colour, components and states. We do both in one engagement, because splitting them tends to produce beautiful screens on which nobody can complete a task.',
      },
      {
        question: 'Do you design specifically for Bubble.io builds?',
        answer:
          'Yes. We have shipped seven Bubble.io applications, so we design knowing what Bubble does cheaply and what it fights. Repeating groups, responsive engine behaviour, native input limitations and page-load patterns all shape the design before it reaches the editor. The result is a design that ships close to what you approved, rather than one quietly compromised during the build.',
      },
      {
        question: 'Can you improve an existing product without a full redesign?',
        answer:
          'Often, yes. We audit the journeys where users actually stall — usually onboarding, search, checkout or one core creation task — and redesign those against your existing visual language. You get targeted screens and component updates instead of a rebuild. If the underlying information architecture is the real problem we will say so, because restyling a confusing structure only makes it confusing in better fonts.',
      },
      {
        question: 'Do you run user testing sessions?',
        answer:
          'We build the clickable prototype and are happy to moderate sessions with five to eight of your users, which is usually enough to surface the serious problems. We do not run large quantitative studies or recruit research panels; for that you want a dedicated research firm. What we do reliably is turn what those sessions reveal into changed screens within days rather than months.',
      },
      {
        question: 'How do you hand designs over to developers?',
        answer:
          'You get the Figma file with a documented component library, every state drawn, and annotations covering behaviour, permissions, validation and responsive rules. We run a walkthrough call with whoever is building it and stay reachable for the questions that always appear mid-build. When we are building it ourselves, that same documentation becomes our own implementation checklist.',
      },
    ],
    relatedServiceSlugs: [
      'website-design',
      'bubble-nocode-development',
      'custom-web-application-development',
      'conversion-rate-optimisation',
    ],
    relatedProjectSlugs: ['tylo-ai', 'lineascore', 'swayed', 'bostmd'],
  },

  /* ------------------------------------------------------------------ */
  /*  Website Redesign                                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    category: 'Design',
    icon: 'refresh-cw',
    short:
      'A modern rebuild of your existing website that keeps the rankings, links and traffic you have already earned.',
    metaTitle: 'Website Redesign Services Without Losing SEO',
    metaDescription:
      'Website redesign that protects your rankings. Full audit, old-to-new URL mapping, 301 redirects, content migration and a faster, mobile-first WordPress build.',
    heroTitle: 'Website redesign that modernises the site without losing your SEO',
    heroIntro:
      'Most redesigns lose traffic for one avoidable reason: every URL changed and nobody mapped the old ones. We redesign around what your current site has already earned — rankings, backlinks and the handful of pages that convert — and rebuild everything else. Redesigns are a large part of our work, and several sites in our portfolio replaced dated builds we inherited from other agencies.',
    whatYouGet: [
      {
        title: 'A full audit of the site you already have',
        description:
          'We crawl what exists: every URL, its traffic, its rankings and its inbound links. Pages that earn are protected, pages that do nothing are merged or retired on purpose. You get the reasoning in writing before a single new layout is drawn.',
      },
      {
        title: 'URL mapping and a 301 redirect plan',
        description:
          'Every old URL is mapped to its new destination in one sheet, redirects go in as permanent 301s, and we verify them after launch. That single artefact separates a redesign that holds its traffic from one that quietly sheds a third of it.',
      },
      {
        title: 'Content migration rather than content loss',
        description:
          'Posts, case studies, product data, images, PDFs, forms and tracking all move across. We inventory them beforehand so nothing is discovered missing three months later when a customer follows a link to a page that no longer exists.',
      },
      {
        title: 'A structure that fits the business now',
        description:
          'Most sites we redesign were built for a smaller version of the company. We restructure navigation and page types around the services you sell today, instead of reskinning a structure that stopped fitting several years ago.',
      },
      {
        title: 'Performance and Core Web Vitals rebuilt in',
        description:
          'Old sites accumulate plugins, render-blocking scripts and uncompressed images. We rebuild on a lean stack, serve modern image formats, and check Lighthouse and Core Web Vitals before launch rather than after somebody complains about the phone experience.',
      },
      {
        title: 'Staging review and a controlled launch',
        description:
          'The redesign is built on a private staging environment you can click through and comment on. Launch happens at an agreed time with a full backup, redirect testing, sitemap submission and active monitoring through the first weeks.',
      },
    ],
    process: [
      {
        title: 'Audit and benchmark',
        description:
          'We record current rankings, traffic, top landing pages, conversion paths and Core Web Vitals so success can be measured against something real. We also list every plugin, integration and form that has to survive the move.',
      },
      {
        title: 'Structure and URL mapping',
        description:
          'A new sitemap, a new navigation model, and a row-by-row map of old URL to new URL with the redirect type recorded. All of it signed off before design work begins.',
      },
      {
        title: 'Design the new site',
        description:
          'Wireframes first, then visual design, reusing whatever in the current brand still holds up. High-traffic pages are designed individually while the long tail gets strong, flexible templates.',
      },
      {
        title: 'Build on staging and migrate',
        description:
          'We build in WordPress on staging, migrate content and media, rebuild forms and tracking, then work through a pre-launch checklist covering redirects, metadata, schema, analytics and accessibility.',
      },
      {
        title: 'Launch and monitor',
        description:
          'We go live with backups in place, submit the new sitemap, watch Search Console for crawl and coverage errors, and fix whatever surfaces during the first month at no extra charge.',
      },
    ],
    deliverables: [
      'Written audit of the existing site with keep, merge and retire recommendations',
      'Complete old-to-new URL map with 301 redirects implemented and tested',
      'New sitemap and navigation structure',
      'Redesigned page templates for every content type on the site',
      'Fully migrated content, media library, forms and tracking',
      'Private staging environment for review and sign-off',
      'Pre-launch checklist signed off item by item',
      'Post-launch Search Console and Core Web Vitals monitoring report',
    ],
    techStack: [
      'WordPress',
      'Breakdance',
      'Elementor',
      'ACF',
      'WooCommerce',
      'Figma',
      'GA4',
      'Google Search Console',
      'Lighthouse',
      'Cloudflare',
      'Kinsta',
    ],
    idealFor: [
      'The site was built four or five years ago and unmistakably looks it',
      'It is slow, fails Core Web Vitals, or is painful for your team to edit',
      'Somebody has warned you that a redesign could cost you hard-won rankings',
      'The business has changed but the site still sells the previous version of it',
      'Mobile visitors get a cramped desktop layout squeezed onto a phone',
      'Nobody internally can publish a new page without calling a developer',
    ],
    faqs: [
      {
        question: 'Will a redesign damage our Google rankings?',
        answer:
          'Only if it is done carelessly. Ranking losses after a redesign almost always trace back to changed URLs with no redirects, deleted pages that held backlinks, or metadata that was never migrated. We map every old URL to a new one, implement permanent 301 redirects, carry across titles and descriptions, and monitor Search Console after launch. Handled properly, a faster and better-structured site usually improves visibility rather than harming it.',
      },
      {
        question: 'Can we keep our current hosting and domain?',
        answer:
          'Your domain always stays yours and nothing about it needs to change. Hosting depends on what you are on. If your current host performs well and supports staging, we will happily build there. If it is the reason the site is slow, we will tell you and recommend a move to something like Kinsta or Hostinger with Cloudflare in front, and handle the migration as part of the project.',
      },
      {
        question: 'How long does a website redesign take?',
        answer:
          'Most redesigns we run take six to ten weeks from kickoff to launch, and the pace is set mainly by how quickly content and feedback come back from your side. A large catalogue or an e-commerce migration takes longer. We work on staging throughout, so your existing site stays live and untouched until the agreed switchover — visitors never see a half-finished website.',
      },
      {
        question: 'Do we have to rewrite all of our content?',
        answer:
          'No. The audit tells us which pages already earn traffic and conversions, and those are usually restructured rather than rewritten. Thin, duplicated or outdated pages get merged or retired, and new pages are written where a real gap exists. Most clients end up rewriting perhaps a third of their content, and we make that recommendation page by page instead of by blanket rule.',
      },
      {
        question: 'What if we only want part of the site redesigned?',
        answer:
          'That is a perfectly reasonable scope and often the smarter one. We regularly redesign just the home page and service templates, or just a checkout and account area, leaving the rest in place until budget allows. The new work is built with a design system that the remaining pages can adopt later, so a phased redesign does not leave you with two sites glued together.',
      },
    ],
    relatedServiceSlugs: [
      'website-design',
      'seo-services',
      'website-speed-optimisation',
      'website-migration-replatforming',
    ],
    relatedProjectSlugs: ['mediseo', 'lock-stock', 'tapi', 'ronival'],
  },

  /* ------------------------------------------------------------------ */
  /*  Graphic & Visual Design                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: 'graphic-visual-design',
    title: 'Graphic & Visual Design',
    category: 'Design',
    icon: 'pen-tool',
    short:
      'On-brand graphics for web, social and print, from hero visuals and icon sets to ad creative and pitch decks.',
    metaTitle: 'Graphic and Visual Design for Web and Social',
    metaDescription:
      'Graphic and visual design that keeps every asset on brand: hero visuals, custom icon sets, social templates, ad creative, decks and print-ready collateral.',
    heroTitle: 'Graphic and visual design that keeps every asset on brand',
    heroIntro:
      'Your website is only part of what an audience sees. We produce the visual work around it — hero graphics, icon sets, social templates, ad creative, decks and print collateral — in the same visual language as the site, so a LinkedIn post and a landing page look like they came from the same company. Most of this work is ongoing for clients we have already built for.',
    whatYouGet: [
      {
        title: 'Web graphics and hero visuals',
        description:
          'Composed hero images, section illustrations, background treatments, feature diagrams and process graphics drawn to your palette. Exported in modern formats at the exact sizes your templates need, so nothing gets uploaded at four times the dimensions it renders at.',
      },
      {
        title: 'Custom icon sets',
        description:
          'A consistent icon family for services, features and navigation, drawn on one grid with one stroke weight. Stock icons pulled from three different libraries are one of the fastest ways to make a good site look assembled rather than designed.',
      },
      {
        title: 'Social media templates you can reuse',
        description:
          'Editable post, story and carousel templates for LinkedIn, Instagram and Facebook, sized correctly for each placement. Your team swaps the text and the image and publishes, without a designer being the bottleneck on every announcement.',
      },
      {
        title: 'Ad and campaign creative',
        description:
          'Display and paid-social creative produced as a set, with variants for each required size and two or three headline treatments to test. Delivered in the file formats the ad platforms expect, with text kept clear of the safe-area crops.',
      },
      {
        title: 'Presentation and document design',
        description:
          'Pitch decks, sales one-pagers, proposals and reports laid out properly in slide masters or templates your team can actually edit. We handle the typography, charts and hierarchy so the argument is readable from the back of a room.',
      },
      {
        title: 'Print-ready collateral',
        description:
          'Brochures, flyers, business cards, roll-up banners and signage prepared with correct bleed, trim marks and CMYK profiles. Files go to your printer ready to run, without the back-and-forth that eats a week before a trade show.',
      },
      {
        title: 'Editable source files and usage notes',
        description:
          'Every asset ships with its layered source file plus short notes on colours, fonts, minimum sizes and which asset to use where. You are never left holding a folder of flattened PNGs nobody can update.',
      },
    ],
    process: [
      {
        title: 'Brief and asset list',
        description:
          'We agree exactly what is being produced, where each asset appears, what size it needs to be and when it is required. Vague creative briefs are the main cause of expensive revision rounds, so we pin the list down first.',
      },
      {
        title: 'Direction concepts',
        description:
          'For a new visual language we present two directions applied to one or two real assets rather than to abstract mood boards. You pick a direction on something you can actually judge, and we roll it out from there.',
      },
      {
        title: 'Production',
        description:
          'We produce the full set in the chosen direction, working in Figma for digital assets and Illustrator or Photoshop where the work is vector or photographic. Related assets are batched so the whole family stays visually consistent.',
      },
      {
        title: 'Review and refinement',
        description:
          'You review everything in one pass with comments left directly on the files. Two revision rounds are included per asset set, and we flag clearly when a change is a revision rather than a new item.',
      },
      {
        title: 'Export and handover',
        description:
          'Final assets are exported in every format and size needed — web, social, print — and handed over with the layered sources, fonts and usage notes in one organised folder structure.',
      },
    ],
    deliverables: [
      'Final assets exported in web, social and print formats at all required sizes',
      'Layered source files in Figma, Illustrator or Photoshop',
      'Custom icon set drawn on a consistent grid and stroke weight',
      'Editable social post, story and carousel templates',
      'Ad creative variants sized for each placement you run',
      'Presentation template with working slide masters',
      'Print-ready PDFs with bleed, trim marks and CMYK profiles',
      'Short usage notes covering colours, fonts, sizes and asset selection',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'WordPress'],
    idealFor: [
      'Your website looks sharp but your social and print material does not match it',
      'Marketing waits on a freelancer every time a graphic is needed',
      'Icons and images on the site came from several different stock libraries',
      'You have a campaign, launch or trade show with a fixed date approaching',
      'Your deck is doing serious commercial work and currently looks improvised',
      'You want templates your own team can maintain rather than one-off files',
    ],
    faqs: [
      {
        question: 'Can you work to our existing brand guidelines?',
        answer:
          'Yes, that is the most common way this service runs. Send us the brand book, logo files, palette and fonts and everything we produce sits inside those rules. Where guidelines are silent — and they usually are on social crops, dark backgrounds, icon style or chart colours — we make a consistent decision, show you the reasoning, and document it so the next asset follows the same rule.',
      },
      {
        question: 'Do you offer ongoing design support rather than one-off projects?',
        answer:
          'We do, and it suits most marketing teams better. A monthly retainer covers an agreed volume of assets — social sets, campaign creative, landing page graphics, deck updates — with a predictable turnaround. Because we already hold your source files and know the brand rules, requests get produced far faster than briefing a new freelancer for each one. Most of our clients stay with us for two years or more.',
      },
      {
        question: 'Do you design logos as part of this service?',
        answer:
          'A logo belongs in a brand identity engagement rather than here, because it needs proper exploration and a full set of variants and rules behind it. If you already have a logo, this service produces everything that surrounds it. If you do not, start with brand identity design and then move on to graphic work once the core marks and palette are settled.',
      },
      {
        question: 'What file formats do we receive?',
        answer:
          'Web assets come as optimised WebP or PNG with SVG for anything vector, at the exact dimensions your templates render. Social assets arrive sized per placement with editable templates. Print files are supplied as press-ready PDFs with bleed and CMYK, plus the layered sources. You keep every editable file, so another designer could pick the work up tomorrow.',
      },
      {
        question: 'How quickly can you turn work around?',
        answer:
          'A single asset or a small social set is usually two to three working days. A full campaign with multiple sizes and variants takes about a week. Print collateral depends on how many rounds of copy approval sit on your side. If you have a fixed launch or event date, tell us at the briefing stage and we schedule backwards from it.',
      },
    ],
    relatedServiceSlugs: [
      'brand-identity-design',
      'website-design',
      'landing-page-development',
      'ui-ux-design',
    ],
    /* Deliberately empty. We have no standalone graphic-design portfolio to
       show — the visual work in the portfolio was produced inside website
       builds, and listing those builds here would claim design deliverables
       the project records do not support. The service page drops its
       "Work We Have Shipped" band entirely when this list is empty. */
    relatedProjectSlugs: [],
  },

  /* ------------------------------------------------------------------ */
  /*  Brand Identity Design                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'Design',
    icon: 'sparkles',
    short:
      'A logo, colour system, typography and messaging that hold together everywhere your business shows up.',
    metaTitle: 'Brand Identity Design: Logo, Colour, Guidelines',
    metaDescription:
      'Brand identity design built screen-first: logo suite, colour system with defined roles, typography, messaging basics and guidelines your whole team can apply.',
    heroTitle: 'Brand identity design built to work on screen first',
    heroIntro:
      'Plenty of identities look immaculate on a presentation slide and fall apart the moment they meet a 32px favicon, a dark navigation bar or a form error message. We build identities screen-first: every mark, colour and type decision is tested against the places your brand actually lives, then written down so the next person applying it does not have to guess.',
    whatYouGet: [
      {
        title: 'A complete logo suite, not a single file',
        description:
          'Primary lockup, horizontal and stacked variants, a standalone icon or monogram, plus one-colour and reversed versions. Every variant is drawn to work at its own size, so the app icon is not simply the full lockup shrunk until it is illegible.',
      },
      {
        title: 'A colour system with defined roles',
        description:
          'Not a swatch row, but a system: which colour is the interactive one, which is emphasis only, which carries full-bleed sections, what backgrounds are permitted. Every pairing is checked for contrast, so accessible combinations are the default rather than an afterthought.',
      },
      {
        title: 'Typography that survives the web',
        description:
          'A heading and body pairing chosen from families with real weight ranges and web licensing, plus a defined type ramp and line heights. We check the fonts render well at small sizes and in any language you publish in, including right-to-left scripts.',
      },
      {
        title: 'Messaging foundations',
        description:
          'A positioning line, a short elevator description, three or four proof points and a tone-of-voice note with do and do-not examples. Enough for whoever writes your next page, post or proposal to sound like the same company each time.',
      },
      {
        title: 'Applications you can see before signing off',
        description:
          'We apply the identity to real surfaces — a website header, a social profile and post, a business card, an email signature, a deck cover — so you approve a working brand rather than a logo floating on a white artboard.',
      },
      {
        title: 'Written guidelines the team will actually use',
        description:
          'A concise document covering logo clear space and minimum sizes, colour values with roles, type scale, imagery direction, icon style and common misuses. Short enough to be read, specific enough to settle arguments.',
      },
    ],
    process: [
      {
        title: 'Brand discovery',
        description:
          'We work through what you do, who buys it, who you compete with and how you want to be understood. We also audit your existing material and your competitors, because a distinctive identity requires knowing what your market already looks like.',
      },
      {
        title: 'Direction and territories',
        description:
          'We present two or three visual territories as small boards showing type, colour and mark treatment applied to a real surface. You choose one direction to develop, and we agree what is working and what is not before detailed drawing begins.',
      },
      {
        title: 'Logo development',
        description:
          'The chosen direction is refined properly: construction, optical balance, spacing, small-size legibility, and one-colour reproduction. We test the mark at favicon size, on a dark header and in greyscale before showing it back to you.',
      },
      {
        title: 'System build and applications',
        description:
          'We extend the mark into the full colour, type and layout system, then apply it across the sample surfaces so you can judge the identity in use rather than in isolation.',
      },
      {
        title: 'Guidelines and asset handover',
        description:
          'Everything is packaged: source files, every export format, licensed or open web fonts, and the written guidelines. If we go on to build your website, this system becomes the design tokens the site is built from.',
      },
    ],
    deliverables: [
      'Primary logo plus horizontal, stacked, icon, one-colour and reversed variants',
      'Logo files in SVG, PNG, PDF and favicon-ready sizes',
      'Colour system with hex, RGB and CMYK values and a defined role per colour',
      'Contrast-checked colour pairings for text, buttons and backgrounds',
      'Typography system: families, weights, type ramp and line heights',
      'Messaging foundations: positioning line, description, proof points, tone notes',
      'Sample applications across web, social, print and email',
      'Written brand guidelines document',
      'All editable source files in Figma and Illustrator',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Google Fonts', 'Adobe Fonts', 'WordPress'],
    idealFor: [
      'You are launching a new company, product or practice and starting from nothing',
      'The current logo was made quickly years ago and now limits everything else',
      'Different team members use different colours, fonts and versions of the logo',
      'You are about to commission a website and want the identity settled first',
      'The brand reads as smaller or less established than the business actually is',
      'You are entering a new market or language and the identity has to travel',
    ],
    faqs: [
      {
        question: 'How many logo concepts do we get to see?',
        answer:
          'We present two or three developed directions rather than a wall of thumbnails. Each one is a considered answer to the brief, shown applied to a real surface so you can judge it in context. You choose a direction, and we refine that one through two rounds. Showing twenty rough marks generates opinions instead of decisions and rarely produces a stronger result.',
      },
      {
        question: 'Do you handle trademark registration?',
        answer:
          'We do not file trademarks, and we are upfront that we are not a legal service. What we do is check for obvious conflicts in your sector during development so we are not building on an idea that is plainly taken. Before you register, have a trademark attorney run a formal search in every territory you operate in. We supply whatever files they need.',
      },
      {
        question: 'Can you refresh our existing brand instead of replacing it?',
        answer:
          'Yes, and it is frequently the better call when your name and mark already carry recognition. A refresh keeps the recognisable core and fixes what is failing: redrawing the logo for small sizes, replacing colours that fail contrast, choosing typefaces with proper web licensing, and adding the digital rules the original never covered. It costs less and does not discard the equity you have built.',
      },
      {
        question: 'Will the identity work in other languages?',
        answer:
          'We build for it when you tell us it matters. We have shipped websites in eight languages including Hebrew, which runs right to left, along with German, French, Italian, Polish, Dutch and Norwegian. That means checking that typefaces carry the character sets you need, that the lockup survives longer German words, and that layouts mirror cleanly for right-to-left reading.',
      },
      {
        question: 'What happens after the identity is delivered?',
        answer:
          'Most clients move straight into website design, where the identity becomes the design tokens the site is built from: colour roles, type ramp, spacing and component styles. Others start with graphic and visual design for launch collateral. Either way you own every source file outright, so you are free to take the identity to any studio or in-house designer you choose.',
      },
    ],
    relatedServiceSlugs: [
      'graphic-visual-design',
      'website-design',
      'ui-ux-design',
      'landing-page-development',
    ],
    /* Only the projects whose own records claim `brand-identity-design`, so
       the service page and the case-study "services used" strips agree. */
    relatedProjectSlugs: ['your-brain-coach-d', 'loofys'],
  },
];
