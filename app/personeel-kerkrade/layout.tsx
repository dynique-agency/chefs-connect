import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Kerkrade',
  description: 'Freelance kok nodig in Kerkrade? Chefs Connect regelt ervaren keukenpersoneel voor Kerkrade en de Parkstad regio, ook rond grote evenementen.',
  keywords: ['freelance kok kerkrade', 'kok inhuren kerkrade', 'horecapersoneel kerkrade', 'tijdelijke kok kerkrade', 'spoed kok kerkrade', 'keukenpersoneel kerkrade'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-kerkrade'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Kerkrade | Chefs Connect',
    description: 'Freelance kok nodig in Kerkrade? Chefs Connect regelt ervaren keukenpersoneel voor Kerkrade en de Parkstad regio, ook rond grote evenementen.',
    url: siteUrl('https://chefs-connect.nl/personeel-kerkrade'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Kerkrade', item: siteUrl('https://chefs-connect.nl/personeel-kerkrade') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Kerkrade en de regio Parkstad, Zuid-Limburg.',
  areaServed: { '@type': 'City', name: 'Kerkrade' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok voorstellen in Kerkrade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Kerkrade en de regio Parkstad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie voorstellen in de regio Kerkrade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, zalen en evenementenlocaties in en rond Kerkrade, ook tijdens grote evenementen zoals het World Music Contest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Kerkrade in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Maastricht, Heerlen en de bredere regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Kerkrade? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Kerkrade juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Kerkrade snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelKerkradeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
