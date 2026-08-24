'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelAmsterdamPage() {
  return (
    <CityStaffingPage
      city="Amsterdam"
      regionLabel="Amsterdam en de regio"
      heroAccent="in Amsterdam?"
      heroSubtext="Amsterdam telt honderden restaurants, hotels en eventlocaties die allemaal om hetzelfde schaarse personeel vragen. Wij leveren ervaren freelance koks die meteen inzetbaar zijn, snel geregeld en grondig gescreend."
      contextEyebrow="Amsterdam als horecastad"
      contextHeadingLead="De grootste stad,"
      contextHeadingAccent="de krapste keukenmarkt"
      contextParagraphs={[
        'Amsterdam is met bijna 920.000 inwoners verreweg de grootste stad van Nederland en de hoofdstad. De horeca hier is navenant: van laagdrempelige eetcafés aan de grachtengordel, UNESCO werelderfgoed, tot de keukens van de Michelin sterren restaurants waar de stad internationaal om bekend staat. Nergens in het land is de concentratie aan restaurants, hotels en eventlocaties zo hoog.',
        'Die schaal heeft een keerzijde. Zoveel keukens die tegelijk op zoek zijn naar personeel betekent dat goede koks binnen een dag ergens anders zitten. Amsterdam is dan ook een van de krapste horeca-arbeidsmarkten van Nederland, mede door de enorme instroom van toeristen en internationale gasten die het hele jaar door voor volle zalen zorgen.',
        'Wij zijn actief in Amsterdam en plaatsen ook in de bredere regio.',
      ]}
      whyHeadingLead="Wij vinden mensen"
      whyHeadingAccent="waar anderen vastlopen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk grand café in het centrum vraagt iets anders dan een fine dining keuken met een ster. Dat verschil kennen wij, en daar matchen we op. Juist in een stad waar iedereen tegelijk op zoek is naar dezelfde koks, telt een goed netwerk.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Amsterdam"
      formLocation="Personeel Amsterdam"
      relatedLinks={[
        { href: '/personeel-utrecht', label: 'Kok inhuren Utrecht' },
        { href: '/personeel-rotterdam', label: 'Kok inhuren Rotterdam' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Amsterdam?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Amsterdam.' },
        { question: 'Welke koks kunnen jullie leveren in Amsterdam?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Amsterdam.' },
        { question: 'Is Chefs Connect ook actief buiten Amsterdam?', answer: 'Ja, wij plaatsen ook in de bredere regio rondom Amsterdam.' },
      ]}
    />
  );
}
