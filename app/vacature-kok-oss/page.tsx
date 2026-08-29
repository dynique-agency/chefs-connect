'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokOssPage() {
  return (
    <CityFreelancerPage
      city="Oss"
      regionLabel="Oss en Noordoost-Brabant"
      heroAccent="in Oss"
      heroSubtext="Op zoek naar werk als kok in Oss? Wij verbinden freelance koks met de mooiste keukens in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Oss"
      contextHeadingLead="Waar hard werken"
      contextHeadingAccent="gewaardeerd wordt"
      contextParagraphs={[
        'Oss is een stevige Brabantse stad met een geschiedenis die nauw verweven is met Organon en de farmaceutische industrie. Het is eerder een werkende stad dan een toeristische trekpleister, met een horeca die vooral draait op inwoners en zakelijke bezoekers. Voor een kok betekent dat gasten die weten wat ze willen en het waarderen als het klopt.',
        'De wekelijkse markt in Oss geldt van oudsher als een van de grotere van Nederland, en bedrijven in de life sciences en logistiek zorgen voor een regelmatige stroom aan zakelijke lunches en diners. Genoeg afwisseling tussen een gewone drukke dienst en representatief werk voor een zakelijk gezelschap.',
        'Wij plaatsen ook in Uden, Veghel en de bredere regio Noordoost-Brabant, tot aan Den Bosch.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Oss?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Oss of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Oss?', answer: 'Van lokale restaurants en zakelijke lunches tot bedrijfsevenementen en catering in Oss en de bredere regio Noordoost-Brabant. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Oss?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Oss?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Oss: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Oss"
      formLocation="Vacature kok Oss"
      relatedLinks={[
        { href: '/vacature-bediening-oss', label: 'Bediening in Oss' },
        { href: '/vacature-kok-den-bosch', label: 'Kok in Den Bosch' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
