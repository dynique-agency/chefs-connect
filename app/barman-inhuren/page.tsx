'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function BarmanInhurenPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Een ervaren barman"
      heroAccent="voor uw feest"
      heroSubtext="Wij verbinden u met een ervaren, zelfstandig barman die de bar tijdens uw feest of evenement verzorgt, inclusief cocktails, van verjaardag en housewarming tot bedrijfsborrel."
      introEyebrow="Geen wachtrij, wel een goed glas"
      introHeadingLead="Het verschil tussen zelf tappen en"
      introHeadingAccent="echt bediend worden"
      introParagraphs={[
        'Een feest staat of valt met de sfeer aan de bar. Zelf tappen en schenken tussen het gastheerschap door betekent vaak lange wachtrijen en een gastheer die zelf nauwelijks aan het feesten toekomt. Een eigen barman lost dat op, met professionele bediening en een vlotte doorstroom, de hele avond door.',
        'Onze barmen verzorgen niet alleen bier en wijn, maar ook cocktails op maat, van klassiekers tot een eigen signature drink voor de gelegenheid. Geschikt voor zowel particuliere feesten thuis of in de tuin, als zakelijke borrels en recepties.',
        'Elke aanvraag is anders, een verjaardag voor twintig gasten vraagt om iets anders dan een bedrijfsborrel voor honderd man. Daarom stellen wij per gelegenheid een passende barman voor, afgestemd op uw locatie, gezelschap en wensen.',
      ]}
      offeringsHeading="Voor elk feest een eigen bar"
      offeringsIntro="Van een verjaardag in de tuin tot een grote bedrijfsborrel, wij verbinden u met een barman die past bij uw feest."
      offerings={[
        { title: 'Verjaardagsfeest', description: 'Een eigen barman voor uw verjaardag, zodat u zelf ook kunt genieten in plaats van achter de bar te staan.' },
        { title: 'Housewarming & tuinfeest', description: 'Professionele bediening bij u thuis of in de tuin, inclusief opbouw van een eigen bar.' },
        { title: 'Bedrijfsborrel', description: 'Ontvang collega’s of relaties met vlotte, professionele bediening tijdens een zakelijke borrel of receptie.' },
        { title: 'Bruiloft', description: 'Een barman die de hele avond zorgt voor een soepele bar, van het aperitief tot het feest na het diner.' },
        { title: 'Cocktailbar op maat', description: 'Een eigen cocktailkaart samengesteld voor uw gelegenheid, geserveerd door een ervaren barman.' },
        { title: 'Besloten feest', description: 'Voor een jubileum of ander besloten feest, een barman die de bar verzorgt terwijl u geniet van uw gasten.' },
      ]}
      faq={[
        {
          question: 'Neemt de barman ook drank en materiaal mee?',
          answer: 'In overleg verzorgen wij zowel de barman als de benodigde drank en materialen, of sluiten we aan op wat u al in huis heeft. Dit bespreken we vooraf, zodat er geen verrassingen zijn.',
        },
        {
          question: 'Hoe ver van tevoren moet ik een barman boeken?',
          answer: 'Voor een gebruikelijk feest volstaat doorgaans een tot twee weken. Rond drukke periodes zoals de zomer of de feestdagen raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een barman voor mijn feest?',
          answer: 'De prijs hangt af van de duur van het feest, het aantal gasten en of er ook drank wordt ingekocht. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Werkt dit ook bij particulieren thuis?',
          answer: 'Ja, onze barmen werken zowel bij particulieren thuis of in de tuin als op elke evenementenlocatie, van een verjaardag tot een grote feestzaal.',
        },
        {
          question: 'Wat is het verschil tussen een barman en een bartender of mixoloog?',
          answer: 'In de praktijk worden de termen vaak door elkaar gebruikt. Een barman verzorgt de reguliere bar, terwijl een mixoloog of cocktailbartender extra ervaring heeft met het samenstellen van cocktails. Wij matchen op basis van wat uw feest vraagt.',
        },
        {
          question: 'Kan de barman ook cocktails maken?',
          answer: 'Ja, in overleg stelt de barman een passende cocktailkaart samen, van bekende klassiekers tot een eigen signature drink voor uw gelegenheid.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Barman voor Evenement"
      formEventTypeDefault="Barman voor evenement"
      formLocation="Barman voor evenement"
      ctaLabel="Vraag een barman aan"
      formHeading="Vertel ons over uw feest"
      formSubtext="Laat uw wensen achter en we verbinden u binnen 24 uur met een passende barman."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
        { href: '/sommelier-inhuren', label: 'Sommelier voor uw evenement' },
      ]}
    />
  );
}
