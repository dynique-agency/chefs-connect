'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelHasseltPage() {
  return (
    <CityStaffingPage
      city="Hasselt"
      regionLabel="Hasselt en Belgisch Limburg"
      heroAccent="in Hasselt?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Hasselt als horecastad"
      contextHeadingLead="De jeneverstad"
      contextHeadingAccent="met een fijne keuken"
      contextParagraphs={[
        'Hasselt staat bekend als jeneverstad, maar de compacte historische binnenstad zit minstens zo vol met restaurants die inspelen op een levendig winkel- en toeristenpubliek. Wie hier een keuken runt, wil kunnen vertrouwen op personeel dat direct inzetbaar is.',
        'Door de ligging vlak bij de Nederlandse grens, op korte afstand van Maastricht, is er een levendige uitwisseling tussen de twee culinaire culturen en een breder werkgebied om personeel uit te putten.',
        'Wij zijn actief in Hasselt en plaatsen ook in Maastricht en de bredere grensregio.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk restaurant in het centrum van Hasselt tijdens het winkelweekend vraagt iets anders dan een rustige avond doordeweeks. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Hasselt"
      formLocation="Personeel Hasselt"
      relatedLinks={[
        { href: '/personeel-antwerpen', label: 'Kok inhuren Antwerpen' },
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Hasselt?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Hasselt.' },
        { question: 'Welke koks kunnen jullie leveren in Hasselt?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Hasselt.' },
        { question: 'Is Chefs Connect ook actief richting Maastricht?', answer: 'Ja, door de korte afstand tot Maastricht plaatsen wij regelmatig personeel aan beide kanten van de grens.' },
      ]}
    />
  );
}
