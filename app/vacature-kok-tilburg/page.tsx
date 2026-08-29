'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokTilburgPage() {
  return (
    <CityFreelancerPage
      city="Tilburg"
      regionLabel="Tilburg en Midden-Brabant"
      heroAccent="in Tilburg"
      heroSubtext="Op zoek naar werk als kok in Tilburg? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Tilburg"
      contextHeadingLead="Een stad met een eigen"
      contextHeadingAccent="culinaire smaak"
      contextParagraphs={[
        'Tilburg heeft de afgelopen jaren een eigen culinaire identiteit ontwikkeld. Rondom de Piushaven en in het centrum zijn concepten ontstaan die durven, met een publiek dat weet wat het wil. Voor een kok is het een stad waar je je kunt onderscheiden.',
        'Het is bovendien een uitgesproken festival- en studentenstad. Rondom 013, de Spoorzone en evenementen als Roadburn en Festival Mundial zijn er pieken waarin de hele horeca op volle toeren draait. Voor een flexibele freelancer is er werk genoeg, het hele jaar door.',
        'Wij plaatsen ook in Waalwijk, Oisterwijk en de bredere regio Midden-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Tilburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Tilburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Tilburg?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Tilburg en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Tilburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Tilburg?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Tilburg: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Tilburg"
      formLocation="Vacature kok Tilburg"
      relatedLinks={[
        { href: '/vacature-kok-eindhoven', label: 'Kok in Eindhoven' },
        { href: '/vacature-kok-breda', label: 'Kok in Breda' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
