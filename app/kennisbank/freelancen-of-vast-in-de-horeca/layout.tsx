import type { Metadata } from 'next';
import { pageAlternates, siteUrl } from '@/lib/seo';

const url = siteUrl('https://chefs-connect.nl/kennisbank/freelancen-of-vast-in-de-horeca');
const title = 'Freelancen of Vast in de Horeca: Wat Past Bij Jou?';
const description = 'Freelance kok worden of toch een vast contract? Een eerlijke vergelijking van vrijheid, inkomen, zekerheid en administratie, geschreven door een ervaren chef.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['freelance of vast horeca', 'zzp of loondienst kok', 'freelance kok of vast contract', 'freelancen horeca voor- en nadelen', 'vast contract vs zzp kok'],
  alternates: pageAlternates('https://chefs-connect.nl/kennisbank/freelancen-of-vast-in-de-horeca'),
  openGraph: {
    title: 'Freelancen of Vast in de Horeca? | Chefs Connect',
    description,
    url,
    type: 'article',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Chefs Connect - Premium Horeca Professionals' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Freelancen of vast in de horeca: wat past bij jou?',
  description,
  image: siteUrl('https://chefs-connect.nl/opengraph-image.png'),
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  author: {
    '@type': 'Person',
    name: 'Gert-Jan',
    jobTitle: 'Oprichter Chefs Connect & freelance chef',
    worksFor: { '@type': 'Organization', name: 'Chefs Connect' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chefs Connect',
    logo: { '@type': 'ImageObject', url: siteUrl('https://chefs-connect.nl/chefsconnectlogo.png') },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('https://chefs-connect.nl/') },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: siteUrl('https://chefs-connect.nl/kennisbank') },
    { '@type': 'ListItem', position: 3, name: 'Freelancen of vast in de horeca', item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Verdien ik als freelancer echt meer dan in loondienst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per uur meestal wel, omdat je tarief je eigen belasting, verzekeringen en pensioen moet dekken. Op jaarbasis hangt het af van hoeveel je werkt en hoe goed je opdrachten aan elkaar weet te plannen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik altijd weer terug naar een vaste baan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dat kan. Werkervaring als freelancer wordt door werkgevers doorgaans juist gewaardeerd: je hebt in verschillende keukens gewerkt en jezelf bewezen zonder vaste begeleiding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is freelancen risicovoller dan een vast contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op het gebied van inkomenszekerheid wel, tenzij je dit zelf goed verzekert. Op het gebied van werkzekerheid juist niet per se: je bent niet afhankelijk van één werkgever, maar van je eigen netwerk en aanbod aan opdrachten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik meteen fulltime freelancen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Veel koks beginnen naast een parttime vaste baan en bouwen hun freelancepraktijk geleidelijk op, tot ze genoeg opdrachten en vertrouwen hebben om volledig over te stappen.',
      },
    },
  ],
};

export default function FreelancenOfVastLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
