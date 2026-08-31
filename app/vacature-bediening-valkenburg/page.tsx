'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningValkenburgPage() {
  return (
    <CityFreelancerPage
      city="Valkenburg"
      regionLabel="Valkenburg en Zuid-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Valkenburg"
      heroSubtext="Op zoek naar werk in de bediening in Valkenburg? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Valkenburg"
      contextHeadingLead="Gastvrijheid op"
      contextHeadingAccent="topdrukte"
      contextParagraphs={[
        'Valkenburg heeft maar zo’n 16.000 inwoners, maar ontvangt jaarlijks miljoenen bezoekers rond de ruïne van Kasteel Valkenburg, de mergelgrotten en kuuroord Thermae 2000. Voor bedieningsprofessionals betekent dat een ongewoon hoge dichtheid aan hotels, restaurants en cafés, met gasten die vaak voor één dag of weekend komen en dus recht hebben op een goede eerste indruk.',
        'Het publiek wisselt sterk met de seizoenen. Weekenden, vakantieperiodes en vooral de kerstmarkten in de grotten, waarmee Valkenburg zichzelf "Kerststad" noemt, zorgen voor drukte die ver uitstijgt boven wat je van een dorp van deze omvang zou verwachten. Voor freelance bediening is dat precies het moment om aan de slag te gaan, wanneer horecazaken extra handen nodig hebben die de drukte aankunnen.',
        'Wij plaatsen ook in Maastricht, Sittard-Geleen, Heerlen, Kerkrade en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Valkenburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Valkenburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Valkenburg?', answer: 'Van hotels en restaurants rond de grotten tot extra bezetting tijdens de kerstmarkten en drukke toeristenweekenden in Valkenburg en de bredere regio Zuid-Limburg. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Valkenburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Valkenburg?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Valkenburg: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Valkenburg"
      formLocation="Vacature bediening Valkenburg"
      relatedLinks={[
        { href: '/vacature-kok-valkenburg', label: 'Kok in Valkenburg' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
        { href: '/vacature-bediening-heerlen', label: 'Bediening in Heerlen' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
