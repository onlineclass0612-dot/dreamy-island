import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sun, Calendar } from 'lucide-react';
import { soundscape } from '../../utils/audioEngine';

export default function Navbar({ onOpenBooking, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
          padding: scrolled ? '1.25rem 3rem' : '1.85rem 3.75rem',
          backgroundColor: scrolled ? 'rgba(251, 248, 243, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: 'none',
          boxShadow: scrolled ? '0 8px 30px rgba(60, 42, 26, 0.05)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '1.5rem'
          }}
        >
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: '#1a140f',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: scrolled ? 'rgba(211, 146, 78, 0.14)' : 'rgba(255, 253, 249, 0.9)',
                border: '1.5px solid rgba(211, 146, 78, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b87532',
                boxShadow: scrolled ? 'none' : '0 4px 12px rgba(80, 55, 30, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
            >
              <Sun size={23} />
            </div>
            <div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1,
                  color: '#1a140f',
                  textShadow: scrolled ? 'none' : '0 1px 4px rgba(255, 255, 255, 0.6)',
                  whiteSpace: 'nowrap'
                }}
              >
                Dreamy Island
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  color: '#9e5a1b',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'block',
                  marginTop: '3px',
                  textShadow: scrolled ? 'none' : '0 1px 3px rgba(255, 255, 255, 0.6)',
                  whiteSpace: 'nowrap'
                }}
              >
                Suaka Pesisir yang Hangat &amp; Tenang
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Zero Text-Wrap) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.75rem',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
            className="desktop-nav-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: '#1a140f',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.25rem 0',
                  textShadow: scrolled ? 'none' : '0 1px 4px rgba(255, 255, 255, 0.6)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c46d4a';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1a140f';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Waves & Birdsong Toggle + Reserve Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            
            {/* Ambient Ocean Waves & Birdsong Button */}
            <button
              onClick={toggleAudio}
              title={isAudioPlaying ? 'Matikan Suara Ombak & Burung' : 'Putar Suara Ombak & Kicauan Burung'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.62rem 1.1rem',
                borderRadius: '9px',
                backgroundColor: isAudioPlaying 
                  ? 'rgba(211, 146, 78, 0.22)' 
                  : (scrolled ? 'rgba(78, 68, 59, 0.06)' : 'rgba(255, 253, 249, 0.82)'),
                backdropFilter: 'blur(10px)',
                border: isAudioPlaying ? '1.5px solid #d3924e' : '1.5px solid rgba(184, 117, 50, 0.35)',
                color: isAudioPlaying ? '#9e5a1b' : '#1a140f',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                boxShadow: scrolled ? 'none' : '0 2px 10px rgba(80, 55, 30, 0.06)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span className="hidden-xs" style={{ letterSpacing: '0.04em', fontWeight: 600, whiteSpace: 'nowrap' }}>
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
                padding: '0.72rem 1.6rem',
                fontSize: '0.85rem',
                borderRadius: '9px',
                boxShadow: '0 4px 18px rgba(184, 117, 50, 0.35)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <Calendar size={15} />
              <span>Pesan Suaka</span>
            </button>

            {/* Mobile / Compact Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '9px',
                backgroundColor: 'rgba(255, 253, 249, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(184, 117, 50, 0.3)',
                color: '#1a140f',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Animated Flowing Ocean Wave Border Ribbon (Taller & Higher Wave Amplitude) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '14px',
            overflow: 'hidden',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.45s ease',
            pointerEvents: 'none'
          }}
        >
          <div
            className="navbar-wave-track"
            style={{
              display: 'flex',
              width: '200%',
              height: '100%',
              animation: 'navbarWaveLoop 8s linear infinite'
            }}
          >
            {/* Primary Single Golden-Brown Wave Crest */}
            <svg viewBox="0 0 1200 28" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path
                d="M 0,14 Q 75,0 150,14 T 300,14 T 450,14 T 600,14 T 750,14 T 900,14 T 1050,14 T 1200,14"
                fill="none"
                stroke="url(#navbarWaveGrad1)"
                strokeWidth="3.4"
              />
              <defs>
                <linearGradient id="navbarWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d3924e" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#c46d4a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d3924e" stopOpacity="0.85" />
                </linearGradient>
              </defs>
            </svg>

            {/* Seamless Repeating Single Golden-Brown Wave */}
            <svg viewBox="0 0 1200 28" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path
                d="M 0,14 Q 75,0 150,14 T 300,14 T 450,14 T 600,14 T 750,14 T 900,14 T 1050,14 T 1200,14"
                fill="none"
                stroke="url(#navbarWaveGrad2)"
                strokeWidth="3.4"
              />
              <defs>
                <linearGradient id="navbarWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d3924e" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#c46d4a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d3924e" stopOpacity="0.85" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: 'fixed',
              top: '85px',
              left: '1rem',
              right: '1rem',
              zIndex: 899,
              padding: '2rem 1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 253, 249, 0.98)',
              backdropFilter: 'blur(25px)',
              border: '1.5px solid rgba(184, 117, 50, 0.3)',
              boxShadow: '0 25px 60px rgba(50, 35, 22, 0.18)',
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
                  color: '#1a140f',
                  textDecoration: 'none',
                  fontSize: '1.35rem',
                  letterSpacing: '0.03em',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(78,68,59,0.08)',
                  paddingBottom: '0.75rem',
                  whiteSpace: 'nowrap'
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
        @keyframes navbarWaveLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (min-width: 1180px) {
          .desktop-nav-menu { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        @media (max-width: 1179px) {
          .desktop-nav-menu { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .hidden-xs { display: none !important; }
        }
      `}</style>
    </>
  );
}
