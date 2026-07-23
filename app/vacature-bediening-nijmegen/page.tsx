'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningNijmegenPage() {
  return (
    <CityFreelancerPage
      city="Nijmegen"
      regionLabel="Nijmegen en de regio Arnhem-Nijmegen"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Nijmegen"
      heroSubtext="Op zoek naar werk in de bediening in Nijmegen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Nijmegen"
      contextHeadingLead="Een stad met horeca"
      contextHeadingAccent="vol karakter"
      contextParagraphs={[
        'Nijmegen heeft een eigenzinnige horeca met veel karakter, van de levendige binnenstad tot de vernieuwde Waalkade aan de rivier. Voor bedieningsprofessionals is het een stad waar een persoonlijke, gastvrije aanpak echt gewaardeerd wordt.',
        'Als grote studentenstad rondom de Radboud Universiteit en tijdens evenementen zoals de Vierdaagse draait de stad op volle toeren, met veel vraag naar extra bediening. Voor een flexibele freelancer is er werk genoeg.',
        'Wij plaatsen ook in Arnhem, Wijchen en de bredere regio richting de Duitse grens.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Nijmegen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Nijmegen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Nijmegen?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Nijmegen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Nijmegen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Nijmegen"
      formLocation="Vacature bediening Nijmegen"
      relatedLinks={[
        { href: '/vacature-kok-nijmegen', label: 'Kok in Nijmegen' },
        { href: '/vacature-bediening-eindhoven', label: 'Bediening in Eindhoven' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
