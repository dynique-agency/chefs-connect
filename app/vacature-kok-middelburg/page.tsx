'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokMiddelburgPage() {
  return (
    <CityFreelancerPage
      city="Middelburg"
      regionLabel="Middelburg en Walcheren"
      heroAccent="in Middelburg"
      heroSubtext="Op zoek naar werk als kok in Middelburg? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Middelburg"
      contextHeadingLead="Een stad waar"
      contextHeadingAccent="smaak wordt gewaardeerd"
      contextParagraphs={[
        'Middelburg is de hoofdstad van Zeeland, met een compacte historische binnenstad rond de Abdij en de Lange Jan-toren. Als kok kom je hier terecht in zaken die net zo goed een rustige ambtenarenlunch bedienen als een volle zomerse terrasavond. Precies dat soort afwisseling houdt het werk interessant.',
        'Door HZ University of Applied Sciences heeft de stad het hele jaar door een levendige studentenpopulatie, en de ligging op Walcheren, vlak bij de Zeeuwse kust, zorgt in het seizoen voor extra drukte rond de Grote Markt. Voor een kok betekent dat een goede mix van vast publiek en toeristische spanning.',
        'Wij plaatsen ook in Vlissingen, Goes en de bredere regio Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Middelburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Middelburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Middelburg?', answer: 'Van historische restaurants in de binnenstad en zakelijke lunches bij het provinciehuis tot bedrijfsevenementen en catering in Middelburg en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Middelburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Middelburg?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Middelburg: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Middelburg"
      formLocation="Vacature kok Middelburg"
      relatedLinks={[
        { href: '/vacature-bediening-middelburg', label: 'Bediening in Middelburg' },
        { href: '/vacature-kok-vlissingen', label: 'Kok in Vlissingen' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
