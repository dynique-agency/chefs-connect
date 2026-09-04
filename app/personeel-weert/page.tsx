'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelWeertPage() {
  return (
    <CityStaffingPage
      city="Weert"
      regionLabel="Weert en Midden-Limburg"
      heroAccent="in Weert?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau, van de vaste horeca in Weert tot bedrijfscatering in de logistieke regio eromheen. Snel geregeld, goed gescreend."
      contextEyebrow="Weert als horecastad"
      contextHeadingLead="Een stad met een"
      contextHeadingAccent="eigen, stabiel ritme"
      contextParagraphs={[
        'Weert telt ongeveer 50.000 inwoners en heeft, anders dan sommige buursteden, geen grote toeristische trekker die de horecavraag opblaast. Wat de stad wel heeft is een stabiele, eigen horecascene die het hele jaar door draait, gedragen door de vaste inwoners en bedrijven uit de regio.',
        'De streek rond Weert leunt sterk op landbouw en logistiek, met bedrijven en bedrijventerreinen die zorgen voor een gestage stroom aan zakelijke lunches, bedrijfsfeesten en catering naast de reguliere horeca in het centrum.',
        'Door de ligging vlak bij de Belgische grens werkt Weert ook regelmatig samen over de grens heen. Wij zijn actief in Weert en de bredere regio Midden-Limburg, van Roermond tot Nederweert.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="waar je op kunt bouwen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als de druk oploopt.',
        'Een zaak in Weert vraagt vaak om iemand die het hele jaar door constant goed presteert, niet alleen op een paar piekmomenten. Dat verschil kennen wij, en daar selecteren we op.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Weert"
      formLocation="Personeel Weert"
      relatedLinks={[
        { href: '/personeel-roermond', label: 'Kok verbinden Roermond' },
        { href: '/personeel-maastricht', label: 'Kok verbinden Maastricht' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/zoek-personeel', label: "Alle regio's" },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Weert?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Weert en de regio Midden-Limburg.' },
        { question: 'Welke koks kunnen jullie leveren in de regio Weert?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en bedrijfscatering in en rond Weert.' },
        { question: 'Is Chefs Connect ook actief buiten Weert in Limburg?', answer: 'Ja, wij plaatsen ook in Roermond en de bredere regio Midden-Limburg.' },
      ]}
    />
  );
}
