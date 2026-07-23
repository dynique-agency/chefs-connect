'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokHelmondPage() {
  return (
    <CityFreelancerPage
      city="Helmond"
      regionLabel="Helmond en de Brainportregio"
      heroAccent="in Helmond"
      heroSubtext="Op zoek naar werk als kok in Helmond? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Helmond"
      contextHeadingLead="Een stad in"
      contextHeadingAccent="volle transformatie"
      contextParagraphs={[
        'Helmond heeft zijn industriële, textiele verleden achter zich gelaten en is uitgegroeid tot een volwaardig onderdeel van de Brainport-regio. Nieuwe concepten in de binnenstad en rondom de Kasteeltuin trekken een publiek dat verwacht dat de keuken meegroeit.',
        'Dankzij de nabijheid van Eindhoven profiteert Helmond mee van de bedrijvigheid in de tech- en designsector, met zakelijke diners en events die om representatieve koks vragen.',
        'Wij zijn actief in Helmond en plaatsen ook in Eindhoven en de bredere regio Noord-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Helmond?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Helmond of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Helmond?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Helmond en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Helmond?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Eindhoven?', answer: 'Ja, gezien de korte afstand plaatsen wij regelmatig freelancers in zowel Helmond als Eindhoven. Ben je bereid in beide steden te werken, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Helmond"
      formLocation="Vacature kok Helmond"
      relatedLinks={[
        { href: '/vacature-bediening-helmond', label: 'Bediening in Helmond' },
        { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
        { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
      ]}
    />
  );
}
