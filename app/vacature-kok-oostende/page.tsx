'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokOostendePage() {
  return (
    <CityFreelancerPage
      city="Oostende"
      regionLabel="Oostende en de Belgische kust"
      heroAccent="in Oostende"
      heroSubtext="Op zoek naar werk als kok in Oostende? Wij verbinden freelance chefs met restaurants, brasserieën en strandzaken aan de Belgische kust. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Oostende"
      contextHeadingLead="Kust, seizoen"
      contextHeadingAccent="en volop werk"
      contextParagraphs={[
        'Oostende is de grootste stad aan de Belgische kust, met een lang strand, een actieve vissershaven en een vismijn die nog dagelijks vis aanvoert. Voor een kok betekent dat verse producten dichtbij en een keuken die van oudsher leunt op wat de zee die dag te bieden heeft.',
        'Als geliefde badplaats met historische banden met het Belgische koningshuis trekt Oostende het hele jaar bezoekers, maar vooral in de zomer loopt de vraag naar keukenpersoneel sterk op, wanneer restaurants en strandbars langs de zeedijk vol zitten. Voor een freelancer die van een hoog tempo houdt is dat een uitgelezen kans.',
        'Wij zijn actief in Oostende en plaatsen ook in Brugge, Kortrijk en de bredere regio langs de Belgische kust.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Oostende?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oostende of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Oostende?', answer: 'Van visrestaurants en brasserieën aan de zeedijk tot strandbars, hotels en zomerse evenementen in Oostende en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Oostende?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Is er ook in het laagseizoen werk in Oostende?', answer: 'Zeker, al ligt de piek duidelijk in de zomer. Buiten het hoogseizoen bemiddelen we ook voor restaurants en hotels die het hele jaar door open zijn.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Oostende"
      formLocation="Vacature kok Oostende"
      relatedLinks={[
        { href: '/vacature-bediening-oostende', label: 'Bediening in Oostende' },
        { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
        { href: '/vacature-kok-kortrijk', label: 'Kok in Kortrijk' },
      ]}
    />
  );
}
