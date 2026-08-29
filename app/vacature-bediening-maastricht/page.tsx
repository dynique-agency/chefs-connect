'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

const BEDIENING_FUNCTIONS = ['Gastheer / gastvrouw', 'Bedieningsmedewerker', 'Leidinggevende bediening', 'Sommelier', 'Barman / bartender', 'Runner', 'Anders'];

export default function VacatureBedieningMaastrichtPage() {
  return (
    <CityFreelancerPage
      city="Maastricht"
      regionLabel="Maastricht en Zuid-Limburg"
      heroLead="Vacature voor bediening"
      roleNoun="bedieningsmedewerker"
      functionOptions={BEDIENING_FUNCTIONS}
      heroAccent="in Maastricht"
      heroSubtext="Op zoek naar werk in de bediening in Maastricht? Wij verbinden freelance gastheren, gastvrouwen en bedieningsprofessionals met de mooiste locaties in de stad en regio. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Maastricht"
      contextHeadingLead="Gastvrijheid met een"
      contextHeadingAccent="internationaal karakter"
      contextParagraphs={[
        'Maastricht trekt het hele jaar door bezoekers van over de grens, van Belgische en Duitse dagjesmensen tot internationale studenten en congresgangers bij het MECC. Voor wie in de bediening werkt, betekent dat gasten met verschillende verwachtingen en talen, en het plezier om daar goed op in te spelen.',
        'Van de terrassen rond het Vrijthof tot verfijnde bediening bij besloten diners: de stad vraagt om service die net zo internationaal aanvoelt als de stad zelf. Voor een flexibele freelancer is er het hele jaar door werk.',
        'Wij plaatsen ook in Sittard-Geleen, Heerlen en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor bediening in Maastricht?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Maastricht of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik in de bediening verwachten in Maastricht?', answer: 'Van fine dining restaurants en boetiekhotels tot congressen bij het MECC, private dining en bruiloften in Maastricht en omstreken. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen, ook handig voor bediening." },
        { question: 'Wat verdien ik als freelance bediening in Maastricht?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met medewerkers bediening in Maastricht?', answer: 'Ja. Of je nu medewerker bediening, gastheer, gastvrouw of leidinggevende bediening bent in Maastricht: we bemiddelen op alle niveaus en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Bediening Maastricht"
      formLocation="Vacature bediening Maastricht"
      relatedLinks={[
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-bediening-venlo', label: 'Bediening in Venlo' },
        { href: '/vacature-bediening-hasselt', label: 'Bediening in Hasselt' },
      ]}
    />
  );
}
