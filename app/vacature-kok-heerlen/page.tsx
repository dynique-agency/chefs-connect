'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokHeerlenPage() {
  return (
    <CityFreelancerPage
      city="Heerlen"
      regionLabel="Heerlen en Oostelijk Zuid-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Heerlen"
      heroSubtext="Op zoek naar werk als kok in Heerlen? Wij verbinden freelance koks met horecazaken in de stad en de Oostelijke Mijnstreek, van gezellige eetcafés tot zakelijke locaties. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Heerlen"
      contextHeadingLead="Koken in een stad"
      contextHeadingAccent="die zich opnieuw uitvindt"
      contextParagraphs={[
        'Heerlen was ooit het centrum van de Nederlandse steenkolenwinning en heeft zich sinds het sluiten van de mijnen ontwikkeld tot een stad met een sterke focus op detailhandel, onderwijs en dienstverlening. Voor een freelance kok betekent dat een horeca die volop in beweging is.',
        'Door de ligging vlak bij de Duitse grens en de centrale positie in de Oostelijke Mijnstreek is er naast de vaste horeca ook regelmatig vraag rond evenementen en zakelijke bijeenkomsten. Wie flexibel is, vindt in Heerlen genoeg afwisseling.',
        'Wij plaatsen ook in Sittard-Geleen, Maastricht en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Heerlen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Heerlen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Heerlen?', answer: 'Van eetcafés en restaurants in het centrum tot zakelijke evenementen en cateringklussen in de Oostelijke Mijnstreek. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Heerlen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Heerlen"
      formLocation="Vacature kok Heerlen"
      relatedLinks={[
        { href: '/vacature-bediening-heerlen', label: 'Bediening in Heerlen' },
        { href: '/vacature-kok-sittard-geleen', label: 'Kok in Sittard-Geleen' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
