'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningUdenPage() {
  return (
    <CityFreelancerPage
      city="Uden"
      regionLabel="Uden en Noordoost-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Uden"
      heroSubtext="Op zoek naar werk in de bediening in Uden? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in Uden en de bredere regio Noordoost-Brabant. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Uden"
      contextHeadingLead="Landelijk gelegen,"
      contextHeadingAccent="maar goed verbonden"
      contextParagraphs={[
        'Uden ligt midden in een agrarische streek in het oosten van Brabant, vlak bij natuurgebied De Maashorst waar de wisent inmiddels weer rondloopt. Sinds de fusie tot de gemeente Maashorst in 2022 vormt het dorp samen met Volkel, Odiliapeel, Zeeland en Schaijk één gemeente, al blijft Uden zelf met ruim 37.000 inwoners verreweg de grootste kern.',
        'Voor bedieningsprofessionals betekent dat een afwisselende praktijk: van een gezellige zaak in het centrum van Uden tot bedrijfsevenementen rond ziekenhuis Bernhoven of de bedrijventerreinen langs de A50.',
        'Wij zijn actief in Uden en plaatsen ook in Den Bosch en de bredere regio Noordoost-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Uden?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Uden of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Uden?', answer: 'Van gezellige zaken in het centrum tot bedrijfsevenementen rond ziekenhuis Bernhoven en de bedrijventerreinen langs de A50, in Uden en de bredere regio Noordoost-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Uden?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Uden?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Uden: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Uden"
      formLocation="Vacature bediening Uden"
      relatedLinks={[
        { href: '/vacature-kok-uden', label: 'Kok in Uden' },
        { href: '/vacature-bediening-den-bosch', label: 'Bediening in Den Bosch' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
