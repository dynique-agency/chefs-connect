const NL_ROOT = 'https://chefs-connect.nl';
const BE_ROOT = 'https://chefs-connect.be';

/**
 * Builds a page's `alternates` metadata (canonical + hreflang) in one call.
 *
 * Next.js merges the `alternates` field shallowly between a layout and its
 * child: if a page sets its own `alternates: { canonical }`, it silently
 * replaces the parent's entire `alternates` object, including any
 * `languages` (hreflang) block. Every page must therefore build its own
 * complete alternates via this helper rather than setting `canonical` alone.
 */
export function pageAlternates(canonicalUrl: string) {
  const beUrl = canonicalUrl.replace(NL_ROOT, BE_ROOT);
  return {
    canonical: canonicalUrl,
    languages: {
      'x-default': canonicalUrl,
      'nl-NL': canonicalUrl,
      'nl-BE': beUrl,
    },
  };
}
