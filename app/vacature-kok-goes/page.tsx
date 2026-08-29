'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokGoesPage() {
  return (
    <CityFreelancerPage
      city="Goes"
      regionLabel="Goes en Zuid-Beveland"
      heroAccent="in Goes"
      heroSubtext="Op zoek naar werk als kok in Goes? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Goes"
      contextHeadingLead="Waar de regio"
      contextHeadingAccent="voor komt eten"
      contextParagraphs={[
        'Goes is de hoofdplaats van Zuid-Beveland en ligt centraal in Zeeland. Voor de horeca in de stad is dat een belangrijk gegeven: mensen uit de hele Bevelanden komen naar Goes om te winkelen en uit eten te gaan, met de Grote Markt en het monumentale Stadhuis als middelpunt. Voor een kok betekent dat een keuken die het hele jaar door op volle toeren draait, niet alleen in het seizoen.',
        'Anders dan in Middelburg en Vlissingen draait de horeca in Goes minder op toeristen en juist op een trouw, regionaal publiek dat gericht de stad in komt. Gasten weten precies wat ze willen en waarderen het als het klopt, elke dienst opnieuw. Dat, gecombineerd met de landbouw en fruitteelt van Zuid-Beveland eromheen, geeft de keukens in Goes een nuchter, eerlijk karakter.',
        'Wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Zuid-Beveland en Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Goes?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Goes of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Goes?', answer: 'Van lokale restaurants en zakelijke lunches tot bedrijfsevenementen en catering in Goes en de bredere regio Zuid-Beveland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Goes?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Goes?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Goes: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Goes"
      formLocation="Vacature kok Goes"
      relatedLinks={[
        { href: '/vacature-bediening-goes', label: 'Bediening in Goes' },
        { href: '/vacature-kok-middelburg', label: 'Kok in Middelburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
