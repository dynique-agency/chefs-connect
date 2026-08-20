'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningAmsterdamPage() {
  return (
    <CityFreelancerPage
      city="Amsterdam"
      regionLabel="Amsterdam en de regio"
      heroLead="Werk in de bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Amsterdam"
      heroSubtext="Op zoek naar werk in de bediening in Amsterdam? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de horecazaken en hotels van de hoofdstad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Amsterdam"
      contextHeadingLead="Een internationale stad"
      contextHeadingAccent="vraagt om topservice"
      contextParagraphs={[
        'Amsterdam is de grootste en meest internationale stad van Nederland, met bezoekers uit de hele wereld die door de grachtengordel lopen en in de restaurants, hotels en eventlocaties van de stad terechtkomen. Voor bedieningsprofessionals betekent dat continu drukte en gasten die een verzorgde, gastvrije ervaring verwachten.',
        'Met bijna 920.000 inwoners en een enorm aanbod aan horeca, van een eetcafé op een terras aan de gracht tot de bediening bij een gala in een vijfsterrenhotel, is er in Amsterdam voortdurend vraag naar ervaren mensen die weten hoe ze een zaal moeten runnen.',
        'Wij zijn actief in Amsterdam en plaatsen ook in de bredere regio.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Amsterdam?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Amsterdam of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Amsterdam?', answer: 'Van drukke horecazaken in het centrum en aan de grachten tot exclusieve diners en internationale evenementen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Amsterdam?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening, gastheren of gastvrouwen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Amsterdam"
      formLocation="Vacature bediening Amsterdam"
      relatedLinks={[
        { href: '/vacature-kok-amsterdam', label: 'Kok in Amsterdam' },
        { href: '/vacature-bediening-utrecht', label: 'Bediening in Utrecht' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
