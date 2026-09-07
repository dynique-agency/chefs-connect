import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kok-aan-huis-rotterdam');
const description = 'Boek een privéchef (private dining) in Rotterdam: een romantisch diner, verjaardag of familiefeest, gekookt en geserveerd bij u thuis in de Rijnmond.';

export const metadata: Metadata = {
  title: 'Privéchef Rotterdam: Diner aan Huis',
  description,
  keywords: ['kok aan huis rotterdam', 'private dining rotterdam', 'privéchef rotterdam', 'chef aan huis rotterdam', 'diner aan huis rotterdam', 'privédiner rotterdam'],
  alternates: pageAlternates(url),
  openGraph: {
    title: 'Kok aan Huis Rotterdam | Connect Events & Dining',
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
    { '@type': 'ListItem', position: 4, name: 'Rotterdam', item: url },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Privéchef en kok-aan-huis diner',
  provider: { '@type': 'Organization', name: 'Connect Events & Dining', parentOrganization: { '@type': 'Organization', name: 'Chefs Connect' } },
  description: 'Een privéchef die bij u thuis een meergangendiner kookt en serveert, in Rotterdam en de regio Rijnmond.',
  areaServed: { '@type': 'City', name: 'Rotterdam' },
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
      name: 'Komen jullie ook buiten Rotterdam zelf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij verzorgen kok-aan-huis-diners in de hele regio Rijnmond, inclusief Schiedam, Vlaardingen, Spijkenisse en Capelle aan den IJssel, en de wijdere omgeving van Zuid-Holland.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver van tevoren moet ik boeken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een kok aan huis in Rotterdam?',
      acceptedAnswer: { '@type': 'Answer', text: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.' },
    },
    {
      '@type': 'Question',
      name: 'Is een kok aan huis hetzelfde als private dining?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.' },
    },
  ],
};

export default function KokAanHuisRotterdamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
