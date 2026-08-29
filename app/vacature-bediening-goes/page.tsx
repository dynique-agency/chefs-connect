'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningGoesPage() {
  return (
    <CityFreelancerPage
      city="Goes"
      regionLabel="Goes en Zuid-Beveland"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Goes"
      heroSubtext="Op zoek naar werk in de bediening in Goes? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Goes"
      contextHeadingLead="Gastvrijheid met"
      contextHeadingAccent="een streekkarakter"
      contextParagraphs={[
        'Goes is de hoofdplaats van Zuid-Beveland en het regionale uitgaanscentrum van de Bevelanden. Op een doordeweekse avond of een drukke zaterdag lopen de terrassen rond de Grote Markt en het monumentale Stadhuis vol met bezoekers uit de hele regio. Voor bediening betekent dat een levendige, afwisselende werkvloer midden in het centrum.',
        'Waar Middelburg en Vlissingen vooral toeristen trekken, draait Goes op een trouw, regionaal publiek dat gericht de stad in komt voor een avondje uit. Gasten komen vaker terug en onthouden waar het klopte, wat bediening de kans geeft om echt een band op te bouwen in plaats van alleen snel te bedienen en door te gaan.',
        'Wij plaatsen ook in Middelburg, Vlissingen en de bredere regio Zuid-Beveland en Walcheren.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Goes?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Goes of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Goes?', answer: 'Van lokale restaurants tot zakelijke bijeenkomsten en bedrijfsevenementen in Goes en de bredere regio Zuid-Beveland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Goes?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Goes?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Goes: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Goes"
      formLocation="Vacature bediening Goes"
      relatedLinks={[
        { href: '/vacature-kok-goes', label: 'Kok in Goes' },
        { href: '/vacature-bediening-middelburg', label: 'Bediening in Middelburg' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
