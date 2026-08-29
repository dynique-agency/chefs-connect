'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningOssPage() {
  return (
    <CityFreelancerPage
      city="Oss"
      regionLabel="Oss en Noordoost-Brabant"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Oss"
      heroSubtext="Op zoek naar werk in de bediening in Oss? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Oss"
      contextHeadingLead="Gastvrijheid zonder"
      contextHeadingAccent="poespas"
      contextParagraphs={[
        'Oss is een nuchtere Brabantse stad, gevormd door Organon en een lange industriële geschiedenis. Grote woorden zijn hier niet nodig, gewoon goede bediening die klopt. Dat wordt gewaardeerd door een publiek van inwoners en zakelijke bezoekers dat precies weet wat het wil.',
        'De wekelijkse markt trekt bezoekers uit de wijde omgeving en bedrijven in de life sciences en logistiek zorgen voor regelmatige zakelijke bijeenkomsten. Voor bedieningsprofessionals betekent dat afwisseling tussen een gewone drukke dienst en representatief werk voor een zakelijk gezelschap.',
        'Wij plaatsen ook in Uden, Veghel en de bredere regio Noordoost-Brabant, tot aan Den Bosch.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Oss?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oss of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Oss?', answer: 'Van lokale restaurants tot zakelijke bijeenkomsten en bedrijfsevenementen in Oss en de bredere regio Noordoost-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Oss?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Oss?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Oss: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Oss"
      formLocation="Vacature bediening Oss"
      relatedLinks={[
        { href: '/vacature-kok-oss', label: 'Kok in Oss' },
        { href: '/vacature-bediening-den-bosch', label: 'Bediening in Den Bosch' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
