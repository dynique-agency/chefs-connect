'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokWeertPage() {
  return (
    <CityFreelancerPage
      city="Weert"
      regionLabel="Weert en Midden-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Weert"
      heroSubtext="Op zoek naar werk als kok in Weert? Wij verbinden freelance koks met keukens in de stad en de bredere regio Midden-Limburg. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Weert"
      contextHeadingLead="Stabiele horeca in een"
      contextHeadingAccent="landbouw en logistieke regio"
      contextParagraphs={[
        'Weert is met ongeveer 50.000 inwoners een compacte stad zonder de toeristische drukte van sommige andere Limburgse steden. Dat betekent geen chaotische pieken, maar wel een keukenwereld die het hele jaar door stabiel doorloopt.',
        'De regio rond Weert draait voor een groot deel op landbouw en logistiek, en dat zie je terug in de horeca: zakelijke lunches, bedrijfsfeesten en catering naast de vaste restaurants in het centrum. Voor een freelance kok is dat een prettige mix van opdrachten.',
        'Wij plaatsen ook in Roermond en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Weert?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Weert of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Weert?', answer: 'Van restaurants in het centrum van Weert tot zakelijke catering en bedrijfsfeesten in de landbouw en logistieke regio eromheen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Weert?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Weert?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Weert: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Weert"
      formLocation="Vacature kok Weert"
      relatedLinks={[
        { href: '/vacature-bediening-weert', label: 'Bediening in Weert' },
        { href: '/vacature-kok-roermond', label: 'Kok in Roermond' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
