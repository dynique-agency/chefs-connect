'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokValkenburgPage() {
  return (
    <CityFreelancerPage
      city="Valkenburg"
      regionLabel="Valkenburg en Zuid-Limburg"
      heroAccent="in Valkenburg"
      heroSubtext="Op zoek naar werk als kok in Valkenburg? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Valkenburg"
      contextHeadingLead="Een dorp dat"
      contextHeadingAccent="nooit stilstaat"
      contextParagraphs={[
        'Valkenburg heeft maar zo’n 16.000 inwoners, maar geldt als een van de populairste toeristenstadjes van Nederland. Rond de ruïne van Kasteel Valkenburg, de mergelgrotten van de Gemeentegrot en Fluweelengrot en kuuroord Thermae 2000 ligt een ongewoon dichte verzameling hotels, restaurants en cafés voor een plek van deze omvang. Voor een kok betekent dat gasten uit heel Nederland en ver daarbuiten, en keukens die variëren van traditionele Limburgse gerechten tot verfijnde kaarten voor een internationaal publiek.',
        'Het werk kent een uitgesproken ritme. Weekenden, vakantieperiodes en de kerstmarkten in de grotten, waarmee Valkenburg zichzelf "Kerststad" noemt, zorgen voor pieken die veel groter zijn dan je van een dorp van deze omvang zou verwachten. Voor freelance koks is dat een kans: juist in die drukke periodes is er vraag naar extra handen die meteen kunnen meedraaien.',
        'Wij plaatsen ook in Maastricht, Sittard-Geleen, Heerlen, Kerkrade en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Valkenburg?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Valkenburg of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Valkenburg?', answer: 'Van hotels en restaurants rond de grotten en het centrum tot extra bezetting tijdens de kerstmarkten en drukke toeristenweekenden in Valkenburg en de bredere regio Zuid-Limburg. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Valkenburg?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Valkenburg?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Valkenburg: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Valkenburg"
      formLocation="Vacature kok Valkenburg"
      relatedLinks={[
        { href: '/vacature-bediening-valkenburg', label: 'Bediening in Valkenburg' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-kok-heerlen', label: 'Kok in Heerlen' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
