import Image from 'next/image';
import Link from 'next/link';
import { Container, Icon } from '@/components/ds';
import { CALENDLY_URL } from '@/content/company';
import { getServices } from '@/content/services';
import { contact, legalName, siteName, socials } from '@/lib/seo';

/**
 * Site footer: positioning statement, four distinctly-headed link columns, and
 * the legal fine print.
 *
 * NOTE: the "Stay Updated" newsletter band was removed on purpose. We have no
 * subscriber list, no sending infrastructure and no unsubscribe flow, so a
 * signup box here would collect addresses we could not honestly service. Do not
 * re-add it until a real subscriber flow exists — see README.
 */
const companyLinks: Array<{ label: string; href: string }> = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

/**
 * Hand-picked footer service mix rather than `featuredServices` — six links have
 * to carry the whole commercial spread: design, WordPress, custom code
 * (Next.js/MERN), CRM and automation. The full list lives on /services, and
 * `getServices` silently drops any slug that no longer exists.
 */
const FOOTER_SERVICE_SLUGS = [
  'website-design',
  'wordpress-development',
  'nextjs-development',
  'mern-stack-development',
  'go-highlevel-development',
  'ai-automation',
];

const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const currentYear = 2026;

export function Footer() {
  const footerServices = getServices(FOOTER_SERVICE_SLUGS);

  return (
    <footer className="tk-footer">
      <div className="tk-footer__main">
        <Container>
          <div className="tk-footer__grid">
            <div className="tk-footer__brand">
              <Link href="/" aria-label={`${siteName} — home`}>
                <Image
                  src="/assets/logo-lockup-white.png"
                  alt={siteName}
                  width={486}
                  height={126}
                />
              </Link>
              <p className="tk-footer__positioning">
                We design, build, launch and maintain fast websites and web apps — on WordPress,
                Bubble.io, MERN, Next.js and PHP — plus the CRM and automation work behind them in
                GoHighLevel, n8n and Make.com. Founded 2021.
              </p>
              <div className="tk-footer__socials">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="tk-footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteName} on ${social.label}`}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="tk-footer__heading">Services</h2>
              <div className="tk-footer__links">
                {footerServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
                <Link href="/services">All services</Link>
              </div>
            </div>

            <div>
              <h2 className="tk-footer__heading">Company</h2>
              <div className="tk-footer__links">
                {companyLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Call<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="tk-footer__heading">Legal</h2>
              <div className="tk-footer__links">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="tk-footer__heading">Contact</h2>
              <address className="tk-footer__contact">
                <span className="tk-footer__contact-row">
                  <Icon name="mail" size={16} />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </span>
                <span className="tk-footer__contact-row">
                  <Icon name="phone" size={16} />
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </span>
                <span className="tk-footer__contact-row">
                  <Icon name="map-pin" size={16} />
                  <span>
                    {contact.addressLine}, {contact.city}, {contact.country}
                  </span>
                </span>
              </address>
            </div>
          </div>

          <div className="tk-footer__bottom">
            <span>&copy; {currentYear} {siteName}. All rights reserved.</span>
            <span>Think. Build. Launch.</span>
          </div>
          <p className="tk-footer__fineprint">
            {siteName} is the trading name of {legalName}, {contact.addressLine}, {contact.city},{' '}
            {contact.country}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
