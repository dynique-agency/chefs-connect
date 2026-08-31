'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningRenessePage() {
  return (
    <CityFreelancerPage
      city="Renesse"
      regionLabel="Renesse en Schouwen-Duiveland"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Renesse"
      heroSubtext="Op zoek naar werk in de bediening in Renesse? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met strandpaviljoens, terrassen en horecazaken in de drukste badplaats van Schouwen-Duiveland. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Renesse"
      contextHeadingLead="Gastvrijheid tijdens"
      contextHeadingAccent="het drukste seizoen van de kust"
      contextParagraphs={[
        'Renesse telt maar zo’n 1.700 vaste inwoners, maar is de grootste en drukste badplaats van Schouwen-Duiveland en een van de populairste zomerbestemmingen van heel Zeeland, met een breed zandstrand en een levendig centrum vol horeca.',
        'De vele vakantieparken en campings rond het dorp zorgen in het hoogseizoen voor een golf van gasten. Terrassen en strandpaviljoens blijven dan tot ver na middernacht open, wat voor bedieningspersoneel lange, drukke diensten betekent, maar ook veel opdrachten in korte tijd.',
        'Wij plaatsen ook in Goes, Middelburg en de bredere regio Zeeland.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Renesse?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Renesse of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Renesse?', answer: 'Van strandpaviljoens en terrassen in het hoogseizoen tot restaurants en uitgaansgelegenheden in het centrum van Renesse en de bredere regio Schouwen-Duiveland. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Renesse?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Renesse?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Renesse: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Renesse"
      formLocation="Vacature bediening Renesse"
      relatedLinks={[
        { href: '/vacature-kok-renesse', label: 'Kok in Renesse' },
        { href: '/vacature-bediening-goes', label: 'Bediening in Goes' },
        { href: '/vacature-bediening-middelburg', label: 'Bediening in Middelburg' },
        { href: '/zeeland', label: 'Heel Zeeland' },
        { href: '/kennisbank/freelance-kok-worden', label: 'Freelance kok worden' },
      ]}
    />
  );
}
