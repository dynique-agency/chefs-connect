import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-kok-sittard-geleen');
const description = 'Freelance kok worden in Sittard-Geleen? Chefs Connect koppelt je aan opdrachten in de regio Zuid-Limburg, van restaurants tot bedrijfscatering.';

export const metadata: Metadata = {
  title: 'Vacature Kok Sittard-Geleen? Werk als Freelancer',
  description,
  keywords: ['vacature kok sittard-geleen', 'freelance kok sittard-geleen', 'zzp kok sittard-geleen', 'zelfstandig werkend kok sittard-geleen', 'vacature chefkok sittard-geleen', 'vacature kok limburg'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Werk als Freelance Kok in Sittard-Geleen | Chefs Connect',
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
    { '@type': 'ListItem', position: 3, name: 'Kok in Sittard-Geleen', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Freelance horeca bemiddeling voor koks',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Freelance opdrachten voor koks bij restaurants, hotels en bedrijfscatering in Sittard-Geleen en de regio Zuid-Limburg.',
  areaServed: { '@type': 'City', name: 'Sittard-Geleen' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hebben jullie vacatures voor koks in Sittard-Geleen?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Sittard-Geleen of de regio is. Zo hoef je niet eindeloos te solliciteren.' } },
    { '@type': 'Question', name: 'Wat voor opdrachten kan ik als kok verwachten in Sittard-Geleen?', acceptedAnswer: { '@type': 'Answer', text: 'Van horeca in het historische centrum van Sittard tot bedrijfscatering rond Chemelot en evenementen in de bredere regio. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' } },
    { '@type': 'Question', name: "Moet ik zzp'er zijn om via Chefs Connect te werken?", acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." } },
    { '@type': 'Question', name: 'Wat verdien ik als freelance kok in Sittard-Geleen?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' } },
    { '@type': 'Question', name: 'Hoe snel kan ik aan de slag?', acceptedAnswer: { '@type': 'Answer', text: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' } },
    { '@type': 'Question', name: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Sittard-Geleen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Sittard-Geleen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' } },
  ],
};

export default function VacatureKokSittardGeleenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
