'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisEindhovenPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Eindhoven"
      heroLead="Een privéchef aan uw"
      heroAccent="tafel in Eindhoven"
      heroSubtext="Een compleet verzorgd diner bij u thuis in Eindhoven of de Brainportregio, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis in Eindhoven"
      introHeadingLead="Innovatie op uw bord, in uw"
      introHeadingAccent="eigen keuken"
      introParagraphs={[
        'Eindhoven is in twintig jaar uitgegroeid tot het kloppend hart van de Brainport-technologieregio, met de High Tech Campus als internationale trekpleister voor kenniswerkers en bedrijven. Strijp-S, het voormalige Philips-industrieterrein, is inmiddels omgebouwd tot een bruisend gebied vol horeca en cultuur. Met een kok aan huis, ook wel private dining genoemd, haalt u diezelfde kwaliteit naar uw eigen keuken, zonder reservering of vervoer.',
        'Onze chef komt naar u toe, in Eindhoven of de wijdere Brainportregio, en kookt live in uw keuken een menu dat is afgestemd op uw gezelschap en gelegenheid. U ontvangt uw gasten, wij verzorgen de rest.',
        'Ook geschikt voor internationale gasten en kenniswerkers rond de High Tech Campus: een privédiner aan huis maakt indruk zonder de formaliteit van een restaurant, in Eindhoven en de bredere Brainportregio.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Zakelijk diner aan huis', description: 'Ontvang internationale relaties of kenniswerkers van rond de High Tech Campus met een persoonlijk diner in plaats van een restaurantreservering.' },
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
          question: 'Komen jullie ook buiten Eindhoven zelf?',
          answer: 'Ja, wij verzorgen kok-aan-huis-diners in de hele Brainportregio, waaronder Helmond, Veldhoven en Best, en de bredere regio Zuidoost-Brabant.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis in Eindhoven?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Is een kok aan huis hetzelfde als private dining?',
          answer: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis Eindhoven"
      formEventTypeDefault="Kok aan huis Eindhoven"
      formLocation="Kok aan huis Eindhoven"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-tilburg', label: 'Kok aan huis in Tilburg' },
        { href: '/catering-bedrijfsfeest', label: 'Catering bedrijfsfeest' },
      ]}
    />
  );
}
