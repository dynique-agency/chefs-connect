'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelHelmondPage() {
  return (
    <CityStaffingPage
      city="Helmond"
      regionLabel="Helmond en de Brainportregio"
      heroAccent="in Helmond?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Helmond als horecastad"
      contextHeadingLead="Een stad in"
      contextHeadingAccent="volle transformatie"
      contextParagraphs={[
        'Helmond heeft zijn industriële, textiele verleden achter zich gelaten en is uitgegroeid tot een volwaardig onderdeel van de Brainport-regio. Nieuwe concepten in de binnenstad en rondom de Kasteeltuin trekken een publiek dat verwacht dat de keuken meegroeit.',
        'Dankzij de nabijheid van Eindhoven profiteert Helmond mee van de bedrijvigheid in de tech- en designsector, met zakelijke diners en events die om betrouwbaar, snel inzetbaar keukenpersoneel vragen.',
        'Wij zijn actief in Helmond en plaatsen ook in Eindhoven en de bredere regio Noord-Brabant.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een nieuw concept dat meegroeit met de Brainport-regio vraagt iets anders dan een gevestigde zaak in de binnenstad. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Helmond"
      formLocation="Personeel Helmond"
      relatedLinks={[
        { href: '/personeel-eindhoven', label: 'Kok inhuren Eindhoven' },
        { href: '/personeel-tilburg', label: 'Kok inhuren Tilburg' },
        { href: '/personeel-nijmegen', label: 'Kok inhuren Nijmegen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Helmond?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Helmond.' },
        { question: 'Welke koks kunnen jullie leveren in Helmond?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Helmond.' },
        { question: 'Is Chefs Connect ook actief in Eindhoven?', answer: 'Ja, gezien de korte afstand plaatsen wij regelmatig personeel in zowel Helmond als Eindhoven.' },
      ]}
    />
  );
}
