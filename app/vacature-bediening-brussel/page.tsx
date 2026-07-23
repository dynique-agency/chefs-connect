'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningBrusselPage() {
  return (
    <CityFreelancerPage
      city="Brussel"
      regionLabel="Brussel en het Brussels Hoofdstedelijk Gewest"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Brussel"
      heroSubtext="Op zoek naar werk in de bediening in Brussel? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Brussel"
      contextHeadingLead="Internationale gastvrijheid,"
      contextHeadingAccent="Brusselse gezelligheid"
      contextParagraphs={[
        'Brussel ontvangt als hoofdstad van België en Europa een internationaal publiek van diplomaten, zakenmensen en toeristen. Bediening die hier het verschil maakt, combineert professionaliteit met de warme, ongedwongen Brusselse gastvrijheid.',
        'Als grote conferentie- en evenementenstad is er structureel veel vraag naar representatieve bediening bij zakelijke diners en internationale events, naast het reguliere werk in de vele brasseries en restaurants van de stad.',
        'Wij zijn actief in Brussel en plaatsen ook in Gent, Brugge en de bredere regio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Brussel?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Brussel of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Brussel?', answer: 'Van fine dining restaurants en internationale zakendiners tot boetiekhotels, EU-gerelateerde events en grote evenementen in Brussel en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Brussel?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brugge en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Brussel"
      formLocation="Vacature bediening Brussel"
      relatedLinks={[
        { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
        { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
      ]}
    />
  );
}
