import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import Footer from '../components/Footer';
import { supabase } from '../supabaseClient';

export default function Register({ onNavigate }) {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [country, setCountry] = useState('');
  const requiredFields = ['institution','category','captainFirst','captainLast','captainEmail','captainPhone','captainId','country'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    requiredFields.forEach(name => {
      const el = form.elements[name];
      if (el && !el.value.trim()) newErrors[name] = true;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setSubmitError(null);

    const { error } = await supabase.from('registrations').insert([{
      country:       form.elements['country'].value,
      province:      form.elements['province'] ? form.elements['province'].value || null : null,
      team_name:     form.elements['teamName'].value.trim() || null,
      institution:   form.elements['institution'].value.trim(),
      inst_type:     form.elements['instType'].value || null,
      category:      form.elements['category'].value,
      captain_first: form.elements['captainFirst'].value.trim(),
      captain_last:  form.elements['captainLast'].value.trim(),
      captain_email: form.elements['captainEmail'].value.trim(),
      captain_phone: form.elements['captainPhone'].value.trim(),
      captain_id:    form.elements['captainId'].value.trim(),
      member2_name:  form.elements['member2Name'].value.trim() || null,
      member2_id:    form.elements['member2Id'].value.trim() || null,
      member3_name:  form.elements['member3Name'].value.trim() || null,
      member3_id:    form.elements['member3Id'].value.trim() || null,
      member4_name:  form.elements['member4Name'].value.trim() || null,
      member4_id:    form.elements['member4Id'].value.trim() || null,
      notes:         form.elements['notes'].value.trim() || null,
    }]);

    setLoading(false);

    if (error) {
      setSubmitError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
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
          <button
            onClick={() => onNavigate('home')}
            style={{background:'none',border:'1px solid var(--border)',color:'var(--muted)',fontFamily:'Barlow Condensed, sans-serif',fontWeight:600,fontSize:'.8rem',letterSpacing:'.15em',textTransform:'uppercase',padding:'.5rem 1.2rem',cursor:'pointer',marginBottom:'2rem',display:'inline-flex',alignItems:'center',gap:'.5rem'}}
          >
            ← Back to Home
          </button>
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
                  {/* Country & Province */}
                  <div style={{marginBottom:'2rem'}}>
                    <p style={{fontFamily:'Barlow Condensed, sans-serif',fontWeight:700,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1.2rem'}}>
                      Location
                    </p>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Country *</label>
                        <select className="form-select" name="country" style={inputStyle('country')} onChange={e => { clearError('country'); setCountry(e.target.value); }}>
                          <option value="">Select country</option>
                          <option>South Africa</option>
                          <option>Botswana</option>
                          <option>Zimbabwe</option>
                          <option>Namibia</option>
                          <option>Mozambique</option>
                          <option>Zambia</option>
                          <option>Lesotho</option>
                          <option>Eswatini</option>
                          <option>Other</option>
                        </select>
                      </div>
                      {country === 'South Africa' && (
                        <div className="form-group">
                          <label className="form-label">Province</label>
                          <select className="form-select" name="province">
                            <option value="">Select province</option>
                            <option>Gauteng</option>
                            <option>Western Cape</option>
                            <option>KwaZulu-Natal</option>
                            <option>Eastern Cape</option>
                            <option>Limpopo</option>
                            <option>Mpumalanga</option>
                            <option>North West</option>
                            <option>Free State</option>
                            <option>Northern Cape</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rule-red" />

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
                      Please fill in all required fields marked with *
                    </p>
                  )}

                  {submitError && (
                    <p style={{fontSize:'.85rem',color:'var(--red)',marginBottom:'1rem'}}>{submitError}</p>
                  )}

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Registration →'}
                  </button>
                </form>
              ) : (
                <div className="success-msg visible">
                  <h3>Registration Submitted!</h3>
                  <p>
                    Your team's application has been received. A confirmation email with your team reference number will be sent within 2 business days.
                  </p>
                  <p style={{marginTop:'1rem'}}>
                    All communication and updates will happen on our Discord channel. Join now to get rules, event updates, and connect with other teams:
                  </p>
                  <a
                    href="https://discord.gg/aeTpRuPzcb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{display:'inline-block',marginTop:'1.2rem',textDecoration:'none'}}
                  >
                    Join the Discord →
                  </a>
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
                <h5>Before You Register</h5>
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
                <p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'1rem'}}>For any questions about eligibility, categories, or the registration process, join our Discord — all communication happens there.</p>
                <a
                  href="https://discord.gg/aeTpRuPzcb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{fontSize:'.9rem',color:'var(--red)',textDecoration:'none',fontWeight:600}}
                >
                  discord.gg/aeTpRuPzcb →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
