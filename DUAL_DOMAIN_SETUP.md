# 🌍 Dual Domain Setup - chefs-connect.nl + chefs-connect.be

**Website**: Chefs Connect  
**Domeinen**: chefs-connect.nl (NL) + chefs-connect.be (BE)  
**Strategie**: Beide actief, geen redirect  
**Platform**: Cloudflare Pages

---

## 🎯 OVERZICHT

### Wat je hebt:
- ✅ 1 website (Next.js)
- ✅ 2 domeinen (.nl + .be)
- ✅ 1 Cloudflare Pages deployment

### Wat bezoekers zien:
- Nederlandse klanten → `https://chefs-connect.nl` ✅
- Belgische klanten → `https://chefs-connect.be` ✅
- **Zelfde website, zelfde content**

### Voordelen:
- 🇳🇱 Betere SEO in Nederland (via .nl)
- 🇧🇪 Betere SEO in België (via .be)
- 🎯 Lokale vertrouwdheid per land
- 📈 Meer traffic via beide ingangen
- 💰 Geen extra kosten (free tier)

---

## 📋 CLOUDFLARE SETUP - BEIDE DOMEINEN

### Stap 1: Deploy Website (1x)

```
1. Ga naar: https://dash.cloudflare.com/
2. Workers & Pages → Create → Pages
3. Connect GitHub: dynique-agency/chefs-connect
4. Build command: npm run build
5. Output directory: .next
6. Environment variables:
   - NODE_VERSION = 20
   - NODE_ENV = production
   - NEXT_PUBLIC_SITE_URL = https://chefs-connect.nl
7. Deploy!
```

**Resultaat**: Website live op `chefs-connect-xxx.pages.dev` ✅

---

### Stap 2: Add chefs-connect.nl (Primary)

1. **In je Pages project**:
   - Ga naar "Custom domains" tab
   - Klik "Set up a custom domain"

2. **Voeg .nl domein toe**:
   ```
   Domain: chefs-connect.nl
   ```
   - Klik "Continue"

3. **Add www subdomain**:
   ```
   Domain: www.chefs-connect.nl
   ```
   - Klik "Continue"

4. **DNS Configuration**:
   - Cloudflare configureert automatisch DNS
   - SSL certificaat wordt uitgegeven
   - Wacht 1-5 minuten tot "Active" ✅

**Resultaat**: 
- ✅ `https://chefs-connect.nl` live
- ✅ `https://www.chefs-connect.nl` live

---

### Stap 3: Add chefs-connect.be (Secondary)

1. **In dezelfde Pages project**:
   - Blijf in "Custom domains" tab
   - Klik opnieuw "Set up a custom domain"

2. **Voeg .be domein toe**:
   ```
   Domain: chefs-connect.be
   ```
   - Klik "Continue"

3. **Add www subdomain**:
   ```
   Domain: www.chefs-connect.be
   ```
   - Klik "Continue"

4. **DNS Configuration**:
   - Cloudflare configureert automatisch DNS
   - SSL certificaat wordt uitgegeven
   - Wacht 1-5 minuten tot "Active" ✅

**Resultaat**: 
- ✅ `https://chefs-connect.be` live
- ✅ `https://www.chefs-connect.be` live

---

## 🔧 DNS CONFIGURATIE

### Als Domains bij Cloudflare zijn:

**Automatisch**! Cloudflare regelt alles.

---

### Als Domains bij Andere Provider zijn:

Je moet de **nameservers wijzigen** bij je domain provider.

#### Voor chefs-connect.nl

1. **Add site in Cloudflare**:
   - Dashboard → "Add site"
   - Voer in: `chefs-connect.nl`
   - Selecteer: Free plan

2. **Get Nameservers**:
   ```
   Cloudflare geeft je bijvoorbeeld:
   eva.ns.cloudflare.com
   tim.ns.cloudflare.com
   ```

3. **Update bij Provider**:
   - Log in bij je .nl registrar
   - Zoek: Nameserver settings
   - Vervang door Cloudflare nameservers
   - Save

4. **Wait**: 2-48 uur voor propagatie

#### Voor chefs-connect.be

5. **Herhaal voor .be**:
   - Dashboard → "Add site"
   - Voer in: `chefs-connect.be`
   - Selecteer: Free plan

6. **Get Nameservers**:
   ```
   Kunnen dezelfde zijn of andere nameservers
   ```

7. **Update bij Provider**:
   - Log in bij je .be registrar
   - Vervang nameservers
   - Save

8. **Wait**: 2-48 uur voor propagatie

---

## ✅ VERIFICATIE

### Check beide domeinen werken:

```bash
# Test .nl domain
curl -I https://chefs-connect.nl

# Test .be domain
curl -I https://chefs-connect.be

# Both should return: HTTP/2 200 ✅
```

### Browser Test:

**Nederlandse domain**:
- https://chefs-connect.nl
- https://www.chefs-connect.nl
- https://chefs-connect.nl/contact
- https://chefs-connect.nl/zoek-personeel

**Belgische domain**:
- https://chefs-connect.be
- https://www.chefs-connect.be
- https://chefs-connect.be/contact
- https://chefs-connect.be/evenementen

**Verwacht**: Beide werken perfect ✅

---

## 🔄 REDIRECT OPTIE (Optioneel)

Als je later besluit dat je **alleen** .nl wilt gebruiken:

### Setup .be → .nl Redirect in Cloudflare

1. **Ga naar Cloudflare Dashboard**
   - Select: `chefs-connect.be` site
   - Ga naar: "Rules" → "Redirect Rules"

