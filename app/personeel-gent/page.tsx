'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelGentPage() {
  return (
    <CityStaffingPage
      city="Gent"
      regionLabel="Gent en Oost-Vlaanderen"
      heroAccent="in Gent?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Gent als horecastad"
      contextHeadingLead="Een middeleeuwse stad"
      contextHeadingAccent="met een eigentijdse keuken"
      contextParagraphs={[
        'Gent combineert een rijke geschiedenis met een verrassend vooruitstrevende eetcultuur. Rond het Gravensteen en de Korenmarkt zitten concepten die landelijk bekendstaan, en de stad geldt als een van de meest vegetarisch-vriendelijke steden van Europa, wat vraagt om een keuken die durft te vernieuwen.',
        'Als grote studentenstad rondom de Universiteit Gent is er het hele jaar door een constante vraag naar horecapersoneel, met een uitschieter tijdens de Gentse Feesten: tien dagen waarin de hele stad op volle toeren draait en keukens fors moeten opschalen.',
        'Wij zijn actief in Gent en plaatsen ook in de bredere regio Oost-Vlaanderen.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een restaurant rond de Korenmarkt tijdens de Gentse Feesten vraagt iets anders dan een rustig concept net buiten het centrum. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Gent"
      formLocation="Personeel Gent"
      relatedLinks={[
        { href: '/personeel-brugge', label: 'Kok inhuren Brugge' },
        { href: '/personeel-brussel', label: 'Kok inhuren Brussel' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Gent?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Gent.' },
        { question: 'Welke koks kunnen jullie leveren in Gent?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Gent.' },
        { question: 'Is Chefs Connect ook actief buiten Gent?', answer: 'Ja, wij plaatsen ook in Brugge, Brussel en de bredere regio Oost-Vlaanderen.' },
      ]}
    />
  );
}
