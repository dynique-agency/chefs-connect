'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Een privéchef aan uw"
      heroAccent="eigen tafel"
      heroSubtext="Een compleet verzorgd diner bij u thuis, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis"
      introHeadingLead="Sterrenkeuken in uw"
      introHeadingAccent="eigen keuken"
      introParagraphs={[
        'Een kok aan huis, ook wel private dining genoemd, is fine dining zonder de reservering, het vervoer of de wachttijd. Onze chef komt naar u toe, kookt live in uw eigen keuken en serveert een menu dat volledig is afgestemd op uw gezelschap en gelegenheid.',
        'Van een romantisch diner voor twee tot een familiediner met de feestdagen: u hoeft alleen uw gasten te ontvangen. Wij verzorgen het menu, de boodschappen, de bereiding en het serveren, en laten uw keuken achter zoals we hem aantroffen.',
        'Onze chefs komen uit het fine dining-segment en brengen diezelfde precisie en presentatie mee naar uw eigen tafel, zonder de formaliteit van een restaurant.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Vriendengroep diner', description: 'Een verrassend menu voor een avond met vrienden, inclusief wijnadvies indien gewenst.' },
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
          question: 'Voor hoeveel personen is een kok aan huis geschikt?',
          answer: 'Van een diner voor twee tot een gezelschap van ongeveer twaalf gasten. Bij grotere aantallen verwijzen wij u graag door naar onze cateringoplossingen voor evenementen.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'In welke regio is dit beschikbaar?',
          answer: 'Wij verzorgen kok-aan-huis-diners in heel Nederland en België.',
        },
        {
          question: 'Is een kok aan huis hetzelfde als private dining?',
          answer: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis"
      formEventTypeDefault="Kok aan huis"
      formLocation="Kok aan huis"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis-maastricht', label: 'Kok aan huis in Maastricht' },
        { href: '/kok-aan-huis-nijmegen', label: 'Kok aan huis in Nijmegen' },
        { href: '/kok-aan-huis-tilburg', label: 'Kok aan huis in Tilburg' },
        { href: '/kok-aan-huis-den-bosch', label: 'Kok aan huis in Den Bosch' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
        { href: '/catering-bedrijfsfeest', label: 'Catering bedrijfsfeest' },
      ]}
    />
  );
}
