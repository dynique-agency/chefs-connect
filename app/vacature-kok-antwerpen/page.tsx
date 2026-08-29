'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokAntwerpenPage() {
  return (
    <CityFreelancerPage
      city="Antwerpen"
      regionLabel="Antwerpen en Belgisch Vlaanderen"
      heroAccent="in Antwerpen"
      heroSubtext="Op zoek naar werk als kok in Antwerpen? Wij verbinden freelance chefs met de mooiste restaurants, hotels en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Antwerpen"
      contextHeadingLead="Een stad met smaak"
      contextHeadingAccent="en internationale allure"
      contextParagraphs={[
        'Antwerpen is de gastronomische hoofdstad van Vlaanderen. Rond het Zuid en de Meir zitten restaurants die moeten kunnen wedijveren met een internationaal publiek, van modehuizen tot diamanthandelaren die hoge eisen stellen aan wat er op het bord komt.',
        'De stad trekt bezoekers uit heel Europa en organiseert het hele jaar door beurzen, modeshows en zakelijke events rond de haven. Dat betekent een constante vraag naar chefs die weten wat precisie en tempo betekenen.',
        'Wij zijn actief in Antwerpen en plaatsen ook in de grensregio richting Breda en Hasselt.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Antwerpen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Antwerpen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Antwerpen?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Antwerpen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Antwerpen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Nederland?', answer: 'Ja, Chefs Connect is actief in zowel Nederland als België. Ben je bereid over de grens te werken, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Antwerpen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Antwerpen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Antwerpen"
      formLocation="Vacature kok Antwerpen"
      relatedLinks={[
        { href: '/vacature-bediening-antwerpen', label: 'Bediening in Antwerpen' },
        { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
