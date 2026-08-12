/** Tiny className joiner — filters out falsy branches so JSX stays readable. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
