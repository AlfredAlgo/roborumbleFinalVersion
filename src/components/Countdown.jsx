import { useEffect, useState } from 'react';

// 17 October 2026, 00:00 South African time
const EVENT_DATE = new Date('2026-10-17T00:00:00+02:00').getTime();

function remaining() {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    diff,
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown() {
  const [t, setT] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.diff === 0) {
    return <div className="countdown-live">The Grand Finale is live — 17 October 2026</div>;
  }

  const units = [['Days', t.days], ['Hours', t.hours], ['Minutes', t.minutes], ['Seconds', t.seconds]];
  return (
    <div className="countdown" role="timer" aria-label={`${t.days} days, ${t.hours} hours, ${t.minutes} minutes until 17 October 2026`}>
      {units.map(([label, value]) => (
        <div className="countdown-cell" key={label}>
          <div className="countdown-num">{String(value).padStart(2, '0')}</div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
