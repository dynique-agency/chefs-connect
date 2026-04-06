'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">
              Privacyverklaring
            </h1>
            <p className="font-inter text-sm text-cream/70 uppercase tracking-wider">
              Laatst bijgewerkt: 1 januari 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Inleiding */}
            <div className="mb-12 p-6 bg-gold/5 border-l-4 border-gold">
              <p className="font-inter text-brown leading-relaxed mb-0">
                ChefsConnect hecht grote waarde aan de bescherming van jouw persoonsgegevens en het respecteren van jouw privacy. In deze privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij dit doen, hoe wij deze beschermen en welke rechten jij hebt met betrekking tot jouw persoonsgegevens.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">1.</span> Wie zijn wij?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                ChefsConnect is een arbeidsbemiddelingsbureau gespecialiseerd in de horecasector. Wij brengen werkgevers en zelfstandige professionals met elkaar in contact.
              </p>
              <div className="mt-4 p-4 bg-white border border-brown/10">
                <p className="font-inter text-sm text-brown mb-2"><strong>Bedrijfsnaam:</strong> ChefsConnect</p>
                <p className="font-inter text-sm text-brown mb-2"><strong>Adres:</strong> Gasthuisstraat 3.1 Lanaken</p>
                <p className="font-inter text-sm text-brown mb-2"><strong>KVK:</strong> 95845445</p>
                <p className="font-inter text-sm text-brown mb-2"><strong>BTW:</strong> NL866528476B01</p>
                <p className="font-inter text-sm text-brown"><strong>E-mail:</strong> info@chefs-connect.nl</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">2.</span> Welke gegevens verzamelen wij?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Wij verzamelen uitsluitend persoonsgegevens die noodzakelijk zijn voor het leveren en verbeteren van onze diensten. Dit kan onder meer omvatten:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• Identiteits- en contactgegevens zoals naam, adres, e-mailadres, telefoonnummer en geboortedatum</li>
                <li>• Professionele gegevens zoals CV, opleidingsniveau, werkervaring, certificaten en vaardigheden</li>
                <li>• Accountgegevens wanneer je een account aanmaakt op ons platform</li>
                <li>• Technische gegevens zoals IP-adres, browserinformatie en gegevens verzameld via cookies</li>
                <li>• Eventuele overige gegevens die je vrijwillig met ons deelt</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">3.</span> Waarom verwerken wij jouw gegevens?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Wij verwerken persoonsgegevens uitsluitend voor legitieme doeleinden, waaronder:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• Het matchen van kandidaten en freelancers met opdrachtgevers in de horecasector</li>
                <li>• Het faciliteren van samenwerkingen en opdrachten</li>
                <li>• Communicatie over vacatures, opdrachten en onze dienstverlening</li>
                <li>• Het beheren van gebruikersaccounts</li>
                <li>• Het verbeteren van onze website, platform en dienstverlening</li>
                <li>• Het voldoen aan wettelijke en administratieve verplichtingen</li>
                <li>• Het beschermen van onze bedrijfsbelangen</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">4.</span> Rechtsgrond voor verwerking
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Wij verwerken persoonsgegevens op basis van één of meerdere van de volgende rechtsgronden:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• Toestemming van de betrokkene</li>
                <li>• De uitvoering van een overeenkomst</li>
                <li>• Het voldoen aan wettelijke verplichtingen</li>
                <li>• Gerechtvaardigde bedrijfsbelangen, mits deze niet zwaarder wegen dan jouw privacyrechten</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <Lock className="w-8 h-8 text-gold" />
                <span className="text-gold">5.</span> Hoe beveiligen wij jouw gegevens?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                ChefsConnect neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde toegang of openbaarmaking. Denk hierbij aan beveiligde systemen, versleutelde verbindingen (SSL/TLS), regelmatige beveiligingsupdates en beperkte toegang tot gegevens op basis van strikte autorisatie.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">6.</span> Met wie delen wij jouw gegevens?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Wij delen persoonsgegevens uitsluitend wanneer dit noodzakelijk is:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• Met opdrachtgevers of potentiële werkgevers, en alleen voor zover relevant voor de opdracht</li>
                <li>• Met zorgvuldig geselecteerde dienstverleners die ons ondersteunen bij onze bedrijfsvoering (bijvoorbeeld hosting, betalingsverwerking)</li>
                <li>• Met overheidsinstanties of toezichthouders wanneer wij hier wettelijk toe verplicht zijn</li>
              </ul>
              <p className="font-inter text-brown/80 leading-relaxed mt-4 font-semibold">
                Wij verkopen jouw gegevens nooit aan derden.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">7.</span> Bewaartermijn
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor zij zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht of toegestaan is. Over het algemeen hanteren wij de volgende bewaartermijnen:
              </p>
              <ul className="space-y-2 font-inter text-brown/80 mt-4">
                <li>• Actieve kandidaten/freelancers: tijdens de samenwerking + 2 jaar</li>
                <li>• Financiële administratie: 7 jaar (wettelijke verplichting)</li>
                <li>• Marketingcommunicatie: tot intrekking toestemming</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-gold" />
                <span className="text-gold">8.</span> Jouw rechten (AVG/GDPR)
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Op grond van de Algemene Verordening Gegevensbescherming (AVG/GDPR) heb je de volgende rechten:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• <strong>Recht op inzage:</strong> Je kunt opvragen welke gegevens wij van jou verwerken</li>
                <li>• <strong>Recht op rectificatie:</strong> Je kunt onjuiste gegevens laten corrigeren</li>
                <li>• <strong>Recht op verwijdering ('recht om vergeten te worden'):</strong> Je kunt verzoeken om verwijdering van jouw gegevens</li>
                <li>• <strong>Recht op beperking:</strong> Je kunt verzoeken om beperking van de verwerking</li>
                <li>• <strong>Recht op bezwaar:</strong> Je kunt bezwaar maken tegen verwerking</li>
                <li>• <strong>Recht op gegevensoverdracht:</strong> Je kunt jouw gegevens in een overdraagbaar formaat ontvangen</li>
                <li>• <strong>Recht om toestemming in te trekken:</strong> Je kunt toestemming op elk moment intrekken</li>
              </ul>
              <p className="font-inter text-brown/80 leading-relaxed mt-4">
                Verzoeken kunnen worden gericht aan: <a href="mailto:info@chefs-connect.nl" className="text-gold hover:underline">info@chefs-connect.nl</a>
              </p>
              <p className="font-inter text-brown/80 leading-relaxed mt-2">
                Wij zullen binnen 30 dagen op jouw verzoek reageren.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">9.</span> Cookies
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Onze website maakt gebruik van cookies en vergelijkbare technologieën om de werking van het platform te verbeteren en inzicht te krijgen in het gebruik ervan. Meer informatie vind je in ons <a href="/cookies" className="text-gold hover:underline">cookiebeleid</a>.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">10.</span> Gegevensverwerking buiten de EU
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Wij streven ernaar om persoonsgegevens binnen de Europese Economische Ruimte (EER) te verwerken. Indien gegevens buiten de EER worden verwerkt, zorgen wij voor passende waarborgen conform de AVG, zoals EU-goedgekeurde modelcontracten of adequaatheidsbesluit.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">11.</span> Datalekken
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                In het onwaarschijnlijke geval van een datalek dat een risico vormt voor jouw rechten en vrijheden, zullen wij dit binnen 72 uur melden bij de Autoriteit Persoonsgegevens en jou hiervan op de hoogte stellen indien dit wettelijk verplicht is.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">12.</span> Wijzigingen in deze privacyverklaring
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                ChefsConnect behoudt zich het recht voor deze privacyverklaring te wijzigen. De meest actuele versie wordt steeds op onze website gepubliceerd met vermelding van de laatste wijzigingsdatum. Bij substantiële wijzigingen zullen wij je hiervan actief op de hoogte stellen. Wij raden aan deze verklaring regelmatig te raadplegen.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">13.</span> Klachten
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Mocht je niet tevreden zijn over de manier waarop wij omgaan met jouw persoonsgegevens, dan hoor wij dit graag. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens via <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">autoriteitpersoonsgegevens.nl</a>.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-8 bg-brown text-cream">
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-2xl mb-4">Contact</h3>
                  <p className="font-inter leading-relaxed mb-4">
                    Heb je vragen over deze privacyverklaring of de manier waarop wij persoonsgegevens verwerken? Neem dan contact op via:
                  </p>
                  <p className="font-inter text-sm">
                    <strong>ChefsConnect</strong><br />
                    Gasthuisstraat 3.1 Lanaken<br />
                    Telefoon: <a href="tel:+31641875803" className="text-gold hover:underline">+31 6 41875803</a><br />
                    E-mail: <a href="mailto:info@chefs-connect.nl" className="text-gold hover:underline">info@chefs-connect.nl</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
