import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import TicketButton from '../components/TicketButton';
import CountUp from '../components/CountUp';
import Countdown from '../components/Countdown';
import posterImg from '../assets/poster.jpg';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';
import robotwarsBg from '../assets/robotwars.png';
import grandprixBg from '../assets/grandprix.png';
import droneracingBg from '../assets/droneracing.png';
import technomaniaBg from '../assets/technomania.png';
import algoAtWorkLogo from '../assets/algoatwork-logo.jpg';
import { SUBMISSION_FORM_URL } from '../constants';

function FlipCard({ event, onNavigate }) {
  const bgMap = { robowars: robotwarsBg, grandprix: grandprixBg, drone: droneracingBg, technomania: technomaniaBg };
  const bg = bgMap[event.id];
  return (
    <div
      className={`flip-card reveal reveal-delay-${event.delay}`}
      onClick={() => onNavigate(event.id)}
      style={{ perspective: '1000px', cursor: 'pointer', height: '320px' }}
    >
      <style>{`
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1); transform-style: preserve-3d; }
        .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
        .flip-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden; border: 1px solid var(--border); }
        .flip-back { transform: rotateY(180deg); border-color: rgba(232,0,29,0.4); }
        .flip-back::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--red), var(--yellow)); }
      `}</style>
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-face" style={{ background: 'var(--panel)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(6,6,8,0.95) 0%, rgba(6,6,8,0.4) 60%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', zIndex: 1 }}>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1rem', color: 'var(--white)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{event.title}</h3>
            <div className="event-link">Hover to explore →</div>
          </div>
        </div>
        {/* BACK */}
        <div className="flip-face flip-back" style={{ background: 'var(--panel2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1rem', color: 'var(--white)', marginBottom: '.8rem', letterSpacing: '.03em' }}>{event.title}</h3>
            <p style={{ fontSize: '.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{event.desc}</p>
            {event.chips.map(c => <span className="chip" key={c}>{c}</span>)}
            <div className="event-link" style={{ marginTop: '1rem' }}>Learn More →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HERO_TITLE_LINES = [
  { text: "AFRICA'S", cls: 'line1' },
  { text: 'BIGGEST YOUTH', cls: 'line2' },
  { text: 'TECH BATTLE.', cls: 'line1' },
];

function TypedHeroTitle({ lines, speed = 45 }) {
  const totalLength = lines.reduce((sum, l) => sum + l.text.length, 0);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= totalLength) return;
    const timer = setTimeout(() => setTypedCount(c => c + 1), speed);
    return () => clearTimeout(timer);
  }, [typedCount, totalLength, speed]);

  const done = typedCount >= totalLength;
  const offsets = lines.reduce((acc, line) => {
    const prev = acc.length ? acc[acc.length - 1] : 0;
    acc.push(prev + line.text.length);
    return acc;
  }, []);

  return (
    <h1 className="hero-title">
      {lines.map((line, i) => {
        const consumed = i === 0 ? 0 : offsets[i - 1];
        const revealed = Math.max(0, Math.min(line.text.length, typedCount - consumed));
        const isTypingHere = !done && consumed + line.text.length >= typedCount && revealed === typedCount - consumed;
        return (
          <span className={line.cls} key={i}>
            {line.text.slice(0, revealed)}
            {isTypingHere && <span className="hero-title-cursor" />}
          </span>
        );
      })}
    </h1>
  );
}

export default function Home({ onNavigate }) {
  useReveal();

  const events = [
    { id: 'robowars',    title: 'Robo Wars',      desc: 'Engineer a combat-ready robot, step into the arena, and outlast every opponent. Pure mechanics, strategy, and grit under pressure.',          chips: ['Remote Control','Combat','Mechanical Engineering'], delay: '1' },
    { id: 'grandprix',  title: 'RoboGrand Prix',  desc: 'Code an AI-powered autonomous car that reads the track, navigates obstacles, and races to the finish — no human control allowed.',           chips: ['Autonomous','AI / Code','Line Following'],           delay: '2' },
    { id: 'drone',      title: 'Drone Racing',    desc: 'Build and fly an autonomous drone through a 3D racecourse using sensors, vision, and smart decision-making. Fastest and most precise wins.', chips: ['Autonomous Flight','Computer Vision','UAV'],         delay: '1' },
    { id: 'technomania',title: 'Technomania',     desc: 'Tackle a real-world problem using technology. Design, build, and pitch a working solution that can scale beyond the competition.',            chips: ['Innovation','IoT / AI / Robotics'],                  delay: '2' },
  ];

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero pt-nav" style={{ position: 'relative' }}>
        <div className="hero-bg" />
        <div className="hero-lines" />

        {/* Ticket button - top right */}
        <div style={{ position: 'absolute', top: '10.5rem', right: '1.5rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1.75rem' }}>
          <TicketButton />
        </div>

        <div className="wrap">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">Registration Now Open<i className="hero-eyebrow-sep">·</i><b>17 October 2026</b></span>
            </div>
            <TypedHeroTitle lines={HERO_TITLE_LINES} />
            <p className="hero-subtitle">4 Competitions · 1 National Stage · Unlimited Potential</p>
            <div className="hero-meta">
              <span className="hero-meta-item" style={{ '--i': 0 }}>17 October 2026</span>
              <span className="hero-meta-item" style={{ '--i': 1 }}>Klipspruit Sports Center</span>
              <span className="hero-meta-item" style={{ '--i': 2 }}>Schools · TVETs · Universities</span>
              <span className="hero-meta-item" style={{ '--i': 3 }}>Max 4 Members</span>
            </div>
            <div className="hero-btns">
              <a className="btn-primary" href={SUBMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Submit Project — Free</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="wrap">
        <div className="stats-row reveal">
          {[['2600+','Young Innovators'],['4','Competition Categories'],['3','Education Tiers'],['1','National Stage']].map(([n,l]) => (
            <div className="stat-box" key={l}>
              <div className="stat-num"><CountUp value={n} /></div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* POSTER + COUNTDOWN */}
      <section className="section poster-section">
        <div className="wrap">
          <div className="poster-grid">
            <div className="poster-frame reveal">
              <img src={posterImg} alt="RoboRumble STEM Innovation Competition Grand Finale poster, 17 October, Klipspruit Sports Center, Johannesburg" loading="lazy" />
            </div>
            <div className="reveal">
              <span className="label">Grand Finale</span>
              <h2 className="heading poster-title">The Countdown <span className="glitch-battle">Is On</span></h2>
              <p className="body" style={{ marginBottom: '1.8rem' }}>Two machines. One arena. The RoboRumble Grand Finale lands at Klipspruit Sports Center, Johannesburg on 17 October 2026.</p>
              <Countdown />
              <div className="poster-actions">
                <TicketButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section" id="events-section">
        <div className="wrap">
          <div className="section-header reveal">
            <span className="label">Competition Categories</span>
            <h2>Choose Your <span className="glitch-battle">Battle</span></h2>
            <p>Four distinct arenas. One national stage. Every category demands a different kind of mastery — pick the one that matches your team's edge.</p>
          </div>
          <div className="events-grid">
            {events.map(e => <FlipCard key={e.id} event={e} onNavigate={onNavigate} />)}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="mission-grid">
            <div className="reveal">
              <span className="label">Our Mission</span>
              <h2 className="heading" style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', marginBottom: '1rem' }}>
                Built to Ignite Africa's <span className="glitch-battle">Next Generation of Engineers</span>
              </h2>
              <p className="body">RoboRumble was born from a simple belief: Africa's youth have the talent — they just need the arena. We created a continental platform that challenges students to build, code, and compete at the highest level, surrounded by peers who share the same hunger.</p>
              <div className="mission-items">
                {[
                  ['Real-World Skills','Competitions mirror actual engineering challenges in autonomous systems, robotics, and innovation.'],
                  ['Industry Exposure','Bridging the gap between education and real-world employment through hands-on competition.'],
                  ['National Community','Connect with the best young tech minds from schools, TVETs, and universities across the country.'],
                ].map(([h,p], i) => (
                  <div
                    className="mission-item"
                    key={h}
                    style={{ '--i': i }}
                    onMouseMove={e => {
                      const r = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                      e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                    }}
                  >
                    <div className="mission-dot" />
                    <div><h4>{h}</h4><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-visual reveal reveal-delay-1">
              <div className="mission-box">
                <div className="mission-big-num">2026</div>
                <div className="mission-big-text">Inaugural Year</div>
              </div>
              <div className="mission-boxes">
                {[['2600+','Expected Participants'],['4','Competition Tracks'],['3','Institution Types'],['1st','National Event']].map(([n,l]) => (
                  <div className="mission-mini" key={l}>
                    <div className="num">{n}</div>
                    <div className="lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTING PARTNERS */}
      <div className="wrap">
        <div className="sponsors-bar reveal">
          <div className="sponsors-inner">
            <span className="sponsor-label" style={{fontSize:'1rem',letterSpacing:'.2em'}}>Implementing Partners</span>
            <img src={algoAtWorkLogo} alt="AlgoAtWork by algorhythmlab" style={{height:'60px',width:'auto',objectFit:'contain'}} />
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="wrap">
          <div className="section-header reveal">
            <span className="label">How It Works</span>
            <h2>From Registration to the Arena</h2>
            <p>Getting to competition day is straightforward. Here's your path from sign-up to taking the stage.</p>
          </div>
          <div className="three-col">
            {[
              ['01','Register for Free','Complete the team registration form — entry is completely free. One registration covers your entire team of up to 4 members.'],
              ['02','Choose Your Category','Select from Robo Wars, RoboGrand Prix, Drone Racing, or Technomania — one category per team.'],
              ['03','Join Discord','Get access to your category channel for rules, updates, and pre-event communications at discord.gg/aeTpRuPzcb'],
              ['04','Build & Prepare','Use the technical specs and rules to design, build, and test your entry. All builds must comply with category rules.'],
              ['05','Compete','Arrive at Klipspruit Sports Center on 17 October 2026 with your fully built entry, tools, and team ID.'],
              ['06','Win prizes','Category winners will have the chance to win big with epic prizes up for grabs.'],
            ].map(([n,h,p]) => (
              <div
                className={`card reveal process-card${n === '06' ? ' process-final' : ''}`}
                key={n}
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}
              >
                <div className="process-num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ borderTop:'1px solid var(--border)', background:'var(--bg2)' }}>
        <div className="wrap">
          <div className="section-header reveal">
            <span className="label">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="two-col reveal">
            <div>
              {[
                ['Who can enter RoboRumble?', 'Any currently enrolled student at an African school, TVET college, or university. Teams must be from the same institution.'],
                ['How many people per team?', 'Minimum 1, maximum 4 members. All members must be from the same institution. Registration is completely free.'],
                ['Can we enter multiple categories?', 'No — each team may only register for one competition category. However, multiple teams from the same institution can each enter different categories.'],
                ['When is the registration deadline?', 'Registration closes prior to the event on 17 October 2026. Exact deadline will be communicated via Discord and our website.'],
              ].map(([q,a]) => <FaqItem key={q} q={q} a={a} />)}
            </div>
            <div>
              {[
                ['Is registration really free?', 'Yes — entry to RoboRumble 2026 is completely free for all teams. There is no registration fee. Just sign up, pick your category, and compete.'],
                ['What happens after we register?', 'Within 48 hours, you will receive a confirmation email with your team reference number. A Discord invite with your category channel follows in week 1.'],
                ['Where will the event be held?', 'The event will be held at Klipspruit Sports Center on 17 October 2026.'],
                ['What if our robot breaks at the event?', 'You will have access to a pit area between rounds to make repairs. Bring spare parts, tools, and a charging kit.'],
              ].map(([q,a]) => <FaqItem key={q} q={q} a={a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ textAlign:'center', maxWidth:600, margin:'0 auto' }}>
            <span className="label">Ready to Compete?</span>
            <h2 className="heading" style={{ fontSize:'clamp(1.8rem,5vw,3rem)', marginBottom:'1.2rem' }}>
              Your Team. Your Build.<br /><span style={{ color:'var(--red)' }}>One National Stage.</span>
            </h2>
            <p className="body" style={{ marginBottom:'2rem' }}>
              Submissions are now open for 17 October 2026. One winner. One stage.
            </p>
            <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
              <a className="btn-primary" href={SUBMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Submit Project — It's Free</a>
              <span className="btn-outline" onClick={() => onNavigate('partner')}>Become a Partner</span>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
