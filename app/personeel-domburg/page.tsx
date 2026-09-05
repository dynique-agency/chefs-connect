'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelDomburgPage() {
  return (
    <CityStaffingPage
      city="Domburg"
      regionLabel="Domburg en Walcheren"
      heroAccent="in Domburg?"
      heroSubtext="Van strandtenten aan de boulevard tot boetiekhotels in het centrum: wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort, ook als het seizoen op zijn drukst is."
      contextEyebrow="Domburg als horecastad"
      contextHeadingLead="Een badplaats"
      contextHeadingAccent="die piekt in de zomer"
      contextParagraphs={[
        'Domburg telt slechts zo’n 4.500 vaste inwoners, maar is een van de bekendste en meest elegante badplaatsen van Zeeland. Het dorp bouwde in de negentiende eeuw een naam op als mondaine kustplaats, destijds geliefd bij kunstenaars als Jan Toorop en Piet Mondriaan. Die allure is Domburg nooit meer kwijtgeraakt: achter de lange strandboulevard en de vuurtoren ligt een compact centrum met opvallend veel hotels, strandtenten en restaurants voor een plaats van deze omvang.',
        'Die schaal zorgt voor een uitgesproken horecaritme. Buiten het seizoen is Domburg een rustig dorp, maar zodra de zomer aanbreekt groeit de bevolking door toeristen vele malen groter en draaien hotels, strandtenten en restaurants op volle toeren. Een kok in Domburg moet dan ook net zo goed een rustige voorjaarsdienst aankunnen als een volle augustusavond waarin de keuken non-stop doorgaat.',
        'Wij zijn actief in Domburg en plaatsen ook in Middelburg, Vlissingen en de bredere regio Walcheren.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het seizoen aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een drukke strandtent aan de boulevard in het hoogseizoen vraagt iets anders dan een rustig hotelrestaurant in het voor- of naseizoen, of een besloten diner bij de vuurtoren. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Domburg"
      formLocation="Personeel Domburg"
      relatedLinks={[
        { href: '/personeel-middelburg', label: 'Kok verbinden Middelburg' },
        { href: '/personeel-vlissingen', label: 'Kok verbinden Vlissingen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Domburg?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Domburg en de regio Walcheren.' },
        { question: 'Welke koks kunnen jullie voorstellen in Domburg?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor hotels, strandtenten en restaurants in Domburg, ook als de zomerdrukte om extra handen vraagt.' },
        { question: 'Is Chefs Connect ook actief buiten Domburg?', answer: 'Ja, wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Walcheren.' },
      ]}
    />
  );
}
