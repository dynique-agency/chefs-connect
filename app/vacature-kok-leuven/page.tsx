'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokLeuvenPage() {
  return (
    <CityFreelancerPage
      city="Leuven"
      regionLabel="Leuven en Vlaams-Brabant"
      heroAccent="in Leuven"
      heroSubtext="Op zoek naar werk als kok in Leuven? Wij verbinden freelance chefs met de mooiste restaurants en keukens in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Leuven"
      contextHeadingLead="Een studentenstad"
      contextHeadingAccent="met een culinaire ziel"
      contextParagraphs={[
        'Leuven leeft rond de KU Leuven, de oudste nog bestaande katholieke universiteit ter wereld. Dat geeft de stad een jong publiek en, rond de Oude Markt, een van de dichtste concentraties horecazaken van Vlaanderen, ook wel de langste bar van Europa genoemd. Voor een kok is het een omgeving met tempo en volume.',
        'De stad heeft daarnaast een lange traditie als bierstad, met AB InBev dat er zijn hoofdkantoor heeft, en een keukenscene die verder reikt dan studentencafés, met fijnere adresjes rond de Bondgenotenlaan en het Hertogenpark. Genoeg afwisseling om als freelancer je draai te vinden.',
        'Wij zijn actief in Leuven en plaatsen ook in Brussel, Mechelen en de bredere regio Vlaams-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Leuven?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Leuven of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Leuven?', answer: 'Van restaurants en boetiekhotels tot studentenevenementen zoals de jaarlijkse 24 Urenloop, private dining en bedrijfscatering in Leuven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Leuven?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Brussel, Mechelen en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Leuven"
      formLocation="Vacature kok Leuven"
      relatedLinks={[
        { href: '/vacature-bediening-leuven', label: 'Bediening in Leuven' },
        { href: '/vacature-kok-mechelen', label: 'Kok in Mechelen' },
        { href: '/vacature-kok-brussel', label: 'Kok in Brussel' },
      ]}
    />
  );
}
