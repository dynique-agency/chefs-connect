'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelSittardGeleenPage() {
  return (
    <CityStaffingPage
      city="Sittard-Geleen"
      regionLabel="Sittard-Geleen en Zuid-Limburg"
      heroAccent="in Sittard-Geleen?"
      heroSubtext="Van de statige horeca in het historische centrum van Sittard tot bedrijfscatering rond Chemelot: wij leveren ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend, zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Sittard-Geleen als horecagemeente"
      contextHeadingLead="Eén gemeente met"
      contextHeadingAccent="het karakter van twee steden"
      contextParagraphs={[
        'Sittard-Geleen is met ongeveer 92.000 inwoners een van de grotere gemeenten van Limburg, ontstaan uit de samenvoeging van Sittard en Geleen. Die schaal zorgt voor een gevarieerde horeca, van het sfeervolle historische centrum van Sittard tot de zaken rond Geleen.',
        'De aanwezigheid van Chemelot, een van de grootste chemie- en materialensites van Nederland, geeft de regio een stevig zakelijk en industrieel karakter. Dat betekent regelmatig vraag naar bedrijfscatering en diners naast de reguliere horeca.',
        'Wij zijn actief in Sittard-Geleen en plaatsen ook in Maastricht, Heerlen en de bredere regio Zuid-Limburg.',
      ]}
      whyHeadingLead="Wij kennen het verschil tussen"
      whyHeadingAccent="Chemelot en het centrum van Sittard"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen, maar weten wat iemand waard is als het erop aankomt.',
        'Een bedrijfsrestaurant of cateringopdracht rond Chemelot vraagt om een andere aanpak dan een druk terras in het historische centrum van Sittard. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Sittard-Geleen"
      formLocation="Personeel Sittard-Geleen"
      relatedLinks={[
        { href: '/personeel-heerlen', label: 'Kok inhuren Heerlen' },
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/limburg', label: 'Heel Limburg' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
    />
  );
}
