import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import droneracingBg from '../assets/droneracing.png';
import discordLogo from '../assets/discord-logo.webp';

export default function Drone({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${droneracingBg})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label">Competition Category</span>
          <h1>Navigate the Sky.<br />
            <span className="glitch-dr">Conquer the Course.</span>
          </h1>
          <div style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
            <p className="body" style={{ maxWidth: '520px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.75)' }}>
              Details for this category are still being finalised. Check back soon for the full spec, rules, and registration info.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => onNavigate('compete')}>
                ← Return to Available Competitors
              </button>
              
                href="https://discord.gg/aeTpRuPzcb"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '6px',
                  border: '1px solid #5865F2',
                  background: 'transparent',
                  color: '#fff',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#5865F2';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <img src={discordLogo} alt="Discord" style={{ width: '22px', height: '22px', borderRadius: '4px' }} />
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
