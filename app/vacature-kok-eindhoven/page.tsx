'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokEindhovenPage() {
  return (
    <CityFreelancerPage
      city="Eindhoven"
      regionLabel="Eindhoven en Noord-Brabant"
      heroAccent="in Eindhoven"
      heroSubtext="Op zoek naar werk als kok in Eindhoven? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Eindhoven"
      contextHeadingLead="Een stad waar de keuken"
      contextHeadingAccent="in beweging is"
      contextParagraphs={[
        'Eindhoven is in korte tijd een serieuze horecastad geworden. De scene rondom Strijp-S en het centrum is flink gegroeid, met concepten die durven en gasten die kwaliteit verwachten. Voor een kok betekent dat afwisseling en plekken waar je je vak echt kwijt kunt.',
        'Daarbij is het een drukke evenementen- en bedrijvenstad. De Brainport-regio organiseert het hele jaar door events waar catering een serieuze rol speelt. Als freelance kok zit je hier zelden zonder werk, mits je het tempo en de kwaliteit aankunt.',
        'Wij plaatsen ook in Helmond, Veldhoven en de bredere regio Noord-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Eindhoven?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Eindhoven of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Eindhoven?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Eindhoven en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Eindhoven?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Eindhoven?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Eindhoven: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Eindhoven"
      formLocation="Vacature kok Eindhoven"
      relatedLinks={[
        { href: '/vacature-kok-helmond', label: 'Kok in Helmond' },
        { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
        { href: '/vacature-kok-den-bosch', label: 'Kok in Den Bosch' },
      ]}
    />
  );
}
