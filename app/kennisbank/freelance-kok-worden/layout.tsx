import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-worden');
const title = 'Freelance Kok Worden: Zo Begin Je (Stappenplan 2026)';
const description = 'Freelance kok worden? Compleet stappenplan: KvK, btw, verzekeringen, je uurtarief bepalen en aan opdrachten komen. Geschreven door een ervaren chef.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['freelance kok worden', 'zzp kok beginnen', 'freelance kok starten', 'kvk inschrijven horeca', 'zelfstandig kok worden', 'freelance chef worden'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Freelance Kok Worden: Zo Begin Je | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Freelance kok worden: zo begin je',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-06-06',
  dateModified: '2026-06-06',
  author: {
    '@type': 'Person',
    name: 'Gert-Jan',
    jobTitle: 'Oprichter Chefs Connect & freelance chef',
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
    { '@type': 'ListItem', position: 3, name: 'Freelance kok worden', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Heb ik een diploma nodig om freelance kok te worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wettelijk is een koksdiploma niet verplicht om je als zelfstandige in te schrijven. In de praktijk vragen opdrachtgevers vooral naar ervaring en vakmanschap. Een diploma en aantoonbare ervaring helpen je wel aan betere en beter betaalde opdrachten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel verdient een freelance kok?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van je functie, ervaring en regio. Het uurtarief van een freelance kok ligt duidelijk hoger dan een bruto-uurloon in loondienst, omdat je daar je eigen belasting, verzekeringen en pensioen uit betaalt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik meteen veel opdrachten nodig om te starten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Veel koks bouwen het rustig op, soms naast een vaste baan. Belangrijk is dat je je administratie en verzekeringen op orde hebt vanaf het moment dat je je eerste opdracht aanneemt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik freelancen combineren met een vaste baan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dat kan en het is een veelgekozen manier om te starten. Je houdt de zekerheid van je vaste inkomen en bouwt ondertussen je freelancepraktijk en netwerk op. Let wel op afspraken met je huidige werkgever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan ik beginnen na mijn KvK-inschrijving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In principe direct. Zodra je bent ingeschreven en je btw-id hebt ontvangen, mag je factureren. Schrijf je je daarnaast in bij Chefs Connect, dan kunnen wij je vaak binnen één tot twee weken een eerste passende opdracht voorstellen.',
      },
    },
  ],
};

export default function FreelanceKokWordenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
