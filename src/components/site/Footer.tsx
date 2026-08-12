import Image from 'next/image';
import Link from 'next/link';
import { Container, Icon, NewsletterBand } from '@/components/ds';
import { featuredServices, services } from '@/content/services';
import { contact, legalName, siteName, socials } from '@/lib/seo';

/**
 * Site footer: positioning statement, four distinctly-headed link columns,
 * the newsletter band, and the legal fine print.
 */
const companyLinks: Array<{ label: string; href: string }> = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get a Free Quote', href: '/quote' },
];

const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const currentYear = 2026;

export function Footer() {
  const footerServices = (featuredServices.length > 0 ? featuredServices : services).slice(0, 6);

  return (
    <footer className="tk-footer">
      <NewsletterBand />

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
                We design, build, launch and maintain fast websites and web apps — for coaching
                brands, clinics, property firms, online stores, SaaS and AI products. Founded 2021.
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
