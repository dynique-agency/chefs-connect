'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelBredaPage() {
  return (
    <CityStaffingPage
      city="Breda"
      regionLabel="Breda en West-Brabant"
      heroAccent="in Breda?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Breda als horecastad"
      contextHeadingLead="Bourgondisch in hart"
      contextHeadingAccent="en op het bord"
      contextParagraphs={[
        'Breda heeft gastvrijheid in het DNA. Het historische centrum rondom de Grote Markt en de Havermarkt loopt vol zodra het terrasweer wordt, en de stad staat bekend om haar Bourgondische inslag. Dat vertaalt zich naar een horeca die het hele jaar door druk is, met een publiek dat kwaliteit waardeert en daar ook voor terugkomt.',
        'De stad bruist daarnaast tijdens evenementen. Breda Jazz, het carnaval en de drukte rond NAC zorgen voor pieken waarin keukens ineens een tandje bij moeten zetten. En door de ligging vlak bij de Belgische grens is er een natuurlijke uitwisseling van smaken en gasten tussen Brabant en Vlaanderen.',
        'Wij zijn actief in Breda en plaatsen ook in Oosterhout, Etten-Leur en de bredere regio West-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een vol terras aan de Havermarkt op een zomerse zaterdag vraagt iets anders dan een verfijnd diner in een restaurant in het Ginneken. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Breda"
      formLocation="Personeel Breda"
      relatedLinks={[
        { href: '/personeel-tilburg', label: 'Kok inhuren Tilburg' },
        { href: '/personeel-eindhoven', label: 'Kok inhuren Eindhoven' },
        { href: '/personeel-den-bosch', label: 'Kok inhuren Den Bosch' },
      ]}
    />
  );
}
