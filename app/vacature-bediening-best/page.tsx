'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningBestPage() {
  return (
    <CityFreelancerPage
      city="Best"
      regionLabel="Best en de Brainportregio"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Best"
      heroSubtext="Op zoek naar werk in de bediening in Best? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en de Brainportregio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Best"
      contextHeadingLead="Gastvrijheid voor kantoor"
      contextHeadingAccent="en buurt tegelijk"
      contextParagraphs={[
        'Best telt ruim 30.000 inwoners en ligt midden in de Brainportregio rond Eindhoven. Naast een overzichtelijk eigen centrum kent de gemeente veel bedrijvigheid: kantoren, logistieke dienstverleners en maakindustrie langs de A2 en A58, onder meer op het bedrijventerrein Batadorp, vernoemd naar de schoenfabrikant Bata die hier ooit een grote fabriek had.',
        'Die combinatie zorgt voor afwisselend werk in de bediening. De ene keer verzorg je een representatieve borrel of receptie voor een bedrijf, de andere keer sta je gewoon in een gezellige zaak in het centrum van Best voor de vaste buurtgasten.',
        'Wij plaatsen ook in Eindhoven, Helmond en Tilburg, de bredere regio rond Best.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Best?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Best of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Best?', answer: 'Van lokale restaurants in het centrum van Best tot zakelijke borrels, recepties en bedrijfsevenementen in de Brainportregio. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Best?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Best?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Best: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Best"
      formLocation="Vacature bediening Best"
      relatedLinks={[
        { href: '/vacature-kok-best', label: 'Kok in Best' },
        { href: '/vacature-bediening-eindhoven', label: 'Bediening in Eindhoven' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
