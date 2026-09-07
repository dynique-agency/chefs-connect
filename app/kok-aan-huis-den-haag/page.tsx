'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisDenHaagPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Den Haag"
      heroLead="Een privéchef aan uw"
      heroAccent="tafel in Den Haag"
      heroSubtext="Een compleet verzorgd diner bij u thuis in Den Haag of Zuid-Holland, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis in Den Haag"
      introHeadingLead="Statige allure in uw"
      introHeadingAccent="eigen keuken"
      introParagraphs={[
        'Den Haag is als regeringszetel en diplomatieke stad thuisbasis van tientallen ambassades en internationale instellingen, van het Vredespaleis tot de OPCW. Rond het Statenkwartier, de Archipelbuurt en Benoordenhout wonen en werken veel mensen voor wie representatief ontvangen heel gewoon is. Met een kok aan huis, ook wel private dining genoemd, haalt u diezelfde allure naar uw eigen keuken, zonder reservering of vervoer.',
        'Onze chef komt naar u toe, in Den Haag of de wijde regio Zuid-Holland, en kookt live in uw keuken een menu dat is afgestemd op uw gezelschap en gelegenheid. U ontvangt uw gasten, wij verzorgen de rest.',
        'Woont u liever dichter bij zee, in Scheveningen met de boulevard en de pier op loopafstand? Ook daar koken wij met dezelfde verfijning, in een net iets losser jasje. En verder dan de stadsgrenzen kijken we ook: van Wassenaar en Voorburg tot Delft en de rest van Zuid-Holland.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Zakelijk diner aan huis', description: 'Ontvang internationale relaties of ambassadegasten met een persoonlijk diner in plaats van een restaurantreservering.' },
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
          question: 'Komen jullie ook buiten Den Haag zelf?',
          answer: 'Ja, wij verzorgen kok-aan-huis-diners in heel Zuid-Holland, inclusief Wassenaar, Voorburg, Rijswijk en Delft.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis in Den Haag?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Is een kok aan huis hetzelfde als private dining?',
          answer: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis Den Haag"
      formEventTypeDefault="Kok aan huis Den Haag"
      formLocation="Kok aan huis Den Haag"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-rotterdam', label: 'Kok aan huis in Rotterdam' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
