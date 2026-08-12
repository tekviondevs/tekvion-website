import { hasIcon } from '@/components/ds';

/**
 * A few service records name lucide glyphs that the Icon registry does not
 * carry. Rather than silently falling back to an arrow, map them onto the
 * closest registered glyph. Anything unmapped falls back to a neutral one.
 */
const ICON_ALIASES: Record<string, string> = {
  'code-2': 'code',
  package: 'layers',
  repeat: 'refresh-cw',
};

/** Returns a glyph name that is guaranteed to be registered in the Icon set. */
export function serviceIcon(name: string): string {
  if (hasIcon(name)) return name;
  const alias = ICON_ALIASES[name];
  if (alias && hasIcon(alias)) return alias;
  return 'layers';
}

/**
 * Words that must never be the last word under the amber underline — the
 * motif is drawn under a phrase, and stopping on "and" reads like a typo.
 */
const CONNECTORS = new Set([
  'a',
  'an',
  'and',
  'built',
  'for',
  'from',
  'in',
  'of',
  'on',
  'or',
  'that',
  'the',
  'to',
  'with',
  'without',
  '&',
]);

export interface HeroTitleParts {
  /** The opening phrase that carries the underline. */
  lead: string;
  /** Everything after it — may be empty for very short titles. */
  rest: string;
}

/**
 * Splits a service hero title so the opening phrase can carry the signature
 * amber underline. Takes the first two words, extending up to four while the
 * phrase would otherwise end on a connector.
 */
export function splitHeroTitle(title: string): HeroTitleParts {
  const words = title.trim().split(/\s+/);
  if (words.length <= 3) return { lead: title.trim(), rest: '' };

  let take = 2;
  while (take < 4 && take < words.length - 1 && CONNECTORS.has(words[take - 1].toLowerCase())) {
    take += 1;
  }

  return { lead: words.slice(0, take).join(' '), rest: words.slice(take).join(' ') };
}

/** "5 services" / "1 service" — used by the category eyebrows and jump nav. */
export function serviceCount(count: number): string {
  return `${count} ${count === 1 ? 'service' : 'services'}`;
}
