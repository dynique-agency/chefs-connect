'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelBrusselPage() {
  return (
    <CityStaffingPage
      city="Brussel"
      regionLabel="Brussel en het Brussels Hoofdstedelijk Gewest"
      heroAccent="in Brussel?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Brussel als horecastad"
      contextHeadingLead="Hoofdstad van België"
      contextHeadingAccent="en van Europa"
      contextParagraphs={[
        'Brussel is niet alleen de hoofdstad van België, maar ook van de Europese Unie. Die dubbele status brengt een internationaal, veeleisend publiek van diplomaten, zakenmensen en Europese ambtenaren, naast een levendige lokale eetcultuur die uiteenloopt van klassieke brasseries tot vernieuwende fine dining.',
        'Als grote conferentie- en evenementenstad is er een structurele vraag naar keukenpersoneel voor zakelijke diners, EU-gerelateerde events en internationale bijeenkomsten, naast het reguliere restaurantwerk in wijken als de Zavel en het centrum.',
        'Wij zijn actief in Brussel en plaatsen ook in Gent, Brugge en de bredere regio.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een internationaal zakendiner rond de Europese wijk vraagt iets anders dan een klassieke brasserie in het centrum. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Brussel"
      formLocation="Personeel Brussel"
      relatedLinks={[
        { href: '/personeel-gent', label: 'Kok verbinden Gent' },
        { href: '/personeel-brugge', label: 'Kok verbinden Brugge' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Brussel?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Brussel.' },
        { question: 'Welke koks kunnen jullie leveren in Brussel?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en internationale zakendiners in Brussel.' },
        { question: 'Is Chefs Connect ook actief buiten Brussel?', answer: 'Ja, wij plaatsen ook in Gent, Brugge en de bredere regio.' },
      ]}
    />
  );
}
