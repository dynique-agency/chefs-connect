'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokDenHaagPage() {
  return (
    <CityFreelancerPage
      city="Den Haag"
      regionLabel="Den Haag en Zuid-Holland"
      heroAccent="in Den Haag"
      heroSubtext="Op zoek naar werk als kok in Den Haag? Wij verbinden freelance chefs met de regeringsstad en Scheveningen tegelijk, van representatieve diners tot een drukke strandtent. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Den Haag"
      contextHeadingLead="Koken voor twee"
      contextHeadingAccent="heel verschillende werelden"
      contextParagraphs={[
        'Den Haag is de regeringszetel van Nederland en huisvest internationale instellingen als het Internationaal Gerechtshof en het Internationaal Strafhof. Dat brengt een constante stroom aan representatieve diners en internationale bijeenkomsten met zich mee, met hoge eisen aan de keuken.',
        'Tegelijk ligt Scheveningen binnen de gemeentegrenzen, met strandtenten en hotels die in het seizoen overuren draaien. Voor een kok betekent dat in Den Haag twee heel verschillende werelden om in te werken, van formeel tot casual aan zee.',
        'Wij zijn actief in Den Haag en plaatsen ook in de bredere regio Zuid-Holland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Den Haag?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Den Haag of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Den Haag?', answer: 'Van diplomatieke evenementen en representatieve diners tot restaurants en strandtenten in Scheveningen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Den Haag?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Den Haag?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Den Haag: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Den Haag"
      formLocation="Vacature kok Den Haag"
      relatedLinks={[
        { href: '/vacature-bediening-den-haag', label: 'Bediening in Den Haag' },
        { href: '/vacature-kok-rotterdam', label: 'Kok in Rotterdam' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
