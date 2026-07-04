'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningUtrechtPage() {
  return (
    <CityFreelancerPage
      city="Utrecht"
      regionLabel="Utrecht en Midden-Nederland"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Utrecht"
      heroSubtext="Op zoek naar werk in de bediening in Utrecht? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Utrecht"
      contextHeadingLead="Een levendige stad"
      contextHeadingAccent="vraagt om goede service"
      contextParagraphs={[
        'Utrecht bruist het hele jaar door, van de terrassen aan de Oudegracht tot de vernieuwende concepten in Wittevrouwen en Lombok. Voor bedieningsprofessionals is het een stad waar persoonlijke aandacht en een vlotte service echt gewaardeerd worden.',
        'Als grootste studentenstad van Nederland en dankzij de centrale ligging is er het hele jaar door vraag naar bediening, van drukke weekenden in de horeca tot zakelijke congressen en events middenin het land.',
        'Wij zijn actief in Utrecht en plaatsen ook in de bredere regio Midden-Nederland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Utrecht?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Utrecht of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Utrecht?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Utrecht en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Utrecht?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Utrecht"
      formLocation="Vacature bediening Utrecht"
      relatedLinks={[
        { href: '/vacature-kok-utrecht', label: 'Kok in Utrecht' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
