import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Oss',
  description: 'Personeelstekort in de keuken in Oss? Chefs Connect regelt snel een ervaren freelance kok voor Oss en Noordoost-Brabant.',
  keywords: ['freelance kok oss', 'kok inhuren oss', 'horecapersoneel oss', 'tijdelijke kok oss', 'spoed kok noordoost-brabant', 'keukenpersoneel oss'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-oss'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Oss | Chefs Connect',
    description: 'Personeelstekort in de keuken in Oss? Chefs Connect regelt snel een ervaren freelance kok voor Oss en Noordoost-Brabant.',
    url: siteUrl('https://chefs-connect.nl/personeel-oss'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Oss', item: siteUrl('https://chefs-connect.nl/personeel-oss') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Oss en de regio Noordoost-Brabant.',
  areaServed: { '@type': 'City', name: 'Oss' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Oss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oss en de regio Noordoost-Brabant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in Oss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Oss.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Oss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Uden, Veghel en de bredere regio Noordoost-Brabant, tot aan Den Bosch.',
      },
    },
  ],
};

export default function PersoneelOssLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
