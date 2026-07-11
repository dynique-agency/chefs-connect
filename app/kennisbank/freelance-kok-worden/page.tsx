'use client';

import ArticleLayout, { Lead, H2, H3, P, UL, LI, TipBox } from '@/components/content/ArticleLayout';

export default function FreelanceKokWordenPage() {
  return (
    <ArticleLayout
      category="Voor freelancers"
      title="Freelance kok worden: zo begin je"
      intro="Steeds meer koks kiezen voor vrijheid, afwisseling en een hoger uurtarief. Maar hoe maak je de overstap naar zelfstandig ondernemen écht? Dit is het complete stappenplan, van je KvK-inschrijving tot je eerste opdracht."
      readingTime="9 min leestijd"
      updated="Laatst bijgewerkt: juni 2026"
      author={{
        name: 'Gert-Jan',
        role: 'Oprichter Chefs Connect · freelance chef sinds 2018',
        image: '/gert-jan.png',
        bio: 'Gert-Jan werkte ruim 30 jaar in de horeca, van het Kurhaus tot sterrenzaken in Amsterdam. In 2018 koos hij bewust voor het freelance chef-bestaan en richtte later Chefs Connect op.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Kennisbank', href: '/kennisbank' },
        { label: 'Freelance kok worden', href: '/kennisbank/freelance-kok-worden' },
      ]}
      toc={[
        { id: 'is-het-iets-voor-jou', label: 'Is freelancen iets voor jou?' },
        { id: 'wat-is-een-freelance-kok', label: 'Wat is een freelance kok precies?' },
        { id: 'stap-1-kvk', label: 'Stap 1: Schrijf je in bij de KvK' },
        { id: 'stap-2-administratie', label: 'Stap 2: Regel je btw en administratie' },
        { id: 'stap-3-verzekeringen', label: 'Stap 3: Verzeker jezelf goed' },
        { id: 'stap-4-tarief', label: 'Stap 4: Bepaal je uurtarief' },
        { id: 'stap-5-opdrachten', label: 'Stap 5: Kom aan opdrachten' },
        { id: 'valkuilen', label: 'Veelgemaakte fouten' },
        { id: 'faq', label: 'Veelgestelde vragen' },
      ]}
      cta={{
        heading: 'Liever opdrachten dan administratie achter de broek aan?',
        text: 'Schrijf je in bij Chefs Connect. Wij brengen je in contact met de mooiste keukens in Nederland en België, zodat jij je kunt richten op waar je goed in bent: koken.',
        buttonLabel: 'Word horecaspecialist',
        buttonHref: '/horecaspecialist',
      }}
      related={[
        {
          href: '/kennisbank/freelancen-of-vast-in-de-horeca',
          label: 'Freelancen of vast in de horeca?',
          description: 'Nog niet zeker of freelancen bij je past? Een eerlijke vergelijking met een vast contract.',
        },
        {
          href: '/horecaspecialist',
          label: 'Word horecaspecialist',
          description: 'Sluit je aan bij ons netwerk en werk voor high-end locaties in NL & BE.',
        },
      ]}
    >
      <Lead>
        De keuken uit loondienst inruilen voor het zelfstandig ondernemerschap is een grote stap, maar minder
        ingewikkeld dan veel koks denken. Met de juiste voorbereiding sta je sneller op eigen benen dan je verwacht.
        Hieronder lopen we alles door wat je moet regelen, in de volgorde waarin je het aanpakt.
      </Lead>

      <H2 id="is-het-iets-voor-jou">Is freelancen iets voor jou?</H2>
      <P>
        Freelancen geeft je vrijheid: je kiest zelf je opdrachten, je werkdagen en de keukens waar je wilt staan. Daar
        staat tegenover dat je alles zelf regelt: je administratie, je verzekeringen, je pensioen en je inkomen bij
        ziekte. Het past het beste bij koks die zelfstandig kunnen werken, vakinhoudelijk stevig staan en het prettig
        vinden om hun eigen koers te bepalen.
      </P>
      <P>
        Twijfel je nog tussen de zekerheid van een vast contract en de vrijheid van het ondernemerschap? Dan is dit
        artikel vooral het <em>hoe</em>. Ben je nog bezig met het <em>of</em>, dan helpt onze eerlijke vergelijking
        tussen freelancen en vast je verder.
      </P>

      <H2 id="wat-is-een-freelance-kok">Wat is een freelance kok precies?</H2>
      <P>
        Een freelance kok is een zelfstandige ondernemer (zzp&apos;er) die op opdrachtbasis voor verschillende keukens
        werkt, in plaats van in loondienst bij één werkgever. Je factureert je uren of een afgesproken bedrag, en je
        bent zelf verantwoordelijk voor belasting, verzekeringen en je eigen voorzieningen.
      </P>
      <P>
        De meeste startende freelance koks kiezen voor de rechtsvorm <strong>eenmanszaak</strong>. Die is eenvoudig op
        te zetten, kent weinig administratieve verplichtingen en je profiteert als startende ondernemer van een aantal
        fiscale voordelen. Je hoeft géén bv op te richten om te beginnen.
      </P>

      <H2 id="stap-1-kvk">Stap 1: Schrijf je in bij de KvK</H2>
      <P>
        Je eerste officiële stap is de inschrijving bij de Kamer van Koophandel. Dat doe je online een afspraak voor en
        je rondt het af op een KvK-kantoor. Je betaalt een eenmalig inschrijfbedrag (rond de €80) en je krijgt direct
        je KvK-nummer.
      </P>
      <P>
        De KvK geeft je inschrijving automatisch door aan de Belastingdienst. Die beoordeelt of je voor de btw
        ondernemer bent en stuurt je een btw-identificatienummer (btw-id) toe. Dat nummer zet je op je facturen.
      </P>
      <TipBox title="Tip">
        Bedenk vooraf een bedrijfsnaam en check of die nog vrij is in het KvK-register. Veel koks gebruiken simpelweg
        hun eigen naam, en dat werkt prima en is makkelijk te onthouden voor opdrachtgevers.
      </TipBox>

      <H2 id="stap-2-administratie">Stap 2: Regel je btw en administratie</H2>
      <P>
        Als zelfstandige reken je over je diensten meestal 21% btw, die je per kwartaal afdraagt aan de Belastingdienst.
        Een goede, opgeruimde administratie is daarbij geen luxe maar pure noodzaak. Het scheelt je stress én geld.
      </P>
      <H3>Wat je administratie minimaal bevat</H3>
      <UL>
        <LI>Verstuurde facturen met alle verplichte gegevens (je KvK-nummer, btw-id, factuurnummer, datum en btw-bedrag)</LI>
        <LI>Een overzicht van je gewerkte uren per opdracht</LI>
        <LI>Je zakelijke kosten en bonnetjes (werkkleding, messen, reiskosten, opleidingen)</LI>
        <LI>Een aparte rekening waarop je btw en inkomstenbelasting apart zet</LI>
      </UL>
      <P>
        Houd vanaf dag één bij hoeveel uur je werkt. Maak je in een jaar meer dan 1.225 uur als ondernemer, dan kom je
        mogelijk in aanmerking voor extra fiscale voordelen zoals de zelfstandigenaftrek. Werk je naast een vaste baan
        en blijft je omzet beperkt, dan kan de kleineondernemersregeling (KOR) interessant zijn.
      </P>
      <TipBox title="Belangrijk">
        De fiscale regels rond ondernemerschap veranderen regelmatig en hangen af van jouw persoonlijke situatie.
        Schakel bij twijfel een boekhouder in of gebruik een boekhoudprogramma. De eerste investering verdient zichzelf
        bijna altijd terug.
      </TipBox>

      <H2 id="stap-3-verzekeringen">Stap 3: Verzeker jezelf goed</H2>
      <P>
        Dit is het onderdeel dat startende freelancers het vaakst overslaan, en waar het mis kan gaan. Zonder werkgever
        valt je inkomen weg op het moment dat jij niet kunt werken. Regel daarom op tijd je vangnet.
      </P>
      <UL>
        <LI>
          <strong>Arbeidsongeschiktheidsverzekering (AOV):</strong> vervangt je inkomen als je door ziekte of een
          blessure langere tijd niet kunt werken. Voor een kok, met fysiek werk en messen, is dit het belangrijkste.
          Een goedkoper alternatief is aansluiten bij een broodfonds.
        </LI>
        <LI>
          <strong>Bedrijfsaansprakelijkheidsverzekering (AVB):</strong> dekt schade die je tijdens een opdracht
          veroorzaakt. Veel opdrachtgevers stellen dit als voorwaarde.
        </LI>
        <LI>
          <strong>Zorgverzekering:</strong> die had je al, maar reken erop dat je nu de volledige premie zelf draagt,
          zonder werkgeversbijdrage.
        </LI>
        <LI>
          <strong>Pensioen:</strong> als zzp&apos;er bouw je niet automatisch pensioen op. Leg zelf maandelijks iets
          opzij, bijvoorbeeld via een lijfrente.
        </LI>
      </UL>

      <H2 id="stap-4-tarief">Stap 4: Bepaal je uurtarief</H2>
      <P>
        De meest gemaakte beginnersfout is je oude bruto-uurloon één-op-één overnemen als freelancetarief. Dat is te
        laag. Als zelfstandige betaal je namelijk zelf je belasting, verzekeringen en pensioen, en je krijgt geen
        doorbetaalde vakantie, vrije dagen of loon bij ziekte.
      </P>
      <P>Reken bij het bepalen van je tarief dus mee:</P>
      <UL>
        <LI>De belasting en btw die je afdraagt</LI>
        <LI>Je verzekeringen en je pensioenopbouw</LI>
        <LI>Niet-declarabele uren (administratie, reizen, acquisitie)</LI>
        <LI>Periodes zonder opdrachten en de dagen dat je vrij of ziek bent</LI>
      </UL>
      <P>
        Onderzoek daarnaast wat marktconform is voor jouw functie en niveau. Het tarief van een zelfstandig werkend kok
        ligt anders dan dat van een head chef. In een apart artikel gaan we dieper in op wat een freelance kok
        realistisch verdient.
      </P>

      <H2 id="stap-5-opdrachten">Stap 5: Kom aan opdrachten</H2>
      <P>
        Je papieren zijn op orde. Nu het echte werk: aan opdrachten komen. In de horeca loopt dat grotendeels via je
        netwerk en je reputatie. Een paar manieren die werken:
      </P>
      <UL>
        <LI>Je eigen netwerk: laat oud-collega&apos;s, leveranciers en kennissen weten dat je freelance beschikbaar bent</LI>
        <LI>Social media: een verzorgd Instagram-profiel met je werk trekt opdrachtgevers aan</LI>
        <LI>Direct contact met zaken waar jij graag zou willen staan</LI>
        <LI>Aansluiten bij een bemiddelaar die opdrachten voor je binnenhaalt</LI>
      </UL>
      <P>
        Dat laatste is precies waarom wij Chefs Connect zijn begonnen. In plaats van zelf eindeloos te acquireren,
        schrijf je je één keer in en benaderen wij jou zodra er een opdracht is die bij je past. Wij regelen het contact
        met de opdrachtgever en de afspraken, zodat jij je op de keuken kunt richten.
      </P>

      <H2 id="valkuilen">Veelgemaakte fouten (en hoe je ze voorkomt)</H2>
      <P>Na jaren in het freelancevak zie ik startende koks steeds dezelfde dingen verkeerd doen. De belangrijkste:</P>
      <UL>
        <LI><strong>Te laag inschatten van je tarief.</strong> Reken alles mee wat een werkgever vroeger voor je betaalde.</LI>
        <LI><strong>Geen geld apart zetten voor de belasting.</strong> Zet bij elke factuur een deel opzij, dan kom je nooit voor verrassingen te staan.</LI>
        <LI><strong>Je AOV uitstellen.</strong> Eén blessure kan maandenlang je inkomen wegnemen. Regel het vanaf het begin.</LI>
        <LI><strong>Te afhankelijk worden van één opdrachtgever.</strong> Werk je structureel fulltime voor dezelfde zaak, let dan op de regels rond schijnzelfstandigheid (de Wet DBA). Echte zelfstandigheid betekent meerdere opdrachtgevers en eigen afspraken.</LI>
      </UL>

      <H2 id="faq">Veelgestelde vragen</H2>
      <H3>Heb ik een diploma nodig om freelance kok te worden?</H3>
      <P>
        Wettelijk is een koksdiploma niet verplicht om je als zelfstandige in te schrijven. In de praktijk vragen
        opdrachtgevers vooral naar ervaring en vakmanschap. Een diploma en aantoonbare ervaring helpen je wel aan betere
        en beter betaalde opdrachten.
      </P>
      <H3>Hoeveel verdient een freelance kok?</H3>
      <P>
        Dat hangt af van je functie, ervaring en regio. Het uurtarief van een freelance kok ligt duidelijk hoger dan een
        bruto-uurloon in loondienst, omdat je daar je eigen belasting, verzekeringen en pensioen uit betaalt. We werken
        dit verder uit in een apart artikel over freelancetarieven.
      </P>
      <H3>Heb ik meteen veel opdrachten nodig om te starten?</H3>
      <P>
        Nee. Veel koks bouwen het rustig op, soms naast een vaste baan. Belangrijk is dat je je administratie en
        verzekeringen op orde hebt vanaf het moment dat je je eerste opdracht aanneemt.
      </P>
      <H3>Kan ik freelancen combineren met een vaste baan?</H3>
      <P>
        Ja, dat kan en het is een veelgekozen manier om te starten. Je houdt de zekerheid van je vaste inkomen en bouwt
        ondertussen je freelancepraktijk en netwerk op. Let wel op afspraken met je huidige werkgever.
      </P>
      <H3>Hoe snel kan ik beginnen na mijn KvK-inschrijving?</H3>
      <P>
        In principe direct. Zodra je bent ingeschreven en je btw-id hebt ontvangen, mag je factureren. Schrijf je je
        daarnaast in bij Chefs Connect, dan kunnen wij je vaak binnen één tot twee weken een eerste passende opdracht
        voorstellen.
      </P>
    </ArticleLayout>
  );
}
