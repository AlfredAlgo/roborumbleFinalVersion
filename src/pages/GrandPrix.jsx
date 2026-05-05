import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import grandprixBg from '../assets/grandprix.png';

export default function GrandPrix({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${grandprixBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)'}} />
        <div className="wrap" style={{position:'relative',zIndex:1}}>
          <span className="label">Competition Category</span>
          <h1>The Beginning of the<br />
            <span className="glitch-gp">Autonomous Era.</span>
          </h1>
          <p style={{color:'#c0c0d8'}}>No driver. No remote. Just pure code, clever engineering, and a miniature vehicle smart enough to navigate a track entirely on its own. Code the car. Win the race.</p>
          <div className="event-hero-meta">
            {['Fully Autonomous','AI / Sensors / Code','Max 4 Members','12 September 2026'].map(t => (
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
                <p><strong>The Track:</strong> Clearly marked lane lines, curves, chicanes, intersections requiring decision logic, and [X] static obstacles placed at undisclosed locations — revealed on competition day only.</p>
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
            <a className="btn-primary" href="https://forms.gle/XYyxtbjueAH4wi759" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Register for Grand Prix</a>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
