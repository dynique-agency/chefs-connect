'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokBestPage() {
  return (
    <CityFreelancerPage
      city="Best"
      regionLabel="Best en de Brainportregio"
      heroAccent="in Best"
      heroSubtext="Op zoek naar werk als kok in Best? Wij verbinden freelance koks met de mooiste keukens in de stad en de Brainportregio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Best"
      contextHeadingLead="Zakelijk en lokaal"
      contextHeadingAccent="door elkaar heen"
      contextParagraphs={[
        'Best is een compacte gemeente van ruim 30.000 inwoners, midden in de Brainportregio rond Eindhoven. Naast een overzichtelijk eigen centrum kent Best flink wat bedrijvigheid: kantoren, logistieke dienstverleners en maakindustrie langs de A2 en A58, onder meer op het bedrijventerrein Batadorp, vernoemd naar de schoenfabrikant Bata die hier ooit een grote fabriek had.',
        'Voor een kok betekent dat een prettige afwisseling. De ene dag sta je een bedrijfslunch of borrel voor een kantoor te verzorgen, de andere dag draai je een drukke dienst in een buurtzaak in het centrum van Best. Genoeg variatie om je vak breed te houden.',
        'Wij plaatsen ook in Eindhoven, Helmond en Tilburg, de bredere regio rond Best.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Best?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Best of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Best?', answer: 'Van lokale restaurants in het centrum van Best tot bedrijfslunches, borrels en catering voor kantoren en bedrijven in de Brainportregio. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Best?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Best?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Best: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Best"
      formLocation="Vacature kok Best"
      relatedLinks={[
        { href: '/vacature-bediening-best', label: 'Bediening in Best' },
        { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
