# 📧 Email Formulieren Setup - Chefs Connect

**Status:** ✅ Volledig geconfigureerd en werkend  
**Email ontvanger:** info@chefs-connect.nl  
**Service:** Web3Forms (Gratis & Onbeperkt)

---

## 🎯 Overzicht

Alle contactformulieren op de website zijn geconfigureerd om emails te versturen naar **info@chefs-connect.nl** via Web3Forms.

### Actieve Formulieren:

1. **Homepage Contact Form** (`/components/home/ContactForm.tsx`)
   - Locatie: Onderkant homepage
   - Velden: Naam, Email, Telefoon, Onderwerp, Bericht

2. **Contact Pagina** (`/app/contact/page.tsx`)
   - Locatie: `/contact`
   - Velden: Naam, Email, Telefoon, Onderwerp, Bericht

3. **Ik zoek horecafreelancers** (`/app/zoek-personeel/page.tsx`)
   - Locatie: `/zoek-personeel`
   - Velden: Naam, Email, Telefoon, Bedrijfsnaam, Type zaak, Bericht

4. **Ik ben horecaprofessional** (`/app/horecaspecialist/page.tsx`)
   - Locatie: `/horecaspecialist`
   - Velden: Naam, Email, Telefoon, Functie, Ervaring, CV upload, Bericht

5. **Evenementen** (`/app/evenementen/page.tsx`)
   - Locatie: `/evenementen`
   - Velden: Naam, Email, Telefoon, Type evenement, Datum, Aantal gasten, Bericht

---

## ⚙️ Configuratie

### Web3Forms Access Key
```
Access Key: fb37a17c-9ce1-4d12-932b-ce94e5a8c851
```

### Email Instellingen
- **To:** info@chefs-connect.nl
- **From Name:** Chefs Connect Website
- **Subject:** Aangepast per formulier (zie hieronder)

### Email Subjects per Formulier
- Homepage Contact: "Chefs Connect: Contact Aanvraag"
- Contact Pagina: "Chefs Connect: Contact Aanvraag"
- Zoek Personeel: "Chefs Connect: Aanvraag Horecafreelancers"
- Horecaspecialist: "Chefs Connect: Aanmelding Horecaprofessional"
- Evenementen: "Chefs Connect: Evenement Aanvraag"

---

## 🔧 Hoe het werkt

### 1. Form Submission Utility (`/lib/form-submit.ts`)

Twee hoofdfuncties:

#### `submitToWeb3Forms()`
Voor reguliere formulieren zonder file uploads.

```typescript
import { submitToWeb3Forms } from '@/lib/form-submit';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);

  try {
    await submitToWeb3Forms(formData, {
      subject: 'Chefs Connect: Contact Aanvraag',
    });
    router.push('/bedankt');
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Er is een fout opgetreden. Probeer het later opnieuw.');
    setIsSubmitting(false);
  }
};
```

#### `submitToWeb3FormsWithFiles()`
Voor formulieren met file uploads (bijv. CV upload).

```typescript
import { submitToWeb3FormsWithFiles } from '@/lib/form-submit';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);

  try {
    await submitToWeb3FormsWithFiles(formData, {
      subject: 'Chefs Connect: Aanmelding Horecaprofessional',
    });
    router.push('/bedankt');
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Er is een fout opgetreden. Probeer het later opnieuw.');
    setIsSubmitting(false);
  }
};
```

### 2. Email Format

Emails worden verzonden met de volgende structuur:

```
Van: Chefs Connect Website
Aan: info@chefs-connect.nl
Onderwerp: [Subject van formulier]

Velden:
- Naam: [naam]
- Email: [email]
- Telefoon: [telefoon]
- [Andere formulier-specifieke velden]
- Bericht: [bericht]
```

---

## ✅ Voordelen Web3Forms

1. **100% Gratis** - Onbeperkt aantal submissions
2. **Geen account nodig** - Direct te gebruiken met access key
3. **Privacy-first** - GDPR compliant, geen tracking
4. **Betrouwbaar** - 99.9% uptime
5. **File uploads** - Ondersteunt CV uploads (max 5MB)
6. **Spam protection** - Ingebouwde honeypot bescherming
7. **Custom redirects** - Naar `/bedankt` pagina na succesvolle submission
8. **Real-time delivery** - Emails komen direct binnen

---

## 🧪 Testen

### Test alle formulieren:
1. Homepage Contact Form: http://localhost:3000/#contact
2. Contact Pagina: http://localhost:3000/contact
3. Zoek Personeel: http://localhost:3000/zoek-personeel
4. Horecaspecialist: http://localhost:3000/horecaspecialist
5. Evenementen: http://localhost:3000/evenementen

### Controleer:
- ✅ Formulier wordt correct verzonden
- ✅ Redirect naar `/bedankt` pagina
- ✅ Email komt aan op info@chefs-connect.nl
- ✅ Alle velden zijn correct in email
- ✅ CV upload werkt (horecaspecialist form)

---

## 🔍 Troubleshooting

### Email komt niet aan?
1. Check spam folder
2. Verifieer dat access key nog geldig is op https://web3forms.com
3. Check browser console voor errors
4. Verifieer dat info@chefs-connect.nl geverifieerd is in Web3Forms dashboard

### Formulier werkt niet?
1. Check browser console voor JavaScript errors
2. Verifieer dat alle required fields zijn ingevuld
3. Test met disabled JavaScript voor fallback
4. Check network tab voor API response

### File upload werkt niet?
1. Check of file kleiner is dan 5MB
2. Verifieer dat `submitToWeb3FormsWithFiles()` wordt gebruikt
3. Check of accept attribute op input correct is ingesteld

---

## 📞 Support

**Web3Forms:**
- Website: https://web3forms.com
- Documentatie: https://docs.web3forms.com
- Support: support@web3forms.com

**Chefs Connect:**
- Email: info@chefs-connect.nl
- Telefoon: +31 6 41875803

---

## 🔐 Beveiliging

### Spam Protection
Alle formulieren hebben:
- Honeypot velden (verborgen voor gebruikers, detecteren bots)
- Rate limiting (Web3Forms side)
- Client-side validatie
- Server-side validatie (Web3Forms)

### Privacy
- Geen tracking cookies
- Geen data opslag (direct naar email)
- GDPR compliant
- SSL/TLS encryptie

---

## 📝 Maintenance

### Access Key Vernieuwen
Als je een nieuwe access key nodig hebt:
1. Ga naar https://web3forms.com
2. Voer info@chefs-connect.nl in
3. Krijg nieuwe access key
4. Update in `/lib/form-submit.ts`:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = 'nieuwe_key_hier';
   ```

### Email Adres Wijzigen
Om naar een ander email adres te sturen:
1. Open `/lib/form-submit.ts`
2. Wijzig in beide functies:
   ```typescript
   to: 'nieuw@email.nl'
   ```
3. Herstart development server

---

**Laatste update:** 18 februari 2026  
**Status:** ✅ Actief en werkend
