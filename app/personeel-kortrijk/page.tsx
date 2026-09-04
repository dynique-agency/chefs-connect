'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelKortrijkPage() {
  return (
    <CityStaffingPage
      city="Kortrijk"
      regionLabel="Kortrijk en West-Vlaanderen"
      heroAccent="in Kortrijk?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Kortrijk als horecastad"
      contextHeadingLead="Van textielstad"
      contextHeadingAccent="naar designstad"
      contextParagraphs={[
        'Kortrijk bouwde zijn welvaart historisch op de textiel- en vlasindustrie, en heeft zich de afgelopen decennia herontdekt als stad van design en ondernemerschap. Die transitie is terug te zien in de horeca, met concepten die net zo veel aandacht besteden aan vormgeving als aan de kaart.',
        'Kortrijk Xpo, een van de grotere beurs- en congreslocaties van België, brengt het hele jaar door zakelijke bezoekers en beursgangers naar de stad, met pieken waarin restaurants en cateraars snel moeten kunnen opschalen. De ligging vlak bij de Franse grens zorgt bovendien voor een divers publiek.',
        'Wij zijn actief in Kortrijk en plaatsen ook in de bredere regio West-Vlaanderen.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een cateringopdracht tijdens een beurs op Kortrijk Xpo vraagt een andere aanpak dan een rustige zaterdagavond in een restaurant in de binnenstad. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Kortrijk"
      formLocation="Personeel Kortrijk"
      relatedLinks={[
        { href: '/personeel-brugge', label: 'Kok verbinden Brugge' },
        { href: '/personeel-gent', label: 'Kok verbinden Gent' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Kortrijk?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Kortrijk.' },
        { question: 'Welke koks kunnen jullie leveren in Kortrijk?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, cateraars en beursevents in Kortrijk.' },
        { question: 'Is Chefs Connect ook actief buiten Kortrijk?', answer: 'Ja, wij plaatsen ook in Brugge, Gent en de bredere regio West-Vlaanderen.' },
      ]}
    />
  );
}
