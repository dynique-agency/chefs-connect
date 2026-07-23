'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningHasseltPage() {
  return (
    <CityFreelancerPage
      city="Hasselt"
      regionLabel="Hasselt en Belgisch Limburg"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Hasselt"
      heroSubtext="Op zoek naar werk in de bediening in Hasselt? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en grensregio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Hasselt"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een Vlaamse toets"
      contextParagraphs={[
        'Hasselt combineert een compacte, historische binnenstad met een levendig winkel- en uitgaanspubliek. Voor bedieningsprofessionals is het een stad waar oprechte gastvrijheid en een persoonlijke aanpak worden gewaardeerd.',
        'Door de nabijheid van Maastricht trekt Hasselt zowel Belgisch als Nederlands publiek, wat zorgt voor afwisseling en een constante vraag naar ervaren bediening, zeker in het weekend en tijdens evenementen.',
        'Wij zijn actief in Hasselt en plaatsen ook in Maastricht en de bredere grensregio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Hasselt?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Hasselt of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Hasselt?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Hasselt en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Hasselt?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Nederland, richting Maastricht?', answer: 'Ja. Door de korte afstand tot Maastricht plaatsen wij regelmatig freelancers aan beide kanten van de grens. Ben je bereid grensoverschrijdend te werken, dan vergroot dat je kansen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Hasselt"
      formLocation="Vacature bediening Hasselt"
      relatedLinks={[
        { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
        { href: '/vacature-bediening-antwerpen', label: 'Bediening in Antwerpen' },
      ]}
    />
  );
}
