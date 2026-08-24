'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelUdenPage() {
  return (
    <CityStaffingPage
      city="Uden"
      regionLabel="Uden en Noordoost-Brabant"
      heroAccent="in Uden?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Uden als horecaplaats"
      contextHeadingLead="Landelijk gelegen,"
      contextHeadingAccent="maar goed verbonden"
      contextParagraphs={[
        'Uden ligt midden in een agrarische streek in het oosten van Brabant, vlak bij natuurgebied De Maashorst waar de wisent inmiddels weer rondloopt. Sinds de fusie tot de gemeente Maashorst in 2022 vormt het dorp samen met Volkel, Odiliapeel, Zeeland en Schaijk één gemeente, al blijft Uden zelf met ruim 37.000 inwoners verreweg de grootste kern.',
        'Uden is daarbij allesbehalve afgelegen. Ziekenhuis Bernhoven trekt personeel en bezoekers van ver buiten de regio, en bedrijventerreinen als Loopkant en Liessent zorgen voor een stevige zakelijke basis langs de A50. Dat vertaalt zich in vraag naar keukenpersoneel bij restaurants, zalencentra en bedrijfscatering.',
        'Wij zijn actief in Uden en plaatsen ook in Den Bosch en de bredere regio Noordoost-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een dorpsrestaurant in het centrum van Uden vraagt iets anders dan grootschalige bedrijfscatering bij een van de bedrijventerreinen langs de A50. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Uden"
      formLocation="Personeel Uden"
      relatedLinks={[
        { href: '/personeel-den-bosch', label: 'Kok inhuren Den Bosch' },
        { href: '/personeel-eindhoven', label: 'Kok inhuren Eindhoven' },
        { href: '/personeel-nijmegen', label: 'Kok inhuren Nijmegen' },
      ]}
    />
  );
}
