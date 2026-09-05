import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Echt',
  description: 'Personeelstekort in de keuken in Echt? Chefs Connect regelt snel een ervaren freelance kok voor Echt en de gemeente Echt-Susteren.',
  keywords: ['freelance kok echt', 'kok inhuren echt', 'horecapersoneel echt', 'tijdelijke kok echt', 'spoed kok midden-limburg', 'keukenpersoneel echt-susteren'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-echt'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Echt | Chefs Connect',
    description: 'Personeelstekort in de keuken in Echt? Chefs Connect regelt snel een ervaren freelance kok voor Echt en de gemeente Echt-Susteren.',
    url: siteUrl('https://chefs-connect.nl/personeel-echt'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Echt', item: siteUrl('https://chefs-connect.nl/personeel-echt') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Echt en de gemeente Echt-Susteren.',
  areaServed: { '@type': 'City', name: 'Echt' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Echt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Echt en de gemeente Echt-Susteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in Echt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen zelfstandig werkende koks, plaatsvervangend keukenchefs en head chefs voor dorpsrestaurants, cafés en feestlocaties in en rond Echt, ook voor grotere gelegenheden zoals bruiloften en jubilea.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Echt in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Roermond, Weert en de bredere regio Midden-Limburg.',
      },
    },
  ],
};

export default function PersoneelEchtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
