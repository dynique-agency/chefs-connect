'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokRoosendaalPage() {
  return (
    <CityFreelancerPage
      city="Roosendaal"
      regionLabel="Roosendaal en West-Brabant"
      heroAccent="in Roosendaal"
      heroSubtext="Op zoek naar werk als kok in Roosendaal? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Roosendaal"
      contextHeadingLead="Waar Nederland en België"
      contextHeadingAccent="elkaar ontmoeten"
      contextParagraphs={[
        'Roosendaal is al meer dan een eeuw een belangrijk spoorwegknooppunt vlak bij de Belgische grens. Reizigers, forenzen en shoppers zijn hier voortdurend in beweging, en dat zorgt voor een horeca die het hele jaar door bezoekers over de vloer krijgt.',
        'Het centrum trekt veel winkelend publiek, mede dankzij Rosada Fashion Outlet, een van de bekendere fashion outlets van Nederland, en dat betekent volle terrassen en lunchzaken in het weekend. Door de ligging op de grens werken hier bovendien geregeld koks die net zo makkelijk in Antwerpen als in Roosendaal terechtkomen.',
        'Wij plaatsen ook in Bergen op Zoom, Zundert en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Roosendaal?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Roosendaal of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Roosendaal?', answer: 'Van restaurants in het centrum tot horecazaken die profiteren van de vele bezoekers uit België, en evenementen in de bredere regio West-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Roosendaal?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Roosendaal"
      formLocation="Vacature kok Roosendaal"
      relatedLinks={[
        { href: '/vacature-bediening-roosendaal', label: 'Bediening in Roosendaal' },
        { href: '/vacature-kok-bergen-op-zoom', label: 'Kok in Bergen op Zoom' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
