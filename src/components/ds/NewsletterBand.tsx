import { FORM_ENDPOINT } from '@/content/company';
import { contact } from '@/lib/seo';
import { Button } from './Button';
import { cx } from './cx';

/**
 * Amber full-bleed newsletter band. The form posts straight to FORM_ENDPOINT so
 * the page stays fully static (no JS required).
 *
 * Until that endpoint is swapped for a real one (it ships as
 * `.../REPLACE_ME`), the input is replaced by a mailto route: a form that
 * silently drops addresses would contradict the privacy policy and the
 * "unsubscribe any time" promise in the copy beside it.
 */
const relayConnected = !FORM_ENDPOINT.includes('REPLACE_ME');

export interface NewsletterBandProps {
  title?: string;
  children?: string;
  cta?: string;
  placeholder?: string;
  className?: string;
}

export function NewsletterBand({
  title = 'Stay Updated',
  children = 'Practical notes on web performance, WordPress, and building products that ship. No spam, unsubscribe any time.',
  cta = 'Subscribe',
  placeholder = 'Email',
  className,
}: NewsletterBandProps) {
  return (
    <section className={cx('tk-newsletter', className)} aria-labelledby="newsletter-title">
      <div className="tk-newsletter__copy">
        <h2 id="newsletter-title" className="tk-newsletter__title">
          {title}
        </h2>
        <p className="tk-newsletter__sub">{children}</p>
      </div>
      {relayConnected ? (
        <form className="tk-newsletter__form" action={FORM_ENDPOINT} method="post">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            className="tk-newsletter__input"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={placeholder}
          />
          <input type="hidden" name="_subject" value="Newsletter signup — tekvion.net" />
          <Button type="submit" variant="secondary-dark" arrow>
            {cta}
          </Button>
        </form>
      ) : (
        <div className="tk-newsletter__fallback">
          <p className="tk-newsletter__fallback-note">
            The signup relay is not connected yet, so there is nothing here that could quietly
            swallow your address. Email us with “subscribe” in the subject and we will add you by
            hand.
          </p>
          <Button
            href={`mailto:${contact.email}?subject=Newsletter%20signup`}
            variant="secondary-dark"
            arrow
          >
            Email to subscribe
          </Button>
        </div>
      )}
    </section>
  );
}
