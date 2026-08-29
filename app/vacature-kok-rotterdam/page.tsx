'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokRotterdamPage() {
  return (
    <CityFreelancerPage
      city="Rotterdam"
      regionLabel="Rotterdam en de Rijnmond"
      heroAccent="in Rotterdam"
      heroSubtext="Op zoek naar werk als kok in Rotterdam? Wij verbinden freelance chefs met de meest uiteenlopende keukens van de stad, van de Markthal tot zakelijke evenementen in de haven. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Rotterdam"
      contextHeadingLead="Een van de meest"
      contextHeadingAccent="interessante keukens van Nederland"
      contextParagraphs={[
        'Rotterdam wordt in de foodmedia steeds vaker aangewezen als een van de interessantste opkomende culinaire steden van het land. Het eetlandschap is diverser, experimenteler en informeler dan in andere grote steden, met volop ruimte voor koks die iets nieuws willen proberen.',
        'De stad is na de Tweede Wereldoorlog vrijwel helemaal herbouwd en staat bekend om gedurfde moderne architectuur zoals de Markthal en de Erasmusbrug. Datzelfde lef zie je terug in de keukens eromheen. Daarnaast zorgt de grootste zeehaven van Europa voor een constante vraag naar koks bij zakelijke evenementen en corporate catering.',
        'Wij zijn actief in Rotterdam en plaatsen ook in de bredere regio Rijnmond.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Rotterdam?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Rotterdam of de Rijnmond is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Rotterdam?', answer: 'Van eigenzinnige restaurants rond de Markthal tot zakelijke catering voor de haven, en van grote evenementen tot private dining. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Rotterdam?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Rotterdam?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Rotterdam: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Rotterdam"
      formLocation="Vacature kok Rotterdam"
      relatedLinks={[
        { href: '/vacature-bediening-rotterdam', label: 'Bediening in Rotterdam' },
        { href: '/vacature-kok-den-haag', label: 'Kok in Den Haag' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
