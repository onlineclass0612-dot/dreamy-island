import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sun, Heart, Calendar } from 'lucide-react';
import { soundscape } from '../../utils/audioEngine';

export default function Navbar({ onOpenBooking, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = soundscape.toggle();
    setIsAudioPlaying(active);
  };

  const navLinks = [
    { name: 'Tentang Pulau', href: '#sanctuary' },
    { name: 'Pondok & Suaka', href: '#villas' },
    { name: 'Momen Santai', href: '#experiences' },
    { name: 'Kuliner Pantai', href: '#dining' },
    { name: 'Peta Pulau', href: '#map' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 900,
          padding: scrolled ? '0.85rem 2rem' : '1.15rem 2.25rem',
          backgroundColor: scrolled ? 'rgba(251, 248, 243, 0.88)' : 'rgba(251, 248, 243, 0.72)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: scrolled ? '1px solid rgba(184, 117, 50, 0.22)' : '1px solid rgba(78, 68, 59, 0.1)',
          boxShadow: scrolled ? '0 6px 25px rgba(60, 42, 26, 0.06)' : '0 2px 10px rgba(60, 42, 26, 0.02)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#241d17'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(211, 146, 78, 0.14)',
                border: '1px solid rgba(211, 146, 78, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d3924e'
              }}
            >
              <Sun size={20} />
            </div>
            <div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1,
                  color: '#241d17'
                }}
              >
                Dreamy Island
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  color: '#b87532',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Suaka Pesisir yang Hangat &amp; Tenang
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.25rem'
            }}
            className="md-flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: '#4e443b',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c46d4a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4e443b')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Waves & Birdsong Toggle + Reserve Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            
            {/* Ambient Ocean Waves & Birdsong Button */}
            <button
              onClick={toggleAudio}
              title={isAudioPlaying ? 'Matikan Suara Ombak & Burung' : 'Putar Suara Ombak & Kicauan Burung'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '8px',
                backgroundColor: isAudioPlaying ? 'rgba(211, 146, 78, 0.16)' : 'rgba(78, 68, 59, 0.05)',
                border: isAudioPlaying ? '1px solid #d3924e' : '1px solid rgba(78, 68, 59, 0.14)',
                color: isAudioPlaying ? '#b87532' : '#7f7266',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {isAudioPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span className="hidden-xs" style={{ letterSpacing: '0.04em', fontWeight: 600 }}>
                {isAudioPlaying ? 'OMBAK & BURUNG: AKTIF' : 'OMBAK & BURUNG: NONAKTIF'}
              </span>

              {/* Animated soft equalizer wave bars */}
              {isAudioPlaying && (
                <span style={{ display: 'inline-flex', gap: '2px', alignItems: 'flex-end', height: '10px' }}>
                  <motion.span
                    animate={{ height: ['4px', '10px', '3px', '8px'] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                    style={{ width: '2px', backgroundColor: '#d3924e', borderRadius: '1px' }}
                  />
                  <motion.span
                    animate={{ height: ['8px', '3px', '10px', '5px'] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                    style={{ width: '2px', backgroundColor: '#d3924e', borderRadius: '1px' }}
                  />
                  <motion.span
                    animate={{ height: ['3px', '9px', '4px', '10px'] }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
                    style={{ width: '2px', backgroundColor: '#d3924e', borderRadius: '1px' }}
                  />
                </span>
              )}
            </button>

            {/* Reserve Retreat Button */}
            <button
              onClick={onOpenBooking}
              className="btn-warm-primary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.8125rem',
                borderRadius: '8px'
              }}
            >
              <Calendar size={14} />
              <span>Pesan Suaka</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(78, 68, 59, 0.05)',
                border: '1px solid rgba(78, 68, 59, 0.12)',
                color: '#241d17',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: '1rem',
              right: '1rem',
              zIndex: 899,
              padding: '2rem 1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 253, 249, 0.98)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(184, 117, 50, 0.3)',
              boxShadow: '0 25px 60px rgba(50, 35, 22, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-serif"
                style={{
                  color: '#241d17',
                  textDecoration: 'none',
                  fontSize: '1.35rem',
                  letterSpacing: '0.03em',
                  borderBottom: '1px solid rgba(78,68,59,0.08)',
                  paddingBottom: '0.75rem'
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-warm-primary"
              style={{ marginTop: '0.5rem', width: '100%', borderRadius: '8px' }}
            >
              Pesan Suaka
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .md-flex { display: flex !important; }
        }
        @media (max-width: 859px) {
          .mobile-toggle { display: flex !important; }
        }
        @media (max-width: 540px) {
          .hidden-xs { display: none !important; }
        }
      `}</style>
    </>
  );
}
