'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokBruggePage() {
  return (
    <CityFreelancerPage
      city="Brugge"
      regionLabel="Brugge en West-Vlaanderen"
      heroAccent="in Brugge"
      heroSubtext="Op zoek naar werk als kok in Brugge? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Brugge"
      contextHeadingLead="Fine dining"
      contextHeadingAccent="in een wereldberoemd decor"
      contextParagraphs={[
        'Brugge is een van de best bewaarde middeleeuwse steden ter wereld, met een fine dining-reputatie die verder reikt dan de landsgrenzen. Voor een kok betekent dat werken op een niveau dat je scherp houdt, tussen sterrenzaken en gerenommeerde restaurants rond de kanalen.',
        'Het jaarlijkse toerisme zorgt voor een constante, hoge vraag naar keukenpersoneel, met duidelijke pieken in het voor- en najaar en rond de feestdagen. Voor een freelancer betekent dat volop kans op mooie, uitdagende opdrachten.',
        'Wij zijn actief in Brugge en plaatsen ook in Gent, Brussel en de bredere regio West-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Brugge?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Brugge of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Brugge?', answer: 'Van sterrenzaken en fine dining restaurants tot boetiekhotels, private dining en grote evenementen in Brugge en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Brugge?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Brugge?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Brugge: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Brugge"
      formLocation="Vacature kok Brugge"
      relatedLinks={[
        { href: '/vacature-bediening-brugge', label: 'Bediening in Brugge' },
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
        { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
      ]}
    />
  );
}
