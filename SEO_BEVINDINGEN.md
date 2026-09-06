# SEO bevindingen: open punten

Doorlopend logboek van technische en strategische SEO-bevindingen uit GSC-analyses. Bijhouden bij elke nieuwe export, status bijwerken zodra iets is opgelost of bewust is afgewezen.

Andere trackers in deze map: [CONVERSIE_STRATEGIE.md](CONVERSIE_STRATEGIE.md) (conversie/CRO, losstaand onderwerp), [INDEXING_TODO.md](INDEXING_TODO.md) (welke URL's nog handmatig geïndexeerd moeten worden).

---

## DBA-check ronde 4: volledige door-en-door deepscan op sterkere werkgeverschap-indicatoren (3 september 2026)

**Aanleiding**: klant vroeg om nog een keer een volledige, strenge scan, na de eerdere 3 rondes (checklist, deepscan-rapport, live feedback-sweep). Dit keer specifiek gezocht op zwaardere juridische termen die nog niet eerder gecontroleerd waren: arbeidsovereenkomst, cao, proeftijd, opzegtermijn, salarisstrook, vakantiedagen, verlof, ziekteverzuim, functioneringsgesprek, instructies, werkgever, ons team.

**Belangrijkste bevinding: "werkgever" als woord is structureel fout, ongeacht context.** "Werkgever" betekent letterlijk "employer", en de site gebruikte dit woord op 7 plekken om de opdrachtgever-doelgroep aan te duiden (secties "Voor Werkgevers" op de homepage, `/limburg` en `/zeeland`, plus FAQ-antwoorden en herotekst). Overal vervangen door "opdrachtgever", de term die al consequent elders op de site wordt gebruikt.

**Wél gevonden, maar bewust NIET aangepast, met reden**:
- `app/terms/page.tsx`: "Er bestaat geen arbeidsovereenkomst tussen ChefsConnect en de Freelancer", dit is precies de juiste, expliciete disclaimer, een sterk punt, geen wijziging nodig.
- `app/terms/page.tsx`: "De Freelancer verwerkt persoonsgegevens uitsluitend conform de AVG en instructies van ChefsConnect", dit gaat over gegevensverwerking (een verplichte AVG-verwerkersovereenkomst-clausule), niet over het aansturen van kookwerk. Correct en verplicht, geen DBA-risico.
- Kennisbank-artikel "freelancen-of-vast-in-de-horeca": bevat bewust woorden als "vakantiedagen", "salarisadministratie", "werkgever" en "doorbetaling bij ziekte", maar uitsluitend om het verschil met loondienst uit te leggen aan de lezer. Dit is precies het soort voorlichtende content dat DBA-bewustzijn juist aantoont, geen risico.
- `vacature-instellingskok/page.tsx`: "Een vaste instellingskok die met verlof of ziek is" beschrijft de eigen, echte vaste medewerker van de OPDRACHTGEVER (de instelling), niet een Chefs Connect-freelancer. Correct gebruik.

**Enige punt dat we niet zelf mogen oplossen, moet naar een jurist**: `app/terms/page.tsx`, regel 252: "Beide partijen kunnen de samenwerking te allen tijde beëindigen met een opzegtermijn van 1 maand." Een wettelijke opzegtermijn van 1 maand is een kenmerk dat traditioneel bij arbeidsovereenkomsten hoort (BW 7:672) en kan, samen met andere factoren, meewegen in een schijnzelfstandigheid-beoordeling. Dit staat in de Algemene Voorwaarden, een formeel juridisch document, dit is bewust niet zelf herschreven, dit hoort door een jurist beoordeeld te worden, niet door copy-aanpassingen.

**Status**: alle overige gecontroleerde categorieën (proeftijd, cao, salarisstrook, ziekmelden, functioneringsgesprek, beoordelingsgesprek, functieomschrijving, rooster, "ons team"/"onze mensen") leverden geen nieuwe risico's op. Vier rondes DBA-taalcorrectie zijn nu afgerond; het enige nog openstaande punt is de opzegtermijn-clausule (jurist) en de eerdere cateringpartner-vraag (loondienst vs. zzp bij Connect Events & Dining, wacht op bevestiging van de klant).

---

## DBA-check ronde 3: live feedback-sessie op de website + brede deepscan op "leveren"/"planning"/"begeleiding" (3 september 2026)

**Aanleiding**: klant liep live door de site (mobiele screenshots) en stuurde tientallen losse correcties na elkaar op taal die nog naar schijnzelfstandigheid kon wijzen, vooral op `/zoek-personeel` en `/horecaspecialist`. Alles stuk voor stuk verwerkt zoals binnenkwam.

**Belangrijkste wijzigingen**:
- H1 zoek-personeel: "Koks en bediening verbinden" → "Wij connecten koks en bedieningsmedewerkers" (klant wil "connecten" i.p.v. "verbinden" voor nieuwe copy, verwijzend naar de merknaam Chefs Connect zelf; bestaande "verbinden"-teksten uit eerdere rondes zijn NIET met terugwerkende kracht aangepast, dat zou een aparte, grote herschrijving zijn)
- "Planning" en "contracten" als woorden zijn nu expliciet verboden, overal vervangen door neutralere termen: "Contracten en administratie" → "Samenwerkingsovereenkomsten", "Professioneel planningssysteem" → "Jij plant jezelf in", "Duidelijke planning" → "Heldere afspraken"
- Tarief-framing omgedraaid naar opdrachtgever-bepaalt / freelancer-beslist: "Goede en eerlijke tarieven" → "Tarief accepteren of zelf een tarief bepalen", FAQ "Wat verdien ik als freelancer?" volledig herschreven (opdrachtgever bepaalt tarief, jij accepteert/weigert/doet tegenvoorstel, jij bent de ondernemer)
- "Langdurig(e)" en "vaste" als duurzaamheids-framing zoveel mogelijk verwijderd of expliciet gekoppeld aan DBA-proof: "Langdurige plaatsingen" → "Langdurige plaatsingen, DBA-proof geregeld", "ruim 50 vaste samenwerkingen" → "meer dan 350 horecazaken waarmee we samenwerken"
- "Persoonlijke begeleiding" (impliceert supervisie/afhankelijkheid) vervangen door ondernemerschap-taal: "Bij ons ben jij een echte ondernemer", "Persoonlijk contact", "Persoonlijk aanspreekpunt"
- **Grootste bevinding van de deepscan**: de FAQ-vraag "Hoe snel kan Chefs Connect een kok leveren in {stad}?" en "Welke koks kunnen jullie leveren in {stad}?" stond nog letterlijk op praktisch elke personeel-{stad}-pagina (92 treffers, gemist in de vorige DBA-ronde omdat toen alleen de FAQ-antwoorden zijn gecheckt, niet de vragen zelf). Sitebreed vervangen door "voorstellen".
- "Uitdagingen van planning", "Strakke planning" (evenementenpagina) en "planning en uitvoering tot in de puntjes" (2 plekken) ook herschreven, ook al was de context hier client-facing (evenementlogistiek) in plaats van freelancer-aansturing, voor volledige consistentie met de strenge lijn van vandaag.

**Bewust ongewijzigd gelaten (geen DBA-relevantie)**: "planning" in TeamStack.tsx (Marcels echte functietitel "Horeca Planner" en zijn eigen citaat), "sous chef" in Robins bio (zijn eigen carrièregeschiedenis), "leveren" in juridische/logistieke context zonder personeelsbetekenis (algemene voorwaarden, "product aanleveren", "niet inleveren op kwaliteit"), citaten in echte klantreviews (Reviews.tsx, niet zelf te herschrijven).

**Nog openstaand**: cateringpartner-pagina ("vaste samenwerking", "aansturen van een keukenbrigade") is nog niet aangepast, hangt af van een feit dat nog niet is bevestigd: werken de chefs van Connect Events & Dining daar in loondienst (dan is dit geen DBA-kwestie) of ook als zzp'er.

**Verificatie**: `npm run build` slaagt, em-dash-check schoon over de volledige `app/` en `components/` boom.

---

## DBA-check ronde 2: strenge deepscan op schijnzelfstandigheid, "inhuren" uit alle zichtbare tekst (3 september 2026)

**Aanleiding**: klant vroeg om een strenge, volledige deepscan op alles wat op schijnzelfstandigheid kan duiden, los van de eerste ronde (leveren/versterken/sous chef/commis kok, zie hierboven bij "DBA-proof gemaakt"). Eerst gerapporteerd, daarna op klantverzoek volledig doorgevoerd.

**Nieuwe bevindingen uit de deepscan, met acties**:
1. **"Wij sturen je mensen"**: 36 instanties, de `whyHeadingLead` in de "Waarom Chefs Connect"-sectie op vrijwel elke personeel-{stad}-pagina. Geen onderdeel van ronde 1 (die ging over "leveren"/"versterken"), maar hetzelfde probleem: impliceert dat Chefs Connect bepaalt wie waar wordt ingezet. → vervangen door "Wij verbinden je met mensen".
2. **"[rol] van Chefs Connect" in foto-alt-teksten**: 7 plekken, waaronder de gedeelde component `CityStaffingPage.tsx` (cascadeert naar tientallen pagina's). De bezitsvorm naast een freelancer-functietitel impliceert dienstverband. → "van Chefs Connect" weggehaald, alt-tekst blijft verder inhoudelijk gelijk. Bewust ongewijzigd gelaten: "van Chefs Connect" bij het eigen team/oprichters (over-ons, TeamStack, kennisbank-auteurs), dat klopt gewoon.
3. **"geleverd door Chefs Connect"** in een alt-tekst (zoek-personeel): zelfde categorie als 2, weggehaald.
4. **"de juiste medewerker voorstellen"**: verzacht naar "de juiste professional voorstellen".

**Grote vervolgstap, op expliciet klantverzoek**: "ons personeel" en "inhuren" mogen nergens meer voorkomen, met de kernboodschap "Chefs Connect is een platform dat horeca-zzp'ers verbindt met horecazaken, wij zijn geen uitzendbureau." "Ons personeel" bleek al nergens te bestaan (bevestigd in ronde 2 zelf). Voor "inhuren" (388 instanties in de hele codebase) is expliciet aan de klant voorgelegd of dit ook de SEO-titels/keywords/meta-descriptions moet raken, gezien het risico dat dit de bestaande rankings op "kok inhuren {stad}" kan laten zakken. Klant koos voor de veilige optie: **"inhuren" blijft staan in title-tags, keywords-arrays, meta-descriptions en schema.org `serviceType`-velden (236 instanties, onzichtbaar voor bezoekers, blijft de SEO-strategie intact), en is volledig verwijderd uit alle zichtbare pagina-tekst** (144 instanties in page.tsx-bestanden plus 5 in gedeelde/homepage-componenten: `ServicesGrid.tsx`, `Reviews.tsx`, `Footer.tsx`). Belangrijkste patronen: `cta: 'Kok inhuren'` (stedenlijst-CTA's) en `label: 'Kok inhuren {Stad}'` (relatedLinks tussen steden) zijn overal vervangen door "Kok verbinden"/"Kok verbinden {Stad}", de H1 op `/zoek-personeel` ("Koks en bediening inhuren") is "Koks en bediening verbinden" geworden.

**Nog open, klant heeft zelf gekozen dit niet mee te nemen**: `cateringpartner`-pagina ("zonder zelf een keukenbrigade te hoeven aansturen") gaat over een andere dienst (Connect Events & Dining, catering-partnerschap, niet zzp-bemiddeling). Of dit een risico is hangt af van of die chefs in loondienst zijn of ook zzp'er, dat kon niet uit de code worden afgeleid. Nog niet uitgezocht of aangepast.

**Bewust ongewijzigd gelaten (laag risico, geen actie)**: "bedieningsmedewerker" als functienaam (standaardterm, geen alternatief), salaris/loon-taal in kennisbank-educatie (legitiem contrast met loondienst), de FAQ "Wat maakt Chefs Connect anders dan andere uitzendbureaus?" (positieve framing, onderscheidt juist van een uitzendbureau), "aansturen" bij Robins eigen biografie en bij de klant die op locatie de zaal leidt.

**Verificatie**: `npm run build` slaagt, geen fouten, em-dash-check schoon, live gecontroleerd op `/zoek-personeel` (H1 en alle stedenlijst-CTA's tonen "verbinden", browser-tab-titel toont nog steeds de originele SEO-titel met "Inhuren" zoals bedoeld).

---

## DBA-proof gemaakt: taalgebruik, adres en juridische gegevens aangepast (3 september 2026)

**Aanleiding**: klantverzoek om de site "DBA-proof" te maken, met een concrete lijst van aanpassingen. Eerst een deepscan gedaan (grep over de hele codebase) om de precieze omvang van elk punt te bepalen voordat er iets werd aangepast, gezien de reële juridische/financiële risico's (schijnzelfstandigheid) en de kans op sitebrede SEO-schade als "inhuren" overal zou worden vervangen.

**Uitgevoerd**:
- "Wij leveren" → "Wij verbinden (je met)": 59+ instanties over vrijwel alle personeel-{stad}-pagina's, plus homepage en footer-taglines.
- "Versterken" → "Verbinden": 3 instanties (contactpagina-meta, homepage IntroSection).
- "Koks en bediening inhuren" → herschreven met "verbinden": alleen de 3 specifieke meta-omschrijvingen (`/zoek-personeel`, `/limburg`, `/zeeland`) die deze exacte zin bevatten. De overige ~390 "inhuren"-vermeldingen in titels/keywords sitewide zijn bewust ongemoeid gelaten, dat is de kern van maanden SEO-targeting en had zonder expliciete opdracht niet aangeraakt mogen worden.
- "350+"-stat: KVK-registratie toegevoegd in de twee plekken waar dit als lopende zin voorkomt (`/zoek-personeel`, `PremiumStaffingPopup`). De compacte statistiek-tegels (`350+ / Professionals`) zelf zijn ongewijzigd gelaten, "KVK-geregistreerd" past niet leesbaar in dat kleine tegelformaat.
- Adres Gasthuisstraat 3.1 → Stationsstraat 2, Lanaken: 4 bestanden (homepage schema.org, contactpagina, privacypagina, footer).
- Openingstijden (ma-vr 09:00-15:00) toegevoegd: footer, contactpagina, en schema.org `OpeningHoursSpecification` op de homepage `EmploymentAgency`-schema. Bestond nog nergens op de site.
- E-mailadres (info@chefs-connect.nl, geen .be-variant bestaat in de code) volledig weggehaald uit zichtbare tekst: contactpagina (2x), privacypagina (2x), footer, over-ons, cookies. De achterliggende ontvanger in `lib/form-submit.ts` is bewust ongewijzigd gelaten, dat is waar alle formulieren van de hele site naartoe gaan; verwijderen had ingezonden aanvragen laten verdwijnen.
- "Commis kok" volledig verwijderd (rol-tegel én functie-dropdown) uit de 2 gedeelde componenten (`CityStaffingPage.tsx`, `CityFreelancerPage.tsx`) plus de 2 legacy pagina's (Maastricht, Eindhoven) die geen gebruik maken van de gedeelde component. De rol-tegel is vervangen door een nieuwe tegel "Altijd DBA-proof" (juridisch getoetste plaatsingen), de dropdown-optie is gewoon verwijderd zonder vervanging.
- "Sous chef" → "Plaatsvervangend keukenchef": overal, inclusief de FAQ-zin "Wij bemiddelen head chefs, sous chefs..." op ~49 stedenparen (page.tsx + layout.tsx). Bewust NIET aangepast: de biografie van teamlid Robin in `TeamStack.tsx`, die beschrijft zijn eigen, echte carrièregeschiedenis als "sous chef", geen Chefs Connect-functieomschrijving.

**Bijvangst, apart gecorrigeerd op verzoek**: de privacypagina toonde een Nederlands KVK-nummer (95845445) en NL-btw-nummer (NL866528476B01), terwijl eerder onderzoek deze engagement (29 augustus) via een live KVK-check bevestigde dat er geen Nederlandse inschrijving bestaat. Vervangen door het geverifieerde Belgische ondernemingsnummer (BE1017.734.787) als zowel ondernemingsnummer als btw-nummer.

**Nog open, wacht op klant**: de "50+"-stat kon nergens op de site worden gevonden (alleen 150+/250+/350+ bestaan), klant zoekt dit apart na.

**Verificatie**: `npm run build` slaagt (172 statische routes, geen fouten), em-dash-check schoon op alle gewijzigde bestanden, FAQ-tekst steekproefsgewijs programmatisch gecontroleerd op overeenkomst tussen page.tsx en layout.tsx na de sitebrede sous-chef-vervanging, live gecontroleerd in de browser (contactpagina, personeel-groningen, privacypagina).

---

## Kwartaalcheck op klantverzoek: bevestigt dat contentwerk nog geen return heeft opgeleverd (3 september 2026)

**Aanleiding**: klant vroeg direct om een eerlijke beoordeling van de afgelopen 3 maanden, expliciet gekoppeld aan de €375/maand die betaald wordt. Bron: chefs-connect-14 (.nl-export) en chefs-connect-15 (.be-export), beide "afgelopen 3 maanden" (2 juni t/m 1 september 2026).

**Kernmeting, niet-merk-klikken (de enige eerlijke maat voor organisch bereik)**: 10 klikken op 5.095 vertoningen in 3 maanden op .nl (waarvan zo'n 5 pure ruis: "graag", "who is the boss", "kok"). Op .be: 1 klik op 85 vertoningen. Merk-klikken (chefs connect/chefsconnect/chef connect/chefconnect): 342 van de 568 totale .nl-klikken zijn met zekerheid te classificeren als merk, de rest van de 568 zit in een GSC-anonimiseringsbucket zonder querytekst, vermoedelijk grotendeels ook merkvarianten gezien het patroon.

**Zichtbaarheid is er wel, ranking niet**: hoge vertoningsvolumes op precies de juiste termen ("kok aan huis maastricht" 330 vert., "kok aan huis nijmegen" 284, "vacature kok nijmegen" 172, "kok zuid-limburg" 151, "private dining nijmegen" 143), allemaal 0 klikken door posities 24-67. Bevestigt de 26 augustus-diagnose: geen content/targeting-probleem, een autoriteitsprobleem.

**Trend is schijngroei**: klikken/vertoningen stijgen maand op maand (juni 150/1.461, juli 178/2.766, augustus 231/3.783), maar CTR daalt gelijktijdig (10,3% → 6,4% → 6,1%). Groei komt van meer lange-staart-vertoningen op slechte posities, niet van betere rankings.

**De 30 nieuwe pagina's van deze sessie (Zeeland/Groningen/Valkenburg/Echt/Best/Terneuzen/Domburg/Renesse, 3 kennisbank-artikelen)**: vrijwel nog niet in GSC te zien (1 vertoning, 0 klikken totaal, op `/kennisbank/tips-freelance-bediening`). Verwacht en normaal gezien de leeftijd, te vroeg om te beoordelen, over 4-8 weken opnieuw meten.

**.be-canonical-herstel (fix van 9 juli, zie eerdere bevinding "0a")**: nog steeds nagenoeg dood, 0 klikken werd 1 klik. Bij het volgende kwartaalmoment (eind september/begin oktober) is de fix dan 11-12 weken oud, aan het einde van het verwachte hersteltraject. Als er dan nog geen beweging is, moet dit als apart probleem opnieuw onderzocht worden, niet langer wegschrijven als "nog aan het herstellen".

**Conclusie, eerlijk aan de klant gecommuniceerd**: contentwerk (deze sessie en de kwartalen ervoor) heeft nog geen meetbare niet-merk-vindbaarheid opgeleverd. Bevestigt, versterkt zelfs, de koerswijziging van 26 augustus naar backlinks als hoofdprioriteit. Op het moment van deze check staat backlink-uitvoering nog vroeg (1 directoryvermelding live: Gouden Gids BE, de rest van de kandidatenlijst grotendeels nog open), dus dit kwartaal is bewijs dat de pivot nodig was, niet dat hij al resultaat heeft gehad.

- **Status**: analyse afgerond en direct met klant gedeeld. Vervolgstap: backlink-uitvoering versnellen (Federgon-lidmaatschap, Qwoted-profiel afmaken, Horeca Webservice-pitch, Knab-pitch, resterende directories), en over 4-8 weken zowel de nieuwe pagina's als .be-herstel opnieuw meten.

---

## Regionale dekking Limburg, Noord-Brabant en Zeeland volledig gemaakt (31 augustus 2026)

**Aanleiding**: expliciet klantverzoek om alle genoemde steden in Limburg, Noord-Brabant en Zeeland te dekken: Sittard, Kerkrade, Valkenburg, Echt, Roermond, Weert, Venlo, Tilburg, Breda, Eindhoven, Roosendaal, Waalwijk, Oss, Helmond, Best, Terneuzen, Vlissingen, Middelburg, Domburg, Goes, Renesse.

**Verschil met de eerdere afwijzing van 29 augustus**: dit is bewust NIET hetzelfde behandeld als het eerdere verzoek om alle Nederlandse steden en provincies te bouwen (dat is toen afgewezen wegens gebrek aan bewijs en het risico op dunne contentpagina's, zie hierboven). Dit verzoek is wel uitgevoerd zonder verder onderzoek, om drie redenen: het is expliciet begrensd tot 3 regio's waarin Chefs Connect al actief bouwt en al de meeste steden dekt, 15 van de 21 genoemde steden bestonden al (zie hieronder), en de resterende 6 zijn reële, verklaarbare aanvullingen op regio's die al bewezen zoekvolume en actieve opdrachten hebben, niet een blinde uitbreiding naar onbewezen nieuwe regio's.

**Al bestaand (15 van 21, geen actie nodig)**: Sittard (gedekt via de bestaande gecombineerde `personeel-sittard-geleen`), Kerkrade, Roermond, Weert, Venlo, Tilburg, Breda, Eindhoven, Roosendaal, Waalwijk, Oss, Helmond, Vlissingen, Middelburg, Goes.

**Nieuw gebouwd (6 steden, elk personeel + vacature-kok + vacature-bediening)**:
- **Valkenburg** (Zuid-Limburg): toegevoegd aan `/limburg`-hub. Toeristenstadje met kasteel, mergelgrotten en kerstmarkten, buitengewoon hoge horecadichtheid voor zijn omvang.
- **Echt** (Midden-Limburg, gemeente Echt-Susteren): toegevoegd aan `/limburg`-hub. Kleinschaliger, landelijke horeca dicht bij Roermond en Weert.
- **Best** (Noord-Brabant, Brainportregio): geen provinciehub beschikbaar (Noord-Brabant heeft er geen), staat los in `/zoek-personeel` en `/horecaspecialist`, net als de bestaande Brabantse steden.
- **Terneuzen** (Zeeuws-Vlaanderen): toegevoegd aan `/zeeland`-hub. Grootste gemeente van Zeeuws-Vlaanderen, havenstad met internationale industrie.
- **Domburg** (Walcheren): toegevoegd aan `/zeeland`-hub. Kleine vaste bevolking maar een van de bekendste Zeeuwse badplaatsen, sterk seizoensgebonden horecavraag.
- **Renesse** (Schouwen-Duiveland): toegevoegd aan `/zeeland`-hub. Drukste badplaats van Schouwen-Duiveland, vergelijkbaar seizoenspatroon als Domburg.

**Wiring**: `app/sitemap.ts` (18 nieuwe URL's), `/limburg` en `/zeeland` provinciehubs bijgewerkt (steden toegevoegd aan de lijsten, hero-tekst en FAQ-antwoorden aangepast, schema in de bijbehorende `layout.tsx` in sync gehouden), `/zoek-personeel` en `/horecaspecialist` stedenlijsten uitgebreid, `INDEXING_TODO.md` (18 nieuwe URL's × 2 domeinen).

**Verificatie**: `npm run build` slaagt (172 statische routes), geen em-dashes/en-dashes, geen dubbele of overschreven bestaande stad, FAQ-tekst programmatisch gecontroleerd op overeenkomst tussen elke `page.tsx` en de bijbehorende `layout.tsx`-schema (18 pagina's, alle geslaagd), live gecontroleerd in de browser (personeel-domburg: stats-balk, reviews, FAQ inclusief de automatisch toegevoegde "Kok gezocht"-vraag, en de relatedLinks naar Middelburg/Vlissingen kloppen).

---

## Woordvolgorde en "gezocht" versus "nodig": rankingverschil per zoekvariant (31 augustus 2026)

**Aanleiding**: de vraag waarom we bij "kok nodig + stad" bovenaan staan, maar niet meer bij omgekeerde volgorde of varianten als "snel kok gezocht + stad" en "zzp kok gezocht + stad". Live getoetst op Google.nl (hl=nl, gl=nl) met Maastricht als testcase, 4 varianten:

- **"kok nodig maastricht"**: chefs-connect.nl staat bovenaan de organische resultaten. Bevestigt de eigen waarneming.
- **"maastricht kok nodig"** (omgekeerde volgorde): zelfde pagina staat er nog wel, maar zakt naar positie 5-6 organisch. Een reële, meetbare terugval, geen inbeelding.
- **"snel kok gezocht maastricht"**: chefs-connect.nl staat helemaal niet op pagina 1. De hele SERP wordt gedomineerd door vacaturesites (Indeed, Jooble, LinkedIn, Nationale Vacaturebank, Tempo Team). Google interpreteert "gezocht" hier als een vacaturetekst-zoekopdracht, niet als "ik wil een bemiddelingsbureau inhuren".
- **"zzp kok gezocht maastricht"**: chefs-connect.nl staat weer op positie 1 organisch. Het woord "zzp" trekt de intentie terug naar zelfstandige/freelance-inhuur, waar onze pagina wel als relevant wordt gezien.

**Conclusie**: twee verschillende problemen, twee verschillende oplossingen.
1. Woordvolgorde en "snel"/"zzp"-varianten: oplosbaar met on-page content. Elke `personeel-{stad}`-pagina heeft nu een extra FAQ-vraag die deze varianten natuurlijk in de tekst verwerkt.
2. Kaal "kok gezocht" (zonder zzp-signaal): dit is een intentie-classificatieprobleem bij Google, niet een contentprobleem. De hele eerste pagina bestaat uit grote vacature-aggregators met veel meer domeinautoriteit op die specifieke zoekintentie. On-page tekst alleen gaat dit niet doorbreken. Bevestigt nogmaals de eerder vastgestelde koerswijziging: voor dit soort concurrentie is autoriteit (backlinks) de hefboom, niet meer content.

**Uitgevoerd**: één nieuwe FAQ-vraag ("Kok gezocht in {stad}? Is dat hetzelfde als bij Chefs Connect?") toegevoegd aan alle 40 `personeel-{stad}`-pagina's. De vraag legt eerlijk uit dat "kok gezocht" meestal een vacaturetekst is, en verwerkt daarbij natuurlijk de omgekeerde woordvolgorde ("in {stad} snel een kok nodig") en de zzp-variant. Voor de 38 pagina's op het gedeelde `CityStaffingPage`-component is dit één centrale code-wijziging die overal automatisch doorwerkt. Voor Maastricht en Eindhoven (twee losstaande, niet-gedeelde pagina's) is de vraag rechtstreeks toegevoegd.

**Bijvangst, los van deze vraag maar wel gevonden en meteen gefixt**: de `personeel-maastricht`- en `personeel-eindhoven`-pagina's bleken een FAQPage-schema van 3 vragen in hun `layout.tsx` te hebben zonder dat er ook maar één FAQ-sectie zichtbaar op de pagina zelf stond. Onzichtbare structured data die niet overeenkomt met de zichtbare pagina is tegen Google's eigen richtlijnen voor rijke resultaten. Beide pagina's hebben nu de bijbehorende zichtbare FAQ-sectie gekregen (de 3 bestaande vragen plus de nieuwe).

**Nog openstaand, bewust niet meegenomen**: Maastricht en Eindhoven zijn de enige twee `personeel-{stad}`-pagina's die nog met losse, verouderde code werken in plaats van het gedeelde `CityStaffingPage`-component. Daardoor missen ze ook de stats-balk en reviews-sectie die de overige 38 steden wel hebben. Dat is een aparte, grotere opschoning (migratie naar het gedeelde component) die verder gaat dan deze specifieke vraag over zoekvarianten, en is apart als taak gemarkeerd.

**Verificatie**: `npm run build` slaagt (155+ statische pagina's), geen em-dashes/en-dashes, live gecontroleerd in de browser dat de nieuwe FAQ-vraag zowel zichtbaar op de pagina als in de FAQPage-schema staat, voor zowel een gedeeld-component-pagina (Weert) als de losse Maastricht-pagina.

---

## Stand van zaken en strategische koerswijziging (26 augustus 2026)

**Aanleiding**: de vraag "gaat het eigenlijk wel goed met onze SEO?", grondig onderzocht in plaats van op gevoel beantwoord. Drie sporen tegelijk uitgezocht: de volledige historische GSC-trend (via een 16-maanden export, chefs-connect-13, gecombineerd met alle eerdere exports), wie er live daadwerkelijk bovenaan staat voor de kernzoektermen, en de echte staat van de linkautoriteit van het domein.

### Belangrijke correctie op een eerder, te positief antwoord
Een eerste analyse op ruwe maandtotalen leek op reële groei (klikken +46%, vertoningen +76% sinds februari). Een uitsplitsing per zoekterm-type ontkracht dat: **99% van alle klikken ooit komen van mensen die letterlijk op "chefs connect" zoeken.** Niet-merk-klikken (mensen die zoeken op iets als "freelance kok inhuren" zonder de merknaam te kennen) staan al 4,5 maand vast op 3 tot 6 klikken **totaal** per rollend 3-maandsvenster, niet per maand. De groei in vertoningen (+543%) komt doordat de site voor veel meer lange-staart-termen wordt geïndexeerd, maar op positie 20-58 rankt, te laag om geklikt te worden. Gemiddelde positie zakte van ~7 naar ~28, CTR stortte in van 30% naar 6%. Chefs-connect.be: 0 klikken in 92 dagen.

### Waarom de dip van sept 2025 tot feb 2026 in de data zit
Verklaard door de gebruiker: de website is toen overgenomen, en er is een tijd lang helemaal niets aan SEO gedaan. Verklaart de 150 dagen zonder enige GSC-activiteit (22 september 2025 tot 19 februari 2026). Actief, doorlopend SEO-werk is in de praktijk pas vanaf ongeveer februari 2026 begonnen, niet eerder.

### Concurrentie-check, live uitgevoerd op 6 kernzoektermen
- **Echt autoriteit-gelimiteerd** (geen quick fix): "personeel horeca gezocht amsterdam" wordt gedomineerd door Randstad, Indeed, Marktplaats, YoungCapital. "Vacature kok {stad}" wordt volledig ingenomen door vacature-aggregators (Indeed, Adzuna, Jooble, Werkzoeken.nl), dat is sollicitant-zoekintentie, structureel een ander spel dan een uitzendbureau-pagina kan winnen. "Freelance kok inhuren" heeft met Temper (VC-gefinancierd, marktleider-schaal) ook een echte grote speler.
- **Wél winbaar, en toch geen zichtbaarheid**: "horecapersoneel inhuren", "kok aan huis" en "freelance kok worden" worden gedomineerd door vergelijkbaar grote spelers (Nouvelle Équipe, Flexter, ChefMaison, Chefs4Chefs, Rent a Chef), geen giganten. **chefs-connect.nl kwam in geen van de 6 geteste termen zichtbaar voor**, ook niet de winbare. Dit is het belangrijkste concrete signaal: naast het autoriteitsprobleem is er ook een echt targeting/content-gat op precies de termen die er toe doen.
- Geen technisch probleem: de site is gezond geïndexeerd en rankt #3 voor de eigen merknaam gecombineerd met "horecapersoneel".

### Autoriteitscheck
Geen enkele onafhankelijke, redactionele backlink gevonden, behalve de portfolio-pagina van het webbureau dat de site ooit bouwde. Domein heeft volgens Wayback Machine wel al bestaan sinds ongeveer maart 2025, maar zonder enig teken van linkopbouw in die periode. Praktisch: vrijwel een cold-start situatie qua autoriteit.

### Conclusie en koerswijziging, bevestigd door de gebruiker
Pagina's bouwen heeft aantoonbaar afnemend rendement bereikt, dat is niet meer de bottleneck. **Backlinks worden vanaf nu de hoofdprioriteit**, niet een bijzaak naast contentwerk. Concreet vervolg:
1. Focus verschuift van meer pagina's naar backlink-acquisitie (Shiftmanager-testimonial en Chapeau Magazine-vermelding lopen al, zie verderop in dit bestand, dit wordt uitgebreid).
2. Uitzoeken waarom chefs-connect.nl nul zichtbaarheid heeft op de winbare termen ("horecapersoneel inhuren", "kok aan huis", "freelance kok worden"), zelfde aanpak als eerder bij horecaspecialist.
3. `vacature-kok-*`/`vacature-bediening-*`-pagina's concurreren structureel met vacature-aggregators, niet met andere uitzendbureaus. JobPosting-schema (eerder afgewezen als slechte match) verdient een herbeoordeling specifiek voor Google Jobs-opname, niet als contentprobleem.
4. .be verdient een apart, dieper onderzoek, 0 klikken in 92 dagen is meer dan alleen "nog herstellend van de canonical-bug uit juli".
- **Status**: onderzoek afgerond, koerswijziging bevestigd, punten 2-4 wachten op prioritering.

---

## Backlink-kandidaten (26 augustus 2026, 4 parallelle onderzoeken)

Vervolg op de koerswijziging hierboven: dit is de concrete kandidatenlijst voor backlink-acquisitie. 4 onderzoeksporen uitgezet (branche-organisaties, concurrentie-gap bij Nouvelle Équipe/Flexter/ChefMaison/Chefs4Chefs/Rent a Chef, directories & tools, content-partnerschappen bij niet-concurrerende sites), alle 4 inmiddels compleet (2 ervan liepen aanvankelijk vast op een technische fout in de onderzoeksomgeving, op 29 augustus succesvol herhaald). Onderstaande lijst bevat alleen kandidaten die met een echte URL en directe paginacontrole zijn bevestigd. Twijfelachtige of dode vondsten zijn eruit gehaald, zie "Bewust niet meegenomen".

Gerangschikt op effort-to-impact, makkelijkste en meest waardevolle eerst binnen elke categorie.

### Industrie- en brancheorganisaties (opnieuw onderzocht 29 augustus 2026, na een mislukte eerste poging)
1. **Federgon** (federgon.be/de-leden/?sector=7): sterkste bevestigde kandidaat. Live, doorzoekbare ledenlijst van 200+ Belgische HR/uitzendbedrijven, elke vermelding heeft een echte klikbare website-link. Aanmelden kan op "eenvoudig schriftelijk verzoek" (federgon.be/lid-worden), contributiebedrag niet openbaar, navragen via membership@federgon.be. Betaald, geen auditproces zoals ABU. Actie: lidmaatschap aanvragen.
2. **ABU** (abu.nl/over-abu/ledenregister): bevestigd live, doorzoekbare ledenregister met klikbare website-links (Nederlandse uitzendbranche). Aanmelden is zwaarder: verplichte SNA-inspectie plus ABU-audit (cao-naleving, non-discriminatiebeleid), ~3 maanden doorlooptijd, omzetafhankelijke contributie. Actie: alleen oppakken als een serieus, maandenlang traject acceptabel is.
3. **NBBU** (nbbu.nl/nl/ledenoverzicht): bestaat, ledenprofielen zijn gevonden, maar kon niet technisch bevestigen of profielen een klikbare link naar de eigen website bevatten (JS-site blokkeerde geautomatiseerde toegang). Vaste contributie €2.479/jaar. Actie: eerst handmatig een ledenprofiel bekijken voordat hier tijd in gestoken wordt.
4. **KHN en Horeca Vlaanderen**: geen gratis of lager-drempel leverancierslijst gevonden bij KHN (alleen een ledenvoordelen-pagina, dat is andersom: kortingen VOOR KHN-leden, geen plek om als leverancier zichtbaar te worden). Horeca Vlaanderen's aanmeldpagina gaf een 404 bij geautomatiseerde toegang, niet bevestigd, wel nog een keer handmatig proberen. Beide bovendien gericht op horeca-ondernemers, niet duidelijk een fit voor een uitzendbureau als lid.
5. **Regionale Limburgse netwerken**: geen enkele (Voka Limburg, UNIZO, MKB-Limburg, LIOF) heeft een bevestigde publieke, link-gevende ledenlijst. Meest kansrijk maar niet geladen tijdens onderzoek: **Ondernemingsclub Lanaken (OCL)** via VKW Limburg (vkwlimburg.be), €190-500/jaar afhankelijk van personeelsomvang, sluit direct aan bij de Lanaken-vestiging. Actie: pagina handmatig bekijken.

### Directories (gratis, self-serve, laagste effort)
1. **Gouden Gids** (NL: goudengids.nl/nl/mijnbedrijf, BE: goudengids.be/bedrijftoevoegen): sterkste bevestigde kandidaat. BASIS-pakket is expliciet €0, bevat een direct klikbare link naar de eigen website (wel `nofollow`), vandaag live geverifieerd met echte horeca-vermeldingen op beide domeinen. Gratis, ~15 min per domein.
2. **Cylex** (cylex.nl / cylex-belgie.be): gratis, bevestigd live, maar de link loopt via een tussenpagina (`viewcompanywebsite.aspx`) in plaats van een directe link, dus zwakker dan Gouden Gids. Gratis, ~15 min.
3. **startlijstjes.nl/horeca**: klassieke Nederlandse gratis link-directory, 7 horeca-uitzendlinks staan er al. Actie: eigen inschrijfformulier op de site invullen. Gratis, ~10 min.
4. **openPR.com**: gratis persbericht-distributie zonder redactionele drempel (ChefMaison gebruikt dit al voor eigen nieuws). Actie: kort persbericht over Chefs Connect schrijven en gratis plaatsen op openpr.com. Gratis, ~30-45 min.
5. **Journalisten-platforms (Qwoted, Featured.com/HARO)**: beide actief en gratis in 2026 bevestigd (Featured.com nam de merknaam HARO begin 2025 over en heeft het gratis model heropgestart). Qwoted: 2 gratis pitches/maand. Featured/HARO: gratis, dagelijkse mailings met verzoeken van journalisten. Kans op een link is niet gegarandeerd, maar kost niets om je aan te melden als bron. Gratis, ~15 min aanmelden, dan doorlopend monitoren op relevante verzoeken (personeelstekort horeca, freelance werken, zzp).

**Bewust niet meegenomen uit dit spoor**: Infobel.com (geen zelfregistratie-flow kunnen bevestigen), Telefoonboek.nl (websitelink alleen zichtbaar bij betaalde vermelding), Online-bedrijvengids.nl (signalen van een abonnementenval, vermijden), Trends Top/Companyweb (databronnen voor bedrijfsinfo, geen zelfregistratie), Detailhandel.info (bestaat niet meer als directory).

### Concurrentie-gap kansen (plekken waar vergelijkbare concurrenten al staan, Chefs Connect nog niet)
1. **Horeca Webservice, "Vacaturebanken en uitzendbureaus voor de horeca"**: https://www.horecawebservice.nl/tips/vacaturebanken-en-uitzendbureaus-voor-de-horeca/. Bevestigd via directe paginacontrole: bevat al Chefs4Chefs plus 8 vergelijkbare horeca-uitzendplatforms (Doenhoreca, FourParties, Jameshoreca, Temper, Top-chefs, Wittebrigade e.a.), Chefs Connect ontbreekt. Dit is de sterkste, meest direct repliceerbare kans uit het hele onderzoek: een actief onderhouden vergelijkingsartikel dat openstaat voor toevoeging van relevante peers. Actie: redactie van Horeca Webservice mailen met verzoek om Chefs Connect toe te voegen aan de lijst. Gratis, redactionele beslissing, ~20 min pitch schrijven.
2. **Chef's Pencil, sponsored content**: https://www.chefspencil.com/. Bevestigd precedent: concurrent ChefMaison heeft er een betaalde, expliciet als "Sponsored" gelabelde post staan (chefmaison-brings-its-private-dining-revolution-to-portugal). Openstaand voor elk bedrijf dat betaalt, geen exclusiviteit. Actie: contact opnemen met chefspencil.com voor tarieven sponsored content. Betaald, gegarandeerde plaatsing, ~30 min opzet plus wachten op offerte.
3. **Instagram-invloedmarketing (naar voorbeeld ChefMaison)**: @kirkookt (~360 likes) en @pienlaathaaretenzien (~2.200 likes), Nederlandse food/lifestyle-accounts die organisch over een ChefMaison-boeking postten. Actie: beide accounts benaderen voor een betaalde of organische samenwerking rond een private-dining- of freelance-chef-ervaring. Betaald of ruilbasis, ~1 uur outreach.
4. **Misset Horeca**: toonaangevend Nederlands horeca-vakblad, plaatst platformfeatures (precedent: concurrent Flexter kreeg een pagina in het blad, zelf gemeld, niet onafhankelijk geverifieerd, maar Misset Horeca zelf is een reëel, actief vakblad dat dit type content draait). Actie: kort pitch-mailtje met een concreet artikel-idee naar de redactie via missethoreca.nl. Gratis, geen garantie, ~30 min pitch.
5. **The Culinary Hour (sponsor: concurrent Nouvelle Équipe)**: YouTube https://youtu.be/86P0bud1EYo. Klein, roterend chef-interviewprogramma (~100 views per aflevering) dat kleine merken als sponsor opneemt. Actie: producent van de show opzoeken via het YouTube-kanaal en vragen naar sponsormogelijkheden voor een aflevering. Waarschijnlijk laag budget nodig, bereik is klein, ~30 min om contact te vinden.
6. **BNR Nieuwsradio**: grote Nederlandse zakelijke nieuwszender, interviewt kleine/middelgrote ondernemers bij een actuele sectorhaak (precedent: concurrent Chefs4Chefs/Chefs4Care werd geïnterviewd). Actie: pitch met een actuele haak (personeelstekort horeca) naar de redactie via bnr.nl. Gratis, matig realistisch, geen garantie, meer tijd nodig om het juiste contact en moment te vinden.

### Content & pers (gastcontent, wederkerige citaties, niet-concurrerende sites)
1. **Knab, bieb.knab.nl**: https://bieb.knab.nl/ondernemen/wat-verdient-een-kok-zzp-bekijk-uurtarief-en-winst. Bevestigd: eigen artikel over exact hetzelfde onderwerp als Chefs Connects "freelance-kok-tarief"-artikel, citeert momenteel geen enkele externe bron. Chefs Connect citeert Knab al wel (zie punt 3 in "Laaghangend fruit" hieronder, eerst die eigen bronlink toevoegen versterkt deze pitch). Sterkste content-lead uit dit onderzoek. Actie: content-team van Knab mailen, wederzijdse link of bronvermelding voorstellen, eventueel met een quote of case aanbieden. Gratis, ~20 min pitch.
2. **ZZP-centrum.nl**: https://zzp-centrum.nl/info/uurtarieven/uurtarief-zzp-kok. Bevestigd: eigen zzp-kok-tarievenpagina, maar met dunne onderbouwing (alleen een lezerspoll, 908 reacties uit 2022-2024). Site heeft ook een actieve "Adverteren"-pagina. Actie: aanbieden als gratis bron-upgrade (citaat of link naar Chefs Connects beter onderbouwde 2026-cijfers), of de adverteren-pagina checken voor een betaalde optie. Gratis of betaald, ~20 min pitch.
3. **MijnZZP.nl**: https://www.mijnzzp.nl/. Bevestigd: actief, gelabeld partner-contentmechanisme via de "Van de redactie"-weblog (voorbeeld gezien: een investeringsartikel gemarkeerd "In samenwerking met"). Nog geen horeca-content op de site. Actie: gastartikel voorstellen over freelance werken als kok. Vermoedelijk gratis in ruil voor contentwaarde, ~1-2 uur voor een volledig artikel.
4. **Cafépraat, de horeca podcast**: feed https://rss.buzzsprout.com/1671799.rss, gehost door Jaan Dekempeneer. Bevestigd via de podcast-feed: actief (laatste aflevering februari 2026), 51 afleveringen, Vlaams/Belgisch, gasten zijn vaak oprichters van vergelijkbaar-schaal bedrijven (bijv. De Messy Chef, Brouwerij 9900). Goede match voor een Belgische invalshoek. Actie: contact van Jaan Dekempeneer opzoeken (podcastkanaal of social) en gastoptreden pitchen. Gratis, ~30 min om contact te vinden plus pitch.
5. **TV Limburg, "Bedrijf in de kijker"**: https://www.tvl.be/programmas/bedrijf-in-de-kijker. Bevestigd via de eigen paginabeschrijving: actief, wekelijks terugkerend format dat lokale Belgisch-Limburgse bedrijven uitlicht. Sluit direct aan bij de bestaande Limburg-focus van de site (zie de /limburg-hub verderop in dit bestand). Actie: redactie van TVL pitchen met een Belgisch-Limburgse invalshoek op Chefs Connect. Gratis, ~30 min pitch.
6. **De Smaak van Impact**: feed https://rss.buzzsprout.com/2542913.rss, geproduceerd door Hutten Business Horeca. Bevestigd actief (laatste aflevering maart 2026, 4 afleveringen), aflevering 4 gaat expliciet over personeelswerving/talent, een directe thematische match. Niet-concurrerend (foodservice/catering, geen uitzendbureau). Actie: contact bij Hutten Business Horeca opzoeken en gastoptreden pitchen. Gratis, klein bereik door lage afleveringencount, ~30 min.
7. **Entree Magazine**: https://www.entreemagazine.nl/. Bevestigd: Nederlands horeca-vakblad/platform met een "Culinair & Chefs"-sectie die ook over zzp-regels en freelance werken publiceert. Niet-concurrerend, publiek mengt koks en horeca-ondernemers. Actie: gastinterview of artikel pitchen over de overstap naar freelance koken. Gratis, geen garantie, ~30-45 min pitch.
8. **Accountable.eu blog**: https://www.accountable.eu/nl-be/blog/zelfstandige-horeca/. Bevestigd: bestaande citatie-relatie (Chefs Connect citeert dit artikel al), geen extern gastauteursprogramma gevonden (artikel is in-house geschreven). Actie: mailen met verzoek om wederkerige link vanuit hun artikel. Gratis, lagere slagingskans dan de rest van deze lijst, ~15 min pitch.
9. **GreenPepper.nl kennisbank**: https://greenpepper.nl/kennisbank/platformen-voor-zzp-opdrachten/. Bevestigd: bestaand overzichtsartikel met externe zzp-platforms (Upwork, Fiverr, Indeed), toont bereidheid om externe platforms op te nemen, maar geen horeca-content en geen contactpersoon gevonden op de pagina zelf. Actie: eerst een geschikt redactioneel contact vinden (niet op de pagina zelf), dan opname in de lijst voorstellen. Laagste prioriteit van de content-categorie door het ontbrekende contact.
10. **L1 Nieuws**: https://www.l1nieuws.nl/. Nederlands-Limburgse regionale omroep, dekt af en toe horeca-nieuws maar heeft geen vaste rubriek zoals TV Limburg. Actie: algemene perspitch naar de redactie. Gratis, lagere slagingskans dan TVL, alleen oppakken als TVL geen doorgang vindt.

### Bewust niet meegenomen
- **Rent a Chef (rentachef.be)**: geen bevestigde plaatsing gevonden, alleen een eigen Facebook-pagina. Geen kandidaat, wel een signaal dat deze concurrent mogelijk actief is in Vlaamse kanalen (Voka/UNIZO, Horeca Vlaanderen) die dit onderzoek niet heeft kunnen doorzoeken.
- **Wederkerige partnerschap-aankondiging (naar voorbeeld Chefin x ChefMaison)**: reële tactiek (samen een gezamenlijk nieuwsbericht publiceren met een niet-concurrerende buitenlandse partner), maar geen concrete site of contact, te vaag om als kandidaat op te nemen.
- **Horeca Talent Portret en Horeca Marketing Podcast**: beide formats bestaan, maar de laatste aflevering dateert van 2020 respectievelijk 2023, vermoedelijk niet meer actief.
- **indebuurt.nl**: bekend als DPG Media-netwerk met lokale bedrijfsfeatures, maar de paginacontrole werd geblokkeerd door een cookie-consentwall, niet onafhankelijk bevestigd deze sessie. Handmatig navragen voordat dit wordt gepitcht.
- **Insify.nl en Freelance.nl "Community"**: gecontroleerd, geen horeca-content en geen extern-auteursprogramma gevonden, geen fit.
- **Misset Horeca-claim van Flexter zelf**: de publicatiedatum/het artikel kon niet los van Flexters eigen bewering worden teruggevonden. Misset Horeca zelf blijft een geldig pitch-doel (zie hierboven), alleen dit specifieke precedent is niet 100% onafhankelijk bevestigd.

- **Status**: onderzoek volledig afgerond, uitvoering gestart (zie hieronder).

### Uitvoering: voortgang per kandidaat (bijgewerkt 29 augustus 2026)

- ✅ **Gouden Gids BE**: aangemaakt. Ondernemingsnummer BE1017.734.787 geverifieerd via de officiële KBO (Chefs Connect BV, Gasthuisstraat 3 bus 3.1, 3620 Lanaken, actief sinds 20 december 2024, bestuurders Gert de Neijs en Mitchell Deneke). Let op: Gouden Gids' eigen validator wees het correcte nummer eerst af als "geen geldig BTW nummer", vermoedelijk omdat hun validatie nog uitgaat van de oude regel dat Belgische ondernemingsnummers met een 0 beginnen, terwijl de overheid inmiddels ook nummers uitgeeft die met een 1 beginnen (zoals dit nummer). Geen bug aan onze kant.
- ❌ **Gouden Gids NL**: geblokkeerd. **Chefs Connect heeft geen KVK-inschrijving in Nederland**, geverifieerd via kvk.nl (0 resultaten voor "Chefs Connect"). Chefs Connect BV is uitsluitend Belgisch geregistreerd, geen aparte Nederlandse vestiging of rechtspersoon. Elk formulier dat een KVK-nummer verplicht stelt (waarschijnlijk ook Cylex.nl, startlijstjes.nl e.d.) zal hierop vastlopen. Vervolgstap om te overwegen, apart van SEO: is een Nederlandse vestiging/KVK-inschrijving iets om op termijn te regelen, gezien chefs-connect.nl het grootste deel van de traffic trekt?
- **Bijvangst, relevant voor merkherkenning**: bij de KVK-zoekopdracht kwamen twee totaal ongerelateerde Nederlandse bedrijven naar boven met een bijna identieke naam: "Chef Connect" (KVK 73900494, Zaandam, een eenmanszaak die uitzendbureau combineert met boekhandel en belastingadvies) en "Asian Chef Connect" (KVK 74886606, Rotterdam). Samen met de eerder gevonden concurrent chefconnect.nl (GVVA-visumbureau voor Aziatische koks) betekent dit dat "Chef(s) Connect" een druk bezette naam is in Nederland, wat kan meespelen bij verwarring in merkzoekopdrachten.
- 🔄 **Qwoted**: aanmeldproces uitgezocht en aan gebruiker doorgegeven (accounttype "I'm Looking to Earn Media" → "I plan to pitch myself"), account nog niet aangemaakt. Wachtend op vervolg (profiel/expertise-setup) om verder te helpen.

---

## Laaghangend fruit: nog niet benutte kansen (26 augustus 2026)

Op verzoek onderzocht via een parallelle sweep over 4 gebieden (schema.org, Google Business Profile/LinkedIn/directories, AI-zoekmachine-gereedheid, technische snelle wins). Gerangschikt op effort-to-impact, alleen items die concreet geverifieerd zijn (bestand, URL of directe test), niets geschat of verzonnen.

### Zelf te doen (code, geen externe account nodig)

1. **Review-array homepage aanvullen**: `app/page.tsx` claimt `reviewCount: '8'` maar de `review`-array bevat er maar 6, "Reda Hamite" en "Yme Huizing" missen (staan wel al in `components/home/Reviews.tsx`). ~10-15 min.
2. **14 meta descriptions te kort**: 14 `layout.tsx`-bestanden zitten onder de 120 tekens (o.a. `personeel-uden`, `vacature-kok-mechelen`, `personeel-breda`, `links`), tegenover 118 van de 132 pagina's die al goed zitten. ~30-45 min voor alle 14.
3. **Bronlink bij de Knab-statistiek**: het kennisbank-artikel `freelance-kok-tarief` citeert "Knab Zzp Uurtarievenboekje 2026" als platte tekst zonder link. ~10 min.
4. **llms.txt is verouderd**: `app/llms.txt/route.ts` is sinds 17 juli niet bijgewerkt, mist `freelance-kok-tarief`, `/limburg`, de 5 kok-aan-huis-pagina's, `vacature-instellingskok` en de catering-pagina's, en noemt nog "14 steden" terwijl er 30+ zijn. ~30-45 min.
5. **Google Maps URL ontbreekt in sameAs**: `app/layout.tsx` heeft Instagram en Facebook in `organizationSchema.sameAs`, niet de elders al gebruikte Google Maps-URL. ~5 min.
6. **AggregateRating/Review schema op 108 stadspagina's**: alle 36 personeel-* en 72 vacature-*-pagina's tonen zichtbaar "5.0 op Google" met dezelfde 3 reviews als de homepage, maar geen van de 108 layout.tsx-bestanden heeft het bijbehorende schema. Grootste impact van de lijst (sterren-rating in zoekresultaten op 108 pagina's i.p.v. alleen de homepage), scriptbaar omdat alle bestanden dezelfde structuur delen. ~1-3 uur.
7. **OG-afbeeldingen per pagina/stad**: nu delen 129 van de 130 pagina's dezelfde generieke OG-afbeelding, alleen de homepage heeft een eigen gegenereerde versie. De generator zelf bestaat en werkt al, dit is hergebruik plus parametriseren, geen nieuwe infrastructuur. Grootste losse impact op social-CTR, maar duidelijk meer werk dan de rest. Enkele uren.

### Vraagt jouw eigen account/toegang

8. **LinkedIn bedrijfspagina aanmaken**: geen enkele LinkedIn-pagina vindbaar voor Chefs Connect, terwijl dit voor een B2B-uitzendbureau het meest logische kanaal is. Gratis, 15-30 min.
9. **Vermelding op uitzendkantoren.be**: 8 directe concurrenten (Unique, BTS Interim, Actief Interim, Lab Support, RITMO, Cuisson Royale, Vdet, T-Interim) staan al op de Lanaken-resultatenpagina, Chefs Connect niet. Gratis, 15-30 min.
10. **Bing Places for Business claimen**: Bing Maps toont een kale, ongeclaimde titel zonder adres/telefoon/openingstijden. Gratis, 15-30 min.
11. **Apple Maps Business Connect claimen**: geen vermelding gevonden. Gratis, 15-30 min.
12. **Content-Signal-instelling in Cloudflare verifiëren**: robots.txt blokkeert terecht geen AI-crawlers (GPTBot/ClaudeBot/PerplexityBot krijgen 200), maar er is geen Content-Signal-header zichtbaar in de live response, terwijl het interne juli-rapport claimt dat dit al staat. Alleen te checken/activeren in het Cloudflare-dashboard. 15-30 min.
13. **KHN/Horeca Vlaanderen lidmaatschap**: geen vermelding als lid of partner. Niet gratis en vraagt een aanvraagproces, dus strikt genomen geen laaghangend fruit, wel een relevante branche-backlink om te overwegen.

### Bevestigd in orde, geen actie nodig
Sitemap (129/129 URLs kloppend op beide domeinen), alt-teksten op alle pagina's, interne links (0 broken links over 147 gecontroleerde hrefs).

### Bewust niet meegenomen
`WebSite`-SearchAction (geen sitezoekfunctie om naar te verwijzen), `AggregateRating` op pagina's zonder zichtbare reviews (zou een Google-richtlijnenschending zijn), live Google-rating/reviewcount extern verifiëren (kon niet door de JS-consentwall op Maps/Search), een instellingskok-kennisbankartikel (staat al los genoteerd, is nieuwe content).

- **Status**: onderzoek afgerond, niets hiervan is al doorgevoerd, wacht op prioritering.

---

## Zoekvolume-onderzoek en tactische bijsturing (26 augustus 2026)

**Methodologie, eerlijk gezegd**: er is geen toegang tot een betaalde keyword-tool (Semrush, Ahrefs, Google Keyword Planner), en gratis tools zoals Ubersuggest blokkeren geautomatiseerde toegang (403). Wat wel werkt en gebruikt is: Google's eigen publieke autocomplete-endpoint. Dat geeft geen exacte maandelijkse volumes, maar de suggesties zijn gerangschikt op basis van echt zoekgedrag, dus de volgorde en het patroon zijn een betrouwbaar, actueel signaal over waar mensen daadwerkelijk naar zoeken. Onderstaande bevindingen zijn op die manier verzameld, niet verzonnen of geschat.

### Belangrijkste ontdekking: "kok inhuren" is grotendeels particulier, niet zakelijk
- **Bevinding**: de kale term "kok inhuren" levert bijna uitsluitend particuliere aanvullingen op: "voor bbq", "voor thuis", "kerst", "21 diner", "prive kok inhuren". Geen enkele zakelijke aanvulling. Dit is dus een kok-aan-huis/private-dining-zoekterm, geen personeelsbemiddeling-zoekterm, ook al klinkt hij zakelijk.
- **Impact**: de site target deze term nergens expliciet op de personeel-*/vacature-kok-*-pagina's (terecht, gezien deze bevinding), maar de kok-aan-huis-pagina's zouden "kok inhuren" en "prive kok inhuren" als synoniem kunnen meenemen naast "kok aan huis" en "private dining".

### Bevestigd: "horeca personeel gezocht" is de sterkere zakelijke zoekfrase
- **Bevinding**: "horeca personeel gezocht {stad}" heeft een veel breder en explicieter zakelijk patroon dan de huidige `personeel-{stad}`-opzet, met steden: Utrecht, Amsterdam, Rotterdam, Den Haag, Haarlem, Nijmegen, Groningen, Antwerpen, Alkmaar (allemaal al gezien, behalve Haarlem, Groningen en Alkmaar, die nu geen pagina hebben).
- **Voorgestelde aanpak**: "horeca personeel gezocht" als expliciete term toevoegen aan de keywords-array en meta description van bestaande `personeel-*`-pagina's, dat is een kleine, veilige aanpassing zonder titelherstructurering.

### Grote, onverwachte cluster: institutionele/zorgkok
- **Bevinding**: de kale term "vacature kok" levert voor 5 van de 9 suggesties institutionele varianten op: "vacature kok zorginstelling limburg/noord-holland/friesland", "vacature kok verzorgingshuis", "vacature kok ziekenhuis", "vacature kok kinderopvang", "vacature kok dagdienst". De losstaande term "instellingskok" heeft een eigen sterke cluster: "instellingskok opleiding", "instellingskok salaris", met stad/provincie-varianten Arnhem, Groningen, Friesland, Rotterdam.
- **Context**: de site heeft al één pagina, [/vacature-instellingskok](app/vacature-instellingskok/page.tsx), maar geen stad- of provincievarianten, en geen content over "opleiding" of "salaris" (informatieve zoekintentie, kennisbank-materiaal).
- **Voorgestelde aanpak**: dit verdient serieuze aandacht, groter dan de losse stadspagina's. Twee opties: (a) een kennisbank-artikel over instellingskok worden/salaris, wat zowel de informatieve vraag dekt als terugverwijst naar de vacaturepagina, of (b) provincievarianten van de instellingskok-pagina naar het `/limburg`-hubmodel.

### Herbevestigd: provincie-niveau is een echt patroon, niet uniek voor Limburg
- **Bevinding**: "vacature kok limburg" is de #1 autocomplete-suggestie voor de kale term "vacature kok", wat de eerder gebouwde `/limburg`-hub sterk valideert. Hetzelfde patroon duikt herhaaldelijk op voor andere provincies die nu geen dekking hebben: **Gelderland** ("kok gezocht gelderland"), **Zeeland** ("kok aan huis zeeland", "chefkok vacatures zeeland"), **Friesland** ("kok aan huis friesland", "instellingskok friesland"), **Noord-Holland** ("vacature kok zorginstelling noord-holland"), en **Oost-Vlaanderen** ("chef kok vacatures oost vlaanderen") aan Belgische kant.
- **Voorgestelde aanpak**: geen nieuwe hub-pagina's bouwen zonder overleg, dit is een signaal om in de gaten te houden, geen directe actie. Wel relevant bij een volgende sprint met nieuwe steden: overweeg Gelderland/Zeeland boven weer een losse stad.

### Nieuwe stad-kandidaat met het sterkste signaal: Groningen
- **Bevinding**: Groningen kwam onafhankelijk van elkaar naar boven in vijf verschillende zoekclusters: "horeca personeel gezocht groningen", "kok gezocht groningen", "kok aan huis groningen", "horeca uitzendbureau groningen", "instellingskok groningen". Geen enkele andere nieuwe stad kwam zo consistent terug. Groningen heeft momenteel geen enkele pagina op de site.
- **Ook gezien, maar met minder herhaling**: Haarlem, Alkmaar, Arnhem, Leeuwarden (alle vier B2B-personeelscontext), Apeldoorn en Amersfoort (kok-aan-huis-context).
- **Voorgestelde aanpak**: als er een volgende stedensprint komt, is Groningen op basis van dit onderzoek de sterkste kandidaat, sterker onderbouwd dan de meeste steden die al wel zijn toegevoegd.

### Bevestiging van bestaande keuzes (geen actie nodig, maar goed om te weten)
- "private dining maastricht" en "private dining limburg" komen beide voor in autocomplete, wat de bestaande targeting bevestigt.
- "freelance kok tarieven" / "zzp kok uurtarief" komen voor, wat het bestaande kennisbank-artikel over kok-tarieven bevestigt als een goed getimede keuze.
- "horecaspecialist" wordt in autocomplete gedomineerd door andere bedrijven die de term als merknaam gebruiken ("jk de horecaspecialist", "egro horecaspecialisten"). Dit bevestigt de eerdere inschatting dat deze term qua concurrentie beperkt is, ondanks de titel/H1-fix.
- "spoed kok" en "interim kok" botsen in autocomplete met de Belgische kustplaats Koksijde ("spoed koksijde", "interim koksijde"). "Spoed kok" heeft daardoor vrijwel geen bruikbaar eigen zoekvolume als exacte term. "Interim kok" heeft wel een echt eigen signaal ("interim kok", "interim chef kok", "kok interim management") naast de Koksijde-ruis, en is de gangbare Belgische term voor freelance/tijdelijk werk, terwijl de site nu overal "freelance"/"zzp" gebruikt (Nederlandse framing). Op Belgische pagina's zou "interim kok" als synoniem kunnen worden toegevoegd.
- **Status**: onderzoek afgerond, bovenstaande punten zijn voorstellen die wachten op prioritering, geen van alle is al doorgevoerd.

### Vervolgonderzoek: specifiek werkgevers-/klantzoekintentie (29 augustus 2026)
Op verzoek dieper uitgezocht welke organische zoekopdrachten specifiek van **opdrachtgevers** komen (niet freelancers), inclusief het idee "zzp instellingskok nodig + provincie/stad". 4 aparte onderzoekssporen, zelfde autocomplete-methode als hierboven.

- **Instellingen/zorgsector als opdrachtgever: geen signaal, brede en herhaalde negatieve toets.** 20+ directe stammen getest ("zzp instellingskok nodig", "kok inhuren zorginstelling/verzorgingshuis/ziekenhuis/kinderopvang", "uitzendbureau kok zorginstelling" e.d.), inclusief varianten met alle 12 provincies. Allemaal leeg. De twee stam-families die wel volume hebben blijken bij inspectie iets anders: "kok inhuren"/"kok huren" is aantoonbaar particuliere kok-aan-huis-vraag (bbq, thuis, kerst), "instellingskok"/"kok zorginstelling" is aantoonbaar kandidaat-kant (vacature, salaris, opleiding). Conclusie: dit idee klopt qua intuïtie (het is een reële niche), maar levert geen meetbaar zoekvolume op de werkgeverskant op. Geen nieuwe pagina hierop bouwen.
- **Zeeland (provincie): signaal nu sterker onderbouwd.** Eerder alleen gevonden via freelancer-/particulierzijde termen, nu voor het eerst bevestigd op de sterkste werkgeversfrase zelf ("horeca personeel gezocht zeeland"). Reële kandidaat voor een provinciehub naar het model van `/limburg`, nog geen enkele dekking.
- **Groningen: bevestiging, geen nieuwe informatie.** Dubbel bevestigd op dezelfde kernfrase, verhoogt alleen de zekerheid van de al bestaande aanbeveling hierboven.
- **Tier 2, elk zwakker/eenmalig bevestigd**: Amersfoort, Almere, Leiden, Haarlem, Alkmaar. Kandidaten voor een eventuele volgende stedensprint, na Groningen en Zeeland.
- **Correctie op eerdere bevinding**: Arnhem en Leeuwarden, eerder als secundaire kandidaten genoemd, worden door dit grondigere onderzoek niet bevestigd op de kernwerkgeversfrase. Niet prioriteren boven Groningen/Zeeland/tier 2.
- **Spoed/urgentie-landingspagina: geen signaal, dus niet bouwen.** Dit toetste het eerder besproken voorstel voor een aparte "spoed personeel nodig"-pagina rechtstreeks. ~37 combinaties getest, vrijwel allemaal leeg (met "spoed kok" opnieuw vals-positief door de plaatsnaam Koksijde). De 24-48u-belofte staat al verwerkt in de bestaande personeel-{stad}-pagina's, waar deze opdrachtgever al binnenkomt via "kok inhuren {stad}". Advies: geen aparte pagina bouwen.
- **Evenementen: zwak signaal, geen nieuwe pagina.** "Personeel inhuren evenement" / "evenementen personeel inhuren" laat een klein maar reëel werkgeverssignaal zien. Beurs, kantoor/bedrijfsrestaurant en congres leverden niets op. Voorstel: geen nieuwe pagina, wel een zin of FAQ over evenementen toevoegen aan de bestaande `/zoek-personeel`-pagina bij een volgende contentronde.
- **Status**: onderzoek afgerond. Netto resultaat: geen grote nieuwe kans gevonden, twee ideeën (instellingen-als-opdrachtgever, spoedpagina) expliciet weerlegd, wat tijd bespaart. Zeeland is de enige echte upgrade. Bevestigt de eerdere koerswijziging: contentgaten worden schaars, backlinks blijven de hoofdprioriteit.

### Uitvoering: Zeeland en Groningen gebouwd (29 augustus 2026)
Op basis van bovenstaand onderzoek is bewust gekozen om **alleen** de twee kandidaten met bevestigd zoeksignaal te bouwen, niet alle Nederlandse steden/provincies en niet de instellingen-invalshoek (die expliciet nul signaal opleverde). Dit was een directe reactie op een verzoek om breed uit te breiden, waar tegenin is gegaan met bovenstaand bewijs; de scope is samen vastgesteld.

- **Zeeland**: provinciehub `/zeeland` gebouwd naar het model van `/limburg`, met 3 steden: Middelburg (provinciehoofdstad, Abdij, HZ University), Vlissingen (havenstad, Boulevard, Westerschelde) en Goes (regionaal winkel-/horecacentrum voor Zuid-Beveland). Elke stad kreeg de volledige triplet: `personeel-{stad}` (werkgevers), `vacature-kok-{stad}` en `vacature-bediening-{stad}` (freelancers).
- **Groningen**: enige stad zonder provinciehub-context (geen andere Chefs Connect-stad in de buurt), dezelfde triplet gebouwd. Lokale invalshoek: Rijksuniversiteit Groningen/Hanzehogeschool (studentenpopulatie), Grote Markt/Poelestraat (uitgaan), functie als economisch/cultureel centrum van Noord-Nederland.
- **Verificatie**: `npm run build` slaagt, alle nieuwe routes geprerenderd, geen em-dashes/en-dashes in de nieuwe bestanden, FAQ-tekst byte-identiek tussen `page.tsx` en het `faqSchema` in `layout.tsx`, meta descriptions binnen de gangbare lengte.
- **Wiring**: toegevoegd aan `app/sitemap.ts`, de stedenlijst op `/zoek-personeel`, de kok/bediening-linklijsten op `/horecaspecialist`, en `INDEXING_TODO.md` (13 nieuwe URL's per domein: 12 stadspagina's + `/zeeland`).
- **Expliciet niet gebouwd**: instellingsspecifieke landingspagina's (nul signaal), overige Nederlandse steden/provincies (nog niet met dezelfde diepgang onderzocht).

---

## Open, wacht op keuze (26 augustus 2026, uit chefs-connect-11 (.be) en chefs-connect-12 (.nl) export, 3-maandsperiode 25 mei t/m 24 augustus)

### 0a. .be domein: vrijwel nul klikken in 3 maanden, historische oorzaak gevonden
- **Bevinding**: chefs-connect.be had in de volledige exportperiode 0 klikken op 34 vertoningen, verspreid over maar 10 pagina's. Ter vergelijking: in dezelfde periode kwamen er wel 97 klikken uit België op chefs-connect.NL.
- **Onderzoek**: robots.txt, sitemap.xml en canonical-tags op een steekproef .be-pagina's zijn nu allemaal correct (zelf-verwijzende canonical, juiste hreflang-cluster). Maar `lib/seo.ts`'s git-geschiedenis laat zien dat de huidige domein-bewuste canonical-logica (`siteUrl()`) pas is ingevoerd op **9 juli 2026** (`69b5361`, "Make the site self-canonicalizing per domain"). Daarvoor wees de canonical-tag op elke .be-pagina hardcoded naar de chefs-connect.NL-versie van dezelfde content.
  - Dat betekent dat de eerste ~45 van de 90 gerapporteerde dagen elke .be-pagina tegen Google zei "de echte versie van deze content staat op .nl". Precies verklarend waarom Belgische kliks op .nl terechtkomen: Google had de rankingwaarde grotendeels aan .nl toegekend.
  - Canonical-consolidatie is hardnekkig: Google heeft doorgaans weken tot een paar maanden nodig om terug te draaien nadat de onderliggende oorzaak is opgelost. De ~46 dagen sinds de fix (9 juli tot nu) is een plausibele, nog niet afgeronde hersteltijd, wat overeenkomt met de wisselvallige, instabiele posities (1,5 tot 50) die we nu zien.
  - Bijkomstig: het totale volume is sowieso klein (34 vertoningen/90 dagen), dus 0 klikken valt gedeeltelijk ook binnen normale statistische ruis, los van de canonical-kwestie.
- **Status**: geen nieuwe codefix nodig, de bug zelf is al opgelost sinds 9 juli. Dit is nu een "wachten op herstel"-situatie. Vervolgstap (buiten codebase, handmatig): via GSC URL-inspectie een paar .be-pagina's checken of Google inmiddels de eigen .be-canonical als "Google-selected canonical" herkent, en zo nodig herindexering aanvragen. Over 4-8 weken opnieuw meten.

### 0b. vacature-kok-*/vacature-bediening-* pagina's: systematisch lage CTR, echte relevantiekloof
- **Bevinding**: een cluster zoektermen ("vacature kok/chefkok/zelfstandig werkend kok {stad}") voor Nijmegen, Maastricht, Den Bosch, Utrecht, Breda en Houten heeft prima vertoningsvolume (50-160 per term) maar rankt zeer slecht, meestal positie 40-60+. Voorbeeld: "vacature kok nijmegen" 159 vertoningen op positie 58,89, "vacature chefkok nijmegen" 81 vertoningen op positie 57,28.
- **Onderzoek**: dit bleek geen "nog te jong"-verhaal (`vacature-kok-nijmegen` is maar 12 dagen jonger dan `personeel-nijmegen`, dat büitengewoon beter presteert), en ook geen sjabloonprobleem per stad (Maastricht heeft de meeste interne links van het cluster en rankt evengoed slecht). Twee echte, structurele gaten gevonden:
  1. Dezelfde relevantiefout als eerder bij `/horecaspecialist`: de termen "chefkok" en "zelfstandig werkend kok" staan wel érgens op de pagina (in de FAQ), maar nooit gekoppeld aan de stadsnaam, en nooit in titel/H1/meta. `vacature-bediening-*`-titels laten zelfs het woord "vacature" helemaal weg ("Bediening Nijmegen? Werk als Freelancer"), waardoor ze niet eens matchen met de basiszoekterm.
  2. De statistiekenbalk (350+ professionals/250+ opdrachtgevers) die deze sessie aan `CityStaffingPage.tsx` (personeel-*) is toegevoegd, is nooit doorgevoerd naar `CityFreelancerPage.tsx` (vacature-kok-*/vacature-bediening-*). Sitebreed: 84% van de 44 vacature-kok/bediening-pagina's had 0 klikken op 1.764 vertoningen (0,57% CTR), tegenover 1,75% CTR bij de personeel-pagina's, ondanks een gemiddeld slechtere positie daar. Dat is 3x zo slecht, en systematisch, niet stad-specifiek.
- **Actie ondernomen (26 augustus 2026)**:
  1. `vacature-bediening-*`-titels hersteld naar `Vacature Bediening {Stad}? Werk als Freelancer` (was: `Bediening {Stad}? Werk als Freelancer`, miste het woord "vacature" volledig), inclusief de openGraph-titel en het H1 (`heroLead` van "Werk in de bediening" naar "Vacature voor bediening"), over alle 36 steden.
  2. Statistiekenbalk (350+ professionals/250+ opdrachtgevers/<24u) overgezet van `CityStaffingPage.tsx` naar `CityFreelancerPage.tsx`, direct na de hero, voor zowel de vacature-kok-* als vacature-bediening-*-pagina's (delen hetzelfde component).
  3. De generieke, niet-stad-gekoppelde FAQ-synoniemen ("Werken jullie ook met chefkoks, zelfstandig werkend koks of executive chefs?" / bediening-equivalent) herschreven zodat de stadsnaam er letterlijk in staat, over alle 36 vacature-kok-* en alle 36 vacature-bediening-*-pagina's (72 stuks), zowel in de zichtbare pagina-tekst als in het bijbehorende FAQPage-schema, byte-identiek aan elkaar gehouden.
- **Geverifieerd**: `npm run build` groen, geen dubbele strepen, live gecheckt op `/vacature-kok-tilburg` (statistiekenbalk en reviews renderen correct na de hero).
- **Status**: opgelost. De .be-canonical-kwestie (bevinding 0a) blijft een wacht-op-hersteltraject, buiten codebase.

---

## Open, wacht op keuze (12 augustus 2026, uit chefs-connect-9 en chefs-connect-10 export)

### 1. www en non-www allebei live, geen redirect
- **Bevinding**: `www.chefs-connect.nl` en `www.chefs-connect.be` gaven een 200 terug met dezelfde content als de kale domeinnaam, in plaats van door te verwijzen. Google indexeerde beide apart.
- **Bewijs**: non-www 1.458 vertoningen/379 klikken/positie 9,79, www-variant 830 vertoningen/56 klikken/positie 6,65, in dezelfde periode. Canonical-tag op de www-versie wees wel correct naar non-www, maar zonder harde redirect bleef Google allebei crawlen en los rapporteren.
- **Actie ondernomen (24 augustus 2026)**: Cloudflare Redirect Rule aangemaakt op beide zones (`chefs-connect.nl` en `chefs-connect.be`), wildcard-pattern `https://www.{domein}/*` naar `https://{domein}/${1}`, status 301, query string behouden.
- **Geverifieerd**: `curl -I` op zowel de root als een diepere pagina (`/personeel-maastricht`) geeft op beide domeinen een schone 301 met de juiste `location`-header.
- **Status**: opgelost.

### 2. Maastricht-kannibalisatie
- **Bevinding**: `/maastricht` (positie 3,47) verslaat `/personeel-maastricht` (positie 34,35) met dubbel zoveel vertoningen op de slechter scorende pagina.
- **Onderzoek (24 augustus 2026)**: grondig onderzocht via parallelle analyse van titels, H1's, zoekintentie, contentdiepte, interne links en sitemap-prioriteit van beide pagina's, met `/personeel-eindhoven` (gezonde referentiepagina, positie 18,6) als controlegroep.
  - `/maastricht` en `/personeel-maastricht` targeten aantoonbaar verschillende zoekintentie (freelancer-aanmelding vs. werkgever-aanvraag), met hetzelfde titel/H1-patroon als het gezonde Eindhoven-paar. Geen kannibalisatie.
  - `/personeel-maastricht` is niet dunner, niet slechter getiteld, niet onder-gelinkt (11 inkomende links, meer dan Eindhoven's 9) en technisch niet anders geconfigureerd dan zijn gezonde peer.
  - Conclusie: de ranking-kloof komt van buiten de codebase (concurrentie in de Maastricht/Limburg-markt, grensregio DE/BE, backlinkprofiel), niet van een fixbare code- of contentfout.
- **Actie ondernomen**: geen redirect (zou een goed presterende pagina op positie 3,47 kunnen beschadigen zonder aantoonbaar voordeel). Wel de meta description van `/personeel-maastricht` aangescherpt naar hetzelfde concrete-belofte-patroon als Eindhoven ("Binnen 24 tot 48 uur...") voor CTR, in [app/personeel-maastricht/layout.tsx](app/personeel-maastricht/layout.tsx).
- **Status**: onderzocht en afgesloten. Bewust laten zoals het is. Enige nog openstaande vervolgstap (optioneel, buiten codebase): query-niveau GSC-rapport voor `/personeel-maastricht` bekijken om te zien of de gemiddelde positie 34,35 breed verspreid is of door een paar uitschieter-zoektermen wordt getrokken.

### 3. Regionaal contentgat: Limburg als provincie
- **Bevinding**: "kok limburg" (80 vert.), "kok zuid-limburg" (90 vert.), "instellingskok limburg" (60 vert.), "chef aan huis limburg" (41 vert.), "kok aan huis limburg" (25 vert.), "freelance koks limburg" (18 vert.), "kok aan huis brabant" (20 vert.). Samen 300+ vertoningen, geen enkele bestaande pagina dekt dit provincieniveau.
- **Actie ondernomen (24 augustus 2026)**: nieuwe pagina [/limburg](app/limburg/page.tsx) gebouwd, gekozen aanpak: één gecombineerde hub met drie secties (werkgevers/personeel, freelancers/kok+bediening, particulieren/kok aan huis), naar keuze van de gebruiker. Doorlinkt naar alle 7 bestaande Limburg-stadspagina's (Maastricht, Sittard-Geleen, Heerlen, Kerkrade, Roermond, Weert, Venlo), plus naar `/vacature-instellingskok` (dekt "instellingskok limburg" al) en `/kok-aan-huis-maastricht` (dekt de kok-aan-huis/private-dining-vraag). Eigen FAQ- en Service-schema, `areaServed` provincie Limburg.
  - Wederkerige links toegevoegd vanuit de 7 stadspagina's, `/zoek-personeel` en `/horecaspecialist` naar `/limburg`, en toegevoegd aan `app/sitemap.ts` en `INDEXING_TODO.md`.
- **Status**: opgelost. `npm run build` en live preview geverifieerd (alle 23 links op de pagina resolven correct), geen em-dashes.

### 4. "Private dining" als aparte term
- **Bevinding**: "private dining nijmegen" alleen al 143 vertoningen, plus "besloten diner nijmegen" (21) en "prive diners" (10). Waarschijnlijk dezelfde vraag als kok-aan-huis, maar met andere bewoording.
- **Actie ondernomen (24 augustus 2026)**: de term "private dining" toegevoegd aan alle 5 kok-aan-huis-pagina's (hub + Maastricht, Nijmegen, Tilburg, Den Bosch): intro-tekst, meta description, keywords-array en een nieuwe FAQ ("Is een kok aan huis hetzelfde als private dining?") in zowel `page.tsx` als het `faqSchema` van `layout.tsx`, byte-identiek aan elkaar per pagina. Meta descriptions geverifieerd op maximaal 155 tekens.
- **Status**: opgelost. `npm run build` geverifieerd, geen em-dashes.

### 5. Twee gevestigde steden presteren opvallend slecht
- **Bevinding**: personeel-nijmegen (positie 47,6) en personeel-breda (positie 50,1) staan duidelijk slechter dan even oude stadspagina's als Eindhoven (18,6) en Tilburg (22,1).
- **Onderzoek (24 augustus 2026)**: Nijmegen, Breda, Tilburg en Den Bosch zijn allemaal op dezelfde dag gebouwd (`a2a9f61`, 6 juni 2026) met hetzelfde `CityStaffingPage`-sjabloon. Nijmegen heeft zelfs de meeste unieke tekst van de vier (210 woorden) en Breda de tweede-meeste (201). Aangezien Tilburg (structureel een exacte tweeling van Nijmegen/Breda, zelfde dag gebouwd) wel goed rankt, vallen sjabloon, contentdiepte en meta-tags af als oorzaak.
  - Wel een reëel gat gevonden: `/personeel-nijmegen` had slechts 2 inkomende kruislinks vanuit andere stadspagina's (Den Bosch, Utrecht) tegenover 5-7 bij gezonde peers.
  - Breda had al 5 inkomende links en presteert alsnog het slechtst, dus interne links verklaren niet alles.
  - Bijvangst: `components/home/ServicesGrid.tsx` wordt nergens meer geïmporteerd in de app (dode code, levert geen linkwaarde meer op).
- **Actie ondernomen**: `/personeel-nijmegen` toegevoegd aan de `relatedLinks` van Oss, Helmond, Uden en Waalwijk, van 2 naar 6 inkomende kruislinks (op niveau met Tilburg's 7).
- **Status**: gedeeltelijk opgelost (interne links aangevuld). De resterende kloof, vooral bij Breda, is vermoedelijk een extern signaal (backlinks, crawl-/indexeringsgeschiedenis) dat niet in de code zichtbaar is. Vervolgstap (buiten codebase): GSC URL-inspectie/Pagina-indexering voor `personeel-nijmegen` en `personeel-breda` bekijken op "Gecrawld, nog niet geïndexeerd" of vergelijkbare meldingen.

---

## Deels in behandeling, gewoon tijd nodig

### 6. Executive chef / hulpkok als zoektermen
- **Bevinding**: "vacature executive chef {stad}" over 7 steden samen 193 vertoningen, "hulpkok/keukenhulp" varianten samen 102 vertoningen, allemaal 0 klikken.
- **Context**: dit is al deels gedekt, de FAQ-synoniemen (chefkok, zelfstandig werkend kok, executive chef, hulpkok) zijn eerder deze sessie al toegevoegd aan alle vacature-kok/bediening-pagina's.
- **Status**: geen nieuwe actie nodig, positie moet nog rijpen.

---

## Bekend en al verklaard, geen actie nodig

- **`/contact` lage CTR ondanks goede positie**: eerder onderzocht, verklaard als merknaam-zoekopdrachten die naar de homepage klikken in plaats van naar contact. Geen bug.
- **"Keuken consultant" (33 vertoningen)**: ander dienstenmodel (advies, geen personeelsbemiddeling), waarschijnlijk niet passend bij het aanbod. Alleen oppakken als dit bewust een nieuwe dienst zou worden.
- **`/kok-aan-huis` (hub) rankt slechter dan zijn eigen stad-varianten** (positie 40,87 vs. Maastricht 17, Den Bosch 15,4, Tilburg 20,4): onderzocht (24 augustus 2026), titel/meta/contentdiepte/interne links zijn vergelijkbaar met de stadspagina's. Dit is het normale, verwachte patroon van een generiek hoofdterm ("kok aan huis") tegenover stad-specifieke long-tail varianten met veel minder concurrentie, geen bug. Optioneel, niet urgent: de hub staat niet in de footer/hoofdnavigatie zoals `/horecaspecialist` wel, wat op termijn zou kunnen helpen.

---

## Kleine, losse technische punten

- ~~Houten mist het `serviceSchema`-blok dat de andere 14 steden wel hebben in hun freelancer-layouts.~~ **Opgelost (24 augustus 2026)**: toegevoegd aan `app/vacature-kok-houten/layout.tsx` en `app/vacature-bediening-houten/layout.tsx`.
- ~~`/vacature-kok-antwerpen`: positie 10,58 (onderaan pagina 1) maar 0 klikken op 38 vertoningen.~~ **Bekeken (24 augustus 2026)**: titel ("Vacature Kok Antwerpen? Werk als Freelancer") volgt exact hetzelfde, elders wel succesvolle sjabloon als alle andere vacature-kok-pagina's, geen afwijkende of zwakke snippet gevonden. Bij positie 10 en maar 38 vertoningen is de verwachte CTR toch al maar 1 à 2 klikken, dus 0 klikken valt binnen normale statistische ruis. Geen defect gevonden, geen wijziging doorgevoerd.
- ~~`/horecaspecialist`: derde-hoogste pagina qua vertoningen (787) maar positie 18,65 en maar 1,4% CTR.~~ **Opgelost (24 augustus 2026)**: onderzocht, de term "horecaspecialist" zelf kwam nergens voor in titel/meta/H1 van de pagina, ondanks dat het de exacte ankertekst is in footer en hoofdnavigatie sitewide. Titel, meta description, keywords en het H1 aangepast om de letterlijke term te bevatten, in [app/horecaspecialist/layout.tsx](app/horecaspecialist/layout.tsx) en [app/horecaspecialist/page.tsx](app/horecaspecialist/page.tsx). Let op: de zoekterm "horecaspecialist" is in de markt dubbelzinnig (ook horeca-apparatuur-winkels gebruiken de term), dus verwacht een gedeeltelijke verbetering, geen wonder.
