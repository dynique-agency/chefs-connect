import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kok-aan-huis-kerst');
const description = 'Boek een privéchef voor kerstavond, eerste of tweede kerstdag: een compleet kerstdiner bij u thuis gekookt en geserveerd, in heel Nederland en België.';

export const metadata: Metadata = {
  title: 'Kerstdiner aan Huis: Privéchef met Kerst',
  description,
  keywords: ['kerstdiner aan huis', 'chef aan huis kerst', 'privékok kerst', 'kok aan huis kerstavond', 'kerstborrel aan huis', 'privéchef kerst'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Kerstdiner aan Huis | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 3, name: 'Kok aan huis', item: siteUrl('https://chefs-connect.nl/kok-aan-huis') },
    { '@type': 'ListItem', position: 4, name: 'Kerst', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Privéchef en kerstdiner aan huis',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Een privéchef die met Kerst bij u thuis een compleet kerstmenu kookt en serveert, in heel Nederland en België.',
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
      name: 'Hoe ver van tevoren moet ik een kerstdiner boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rond de Kerst is de vraag naar een kok aan huis groot, daarom raden wij aan tijdig te boeken, idealiter vanaf oktober of november. Voor een avond buiten de feestdagen volstaat doorgaans een week.' },
    },
    {
      '@type': 'Question',
      name: 'Komen jullie ook buiten de Randstad met de Kerst?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij verzorgen kerstdiners aan huis door heel Nederland en België, van de grote steden tot kleinere plaatsen daarbuiten.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een kerstdiner aan huis?',
      acceptedAnswer: { '@type': 'Answer', text: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook kiezen voor een kerstborrel in plaats van een zittend diner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zeker, naast een volledig kerstdiner verzorgen wij ook een kerstborrel met hapjes, een brunch, of een combinatie die past bij uw gezelschap.' },
    },
    {
      '@type': 'Question',
      name: 'Houden jullie rekening met dieetwensen tijdens het kerstmenu?',
      acceptedAnswer: { '@type': 'Answer', text: 'Altijd. Wij stemmen het kerstmenu af op dieetwensen, allergieën en persoonlijke voorkeuren binnen uw gezelschap.' },
    },
  ],
};

export default function KokAanHuisKerstLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
