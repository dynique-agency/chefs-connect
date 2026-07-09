'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelUtrechtPage() {
  return (
    <CityStaffingPage
      city="Utrecht"
      regionLabel="Utrecht en Midden-Nederland"
      heroAccent="in Utrecht?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Utrecht als horecastad"
      contextHeadingLead="Een stad die groeit"
      contextHeadingAccent="in tempo én smaak"
      contextParagraphs={[
        'Utrecht heeft de afgelopen jaren een indrukwekkende horeca-ontwikkeling doorgemaakt. Rond de grachten en in wijken als Wittevrouwen en Lombok zijn concepten ontstaan die landelijk de aandacht trekken, met gasten die precies weten wat kwaliteit is.',
        'Als grootste studentenstad van Nederland en met een centrale ligging middenin het land, is Utrecht bovendien een populaire locatie voor congressen en zakelijke events. Dat zorgt voor een constante, afwisselende vraag naar goed keukenpersoneel.',
        'Wij zijn actief in Utrecht en plaatsen ook in de bredere regio Midden-Nederland.',
      ]}
      whyHeadingLead="Wij sturen je mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een concept in de Utrechtse binnenstad met een jong publiek vraagt iets anders dan een zakelijk congres net buiten de stad. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Utrecht"
      formLocation="Personeel Utrecht"
      relatedLinks={[
        { href: '/personeel-nijmegen', label: 'Kok inhuren Nijmegen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
