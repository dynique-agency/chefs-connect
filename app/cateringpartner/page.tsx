'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function CateringpartnerPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Een premium cateringpartner"
      heroAccent="voor uw locatie"
      heroSubtext="Voor evenementenlocaties die regelmatig partijen, bedrijfsfeesten en bruiloften ontvangen: een betrouwbare fine dining-partner die elke keer levert."
      introEyebrow="Voor evenementenlocaties"
      introHeadingLead="Een partner waarop uw locatie"
      introHeadingAccent="kan rekenen"
      introParagraphs={[
        'Een locatie die regelmatig events host, valt of staat met de kwaliteit van de catering. Eén tegenvallend diner straalt direct af op uw zaal, uw landgoed of uw kasteel. Daarom verdient uw locatie een culinaire partner die consistent op niveau presteert.',
        'Connect Events & Dining werkt als vaste cateringpartner voor evenementenlocaties, landgoederen, kastelen en zakelijke ruimtes, ook zonder eigen professionele keuken. Onze chefs koken ter plaatse met de precisie van de sterrenkeuken, afgestemd op elke opdrachtgever die u ontvangt.',
        'Wij denken mee over capaciteit, logistiek en menu, en nemen het volledige culinaire traject uit handen. Zo houdt u de reputatie van uw locatie hoog, zonder zelf een keukenbrigade te hoeven aansturen.',
      ]}
      offeringsHeading="Wat wij uw locatie bieden"
      offeringsIntro="Een samenwerking die uw locatie ontzorgt en uw gasten laat terugkomen."
      offerings={[
        { title: 'Vaste cateringpartner', description: 'Een betrouwbaar aanspreekpunt dat bij elk event dezelfde hoge kwaliteit garandeert.' },
        { title: 'Fine dining op locatie', description: 'Topchefs uit het sterren- en fine dining-segment die ter plaatse bereiden.' },
        { title: 'Volledige ontzorging', description: 'Van keuken en bediening tot logistiek en afronding. Wij regelen het complete traject.' },
        { title: 'Flexibele capaciteit', description: 'Van een intiem diner tot een groot feest, wij schalen mee met uw zaal en agenda.' },
        { title: 'Maatwerk per opdrachtgever', description: 'Elk menu wordt afgestemd op de klant die u ontvangt en de gelegenheid.' },
        { title: 'Betrouwbaar en discreet', description: 'Wij werken professioneel en op de achtergrond, zodat u en uw gasten ontzorgd zijn.' },
      ]}
      faq={[
        {
          question: 'Werken jullie ook samen met locaties zonder eigen keuken?',
          answer: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met uw locatie af wat er nodig is.',
        },
        {
          question: 'Kunnen jullie meerdere evenementen per maand verzorgen?',
          answer: 'Zeker. Als vaste cateringpartner zijn wij ingericht op een doorlopende samenwerking en kunnen wij meerdere events per maand op niveau verzorgen.',
        },
        {
          question: 'Verzorgen jullie naast de keuken ook de bediening?',
          answer: 'Ja. Via het netwerk van Chefs Connect leveren wij naast chefs ook ervaren bedieningsprofessionals, zodat het volledige team op elkaar is afgestemd.',
        },
        {
          question: 'In welke regio zijn jullie actief?',
          answer: 'Connect Events & Dining is actief in heel Nederland en België. Voor een vaste samenwerking reizen onze chefs door de hele Benelux.',
        },
        {
          question: 'Hoe verloopt een samenwerking met een locatie?',
          answer: 'We starten met een kennismaking om uw locatie, gasten en wensen te leren kennen. Vervolgens maken we afspraken over werkwijze en kwaliteit, en stemmen we per event het menu en de uitvoering af.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Cateringpartner (locatie)"
      formEventTypeDefault="Samenwerking locatie"
      formLocation="Cateringpartner locatie"
      ctaLabel="Word partner"
      formHeading="Bespreek een samenwerking"
      formSubtext="Laat uw gegevens achter en we nemen contact op om de mogelijkheden voor uw locatie te bespreken."
      introImage="/chef-plating-vertical.png"
      relatedLinks={[
        { href: '/catering-bedrijfsfeest', label: 'Catering bedrijfsfeest' },
        { href: '/catering-bruiloft', label: 'Catering bruiloft & gala' },
      ]}
    />
  );
}
