'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelWaalwijkPage() {
  return (
    <CityStaffingPage
      city="Waalwijk"
      regionLabel="Waalwijk en Midden-Brabant"
      heroAccent="in Waalwijk?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Waalwijk als horecagemeente"
      contextHeadingLead="Bekend om schoenen,"
      contextHeadingAccent="en meer dan dat"
      contextParagraphs={[
        'Waalwijk staat al generaties lang bekend als de schoenenstad van Nederland. De schoenindustrie is grotendeels verdwenen, maar het verhaal leeft voort in het Schoenenkwartier, het museum dat de geschiedenis van leer en schoenen in de Langstraat laat zien. Met zo’n 48.000 inwoners is Waalwijk een plaats waar iedereen elkaar een beetje kent.',
        'Wat veel mensen niet weten: de Efteling ligt vlak onder de rook van Waalwijk. Een van de grootste en meest bezochte attractieparken van Nederland trekt het hele jaar door bezoekers, en dat zorgt voor extra vraag naar horecapersoneel in de wijde omgeving, van hotels tot cateringbedrijven.',
        'Wij zijn actief in Waalwijk en plaatsen ook in Tilburg en de bredere regio Midden-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een familiebedrijf in het centrum van Waalwijk vraagt iets anders dan een grootschalige catering bij een evenement vlak bij de Efteling. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Waalwijk"
      formLocation="Personeel Waalwijk"
      relatedLinks={[
        { href: '/personeel-tilburg', label: 'Kok inhuren Tilburg' },
        { href: '/personeel-den-bosch', label: 'Kok inhuren Den Bosch' },
        { href: '/personeel-nijmegen', label: 'Kok inhuren Nijmegen' },
      ]}
    />
  );
}
