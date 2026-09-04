import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/zeeland');
const description = 'Chefs Connect verbindt freelance koks en bediening in heel Zeeland: Middelburg, Vlissingen, Domburg, Goes, Terneuzen en Renesse. Ook kok aan huis.';

export const metadata: Metadata = {
  title: 'Horecapersoneel en Freelance Koks in Zeeland',
  description,
  keywords: ['kok zeeland', 'freelance koks zeeland', 'horecapersoneel zeeland', 'chef aan huis zeeland', 'kok aan huis zeeland', 'instellingskok zeeland'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Horecapersoneel en Freelance Koks in Zeeland | Chefs Connect',
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
    { '@type': 'ListItem', position: 2, name: 'Zeeland', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance Horecapersoneel Inhuren en Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Chefs Connect verbindt freelance koks en bediening door heel Zeeland, inclusief kok aan huis.',
  areaServed: { '@type': 'State', name: 'Zeeland' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Chefs Connect actief in heel Zeeland?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij bemiddelen freelance horecapersoneel in Middelburg, Vlissingen, Domburg, Goes, Terneuzen, Renesse en de rest van Zeeland, waaronder Walcheren, Zuid-Beveland, Zeeuws-Vlaanderen en Schouwen-Duiveland.' },
    },
    {
      '@type': 'Question',
      name: 'Bemiddelen jullie ook instellingskoks in Zeeland?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, we plaatsen regelmatig freelance koks bij zorginstellingen, bedrijfsrestaurants en scholen. Op onze pagina over instellingskok-opdrachten lees je hier meer over.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook een kok aan huis boeken in Zeeland?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, ook in Zeeland verzorgen we privédiners aan huis met een eigen chef. Op onze pagina over kok aan huis lees je hoe dat werkt.' },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook op de Zeeuwse eilanden en in de rest van de provincie?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, naast Middelburg, Vlissingen, Domburg, Goes, Terneuzen en Renesse plaatsen we ook in de rest van de provincie, van Walcheren en Zuid-Beveland tot Schouwen-Duiveland en Zeeuws-Vlaanderen.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan ik personeel of een opdracht krijgen in Zeeland?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen binnen 24 tot 48 uur een passend voorstel, zowel voor werkgevers als voor freelancers.' },
    },
  ],
};

export default function ZeelandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
