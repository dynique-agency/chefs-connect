'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelValkenburgPage() {
  return (
    <CityStaffingPage
      city="Valkenburg"
      regionLabel="Valkenburg en Zuid-Limburg"
      heroAccent="in Valkenburg?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien, ook op de drukste toeristenweekenden."
      contextEyebrow="Valkenburg als horecastad"
      contextHeadingLead="Een dorp dat"
      contextHeadingAccent="draait als een grote stad"
      contextParagraphs={[
        'Valkenburg telt maar zo’n 16.000 inwoners, maar is een van de populairste toeristenstadjes van Nederland. De ruïne van Kasteel Valkenburg torent midden in het centrum boven de straten uit, en onder de grond trekken de Gemeentegrot en de Fluweelengrot met hun mergelgangen jaarlijks miljoenen bezoekers. Tel daar kuuroord Thermae 2000 en het glooiende Zuid-Limburgse heuvellandschap bij op, en het is duidelijk waarom Valkenburg voor zijn omvang een buitengewoon hoge dichtheid aan hotels, restaurants en cafés heeft.',
        'Die schaal brengt een eigen ritme met zich mee. Weekenden, vakantieperiodes en vooral de kerstmarkten in de grotten, waarmee Valkenburg zichzelf terecht "Kerststad" noemt, zorgen voor pieken die in geen verhouding staan tot het aantal inwoners. Een keuken die op een doordeweekse dinsdag rustig aan kan, draait in een decemberweekend op volle kracht. Dat vraagt om personeel dat op afroep beschikbaar is en meteen mee kan draaien.',
        'Wij zijn actief in Valkenburg en plaatsen ook in Maastricht, Sittard-Geleen, Heerlen, Kerkrade en de bredere regio Zuid-Limburg.',
      ]}
      whyHeadingLead="Wij kennen het ritme"
      whyHeadingAccent="van een toeristenstad"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen, maar weten wat iemand waard is als een drukke kerstmarktdag om extra handen vraagt.',
        'Een besloten diner in een hotel bij de grotten vraagt iets anders dan een volle terrasdienst in het centrum tijdens een zonnig weekend. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Valkenburg"
      formLocation="Personeel Valkenburg"
      relatedLinks={[
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/personeel-heerlen', label: 'Kok inhuren Heerlen' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok leveren in Valkenburg?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Valkenburg en de regio Zuid-Limburg.' },
        { question: 'Welke koks kunnen jullie leveren in Valkenburg?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en horecazaken rond de grotten en het centrum van Valkenburg.' },
        { question: 'Is Chefs Connect ook actief buiten Valkenburg?', answer: 'Ja, wij plaatsen ook in Maastricht, Sittard-Geleen, Heerlen, Kerkrade en de bredere regio Zuid-Limburg.' },
      ]}
    />
  );
}
