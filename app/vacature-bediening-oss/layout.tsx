import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-bediening-oss');
const description = 'Op zoek naar bedieningsopdrachten in Oss? Wij plaatsen freelance bediening bij horecazaken in Oss en Noordoost-Brabant.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Oss? Werk als Freelancer',
  description,
  keywords: ['vacature bediening oss', 'freelance bediening oss', 'gastheer gastvrouw oss', 'horeca bediening oss', 'zzp bediening oss', 'bediening werk oss'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Vacature Bediening in Oss | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Bediening in Oss', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants, hotels en evenementen in Oss en de regio Noordoost-Brabant.',
  areaServed: { '@type': 'City', name: 'Oss' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Oss?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oss of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Oss?', acceptedAnswer: { '@type': 'Answer', text: 'Van lokale restaurants tot zakelijke bijeenkomsten en bedrijfsevenementen in Oss en de bredere regio Noordoost-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: "Moet ik zzp'er zijn om via Chefs Connect te werken?", acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Oss?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Hoe snel kan ik aan de slag?', acceptedAnswer: { '@type': 'Answer', text: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' } },
    { '@type': 'Question', name: 'Werken jullie ook met medewerkers bediening in Oss?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Oss: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureBedieningOssLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
