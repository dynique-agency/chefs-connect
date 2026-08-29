'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokRoermondPage() {
  return (
    <CityFreelancerPage
      city="Roermond"
      regionLabel="Roermond en Midden-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Roermond"
      heroSubtext="Op zoek naar werk als kok in Roermond? Wij verbinden freelance koks met keukens in de stad en de wijde regio Midden-Limburg, van drukke diensten rond Designer Outlet Roermond tot rustige zaken aan de Maasplassen. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Roermond"
      contextHeadingLead="Drukte die het hele"
      contextHeadingAccent="jaar doorgaat"
      contextParagraphs={[
        'Roermond mag met ongeveer 58.000 inwoners een compacte stad zijn, maar dat merk je niet aan de drukte in de keukens. Designer Outlet Roermond trekt bezoekers uit Duitsland, België en de rest van Nederland, en die stroom zorgt voor een horecavraag die veel groter is dan je van een stad van dit formaat zou verwachten.',
        'Als freelance kok kom je in Roermond terecht bij uiteenlopende keukens: van drukke zaken die profiteren van de outletbezoekers tot rustigere restaurants in de historische binnenstad en horeca rond de Maasplassen, waar in het vaarseizoen extra handen welkom zijn.',
        'Wij plaatsen ook in Weert en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Roermond?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Roermond of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Roermond?', answer: 'Van drukke keukens rond Designer Outlet Roermond tot restaurants in de binnenstad en horecazaken aan de Maasplassen. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Roermond?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Roermond?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Roermond: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Roermond"
      formLocation="Vacature kok Roermond"
      relatedLinks={[
        { href: '/vacature-bediening-roermond', label: 'Bediening in Roermond' },
        { href: '/vacature-kok-weert', label: 'Kok in Weert' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
