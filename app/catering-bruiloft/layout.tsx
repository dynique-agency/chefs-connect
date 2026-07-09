import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/catering-bruiloft');
const description = 'Fine dining catering voor uw bruiloft of gala. Topchefs koken op locatie in heel NL & BE, van walking dinner tot zittend galadiner. Vraag een offerte aan.';

export const metadata: Metadata = {
  title: 'Catering Bruiloft & Gala',
  description,
  keywords: ['catering bruiloft', 'trouwcatering', 'bruiloft catering fine dining', 'gala catering', 'walking dinner bruiloft', 'catering trouwerij', 'exclusieve bruiloft catering'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Catering Bruiloft & Gala | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 3, name: 'Catering bruiloft', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Fine dining catering voor bruiloften en gala’s',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Exclusieve fine dining catering op locatie voor bruiloften en gala’s, van ontvangst en walking dinner tot zittend galadiner.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Voor hoeveel gasten verzorgen jullie een bruiloft?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij verzorgen zowel intieme bruiloften vanaf circa twintig gasten als grote feesten en gala’s. Vertel ons het aantal gasten en wij stellen een passend concept samen.' },
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie cateren op een trouwlocatie zonder professionele keuken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met u en de locatie af wat er nodig is.' },
    },
    {
      '@type': 'Question',
      name: 'Kunnen we het menu vooraf proeven?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zeker. Voor bruiloften en gala’s plannen wij in overleg een proeverij, zodat u uw menu met een gerust hart kunt vastleggen.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moeten we onze trouwcatering boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor bruiloften adviseren wij om ruim op tijd te boeken, vaak enkele maanden tot een jaar vooruit, omdat populaire data snel vol zitten. Neem gerust vrijblijvend contact op om uw datum te checken.' },
    },
    {
      '@type': 'Question',
      name: 'In welke regio zijn jullie actief?',
      acceptedAnswer: { '@type': 'Answer', text: 'Connect Events & Dining is actief in heel Nederland en België. Voor bruiloften en gala’s reizen onze chefs door de hele Benelux.' },
    },
    {
      '@type': 'Question',
      name: 'Houden jullie rekening met dieetwensen en allergieën?',
      acceptedAnswer: { '@type': 'Answer', text: 'Altijd. Wij stemmen het menu af op dieetwensen, allergieën en voorkeuren binnen uw gezelschap, zonder in te leveren op kwaliteit of beleving.' },
    },
  ],
};

export default function CateringBruiloftLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
