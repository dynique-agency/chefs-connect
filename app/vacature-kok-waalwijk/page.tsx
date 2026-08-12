'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokWaalwijkPage() {
  return (
    <CityFreelancerPage
      city="Waalwijk"
      regionLabel="Waalwijk en Midden-Brabant"
      heroAccent="in Waalwijk"
      heroSubtext="Op zoek naar werk als kok in Waalwijk? Wij verbinden freelance koks met restaurants, cateraars en evenementen in Waalwijk en de regio Midden-Brabant. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Waalwijk"
      contextHeadingLead="Bekend om schoenen,"
      contextHeadingAccent="en meer dan dat"
      contextParagraphs={[
        'Waalwijk staat al generaties lang bekend als de schoenenstad van Nederland. De schoenindustrie is grotendeels verdwenen, maar het verhaal leeft voort in het Schoenenkwartier, het museum dat de geschiedenis van leer en schoenen in de Langstraat laat zien. Met zo’n 48.000 inwoners is Waalwijk een plaats waar iedereen elkaar een beetje kent.',
        'Voor een kok betekent de nabijheid van de Efteling extra afwisseling: naast de lokale zaken in Waalwijk zelf is er volop werk bij hotels, cateraars en evenementenlocaties rond het park.',
        'Wij zijn actief in Waalwijk en plaatsen ook in Tilburg en de bredere regio Midden-Brabant.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Waalwijk?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Waalwijk of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Waalwijk?', answer: 'Van restaurants in de schoenenstad tot cateringopdrachten en evenementen rond de Efteling, in Waalwijk en de bredere regio Midden-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Waalwijk?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Waalwijk"
      formLocation="Vacature kok Waalwijk"
      relatedLinks={[
        { href: '/vacature-bediening-waalwijk', label: 'Bediening in Waalwijk' },
        { href: '/vacature-kok-tilburg', label: 'Kok in Tilburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
