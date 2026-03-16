import { useState } from 'react';

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((v) => !v)}>
        {q}
        <span className="faq-arrow">▼</span>
      </div>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}
