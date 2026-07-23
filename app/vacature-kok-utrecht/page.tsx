'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokUtrechtPage() {
  return (
    <CityFreelancerPage
      city="Utrecht"
      regionLabel="Utrecht en Midden-Nederland"
      heroAccent="in Utrecht"
      heroSubtext="Op zoek naar werk als kok in Utrecht? Wij verbinden freelance chefs met de mooiste restaurants, hotels en events in de stad. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Utrecht"
      contextHeadingLead="Een stad die groeit"
      contextHeadingAccent="in tempo én smaak"
      contextParagraphs={[
        'Utrecht heeft de afgelopen jaren een indrukwekkende horeca-ontwikkeling doorgemaakt. Rond de grachten en in wijken als Wittevrouwen en Lombok zijn concepten ontstaan die landelijk de aandacht trekken, met gasten die precies weten wat kwaliteit is.',
        'Als grootste studentenstad van Nederland en met een centrale ligging middenin het land, is Utrecht bovendien een populaire locatie voor congressen en zakelijke events. Dat zorgt voor een constante, afwisselende vraag naar koks.',
        'Wij zijn actief in Utrecht en plaatsen ook in de bredere regio Midden-Nederland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Utrecht?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Utrecht of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Utrecht?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Utrecht en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Utrecht?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Utrecht"
      formLocation="Vacature kok Utrecht"
      relatedLinks={[
        { href: '/vacature-bediening-utrecht', label: 'Bediening in Utrecht' },
        { href: '/vacature-kok-houten', label: 'Kok in Houten' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
