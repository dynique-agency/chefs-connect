'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokOosterhoutPage() {
  return (
    <CityFreelancerPage
      city="Oosterhout"
      regionLabel="Oosterhout en West-Brabant"
      heroAccent="in Oosterhout"
      heroSubtext="Op zoek naar werk als kok in Oosterhout? Wij verbinden freelance koks met restaurants en horecazaken in Oosterhout en de regio Breda. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Oosterhout"
      contextHeadingLead="Een groene gemeente"
      contextHeadingAccent="met een eigen tempo"
      contextParagraphs={[
        'Oosterhout is een van de groenere gemeenten van Brabant, met een compact centrum rond het Slotpark en de karakteristieke slotjes, en landgoed Oosterheide net buiten de stad. Met ruim 55.000 inwoners blijft de schaal overzichtelijk, en dat voel je terug in de horeca.',
        'Voor een kok betekent dat afwisseling tussen een kleinschalige zaak in Oosterhout zelf, gericht op vaste gasten uit de gemeente en de dorpskernen eromheen, en de grotere keukens net over de grens in Breda.',
        'Wij zijn actief in Oosterhout en plaatsen ook in Breda en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Oosterhout?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oosterhout of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Oosterhout?', answer: 'Van lokale restaurants en familiezaken tot besloten feesten en evenementen in Oosterhout en de bredere regio West-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Oosterhout?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Oosterhout?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Oosterhout: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Oosterhout"
      formLocation="Vacature kok Oosterhout"
      relatedLinks={[
        { href: '/vacature-bediening-oosterhout', label: 'Bediening in Oosterhout' },
        { href: '/vacature-kok-breda', label: 'Kok in Breda' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
