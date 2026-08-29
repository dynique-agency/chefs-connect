'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokKortrijkPage() {
  return (
    <CityFreelancerPage
      city="Kortrijk"
      regionLabel="Kortrijk en West-Vlaanderen"
      heroAccent="in Kortrijk"
      heroSubtext="Op zoek naar werk als kok in Kortrijk? Wij verbinden freelance chefs met restaurants, cateraars en evenementen in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Kortrijk"
      contextHeadingLead="Een stad die"
      contextHeadingAccent="zichzelf opnieuw uitvond"
      contextParagraphs={[
        'Kortrijk was ooit het hart van de Vlaamse textiel- en vlasindustrie, en heeft die geschiedenis omgebogen naar een reputatie als designstad. Voor een kok betekent dat een horeca die durft te vernieuwen, met concepten die net zo veel belang hechten aan de uitstraling van een zaak als aan het bord.',
        'Kortrijk Xpo, een van de grotere beurslocaties van het land, zorgt het hele jaar door voor pieken in cateringopdrachten en evenementen, en de ligging vlak bij de Franse grens brengt een gemengd, internationaal publiek naar de stad.',
        'Wij zijn actief in Kortrijk en plaatsen ook in Brugge, Gent en de bredere regio West-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Kortrijk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Kortrijk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Kortrijk?', answer: 'Van restaurants en cateringopdrachten tot beursevents op Kortrijk Xpo en private dining in Kortrijk en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Kortrijk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brugge, Gent en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Kortrijk?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Kortrijk: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Kortrijk"
      formLocation="Vacature kok Kortrijk"
      relatedLinks={[
        { href: '/vacature-bediening-kortrijk', label: 'Bediening in Kortrijk' },
        { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
      ]}
    />
  );
}
