import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-bediening-tilburg');
const description = 'Werk als zzp-gastheer of -vrouw bij de beste horecazaken in Tilburg en de regio Midden-Brabant. Wij regelen opdrachten die bij je passen.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Tilburg? Werk als Freelancer',
  description,
  keywords: ['vacature bediening tilburg', 'freelance bediening tilburg', 'gastheer gastvrouw tilburg', 'horeca bediening tilburg', 'zzp bediening tilburg', 'bediening werk tilburg'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Vacature Bediening in Tilburg | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Bediening in Tilburg', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants, hotels en evenementen in Tilburg en de regio Midden-Brabant.',
  areaServed: { '@type': 'City', name: 'Tilburg' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Tilburg?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Tilburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Tilburg?', acceptedAnswer: { '@type': 'Answer', text: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Tilburg en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: "Moet ik zzp'er zijn om via Chefs Connect te werken?", acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Tilburg?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Hoe snel kan ik aan de slag?', acceptedAnswer: { '@type': 'Answer', text: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' } },
    { '@type': 'Question', name: 'Werken jullie ook met medewerkers bediening in Tilburg?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Tilburg: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureBedieningTilburgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
