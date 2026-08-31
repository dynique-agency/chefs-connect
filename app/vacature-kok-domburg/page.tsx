'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokDomburgPage() {
  return (
    <CityFreelancerPage
      city="Domburg"
      regionLabel="Domburg en Walcheren"
      heroAccent="in Domburg"
      heroSubtext="Op zoek naar werk als kok in Domburg? Wij verbinden freelance koks met de mooiste keukens in het dorp en de regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Domburg"
      contextHeadingLead="Waar het seizoen"
      contextHeadingAccent="het tempo bepaalt"
      contextParagraphs={[
        'Domburg telt slechts zo’n 4.500 vaste inwoners, maar is een van de bekendste en meest elegante badplaatsen van Zeeland. Het dorp bouwde in de negentiende eeuw een naam op als mondaine kustplaats, destijds geliefd bij kunstenaars als Jan Toorop en Piet Mondriaan. Als kok kom je hier terecht achter de lange strandboulevard en de vuurtoren, in een compact centrum met opvallend veel hotels, strandtenten en restaurants voor zo’n klein dorp.',
        'Dat kleine formaat zorgt voor een uitgesproken ritme. Buiten het seizoen is Domburg rustig, maar zodra de zomer begint groeit de bevolking door toeristen vele malen groter en draaien de keukens van hotels, strandtenten en restaurants op volle toeren. Voor een kok betekent dat pieken vol tempo, afgewisseld met rustigere periodes om op adem te komen.',
        'Wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Domburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Domburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Domburg?', answer: 'Van hotels en strandtenten aan de boulevard tot restaurants in het centrum, vooral tijdens het hoogseizoen als Domburg vol toeristen zit. Ook buiten het seizoen plaatsen we in Domburg en de bredere regio Walcheren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Domburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Domburg?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Domburg: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Domburg"
      formLocation="Vacature kok Domburg"
      relatedLinks={[
        { href: '/vacature-bediening-domburg', label: 'Bediening in Domburg' },
        { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
        { href: '/vacature-kok-vlissingen', label: 'Kok in Vlissingen' },
        { href: '/zeeland', label: 'Werken in Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