2. **Create Redirect Rule**:
   ```
   Name: Redirect BE to NL
   
   When incoming requests match:
     Hostname equals "chefs-connect.be"
     OR Hostname equals "www.chefs-connect.be"
   
   Then:
     Type: Dynamic
     Expression: concat("https://chefs-connect.nl", http.request.uri.path)
     Status code: 301 (Permanent)
   ```

3. **Save and Deploy**

**Resultaat**: 
- `chefs-connect.be/contact` → `chefs-connect.nl/contact`
- Alle URLs redirecten automatisch

### Of: Beide Actief Houden (AANBEVOLEN)

**Waarom geen redirect?**
- ✅ Belgische klanten vertrouwen .be meer
- ✅ Betere SEO in België
- ✅ Google.be indexeert .be domein hoger
- ✅ Lokale branding per land
- ✅ Meer flexibiliteit

**Later altijd nog aan te passen!**

---

## 📊 SEO IMPACT

### Met Beide Domeinen Actief:

**Google.nl (Nederland)**:
- Indexeert: `chefs-connect.nl`
- Ranking: Hoger voor Nederlandse zoekers
- Resultaten: "Horeca chefs Nederland" → .nl domein

**Google.be (België)**:
- Indexeert: `chefs-connect.be`
- Ranking: Hoger voor Belgische zoekers
- Resultaten: "Horeca chefs België" → .be domein

### Canonical URL

**Primary**: `chefs-connect.nl` is ingesteld in:
- `NEXT_PUBLIC_SITE_URL` environment variable
- Sitemap.xml
- Metadata

**Secondary**: `chefs-connect.be` werkt ook maar verwijst naar .nl als canonical.

Google begrijpt beide domeinen tonen zelfde content en behandelt dit correct.

---

## 🚀 DEPLOYMENT CHECKLIST

### Voor Deploy:
- [x] Website code klaar
- [x] Beide domeinnamen beschikbaar
- [x] Environment variables correct (.nl als primary)
- [x] Sitemap bevat beide domains

### Tijdens Deploy:
- [ ] Deploy naar Cloudflare Pages (1x)
- [ ] Add `chefs-connect.nl` custom domain
- [ ] Add `www.chefs-connect.nl` subdomain
- [ ] Add `chefs-connect.be` custom domain
- [ ] Add `www.chefs-connect.be` subdomain
- [ ] Wait for SSL certificates (beide)

### Na Deploy:
- [ ] Test: https://chefs-connect.nl
- [ ] Test: https://www.chefs-connect.nl
- [ ] Test: https://chefs-connect.be
- [ ] Test: https://www.chefs-connect.be
- [ ] Check SSL (slotje) op alle 4
- [ ] Test forms op beide domeinen
- [ ] Check sitemap.xml op beide

---

## 💡 QUICK ANSWERS

### "Hoeveel kost dit?"
**€0/maand** - Free tier ondersteunt meerdere domains ✅

### "Moet ik 2x deployen?"
**Nee** - 1x deploy, 2x custom domains toevoegen ✅

### "Welke domain is primary?"
**chefs-connect.nl** - staat in environment variables ✅

### "Werken forms op beide domeinen?"
**Ja** - zelfde code, zelfde Web3Forms backend ✅

### "Hoe lang duurt setup?"
**5-10 minuten** voor eerste deploy + beide domains ✅

### "Moet ik content 2x maken?"
**Nee** - zelfde content op beide domeinen ✅

### "Wat als ik later redirect wil?"
**Kan makkelijk** via Cloudflare Redirect Rules ✅

---

## 🎯 EXACTE STAPPEN SAMENVATTING

```
┌─────────────────────────────────────────────┐
│ 1. Deploy naar Cloudflare Pages (1x)       │
│    → chefs-connect-xxx.pages.dev           │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│ 2. Add Custom Domains (4 stuks)            │
│    → chefs-connect.nl                       │
│    → www.chefs-connect.nl                   │
│    → chefs-connect.be                       │
│    → www.chefs-connect.be                   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│ 3. Wait for SSL (5 min)                    │
│    → Alle 4 domeinen krijgen certificaat   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│ 4. LIVE! 🚀                                │
│    → Beide domeinen bereikbaar             │
│    → SSL actief (slotje in browser)        │
│    → Zelfde content, 2 ingangen            │
└─────────────────────────────────────────────┘
```

---

## 📞 TROUBLESHOOTING

### "chefs-connect.be werkt niet"

**Check**:
1. Domain toegevoegd in Cloudflare? ✅
2. SSL certificate "Active"? ✅
3. Nameservers correct? (als bij andere provider)
4. DNS propagatie voltooid? (24-48u)
5. Browser cache leeg? (Ctrl+Shift+R)

**Test**:
```bash
# Check DNS
nslookup chefs-connect.be

# Should show Cloudflare IPs
```

### "SSL error op .be"

**Wacht**: SSL certificates duren 1-5 minuten
**Check**: Status in Cloudflare → Custom domains tab

### "Content verschillend op .nl en .be"

**Dit kan niet** - beide wijzen naar dezelfde deployment.
**Als het toch gebeurt**: Browser cache leeg maken

---

## 🎉 READY!

**Jullie setup**:
- 1 deployment op Cloudflare Pages
- 2 actieve domeinen (.nl + .be)
- 4 URLs (met/zonder www)
- €0 kosten
- Automatisch SSL
- Global CDN
- Auto-deploy bij git push

**Volg de stappen in `CLOUDFLARE_DEPLOYMENT.md` en voeg beide domeinen toe!**

**Success! 🚀**

---

**Document**: Dual Domain Setup Guide  
**Version**: 1.0  
**Date**: 13 Februari 2026  
**Status**: Production Ready ✅
