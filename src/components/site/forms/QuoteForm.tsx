'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { Button, Icon } from '@/components/ds';
import { contact } from '@/content/company';
import {
  EndpointNotice,
  FormNotice,
  Honeypot,
  HONEYPOT_NAME,
  SelectField,
  TextAreaField,
  TextField,
  requireChoice,
  requireEmail,
  requireText,
  useFormSubmission,
  type FieldErrors,
  type FieldLabelMap,
  type FormValues,
  type SelectGroup,
} from './form-fields';

/**
 * The project-brief form behind /quote. Longer than the contact form on
 * purpose: the more of this a visitor completes, the closer our written reply
 * gets to a real number instead of a range.
 *
 * The service options are passed in from the server component so the whole
 * services content module never reaches the client bundle.
 */

/* Question, not a price list: we do not publish starting prices, so these are
   ranges for the client to pick from and must never be read as our rates. */
const BUDGET_OPTIONS = [
  'Under US$1,500',
  'US$1,500 – US$3,000',
  'US$3,000 – US$5,000',
  'US$5,000 – US$10,000',
  'US$10,000 or more',
  'Ongoing care plan, not a build',
  'Not sure yet — advise me',
];

const TIMELINE_OPTIONS = [
  'As soon as you can start',
  'Within 1–2 months',
  'Within 3–6 months',
  'Later this year',
  'Flexible — still planning',
];

const PLATFORM_OPTIONS = [
  'WordPress',
  'WooCommerce',
  'Shopify',
  'Bubble.io',
  'Next.js or headless',
  'Keep my current platform',
  'No preference — recommend one',
];

const SOURCE_OPTIONS = [
  'Search engine',
  'LinkedIn',
  'Facebook',
  'Referred by a client or partner',
  'We have worked together before',
  'Somewhere else',
];

const FIELD_MAP: FieldLabelMap = {
  order: [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'company', label: 'Company' },
    { name: 'website', label: 'Current website' },
    { name: 'projectType', label: 'Project type' },
    { name: 'platform', label: 'Platform preference' },
    { name: 'budget', label: 'Budget range' },
    { name: 'timeline', label: 'Timeline' },
    { name: 'description', label: 'Project description' },
    { name: 'source', label: 'How they found us' },
  ],
};

function validate(values: FormValues): FieldErrors {
  return {
    name: requireText(values.name ?? '', 'Your name'),
    email: requireEmail(values.email ?? ''),
    projectType: requireChoice(values.projectType ?? '', 'the closest project type'),
    budget: requireChoice(values.budget ?? '', 'a budget range'),
    timeline: requireChoice(values.timeline ?? '', 'a timeline'),
    description: requireText(values.description ?? '', 'The project description', 30),
  };
}

export interface QuoteFormProps {
  /** Real service titles, grouped by category, supplied by the page. */
  serviceGroups: SelectGroup[];
}

