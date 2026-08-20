'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokAmsterdamPage() {
  return (
    <CityFreelancerPage
      city="Amsterdam"
      regionLabel="Amsterdam en de regio"
      heroAccent="in Amsterdam"
      heroSubtext="Op zoek naar werk als kok in Amsterdam? Wij verbinden freelance chefs met de keukens van de hoofdstad, van een druk eetcafé aan de gracht tot een Michelin sterren restaurant. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Amsterdam"
      contextHeadingLead="Koken in de stad"
      contextHeadingAccent="die nooit stilstaat"
      contextParagraphs={[
        'Amsterdam heeft de dichtste concentratie topkeukens van Nederland, met meerdere Michelin sterren restaurants en een fine dining scene die internationaal wordt gevolgd. Voor een kok die zich wil ontwikkelen is er nergens in het land zoveel te kiezen.',
        'De stad is bovendien extreem internationaal. Gasten uit de hele wereld lopen door de grachtengordel, UNESCO werelderfgoed, en dat zie je terug in de keukens: van klassiek Frans tot experimentele concepten en alles ertussenin. Als kok kom je in Amsterdam nooit dezelfde kaart twee keer tegen.',
        'Wij zijn actief in Amsterdam en plaatsen ook in de bredere regio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Amsterdam?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Amsterdam of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Amsterdam?', answer: 'Van fine dining restaurants met een Michelin ster tot boetiekhotels aan de grachten, en van grote evenementen tot private dining. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Amsterdam?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Amsterdam"
      formLocation="Vacature kok Amsterdam"
      relatedLinks={[
        { href: '/vacature-bediening-amsterdam', label: 'Bediening in Amsterdam' },
        { href: '/vacature-kok-utrecht', label: 'Kok in Utrecht' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
