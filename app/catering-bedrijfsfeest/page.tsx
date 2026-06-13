'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function CateringBedrijfsfeestPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Fine dining catering voor uw"
      heroAccent="bedrijfsfeest"
      heroSubtext="Til uw zakelijke evenement naar een hoger niveau met culinaire catering op locatie, bereid door topchefs uit het fine dining-segment."
      introEyebrow="Zakelijke events op niveau"
      introHeadingLead="Een bedrijfsevenement dat"
      introHeadingAccent="indruk maakt"
      introParagraphs={[
        'Een bedrijfsfeest is meer dan een feestje. Het is een statement naar uw medewerkers, klanten en relaties. De catering bepaalt voor een groot deel hoe dat moment wordt onthouden, en daarmee hoe uw organisatie overkomt.',
        'Connect Events & Dining verzorgt fine dining catering voor zakelijke evenementen op elke schaal, van een intiem directiediner tot een groot personeelsfeest of een relatie-event op een toplocatie. Onze chefs koken ter plaatse, met verse producten en de precisie van de sterrenkeuken.',
        'Voor organisaties en locaties die regelmatig events hebben, zijn wij een vaste partner die meedenkt, ontzorgt en elke keer levert. U ontvangt uw gasten, wij regelen het volledige culinaire traject.',
      ]}
      offeringsHeading="Voor elk zakelijk moment"
      offeringsIntro="Of het nu gaat om twintig gasten of een compleet bedrijf, wij stellen een passend culinair concept samen."
      offerings={[
        { title: 'Walking dinner', description: 'Een reeks verfijnde gangen die rondgaan, ideaal voor netwerken en grotere gezelschappen die in beweging blijven.' },
        { title: 'Gala- en galadiner', description: 'Een volledig verzorgd zittend diner op niveau, voor de momenten waarop alles moet kloppen.' },
        { title: 'Personeelsfeest', description: 'Een culinaire beleving die uw team waardeert, van uitgebreide buffetten tot live cooking stations.' },
        { title: 'Productlancering & relatie-event', description: 'Catering die past bij uw merk en de juiste indruk maakt op klanten en relaties.' },
        { title: 'Borrel & receptie', description: 'Hoogwaardige hapjes en bites, warm en koud, geserveerd met oog voor detail.' },
        { title: 'Executive dinner', description: 'Een intiem diner voor directie of board, met de aandacht en discretie die daarbij hoort.' },
      ]}
      faq={[
        {
          question: 'Voor hoeveel gasten verzorgen jullie catering?',
          answer: 'Wij verzorgen zowel intieme diners vanaf circa twintig gasten als grootschalige bedrijfsevenementen. Vertel ons het aantal gasten en wij stellen een passend concept samen.',
        },
        {
          question: 'Kunnen jullie ook cateren op een locatie zonder professionele keuken?',
          answer: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met u en de locatie af wat er nodig is.',
        },
        {
          question: 'In welke regio zijn jullie actief?',
          answer: 'Connect Events & Dining is actief in heel Nederland en België. Voor grotere evenementen reizen onze chefs door de hele Benelux.',
        },
        {
          question: 'Hoe ver van tevoren moet ik een bedrijfsevenement boeken?',
          answer: 'Voor grotere events adviseren wij om enkele weken tot maanden vooruit te plannen, zodat we het menu en de uitvoering zorgvuldig kunnen voorbereiden. Voor kleinere diners kan het vaak op kortere termijn.',
        },
        {
          question: 'Houden jullie rekening met dieetwensen en allergieën?',
          answer: 'Altijd. Wij stemmen het menu af op dieetwensen, allergieën en voorkeuren binnen uw gezelschap, zonder in te leveren op kwaliteit of beleving.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Bedrijfsfeest"
      formEventTypeDefault="Bedrijfsfeest"
      formLocation="Catering bedrijfsfeest"
      relatedLinks={[
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
        { href: '/evenementen', label: 'Alle fine dining catering' },
      ]}
    />
  );
}
