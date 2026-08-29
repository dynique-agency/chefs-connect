'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningTilburgPage() {
  return (
    <CityFreelancerPage
      city="Tilburg"
      regionLabel="Tilburg en Midden-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Tilburg"
      heroSubtext="Op zoek naar werk in de bediening in Tilburg? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Tilburg"
      contextHeadingLead="Een stad waar service"
      contextHeadingAccent="het verschil maakt"
      contextParagraphs={[
        'Tilburg heeft een eigen, ongedwongen horecacultuur, van de terrassen aan de Piushaven tot de concepten in het centrum. Voor bedieningsprofessionals is het een stad waar persoonlijkheid en oprechte gastvrijheid worden gewaardeerd.',
        'Met 013, de Spoorzone en grote festivals als Roadburn en Festival Mundial is het bovendien een uitgesproken evenementenstad, met pieken waarin extra bediening hard nodig is. Voor een flexibele freelancer is er werk genoeg.',
        'Wij plaatsen ook in Waalwijk, Oisterwijk en de bredere regio Midden-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Tilburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Tilburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Tilburg?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Tilburg en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Tilburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Tilburg?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Tilburg: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Tilburg"
      formLocation="Vacature bediening Tilburg"
      relatedLinks={[
        { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
        { href: '/vacature-bediening-breda', label: 'Bediening in Breda' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
