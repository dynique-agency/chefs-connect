'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelTerneuzenPage() {
  return (
    <CityStaffingPage
      city="Terneuzen"
      regionLabel="Terneuzen en Zeeuws-Vlaanderen"
      heroAccent="in Terneuzen?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Terneuzen als horecastad"
      contextHeadingLead="Een havenstad"
      contextHeadingAccent="met internationale allure"
      contextParagraphs={[
        'Terneuzen is met ruim 54.000 inwoners de grootste gemeente van Zeeuws-Vlaanderen en een belangrijke havenstad aan de Westerschelde. De haven maakt onderdeel uit van North Sea Port, de gefuseerde havenorganisatie met Gent, en trekt van oudsher zware industrie aan. De chemische bedrijvigheid, waaronder Yara en voorheen Dow Chemical, zorgt voor internationale bedrijvigheid die verder reikt dan een gemiddelde Zeeuwse stad.',
        'Die combinatie zorgt voor een gevarieerde vraag naar personeel. Zeeuws-Vlaanderen ligt fysiek gescheiden van de rest van Zeeland, ten zuiden van de Westerschelde en alleen bereikbaar via de Westerscheldetunnel, waardoor Terneuzen een eigen regionale horeca-economie heeft opgebouwd. Havenwerkers, internationale technici en expats van de bedrijven aan het water vormen samen met lokale bewoners een gemengd publiek, van een snelle lunch tot een zakelijk diner met uitzicht op de Scheldeboulevard.',
        'Wij zijn actief in Terneuzen en plaatsen ook in Middelburg, Vlissingen en Goes, de rest van Zeeland die bereikbaar is via de Westerscheldetunnel.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die overal mee overweg kunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een zakelijke ontvangst voor internationale technici bij een bedrijf aan de haven vraagt iets anders dan een gezellige zaterdagavond op een terras aan de Scheldeboulevard. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Terneuzen"
      formLocation="Personeel Terneuzen"
      relatedLinks={[
        { href: '/personeel-middelburg', label: 'Kok inhuren Middelburg' },
        { href: '/personeel-vlissingen', label: 'Kok inhuren Vlissingen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Terneuzen?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Terneuzen en de regio Zeeuws-Vlaanderen.' },
        { question: 'Welke koks kunnen jullie leveren in Terneuzen?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en bedrijfscatering in Terneuzen.' },
        { question: 'Is Chefs Connect ook actief buiten Terneuzen?', answer: 'Ja, wij plaatsen ook in Middelburg, Vlissingen, Goes en de rest van Zeeland, bereikbaar via de Westerscheldetunnel.' },
      ]}
    />
  );
}
