'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelNijmegenPage() {
  return (
    <CityStaffingPage
      city="Nijmegen"
      regionLabel="Nijmegen en de regio Arnhem-Nijmegen"
      heroAccent="in Nijmegen?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Nijmegen als horecastad"
      contextHeadingLead="De oudste stad van Nederland"
      contextHeadingAccent="met een jonge keuken"
      contextParagraphs={[
        'Nijmegen combineert geschiedenis met een verrassend eigentijdse horeca. De stad heeft een uitgesproken, eigenzinnige scene: van de levendige binnenstad rondom de Grote Markt tot de vernieuwde Waalkade met uitzicht over de rivier. Het is een stad met karakter, en dat zie je terug in de restaurants die hier durven te kiezen voor een eigen signatuur.',
        'Als grote studentenstad rondom de Radboud Universiteit zit er constant beweging in de vraag. En dan is er de Vierdaagse: de grootste wandelevenementweek ter wereld, waarin de hele stad een week lang op volle toeren draait en de horeca alle hens aan dek nodig heeft. Dat soort pieken vragen om personeel dat snel inzetbaar en betrouwbaar is.',
        'Wij zijn actief in Nijmegen en plaatsen ook in Arnhem, Wijchen en de bredere regio richting de Duitse grens.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een bruisend terras aan de Waalkade tijdens de Vierdaagse vraagt iets anders dan een rustig restaurant in de historische benedenstad. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Nijmegen"
      formLocation="Personeel Nijmegen"
      relatedLinks={[
        { href: '/personeel-den-bosch', label: 'Kok verbinden Den Bosch' },
        { href: '/personeel-eindhoven', label: 'Kok verbinden Eindhoven' },
        { href: '/personeel-tilburg', label: 'Kok verbinden Tilburg' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Nijmegen?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Nijmegen en de regio Arnhem-Nijmegen.' },
        { question: 'Welke koks kunnen jullie leveren in Nijmegen?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Nijmegen.' },
        { question: 'Kan Chefs Connect ook tijdens drukke periodes zoals de Vierdaagse leveren?', answer: 'Ja. Juist tijdens piekperiodes zoals de Vierdaagse schakelen wij snel op basis van beschikbaarheid in ons netwerk. Wij plaatsen ook in Arnhem, Wijchen en de bredere regio.' },
      ]}
    />
  );
}
