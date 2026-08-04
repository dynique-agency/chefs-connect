'use client';

import ArticleLayout, { Lead, H2, H3, P, UL, LI, TipBox, ComparisonTable } from '@/components/content/ArticleLayout';

export default function FreelanceKokTariefPage() {
  return (
    <ArticleLayout
      category="Voor freelancers"
      title="Freelance kok tarief: wat bepaalt je uurtarief?"
      intro="Nederlandse zzp-koks rekenen gemiddeld €38 tot €45 per uur. Maar dat gemiddelde zegt weinig over wat jij zou moeten vragen. Hieronder de echte cijfers, en de factoren die het verschil maken."
      readingTime="8 min leestijd"
      updated="Laatst bijgewerkt: augustus 2026"
      author={{
        name: 'Gert-Jan',
        role: 'Oprichter Chefs Connect · freelance chef sinds 2018',
        image: '/gert-jan.png',
        bio: 'Gert-Jan werkte ruim 30 jaar in de horeca, van het Kurhaus tot sterrenzaken in Amsterdam. In 2018 koos hij bewust voor het freelance chef-bestaan en richtte later Chefs Connect op.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Kennisbank', href: '/kennisbank' },
        { label: 'Freelance kok tarief', href: '/kennisbank/freelance-kok-tarief' },
      ]}
      toc={[
        { id: 'de-cijfers', label: 'Het korte antwoord: de cijfers' },
        { id: 'nl-vs-be', label: 'Nederland versus België' },
        { id: 'wat-bepaalt', label: 'Wat bepaalt jouw tarief' },
        { id: 'zelf-bepalen', label: 'Hoe je je eigen tarief bepaalt' },
        { id: 'chefs-connect', label: 'Hoe Chefs Connect hierin helpt' },
        { id: 'faq', label: 'Veelgestelde vragen' },
      ]}
      cta={{
        heading: 'Nieuwsgierig wat jouw tarief zou kunnen zijn?',
        text: 'Schrijf je in bij Chefs Connect. We bespreken je ervaring en functie, en zijn vooraf transparant over wat een opdracht oplevert.',
        buttonLabel: 'Word horecaspecialist',
        buttonHref: '/horecaspecialist',
      }}
      related={[
        {
          href: '/kennisbank/freelancen-of-vast-in-de-horeca',
          label: 'Freelancen of vast in de horeca',
          description: 'Een eerlijke vergelijking tussen zzp en loondienst, verder dan alleen het tarief.',
        },
        {
          href: '/kennisbank/freelance-kok-worden',
          label: 'Freelance kok worden: zo begin je',
          description: 'Het stappenplan van KvK-inschrijving tot je eerste opdracht.',
        },
      ]}
    >
      <Lead>
        &quot;Wat kan ik vragen?&quot; is de meest gestelde vraag van koks die net zijn overgestapt naar zzp. Het eerlijke
        antwoord: er is geen vast tarief, wel een duidelijke bandbreedte en een handvol factoren die bepalen waar jij
        binnen die bandbreedte landt. Hieronder beide.
      </Lead>

      <H2 id="de-cijfers">Het korte antwoord: de cijfers</H2>
      <P>
        Volgens het Knab Zzp Uurtarievenboekje 2026, gebaseerd op onderzoek onder ruim 20.000 zzp&apos;ers in Nederland,
        rekent een zelfstandig kok gemiddeld <strong>€38 per uur</strong>. Een chef-kok, meestal met meer
        verantwoordelijkheid of een leidende rol in de keuken, zit met gemiddeld <strong>€45 per uur</strong> hoger.
        Beide liggen ruim onder het zzp-brede gemiddelde van €83 per uur, wat logisch is: dat gemiddelde wordt
        opgetrokken door hoger betaalde specialismes buiten de horeca.
      </P>
      <ComparisonTable
        columns={['Kok', 'Chef-kok']}
        rows={[
          { label: 'Gemiddeld uurtarief', values: ['€38 per uur', '€45 per uur'] },
          { label: 'Declarabele uren per week', values: ['33 uur gemiddeld', '30 uur gemiddeld'] },
          { label: 'Rekent meer dan €45/uur', values: ['Slechts 4% van de koks', '—'] },
        ]}
      />
      <P>
        <em>Bron: Knab Zzp Uurtarievenboekje 2026.</em>
      </P>

      <H2 id="nl-vs-be">Nederland versus België</H2>
      <P>
        In België liggen de tarieven in dezelfde orde van grootte. Volgens Accountable, een Belgisch boekhoudplatform
        voor zelfstandigen, vraagt een zelfstandige kok gemiddeld <strong>€35 tot €40 per uur</strong>, tegenover
        minimaal €20 tot €23 per uur voor een kok in loondienst. Let op: dit cijfer komt niet uit een grootschalige
        steekproef zoals het Nederlandse Knab-onderzoek, dus behandel het als indicatie, niet als harde norm.
      </P>

      <H2 id="wat-bepaalt">Wat bepaalt jouw tarief</H2>
      <P>
        Het gemiddelde is een startpunt, geen doel. Deze factoren bepalen waar jouw tarief boven of onder dat
        gemiddelde uitkomt:
      </P>
      <UL>
        <LI><strong>Functie en verantwoordelijkheid.</strong> Het verschil tussen kok en chef-kok in de cijfers hierboven (€38 versus €45) is precies dit: hoe meer leiding, planning en verantwoordelijkheid, hoe hoger het tarief.</LI>
        <LI><strong>Ervaring en niveau van de keuken.</strong> Een kok met ervaring in een sterrenzaak kan een hoger tarief vragen dan iemand die net begint, ook binnen dezelfde functietitel.</LI>
        <LI><strong>Type opdracht.</strong> Een druk bedrijfsevenement, een besloten diner aan huis, of een dienst bij een zorginstelling vragen andere vaardigheden en andere planning, en dat vertaalt zich in het tarief.</LI>
        <LI><strong>Spoed en beschikbaarheid.</strong> Een opdracht die morgen al ingevuld moet zijn, betaalt doorgaans beter dan een opdracht die maanden van tevoren gepland wordt.</LI>
        <LI><strong>Regio.</strong> In gebieden met meer concurrentie tussen freelancers liggen tarieven soms iets lager dan in regio&apos;s waar minder aanbod is.</LI>
      </UL>
      <TipBox title="Eerlijk advies">
        Ga niet onder het gemiddelde zitten om &quot;maar aan de slag te komen&quot;. Een te laag tarief is lastig te
        verhogen zodra een opdrachtgever eraan gewend is, en het trekt niet per se de opdrachten aan die bij je
        niveau passen.
      </TipBox>

      <H2 id="zelf-bepalen">Hoe je je eigen tarief bepaalt</H2>
      <P>
        Een paar vragen die helpen om van het gemiddelde naar jouw eigen tarief te komen:
      </P>
      <UL>
        <LI>Waar zit jij tussen de instapvariant en de ervaren specialist binnen jouw functie?</LI>
        <LI>Wat zou je in loondienst verdienen, en welke opslag heb je nodig om eigen belasting, verzekeringen en pensioen te dekken?</LI>
        <LI>Hoeveel declarabele uren haal je realistisch per week? De Knab-cijfers (30 tot 33 uur) zijn een goed vergelijkingspunt.</LI>
        <LI>Reken je hetzelfde tarief voor elk type opdracht, of pas je het aan op spoed, locatie en complexiteit?</LI>
      </UL>

      <H2 id="chefs-connect">Hoe Chefs Connect hierin helpt</H2>
      <P>
        Onderhandelen over je eigen tarief is voor veel koks het minst leuke onderdeel van freelancen. Bij Chefs
        Connect werken we met marktconforme tarieven die passen bij jouw functie en ervaring, en zijn we daar vooraf
        transparant over: je weet voor je een opdracht aanneemt precies waar je aan toe bent.
      </P>
      <P>
        Zo hoef je niet elke opdrachtgever apart te overtuigen van je waarde. Dat hebben wij, op basis van je profiel,
        al gedaan.
      </P>

      <H2 id="faq">Veelgestelde vragen</H2>
      <H3>Verschilt het tarief voor bediening ten opzichte van een kok?</H3>
      <P>
        Hierover bestaat geen vergelijkbaar grootschalig onderzoek als voor koks, maar dezelfde factoren gelden:
        functie, ervaring, type opdracht en spoed bepalen het tarief. Bij Chefs Connect bespreken we dit per opdracht,
        ongeacht of je kok of bediening bent.
      </P>
      <H3>Waarom rekent een chef-kok meer dan een kok?</H3>
      <P>
        Vooral door verantwoordelijkheid: een chef-kok stuurt vaak een team aan, plant menu&apos;s en draagt eindverantwoordelijkheid
        voor de keuken. Dat vertaalt zich in het Knab-onderzoek in een gemiddeld €7 hoger uurtarief.
      </P>
      <H3>Kan ik mijn tarief later nog aanpassen?</H3>
      <P>
        Ja. Naarmate je meer ervaring en referenties opbouwt, is het normaal om je tarief geleidelijk te verhogen.
        Begin niet te laag uit angst om opdrachten mis te lopen.
      </P>
      <H3>Zijn deze cijfers exclusief btw?</H3>
      <P>
        Ja, de Knab-cijfers zijn exclusief btw. Vergeet dit niet mee te nemen als je jouw tarief vergelijkt met een
        bruto-uurloon in loondienst.
      </P>
    </ArticleLayout>
  );
}
