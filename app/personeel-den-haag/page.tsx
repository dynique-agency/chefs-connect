'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelDenHaagPage() {
  return (
    <CityStaffingPage
      city="Den Haag"
      regionLabel="Den Haag en Zuid-Holland"
      heroAccent="in Den Haag?"
      heroSubtext="Van representatieve diners voor internationale organisaties tot een volle kaart in Scheveningen: Den Haag vraagt om koks die weten wat er speelt. Wij leveren ze snel geregeld en goed gescreend."
      contextEyebrow="Den Haag als horecastad"
      contextHeadingLead="Een stad met"
      contextHeadingAccent="twee gezichten"
      contextParagraphs={[
        'Den Haag is de regeringszetel van Nederland en de woonplaats van de Koning, en telt daarnaast internationale instellingen als het Internationaal Gerechtshof en het Internationaal Strafhof. Dat geeft de stad een ongewoon grote diplomatieke en gouvernementele cateringmarkt, met representatieve diners en internationale bijeenkomsten die het hele jaar door plaatsvinden.',
        'Tegelijkertijd heeft Den Haag met Scheveningen een eigen badplaats binnen de gemeentegrenzen. Strandtenten, hotels en terrassen zorgen daar voor een heel andere, seizoensgebonden horeca die in de zomer overuren draait. Dezelfde stad huisvest dus twee horecamarkten met heel verschillende eisen.',
        'Wij zijn actief in Den Haag en plaatsen ook in de bredere regio Zuid-Holland.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een representatief diner voor een internationale organisatie vraagt iets anders dan een volle strandtent in Scheveningen op een zomerse zondag. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Den Haag"
      formLocation="Personeel Den Haag"
      relatedLinks={[
        { href: '/personeel-rotterdam', label: 'Kok inhuren Rotterdam' },
        { href: '/personeel-amsterdam', label: 'Kok inhuren Amsterdam' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
