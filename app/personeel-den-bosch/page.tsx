'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelDenBoschPage() {
  return (
    <CityStaffingPage
      city="Den Bosch"
      regionLabel="Den Bosch en Noordoost-Brabant"
      heroAccent="in Den Bosch?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Den Bosch als horecastad"
      contextHeadingLead="De Bourgondische hoofdstad"
      contextHeadingAccent="verdient een sterke keuken"
      contextParagraphs={[
        '’s-Hertogenbosch draagt de titel Bourgondische hoofdstad niet voor niets. Van de Bossche bol tot het bruisende terrassenleven rondom de Markt en de Korte Putstraat: eten en drinken zitten hier diep in de cultuur. Het publiek is veeleisend op een prettige manier, en een restaurant dat hier wil meedraaien moet zijn keuken op orde hebben.',
        'De stad is bovendien een serieuze evenementenbestemming. De Brabanthallen trekken het hele jaar door grote beurzen en congressen, en het historische centrum loopt vol tijdens carnaval en de zomermaanden. Dat zorgt voor pieken waarin keukens en cateraars ineens flink moeten opschalen.',
        'Wij zijn actief in Den Bosch en plaatsen ook in Oss, Vught, Rosmalen en de bredere regio Noordoost-Brabant.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een verfijnd restaurant in de Bossche binnenstad vraagt iets anders dan een grootschalige catering in de Brabanthallen. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Den Bosch"
      formLocation="Personeel Den Bosch"
      relatedLinks={[
        { href: '/personeel-tilburg', label: 'Kok verbinden Tilburg' },
        { href: '/personeel-eindhoven', label: 'Kok verbinden Eindhoven' },
        { href: '/personeel-nijmegen', label: 'Kok verbinden Nijmegen' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Den Bosch?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Den Bosch en de regio Noordoost-Brabant.' },
        { question: 'Welke koks kunnen jullie voorstellen in Den Bosch?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties zoals de Brabanthallen in Den Bosch.' },
        { question: 'Is Chefs Connect ook actief buiten Den Bosch?', answer: 'Ja, wij plaatsen ook in Oss, Vught, Rosmalen en de bredere regio Noordoost-Brabant, en zijn daarnaast actief in Tilburg, Eindhoven en Nijmegen.' },
      ]}
    />
  );
}
