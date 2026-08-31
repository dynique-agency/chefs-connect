'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokTerneuzenPage() {
  return (
    <CityFreelancerPage
      city="Terneuzen"
      regionLabel="Terneuzen en Zeeuws-Vlaanderen"
      heroAccent="in Terneuzen"
      heroSubtext="Op zoek naar werk als kok in Terneuzen? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Terneuzen"
      contextHeadingLead="Koken voor"
      contextHeadingAccent="een internationaal publiek"
      contextParagraphs={[
        'Terneuzen is de grootste gemeente van Zeeuws-Vlaanderen, met een haven aan de Westerschelde die sinds 2018 samen met Gent opgaat in North Sea Port. Als kok kom je hier terecht in een stad met stevige internationale bedrijvigheid: de chemische industrie, waaronder Yara en voorheen Dow Chemical, trekt technici en expats aan die ook willen eten en drinken buiten werktijd.',
        'Zeeuws-Vlaanderen ligt fysiek gescheiden van de rest van Zeeland, ten zuiden van de Westerschelde en bereikbaar via de Westerscheldetunnel. Terneuzen heeft daardoor een eigen regionale horeca-economie opgebouwd, met een mix van havenwerkers, internationale gasten en vaste lokale klanten. Op de Scheldeboulevard, waar zeeschepen vlak langs de kade varen, zitten de terrassen in het seizoen dan ook goed vol.',
        'Wij plaatsen ook in Middelburg, Vlissingen en Goes, de rest van Zeeland die bereikbaar is via de Westerscheldetunnel.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Terneuzen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Terneuzen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Terneuzen?', answer: 'Van restaurants en brasserieën in de stad tot zakelijke lunches en bedrijfscatering rond de haven en de chemische industrie, in Terneuzen en de bredere regio Zeeuws-Vlaanderen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Terneuzen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Terneuzen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Terneuzen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Terneuzen"
      formLocation="Vacature kok Terneuzen"
      relatedLinks={[
        { href: '/zeeland', label: 'Werken in heel Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
