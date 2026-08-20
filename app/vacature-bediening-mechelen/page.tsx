'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningMechelenPage() {
  return (
    <CityFreelancerPage
      city="Mechelen"
      regionLabel="Mechelen en de regio Antwerpen-Brussel"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Mechelen"
      heroSubtext="Op zoek naar werk in de bediening in Mechelen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met restaurants tussen Antwerpen en Brussel. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Mechelen"
      contextHeadingLead="Persoonlijke bediening"
      contextHeadingAccent="in een groeiende stad"
      contextParagraphs={[
        'Mechelen ligt bijna exact tussen Antwerpen en Brussel, en trekt de laatste jaren steeds meer nieuwe bewoners en bezoekers aan. Rond de Grote Markt en de Sint-Romboutstoren, een UNESCO-erkende beiaardtoren, groeit het aantal restaurants en cafés gestaag.',
        'Voor bediening is Mechelen een stad waar je gasten nog echt leert kennen. Kleinschaliger dan de grote steden ernaast, met een persoonlijke aanpak die zowel bezoekers als vaste klanten waarderen.',
        'Wij zijn actief in Mechelen en plaatsen ook in Antwerpen, Brussel en de bredere regio daartussen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Mechelen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Mechelen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Mechelen?', answer: 'Van restaurants in het historische centrum tot private dining, bedrijfscatering en events in Mechelen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Mechelen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Antwerpen, Brussel en Leuven. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Mechelen"
      formLocation="Vacature bediening Mechelen"
      relatedLinks={[
        { href: '/vacature-kok-mechelen', label: 'Kok in Mechelen' },
        { href: '/vacature-bediening-antwerpen', label: 'Bediening in Antwerpen' },
        { href: '/vacature-bediening-leuven', label: 'Bediening in Leuven' },
      ]}
    />
  );
}
