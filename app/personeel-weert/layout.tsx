import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Freelance Kok Inhuren in Weert',
  description: 'Op zoek naar keukenpersoneel in Weert? Chefs Connect levert ervaren freelance koks in Weert en de regio Midden-Limburg, snel en zonder gedoe.',
  keywords: ['freelance kok weert', 'kok inhuren weert', 'horecapersoneel weert', 'tijdelijke kok weert', 'spoed kok weert', 'keukenpersoneel weert'],
  alternates: pageAlternates('https://chefs-connect.nl/personeel-weert'),
  openGraph: {
    title: 'Freelance Kok Inhuren in Weert | Chefs Connect',
    description: 'Op zoek naar keukenpersoneel in Weert? Chefs Connect levert ervaren freelance koks in Weert en de regio Midden-Limburg, snel en zonder gedoe.',
    url: siteUrl('https://chefs-connect.nl/personeel-weert'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Zoek Personeel', item: siteUrl('https://chefs-connect.nl/zoek-personeel') },
    { '@type': 'ListItem', position: 3, name: 'Weert', item: siteUrl('https://chefs-connect.nl/personeel-weert') },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance koks en keukenpersoneel inhuren in Weert en Midden-Limburg.',
  areaServed: { '@type': 'City', name: 'Weert' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kan Chefs Connect een kok leveren in Weert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Weert en de regio Midden-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke koks kunnen jullie leveren in de regio Weert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en bedrijfscatering in en rond Weert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefs Connect ook actief buiten Weert in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij plaatsen ook in Roermond en de bredere regio Midden-Limburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kok gezocht in Weert? Is dat hetzelfde als bij Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Niet helemaal: 'kok gezocht' of 'zzp kok gezocht' is meestal een vacaturetekst voor een vaste baan. Bij Chefs Connect huur je in Weert juist snel een zzp-kok in voor een tijdelijke opdracht, zonder sollicitatieprocedure. Heb je in Weert snel een kok nodig, vandaag of over twee weken? Dan zit je bij ons goed.",
      },
    },
  ],
};

export default function PersoneelWeertLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
