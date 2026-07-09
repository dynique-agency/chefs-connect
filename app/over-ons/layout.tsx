import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Over Ons | Dé Partner in Culinaire Excellentie',
  description: 'Maak kennis met het team achter Chefs Connect. Passie voor gastronomie, toewijding aan perfectie. Wij verbinden toptalent met de beste horeca in NL & BE.',
  keywords: ['over chefs connect', 'premium horeca bemiddeling', 'missie visie horeca bureau', 'kwaliteit horeca personeel'],
  alternates: pageAlternates('https://chefs-connect.nl/over-ons'),
  openGraph: {
    title: 'Over Ons | Chefs Connect',
    description: 'Maak kennis met het team achter Chefs Connect. Passie voor gastronomie, toewijding aan perfectie. Wij verbinden toptalent met de beste horeca in NL & BE.',
    url: siteUrl('https://chefs-connect.nl/over-ons'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: siteUrl('https://chefs-connect.nl/over-ons') },
  ],
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    foundingDate: '2020',
    description: 'Chefs Connect verheft de standaard van hospitality in de Benelux door het verbinden van de beste freelance professionals met premium opdrachtgevers.',
  },
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
