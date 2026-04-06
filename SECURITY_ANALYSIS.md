# 🔒 Veiligheidsanalyse - Chefs Connect Website

**Datum:** 1 februari 2025  
**Versie:** 1.0  
**Status:** Production Ready met Aanbevelingen

---

## 📋 Executive Summary

De Chefs Connect website is een Next.js 16 applicatie met een focus op premium design en gebruikerservaring. Deze analyse identificeert potentiële beveiligingsrisico's en biedt concrete aanbevelingen voor verbetering.

**Risico Niveau Overzicht:**
- 🔴 **Kritiek:** 2 issues
- 🟠 **Hoog:** 4 issues  
- 🟡 **Medium:** 6 issues
- 🟢 **Laag:** 3 issues

---

## 1. 🔴 KRITIEKE BEVEILIGINGSRISICO'S

### 1.1 Hardcoded Formspree Endpoint
**Locatie:** Alle form componenten  
**Risico:** Exposed API endpoint, geen environment variable management

**Gevonden in:**
- `app/zoek-personeel/page.tsx` (regel 118)
- `app/horecaspecialist/page.tsx` (regel 133)
- `app/evenementen/page.tsx` (regel 502)
- `components/home/ContactForm.tsx` (regel 62)

**Probleem:**
```typescript
const response = await fetch('https://formspree.io/f/mjgobllb', {
  method: 'POST',
  body: formData,
});
```

**Impact:**
- Endpoint is publiek zichtbaar in source code
- Moeilijk te wijzigen zonder code deployment
- Geen scheiding tussen development/production endpoints

**Aanbeveling:**
```typescript
// .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mjgobllb

// In componenten:
const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
  method: 'POST',
  body: formData,
});
```

**Prioriteit:** 🔴 Kritiek

---

### 1.2 Geen Input Validatie & Sanitization
**Locatie:** Alle form componenten  
**Risico:** XSS, Injection attacks, Data corruption

**Probleem:**
- Geen server-side validatie
- Geen client-side sanitization
- Direct FormData submission zonder validatie
- Geen maximum length checks
- Geen type checking voor file uploads

**Impact:**
- Cross-Site Scripting (XSS) mogelijk
- Malicious file uploads mogelijk
- Data corruption
- Formspree spam/abuse

**Aanbeveling:**
```typescript
// Input validatie functie
const validateInput = (value: string, type: 'email' | 'text' | 'tel') => {
  // Sanitize HTML
  const sanitized = DOMPurify.sanitize(value);
  
  // Type-specific validation
  if (type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized)) throw new Error('Invalid email');
  }
  
  // Length validation
  if (sanitized.length > 1000) throw new Error('Input too long');
  
  return sanitized;
};

// File upload validatie
const validateFile = (file: File) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  
  if (file.size > maxSize) throw new Error('File too large');
  if (!allowedTypes.includes(file.type)) throw new Error('Invalid file type');
};
```

**Prioriteit:** 🔴 Kritiek

---

## 2. 🟠 HOGERE BEVEILIGINGSRISICO'S

### 2.1 File Upload Security
**Locatie:** `app/horecaspecialist/page.tsx`  
**Risico:** Malicious file uploads, Server compromise

**Probleem:**
```typescript
<input
  type="file"
  name="attachment"
  accept=".pdf,.doc,.docx"
  required
/>
```

**Issues:**
- Alleen client-side file type check (kan worden omzeild)
- Geen file size validatie in code
- Geen virus scanning
- Geen file content inspection
- Files worden direct naar Formspree gestuurd zonder validatie

**Aanbeveling:**
```typescript
const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  // Size check
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    alert('Bestand is te groot (max 5MB)');
    return;
  }

  // Type check
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  if (!allowedTypes.includes(file.type)) {
    alert('Alleen PDF, DOC of DOCX bestanden toegestaan');
    return;
  }

  // File name sanitization
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  
  setFileName(sanitizedName);
};
```

**Prioriteit:** 🟠 Hoog

---

### 2.2 Geen Rate Limiting
**Locatie:** Alle form submissions  
**Risico:** Spam, DDoS, Resource exhaustion

**Probleem:**
- Geen client-side rate limiting
- Geen server-side rate limiting
- Geen CAPTCHA
- Onbeperkte form submissions mogelijk

**Impact:**
- Spam submissions
- Formspree quota overschrijding
- Potentiële kosten
- Slechte gebruikerservaring

**Aanbeveling:**
```typescript
// Rate limiting hook
const useRateLimit = (maxRequests = 3, windowMs = 60000) => {
  const [requests, setRequests] = useState<number[]>([]);
  
  const canSubmit = useCallback(() => {
    const now = Date.now();
    const recentRequests = requests.filter(time => now - time < windowMs);
    
    if (recentRequests.length >= maxRequests) {
      return false;
    }
    
    setRequests([...recentRequests, now]);
    return true;
  }, [requests, maxRequests, windowMs]);
  
  return { canSubmit };
};

// In form component:
const { canSubmit } = useRateLimit(3, 60000); // 3 requests per minuut

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!canSubmit()) {
    alert('Te veel aanvragen. Probeer het over een minuut opnieuw.');
    return;
  }
  
  // ... rest of submission
};
```

