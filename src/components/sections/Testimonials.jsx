import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Quote } from 'lucide-react';
import { awardsData } from '../../data/diningData';

export default function Testimonials() {
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
        <div className="warm-badge" style={{ marginBottom: '1.25rem' }}>
          <Heart size={13} />
          <span>Kesan dari Hati</span>
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
          Bisikan dari Mereka yang Menemukan{' '}
          <span style={{ fontStyle: 'italic', color: '#c46d4a' }}>
            Kedamaian
          </span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
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
                  <Star key={i} size={15} fill="#d3924e" color="#d3924e" />
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
