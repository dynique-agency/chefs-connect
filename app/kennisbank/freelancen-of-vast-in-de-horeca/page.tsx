'use client';

import ArticleLayout, { Lead, H2, H3, P, UL, LI, TipBox, ComparisonTable } from '@/components/content/ArticleLayout';

export default function FreelancenOfVastPage() {
  return (
    <ArticleLayout
      category="Voor freelancers"
      title="Freelancen of vast in de horeca: wat past bij jou?"
      intro="Vrijheid en een hoger uurtarief, of de zekerheid van een vast contract? Een eerlijke vergelijking, zodat je de keuze maakt die past bij jouw situatie, niet bij een trend."
      readingTime="7 min leestijd"
      updated="Laatst bijgewerkt: juli 2026"
      author={{
        name: 'Gert-Jan',
        role: 'Oprichter Chefs Connect · freelance chef sinds 2018',
        image: '/gert-jan.png',
        bio: 'Gert-Jan werkte ruim 30 jaar in de horeca, van het Kurhaus tot sterrenzaken in Amsterdam. In 2018 koos hij bewust voor het freelance chef-bestaan en richtte later Chefs Connect op.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Kennisbank', href: '/kennisbank' },
        { label: 'Freelancen of vast in de horeca', href: '/kennisbank/freelancen-of-vast-in-de-horeca' },
      ]}
      toc={[
        { id: 'de-afweging', label: 'De afweging in het kort' },
        { id: 'vergelijking', label: 'Freelance versus vast, naast elkaar' },
        { id: 'voordelen-freelance', label: 'Waarom koks voor freelance kiezen' },
        { id: 'nadelen-freelance', label: 'Waar je rekening mee moet houden' },
        { id: 'voordelen-vast', label: 'Waarom een vast contract ook goed is' },
        { id: 'voor-wie', label: 'Voor wie is wat het beste?' },
        { id: 'risico-verkleinen', label: 'Hoe wij het risico van freelancen verkleinen' },
        { id: 'faq', label: 'Veelgestelde vragen' },
      ]}
      cta={{
        heading: 'Klaar om de stap naar freelance te zetten?',
        text: 'Schrijf je in bij Chefs Connect. Wij benaderen je zodra er een opdracht is die bij je past, zodat je de vrijheid van freelancen combineert met de rust van een netwerk achter je.',
        buttonLabel: 'Word horecaspecialist',
        buttonHref: '/horecaspecialist',
      }}
      related={[
        {
          href: '/kennisbank/freelance-kok-worden',
          label: 'Freelance kok worden: zo begin je',
          description: 'Koos je voor freelance? Dit stappenplan begeleidt je van KvK-inschrijving tot je eerste opdracht.',
        },
        {
          href: '/kennisbank/freelance-kok-tarief',
          label: 'Freelance kok tarief: wat bepaalt je uurtarief?',
          description: 'De echte cijfers uit onderzoek onder 20.000+ zzp\'ers, en wat jouw tarief bepaalt.',
        },
        {
          href: '/horecaspecialist',
          label: 'Word horecaspecialist',
          description: 'Sluit je aan bij ons netwerk en werk voor high-end locaties in NL & BE.',
        },
      ]}
    >
      <Lead>
        Bijna elke kok of bedieningsmedewerker die ik spreek, stelt me op een gegeven moment dezelfde vraag: zal ik
        freelancen, of blijf ik toch liever in loondienst? Er is geen universeel juist antwoord. Het hangt af van wat
        jij belangrijk vindt, in welke levensfase je zit en hoeveel onzekerheid je prettig vindt. Hieronder zet ik
        beide routes eerlijk naast elkaar.
      </Lead>

      <H2 id="de-afweging">De afweging in het kort</H2>
      <P>
        Freelancen geeft je vrijheid: je kiest je opdrachten, je tarief en je agenda. Daar staat tegenover dat je zelf
        verantwoordelijk bent voor je inkomen bij ziekte, je pensioen en je administratie. Een vast contract geeft je
        zekerheid en structuur, maar minder eigen regie over waar, wanneer en met wie je werkt. Geen van beide is
        beter. Het is een kwestie van welke onzekerheid je liever draagt: de onzekerheid van wisselende opdrachten, of
        de onzekerheid van weinig keuzevrijheid binnen een vaste baan.
      </P>

      <H2 id="vergelijking">Freelance versus vast, naast elkaar</H2>
      <ComparisonTable
        columns={['Freelance (zzp)', 'Vast contract']}
        rows={[
          {
            label: 'Vrijheid',
            values: [
              'Jij kiest je opdrachten, locaties en werktijden.',
              'Je werktijden en standplaats liggen grotendeels vast.',
            ],
          },
          {
            label: 'Inkomen',
            values: [
              'Hoger uurtarief, maar wisselend en afhankelijk van opdrachten.',
              'Vast, voorspelbaar salaris, ongeacht drukte.',
            ],
          },
          {
            label: 'Zekerheid',
            values: [
              'Geen loon bij ziekte of vakantie, tenzij je dit zelf regelt.',
              'Doorbetaling bij ziekte en opgebouwde vakantiedagen.',
            ],
          },
          {
            label: 'Administratie',
            values: [
              'Je factureert, houdt uren bij en doet zelf belastingaangifte.',
              'Salarisadministratie ligt volledig bij de werkgever.',
            ],
          },
          {
            label: 'Pensioen',
            values: [
              'Zelf opbouwen, niet automatisch geregeld.',
              'Vaak automatisch opgebouwd via de werkgever.',
            ],
          },
        ]}
      />

      <H2 id="voordelen-freelance">Waarom koks voor freelance kiezen</H2>
      <P>Ik hoor van freelancers in ons netwerk steeds dezelfde redenen om de overstap te maken:</P>
      <UL>
        <LI><strong>Afwisseling.</strong> Je werkt in verschillende keukens, met verschillende teams en concepten, in plaats van jaar in jaar uit dezelfde kaart.</LI>
        <LI><strong>Hoger uurtarief.</strong> Als zelfstandige reken je een tarief dat je eigen belasting, verzekeringen en pensioen meeneemt, doorgaans hoger dan een vergelijkbaar bruto-uurloon.</LI>
        <LI><strong>Regie over je agenda.</strong> Je bepaalt zelf wanneer je werkt en wanneer je vrij neemt, zonder een leidinggevende die daarover beslist.</LI>
        <LI><strong>Sneller nieuwe ervaring opdoen.</strong> Je leert in korte tijd meer keukens, technieken en teams kennen dan in een vaste functie.</LI>
      </UL>

      <H2 id="nadelen-freelance">Waar je rekening mee moet houden</H2>
      <P>Diezelfde vrijheid heeft een keerzijde die je niet moet onderschatten:</P>
      <UL>
        <LI><strong>Geen inkomen bij ziekte of blessure,</strong> tenzij je dit zelf verzekert. Voor een fysiek beroep als kok is dit een reëel risico.</LI>
        <LI><strong>Wisselende drukte.</strong> Niet elke maand ziet er hetzelfde uit, zeker als je net begint.</LI>
        <LI><strong>Zelf administratie voeren.</strong> Facturen, btw-aangifte en het bijhouden van je uren komen erbij, naast je werk in de keuken.</LI>
        <LI><strong>Zelf pensioen opbouwen.</strong> Dat gebeurt niet automatisch, je moet er zelf actief iets voor regelen.</LI>
      </UL>
      <TipBox title="Eerlijk advies">
        Onderschat de administratieve kant niet, maar overschat 'm ook niet. De meeste van deze punten zijn met een
        beetje discipline en de juiste verzekeringen prima te ondervangen. Lees ons artikel over freelance kok worden
        voor een concreet stappenplan.
      </TipBox>

      <H2 id="voordelen-vast">Waarom een vast contract ook goed is</H2>
      <P>
        Een vaste baan is geen achterhaalde keuze, integendeel. Voor veel koks en bedieningsmedewerkers is het juist de
        betere optie, zeker in bepaalde levensfasen.
      </P>
      <UL>
        <LI><strong>Voorspelbaar inkomen,</strong> elke maand hetzelfde bedrag, ongeacht hoe druk het is.</LI>
        <LI><strong>Doorbetaling bij ziekte</strong> en opgebouwde vakantiedagen, zonder dat je hier zelf iets voor hoeft te regelen.</LI>
        <LI><strong>Een vast team</strong> waarin je een rol opbouwt, doorgroeit en verantwoordelijkheid krijgt.</LI>
        <LI><strong>Geen administratieve last.</strong> Je werkgever regelt salaris, belasting en pensioenopbouw.</LI>
      </UL>

      <H2 id="voor-wie">Voor wie is wat het beste?</H2>
      <P>
        Er is geen formule die dit voor je beslist, maar een paar vragen helpen om helderheid te krijgen:
      </P>
      <UL>
        <LI>Kun je financieel een paar maanden overbruggen zonder vast inkomen? Zo niet, bouw dan eerst een buffer op voordat je volledig overstapt.</LI>
        <LI>Vind je het prettig om zelf beslissingen te nemen over je werk, of geeft een vaste structuur je juist rust?</LI>
        <LI>Ben je bereid tijd te steken in administratie, of wil je puur met koken of bediening bezig zijn?</LI>
        <LI>Zoek je nu vooral afwisseling en ervaring, of juist stabiliteit en een team om in te groeien?</LI>
      </UL>
      <P>
        Twijfel je? Je hoeft niet in één keer volledig over te stappen. Veel professionals combineren een vaste
        (parttime) baan met freelance opdrachten in het weekend, om te voelen hoe freelancen bevalt voordat ze de
        knoop volledig doorhakken.
      </P>

      <H2 id="risico-verkleinen">Hoe wij het risico van freelancen verkleinen</H2>
      <P>
        Het grootste nadeel van freelancen is onzekerheid: onzeker of er volgende maand genoeg opdrachten zijn, en
        onzeker of je zelf steeds nieuwe klanten moet vinden. Dat is precies waar Chefs Connect het verschil maakt.
        In plaats van dat je zelf op zoek moet naar opdrachten, schrijf je je één keer in en benaderen wij jou zodra
        er een opdracht is die bij jouw profiel past.
      </P>
      <P>
        Zo combineer je de vrijheid van het freelance-bestaan met een stukje van de zekerheid van een vaste baan: een
        netwerk dat voor je meedenkt, in plaats van dat je er alleen voor staat.
      </P>

      <H2 id="faq">Veelgestelde vragen</H2>
      <H3>Verdien ik als freelancer echt meer dan in loondienst?</H3>
      <P>
        Per uur meestal wel, omdat je tarief je eigen belasting, verzekeringen en pensioen moet dekken. Op jaarbasis
        hangt het af van hoeveel je werkt en hoe goed je opdrachten aan elkaar weet te plannen.
      </P>
      <H3>Kan ik altijd weer terug naar een vaste baan?</H3>
      <P>
        Ja, dat kan. Werkervaring als freelancer wordt door werkgevers doorgaans juist gewaardeerd: je hebt in
        verschillende keukens gewerkt en jezelf bewezen zonder vaste begeleiding.
      </P>
      <H3>Is freelancen risicovoller dan een vast contract?</H3>
      <P>
        Op het gebied van inkomenszekerheid wel, tenzij je dit zelf goed verzekert. Op het gebied van werkzekerheid
        juist niet per se: je bent niet afhankelijk van één werkgever, maar van je eigen netwerk en aanbod aan
        opdrachten.
      </P>
      <H3>Moet ik meteen fulltime freelancen?</H3>
      <P>
        Nee. Veel koks beginnen naast een parttime vaste baan en bouwen hun freelancepraktijk geleidelijk op, tot ze
        genoeg opdrachten en vertrouwen hebben om volledig over te stappen.
      </P>
    </ArticleLayout>
  );
}
