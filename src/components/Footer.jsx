import { EVENT_YEAR } from '../constants';

export default function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-bottom">
          <span>© {EVENT_YEAR} RoboRumble · AlgoRhythmLab</span>
          <span className="footer-link" onClick={() => onNavigate('home')}>← Back to Home</span>
        </div>
      </div>
    </footer>
  );
}
