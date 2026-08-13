import type { BlogPost } from '@/content/types';

export const post: BlogPost = {
  slug: 'make-com-vs-n8n-automation-platforms',
  title: 'Make.com vs n8n: Which Should You Build On?',
  metaTitle: 'Make.com vs n8n: Which to Build On?',
  metaDescription:
    'Make.com or n8n? An honest comparison of hosting, pricing models, connectors, custom code, error handling and lock-in, from a team that builds on both.',
  category: 'Automation & CRM',
  tags: ['Make.com', 'n8n', 'Automation', 'Integrations', 'Workflow Design'],
  publishedAt: '2026-07-30',
  readingMinutes: 11,
  authorSlug: 'shaharyar-ansari',
  excerpt:
    'Make.com and n8n solve the same problem with opposite philosophies: one is a polished hosted platform, the other is source-available software you can run yourself. Here is how we choose between them.',
  relatedServiceSlugs: [
    'make-com-automation',
    'n8n-automation',
    'ai-automation',
    'api-development-integrations',
  ],
  relatedPostSlugs: [
    'n8n-workflow-automation-guide',
    'ai-automation-for-business-operations',
    'gohighlevel-guide-for-agencies',
  ],
  body: [
    {
      type: 'p',
      text: 'Most comparisons of Make.com and n8n end up as a feature checklist, which is the least useful way to choose between them. Both platforms move data between systems on a trigger. Both give you a visual canvas, webhooks, schedulers, branching, filters and a way to call an arbitrary HTTP endpoint when a connector does not exist. If your automation is “when a form is submitted, create a CRM record and post to Slack”, either one will do it in an afternoon and you will never think about the decision again.',
    },
    {
      type: 'p',
      text: 'The difference shows up later — at the point where the workflow gets complicated, the volume gets real, someone asks where the customer data is being processed, or a finance director asks why the automation bill has tripled. Those questions have genuinely different answers on each platform, because the two products are built on opposite bets. Make.com is a hosted product that takes operational responsibility off your hands. n8n is source-available software that hands you the keys and the maintenance.',
    },
    {
      type: 'p',
      text: 'We build production automations on both. The n8n work we are proudest of sits behind The Boomerang, where we replaced a Bubble.io stack with a custom MERN and Next.js application on Supabase, built a Data Team Panel to replace the Airtable subscription they had been carrying, and wired the whole operation together with a set of n8n workflows that still run daily. That project taught us more about the real trade-offs than any feature matrix could. Here is the honest version.',
    },

    { type: 'h2', text: 'Two platforms, two different bets' },
    {
      type: 'p',
      text: 'Make.com — previously Integromat — is a hosted SaaS platform. You log in, drag modules onto a canvas, connect your accounts and it runs. There is no server to patch, no queue to size, no upgrade to schedule. The editor is deliberately guided: routers, iterators, aggregators and error handlers are visual objects, and the platform nudges you towards a shape that it can execute reliably. That guidance is the product.',
    },
    {
      type: 'p',
      text: 'n8n is fair-code software distributed under the Sustainable Use Licence. It is source-available rather than OSI open source, which matters if you plan to resell it, but for internal use the practical effect is that you can run it on your own infrastructure with a Docker container and a database. There is also n8n Cloud if you would rather not. The editor feels closer to a developer tool than a business tool — nodes, expressions, a JavaScript Code node — and it assumes you are comfortable reading JSON.',
    },
    {
      type: 'p',
      text: 'Neither position is better. They suit different organisations, and quite often different workflows inside the same organisation.',
    },

    { type: 'h2', text: 'The side-by-side' },
    {
      type: 'table',
      headers: ['Dimension', 'Make.com', 'n8n'],
      rows: [
        ['Delivery model', 'Hosted SaaS only', 'Self-hosted software, or n8n Cloud'],
        ['Licence', 'Proprietary', 'Sustainable Use Licence (fair-code, not OSI open source)'],
        [
          'Where data is processed',
          'Make’s cloud, with a choice of hosting region',
          'Your own infrastructure when self-hosted; regions on Cloud',
        ],
        [
          'Billing unit',
          'Operations — each module step consumes one',
          'Executions — one workflow run, whatever its step count',
        ],
        ['Editor', 'Guided visual scenario canvas', 'Node canvas with expressions and code'],
        [
          'Custom code',
          'Inline functions, HTTP module, custom apps',
          'First-class Code node (JavaScript, Python via Pyodide)',
        ],
        [
          'Connector library',
          'Large app directory, deep mainstream SaaS coverage',
          'Smaller core library plus community nodes from npm',
        ],
        [
          'Error handling',
          'Error-handler routes attached to a module',
          'Error workflows, per-node retries and continue-on-fail',
        ],
        [
          'Versioning',
          'In-platform scenario revisions',
          'Workflow history; git-based source control on enterprise',
        ],
        [
          'Portability of a build',
          'JSON blueprint, importable only back into Make',
          'Workflow JSON, importable into any n8n instance',
        ],
        [
          'Operational burden',
          'None — the platform is someone else’s problem',
          'Yours: hosting, upgrades, backups, monitoring',
        ],
      ],
    },

    { type: 'h2', text: 'Hosting and data residency' },
    {
      type: 'p',
      text: 'This is the cleanest dividing line, and for some clients it decides the question before anything else is discussed. On Make.com your data passes through Make’s infrastructure. The platform lets you choose a hosting region, which covers a good number of European data-residency requirements, but the processing happens on their servers under their sub-processor list and you sign their data processing agreement.',
    },
    {
      type: 'p',
      text: 'A self-hosted n8n instance never sends your payloads to a third party at all. If you are automating around patient records, financial documents, candidate CVs or anything covered by a client contract with a strict processing clause, that difference is not a preference — it is the requirement. We have deployed n8n alongside an application’s own infrastructure precisely so that the automation layer sits inside the same trust boundary as the database it is reading from.',
    },
    {
      type: 'p',
      text: 'Be honest about the cost of that, though. Self-hosting means you own uptime, upgrades, database backups, queue configuration under load and the security posture of the box. If nobody on your side is going to own those, a hosted platform is the safer engineering decision even when it is the weaker compliance story.',
    },

    { type: 'h2', text: 'How each one charges, and why it changes your design' },
    {
      type: 'p',
      text: 'Make.com bills operations. Every module that executes consumes one operation, so a scenario with twelve modules processing a hundred records can consume a great deal more than a scenario with three. n8n bills executions on its cloud plans: one workflow run counts as one execution regardless of how many nodes it passes through, and on a self-hosted instance you are paying for the server rather than the throughput.',
    },
    {
      type: 'p',
      text: 'We are deliberately not quoting tier prices here, because both vendors revise them and any figure in a blog post is wrong within a year. The model matters more than the number. What the model does is shape how you build.',
    },
    { type: 'h3', text: 'What that means in practice' },
    {
      type: 'ul',
      items: [
        'On Make, step count is a cost centre. You learn to aggregate, to filter early so junk records never reach the expensive modules, and to avoid iterating one item at a time when a batch call would do.',
        'On n8n, step count is close to free. A workflow can be as granular and readable as you like, and heavy per-item processing inside a Code node costs nothing extra beyond CPU you are already paying for.',
        'High-volume, many-step workflows — enrichment pipelines, nightly syncs over thousands of rows — tend to favour n8n economically.',
        'Low-volume, high-variety workflows across many SaaS tools tend to favour Make, because you are paying for breadth rather than throughput.',
      ],
    },
    {
      type: 'callout',
      title: 'Model the cost before you build, not after',
      text: 'Take your busiest workflow, count the steps, multiply by the realistic number of records per month, and check that against the plan you are considering. We do this during scoping every time. It takes ten minutes and it has changed the platform recommendation on real projects.',
    },

    { type: 'h2', text: 'Connectors, and what happens when yours is missing' },
    {
      type: 'p',
      text: 'Make.com has the larger app directory, and the depth of the popular connectors is genuinely good — the modules tend to cover more of each API’s surface than a generic wrapper would, with proper pagination and sensible field mapping. If your stack is mainstream SaaS, there is a strong chance every integration you need already exists and behaves well.',
    },
    {
      type: 'p',
      text: 'n8n ships a smaller core library, but supplements it in two ways. Community nodes can be installed from npm on a self-hosted instance, which opens up a long tail of integrations the core team has never touched. And the HTTP Request node is a first-class citizen rather than a fallback, with credential handling and pagination built in, so calling an undocumented internal API feels normal rather than like a workaround.',
    },
    {
      type: 'p',
      text: 'Both platforms give you an HTTP escape hatch, so “does it have a connector for X” is rarely a hard blocker on either. The real question is how much of your integration work will be against tools nobody else uses. If most of it is bespoke or internal, the connector count stops mattering and n8n’s comfort with raw APIs starts to.',
    },

    { type: 'h2', text: 'Custom code and how far you can push it' },
    {
      type: 'p',
      text: 'n8n’s Code node runs JavaScript, and Python through Pyodide, over the items flowing through the workflow. You get real control: parse an awkward payload, reshape an array, implement a scoring rule, call a library. Expressions elsewhere in the workflow are JavaScript too, so there is one mental model rather than two.',
    },
    {
      type: 'code',
      language: 'javascript',
      code: `// n8n Code node — normalise an inbound form webhook
// before anything touches the CRM
const body = $json.body;

return [{
  json: {
    email: body.email?.trim().toLowerCase(),
    full_name: [body.first, body.last].filter(Boolean).join(' '),
    source: $json.headers['x-source'] ?? 'website',
    received_at: new Date().toISOString(),
  },
}];`,
    },
    {
      type: 'p',
      text: 'Make handles the same job differently. Field-level transformations are done with built-in functions written inline in the mapping panel — trimming, lower-casing, date formatting, conditionals — and anything more structural is expressed with routers, iterators and aggregators on the canvas. For deeper custom behaviour you build a custom app on Make’s developer platform, which is a proper piece of work rather than a five-minute snippet.',
    },
    {
      type: 'p',
      text: 'The honest summary: Make is excellent at declarative transformation and gets awkward when the logic is genuinely algorithmic. n8n is comfortable with algorithmic logic and gets messy if you write code where a simple mapping would have done. Both platforms now offer AI and LLM tooling as well, and n8n’s is closer to the metal — useful when you are orchestrating prompts, tools and retries rather than making a single completion call.',
    },

    { type: 'h2', text: 'Error handling and knowing when something broke' },
    {
      type: 'p',
      text: 'Make attaches error handlers to individual modules, with explicit directives for what should happen next — resume with a fallback value, ignore the error, roll back the run, break it out for a later retry, or commit what has already happened. It is a well-designed model, and because it is visual, the failure behaviour of a scenario is readable by someone who did not build it.',
    },
    {
      type: 'p',
      text: 'n8n uses error workflows: a separate workflow that fires whenever a designated workflow fails, receiving the execution context so it can log, alert or compensate. Individual nodes carry their own retry settings and a continue-on-fail option. The model is more flexible and less guided — you can build genuinely sophisticated recovery, or you can build nothing and discover the failure a week later.',
    },
    {
      type: 'p',
      text: 'Whichever you choose, the discipline is the same. Every workflow that matters needs an owner, an alert that reaches a human, and a way to replay a failed run without duplicating side effects. Idempotency is a design decision you make in the workflow, not a feature either platform can give you.',
    },

    { type: 'h2', text: 'Team workflow, versioning and getting out again' },
    {
      type: 'p',
      text: 'Make keeps scenario revisions inside the platform, so you can look back and restore. n8n exposes workflow history and, on enterprise plans, git-based source control that puts your workflows into a repository where they can be reviewed and promoted between environments. If your automations are part of a product rather than an internal convenience, that difference is significant: code review, branch-based change and a real staging environment stop being aspirations.',
    },
    {
      type: 'p',
      text: 'Portability follows the same pattern. A Make scenario exports as a JSON blueprint that imports cleanly back into Make and nowhere else. An n8n workflow exports as JSON that will import into any n8n instance, including one you host yourself after leaving n8n Cloud. Neither export gives you a migration path to the other platform — the node vocabularies are different enough that a real move means a rebuild — but one of them guarantees you can always take your automations with you.',
    },
    {
      type: 'p',
      text: 'Lock-in is not automatically a reason to avoid a platform. It is a reason to know what leaving would cost before you have two hundred scenarios running the business.',
    },

    { type: 'h2', text: 'How we choose at Tekvion' },
    {
      type: 'p',
      text: 'We run the same short assessment on every automation engagement, in this order, and the answer usually falls out before the fourth question.',
    },
    {
      type: 'ol',
      items: [
        'Where is the data allowed to be processed, and what has the client already signed with their own customers?',
        'Who will maintain this in twelve months — an operations person, or an engineering team?',
        'What is the realistic monthly volume, and how many steps does the heaviest workflow need?',
        'How much of the logic is bespoke, and how much is mapping fields between well-known SaaS tools?',
        'Does this automation sit beside an application we already host, or does it stand alone?',
        'What would it cost to move off, and can the client live with that number?',
      ],
    },
    {
      type: 'table',
      headers: ['If this is your situation', 'We would start with'],
      rows: [
        ['Non-technical team owns the automations day to day', 'Make.com'],
        ['Data cannot leave your own infrastructure', 'n8n, self-hosted'],
        ['Many steps per record, run at high volume', 'n8n'],
        ['Broad mainstream SaaS coverage needed quickly', 'Make.com'],
        ['Automations sit beside an app we already host for you', 'n8n'],
        ['Bespoke parsing, scoring or LLM orchestration in code', 'n8n'],
        ['You want zero infrastructure to maintain', 'Make.com'],
      ],
    },
    {
      type: 'p',
      text: 'On The Boomerang we landed on n8n, and the reasoning is a fair illustration. Their automations sat directly against a Supabase database we were already hosting alongside a custom MERN and Next.js build, the logic was genuinely complex rather than a series of field mappings, and the internal Data Team Panel we built to replace their Airtable needed the workflows to read and write the same records the application did. Putting a hosted third party in the middle of that would have added latency, cost per step and a data-processing conversation for no benefit. It also let us work through a stack of Intercom issues from the same place, because the workflows could talk to both sides.',
    },
    {
      type: 'p',
      text: 'We have recommended the opposite just as often. When a small marketing team needs to connect a form, a CRM, a spreadsheet and a Slack channel, and nobody there wants to hear the phrase “Docker container”, Make.com is the right call and we will build it there without pretending otherwise. The same instinct applies to our AI and LLM work on Tylo AI, Mocki and InkGenX: the platform is chosen to fit who maintains it, not to flatter the engineer who built it.',
    },

    { type: 'h2', text: 'The short answer' },
    {
      type: 'p',
      text: 'Choose Make.com when the priority is speed, breadth of connectors and having no infrastructure to look after, and when the people who own the automations are closer to operations than to engineering. Choose n8n when data residency, cost at volume, custom logic or proximity to your own application matter more than convenience, and when someone will genuinely own the instance.',
    },
    {
      type: 'p',
      text: 'A great many organisations end up running both, and that is a perfectly reasonable outcome rather than a failure of decision-making. What is not reasonable is choosing on the strength of a comparison table alone, ours included — the right platform depends on your data, your volume and your team.',
    },
    {
      type: 'p',
      text: 'If you want a second opinion on that, our n8n automation and Make.com automation services cover the assessment as well as the build, our AI automation work handles the LLM-driven parts of the pipeline, and our API development and integrations service picks up the custom endpoints when neither platform has a connector worth using. Tell us what you are trying to automate and who has to keep it running, and we will tell you plainly which one we would build on.',
    },
  ],
};
