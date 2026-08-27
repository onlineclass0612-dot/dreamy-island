import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Users, Home, Search, ChevronDown, Check, Sun } from 'lucide-react';
import { villasData } from '../../data/villasData';

export default function BookingBar({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('2026-09-12');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  const [villaType, setVillaType] = useState('beachfront-haven');
  const [guests, setGuests] = useState('2 Tamu (Intim & Romantis)');
  const [showVillaDropdown, setShowVillaDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const containerRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowVillaDropdown(false);
        setShowGuestDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const villasList = [
    { id: 'all', name: 'Semua Pilihan Pondok' },
    ...villasData.map((v) => ({ id: v.id, name: v.name }))
  ];

  const guestOptions = [
    '1 Tamu (Ketenangan Sendiri)',
    '2 Tamu (Intim & Romantis)',
    '2 Tamu & 1 Anak (Keluarga Kecil)',
    '4 Tamu (Keluarga & Kerabat Dekat)'
  ];

  const handleSearch = () => {
    onOpenBooking({
      checkIn,
      checkOut,
      villaType,
      guests
    });
  };

  const selectedVillaName = villasList.find(v => v.id === villaType)?.name || 'Pilih Pondok';

  // Calculate nights for dynamic label
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2 - d1);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 6);

  return (
    <div
      ref={containerRef}
      className="glass-warm-header"
      style={{
        borderRadius: '20px',
        padding: '1.25rem 1.75rem',
        border: '1px solid rgba(255, 255, 255, 0.95)',
        backgroundColor: 'rgba(255, 253, 249, 0.92)',
        boxShadow: '0 20px 50px rgba(80, 55, 30, 0.12)',
        position: 'relative',
        zIndex: 50
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(270px, 1.4fr) minmax(220px, 1.1fr) minmax(190px, 1fr) 175px',
          gap: '1.25rem',
          alignItems: 'center'
        }}
        className="booking-grid"
      >
        {/* Check-In / Check-Out Dates */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(244, 236, 226, 0.5)',
            border: '1px solid rgba(184, 117, 50, 0.2)',
            minWidth: 0,
            overflow: 'hidden'
          }}
        >
          <CalendarIcon size={20} color="#d3924e" style={{ flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0, overflow: 'hidden' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                color: '#7f7266',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                fontWeight: 600
              }}
            >
              Tanggal ({nights} Malam Penuh Damai)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', width: '100%', minWidth: 0 }}>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#241d17',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  minWidth: 0,
                  colorScheme: 'light',
                  padding: 0
                }}
              />
              <span style={{ color: '#d3924e', fontSize: '0.75rem', flexShrink: 0, padding: '0 2px' }}>→</span>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#241d17',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  minWidth: 0,
                  colorScheme: 'light',
                  padding: 0
                }}
              />
            </div>
          </div>
        </div>

        {/* Villa Selector */}
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => {
              setShowVillaDropdown(!showVillaDropdown);
              setShowGuestDropdown(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(244, 236, 226, 0.5)',
              border: '1px solid rgba(184, 117, 50, 0.2)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
              <Home size={20} color="#d3924e" style={{ flexShrink: 0 }} />
              <div style={{ overflow: 'hidden' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: '#7f7266',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    fontWeight: 600
                  }}
                >
                  Pilihan Pondok &amp; Suaka
                </span>
                <span
                  style={{
                    color: '#241d17',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block'
                  }}
                >
                  {selectedVillaName}
                </span>
              </div>
            </div>
            <ChevronDown size={16} color="#7f7266" />
          </div>

          {/* Villa Dropdown */}
          <AnimatePresence>
            {showVillaDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  minWidth: '280px',
                  width: '100%',
                  zIndex: 9999,
                  backgroundColor: '#ffffff',
                  border: '1.5px solid rgba(184, 117, 50, 0.3)',
                  borderRadius: '16px',
                  padding: '0.5rem',
                  boxShadow: '0 20px 45px rgba(80, 55, 30, 0.15)'
                }}
              >
                {villasList.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => {
                      setVillaType(v.id);
                      setShowVillaDropdown(false);
                    }}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8125rem',
                      color: villaType === v.id ? '#c46d4a' : '#4e443b',
                      backgroundColor: villaType === v.id ? 'rgba(211, 146, 78, 0.12)' : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                      fontWeight: villaType === v.id ? 600 : 400
                    }}
                    onMouseEnter={(e) => {
                      if (villaType !== v.id) e.currentTarget.style.backgroundColor = 'rgba(244, 236, 226, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      if (villaType !== v.id) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span>{v.name}</span>
                    {villaType === v.id && <Check size={14} color="#c46d4a" />}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Guests Count */}
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => {
              setShowGuestDropdown(!showGuestDropdown);
              setShowVillaDropdown(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(244, 236, 226, 0.5)',
              border: '1px solid rgba(184, 117, 50, 0.2)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users size={20} color="#d3924e" style={{ flexShrink: 0 }} />
              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: '#7f7266',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    fontWeight: 600
                  }}
                >
                  Jumlah Tamu &amp; Suasana
                </span>
                <span style={{ color: '#241d17', fontSize: '0.85rem', fontWeight: 500 }}>
                  {guests}
                </span>
              </div>
            </div>
            <ChevronDown size={16} color="#7f7266" />
          </div>

          {/* Guests Dropdown */}
          <AnimatePresence>
            {showGuestDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  minWidth: '250px',
                  width: '100%',
                  zIndex: 9999,
                  backgroundColor: '#ffffff',
                  border: '1.5px solid rgba(184, 117, 50, 0.3)',
                  borderRadius: '16px',
                  padding: '0.5rem',
                  boxShadow: '0 20px 45px rgba(80, 55, 30, 0.15)'
                }}
              >
                {guestOptions.map((g) => (
                  <div
                    key={g}
                    onClick={() => {
                      setGuests(g);
                      setShowGuestDropdown(false);
                    }}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8125rem',
                      color: guests === g ? '#c46d4a' : '#4e443b',
                      backgroundColor: guests === g ? 'rgba(211, 146, 78, 0.12)' : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: guests === g ? 600 : 400
                    }}
                  >
                    <span>{g}</span>
                    {guests === g && <Check size={14} color="#c46d4a" />}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Check Availability CTA Button */}
        <button
          onClick={handleSearch}
          className="btn-warm-primary"
          style={{
            height: '100%',
            minHeight: '52px',
            borderRadius: '12px',
            fontSize: '0.8125rem',
            width: '100%'
          }}
        >
          <Search size={15} />
          <span>Cek Tanggal</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .booking-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 680px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
