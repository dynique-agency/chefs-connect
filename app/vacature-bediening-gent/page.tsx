'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningGentPage() {
  return (
    <CityFreelancerPage
      city="Gent"
      regionLabel="Gent en Oost-Vlaanderen"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Gent"
      heroSubtext="Op zoek naar werk in de bediening in Gent? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Gent"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een studentikoze puls"
      contextParagraphs={[
        'Gent is een stad vol karakter, van de historische Korenmarkt tot de levendige studentenbuurten. Voor bedieningsprofessionals is het een stad waar een persoonlijke, ongedwongen aanpak echt gewaardeerd wordt.',
        'Als grote studentenstad en tijdens de Gentse Feesten, tien dagen waarin de hele stad op straat feestviert, is er veel vraag naar extra bediening. Voor een flexibele freelancer is er het hele jaar door werk.',
        'Wij zijn actief in Gent en plaatsen ook in Brugge, Brussel en de bredere regio Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Gent?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Gent of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Gent?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en de Gentse Feesten in Gent en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Gent?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brugge, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Gent"
      formLocation="Vacature bediening Gent"
      relatedLinks={[
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
        { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
        { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
      ]}
    />
  );
}
