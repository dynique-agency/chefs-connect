import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-bediening-mechelen');
const description = 'Op zoek naar bedieningsopdrachten in Mechelen? Wij plaatsen freelance bediening bij restaurants tussen Antwerpen en Brussel.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Mechelen? Werk als Freelancer',
  description,
  keywords: ['vacature bediening mechelen', 'freelance bediening mechelen', 'gastheer gastvrouw mechelen', 'horeca bediening mechelen', 'zelfstandig bediening mechelen', 'bediening werk mechelen'],
  alternates: pageAlternates('https://chefs-connect.nl/vacature-bediening-mechelen'),
  openGraph: {
    title: 'Vacature Bediening in Mechelen | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Bediening in Mechelen', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants in Mechelen en de regio Antwerpen-Brussel.',
  areaServed: { '@type': 'City', name: 'Mechelen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Mechelen?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Mechelen of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Mechelen?', acceptedAnswer: { '@type': 'Answer', text: 'Van restaurants in het historische centrum tot private dining, bedrijfscatering en events in Mechelen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Mechelen?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Werken jullie ook in andere Belgische steden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Chefs Connect is actief in heel België, waaronder Antwerpen, Brussel en Leuven. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' } },
    { '@type': 'Question', name: 'Werken jullie ook met medewerkers bediening in Mechelen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Mechelen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureBedieningMechelenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
