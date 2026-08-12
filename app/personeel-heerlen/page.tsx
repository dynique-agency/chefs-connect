'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelHeerlenPage() {
  return (
    <CityStaffingPage
      city="Heerlen"
      regionLabel="Heerlen en Oostelijk Zuid-Limburg"
      heroAccent="in Heerlen?"
      heroSubtext="Van gezellige horeca in het centrum van Heerlen tot zakelijke catering in de regio Parkstad: wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Heerlen als horecastad"
      contextHeadingLead="Van mijnstad tot"
      contextHeadingAccent="moderne dienstenstad"
      contextParagraphs={[
        'Heerlen telt ongeveer 86.000 inwoners en was ooit het kloppend hart van de Nederlandse steenkolenwinning. Sinds de mijnen in de vorige eeuw sloten, heeft de stad zich opnieuw uitgevonden met een sterke focus op detailhandel, onderwijs en dienstverlening.',
        'Als centrum van de Oostelijke Mijnstreek en vlak bij de Duitse grens trekt Heerlen bezoekers uit de wijde regio en van over de grens. Dat zorgt voor een horeca die met die diversiteit weet om te gaan, van gezellige eetcafés tot zakelijke gelegenheden.',
        'Wij zijn actief in Heerlen en plaatsen ook in Sittard-Geleen, Maastricht en de bredere regio Zuid-Limburg.',
      ]}
      whyHeadingLead="Wij begrijpen een stad"
      whyHeadingAccent="die zich steeds opnieuw uitvindt"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen, maar weten wat iemand waard is als het erop aankomt.',
        'Een zakelijke gelegenheid in het centrum van Heerlen vraagt om een andere aanpak dan een familiezaak net over de grens richting Duitsland. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Heerlen"
      formLocation="Personeel Heerlen"
      relatedLinks={[
        { href: '/personeel-sittard-geleen', label: 'Kok inhuren Sittard-Geleen' },
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
