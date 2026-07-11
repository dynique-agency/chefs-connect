'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokBrusselPage() {
  return (
    <CityFreelancerPage
      city="Brussel"
      regionLabel="Brussel en het Brussels Hoofdstedelijk Gewest"
      heroAccent="in Brussel"
      heroSubtext="Op zoek naar werk als kok in Brussel? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Brussel"
      contextHeadingLead="De grootste stad,"
      contextHeadingAccent="de meeste kansen"
      contextParagraphs={[
        'Brussel is als hoofdstad van België en van Europa een culinaire smeltkroes: van klassieke brasseries tot vernieuwende fine dining, met een internationaal publiek van diplomaten en zakenmensen naast een levendige lokale gastronomie.',
        'Als grote conferentie- en evenementenstad is er structureel veel werk rond zakelijke diners, EU-gerelateerde events en internationale bijeenkomsten. Voor een freelancer is Brussel de stad met de meeste en meest uiteenlopende opdrachten.',
        'Wij zijn actief in Brussel en plaatsen ook in Gent, Brugge en de bredere regio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Brussel?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Brussel of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Brussel?', answer: 'Van fine dining restaurants en internationale zakendiners tot boetiekhotels, EU-gerelateerde events en grote evenementen in Brussel en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Brussel?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brugge en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Brussel"
      formLocation="Vacature kok Brussel"
      relatedLinks={[
        { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
        { href: '/vacature-kok-gent', label: 'Kok in Gent' },
        { href: '/vacature-kok-brugge', label: 'Kok in Brugge' },
      ]}
    />
  );
}
