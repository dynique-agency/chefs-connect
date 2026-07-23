'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokHasseltPage() {
  return (
    <CityFreelancerPage
      city="Hasselt"
      regionLabel="Hasselt en Belgisch Limburg"
      heroAccent="in Hasselt"
      heroSubtext="Op zoek naar werk als kok in Hasselt? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad en de grensregio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Hasselt"
      contextHeadingLead="De jeneverstad"
      contextHeadingAccent="met een fijne keuken"
      contextParagraphs={[
        'Hasselt staat bekend als jeneverstad, maar heeft minstens zo veel te bieden op culinair vlak. De compacte historische binnenstad zit vol restaurants en shoppinggelegenheden waar Vlaamse gastvrijheid en verfijning samenkomen.',
        'Door de ligging vlak bij de Nederlandse grens, op korte afstand van Maastricht, is er een levendige uitwisseling tussen de twee culinaire culturen. Winkelend publiek en toeristen zorgen voor een constante vraag naar goede keukens.',
        'Wij zijn actief in Hasselt en plaatsen ook in Maastricht en de bredere grensregio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Hasselt?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Hasselt of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Hasselt?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Hasselt en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Hasselt?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Nederland, richting Maastricht?', answer: 'Ja. Door de korte afstand tot Maastricht plaatsen wij regelmatig freelancers aan beide kanten van de grens. Ben je bereid grensoverschrijdend te werken, dan vergroot dat je kansen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Hasselt"
      formLocation="Vacature kok Hasselt"
      relatedLinks={[
        { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-kok-antwerpen', label: 'Kok in Antwerpen' },
      ]}
    />
  );
}
