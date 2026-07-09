import { siteUrl } from '@/lib/seo';
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Voor welke evenementen kunnen jullie fine dining catering verzorgen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Van intieme private dining voor 10 personen tot grote bedrijfsevenementen. Wij verzorgen zakelijke lunches, personeelsfeesten, productlanceringen, jubilea en exclusieve privé-diners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ver op voorhand moet ik mijn evenement boeken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor grotere evenementen raden wij aan minimaal 4 tot 6 weken op voorhand contact op te nemen. Voor kleinere private dining ervaringen zijn wij soms ook op kortere termijn beschikbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Komen jullie ook bij ons thuis of op locatie koken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij brengen de fine dining ervaring volledig naar jouw locatie. Of dat nu thuis is, in een bedrijfspand of op een bijzondere locatie, wij zorgen voor alles van begin tot eind.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke regio zijn jullie actief voor evenementen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij verzorgen evenementen door heel Nederland en België.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Evenementen', item: siteUrl('https://chefs-connect.nl/evenementen') },
  ],
};

export default function EvenementenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
