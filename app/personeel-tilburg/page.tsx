'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelTilburgPage() {
  return (
    <CityStaffingPage
      city="Tilburg"
      regionLabel="Tilburg en Midden-Brabant"
      heroAccent="in Tilburg?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Tilburg als horecastad"
      contextHeadingLead="Een stad die haar eigen smaak"
      contextHeadingAccent="heeft ontdekt"
      contextParagraphs={[
        'Tilburg heeft de afgelopen jaren een opvallende ontwikkeling doorgemaakt. Wat lang een nuchtere werkstad was, heeft inmiddels een eigen culinaire identiteit gekregen. Rondom de Piushaven en in de binnenstad zijn concepten ontstaan die durven, en het publiek volgt. Gasten weten precies wat ze willen en verwachten consistentie, avond na avond.',
        'Daarbij is Tilburg een uitgesproken evenementenstad. Met 013, de Spoorzone en grote festivals als Roadburn en Festival Mundial zijn er pieken waarin de hele horeca tegelijk op volle toeren draait. En als studentenstad rondom Tilburg University zit er het hele jaar door beweging in de vraag.',
        'Wij zijn actief in Tilburg en plaatsen ook in Waalwijk, Oisterwijk en de bredere regio Midden-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk concept in de Tilburgse binnenstad vraagt iets anders dan een festivalcatering op de Spoorzone of een rustig restaurant aan de Piushaven. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Tilburg"
      formLocation="Personeel Tilburg"
      relatedLinks={[
        { href: '/personeel-eindhoven', label: 'Kok inhuren Eindhoven' },
        { href: '/personeel-den-bosch', label: 'Kok inhuren Den Bosch' },
        { href: '/personeel-breda', label: 'Kok inhuren Breda' },
      ]}
    />
  );
}
