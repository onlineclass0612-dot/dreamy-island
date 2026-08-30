import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Feather, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <Feather size={24} color="#d3924e" />,
      title: 'Kenyamanan Alami Tanpa Alas Kaki',
      description: 'Tinggalkan jadwal yang padat dan alas kaki Anda. Rasakan kelembutan pasir pantai yang hangat di setiap langkah kaki, dan biarkan irama laut yang tenang menuntun jiwa Anda menuju relaksasi sejati.'
    },
    {
      icon: <Sun size={24} color="#c46d4a" />,
      title: 'Paduan Suara Alam yang Menenangkan',
      description: 'Bangun pagi secara alami diiringi alunan merdu kicauan burung tropis pulau dan bisikan desau ombak yang lembut menyapu tepi pantai yang tenang.'
    },
    {
      icon: <Heart size={24} color="#5b7f73" />,
      title: 'Suaka Intim & Penuh Kehangatan',
      description: 'Hanya tersedia beberapa pondok kayu alami di pulau kecil yang asri ini. Menghadirkan privasi seutuhnya, keheningan yang menyembuhkan, dan kehangatan sambutan yang tulus dari hati.'
    }
  ];

  const headerWords1 = 'Saat Kemewahan Terwujud dalam'.split(' ');
  const headerWords2 = 'Kedamaian & Kehangatan Sejati'.split(' ');

  return (
    <section
      id="sanctuary"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Background Subtle Sunlit Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(230, 184, 125, 0.2) 0%, rgba(196, 109, 74, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04, y: -2 }}
          className="warm-badge"
          style={{ marginBottom: '1.25rem', borderColor: 'rgba(184, 117, 50, 0.4)', color: '#a05c1e', cursor: 'default' }}
        >
          <Sparkles size={13} />
          <span>Filosofi Hidup Santai &amp; Tenang</span>
        </motion.div>

        {/* Staggered Word Reveal Heading */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#1a1410',
            marginBottom: '1.75rem',
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
                color: '#b85a38',
                cursor: 'default'
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.95, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '1.15rem',
            color: '#2b231c',
            lineHeight: 1.85,
            fontWeight: 400
          }}
        >
          Dreamy Island lahir dari sebuah janji tulus: menciptakan tempat berlabuh yang tenang dari hiruk pikuk dunia. 
          Di pulau kecil berpasir putih ini, hari-hari mengalir santai tanpa tergesa-gesa. Nikmati secangkir teh herbal hangat 
          diiringi kicauan burung pagi, membaca buku di bawah keteduhan lambaian kelapa, dan temukan kembali kedamaian jiwa yang paling murni.
        </motion.p>
      </div>

      {/* 3 Emotional Pillars Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="glass-warm-card"
            initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.85, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
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
              <motion.div
                whileHover={{ rotate: 12, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(244, 236, 226, 0.85)',
                  border: '1.5px solid rgba(184, 117, 50, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem'
                }}
              >
                {pillar.icon}
              </motion.div>

              <motion.h3
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#1a1410',
                  marginBottom: '1rem'
                }}
              >
                {pillar.title}
              </motion.h3>

              <p
                style={{
                  fontSize: '0.985rem',
                  color: '#3d332a',
                  lineHeight: 1.8,
                  fontWeight: 400
                }}
              >
                {pillar.description}
              </p>
            </div>

            <div
              className="font-mono"
              style={{
                marginTop: '2.25rem',
                fontSize: '0.7rem',
                color: '#a05c1e',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ width: '8px', height: '2px', backgroundColor: '#d3924e', borderRadius: '1px' }}></span>
              <span>PILAR KETENANGAN 0{index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
