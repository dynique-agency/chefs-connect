import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Sittard-Geleen',
  description: 'Freelance koks nodig in Sittard-Geleen? Chefs Connect regelt ervaren keukenprofessionals voor de regio Zuid-Limburg, snel en zonder poespas.',
  keywords: ['freelance kok sittard-geleen', 'kok inhuren sittard-geleen', 'horecapersoneel sittard-geleen', 'tijdelijke kok sittard-geleen', 'spoed kok limburg', 'keukenpersoneel sittard-geleen'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-sittard-geleen'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Sittard-Geleen | Chefs Connect',
    description: 'Freelance koks nodig in Sittard-Geleen? Chefs Connect regelt ervaren keukenprofessionals voor de regio Zuid-Limburg, snel en zonder poespas.',
    url: siteUrl('https://chefs-connect.nl/personeel-sittard-geleen'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Sittard-Geleen', item: siteUrl('https://chefs-connect.nl/personeel-sittard-geleen') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Sittard-Geleen en de regio Zuid-Limburg.',
  areaServed: { '@type': 'City', name: 'Sittard-Geleen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Sittard-Geleen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Sittard-Geleen en de regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in de regio Sittard-Geleen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en bedrijfscatering in en rond Sittard-Geleen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Sittard-Geleen in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Maastricht, Heerlen en de bredere regio Zuid-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Sittard-Geleen? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Sittard-Geleen juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Sittard-Geleen snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelSittardGeleenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
