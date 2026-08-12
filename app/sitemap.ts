import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';
import { execSync } from 'child_process';

export const dynamic = 'force-static';

/**
 * Real per-page last-modified date, taken from that page's last git commit.
 *
 * Using `new Date()` here would stamp every URL with today's date on every
 * build, even for pages nothing changed on. Google uses <lastmod> to decide
 * what's worth re-crawling; a sitemap where everything is always "modified
 * today" trains it to stop trusting the signal. Falls back to a fixed date
 * if git history isn't available (e.g. a shallow clone in some CI setups).
 */
function lastModifiedFor(filePath: string): string {
  try {
    const date = execSync(`git log -1 --format=%as -- "${filePath}"`, {
      cwd: process.cwd(),
      encoding: 'utf-8',
    }).trim();
    if (date) return date;
  } catch {
    // ignore, use fallback below
  }
  return '2026-06-01';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{
    url: string;
    file: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { url: siteUrl('https://chefs-connect.nl'), file: 'app/page.tsx', changeFrequency: 'monthly', priority: 1 },
    { url: siteUrl('https://chefs-connect.nl/zoek-personeel'), file: 'app/zoek-personeel/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/horecaspecialist'), file: 'app/horecaspecialist/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/evenementen'), file: 'app/evenementen/page.tsx', changeFrequency: 'monthly', priority: 0.9 },
    { url: siteUrl('https://chefs-connect.nl/over-ons'), file: 'app/over-ons/page.tsx', changeFrequency: 'yearly', priority: 0.7 },
    { url: siteUrl('https://chefs-connect.nl/contact'), file: 'app/contact/page.tsx', changeFrequency: 'yearly', priority: 0.6 },
    { url: siteUrl('https://chefs-connect.nl/personeel-maastricht'), file: 'app/personeel-maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-eindhoven'), file: 'app/personeel-eindhoven/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-tilburg'), file: 'app/personeel-tilburg/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-breda'), file: 'app/personeel-breda/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-den-bosch'), file: 'app/personeel-den-bosch/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-nijmegen'), file: 'app/personeel-nijmegen/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-antwerpen'), file: 'app/personeel-antwerpen/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-hasselt'), file: 'app/personeel-hasselt/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-utrecht'), file: 'app/personeel-utrecht/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-venlo'), file: 'app/personeel-venlo/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-helmond'), file: 'app/personeel-helmond/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-gent'), file: 'app/personeel-gent/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-brugge'), file: 'app/personeel-brugge/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-brussel'), file: 'app/personeel-brussel/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-houten'), file: 'app/personeel-houten/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-oss'), file: 'app/personeel-oss/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-roosendaal'), file: 'app/personeel-roosendaal/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-bergen-op-zoom'), file: 'app/personeel-bergen-op-zoom/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-oosterhout'), file: 'app/personeel-oosterhout/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-waalwijk'), file: 'app/personeel-waalwijk/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-uden'), file: 'app/personeel-uden/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-sittard-geleen'), file: 'app/personeel-sittard-geleen/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-heerlen'), file: 'app/personeel-heerlen/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-roermond'), file: 'app/personeel-roermond/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-weert'), file: 'app/personeel-weert/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/personeel-kerkrade'), file: 'app/personeel-kerkrade/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/maastricht'), file: 'app/maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-maastricht'), file: 'app/vacature-kok-maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-maastricht'), file: 'app/vacature-bediening-maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-eindhoven'), file: 'app/vacature-kok-eindhoven/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-tilburg'), file: 'app/vacature-kok-tilburg/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-breda'), file: 'app/vacature-kok-breda/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-den-bosch'), file: 'app/vacature-kok-den-bosch/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-nijmegen'), file: 'app/vacature-kok-nijmegen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-eindhoven'), file: 'app/vacature-bediening-eindhoven/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-tilburg'), file: 'app/vacature-bediening-tilburg/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-breda'), file: 'app/vacature-bediening-breda/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-den-bosch'), file: 'app/vacature-bediening-den-bosch/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-nijmegen'), file: 'app/vacature-bediening-nijmegen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-antwerpen'), file: 'app/vacature-kok-antwerpen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-antwerpen'), file: 'app/vacature-bediening-antwerpen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-hasselt'), file: 'app/vacature-kok-hasselt/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-hasselt'), file: 'app/vacature-bediening-hasselt/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-utrecht'), file: 'app/vacature-kok-utrecht/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-utrecht'), file: 'app/vacature-bediening-utrecht/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-venlo'), file: 'app/vacature-kok-venlo/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-venlo'), file: 'app/vacature-bediening-venlo/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-helmond'), file: 'app/vacature-kok-helmond/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-helmond'), file: 'app/vacature-bediening-helmond/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-gent'), file: 'app/vacature-kok-gent/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-gent'), file: 'app/vacature-bediening-gent/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-brugge'), file: 'app/vacature-kok-brugge/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-brugge'), file: 'app/vacature-bediening-brugge/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-brussel'), file: 'app/vacature-kok-brussel/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-brussel'), file: 'app/vacature-bediening-brussel/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-houten'), file: 'app/vacature-kok-houten/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-houten'), file: 'app/vacature-bediening-houten/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-oss'), file: 'app/vacature-kok-oss/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-oss'), file: 'app/vacature-bediening-oss/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-roosendaal'), file: 'app/vacature-kok-roosendaal/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-roosendaal'), file: 'app/vacature-bediening-roosendaal/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-bergen-op-zoom'), file: 'app/vacature-kok-bergen-op-zoom/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-bergen-op-zoom'), file: 'app/vacature-bediening-bergen-op-zoom/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-oosterhout'), file: 'app/vacature-kok-oosterhout/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-oosterhout'), file: 'app/vacature-bediening-oosterhout/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-waalwijk'), file: 'app/vacature-kok-waalwijk/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-waalwijk'), file: 'app/vacature-bediening-waalwijk/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-uden'), file: 'app/vacature-kok-uden/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-uden'), file: 'app/vacature-bediening-uden/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-sittard-geleen'), file: 'app/vacature-kok-sittard-geleen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-sittard-geleen'), file: 'app/vacature-bediening-sittard-geleen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-heerlen'), file: 'app/vacature-kok-heerlen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-heerlen'), file: 'app/vacature-bediening-heerlen/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-roermond'), file: 'app/vacature-kok-roermond/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-roermond'), file: 'app/vacature-bediening-roermond/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-weert'), file: 'app/vacature-kok-weert/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-weert'), file: 'app/vacature-bediening-weert/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-kok-kerkrade'), file: 'app/vacature-kok-kerkrade/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-bediening-kerkrade'), file: 'app/vacature-bediening-kerkrade/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/vacature-instellingskok'), file: 'app/vacature-instellingskok/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/catering-bedrijfsfeest'), file: 'app/catering-bedrijfsfeest/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/catering-bruiloft'), file: 'app/catering-bruiloft/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/kok-aan-huis'), file: 'app/kok-aan-huis/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: siteUrl('https://chefs-connect.nl/kok-aan-huis-maastricht'), file: 'app/kok-aan-huis-maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/kok-aan-huis-nijmegen'), file: 'app/kok-aan-huis-nijmegen/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/kok-aan-huis-tilburg'), file: 'app/kok-aan-huis-tilburg/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/kok-aan-huis-den-bosch'), file: 'app/kok-aan-huis-den-bosch/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/cateringpartner'), file: 'app/cateringpartner/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank'), file: 'app/kennisbank/page.tsx', changeFrequency: 'weekly', priority: 0.7 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-worden'), file: 'app/kennisbank/freelance-kok-worden/page.tsx', changeFrequency: 'monthly', priority: 0.6 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank/freelancen-of-vast-in-de-horeca'), file: 'app/kennisbank/freelancen-of-vast-in-de-horeca/page.tsx', changeFrequency: 'monthly', priority: 0.6 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-tarief'), file: 'app/kennisbank/freelance-kok-tarief/page.tsx', changeFrequency: 'monthly', priority: 0.6 },
  ];

  return pages.map(({ url, file, changeFrequency, priority }) => ({
    url,
    lastModified: lastModifiedFor(file),
    changeFrequency,
    priority,
  }));
}
