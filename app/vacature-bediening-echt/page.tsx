'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningEchtPage() {
  return (
    <CityFreelancerPage
      city="Echt"
      regionLabel="Echt en Midden-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Echt"
      heroSubtext="Op zoek naar werk in de bediening in Echt? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in Echt-Susteren en de bredere regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Echt"
      contextHeadingLead="Gastvrijheid voor"
      contextHeadingAccent="een vertrouwde, lokale kring"
      contextParagraphs={[
        'Echt is de grootste kern van de gemeente Echt-Susteren, met ruim 30.000 inwoners in de hele gemeente, dicht bij de Duitse grens in Midden-Limburg. Het is een rustige, landelijke omgeving zonder de drukte van een grote stad.',
        'De horeca in en rond Echt is kleinschaliger dan in de grotere Limburgse steden, maar wel constant: dorpsrestaurants, cafés en feestlocaties die dankzij bruiloften, jubilea en andere lokale gelegenheden het hele jaar door bezet zijn. Voor bedieningspersoneel betekent dat vaak een directe band met vaste gasten in plaats van een anonieme stroom toeristen.',
        'Wij plaatsen ook in Roermond en Weert en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Echt?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Echt of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Echt?', answer: 'Van dorpsrestaurants en cafés in Echt tot bruiloften en feesten op locaties in de gemeente Echt-Susteren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Echt?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Echt?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Echt: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Echt"
      formLocation="Vacature bediening Echt"
      relatedLinks={[
        { href: '/vacature-kok-echt', label: 'Kok in Echt' },
        { href: '/vacature-bediening-roermond', label: 'Bediening in Roermond' },
        { href: '/vacature-bediening-weert', label: 'Bediening in Weert' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
