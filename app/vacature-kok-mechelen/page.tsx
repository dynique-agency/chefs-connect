'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokMechelenPage() {
  return (
    <CityFreelancerPage
      city="Mechelen"
      regionLabel="Mechelen en de regio Antwerpen-Brussel"
      heroAccent="in Mechelen"
      heroSubtext="Op zoek naar werk als kok in Mechelen? Wij verbinden freelance chefs met restaurants en keukens tussen Antwerpen en Brussel. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Mechelen"
      contextHeadingLead="Klein van schaal,"
      contextHeadingAccent="groot in groei"
      contextParagraphs={[
        'Mechelen ligt bijna exact tussen Antwerpen en Brussel, en trekt daardoor steeds meer nieuwe bewoners aan die er wonen en elders werken. Dat jonge, koopkrachtige publiek zorgt voor een horecascene die groeit, met rond de Grote Markt en de Sint-Romboutstoren, een UNESCO-erkende beiaardtoren, steeds meer nieuwe adresjes.',
        'Voor een kok is Mechelen een prettige maat: kleinschaliger en persoonlijker dan de grote steden ernaast, met minder van de drukte en concurrentie, maar wel volop kansen om ergens vroeg bij te zijn.',
        'Wij zijn actief in Mechelen en plaatsen ook in Antwerpen, Brussel en de bredere regio daartussen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Mechelen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Mechelen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Mechelen?', answer: 'Van restaurants in het historische centrum tot private dining, bedrijfscatering en events in Mechelen en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zelfstandige zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Mechelen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Antwerpen, Brussel en Leuven. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Mechelen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Mechelen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Mechelen"
      formLocation="Vacature kok Mechelen"
      relatedLinks={[
        { href: '/vacature-bediening-mechelen', label: 'Bediening in Mechelen' },
        { href: '/vacature-kok-antwerpen', label: 'Kok in Antwerpen' },
        { href: '/vacature-kok-leuven', label: 'Kok in Leuven' },
      ]}
    />
  );
}
