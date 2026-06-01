from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)

# ── Brand colours ──────────────────────────────────────────────────────────────
GOLD  = colors.HexColor('#C9A961')
BROWN = colors.HexColor('#2C1810')
CREAM = colors.HexColor('#FAF8F3')
LIGHT = colors.HexColor('#F0EBE1')
MUTED = colors.HexColor('#7A6A5A')
WHITE = colors.white

# ── Page geometry ──────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN_L = MARGIN_R = 22 * mm
MARGIN_T = 20 * mm
MARGIN_B = 20 * mm
CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R

# ── Base styles ────────────────────────────────────────────────────────────────
SS = getSampleStyleSheet()

def S(name, **kw):
    parent = kw.pop('parent', 'Normal')
    return ParagraphStyle(name, parent=SS[parent], **kw)

H1 = S('H1', fontSize=17, leading=22, textColor=BROWN, fontName='Helvetica-Bold',
        spaceBefore=12, spaceAfter=5)
H2 = S('H2', fontSize=12, leading=17, textColor=BROWN, fontName='Helvetica-Bold',
        spaceBefore=9, spaceAfter=3)
BODY = S('Body', fontSize=9.5, leading=14, textColor=BROWN, fontName='Helvetica', spaceAfter=5)
BODY_SM = S('BodySm', fontSize=8.5, leading=13, textColor=BROWN, fontName='Helvetica', spaceAfter=4)
MUTED_S = S('MutedS', fontSize=8.5, leading=12, textColor=MUTED, fontName='Helvetica')
BULLET_S = S('Bullet', fontSize=9.5, leading=14, textColor=BROWN, fontName='Helvetica',
              leftIndent=12, spaceAfter=3)

TC  = S('TC',  fontSize=8.5, leading=12, textColor=BROWN, fontName='Helvetica',  alignment=TA_LEFT)
TCB = S('TCB', fontSize=8.5, leading=12, textColor=BROWN, fontName='Helvetica-Bold', alignment=TA_LEFT)
TCH = S('TCH', fontSize=8.5, leading=12, textColor=WHITE, fontName='Helvetica-Bold', alignment=TA_LEFT)
TCM = S('TCM', fontSize=8,   leading=11, textColor=MUTED, fontName='Helvetica',  alignment=TA_LEFT)

def p(text, style=None):
    return Paragraph(text, style or BODY)

def bp(text):
    return Paragraph(f'<bullet>•</bullet> {text}', BULLET_S)

def sp(n=4):
    return Spacer(1, n * mm)

# ── Table factory ──────────────────────────────────────────────────────────────
def tbl(headers, rows, widths):
    def wrap(v, hdr=False):
        if isinstance(v, str):
            return Paragraph(v, TCH if hdr else TC)
        return v

    data = [[wrap(h, hdr=True) for h in headers]] + \
           [[wrap(c) for c in row] for row in rows]

    t = Table(data, colWidths=widths, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',    (0, 0), (-1, 0),  BROWN),
        ('ROWBACKGROUNDS',(0, 1), (-1, -1), [WHITE, LIGHT]),
        ('FONTSIZE',      (0, 0), (-1, -1), 8.5),
        ('LEADING',       (0, 0), (-1, -1), 12),
        ('TOPPADDING',    (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING',   (0, 0), (-1, -1), 7),
        ('RIGHTPADDING',  (0, 0), (-1, -1), 7),
        ('GRID',          (0, 0), (-1, -1), 0.4, colors.HexColor('#D0C4B0')),
        ('VALIGN',        (0, 0), (-1, -1), 'TOP'),
    ]))
    return t

