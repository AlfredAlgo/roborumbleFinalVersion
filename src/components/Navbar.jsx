import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { SUBMISSION_FORM_URL } from '../constants';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'robowars', label: 'Robo Wars' },
  { id: 'grandprix', label: 'Grand Prix' },
  { id: 'drone', label: 'Drone Racing' },
  { id: 'technomania', label: 'Technomania' },
  { id: 'partner', label: 'Partner' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="navbar" style={{ background: scrolled ? 'rgba(6,6,8,.98)' : 'rgba(6,6,8,.92)' }}>
      <div
        onClick={() => handleNav('home')}
        className="nav-logo-stack"
        style={{ cursor: 'pointer' }}
      >
        <img
          src={logoImg}
          alt="Robo-Rumble"
          style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div className={`nav-links${mobileOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <span
            key={l.id}
            className={`nav-link${currentPage === l.id ? ' active' : ''}`}
            onClick={() => handleNav(l.id)}
          >
            {l.label}
          </span>
        ))}
        <a className="nav-register" href={SUBMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" style={{cursor:'pointer',textDecoration:'none'}}>Submit Project</a>
      </div>

      <div className="nav-mobile-btn" onClick={() => setMobileOpen((v) => !v)}>
        <span /><span /><span />
      </div>
    </nav>
  );
}
