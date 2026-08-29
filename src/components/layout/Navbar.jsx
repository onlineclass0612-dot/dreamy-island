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
          padding: scrolled ? '0.85rem 2rem' : '1.35rem 2.25rem',
          backgroundColor: scrolled ? 'rgba(251, 248, 243, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(184, 117, 50, 0.18)' : '1px solid transparent',
          boxShadow: scrolled ? '0 6px 25px rgba(60, 42, 26, 0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
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
              color: '#1a140f'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: scrolled ? 'rgba(211, 146, 78, 0.14)' : 'rgba(255, 253, 249, 0.9)',
                border: '1.5px solid rgba(211, 146, 78, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b87532',
                boxShadow: scrolled ? 'none' : '0 4px 12px rgba(80, 55, 30, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease'
              }}
            >
              <Sun size={21} />
            </div>
            <div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1,
                  color: '#1a140f',
                  textShadow: scrolled ? 'none' : '0 1px 4px rgba(255, 255, 255, 0.6)'
                }}
              >
                Dreamy Island
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  color: '#9e5a1b',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'block',
                  marginTop: '2px',
                  textShadow: scrolled ? 'none' : '0 1px 3px rgba(255, 255, 255, 0.6)'
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
                  color: '#1a140f',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.25rem 0',
                  textShadow: scrolled ? 'none' : '0 1px 4px rgba(255, 255, 255, 0.6)'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            
            {/* Ambient Ocean Waves & Birdsong Button */}
            <button
              onClick={toggleAudio}
              title={isAudioPlaying ? 'Matikan Suara Ombak & Burung' : 'Putar Suara Ombak & Kicauan Burung'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.58rem 1rem',
                borderRadius: '8px',
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
                boxShadow: scrolled ? 'none' : '0 2px 10px rgba(80, 55, 30, 0.06)'
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
                borderRadius: '8px',
                boxShadow: '0 4px 18px rgba(184, 117, 50, 0.35)'
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
                backgroundColor: 'rgba(255, 253, 249, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(184, 117, 50, 0.3)',
                color: '#1a140f',
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
              top: '75px',
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
