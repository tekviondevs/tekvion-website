'use client';

import { useCallback, useState, type ChangeEvent, type ReactNode } from 'react';
import { Icon } from '@/components/ds';
import { contact, FORM_ENDPOINT } from '@/content/company';
import './forms.css';

/* ==========================================================================
   Shared form primitives and submission handling for /contact and /quote.

   Both forms are static-safe: there is no server route and no database. They
   POST JSON to FORM_ENDPOINT (a Formspree-style relay declared in
   src/content/company.ts). Until that endpoint is swapped for a real one the
   forms stay usable — they fall back to a pre-filled mailto: so an enquiry is
   never silently lost.
   ========================================================================== */

/** Lifecycle of a submission. `unconfigured` = FORM_ENDPOINT is still a stub. */
export type FormStatus =
  | 'idle'
  | 'validating'
  | 'submitting'
  | 'success'
  | 'error'
  | 'unconfigured';

export type FieldErrors = Record<string, string | undefined>;

export type FormValues = Record<string, string>;

/** The endpoint ships as `https://formspree.io/f/REPLACE_ME` until launch. */
export const endpointConfigured = !FORM_ENDPOINT.includes('REPLACE_ME');

/** Honeypot field name — Formspree drops any submission that carries it. */
export const HONEYPOT_NAME = '_gotcha';

/* -------------------------------------------------------------------------- */
/*  Validation helpers                                                         */
/* -------------------------------------------------------------------------- */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function requireText(value: string, label: string, min = 2): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return `${label} is required.`;
  if (trimmed.length < min) return `${label} looks too short — please add a little more.`;
  return undefined;
}

export function requireEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return 'Email address is required so we can reply.';
  if (!EMAIL_PATTERN.test(trimmed)) return 'That does not look like a valid email address.';
  return undefined;
}

export function requireChoice(value: string, label: string): string | undefined {
  return value ? undefined : `Please choose ${label}.`;
}

/* -------------------------------------------------------------------------- */
/*  Message building                                                           */
/* -------------------------------------------------------------------------- */

export interface FieldLabelMap {
  /** Field name -> human label, in the order it should appear in the email. */
  order: Array<{ name: string; label: string }>;
}

/** Renders the submitted values as a readable plain-text email body. */
export function buildPlainText(values: FormValues, map: FieldLabelMap): string {
  return map.order
    .filter((entry) => values[entry.name]?.trim())
    .map((entry) => `${entry.label}: ${values[entry.name]?.trim() ?? ''}`)
    .join('\n\n');
}

/** Pre-filled mailto: used when the relay is unavailable or not yet configured. */
export function buildMailto(subject: string, body: string): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* -------------------------------------------------------------------------- */
/*  Submission hook                                                            */
/* -------------------------------------------------------------------------- */

export interface SubmitOptions {
  values: FormValues;
  /** Returns one entry per invalid field, keyed by the field's input id. */
  validate: (values: FormValues) => FieldErrors;
  /** Subject line for the relay and for the mailto fallback. */
  subject: string;
  /** Field order used to build the readable email body. */
  map: FieldLabelMap;
}

export interface FormSubmission {
  status: FormStatus;
  errors: FieldErrors;
  /** Pre-filled mailto:, populated for the `error` and `unconfigured` states. */
  mailtoHref: string;
  submit: (options: SubmitOptions) => Promise<void>;
  reset: () => void;
}

