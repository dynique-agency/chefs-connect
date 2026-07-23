'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningHelmondPage() {
  return (
    <CityFreelancerPage
      city="Helmond"
      regionLabel="Helmond en de Brainportregio"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Helmond"
      heroSubtext="Op zoek naar werk in de bediening in Helmond? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Helmond"
      contextHeadingLead="Gastvrijheid die"
      contextHeadingAccent="meegroeit met de stad"
      contextParagraphs={[
        'Helmond is volop in ontwikkeling. Nieuwe concepten rond de Kasteeltuin en in de binnenstad vragen om bediening die stijl en gastvrijheid combineert, passend bij een stad die haar industriële verleden inruilt voor een moderne uitstraling.',
        'Door de nabijheid van Eindhoven en de Brainport-regio is er regelmatig vraag naar bediening bij zakelijke diners en events, naast het reguliere restaurantwerk in de stad zelf.',
        'Wij zijn actief in Helmond en plaatsen ook in Eindhoven en de bredere regio Noord-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Helmond?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Helmond of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Helmond?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Helmond en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Helmond?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Eindhoven?', answer: 'Ja, gezien de korte afstand plaatsen wij regelmatig freelancers in zowel Helmond als Eindhoven. Ben je bereid in beide steden te werken, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Helmond"
      formLocation="Vacature bediening Helmond"
      relatedLinks={[
        { href: '/vacature-kok-helmond', label: 'Kok in Helmond' },
        { href: '/vacature-bediening-eindhoven', label: 'Bediening in Eindhoven' },
        { href: '/vacature-bediening-tilburg', label: 'Bediening in Tilburg' },
      ]}
    />
  );
}
