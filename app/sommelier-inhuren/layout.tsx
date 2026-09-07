import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/sommelier-inhuren');
const description = 'Wij verbinden u met een ervaren sommelier voor uw bruiloft, gala, bedrijfsfeest of wijnproeverij. Wijnadvies en -service op maat, in heel Nederland en België.';

export const metadata: Metadata = {
  title: 'Sommelier Boeken voor uw Evenement',
  description,
  keywords: ['sommelier inhuren', 'sommelier boeken', 'freelance sommelier', 'wijnadvies evenement', 'sommelier bruiloft'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Sommelier Boeken voor Evenementen | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 3, name: 'Sommelier', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sommelier voor evenementen',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Een ervaren sommelier die wijnadvies en wijnservice verzorgt tijdens evenementen zoals bruiloften, gala’s, bedrijfsfeesten en wijnproeverijen.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doet een sommelier precies tijdens een evenement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een sommelier stelt wijnen samen die passen bij uw menu, presenteert en serveert deze tijdens het diner, en begeleidt uw gasten met uitleg en advies waar gewenst.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moet ik een sommelier boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor een gebruikelijk evenement volstaat doorgaans twee tot drie weken. Rond drukke periodes en voor grote bruiloften of gala’s raden we aan eerder te boeken.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een sommelier voor mijn evenement?',
      acceptedAnswer: { '@type': 'Answer', text: 'De prijs hangt af van de duur van het evenement, het aantal gasten en of er ook wijnen worden ingekocht. Na uw aanvraag ontvangt u een concreet voorstel op maat.' },
    },
    {
      '@type': 'Question',
      name: 'Werkt de sommelier ook aan huis of op een externe locatie?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze sommeliers werken zowel bij u thuis als op elke evenementenlocatie, van een besloten diner tot een grote feestzaal.' },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een sommelier en een gewone ober qua wijnkennis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een sommelier heeft specifieke opleiding en ervaring in wijn-spijscombinaties, druivenrassen en wijnregio’s, en kan daardoor gericht adviseren en serveren, waar een ober vooral de algemene bediening verzorgt.' },
    },
    {
      '@type': 'Question',
      name: 'Kan de sommelier ook de wijnen zelf uitzoeken en inkopen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, in overleg stelt de sommelier een passende wijnkaart samen en verzorgt desgewenst ook de inkoop, afgestemd op uw menu en budget.' },
    },
  ],
};

export default function SommelierInhurenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
