'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelAalstPage() {
  return (
    <CityStaffingPage
      city="Aalst"
      regionLabel="Aalst en Oost-Vlaanderen"
      heroAccent="in Aalst?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau in Aalst, van een gewone doordeweekse service tot de drukte rond carnaval. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Aalst als horecastad"
      contextHeadingLead="De carnavalsstad"
      contextHeadingAccent="met een eigen keuken"
      contextParagraphs={[
        'Aalst ligt in Oost-Vlaanderen, ongeveer halverwege Gent en Brussel, en heeft een rijk verleden als textielstad. Die geschiedenis is nog terug te zien in de stad, die zich inmiddels heeft ontwikkeld tot een levendig lokaal centrum met een eigen horecascene.',
        'Internationaal is Aalst vooral bekend van Aalst Carnaval, een eeuwenoude traditie die ooit door UNESCO werd erkend als immaterieel cultureel erfgoed, een erkenning die later weer werd ingetrokken na ophef over de inhoud van sommige praalwagens. Tijdens die periode draait de horeca in de stad op volle toeren.',
        'Ook buiten carnaval zorgt de wekelijkse markt voor een vaste stroom bezoekers naar het centrum. Wij zijn actief in Aalst en plaatsen ook in Gent, Brussel en de rest van Oost-Vlaanderen.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een horecazaak in Aalst tijdens een drukke carnavalsweek vraagt om een andere aanpak dan een rustige avond doordeweeks. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Aalst"
      formLocation="Personeel Aalst"
      relatedLinks={[
        { href: '/personeel-gent', label: 'Kok verbinden Gent' },
        { href: '/personeel-brussel', label: 'Kok verbinden Brussel' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Aalst?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Aalst.' },
        { question: 'Welke koks kunnen jullie voorstellen in Aalst?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Aalst.' },
        { question: 'Is Chefs Connect ook actief buiten Aalst?', answer: 'Ja, wij plaatsen ook in Gent, Brussel en de bredere regio Oost-Vlaanderen.' },
      ]}
    />
  );
}
