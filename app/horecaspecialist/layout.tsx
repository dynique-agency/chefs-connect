import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Horeca Opdrachten | Word Horecaspecialist',
  description: 'Ben je chef, kok of bediening en wil je freelancen? Sluit je aan bij Chefs Connect en werk bij top-locaties in NL & BE — flexibel, op jouw agenda.',
  keywords: ['freelance chef kok opdrachten', 'zzp horeca opdrachten', 'werken als zzp kok', 'freelance horeca vacatures', 'freelance bediening'],
  alternates: { canonical: 'https://chefs-connect.nl/horecaspecialist' },
  openGraph: {
    title: 'Freelance Horeca Opdrachten | Chefs Connect',
    description: 'Ben je chef, kok of bediening en wil je freelancen? Sluit je aan bij Chefs Connect en werk bij top-locaties in NL & BE — flexibel, op jouw agenda.',
    url: 'https://chefs-connect.nl/horecaspecialist',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe meld ik me aan als horecafreelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je kunt je aanmelden via het inschrijfformulier op deze pagina. Na ontvangst nemen wij binnen één werkdag contact met je op voor een persoonlijk kennismakingsgesprek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat voor opdrachten kan ik verwachten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij plaatsen freelancers bij restaurants, hotels, cateraars en evenementenbedrijven door heel Nederland en België. De opdrachten variëren van een enkele avond tot meerdere weken, afhankelijk van jouw beschikbaarheid en voorkeur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat verdien ik als freelancer via Chefs Connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarieven zijn afhankelijk van jouw functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn transparant over wat je kunt verwachten — dit bespreken wij tijdens het kennismakingsgesprek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel krijg ik mijn eerste opdracht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van jouw beschikbaarheid en het aanbod op dat moment. In de meeste gevallen kunnen wij binnen één tot twee weken na inschrijving een eerste passende opdracht voorstellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook met freelancers in België?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Wij bemiddelen actief in zowel Nederland als België. Ben je gevestigd in de grensregio of wil je in beide landen werken? Dan is Chefs Connect een uitstekende partner.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chefs-connect.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Voor Horecaspecialisten', item: 'https://chefs-connect.nl/horecaspecialist' },
  ],
};

export default function HorecaspecialistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
