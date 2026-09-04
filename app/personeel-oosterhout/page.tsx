'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelOosterhoutPage() {
  return (
    <CityStaffingPage
      city="Oosterhout"
      regionLabel="Oosterhout en West-Brabant"
      heroAccent="in Oosterhout?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Oosterhout als horecagemeente"
      contextHeadingLead="Een groene gemeente"
      contextHeadingAccent="met een eigen tempo"
      contextParagraphs={[
        'Oosterhout is een van de groenere gemeenten van Brabant, met een compact centrum rond het Slotpark en de karakteristieke slotjes, en landgoed Oosterheide net buiten de stad. Met ruim 55.000 inwoners blijft de schaal overzichtelijk, en dat voel je terug in de horeca.',
        'De horeca in Oosterhout draait vooral op de eigen inwoners en de dorpskernen eromheen, zoals Dorst, Oosteind en Den Hout. Minder grote toeristenstromen dan in een stad, maar wel gasten die honkvast zijn en een goede zaak trouw blijven.',
        'Door de ligging vlak bij Breda lopen klandizie en personeel regelmatig over en weer tussen beide plaatsen. Wij zijn actief in Oosterhout en plaatsen ook in Breda en de bredere regio West-Brabant.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een familiezaak in het centrum van Oosterhout vraagt iets anders dan een groot besloten feest in een van de dorpskernen, of een drukke zomeravond op een terras bij het Slotpark. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Oosterhout"
      formLocation="Personeel Oosterhout"
      relatedLinks={[
        { href: '/personeel-breda', label: 'Kok verbinden Breda' },
        { href: '/personeel-tilburg', label: 'Kok verbinden Tilburg' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Oosterhout?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oosterhout en de regio West-Brabant.' },
        { question: 'Welke koks kunnen jullie leveren in Oosterhout?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Oosterhout.' },
        { question: 'Is Chefs Connect ook actief buiten Oosterhout?', answer: 'Ja, wij plaatsen ook in Breda en de bredere regio West-Brabant.' },
      ]}
    />
  );
}
