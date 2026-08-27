import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Feather, Sparkles, Coffee } from 'lucide-react';

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="warm-badge"
          style={{ marginBottom: '1.25rem', borderColor: 'rgba(184, 117, 50, 0.4)', color: '#a05c1e' }}
        >
          <Sparkles size={13} />
          <span>Filosofi Hidup Santai &amp; Tenang</span>
        </motion.div>

        <motion.h2
          className="font-serif"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#1a1410',
            marginBottom: '1.75rem'
          }}
        >
          Saat Kemewahan Terwujud dalam{' '}
          <span style={{ fontStyle: 'italic', color: '#b85a38' }}>
            Kedamaian &amp; Kehangatan Sejati
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
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
              <div
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
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#1a1410',
                  marginBottom: '1rem'
                }}
              >
                {pillar.title}
              </h3>

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
                fontWeight: 600
              }}
            >
              <span>PILAR KETENANGAN 0{index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
