'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokBergenOpZoomPage() {
  return (
    <CityFreelancerPage
      city="Bergen op Zoom"
      regionLabel="Bergen op Zoom en West-Brabant"
      heroAccent="in Bergen op Zoom"
      heroSubtext="Op zoek naar werk als kok in Bergen op Zoom? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Bergen op Zoom"
      contextHeadingLead="Historisch centrum,"
      contextHeadingAccent="hedendaagse keuken"
      contextParagraphs={[
        'Bergen op Zoom is een van de oudste vestingsteden van Nederland, met een historische binnenstad op de grens van Brabant en Zeeland. Die setting geeft restaurants in de stad een sfeer die je niet overal vindt, en gasten die er graag voor terugkomen.',
        'Eens per jaar verandert de stad tijdens de Bergse Carnaval, een van de grotere carnavalsvieringen van het zuiden, in Krabbegat, met volle keukens en lange diensten tot gevolg. De rest van het jaar draait het vooral op een trouw lokaal publiek en bezoekers van de historische binnenstad.',
        'Wij plaatsen ook in Roosendaal, Steenbergen en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Bergen op Zoom?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Bergen op Zoom of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Bergen op Zoom?', answer: 'Van sfeervolle restaurants in de historische binnenstad tot grote evenementen tijdens de Bergse Carnaval en de bredere regio West-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Bergen op Zoom?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Bergen op Zoom?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Bergen op Zoom: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Bergen op Zoom"
      formLocation="Vacature kok Bergen op Zoom"
      relatedLinks={[
        { href: '/vacature-bediening-bergen-op-zoom', label: 'Bediening in Bergen op Zoom' },
        { href: '/vacature-kok-roosendaal', label: 'Kok in Roosendaal' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
