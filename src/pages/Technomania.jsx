import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import technomaniaBg from '../assets/technomania.png';
import { SUBMISSION_FORM_URL } from '../constants';
export default function Technomania({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero" style={{position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${technomaniaBg})`,backgroundSize:'cover',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}} />
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
          <h1>Solve Real Problems.<br />
            <span className="glitch-tech">Build What Matters.</span>
          </h1>
          <p style={{color:"#c0c0d8"}}>Tackle a real-world industry challenge. Design, build, and pitch a working technological solution that addresses a genuine business or social problem. This is where innovation meets industry.</p>
          <div className="event-hero-meta">
            {['Innovation Challenge','IoT / AI / Robotics','Max 4 Members','12 September 2026'].map(t => (
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
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}>What is Technomania?</h2>
              <p className="body" style={{marginBottom:'1rem'}}>Technomania is RoboRumble's innovation challenge — a category that sits at the intersection of technology, engineering, and real-world impact. Teams receive a problem statement and must design, build, and pitch a working prototype solution.</p>
              <p className="body" style={{marginBottom:'1rem'}}>The challenge is open to IoT, AI, robotics, automation, software, or any combination of technologies. Solutions will be judged on technical execution, originality, and the ability to scale beyond the competition.</p>
              <p className="body">Industry engineers will be on hand during the event to engage with teams, ask technical questions, and evaluate real-world applicability.</p>
            </div>
            <div>
              <div className="card" style={{marginBottom:'1.5rem'}}>
                <div style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1rem'}}>Challenge Format</div>
                {[
                  ['Problem Statement','Released at registration. Teams have until competition day to develop their solution.'],
                  ['Solution Type','IoT, AI, robotics, automation, software, hardware, or any combination.'],
                  ['Deliverable','A working prototype + a 5-minute live pitch to judges on the day.'],
                  ['Team Size','1–4 members from the same institution.'],
                  ['Entry Fee','Free — no cost to enter.'],
                ].map(([h,d]) => (
                  <div key={h} style={{marginBottom:'.8rem',paddingBottom:'.8rem',borderBottom:'1px solid var(--border)'}}>
                    <div style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.85rem',color:'var(--white)',marginBottom:'.2rem'}}>{h}</div>
                    <div style={{fontSize:'.85rem',color:'var(--muted)'}}>{d}</div>
                  </div>
                ))}
              </div>
              <div className="info-box">
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
                  <div className="criteria-item" key={h}>
                    <div className="criteria-pct">{p}</div>
                    <div><h4>{h}</h4><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Competition Day</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.2rem'}}>What to Expect</h2>
              <div className="steps" style={{gap:0}}>
                {[
                  ['AM','Setup & Testing','Teams set up their prototype in the Innovation Zone. Final testing allowed.'],
                  ['Mid','Live Pitches','Each team presents their working solution to a panel of industry judges for 5 minutes.'],
                  ['Q&A','Judge Questions','Judges ask technical and strategic questions. Be ready to defend every decision.'],
                  ['PM','Awards','Winners announced at the main stage ceremony.'],
                ].map(([n,h,p]) => (
                  <div className="step" key={n} style={{padding:'.8rem 0'}}>
                    <div className="step-num" style={{fontSize:'1rem',width:'2.5rem'}}>{n}</div>
                    <div className="step-content"><h4 style={{fontSize:'.9rem'}}>{h}</h4><p style={{fontSize:'.82rem'}}>{p}</p></div>
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
                <div className="prize-amount text-yellow">WIN BIG!</div>
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
