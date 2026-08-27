import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Sparkles, ChevronRight, Sun, Heart } from 'lucide-react';
import { mapHotspots } from '../../data/mapHotspots';

export default function InteractiveMap({ onExploreLocation }) {
  const [selectedHotspot, setSelectedHotspot] = useState(mapHotspots[0]);

  return (
    <section
      id="map"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '3.5rem'
        }}
      >
        <div className="warm-badge" style={{ marginBottom: '1.25rem' }}>
          <Compass size={13} />
          <span>Geografi Pulau Kecil</span>
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
          Jelajahi Sudut-Sudut Tenang di{' '}
          <span style={{ fontStyle: 'italic', color: '#c46d4a' }}>
            Dreamy Island
          </span>
        </h2>

        <p
          style={{
            maxWidth: '660px',
            fontSize: '1.05rem',
            color: '#4e443b',
            lineHeight: 1.75,
            fontWeight: 300
          }}
        >
          Sebuah pulau kecil terpencil dengan jalan setapak pasir putih yang lembut, teluk laut yang tenang, 
          dan keteduhan pohon kelapa. Klik pada setiap penanda untuk menemukan kedamaian di setiap sudut pulau.
        </p>
      </div>

      {/* Map Canvas & Interactive Hotspot Display */}
      <div
        className="glass-warm-header"
        style={{
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(80, 55, 30, 0.08)',
          backgroundColor: '#f4ece2'
        }}
      >
        {/* Main Sunlit Coastal Vector Atoll Visual */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '540px',
            background: 'radial-gradient(ellipse at center, #d8eeeb 0%, #c4e4e0 50%, #b0d8d4 100%)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Gentle Water Ripple Patterns */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.35,
              pointerEvents: 'none'
            }}
          >
            <defs>
              <pattern id="warmGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#388087" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#warmGrid)" />
            {/* Soft Tidal Curves */}
            <path
              d="M 120 280 Q 400 140 750 210 T 1200 340"
              fill="none"
              stroke="#5b7f73"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              opacity="0.5"
            />
            <path
              d="M 80 370 Q 500 250 850 330 T 1300 470"
              fill="none"
              stroke="#c46d4a"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          </svg>

          {/* Island Atoll Organic Landmass Silhouette */}
          <svg
            viewBox="0 0 1000 600"
            style={{
              position: 'absolute',
              width: '88%',
              height: '88%',
              filter: 'drop-shadow(0 15px 35px rgba(56, 128, 135, 0.25))',
              pointerEvents: 'none'
            }}
          >
            {/* Outer Warm White Sand Halo */}
            <path
              d="M 220 300 C 180 180, 420 100, 650 140 C 850 180, 920 320, 800 450 C 680 540, 320 520, 220 300 Z"
              fill="#fbf8f3"
              stroke="rgba(211, 146, 78, 0.4)"
              strokeWidth="2"
            />
            {/* Inner Lush Sage Tropical Island Canopy */}
            <path
              d="M 270 300 C 250 220, 430 165, 610 195 C 750 225, 790 335, 715 415 C 615 475, 345 435, 270 300 Z"
              fill="url(#lushCanopyGradient)"
              stroke="#5b7f73"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="lushCanopyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#699285" />
                <stop offset="50%" stopColor="#5b7f73" />
                <stop offset="100%" stopColor="#4a6e62" />
              </linearGradient>
            </defs>
          </svg>

          {/* Warm Compass Indicator */}
          <div
            style={{
              position: 'absolute',
              top: '1.75rem',
              right: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
              opacity: 0.85
            }}
          >
            <Compass size={38} color="#c46d4a" />
            <span className="font-mono" style={{ fontSize: '0.65rem', color: '#b87532', letterSpacing: '0.15em', marginTop: '0.25rem', fontWeight: 600 }}>
              UTARA • SUAKA ALAMI
            </span>
          </div>

          {/* Map Scale & Details */}
          <div
            className="font-mono"
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '2rem',
              fontSize: '0.7rem',
              color: '#4e443b',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              pointerEvents: 'none',
              fontWeight: 500
            }}
          >
            <span>KOORDINAT: 04°12'38"S 129°53'14"E</span>
            <span>TOTAL WILAYAH: 1.8 KM² (100% NYAMAN TANPA ALAS KAKI)</span>
          </div>

          {/* Hotspot Interactive Markers */}
          {mapHotspots.map((spot) => {
            const isSelected = selectedHotspot?.id === spot.id;

            return (
              <motion.div
                key={spot.id}
                onClick={() => setSelectedHotspot(spot)}
                style={{
                  position: 'absolute',
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  zIndex: isSelected ? 20 : 10
                }}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsing Aura */}
                <div
                  style={{
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    top: '-18px',
                    left: '-18px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'rgba(211, 146, 78, 0.45)' : 'rgba(91, 127, 115, 0.3)',
                    animation: 'gentlePulse 2.5s infinite',
                    pointerEvents: 'none'
                  }}
                />

                {/* Center Pin Icon */}
                <div
                  style={{
                    width: isSelected ? '34px' : '28px',
                    height: isSelected ? '34px' : '28px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#d3924e' : '#ffffff',
                    border: isSelected ? '2px solid #ffffff' : '2px solid #d3924e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isSelected ? '0 4px 18px rgba(211, 146, 78, 0.5)' : '0 4px 10px rgba(80,55,30,0.15)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <MapPin size={isSelected ? 16 : 14} color={isSelected ? '#ffffff' : '#b87532'} />
                </div>

                {/* Title Label below pin */}
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    fontSize: '0.6875rem',
                    color: isSelected ? '#241d17' : '#4e443b',
                    backgroundColor: 'rgba(255, 253, 249, 0.95)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    border: isSelected ? '1.5px solid #d3924e' : '1px solid rgba(184, 117, 50, 0.25)',
                    boxShadow: '0 4px 10px rgba(80,55,30,0.08)',
                    fontWeight: isSelected ? 600 : 500
                  }}
                >
                  {spot.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Landmark Detail Card Drawer */}
        <AnimatePresence>
          {selectedHotspot && (
            <motion.div
              key={selectedHotspot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                padding: '1.75rem 2.5rem',
                borderTop: '1px solid rgba(184, 117, 50, 0.15)',
                backgroundColor: 'rgba(255, 253, 249, 0.98)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}
            >
              <div style={{ maxWidth: '650px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <span className="warm-badge">{selectedHotspot.badge}</span>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', fontWeight: 500 }}>
                    {selectedHotspot.category} • {selectedHotspot.distance}
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.65rem',
                    color: '#241d17',
                    marginBottom: '0.35rem'
                  }}
                >
                  {selectedHotspot.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#2b231c', lineHeight: 1.65, fontWeight: 400 }}>
                  {selectedHotspot.description}
                </p>
              </div>

              <button
                onClick={() => onExploreLocation(selectedHotspot)}
                className="btn-warm-secondary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.8125rem' }}
              >
                <span>Jelajahi Lokasi Ini</span>
                <ChevronRight size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
