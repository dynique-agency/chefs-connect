'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function SommelierInhurenPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Een ervaren sommelier"
      heroAccent="voor uw evenement"
      heroSubtext="Wij verbinden u met een ervaren, zelfstandig sommelier die wijnadvies en wijnservice verzorgt tijdens uw evenement, van bruiloft en gala tot besloten diner en wijnproeverij."
      introEyebrow="Wijnexpertise voor bijzondere momenten"
      introHeadingLead="Het verschil tussen goede wijn en de"
      introHeadingAccent="juiste wijn"
      introParagraphs={[
        'Bij een bruiloft, gala of besloten diner is de wijn minstens zo bepalend voor de avond als het menu zelf. Een verkeerde combinatie kan een verfijnd gerecht plat laten vallen, terwijl de juiste wijn een gang naar een hoger niveau tilt. Een sommelier zorgt ervoor dat elk glas past bij wat er op tafel komt.',
        'Een sommelier stelt wijn-spijscombinaties samen die aansluiten op uw menu, adviseert over stijl en budget, en verzorgt tijdens het evenement de service aan tafel, van het presenteren en proeven tot het rustig bijschenken tussen de gangen door. Die combinatie van kennis en service maakt het verschil met reguliere bediening.',
        'Elke aanvraag is anders, een bruiloft voor honderd gasten vraagt om een andere aanpak dan een besloten diner voor tien. Daarom stellen wij per evenement een passende sommelier voor, afgestemd op uw menu, gezelschap en locatie.',
      ]}
      offeringsHeading="Voor elk moment met wijn"
      offeringsIntro="Van een intiem diner tot een groot gala, wij verbinden u met een sommelier die past bij uw evenement."
      offerings={[
        { title: 'Bruiloft & gala', description: 'Een sommelier die de wijnkeuze en -service tijdens uw bruiloft of gala verzorgt, afgestemd op het menu en het aantal gasten.' },
        { title: 'Zakelijk diner', description: 'Maak indruk op relaties of collega’s met vakkundig wijnadvies en onberispelijke service tijdens een zakelijk diner.' },
        { title: 'Wijnproeverij op maat', description: 'Een sommelier begeleidt uw gasten door een proeverij, met uitleg over herkomst, druif en stijl van elke wijn.' },
        { title: 'Besloten feest', description: 'Voor een verjaardag of jubileum thuis of op locatie, een sommelier die de wijnen kiest en serveert.' },
        { title: 'Bedrijfsevenement', description: 'Van relatiediner tot jubileumfeest, wijnadvies en -service die passen bij het niveau van uw evenement.' },
        { title: 'Wijnadvies vooraf', description: 'Ook zonder service ter plaatse kan een sommelier u vooraf adviseren over de wijnkeuze bij uw menu.' },
      ]}
      faq={[
        {
          question: 'Wat doet een sommelier precies tijdens een evenement?',
          answer: 'Een sommelier stelt wijnen samen die passen bij uw menu, presenteert en serveert deze tijdens het diner, en begeleidt uw gasten met uitleg en advies waar gewenst.',
        },
        {
          question: 'Hoe ver van tevoren moet ik een sommelier boeken?',
          answer: 'Voor een gebruikelijk evenement volstaat doorgaans twee tot drie weken. Rond drukke periodes en voor grote bruiloften of gala’s raden we aan eerder te boeken.',
        },
        {
          question: 'Wat kost een sommelier voor mijn evenement?',
          answer: 'De prijs hangt af van de duur van het evenement, het aantal gasten en of er ook wijnen worden ingekocht. Na uw aanvraag ontvangt u een concreet voorstel op maat.',
        },
        {
          question: 'Werkt de sommelier ook aan huis of op een externe locatie?',
          answer: 'Ja, onze sommeliers werken zowel bij u thuis als op elke evenementenlocatie, van een besloten diner tot een grote feestzaal.',
        },
        {
          question: 'Wat is het verschil tussen een sommelier en een gewone ober qua wijnkennis?',
          answer: 'Een sommelier heeft specifieke opleiding en ervaring in wijn-spijscombinaties, druivenrassen en wijnregio’s, en kan daardoor gericht adviseren en serveren, waar een ober vooral de algemene bediening verzorgt.',
        },
        {
          question: 'Kan de sommelier ook de wijnen zelf uitzoeken en inkopen?',
          answer: 'Ja, in overleg stelt de sommelier een passende wijnkaart samen en verzorgt desgewenst ook de inkoop, afgestemd op uw menu en budget.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Sommelier voor Evenement"
      formEventTypeDefault="Sommelier voor evenement"
      formLocation="Sommelier voor evenement"
      ctaLabel="Vraag een sommelier aan"
      formHeading="Vertel ons over uw evenement"
      formSubtext="Laat uw wensen achter en we verbinden u binnen 24 uur met een passende sommelier."
      relatedLinks={[
        { href: '/kok-aan-huis', label: 'Kok aan huis' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
        { href: '/barman-inhuren', label: 'Barman voor uw evenement' },
      ]}
    />
  );
}
