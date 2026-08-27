import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight, Star, Users, Maximize2, Bed, Heart } from 'lucide-react';
import { villasData } from '../../data/villasData';

export default function Villas({ onSelectVilla, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { key: 'All', label: 'Semua Pondok' },
    { key: 'Beachfront', label: 'Tepi Pantai' },
    { key: 'Overwater', label: 'Terapung Laguna' },
    { key: 'Estate', label: 'Bukit Teduh' }
  ];

  const isCardVisible = (villaCat) => {
    return activeCategory === 'All' || activeCategory === villaCat;
  };

  // Cinematic staggered left slide-in & submerged sinking exit variants
  const cardAnimationVariants = {
    hidden: {
      opacity: 0,
      x: -95,
      y: 0,
      scale: 0.94
    },
    staggeredIn: (idx) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 1.05,
        delay: idx * 0.24,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    sinking: {
      opacity: 0,
      y: 110, // Terbenam perlahan ke arah bawah
      x: 0,
      scale: 0.91,
      pointerEvents: 'none',
      transition: {
        duration: 0.85,
        ease: [0.35, 0, 0.15, 1]
      }
    }
  };

  return (
    <section
      id="villas"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '4rem'
        }}
      >
        <div className="warm-badge" style={{ marginBottom: '1.25rem' }}>
          <Heart size={13} />
          <span>Pondok Kayu yang Nyaman &amp; Intim</span>
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#241d17',
            marginBottom: '1.25rem'
          }}
        >
          Pondok Pasir Pantai &amp;{' '}
          <span style={{ fontStyle: 'italic', color: '#c46d4a' }}>
            Suaka Terapung Laguna
          </span>
        </h2>

        <p
          style={{
            maxWidth: '680px',
            fontSize: '1.05rem',
            color: '#4e443b',
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: '2.5rem'
          }}
        >
          Dibangun dari kayu jati alami, anyaman rotan, dan balutan kain linen yang lembut. 
          Setiap pondok dirancang untuk menyambut semilir angin laut dan menghadirkan kedamaian sejati yang menenangkan jiwa.
        </p>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'inline-flex',
            padding: '0.35rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(244, 236, 226, 0.65)',
            border: '1px solid rgba(184, 117, 50, 0.2)',
            gap: '0.35rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: activeCategory === cat.key ? '#d3924e' : 'transparent',
                color: activeCategory === cat.key ? '#ffffff' : '#4e443b',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.03em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat.key ? '0 4px 14px rgba(184, 117, 50, 0.25)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Villas Fixed Grid Container (Holds each villa in its original column position without shifting) */}
      <div
        className="villas-fixed-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          position: 'relative'
        }}
      >
        {villasData.map((villa, idx) => {
          const visible = isCardVisible(villa.category);
          const currentVariant = visible 
            ? (activeCategory === 'All' ? 'staggeredIn' : 'visible') 
            : 'sinking';

          return (
            <motion.div
              key={villa.id}
              custom={idx}
              variants={cardAnimationVariants}
              initial="hidden"
              animate={currentVariant}
              whileHover={visible ? { y: -6 } : {}}
              className="glass-warm-card"
              style={{
                borderRadius: '26px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                border: '1.5px solid rgba(184, 117, 50, 0.3)',
                backgroundColor: 'rgba(255, 253, 249, 0.94)'
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  width: '100%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="villa-card-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Tag & Rating */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 2
                  }}
                >
                  <span className="warm-badge" style={{ backgroundColor: 'rgba(255, 253, 249, 0.92)' }}>
                    {villa.category === 'Beachfront' ? 'Tepi Pasir Pantai' : villa.category === 'Overwater' ? 'Terapung Laguna' : 'Bukit Teduh'}
                  </span>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 253, 249, 0.92)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(184, 117, 50, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      color: '#241d17',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Star size={12} fill="#d3924e" color="#d3924e" />
                    <span>{villa.rating}</span>
                  </div>
                </div>

                {/* Quick View Floating Button */}
                <button
                  onClick={() => onQuickView(villa)}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 253, 249, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(184, 117, 50, 0.3)',
                    color: '#241d17',
                    padding: '0.5rem 0.95rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 2
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d3924e';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 253, 249, 0.92)';
                    e.currentTarget.style.color = '#241d17';
                  }}
                >
                  <Eye size={13} />
                  <span>Lihat Detail</span>
                </button>
              </div>

              {/* Body Specs */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.65rem',
                      fontWeight: 600,
                      color: '#241d17',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {villa.name}
                  </h3>

                  <p
                    className="font-serif"
                    style={{
                      fontStyle: 'italic',
                      color: '#c46d4a',
                      fontSize: '0.95rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {villa.subtitle}
                  </p>

                  {/* Specs Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.8125rem',
                      color: '#7f7266',
                      fontFamily: 'var(--font-mono)',
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid rgba(78,68,59,0.08)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Maximize2 size={14} color="#d3924e" /> {villa.sqm} m²
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Users size={14} color="#d3924e" /> {villa.guests}
                    </span>
                  </div>
                </div>

                {/* Price & Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span className="font-mono" style={{ fontSize: '0.6875rem', color: '#7f7266', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                      Mulai Dari
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                      <span className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 600, color: '#241d17' }}>
                        ${villa.pricePerNight.toLocaleString()}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#7f7266' }}>/ malam</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectVilla(villa.id)}
                    className="btn-warm-primary"
                    style={{
                      padding: '0.65rem 1.35rem',
                      fontSize: '0.8125rem'
                    }}
                  >
                    <span>Pesan Suaka</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .villas-fixed-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .glass-warm-card:hover .villa-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
