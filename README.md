# 🍽️ Chefs Connect

**Premium Horecafreelancers & Evenement Catering Website**

Een moderne, professionele website gebouwd met Next.js 16, die diensten aanbiedt voor horecafreelancer bemiddeling en exclusieve evenement catering in België en Nederland.

---

## 🌟 Features

### Technologie Stack
- **Framework:** Next.js 16.1.6 (Turbopack)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion & GSAP
- **Forms:** Web3Forms integratie
- **Font:** Playfair Display & Inter (Google Fonts)
- **Language:** TypeScript

### Key Features
- 🎨 Premium responsive design
- 🎬 Smooth scroll animaties met Lenis
- ✨ GSAP scroll-linked animations
- 📱 Mobile-first responsive design
- 📧 Werkende contact formulieren
- 🎥 Geoptimaliseerde video backgrounds
- 🔍 SEO geoptimaliseerd
- ⚡ Performance optimized

---

## 📄 Pagina's

1. **Homepage** - Hero, Intro, About, Philosophy, Contact
2. **Ik zoek horeca freelancers** - Bemiddeling van horecafreelancers
3. **Ik ben een horecaspecialist** - Voor freelance professionals
4. **Ik organiseer een evenement** - Connect Events & Dining catering
5. **Contact** - Contactformulier en bedrijfsinformatie
6. **Bedankt** - Success page na form submissions

---

## 🚀 Quick Start

### Installatie

```bash
# Clone de repository
git clone https://github.com/dynique-agency/chefs-connect.git

# Navigeer naar project folder
cd chefs-connect

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` bestand in de root:

```env
# Web3Forms API Key (optional - heeft een default)
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

### Web3Forms Setup

De website gebruikt Web3Forms voor contact formulieren. Huidige configuratie:
- Access Key is geconfigureerd in `config/web3forms.ts`
- Forms sturen naar: `info@chefs-connect.nl`
- Success redirect: `/bedankt` pagina

---

## 📦 Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy op Vercel (Aanbevolen)

1. Push naar GitHub (already done ✅)
2. Import project in Vercel
3. Deploy automatisch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dynique-agency/chefs-connect)

---

## 📁 Project Structuur

```
chefs-connect/
├── app/                    # Next.js 16 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contact page
│   ├── evenementen/       # Events page
│   ├── horecaspecialist/  # Specialist page
│   ├── zoek-personeel/    # Freelancers page
│   └── bedankt/           # Thank you page
├── components/
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── providers/         # Context providers
│   └── ui/                # Reusable UI components
├── contexts/              # React contexts
├── lib/                   # Utility functions
├── config/                # Configuration files
├── public/                # Static assets
└── styles/                # Global styles
```

---

## 🎨 Design System

### Colors
- **Primary:** Gold (#D4AF37)
- **Background:** Cream (#FAF7F2)
- **Text:** Brown (#1a1d19)
- **Accent:** Gold Dark (#B8941F)

### Typography
- **Headings:** Playfair Display (Serif)
- **Body:** Inter (Sans-serif)

---

## 📊 Performance

- ✅ Next.js Image Optimization
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Font optimization
- ✅ Asset optimization
- ✅ Responsive images

---

## 🔒 Security

- ✅ No exposed credentials
- ✅ Form validation
- ✅ HTTPS ready
- ✅ CORS configured
- ✅ Rate limiting (Web3Forms)

---

## 📱 Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 👥 Contact

**Chefs Connect**
- Email: info@chefs-connect.nl
- Telefoon: +31 6 41875803
- Adres: Gasthuisstraat 3.1 Lanaken

---

## 📄 License

© 2024 Chefs Connect. All rights reserved.

---

## 🚀 Status

✅ **Production Ready**  
✅ **SEO Optimized**  
✅ **Mobile Responsive**  
✅ **Performance Optimized**

---

**Built with ❤️ by Dynique Agency**
