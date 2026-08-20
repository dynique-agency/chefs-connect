import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Leuven',
  description: 'Personeelstekort in de keuken in Leuven? Chefs Connect regelt snel een ervaren freelance kok voor Leuven en Vlaams-Brabant.',
  keywords: ['freelance kok leuven', 'kok inhuren leuven', 'horecapersoneel leuven', 'tijdelijke kok leuven', 'spoed kok leuven', 'keukenpersoneel leuven'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-leuven'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Leuven | Chefs Connect',
    description: 'Personeelstekort in de keuken in Leuven? Chefs Connect regelt snel een ervaren freelance kok voor Leuven en Vlaams-Brabant.',
    url: siteUrl('https://chefs-connect.nl/personeel-leuven'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Leuven', item: siteUrl('https://chefs-connect.nl/personeel-leuven') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Leuven en Vlaams-Brabant.',
  areaServed: { '@type': 'City', name: 'Leuven' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Leuven?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Leuven.' },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Leuven?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, cafés en studentenhoreca in Leuven.' },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Leuven?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij plaatsen ook in Brussel, Mechelen en de bredere regio Vlaams-Brabant.' },
    },
  ],
};

export default function PersoneelLeuvenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
