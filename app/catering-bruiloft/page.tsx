'use client';

import EventLandingPage from '@/components/evenementen/EventLandingPage';

export default function CateringBruiloftPage() {
  return (
    <EventLandingPage
      eyebrow="Connect Events & Dining"
      heroLead="Fine dining catering voor uw"
      heroAccent="bruiloft of gala"
      heroSubtext="Maak van de mooiste dag een culinaire herinnering. Topchefs verzorgen uw bruiloft of gala op locatie, van de eerste toost tot de laatste gang."
      introEyebrow="De mooiste dag, culinair"
      introHeadingLead="Een bruiloft die men zich"
      introHeadingAccent="blijft herinneren"
      introParagraphs={[
        'Een bruiloft of gala is een dag waarop alles moet kloppen. Het diner is daarbij vaak het moment dat gasten zich het langst herinneren. Daarom verdient die dag een keuken die het niveau van de gelegenheid evenaart.',
        'Connect Events & Dining verzorgt fine dining catering voor bruiloften en gala’s op elke schaal, van een intieme ceremonie tot een groots feest op een toplocatie. Onze chefs koken ter plaatse met verse producten en de precisie van de sterrenkeuken, en stellen samen met u een menu op maat samen.',
        'Wij werken nauw samen met u, uw weddingplanner en de locatie, en nemen het volledige culinaire traject uit handen. Zo kunt u met een gerust hart genieten van uw dag.',
      ]}
      offeringsHeading="Van ontvangst tot laatste gang"
      offeringsIntro="Wij verzorgen elk culinair moment van uw dag, afgestemd op uw stijl en gezelschap."
      offerings={[
        { title: 'Ontvangst & receptie', description: 'Een stijlvolle ontvangst met bubbels en verfijnde canapés, terwijl uw gasten samenkomen.' },
        { title: 'Walking dinner', description: 'Een reeks elegante gangen die rondgaan, ideaal voor een levendig feest waarbij gasten in beweging blijven.' },
        { title: 'Zittend galadiner', description: 'Een volledig verzorgd meergangendiner aan tafel, geserveerd met oog voor elk detail.' },
        { title: 'Live cooking stations', description: 'Chefs die ter plaatse bereiden, voor een interactieve en zintuiglijke beleving.' },
        { title: 'Dessert & patisserie', description: 'Van een verfijnd dessertbuffet tot huisgemaakte patisserie als zoete afsluiter.' },
        { title: 'Menu volledig op maat', description: 'Een culinair concept dat past bij uw thema, stijl en verhaal. Geen standaardpakketten.' },
      ]}
      faq={[
        {
          question: 'Voor hoeveel gasten verzorgen jullie een bruiloft?',
          answer: 'Wij verzorgen zowel intieme bruiloften vanaf circa twintig gasten als grote feesten en gala’s. Vertel ons het aantal gasten en wij stellen een passend concept samen.',
        },
        {
          question: 'Kunnen jullie cateren op een trouwlocatie zonder professionele keuken?',
          answer: 'Ja. Onze chefs zijn gewend om op locatie te werken en nemen de benodigde mobiele uitrusting mee. Wij stemmen vooraf met u en de locatie af wat er nodig is.',
        },
        {
          question: 'Kunnen we het menu vooraf proeven?',
          answer: 'Zeker. Voor bruiloften en gala’s plannen wij in overleg een proeverij, zodat u uw menu met een gerust hart kunt vastleggen.',
        },
        {
          question: 'Hoe ver van tevoren moeten we onze trouwcatering boeken?',
          answer: 'Voor bruiloften adviseren wij om ruim op tijd te boeken, vaak enkele maanden tot een jaar vooruit, omdat populaire data snel vol zitten. Neem gerust vrijblijvend contact op om uw datum te checken.',
        },
        {
          question: 'In welke regio zijn jullie actief?',
          answer: 'Connect Events & Dining is actief in heel Nederland en België. Voor bruiloften en gala’s reizen onze chefs door de hele Benelux.',
        },
        {
          question: 'Houden jullie rekening met dieetwensen en allergieën?',
          answer: 'Altijd. Wij stemmen het menu af op dieetwensen, allergieën en voorkeuren binnen uw gezelschap, zonder in te leveren op kwaliteit of beleving.',
        },
      ]}
      formSubject="Connect Events & Dining: Aanvraag Bruiloft of Gala"
      formEventTypeDefault="Bruiloft"
      formLocation="Catering bruiloft"
      heroImage="/chef-table-explanation.webp"
      introImage="/chef-plating-vertical.png"
      relatedLinks={[
        { href: '/catering-bedrijfsfeest', label: 'Catering bedrijfsfeest' },
        { href: '/evenementen', label: 'Alle fine dining catering' },
      ]}
    />
  );
}
