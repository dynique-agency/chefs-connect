'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelSintNiklaasPage() {
  return (
    <CityStaffingPage
      city="Sint-Niklaas"
      regionLabel="Sint-Niklaas en het Waasland"
      heroAccent="in Sint-Niklaas?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau in Sint-Niklaas en het Waasland. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort, ook op de drukste dagen rond de Grote Markt."
      contextEyebrow="Sint-Niklaas als horecastad"
      contextHeadingLead="Een stad met"
      contextHeadingAccent="een van de grootste pleinen van Europa"
      contextParagraphs={[
        'Sint-Niklaas ligt in het Waasland, de streek tussen Gent en Antwerpen, en staat bekend om de Grote Markt, een van de grootste marktpleinen van Europa. Rond dat plein en de aangrenzende winkelstraten zit een brede mix aan horecazaken.',
        'Als regionaal winkelcentrum trekt Sint-Niklaas het hele jaar door bezoekers uit de wijde omgeving. Dat winkelend publiek zorgt voor een constante vraag naar horeca overdag, naast de reguliere avondzaken.',
        'Wij zijn actief in Sint-Niklaas en plaatsen ook in Gent, Antwerpen en de rest van Oost-Vlaanderen.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een horecazaak aan de Grote Markt tijdens een drukke winkelzaterdag vraagt om een andere aanpak dan een rustige avond doordeweeks. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Sint-Niklaas"
      formLocation="Personeel Sint-Niklaas"
      relatedLinks={[
        { href: '/personeel-gent', label: 'Kok inhuren Gent' },
        { href: '/personeel-antwerpen', label: 'Kok inhuren Antwerpen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
