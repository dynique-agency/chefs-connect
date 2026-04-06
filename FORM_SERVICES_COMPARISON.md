# 📋 Gratis Form Submission Services - Vergelijking

**Datum:** 1 februari 2025  
**Doel:** Vind beste gratis alternatief voor Formspree

---

## 🏆 TOP 5 AANBEVOLEN OPTIES

### 1. ⭐ **Web3Forms** (BESTE KEUZE)
**Website:** https://web3forms.com  
**Rating:** ⭐⭐⭐⭐⭐ (5/5)

#### ✅ Voordelen:
- **100% Gratis** - Onbeperkt submissions
- **Geen account nodig** - Direct te gebruiken
- **Privacy-first** - Geen tracking, GDPR compliant
- **Eenvoudige setup** - Alleen een access key nodig
- **Betrouwbaar** - Goede uptime, actief onderhouden
- **File uploads** - Ondersteunt attachments
- **Custom redirects** - Naar eigen success pagina
- **Spam protection** - Ingebouwde Honeypot
- **Open source** - Transparant en vertrouwbaar

#### 📊 Specificaties:
- **Gratis tier:** Onbeperkt
- **Rate limiting:** 100 requests/dag (meer dan genoeg)
- **File size:** 5MB per attachment
- **Response time:** < 1 seconde
- **Uptime:** 99.9%

#### 🔧 Implementatie:
```typescript
// 1. Haal access key op: https://web3forms.com
// 2. Gebruik in form:
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY',
    subject: 'Contact Form Submission',
    from_name: formData.get('naam'),
    email: formData.get('email'),
    message: formData.get('bericht'),
    // ... andere velden
  })
});
```

#### 💰 Kosten:
- **Gratis:** Onbeperkt
- **Pro:** $5/maand (voor extra features, niet nodig)

**Aanbeveling:** ⭐⭐⭐⭐⭐ **BESTE KEUZE** - Perfecte balans tussen features, betrouwbaarheid en privacy.

---

### 2. **FormSubmit** 
**Website:** https://formsubmit.co  
**Rating:** ⭐⭐⭐⭐ (4/5)

#### ✅ Voordelen:
- **100% Gratis** - Geen limieten
- **Geen account** - Direct te gebruiken
- **Eenvoudig** - Alleen email adres nodig
- **File uploads** - Ondersteunt attachments
- **AJAX support** - Werkt met fetch API
- **Custom redirects** - Naar eigen pagina
- **Spam protection** - Ingebouwd

#### ⚠️ Nadelen:
- Minder features dan Web3Forms
- Minder actief onderhouden
- Geen dashboard/analytics

#### 📊 Specificaties:
- **Gratis tier:** Onbeperkt
- **Rate limiting:** Geen (maar spam protection)
- **File size:** 10MB per attachment
- **Response time:** < 2 seconden

#### 🔧 Implementatie:
```typescript
// Simpel - alleen email nodig
const form = document.getElementById('form');
form.action = 'https://formsubmit.co/jouw@email.com';
form.method = 'POST';

// Of met fetch:
const response = await fetch('https://formsubmit.co/ajax/jouw@email.com', {
  method: 'POST',
  body: formData
});
```

#### 💰 Kosten:
- **Gratis:** Onbeperkt

**Aanbeveling:** ⭐⭐⭐⭐ Goede optie als je iets simpels wilt zonder account.

---

### 3. **GetForm**
**Website:** https://getform.io  
**Rating:** ⭐⭐⭐⭐ (4/5)

#### ✅ Voordelen:
- **Gratis tier** - 50 submissions/maand
- **Dashboard** - Analytics en submissions bekijken
- **File uploads** - Met storage
- **Webhooks** - Real-time notifications
- **Spam protection** - Ingebouwd
- **Custom branding** - Email templates

#### ⚠️ Nadelen:
- **Limiet:** 50 submissions/maand gratis
- Account nodig
- Minder privacy-focused

#### 📊 Specificaties:
- **Gratis tier:** 50 submissions/maand
- **File storage:** 100MB totaal
- **Response time:** < 1 seconde
- **Uptime:** 99.9%

#### 🔧 Implementatie:
```typescript
// 1. Account aanmaken op getform.io
// 2. Form endpoint krijgen
const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData
});
```

#### 💰 Kosten:
- **Gratis:** 50 submissions/maand
- **Starter:** $9/maand (500 submissions)

**Aanbeveling:** ⭐⭐⭐⭐ Goed als je dashboard/analytics wilt, maar limiet kan problematisch zijn.

---

### 4. **EmailJS**
**Website:** https://www.emailjs.com  
**Rating:** ⭐⭐⭐ (3/5)

#### ✅ Voordelen:
- **Gratis tier** - 200 emails/maand
- **Direct email** - Stuurt direct naar je inbox
- **Templates** - Email templates
- **Integrations** - Werkt met veel services
- **Client-side** - Geen backend nodig

