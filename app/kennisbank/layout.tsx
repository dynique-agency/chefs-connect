import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kennisbank | Gidsen voor de Horecaprofessional',
  description: 'Praktische kennis over freelancen in de horeca: van freelance kok worden tot je tarief bepalen. Geschreven door ervaren chefs van Chefs Connect.',
  keywords: ['freelance horeca kennis', 'freelance kok tips', 'zzp horeca gids', 'werken in de horeca', 'horeca kennisbank'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank'),
  openGraph: {
    title: 'Kennisbank | Chefs Connect',
    description: 'Praktische kennis over freelancen in de horeca: van freelance kok worden tot je tarief bepalen. Geschreven door ervaren chefs van Chefs Connect.',
    url: siteUrl('https://chefs-connect.nl/kennisbank'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

// NOTE: schema (CollectionPage + breadcrumb) lives in page.tsx, not here -
// a layout's schema would leak onto every child route (incl. articles), which
// would wrongly tag each article as part of a CollectionPage.
export default function KennisbankLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
