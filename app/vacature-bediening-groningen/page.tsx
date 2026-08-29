'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningGroningenPage() {
  return (
    <CityFreelancerPage
      city="Groningen"
      regionLabel="Groningen en Noord-Nederland"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Groningen"
      heroSubtext="Op zoek naar werk in de bediening in Groningen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Groningen"
      contextHeadingLead="Bediening voor"
      contextHeadingAccent="een stad vol energie"
      contextParagraphs={[
        'Groningen is de grootste studentenstad van het noorden, met de Rijksuniversiteit Groningen, een van de oudste universiteiten van Nederland, en de Hanzehogeschool. Die grote, wisselende groep gasten vraagt om bediening die snel schakelt en makkelijk contact maakt, ook op de drukste avonden.',
        'Rond de Grote Markt en de Poelestraat ligt een van de drukste uitgaansgebieden van Nederland, waar op piekmomenten flink wat tempo nodig is. Tegelijk is Groningen het economisch en cultureel centrum van heel Noord-Nederland, met een breder publiek uit Friesland en Drenthe voor zakelijke bijeenkomsten en rustigere diensten.',
        'Wij plaatsen in Groningen en de bredere regio Noord-Nederland, van Friesland tot Drenthe.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Groningen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Groningen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Groningen?', answer: 'Van drukke horecazaken rond de Grote Markt en Poelestraat tot zakelijke bijeenkomsten en evenementen in Groningen en de bredere regio Noord-Nederland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Groningen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Groningen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Groningen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Groningen"
      formLocation="Vacature bediening Groningen"
      relatedLinks={[
        { href: '/vacature-kok-groningen', label: 'Kok in Groningen' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
