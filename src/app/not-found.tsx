import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Container, Underline } from '@/components/ds';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'The page you wanted is not here. Head back to the Tekvion Innovations home page, or jump straight to our services, portfolio, blog or contact details.',
  robots: { index: false, follow: true },
};

const shortcuts: Array<{ label: string; href: string }> = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function NotFound() {
  return (
    <section className="band--dark tk-404">
      <Container width="narrow">
        <p className="tk-404__code">404</p>
        <h1>
          That page has <Underline delay={0.2}>moved on</Underline>
        </h1>
        <p className="lead muted mt-6">
          The link is broken or the page has been retired. Everything else is still where you left
          it — pick a route below, or tell us what you were looking for and we will point you at it.
        </p>
        <ul className="tk-404__links">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.href}>
              <Link href={shortcut.href}>{shortcut.label}</Link>
            </li>
          ))}
        </ul>
        <div className="cluster mt-8">
          <Button href="/" size="lg" arrow>
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="ghost-light">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
