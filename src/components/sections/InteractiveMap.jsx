import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Sparkles, ChevronRight, Sun, Heart } from 'lucide-react';
import { mapHotspots } from '../../data/mapHotspots';

export default function InteractiveMap({ onExploreLocation }) {
  const [selectedHotspot, setSelectedHotspot] = useState(mapHotspots[0]);

  const headerWords1 = 'Jelajahi Sudut-Sudut Tenang di'.split(' ');
  const headerWords2 = 'Dreamy Island'.split(' ');

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
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04, y: -2 }}
          className="warm-badge"
          style={{ marginBottom: '1.25rem', cursor: 'default' }}
        >
          <Compass size={13} />
          <span>Geografi Pulau Kecil</span>
        </motion.div>

        {/* Staggered Word Reveal Heading */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#241d17',
            marginBottom: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.28em'
          }}
        >
          {headerWords1.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, color: '#b87532', transition: { duration: 0.2 } }}
              style={{ display: 'inline-block', cursor: 'default' }}
            >
              {word}
            </motion.span>
          ))}

          {headerWords2.map((word, i) => (
            <motion.span
              key={`sub-${i}`}
              initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              style={{
                display: 'inline-block',
                fontStyle: 'italic',
                color: '#c46d4a',
                cursor: 'default'
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.p>
      </div>

      {/* Map Canvas & Interactive Hotspot Display */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="glass-warm-header"
        style={{
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(60, 42, 26, 0.08)',
          backgroundColor: 'rgba(251, 248, 243, 0.95)'
        }}
      >
        {/* Watercolor Styled Lagoon Map Canvas */}
        <div
          style={{
            position: 'relative',
            height: '480px',
            backgroundColor: '#e6ded4',
            overflow: 'hidden'
          }}
        >
          {/* Outer Deep Ocean SVG */}
          <svg
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="deepOceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8db5a6" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#a3c4b7" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7a9e90" stopOpacity="0.5" />
              </linearGradient>

              <radialGradient id="islandSandGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f7f2e9" stopOpacity="1" />
                <stop offset="70%" stopColor="#edd8be" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#dfc3a3" stopOpacity="0.8" />
              </radialGradient>

              <radialGradient id="lagoonGlow" cx="45%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#c3ded3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8db5a6" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ocean Base Layer */}
            <rect width="1000" height="600" fill="url(#deepOceanGrad)" />

            {/* Shimmering Lagoon Shallow Waters */}
            <path
              d="M 120,300 C 180,120 400,80 650,110 C 850,140 920,320 850,460 C 780,560 480,580 260,520 C 140,480 80,400 120,300 Z"
              fill="url(#lagoonGlow)"
            />

            {/* Organic Island Sandbank Contour */}
            <path
              d="M 220,300 C 260,180 440,150 620,170 C 780,190 820,320 760,420 C 700,500 460,510 320,460 C 240,430 190,370 220,300 Z"
              fill="url(#islandSandGrad)"
              stroke="rgba(211, 146, 78, 0.4)"
              strokeWidth="3"
            />

            {/* Lush Palm Grove Center Shape */}
            <path
              d="M 330,300 C 370,230 480,210 570,230 C 660,250 690,330 650,380 C 600,430 450,430 380,400 C 330,380 300,340 330,300 Z"
              fill="rgba(91, 127, 115, 0.28)"
            />
          </svg>

          {/* Compass Rose Accent */}
          <div
            className="font-mono"
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              backgroundColor: 'rgba(255, 253, 249, 0.9)',
              padding: '0.5rem 0.95rem',
              borderRadius: '12px',
              border: '1px solid rgba(184, 117, 50, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: '#241d17'
            }}
          >
            <Compass size={16} color="#d3924e" />
            <span>08°39'S 115°13'E • DREAMY ATOLL</span>
          </div>

          {/* Hotspot Markers */}
          {mapHotspots.map((spot) => {
            const isSelected = selectedHotspot && selectedHotspot.id === spot.id;

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
                whileHover={{ scale: 1.15 }}
              >
                {/* Pulsing Beacon Ring */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isSelected ? '46px' : '34px',
                    height: isSelected ? '46px' : '34px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'rgba(211, 146, 78, 0.35)' : 'rgba(91, 127, 115, 0.25)',
                    animation: 'gentlePulse 3s infinite',
                    pointerEvents: 'none'
                  }}
                />

                {/* Pin Icon Bubble */}
                <div
                  style={{
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#d3924e' : '#ffffff',
                    border: '2px solid #ffffff',
                    boxShadow: '0 4px 14px rgba(60, 42, 26, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#ffffff' : '#241d17',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <MapPin size={16} />
                </div>

                {/* Title Label below pin */}
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: '36px',
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

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onExploreLocation(selectedHotspot)}
                className="btn-warm-secondary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.8125rem' }}
              >
                <span>Jelajahi Lokasi Ini</span>
                <ChevronRight size={14} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
