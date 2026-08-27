import React, { useState, useEffect } from 'react';
import { Sun, ArrowRight, Check, Heart, Mail, Sparkles } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Makassar', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#201a16',
        borderTop: '1px solid rgba(184, 117, 50, 0.25)',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        overflow: 'hidden',
        color: '#fbf8f3'
      }}
    >
      {/* Giant Editorial Watermark Background */}
      <div
        className="font-serif"
        style={{
          position: 'absolute',
          bottom: '-2vw',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(5rem, 16vw, 17rem)',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.025)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          letterSpacing: '0.05em',
          userSelect: 'none'
        }}
      >
        DREAMY ISLAND
      </div>

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            marginBottom: '5rem'
          }}
        >
          {/* Brand Column & Live Island Clock */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(211, 146, 78, 0.15)',
                  border: '1px solid rgba(211, 146, 78, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d3924e'
                }}
              >
                <Sun size={20} />
              </div>
              <span className="font-serif" style={{ fontSize: '1.5rem', letterSpacing: '0.08em', color: '#fbf8f3' }}>
                Dreamy Island
              </span>
            </div>

            <p style={{ color: '#c5b8ac', fontSize: '0.925rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '340px' }}>
              Sebuah suaka pulau kecil alami tempat laut toska yang tenang berpadu dengan kehangatan pasir putih dan kicauan burung tropis. 
              Dihadirkan untuk kedamaian jiwa dan hidup santai tanpa beban.
            </p>

            {/* Live Clock Widget */}
            <div
              className="font-mono"
              style={{
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(211, 146, 78, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.75rem',
                color: '#e6ded6'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#d3924e', animation: 'gentlePulse 2s infinite' }}></span>
                <span>WITA (UTC+8)</span>
              </div>
              <span style={{ color: '#e6b87d', fontWeight: 600 }}>{time || '14:30:00'}</span>
              <span>27°C SEMILIR MENTARI</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: '0.8125rem',
                color: '#d3924e',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                fontWeight: 600
              }}
            >
              Suaka &amp; Pilihan Pondok
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Pondok Pantai Pasir Putih', 'Pondok Apung Laguna Tenang', 'Pondok Teduh Bukit Palem', 'Meja Lilin Pasir Pantai', 'Spa Terbuka Bunga Kamboja', 'Hammock Pohon Kelapa'].map((item) => (
                <li key={item}>
                  <a
                    href="#villas"
                    style={{
                      color: '#c5b8ac',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fbf8f3')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c5b8ac')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Letters from the Island Newsletter */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: '0.8125rem',
                color: '#d3924e',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              Surat dari Tepian Pantai
            </h4>

            <p style={{ color: '#c5b8ac', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Dapatkan catatan renungan fajar, inspirasi resep alami pulau, dan kabar kehangatan dari pesisir kami.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email pribadi Anda..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    paddingRight: '3rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(211, 146, 78, 0.3)',
                    color: '#fbf8f3',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#d3924e',
                    border: 'none',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              {subscribed && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e6b87d', fontSize: '0.8rem' }}>
                  <Check size={14} />
                  <span>Terima kasih telah menyambut kehangatan surat pulau kami.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: '#a39587'
          }}
        >
          <div className="font-mono">
            © {new Date().getFullYear()} DREAMY ISLAND INTIMATE COASTAL SANCTUARY. SEMUA HAK CIPTA DILINDUNGI.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#a39587', textDecoration: 'none' }}>Privasi</a>
            <a href="#" style={{ color: '#a39587', textDecoration: 'none' }}>Kelestarian Alami</a>
            <a href="#" style={{ color: '#a39587', textDecoration: 'none' }}>Panduan Kedatangan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
