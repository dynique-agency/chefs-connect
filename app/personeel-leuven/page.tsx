'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelLeuvenPage() {
  return (
    <CityStaffingPage
      city="Leuven"
      regionLabel="Leuven en Vlaams-Brabant"
      heroAccent="in Leuven?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Leuven als horecastad"
      contextHeadingLead="Een studentenstad"
      contextHeadingAccent="die dag en nacht doorgaat"
      contextParagraphs={[
        'Leuven draait al sinds 1425 om de KU Leuven, de oudste nog bestaande katholieke universiteit ter wereld en een van de oudste universiteiten van Europa. Die geschiedenis heeft de stad een enorme studentenpopulatie gegeven, met rond de Oude Markt een van de dichtste concentraties cafés en restaurants van het land, in de volksmond niet voor niets de langste bar van Europa genoemd.',
        'Leuven is bovendien al generaties een bierstad, met brouwreus AB InBev die er zijn hoofdkantoor heeft. Die combinatie van studenten, bierliefhebbers en een constante stroom bezoekers zorgt voor een horeca die zelden stilvalt, en dus voor een structurele vraag naar keukenpersoneel dat een hoog tempo aankan.',
        'Wij zijn actief in Leuven en plaatsen ook in de bredere regio Vlaams-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk terras aan de Oude Markt op een donderdagavond vraagt iets anders dan een rustig etentje net buiten het centrum. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Leuven"
      formLocation="Personeel Leuven"
      relatedLinks={[
        { href: '/personeel-brussel', label: 'Kok inhuren Brussel' },
        { href: '/personeel-mechelen', label: 'Kok inhuren Mechelen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Leuven?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Leuven.' },
        { question: 'Welke koks kunnen jullie leveren in Leuven?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, cafés en studentenhoreca in Leuven.' },
        { question: 'Is Chefs Connect ook actief buiten Leuven?', answer: 'Ja, wij plaatsen ook in Brussel, Mechelen en de bredere regio Vlaams-Brabant.' },
      ]}
    />
  );
}
