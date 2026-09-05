'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelMiddelburgPage() {
  return (
    <CityStaffingPage
      city="Middelburg"
      regionLabel="Middelburg en Walcheren"
      heroAccent="in Middelburg?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Middelburg als horecastad"
      contextHeadingLead="De hoofdstad"
      contextHeadingAccent="van Zeeland"
      contextParagraphs={[
        'Middelburg is de hoofdstad van Zeeland en het bestuurlijke hart van de provincie. Rond het provinciehuis en de Abdij, met de karakteristieke Lange Jan-toren als baken boven de stad, ligt een compacte historische binnenstad die dagelijks ambtenaren, ondernemers en bezoekers trekt. De Grote Markt, met het rijk versierde stadhuis, vormt het kloppende hart van het horeca-aanbod.',
        'Die combinatie van bestuurlijk centrum, studentenstad en toeristische trekpleister zorgt voor een gevarieerde vraag naar personeel. HZ University of Applied Sciences brengt het hele jaar door studenten naar de stad, terwijl de ligging op Walcheren, dicht bij de Zeeuwse kust, in het voor- en naseizoen extra drukte in de binnenstad brengt. Een goede kok in Middelburg schakelt moeiteloos tussen een rustige doordeweekse lunch voor ambtenaren en een volle terrasavond in het hoogseizoen.',
        'Wij zijn actief in Middelburg en plaatsen ook in Vlissingen, Goes en de bredere regio Walcheren.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het klappen kennen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een druk terras aan de Grote Markt in het toeristenseizoen vraagt iets anders dan een besloten diner voor het provinciehuis of een rustige lunchzaak vlakbij de Abdij. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Middelburg"
      formLocation="Personeel Middelburg"
      relatedLinks={[
        { href: '/personeel-vlissingen', label: 'Kok verbinden Vlissingen' },
        { href: '/personeel-goes', label: 'Kok verbinden Goes' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Middelburg?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Middelburg en de regio Walcheren.' },
        { question: 'Welke koks kunnen jullie voorstellen in Middelburg?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Middelburg.' },
        { question: 'Is Chefs Connect ook actief buiten Middelburg?', answer: 'Ja, wij plaatsen ook in Vlissingen, Goes en de bredere regio Walcheren.' },
      ]}
    />
  );
}
