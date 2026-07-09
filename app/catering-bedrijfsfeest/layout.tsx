import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/catering-bedrijfsfeest');
const description = 'Fine dining catering voor uw bedrijfsfeest. Topchefs koken op locatie in heel NL & BE. Van walking dinner tot gala. Vraag een offerte aan.';

export const metadata: Metadata = {
  title: 'Catering Bedrijfsfeest',
  description,
  keywords: ['catering bedrijfsfeest', 'catering bedrijfsevenement', 'zakelijke catering', 'fine dining catering bedrijf', 'walking dinner catering', 'personeelsfeest catering', 'premium bedrijfscatering'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Catering Bedrijfsfeest | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 3, name: 'Catering bedrijfsfeest', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Fine dining catering voor bedrijfsfeesten en zakelijke evenementen',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Exclusieve fine dining catering op locatie voor bedrijfsfeesten, personeelsfeesten, relatie-events en zakelijke diners.',
  areaServed: [{ '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Voor hoeveel gasten verzorgen jullie catering?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wij verzorgen zowel intieme diners vanaf circa twintig gasten als grootschalige bedrijfsevenementen. Vertel ons het aantal gasten en wij stellen een passend concept samen.' },
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie ook cateren op een locatie zonder professionele keuken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met u en de locatie af wat er nodig is.' },
    },
    {
      '@type': 'Question',
      name: 'In welke regio zijn jullie actief?',
      acceptedAnswer: { '@type': 'Answer', text: 'Connect Events & Dining is actief in heel Nederland en België. Voor grotere evenementen reizen onze chefs door de hele Benelux.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moet ik een bedrijfsevenement boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor grotere events adviseren wij om enkele weken tot maanden vooruit te plannen, zodat we het menu en de uitvoering zorgvuldig kunnen voorbereiden. Voor kleinere diners kan het vaak op kortere termijn.' },
    },
    {
      '@type': 'Question',
      name: 'Houden jullie rekening met dieetwensen en allergieën?',
      acceptedAnswer: { '@type': 'Answer', text: 'Altijd. Wij stemmen het menu af op dieetwensen, allergieën en voorkeuren binnen uw gezelschap, zonder in te leveren op kwaliteit of beleving.' },
    },
  ],
};

export default function CateringBedrijfsfeestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
