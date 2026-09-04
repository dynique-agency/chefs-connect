'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelVlissingenPage() {
  return (
    <CityStaffingPage
      city="Vlissingen"
      regionLabel="Vlissingen en Walcheren"
      heroAccent="in Vlissingen?"
      heroSubtext="Van strandpaviljoens op de Boulevard tot zakelijke catering rond de scheepswerven: wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Vlissingen als horecastad"
      contextHeadingLead="Een stad met"
      contextHeadingAccent="zout in de lucht"
      contextParagraphs={[
        'Vlissingen is de grootste stad van Zeeland en heeft een maritieme geschiedenis die het straatbeeld nog altijd bepaalt. Admiraal Michiel de Ruyter werd hier geboren, en de stad groeide uit tot vaste vestigingsplaats voor scheepsbouw: eerst als Koninklijke Maatschappij De Schelde, tegenwoordig als onderdeel van Damen. Met ruim 44.000 inwoners is Vlissingen minder een toeristenstad dan de ligging aan zee soms doet vermoeden, het is bovenal een stad waar gewerkt wordt.',
        'Die havenidentiteit loopt door tot aan de kustlijn. Op de Boulevard, met uitzicht op de Westerschelde en de Noordzee, wisselen strandpaviljoens en terrassen elkaar af, populair bij dagjesmensen uit de hele provincie en bij toeristen. Voor een keuken in Vlissingen betekent dat een breed publiek: van havenwerkers die snel en stevig willen eten tot bezoekers die op een zonnige dag een lange lunch op het terras zoeken.',
        'Wij zijn actief in Vlissingen en plaatsen ook in Middelburg, Goes en de bredere regio Walcheren en Zeeland.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen die"
      whyHeadingAccent="het tempo van de kust aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een zakelijke ontvangst bij de scheepswerf vraagt iets anders dan een drukke zaterdagmiddag op een strandpaviljoen aan de Boulevard. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Vlissingen"
      formLocation="Personeel Vlissingen"
      relatedLinks={[
        { href: '/personeel-middelburg', label: 'Kok verbinden Middelburg' },
        { href: '/personeel-goes', label: 'Kok verbinden Goes' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Vlissingen?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Vlissingen en de regio Walcheren.' },
        { question: 'Welke koks kunnen jullie leveren in Vlissingen?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en strandpaviljoens in Vlissingen.' },
        { question: 'Is Chefs Connect ook actief buiten Vlissingen?', answer: 'Ja, wij plaatsen ook in Middelburg, Goes en de bredere regio Walcheren en Zeeland.' },
      ]}
    />
  );
}
