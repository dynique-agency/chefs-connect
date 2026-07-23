import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Eindhoven',
  description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Eindhoven. Chefs Connect bemiddelt snel en zonder gedoe in Eindhoven en de regio Noord-Brabant.',
  keywords: ['freelance kok eindhoven', 'kok inhuren eindhoven', 'horecapersoneel eindhoven', 'tijdelijke kok eindhoven', 'spoed kok brabant', 'keukenpersoneel eindhoven'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-eindhoven'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Eindhoven | Chefs Connect',
    description: 'Binnen 24 tot 48 uur een ervaren freelance kok in Eindhoven. Chefs Connect bemiddelt snel en zonder gedoe in Eindhoven en de regio Noord-Brabant.',
    url: siteUrl('https://chefs-connect.nl/personeel-eindhoven'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Eindhoven', item: siteUrl('https://chefs-connect.nl/personeel-eindhoven') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Eindhoven en de regio Noord-Brabant.',
  areaServed: { '@type': 'City', name: 'Eindhoven' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Eindhoven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Eindhoven en de regio Noord-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Eindhoven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Eindhoven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Eindhoven in Noord-Brabant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Helmond, Tilburg en de bredere regio Noord-Brabant.',
      },
    },
  ],
};

export default function PersoneelEindhovenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
