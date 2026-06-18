'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokBredaPage() {
  return (
    <CityFreelancerPage
      city="Breda"
      regionLabel="Breda en West-Brabant"
      heroAccent="in Breda"
      heroSubtext="Op zoek naar werk als kok in Breda? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Breda"
      contextHeadingLead="Een stad met gastvrijheid"
      contextHeadingAccent="in het DNA"
      contextParagraphs={[
        'Breda heeft gastvrijheid in het DNA. Het historische centrum loopt vol zodra het terrasweer wordt, en de stad staat bekend om haar Bourgondische inslag. Voor een kok betekent dat een horeca die het hele jaar draait, met gasten die kwaliteit waarderen.',
        'De foodscene groeit en de stad bruist tijdens evenementen als Breda Jazz en het carnaval. Door de ligging vlak bij de Belgische grens is er bovendien een natuurlijke uitwisseling van smaken tussen Brabant en Vlaanderen. Genoeg afwisseling voor een freelancer.',
        'Wij plaatsen ook in Oosterhout, Etten-Leur en de bredere regio West-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Breda?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Breda of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Breda?', answer: 'Van fine dining restaurants en boetiekhotels tot grote evenementen, private dining en bruiloften in Breda en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Breda?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Breda"
      formLocation="Vacature kok Breda"
      relatedLinks={[
        { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
        { href: '/vacature-kok-den-bosch', label: 'Kok in Den Bosch' },
        { href: '/horecaspecialist', label: 'Word horecaspecialist' },
      ]}
    />
  );
}
