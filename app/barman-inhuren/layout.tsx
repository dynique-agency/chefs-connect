import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/barman-inhuren');
const description = 'Wij verbinden u met een ervaren barman voor uw feest of evenement, inclusief cocktails op maat. Voor verjaardagen, bedrijfsborrels en bruiloften, in heel Nederland en België.';

export const metadata: Metadata = {
  title: 'Barman Boeken voor uw Feest of Evenement',
  description,
  keywords: ['barman inhuren', 'barman boeken', 'freelance barman', 'bartender evenement', 'barman feest thuis'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Barman Boeken voor Feesten en Evenementen | Connect Events & Dining',
    description,
    url,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Connect Events & Dining - Fine Dining Catering' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Evenementen', item: siteUrl('https://chefs-connect.nl/evenementen') },
    { '@type': 'ListItem', position: 3, name: 'Barman', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Barman voor evenementen',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Een ervaren barman die de bar en cocktailservice verzorgt tijdens feesten en evenementen zoals verjaardagen, bedrijfsborrels en bruiloften.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Neemt de barman ook drank en materiaal mee?',
      acceptedAnswer: { '@type': 'Answer', text: 'In overleg verzorgen wij zowel de barman als de benodigde drank en materialen, of sluiten we aan op wat u al in huis heeft. Dit bespreken we vooraf, zodat er geen verrassingen zijn.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moet ik een barman boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor een gebruikelijk feest volstaat doorgaans een tot twee weken. Rond drukke periodes zoals de zomer of de feestdagen raden we aan eerder te boeken.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een barman voor mijn feest?',
      acceptedAnswer: { '@type': 'Answer', text: 'De prijs hangt af van de duur van het feest, het aantal gasten en of er ook drank wordt ingekocht. Na uw aanvraag ontvangt u een concreet voorstel op maat.' },
    },
    {
      '@type': 'Question',
      name: 'Werkt dit ook bij particulieren thuis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze barmen werken zowel bij particulieren thuis of in de tuin als op elke evenementenlocatie, van een verjaardag tot een grote feestzaal.' },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een barman en een bartender of mixoloog?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de praktijk worden de termen vaak door elkaar gebruikt. Een barman verzorgt de reguliere bar, terwijl een mixoloog of cocktailbartender extra ervaring heeft met het samenstellen van cocktails. Wij matchen op basis van wat uw feest vraagt.' },
    },
    {
      '@type': 'Question',
      name: 'Kan de barman ook cocktails maken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, in overleg stelt de barman een passende cocktailkaart samen, van bekende klassiekers tot een eigen signature drink voor uw gelegenheid.' },
    },
  ],
};

export default function BarmanInhurenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