# ── KPI box ────────────────────────────────────────────────────────────────────
def kpi_row(items):
    KV = S('KV', fontSize=22, leading=26, textColor=GOLD,
           fontName='Helvetica-Bold', alignment=TA_CENTER)
    KL = S('KL', fontSize=8, leading=11, textColor=MUTED,
           fontName='Helvetica', alignment=TA_CENTER)
    w = CONTENT_W / len(items)
    top = [Paragraph(v, KV) for v, _ in items]
    bot = [Paragraph(l, KL) for _, l in items]
    t = Table([top, bot], colWidths=[w] * len(items))
    t.setStyle(TableStyle([
        ('BACKGROUND',    (0, 0), (-1, -1), WHITE),
        ('BOX',           (0, 0), (-1, -1), 0.5, GOLD),
        ('LINEAFTER',     (0, 0), (-2, -1), 0.5, GOLD),
        ('TOPPADDING',    (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('VALIGN',        (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    return t

# ── Header/footer ──────────────────────────────────────────────────────────────
def draw_page(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(GOLD)
    canvas.rect(0, h - 8 * mm, w, 8 * mm, fill=1, stroke=0)
    canvas.setFillColor(BROWN)
    canvas.setFont('Helvetica-Bold', 9)
    canvas.drawString(MARGIN_L, h - 5.5 * mm, 'CHEFS CONNECT')
    canvas.setFont('Helvetica', 9)
    canvas.drawRightString(w - MARGIN_R, h - 5.5 * mm, 'Website & SEO Update — Mei 2026')
    canvas.setStrokeColor(colors.HexColor('#D0C4B0'))
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN_L, MARGIN_B - 4 * mm, w - MARGIN_R, MARGIN_B - 4 * mm)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MUTED)
    canvas.drawCentredString(w / 2, MARGIN_B - 8 * mm, f'Pagina {doc.page}')
    canvas.drawString(MARGIN_L, MARGIN_B - 8 * mm, 'Vertrouwelijk — Dynique Agency voor Chefs Connect')
    canvas.restoreState()

# ══════════════════════════════════════════════════════════════════════════════
def build():
    out = '/Users/john/Downloads/chefs-connect-main-2/Website_SEO_Update_Mei_2026.pdf'
    doc = SimpleDocTemplate(
        out, pagesize=A4,
        leftMargin=MARGIN_L, rightMargin=MARGIN_R,
        topMargin=MARGIN_T + 8 * mm, bottomMargin=MARGIN_B + 6 * mm,
        title='Website & SEO Update Mei 2026', author='Dynique Agency',
    )
    story = []

    # ── COVER ──────────────────────────────────────────────────────────────────
    CT = S('CT', fontSize=34, leading=40, textColor=BROWN, fontName='Helvetica-Bold')
    CS = S('CS', fontSize=13, leading=19, textColor=MUTED, fontName='Helvetica')
    CM = S('CM', fontSize=10, leading=15, textColor=MUTED, fontName='Helvetica')

    story += [
        sp(42),
        p('Website & SEO', CT),
        p('Update Mei 2026', CT),
        sp(6),
        p('Een volledig overzicht van alle verbeteringen die Dynique Agency heeft '
          'doorgevoerd voor Chefs Connect in mei 2026.', CS),
        sp(8),
        p('Periode: Mei 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Opgesteld door: Dynique Agency', CM),
        p('Klant: Chefs Connect &nbsp;&nbsp;|&nbsp;&nbsp; Website: chefs-connect.nl', CM),
        sp(12),
        kpi_row([
            ('−91%', 'Afbeeldinggewicht'),
            ('6+', 'Kapotte links gerepareerd'),
            ('7+', 'Funnel verbeteringen'),
            ('3×', 'Nieuwe locatiepagina’s'),
        ]),
        PageBreak(),
    ]

    # ── INHOUDSOPGAVE ──────────────────────────────────────────────────────────
    story.append(p('Inhoudsopgave', H1))
    story.append(sp(2))

    toc = [
        ('1', 'Prestaties — Afbeeldingen & laadtijd',   '3'),
        ('2', 'Design & UX',                                  '4'),
        ('3', 'SEO — Technische optimalisaties',         '5'),
        ('4', 'Locatiepagina’s',                         '6'),
        ('5', 'Interne links',                                 '7'),
        ('6', 'CTA & Funneling',                               '8'),
        ('7', 'Fotografie',                                    '9'),
        ('8', 'Volgende stappen',                              '10'),
    ]
    toc_data = [[p(n, TCB), p(t, TC), p(pg, TCM)] for n, t, pg in toc]
    toc_t = Table(toc_data, colWidths=[12 * mm, CONTENT_W - 28 * mm, 16 * mm])
    toc_t.setStyle(TableStyle([
        ('FONTSIZE',      (0, 0), (-1, -1), 10),
        ('LEADING',       (0, 0), (-1, -1), 16),
        ('TOPPADDING',    (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW',     (0, 0), (-1, -2), 0.3, colors.HexColor('#D0C4B0')),
        ('VALIGN',        (0, 0), (-1, -1), 'MIDDLE'),
        ('TEXTCOLOR',     (0, 0), (0, -1),  GOLD),
        ('TEXTCOLOR',     (2, 0), (2, -1),  MUTED),
    ]))
    story.append(toc_t)
    story.append(PageBreak())

    # ── 1. PRESTATIES ──────────────────────────────────────────────────────────
    story.append(p('1. Prestaties — Afbeeldingen & laadtijd', H1))
    story.append(p(
        'De grootste snelheidswinst zit in de afbeeldingen. Alle zware PNG-bestanden zijn '
        'geconverteerd naar het moderne WebP-formaat op 85% kwaliteit. WebP levert bij '
        'gelijke visuele kwaliteit structureel kleinere bestanden op dan PNG of JPEG, '
        'wat direct leidt tot een lagere laadtijd en een betere Core Web Vitals-score. '
        'Het totale afbeeldinggewicht daalde van ruim 44 MB naar minder dan 2,6 MB — '
        'een reductie van meer dan 91%.'))
    story.append(sp(3))

    cw4 = [CONTENT_W * 0.38, CONTENT_W * 0.17, CONTENT_W * 0.17, CONTENT_W * 0.28]
    story.append(tbl(
        ['Bestand', 'Oud formaat', 'Nieuw (WebP)', 'Reductie'],
        [
            ['hero-banner.webp',            '8,1 MB', '0,48 MB', '−94%'],
            ['choice-events.webp',          '9,0 MB', '0,58 MB', '−94%'],
            ['reviews-background.webp',     '8,9 MB', '0,44 MB', '−95%'],
            ['chef-table-explanation.webp', '3,7 MB', '0,31 MB', '−92%'],
            ['freelancer-bediening.webp',   '5,6 MB', '0,82 MB', '−85%'],
        ],
        cw4,
    ))

    story.append(sp(5))
    story.append(p('Laadscherm verbeterd', H2))
    story.append(p(
        'Het laadscherm dat verschijnt bij de eerste paginabezoek is verkort van 3 seconden '
        'naar 1,5 seconden. De interne animaties zijn eveneens compacter gemaakt: de '
        'schaalaanimatie ging van 2,5 s naar 1,0 s en de exit-fade van 1,2 s naar 0,7 s. '
        'Voor terugkerende bezoekers wordt het laadscherm volledig overgeslagen via '
        '<i>sessionStorage</i> — zodra de gebruiker de sessie al eerder heeft gezien, '
        'laadt de pagina direct zonder enige vertraging.'))

    story.append(sp(3))
    story.append(p('Pagina-overgangen', H2))
    story.append(p(
        'Via een nieuw bestand <b>app/template.tsx</b> in de Next.js App Router worden '
        'alle paginawisselingen nu begeleid door een zachte fade-in animatie van 0,35 seconden. '
        'Dit voorkomt harde, abrupte wissels en geeft de website een vloeiendere, '
        'professionelere uitstraling. Het bestand wordt door Next.js automatisch herkend '
        'en toegepast op elke route.'))

    story.append(PageBreak())

    # ── 2. DESIGN & UX ────────────────────────────────────────────────────────
    story.append(p('2. Design & UX', H1))
    story.append(p(
        'Kleine interactie-verbeteringen hebben een groot effect op de merkbeleving. '
        'Onderstaande aanpassingen versterken de premiumuitstraling van Chefs Connect '
        'zonder de structuur van de website te wijzigen.'))
    story.append(sp(3))

    story.append(p('Cursor-inertie', H2))
    story.append(p(
        'De aangepaste cursor bestaat uit twee lagen: een kleine punt die de exacte '
        'muispositie volgt, en een grotere ring die met een zachte vertraging meebeweegt '
        '(lerp-factor 0,1). Hierdoor "zweeft" de ring 6 à 8 frames achter de punt '
        'aan, wat een organische, premium uitstraling geeft. Op klikbare elementen '
        'vergroot de ring van 32 px naar 44 px en krijgt een goudkleurige achtergrond, '
        'waardoor interactieve elementen subtiel worden aangekondigd. De implementatie '
        'gebruikt <i>requestAnimationFrame</i> met directe DOM-manipulatie — geen '
        'React state, dus geen render-overhead.'))

    story.append(sp(3))
    story.append(p('Footer uitgebreid', H2))
    story.append(p(
        'De footer is uitgebreid van drie naar vier kolommen. De nieuwe kolom '
        '<b>Locaties</b> bevat directe links naar alle locatiepagina’s: Maastricht '
        '(kok inhuren én freelance opdrachten) en Eindhoven (kok inhuren). '
        'Hierdoor zijn de locatiepagina’s vanuit elke pagina op de website bereikbaar, '
        'wat zowel de gebruikerservaring als de interne linkstructuur voor zoekmachines versterkt.'))

    story.append(sp(3))
    story.append(p('Exit-intent popups', H2))
    story.append(p(
        'Op meerdere pagina’s zijn strategisch geplaatste popups toegevoegd die '
        'verschijnen nadat een bezoeker een bepaalde tijd op de pagina is:'))
    story.append(sp(2))

    cw_pop = [CONTENT_W * 0.30, CONTENT_W * 0.20, CONTENT_W * 0.50]
    story.append(tbl(
        ['Pagina', 'Vertraging', 'Type popup'],
        [
            ['Homepage (/)','7 seconden', 'PremiumStaffingPopup — gericht op werkgevers die personeel zoeken'],
            ['/maastricht', '4 seconden', 'PremiumFreelancerPopup — gericht op freelancers die opdrachten zoeken'],
            ['/personeel-maastricht', '4 seconden', 'PremiumStaffingPopup — werkgevers in Maastricht'],
            ['/personeel-eindhoven', '4 seconden', 'PremiumStaffingPopup — werkgevers in Eindhoven'],
            ['/zoek-personeel', '4 seconden', 'PremiumStaffingPopup — algemene werkgeverspagina'],
            ['/horecaspecialist', '4 seconden', 'PremiumFreelancerPopup — freelancerpagina'],
        ],
        cw_pop,
    ))

    story.append(PageBreak())

    # ── 3. SEO ────────────────────────────────────────────────────────────────
    story.append(p('3. SEO — Technische optimalisaties', H1))
    story.append(p(
        'Technische SEO zorgt ervoor dat zoekmachines de website correct begrijpen, '
        'indexeren en weergeven in zoekresultaten. Alle onderstaande aanpassingen zijn '
        'doorgevoerd zonder zichtbare wijzigingen voor de bezoeker.'))
    story.append(sp(3))

    story.append(p('Structured data (Schema.org)', H2))
    story.append(p(
        'Op alle relevante pagina’s is gestructureerde data toegevoegd in JSON-LD '
        'formaat. Dit helpt Google de inhoud te categoriseren en kan leiden tot '
        '<i>rich results</i> in de zoekresultaten, zoals sterrenratings, FAQ-blokken '
        'en sitelinks.'))
    story.append(sp(2))

    cw_seo = [CONTENT_W * 0.25, CONTENT_W * 0.30, CONTENT_W * 0.45]
    story.append(tbl(
        ['Schema type', 'Pagina’s', 'Effect in Google'],
        [
            ['WebSite', 'Homepage', 'Sitelinks-zoekfunctie; merkherkenning bij branded zoekopdrachten'],
            ['Organization', 'Homepage', 'NAW-gegevens, logo en contactinfo in de kenniskaart'],
            ['BreadcrumbList', 'Alle pagina’s', 'Broodkruimelnavigatie zichtbaar onder de paginatitel'],
            ['FAQPage', 'Relevante pagina’s', 'FAQ-rich-result: vragen en antwoorden direct in Google'],
            ['Service', 'Dienst-pagina’s', 'Dienstaanbod herkenbaar als gestructureerde entiteit'],
            ['AggregateRating', 'Homepage', 'Sterrenrating direct zichtbaar bij de zoekresultaten'],
            ['LocalBusiness', 'Locatiepagina’s', 'Vestigingsgegevens per stad voor lokale zoekresultaten'],
        ],
        cw_seo,
    ))

    story.append(sp(4))
    story.append(p('Overige SEO-aanpassingen', H2))
    for t in [
        '<b>Sitemap.xml bijgewerkt</b> — /personeel-eindhoven toegevoegd met prioriteit 0.8 en changeFrequency "monthly".',
        '<b>Canonicals gecontroleerd</b> — geen duplicate content risico’s aangetroffen of doorgevoerd.',
        '<b>Alt-teksten</b> van alle nieuwe afbeeldingen zijn beschrijvend en zoekwoordrijk gemaakt.',
        '<b>Meta-titels en -beschrijvingen</b> gecontroleerd en aangescherpt op alle hoofd- en locatiepagina’s.',
        '<b>Open Graph tags</b> aanwezig op alle pagina’s voor correcte weergave bij delen via social media.',
    ]:
        story.append(bp(t))

    story.append(PageBreak())

    # ── 4. LOCATIEPAGINA'S ────────────────────────────────────────────────────
    story.append(p("4. Locatiepagina’s", H1))
    story.append(p(
        'Lokale zoekopdrachten zoals <i>"kok inhuren Eindhoven"</i> of '
        '<i>"horecapersoneel Maastricht"</i> hebben een hoge commerciële intentie: '
        'de zoeker weet wat hij wil en is klaar om te handelen. Door specifieke '
        'landingspagina’s per stad aan te maken, kan Chefs Connect organisch '
        'gevonden worden in precies deze zoekopdrachten — zonder betaalde advertenties. '
        'Elke pagina bevat unieke tekst, lokale referenties, een contactformulier en '
        'LocalBusiness structured data.'))
    story.append(sp(3))

    cw_loc = [CONTENT_W * 0.28, CONTENT_W * 0.18, CONTENT_W * 0.36, CONTENT_W * 0.18]
    story.append(tbl(
        ['URL', 'Doelgroep', 'Primaire zoekwoorden', 'Status'],
        [
            [
                p('/maastricht', TCB),
                p('Freelancers', TC),
                p('horecafreelancer Maastricht, kok freelance opdrachten Maastricht', TC),
                p('✓ Live', TC),
            ],
            [
                p('/personeel-maastricht', TCB),
                p('Werkgevers', TC),
                p('horecapersoneel Maastricht, kok inhuren Maastricht, bediening inhuren', TC),
                p('✓ Live', TC),
            ],
            [
                p('/personeel-eindhoven', TCB),
                p('Werkgevers', TC),
                p('horecapersoneel Eindhoven, kok inhuren Eindhoven, freelance bediening', TC),
                p('✓ Live', TC),
            ],
            [
                p('/eindhoven', TCM),
                p('Freelancers', TCM),
                p('horecafreelancer Eindhoven, kok freelance opdrachten Eindhoven', TCM),
                p('In planning', TCM),
            ],
        ],
        cw_loc,
    ))

    story.append(sp(4))
    story.append(p('Pagina-inhoud per locatiepagina', H2))
    story.append(p(
        'Iedere locatiepagina is opgebouwd met een vaste structuur die zowel '
        'bezoekers als zoekmachines optimaal bedient:'))
    for t in [
        '<b>Hero-sectie</b> met stad-specifieke kop en relevante hero-afbeelding.',
        '<b>Uitlegblok</b> over hoe Chefs Connect werkt in die regio.',
        '<b>Contactformulier</b> — direct geplaatst, zodat bezoekers snel kunnen reageren.',
        '<b>Stadssectie</b> (werkgeverspagina’s) bewust <i>áchter</i> het formulier geplaatst: een bezoeker uit een andere stad ziet eerst het formulier en converteert, in plaats van af te haken omdat zijn stad er niet bij staat.',
        '<b>LocalBusiness schema</b> met vestigingsgegevens per stad voor lokale zoekresultaten.',
    ]:
        story.append(bp(t))

    story.append(PageBreak())

    # ── 5. INTERNE LINKS ──────────────────────────────────────────────────────
    story.append(p('5. Interne links', H1))
    story.append(p(
        'Interne links zijn de verbindingswegen tussen pagina’s op dezelfde website. '
        'Ze verdelen autoriteit (link juice) over de site, helpen zoekmachines nieuwe '
        'pagina’s sneller ontdekken en leiden bezoekers naar de meest relevante '
        'vervolgstap. Er waren twee serieuze problemen: alle zes links in het '
        'Services Grid op de homepage leidden naar niet-bestaande pagina’s (404), '
        'en de nieuwe locatiepagina’s hadden nauwelijks inkomende links.'))
    story.append(sp(3))

    cw_lnk = [CONTENT_W * 0.28, CONTENT_W * 0.32, CONTENT_W * 0.40]
    story.append(tbl(
        ['Locatie op de website', 'Verbetering', 'Toelichting'],
        [
            ['ServicesGrid (homepage)',
             '6 dode links gerepareerd',
             'Links wezen naar /werkgevers, /private-dining en andere niet-bestaande pagina’s. Nu correct: /zoek-personeel, /horecaspecialist, /evenementen, /personeel-maastricht, /personeel-eindhoven, /contact.'],
            ['Footer — nieuwe kolom "Locaties"',
             'Links naar alle locatiepagina’s',
             'Bereikbaar vanuit elke pagina op de website. Maastricht (kok inhuren + freelance) en Eindhoven (kok inhuren).'],
            ['Zoek-personeel — stadssectie',
             'Geplaatst áchter het formulier',
             'Links naar /personeel-maastricht en /personeel-eindhoven. Strategisch áchter het formulier zodat bezoekers uit andere steden eerst converteren.'],
            ['Reviews-sectie (homepage)',
             'CTA-blok met twee knoppen',
             '"Zo word jij ook klant van Chefs Connect." Knoppen naar /zoek-personeel en /horecaspecialist. Koppelt sociaal bewijs direct aan actie.'],
        ],
        cw_lnk,
    ))

    story.append(PageBreak())

    # ── 6. CTA & FUNNELING ────────────────────────────────────────────────────
    story.append(p('6. CTA & Funneling', H1))
    story.append(p(
        'Een bezoeker die de website verlaat zonder actie te ondernemen is een '
        'verloren lead. Door op strategische momenten in de klantreis duidelijke '
        'call-to-actions te plaatsen, stijgt de kans op conversie aanzienlijk. '
        'Onderstaande verbeteringen zijn allemaal gericht op één doel: '
        'de bezoeker verder brengen richting contact.'))
    story.append(sp(3))

    cw_cta = [CONTENT_W * 0.26, CONTENT_W * 0.38, CONTENT_W * 0.36]
    story.append(tbl(
        ['Verbetering', 'Implementatie', 'Doel'],
        [
            ['Exit-intent popups',
             'Verschijnen na 7 s (homepage) of 4 s (locatie- en dienst-pagina’s)',
             'Converteert bezoekers die dreigen weg te gaan zonder actie te ondernemen'],
            ['Gouden mid-page CTA-balk',
             'Geplaatst halverwege /zoek-personeel en /horecaspecialist',
             'Vangt bezoekers op die al scrollen maar nog niet bij het formulier zijn'],
            ['WhatsApp-knop op contactpagina’s',
             'Directe link naar +31 6 41875803 op /over-ons, /zoek-personeel en /horecaspecialist',
             'Laagdrempelig contact voor bezoekers die liever niet bellen of mailen'],
            ['WhatsApp-sectie onderaan /horecaspecialist',
             'Apart blok met uitleg en directe WhatsApp-knop',
             'Freelancers hebben een lagere drempel via WhatsApp dan via een formulier'],
            ['Contactgegevens onder formulieren',
             'WhatsApp + telefoon + e-mail zichtbaar onder elk contactformulier',
             'Alternatief kanaal direct zichtbaar als de bezoeker het formulier overslaat'],
            ['Reviews-sectie CTA-blok',
             '"Zo word jij ook klant" — knoppen naar /zoek-personeel en /horecaspecialist',
             'Koppelt de overtuigingskracht van reviews direct aan een conversiestap'],
            ['ServicesGrid — kapotte links hersteld',
             'Alle zes links wijzen nu naar bestaande pagina’s',
             'Elke klik op de homepage leidt nu naar een relevante pagina i.p.v. een foutmelding'],
        ],
        cw_cta,
    ))

    story.append(PageBreak())

    # ── 7. FOTOGRAFIE ─────────────────────────────────────────────────────────
    story.append(p('7. Fotografie', H1))
    story.append(p(
        'Authentieke foto’s van het eigen personeel zijn de sterkste visuele '
        'onderscheiding voor een bemiddelingsbureau. Stockfoto’s wekken geen '
        'vertrouwen — echte beelden van echte mensen wel. Twee nieuwe foto’s '
        'zijn aangeleverd, geoptimaliseerd naar WebP en vervolgens strategisch '
        'ingezet op de meest impactvolle plekken.'))
    story.append(sp(3))

    story.append(p('Nieuwe foto’s', H2))
    cw_foto = [CONTENT_W * 0.28, CONTENT_W * 0.72]
    story.append(tbl(
        ['Bestandsnaam', 'Beschrijving & plaatsing'],
        [
            [
                p('chef-table-explanation\n.webp', TCB),
                p('Chefkok die aan tafel zijn gerecht toelicht aan gasten. '
                  'Toont de expertise en het persoonlijke karakter van Chefs Connect. '
                  'Ingezet op de <b>homepage</b> (IntroSection en ContactForm) als vervanging '
                  'van een minder pakkende stockfoto. '
                  'Origineel: DSC00977.jpg (3,7 MB) → 0,31 MB WebP.', TC),
            ],
            [
                p('freelancer-bediening\n.webp', TCB),
                p('Freelancer van Chefs Connect die een biertje tapt — authentiek '
                  'bedieningsmoment. Ingezet op <b>/zoek-personeel</b> (sectie "Wat ons onderscheidt"), '
                  '<b>/horecaspecialist</b> (sectie "Persoonlijke benadering") en '
                  '<b>/personeel-maastricht</b> (hero-afbeelding). '
                  'Bewust <i>niet</i> op de homepage geplaatst om de homepage-fotografie '
                  'gevarieerd en onderscheidend te houden. '
                  'Origineel: DSC09513.jpg (5,6 MB) → 0,82 MB WebP.', TC),
            ],
        ],
        cw_foto,
    ))

    story.append(sp(4))
    story.append(p('Vervangen afbeeldingen', H2))
    story.append(p(
        'Naast de nieuwe foto’s zijn bestaande afbeeldingen op meerdere plekken '
        'vervangen door betere alternatieven:'))
    story.append(sp(2))

    cw_rep = [CONTENT_W * 0.30, CONTENT_W * 0.35, CONTENT_W * 0.35]
    story.append(tbl(
        ['Locatie', 'Was', 'Is nu'],
        [
            ['Homepage — IntroSection', 'chef-action.png', 'chef-table-explanation.webp'],
            ['Homepage — ContactForm', 'service-professional.png', 'chef-table-explanation.webp'],
            ['Homepage — hero video fallback', 'hero-banner.png', 'hero-banner.webp'],
            ['Homepage — PhilosophyFocus', 'choice-events.png', 'choice-events.webp'],
            ['Evenementen — HeroSection', 'choice-events.png', 'choice-events.webp'],
            ['/zoek-personeel — onderscheidend blok', 'service-professional.png', 'freelancer-bediening.webp'],
            ['/horecaspecialist — persoonlijke benadering', 'service-vertical.png', 'freelancer-bediening.webp'],
            ['/personeel-maastricht — hero', 'chef-plating-vertical.png', 'freelancer-bediening.webp'],
            ['/personeel-eindhoven — hoe wij helpen', 'chef-plating-vertical.png', 'service-professional.png'],
        ],
        cw_rep,
    ))

    story.append(PageBreak())

    # ── 8. VOLGENDE STAPPEN ───────────────────────────────────────────────────
    story.append(p('8. Volgende stappen', H1))
    story.append(p(
        'Op basis van het werk dat is uitgevoerd en de huidige positie van '
        'chefs-connect.nl adviseren wij de volgende acties om de groei te '
        'versnellen. De prioriteit is gebaseerd op verwachte impact en benodigde tijd.'))
    story.append(sp(3))

    cw_ns = [CONTENT_W * 0.06, CONTENT_W * 0.27, CONTENT_W * 0.48, CONTENT_W * 0.19]
    story.append(tbl(
        ['#', 'Actie', 'Toelichting', 'Tijdlijn'],
        [
            ['1',
             'Google Search Console — indexering aanvragen',
             'De nieuwe pagina’s /personeel-eindhoven en /personeel-maastricht handmatig aanmelden via de URL-inspectietool. Google vindt ze anders pas na weken.',
             'Direct'],
            ['2',
             '/eindhoven freelancer-pagina',
             'Spiegel van /maastricht gericht op freelancers in Eindhoven. Zelfde structuur, lokale zoekwoorden, eigen contactformulier.',
             'Week 1–2'],
            ['3',
             'moon.gif comprimeren',
             'De laadiconanimate (537 KB) converteren naar WebP-animatie (~80 KB). Nog ~85% winst mogelijk zonder kwaliteitsverlies.',
             'Week 1'],
            ['4',
             'hreflang .be verifiëren',
             'In app/layout.tsx staat een hreflang-tag voor chefs-connect.be. Als dit domein niet bestaat of niet geldig is, kan het Google verwarren. Verifiëren of verwijderen.',
             'Week 1'],
            ['5',
             'Steden uitrollen (NL)',
             'Tilburg, Breda, Den Bosch, Nijmegen — logische geografische uitbreiding vanuit Eindhoven en Maastricht. 2 pagina’s per maand voor optimale SEO-groei.',
             'Maand 2–4'],
            ['6',
             'Steden uitrollen (BE)',
             'Antwerpen, Gent, Hasselt, Brugge, Brussel — Chefs Connect is al actief in de grensregio. Belgische locatiepagina’s openen een tweede markt met hetzelfde model.',
             'Maand 3–5'],
            ['7',
             'Kennisartikelen / blog',
             'Long-tail zoekwoorden targeten via artikelen: "kok inhuren voor een feest", "freelance kok tarieven", "horecapersoneel Kerst". Pagina onderaan de homepage plaatsen.',
             'Maand 2–3'],
        ],
        cw_ns,
    ))

    story.append(sp(8))

    closing_s = S('Closing', fontSize=10, leading=15, textColor=MUTED,
                  fontName='Helvetica', alignment=TA_CENTER)
    story.append(p(
        'Opgesteld door <b>Dynique Agency</b> — mei 2026<br/>'
        'Vragen of opmerkingen? Neem contact op via info@dynique.agency',
        closing_s))

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    print(f'PDF opgeslagen: {out}')

build()
