'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, BarChart3 } from 'lucide-react';

export default function CookiesPage() {
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
            <Cookie className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-6xl font-light mb-4">
              Cookiebeleid
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
                ChefsConnect maakt gebruik van cookies en vergelijkbare technologieën om de functionaliteit van onze website te verbeteren, jouw gebruikservaring te optimaliseren en inzicht te krijgen in het gebruik van onze diensten. In dit cookiebeleid leggen wij uit wat cookies zijn, welke cookies wij gebruiken en hoe je jouw cookievoorkeuren kunt beheren.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">1.</span> Wat zijn cookies?
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Cookies zijn kleine tekstbestanden die op jouw computer, tablet of smartphone worden geplaatst wanneer je een website bezoekt. Cookies helpen websites om jouw voorkeuren te onthouden en de website beter te laten functioneren.
              </p>
              <p className="font-inter text-brown/80 leading-relaxed mt-4">
                Naast cookies maken wij ook gebruik van vergelijkbare technologieën zoals web beacons, pixels en local storage. In dit beleid gebruiken wij de term 'cookies' ook voor deze technologieën.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">2.</span> Soorten cookies
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-6">
                Er bestaan verschillende soorten cookies op basis van functie en duur:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-white border border-brown/10">
                  <h4 className="font-playfair text-xl text-brown mb-3">Op basis van duur:</h4>
                  <ul className="space-y-2 font-inter text-sm text-brown/80">
                    <li>• <strong>Sessiecookies:</strong> Tijdelijke cookies die verdwijnen wanneer je de browser sluit</li>
                    <li>• <strong>Permanente cookies:</strong> Blijven op je apparaat staan tot ze verlopen of worden verwijderd</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-brown/10">
                  <h4 className="font-playfair text-xl text-brown mb-3">Op basis van eigenaar:</h4>
                  <ul className="space-y-2 font-inter text-sm text-brown/80">
                    <li>• <strong>First-party cookies:</strong> Geplaatst door ChefsConnect zelf</li>
                    <li>• <strong>Third-party cookies:</strong> Geplaatst door externe partijen (bijv. analytics tools)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">3.</span> Welke cookies gebruiken wij?
              </h2>

              {/* Functionele cookies */}
              <div className="mb-8 p-6 bg-white border-l-4 border-gold">
                <div className="flex items-start gap-4 mb-4">
                  <Settings className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair text-2xl text-brown mb-2">Functionele cookies (noodzakelijk)</h3>
                    <p className="font-inter text-sm text-brown/70 mb-3">Deze cookies zijn essentieel voor het functioneren van de website.</p>
                  </div>
                </div>
                <ul className="space-y-2 font-inter text-sm text-brown/80">
                  <li>• <strong>Sessie cookies:</strong> Houden je ingelogd tijdens je bezoek</li>
                  <li>• <strong>Beveiligingscookies:</strong> Beschermen tegen misbruik en ongeautoriseerde toegang</li>
                  <li>• <strong>Cookie preferences:</strong> Onthouden jouw cookievoorkeuren</li>
                </ul>
                <p className="font-inter text-xs text-brown/60 mt-4 italic">
                  Deze cookies kunnen niet worden uitgeschakeld omdat de website anders niet correct werkt.
                </p>
              </div>

              {/* Analytische cookies */}
              <div className="mb-8 p-6 bg-white border-l-4 border-brown/30">
                <div className="flex items-start gap-4 mb-4">
                  <BarChart3 className="w-8 h-8 text-brown/60 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair text-2xl text-brown mb-2">Analytische cookies</h3>
                    <p className="font-inter text-sm text-brown/70 mb-3">Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken.</p>
                  </div>
                </div>
                <ul className="space-y-2 font-inter text-sm text-brown/80">
                  <li>• <strong>Google Analytics:</strong> Verzamelt anonieme statistieken over websitebezoek</li>
                  <li>• <strong>Gebruikersgedrag:</strong> Welke pagina's worden bezocht en hoe lang</li>
                  <li>• <strong>Prestatie monitoring:</strong> Laadtijden en technische performance</li>
                </ul>
                <p className="font-inter text-xs text-brown/60 mt-4 italic">
                  Deze cookies worden alleen geplaatst met jouw toestemming.
                </p>
              </div>

              {/* Marketing cookies */}
              <div className="mb-8 p-6 bg-white border-l-4 border-brown/30">
                <div className="flex items-start gap-4 mb-4">
                  <Eye className="w-8 h-8 text-brown/60 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair text-2xl text-brown mb-2">Marketing en tracking cookies</h3>
                    <p className="font-inter text-sm text-brown/70 mb-3">Deze cookies worden gebruikt voor gerichte marketing.</p>
                  </div>
                </div>
                <ul className="space-y-2 font-inter text-sm text-brown/80">
                  <li>• <strong>Social media pixels:</strong> Facebook, LinkedIn tracking voor advertenties</li>
                  <li>• <strong>Remarketing:</strong> Tonen relevante advertenties op andere websites</li>
                  <li>• <strong>Conversie tracking:</strong> Meten effectiviteit van campagnes</li>
                </ul>
                <p className="font-inter text-xs text-brown/60 mt-4 italic">
                  Deze cookies worden alleen geplaatst met jouw toestemming.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">4.</span> Jouw cookievoorkeuren beheren
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Je hebt het recht om te kiezen welke cookies je accepteert. Bij je eerste bezoek aan onze website krijg je een cookiebanner te zien waarin je jouw voorkeuren kunt aangeven.
              </p>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Je kunt jouw voorkeuren op elk moment wijzigen door:
              </p>
              <ul className="space-y-2 font-inter text-brown/80 mb-6">
                <li>• De cookie-instellingen onderaan deze pagina te gebruiken</li>
                <li>• De cookies in je browser te verwijderen</li>
                <li>• Je browserinstellingen aan te passen om cookies te blokkeren</li>
              </ul>

              <div className="p-6 bg-brown/5 border border-brown/10">
                <h4 className="font-playfair text-xl text-brown mb-3">Cookies verwijderen in populaire browsers:</h4>
                <ul className="space-y-2 font-inter text-sm text-brown/80">
                  <li>• <strong>Google Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens</li>
                  <li>• <strong>Firefox:</strong> Instellingen → Privacy en beveiliging → Cookies en sitegegevens</li>
                  <li>• <strong>Safari:</strong> Voorkeuren → Privacy → Websitegegevens beheren</li>
                  <li>• <strong>Microsoft Edge:</strong> Instellingen → Privacy, zoeken en services → Browsegegevens wissen</li>
                </ul>
              </div>

              <p className="font-inter text-sm text-brown/60 mt-4 italic">
                Let op: Het uitschakelen van bepaalde cookies kan invloed hebben op de functionaliteit en gebruikservaring van onze website.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">5.</span> Third-party cookies
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Wij maken gebruik van diensten van externe partijen die cookies kunnen plaatsen:
              </p>
              <ul className="space-y-3 font-inter text-brown/80">
                <li>
                  • <strong>Google Analytics:</strong> Voor website statistieken<br />
                  <span className="text-sm text-brown/60">Privacybeleid: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">policies.google.com/privacy</a></span>
                </li>
                <li>
                  • <strong>Google Maps:</strong> Voor locatie weergave<br />
                  <span className="text-sm text-brown/60">Privacybeleid: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">policies.google.com/privacy</a></span>
                </li>
              </ul>
              <p className="font-inter text-sm text-brown/60 mt-4">
                Deze externe partijen kunnen jouw gegevens ook voor eigen doeleinden gebruiken. Wij adviseren je hun privacybeleid te raadplegen.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">6.</span> Do Not Track
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Sommige browsers hebben een "Do Not Track" (DNT) functie. Omdat er geen universele standaard is voor DNT-signalen, reageert onze website momenteel niet op DNT-signalen. Je kunt wel gebruik maken van de cookie-instellingen op onze website of in je browser.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">7.</span> Wijzigingen in dit cookiebeleid
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed">
                Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen. De meest recente versie vind je altijd op deze pagina. De datum van de laatste wijziging staat bovenaan vermeld. Wij adviseren je dit beleid regelmatig te raadplegen.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl text-brown mb-4 flex items-center gap-3">
                <span className="text-gold">8.</span> Meer informatie
              </h2>
              <p className="font-inter text-brown/80 leading-relaxed mb-4">
                Voor meer informatie over cookies en privacy:
              </p>
              <ul className="space-y-2 font-inter text-brown/80">
                <li>• Lees onze <a href="/privacy" className="text-gold hover:underline">Privacyverklaring</a></li>
                <li>• Bezoek <a href="https://www.consumentenbond.nl/internet-privacy/cookies-verwijderen" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">consumentenbond.nl</a> voor algemene informatie over cookies</li>
                <li>• Bezoek <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">autoriteitpersoonsgegevens.nl</a> voor informatie over jouw rechten</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-8 bg-brown text-cream">
              <h3 className="font-playfair text-2xl mb-4">Vragen over cookies?</h3>
              <p className="font-inter leading-relaxed mb-4">
                Heb je vragen over ons gebruik van cookies? Neem dan contact op met:
              </p>
              <p className="font-inter text-sm">
                <strong>ChefsConnect</strong><br />
                E-mail: <a href="mailto:info@chefs-connect.nl" className="text-gold hover:underline">info@chefs-connect.nl</a><br />
                Telefoon: <a href="tel:+31641875803" className="text-gold hover:underline">+31 6 41875803</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
