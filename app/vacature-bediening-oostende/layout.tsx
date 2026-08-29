import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-bediening-oostende');
const description = 'Op zoek naar bedieningsopdrachten in Oostende? Wij plaatsen freelance bediening bij restaurants en strandzaken aan de Belgische kust.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Oostende? Werk als Freelancer',
  description,
  keywords: ['vacature bediening oostende', 'freelance bediening oostende', 'gastheer gastvrouw oostende', 'horeca bediening oostende', 'zelfstandig bediening oostende', 'bediening werk oostende'],
  alternates: pageAlternates('https://chefs-connect.nl/vacature-bediening-oostende'),
  openGraph: {
    title: 'Vacature Bediening in Oostende | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Bediening in Oostende', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants en strandzaken in Oostende en aan de Belgische kust.',
  areaServed: { '@type': 'City', name: 'Oostende' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Oostende?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oostende of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Oostende?', acceptedAnswer: { '@type': 'Answer', text: 'Van visrestaurants en brasserieën aan de zeedijk tot strandbars, hotels en zomerse evenementen in Oostende en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Oostende?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Is er ook in het laagseizoen werk in Oostende?', acceptedAnswer: { '@type': 'Answer', text: 'Zeker, al ligt de piek duidelijk in de zomer. Buiten het hoogseizoen bemiddelen we ook voor restaurants en hotels die het hele jaar door open zijn.' } },
    { '@type': 'Question', name: 'Werken jullie ook met medewerkers bediening in Oostende?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Oostende: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureBedieningOostendeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
