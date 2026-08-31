'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelRenessePage() {
  return (
    <CityStaffingPage
      city="Renesse"
      regionLabel="Renesse en Schouwen-Duiveland"
      heroAccent="in Renesse?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau, ook tijdens het topseizoen aan de kust. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Renesse als horecastad"
      contextHeadingLead="De drukste badplaats"
      contextHeadingAccent="van Schouwen-Duiveland"
      contextParagraphs={[
        'Renesse telt maar zo’n 1.700 vaste inwoners, maar is verreweg de grootste en drukste badplaats van Schouwen-Duiveland en een van de populairste zomerbestemmingen van heel Zeeland. Het brede zandstrand en het levendige centrum, vol horeca, trekken bezoekers uit het hele land, terwijl het historische Zierikzee verderop als bestuurlijk hart van het eiland fungeert.',
        'Rond het dorp ligt een groot aanbod aan vakantieparken en campings, en dat publiek geeft Renesse in het hoogseizoen een heel eigen ritme: jong, levendig en tot ver na middernacht op de been. Terrassen en strandpaviljoens draaien dan op volle toeren, met pieken die in korte tijd om veel extra handen in de keuken vragen.',
        'Wij zijn actief in Renesse en plaatsen ook in Goes, Middelburg en de bredere regio Zeeland.',
      ]}
      whyHeadingLead="Wij leveren mensen"
      whyHeadingAccent="die het seizoen aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als de druk oploopt.',
        'Een volle zomeravond in Renesse, met strandpaviljoens en terrassen die tot diep in de nacht doorgaan, vraagt om koks die onder druk hun tempo en kwaliteit vasthouden. Dat verschil kennen wij, en daar selecteren we op.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Renesse"
      formLocation="Personeel Renesse"
      relatedLinks={[
        { href: '/personeel-goes', label: 'Kok inhuren Goes' },
        { href: '/personeel-middelburg', label: 'Kok inhuren Middelburg' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Renesse?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Renesse en de regio Schouwen-Duiveland, ook op korte termijn in het hoogseizoen.' },
        { question: 'Welke koks kunnen jullie leveren in Renesse?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, strandpaviljoens en horecazaken in Renesse.' },
        { question: 'Is Chefs Connect ook actief buiten Renesse?', answer: 'Ja, wij plaatsen ook in Goes, Middelburg en de bredere regio Zeeland.' },
      ]}
    />
  );
}
