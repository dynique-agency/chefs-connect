'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningAalstPage() {
  return (
    <CityFreelancerPage
      city="Aalst"
      regionLabel="Aalst en Oost-Vlaanderen"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Aalst"
      heroSubtext="Op zoek naar werk in de bediening in Aalst? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de stad, ook tijdens de drukte van carnaval. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Aalst"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een uitbundige inslag"
      contextParagraphs={[
        'Aalst ligt centraal tussen Gent en Brussel en heeft een eigen, ongedwongen horecacultuur die voortbouwt op een verleden als textielstad. Voor bedieningsprofessionals is het een stad waar een directe, gastvrije aanpak wordt gewaardeerd.',
        'Tijdens Aalst Carnaval, een eeuwenoude traditie die de stad wereldwijd bekend maakte, staat de hele binnenstad wekenlang in het teken van feest. Horecazaken hebben dan extra bediening nodig om de drukte aan te kunnen.',
        'Ook de wekelijkse markt zorgt voor een vaste stroom bezoekers naar het centrum. Wij zijn actief in Aalst en plaatsen ook in Gent, Brussel en de rest van Oost-Vlaanderen.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Aalst?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Aalst of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Aalst?', answer: 'Van fine dining restaurants en brasserieën tot grote evenementen, private dining en de drukte rond Aalst Carnaval. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: 'Moet ik zelfstandige zijn om via Chefs Connect te werken?', answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Aalst?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook in andere Belgische steden?', answer: 'Ja, Chefs Connect is actief in heel België, waaronder Gent, Brussel en Antwerpen. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met medewerkers bediening in Aalst?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Aalst: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Aalst"
      formLocation="Vacature bediening Aalst"
      relatedLinks={[
        { href: '/vacature-kok-aalst', label: 'Kok in Aalst' },
        { href: '/vacature-bediening-gent', label: 'Bediening in Gent' },
        { href: '/vacature-bediening-brussel', label: 'Bediening in Brussel' },
      ]}
    />
  );
}
