import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, Sun, Heart } from 'lucide-react';
import { experiencesData } from '../../data/experiencesData';

export default function Experiences({ onOpenInquiry }) {
  return (
    <section
      id="experiences"
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
          <Sun size={13} />
          <span>Momen Santai &amp; Intim di Pulau</span>
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
          Hari-Hari yang Mengalir Santai &amp;{' '}
          <span style={{ fontStyle: 'italic', color: '#c46d4a' }}>
            Keheningan Alami
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
          Dari meditasi fajar yang ditemani kicauan burung tropis hingga kehangatan api unggun kayu apung di bawah langit berbintang, 
          setiap momen mengajak Anda untuk berhenti sejenak, bernapas lega, dan merasakan ketenangan sejati.
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.75rem'
        }}
      >
        {experiencesData.map((exp, idx) => {
          const isLarge = idx === 0 || idx === 3;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="glass-warm-card"
              style={{
                gridColumn: isLarge ? 'span 7' : 'span 5',
                position: 'relative',
                minHeight: '380px',
                borderRadius: '26px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2.5rem',
                cursor: 'pointer'
              }}
              onClick={() => onOpenInquiry(exp.title)}
            >
              {/* Background Image Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(36, 29, 23, 0.1) 0%, rgba(36, 29, 23, 0.5) 45%, rgba(36, 29, 23, 0.92) 100%)'
                  }}
                />
              </div>

              {/* Content Overlay */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <span className="warm-badge" style={{ backgroundColor: 'rgba(255, 253, 249, 0.95)', color: '#b87532' }}>
                    {exp.tag}
                  </span>
                  <div
                    className="font-mono"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      color: '#fbf8f3',
                      backgroundColor: 'rgba(36, 29, 23, 0.65)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px'
                    }}
                  >
                    <Clock size={12} color="#d3924e" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.3vw, 1.75rem)',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.6rem',
                    lineHeight: 1.25
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#f4ece2',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    fontWeight: 300,
                    maxWidth: '560px'
                  }}
                >
                  {exp.description}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    color: '#e6b87d',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  <span>Nikmati Momen Ini</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 960px) {
          #experiences .glass-warm-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
