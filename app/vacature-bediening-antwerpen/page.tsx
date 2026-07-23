'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningAntwerpenPage() {
  return (
    <CityFreelancerPage
      city="Antwerpen"
      regionLabel="Antwerpen en Belgisch Vlaanderen"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Antwerpen"
      heroSubtext="Op zoek naar werk in de bediening in Antwerpen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Antwerpen"
      contextHeadingLead="Gastvrijheid op"
      contextHeadingAccent="internationaal niveau"
      contextParagraphs={[
        'Antwerpen ontvangt een internationaal publiek: van modeprofessionals en diamanthandelaren tot toeristen uit heel Europa. Bediening die hier het verschil maakt, combineert stijl met oprechte gastvrijheid.',
        'Met beurzen, modeshows en zakelijke events rond de haven is er het hele jaar door vraag naar representatieve, ervaren bediening die gewend is aan een hoog tempo en internationale gasten.',
        'Wij zijn actief in Antwerpen en plaatsen ook in de grensregio richting Breda en Hasselt.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Antwerpen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Antwerpen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Antwerpen?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Antwerpen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Antwerpen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Nederland?', answer: 'Ja, Chefs Connect is actief in zowel Nederland als België. Ben je bereid over de grens te werken, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Antwerpen"
      formLocation="Vacature bediening Antwerpen"
      relatedLinks={[
        { href: '/vacature-kok-antwerpen', label: 'Kok in Antwerpen' },
        { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
