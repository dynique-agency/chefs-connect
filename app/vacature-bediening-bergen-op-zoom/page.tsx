'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningBergenOpZoomPage() {
  return (
    <CityFreelancerPage
      city="Bergen op Zoom"
      regionLabel="Bergen op Zoom en West-Brabant"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Bergen op Zoom"
      heroSubtext="Op zoek naar werk in de bediening in Bergen op Zoom? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Bergen op Zoom"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="eeuwenoude wortels"
      contextParagraphs={[
        'Bergen op Zoom is een van de oudste vestingsteden van Nederland, met een historische binnenstad op de grens van Brabant en Zeeland. In die setting valt goede bediening extra op, gasten komen voor de sfeer en verwachten dat de service daarbij past.',
        'Tijdens de Bergse Carnaval, een van de grotere carnavalsvieringen van het zuiden, verandert de stad in Krabbegat en draaien horecazaken op volle toeren. De rest van het jaar leunt de stad op een trouw lokaal publiek en bezoekers van de historische binnenstad.',
        'Wij plaatsen ook in Roosendaal, Steenbergen en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Bergen op Zoom?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Bergen op Zoom of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Bergen op Zoom?', answer: 'Van gezellige zaken in de historische vestingstad tot grote evenementen tijdens de Bergse Carnaval en de bredere regio West-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Bergen op Zoom?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Bergen op Zoom"
      formLocation="Vacature bediening Bergen op Zoom"
      relatedLinks={[
        { href: '/vacature-kok-bergen-op-zoom', label: 'Kok in Bergen op Zoom' },
        { href: '/vacature-bediening-roosendaal', label: 'Bediening in Roosendaal' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
