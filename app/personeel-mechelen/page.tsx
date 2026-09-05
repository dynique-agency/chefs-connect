'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelMechelenPage() {
  return (
    <CityStaffingPage
      city="Mechelen"
      regionLabel="Mechelen en de regio Antwerpen-Brussel"
      heroAccent="in Mechelen?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Mechelen als horecastad"
      contextHeadingLead="Een stad tussen"
      contextHeadingAccent="twee grootsteden"
      contextParagraphs={[
        'Mechelen ligt bijna exact tussen Antwerpen en Brussel in, en dat is precies wat de stad de laatste jaren heeft veranderd. Steeds meer mensen kiezen Mechelen als woonplaats en pendelen naar een van beide grootsteden, wat een jong, koopkrachtig publiek naar de horeca in de stad brengt.',
        'Rond de Grote Markt en de Sint-Romboutstoren, een door UNESCO erkende beiaardtoren middenin een goed bewaard historisch centrum, is een horecascene ontstaan die kleinschaliger en persoonlijker aanvoelt dan in Antwerpen of Brussel, maar wel steeds sneller groeit.',
        'Wij zijn actief in Mechelen en plaatsen ook in de bredere regio tussen Antwerpen en Brussel.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een nieuwe zaak op de Grote Markt die zich moet bewijzen tegenover de gevestigde namen in Antwerpen en Brussel vraagt iets anders dan een rustige buurtzaak. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Mechelen"
      formLocation="Personeel Mechelen"
      relatedLinks={[
        { href: '/personeel-antwerpen', label: 'Kok verbinden Antwerpen' },
        { href: '/personeel-leuven', label: 'Kok verbinden Leuven' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Mechelen?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Mechelen.' },
        { question: 'Welke koks kunnen jullie voorstellen in Mechelen?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants en horecazaken in Mechelen en omgeving.' },
        { question: 'Is Chefs Connect ook actief buiten Mechelen?', answer: 'Ja, wij plaatsen ook in Antwerpen, Brussel, Leuven en de bredere regio daartussen.' },
      ]}
    />
  );
}
