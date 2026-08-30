import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Sparkles, Wind, Waves, Feather } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [phraseText, setPhaseText] = useState('Mendengarkan semilir angin fajar & bisikan ombak...');

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 700);
          return 100;
        }
        const step = Math.floor(Math.random() * 3) + 1;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (percent < 28) {
      setPhaseText('Mendengarkan semilir angin fajar & desau ombak...');
    } else if (percent < 58) {
      setPhaseText('Menghangatkan pasir putih & riak air laguna toska...');
    } else if (percent < 88) {
      setPhaseText('Menyiapkan keteduhan suaka & aroma bunga kamboja...');
    } else {
      setPhaseText('Selamat datang di pelukan damai Dreamy Island');
    }
  }, [percent]);

  const emotionPillars = [
    { label: 'Nyaman', delay: 0.1 },
    { label: 'Hangat', delay: 0.2 },
    { label: 'Tenang', delay: 0.3 },
    { label: 'Santai', delay: 0.4 },
    { label: 'Intim', delay: 0.5 },
    { label: 'Alami', delay: 0.6 }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 0.95,
        transition: { duration: 1.1, ease: [0.85, 0, 0.15, 1] }
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
      {/* Background Radiant Sunrise Flare */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 184, 125, 0.45) 0%, rgba(211, 146, 78, 0.18) 40%, rgba(196, 109, 74, 0.06) 65%, transparent 80%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Ambient Light Rays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 40%, transparent 40%, rgba(251, 248, 243, 0.9) 90%)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Center Stage */}
      <div
        style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '700px'
        }}
      >
        {/* Animated Golden Sun & Ripple Emblem */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', marginBottom: '2.5rem' }}
        >
          {/* Rotating Subtle Sunbeam Halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-16px',
              left: '-16px',
              right: '-16px',
              bottom: '-16px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(211, 146, 78, 0.3)',
              pointerEvents: 'none'
            }}
          />

          {/* Pulsing Outer Ripple */}
          <div
            style={{
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '24px',
              backgroundColor: 'rgba(211, 146, 78, 0.12)',
              animation: 'gentlePulse 3s infinite'
            }}
          />

          <div
            style={{
              position: 'relative',
              width: '92px',
              height: '92px',
              borderRadius: '20px',
              backgroundColor: '#fffdfa',
              border: '2px solid rgba(211, 146, 78, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 40px rgba(184, 117, 50, 0.18)',
              color: '#d3924e'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, 8, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sun size={44} strokeWidth={1.8} />
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name with Staggered Letter Reveal */}
        <motion.h1
          className="font-serif"
          initial={{ opacity: 0, y: 15, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.14em' }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.4rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#1a140f',
            marginBottom: '0.75rem',
            lineHeight: 1
          }}
        >
          Dreamy Island
        </motion.h1>

        {/* Subtitle Monogram */}
        <motion.p
          className="font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: '#c46d4a',
            marginBottom: '2rem'
          }}
        >
          Intimate Luxury Coastal Retreat
        </motion.p>

        {/* 6 Emotional Pillars Badge Strip with Sequential Glowing Dots */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem 0.85rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: '#6e5e50',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '3.5rem'
          }}
        >
          {emotionPillars.map((item, idx) => (
            <React.Fragment key={item.label}>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + item.delay }}
                style={{
                  color: percent > (idx + 1) * 16 ? '#b87532' : '#7f7266',
                  transition: 'color 0.4s ease'
                }}
              >
                {item.label}
              </motion.span>
              {idx < emotionPillars.length - 1 && (
                <span style={{ color: 'rgba(211, 146, 78, 0.4)', fontSize: '0.65rem' }}>•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Cinematic Progress Bar & Island Status */}
        <div style={{ width: '320px', maxWidth: '85vw', position: 'relative' }}>
          
          {/* Progress Track */}
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(78, 68, 59, 0.12)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #d3924e 0%, #c46d4a 60%, #5b7f73 100%)',
                width: `${percent}%`,
                borderRadius: '9999px',
                boxShadow: '0 0 12px rgba(211, 146, 78, 0.75)',
                transition: 'width 0.1s linear'
              }}
            />
          </div>

          {/* Real-time Status & Percentage */}
          <div
            className="font-mono"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem',
              fontSize: '0.75rem',
              gap: '1rem'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
                style={{ color: '#7f7266', fontStyle: 'italic', textAlign: 'left', flex: 1 }}
              >
                {phraseText}
              </motion.span>
            </AnimatePresence>

            <span
              style={{
                fontWeight: 700,
                color: '#b87532',
                letterSpacing: '0.08em',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {percent.toString().padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>

      {/* Undulating Ocean Swell Horizon at the Bottom of Splash Screen */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '45px',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '200%',
            height: '100%',
            animation: 'navbarWaveLoop 10s linear infinite'
          }}
        >
          <svg viewBox="0 0 1200 45" preserveAspectRatio="none" style={{ width: '50%', height: '100%' }}>
            <path
              d="M 0,22 Q 75,0 150,22 T 300,22 T 450,22 T 600,22 T 750,22 T 900,22 T 1050,22 T 1200,22"
              fill="none"
              stroke="rgba(211, 146, 78, 0.45)"
              strokeWidth="2.5"
            />
          </svg>
          <svg viewBox="0 0 1200 45" preserveAspectRatio="none" style={{ width: '50%', height: '100%' }}>
            <path
              d="M 0,22 Q 75,0 150,22 T 300,22 T 450,22 T 600,22 T 750,22 T 900,22 T 1050,22 T 1200,22"
              fill="none"
              stroke="rgba(211, 146, 78, 0.45)"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
