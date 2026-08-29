'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningOostendePage() {
  return (
    <CityFreelancerPage
      city="Oostende"
      regionLabel="Oostende en de Belgische kust"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Oostende"
      heroSubtext="Op zoek naar werk in de bediening in Oostende? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met restaurants en strandzaken aan de kust. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Oostende"
      contextHeadingLead="Bediening met"
      contextHeadingAccent="zeewind in de haren"
      contextParagraphs={[
        'Oostende is de grootste badplaats van België, met een lange zeedijk vol restaurants, brasserieën en strandbars. Voor bediening is het een omgeving met veel gasten, hoog tempo en een informele, gastvrije sfeer die past bij een stad aan zee.',
        'Vooral in de zomer, wanneer dagjesmensen en vakantiegangers massaal naar de kust trekken, loopt de vraag naar extra bediening sterk op. Voor een freelancer die van drukte houdt is dat seizoen een uitgelezen kans om veel te werken in korte tijd.',
        'Wij zijn actief in Oostende en plaatsen ook in Brugge, Kortrijk en de bredere regio langs de Belgische kust.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Oostende?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oostende of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Oostende?', answer: 'Van visrestaurants en brasserieën aan de zeedijk tot strandbars, hotels en zomerse evenementen in Oostende en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Oostende?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Is er ook in het laagseizoen werk in Oostende?', answer: 'Zeker, al ligt de piek duidelijk in de zomer. Buiten het hoogseizoen bemiddelen we ook voor restaurants en hotels die het hele jaar door open zijn.' },
        { question: 'Werken jullie ook met medewerkers bediening in Oostende?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Oostende: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Oostende"
      formLocation="Vacature bediening Oostende"
      relatedLinks={[
        { href: '/vacature-kok-oostende', label: 'Kok in Oostende' },
        { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
        { href: '/vacature-bediening-kortrijk', label: 'Bediening in Kortrijk' },
      ]}
    />
  );
}
