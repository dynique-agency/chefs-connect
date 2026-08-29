'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningRoosendaalPage() {
  return (
    <CityFreelancerPage
      city="Roosendaal"
      regionLabel="Roosendaal en West-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Roosendaal"
      heroSubtext="Op zoek naar werk in de bediening in Roosendaal? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Roosendaal"
      contextHeadingLead="Altijd onderweg,"
      contextHeadingAccent="altijd gastvrij"
      contextParagraphs={[
        'Roosendaal is al meer dan een eeuw een belangrijk spoorwegknooppunt, vlak op de grens met België. Reizigers, forenzen en shoppers zijn hier voortdurend in beweging, en dat vraagt om bediening die soepel met drukte omgaat.',
        'Het centrum is een geliefde bestemming voor winkelend publiek, versterkt door Rosada Fashion Outlet, een van de bekendere fashion outlets van Nederland, en dat zorgt voor volle terrassen en zaken in het weekend. De nabijheid van België brengt bovendien een divers publiek met zich mee.',
        'Wij plaatsen ook in Bergen op Zoom, Zundert en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Roosendaal?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Roosendaal of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Roosendaal?', answer: 'Van horecazaken in het centrum tot evenementen in de bredere regio West-Brabant, met een publiek dat vaak net zo goed uit België als uit Nederland komt. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Roosendaal?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Roosendaal?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Roosendaal: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Roosendaal"
      formLocation="Vacature bediening Roosendaal"
      relatedLinks={[
        { href: '/vacature-kok-roosendaal', label: 'Kok in Roosendaal' },
        { href: '/vacature-bediening-bergen-op-zoom', label: 'Bediening in Bergen op Zoom' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
