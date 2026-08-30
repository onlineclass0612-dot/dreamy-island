import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Clock, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { diningData } from '../../data/diningData';

export default function Dining({ onBookDining }) {
  const [activeVenue, setActiveVenue] = useState(diningData[0]);

  const headerWords1 = 'Cita Rasa Alami dari Hasil'.split(' ');
  const headerWords2 = 'Laut & Kebun Pulau'.split(' ');

  return (
    <section
      id="dining"
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
          marginBottom: '4rem'
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
          <Utensils size={13} />
          <span>Kuliner Pantai &amp; Kebun Organik</span>
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
            maxWidth: '680px',
            fontSize: '1.05rem',
            color: '#4e443b',
            lineHeight: 1.75,
            fontWeight: 300
          }}
        >
          Dipersiapkan dari buah kelapa segar, rempah alami pulau, dan hasil laut tangkapan nelayan lokal. 
          Nikmati santapan santai bertelanjang kaki di atas pasir pantai dengan pendar lentera rotan yang hangat.
        </motion.p>

        {/* Venue Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '2rem'
          }}
        >
          {diningData.map((venue) => (
            <motion.button
              key={venue.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveVenue(venue)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                border: activeVenue.id === venue.id ? '1px solid #d3924e' : '1px solid rgba(184, 117, 50, 0.2)',
                backgroundColor: activeVenue.id === venue.id ? '#d3924e' : 'rgba(255, 253, 249, 0.85)',
                color: activeVenue.id === venue.id ? '#ffffff' : '#4e443b',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeVenue.id === venue.id ? '0 4px 14px rgba(184, 117, 50, 0.25)' : 'none'
              }}
            >
              {venue.name}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Split-Screen Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="glass-warm-card"
        style={{
          borderRadius: '26px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))'
        }}
      >
        {/* Left: Venue Image */}
        <div
          style={{
            position: 'relative',
            minHeight: '440px',
            overflow: 'hidden'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeVenue.id}
              src={activeVenue.image}
              alt={activeVenue.name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </AnimatePresence>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(36, 29, 23, 0.75) 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: '1.75rem'
            }}
          >
            <span className="warm-badge" style={{ backgroundColor: 'rgba(255, 253, 249, 0.95)', color: '#241d17' }}>
              {activeVenue.atmosphere}
            </span>
          </div>
        </div>

        {/* Right: Venue Information */}
        <div
          style={{
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.75rem',
                color: '#7f7266',
                marginBottom: '1rem',
                fontWeight: 500
              }}
            >
              <span>{activeVenue.cuisine}</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={13} color="#d3924e" /> {activeVenue.hours}
              </span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '2.3rem',
                fontWeight: 600,
                color: '#241d17',
                marginBottom: '0.5rem'
              }}
            >
              {activeVenue.name}
            </h3>

            <p className="font-serif" style={{ fontStyle: 'italic', color: '#c46d4a', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Dihidangkan dengan cinta oleh {activeVenue.chef}
            </p>

            <p style={{ color: '#2b231c', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 400 }}>
              {activeVenue.description}
            </p>

            {/* Signature Dish Callout */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(244, 236, 226, 0.65)',
                border: '1.5px solid rgba(184, 117, 50, 0.25)',
                marginBottom: '2rem'
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  color: '#b87532',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.25rem',
                  fontWeight: 600
                }}
              >
                Sajian Khas Pulau yang Hangat
              </span>
              <p style={{ color: '#241d17', fontSize: '0.925rem', fontWeight: 500 }}>
                "{activeVenue.highlightDish}"
              </p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onBookDining(activeVenue.name)}
            className="btn-warm-primary"
            style={{ alignSelf: 'flex-start' }}
          >
            <span>Pesan Meja Lilin Pantai</span>
            <ChevronRight size={15} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
