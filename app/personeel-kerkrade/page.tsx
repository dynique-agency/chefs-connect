'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelKerkradePage() {
  return (
    <CityStaffingPage
      city="Kerkrade"
      regionLabel="Kerkrade en Zuid-Limburg / Parkstad"
      heroAccent="in Kerkrade?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau in Kerkrade, van een gewone drukke dienst tot de piekdagen rond een groot evenement. Snel geregeld, goed gescreend."
      contextEyebrow="Kerkrade als horecastad"
      contextHeadingLead="Een stad die verder"
      contextHeadingAccent="reikt dan de grens"
      contextParagraphs={[
        'Kerkrade telt ongeveer 44.000 inwoners en is een voormalige mijnstad in het hart van Parkstad Limburg. De stad grenst direct aan Duitsland en vormt samen met het Duitse Herzogenrath vrijwel één aaneengesloten stedelijk gebied, waar inwoners dagelijks over en weer gaan om te werken, winkelen en uit eten.',
        'Om de paar jaar is Kerkrade gastheer van het World Music Contest, een groot internationaal concours voor brassbands, harmonieorkesten en fanfares dat bezoekers en muzikanten uit heel Europa naar de stad trekt. Dat soort evenementen zet de lokale horeca in korte tijd flink onder druk.',
        'Wij zijn actief in Kerkrade en de bredere regio Parkstad, met plaatsingen tot in Heerlen en de rest van Zuid-Limburg.',
      ]}
      whyHeadingLead="Wij schakelen snel,"
      whyHeadingAccent="ook als het drukker wordt"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het erop aankomt.',
        'Een grensregio als Parkstad, met pieken rond evenementen zoals het World Music Contest en een grensoverschrijdend publiek uit Duitsland, vraagt om personeel dat zich snel aanpast. Dat verschil kennen wij, en daar matchen we op.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Kerkrade"
      formLocation="Personeel Kerkrade"
      relatedLinks={[
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/personeel-roermond', label: 'Kok inhuren Roermond' },
        { href: '/zoek-personeel', label: "Alle regio's" },
      ]}
    />
  );
}
