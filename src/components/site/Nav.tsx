'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Container, Icon } from '@/components/ds';
import { contact } from '@/lib/seo';

/**
 * Fixed 72px gradient bar. Picks up a shadow after 24px of scroll and collapses
 * to a full drawer below 1080px: focus trap, Escape to close, body scroll lock.
 */
const links: Array<{ label: string; href: string }> = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );

  /* Shadow after 24px of scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Safety net: close the drawer on any route change — adjusted during render,
     which is React's recommended alternative to a route-watching effect. Links
     inside the drawer close it through `closeDrawer` instead, so activating one
     restores focus rather than stranding it on <body>. */
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  /* Body scroll lock, Escape to close, and a focus trap inside the drawer. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const drawer = drawerRef.current;
    drawer?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !drawer) return;

      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === toggleRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* Every route out of the drawer runs through here: unmounting it without
     moving focus would drop the user on <body> and make them tab from the top
     of the document again. */
  const closeDrawer = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className="tk-nav" data-scrolled={scrolled}>
      <Container className="tk-nav__inner">
        <Link href="/" className="tk-nav__logo" aria-label="Tekvion Innovations — home">
          <Image
            src="/assets/logo-lockup-white.png"
            alt="Tekvion Innovations"
            width={486}
            height={126}
            priority
          />
        </Link>

        <nav className="tk-nav__links" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tk-nav__link"
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="tk-nav__cta">
          <Button href="/quote" variant="secondary-light" size="sm" arrow>
            Get a Free Quote
          </Button>
        </div>

        {/* aria-controls is set only while the drawer is mounted — pointing at a
            missing id is a dangling reference for assistive technology. */}
        <button
          ref={toggleRef}
          type="button"
          className="tk-nav__toggle"
          aria-expanded={open}
          aria-controls={open ? 'mobile-nav' : undefined}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => (open ? closeDrawer() : setOpen(true))}
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </Container>

      {open ? (
        <>
          <div
            ref={drawerRef}
            id="mobile-nav"
            className="tk-nav__drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="tk-nav__drawer-links">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="tk-nav__drawer-link"
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={closeDrawer}
                >
                  {link.label}
                  <Icon name="chevron-right" size={18} />
                </Link>
              ))}
            </div>
            <div className="tk-nav__drawer-cta">
              <Button href="/quote" size="lg" block arrow onClick={closeDrawer}>
                Get a Free Quote
              </Button>
            </div>
            <div className="tk-nav__drawer-contact">
              <a href={`mailto:${contact.email}`} onClick={closeDrawer}>
                <Icon name="mail" size={16} />
                {contact.email}
              </a>
              <a href={contact.phoneHref} onClick={closeDrawer}>
                <Icon name="phone" size={16} />
                {contact.phone}
              </a>
            </div>
          </div>
          <button
            type="button"
            className="tk-nav__scrim"
            aria-label="Close menu"
            onClick={closeDrawer}
          />
        </>
      ) : null}
    </header>
  );
}
