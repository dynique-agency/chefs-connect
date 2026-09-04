import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/limburg');
const description = 'Chefs Connect verbindt freelance koks en bediening in heel Limburg: Maastricht, Sittard-Geleen, Heerlen, Kerkrade, Roermond, Weert en Venlo. Ook kok aan huis.';

export const metadata: Metadata = {
  title: 'Horecapersoneel en Freelance Koks in Limburg',
  description,
  keywords: ['kok limburg', 'kok zuid-limburg', 'freelance koks limburg', 'horecapersoneel limburg', 'chef aan huis limburg', 'kok aan huis limburg', 'instellingskok limburg'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Horecapersoneel en Freelance Koks in Limburg | Chefs Connect',
    description,
    url,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Limburg', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren en Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Chefs Connect verbindt freelance koks en bediening door heel Limburg, inclusief kok aan huis in Zuid-Limburg.',
  areaServed: { '@type': 'State', name: 'Limburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Chefs Connect actief in heel Limburg?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij bemiddelen freelance horecapersoneel door heel Limburg, van Maastricht, Valkenburg en Sittard-Geleen tot Heerlen, Kerkrade, Roermond, Weert, Echt en Venlo.' },
    },
    {
      '@type': 'Question',
      name: 'Bemiddelen jullie ook instellingskoks in Limburg?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, we plaatsen regelmatig freelance koks bij zorginstellingen, bedrijfsrestaurants en scholen in Limburg. Op onze pagina over instellingskok-opdrachten lees je hier meer over.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook een kok aan huis boeken in Limburg?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, in Maastricht en de bredere regio Zuid-Limburg, waaronder Sittard-Geleen en Heerlen, verzorgen we privédiners aan huis met een eigen chef.' },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook in de grensregio richting België en Duitsland?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, we plaatsen regelmatig in de grensregio richting Hasselt, Luik en Aken.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan ik personeel of een opdracht krijgen in Limburg?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen binnen 24 tot 48 uur een passend voorstel, zowel voor werkgevers als voor freelancers.' },
    },
  ],
};

export default function LimburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
