import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Clock, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { diningData } from '../../data/diningData';

export default function Dining({ onBookDining }) {
  const [activeVenue, setActiveVenue] = useState(diningData[0]);

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
        <div className="warm-badge" style={{ marginBottom: '1.25rem' }}>
          <Utensils size={13} />
          <span>Kuliner Pantai &amp; Kebun Organik</span>
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
          Cita Rasa Alami dari Hasil{' '}
          <span style={{ fontStyle: 'italic', color: '#c46d4a' }}>
            Laut &amp; Kebun Pulau
          </span>
        </h2>

        <p
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
        </p>

        {/* Venue Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '2rem'
          }}
        >
          {diningData.map((venue) => (
            <button
              key={venue.id}
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
            </button>
          ))}
        </div>
      </div>

      {/* Split-Screen Showcase */}
      <div
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
            <div
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
            </div>
          </div>

          <button
            onClick={() => onBookDining(activeVenue.name)}
            className="btn-warm-primary"
            style={{ alignSelf: 'flex-start' }}
          >
            <span>Pesan Meja Lilin Pantai</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
