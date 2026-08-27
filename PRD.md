# 🏝️ PRODUCT REQUIREMENT DOCUMENT (PRD)
## Project: Dreamy Island — Ultra-Luxury Island Resort Landing Page

---

### 1. Document Overview & Metadata
* **Project Name:** Dreamy Island Luxury Resort & Villas
* **Document Version:** v1.0.0
* **Target Audience:** High-Net-Worth Individuals (HNWI), Luxury Vacationers, Honeymooners, Design Enthusiasts & UI/UX Portfolio Reviewers
* **Primary Tech Stack:** React (Vite), Framer Motion, Lenis (Smooth Scroll), Lucide Icons, Custom CSS Design Tokens / Tailwind CSS
* **Design Philosophy:** *Awwwards-Level Luxury Editorial* — Inspired by world-class resorts (Aman, Soneva, One&Only, Cheval Blanc) combined with modern creative agency web aesthetics (Locomotive, Studio Freight).

---

### 2. Product Vision & Value Proposition

#### 2.1 Vision Statement
Menciptakan pengalaman digital imersif yang memikat pengunjung sejak detik pertama, mentransmisikan rasa ketenangan, eksklusivitas, dan keindahan surga tropis pulau "Dreamy Island" melalui perpaduan *sensory motion design*, tipografi editorial premium, dan micro-interaction yang presisi.

#### 2.2 Core Objectives
1. **High Visual Impact (Showcase Level):** Memposisikan desainer/developer sebagai **Senior UI/UX & Creative Technologist** berstandar global.
2. **Emotional Engagement:** Menghadirkan *digital escapism* melalui *cinematic preloader*, *parallax storytelling*, dan transisi visual yang halus (60fps).
3. **High Conversion Drive:** Mempermudah calon tamu menjelajahi vila, pengalaman eksklusif, dan melakukan reservasi langsung melalui *interactive booking bar*.

---

### 3. Visual Identity & Design System (UI/UX Guidelines)

#### 3.1 Color Palette
| Token Name | Hex Code | Usage | Meaning & Vibe |
| :--- | :--- | :--- | :--- |
| **Ocean Abyss** (Primary Dark) | `#070F14` | Body Background, Dark Sections | Kedalaman laut tropis di malam hari |
| **Lagoon Emerald** (Secondary Dark) | `#0D2329` | Cards, Elevated Surfaces | Warna air laguna dalam yang eksotis |
| **Champagne Gold** (Accent Primary) | `#D5B98A` | CTA, Badges, Highlights | Kemewahan hangat sinar matahari pantai |
| **Sunlit Bronze** (Accent Secondary) | `#B89358` | Hover states, Borders | Aksen pasir emas berkilau |
| **Pure Sand** (Light Surface) | `#FAF7F2` | Text Primary, Light Sections | Pasir putih pantai alami |
| **Mist Silver** (Muted Text) | `#8E9CA3` | Subtitles, Captions, Labels | Kabut pagi pantai, netral dan elegan |

#### 3.2 Typography Hierarchy
* **Display / Editorial Font:** *Cormorant Garamond* atau *Playfair Display* (Serif dengan sentuhan haute couture & keanggunan majalah luxury).
* **Body / Interface Font:** *Plus Jakarta Sans* atau *Inter* (Clean, legible, modern geometric sans-serif).
* **Mono / Coordinate Accent:** *JetBrains Mono* atau *Space Mono* (Untuk koordinat pulau, metadata kamar, angka kurasi).

```css
/* Typography Scale Sample */
--font-display: 'Cormorant Garamond', serif;
--font-sans: 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

--text-hero: clamp(3.5rem, 8vw, 7.5rem);
--text-h1: clamp(2.5rem, 5vw, 4.5rem);
--text-h2: clamp(2rem, 3.5vw, 3rem);
--text-h3: clamp(1.25rem, 2vw, 1.75rem);
--text-body: 1rem;
--text-caption: 0.8125rem;
```

#### 3.3 Motion & Interaction Principles
1. **Inertia & Smooth Scrolling:** Menggunakan *Lenis Smooth Scroll* untuk feel berat dan premium saat scroll.
2. **Text Mask Reveals:** Setiap judul muncul menggunakan teknik *staggered line-by-line clip-path reveal*.
3. **Magnetic Elements:** Tombol CTA utama dan navigation items memiliki efek magnetik halus mengikuti kursor mouse.
4. **Noise Texture & Glassmorphism:** Overlay film grain tipis (3% opacity) dan *frosted glass backdrop blur* (30px blur + 1px gold border).

---

### 4. Detailed Information Architecture & Page Flow

