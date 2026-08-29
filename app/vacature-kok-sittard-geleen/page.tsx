'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokSittardGeleenPage() {
  return (
    <CityFreelancerPage
      city="Sittard-Geleen"
      regionLabel="Sittard-Geleen en Zuid-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Sittard-Geleen"
      heroSubtext="Op zoek naar werk als kok in Sittard-Geleen? Wij verbinden freelance koks met keukens in de regio, van de horeca in het historische centrum van Sittard tot bedrijfscatering rond Chemelot. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Sittard-Geleen"
      contextHeadingLead="Werken tussen"
      contextHeadingAccent="historie en industrie"
      contextParagraphs={[
        'Sittard-Geleen is een van de grotere gemeenten van Limburg, ontstaan uit de samenvoeging van Sittard en Geleen. Voor een freelance kok betekent dat een gevarieerd werkgebied, van sfeervolle horeca in het historische centrum van Sittard tot grotere keukens elders in de gemeente.',
        'De aanwezigheid van Chemelot, een van de belangrijkste chemie- en materialensites van Nederland, zorgt voor een stevige zakelijke markt naast de reguliere horeca, denk aan bedrijfscatering en diners. Voor wie flexibel inzetbaar is, betekent dat extra opdrachten naast het vaste restaurantwerk.',
        'Wij plaatsen ook in Maastricht, Heerlen en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Sittard-Geleen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Sittard-Geleen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Sittard-Geleen?', answer: 'Van horeca in het historische centrum van Sittard tot bedrijfscatering rond Chemelot en evenementen in de bredere regio. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Sittard-Geleen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Sittard-Geleen?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Sittard-Geleen: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Sittard-Geleen"
      formLocation="Vacature kok Sittard-Geleen"
      relatedLinks={[
        { href: '/vacature-bediening-sittard-geleen', label: 'Bediening in Sittard-Geleen' },
        { href: '/vacature-kok-heerlen', label: 'Kok in Heerlen' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
