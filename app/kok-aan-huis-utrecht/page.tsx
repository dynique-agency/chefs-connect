'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function KokAanHuisUtrechtPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining · Utrecht"
      heroLead="Een privéchef aan uw"
      heroAccent="tafel in Utrecht"
      heroSubtext="Een compleet verzorgd diner bij u thuis in Utrecht of de regio, gekookt door een ervaren chef. Voor een verjaardag, jubileum, romantisch etentje, of gewoon omdat het kan."
      introEyebrow="Fine dining, bij u thuis in Utrecht"
      introHeadingLead="Sterrenkeuken in uw"
      introHeadingAccent="eigen keuken"
      introParagraphs={[
        'Utrecht is een compacte, historische studentenstad met een skyline die wordt bepaald door de Domtoren, en een grachtengordel met unieke werven: souterrains en kelders aan het water, met de woonlagen daarboven. Van de grachtenpanden aan de Oudegracht tot de rustige straten in Wittevrouwen en Tuindorp, met een kok aan huis, ook wel private dining genoemd, haalt u fine dining naar precies die plek, zonder dat u de deur uit hoeft.',
        'Onze chef komt naar u toe, in Utrecht of de wijde regio, en kookt live in uw keuken een menu dat is afgestemd op uw gezelschap en gelegenheid. U ontvangt uw gasten, wij verzorgen de rest.',
        'Utrecht ligt centraal in Nederland en is daardoor ook een geliefde locatie voor zakelijke bijeenkomsten. Een privédiner aan huis maakt indruk op relaties of collega’s, zonder de formaliteit van een restaurant, en is even geschikt voor een feestelijke avond in de bredere regio Utrecht.',
      ]}
      offeringsHeading="Voor elke gelegenheid aan huis"
      offeringsIntro="Van een intiem etentje voor twee tot een familiediner met tien gasten, wij stellen een passend menu samen."
      offerings={[
        { title: 'Romantisch diner', description: 'Een meergangendiner voor twee, gekookt en geserveerd terwijl u geniet van elkaars gezelschap.' },
        { title: 'Verjaardag & jubileum', description: 'Vier een bijzondere gelegenheid met een menu dat past bij het feest en het aantal gasten.' },
        { title: 'Familiediner & feestdagen', description: 'Geen dagenlang koken en afwassen met de feestdagen: wij nemen de keuken over, u schuift aan.' },
        { title: 'Zakelijk diner aan huis', description: 'Ontvang relaties of collega’s met een persoonlijk diner in plaats van een restaurantreservering, praktisch dankzij de centrale ligging van Utrecht.' },
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
          question: 'Komen jullie ook buiten Utrecht zelf?',
          answer: 'Ja, wij verzorgen kok-aan-huis-diners in de hele regio Utrecht, van Nieuwegein en Zeist tot De Bilt en Houten.',
        },
        {
          question: 'Hoe ver van tevoren moet ik boeken?',
          answer: 'Voor een gebruikelijke avond volstaat doorgaans een week. Rond feestdagen en in drukke periodes raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een kok aan huis in Utrecht?',
          answer: 'De prijs hangt af van het aantal gasten, het gekozen menu en de gewenste bediening. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Is een kok aan huis hetzelfde als private dining?',
          answer: 'Ja, kok aan huis en private dining zijn twee namen voor dezelfde ervaring: een chef die bij u thuis een compleet menu kookt en serveert.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Kok aan Huis Utrecht"
      formEventTypeDefault="Kok aan huis Utrecht"
      formLocation="Kok aan huis Utrecht"
      ctaLabel="Vraag uw privéchef aan"
      formHeading="Vertel ons over uw avond"
      formSubtext="Laat uw wensen achter en we nemen binnen 24 uur contact met u op met een persoonlijk voorstel."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis, alle regio’s' },
        { href: '/kok-aan-huis-amsterdam', label: 'Kok aan huis in Amsterdam' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
