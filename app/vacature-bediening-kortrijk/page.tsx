'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningKortrijkPage() {
  return (
    <CityFreelancerPage
      city="Kortrijk"
      regionLabel="Kortrijk en West-Vlaanderen"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Kortrijk"
      heroSubtext="Op zoek naar werk in de bediening in Kortrijk? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met restaurants en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Kortrijk"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een zakelijke puls"
      contextParagraphs={[
        'Kortrijk combineert een herontdekte designidentiteit met een zakelijk publiek, mede dankzij Kortrijk Xpo, een van de grotere beurslocaties van het land. Voor bediening betekent dat afwisseling tussen representatieve beursevents en informelere restaurants in de binnenstad.',
        'De ligging vlak bij de Franse grens brengt bovendien een gemengd publiek naar de stad, wat vraagt om bediening die zich makkelijk aanpast aan verschillende soorten gasten en verwachtingen.',
        'Wij zijn actief in Kortrijk en plaatsen ook in Brugge, Gent en de bredere regio West-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Kortrijk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Kortrijk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Kortrijk?', answer: 'Van restaurants en cateringopdrachten tot beursevents op Kortrijk Xpo en private dining in Kortrijk en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Kortrijk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brugge, Gent en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening in Kortrijk?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Kortrijk: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Kortrijk"
      formLocation="Vacature bediening Kortrijk"
      relatedLinks={[
        { href: '/vacature-kok-kortrijk', label: 'Kok in Kortrijk' },
        { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
      ]}
    />
  );
}
