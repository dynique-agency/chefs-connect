'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisKerstPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Kerst"
      heroLead="Een privéchef met"
      heroAccent="Kerst aan uw tafel"
      heroSubtext="Een compleet kerstdiner bij u thuis, gekookt en geserveerd door een ervaren chef, zodat u zelf aan tafel zit met familie of gasten in plaats van in de keuken te staan. Voor kerstavond, eerste of tweede kerstdag, of een kerstborrel."
      introEyebrow="Kerst zonder keukenstress"
      introHeadingLead="Zelf aan tafel, in plaats van in de"
      introHeadingAccent="keuken"
      introParagraphs={[
        'Voor veel gastvrouwen en gastheren is de Kerst het drukste kookmoment van het jaar: een meergangendiner voor een grote groep, terwijl je ook zelf wilt genieten van familie en vrienden. In de praktijk brengt één iemand het grootste deel van de avond in de keuken door, terwijl de rest al aan tafel zit.',
        'Een privéchef aan huis lost dat op. Onze chef komt op kerstavond, eerste of tweede kerstdag naar u toe en kookt live in uw eigen keuken een compleet kerstmenu, van amuse tot dessert. U ontvangt uw gasten, wij verzorgen de bereiding en bediening, zodat u zelf ook aan tafel zit.',
        'Deze kerstervaring is beschikbaar door heel Nederland en België, van Amsterdam, Rotterdam en Utrecht tot Maastricht, Groningen en de rest van het land. Bekijk onze pagina’s per stad voor lokale informatie, of vraag direct een kerstdiner aan huis aan voor uw eigen adres.',
      ]}
      offeringsHeading="Voor elke kerstgelegenheid aan huis"
      offeringsIntro="Van een intiem kerstdiner voor twee tot een uitgebreide kerstborrel voor de hele familie, wij stellen een passend menu samen."
      offerings={[
        { title: 'Kerstdiner (meerdere gangen)', description: 'Een compleet kerstmenu van drie tot zes gangen, gekookt en geserveerd terwijl u zelf aan tafel zit.' },
        { title: 'Kerstborrel met hapjes', description: 'Een sfeervolle borrel met verfijnde hapjes, ideaal voor een kerstborrel met familie, vrienden of buren.' },
        { title: 'Eerste of tweede kerstdag brunch', description: 'Een uitgebreide brunch met warme en koude gerechten, geserveerd op de ochtend of middag van de feestdag.' },
        { title: 'Kerstdiner voor het hele gezin', description: 'Een menu dat rekening houdt met jong en oud, zodat iedereen aan tafel geniet van hetzelfde diner.' },
        { title: 'Zakelijke kerstborrel aan huis', description: 'Ontvang collega’s of relaties met een verzorgde kerstborrel, gekookt en geserveerd op de locatie van uw keuze.' },
        { title: 'Kerstmenu op maat', description: 'Een menu afgestemd op dieetwensen, allergieën of persoonlijke voorkeuren, zonder in te leveren op sfeer.' },
      ]}
      faq={[
        {
          question: 'Heb ik een professionele keuken nodig?',
          answer: 'Nee, een gewone thuiskeuken met een fornuis en oven is voldoende. Onze chef brengt eventueel aanvullend materiaal zelf mee.',
        },
        {
          question: 'Zijn de boodschappen bij de prijs inbegrepen?',
          answer: 'Ja, standaard nemen wij de inkoop van verse ingrediënten voor u uit handen. In overleg is het ook mogelijk om zelf specifieke producten aan te leveren.',
        },
        {
          question: 'Hoe ver van tevoren moet ik een kerstdiner boeken?',
          answer: 'Rond de Kerst is de vraag naar een kok aan huis groot, daarom raden wij aan tijdig te boeken, idealiter vanaf oktober of november. Voor een avond buiten de feestdagen volstaat doorgaans een week.',
        },
        {
          question: 'Komen jullie ook buiten de Randstad met de Kerst?',
          answer: 'Ja, wij verzorgen kerstdiners aan huis door heel Nederland en België, van de grote steden tot kleinere plaatsen daarbuiten.',
        },
        {
          question: 'Wat kost een kerstdiner aan huis?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Kan ik ook kiezen voor een kerstborrel in plaats van een zittend diner?',
          answer: 'Zeker, naast een volledig kerstdiner verzorgen wij ook een kerstborrel met hapjes, een brunch, of een combinatie die past bij uw gezelschap.',
        },
        {
          question: 'Houden jullie rekening met dieetwensen tijdens het kerstmenu?',
          answer: 'Altijd. Wij stemmen het kerstmenu af op dieetwensen, allergieën en persoonlijke voorkeuren binnen uw gezelschap.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kerstdiner aan Huis"
      formEventTypeDefault="Kerstdiner aan huis"
      formLocation="Kerstdiner aan huis"
      ctaLabel="Vraag uw kerstdiner aan"
      formHeading="Vertel ons over uw kerstdiner"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-amsterdam', label: 'Kok aan huis in Amsterdam' },
        { href: '/kok-aan-huis-rotterdam', label: 'Kok aan huis in Rotterdam' },
        { href: '/catering-bedrijfsfeest', label: 'Catering bedrijfsfeest' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