```
[ 0. Cinematic Splash Screen / Preloader ]
                   │
                   ▼
[ 1. Floating Glass Navbar (Brand, Nav, Soundscape Toggle, Book CTA) ]
                   │
                   ▼
[ 2. Hero Section (Parallax Visuals + Editorial Title + Floating Booking Bar) ]
                   │
                   ▼
[ 3. Brand Story & Island Philosophy ("An Untouched Sanctuary") ]
                   │
                   ▼
[ 4. Signature Villas & Suites (Interactive 3D Carousel / Room Showcase) ]
                   │
                   ▼
[ 5. Curated Island Experiences (Bento Grid: Wellness, Dining, Yacht, Diving) ]
                   │
                   ▼
[ 6. Interactive Island Map / 360 Sanctuary Preview ]
                   │
                   ▼
[ 7. Culinary Arts & Gastronomy Section ]
                   │
                   ▼
[ 8. Social Proof & International Awards (Editorial Layout) ]
                   │
                   ▼
[ 9. Luxury Concierge & Reservation Modal / Drawer ]
                   │
                   ▼
[ 10. Grand Minimalist Footer ]
```

---

### 5. Section-by-Section Functional Specifications

#### 5.1 Cinematic Splash Screen (Preloader)
* **Visual Components:**
  * Dark minimal screen dengan koordinat pulau `04°12'38"S 129°53'14"E`.
  * Counter angka persentase `0% -> 100%` dengan tipografi monospaced halus.
  * SVG outline logo Dreamy Island yang ter-animasi dengan teknik *stroke-dashoffset*.
  * Teks pengantar: *"Entering Sanctuary..."*.
* **Behavior:**
  * Berlangsung sekitar 1.8s - 2.5s (atau saat aset krusial selesai dimuat).
  * Smooth exit: Layar terbelah atau slide-up dengan efek *cubic-bezier(0.87, 0, 0.13, 1)* mengungkap Hero Section.

#### 5.2 Floating Glass Navbar
* **Visual Components:**
  * Logo monogram Dreamy Island (Emas / Putih Sand).
  * Menu link: *The Island, Villas, Dining, Experiences, Sanctuary Map*.
  * Ambient Soundscape toggle (audio deburan ombak & instrumen chill tropis opsional on/off).
  * "Reserve Stay" magnetic pill button.
* **Behavior:**
  * Sticky dengan efek auto-hide saat scroll ke bawah dan reveal saat scroll ke atas.
  * Backdrop blur dinamis (menyesuaikan warna background di bawahnya).

#### 5.3 Hero Section
* **Visual Components:**
  * Background video looping / layered parallax image beresolusi tinggi (overwater bungalow di atas air laut kristal turquoise).
  * Typography Hero: *"Where Time Dissolves into the Ocean"*.
  * Sub-headline: Curated private island experience in the heart of the Indonesian archipelago.
  * **Floating Interactive Booking Bar:**
    * Check-in / Check-out Datepicker.
    * Villa Type Selector (Overwater Villa, Beachfront Haven, Royal Cliff Sanctuary).
    * Guest Count (Adults, Children).
    * Button *"Check Availability"* dengan shimmer glow effect.

#### 5.4 Brand Philosophy ("The Sanctuary")
* **Visual Components:**
  * Asymmetric editorial layout.
  * Kinetic typography yang aktif saat scroll (scroll-driven word highlight).
  * Floating aesthetic badges (100% Eco-Renewable, Marine Protected, Ultra-Private).

#### 5.5 Signature Villas & Suites (Room Showcase)
* **Visual Components:**
  * Interactive Slider / Filterable Carousel:
    1. *The Azure Overwater Villa* (Infinity pool, glass bottom floor, sunset deck).
    2. *Coral Beach Haven* (Private beach access, tropical garden bath).
    3. *The Celestial Cliff Residence* (Panoramic 360° ocean view, dedicated butler).
  * Card Metrics: Luas (sqm), Kapasitas Tamu, Fitur Utama, Starting Rate/Night.
  * Modal "Quick View Villa": Memunculkan foto 3D galeri, denah arsitektur, dan fasilitas lengkap tanpa reload.

#### 5.6 Curated Experiences (Modern Bento Grid Layout)
* **Visual Components:**
  * Bento box grid modern dengan efek hover zoom & subtle lighting:
    * **Holistic Ocean Spa:** Ayurveda & Thalassotherapy pavilion.
    * **Private Yacht Charter:** Island hopping & sunset dolphin safari.
    * **Sub-Oceanic Coral Dining:** Romantic dinner 5 meter di bawah permukaan laut.
    * **Bioluminescent Night Diving:** Menyelam di perairan bercahaya alami.

#### 5.7 Interactive Island Map
* **Visual Components:**
  * Custom interactive illustrated vector / dark map pulau Dreamy Island.
  * Hotspot pins interaktif (Piers, Private Helipad, Coral Reef, Overwater Spa, Main Pavilion).
  * Klik pin akan menampilkan preview popover mewah beserta estimasi jarak tempuh dengan buggy / berjalan kaki.

#### 5.8 Gastronomy & Dining Showcase
* **Visual Components:**
  * Split-screen layout: Kiri teks menu & filosofi kuliner Michelin-starred chef, kanan carousel visual hidangan seni tinggi.
  * Mood selector: *Breakfast at Sunrise Deck*, *Sunset Cocktail Lounge*, *Starlight Dining*.

