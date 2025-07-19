import React from 'react';
import { CheckCircle } from 'lucide-react';
import './AvailabilityBadge.css';

const AvailabilityBadge = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="availability-badge">
      <button
        onClick={scrollToContact}
        className="badge-button"
        aria-label="Disponível para oportunidades"
      >
        <div className="badge-icon">
          <CheckCircle size={20} />
          <div className="ping-dot"></div>
        </div>
        <span className="badge-text desktop">
          Disponível para oportunidades
        </span>
        <span className="badge-text mobile">
          Disponível
        </span>
      </button>
    </div>
  );
};

export default AvailabilityBadge;