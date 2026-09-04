'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelGoesPage() {
  return (
    <CityStaffingPage
      city="Goes"
      regionLabel="Goes en Zuid-Beveland"
      heroAccent="in Goes?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Goes als horecastad"
      contextHeadingLead="Het kloppend hart"
      contextHeadingAccent="van Zuid-Beveland"
      contextParagraphs={[
        'Goes ligt centraal in Zeeland en is van oudsher de hoofdplaats van Zuid-Beveland. De stad functioneert als het regionale winkel- en uitgaanscentrum voor de hele Bevelanden: mensen uit de omliggende dorpen komen naar Goes voor hun boodschappen, een avondje uit en een goed diner. Het historische centrum met de Grote Markt en het monumentale Stadhuis vormt daarbij het kloppend hart van de stad.',
        'Waar Middelburg en Vlissingen vooral leunen op dagjesmensen en toeristen, draait de horeca in Goes juist op een trouw, regionaal publiek. Gasten uit Zuid-Beveland komen gericht naar de stad, niet toevallig langslopen. Voor een keuken betekent dat gasten die weten wat ze willen en het waarderen als het klopt, dienst na dienst.',
        'Wij zijn actief in Goes en plaatsen ook in Middelburg, Vlissingen en de bredere regio Zuid-Beveland en Walcheren.',
      ]}
      whyHeadingLead="Wij sturen mensen"
      whyHeadingAccent="die het waarmaken"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen, maar weten wat iemand in de praktijk waard is.',
        'Een representatief diner voor een zakelijk gezelschap rond de Grote Markt vraagt iets anders dan een drukke zaterdagmiddag in een lunchroom vol boodschappentassen uit de hele regio. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Goes"
      formLocation="Personeel Goes"
      relatedLinks={[
        { href: '/personeel-middelburg', label: 'Kok inhuren Middelburg' },
        { href: '/personeel-vlissingen', label: 'Kok inhuren Vlissingen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Goes?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Goes en de regio Zuid-Beveland.' },
        { question: 'Welke koks kunnen jullie leveren in Goes?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Goes.' },
        { question: 'Is Chefs Connect ook actief buiten Goes?', answer: 'Ja, wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Zuid-Beveland en Walcheren.' },
      ]}
    />
  );
}
