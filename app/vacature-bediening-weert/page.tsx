'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningWeertPage() {
  return (
    <CityFreelancerPage
      city="Weert"
      regionLabel="Weert en Midden-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Weert"
      heroSubtext="Op zoek naar werk in de bediening in Weert? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Weert"
      contextHeadingLead="Gastvrijheid voor een"
      contextHeadingAccent="trouwe, lokale kring"
      contextParagraphs={[
        'Weert heeft geen grote toeristische trekpleister die de horeca overspoelt. In plaats daarvan bouwt de stad, met ongeveer 50.000 inwoners, op een vaste kring gasten en bedrijven uit de regio die het hele jaar door voor drukte zorgen.',
        'De landbouw en logistieke bedrijven rond Weert zorgen voor regelmatige zakelijke bijeenkomsten, borrels en feesten naast de reguliere bediening in restaurants en cafés. Voor bedieningspersoneel betekent dat afwisseling tussen representatieve zakelijke gelegenheden en een ontspannen avond op het terras.',
        'Wij plaatsen ook in Roermond en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Weert?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Weert of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Weert?', answer: 'Van terrassen en restaurants in het centrum tot zakelijke borrels en feesten bij bedrijven in de landbouw en logistieke regio rond Weert. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Weert?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Weert?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Weert: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Weert"
      formLocation="Vacature bediening Weert"
      relatedLinks={[
        { href: '/vacature-kok-weert', label: 'Kok in Weert' },
        { href: '/vacature-bediening-roermond', label: 'Bediening in Roermond' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
      ]}
    />
  );
}
