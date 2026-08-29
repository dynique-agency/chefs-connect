'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokHoutenPage() {
  return (
    <CityFreelancerPage
      city="Houten"
      regionLabel="Houten en de regio Utrecht"
      heroAccent="in Houten"
      heroSubtext="Op zoek naar werk als kok in Houten? Wij verbinden freelance chefs met restaurants, hotels en events in Houten en de regio Utrecht. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Houten"
      contextHeadingLead="Een gemeente die"
      contextHeadingAccent="meegroeit met Utrecht"
      contextParagraphs={[
        'Houten staat bekend als een van de meest fietsvriendelijke gemeenten van Nederland, met een autoluw centrum rond ’t Rond en een jonge, groeiende bevolking. Die schaal brengt een eigen, groeiende horeca met zich mee, van lunchzaken tot restaurants voor een avondje uit.',
        'Door de directe ligging naast Utrecht delen veel horecazaken in Houten hun klantenkring met de stad. Voor koks betekent dat afwisseling tussen een kleinschalige, persoonlijke zaak in Houten en grotere concepten net over de grens.',
        'Wij zijn actief in Houten en plaatsen ook in de bredere regio Utrecht.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Houten?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Houten of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Houten?', answer: 'Van lokale restaurants en lunchzaken tot evenementen en private dining in Houten en de bredere regio Utrecht. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Houten?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Houten?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Houten: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Houten"
      formLocation="Vacature kok Houten"
      relatedLinks={[
        { href: '/vacature-bediening-houten', label: 'Bediening in Houten' },
        { href: '/vacature-kok-utrecht', label: 'Kok in Utrecht' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
