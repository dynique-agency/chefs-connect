'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelRoosendaalPage() {
  return (
    <CityStaffingPage
      city="Roosendaal"
      regionLabel="Roosendaal en West-Brabant"
      heroAccent="in Roosendaal?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Roosendaal als horecastad"
      contextHeadingLead="Een stad op het"
      contextHeadingAccent="kruispunt van twee landen"
      contextParagraphs={[
        'Roosendaal is al meer dan een eeuw een belangrijk spoorwegknooppunt, waar treinen richting Rotterdam, Antwerpen, Vlissingen en Breda samenkomen. Die functie als doorgangspunt heeft de stad gevormd: een plek waar reizigers, forenzen en shoppers voortdurend in beweging zijn, vlak op de grens met België.',
        'Het centrum van Roosendaal is een geliefde bestemming voor winkelend publiek uit binnen- en buitenland, versterkt door Rosada Fashion Outlet, een van de bekendere fashion outlets van Nederland. Die drukte in de winkelstraten vertaalt zich direct naar volle terrassen en lunchzaken, vooral in het weekend.',
        'Wij zijn actief in Roosendaal en plaatsen ook in Bergen op Zoom, Zundert en de bredere regio West-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk winkelweekend in het centrum van Roosendaal vraagt iets anders dan een rustige zakenlunch bij het station. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Roosendaal"
      formLocation="Personeel Roosendaal"
      relatedLinks={[
        { href: '/personeel-bergen-op-zoom', label: 'Kok inhuren Bergen op Zoom' },
        { href: '/personeel-breda', label: 'Kok inhuren Breda' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
