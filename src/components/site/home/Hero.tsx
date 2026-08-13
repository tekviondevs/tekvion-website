import Image from 'next/image';
import { Button, Container, Underline } from '@/components/ds';
import { CALENDLY_URL } from '@/content/company';

/**
 * Home hero — ported from the design export's `hero.jsx`.
 *
 * The 3D brand render floats inside three concentric cyan rings; the emphasised
 * words of the h1 carry the signature amber underline. Below 900px the art
 * stacks under the copy and the rings scale down (see home.css).
 */
export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container className="home-hero__inner">
        <div className="home-hero__copy">
          <h1 id="home-hero-title" className="home-hero__title">
            <span className="home-hero__nowrap">
              <Underline delay={0.4}>Custom Websites</Underline>
            </span>{' '}
            That Convert &amp; Scale with You
          </h1>
          <p className="home-hero__intro">
            We design and build clean, high-performing websites and web apps — WordPress,
            Bubble.io, MERN, Next.js and PHP — and automate the business behind them with
            GoHighLevel, AI, n8n and Make.com. 49+ projects delivered across 4 continents since
            2021.
          </p>
          <div className="home-hero__actions cluster">
            <Button href={CALENDLY_URL} size="lg" arrow>
              Book a Call<span className="sr-only"> (opens in a new tab)</span>
            </Button>
            <Button href="/portfolio" size="lg" variant="secondary-light">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="home-hero__art">
          <div className="home-hero__rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Image
            src="/assets/logo-3d-clean.png"
            alt="The Tekvion Innovations mark rendered in three dimensions, in the brand's blue-to-cyan gradient"
            width={1312}
            height={950}
            className="home-hero__mark"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
