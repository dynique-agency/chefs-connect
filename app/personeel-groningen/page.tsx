'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelGroningenPage() {
  return (
    <CityStaffingPage
      city="Groningen"
      regionLabel="Groningen en Noord-Nederland"
      heroAccent="in Groningen?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Groningen als horecastad"
      contextHeadingLead="Een studentenstad"
      contextHeadingAccent="die heel het noorden bedient"
      contextParagraphs={[
        'Groningen is met ruim 240.000 inwoners de grootste stad van Noord-Nederland en drijft voor een groot deel op studenten. De Rijksuniversiteit Groningen, opgericht in 1614 en daarmee een van de oudste universiteiten van het land, en de Hanzehogeschool zorgen samen voor tienduizenden studenten die het straatbeeld en de horeca het hele jaar door kleuren.',
        'Rond de Grote Markt en de Poelestraat ligt een van de drukste en meest levendige uitgaansgebieden van Nederland, waar op piekavonden een enorme hoeveelheid gasten wordt bediend. Tegelijk is Groningen veel meer dan een studentenstad: als economisch en cultureel centrum van heel Noord-Nederland trekt de stad ook een breder publiek uit Friesland en Drenthe, voor werk, winkelen en cultuur.',
        'Wij zijn actief in Groningen en de bredere regio Noord-Nederland, van Friesland tot Drenthe.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een volle vrijdagavond rond de Grote Markt en de Poelestraat vraagt een ander tempo dan een rustige zakelijke lunch voor bezoekers uit de wijde regio. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Groningen"
      formLocation="Personeel Groningen"
      relatedLinks={[
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Groningen?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Groningen en de regio Noord-Nederland.' },
        { question: 'Welke koks kunnen jullie leveren in Groningen?', answer: 'Wij bemiddelen head chefs, sous chefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Groningen.' },
        { question: 'Is Chefs Connect ook actief buiten Groningen?', answer: 'Ja, wij plaatsen ook in de bredere regio Noord-Nederland, van Friesland tot Drenthe.' },
      ]}
    />
  );
}
