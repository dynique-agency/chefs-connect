'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelBergenOpZoomPage() {
  return (
    <CityStaffingPage
      city="Bergen op Zoom"
      regionLabel="Bergen op Zoom en West-Brabant"
      heroAccent="in Bergen op Zoom?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Bergen op Zoom als horecastad"
      contextHeadingLead="Een vestingstad met"
      contextHeadingAccent="karakter"
      contextParagraphs={[
        'Bergen op Zoom is een van de oudste vestingsteden van Nederland, met een historische binnenstad die dat verleden nog altijd uitstraalt. De stad ligt op de grens van Noord-Brabant en Zeeland, vlak bij België, en heeft daardoor een eigen sfeer die je in weinig andere Brabantse steden vindt.',
        'Die historische kern komt eens per jaar goed tot zijn recht tijdens de Bergse Carnaval, een van de grotere carnavalsvieringen van het zuiden, waarbij de stad tijdelijk omgedoopt wordt tot Krabbegat. De rest van het jaar draait de horeca vooral op een trouw lokaal publiek en bezoekers die de oude binnenstad komen bekijken.',
        'Wij zijn actief in Bergen op Zoom en plaatsen ook in Roosendaal, Steenbergen en de bredere regio West-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk terras in de historische binnenstad tijdens carnaval vraagt iets anders dan een rustig diner op een doordeweekse avond. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Bergen op Zoom"
      formLocation="Personeel Bergen op Zoom"
      relatedLinks={[
        { href: '/personeel-roosendaal', label: 'Kok inhuren Roosendaal' },
        { href: '/personeel-breda', label: 'Kok inhuren Breda' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Bergen op Zoom?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Bergen op Zoom en de regio West-Brabant.' },
        { question: 'Welke koks kunnen jullie leveren in Bergen op Zoom?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in de historische binnenstad van Bergen op Zoom en daarbuiten.' },
        { question: 'Is Chefs Connect ook actief buiten Bergen op Zoom?', answer: 'Ja, wij plaatsen ook in Roosendaal, Steenbergen en de bredere regio West-Brabant, tot aan de grens met Zeeland.' },
      ]}
    />
  );
}
