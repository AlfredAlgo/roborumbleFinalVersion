import { useEffect, useState } from 'react';
import { EVENT_DATE_ISO, EVENT_DATE_LABEL } from '../constants';

const EVENT_DATE = new Date(EVENT_DATE_ISO).getTime();

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
    return <div className="countdown-live">The Grand Finale is live — {EVENT_DATE_LABEL}</div>;
  }

  const units = [['Days', t.days], ['Hours', t.hours], ['Minutes', t.minutes], ['Seconds', t.seconds]];
  return (
    <div className="countdown" role="timer" aria-label={`${t.days} days, ${t.hours} hours, ${t.minutes} minutes until ${EVENT_DATE_LABEL}`}>
      {units.map(([label, value]) => (
        <div className="countdown-cell" key={label}>
          <div className="countdown-num">{String(value).padStart(2, '0')}</div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