#### 5.9 Direct Booking Drawer & Modal
* **Visual Components:**
  * Slide-over glass drawer yang elegan saat user menekan *"Reserve Stay"*.
  * Summary kalkulasi harga real-time, opsi tambahan (seaplane transfer, private chef), dan form concierge inquiry.

#### 5.10 Grand Minimalist Footer
* **Visual Components:**
  * Big Typography: *"DREAMY ISLAND"* (watermark outline).
  * Newsletter subscription dengan instant validation: *"Receive the Private Gazette"*.
  * Timezone & Live Weather Widget: `Dreamy Island, ID • 28°C Sunny • 14:32 WITA`.
  * Social links, Sustainability Report download, Copyright & Credits.

---

### 6. Technical Stack & Component Architecture

#### 6.1 Frontend Stack
* **Framework:** React 18+ (Vite)
* **Styling:** Vanilla CSS Custom Properties (Design Tokens) + Tailwind CSS
* **Animation & Interaction:**
  * `framer-motion` (Hero transitions, modal reveals, hover spring physics)
  * `@studio-freight/lenis` (Butter-smooth scroll)
  * `canvas-confetti` / Canvas ambient effects (Particles / subtle sun flares)
* **Icons:** `lucide-react` (Feather-weight, modern stroke icons)

#### 6.2 Component Hierarchy
```
src/
├── assets/                  # Media, audio, video, custom icons
├── components/
│   ├── common/
│   │   ├── Button.jsx       # Magnetic & Glow button variants
│   │   ├── GlassCard.jsx    # Glassmorphism wrapper component
│   │   ├── Badge.jsx        # Luxury tag badges
│   │   └── SoundPlayer.jsx  # Ambient island audio toggle
│   ├── layout/
│   │   ├── Preloader.jsx    # Cinematic initial splash screen
│   │   ├── Navbar.jsx       # Floating responsive navigation
│   │   └── Footer.jsx       # Interactive editorial footer
│   ├── sections/
│   │   ├── Hero.jsx         # Parallax hero + booking bar
│   │   ├── Philosophy.jsx   # Typography storytelling section
│   │   ├── Villas.jsx       # Interactive villa slider / modal
│   │   ├── Experiences.jsx  # Bento grid island activities
│   │   ├── InteractiveMap.jsx # Hotspot interactive island map
│   │   └── Dining.jsx       # Gastronomy showcase
│   └── modals/
│       ├── BookingDrawer.jsx # Slide-over reservation flow
│       └── VillaModal.jsx    # Detailed villa preview
├── data/
│   ├── villasData.js        # Content data for villas
│   ├── experiencesData.js   # Content data for experiences
│   └── mapHotspots.js       # Map points & metadata
├── hooks/
│   ├── useScrollPosition.js
│   └── useMagneticEffect.js
├── styles/
│   ├── tokens.css           # Colors, typography, spacing tokens
│   └── animations.css       # Keyframes & utility animations
├── App.jsx                  # Master composition & preloader state
└── main.jsx
```

---

### 7. Non-Functional & UI/UX Quality Metrics

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **Performance (Lighthouse)** | 90+ Score | Optimized responsive WebP/AVIF images & code splitting |
| **Animation Smoothness** | 60 FPS (Zero jank) | GPU-accelerated CSS `transform` & `opacity` only |
| **Responsiveness** | Mobile, Tablet, 4K Ultrawide | Fluid clamp typography & responsive grid systems |
| **Accessibility (a11y)** | WCAG 2.1 AA | ARIA labels for buttons/drawers, keyboard navigation |
| **SEO Readiness** | OpenGraph tags, Semantic HTML | Proper `h1-h6` hierarchy, meta tags, schema markup |

---

### 8. Milestone & Execution Roadmap

* **Phase 1: Foundation & Design System Setup**
  * Inisialisasi Vite + React.
  * Setup token warna luxury, Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*), dan konfigurasi Framer Motion + Lenis.
* **Phase 2: Core Components & Splash Screen**
  * Pembuatan `Preloader.jsx` dengan animasi SVG stroke & percentage counter.
  * Pembuatan `Navbar.jsx` floating glassmorphism + ambient audio controller.
* **Phase 3: Hero & Interactive Booking Module**
  * Implementasi parallax visual Hero dengan dynamic headline reveal.
  * Floating Booking Bar dengan state picker check-in / guests.
* **Phase 4: Storytelling, Villas & Bento Grid**
  * Implementasi section Philosophy, Villas carousel/card, dan Bento grid Experiences.
* **Phase 5: Interactive Map & Booking Drawer**
  * Pembuatan interactive hotspot map & slide-out booking inquiry drawer.
* **Phase 6: Polish & Micro-interactions**
  * Custom cursor, sound effects, noise grain texture, dan optimasi performa.
