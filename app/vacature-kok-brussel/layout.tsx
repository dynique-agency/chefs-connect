import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-kok-brussel');
const description = 'Op zoek naar werk als kok in Brussel? Werk als freelance kok bij de mooiste restaurants en events in Brussel.';

export const metadata: Metadata = {
  title: 'Vacature Kok Brussel? Werk als Freelancer',
  description,
  keywords: ['vacature kok brussel', 'freelance kok brussel', 'zelfstandig kok brussel', 'horeca werk brussel', 'chef gezocht brussel', 'kok vacatures brussel'],
  alternates: pageAlternates('https://chefs-connect.nl/vacature-kok-brussel'),
  openGraph: {
    title: 'Werk als Freelance Kok in Brussel | Chefs Connect',
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
    { '@type': 'ListItem', position: 2, name: 'Voor Horecaspecialisten', item: siteUrl('https://chefs-connect.nl/horecaspecialist') },
    { '@type': 'ListItem', position: 3, name: 'Kok in Brussel', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor koks',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor koks bij restaurants en evenementen in Brussel.',
  areaServed: { '@type': 'City', name: 'Brussel' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor koks in Brussel?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Brussel of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik als kok verwachten in Brussel?', acceptedAnswer: { '@type': 'Answer', text: 'Van fine dining restaurants en internationale zakendiners tot boetiekhotels, EU-gerelateerde events en grote evenementen in Brussel en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance kok in Brussel?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Werken jullie ook in andere Belgische steden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brugge en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' } },
  ],
};

export default function VacatureKokBrusselLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
