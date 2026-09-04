'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelGenkPage() {
  return (
    <CityStaffingPage
      city="Genk"
      regionLabel="Genk en Belgisch Limburg"
      heroAccent="in Genk?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau in Genk en de rest van Belgisch Limburg. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Genk als horecastad"
      contextHeadingLead="Van mijnstad tot"
      contextHeadingAccent="groene stad"
      contextParagraphs={[
        'Genk was ooit een van de belangrijkste mijnsteden van Belgisch Limburg. Sinds de steenkoolmijnen sloten, heeft de stad zich heruitgevonden, onder meer met veel aandacht voor groen: parken en natuurgebieden zoals Kattevennen liggen midden in de stad, met het uitgestrekte Nationaal Park Hoge Kempen op wandelafstand.',
        'Die mijngeschiedenis bracht decennia van immigratie met zich mee, waardoor Genk vandaag een van de meest divers samengestelde steden van Vlaanderen is. Die diversiteit is ook terug te vinden in het horeca-aanbod.',
        'Wij zijn actief in Genk en plaatsen ook in Hasselt en de bredere regio Belgisch Limburg.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een horecazaak in Genk vraagt vaak om een team dat gewend is aan een divers gastenpubliek. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Genk"
      formLocation="Personeel Genk"
      relatedLinks={[
        { href: '/personeel-hasselt', label: 'Kok verbinden Hasselt' },
        { href: '/personeel-maastricht', label: 'Kok verbinden Maastricht' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Genk?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Genk.' },
        { question: 'Welke koks kunnen jullie leveren in Genk?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Genk.' },
        { question: 'Is Chefs Connect ook actief buiten Genk in Limburg?', answer: 'Ja, wij plaatsen ook in Hasselt en de bredere regio Belgisch Limburg.' },
      ]}
    />
  );
}