export function QuoteForm({ serviceGroups }: QuoteFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [projectType, setProjectType] = useState('');
  const [platform, setPlatform] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const { status, errors, mailtoHref, submit, reset } = useFormSubmission();

  const busy = status === 'submitting' || status === 'validating';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submit({
      values: {
        name,
        email,
        company,
        website,
        projectType,
        platform,
        budget,
        timeline,
        description,
        source,
        [HONEYPOT_NAME]: honeypot,
      },
      validate,
      subject: `Quote request${projectType ? ` — ${projectType}` : ''} from ${name.trim() || 'a visitor'}`,
      map: FIELD_MAP,
    });
  }

  if (status === 'success') {
    return (
      <div className="tk-form__panel">
        <div className="tk-form__panel-icon">
          <Icon name="check" size={22} />
        </div>
        <h2 className="tk-form__panel-title">Brief received — thank you.</h2>
        <p>Here is exactly what happens now:</p>
        <ul>
          <li>One of the founders reads your brief, usually within one working day.</li>
          <li>If anything is ambiguous we ask by email, or book a 15-minute call.</li>
          <li>
            You get a written, itemised quote with a fixed scope, a firm timeline and the payment
            schedule set out in full.
          </li>
        </ul>
        <p>
          Need us sooner? Call <a href={contact.phoneHref}>{contact.phone}</a> or email{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
        <div className="tk-form__actions">
          <Button href="/portfolio" size="lg" arrow>
            See what we have built
          </Button>
          <Button variant="secondary-light" size="lg" onClick={reset}>
            Submit another brief
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="tk-form" onSubmit={handleSubmit} noValidate aria-labelledby="quote-form-title">
      <h2 id="quote-form-title" className="sr-only">
        Tell us about your project
      </h2>

      <EndpointNotice />

      {status === 'error' ? (
        <FormNotice tone="error">
          <p>
            <strong>The browser could not deliver that.</strong> Your answers are still on screen —
            send the same brief by email instead, or write to{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <p>
            <a href={mailtoHref}>Open a pre-filled email</a>
          </p>
        </FormNotice>
      ) : null}

      {status === 'unconfigured' ? (
        <FormNotice tone="warn">
          <p>
            <strong>Your brief is ready to send by email.</strong> The relay for this form is not
            live yet, so use the link below — every answer you gave is already written into the
            message.
          </p>
          <p>
            <a href={mailtoHref}>Open a pre-filled email to {contact.email}</a>
          </p>
        </FormNotice>
      ) : null}

      <p className="tk-form__legend">About you</p>

      <div className="tk-form__row">
        <TextField
          id="name"
          label="Your name"
          value={name}
          onChange={setName}
          placeholder="Jane Smith"
          autoComplete="name"
          error={errors.name}
          disabled={busy}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="jane@company.com"
          autoComplete="email"
          error={errors.email}
          disabled={busy}
        />
      </div>

      <div className="tk-form__row">
        <TextField
          id="company"
          label="Company"
          value={company}
          onChange={setCompany}
          placeholder="Company or project name"
          autoComplete="organization"
          optional
          required={false}
          error={errors.company}
          disabled={busy}
        />
        <TextField
          id="website"
          label="Current website"
          type="url"
          value={website}
          onChange={setWebsite}
          placeholder="https://example.com"
          autoComplete="url"
          optional
          required={false}
          hint="Leave blank if you are starting from nothing."
          error={errors.website}
          disabled={busy}
        />
      </div>

      <p className="tk-form__legend">About the project</p>

      <div className="tk-form__row">
        <SelectField
          id="projectType"
          label="What do you need?"
          value={projectType}
          onChange={setProjectType}
          groups={serviceGroups}
          placeholder="Select the closest match"
          hint="Pick the nearest fit — we will tell you if something else suits better."
          error={errors.projectType}
          disabled={busy}
        />
        <SelectField
          id="platform"
          label="Platform preference"
          value={platform}
          onChange={setPlatform}
          options={PLATFORM_OPTIONS}
          placeholder="Select a platform"
          optional
          required={false}
          hint="No preference is a perfectly good answer."
          error={errors.platform}
          disabled={busy}
        />
      </div>

      <div className="tk-form__row">
        <SelectField
          id="budget"
          label="Budget range"
          value={budget}
          onChange={setBudget}
          options={BUDGET_OPTIONS}
          placeholder="Select a range"
          error={errors.budget}
          disabled={busy}
        />
        <SelectField
          id="timeline"
          label="When do you want to launch?"
          value={timeline}
          onChange={setTimeline}
          options={TIMELINE_OPTIONS}
          placeholder="Select a timeline"
          error={errors.timeline}
          disabled={busy}
        />
      </div>

      <TextAreaField
        id="description"
        label="Tell us about the project"
        value={description}
        onChange={setDescription}
        rows={7}
        placeholder="What are you building, who is it for, and what should it achieve? Mention any pages, features, integrations or languages you already know you need."
        hint="Features, integrations, languages, deadlines, the site you wish yours looked like — all of it helps."
        error={errors.description}
        disabled={busy}
      />

      <SelectField
        id="source"
        label="How did you find us?"
        value={source}
        onChange={setSource}
        options={SOURCE_OPTIONS}
        placeholder="Select an answer"
        optional
        required={false}
        error={errors.source}
        disabled={busy}
      />

      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="tk-form__actions">
        <Button type="submit" size="lg" arrow disabled={busy}>
          {status === 'submitting' ? 'Sending…' : 'Request my quote'}
        </Button>
        <p className="tk-form__smallprint" aria-live="polite">
          {status === 'validating'
            ? 'Checking your answers…'
            : status === 'submitting'
              ? 'Sending your brief…'
              : 'No obligation, no hard sell, no automated follow-up sequence.'}
        </p>
      </div>

      <p className="tk-form__smallprint">
        By sending this brief you agree to us storing it so we can prepare and discuss your quote.
        See our <Link href="/privacy-policy">privacy policy</Link>.
      </p>
    </form>
  );
}
