import { useReveal } from '../hooks/useReveal';
import TicketButton from '../components/TicketButton';
import Footer from '../components/Footer';
import droneracingBg from '../assets/droneracing.png';

export default function Drone({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${droneracingBg})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)' }} />

        {/* Ticket button - top right */}
        <div style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1.75rem' }}>
          <TicketButton />
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label">Competition Category</span>
          <h1>Navigate the Sky.<br />
            <span className="glitch-dr">Conquer the Course.</span>
          </h1>
          <div style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
            <div className="incoming-panel">
              <div className="incoming-tag"><span className="incoming-dot" />Status: Loading Mission Brief</div>
              <p>
                Details for this category are still being finalised. <b>Check back soon</b> for the full spec, rules, and registration info.
              </p>
              <div className="incoming-bar" aria-hidden="true"><span /></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => onNavigate('compete')}>
                ← Return to Available Competitors
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
