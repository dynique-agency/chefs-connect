'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningGenkPage() {
  return (
    <CityFreelancerPage
      city="Genk"
      regionLabel="Genk en Belgisch Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Genk"
      heroSubtext="Op zoek naar werk in de bediening in Genk? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de stad en de rest van Belgisch Limburg. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Genk"
      contextHeadingLead="Gastvrijheid in een"
      contextHeadingAccent="stad vol diversiteit"
      contextParagraphs={[
        'Genk groeide door zijn mijnverleden uit tot een van de meest divers samengestelde steden van Vlaanderen. Voor bedieningsprofessionals betekent dat gasten met verschillende achtergronden en de kans om die veelzijdigheid in de praktijk te brengen.',
        'Sinds de mijnen sloten, heeft de stad zwaar ingezet op groen: parken zoals Kattevennen liggen midden in de stad en het Nationaal Park Hoge Kempen ligt vlak buiten de deur. Dat trekt bezoekers die na een dag buiten graag ergens neerstrijken.',
        'Wij zijn actief in Genk en plaatsen ook in Hasselt en de bredere regio Belgisch Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Genk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Genk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Genk?', answer: 'Van fine dining restaurants en brasserieën tot bedrijfscatering en grote evenementen, in een stad met een opvallend divers en internationaal horeca-aanbod. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Genk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Hasselt en de rest van Limburg?', answer: 'Ja, we zijn ook actief in Hasselt en de bredere regio Belgisch Limburg. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening in Genk?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Genk: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Genk"
      formLocation="Vacature bediening Genk"
      relatedLinks={[
        { href: '/vacature-kok-genk', label: 'Kok in Genk' },
        { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
      ]}
    />
  );
}