**Prioriteit:** 🟠 Hoog

---

### 2.3 Geen CSRF Protection
**Locatie:** Alle form submissions  
**Risico:** Cross-Site Request Forgery

**Probleem:**
- Geen CSRF tokens
- Formspree heeft wel CSRF protection, maar client-side verificatie ontbreekt
- Geen SameSite cookie checks

**Aanbeveling:**
- Formspree heeft ingebouwde CSRF protection
- Overweeg extra client-side verificatie voor kritieke formulieren
- Implementeer SameSite cookie policy

**Prioriteit:** 🟠 Hoog

---

### 2.4 Error Handling & Information Disclosure
**Locatie:** Alle form error handling  
**Risico:** Information leakage, Stack traces

**Probleem:**
```typescript
} catch (error) {
  console.error('Form submission error:', error);
  setIsSubmitting(false);
}
```

**Issues:**
- Errors worden gelogd naar console (zichtbaar in browser)
- Geen user-friendly error messages
- Potentiële stack trace exposure
- Geen error logging service

**Aanbeveling:**
```typescript
} catch (error) {
  // Log to error tracking service (Sentry, LogRocket, etc.)
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    logError(error);
  } else {
    console.error('Form submission error:', error);
  }
  
  // User-friendly error message
  alert('Er is een fout opgetreden. Probeer het later opnieuw of neem contact op.');
  setIsSubmitting(false);
}
```

**Prioriteit:** 🟠 Hoog

---

## 3. 🟡 MEDIUM BEVEILIGINGSRISICO'S

### 3.1 Dependency Vulnerabilities
**Risico:** Known vulnerabilities in dependencies

**Aanbeveling:**
```bash
# Run security audit
npm audit

# Fix automatically where possible
npm audit fix

# Check for outdated packages
npm outdated
```

**Actie vereist:**
- Regelmatig `npm audit` uitvoeren
- Dependencies up-to-date houden
- Security advisories monitoren

**Prioriteit:** 🟡 Medium

---

### 3.2 Content Security Policy (CSP)
**Locatie:** `app/layout.tsx`  
**Risico:** XSS, Clickjacking

**Probleem:**
- Geen CSP headers geconfigureerd
- Geen X-Frame-Options
- Geen X-Content-Type-Options

**Aanbeveling:**
```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://formspree.io;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

**Prioriteit:** 🟡 Medium

---

### 3.3 Environment Variables Management
**Risico:** Exposed secrets, Configuration management

**Probleem:**
- Geen `.env` bestanden
- Geen environment variable validatie
- Geen scheiding dev/prod configuratie

**Aanbeveling:**
```bash
# .env.local (niet committen!)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mjgobllb
NEXT_PUBLIC_SITE_URL=https://chefsconnect.nl

# .env.example (wel committen)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
NEXT_PUBLIC_SITE_URL=
```

**Prioriteit:** 🟡 Medium

---

### 3.4 Metadata & SEO Security
**Locatie:** `app/layout.tsx`  
**Risico:** Information disclosure

**Probleem:**
- Basis metadata, geen security headers
- Geen robots.txt
- Geen sitemap.xml

**Aanbeveling:**
```typescript
export const metadata: Metadata = {
  title: 'Chefs Connect',
  description: 'Editorial magazine for culinary professionals',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Chefs Connect',
  },
};
```

**Prioriteit:** 🟡 Medium

---

### 3.5 Image Security
**Risico:** Malicious image uploads, Hotlinking

**Probleem:**
- Images in public folder (publiek toegankelijk)
- Geen image optimization checks
- Geen hotlink protection

**Aanbeveling:**
- Next.js Image component gebruikt (goed!)
- Overweeg image CDN met security features
- Implementeer hotlink protection indien nodig

**Prioriteit:** 🟡 Medium

---

### 3.6 Client-Side State Management
**Risico:** Sensitive data in client state

**Probleem:**
- Form data in component state
- Geen encryption voor sensitive data
- LocalStorage/sessionStorage niet gebruikt (goed!)

**Aanbeveling:**
- Blijf weg van localStorage voor sensitive data
- Overweeg encrypted state management voor toekomstige features

**Prioriteit:** 🟡 Medium

---

## 4. 🟢 LAGERE BEVEILIGINGSRISICO'S

### 4.1 Console Logging in Production
**Locatie:** Meerdere componenten  
**Risico:** Information disclosure

**Aanbeveling:**
```typescript
// Utility functie
const log = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, data);
  }
};
```

**Prioriteit:** 🟢 Laag

---

### 4.2 TypeScript Strict Mode
**Risico:** Type safety issues

**Aanbeveling:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

**Prioriteit:** 🟢 Laag

---

### 4.3 Accessibility & Security
**Risico:** Indirect security impact via accessibility

**Aanbeveling:**
- ARIA labels voor screen readers
- Keyboard navigation
- Focus management

**Prioriteit:** 🟢 Laag

---

## 5. ✅ POSITIEVE BEVEILIGINGSPRAKTIJKEN

### 5.1 Next.js Best Practices
✅ Next.js 16 met App Router  
✅ Server Components waar mogelijk  
✅ Image optimization met next/image  
✅ TypeScript voor type safety  

### 5.2 Form Handling
✅ Formspree voor form submissions (heeft ingebouwde spam protection)  
✅ Client-side form validation (HTML5)  
✅ Proper error handling structure  

### 5.3 Code Quality
✅ TypeScript gebruikt  
✅ Component-based architecture  
✅ Clean code structure  

---

## 6. 📋 AANBEVOLEN ACTIEPLAN

### Fase 1: Kritieke Fixes (Week 1)
1. ✅ Environment variables implementeren
2. ✅ Input validatie & sanitization toevoegen
3. ✅ File upload security verbeteren

### Fase 2: Hoge Prioriteit (Week 2-3)
4. ✅ Rate limiting implementeren
5. ✅ Error handling verbeteren
6. ✅ Security headers toevoegen

### Fase 3: Medium Prioriteit (Week 4)
7. ✅ Dependency audit uitvoeren
8. ✅ CSP headers configureren
9. ✅ Metadata & SEO verbeteren

### Fase 4: Continue Monitoring
10. ✅ Regelmatige security audits
11. ✅ Dependency updates
12. ✅ Monitoring & logging setup

---

## 7. 🔧 IMPLEMENTATIE VOORBEELDEN

### 7.1 Environment Variables Setup

**`.env.local`** (niet committen):
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mjgobllb
```

