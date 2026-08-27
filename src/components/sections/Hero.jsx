import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, ArrowRight, Wind, Sparkles } from 'lucide-react';
import BookingBar from './BookingBar';

export default function Hero({ onOpenBooking, onExploreVillas }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '7.5rem',
        paddingBottom: '3.5rem',
        zIndex: 10
      }}
    >
      {/* Background Sunlit Coastal Imagery with Warm Ambient Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90"
          alt="Pantai Indah Dreamy Island Pasir Putih dan Laut Tenang"
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%'
          }}
        />

        {/* Warm Sunlight & Coastal Linen Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(251, 248, 243, 0.65) 0%, rgba(251, 248, 243, 0.2) 40%, rgba(251, 248, 243, 0.85) 85%, #fbf8f3 100%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 75% 20%, rgba(230, 184, 125, 0.25) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}
      >
        {/* Warm Status & Gentle Weather Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.75rem'
          }}
        >
          <div className="warm-badge">
            <Sparkles size={12} />
            <span>Kenyamanan Bertelanjang Kaki • Suaka Pulau Kecil Alami</span>
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              color: '#4e443b',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              backgroundColor: 'rgba(255, 253, 249, 0.85)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(184, 117, 50, 0.2)',
              boxShadow: '0 4px 12px rgba(80, 55, 30, 0.04)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Sun size={13} color="#d3924e" /> 27°C Mentari Hangat
            </span>
            <span style={{ color: 'rgba(78,68,59,0.2)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Wind size={13} color="#5b7f73" /> Deburan Ombak Tenang
            </span>
          </div>
        </motion.div>

        {/* Editorial Cozy Headline */}
        <div style={{ maxWidth: '920px' }}>
          <motion.h1
            className="font-serif"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.75rem, 6.8vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#241d17',
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem'
            }}
          >
            Saat Bisikan Hangat{' '}
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#c46d4a'
              }}
            >
              Menyapa Lembutnya Pasir Pantai.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              fontWeight: 300,
              color: '#2e251e',
              lineHeight: 1.8,
              maxWidth: '680px',
              marginBottom: '2.5rem'
            }}
          >
            Sebuah suaka pulau kecil alami yang dilingkupi air laut toska yang tenang, kicauan burung tropis, 
            dan pasir putih yang lembut. Rasakan kenikmatan hidup santai tanpa alas kaki, kehangatan mentari, 
            dan kedamaian sejati yang dihadirkan untuk memulihkan jiwa.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn-warm-primary"
              style={{ padding: '1rem 2.25rem', fontSize: '0.9rem' }}
            >
              <span>Mulai Perjalanan Anda</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreVillas}
              className="btn-warm-secondary"
              style={{ padding: '0.95rem 1.85rem' }}
            >
              <span>Lihat Pilihan Pondok</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Interactive Booking Bar Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 50,
          maxWidth: '1360px',
          margin: '3rem auto 0',
          padding: '0 2rem',
          width: '100%'
        }}
      >
        <BookingBar onOpenBooking={onOpenBooking} />
      </motion.div>
    </section>
  );
}
