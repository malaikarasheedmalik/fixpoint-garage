# FixPoint Garage Website

## Setup (apne computer par)

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:3000` kholein.

Production build check karne ke liye:

```bash
npm run lint
npm run build
```

## Is version mein kya add kiya gaya hai

- **WhatsApp button** — bottom-right corner mein floating button, seedha
  `wa.me/<number>` par le jata hai. Number change karne ke liye
  `src/data/fixpoint-data.json` mein `business.whatsapp` edit karein.
- **Search bar** — navbar mein, saari pages + services ko search karta hai,
  Enter dabane se pehle result par navigate kar deta hai.
- **3D interactive showcase** — Home page par mouse-tilt 3D panel
  (`src/components/Showcase3D.tsx`). Ye real video file ke liye ready hai.
- **Sab broken/placeholder images fix** — real Unsplash photography se
  replace kar diye (automotive workshop, mechanics, services).
- **Framer Motion animations** — fade-up, slide-in, stagger, hover-tilt cards,
  scroll-reveal — har page par consistent.
- **Do alag Google Map layouts** — Home par compact side-by-side, Contact
  par full-width neeche.

## 3D Video Add Karna (Zaroori)

Mera environment offline hai, is liye main koi real video file generate/download
nahi kar saka. Real 3D/workshop-tour video add karne ke liye:

1. Apni video file ka naam `workshop-tour.mp4` rakhein
2. Usay `public/videos/workshop-tour.mp4` mein daal dein
3. Automatically Home page ke 3D showcase panel mein play hone lag jayegi

Jab tak video nahi daali jati, panel apne-aap poster image dikhata hai (koi
broken/crash nahi hoga).

## Images

Filhaal saari images Unsplash ke stable URLs se load ho rahi hain
(`next.config.js` mein `images.unsplash.com` allow kiya gaya hai). Agar aap
apni khud ki photos use karna chahte hain:

1. Photo `public/images/` mein daal dein
2. `src/data/fixpoint-data.json` mein us image ka path replace kar dein
   (e.g. `/images/about-hero.jpg`)

## Business Info Edit Karna

Sara content (phone, WhatsApp, address, services, team, pricing, FAQ, sab
kuch) sirf **ek hi file** mein hai:

```
src/data/fixpoint-data.json
```

Yahan values change karein — poori site automatically update ho jayegi.

## Structure

```
src/app/            → pages (home, about, services, team, pricing, testimonials, contact, booking)
src/components/     → reusable UI (Navbar, Chatbot, WhatsAppButton, BookingForm, GoogleMap, etc.)
src/data/           → single JSON data source
src/lib/motion.ts   → shared Framer Motion animation variants
public/videos/      → drop workshop-tour.mp4 here for the 3D video panel
```
