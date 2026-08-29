'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningWaalwijkPage() {
  return (
    <CityFreelancerPage
      city="Waalwijk"
      regionLabel="Waalwijk en Midden-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Waalwijk"
      heroSubtext="Op zoek naar werk in de bediening in Waalwijk? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in Waalwijk en de regio Midden-Brabant. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Waalwijk"
      contextHeadingLead="Bekend om schoenen,"
      contextHeadingAccent="en meer dan dat"
      contextParagraphs={[
        'Waalwijk staat al generaties lang bekend als de schoenenstad van Nederland. De schoenindustrie is grotendeels verdwenen, maar het verhaal leeft voort in het Schoenenkwartier, het museum dat de geschiedenis van leer en schoenen in de Langstraat laat zien. Met zo’n 48.000 inwoners is Waalwijk een plaats waar iedereen elkaar een beetje kent.',
        'Voor bedieningsprofessionals betekent de nabijheid van de Efteling extra afwisseling: naast de lokale zaken in Waalwijk zelf is er volop werk bij hotels en evenementenlocaties rond het park.',
        'Wij zijn actief in Waalwijk en plaatsen ook in Tilburg en de bredere regio Midden-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Waalwijk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Waalwijk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Waalwijk?', answer: 'Van gastvrije zaken in de schoenenstad tot evenementen en cateringopdrachten rond de Efteling, in Waalwijk en de bredere regio Midden-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Waalwijk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Waalwijk?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Waalwijk: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Waalwijk"
      formLocation="Vacature bediening Waalwijk"
      relatedLinks={[
        { href: '/vacature-kok-waalwijk', label: 'Kok in Waalwijk' },
        { href: '/vacature-bediening-tilburg', label: 'Bediening in Tilburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
