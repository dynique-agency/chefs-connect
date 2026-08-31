'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningTerneuzenPage() {
  return (
    <CityFreelancerPage
      city="Terneuzen"
      regionLabel="Terneuzen en Zeeuws-Vlaanderen"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Terneuzen"
      heroSubtext="Op zoek naar werk in de bediening in Terneuzen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Terneuzen"
      contextHeadingLead="Gastvrijheid"
      contextHeadingAccent="voor een internationaal publiek"
      contextParagraphs={[
        'Terneuzen is de grootste gemeente van Zeeuws-Vlaanderen, met een haven aan de Westerschelde die via North Sea Port verbonden is met Gent. Voor bediening betekent dat een divers gastenpubliek: de chemische industrie, waaronder Yara en voorheen Dow Chemical, brengt internationale technici en expats naar de stad, naast de vaste lokale bezoekers.',
        'Zeeuws-Vlaanderen ligt fysiek gescheiden van de rest van Zeeland, ten zuiden van de Westerschelde en bereikbaar via de Westerscheldetunnel. Terneuzen heeft daardoor een eigen regionale horeca-economie, met terrassen langs de Scheldeboulevard waar je de zeeschepen vlak langs de kade ziet varen. Goede gastvrijheid valt hier op, of het nu gaat om een havenwerker die snel iets wil eten of een internationale gast die net is aangekomen.',
        'Wij plaatsen ook in Middelburg, Vlissingen en Goes, de rest van Zeeland die bereikbaar is via de Westerscheldetunnel.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Terneuzen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Terneuzen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Terneuzen?', answer: 'Van restaurants en terrassen langs de Scheldeboulevard tot zakelijke bijeenkomsten en bedrijfscatering rond de haven en de chemische industrie, in Terneuzen en de bredere regio Zeeuws-Vlaanderen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Terneuzen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Terneuzen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Terneuzen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Terneuzen"
      formLocation="Vacature bediening Terneuzen"
      relatedLinks={[
        { href: '/zeeland', label: 'Werken in heel Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
