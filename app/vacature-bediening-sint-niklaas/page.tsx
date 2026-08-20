'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningSintNiklaasPage() {
  return (
    <CityFreelancerPage
      city="Sint-Niklaas"
      regionLabel="Sint-Niklaas en het Waasland"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Sint-Niklaas"
      heroSubtext="Op zoek naar werk in de bediening in Sint-Niklaas? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in het Waasland. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Sint-Niklaas"
      contextHeadingLead="Gastvrijheid rond"
      contextHeadingAccent="de Grote Markt"
      contextParagraphs={[
        'Sint-Niklaas draait rond de Grote Markt, een van de grootste marktpleinen van Europa, en de winkelstraten die daarop aansluiten. Voor bedieningsprofessionals betekent dat een constante stroom gasten, zowel lokaal als uit de wijdere regio.',
        'Als regionaal winkel- en horecacentrum in het Waasland is er het hele jaar door vraag naar ervaren bediening, met pieken tijdens koopzaterdagen en de decembermaand.',
        'Wij zijn actief in Sint-Niklaas en plaatsen ook in Gent, Antwerpen en de rest van Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Sint-Niklaas?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Sint-Niklaas of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Sint-Niklaas?', answer: 'Van fine dining restaurants en brasserieën tot bedrijfscatering, evenementen en drukke dagen rond de Grote Markt. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Sint-Niklaas?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Antwerpen en Brussel. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Sint-Niklaas"
      formLocation="Vacature bediening Sint-Niklaas"
      relatedLinks={[
        { href: '/vacature-kok-sint-niklaas', label: 'Kok in Sint-Niklaas' },
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
        { href: '/vacature-bediening-antwerpen', label: 'Bediening in Antwerpen' },
      ]}
    />
  );
}
