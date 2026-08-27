import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Check, Coffee, Heart, CheckCircle2, Sun, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { villasData } from '../../data/villasData';
import { soundscape } from '../../utils/audioEngine';

export default function BookingDrawer({ isOpen, onClose, initialData }) {
  const [villaId, setVillaId] = useState(villasData[0].id);
  const [checkIn, setCheckIn] = useState('2026-09-12');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  const [guests, setGuests] = useState('2 Tamu (Intim & Romantis)');
  const [includeSeaplane, setIncludeSeaplane] = useState(true);
  const [includeDiningPackage, setIncludeDiningPackage] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData) {
      if (initialData.villaType && initialData.villaType !== 'all') {
        setVillaId(initialData.villaType);
      }
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.guests) setGuests(initialData.guests);
    }
  }, [initialData]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentVilla = villasData.find((v) => v.id === villaId) || villasData[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2 - d1);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 6);

  const basePrice = currentVilla.pricePerNight * nights;
  const transferPrice = includeSeaplane ? 650 * 2 : 0;
  const diningPrice = includeDiningPackage ? 180 * nights : 0;
  const totalPrice = basePrice + transferPrice + diningPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `SUAKA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
    soundscape.playChime();

    // Celebration Warm Confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d3924e', '#c46d4a', '#e6b87d', '#5b7f73']
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(30, 25, 21, 0.65)',
        backdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <motion.div
        data-lenis-prevent="true"
        className="custom-drawer-scroll"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '100%',
          backgroundColor: '#fffdfa',
          borderLeft: '1.5px solid rgba(184, 117, 50, 0.25)',
          boxShadow: '-15px 0 50px rgba(50, 35, 22, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid rgba(78, 68, 59, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(255, 253, 249, 0.96)',
            backdropFilter: 'blur(20px)',
            zIndex: 10
          }}
        >
          <div>
            <span className="font-mono" style={{ fontSize: '0.7rem', color: '#b87532', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              Suaka Pulau yang Hangat &amp; Intim
            </span>
            <h2 className="font-serif" style={{ fontSize: '1.75rem', color: '#241d17', fontWeight: 600 }}>
              Pesan Tempat Peristirahatan
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'rgba(244, 236, 226, 0.8)',
              border: '1px solid rgba(184, 117, 50, 0.2)',
              color: '#241d17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ padding: '2rem', flex: 1 }}>
          {isSubmitted ? (
            /* Confirmation State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '3rem 1rem'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(211, 146, 78, 0.14)',
                  border: '2px solid #d3924e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem',
                  color: '#c46d4a'
                }}
              >
                <CheckCircle2 size={42} />
              </div>

              <span className="warm-badge" style={{ marginBottom: '1rem' }}>
                Reservasi Diterima
              </span>

              <h3 className="font-serif" style={{ fontSize: '2.2rem', color: '#241d17', marginBottom: '0.75rem' }}>
                Kedamaian Telah Menanti Anda
              </h3>

              <p style={{ color: '#2b231c', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '420px' }}>
                Salam hangat, <strong style={{ color: '#241d17' }}>{guestName || 'Sahabat'}</strong>. 
                Permintaan menginap Anda di <strong style={{ color: '#c46d4a' }}>{currentVilla.name}</strong> telah diterima dengan penuh kehangatan oleh keluarga pulau kami.
              </p>

              <div
                style={{
                  padding: '1.25rem 2rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(244, 236, 226, 0.65)',
                  border: '1.5px solid rgba(184, 117, 50, 0.25)',
                  marginBottom: '2.5rem',
                  width: '100%'
                }}
              >
                <span className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                  KODE REFERENSI RESERVASI
                </span>
                <span className="font-mono" style={{ fontSize: '1.25rem', color: '#b87532', fontWeight: 600, letterSpacing: '0.08em' }}>
                  {bookingRef}
                </span>
              </div>

              <button onClick={resetForm} className="btn-warm-primary" style={{ width: '100%', borderRadius: '10px' }}>
                Kembali ke Halaman Pulau
              </button>
            </motion.div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Villa Selection */}
              <div>
                <label className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Pilih Suaka Pondok
                </label>
                <select
                  value={villaId}
                  onChange={(e) => setVillaId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(244, 236, 226, 0.4)',
                    border: '1.5px solid rgba(184, 117, 50, 0.25)',
                    color: '#241d17',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  {villasData.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} (${v.pricePerNight.toLocaleString()}/malam)
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Tanggal Kedatangan
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(244, 236, 226, 0.4)',
                      border: '1.5px solid rgba(184, 117, 50, 0.25)',
                      color: '#241d17',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none',
                      colorScheme: 'light'
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Tanggal Kepulangan
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(244, 236, 226, 0.4)',
                      border: '1.5px solid rgba(184, 117, 50, 0.25)',
                      color: '#241d17',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none',
                      colorScheme: 'light'
                    }}
                  />
                </div>
              </div>

              {/* Guests Count Dropdown */}
              <div>
                <label className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Jumlah Tamu &amp; Suasana Menginap
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(244, 236, 226, 0.4)',
                    border: '1.5px solid rgba(184, 117, 50, 0.25)',
                    color: '#241d17',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="1 Tamu (Ketenangan Sendiri)">1 Tamu (Ketenangan Sendiri)</option>
                  <option value="2 Tamu (Intim & Romantis)">2 Tamu (Intim & Romantis)</option>
                  <option value="2 Tamu & 1 Anak (Keluarga Kecil)">2 Tamu &amp; 1 Anak (Keluarga Kecil)</option>
                  <option value="4 Tamu (Keluarga & Kerabat Dekat)">4 Tamu (Keluarga &amp; Kerabat Dekat)</option>
                </select>
              </div>

              {/* Cozy Perks Add-ons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', fontWeight: 600 }}>
                  Pilihan Keistimewaan Tambahan
                </span>

                <div
                  onClick={() => setIncludeSeaplane(!includeSeaplane)}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: includeSeaplane ? 'rgba(211, 146, 78, 0.14)' : 'rgba(244, 236, 226, 0.3)',
                    border: includeSeaplane ? '1.5px solid #d3924e' : '1px solid rgba(184, 117, 50, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Sun size={18} color="#d3924e" />
                    <div>
                      <span style={{ fontSize: '0.875rem', color: '#241d17', fontWeight: 600, display: 'block' }}>
                        Penerbangan Pesawat Amfibi (Seaplane) Pesisir
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#7f7266' }}>Penerbangan panorama indah pulang-pergi melintasi gugusan atoll</span>
                    </div>
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: '#b87532', fontWeight: 600 }}>+$1,300</span>
                </div>

                <div
                  onClick={() => setIncludeDiningPackage(!includeDiningPackage)}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: includeDiningPackage ? 'rgba(211, 146, 78, 0.14)' : 'rgba(244, 236, 226, 0.3)',
                    border: includeDiningPackage ? '1.5px solid #d3924e' : '1px solid rgba(184, 117, 50, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Coffee size={18} color="#d3924e" />
                    <div>
                      <span style={{ fontSize: '0.875rem', color: '#241d17', fontWeight: 600, display: 'block' }}>
                        Paket Kuliner Organik Hasil Kebun &amp; Laut
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#7f7266' }}>Sarapan harian, kelapa muda segar &amp; makan malam lilin pantai</span>
                    </div>
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: '#b87532', fontWeight: 600 }}>+${180 * nights}</span>
                </div>
              </div>

              {/* Guest Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', textTransform: 'uppercase', fontWeight: 600 }}>
                  Informasi Tamu
                </span>

                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap Anda"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(244, 236, 226, 0.4)',
                    border: '1.5px solid rgba(184, 117, 50, 0.25)',
                    color: '#241d17',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />

                <input
                  type="email"
                  required
                  placeholder="Alamat Email Anda"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(244, 236, 226, 0.4)',
                    border: '1.5px solid rgba(184, 117, 50, 0.25)',
                    color: '#241d17',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Pricing Breakdown & Submit */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(78, 68, 59, 0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#4e443b' }}>
                  <span>{currentVilla.name} ({nights} malam)</span>
                  <span className="font-mono">${basePrice.toLocaleString()}</span>
                </div>

                {includeSeaplane && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#4e443b' }}>
                    <span>Penerbangan Seaplane PP</span>
                    <span className="font-mono">$1,300</span>
                  </div>
                )}

                {includeDiningPackage && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#4e443b' }}>
                    <span>Paket Kuliner Organik</span>
                    <span className="font-mono">${(180 * nights).toLocaleString()}</span>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px dashed rgba(184, 117, 50, 0.35)'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: '#241d17' }}>Perkiraan Total</span>
                  <span className="font-serif" style={{ fontSize: '2rem', fontWeight: 600, color: '#c46d4a' }}>
                    ${totalPrice.toLocaleString()} USD
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-warm-primary"
                  style={{
                    width: '100%',
                    padding: '1.1rem',
                    marginTop: '1.5rem',
                    fontSize: '0.9rem',
                    borderRadius: '12px'
                  }}
                >
                  <Sparkles size={16} />
                  <span>Kirim Permintaan Reservasi</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
