import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kok-aan-huis');
const description = 'Boek een privéchef aan huis (private dining) voor een romantisch diner, verjaardag of familiefeest. Onze chef kookt en serveert bij u thuis, in heel NL en BE.';

export const metadata: Metadata = {
  title: 'Kok aan Huis: Privéchef voor een Avond',
  description,
  keywords: ['kok aan huis', 'private dining', 'privéchef inhuren', 'chef aan huis', 'diner aan huis', 'privédiner thuis', 'kok aan huis boeken'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Kok aan Huis | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 3, name: 'Kok aan huis', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Privéchef en kok-aan-huis diner',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Een privéchef die bij u thuis een meergangendiner kookt en serveert, voor twee tot circa twaalf gasten in heel Nederland en België.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Heb ik een professionele keuken nodig?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nee, een gewone thuiskeuken met een fornuis en oven is voldoende. Onze chef brengt eventueel aanvullend materiaal zelf mee.' },
    },
    {
      '@type': 'Question',
      name: 'Zijn de boodschappen bij de prijs inbegrepen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, standaard nemen wij de inkoop van verse ingrediënten voor u uit handen. In overleg is het ook mogelijk om zelf specifieke producten aan te leveren.' },
    },
    {
      '@type': 'Question',
      name: 'Voor hoeveel personen is een kok aan huis geschikt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Van een diner voor twee tot een gezelschap van ongeveer twaalf gasten. Bij grotere aantallen verwijzen wij u graag door naar onze cateringoplossingen voor evenementen.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moet ik boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een kok aan huis?',
      acceptedAnswer: { '@type': 'Answer', text: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.' },
    },
    {
      '@type': 'Question',
      name: 'In welke regio is dit beschikbaar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij verzorgen kok-aan-huis-diners in heel Nederland en België.' },
    },
    {
      '@type': 'Question',
      name: 'Is een kok aan huis hetzelfde als private dining?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.' },
    },
  ],
};

export default function KokAanHuisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
