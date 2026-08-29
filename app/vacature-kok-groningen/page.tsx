'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokGroningenPage() {
  return (
    <CityFreelancerPage
      city="Groningen"
      regionLabel="Groningen en Noord-Nederland"
      heroAccent="in Groningen"
      heroSubtext="Op zoek naar werk als kok in Groningen? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Groningen"
      contextHeadingLead="Een stad die nooit"
      contextHeadingAccent="echt stilstaat"
      contextParagraphs={[
        'Groningen is de grootste studentenstad van het noorden, met de Rijksuniversiteit Groningen, een van de oudste universiteiten van Nederland, en de Hanzehogeschool. Die grote, steeds wisselende groep gasten zorgt voor een constante en gevarieerde vraag naar horeca, het hele jaar door.',
        'Rond de Grote Markt en de Poelestraat ligt een van de drukste uitgaansgebieden van Nederland, waar je als kok flink wat volume kunt draaien op piekavonden. Daarnaast is Groningen het economisch en cultureel centrum van heel Noord-Nederland, wat zorgt voor een breder publiek uit Friesland en Drenthe naast de studenten.',
        'Wij plaatsen in Groningen en de bredere regio Noord-Nederland, van Friesland tot Drenthe.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Groningen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Groningen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Groningen?', answer: 'Van drukke horecazaken rond de Grote Markt en Poelestraat tot rustigere restaurants en bedrijfscatering in Groningen en de bredere regio Noord-Nederland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Groningen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Groningen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Groningen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Groningen"
      formLocation="Vacature kok Groningen"
      relatedLinks={[
        { href: '/vacature-bediening-groningen', label: 'Bediening in Groningen' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
