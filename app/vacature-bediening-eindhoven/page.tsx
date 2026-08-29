'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningEindhovenPage() {
  return (
    <CityFreelancerPage
      city="Eindhoven"
      regionLabel="Eindhoven en Noord-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Eindhoven"
      heroSubtext="Op zoek naar werk in de bediening in Eindhoven? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Eindhoven"
      contextHeadingLead="Een stad die draait op"
      contextHeadingAccent="goede gastvrijheid"
      contextParagraphs={[
        'Eindhoven is uitgegroeid tot een stad met een levendige horeca, van het bruisende Stratumseind tot de verfijnde concepten rondom Strijp-S. Voor wie in de bediening werkt, betekent dat veel verschillende sferen en gasten die goede, persoonlijke service verwachten.',
        'Als drukke evenementen- en bedrijvenstad in de Brainport-regio is er het hele jaar door vraag naar representatieve, vlotte bediening, van zakelijke diners tot grote events. Voor een flexibele freelancer is er werk genoeg.',
        'Wij plaatsen ook in Helmond, Veldhoven en de bredere regio Noord-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Eindhoven?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Eindhoven of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Eindhoven?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Eindhoven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Eindhoven?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Eindhoven?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Eindhoven: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Eindhoven"
      formLocation="Vacature bediening Eindhoven"
      relatedLinks={[
        { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
        { href: '/vacature-bediening-helmond', label: 'Bediening in Helmond' },
        { href: '/vacature-bediening-tilburg', label: 'Bediening in Tilburg' },
      ]}
    />
  );
}
