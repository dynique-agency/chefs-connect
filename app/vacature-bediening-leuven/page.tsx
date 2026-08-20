'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningLeuvenPage() {
  return (
    <CityFreelancerPage
      city="Leuven"
      regionLabel="Leuven en Vlaams-Brabant"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Leuven"
      heroSubtext="Op zoek naar werk in de bediening in Leuven? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste zaken in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Leuven"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een studentikoze puls"
      contextParagraphs={[
        'Leuven is een stad met een jong, internationaal publiek rond de KU Leuven, de oudste nog bestaande katholieke universiteit ter wereld. Rond de Oude Markt, in de volksmond de langste bar van Europa, draait de bediening op topsnelheid tijdens drukke avonden.',
        'Naast het studentenleven trekt Leuven ook een ander publiek: bezoekers van de historische binnenstad, zakelijke gasten en liefhebbers van de lokale biertraditie rond brouwreus AB InBev. Voor een flexibele freelancer in de bediening is er het hele jaar door werk.',
        'Wij zijn actief in Leuven en plaatsen ook in Brussel, Mechelen en de bredere regio Vlaams-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Leuven?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Leuven of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Leuven?', answer: 'Van restaurants en cafés rond de Oude Markt tot studentenevenementen, private dining en bedrijfscatering in Leuven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Leuven?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brussel, Mechelen en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Leuven"
      formLocation="Vacature bediening Leuven"
      relatedLinks={[
        { href: '/vacature-kok-leuven', label: 'Kok in Leuven' },
        { href: '/vacature-bediening-mechelen', label: 'Bediening in Mechelen' },
        { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
      ]}
    />
  );
}
