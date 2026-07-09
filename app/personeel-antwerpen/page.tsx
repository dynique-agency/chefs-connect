'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelAntwerpenPage() {
  return (
    <CityStaffingPage
      city="Antwerpen"
      regionLabel="Antwerpen en Belgisch Vlaanderen"
      heroAccent="in Antwerpen?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Antwerpen als horecastad"
      contextHeadingLead="Een stad die"
      contextHeadingAccent="internationale gasten trekt"
      contextParagraphs={[
        'Antwerpen is de gastronomische hoofdstad van Vlaanderen. Rond het Zuid en de Meir bedienen restaurants een internationaal publiek van modehuizen tot diamanthandelaren, en dat publiek stelt hoge eisen aan wat er op het bord komt en hoe de keuken draait.',
        'De stad organiseert het hele jaar door beurzen, modeshows en zakelijke events rond de haven, met pieken waarin je ineens snel extra keukenpersoneel nodig hebt. Dat vraagt om een partner die net zo snel kan schakelen als jouw agenda vereist.',
        'Wij zijn actief in Antwerpen en plaatsen ook in de grensregio richting Breda en Hasselt.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een restaurant op het Zuid met een internationaal gezelschap vraagt iets anders dan een beurscatering bij de haven. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Antwerpen"
      formLocation="Personeel Antwerpen"
      relatedLinks={[
        { href: '/personeel-hasselt', label: 'Kok inhuren Hasselt' },
        { href: '/personeel-breda', label: 'Kok inhuren Breda' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
