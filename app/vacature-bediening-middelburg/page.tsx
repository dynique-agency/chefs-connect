'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningMiddelburgPage() {
  return (
    <CityFreelancerPage
      city="Middelburg"
      regionLabel="Middelburg en Walcheren"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Middelburg"
      heroSubtext="Op zoek naar werk in de bediening in Middelburg? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Middelburg"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een historisch decor"
      contextParagraphs={[
        'Middelburg is de hoofdstad van Zeeland, met een compacte binnenstad rond de Abdij, de Lange Jan-toren en de Grote Markt met het statige stadhuis. Voor bediening betekent dat werken op locaties waar sfeer en historie meespelen, van een rustig terras bij de Abdij tot een drukke zaak aan de Markt.',
        'De stad telt door HZ University of Applied Sciences het hele jaar door studenten, en de ligging op Walcheren, dicht bij de Zeeuwse kust, zorgt in het seizoen voor extra toeristische drukte. Gastvrijheid in Middelburg vraagt dus om schakelen tussen een vast lokaal publiek en bezoekers die net voor het eerst binnenlopen.',
        'Wij plaatsen ook in Vlissingen, Goes en de bredere regio Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Middelburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Middelburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Middelburg?', answer: 'Van historische restaurants en terrassen in de binnenstad tot zakelijke bijeenkomsten en bedrijfsevenementen in Middelburg en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Middelburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Middelburg?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Middelburg: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Middelburg"
      formLocation="Vacature bediening Middelburg"
      relatedLinks={[
        { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
        { href: '/vacature-bediening-goes', label: 'Bediening in Goes' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
