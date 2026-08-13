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
  requireEmail,
  requireText,
  useFormSubmission,
  type FieldErrors,
  type FieldLabelMap,
  type FormValues,
} from './form-fields';

/**
 * General enquiry form for /contact. Short on purpose — five fields, two of
 * them optional. It is one of only two conversion paths on the site; the other
 * is the Calendly booking page behind every "Book a Call" button.
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

const FIELD_MAP: FieldLabelMap = {
  order: [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'company', label: 'Company' },
    { name: 'budget', label: 'Budget' },
    { name: 'message', label: 'Message' },
  ],
};

function validate(values: FormValues): FieldErrors {
  return {
    name: requireText(values.name ?? '', 'Your name'),
    email: requireEmail(values.email ?? ''),
    message: requireText(
      values.message ?? '',
      'A short description of what you need',
      20,
    ),
  };
}

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
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
        budget,
        message,
        [HONEYPOT_NAME]: honeypot,
      },
      validate,
      subject: `Website enquiry from ${name.trim() || 'a visitor'}`,
      map: FIELD_MAP,
    });
  }

  if (status === 'success') {
    return (
      <div className="tk-form__panel">
        <div className="tk-form__panel-icon">
          <Icon name="check" size={22} />
        </div>
        <h2 className="tk-form__panel-title">Message received — thank you.</h2>
        <p>
          It has landed in the inbox one of the founders reads. You will get a reply from a real
          person, usually within one working day, Monday to Friday.
        </p>
        <p>
          If it is urgent, call <a href={contact.phoneHref}>{contact.phone}</a> or write straight to{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
        <div className="tk-form__actions">
          <Button href="/portfolio" size="lg" arrow>
            Browse our work
          </Button>
          <Button variant="secondary-light" size="lg" onClick={reset}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="tk-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="sr-only">
        Send us a message
      </h2>

      <EndpointNotice />

      {status === 'error' ? (
        <FormNotice tone="error">
          <p>
            <strong>We could not send that from the browser.</strong> Nothing you typed has been
            lost — use the button below to send the same details by email, or write to{' '}
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
            <strong>Your message is ready to send by email.</strong> The relay for this form is not
            live yet, so use the link below — every field you filled in is already in the message
            body.
          </p>
          <p>
            <a href={mailtoHref}>Open a pre-filled email to {contact.email}</a>
          </p>
        </FormNotice>
      ) : null}

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
        <SelectField
          id="budget"
          label="Rough budget"
          value={budget}
          onChange={setBudget}
          options={BUDGET_OPTIONS}
          placeholder="Select a range"
          optional
          required={false}
          hint="A range is enough. It helps us answer with something useful."
          error={errors.budget}
          disabled={busy}
        />
      </div>

      <TextAreaField
        id="message"
        label="How can we help?"
        value={message}
        onChange={setMessage}
        rows={6}
        placeholder="Tell us about your project, your timeline, and what it needs to achieve."
        hint="The more context you give us, the more specific our reply will be."
        error={errors.message}
        disabled={busy}
      />

      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="tk-form__actions">
        <Button type="submit" size="lg" arrow disabled={busy}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="tk-form__smallprint" aria-live="polite">
          {status === 'validating'
            ? 'Checking your details…'
            : status === 'submitting'
              ? 'Sending your message…'
              : 'We reply within one working day and never share your details.'}
        </p>
      </div>

      <p className="tk-form__smallprint">
        By sending this form you agree to us storing your message so we can reply to it. See our{' '}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>
    </form>
  );
}
