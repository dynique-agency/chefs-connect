const NL_ROOT = 'https://chefs-connect.nl';
const BE_ROOT = 'https://chefs-connect.be';

/**
 * Root URL of whichever domain the current build targets.
 *
 * The site is one Next.js static export deployed twice: once per Cloudflare
 * Pages project, each with its own `NEXT_PUBLIC_SITE_URL` build variable, one
 * bound to chefs-connect.nl and one to chefs-connect.be. When the variable is
 * unset (local dev, or a project that never set it), it defaults to the NL
 * domain so existing behaviour is unchanged.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL === BE_ROOT ? BE_ROOT : NL_ROOT;

/** Bare host (no protocol) of the current build's domain, for display text. */
export const SITE_HOST = SITE_URL.replace('https://', '');

/**
 * Rewrites an absolute chefs-connect.nl URL to the domain of the current
 * build. Call sites keep writing the NL URL literal (readable, greppable);
 * this is the single place that redirects it to chefs-connect.be when that
 * is the active build target. Used for JSON-LD and other absolute URLs that
 * must self-reference the domain the page is actually served from.
 */
export function siteUrl(nlAbsoluteUrl: string): string {
  return nlAbsoluteUrl.replace(NL_ROOT, SITE_URL);
}

/**
 * Builds a page's `alternates` metadata (canonical + hreflang) in one call.
 *
 * Next.js merges the `alternates` field shallowly between a layout and its
 * child: if a page sets its own `alternates: { canonical }`, it silently
 * replaces the parent's entire `alternates` object, including any
 * `languages` (hreflang) block. Every page must therefore build its own
 * complete alternates via this helper rather than setting `canonical` alone.
 *
 * `canonicalUrl` is always written as the NL URL at call sites. The hreflang
 * cluster (`languages`) always lists both real domains regardless of which
 * one is building; only `canonical` itself becomes self-referencing, i.e. it
 * resolves to whichever domain `SITE_URL` points at for this build.
 */
export function pageAlternates(canonicalUrl: string) {
  const nlUrl = canonicalUrl.replace(BE_ROOT, NL_ROOT);
  const beUrl = nlUrl.replace(NL_ROOT, BE_ROOT);
  return {
    canonical: siteUrl(nlUrl),
    languages: {
      'x-default': nlUrl,
      'nl-NL': nlUrl,
      'nl-BE': beUrl,
    },
  };
}
