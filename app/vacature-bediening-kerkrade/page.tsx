'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningKerkradePage() {
  return (
    <CityFreelancerPage
      city="Kerkrade"
      regionLabel="Kerkrade en Zuid-Limburg / Parkstad"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Kerkrade"
      heroSubtext="Op zoek naar werk in de bediening in Kerkrade? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de stad en de Parkstad regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Kerkrade"
      contextHeadingLead="Gastvrijheid over de"
      contextHeadingAccent="grens heen"
      contextParagraphs={[
        'Kerkrade ligt direct tegen de Duitse grens en vormt samen met het Duitse Herzogenrath vrijwel één stad. Voor bedieningspersoneel betekent dat een gemengd publiek, waarbij Duits net zo vaak over tafel gaat als Nederlands.',
        'Eens in de paar jaar is Kerkrade gastheer van het World Music Contest, een groot internationaal muziekconcours dat bezoekers uit heel Europa trekt. Dat soort evenementen zorgt voor pieken waarbij horecazaken in de hele Parkstad regio extra bediening nodig hebben.',
        'Wij plaatsen ook in Maastricht en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Kerkrade?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Kerkrade of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Kerkrade?', answer: 'Van restaurants en cafés in Kerkrade en de Parkstad regio tot extra bediening tijdens evenementen zoals het World Music Contest. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Kerkrade?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Kerkrade?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Kerkrade: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Kerkrade"
      formLocation="Vacature bediening Kerkrade"
      relatedLinks={[
        { href: '/vacature-kok-kerkrade', label: 'Kok in Kerkrade' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
        { href: '/vacature-bediening-roermond', label: 'Bediening in Roermond' },
      ]}
    />
  );
}
