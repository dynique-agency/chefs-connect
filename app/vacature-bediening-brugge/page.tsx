'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningBruggePage() {
  return (
    <CityFreelancerPage
      city="Brugge"
      regionLabel="Brugge en West-Vlaanderen"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Brugge"
      heroSubtext="Op zoek naar werk in de bediening in Brugge? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Brugge"
      contextHeadingLead="Gastvrijheid op"
      contextHeadingAccent="wereldniveau"
      contextParagraphs={[
        'Brugge ontvangt jaarlijks miljoenen bezoekers uit de hele wereld, en de horeca in de stad speelt daar professioneel op in. Bediening die hier het verschil maakt, combineert stijl met oprechte gastvrijheid, van sterrenzaken tot gezellige cafés aan de kanalen.',
        'Met duidelijke seizoenspieken in het voor- en najaar en rond de feestdagen is er structureel veel vraag naar ervaren, representatieve bediening. Voor een flexibele freelancer is er volop werk.',
        'Wij zijn actief in Brugge en plaatsen ook in Gent, Brussel en de bredere regio West-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Brugge?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Brugge of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Brugge?', answer: 'Van sterrenzaken en fine dining restaurants tot boetiekhotels, private dining en grote evenementen in Brugge en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Brugge?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Brugge"
      formLocation="Vacature bediening Brugge"
      relatedLinks={[
        { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
        { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
      ]}
    />
  );
}
