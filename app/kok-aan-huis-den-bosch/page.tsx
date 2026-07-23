'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisDenBoschPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Den Bosch"
      heroLead="Een privéchef aan uw"
      heroAccent="tafel in Den Bosch"
      heroSubtext="Een compleet verzorgd diner bij u thuis in 's-Hertogenbosch of Noordoost-Brabant, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis in Den Bosch"
      introHeadingLead="De Bourgondische keuken in uw"
      introHeadingAccent="eigen huis"
      introParagraphs={[
        '’s-Hertogenbosch draagt de titel Bourgondische hoofdstad niet voor niets: van de terrassen rond de Markt en de Korte Putstraat tot de fine dining in de binnenstad, eten en drinken zitten hier diep in de cultuur. Met een kok aan huis haalt u diezelfde kwaliteit naar uw eigen keuken, zonder reservering.',
        'Onze chef komt naar u toe, in Den Bosch of de wijde regio Noordoost-Brabant, en kookt live in uw keuken een menu dat is afgestemd op uw gezelschap en gelegenheid. U ontvangt uw gasten, wij verzorgen de rest.',
        'Ook geschikt voor een zakelijk diner na een beurs in de Brabanthallen: een privédiner aan huis maakt indruk zonder de formaliteit van een restaurant, en net zo Bourgondisch als de stad zelf.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Zakelijk diner aan huis', description: 'Ontvang relaties na een beursdag in de Brabanthallen met een persoonlijk diner in plaats van een restaurantreservering.' },
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
          question: 'Komen jullie ook buiten Den Bosch zelf?',
          answer: 'Ja, wij verzorgen kok-aan-huis-diners in heel Noordoost-Brabant, inclusief Vught, Rosmalen en Oss.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis in Den Bosch?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis Den Bosch"
      formEventTypeDefault="Kok aan huis Den Bosch"
      formLocation="Kok aan huis Den Bosch"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-tilburg', label: 'Kok aan huis in Tilburg' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
