'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelRotterdamPage() {
  return (
    <CityStaffingPage
      city="Rotterdam"
      regionLabel="Rotterdam en de Rijnmond"
      heroAccent="in Rotterdam?"
      heroSubtext="Van zakelijke catering rond de haven tot de eigenzinnige keukens bij de Markthal: Rotterdam vraagt om koks die overal raad mee weten. Wij leveren ze snel geregeld en goed gescreend."
      contextEyebrow="Rotterdam als horecastad"
      contextHeadingLead="Een stad die zichzelf"
      contextHeadingAccent="steeds opnieuw uitvindt"
      contextParagraphs={[
        'Rotterdam is met ongeveer 660.000 inwoners de tweede stad van Nederland en werd na de bombardementen van de Tweede Wereldoorlog vrijwel volledig herbouwd. Dat verleden is precies waarom de stad nu bekendstaat om gedurfde moderne architectuur zoals de Markthal en de Erasmusbrug, in plaats van een historische binnenstad.',
        'Die vernieuwingsdrang zit ook in de keuken. Rotterdam wordt in de foodmedia steeds vaker genoemd als een van de interessantste opkomende culinaire steden van Nederland, met een diverser, experimenteler en informeler eetlandschap dan de klassieke fine dining van andere grote steden.',
        'Daarnaast huisvest Rotterdam de grootste zeehaven van Europa, wat zorgt voor een structurele stroom aan zakelijke en corporate horeca, van vergaderlunches tot grote bedrijfsevenementen. Wij zijn actief in Rotterdam en plaatsen ook in de bredere regio Rijnmond.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een informeel concept rond de Markthal vraagt iets anders dan een zakelijk diner voor een rederij in de haven. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Rotterdam"
      formLocation="Personeel Rotterdam"
      relatedLinks={[
        { href: '/personeel-den-haag', label: 'Kok inhuren Den Haag' },
        { href: '/personeel-utrecht', label: 'Kok inhuren Utrecht' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Rotterdam?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Rotterdam.' },
        { question: 'Welke koks kunnen jullie leveren in Rotterdam?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Rotterdam.' },
        { question: 'Is Chefs Connect ook actief buiten Rotterdam?', answer: 'Ja, wij plaatsen ook in de bredere regio Rijnmond.' },
      ]}
    />
  );
}
