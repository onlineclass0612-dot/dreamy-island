# 🏝️ Dreamy Island — Intimate Luxury Coastal Retreat

<p align="center">
  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85" alt="Dreamy Island Banner" width="100%" style="border-radius: 16px; object-fit: cover; max-height: 400px;" />
</p>

<p align="center">
  <strong>Sebuah Suaka Pulau Kecil Alami Tempat Laut Toska yang Tenang Berpadu dengan Kehangatan Pasir Putih & Kicauan Burung Tropis.</strong>
</p>

<p align="center">
  <a href="#-emosi--konsep-desain">✨ Emosi</a> •
  <a href="#-fitur-utama">🌟 Fitur Utama</a> •
  <a href="#-teknologi--arsitektur">🛠️ Teknologi</a> •
  <a href="#-struktur-proyek">📁 Struktur Proyek</a> •
  <a href="#-instalasi--menjalankan">🚀 Panduan Instalasi</a>
</p>

---

## ✨ Emosi & Konsep Desain

**Dreamy Island** adalah web landing page kelas profesional untuk resort pulau privat mewah yang dirancang dengan memancarkan 6 pilar emosi utama:

> 🥥 **Nyaman** • ☀️ **Hangat** • 🌊 **Tenang** • 🌴 **Santai** • 🤍 **Intim** • 🌿 **Natural**

* **Filosofi Barefoot Luxury:** Mendorong pengunjung untuk meninggalkan alas kaki, melupakan kesibukan jadwal harian, dan menyatu dengan irama alam yang damai.
* **Warm Sun-Kissed Color Palette:** Menggunakan palet lembut *Warm Linen (`#FBF8F3`)*, *Sun-Baked Sand (`#F4ECE2`)*, *Honey Amber (`#D3924E`)*, *Terracotta Clay (`#C46D4A`)*, *Sea Sage (`#5B7F73`)*, dan *Deep Espresso Typography (`#241D17`)*.

---

## 🌟 Fitur Utama

### 1. 🎵 Procedural Web Audio API Soundscape Engine
* **Zero-Asset Sound Synthesis:** Menghasilkan audio deburan ombak laut dan kicauan burung tropis secara dinamis dan prosedural menggunakan Web Audio API tanpa membutuhkan file audio eksternal yang berat.
* **Deburan Ombak Pantai yang Hidup:** Mensintesis *pink-noise lowpass & bandpass filter sweep* yang berayun mengikuti siklus pasang surut air laut (~7.8 detik per ayunan ombak).
* **Paduan Suara Burung Tropis (Multi-Species Calls):** Menghasilkan 4 variasi melodi kicauan burung alami bersahut-sahutan dengan interval organik.
* **Ambient Sound Toggle:** Tombol interaktif di Navbar dengan visualizer equalizer animasi.

### 2. 🏡 Showcase Pondok & Koreografi Animasi Sinematik
* **Koreografi Filter Unik:**
  * Saat memilih **"Semua Pondok"**: Kartu-kartu pondok meluncur masuk satu per satu secara berurutan dari kiri (*staggered slide-in*).
  * Saat memilih kategori spesifik (**Tepi Pantai**, **Terapung Laguna**, **Bukit Teduh**): Kartu yang dipilih **tetap berada di slot kolom aslinya**, sementara kartu lainnya perlahan **terbenam ke arah bawah** (*submerged sinking motion*).
* **Modal Detail Pondok:** Tampilan galeri foto, spesifikasi dimensi/tamu/ranjang, ulasan terverifikasi, dan daftar fasilitas lengkap dengan penguncian scroll background otomatis (*scroll lock*).

### 3. 🗺️ Peta Geografi Pulau Kecil Interaktif (Atoll Map)
* **Visual Peta Vektor Atoll:** Menampilkan ilustrasi pulau atoll pantai pasir putih dan vegetasi tropis rimbun.
* **Beacon Hotspot Interaktif:** Titik-titik suaka pulau (*Teluk Pasir Putih*, *Hammock Pohon Kelapa*, *Spa Terbuka Bunga Kamboja*, *Dek Senja Api Unggun*, dan *Dermaga Kayu*).
* **Drawer Informasi Landmark:** Memunculkan detail suasana, jarak tempuh jalan santai, dan panduan lokasi saat titik diklik.

### 4. 🍽️ Showcase Kuliner Pantai & Meja Lilin
* Split-screen interaktif untuk pilihan restoran pulau (*Meja Lilin Pasir Pantai*, *Paviliun Rindang Frangipani*, dan *Lounge Senja Kayu Apung*).
* Menyajikan menu unggulan berbahan hasil laut segar dan tanaman herbal organik kebun pulau.