**`.env.example`** (wel committen):
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

**`lib/env.ts`**:
```typescript
export const env = {
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
} as const;

// Validatie
if (!env.formspreeEndpoint) {
  throw new Error('NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set');
}
```

### 7.2 Input Validation Utility

**`lib/validation.ts`**:
```typescript
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const regex = /^[\d\s\+\-\(\)]+$/;
  return regex.test(phone) && phone.length >= 10;
};

export const validateFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  if (file.size > maxSize) {
    return { valid: false, error: 'Bestand is te groot (max 5MB)' };
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Alleen PDF, DOC of DOCX bestanden toegestaan' };
  }

  return { valid: true };
};
```

### 7.3 Rate Limiting Hook

**`hooks/useRateLimit.ts`**:
```typescript
import { useState, useCallback } from 'react';

export const useRateLimit = (maxRequests = 3, windowMs = 60000) => {
  const [requests, setRequests] = useState<number[]>([]);

  const canSubmit = useCallback(() => {
    const now = Date.now();
    const recentRequests = requests.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
      return false;
    }

    setRequests([...recentRequests, now]);
    return true;
  }, [requests, maxRequests, windowMs]);

  const reset = useCallback(() => {
    setRequests([]);
  }, []);

  return { canSubmit, reset };
};
```

---

## 8. 📊 RISICO SCORING

| Risico | Impact | Waarschijnlijkheid | Score | Prioriteit |
|--------|--------|-------------------|-------|------------|
| Hardcoded Endpoints | Hoog | Hoog | 9/10 | 🔴 Kritiek |
| Geen Input Validatie | Hoog | Hoog | 9/10 | 🔴 Kritiek |
| File Upload Security | Hoog | Medium | 7/10 | 🟠 Hoog |
| Geen Rate Limiting | Medium | Hoog | 7/10 | 🟠 Hoog |
| Error Disclosure | Medium | Medium | 5/10 | 🟠 Hoog |
| Dependency Vulnerabilities | Medium | Medium | 5/10 | 🟡 Medium |
| Geen CSP | Medium | Laag | 4/10 | 🟡 Medium |

---

## 9. 📚 AANBEVOLEN TOOLS & SERVICES

### Security Tools
- **npm audit** - Dependency vulnerability scanning
- **Snyk** - Continuous security monitoring
- **OWASP ZAP** - Security testing
- **Sentry** - Error tracking & monitoring

### Best Practices
- **OWASP Top 10** - Security awareness
- **Next.js Security Best Practices** - Framework guidelines
- **GDPR Compliance** - Data protection

---

## 10. ✅ CONCLUSIE

De Chefs Connect website heeft een solide basis maar heeft enkele kritieke beveiligingsverbeteringen nodig voordat deze productie-klaar is. De belangrijkste aandachtspunten zijn:

1. **Environment variable management** voor API endpoints
2. **Input validatie & sanitization** voor alle user inputs
3. **File upload security** voor CV uploads
4. **Rate limiting** om spam te voorkomen

Met deze implementaties zal de website voldoen aan moderne security standaarden en klaar zijn voor productie gebruik.

---

**Document versie:** 1.0  
**Laatste update:** 1 februari 2025  
**Volgende review:** 1 maart 2025

