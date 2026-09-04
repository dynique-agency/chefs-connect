'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelEchtPage() {
  return (
    <CityStaffingPage
      city="Echt"
      regionLabel="Echt en Midden-Limburg"
      heroAccent="in Echt?"
      heroSubtext="Wij verbinden je met ervaren freelance koks voor Echt en de gemeente Echt-Susteren, van dorpsrestaurants tot feestlocaties. Snel geregeld, goed gescreend."
      contextEyebrow="Echt als horecaplek in Midden-Limburg"
      contextHeadingLead="Een landelijke gemeente"
      contextHeadingAccent="met een eigen, rustig tempo"
      contextParagraphs={[
        'Echt is de grootste kern van de gemeente Echt-Susteren, met ruim 30.000 inwoners in de hele gemeente. De plaats ligt in Midden-Limburg, dicht bij de Duitse grens, en heeft een landelijk karakter dat je meteen voelt zodra je de drukte van de grotere Limburgse steden achter je laat.',
        'De economie in en rond Echt leunt van oudsher op landbouw, tuinbouw en een aantal middelgrote industriële bedrijven. Dat vertaalt zich in een horeca die kleinschaliger is dan in een stad als Roermond, maar wel constant: dorpsrestaurants, cafés en feestlocaties die het hele jaar door bezet worden voor bruiloften, jubilea en andere lokale gelegenheden.',
        'Juist in die kleinschaligheid kan personeelstekort hard aankomen: één zieke kok is in een dorpszaak sneller een probleem dan in een grote stadskeuken. Wij zijn actief in Echt en de bredere regio Midden-Limburg, samen met onze vestigingen in Roermond en Weert.',
      ]}
      whyHeadingLead="Wij verbinden je met koks"
      whyHeadingAccent="die zich thuis voelen in een kleinere keuken"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen, maar weten wat iemand waard is als de druk oploopt.',
        'Een dorpsrestaurant of feestlocatie in Echt vraagt om iets anders dan een grote stadskeuken: een kok die zelfstandig kan werken, geen uitgebreide brigade nodig heeft en zich snel aanpast aan een kleiner team. Daar selecteren wij bewust op.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Echt"
      formLocation="Personeel Echt"
      relatedLinks={[
        { href: '/personeel-roermond', label: 'Kok verbinden Roermond' },
        { href: '/personeel-weert', label: 'Kok verbinden Weert' },
        { href: '/zoek-personeel', label: "Alle regio's" },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Echt?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Echt en de gemeente Echt-Susteren.' },
        { question: 'Welke koks kunnen jullie leveren in Echt?', answer: 'Wij bemiddelen zelfstandig werkende koks, plaatsvervangend keukenchefs en head chefs voor dorpsrestaurants, cafés en feestlocaties in en rond Echt, ook voor grotere gelegenheden zoals bruiloften en jubilea.' },
        { question: 'Is Chefs Connect ook actief buiten Echt in Limburg?', answer: 'Ja, wij plaatsen ook in Roermond, Weert en de bredere regio Midden-Limburg.' },
      ]}
    />
  );
}
