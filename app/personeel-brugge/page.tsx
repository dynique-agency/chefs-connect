'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelBruggePage() {
  return (
    <CityStaffingPage
      city="Brugge"
      regionLabel="Brugge en West-Vlaanderen"
      heroAccent="in Brugge?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Brugge als horecastad"
      contextHeadingLead="Werelderfgoed"
      contextHeadingAccent="met culinaire allure"
      contextParagraphs={[
        'Brugge is een van de best bewaarde middeleeuwse steden ter wereld en trekt jaarlijks miljoenen bezoekers. De stad heeft zich ontwikkeld tot een fine dining-bestemming van naam, met meerdere sterrenzaken naast de traditionele horeca rond de kanalen.',
        'Die combinatie van massatoerisme en culinaire reputatie zorgt voor een structureel hoge vraag naar keukenpersoneel, met duidelijke seizoenspieken in het voor- en najaar en rond de feestdagen, wanneer restaurants en hotels snel moeten kunnen opschalen.',
        'Wij zijn actief in Brugge en plaatsen ook in de bredere regio West-Vlaanderen.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een sterrenzaak in het historische centrum vraagt iets anders dan een druk toeristenrestaurant aan de Markt. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Brugge"
      formLocation="Personeel Brugge"
      relatedLinks={[
        { href: '/personeel-gent', label: 'Kok verbinden Gent' },
        { href: '/personeel-brussel', label: 'Kok verbinden Brussel' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Brugge?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Brugge.' },
        { question: 'Welke koks kunnen jullie leveren in Brugge?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor sterrenzaken, restaurants en hotels in Brugge.' },
        { question: 'Is Chefs Connect ook actief buiten Brugge?', answer: 'Ja, wij plaatsen ook in Gent, Brussel en de bredere regio West-Vlaanderen.' },
      ]}
    />
  );
}
