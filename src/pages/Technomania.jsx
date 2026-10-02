import { useReveal } from '../hooks/useReveal';
import TicketButton from '../components/TicketButton';
import Footer from '../components/Footer';
import TypedText from '../components/TypedText';
import technomaniaBg from '../assets/technomania.png';
import { SUBMISSION_FORM_URL } from '../constants';
export default function Technomania({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${technomaniaBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(6,6,8,.92) 0%,rgba(6,6,8,.55) 50%,rgba(6,6,8,.45) 100%)'}} />

        {/* Ticket button - top right */}
        <div style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1.75rem' }}>
          <TicketButton />
        </div>

        <div className="wrap" style={{position:'relative',zIndex:1}}>
          
          <span className="label">Competition Category</span>
          <h1>Solve Real Problems.<br />
            <span className="glitch-tech">Build What Matters.</span>
          </h1>
          <p style={{color:"#c0c0d8"}}>Tackle a real-world industry challenge. Design, build, and pitch a working technological solution that addresses a genuine business or social problem. This is where innovation meets industry.</p>
          <div className="event-hero-meta">
            {['Innovation Challenge','IoT / AI / Robotics','Max 4 Members','17 October 2026'].map(t => (
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
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}><TypedText text="What is Technomania?" className="glitch-battle" /></h2>
              <p className="body" style={{marginBottom:'1rem'}}>Technomania is RoboRumble's innovation challenge — a category that sits at the intersection of technology, engineering, and real-world impact. Teams receive a problem statement and must design, build, and pitch a working prototype solution.</p>
              <p className="body" style={{marginBottom:'1rem'}}>The challenge is open to IoT, AI, robotics, automation, software, or any combination of technologies. Solutions will be judged on technical execution, originality, and the ability to scale beyond the competition.</p>
              <p className="body">Industry engineers will be on hand during the event to engage with teams, ask technical questions, and evaluate real-world applicability.</p>
            </div>
            <div>
              <div className="spec-card" style={{marginBottom:'1.5rem'}}>
                <div className="spec-card-title">Challenge Format</div>
                {[
                  ['Problem Statement','Released at registration. Teams have until competition day to develop their solution.'],
                  ['Solution Type','IoT, AI, robotics, automation, software, hardware, or any combination.'],
                  ['Deliverable','A working prototype + a 5-minute live pitch to judges on the day.'],
                  ['Team Size','1–4 members from the same institution.'],
                  ['Entry Fee','Free — no cost to enter.'],
                ].map(([h,d], i) => (
                  <div key={h} className={`spec-row reveal reveal-delay-${i + 1}`}>
                    <div className="spec-title">{h}</div>
                    <div className="spec-desc">{d}</div>
                  </div>
                ))}
              </div>
              <div className="info-box info-box-menace">
                <h5>Industry Challenge</h5>
                <p>Industry engineers set the challenge and judge the solutions. Top teams may receive mentorship and exposure opportunities beyond the competition.</p>
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
                  ['30%','Technical Execution','Does it work? Is the build quality high? Is the code clean and efficient?'],
                  ['25%','Innovation & Originality','How creative and novel is the approach to solving the problem?'],
                  ['25%','Real-World Impact','Can this solution actually be implemented at scale? Does it address the root problem?'],
                  ['20%','Pitch & Presentation','Clarity, confidence, and ability to answer tough questions from industry judges.'],
                ].map(([p,h,d]) => (
                  <div className="criteria-item" key={h} style={{'--pct': p}}>
                    <div className="criteria-pct">{p}</div>
                    <div>
                      <h4>{h}</h4>
                      <p>{d}</p>
                      <div className="criteria-bar"><span /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Competition Day</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.2rem'}}>What to Expect</h2>
              <div className="steps steps-live">
                {[
                  ['AM','Setup & Testing','Teams set up their prototype in the Innovation Zone. Final testing allowed.'],
                  ['Mid','Live Pitches','Each team presents their working solution to a panel of industry judges for 5 minutes.'],
                  ['Q&A','Judge Questions','Judges ask technical and strategic questions. Be ready to defend every decision.'],
                  ['PM','Awards','Winners announced at the main stage ceremony.'],
                ].map(([n,h,p], i) => (
                  <div
                    className="step"
                    key={n}
                    style={{'--i': i}}
                    onMouseMove={e => {
                      const r = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                      e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                    }}
                  >
                    <div className="step-num">{n}</div>
                    <div className="step-content"><h4>{h}</h4><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="rule" />
          <div className="reveal">
            <span className="label">Prizes</span>
            <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>What You're Building For</h2>
            <div className="prize-grid" style={{gridTemplateColumns:'1fr'}}>
              <div className="prize-card gold" style={{padding:'3rem',textAlign:'center'}}>
                <span className="prize-medal"></span>
                <div className="prize-rank">Overall Winner</div>
                <div className="prize-amount text-yellow win-big-glow">WIN BIG!</div>
                <div className="prize-desc">Ignite your next move with epic prizes..</div>
              </div>
            </div>
            <div className="card" style={{marginTop:'1rem',display:'flex',gap:'1rem',alignItems:'center'}}>
              <div>
                <h4 style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,color:'var(--white)',fontSize:'1rem',marginBottom:'.3rem'}}>Best Impact Award</h4>
                <p style={{fontSize:'.9rem',color:'var(--muted)'}}>Awarded to the team whose solution shows the greatest potential for real-world deployment and social or business impact. </p>
              </div>
            </div>
          </div>
          <hr className="rule" />
          <div className="reveal">
            <a className="btn-primary" href={SUBMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Submit Project for Technomania</a>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
