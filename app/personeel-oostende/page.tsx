'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelOostendePage() {
  return (
    <CityStaffingPage
      city="Oostende"
      regionLabel="Oostende en de Belgische kust"
      heroAccent="in Oostende?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Oostende als horecastad"
      contextHeadingLead="De koningin"
      contextHeadingAccent="van de Belgische kust"
      contextParagraphs={[
        'Oostende is de grootste stad aan de Belgische kust en al meer dan een eeuw een geliefde badplaats, met een lang strand, een levendige haven en een sterke visserij- en vismijntraditie. De stad heeft bovendien historische banden met het Belgische koningshuis, dat er ooit een zomerresidentie had.',
        'Die combinatie van toerisme, visserij en horeca zorgt voor een uitgesproken seizoenspatroon: in de zomermaanden loopt de vraag naar personeel sterk op, wanneer restaurants, brasserieën en strandbars langs de zeedijk vol zitten met dagjesmensen en vakantiegangers.',
        'Wij zijn actief in Oostende en plaatsen ook in de bredere regio langs de Belgische kust.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een volle zaterdagmiddag op het strand tijdens het hoogseizoen vraagt een heel andere bezetting dan een rustige woensdag in november. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Oostende"
      formLocation="Personeel Oostende"
      relatedLinks={[
        { href: '/personeel-brugge', label: 'Kok inhuren Brugge' },
        { href: '/personeel-kortrijk', label: 'Kok inhuren Kortrijk' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Oostende?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oostende.' },
        { question: 'Welke koks kunnen jullie leveren in Oostende?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, brasserieën en strandzaken in Oostende.' },
        { question: 'Is Chefs Connect ook actief buiten Oostende?', answer: 'Ja, wij plaatsen ook in Brugge, Kortrijk en de bredere regio langs de Belgische kust.' },
      ]}
    />
  );
}
