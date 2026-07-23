'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningDenBoschPage() {
  return (
    <CityFreelancerPage
      city="Den Bosch"
      regionLabel="Den Bosch en Noordoost-Brabant"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Den Bosch"
      heroSubtext="Op zoek naar werk in de bediening in Den Bosch? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Den Bosch"
      contextHeadingLead="Bourgondische gastvrijheid"
      contextHeadingAccent="als way of life"
      contextParagraphs={[
        'In de Bourgondische hoofdstad is gastvrijheid een way of life. Van de gezellige terrassen rond de Markt en de Korte Putstraat tot de fine dining in de binnenstad: bediening die klopt, maakt hier echt het verschil.',
        'De Brabanthallen en het bruisende centrum zorgen voor een constante stroom aan events en drukke avonden, met veel vraag naar representatieve, vlotte bediening. Voor een freelancer is er werk genoeg.',
        'Wij plaatsen ook in Oss, Vught, Rosmalen en de bredere regio Noordoost-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Den Bosch?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Den Bosch of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Den Bosch?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen in de Brabanthallen, private dining en bruiloften in Den Bosch en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Den Bosch?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Den Bosch"
      formLocation="Vacature bediening Den Bosch"
      relatedLinks={[
        { href: '/vacature-kok-den-bosch', label: 'Kok in Den Bosch' },
        { href: '/vacature-bediening-nijmegen', label: 'Bediening in Nijmegen' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
