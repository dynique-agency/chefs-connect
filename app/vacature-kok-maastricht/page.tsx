'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokMaastrichtPage() {
  return (
    <CityFreelancerPage
      city="Maastricht"
      regionLabel="Maastricht en Zuid-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Maastricht"
      heroSubtext="Op zoek naar werk als kok in Maastricht? Wij verbinden freelance koks met de mooiste keukens van de stad en regio Zuid-Limburg. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Maastricht"
      contextHeadingLead="Een keukenstad met"
      contextHeadingAccent="internationale allure"
      contextParagraphs={[
        'Maastricht heeft een van de dichtste concentraties fine dining en gastronomie van Nederland, van de restaurants rond het Vrijthof tot verfijnde concepten in de Jekerkwartier. Voor een freelance kok betekent dat afwisseling op niveau, het hele jaar door.',
        'Door de ligging vlak bij België en Duitsland en het MECC als groot congrescentrum is er naast de vaste horeca ook doorlopend vraag rond evenementen, congressen en internationale gezelschappen. Wie flexibel is, hoeft in Maastricht nooit stil te zitten.',
        'Wij plaatsen ook in Sittard-Geleen, Heerlen en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Maastricht?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Maastricht of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Maastricht?', answer: 'Van fine dining restaurants en boetiekhotels tot congressen bij het MECC, private dining en bruiloften in Maastricht en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Maastricht?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Maastricht?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Maastricht: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Maastricht"
      formLocation="Vacature kok Maastricht"
      relatedLinks={[
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
        { href: '/vacature-kok-venlo', label: 'Kok in Venlo' },
        { href: '/vacature-kok-hasselt', label: 'Kok in Hasselt' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
