'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningSittardGeleenPage() {
  return (
    <CityFreelancerPage
      city="Sittard-Geleen"
      regionLabel="Sittard-Geleen en Zuid-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Sittard-Geleen"
      heroSubtext="Op zoek naar werk in de bediening in Sittard-Geleen? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met horecazaken in de regio, van het historische centrum van Sittard tot zakelijke locaties rond Chemelot. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Sittard-Geleen"
      contextHeadingLead="Gastvrijheid tussen"
      contextHeadingAccent="historie en industrie"
      contextParagraphs={[
        'Sittard-Geleen combineert de gezelligheid van het historische centrum van Sittard met een stevige zakelijke markt rond Chemelot. Voor bedieningsprofessionals betekent dat afwisseling tussen sfeervolle horecazaken en grotere bedrijfscatering.',
        "De gemeente telt zo'n 92.000 inwoners en is daarmee een van de grotere horecagemeenten van Limburg. Genoeg vaste zaken en evenementen om als freelancer het hele jaar door aan de slag te blijven.",
        'Wij plaatsen ook in Maastricht, Heerlen en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Sittard-Geleen?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Sittard-Geleen of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Sittard-Geleen?', answer: 'Van horecazaken in het centrum van Sittard tot bedrijfscatering en evenementen rond Chemelot en de bredere regio. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Sittard-Geleen?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Sittard-Geleen?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Sittard-Geleen: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Sittard-Geleen"
      formLocation="Vacature bediening Sittard-Geleen"
      relatedLinks={[
        { href: '/vacature-kok-sittard-geleen', label: 'Kok in Sittard-Geleen' },
        { href: '/vacature-bediening-heerlen', label: 'Bediening in Heerlen' },
        { href: '/vacature-bediening-maastricht', label: 'Bediening in Maastricht' },
      ]}
    />
  );
}
