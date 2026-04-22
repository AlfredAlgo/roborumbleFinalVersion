import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import droneracingBg from '../assets/droneracing.png';

export default function Drone({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${droneracingBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)'}} />
        <div className="wrap" style={{position:'relative',zIndex:1}}>
          
          <span className="label">Competition Category</span>
          <h1>Navigate the Sky.<br />
            <span className="glitch-dr">Conquer the Course.</span>
          </h1>
          <p>Build and fly an autonomous drone through a 3D racecourse using sensors, vision, and smart decision-making. The fastest, most precise team takes the trophy.</p>
          <div className="event-hero-meta">
            {['Autonomous Flight','Computer Vision','Max 4 Members','12 September 2026'].map(t => (
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
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}>What is Drone Racing?</h2>
              <p className="body" style={{marginBottom:'1rem'}}>RoboRumble's Drone Racing event challenges teams to build and program a drone that can autonomously navigate a 3D obstacle course. No pilot — the drone must see, decide, and fly on its own.</p>
              <p className="body" style={{marginBottom:'1rem'}}>Teams will use computer vision, distance sensors, and flight control algorithms to guide their UAV through gates, around obstacles, and to the finish. Speed matters, but so does precision — crashes and missed gates cost points.</p>
              <p className="body">This category represents the cutting edge of autonomous systems. Teams that excel here will have skills directly applicable to the drone, defence, and logistics industries.</p>
            </div>
            <div>
              <div className="spec-grid">
                {[['Max Dimension','[X] cm diagonal'],['Max Weight','[X] g'],['Control','Fully Autonomous'],['Sensors','Camera / Ultrasonic'],['Power','LiPo Battery'],['Fee','Free']].map(([l,v]) => (
                  <div className="spec-box" key={l}><div className="spec-label">{l}</div><div className="spec-value">{v}</div></div>
                ))}
              </div>
              <div className="highlight-panel" style={{marginTop:'1.5rem'}}>
                <p><strong>The Course:</strong> A 3D indoor course with [X] gates, [X] obstacle zones, and a defined start/finish line. Full course layout is only revealed on competition day. Teams get [X] practice runs before official timing begins.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">Scoring</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1rem'}}>Judging Criteria</h2>
              <div className="criteria-list">
                {[
                  ['40%','Course Completion Time','Fastest clean run from start to finish gate wins this category.'],
                  ['30%','Gate Accuracy','Points for each gate passed cleanly. Missed or clipped gates incur penalties.'],
                  ['20%','Code & Sensor Presentation','Teams explain their autonomous logic, sensor fusion, and flight algorithms to judges.'],
                  ['10%','Build Quality','Mechanical design, component protection, and overall construction standard.'],
                ].map(([p,h,d]) => (
                  <div className="criteria-item" key={h}>
                    <div className="criteria-pct">{p}</div>
                    <div><h4>{h}</h4><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Safety & Rules</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.2rem'}}>Key Requirements</h2>
              <div className="card">
                {[
                  ['Autonomous Only','No manual RC control permitted once the run begins. A kill switch must be present.'],
                  ['Weight Limit','Maximum [X]g total flying weight including battery.'],
                  ['Safety Cage','Propeller guards are mandatory for all competing drones.'],
                  ['Arming Protocol','Drones must follow the official arming/disarming procedure at all times.'],
                  ['Emergency Stop','All drones must have a working kill switch accessible to officials.'],
                ].map(([h,d]) => (
                  <div key={h} style={{marginBottom:'.8rem',paddingBottom:'.8rem',borderBottom:'1px solid var(--border)'}}>
                    <div style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.85rem',color:'var(--white)',marginBottom:'.2rem'}}>{h}</div>
                    <div style={{fontSize:'.85rem',color:'var(--muted)'}}>{d}</div>
                  </div>
                ))}
                <p style={{fontSize:'.8rem',color:'var(--red)',marginTop:'.5rem'}}>Full safety and technical document released via Discord after registration.</p>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="reveal">
            <span className="label">Prizes</span>
            <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>What You're Flying For</h2>
            <div className="prize-grid" style={{gridTemplateColumns:'1fr'}}>
              <div className="prize-card gold" style={{padding:'3rem',textAlign:'center'}}>
                <span className="prize-medal"></span>
                <div className="prize-rank">Overall Winner</div>
                <div className="prize-amount text-yellow">R200,000</div>
                <div className="prize-desc">One winner takes it all — R200,000 cash prize + Trophy + Industry mentorship. Fly your way to the top.</div>
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">How to Enter</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>Register Your Team</h2>
              <div className="steps">
                {[
                  ['01','Register for Free','Complete the free registration form.'],
                  ['02','Select Drone Racing','Choose "Drone Racing" as your category during registration.'],
                  ['03','Join Discord','Connect at discord.gg/aeTpRuPzcb — rules and updates live here.'],
                  ['04','Build & Test','Use the spec document to build your autonomous drone. Test extensively.'],
                  ['05','Fly to Win','Arrive at the University of Limpopo on 12 September 2026. Practice runs available before scoring.'],
                ].map(([n,h,p]) => (
                  <div className="step" key={n}><div className="step-num">{n}</div><div className="step-content"><h4>{h}</h4><p>{p}</p></div></div>
                ))}
              </div>
            </div>
            <div style={{paddingTop:'2.5rem'}}>
              <div className="highlight-panel">
                <p><strong>What to Bring on Competition Day:</strong> Fully built and tested drone, spare propellers and motors, LiPo batteries and fireproof bag, charging equipment, laptop with your code, team ID and proof of registration.</p>
              </div>
              <div style={{marginTop:'2rem'}}>
                <a className="btn-primary" href="https://forms.gle/XYyxtbjueAH4wi759" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Register for Drone Racing</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
