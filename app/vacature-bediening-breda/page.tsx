'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningBredaPage() {
  return (
    <CityFreelancerPage
      city="Breda"
      regionLabel="Breda en West-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Breda"
      heroSubtext="Op zoek naar werk in de bediening in Breda? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Breda"
      contextHeadingLead="Een stad die ademt"
      contextHeadingAccent="gastvrijheid"
      contextParagraphs={[
        'Breda ademt gastvrijheid. Het historische centrum met zijn terrassen loopt vol zodra de zon schijnt, en de Bourgondische sfeer vraagt om bediening die de toon weet te zetten. Voor wie in de bediening werkt, is het een fijne stad om te staan.',
        'De stad bruist tijdens Breda Jazz en het carnaval, en door de nabijheid van de Belgische grens proef je de Vlaamse invloed in de horeca. Genoeg afwisseling en drukke avonden voor een flexibele freelancer.',
        'Wij plaatsen ook in Oosterhout, Etten-Leur en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Breda?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Breda of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Breda?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Breda en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Breda?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Breda?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Breda: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Breda"
      formLocation="Vacature bediening Breda"
      relatedLinks={[
        { href: '/vacature-kok-breda', label: 'Kok in Breda' },
        { href: '/vacature-bediening-den-bosch', label: 'Bediening in Den Bosch' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
