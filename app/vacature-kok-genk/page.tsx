'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokGenkPage() {
  return (
    <CityFreelancerPage
      city="Genk"
      regionLabel="Genk en Belgisch Limburg"
      heroAccent="in Genk"
      heroSubtext="Op zoek naar werk als kok in Genk? Wij verbinden freelance chefs met restaurants en zaken in de stad en de rest van Belgisch Limburg. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Genk"
      contextHeadingLead="Koken in een"
      contextHeadingAccent="groene, diverse stad"
      contextParagraphs={[
        'Genk heeft zijn steenkoolverleden achter zich gelaten en is uitgegroeid tot een van de groenste steden van Vlaanderen, met parken als Kattevennen midden in de stad en het Nationaal Park Hoge Kempen vlakbij. Voor een kok die van buiten werken houdt, is dat een prettige stad om in te wonen en te werken.',
        'De decennia van immigratie die met de mijnindustrie meekwamen, hebben Genk een opvallend divers karakter gegeven. Dat is ook terug te zien in de keukens van de stad, van klassieke Belgische zaken tot internationale concepten.',
        'Wij zijn actief in Genk en plaatsen ook in Hasselt en de bredere regio Belgisch Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Genk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Genk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Genk?', answer: 'Van fine dining restaurants en brasserieën tot bedrijfscatering en grote evenementen, in een stad met een opvallend divers culinair aanbod. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Genk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in Hasselt en de rest van Limburg?', answer: 'Ja, we zijn ook actief in Hasselt en de bredere regio Belgisch Limburg. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Genk"
      formLocation="Vacature kok Genk"
      relatedLinks={[
        { href: '/vacature-bediening-genk', label: 'Bediening in Genk' },
        { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
      ]}
    />
  );
}
