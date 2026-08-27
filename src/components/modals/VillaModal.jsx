import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star, Users, Maximize2, Bed, Calendar, Heart, ShieldCheck } from 'lucide-react';

export default function VillaModal({ villa, isOpen, onClose, onBookNow }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock background scroll when modal is open
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

  if (!isOpen || !villa) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(30, 25, 21, 0.65)',
          backdropFilter: 'blur(16px)'
        }}
        onClick={onClose}
      >
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="custom-drawer-scroll"
          style={{
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '28px',
            backgroundColor: '#fffdfa',
            border: '1.5px solid rgba(184, 117, 50, 0.3)',
            boxShadow: '0 30px 80px rgba(50, 35, 22, 0.25)',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(244, 236, 226, 0.8)',
              border: '1px solid rgba(184, 117, 50, 0.2)',
              color: '#241d17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease'
            }}
          >
            <X size={20} />
          </button>

          {/* Modal Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
            
            {/* Gallery Column */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img
                  src={villa.gallery ? villa.gallery[activeImageIndex] : villa.image}
                  alt={villa.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className="warm-badge" style={{ backgroundColor: 'rgba(255, 253, 249, 0.92)' }}>
                    {villa.category === 'Beachfront' ? 'Tepi Pasir Pantai' : villa.category === 'Overwater' ? 'Terapung Laguna' : 'Bukit Teduh'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {villa.gallery && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {villa.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        flex: 1,
                        height: '75px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: activeImageIndex === idx ? '2px solid #d3924e' : '1px solid rgba(78,68,59,0.15)',
                        opacity: activeImageIndex === idx ? 1 : 0.65,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <img src={imgUrl} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}

              {/* Specs Pill Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '0.5rem'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 236, 226, 0.5)',
                    border: '1px solid rgba(184, 117, 50, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <Maximize2 size={16} color="#d3924e" style={{ margin: '0 auto 0.25rem' }} />
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: '#4e443b', display: 'block', fontWeight: 600 }}>
                    {villa.sqm} m²
                  </span>
                </div>

                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 236, 226, 0.5)',
                    border: '1px solid rgba(184, 117, 50, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <Users size={16} color="#d3924e" style={{ margin: '0 auto 0.25rem' }} />
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: '#4e443b', display: 'block', fontWeight: 600 }}>
                    {villa.guests}
                  </span>
                </div>

                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 236, 226, 0.5)',
                    border: '1px solid rgba(184, 117, 50, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <Bed size={16} color="#d3924e" style={{ margin: '0 auto 0.25rem' }} />
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: '#4e443b', display: 'block', fontWeight: 600 }}>
                    {villa.beds}
                  </span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Star size={16} fill="#d3924e" color="#d3924e" />
                  <span className="font-mono" style={{ color: '#b87532', fontSize: '0.85rem', fontWeight: 600 }}>
                    {villa.rating} ({villa.reviewsCount} ulasan tamu terverifikasi)
                  </span>
                </div>

                <h2
                  className="font-serif"
                  style={{
                    fontSize: '2rem',
                    color: '#241d17',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2
                  }}
                >
                  {villa.name}
                </h2>

                <p className="font-serif" style={{ fontStyle: 'italic', color: '#c46d4a', marginBottom: '1.25rem' }}>
                  {villa.subtitle}
                </p>

                <p style={{ color: '#2b231c', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 400 }}>
                  {villa.description}
                </p>

                <h4
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: '#7f7266',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  Keistimewaan &amp; Fasilitas Pondok
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {villa.features.map((feat, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: '#3d332a', fontWeight: 400 }}>
                      <Check size={15} color="#d3924e" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Reservation Action */}
              <div
                style={{
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(78, 68, 59, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <span className="font-mono" style={{ fontSize: '0.6875rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                    Tarif Menginap Per Malam
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <span className="font-serif" style={{ fontSize: '1.85rem', fontWeight: 600, color: '#241d17' }}>
                      ${villa.pricePerNight.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#7f7266' }}>/ malam</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookNow(villa.id);
                  }}
                  className="btn-warm-primary"
                  style={{ padding: '0.9rem 1.75rem' }}
                >
                  <Calendar size={15} />
                  <span>Pesan Suaka Ini</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
