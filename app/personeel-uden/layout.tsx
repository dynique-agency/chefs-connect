import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const description = 'In Uden en de regio Noordoost-Brabant regelt Chefs Connect snel een ervaren freelance kok voor jouw keuken.';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Uden',
  description,
  keywords: ['freelance kok uden', 'kok inhuren uden', 'horecapersoneel uden', 'tijdelijke kok uden', 'spoed kok uden', 'keukenpersoneel uden'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-uden'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Uden | Chefs Connect',
    description,
    url: siteUrl('https://chefs-connect.nl/personeel-uden'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Uden', item: siteUrl('https://chefs-connect.nl/personeel-uden') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Uden en de regio Noordoost-Brabant.',
  areaServed: { '@type': 'City', name: 'Uden' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Uden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Uden en de regio Noordoost-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Uden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Uden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Uden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Den Bosch en de bredere regio Noordoost-Brabant.',
      },
    },
  ],
};

export default function PersoneelUdenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