export function useFormSubmission(): FormSubmission {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [mailtoHref, setMailtoHref] = useState<string>(`mailto:${contact.email}`);

  const reset = useCallback(() => {
    setStatus('idle');
    setErrors({});
  }, []);

  const submit = useCallback(async ({ values, validate, subject, map }: SubmitOptions) => {
    setStatus('validating');

    const found = validate(values);
    const firstInvalid = Object.keys(found).find((key) => found[key]);

    if (firstInvalid) {
      setErrors(found);
      setStatus('idle');
      // Move the user to the first problem rather than leaving them hunting.
      if (typeof document !== 'undefined') {
        const target = document.getElementById(firstInvalid);
        target?.focus();
        target?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      return;
    }

    setErrors({});

    // A filled honeypot means a bot. Show the normal success state so the bot
    // learns nothing, and send nothing anywhere.
    if (values[HONEYPOT_NAME]?.trim()) {
      setStatus('success');
      return;
    }

    const fallback = buildMailto(subject, buildPlainText(values, map));
    setMailtoHref(fallback);

    if (!endpointConfigured) {
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _subject: subject }),
      });

      if (!response.ok) throw new Error(`Relay responded ${response.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  return { status, errors, mailtoHref, submit, reset };
}

/* -------------------------------------------------------------------------- */
/*  Field components                                                           */
/* -------------------------------------------------------------------------- */

interface FieldFrameProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: (props: {
    describedBy: string | undefined;
    invalid: boolean;
    className: string;
  }) => ReactNode;
}

function FieldFrame({ id, label, error, hint, optional, children }: FieldFrameProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="tk-field">
      <label className="tk-field__label" htmlFor={id}>
        {label}
        {optional ? <span className="tk-field__optional"> (optional)</span> : null}
      </label>
      {children({
        describedBy,
        invalid: Boolean(error),
        className: error ? 'tk-field__control tk-field__control--error' : 'tk-field__control',
      })}
      {hint ? (
        <p className="tk-field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="tk-field__error" id={errorId} role="alert">
          <Icon name="circle-alert" size={14} />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

export interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'url';
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function TextField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoComplete,
  hint,
  error,
  optional,
  required = true,
  disabled,
}: TextFieldProps) {
  return (
    <FieldFrame id={id} label={label} error={error} hint={hint} optional={optional}>
      {({ describedBy, invalid, className }) => (
        <input
          id={id}
          name={id}
          type={type}
          className={className}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-required={required || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        />
      )}
    </FieldFrame>
  );
}

export interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  rows = 6,
  placeholder,
  hint,
  error,
  optional,
  required = true,
  disabled,
}: TextAreaFieldProps) {
  return (
    <FieldFrame id={id} label={label} error={error} hint={hint} optional={optional}>
      {({ describedBy, invalid, className }) => (
        <textarea
          id={id}
          name={id}
          rows={rows}
          className={`${className} tk-field__control--textarea`}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-required={required || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
        />
      )}
    </FieldFrame>
  );
}

export interface SelectGroup {
  label: string;
  options: string[];
}

export interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  /** Flat option list. Ignored when `groups` is supplied. */
  options?: string[];
  /** Grouped options rendered as <optgroup>s. */
  groups?: SelectGroup[];
  placeholder: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  groups,
  placeholder,
  hint,
  error,
  optional,
  required = true,
  disabled,
}: SelectFieldProps) {
  return (
    <FieldFrame id={id} label={label} error={error} hint={hint} optional={optional}>
      {({ describedBy, invalid, className }) => (
        <select
          id={id}
          name={id}
          className={className}
          value={value}
          disabled={disabled}
          data-placeholder={value ? 'false' : 'true'}
          aria-required={required || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {groups
            ? groups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))
            : (options ?? []).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
        </select>
      )}
    </FieldFrame>
  );
}

/** Off-screen bait field. Real people never see it; bots fill it in. */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="tk-form__honeypot" aria-hidden="true">
      <label htmlFor={HONEYPOT_NAME}>Leave this field empty</label>
      <input
        id={HONEYPOT_NAME}
        name={HONEYPOT_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Notices                                                                    */
/* -------------------------------------------------------------------------- */

export interface FormNoticeProps {
  tone?: 'info' | 'warn' | 'error';
  icon?: string;
  children: ReactNode;
}

export function FormNotice({ tone = 'info', icon, children }: FormNoticeProps) {
  const toneClass =
    tone === 'warn' ? ' tk-form__notice--warn' : tone === 'error' ? ' tk-form__notice--error' : '';
  const glyph = icon ?? (tone === 'info' ? 'lightbulb' : 'circle-alert');

  return (
    <div className={`tk-form__notice${toneClass}`} role={tone === 'error' ? 'alert' : undefined}>
      <Icon name={glyph} size={18} />
      <div>{children}</div>
    </div>
  );
}

/** Shown above every form while the relay is still a placeholder. */
export function EndpointNotice() {
  if (endpointConfigured) return null;

  return (
    <FormNotice tone="warn" icon="circle-alert">
      <p>
        <strong>This form is not connected to a mailbox yet.</strong> Fill it in and we will open a
        pre-addressed email containing everything you typed, so nothing is lost. You can also write
        to <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
        <a href={contact.phoneHref}>{contact.phone}</a> directly.
      </p>
    </FormNotice>
  );
}
