import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Quote } from 'lucide-react';
import { awardsData } from '../../data/diningData';

export default function Testimonials() {
  const headerWords1 = 'Bisikan dari Mereka yang Menemukan'.split(' ');
  const headerWords2 = 'Kedamaian'.split(' ');

  return (
    <section
      style={{
        padding: '6rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div
        style={{
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
          <Heart size={13} />
          <span>Kesan dari Hati</span>
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
              transition={{ duration: 0.85, delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
      </div>

      {/* Reviews Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {awardsData.map((award, index) => (
          <motion.div
            key={award.source}
            initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.85, delay: index * 0.16, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass-warm-card"
            style={{
              padding: '2.75rem 2.25rem',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              border: '1.5px solid rgba(184, 117, 50, 0.35)',
              backgroundColor: 'rgba(255, 253, 249, 0.94)',
              boxShadow: '0 10px 30px rgba(60, 42, 26, 0.08)'
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + i * 0.08 }}
                  >
                    <Star size={15} fill="#d3924e" color="#d3924e" />
                  </motion.div>
                ))}
              </div>

              <Quote size={32} color="rgba(211, 146, 78, 0.35)" style={{ marginBottom: '1rem' }} />

              <p
                className="font-serif"
                style={{
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: '#241d17',
                  lineHeight: 1.7,
                  marginBottom: '2rem'
                }}
              >
                "{award.quote}"
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(78, 68, 59, 0.1)', paddingTop: '1.25rem' }}>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#c46d4a',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}
              >
                {award.source}
              </span>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: '#7f7266', fontWeight: 500 }}>
                {award.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
