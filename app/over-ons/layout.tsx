import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons - ChefsConnect | De Mensen Achter Premium Horeca',
  description: 'Ontmoet het team achter ChefsConnect. Met meer dan 20 jaar ervaring verbinden wij de beste chefs met toprestaurants in Nederland en België.',
  keywords: ['ChefsConnect team', 'horeca professionals', 'chef bemiddeling', 'gastronomie expertise', 'over ons'],
  openGraph: {
    title: 'Over Ons - ChefsConnect',
    description: 'Ontmoet het team achter ChefsConnect. Passie voor gastronomie, toewijding aan perfectie.',
    type: 'website',
  },
};

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
