'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningRoermondPage() {
  return (
    <CityFreelancerPage
      city="Roermond"
      regionLabel="Roermond en Midden-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Roermond"
      heroSubtext="Op zoek naar werk in de bediening in Roermond? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Roermond"
      contextHeadingLead="Gastvrijheid voor gasten"
      contextHeadingAccent="van over de grens"
      contextParagraphs={[
        'Roermond trekt dankzij Designer Outlet Roermond het hele jaar door bezoekers uit Duitsland, België en de rest van Nederland. Voor wie in de bediening werkt betekent dat gasten met verschillende achtergronden en verwachtingen, en de kans om daar met gemak op in te spelen.',
        'Van de terrassen in de historische binnenstad tot horecazaken aan de Maasplassen in het vaarseizoen: de vraag naar goede bediening in Roermond reikt verder dan de ongeveer 58.000 inwoners van de stad zelf zou doen vermoeden.',
        'Wij plaatsen ook in Weert en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Roermond?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Roermond of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Roermond?', answer: 'Van terrassen en restaurants in de binnenstad tot horecazaken rond de Maasplassen en drukke dagen dankzij bezoekers van Designer Outlet Roermond. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Roermond?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Roermond?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Roermond: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Roermond"
      formLocation="Vacature bediening Roermond"
      relatedLinks={[
        { href: '/vacature-kok-roermond', label: 'Kok in Roermond' },
        { href: '/vacature-bediening-weert', label: 'Bediening in Weert' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
      ]}
    />
  );
}
