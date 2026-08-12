import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'ai-integration-for-small-business-websites',
  title: 'Practical AI Integrations for Business Websites',
  metaTitle: 'Practical AI Integrations for Business Websites',
  metaDescription:
    'A practical guide to AI and LLM integrations for business websites: which features pay off, where the model call belongs, what it costs and how to ship safely.',
  category: 'AI & Automation',
  tags: ['AI', 'LLM integration', 'automation', 'APIs', 'web development'],
  publishedAt: '2026-03-03',
  readingMinutes: 10,
  authorSlug: 'shaharyar-ansari',
  excerpt:
    'Most requests to “add AI” to a website are really requests to remove a bottleneck. Here is how we decide what to build, where the model call should live, and how to keep it accurate, fast and affordable.',
  body: [
    {
      type: 'p',
      text: 'Almost every week someone asks us to add AI to their website. Underneath that request there is nearly always a specific, unglamorous problem: a support inbox that never empties, a catalogue nobody can search properly, an intake form that generates work rather than removing it, or a team retyping the same three paragraphs into every proposal. The phrase “add AI” is doing a lot of work, and the first job is to translate it back into the bottleneck it came from.',
    },
    {
      type: 'p',
      text: 'We build in both directions. On the WordPress side we bolt AI onto sites that already earn their keep — content libraries, clinic and coaching sites, WooCommerce stores, multi-location service businesses — where the model handles one narrow job and the rest of the site stays boringly reliable. On the Bubble.io side we build products where the model is the product: an on-demand technology research platform for R&D teams, an adaptive mock-interview application that runs human-like conversations with job seekers, and an image-generation suite for professional tattoo artists. Different stacks, same discipline.',
    },
    {
      type: 'p',
      text: 'This guide is the practical middle ground between “AI will transform your business” and “it is just an autocomplete”. It covers which integrations reliably repay the build cost, where in your architecture the model call belongs, what actually drives the running bill, and the guardrails that keep a helpful feature from becoming a liability.',
    },

    { type: 'h2', text: 'What “adding AI” actually means' },
    {
      type: 'p',
      text: 'Before scoping anything, we separate the request into three categories. They have very different costs, risks and payback periods, and conflating them is how projects go sideways.',
    },
    { type: 'h3', text: 'Features your visitors see' },
    {
      type: 'p',
      text: 'Answer assistants, conversational search, guided product finders, generated previews. These are the most visible and the most exposed — every response is published under your brand, in public, instantly. They need the tightest grounding and the most testing, and they are the ones people most often build first and regret.',
    },
    { type: 'h3', text: 'Features your team sees' },
    {
      type: 'p',
      text: 'Draft replies, enquiry summaries, proposal first passes, translation drafts, content briefs. A human reviews every output before it leaves the building, which collapses the risk profile and usually delivers the fastest measurable time saving. If you have never shipped an AI feature, start here.',
    },
    { type: 'h3', text: 'Work that happens with nobody watching' },
    {
      type: 'p',
      text: 'Classification, extraction, routing, tagging, deduplication. This is the least glamorous category and often the most valuable: turning an unstructured CV, invoice or intake form into clean fields your database can actually use. It rarely needs a chat interface at all.',
    },

    { type: 'h2', text: 'Start with the job, not the model' },
    {
      type: 'p',
      text: 'Model choice is one of the last decisions, not the first. Before we write a line of integration code we insist on answers to five questions, because they determine whether the feature is buildable at all.',
    },
    {
      type: 'ol',
      items: [
        'What decision or task is being made today, by whom, and how long does it take? If nobody can describe the manual version, there is nothing to automate.',
        'What does the model need to know that it cannot possibly know? Your prices, your stock, your policies, your German-language service pages. That content becomes your retrieval layer.',
        'What does a wrong answer cost? A slightly clumsy blog draft is cheap. A wrong dosage, price quote or legal statement is not, and that answer alone decides how much human review you need.',
        'How will you tell whether it works? Deflected support emails, qualified enquiries, minutes saved per document — pick the measure before launch, not after.',
        'Who owns it after go-live? Prompts, retrieval content and models all drift. An AI feature is a maintained system, not a delivered artefact.',
      ],
    },

    { type: 'h2', text: 'Integrations that consistently earn their place' },
    {
      type: 'p',
      text: 'Across the AI work we have delivered, a handful of patterns come up repeatedly because they map cleanly onto real business friction. The table below is how we sanity-check a request against effort and risk before quoting it.',
    },
    {
      type: 'table',
      headers: ['Integration', 'Best suited to', 'Build effort', 'Main risk to manage'],
      rows: [
        [
          'Grounded answer assistant',
          'Content-heavy sites, resource libraries, documentation, FAQs',
          'Medium',
          'Answering from stale or out-of-scope content',
        ],
        [
          'Enquiry qualification and routing',
          'Service businesses with high, mixed-quality lead volume',
          'Low to medium',
          'Filtering out genuine enquiries',
        ],
        [
          'Draft generation for staff',
          'Agencies, recruiters, clinics, anyone writing repetitive copy',
          'Low',
          'Output published without review',
        ],
        [
          'Structured extraction from documents',
          'Applications, CVs, invoices, long intake forms',
          'Medium',
          'Silent field-level errors that look plausible',
        ],
        [
          'Recommendation and product finders',
          'E-commerce catalogues, course and programme catalogues',
          'Medium to high',
          'Thin behavioural data at launch',
        ],
        [
          'Conversational product experience',
          'AI-native SaaS where the model is the core value',
          'High',
          'Latency, cost per session and abuse',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The pattern worth noticing: the cheapest builds sit closest to your team and furthest from your public pages. A drafting tool behind a login can ship in days. A public assistant that speaks for your brand in eight languages is a product, and should be scoped like one.',
    },

    { type: 'h2', text: 'Where the model call should live' },
    {
      type: 'p',
      text: 'The architecture question matters more than the model question, because it is the part you cannot cheaply change later. Three rules cover most of it.',
    },
    { type: 'h3', text: 'Server side, without exceptions' },
    {
      type: 'p',
      text: 'Your API key never touches the browser. On WordPress that means a small server-side endpoint or plugin that holds the credential and proxies the request; on Bubble.io it means the API Connector with server-side keys and privacy rules on the underlying data. A key shipped in client JavaScript is a key someone else is already spending. Put rate limiting and an abuse cap on that endpoint on day one, not after the first surprise invoice.',
    },
    { type: 'h3', text: 'Ask for structure, not prose' },
    {
      type: 'p',
      text: 'Anything that feeds your database, your routing logic or your UI should come back as validated structured output rather than free text you then try to parse. Define the shape, enforce it, and reject anything that fails validation.',
    },
    {
      type: 'code',
      language: 'json',
      code: `{
  "name": "qualify_enquiry",
  "schema": {
    "type": "object",
    "properties": {
      "intent": {
        "type": "string",
        "enum": ["new_project", "support", "recruitment", "spam"]
      },
      "budget_band": {
        "type": "string",
        "enum": ["unknown", "under_5k", "5k_to_15k", "over_15k"]
      },
      "summary": { "type": "string", "maxLength": 280 },
      "route_to": { "type": "string", "enum": ["sales", "support", "archive"] },
      "confidence": { "type": "number", "minimum": 0, "maximum": 1 }
    },
    "required": ["intent", "route_to", "confidence"],
    "additionalProperties": false
  }
}`,
    },
    {
      type: 'p',
      text: 'Note the confidence field. Anything below your threshold goes to a human queue instead of being acted on automatically. That single design decision is what separates an automation you can trust from one you have to babysit.',
    },
    { type: 'h3', text: 'Design for slow, wrong and unavailable' },
    {
      type: 'ul',
      items: [
        'Timeouts on every call, with a fallback that degrades to the normal site experience — a working contact form, a standard search results page.',
        'Streaming responses where the interface is conversational, so the user sees progress rather than a spinner.',
        'Idempotent retries, capped at one or two attempts, so a transient failure does not double-charge or double-send.',
        'Logged prompts and responses (with personal data redacted) so you can diagnose a bad answer weeks later.',
        'A kill switch: one setting that disables the feature site-wide without a deployment.',
      ],
    },

    { type: 'h2', text: 'What it actually costs to run' },
    {
      type: 'p',
      text: 'Published per-token prices change constantly, so quoting figures here would be misleading within months. What does not change is the shape of the bill. Model your costs against these drivers and you can forecast a feature before you build it.',
    },
    {
      type: 'table',
      headers: ['Cost driver', 'What inflates it', 'How we keep it in check'],
      rows: [
        [
          'Input tokens',
          'Long system prompts, whole-page context, unbounded chat history',
          'Retrieve only the top matching passages; cap conversation history',
        ],
        [
          'Output tokens',
          'Chatty, unbounded responses',
          'Constrain with schemas and explicit output limits',
        ],
        [
          'Request volume',
          'Firing on page load or on every keystroke',
          'Trigger on clear user intent; debounce input',
        ],
        [
          'Model tier',
          'Using a frontier model for trivial classification',
          'Route simple tasks to a smaller, cheaper model',
        ],
        [
          'Retries and failures',
          'Invalid output, timeouts, no validation',
          'Validate first, retry once, then fall back',
        ],
        [
          'Repeat questions',
          'The same query answered thousands of times',
          'Cache answers to common queries and reuse them',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Build the cost ceiling into the feature itself: a monthly spend cap, per-session limits, and alerting when usage steps outside the expected band. A bounded feature that occasionally says “try again shortly” is far better than an unbounded one you have to switch off in a panic.',
    },

    { type: 'h2', text: 'Guardrails, accuracy and the honesty problem' },
    {
      type: 'p',
      text: 'A language model will produce a confident, well-written, entirely wrong answer without any change in tone. That is not a bug you can prompt your way out of; it is a property of the tool, and your architecture has to account for it. Grounding is the main defence: retrieve the relevant passages from your own content, instruct the model to answer only from those passages, and cite the source page in the response so the visitor can verify it. If nothing relevant is retrieved, the correct output is a referral to a human, not an improvised answer.',
    },
    {
      type: 'callout',
      title: 'Never let a model quote a price or make a promise',
      text: 'Prices, availability, legal terms, medical guidance and delivery commitments should be rendered from your database or your CMS, never generated. We route those questions to a fixed answer or a human every time. It is the single rule that has saved our clients the most trouble.',
    },
    {
      type: 'p',
      text: 'Data handling deserves the same care. Decide explicitly what leaves your servers, strip personal data before it does, tell visitors clearly when they are talking to an automated assistant, and check your provider’s retention and training terms against your privacy policy. For clients operating in the EU and UK — a large share of the sites we ship, in German, French, Italian, Dutch, Polish and Norwegian — that conversation happens before any code is written, not after.',
    },

    { type: 'h2', text: 'Performance, SEO and accessibility' },
    {
      type: 'p',
      text: 'An AI feature is still a front-end feature, and it competes with everything else on the page for the same budget. Google’s Core Web Vitals thresholds are unchanged by your ambitions: Largest Contentful Paint at or under 2.5 seconds, Interaction to Next Paint at or under 200 milliseconds, Cumulative Layout Shift at or under 0.1. A heavy third-party chat widget loaded on every page is one of the fastest ways to lose all three.',
    },
    {
      type: 'ul',
      items: [
        'Load the assistant lazily, on interaction, rather than in the initial bundle — and never let it block your hero content.',
        'Reserve space for anything that appears dynamically so injected panels do not shift the layout underneath the reader.',
        'Give the widget real accessibility support: keyboard focus management, an accessible name, ARIA live regions for streamed replies, and a visible focus ring.',
        'Remember that a client-side generated answer is invisible to crawlers. Content you want to rank must be server-rendered in your pages, with the assistant as a convenience layer on top.',
        'Do not treat generated text as an SEO shortcut. Thin, unedited, duplicated output is a liability; the model belongs in your drafting workflow, with a human doing the thinking and the editing.',
      ],
    },

    { type: 'h2', text: 'How we approach AI integration at Tekvion' },
    {
      type: 'p',
      text: 'Our sequence is deliberately conservative, because the failure mode we see most often in inherited projects is an impressive demo with no operational plan behind it.',
    },
    {
      type: 'ol',
      items: [
        'Map the bottleneck. We sit with the people doing the work today and document the manual process, its volume and its error cost.',
        'Pick the narrowest useful slice. One job, one interface, one measurable outcome — not a general-purpose assistant.',
        'Build the data layer first. Retrieval content, structured fields and permissions come before any prompt engineering; the quality of what you retrieve sets the ceiling on answer quality.',
        'Prototype against real inputs. Actual enquiries, actual documents, actual awkward multilingual edge cases — never sanitised samples.',
        'Ship behind a flag with a human in the loop, then relax the supervision only where the evidence supports it.',
        'Instrument and review. Logs, spend, fallback rates and answer quality get checked on a schedule, alongside the rest of the site’s maintenance.',
      ],
    },
    {
      type: 'p',
      text: 'Stack choice follows the same logic. If your site is WordPress and the AI is one feature among many, we keep WordPress and integrate through a secure server-side endpoint and a well-designed API layer. If the AI is the product — accounts, credits, workflows, a real application behind a login — we usually build it in Bubble.io, which is how our AI research, interview-practice and image-generation products were delivered. And where a business needs both, we split them: a fast marketing site paired with the application on an app subdomain, an architecture we have shipped more than once.',
    },

    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Pick the single task your team repeats most often, put a model behind it with a human reviewing the output, and measure the time it gives back over a month. That one feature will teach you more about what AI is worth to your organisation than any strategy document, and it costs a fraction of a full product build.',
    },
    {
      type: 'p',
      text: 'When you are ready to go further, the work usually spans four of our services: AI and LLM integration for the model layer itself, API development and integrations to connect it to the systems you already run, custom web application development when the feature outgrows your marketing site, and Bubble.io development when speed of iteration matters more than a bespoke codebase. Tell us the bottleneck and we will tell you honestly which of those you need — and which you do not.',
    },
  ],
  relatedServiceSlugs: [
    'ai-llm-integration',
    'api-development-integrations',
    'custom-web-application-development',
    'bubble-nocode-development',
  ],
  relatedPostSlugs: [
    'wordpress-vs-bubble-io-which-to-choose',
    'how-much-does-a-website-cost',
    'website-maintenance-guide',
  ],
};
