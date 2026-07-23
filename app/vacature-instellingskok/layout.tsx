import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/vacature-instellingskok');
const description = 'Werk als instellingskok bij zorginstellingen, bedrijfsrestaurants en scholen. Chefs Connect plaatst freelance koks door heel Nederland en België.';

export const metadata: Metadata = {
  title: 'Vacature Instellingskok: Werk als Freelancer',
  description,
  keywords: ['instellingskok', 'vacature instellingskok', 'kok zorginstelling', 'kok bedrijfsrestaurant', 'freelance instellingskok', 'instellingskok limburg'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Vacature Instellingskok | Chefs Connect',
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
    { '@type': 'ListItem', position: 2, name: 'Horecaspecialist', item: siteUrl('https://chefs-connect.nl/horecaspecialist') },
    { '@type': 'ListItem', position: 3, name: 'Vacature instellingskok', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een instellingskok en een kok in een restaurant?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een instellingskok kookt voor grotere, vaak wisselende groepen, met meer aandacht voor planning, portionering en dieetwensen dan voor à la carte bereidingen. Het tempo en ritme liggen anders, maar het vakmanschap is minstens zo belangrijk.' },
    },
    {
      '@type': 'Question',
      name: 'Moet ik ervaring hebben met dieetvoeding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Het is een pré, maar geen harde eis. We geven altijd vooraf aan wat een opdracht precies vraagt, zodat je weet waar je aan begint.' },
    },
    {
      '@type': 'Question',
      name: 'Waar plaatsen jullie instellingskoks?',
      acceptedAnswer: { '@type': 'Answer', text: 'Door heel Nederland en België, met op dit moment relatief veel vraag vanuit Limburg. Vertel ons je regio en we kijken wat er beschikbaar is.' },
    },
    {
      '@type': 'Question',
      name: "Moet ik zzp'er zijn om via Chefs Connect te werken?",
      acceptedAnswer: { '@type': 'Answer', text: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan ik aan de slag?',
      acceptedAnswer: { '@type': 'Answer', text: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Instellingskok Bemiddeling',
  provider: { '@type': 'EmploymentAgency', name: 'Chefs Connect' },
  description: 'Bemiddeling van freelance koks voor zorginstellingen, bedrijfsrestaurants en scholen.',
  areaServed: ['NL', 'BE'],
};

export default function VacatureInstellingskokLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
