'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokDenBoschPage() {
  return (
    <CityFreelancerPage
      city="Den Bosch"
      regionLabel="Den Bosch en Noordoost-Brabant"
      heroAccent="in Den Bosch"
      heroSubtext="Op zoek naar werk als kok in Den Bosch? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Den Bosch"
      contextHeadingLead="De Bourgondische hoofdstad"
      contextHeadingAccent="waardeert vakmanschap"
      contextParagraphs={[
        '’s-Hertogenbosch draagt de titel Bourgondische hoofdstad niet voor niets. Eten en drinken zitten diep in de cultuur, van de terrassen rond de Markt en de Korte Putstraat tot de fine dining in de binnenstad. Voor een kok is het een stad waar vakmanschap echt gewaardeerd wordt.',
        'De stad is ook een serieuze evenementenbestemming. De Brabanthallen trekken het hele jaar grote beurzen en congressen, en het centrum loopt vol tijdens carnaval en de zomermaanden. Dat zorgt voor een constante vraag naar goede koks.',
        'Wij plaatsen ook in Oss, Vught, Rosmalen en de bredere regio Noordoost-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Den Bosch?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Den Bosch of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Den Bosch?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen in de Brabanthallen, private dining en bruiloften in Den Bosch en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Den Bosch?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Den Bosch?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Den Bosch: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Den Bosch"
      formLocation="Vacature kok Den Bosch"
      relatedLinks={[
        { href: '/vacature-kok-nijmegen', label: 'Kok in Nijmegen' },
        { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
