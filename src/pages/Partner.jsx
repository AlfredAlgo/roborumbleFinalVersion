import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';

const tiers = [
  {
    badge: 'gold', badgeLabel: 'Title Sponsor', price: 'R[X]',
    desc: 'Maximum brand exposure across all competition categories, digital, print, and event collateral. Named naming rights to one competition category.',
    features: [
      'Naming rights to one competition category',
      'Logo on all event branding, banners, and digital',
      'Speaking slot at opening and awards ceremony',
      'Exhibition booth in prime location',
      'Full-page feature in event programme',
      'Social media campaign inclusion',
      'Direct access to top student talent',
      '4 VIP passes + judging panel seat',
    ],
    featured: true,
  },
  {
    badge: 'silver', badgeLabel: 'Gold Partner', price: 'R[X]',
    desc: 'High-visibility partnership with prominent branding across the event and access to the talent pool.',
    features: [
      'Logo on event banners and digital assets',
      'Exhibition booth at the event',
      'Half-page feature in event programme',
      'Social media mention package',
      '2 VIP passes + judging panel opportunity',
      'Post-event talent access report',
    ],
    featured: false,
  },
  {
    badge: 'bronze', badgeLabel: 'Silver Partner', price: 'R[X]',
    desc: 'Solid brand presence and meaningful engagement with South Africa\'s top young engineers.',
    features: [
      'Logo on event programme and website',
      'Branded exhibition table',
      'Social media acknowledgement',
      '2 standard event passes',
      'Access to participant CVs on request',
    ],
    featured: false,
  },
  {
    badge: 'community', badgeLabel: 'Community Partner', price: 'In-Kind',
    desc: 'Contribute products, services, or prizes in exchange for brand recognition and community goodwill.',
    features: [
      'Logo on website and programme',
      'Social media acknowledgement',
      'Product/service featured in event',
      'Community partner certificate',
    ],
    featured: false,
  },
];

export default function Partner({ onNavigate }) {
  useReveal();
  return (
    <div className="page-enter pt-nav">
      <section className="event-hero">
        <div className="event-hero-bg" />
        <div className="wrap">

          <span className="label">Partnerships & Sponsorship</span>
          <h1>Invest in the<br /><span>Next Generation.</span></h1>
          <p>Partner with RoboRumble to put your brand in front of South Africa's most driven young engineers, technologists, and innovators — at exactly the moment they're building their careers.</p>
          <div className="event-hero-meta">
            {['2600+ Students','4 Categories','National Stage','12 September 2026'].map(t => (
              <div className="event-meta-pill" key={t}><span className="dot" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col reveal">
            <div>
              <span className="label">Why Partner With Us</span>
              <h2 className="heading" style={{fontSize:'1.8rem',marginBottom:'1.2rem'}}>Reach Tomorrow's Engineers Today</h2>
              <p className="body" style={{marginBottom:'1rem'}}>RoboRumble is South Africa's premier youth robotics and technology competition. We bring together hundreds of students from schools, TVETs, and universities — all united by a passion for building, coding, and competing.</p>
              <p className="body" style={{marginBottom:'1rem'}}>For sponsors, this is a rare opportunity to engage directly with motivated, technical youth in an environment where your brand is associated with innovation, excellence, and ambition.</p>
              <div className="mission-items" style={{marginTop:'1.5rem'}}>
                {[
                  ['Talent Pipeline','Get direct access to top-performing students across robotics, AI, and engineering.'],
                  ['Brand Association','Align your brand with South Africa\'s leading youth technology platform.'],
                  ['CSI & Skills Development','Meaningful investment that directly supports youth education and employability.'],
                  ['Live Activation','Exhibit, demo, and engage with participants on the day in a high-energy environment.'],
                ].map(([h,p]) => (
                  <div className="mission-item" key={h}>
                    <div className="mission-dot" />
                    <div><h4>{h}</h4><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="mission-box">
                <div className="mission-big-num">2600+</div>
                <div className="mission-big-text">Student Participants</div>
              </div>
              <div className="mission-boxes">
                {[['100+','Teams Competing'],['4','Competition Tracks'],['3','Inst. Types'],['1','National Event']].map(([n,l]) => (
                  <div className="mission-mini" key={l}>
                    <div className="num">{n}</div>
                    <div className="lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="rule" />

          <div className="reveal">
            <span className="label">Sponsorship Tiers</span>
            <h2 className="heading" style={{fontSize:'clamp(1.6rem,4vw,2.2rem)',marginBottom:'2rem'}}>Choose Your Partnership Level</h2>
            <div className="two-col" style={{gap:'1.5rem'}}>
              {tiers.map((t) => (
                <div className={`partner-tier${t.featured ? ' featured' : ''}`} key={t.badgeLabel}>
                  <span className={`tier-badge ${t.badge}`}>{t.badgeLabel}</span>
                  <div className="tier-price">{t.price}</div>
                  <p className="tier-desc">{t.desc}</p>
                  <ul className="tier-features">
                    {t.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="rule" />

          <div className="two-col reveal">
            <div>
              <span className="label">Get In Touch</span>
              <h2 className="heading" style={{fontSize:'1.6rem',marginBottom:'1.2rem'}}>Ready to Partner?</h2>
              <p className="body" style={{marginBottom:'1.5rem'}}>We'd love to discuss a partnership that works for your brand and budget. Custom packages are available for organisations with specific objectives.</p>
              <div className="card" style={{marginBottom:'1rem'}}>
                <p style={{fontSize:'.9rem',color:'var(--text)',marginBottom:'.4rem'}}>info@roborumble.co.za</p>
                <p style={{fontSize:'.9rem',color:'var(--text)',marginBottom:'.4rem'}}>discord.gg/aeTpRuPzcb</p>
                <p style={{fontSize:'.9rem',color:'var(--text)'}}>+27 [XX XXX XXXX]</p>
              </div>
            </div>
            <div style={{paddingTop:'2rem'}}>
              <div className="info-box" style={{marginBottom:'1.5rem'}}>
                <h5>Sponsorship Prospectus</h5>
                <p>A full sponsorship prospectus with detailed reach metrics, audience demographics, and activation ideas is available on request. Contact us to receive it.</p>
              </div>
              <div className="info-box">
                <h5>Deadline</h5>
                <p>Partnership slots are limited and allocated on a first-come basis. Title Sponsor naming rights are exclusive — only one available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
