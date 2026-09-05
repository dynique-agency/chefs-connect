import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Valkenburg',
  description: 'Personeelstekort in de keuken in Valkenburg? Chefs Connect regelt snel een ervaren freelance kok voor Valkenburg en Zuid-Limburg.',
  keywords: ['freelance kok valkenburg', 'kok inhuren valkenburg', 'horecapersoneel valkenburg', 'tijdelijke kok valkenburg', 'spoed kok zuid-limburg', 'keukenpersoneel valkenburg'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-valkenburg'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Valkenburg | Chefs Connect',
    description: 'Personeelstekort in de keuken in Valkenburg? Chefs Connect regelt snel een ervaren freelance kok voor Valkenburg en Zuid-Limburg.',
    url: siteUrl('https://chefs-connect.nl/personeel-valkenburg'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Valkenburg', item: siteUrl('https://chefs-connect.nl/personeel-valkenburg') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Valkenburg en de regio Zuid-Limburg.',
  areaServed: { '@type': 'City', name: 'Valkenburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Valkenburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Valkenburg en de regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in Valkenburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en horecazaken rond de grotten en het centrum van Valkenburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Valkenburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Maastricht, Sittard-Geleen, Heerlen, Kerkrade en de bredere regio Zuid-Limburg.',
      },
    },
  ],
};

export default function PersoneelValkenburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
