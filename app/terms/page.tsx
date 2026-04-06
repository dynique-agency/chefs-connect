'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Users, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<'freelancer' | 'client'>('freelancer');

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brown text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">
              Algemene Voorwaarden
            </h1>
            <p className="font-inter text-sm text-cream/70 uppercase tracking-wider">
              Inwerkingtreding: 1 januari 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Selection */}
      <section className="py-8 border-b border-brown/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('freelancer')}
              className={`flex items-center gap-2 px-6 py-3 font-inter text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'freelancer'
                  ? 'bg-gold text-cream'
                  : 'bg-white border-2 border-brown/20 text-brown hover:border-gold'
              }`}
            >
              <Users className="w-5 h-5" />
              Voor Freelancers
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`flex items-center gap-2 px-6 py-3 font-inter text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'client'
                  ? 'bg-gold text-cream'
                  : 'bg-white border-2 border-brown/20 text-brown hover:border-gold'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Voor Opdrachtgevers
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {activeTab === 'freelancer' ? <FreelancerTerms /> : <ClientTerms />}
        </div>
      </section>
    </main>
  );
}

function FreelancerTerms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none"
    >
      <div className="mb-12">
        <h2 className="font-playfair text-3xl text-brown mb-6 text-center">
          Algemene Voorwaarden – Freelancers via ChefsConnect
        </h2>
      </div>

      {/* Artikel 1 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 1</span> – Definities
        </h3>
        <div className="space-y-3 font-inter text-brown/80">
          <p><strong>ChefsConnect:</strong> CHEFS CONNECT BV, gevestigd te Lanaken, die horeca-opdrachtgevers en zelfstandige professionals met elkaar in contact brengt en opdrachten faciliteert.</p>
          <p><strong>Freelancer / Dienstverlener:</strong> de zelfstandige natuurlijke persoon of rechtspersoon die via ChefsConnect opdrachten uitvoert.</p>
          <p><strong>Opdrachtgever:</strong> de horecaonderneming of andere klant waarvoor de Freelancer werkzaamheden verricht.</p>
          <p><strong>Overeenkomst:</strong> de individuele freelance-overeenkomst gesloten tussen ChefsConnect en de Freelancer.</p>
          <p><strong>Diensten:</strong> alle culinaire, hospitality-, keuken-, catering- en aanverwante werkzaamheden uitgevoerd door de Freelancer.</p>
        </div>
      </div>

      {/* Artikel 2 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 2</span> – Toepasselijkheid
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Deze algemene voorwaarden zijn van toepassing op iedere samenwerking tussen ChefsConnect en de Freelancer.</li>
          <li>• Door ondertekening van de Overeenkomst verklaart de Freelancer zich akkoord met deze voorwaarden.</li>
          <li>• Afwijkingen zijn slechts geldig indien schriftelijk overeengekomen.</li>
        </ul>
      </div>

      {/* Artikel 3 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 3</span> – Zelfstandige dienstverlening
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Freelancer voert de Diensten volledig zelfstandig uit en bepaalt zelf de wijze waarop de werkzaamheden worden verricht.</li>
          <li>• Er bestaat geen arbeidsovereenkomst tussen ChefsConnect en de Freelancer.</li>
          <li>• De Freelancer is zelf verantwoordelijk voor fiscale verplichtingen, sociale bijdragen, verzekeringen, vergunningen en certificaten.</li>
          <li>• De Freelancer vrijwaart ChefsConnect tegen aanspraken van derden die voortvloeien uit het niet naleven van deze verplichtingen.</li>
        </ul>
      </div>

      {/* Artikel 4 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 4</span> – Totstandkoming van opdrachten
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Een opdracht komt tot stand zodra deze via ChefsConnect wordt aangeboden en door de Freelancer wordt aanvaard.</li>
          <li>• ChefsConnect geeft geen garantie omtrent het aantal of de frequentie van opdrachten.</li>
          <li>• De Freelancer verbindt zich ertoe enkel opdrachten te aanvaarden waarvoor hij/zij voldoende gekwalificeerd is.</li>
        </ul>
      </div>

      {/* Artikel 5 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 5</span> – Uitvoering van de diensten
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Freelancer voert de Diensten uit volgens professionele normen en met de nodige zorg en vakbekwaamheid.</li>
          <li>• De Freelancer respecteert de geldende wetgeving inzake voedselveiligheid, hygiëne en arbeidsveiligheid (HACCP, Arbo).</li>
          <li>• De Freelancer volgt redelijke operationele richtlijnen van de Opdrachtgever, zonder dat hierdoor een gezagsverhouding ontstaat.</li>
          <li>• Indien de Freelancer verhinderd is, dient hij/zij ChefsConnect onmiddellijk op de hoogte te brengen.</li>
        </ul>
      </div>

      {/* Artikel 6 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 6</span> – Beschikbaarheid en vervanging
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Na aanvaarding van een opdracht verbindt de Freelancer zich ertoe deze effectief uit te voeren.</li>
          <li>• Het is niet toegestaan zonder voorafgaande schriftelijke toestemming van ChefsConnect een vervanger te sturen.</li>
          <li>• Indien vervanging wordt toegestaan, blijft de Freelancer volledig verantwoordelijk voor de kwaliteit van de uitvoering.</li>
        </ul>
      </div>

      {/* Artikel 7 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 7</span> – Annulering en no-show
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Bij annulering minder dan 72 uur vóór aanvang van de opdracht kan ChefsConnect een forfaitaire schadevergoeding van 50% van de afgesproken vergoeding aanrekenen.</li>
          <li>• Bij annulering minder dan 24 uur vóór aanvang, of bij niet verschijnen (no-show), heeft ChefsConnect het recht 100% van de afgesproken vergoeding als schadevergoeding te vorderen.</li>
          <li>• In geval van aantoonbare overmacht (ziekte met doktersverklaring, ongeval, overlijden familielid) vervalt de schadevergoeding, mits dit zo snel mogelijk wordt gemeld.</li>
          <li>• ChefsConnect behoudt zich het recht voor de samenwerking te beëindigen bij herhaaldelijke annuleringen.</li>
        </ul>
      </div>

      {/* Artikel 8 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 8</span> – Vergoeding en facturatie
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De vergoeding van de Freelancer wordt vastgelegd in de individuele Overeenkomst.</li>
          <li>• De Freelancer factureert conform de afspraken met ChefsConnect.</li>
          <li>• Facturen dienen correct en volledig te zijn opgesteld volgens de geldende BTW-wetgeving.</li>
          <li>• Standaard betalingstermijn is 30 dagen na factuurdatum, tenzij anders overeengekomen.</li>
        </ul>
      </div>

      {/* Artikel 9 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 9</span> – Aansprakelijkheid
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Freelancer is aansprakelijk voor schade veroorzaakt door fouten, nalatigheid of onzorgvuldig handelen tijdens de uitvoering van de Diensten.</li>
          <li>• ChefsConnect is uitsluitend aansprakelijk in geval van opzet of zware fout.</li>
          <li>• ChefsConnect is nooit aansprakelijk voor indirecte schade, gevolgschade, winstderving of reputatieschade.</li>
          <li>• De aansprakelijkheid van ChefsConnect is in elk geval beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering wordt uitgekeerd.</li>
        </ul>
      </div>

      {/* Artikel 10 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 10</span> – Verzekering
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Freelancer is verplicht een geldige beroeps- en/of bedrijfsaansprakelijkheidsverzekering te hebben met een minimale dekking van € 500.000,- per gebeurtenis.</li>
          <li>• Op eerste verzoek dient de Freelancer hiervan een geldig bewijs te leveren.</li>
        </ul>
      </div>

      {/* Artikel 11 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 11</span> – Geheimhouding en AVG
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Freelancer behandelt alle vertrouwelijke informatie strikt geheim.</li>
          <li>• Onder vertrouwelijke informatie wordt onder meer verstaan: klantgegevens, prijsafspraken, recepturen, bedrijfsprocessen en commerciële informatie.</li>
          <li>• De Freelancer verwerkt persoonsgegevens uitsluitend conform de AVG en instructies van ChefsConnect.</li>
          <li>• Deze verplichting blijft gelden tot vijf jaar na beëindiging van de samenwerking.</li>
        </ul>
      </div>

      {/* Artikel 12 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 12</span> – Non-solicitatie (verbod op afwerving)
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Het is de Freelancer verboden om gedurende de samenwerking en tot 12 maanden na beëindiging rechtstreeks (buiten ChefsConnect om) samen te werken met opdrachtgevers die via ChefsConnect werden verkregen.</li>
          <li>• Overtreding kan aanleiding geven tot een onmiddellijke forfaitaire schadevergoeding van € 5.000,- per overtreding, onverminderd het recht op vergoeding van de werkelijk geleden schade.</li>
        </ul>
      </div>

      {/* Artikel 13 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 13</span> – Intellectuele eigendom
        </h3>
        <p className="font-inter text-brown/80">
          Alle rechten met betrekking tot het platform, de planningstools, databanken, logo's, werkwijze en werkmethodes van ChefsConnect blijven exclusief eigendom van ChefsConnect.
        </p>
      </div>

      {/* Artikel 14 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 14</span> – Duur en beëindiging
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De samenwerking wordt aangegaan voor onbepaalde tijd, tenzij anders overeengekomen.</li>
          <li>• Beide partijen kunnen de samenwerking te allen tijde beëindigen met een opzegtermijn van 1 maand.</li>
          <li>• ChefsConnect kan de samenwerking met onmiddellijke ingang beëindigen bij: ernstige contractuele tekortkoming, fraude, herhaaldelijke annuleringen, schending van geheimhouding of gedrag dat de reputatie van ChefsConnect schaadt.</li>
          <li>• Na beëindiging vervallen openstaande opdrachten tenzij anders overeengekomen en blijven de verplichtingen uit artikel 11 en 12 van kracht.</li>
        </ul>
      </div>

      {/* Artikel 15 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 15</span> – Overmacht
        </h3>
        <p className="font-inter text-brown/80">
          Geen van beide partijen is aansprakelijk indien verplichtingen tijdelijk of definitief niet kunnen worden nagekomen door overmacht, waaronder begrepen: natuurrampen, oorlog, pandemieën, stakingen, overheidsmaatregelen en uitval van essentiële systemen.
        </p>
      </div>

      {/* Artikel 16 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 16</span> – Toepasselijk recht en geschillen
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Op deze voorwaarden is uitsluitend Belgisch recht van toepassing.</li>
          <li>• Partijen verplichten zich om geschillen in eerste instantie te beslechten via mediation of een andere vorm van geschillenbeslechting.</li>
          <li>• Indien geen overeenstemming wordt bereikt, worden geschillen voorgelegd aan de bevoegde rechtbank van het arrondissement waar ChefsConnect is gevestigd.</li>
        </ul>
      </div>

      <div className="mt-12 p-6 bg-gold/10 border-l-4 border-gold">
        <p className="font-inter text-brown text-sm">
          <strong>Opmerking:</strong> Deze algemene voorwaarden zijn opgesteld met zorgvuldigheid en in overeenstemming met de geldende wetgeving. Voor juridisch advies of aanpassingen aan uw specifieke situatie adviseren wij u contact op te nemen met een gespecialiseerde jurist.
        </p>
      </div>
    </motion.div>
  );
}

function ClientTerms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none"
    >
      <div className="mb-12">
        <h2 className="font-playfair text-3xl text-brown mb-6 text-center">
          Algemene Voorwaarden – Opdrachtgevers via ChefsConnect
        </h2>
      </div>

      {/* Artikel 1 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 1</span> – Definities
        </h3>
        <div className="space-y-3 font-inter text-brown/80">
          <p><strong>ChefsConnect:</strong> CHEFS CONNECT BV, gevestigd te Lanaken, die horeca-opdrachtgevers en zelfstandige professionals met elkaar in contact brengt.</p>
          <p><strong>Opdrachtgever:</strong> de horecaonderneming, evenementenorganisatie of andere klant die via ChefsConnect freelancers inzet.</p>
          <p><strong>Freelancer:</strong> de zelfstandige professional die door ChefsConnect wordt ingezet bij de Opdrachtgever.</p>
          <p><strong>Diensten:</strong> het bemiddelen tussen Opdrachtgever en Freelancers voor culinaire en hospitality werkzaamheden.</p>
        </div>
      </div>

      {/* Artikel 2 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 2</span> – Toepasselijkheid
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten en dienstverlening tussen ChefsConnect en de Opdrachtgever.</li>
          <li>• Door het plaatsen van een opdracht aanvaardt de Opdrachtgever deze voorwaarden.</li>
          <li>• Afwijkingen zijn slechts geldig indien schriftelijk overeengekomen.</li>
        </ul>
      </div>

      {/* Artikel 3 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 3</span> – Dienstverlening
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• ChefsConnect bemiddelt tussen Opdrachtgever en gekwalificeerde Freelancers.</li>
          <li>• ChefsConnect selecteert zorgvuldig maar geeft geen garantie omtrent beschikbaarheid of specifieke kwaliteiten van individuele Freelancers.</li>
          <li>• De Freelancers werken zelfstandig en zijn geen werknemers van ChefsConnect.</li>
          <li>• ChefsConnect spant zich in om passende vervanging te bieden bij uitval, maar kan dit niet garanderen.</li>
        </ul>
      </div>

      {/* Artikel 4 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 4</span> – Totstandkoming opdracht
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Een opdracht komt tot stand na schriftelijke bevestiging door ChefsConnect.</li>
          <li>• De Opdrachtgever verstrekt tijdig alle relevante informatie zoals datum, tijden, type dienst, dresscode en bijzonderheden.</li>
          <li>• ChefsConnect behoudt zich het recht voor opdrachten te weigeren zonder opgave van redenen.</li>
        </ul>
      </div>

      {/* Artikel 5 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 5</span> – Vergoeding en betaling
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De vergoeding wordt vooraf schriftelijk overeengekomen en is exclusief BTW tenzij anders vermeld.</li>
          <li>• De standaard betalingstermijn is 14 dagen na factuurdatum.</li>
          <li>• Bij te late betaling is de Opdrachtgever van rechtswege in verzuim en is een vertragingsrente verschuldigd van 1% per maand.</li>
          <li>• Bij wanbetaling behoudt ChefsConnect zich het recht voor om verdere dienstverlening op te schorten.</li>
          <li>• Alle buitengerechtelijke incassokosten (minimaal 15% van het openstaande bedrag met een minimum van € 250,-) zijn voor rekening van de Opdrachtgever.</li>
        </ul>
      </div>

      {/* Artikel 6 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 6</span> – Annulering
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Nadat ChefsConnect haar Diensten voor de betreffende opdracht heeft aangevat en de opdracht is binnen de termijn van 7 dagen, is er een vergoeding verschuldigd van 50% van de geschatte waarde van de opdracht, met een minimum van € 150,00, onverminderd het recht van ChefsConnect om hogere werkelijk geleden schade te bewijzen en te eisen van de Opdrachtgever.</li>
          <li>• Nadat ChefsConnect haar Diensten voor de betreffende opdracht heeft aangevat en de dienst valt binnen 48 uur voor aanvang, is er een vergoeding verschuldigd van 90% van de geschatte waarde van de opdracht, met een minimum van € 250,00, onverminderd het recht van ChefsConnect om hogere werkelijk geleden schade te bewijzen en te eisen van de Opdrachtgever.</li>
        </ul>
      </div>

      {/* Artikel 7 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 7</span> – Verplichtingen Opdrachtgever
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• De Opdrachtgever zorgt voor een veilige werkomgeving conform de Arbowetgeving.</li>
          <li>• De Opdrachtgever verstrekt de benodigde materialen, ingrediënten en faciliteiten.</li>
          <li>• De Opdrachtgever behandelt de Freelancer respectvol en professioneel.</li>
          <li>• De Opdrachtgever informeert ChefsConnect onmiddellijk bij problemen of klachten.</li>
        </ul>
      </div>

      {/* Artikel 8 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 8</span> – Aansprakelijkheid
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• ChefsConnect is enkel aansprakelijk voor schade ontstaan door opzet of bewuste roekeloosheid van ChefsConnect zelf.</li>
          <li>• ChefsConnect is niet aansprakelijk voor handelen of nalaten van de ingezette Freelancers.</li>
          <li>• De aansprakelijkheid van ChefsConnect is in alle gevallen beperkt tot het bedrag van de voor die specifieke opdracht betaalde vergoeding, met een maximum van € 5.000,-.</li>
          <li>• ChefsConnect is nooit aansprakelijk voor indirecte schade, gevolgschade, gemiste omzet of reputatieschade.</li>
        </ul>
      </div>

      {/* Artikel 9 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 9</span> – Non-solicitatie
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Het is de Opdrachtgever verboden om gedurende de samenwerking en tot 12 maanden na beëindiging rechtstreeks (buiten ChefsConnect om) samen te werken met Freelancers die via ChefsConnect zijn ingezet.</li>
          <li>• Bij overtreding is een onmiddellijke forfaitaire schadevergoeding verschuldigd van € 10.000,- per overtreding, onverminderd het recht op vergoeding van de werkelijk geleden schade.</li>
        </ul>
      </div>

      {/* Artikel 10 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 10</span> – Geheimhouding
        </h3>
        <p className="font-inter text-brown/80">
          Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die in het kader van de samenwerking wordt uitgewisseld. Deze verplichting blijft bestaan na beëindiging van de overeenkomst.
        </p>
      </div>

      {/* Artikel 11 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 11</span> – Persoonsgegevens (AVG/GDPR)
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Beide partijen verwerken persoonsgegevens conform de AVG/GDPR.</li>
          <li>• ChefsConnect treedt op als verwerker voor zover persoonsgegevens van de Opdrachtgever worden verwerkt.</li>
          <li>• Zie onze privacyverklaring voor meer informatie.</li>
        </ul>
      </div>

      {/* Artikel 12 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 12</span> – Klachten
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Klachten dienen binnen 48 uur na de prestatie schriftelijk te worden gemeld.</li>
          <li>• ChefsConnect zal de klacht in behandeling nemen en binnen 7 werkdagen reageren.</li>
          <li>• Bij gegronde klachten zal ChefsConnect in overleg een passende oplossing zoeken.</li>
        </ul>
      </div>

      {/* Artikel 13 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 13</span> – Overmacht
        </h3>
        <p className="font-inter text-brown/80">
          Bij overmacht (waaronder ziekte, ongeval, transportproblemen, natuurrampen, pandemieën) is ChefsConnect niet gehouden tot vergoeding van schade en kan de overeenkomst zonder rechterlijke tussenkomst worden ontbonden.
        </p>
      </div>

      {/* Artikel 14 */}
      <div className="mb-10">
        <h3 className="font-playfair text-2xl text-brown mb-4 flex items-center gap-3">
          <span className="text-gold">Artikel 14</span> – Toepasselijk recht
        </h3>
        <ul className="space-y-2 font-inter text-brown/80">
          <li>• Op deze voorwaarden is uitsluitend Belgisch recht van toepassing.</li>
          <li>• Geschillen worden bij voorkeur in onderling overleg opgelost.</li>
          <li>• Indien geen overeenstemming wordt bereikt, zijn de rechtbanken van het arrondissement waar ChefsConnect is gevestigd bevoegd.</li>
        </ul>
      </div>

      <div className="mt-12 p-6 bg-gold/10 border-l-4 border-gold">
        <p className="font-inter text-brown text-sm">
          <strong>Opmerking:</strong> Deze algemene voorwaarden zijn opgesteld met zorgvuldigheid en in overeenstemming met de geldende wetgeving. Voor juridisch advies of aanpassingen aan uw specifieke situatie adviseren wij u contact op te nemen met een gespecialiseerde jurist.
        </p>
      </div>
    </motion.div>
  );
}
