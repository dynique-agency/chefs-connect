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
    { url: siteUrl('https://chefs-connect.nl/maastricht'), file: 'app/maastricht/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
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
    { url: siteUrl('https://chefs-connect.nl/catering-bedrijfsfeest'), file: 'app/catering-bedrijfsfeest/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/catering-bruiloft'), file: 'app/catering-bruiloft/page.tsx', changeFrequency: 'monthly', priority: 0.85 },
    { url: siteUrl('https://chefs-connect.nl/cateringpartner'), file: 'app/cateringpartner/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank'), file: 'app/kennisbank/page.tsx', changeFrequency: 'weekly', priority: 0.7 },
    { url: siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-worden'), file: 'app/kennisbank/freelance-kok-worden/page.tsx', changeFrequency: 'monthly', priority: 0.6 },
  ];

  return pages.map(({ url, file, changeFrequency, priority }) => ({
    url,
    lastModified: lastModifiedFor(file),
    changeFrequency,
    priority,
  }));
}
