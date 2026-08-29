'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokVlissingenPage() {
  return (
    <CityFreelancerPage
      city="Vlissingen"
      regionLabel="Vlissingen en Walcheren"
      heroAccent="in Vlissingen"
      heroSubtext="Op zoek naar werk als kok in Vlissingen? Wij verbinden freelance koks met de mooiste keukens in de stad en regio, van restaurants aan de Boulevard tot zakelijke catering rond de haven. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Vlissingen"
      contextHeadingLead="Een keuken met"
      contextHeadingAccent="zicht op zee"
      contextParagraphs={[
        'Vlissingen is de grootste stad van Zeeland en heeft een geschiedenis die doordrenkt is van de zee. Michiel de Ruyter werd hier geboren, en de scheepsbouw, ooit als Koninklijke Maatschappij De Schelde en nu als onderdeel van Damen, bepaalt nog altijd een deel van het karakter van de stad. Voor een kok betekent dat een publiek dat weet wat goed eten is en dat waardeert als het klopt.',
        'Op de Boulevard, met uitzicht op de Westerschelde en de Noordzee, wissel je strandpaviljoens en terrassen af met restaurants in het centrum. Van een drukke zomerdag vol dagjesmensen tot een rustiger dienst buiten het seizoen: als kok in Vlissingen werk je met een gevarieerd publiek van toeristen, havenwerkers en vaste gasten.',
        'Wij plaatsen ook in Middelburg, Goes en de bredere regio Walcheren en Zeeland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Vlissingen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Vlissingen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Vlissingen?', answer: 'Van restaurants aan de Boulevard en strandpaviljoens tot zakelijke catering rond de haven en scheepswerven in Vlissingen en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Vlissingen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Vlissingen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Vlissingen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Vlissingen"
      formLocation="Vacature kok Vlissingen"
      relatedLinks={[
        { href: '/vacature-bediening-vlissingen', label: 'Bediening in Vlissingen' },
        { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
