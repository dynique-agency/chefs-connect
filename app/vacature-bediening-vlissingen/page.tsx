'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningVlissingenPage() {
  return (
    <CityFreelancerPage
      city="Vlissingen"
      regionLabel="Vlissingen en Walcheren"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Vlissingen"
      heroSubtext="Op zoek naar werk in de bediening in Vlissingen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio, van strandpaviljoens aan de Boulevard tot restaurants in het centrum. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Vlissingen"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="zicht op het water"
      contextParagraphs={[
        'Vlissingen is de grootste stad van Zeeland, met een havenidentiteit die overal in de stad terug te zien is. De scheepsbouw, van de historische Koninklijke Maatschappij De Schelde tot de huidige werven van Damen, zorgt voor een nuchter, werkend publiek, terwijl de Boulevard aan de Noordzee juist toeristen en dagjesmensen trekt. Voor bedieningsprofessionals betekent dat een prettige afwisseling van gasten.',
        "Op de Boulevard, met strandpaviljoens en terrassen met uitzicht op de Westerschelde, is het in het seizoen goed doorwerken. Buiten het hoogseizoen verschuift het accent naar de vaste horeca in het centrum en zakelijke ontvangsten rond de haven. Als bediening in Vlissingen bouw je dus ervaring op met heel verschillende soorten gasten en tempo's.",
        'Wij plaatsen ook in Middelburg, Goes en de bredere regio Walcheren en Zeeland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Vlissingen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Vlissingen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Vlissingen?', answer: 'Van strandpaviljoens aan de Boulevard en restaurants in het centrum tot zakelijke bijeenkomsten rond de haven in Vlissingen en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Vlissingen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Vlissingen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Vlissingen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Vlissingen"
      formLocation="Vacature bediening Vlissingen"
      relatedLinks={[
        { href: '/vacature-kok-vlissingen', label: 'Kok in Vlissingen' },
        { href: '/vacature-bediening-goes', label: 'Bediening in Goes' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
