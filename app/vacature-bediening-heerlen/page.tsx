'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningHeerlenPage() {
  return (
    <CityFreelancerPage
      city="Heerlen"
      regionLabel="Heerlen en Oostelijk Zuid-Limburg"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Heerlen"
      heroSubtext="Op zoek naar werk in de bediening in Heerlen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de stad en de Oostelijke Mijnstreek. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Heerlen"
      contextHeadingLead="Gastvrijheid in een stad"
      contextHeadingAccent="vlak bij de grens"
      contextParagraphs={[
        'Heerlen ligt vlak bij de Duitse grens en is van oudsher gewend aan bezoekers van over de grens. Voor bedieningsprofessionals betekent dat gasten met verschillende achtergronden en de kans om die internationale gastvrijheid in de praktijk te brengen.',
        'Sinds de mijnen sloten heeft de stad zich ontwikkeld tot een centrum voor detailhandel, onderwijs en dienstverlening in de Oostelijke Mijnstreek. Dat groeiende voorzieningenniveau brengt ook een groeiende horeca met zich mee, van eetcafés tot zakelijke locaties.',
        'Wij plaatsen ook in Sittard-Geleen, Maastricht en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Heerlen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Heerlen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Heerlen?', answer: 'Van eetcafés en restaurants in het centrum tot zakelijke evenementen in de Oostelijke Mijnstreek. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Heerlen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Heerlen"
      formLocation="Vacature bediening Heerlen"
      relatedLinks={[
        { href: '/vacature-kok-heerlen', label: 'Kok in Heerlen' },
        { href: '/vacature-bediening-sittard-geleen', label: 'Bediening in Sittard-Geleen' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
      ]}
    />
  );
}
