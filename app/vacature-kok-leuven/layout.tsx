import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-kok-leuven');
const description = 'Op zoek naar kok-opdrachten in Leuven? Wij plaatsen freelance koks bij restaurants en keukens in Leuven en Vlaams-Brabant.';

export const metadata: Metadata = {
  title: 'Vacature Kok Leuven? Werk als Freelancer',
  description,
  keywords: ['vacature kok leuven', 'freelance kok leuven', 'zelfstandig kok leuven', 'horeca werk leuven', 'chef gezocht leuven', 'kok vacatures leuven'],
  alternates: pageAlternates('https://chefs-connect.nl/vacature-kok-leuven'),
  openGraph: {
    title: 'Werk als Freelance Kok in Leuven | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Kok in Leuven', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor koks',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor koks bij restaurants en keukens in Leuven en Vlaams-Brabant.',
  areaServed: { '@type': 'City', name: 'Leuven' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor koks in Leuven?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Leuven of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik als kok verwachten in Leuven?', acceptedAnswer: { '@type': 'Answer', text: 'Van restaurants en boetiekhotels tot studentenevenementen zoals de jaarlijkse 24 Urenloop, private dining en bedrijfscatering in Leuven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance kok in Leuven?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Werken jullie ook in andere Belgische steden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Chefs Connect is actief in heel België, waaronder Brussel, Mechelen en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' } },
    { '@type': 'Question', name: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Leuven?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Leuven: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureKokLeuvenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
