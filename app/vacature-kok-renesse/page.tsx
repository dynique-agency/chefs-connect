'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokRenessePage() {
  return (
    <CityFreelancerPage
      city="Renesse"
      regionLabel="Renesse en Schouwen-Duiveland"
      heroAccent="in Renesse"
      heroSubtext="Op zoek naar werk als kok in Renesse? Wij verbinden freelance koks met horecazaken in de drukste badplaats van Schouwen-Duiveland, van het hoogseizoen aan de kust tot de rustigere regio eromheen. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Renesse"
      contextHeadingLead="Een keuken die"
      contextHeadingAccent="meebeweegt met het seizoen"
      contextParagraphs={[
        'Renesse telt maar zo’n 1.700 vaste inwoners, maar is de grootste en drukste badplaats van Schouwen-Duiveland en een van de populairste zomerbestemmingen van heel Zeeland, met een breed zandstrand en een levendig centrum vol horeca.',
        'In het hoogseizoen trekt het dorp een jong en levendig publiek naar de talrijke vakantieparken en campings in de omgeving. Terrassen en strandpaviljoens draaien dan tot ver na middernacht door, wat voor een kok een uitgesproken piekseizoen betekent met veel opdrachten in korte tijd.',
        'Wij plaatsen ook in Goes, Middelburg en de bredere regio Zeeland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Renesse?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Renesse of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Renesse?', answer: 'Van strandpaviljoens en terrassen in het hoogseizoen tot restaurants in het centrum van Renesse en de bredere regio Schouwen-Duiveland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Renesse?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Renesse?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Renesse: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Renesse"
      formLocation="Vacature kok Renesse"
      relatedLinks={[
        { href: '/vacature-bediening-renesse', label: 'Bediening in Renesse' },
        { href: '/vacature-kok-goes', label: 'Kok in Goes' },
        { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
        { href: '/zeeland', label: 'Heel Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
