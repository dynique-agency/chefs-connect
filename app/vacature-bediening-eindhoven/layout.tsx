import type { Metadata } from 'next';
import { pageAlternates } from '@/lib/seo';

const url = 'https://chefs-connect.nl/vacature-bediening-eindhoven';
const description = 'Op zoek naar werk in de bediening in Eindhoven? Werk als freelance gastheer, gastvrouw of bediening bij de mooiste locaties in Eindhoven en omstreken.';

export const metadata: Metadata = {
  title: 'Vacature Bediening Eindhoven? Werk als Freelancer',
  description,
  keywords: ['vacature bediening eindhoven', 'freelance bediening eindhoven', 'gastheer gastvrouw eindhoven', 'horeca bediening eindhoven', 'zzp bediening eindhoven', 'bediening werk eindhoven'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Werk in de Bediening in Eindhoven | Chefs Connect',
    description,
    url,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Voor Horecaspecialisten', item: 'https://chefs-connect.nl/horecaspecialist' },
    { '@type': 'ListItem', position: 3, name: 'Bediening in Eindhoven', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor bediening',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor bedieningsprofessionals bij restaurants, hotels en evenementen in Eindhoven en de regio Noord-Brabant.',
  areaServed: { '@type': 'City', name: 'Eindhoven' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor bediening in Eindhoven?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Eindhoven of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik in de bediening verwachten in Eindhoven?', acceptedAnswer: { '@type': 'Answer', text: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Eindhoven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: "Moet ik zzp'er zijn om via Chefs Connect te werken?", acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance bediening in Eindhoven?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Hoe snel kan ik aan de slag?', acceptedAnswer: { '@type': 'Answer', text: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' } },
  ],
};

export default function VacatureBedieningEindhovenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
