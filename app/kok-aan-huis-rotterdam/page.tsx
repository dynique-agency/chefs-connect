'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisRotterdamPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Rotterdam"
      heroLead="Een privéchef aan uw"
      heroAccent="tafel in Rotterdam"
      heroSubtext="Een compleet verzorgd diner bij u thuis in Rotterdam of de Rijnmond, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis in Rotterdam"
      introHeadingLead="Sterrenkeuken in uw"
      introHeadingAccent="eigen keuken"
      introParagraphs={[
        'Rotterdam is uitgegroeid tot een van de meest opkomende culinaire steden van Nederland, met een divers en informeel eetlandschap dat verder reikt dan de kraampjes van de Markthal. Van de skyline bij de Erasmusbrug tot de moderne architectuur op de Kop van Zuid: de stad durft culinair net zo veel als architectonisch. Met een kok aan huis, ook wel private dining genoemd, haalt u die vernieuwende keuken naar uw eigen tafel.',
        'Onze chef komt naar u toe, in Rotterdam en de wijde regio Rijnmond, en kookt live in uw keuken een menu dat is afgestemd op uw gezelschap en gelegenheid. U ontvangt uw gasten, wij verzorgen de rest.',
        'Dankzij de grootste zeehaven van Europa ontvangt Rotterdam voortdurend internationale zakelijke gasten, voor wie een privédiner aan huis een verfijnd en persoonlijk alternatief biedt voor het gebruikelijke restaurantbezoek. Naast de stad zelf verzorgen wij kok-aan-huis-diners in de volledige regio Rotterdam en de Rijnmond.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Zakelijk diner aan huis', description: 'Ontvang internationale zakenrelaties of havencollega’s met een persoonlijk diner in plaats van een restaurantreservering.' },
        { title: 'Proeverij aan huis', description: 'Een meergangen tasting menu met kleine, verfijnde gerechten, zoals in een sterrenrestaurant.' },
        { title: 'Kookworkshop aan huis', description: 'De chef kookt samen met u en uw gasten, voor een interactieve en ongedwongen avond.' },
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
          question: 'Komen jullie ook buiten Rotterdam zelf?',
          answer: 'Ja, wij verzorgen kok-aan-huis-diners in de hele regio Rijnmond, inclusief Schiedam, Vlaardingen, Spijkenisse en Capelle aan den IJssel, en de wijdere omgeving van Zuid-Holland.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis in Rotterdam?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Is een kok aan huis hetzelfde als private dining?',
          answer: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis Rotterdam"
      formEventTypeDefault="Kok aan huis Rotterdam"
      formLocation="Kok aan huis Rotterdam"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-den-haag', label: 'Kok aan huis in Den Haag' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