### 5. 📅 Booking Drawer & Smart Booking Bar
* **Booking Bar Responsif:** Date picker terintegrasi dengan perhitungan malam otomatis (*dynamic nights calculation*), dropdown pilihan suaka pondok, dan seleksi tamu.
* **Slide-Over Reservation Drawer:** Drawer form pemesanan interaktif dengan opsi *Add-on* (Penerbangan Seaplane & Paket Kuliner Organik), breakdown harga transparan, validasi form, dan efek selebrasi *warm confetti* saat reservasi dikirim.
* **Scroll Lock & Lenis Protection:** Scrollbar halaman utama otomatis dinonaktifkan saat modal atau drawer terbuka, memastikan kenyamanan scrolling hanya pada drawer/modal.

### 6. 📜 Smooth Inertial Scrolling (Lenis)
* Navigasi scroll super halus dan fluid di seluruh halaman dengan handling *touch/wheel* yang presisi.

---

## 🛠️ Teknologi & Arsitektur

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Library UI berbasis komponen fungsional |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Bundler modern berkecepatan tinggi & HMR instan |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Animasi tata letak, staggered entrance, dan layout physics |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | Mesin smooth-scrolling inersia modern |
| **Audio Engine** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Prosedural synthesizer ombak & kicauan burung alami |
| **Icons** | [Lucide React](https://lucide.dev/) | Icon SVG modern, ringan, dan elegan |
| **Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) | Animasi partikel confetti warna hangat saat booking |
| **Styling** | Vanilla CSS + CSS Variables | Arsitektur design token berkinerja tinggi tanpa Tailwind |

---

## 📁 Struktur Proyek

```
DreamyIsland/
├── public/                     # Aset publik statis
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Sticky semi-transparent header & audio controller
│   │   │   ├── Preloader.jsx   # Splash screen matahari terbit & quote emosional
│   │   │   └── Footer.jsx      # Footer pesisir senja & live clock WITA
│   │   ├── modals/
│   │   │   ├── BookingDrawer.jsx # Slide-over form reservasi & konfirmasi
│   │   │   └── VillaModal.jsx    # Modal detail spesifikasi & galeri pondok
│   │   └── sections/
│   │       ├── Hero.jsx        # Hero banner, cuaca live, & CTAs
│   │       ├── BookingBar.jsx  # Floating quick booking bar & date picker
│   │       ├── Philosophy.jsx  # Storytelling 3 pilar hidup santai
│   │       ├── Villas.jsx      # Grid pondok dengan animasi sinking filter
│   │       ├── Experiences.jsx # Bento grid momen santai & intim
│   │       ├── InteractiveMap.jsx # Peta atoll interaktif & beacon suaka
│   │       ├── Dining.jsx      # Kuliner pantai bertelanjang kaki & meja lilin
│   │       └── Testimonials.jsx# Kesan dari hati tamu suaka
│   ├── data/
│   │   ├── villasData.js       # Data pondok, spesifikasi, foto & fasilitas
│   │   ├── experiencesData.js  # Data aktivitas santai & meditasi fajar
│   │   ├── diningData.js       # Data venue kuliner & penghargaan
│   │   └── mapHotspots.js      # Koordinat dan data penanda geografi pulau
│   ├── styles/
│   │   └── tokens.css          # Design tokens (warna, font, bayangan, easing)
│   ├── utils/
│   │   └── audioEngine.js      # Web Audio API waves & birdsong synthesizer
│   ├── App.jsx                 # Komponen utama & integrasi Lenis scroll
│   ├── index.css               # Global styles, glassmorphism & typography
│   └── main.jsx                # Entry point aplikasi React
├── PRD.md                      # Product Requirement Document komprehensif
├── index.html                  # HTML template dengan Google Fonts editorial
├── vite.config.js              # Konfigurasi Vite & React plugin
└── package.json                # Dependensi dan scripts
```

---

## 🚀 Panduan Instalasi & Menjalankan

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan) dan **Git** di komputer Anda.

### 1. Clone Repository
```bash
git clone https://github.com/onlineclass0612-dot/dreamy-island.git
cd dreamy-island
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser Anda dan akses: **`http://localhost:5173/`**

### 4. Build untuk Production
```bash
npm run build
```
Hasil bundle yang telah dioptimasi akan berada di dalam folder `dist/`.

---

## 📄 Lisensi & Hak Cipta
© 2026 **Dreamy Island Luxury Resort**. Seluruh hak cipta dilindungi. Dibuat dengan cinta untuk menghadirkan ketenangan, kehangatan, dan relaksasi alami.
