'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokVenloPage() {
  return (
    <CityFreelancerPage
      city="Venlo"
      regionLabel="Venlo en Noord-Limburg"
      heroAccent="in Venlo"
      heroSubtext="Op zoek naar werk als kok in Venlo? Wij verbinden freelance chefs met de mooiste restaurants en events in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Venlo"
      contextHeadingLead="De regionale hoofdstad"
      contextHeadingAccent="van Noord-Limburg"
      contextParagraphs={[
        'Venlo is de regionale hoofdstad van Noord-Limburg en profiteert van zijn ligging vlak bij de Duitse grens. Dat zorgt voor een internationaal publiek en een horeca die gewend is aan uiteenlopende smaken en verwachtingen.',
        'Sinds de Floriade heeft de stad geïnvesteerd in een groenere, aantrekkelijkere binnenstad, met restaurants die daarop inspelen. Het tempo ligt hier iets rustiger dan in grote steden, maar de kwaliteitseisen zijn niet minder.',
        'Wij zijn actief in Venlo en plaatsen ook in Maastricht en de bredere regio Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Venlo?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Venlo of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Venlo?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Venlo en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Venlo?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Werken jullie ook richting Maastricht en Duitsland?', answer: 'Ja, wij zijn actief in heel Limburg en plaatsen ook grensoverschrijdend. Ben je bereid iets verder te reizen, dan vergroot dat je kansen op passende opdrachten.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Venlo"
      formLocation="Vacature kok Venlo"
      relatedLinks={[
        { href: '/vacature-bediening-venlo', label: 'Bediening in Venlo' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
      ]}
    />
  );
}
