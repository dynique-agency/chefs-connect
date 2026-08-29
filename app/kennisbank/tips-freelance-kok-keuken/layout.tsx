import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/tips-freelance-kok-keuken');
const title = 'Tips Voor Freelance Koks: Klaarstaan In Een Onbekende Keuken';
const description = 'Praktische tips voor freelance koks die een onbekende keuken binnenstappen: wat je meeneemt, wat je vooraf regelt, en hoe je snel je plek vindt op de pass.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['freelance kok tips', 'tips freelance kok keuken', 'onbekende keuken freelance chef', 'freelance chef voorbereiding', 'eerste dienst freelance kok'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank/tips-freelance-kok-keuken'),
  openGraph: {
    title: 'Tips Voor Freelance Koks: Klaarstaan In Een Onbekende Keuken | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tips voor freelance koks: klaarstaan in een onbekende keuken',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  author: {
    '@type': 'Person',
    name: 'Mitchell Deneke',
    jobTitle: 'Mede-oprichter Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Tips voor freelance koks', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Moet ik echt mijn eigen messen meenemen als de keuken al messen heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Geleende messen slijpen en liggen anders dan je gewend bent, en in een drukke dienst wil je daar niet middenin achter komen. Je eigen set is de enige constante in een verder onbekende omgeving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat als ik tijdens de dienst zelf iets niet weet over de kaart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vraag het meteen en precies aan de dichtstbijzijnde collega of de chef, zeker als het om allergenen gaat. Gokken is in de horeca nooit een optie, al helemaal niet als het om iemands gezondheid gaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voor je je thuis voelt in een nieuwe keuken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat verschilt per keuken en per persoon, maar meestal snap je tegen het einde van je eerste dienst het ritme al aardig. Volledig op je gemak ben je meestal pas na een tweede of derde keer in diezelfde keuken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verschilt dit tussen een grote keuken en een privé-diner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zeker. Bij een privé-diner is er vaak geen volledige brigade om op terug te vallen, soms sta je er grotendeels alleen voor. Dan is je eigen voorbereiding, van messen tot thermometer, nog belangrijker, want er is niemand die het voor je oplost.',
      },
    },
  ],
};

export default function TipsFreelanceKokKeukenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
