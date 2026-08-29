import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-bediening-antwerpen');
const description = 'Freelance werken in de bediening in Antwerpen? Chefs Connect koppelt je aan opdrachten bij topzaken in Antwerpen en omstreken.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Antwerpen? Werk als Freelancer',
  description,
  keywords: ['vacature bediening antwerpen', 'freelance bediening antwerpen', 'gastheer gastvrouw antwerpen', 'horeca bediening antwerpen', 'zelfstandig bediening antwerpen', 'bediening werk antwerpen'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Vacature Bediening in Antwerpen | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Bediening in Antwerpen', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants, hotels en evenementen in Antwerpen.',
  areaServed: { '@type': 'City', name: 'Antwerpen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Antwerpen?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Antwerpen of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Antwerpen?', acceptedAnswer: { '@type': 'Answer', text: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Antwerpen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Antwerpen?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Werken jullie ook in Nederland?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Chefs Connect is actief in zowel Nederland als België. Ben je bereid over de grens te werken, dan vergroot dat je kansen op passende opdrachten.' } },
    { '@type': 'Question', name: 'Werken jullie ook met medewerkers bediening in Antwerpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Antwerpen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureBedieningAntwerpenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
