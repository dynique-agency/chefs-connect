'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningRotterdamPage() {
  return (
    <CityFreelancerPage
      city="Rotterdam"
      regionLabel="Rotterdam en de Rijnmond"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Rotterdam"
      heroSubtext="Op zoek naar werk in de bediening in Rotterdam? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken en zakelijke events in de hele Rijnmond. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Rotterdam"
      contextHeadingLead="Een havenstad"
      contextHeadingAccent="die volop zaken doet"
      contextParagraphs={[
        'Rotterdam is de thuisbasis van de grootste zeehaven van Europa, en dat merk je aan de horeca. Er is een structurele vraag naar bediening bij zakelijke lunches, congressen en bedrijfsevenementen, naast het gewone restaurant- en hotelwerk in de stad.',
        'Rond de moderne skyline bij de Kop van Zuid en de Erasmusbrug, en in de levendige omgeving van de Markthal, zijn de laatste jaren veel nieuwe horecaconcepten ontstaan. Voor bedieningsprofessionals is Rotterdam daardoor een afwisselende stad om in te werken, informeel en zakelijk door elkaar.',
        'Wij zijn actief in Rotterdam en plaatsen ook in de bredere regio Rijnmond.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Rotterdam?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Rotterdam of de Rijnmond is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Rotterdam?', answer: 'Van zakelijke events en congressen tot de horecazaken rond de Markthal en de Kop van Zuid. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Rotterdam?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Rotterdam"
      formLocation="Vacature bediening Rotterdam"
      relatedLinks={[
        { href: '/vacature-kok-rotterdam', label: 'Kok in Rotterdam' },
        { href: '/vacature-bediening-den-haag', label: 'Bediening in Den Haag' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
