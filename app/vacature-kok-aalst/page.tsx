'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokAalstPage() {
  return (
    <CityFreelancerPage
      city="Aalst"
      regionLabel="Aalst en Oost-Vlaanderen"
      heroAccent="in Aalst"
      heroSubtext="Op zoek naar werk als kok in Aalst? Wij verbinden freelance chefs met restaurants en evenementen in de stad, met een extra uitschieter tijdens carnaval. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Aalst"
      contextHeadingLead="Een stad met"
      contextHeadingAccent="een uitbundig karakter"
      contextParagraphs={[
        'Aalst combineert een verleden als textielstad met een eigenzinnige, gastvrije horeca. De stad ligt centraal tussen Gent en Brussel, wat zorgt voor een gevarieerd publiek en genoeg afwisseling voor een freelance kok.',
        'Aalst is internationaal vooral bekend van Aalst Carnaval, een eeuwenoude traditie die de hele stad wekenlang in de ban houdt. Voor koks betekent dat een periode waarin restaurants, cafés en tijdelijke locaties fors moeten opschalen.',
        'Ook de wekelijkse markt trekt het hele jaar door bezoekers naar het centrum. Wij zijn actief in Aalst en plaatsen ook in Gent, Brussel en de rest van Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Aalst?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Aalst of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Aalst?', answer: 'Van fine dining restaurants en brasserieën tot grote evenementen, private dining en de drukte rond Aalst Carnaval. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Aalst?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Aalst?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Aalst: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Aalst"
      formLocation="Vacature kok Aalst"
      relatedLinks={[
        { href: '/vacature-bediening-aalst', label: 'Bediening in Aalst' },
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
        { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
      ]}
    />
  );
}
