'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokGentPage() {
  return (
    <CityFreelancerPage
      city="Gent"
      regionLabel="Gent en Oost-Vlaanderen"
      heroAccent="in Gent"
      heroSubtext="Op zoek naar werk als kok in Gent? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Gent"
      contextHeadingLead="Een studentenstad"
      contextHeadingAccent="met culinair karakter"
      contextParagraphs={[
        'Gent heeft een levendige, eigenzinnige eetcultuur rond het Gravensteen en de Korenmarkt, met een reputatie als een van de meest vegetarisch-vriendelijke steden van Europa. Voor een kok is het een stad waar creativiteit en vakmanschap gewaardeerd worden.',
        'Als grote studentenstad rondom de Universiteit Gent is er het hele jaar door werk, met een uitschieter tijdens de Gentse Feesten, tien dagen waarin de hele stad culinair op volle toeren draait. Genoeg afwisseling voor een freelancer.',
        'Wij zijn actief in Gent en plaatsen ook in Brugge, Brussel en de bredere regio Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Gent?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Gent of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Gent?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en de Gentse Feesten in Gent en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Gent?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brugge, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Gent?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Gent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Gent"
      formLocation="Vacature kok Gent"
      relatedLinks={[
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
        { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
        { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
      ]}
    />
  );
}
