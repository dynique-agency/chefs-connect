'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelHoutenPage() {
  return (
    <CityStaffingPage
      city="Houten"
      regionLabel="Houten en de regio Utrecht"
      heroAccent="in Houten?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Houten als horecagemeente"
      contextHeadingLead="Een gemeente die"
      contextHeadingAccent="meegroeit met Utrecht"
      contextParagraphs={[
        'Houten staat bekend als een van de meest fietsvriendelijke gemeenten van Nederland, met een autoluw centrum rond ’t Rond en een jonge, groeiende bevolking. Die schaal brengt een eigen, groeiende horeca met zich mee, van lunchzaken tot restaurants voor een avondje uit.',
        'Door de directe ligging naast Utrecht delen veel horecazaken in Houten hun personeel en klantenkring met de stad. Vraag naar goede koks pendelt letterlijk mee tussen beide.',
        'Wij zijn actief in Houten en plaatsen ook in de bredere regio Utrecht.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een familiezaak in Houten vraagt iets anders dan een zakelijk evenement net over de grens in Utrecht. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Houten"
      formLocation="Personeel Houten"
      relatedLinks={[
        { href: '/personeel-utrecht', label: 'Kok inhuren Utrecht' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
