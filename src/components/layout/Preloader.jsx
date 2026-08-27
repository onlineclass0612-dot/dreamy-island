import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Sparkles, Wind } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [phraseText, setPhaseText] = useState('Mendengarkan semilir angin pagi...');

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 4) + 1;
        return next > 100 ? 100 : next;
      });
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (percent < 35) {
      setPhaseText('Mendengarkan semilir angin pagi...');
    } else if (percent < 75) {
      setPhaseText('Menghangatkan pasir & bisikan deburan ombak...');
    } else {
      setPhaseText('Selamat datang di pelukan damai Dreamy Island');
    }
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 1, ease: [0.85, 0, 0.15, 1] }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#fbf8f3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#241d17',
        overflow: 'hidden'
      }}
    >
      {/* Warm Ambient Sun Glow */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 184, 125, 0.4) 0%, rgba(196, 109, 74, 0.12) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        
        {/* Warm Rising Sun & Palm Monogram */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '2rem' }}
        >
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '16px',
              backgroundColor: '#fffdfa',
              border: '1.5px solid rgba(211, 146, 78, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 30px rgba(184, 117, 50, 0.15)'
            }}
          >
            <Sun size={38} color="#d3924e" style={{ animation: 'gentlePulse 4s infinite' }} />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#241d17',
            marginBottom: '0.5rem'
          }}
        >
          Dreamy Island
        </motion.h1>

        {/* Emotion Tagline */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            color: '#7f7266',
            marginBottom: '2.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          <span>Nyaman</span>
          <span>•</span>
          <span>Hangat</span>
          <span>•</span>
          <span>Tenang</span>
          <span>•</span>
          <span>Santai</span>
          <span>•</span>
          <span>Intim</span>
          <span>•</span>
          <span>Alami</span>
        </div>

        {/* Progress Bar & Number */}
        <div style={{ width: '260px', position: 'relative', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'rgba(78, 68, 59, 0.1)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#d3924e',
                width: `${percent}%`,
                borderRadius: '4px',
                boxShadow: '0 0 10px rgba(211, 146, 78, 0.6)'
              }}
            />
          </div>

          <div
            className="font-mono"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.75rem',
              fontSize: '0.75rem',
              color: '#b87532',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{ color: '#7f7266', fontStyle: 'italic' }}>{phraseText}</span>
            <span style={{ fontWeight: 600 }}>{percent.toString().padStart(2, '0')}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
