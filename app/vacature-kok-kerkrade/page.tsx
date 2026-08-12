'use client';

import CityFreelancerPage from '@/components/locations/CityFreelancerPage';

export default function VacatureKokKerkradePage() {
  return (
    <CityFreelancerPage
      city="Kerkrade"
      regionLabel="Kerkrade en Zuid-Limburg / Parkstad"
      heroLead="Werk als freelance kok"
      heroAccent="in Kerkrade"
      heroSubtext="Op zoek naar werk als kok in Kerkrade? Wij verbinden freelance koks met keukens in de stad en de Parkstad regio, inclusief de piekdrukte rond grote evenementen. Schrijf je één keer in, het werk komt naar jou."
      contextEyebrow="Werken in Kerkrade"
      contextHeadingLead="Koken in het hart"
      contextHeadingAccent="van de Parkstad regio"
      contextParagraphs={[
        'Kerkrade telt ongeveer 44.000 inwoners en ligt in Parkstad Limburg, direct tegen de Duitse grens. Samen met het Duitse Herzogenrath vormt de stad vrijwel één stedelijk gebied, met horeca aan beide kanten van de grens en gasten die net zo makkelijk in het Duits als in het Nederlands bestellen.',
        "Om de paar jaar draait de stad op volle toeren tijdens het World Music Contest, een internationaal concours voor brassbands en orkesten dat bezoekers uit heel Europa trekt. Voor een freelance kok betekent dat, naast het gewone werk in restaurants en zalen in Kerkrade en Heerlen, ook de kans om mee te draaien tijdens zo'n grootschalig evenement.",
        'Wij plaatsen ook in Maastricht en de bredere regio Zuid-Limburg.',
      ]}
      faq={[
        { question: 'Hebben jullie vacatures voor koks in Kerkrade?', answer: 'Wij werken niet met losse vacatures. Je schrijft je één keer in en wij benaderen je zodra er een passende opdracht in Kerkrade of de regio is. Zo hoef je niet eindeloos te solliciteren.' },
        { question: 'Wat voor opdrachten kan ik als kok verwachten in Kerkrade?', answer: 'Van reguliere restaurants en zalen in Kerkrade en de Parkstad regio tot extra drukte rond evenementen zoals het World Music Contest. We stemmen de opdrachten af op jouw ervaring en voorkeuren.' },
        { question: "Moet ik zzp'er zijn om via Chefs Connect te werken?", answer: "Ja, je werkt als zelfstandige. Ben je nog niet ingeschreven? In ons artikel 'Freelance kok worden' lees je stap voor stap hoe je begint met een KvK-inschrijving, btw en verzekeringen." },
        { question: 'Wat verdien ik als freelance kok in Kerkrade?', answer: 'Dat hangt af van je functie, ervaring en de opdracht. Wij werken met marktconforme tarieven en zijn daar vooraf transparant over.' },
        { question: 'Hoe snel kan ik aan de slag?', answer: 'Na je aanmelding nemen we vaak binnen 48 uur contact op. In de meeste gevallen kunnen we binnen één tot twee weken een eerste passende opdracht voorstellen.' },
        { question: 'Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?', answer: 'Ja. Of je nu chefkok, zelfstandig werkend kok, executive chef of hulpkok bent: we bemiddelen op alle niveaus in de keuken en stemmen de opdracht af op jouw functie en ervaring.' },
      ]}
      formSubject="Chefs Connect: Aanmelding Freelance Kok Kerkrade"
      formLocation="Vacature kok Kerkrade"
      relatedLinks={[
        { href: '/vacature-bediening-kerkrade', label: 'Bediening in Kerkrade' },
        { href: '/vacature-kok-maastricht', label: 'Kok in Maastricht' },
        { href: '/vacature-kok-roermond', label: 'Kok in Roermond' },
        { href: '/vacature-instellingskok', label: 'Instellingskok' },
      ]}
    />
  );
}
