import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/eerste-freelance-opdracht-checklist');
const title = 'Je Eerste Freelance Horeca-opdracht: De Checklist';
const description = 'Je eerste freelance dienst in de horeca brengt vragen en zenuwen met zich mee. De checklist voor een rustige, professionele start.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['eerste freelance opdracht horeca', 'checklist freelance horeca', 'eerste dienst freelancer', 'freelance kok eerste opdracht', 'freelance bediening eerste dienst'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank/eerste-freelance-opdracht-checklist'),
  openGraph: {
    title: 'Je Eerste Freelance Horeca-opdracht: De Checklist | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Je eerste freelance horeca-opdracht: de checklist',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-08-27',
  dateModified: '2026-08-27',
  author: {
    '@type': 'Person',
    name: 'Marcel',
    jobTitle: 'Horeca Planner bij Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Je eerste freelance opdracht', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat als ik echt te laat dreig te komen door onvoorziene vertraging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bel zo snel mogelijk je contactpersoon, hoe eerder hoe beter. Een paar minuten vertraging die je vroeg meldt, is voor een opdrachtgever te overzien. Stilte tot het moment dat je hoort te beginnen, is dat niet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik zelf gereedschap of materiaal meenemen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat verschilt per opdracht en functie. Voor bediening en voor de keuken hebben we aparte, meer gedetailleerde artikelen over wat je in je tas hoort te hebben, van gepolijst bestek tot je eigen messenset. Deze checklist gaat vooral over de organisatie eromheen, niet over de specifieke uitrusting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat als de opdracht op locatie anders blijkt dan vooraf besproken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meld dat meteen bij je contactpersoon of bij ons als planner, in plaats van het er maar bij te laten zitten. Soms is er een simpele verklaring, soms moeten we het intern rechtzetten. Belangrijker dan wie er gelijk heeft, is dat je het niet zelf oplost door te gokken wat er bedoeld werd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voor ik me op mijn gemak voel in een nieuwe zaak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat verschilt per persoon en per zaak, maar reken je eerste dienst gewoon als kennismaking. Bij de tweede of derde keer in dezelfde keuken of zaal ken je meestal de indeling en het team al, en verdwijnt het meeste onwennige gevoel vanzelf.',
      },
    },
  ],
};

export default function EersteFreelanceOpdrachtChecklistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
