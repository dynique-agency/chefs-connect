'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelBestPage() {
  return (
    <CityStaffingPage
      city="Best"
      regionLabel="Best en de Brainportregio"
      heroAccent="in Best?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau, voor de horeca in Best en het zakelijke Brainport-netwerk eromheen. Snel geregeld, goed gescreend."
      contextEyebrow="Best als horecastad"
      contextHeadingLead="Een compacte stad"
      contextHeadingAccent="met een zakelijk hart"
      contextParagraphs={[
        'Best telt ruim 30.000 inwoners en maakt onderdeel uit van de Brainportregio rond Eindhoven. De gemeente combineert een overzichtelijk eigen centrum met flink wat bedrijvigheid: kantoren, logistieke dienstverleners en maakindustrie langs de A2 en A58 trekken dagelijks forenzen en zakelijke bezoekers aan.',
        'Een deel van die bedrijvigheid draait op het bedrijventerrein Batadorp, vernoemd naar de schoenfabrikant Bata die hier ooit een grote fabriek had. Die combinatie van forensen, bedrijfsleven en een compact eigen centrum zorgt voor een horecavraag die deels zakelijk is, denk aan bedrijfslunches, borrels en catering, en deels lokaal en buurtgericht.',
        'Wij zijn actief in Best en plaatsen ook in Eindhoven, Helmond en Tilburg, de bredere regio rond Best.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een bedrijfslunch voor een kantoor op Batadorp vraagt iets anders dan een drukke vrijdagavond in een buurtzaak in het centrum van Best. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Best"
      formLocation="Personeel Best"
      relatedLinks={[
        { href: '/personeel-eindhoven', label: 'Kok inhuren Eindhoven' },
        { href: '/personeel-helmond', label: 'Kok inhuren Helmond' },
        { href: '/zoek-personeel', label: "Alle regio's" },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Best?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Best en de Brainportregio.' },
        { question: 'Welke koks kunnen jullie leveren in Best?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, bedrijfscatering en evenementenlocaties in Best.' },
        { question: 'Is Chefs Connect ook actief buiten Best?', answer: 'Ja, wij plaatsen ook in Eindhoven, Helmond en Tilburg, de bredere regio rond Best.' },
      ]}
    />
  );
}
