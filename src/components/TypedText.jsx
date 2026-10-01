import { useEffect, useRef, useState } from 'react';

export default function TypedText({ text, speed = 70, className = '' }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount(c => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text, speed]);

  const typing = started && count < text.length;
  return (
    <span ref={ref} className={className} aria-label={text} style={{ position: 'relative' }}>
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>{text}</span>
      <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}>
        {text.slice(0, count)}
        {typing && <span className="hero-title-cursor" />}
      </span>
    </span>
  );
}
