export default function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-bottom">
          <span>© 2026 RoboRumble · AlgoRhythmLab</span>
          <span className="footer-link" onClick={() => onNavigate('home')}>← Back to Home</span>
        </div>
      </div>
    </footer>
  );
}
