import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import grandprixBg from '../assets/grandprix.png';
import { SUBMISSION_FORM_URL } from '../constants';

export default function GrandPrix({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${grandprixBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)'}} />

        {/* Discord button - top right */}
        <div style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', zIndex: 2 }}>
          <a
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            Join our Discord
          </a>
        </div>

        <div className="wrap" style={{position:'relative',zIndex:1}}>
          <span className="label">Competition Category</span>
          <h1>The Beginning of the<br />
            <span className="glitch-gp">Autonomous Era.</span>
          </h1>
          <p style={{color:'#c0c0d8'}}>No driver. No remote. Just pure code, clever engineering, and a miniature vehicle smart enough to navigate a track entirely on its own. Code the car. Win the race.</p>
          <div className="event-hero-meta">
            {['Fully Autonomous','AI / Sensors / Code','Max 4 Members','24 October 2026'].map(t => (
              <div className="event-meta-pill" key={t}><span className="dot" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col reveal">
            <div>
              <span className="label">About the Event</span>
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}>What is RoboGrand Prix?</h2>
              <p className="body" style={{marginBottom:'1rem'}}>Autonomous vehicle technology is one of the fastest-growing fields in global industry — and RoboGrand Prix gives South Africa's youth a hands-on runway to master it. Teams engineer miniature cars that navigate a purpose-built race circuit independently using sensors, computer vision, and control algorithms.</p>
              <p className="body" style={{marginBottom:'1rem'}}>This is not about speed alone. Points are earned for stability, accuracy, obstacle avoidance, and clean lap completion. The team that combines engineering precision, efficient code, and smart mechanical design will take the chequered flag.</p>
              <p className="body">Teams must be able to explain their algorithm to judges. Understanding your own code is part of the competition.</p>
            </div>
            <div>
              <div className="spec-grid">
                {[['Max Footprint','50 × 50 cm'],['Max Weight','5kg'],['Control','Fully Auto'],['Power','Battery Only'],['Platforms','Arduino/RPi/STM'],['Fee','Free']].map(([l,v]) => (
                  <div className="spec-box" key={l}><div className="spec-label">{l}</div><div className="spec-value">{v}</div></div>
                ))}
              </div>
              <div className="highlight-panel" style={{marginTop:'1.5rem'}}>
                <p><strong>The Track:</strong> Clearly marked lane lines, curves, chicanes, intersections requiring decision logic, and 4 static obstacles placed at undisclosed locations — revealed on competition day only.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">Scoring</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1rem'}}>Judging Criteria</h2>
              <div className="criteria-list">
                {[['40%','Lap Completion & Speed','Clean laps completed autonomously, ranked by fastest time.'],
                  ['30%','Obstacle Avoidance','Successful navigation around static obstacles without contact.'],
                  ['20%','Code Presentation','Teams explain their algorithm and sensor logic to judges.'],
                  ['10%','Build Quality','Mechanical integrity, component placement, and overall design.'],
                ].map(([p,h,d]) => (
                  <div className="criteria-item" key={h}>
                    <div className="criteria-pct">{p}</div>
                    <div><h4>{h}</h4><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Prizes</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>Podium Prizes</h2>
              <div className="prize-grid" style={{gridTemplateColumns:'1fr'}}>
                <div className="prize-card gold" style={{padding:'3rem',textAlign:'center'}}>
                  <span className="prize-medal"></span>
                  <div className="prize-rank">Overall Winners</div>
                  <div className="prize-amount text-yellow">WIN BIG!</div>
                  <div className="prize-desc">Ignite your next move with epic prizes.</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="reveal">
            <a className="btn-primary" href={SUBMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Submit Project for Grand Prix</a>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
