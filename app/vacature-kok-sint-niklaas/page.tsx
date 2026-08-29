'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokSintNiklaasPage() {
  return (
    <CityFreelancerPage
      city="Sint-Niklaas"
      regionLabel="Sint-Niklaas en het Waasland"
      heroAccent="in Sint-Niklaas"
      heroSubtext="Op zoek naar werk als kok in Sint-Niklaas? Wij verbinden freelance chefs met restaurants en zaken in het Waasland. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Sint-Niklaas"
      contextHeadingLead="Werken rond"
      contextHeadingAccent="een van de grootste pleinen van Europa"
      contextParagraphs={[
        'Sint-Niklaas ligt in het Waasland, tussen Gent en Antwerpen, en is vooral bekend van de Grote Markt, een van de grootste marktpleinen van Europa. Rond dat plein zit een brede horeca die inspeelt op een groot winkelend publiek.',
        'Als regionaal winkelcentrum trekt de stad het hele jaar door bezoekers, wat zorgt voor een stabiele vraag naar koks overdag en in het weekend, naast de gewone avonddrukte.',
        'Wij zijn actief in Sint-Niklaas en plaatsen ook in Gent, Antwerpen en de rest van Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Sint-Niklaas?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Sint-Niklaas of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Sint-Niklaas?', answer: 'Van fine dining restaurants en brasserieën tot bedrijfscatering, evenementen en drukke dagen rond de Grote Markt. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Sint-Niklaas?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Antwerpen en Brussel. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Sint-Niklaas?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Sint-Niklaas: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Sint-Niklaas"
      formLocation="Vacature kok Sint-Niklaas"
      relatedLinks={[
        { href: '/vacature-bediening-sint-niklaas', label: 'Bediening in Sint-Niklaas' },
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
        { href: '/vacature-kok-antwerpen', label: 'Kok in Antwerpen' },
      ]}
    />
  );
}
