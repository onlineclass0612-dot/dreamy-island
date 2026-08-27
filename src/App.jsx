import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Sections
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Villas from './components/sections/Villas';
import Experiences from './components/sections/Experiences';
import InteractiveMap from './components/sections/InteractiveMap';
import Dining from './components/sections/Dining';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

// Modals
import VillaModal from './components/modals/VillaModal';
import BookingDrawer from './components/modals/BookingDrawer';

// Data
import { villasData } from './data/villasData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [selectedVillaModal, setSelectedVillaModal] = useState(null);
  const [isVillaModalOpen, setIsVillaModalOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setIsBookingOpen(true);
  };

  const handleSelectVillaForBooking = (villaId) => {
    setBookingInitialData({ villaType: villaId });
    setIsBookingOpen(true);
  };

  const handleQuickViewVilla = (villa) => {
    setSelectedVillaModal(villa);
    setIsVillaModalOpen(true);
  };

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Natural Glow Texture Overlay */}
      <div className="natural-glow" />

      {/* Splash Screen / Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Experience Content */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={(target) => handleScrollToSection(target)}
        />

        <main>
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onExploreVillas={() => handleScrollToSection('villas')}
          />

          <Philosophy />

          <Villas
            onSelectVilla={(villaId) => handleSelectVillaForBooking(villaId)}
            onQuickView={(villa) => handleQuickViewVilla(villa)}
          />

          <Experiences
            onOpenInquiry={(expTitle) => handleOpenBooking({ specialRequest: `Experience: ${expTitle}` })}
          />

          <InteractiveMap
            onExploreLocation={(hotspot) => {
              if (hotspot.category === 'Villas' || hotspot.category === 'Estates') {
                handleScrollToSection('villas');
              } else if (hotspot.category === 'Gastronomy') {
                handleScrollToSection('dining');
              } else {
                handleOpenBooking({ specialRequest: `Landmark Navigation: ${hotspot.title}` });
              }
            }}
          />

          <Dining
            onBookDining={(venueName) => handleOpenBooking({ specialRequest: `Dining: ${venueName}` })}
          />

          <Testimonials />
        </main>

        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Pop-up Modals & Slide-Over Drawer */}
        <VillaModal
          villa={selectedVillaModal}
          isOpen={isVillaModalOpen}
          onClose={() => setIsVillaModalOpen(false)}
          onBookNow={(villaId) => handleSelectVillaForBooking(villaId)}
        />

        <BookingDrawer
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialData={bookingInitialData}
        />
      </div>
    </div>
  );
}
