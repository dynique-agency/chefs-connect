'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningVenloPage() {
  return (
    <CityFreelancerPage
      city="Venlo"
      regionLabel="Venlo en Noord-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Venlo"
      heroSubtext="Op zoek naar werk in de bediening in Venlo? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Venlo"
      contextHeadingLead="Gastvrijheid over"
      contextHeadingAccent="de grens heen"
      contextParagraphs={[
        'Venlo ligt vlak bij de Duitse grens en trekt daardoor een internationaal publiek. Voor bedieningsprofessionals betekent dit afwisseling en de kans om met gasten uit verschillende culturen te werken.',
        'Sinds de Floriade heeft de stad flink geïnvesteerd in een groenere binnenstad, en dat heeft een positief effect gehad op de horeca. Rustiger dan de grote steden, maar met evenveel aandacht voor goede service.',
        'Wij zijn actief in Venlo en plaatsen ook in Maastricht en de bredere regio Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Venlo?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Venlo of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Venlo?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Venlo en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Venlo?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook richting Maastricht en Duitsland?', answer: 'Ja, wij zijn actief in heel Limburg en plaatsen ook grensoverschrijdend. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening in Venlo?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Venlo: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Venlo"
      formLocation="Vacature bediening Venlo"
      relatedLinks={[
        { href: '/vacature-kok-venlo', label: 'Kok in Venlo' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
        { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
      ]}
    />
  );
}
