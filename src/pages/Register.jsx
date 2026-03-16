import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';

export default function Register({ onNavigate }) {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const requiredFields = ['institution','category','captainFirst','captainLast','captainEmail','captainPhone','captainId'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    requiredFields.forEach(name => {
      const el = form.elements[name];
      if (el && !el.value.trim()) newErrors[name] = true;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const clearError = (name) => {
    if (errors[name]) setErrors(prev => { const n = {...prev}; delete n[name]; return n; });
  };

  const inputStyle = (name) => ({
    borderColor: errors[name] ? 'var(--red)' : undefined
  });

  return (
    <div className="page-enter pt-nav">
      <section style={{padding:'6rem 0 3rem',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap">
          <span className="label">Team Registration</span>
          <h1 className="heading" style={{fontSize:'clamp(2rem,5vw,3.5rem)',marginBottom:'1rem'}}>
            Register Your Team
          </h1>
          <p style={{fontSize:'1.1rem',color:'var(--muted)',maxWidth:600,lineHeight:1.8}}>
            Secure your team's place at Africa's biggest youth robotics and technology competition. 17 September 2026.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="reg-layout">
            {/* FORM */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Team Info */}
                  <div style={{marginBottom:'2rem'}}>
                    <p style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1.2rem'}}>
                      Team Information
                    </p>
                    <div className="form-group">
                      <label className="form-label">Team Name *</label>
                      <input className="form-input" name="teamName" type="text" placeholder="Your team name" />
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Institution / School *</label>
                        <input className="form-input" name="institution" type="text" placeholder="Institution name"
                          style={inputStyle('institution')} onChange={() => clearError('institution')} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Institution Type *</label>
                        <select className="form-select" name="instType">
                          <option value="">Select type</option>
                          <option>High School</option>
                          <option>TVET College</option>
                          <option>University</option>
                          <option>University of Technology</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Competition Category *</label>
                      <select className="form-select" name="category" style={inputStyle('category')} onChange={() => clearError('category')}>
                        <option value="">Select a category</option>
                        <option>Robo Wars</option>
                        <option>RoboGrand Prix</option>
                        <option>Drone Racing</option>
                        <option>Technomania</option>
                      </select>
                    </div>
                  </div>

                  <div className="rule-red" />

                  {/* Team Captain */}
                  <div style={{marginBottom:'2rem'}}>
                    <p style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1.2rem'}}>
                      Team Captain (Member 1) *
                    </p>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input className="form-input" name="captainFirst" type="text" placeholder="First name"
                          style={inputStyle('captainFirst')} onChange={() => clearError('captainFirst')} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input className="form-input" name="captainLast" type="text" placeholder="Last name"
                          style={inputStyle('captainLast')} onChange={() => clearError('captainLast')} />
                      </div>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input className="form-input" name="captainEmail" type="email" placeholder="email@example.com"
                          style={inputStyle('captainEmail')} onChange={() => clearError('captainEmail')} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input className="form-input" name="captainPhone" type="tel" placeholder="+27 XX XXX XXXX"
                          style={inputStyle('captainPhone')} onChange={() => clearError('captainPhone')} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Student Number / ID</label>
                      <input className="form-input" name="captainId" type="text" placeholder="Student or ID number"
                        style={inputStyle('captainId')} onChange={() => clearError('captainId')} />
                    </div>
                  </div>

                  <div className="rule-red" />

                  {/* Additional Members */}
                  <div style={{marginBottom:'2rem'}}>
                    <p style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1.2rem'}}>
                      Additional Members (up to 3 more)
                    </p>
                    {[2,3,4].map(n => (
                      <div className="form-grid" key={n}>
                        <div className="form-group">
                          <label className="form-label">Member {n} — Full Name</label>
                          <input className="form-input" name={`member${n}Name`} type="text" placeholder={n === 2 ? 'Full name' : 'Full name (optional)'} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Member {n} — Student No.</label>
                          <input className="form-input" name={`member${n}Id`} type="text" placeholder="Student / ID number" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rule-red" />

                  <div className="form-group">
                    <label className="form-label">Anything else we should know? (Optional)</label>
                    <textarea className="form-textarea" name="notes" placeholder="e.g. accessibility requirements, special considerations..." />
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <p style={{fontSize:'.85rem',color:'var(--red)',marginBottom:'1rem'}}>
                      ⚠ Please fill in all required fields marked with *
                    </p>
                  )}

                  <button type="submit" className="form-submit">Submit Registration →</button>
                </form>
              ) : (
                <div className="success-msg visible">
                  <div className="icon">🚀</div>
                  <h3>Registration Submitted!</h3>
                  <p>
                    Your team's application has been received. A confirmation email with payment details and your team reference number will be sent within 2 business days.<br /><br />
                    Next step: Join the Discord at <strong style={{color:'var(--red)'}}>discord.gg/aeTpRuPzcb</strong> to get all event updates, rules, and pre-event communications.
                  </p>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="reg-sidebar">
              <div className="reg-summary">
                <div className="reg-fee">
                  <div style={{fontSize:'2rem',fontFamily:'Barlow Condensed, sans-serif',fontWeight:900,color:'var(--red)',letterSpacing:'.05em'}}>FREE</div>
                  <div style={{fontSize:'.8rem',color:'var(--muted)',marginTop:'.2rem'}}>Per Team · Completely Free</div>
                </div>
                <h4>Your Fee Includes:</h4>
                <ul className="reg-checklist">
                  {[
                    'Official registration & team confirmation',
                    'Access to all event areas on competition day',
                    'Team participation pack',
                    'Eligibility for all category prizes',
                    'Certificate of participation per member',
                  ].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>

              <div className="info-box" style={{marginBottom:'1.5rem'}}>
                <h5>⚠️ Before You Register</h5>
                <p>All team members must be currently enrolled students at the same institution. Maximum 4 members per team. Registration is completely free — no payment required.</p>
              </div>

              <div className="card" style={{marginBottom:'1.5rem'}}>
                <h4 style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.85rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1rem'}}>After Registration</h4>
                <div className="steps" style={{gap:0}}>
                  {[['48h','Confirmation Email','Team reference number + payment details'],
                    ['Wk1','Discord Invite','Category channel + community access'],
                    ['4wk','Rules + Track Specs','All technical documents released'],
                    ['17 Sep','Competition Day','Arrive at University of Limpopo · 17 September 2026'],
                  ].map(([n,h,p]) => (
                    <div className="step" key={n} style={{padding:'.8rem 0'}}>
                      <div className="step-num" style={{fontSize:'1rem',width:'2rem'}}>{n}</div>
                      <div className="step-content">
                        <h4 style={{fontSize:'.9rem'}}>{h}</h4>
                        <p style={{fontSize:'.82rem'}}>{p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h4 style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.85rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1rem'}}>Need Help?</h4>
                <p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'1rem'}}>Questions about eligibility, categories, or the registration process:</p>
                <p style={{fontSize:'.9rem',color:'var(--text)',marginBottom:'.4rem'}}>📧 info@roborumble.co.za</p>
                <p style={{fontSize:'.9rem',color:'var(--text)',marginBottom:'.4rem'}}>💬 discord.gg/aeTpRuPzcb</p>
                <p style={{fontSize:'.9rem',color:'var(--text)'}}>📱 +27 [XX XXX XXXX]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
