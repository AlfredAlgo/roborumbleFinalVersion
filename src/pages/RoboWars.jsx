import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';
import robotwarsBg from '../assets/robotwars.png';

export default function RoboWars({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${robotwarsBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)'}} />
        <div className="wrap" style={{position:'relative',zIndex:1}}>
          
          <span className="label">Competition Category</span>
          <h1>Enter the Arena.<br />
            <span style={{
              display:'inline-block',
              animation:'roboGlitch 4s infinite',
            }}>Build to Destroy.</span>
          </h1>

          <div className="event-hero-meta">
            {['Remote Control','Combat Arena','Max 4 Members','12 September 2026'].map(t => (
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
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}>What is Robo Wars?</h2>
              <p className="body" style={{marginBottom:'1rem'}}>Robo Wars is a remote-controlled combat robotics competition where teams build machines designed to outmanoeuvre, out-hit, and outlast opponents in a physical arena. This is mechanical engineering at its most raw.</p>
              <p className="body" style={{marginBottom:'1rem'}}>Teams are responsible for the full design and build of their robot, within strict weight and size constraints. The arena is unforgiving — robots that aren't built tough will not survive.</p>
              <p className="body">Points are won through arena combat and a technical judging session where teams explain their design choices to a panel of industry engineers.</p>
            </div>
            <div>
              <div className="spec-grid">
                {[['Max Footprint','50 × 50 cm'],['Max Weight','10 kg'],['Control','Remote / RC'],['Weapons','Allowed'],['Power','Battery Only'],['Fee','Free']].map(([l,v]) => (
                  <div className="spec-box" key={l}><div className="spec-label">{l}</div><div className="spec-value">{v}</div></div>
                ))}
              </div>
              <div className="highlight-panel" style={{marginTop:'1.5rem'}}>
                <p><strong>Arena Format:</strong> Single-elimination bracket. Each match is [X] minutes. Robots that are immobilised, pushed out of bounds, or fully destroyed lose the match. Judges may award points for aggression and control.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">Scoring</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1rem'}}>Judging Criteria</h2>
              <div className="criteria-list">
                {[['50%','Combat Performance','Matches won, damage inflicted, survival time, aggression shown in the arena.'],
                  ['30%','Design & Engineering','Structural integrity, innovation, weapon effectiveness, quality of build.'],
                  ['20%','Presentation','Team ability to explain and defend design decisions to the judging panel.'],
                ].map(([p,h,d]) => (
                  <div className="criteria-item" key={h}>
                    <div className="criteria-pct">{p}</div>
                    <div><h4>{h}</h4><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Robot Rules Summary</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.2rem'}}>Build Requirements</h2>
              <div className="card" style={{marginBottom:'1rem'}}>
                {[['Weight Limit','Maximum  5kg fully assembled including battery.'],
                  ['Footprint','Must fit within a 50 × 50 cm starting box.'],
                  ['Power','Battery-powered only. LiPo batteries must be in a fireproof bag.'],
                  ['Weapons','Active weapons are permitted within defined safe limits. No projectiles.'],
                  ['Remote Control','2.4GHz RC systems only. No autonomous control permitted.'],
                ].map(([h,d]) => (
                  <div key={h} style={{marginBottom:'.8rem',paddingBottom:'.8rem',borderBottom:'1px solid var(--border)'}}>
                    <div style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.85rem',color:'var(--white)',marginBottom:'.2rem'}}>{h}</div>
                    <div style={{fontSize:'.85rem',color:'var(--muted)'}}>{d}</div>
                  </div>
                ))}
                <p style={{fontSize:'.8rem',color:'var(--red)',marginTop:'.5rem'}}>Full technical document released via Discord after registration.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="reveal">
            <span className="label">Prizes</span>
            <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>What You're Fighting For</h2>
            <div className="prize-grid" style={{gridTemplateColumns:'1fr'}}>
              <div className="prize-card gold" style={{padding:'3rem',textAlign:'center'}}>
                <span className="prize-medal"></span>
                <div className="prize-rank">Overall Winner</div>
                <div className="prize-amount text-yellow">WIN BIG!</div>
                <div className="prize-desc">Ignite your next move with epic prizes.</div>
              </div>
            </div>
            <div className="card" style={{marginTop:'1rem',display:'flex',gap:'1rem',alignItems:'center'}}>
              <div>
                <h4 style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,color:'var(--white)',fontSize:'1rem',marginBottom:'.3rem'}}>Best Design Award</h4>
                <p style={{fontSize:'.9rem',color:'var(--muted)'}}>Awarded to the team with the most innovative and well-engineered robot, regardless of combat result. Judged by industry engineers.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">How to Enter</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>Register Your Team</h2>
              <div className="steps">
                {[['01','Register for Free','Complete the free registration form.'],
                  ['02','Select Robo Wars','Choose "Robo Wars" as your competition category during registration.'],
                  ['03','Join Discord','Connect at discord.gg/aeTpRuPzcb for all updates and rules.'],
                  ['04','Read the Rules','Download the full technical specification and ensure your robot complies.'],
                  ['05','Build & Compete','Start early. Great robots take time. The arena opens 12 September 2026.'],
                ].map(([n,h,p]) => (
                  <div className="step" key={n}><div className="step-num">{n}</div><div className="step-content"><h4>{h}</h4><p>{p}</p></div></div>
                ))}
              </div>
            </div>
            <div style={{paddingTop:'2.5rem'}}>
              <div className="highlight-panel">
                <p><strong>What to Bring on Competition Day:</strong> Fully assembled robot, all tools and spare parts for pit repairs, LiPo charging equipment and fireproof bag, team ID, and proof of registration. Matching team T-shirts are encouraged.</p>
              </div>
              <div style={{marginTop:'2rem'}}>
                <a className="btn-primary" href="https://forms.gle/XYyxtbjueAH4wi759" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Register for Robo Wars</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
