'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningDenHaagPage() {
  return (
    <CityFreelancerPage
      city="Den Haag"
      regionLabel="Den Haag en Zuid-Holland"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Den Haag"
      heroSubtext="Op zoek naar werk in de bediening in Den Haag? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met representatieve locaties in de stad en de strandtenten van Scheveningen. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Den Haag"
      contextHeadingLead="Van het strand"
      contextHeadingAccent="tot de diplomatie"
      contextParagraphs={[
        'Scheveningen zorgt in Den Haag voor een levendige, seizoensgebonden horeca aan zee, met strandtenten en hotels die in de zomer volledig vol zitten. Voor bedieningsprofessionals is dat een aantrekkelijke omgeving om snel veel ervaring op te doen.',
        'Daarnaast is Den Haag de regeringszetel en huisvest de stad internationale instellingen als het Internationaal Gerechtshof en het Internationaal Strafhof. Dat zorgt voor een gouvernementele en diplomatieke evenementenmarkt waarbij representatieve, discrete bediening juist het verschil maakt.',
        'Wij zijn actief in Den Haag en plaatsen ook in de bredere regio Zuid-Holland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Den Haag?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Den Haag of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Den Haag?', answer: 'Van representatieve diners en internationale conferenties tot de strandtenten van Scheveningen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Den Haag?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Den Haag?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Den Haag: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Den Haag"
      formLocation="Vacature bediening Den Haag"
      relatedLinks={[
        { href: '/vacature-kok-den-haag', label: 'Kok in Den Haag' },
        { href: '/vacature-bediening-rotterdam', label: 'Bediening in Rotterdam' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
