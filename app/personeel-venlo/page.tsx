'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelVenloPage() {
  return (
    <CityStaffingPage
      city="Venlo"
      regionLabel="Venlo en Noord-Limburg"
      heroAccent="in Venlo?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Venlo als horecastad"
      contextHeadingLead="De regionale hoofdstad"
      contextHeadingAccent="van Noord-Limburg"
      contextParagraphs={[
        'Venlo is de regionale hoofdstad van Noord-Limburg en profiteert van zijn ligging vlak bij de Duitse grens. Dat zorgt voor een internationaal publiek en horecazaken die gewend zijn aan uiteenlopende smaken en verwachtingen.',
        'Sinds de Floriade heeft de stad geïnvesteerd in een groenere, aantrekkelijkere binnenstad, met een groeiend aanbod aan restaurants. Het tempo ligt hier iets rustiger dan in grote steden, maar de kwaliteitseisen van eigenaren zijn niet minder.',
        'Wij zijn actief in Venlo en plaatsen ook in Maastricht en de bredere regio Limburg.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een restaurant dat regelmatig Duitse zakenreizigers ontvangt vraagt iets anders dan een familiezaak in het centrum. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Venlo"
      formLocation="Personeel Venlo"
      relatedLinks={[
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/personeel-hasselt', label: 'Kok inhuren Hasselt' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Venlo?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Venlo.' },
        { question: 'Welke koks kunnen jullie leveren in Venlo?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Venlo.' },
        { question: 'Is Chefs Connect ook actief buiten Venlo in Limburg?', answer: 'Ja, wij plaatsen ook in Maastricht en de bredere regio Limburg.' },
      ]}
    />
  );
}
