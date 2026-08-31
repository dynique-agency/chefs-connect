'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokEchtPage() {
  return (
    <CityFreelancerPage
      city="Echt"
      regionLabel="Echt en Midden-Limburg"
      heroLead="Werk als freelance kok"
      heroAccent="in Echt"
      heroSubtext="Op zoek naar werk als kok in Echt? Wij verbinden freelance koks met dorpsrestaurants, cafés en feestlocaties in Echt-Susteren en de bredere regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Echt"
      contextHeadingLead="Kleinschalige horeca"
      contextHeadingAccent="met een eigen tempo"
      contextParagraphs={[
        'Echt is de grootste kern van de gemeente Echt-Susteren, met ruim 30.000 inwoners in de hele gemeente en een ligging in Midden-Limburg, vlak bij de Duitse grens. Het is een landelijke omgeving, ver van de hectiek van een grote stad.',
        'De horeca in en rond Echt is kleinschaliger dan in een stad als Roermond, maar wel constant: dorpsrestaurants, cafés en feestlocaties die dankzij landbouw, tuinbouw en de lokale industrie in de regio het hele jaar door bezet zijn met bruiloften, jubilea en andere gelegenheden. Voor een zelfstandig werkende kok is dat een prettige, afwisselende basis.',
        'Wij plaatsen ook in Roermond en Weert en de bredere regio Midden-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Echt?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Echt of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Echt?', answer: 'Van dorpsrestaurants en cafés in Echt tot feestlocaties voor bruiloften en jubilea in de gemeente Echt-Susteren. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Echt?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks of zelfstandig werkend koks in Echt?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent in Echt: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Echt"
      formLocation="Vacature kok Echt"
      relatedLinks={[
        { href: '/vacature-bediening-echt', label: 'Bediening in Echt' },
        { href: '/vacature-kok-roermond', label: 'Kok in Roermond' },
        { href: '/vacature-kok-weert', label: 'Kok in Weert' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
