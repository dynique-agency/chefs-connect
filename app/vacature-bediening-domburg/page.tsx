'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningDomburgPage() {
  return (
    <CityFreelancerPage
      city="Domburg"
      regionLabel="Domburg en Walcheren"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Domburg"
      heroSubtext="Op zoek naar werk in de bediening in Domburg? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in het dorp en de regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Domburg"
      contextHeadingLead="Gastvrijheid"
      contextHeadingAccent="met zeezicht"
      contextParagraphs={[
        'Domburg telt slechts zo’n 4.500 vaste inwoners, maar geldt als een van de bekendste en meest elegante badplaatsen van Zeeland. Het dorp bouwde in de negentiende eeuw een naam op als mondaine kustplaats, ooit geliefd bij kunstenaars als Jan Toorop en Piet Mondriaan. Voor bediening betekent dat werken in een compact centrum met opvallend veel hotels, strandtenten en restaurants langs de lange strandboulevard en de vuurtoren.',
        'Het bijzondere aan Domburg is de schaal: buiten het seizoen is het een rustig dorp, maar zodra de zomer begint groeit de bevolking door toeristen vele malen groter. Terrassen, strandtenten en hotelrestaurants draaien dan op volle toeren en gastvrijheid wordt continu op de proef gesteld, van het ontvangen van dagjesmensen tot het verwennen van hotelgasten die een week blijven.',
        'Wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Domburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Domburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Domburg?', answer: 'Van strandtenten aan de boulevard en hotelrestaurants tot terrassen in het centrum, vooral tijdens het hoogseizoen als Domburg vol toeristen zit. Ook buiten het seizoen plaatsen we in Domburg en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Domburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Domburg?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Domburg: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Domburg"
      formLocation="Vacature bediening Domburg"
      relatedLinks={[
        { href: '/vacature-kok-domburg', label: 'Kok in Domburg' },
        { href: '/vacature-bediening-middelburg', label: 'Bediening in Middelburg' },
        { href: '/vacature-bediening-vlissingen', label: 'Bediening in Vlissingen' },
        { href: '/zeeland', label: 'Werken in Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
