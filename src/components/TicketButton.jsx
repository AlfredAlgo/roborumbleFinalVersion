import { TICKETS_URL } from '../constants';

export default function TicketButton() {
  return (
    <a
      href={TICKETS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary rainbow-glow-btn"
      style={{ textDecoration: 'none', textAlign: 'center', padding: '1.1rem 2.2rem', fontSize: '1.05rem' }}
    >
      <svg className="ticket-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a2.5 2.5 0 0 0 0 5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5a2.5 2.5 0 0 0 0-5V7zm13 .5v2h2v-2h-2zm0 3.5v2h2v-2h-2zm0 3.5v2h2v-2h-2z"/></svg>
      Get your tickets
    </a>
  );
}
