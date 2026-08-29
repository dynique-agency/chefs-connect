import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/tips-freelance-bediening');
const title = 'Tips Voor Freelance Bediening: Wat Je Altijd Bij Je Hebt';
const description = 'Praktische tips voor freelance bediening: wat je meeneemt naar een onbekende zaak, hoe je de kaart en kassa snel doorgrondt, en meedraait met een nieuw team.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['freelance bediening tips', 'zzp bediening horeca', 'freelance ober tips', 'werken als freelance bediening', 'eerste dienst nieuwe locatie'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank/tips-freelance-bediening'),
  openGraph: {
    title: 'Tips Voor Freelance Bediening: Wat Je Altijd Bij Je Hebt | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tips voor freelance bediening: wat je altijd bij je hebt',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
  author: {
    '@type': 'Person',
    name: 'Marcel',
    jobTitle: 'Horeca Planner Chefs Connect',
    worksFor: { '@type': 'Organization', name: 'Chefs Connect' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    logo: { '@type': 'ImageObject', url: siteUrl('https://chefs-connect.nl/chefsconnectlogo.png') },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: siteUrl('https://chefs-connect.nl/kennisbank') },
    { '@type': 'ListItem', position: 3, name: 'Tips voor freelance bediening', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Moet ik mijn eigen materiaal altijd meenemen, ook als de zaak zegt dat alles aanwezig is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. "Alles aanwezig" betekent vaak dat het ergens in de zaak ligt, niet dat het binnen handbereik is op het moment dat jij het nodig hebt. Je eigen kelnersmes en aansteker meenemen kost niets en voorkomt dat je tijdens de dienst moet zoeken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat als de dresscode toch anders blijkt te zijn dan afgesproken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meld het direct bij de leidinggevende zodra je aankomt, in plaats van er zelf iets van te maken. De meeste zaken hebben een extra schort, vest of das achter de hand voor precies dit soort situaties. Kom je zelf met een extra wit hemd, dan heb je in elk geval een alternatief bij de hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ruim van tevoren moet ik aankomen op een locatie die ik niet ken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reken minimaal een kwartier extra bovenop je normale marge, puur voor het vinden van de juiste ingang en het omkleden. Kom je te vroeg aan, wacht dan gewoon buiten of in de auto tot het een gepast moment is om je te melden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als ik de kassa echt niet doorheb tijdens de dienst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Val terug op je notitieboekje en vraag een collega om de bestelling voor je in te voeren zodra er een gaatje is. Beter een paar minuten vertraging dan een verkeerd doorgestuurde bestelling die de keuken extra werk kost.',
      },
    },
  ],
};

export default function TipsFreelanceBedieningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
