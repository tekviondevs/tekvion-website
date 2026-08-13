import type { Service } from '@/content/types';

/**
 * Automation & CRM services.
 *
 * The operational layer: GoHighLevel build-outs, AI-driven workflows, and the
 * two automation platforms we build production systems on — n8n and Make.com.
 * Grounded in real delivery: complex n8n automations running in production for
 * The Boomerang alongside a Next.js + MERN + Supabase rebuild, a custom Data
 * Team Panel that replaced their Airtable, and AI product work on Tylo AI,
 * Mocki and InkGenX.
 */
export const automationServices: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'go-highlevel-development',
    title: 'GoHighLevel (GHL) Development',
    category: 'Automation & CRM',
    icon: 'megaphone',
    short:
      'Turn GoHighLevel into a working sales system — pipelines, funnels, calendars and follow-up that runs without anyone remembering to send it.',
    metaTitle: 'GoHighLevel (GHL) Development Services',
    metaDescription:
      'GoHighLevel build-out and configuration: CRM pipelines, funnels, calendars, automation workflows, snapshots and white-label setup, built and documented.',
    heroTitle: 'GoHighLevel build-out, automation and white-label configuration',
    heroIntro:
      'GoHighLevel gives you a CRM, funnel builder, calendar, email and SMS engine and an automation layer in one subscription. That breadth is exactly why most accounts end up half-configured: a pipeline nobody updates, three unfinished funnels, and workflows that fire at the wrong moment. We build the account around how your sales process actually works, then automate the parts that are currently held together by someone remembering.',
    whatYouGet: [
      {
        title: 'Account architecture and pipeline design',
        description:
          'We model your real sales process first — stages, owners, entry and exit criteria, what "qualified" genuinely means — then build pipelines, custom fields, tags and opportunity values around it. A CRM that mirrors how your team already sells is one they will keep updated.',
      },
      {
        title: 'Funnels, landing pages and forms',
        description:
          'Conversion pages built inside GoHighLevel to your brand, not a stretched template: clear offer hierarchy, mobile-first layouts, fast-loading assets, and forms and surveys whose fields map cleanly onto the CRM fields your automations depend on later.',
      },
      {
        title: 'Automation workflows that follow up properly',
        description:
          'Lead capture to first response, nurture sequences, appointment reminders and no-show recovery, review requests, stale-opportunity nudges and internal alerts — built as workflows with sensible waits, conditional branches and exit rules so nobody gets three messages in an hour.',
      },
      {
        title: 'Calendars, booking and routing',
        description:
          'Team and round-robin calendars with correct availability, buffers, time zones and confirmation flows, plus routing logic that sends each enquiry to the right person or location. Reminders go out over both email and SMS so the diary stops filling with no-shows.',
      },
      {
        title: 'Conversations, templates and reputation',
        description:
          'A unified inbox configured across SMS, email, web chat and social messaging, with saved reply templates, trigger links and internal assignment rules. Review request automations are timed to the moment a job is actually finished rather than the moment an invoice is raised.',
      },
      {
        title: 'Snapshots for repeatable rollouts',
        description:
          'If you run multiple locations, franchises or client sub-accounts, we package the working configuration into a snapshot: pipelines, workflows, funnels, calendars and templates ready to deploy to a new account in minutes, with a documented list of what has to be customised per location.',
      },
      {
        title: 'White-label and integration work',
        description:
          'Agency-mode setup with your own domain, branding and client-facing dashboards, plus the connections GoHighLevel does not cover natively — API and webhook integrations to your website, billing system, or an n8n or Make scenario handling logic too complex for a native workflow.',
      },
    ],
    process: [
      {
        title: 'Map the sales process before touching the platform',
        description:
          'We sit with the people who handle enquiries and document what actually happens today: where leads come from, who responds, how fast, what gets said, where deals stall. That map becomes the pipeline and workflow specification, and it usually exposes two or three fixable process problems on its own.',
      },
      {
        title: 'Build the account structure',
        description:
          'Custom fields, tags, pipelines, users, permissions, calendars, phone and email sending configuration, domain and DNS records for deliverability. Getting this foundation right first is what stops the account being rebuilt six months later when the naming conventions collapse.',
      },
      {
        title: 'Build funnels, forms and assets',
        description:
          'Landing pages, forms, surveys and templates are built and reviewed against real copy and real offers, with every field mapped to the CRM data the automation layer will read. We test each form end to end so a submission is proven to create the record and trigger the workflow.',
      },
      {
        title: 'Automate and integrate',
        description:
          'Workflows are built stage by stage with test contacts run through every branch, including the awkward paths: a duplicate enquiry, a reply mid-sequence, a cancelled booking. External systems are connected by API, webhook or an n8n scenario where the native builder cannot express the logic cleanly.',
      },
      {
        title: 'Launch, train and hand over',
        description:
          'We migrate existing contacts, go live in a controlled window, then train your team on the daily workflow rather than the whole platform. You get written documentation of every automation, what triggers it and how to pause it, so the account is yours to run.',
      },
    ],
    deliverables: [
      'Documented sales process map with pipeline stages and exit criteria',
      'Configured GoHighLevel account: fields, tags, pipelines, users and permissions',
      'Branded funnels, landing pages, forms and surveys',
      'Automation workflows for lead response, nurture, reminders and reviews',
      'Team and round-robin calendars with routing and reminder sequences',
      'Email and SMS sending configuration with domain authentication records',
      'Reusable snapshot for multi-location or sub-account rollout',
      'API and webhook integrations to your website and external systems',
      'Automation documentation plus a recorded team training session',
    ],
    techStack: [
      'GoHighLevel',
      'GHL Workflows',
      'GHL Funnels',
      'GHL Snapshots',
      'Twilio',
      'Mailgun',
      'Stripe',
      'Google Calendar',
      'n8n',
      'Make',
      'Zapier',
      'Webhooks',
      'WordPress',
      'Next.js',
    ],
    idealFor: [
      'You pay for GoHighLevel monthly and use a fraction of what it does',
      'Leads sit unanswered because follow-up depends on someone remembering',
      'You are consolidating a CRM, email tool, funnel builder and booking app into one',
      'You run several locations or franchises that all need the same setup',
      'You are an agency wanting a white-label platform to resell',
      'Your GHL account was set up by someone who left and nobody understands it',
    ],
    faqs: [
      {
        question: 'Can you take over a GoHighLevel account somebody else set up?',
        answer:
          'Regularly, and it is one of the more common requests. We start by auditing what exists: which workflows are live, which are orphaned, where fields duplicate each other, and whether anything is quietly failing. You get a written picture of the account before we change it. Sometimes the honest recommendation is to rebuild the automation layer on top of your existing data rather than untangle years of half-finished workflows.',
      },
      {
        question: 'Should we use GoHighLevel or a traditional CRM?',
        answer:
          'GoHighLevel earns its place when you want CRM, funnels, calendars, SMS and email automation from one vendor and one bill, which suits agencies, clinics, trades and local service businesses very well. If you need deep product analytics, complex quoting, or an established ecosystem of enterprise integrations, a dedicated CRM plus separate marketing tooling is usually the better answer. We will tell you which side you fall on before you commit.',
      },
      {
        question: 'Will you migrate our existing contacts and history?',
        answer:
          'Yes. Contacts, custom fields, tags, notes and opportunity stages are mapped from your current system, deduplicated, imported into a staging state and checked before anything goes live. Message and call history rarely transfers cleanly between platforms, so we agree upfront what genuinely needs to move versus what stays in an archived export you can still search when you need it.',
      },
      {
        question: 'Do you build snapshots we can reuse across client accounts?',
        answer:
          'That is the point of building it properly once. We package pipelines, workflows, funnels, calendars, templates and custom fields into a snapshot, then document exactly which items need per-account customisation — sending domain, calendar owners, business hours, offer copy. Deploying a new sub-account becomes a short configuration job instead of a rebuild, which is where the margin in an agency GHL practice actually comes from.',
      },
      {
        question: 'What if a workflow needs logic GoHighLevel cannot handle?',
        answer:
          'It happens, usually around data enrichment, multi-system reconciliation, or anything requiring a real database lookup. The clean pattern is to keep GoHighLevel as the CRM and messaging surface, and hand the complex step to an n8n or Make scenario over a webhook, which does the work and writes the result back. We build automations across all three platforms, so the boundary is a design decision rather than a limitation.',
      },
    ],
    relatedServiceSlugs: [
      'ai-automation',
      'n8n-automation',
      'make-com-automation',
      'landing-page-development',
    ],
    relatedProjectSlugs: [],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    category: 'Automation & CRM',
    icon: 'bot',
    short:
      'Hand the repetitive judgement work — triage, enrichment, drafting, summarising — to a language model inside a workflow you can audit.',
    metaTitle: 'AI Automation for Business Operations',
    metaDescription:
      'AI automation for business operations: LLM-driven lead triage, data enrichment, content drafting and support workflows built on n8n, Make and custom code.',
    heroTitle: 'AI automation for the operational work that eats your team’s week',
    heroIntro:
      'Traditional automation moves data between systems. AI automation handles the step in the middle that used to need a person: reading a messy enquiry and deciding where it goes, summarising a long thread, extracting fields from a document, drafting the first version of a reply. We have shipped AI products — Tylo AI, Mocki and InkGenX — and we build the same discipline into operational workflows, because a model that is confidently wrong inside a business process is far more expensive than one inside a demo.',
    whatYouGet: [
      {
        title: 'An honest assessment of what to automate',
        description:
          'We separate the tasks a language model genuinely does better — classifying, summarising, extracting structure from unstructured text, drafting in a known tone — from the ones a rule, a filter or a form handles more reliably and far more cheaply. Sometimes the recommendation is to fix the process, not add a model.',
      },
      {
        title: 'Lead and enquiry triage',
        description:
          'Incoming messages are read, categorised, scored against your qualification criteria, enriched with company or context data, and routed to the right person or pipeline stage with a short summary attached. Your team opens a triaged queue rather than an undifferentiated inbox.',
      },
      {
        title: 'Document and data extraction',
        description:
          'Invoices, briefs, applications, CVs, transcripts and PDFs are parsed into structured fields against a defined schema, validated, and written into your database, CRM or spreadsheet. Anything the model is not confident about is flagged for review instead of quietly saved as a guess.',
      },
      {
        title: 'Content and communication drafting',
        description:
          'First drafts produced in your voice from your own source material: product descriptions, follow-up emails, meeting summaries, support replies, multilingual adaptations. A human still approves anything customer-facing, which is exactly where the time saving is real and the risk is not.',
      },
      {
        title: 'Support and knowledge workflows',
        description:
          'Retrieval over your own documentation and past conversations so answers cite your actual policies rather than a plausible invention, with automatic ticket summarising, tagging, priority detection and escalation when the request falls outside what the assistant should be answering.',
      },
      {
        title: 'Guardrails, validation and human checkpoints',
        description:
          'Structured output schemas that reject malformed responses before anything is written, confidence thresholds, explicit fallback paths, and a human approval step wherever a wrong answer would cost money or credibility. Every run is logged so you can see what the model saw and what it decided.',
      },
      {
        title: 'Cost, latency and volume control',
        description:
          'We model cost per run before building, then keep it down with caching, tighter context, and routing simple classification to smaller models while reserving larger ones for genuine reasoning. Hard usage caps mean an unexpected traffic spike cannot produce a surprise invoice.',
      },
    ],
    process: [
      {
        title: 'Find the expensive task',
        description:
          'We shadow the real work and measure it: how many enquiries, documents or tickets per week, how long each takes, what it costs in salaried hours, and where errors currently creep in. Without that baseline there is no way to prove the automation is an improvement rather than a novelty.',
      },
      {
        title: 'Prototype against your real data',
        description:
          'We build a narrow version using your genuine, awkward inputs rather than clean examples, and run it alongside the human process for a short period. Most concepts change materially here — usually because the real inputs are messier than anyone remembered.',
      },
      {
        title: 'Engineer the pipeline',
        description:
          'Retrieval, prompt templates with versioning, structured output parsing, validation, retries, error handling and logging are built as a proper pipeline in n8n, Make or custom code, so each stage is inspectable and improvable on its own rather than being one opaque call.',
      },
      {
        title: 'Evaluate before and after every change',
        description:
          'A fixed set of real inputs with known good outputs is scored whenever a prompt, model or retrieval strategy changes. Improvements get demonstrated rather than felt, and a regression is caught in the evaluation run instead of by a customer three weeks later.',
      },
      {
        title: 'Ship, monitor and tune',
        description:
          'Launch includes run logging, failure alerting, cost and volume dashboards, and a feedback route on individual outputs. We review real runs after a few weeks and tune retrieval and prompts against what actually happened in production.',
      },
    ],
    deliverables: [
      'Task assessment with an automate, simplify or leave-alone recommendation',
      'Cost and time baseline for the process being automated',
      'Working prototype tested against your real inputs',
      'Production AI workflow deployed in n8n, Make or custom code',
      'Retrieval pipeline over your documents and structured data',
      'Versioned prompt library with structured output schemas',
      'Evaluation set and scoring results for every prompt or model change',
      'Run logging, failure alerting and cost monitoring',
      'Documented guardrails, fallback behaviour and human-review checkpoints',
    ],
    techStack: [
      'n8n',
      'Make',
      'OpenAI API',
      'Anthropic API',
      'Next.js',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'Bubble.io',
      'Vector search',
      'JSON Schema',
      'Webhooks',
      'Intercom',
      'GoHighLevel',
    ],
    idealFor: [
      'Your team retypes, re-reads or re-summarises the same information daily',
      'Enquiries arrive as free text and someone has to sort them by hand',
      'You process documents whose data ends up keyed into another system',
      'Support answers the same questions with slightly different wording each time',
      'A first AI experiment produced confident nonsense and lost internal trust',
      'You want AI inside your operations, not a chat widget bolted to a page',
    ],
    faqs: [
      {
        question: 'How do you stop an AI workflow acting on a wrong answer?',
        answer:
          'Three layers, used together. Retrieval grounds the model in your own documents and records so it summarises rather than recalls. Structured output schemas and validation reject anything malformed or out of range before it is written anywhere. And confidence thresholds route uncertain cases to a human queue instead of guessing. The failure mode we design for is "escalate to a person", never "write something plausible to the database".',
      },
      {
        question: 'Is our data used to train someone else’s model?',
        answer:
          'Not when it is configured correctly. The major providers offer API terms and account settings that exclude your data from training, and we enable them explicitly rather than trusting a default. We also agree upfront what leaves your systems at all — personal data can be redacted or swapped for internal references before a request is sent — and we document the flow so your privacy policy describes what genuinely happens.',
      },
      {
        question: 'What does an AI automation cost to run each month?',
        answer:
          'It depends on run volume, how much context each run carries and which model handles it, which is why we estimate cost per run during the prototype rather than after launch. Typical operational workflows sit in the low tens of dollars a month; heavy document processing costs more. We reduce it with caching, tighter context and model routing, and set hard caps so spend cannot run away.',
      },
      {
        question: 'Do we need AI at all, or would plain automation do?',
        answer:
          'Very often plain automation does. If the rule can be written down — this field equals that value, so route it there — a deterministic workflow in n8n or Make is cheaper, faster and completely predictable, and we will build that instead. A language model earns its place only where the input is unstructured or the judgement genuinely varies. We say so plainly rather than adding a model because it is fashionable.',
      },
      {
        question: 'What AI work have you actually shipped?',
        answer:
          'Tylo AI is a research platform with several AI and LLM tools and graph-based data display. Mocki runs adaptive LLM mock interviews that respond to the candidate in real time. InkGenX generates artwork through multiple image models behind one workflow. On the operations side we built complex n8n automations in production for The Boomerang alongside their Next.js and MERN rebuild. That is product-grade experience, not a course certificate.',
      },
    ],
    relatedServiceSlugs: [
      'n8n-automation',
      'make-com-automation',
      'ai-llm-integration',
      'api-development-integrations',
    ],
    /* Tylo AI, Mocki and InkGenX are AI *products* we built, not operations
       automation engagements — they belong on `ai-llm-integration`, and the
       FAQ above names them in that context. The Boomerang is the only project
       where we shipped AI-adjacent operational automation. */
    relatedProjectSlugs: ['the-boomerang'],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'n8n-automation',
    title: 'n8n Workflow Automation',
    category: 'Automation & CRM',
    icon: 'git-branch',
    short:
      'Build the workflows your business runs on in n8n — self-hosted or cloud — with proper error handling instead of per-task billing.',
    metaTitle: 'n8n Workflow Automation Services',
    metaDescription:
      'n8n workflow automation, self-hosted or cloud: integrations, AI steps, error handling and monitoring, built and run in production for real client operations.',
    heroTitle: 'n8n workflow automation, self-hosted or on n8n Cloud',
    heroIntro:
      'n8n is where we build automation that has outgrown per-task pricing or needs to run on infrastructure you control. It handles branching logic, loops, custom JavaScript, AI steps and direct database access, and self-hosting means your data never has to pass through a third-party automation vendor at all. We build complex n8n automations in production — including for The Boomerang, alongside their Next.js and MERN rebuild.',
    whatYouGet: [
      {
        title: 'Workflows designed around your real process',
        description:
          'We map the trigger, the decision points, the systems of record and the failure paths before opening the editor. The result is a workflow with clear branches and named nodes that someone else can read in six months, not a sprawl of 60 unlabelled steps nobody dares touch.',
      },
      {
        title: 'Self-hosted deployment you control',
        description:
          'Docker-based n8n on your own server or cloud account, with a PostgreSQL backend, queue mode where throughput demands it, HTTPS, backups and version-pinned upgrades. Your credentials and payload data stay inside your infrastructure, which matters for regulated or client-confidential work.',
      },
      {
        title: 'Deep integrations, including the awkward ones',
        description:
          'Native nodes where they exist, and authenticated HTTP requests where they do not, so an obscure or internal API is never a blocker. We handle OAuth flows, pagination, rate limits and API versioning properly rather than hoping a happy-path request keeps working.',
      },
      {
        title: 'AI steps inside the workflow',
        description:
          'Language-model nodes for classification, extraction, summarising and drafting, with structured output parsing and validation so downstream nodes receive predictable data. Vector stores and retrieval can be wired in where a workflow needs to answer from your own documents.',
      },
      {
        title: 'Error handling that surfaces failures',
        description:
          'Dedicated error workflows, retries with backoff on transient failures, idempotency so a retry cannot duplicate an order or a contact, and alerts to email, Slack or your ticketing system. The worst automation is one that stopped working three weeks ago and nobody noticed.',
      },
      {
        title: 'Internal tooling and data panels',
        description:
          'n8n backends can power the small internal tools that spreadsheets have outgrown — approval queues, sync jobs, scheduled reports. For The Boomerang we built a custom Data Team Panel that replaced the Airtable subscription they had been paying for, with automations feeding it.',
      },
      {
        title: 'Documentation and handover',
        description:
          'Every workflow gets a written description of its trigger, purpose, dependencies and failure behaviour, plus a credential inventory and a runbook for the common faults. You can hand it to another developer, or take it over yourself, without reverse-engineering the canvas.',
      },
    ],
    process: [
      {
        title: 'Map the process and the data',
        description:
          'We document what triggers the work, which system owns each field, what has to happen when two systems disagree, and which steps genuinely need to be real-time versus scheduled. Most of the value of an automation project is decided here, before a single node exists.',
      },
      {
        title: 'Choose the hosting model',
        description:
          'Self-hosted or n8n Cloud, decided on data sensitivity, execution volume, who will maintain the server and what your compliance position requires. We give you the running-cost and responsibility trade-off in plain terms rather than defaulting to whichever is easier for us.',
      },
      {
        title: 'Build and instrument',
        description:
          'Workflows are built in named, logical sections with error branches, retries and idempotency from the start rather than bolted on after the first incident. Sensitive values live in n8n credentials, never pasted into nodes, and execution logging is configured for the retention you need.',
      },
      {
        title: 'Test the failure paths',
        description:
          'We run duplicates, timeouts, malformed payloads, expired tokens and out-of-order webhooks through the workflow in a staging environment before it touches production data, then confirm the recovery and alerting behave exactly as designed.',
      },
      {
        title: 'Deploy, monitor and iterate',
        description:
          'Go-live is followed by a watching period with failure alerting on, then handover of documentation and credentials. Workflows are versioned so a change can be rolled back, and we review execution history to tune the steps that turn out to be slow or fragile.',
      },
    ],
    deliverables: [
      'Process map showing triggers, systems, data direction and failure paths',
      'Deployed n8n instance — self-hosted with Docker and PostgreSQL, or n8n Cloud',
      'Production workflows with named nodes and readable branch structure',
      'Error workflows with retries, idempotency and alert routing',
      'Credential inventory with a documented rotation procedure',
      'Staging environment and tested failure-path results',
      'Backup and upgrade procedure for self-hosted instances',
      'Written documentation per workflow: trigger, purpose, dependencies, recovery',
      'Handover session covering editing, monitoring and safe changes',
    ],
    techStack: [
      'n8n',
      'Docker',
      'Node.js',
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'REST APIs',
      'Webhooks',
      'OpenAI API',
      'Anthropic API',
      'Google Workspace',
      'Slack',
      'Intercom',
      'Stripe',
    ],
    idealFor: [
      'Your Zapier or Make bill grows every month with task volume',
      'Data protection rules mean payloads cannot pass through a third-party vendor',
      'The logic needs loops, branching or custom code a simple builder cannot express',
      'You want automation running on infrastructure you own and can audit',
      'An existing automation fails silently and nobody can tell when or why',
      'You need AI steps and database access inside the same workflow',
    ],
    faqs: [
      {
        question: 'Should we self-host n8n or use n8n Cloud?',
        answer:
          'Self-hosting wins on cost at volume, on data residency, and when payloads contain client-confidential information that should not sit with a third party. n8n Cloud wins when you would rather not own a server, patching or upgrades. The honest trade-off is that self-hosting is cheaper per execution but somebody has to maintain it — usually us, under a support arrangement. We size both and let you choose on facts.',
      },
      {
        question: 'How is n8n different from Zapier or Make?',
        answer:
          'n8n is developer-shaped: real branching and looping, arbitrary JavaScript in a node, direct database queries, self-hosting, and pricing per workflow execution rather than per task. Make is more visual and faster for straightforward multi-app scenarios. Zapier has the widest app catalogue and the gentlest learning curve. We build on all three and pick per project rather than per preference.',
      },
      {
        question: 'What happens when a workflow fails at 3am?',
        answer:
          'It should alert, not simply stop. We attach error workflows that catch failures, log the payload and the failing node, retry transient errors with backoff, and notify by email or Slack when a run needs human attention. Because writes are made idempotent, a replayed execution cannot create duplicate records. You wake up to a message about a failure, not a discovery three weeks later.',
      },
      {
        question: 'Can you take over workflows we have already built?',
        answer:
          'Yes, and we start with an audit rather than a rewrite. We document what each workflow does, find the ones failing quietly, add error handling and alerting, refactor the sprawling ones into readable sections, and secure any credentials pasted directly into nodes. Where a workflow has grown past the point of safe editing we say so and quote the rebuild rather than patching around it.',
      },
      {
        question: 'Have you actually run n8n in production?',
        answer:
          'Yes. We built complex n8n automations for The Boomerang, running alongside the custom Next.js and MERN application we built for them on Supabase, and feeding the Data Team Panel that replaced their Airtable subscription. That project also involved resolving a long list of issues in their Intercom setup. It is production automation carrying real operational load, not demo workflows.',
      },
    ],
    relatedServiceSlugs: [
      'make-com-automation',
      'ai-automation',
      'api-development-integrations',
      'go-highlevel-development',
    ],
    relatedProjectSlugs: ['the-boomerang'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'make-com-automation',
    title: 'Make.com Automation',
    category: 'Automation & CRM',
    icon: 'arrow-right-left',
    short:
      'Connect the apps your business already pays for into scenarios that run reliably, with error handling and a cost you can predict.',
    metaTitle: 'Make.com (Integromat) Automation Services',
    metaDescription:
      'Make.com scenario design and integration: connect your CRM, forms, billing and spreadsheets into reliable automations with error handling and cost control.',
    heroTitle: 'Make.com scenario design, integration and operations',
    heroIntro:
      'Make.com — formerly Integromat — is the fastest way to connect the tools you already pay for when the logic is clear and the volume is moderate. Its visual canvas, router logic and iterators cover far more than most people get out of it, and its per-operation pricing rewards scenarios that are designed rather than assembled. We build the scenarios, handle the failure paths, and tell you honestly when a job belongs in n8n or in code instead.',
    whatYouGet: [
      {
        title: 'Scenario design before scenario building',
        description:
          'We map the trigger, the branches, the data each module actually needs and the points where a run can fail. A scenario designed on paper first typically uses a fraction of the operations of one grown by adding modules until it works, and that difference is your monthly bill.',
      },
      {
        title: 'App connections across your stack',
        description:
          'CRM, forms, email and SMS, spreadsheets, accounting, e-commerce, project management, calendars and storage — connected through native Make modules where they exist, and through authenticated HTTP or webhook modules where they do not, so a missing integration is never the end of the conversation.',
      },
      {
        title: 'Routers, filters, iterators and aggregators used properly',
        description:
          'The features that separate a scenario that scales from one that breaks on the fifth record: conditional routing, filters that stop irrelevant runs early, iterators for arrays and line items, and aggregators that batch results instead of firing one operation per row.',
      },
      {
        title: 'Data mapping and transformation',
        description:
          'The unglamorous half of every integration: matching field names, normalising dates, currencies, phone formats and country codes, deduplicating records, and deciding which system is authoritative when two of them disagree about the same customer.',
      },
      {
        title: 'Error handling and recovery routes',
        description:
          'Error handler directives on the modules that can realistically fail, break and retry behaviour for transient errors, incomplete-execution handling so a failed run can be replayed rather than lost, and notifications when something needs a human. Silence is not the same as success.',
      },
      {
        title: 'Operation-cost optimisation',
        description:
          'Most Make bills are inflated by scenarios polling every minute when hourly would do, or by filters placed after the expensive modules rather than before them. We tune scheduling, filter placement and batching, and we can quantify the reduction before and after.',
      },
      {
        title: 'Documentation and ownership',
        description:
          'Named modules, a written description of each scenario’s trigger and purpose, a credential inventory, and a runbook for the faults most likely to occur. The scenarios live in your Make account under your billing, so you are never locked to us to keep them running.',
      },
    ],
    process: [
      {
        title: 'Map the workflow and the systems',
        description:
          'We document what starts the process, which app owns each piece of data, what must be real-time and what can run on a schedule, and what should happen when a step fails. This is where most of the eventual reliability and most of the eventual cost is decided.',
      },
      {
        title: 'Confirm the connections work',
        description:
          'Before designing anything in detail we verify each app connection, its authentication model, its rate limits and any gaps in the Make module — undocumented required fields and pagination quirks always surface here, and finding them early is much cheaper than finding them at launch.',
      },
      {
        title: 'Build with filters and errors first',
        description:
          'Scenarios are built with filters placed early, routers labelled clearly and error handlers attached as the modules are added, not retrofitted after the first bad week. Test data runs through every branch, including duplicates, empty fields and the cancelled or refunded paths.',
      },
      {
        title: 'Run in parallel and verify',
        description:
          'Where the scenario replaces a manual process, we run both for a short period and compare the outputs record by record. That is the only way to prove the automation matches what your team was actually doing, including the exceptions nobody wrote down.',
      },
      {
        title: 'Hand over and monitor',
        description:
          'Documentation, credential inventory and a walkthrough of the canvas, followed by a watching period with failure notifications on. We review the operations log after the first full billing cycle and tune anything running more often than it needs to.',
      },
    ],
    deliverables: [
      'Workflow map covering triggers, systems, branches and failure paths',
      'Built and tested Make scenarios in your own account',
      'Verified app connections with documented authentication and rate limits',
      'Field-level data mapping with transformation and deduplication rules',
      'Error handlers, retry routes and incomplete-execution handling',
      'Failure notifications routed to email or your team chat',
      'Operation-usage review with before-and-after consumption figures',
      'Scenario documentation and credential inventory',
      'Handover walkthrough so your team can edit safely',
    ],
    techStack: [
      'Make',
      'Webhooks',
      'REST APIs',
      'OAuth 2.0',
      'JSON',
      'Google Workspace',
      'Airtable',
      'Slack',
      'Stripe',
      'WooCommerce',
      'WordPress REST API',
      'GoHighLevel',
      'n8n',
      'OpenAI API',
    ],
    idealFor: [
      'Enquiries from your site are retyped into a CRM or spreadsheet by hand',
      'You use six SaaS tools that do not talk to one another',
      'Reporting means exporting CSVs from three systems and merging them',
      'Your Make operations bill keeps climbing and nobody knows which scenario is responsible',
      'A scenario someone built internally keeps failing and nobody can debug it',
      'You want automation live in days rather than a development project',
    ],
    faqs: [
      {
        question: 'Make.com or n8n — which should we use?',
        answer:
          'Make is quicker to build in, easier for a non-developer to read, and excellent for straightforward multi-app scenarios at moderate volume. n8n wins when execution volume makes per-operation pricing expensive, when data must stay on infrastructure you control, or when the logic needs custom code and direct database access. We build on both, so the recommendation follows your volume, sensitivity and budget rather than our habits.',
      },
      {
        question: 'Who owns the scenarios and the Make subscription?',
        answer:
          'You do. We build inside your Make account on your billing, with our access added as a team member. It keeps the costs transparent, keeps the automations yours, and means you are never held hostage by an agency relationship. If we stop working together, the scenarios, connections and documentation simply stay where they are and keep running.',
      },
      {
        question: 'Why is our operations usage so high?',
        answer:
          'Usually three causes. Scenarios polling every minute when the business only needs hourly. Filters placed after the expensive modules, so operations are consumed on records that get discarded anyway. And iterators processing rows one at a time where an aggregator could batch them. All three are fixable, and we quantify the consumption before and after so the saving is a number rather than a claim.',
      },
      {
        question: 'What happens when a scenario fails?',
        answer:
          'With error handlers attached, the run follows a defined route: retry the transient failures, log the payload, and notify a human when it genuinely needs attention. Make also stores incomplete executions so a run that failed mid-way can be inspected and resolved rather than lost. Without that setup a scenario simply stops, which is why we treat error handling as part of the build, not an extra.',
      },
      {
        question: 'Can you automate an app Make has no module for?',
        answer:
          'Usually, yes. If the service exposes an API we can call it with the HTTP module, handling authentication, pagination and rate limits ourselves. If it only offers webhooks we can receive those instead. The realistic limit is a tool with no API at all, where the options narrow to scheduled file exchange or a middleware layer. We check feasibility before quoting rather than after.',
      },
    ],
    relatedServiceSlugs: [
      'n8n-automation',
      'ai-automation',
      'api-development-integrations',
      'go-highlevel-development',
    ],
    relatedProjectSlugs: [],
  },
];