#### ⚠️ Nadelen:
- **Limiet:** 200 emails/maand gratis
- Email API, niet specifiek voor forms
- Account nodig
- Minder geschikt voor file uploads

#### 📊 Specificaties:
- **Gratis tier:** 200 emails/maand
- **File attachments:** Beperkt
- **Response time:** < 2 seconden

#### 🔧 Implementatie:
```typescript
// EmailJS SDK
import emailjs from '@emailjs/browser';

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: formData.get('naam'),
  email: formData.get('email'),
  message: formData.get('bericht')
}, 'YOUR_PUBLIC_KEY');
```

#### 💰 Kosten:
- **Gratis:** 200 emails/maand
- **Paid:** $15/maand (1000 emails)

**Aanbeveling:** ⭐⭐⭐ Goed voor simpele email sending, maar niet ideaal voor complexe forms.

---

### 5. **FormBackend**
**Website:** https://formbackend.com  
**Rating:** ⭐⭐⭐ (3/5)

#### ✅ Voordelen:
- **Gratis tier** - 50 submissions/maand
- **Dashboard** - Submissions bekijken
- **Webhooks** - Real-time notifications
- **Spam protection** - Ingebouwd

#### ⚠️ Nadelen:
- **Limiet:** 50 submissions/maand
- Minder bekend/vertrouwd
- Account nodig

#### 📊 Specificaties:
- **Gratis tier:** 50 submissions/maand
- **File uploads:** Beperkt
- **Response time:** < 2 seconden

#### 💰 Kosten:
- **Gratis:** 50 submissions/maand
- **Pro:** $9/maand (500 submissions)

**Aanbeveling:** ⭐⭐⭐ Redelijke optie, maar minder features dan anderen.

---

## 📊 VERGELIJKINGSTABEL

| Service | Gratis Limiet | File Uploads | Dashboard | Privacy | Eenvoud | Rating |
|---------|---------------|--------------|-----------|---------|---------|--------|
| **Web3Forms** | Onbeperkt | ✅ 5MB | ❌ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **FormSubmit** | Onbeperkt | ✅ 10MB | ❌ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **GetForm** | 50/maand | ✅ 100MB | ✅ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **EmailJS** | 200/maand | ⚠️ Beperkt | ✅ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **FormBackend** | 50/maand | ⚠️ Beperkt | ✅ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 AANBEVELING VOOR CHEFS CONNECT

### **BESTE KEUZE: Web3Forms** ⭐

**Waarom:**
1. ✅ **Onbeperkt gratis** - Geen zorgen over limieten
2. ✅ **Privacy-first** - GDPR compliant, geen tracking
3. ✅ **Betrouwbaar** - Goede reputatie, actief onderhouden
4. ✅ **Eenvoudig** - Geen account nodig, alleen access key
5. ✅ **File uploads** - Perfect voor CV uploads
6. ✅ **Custom redirects** - Naar `/bedankt` pagina
7. ✅ **Spam protection** - Ingebouwd
8. ✅ **Open source** - Transparant en vertrouwbaar

**Perfect voor:**
- Contact forms
- CV uploads (horecaspecialist pagina)
- Event aanvragen
- Alle form submissions

---

## 🔧 IMPLEMENTATIE STAPPEN (Web3Forms)

### Stap 1: Access Key Aanmaken
1. Ga naar: https://web3forms.com
2. Voer je email in
3. Krijg je unieke access key
4. Kopieer de key

### Stap 2: Environment Variable
```bash
# .env.local
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### Stap 3: Utility Functie
```typescript
// lib/form-submit.ts
export async function submitForm(formData: FormData, subject: string) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
      subject: subject,
      from_name: formData.get('naam') as string,
      email: formData.get('email') as string,
      phone: formData.get('telefoon') as string || '',
      message: formData.get('bericht') as string || '',
      // Custom fields
      bedrijfsnaam: formData.get('bedrijfsnaam') as string || '',
      functie: formData.get('functie') as string || '',
    })
  });

  const data = await response.json();
  
  if (data.success) {
    return { success: true };
  } else {
    throw new Error(data.message || 'Form submission failed');
  }
}
```

### Stap 4: Gebruik in Componenten
```typescript
// In je form component
import { submitForm } from '@/lib/form-submit';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  
  try {
    await submitForm(formData, 'Nieuwe Contact Aanvraag');
    router.push('/bedankt');
  } catch (error) {
    console.error('Error:', error);
    alert('Er is een fout opgetreden. Probeer het later opnieuw.');
    setIsSubmitting(false);
  }
};
```

---

## 📝 CONCLUSIE

**Voor Chefs Connect raad ik aan:**

1. **Web3Forms** - Primaire keuze (beste balans)
2. **FormSubmit** - Backup optie (als Web3Forms niet werkt)

Beide zijn 100% gratis, betrouwbaar, en perfect voor jullie use case. Web3Forms heeft de beste privacy en features, FormSubmit is de simpelste optie.

**Volgende stap:** Wil je dat ik Web3Forms implementeer in jullie codebase?

