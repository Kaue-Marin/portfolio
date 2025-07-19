import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'FDC Sistemas',
      position: 'Programador Trainee',
      period: 'Mai 2025 - Atual',
      location: 'Itaperuna/RJ',
      description: [
        'Manutenção e evolução de sistema ERP legado',
        'Correção de bugs e refatoração de código',
  
        'Desenvolvimento com Vue.js, Laravel, PHP e MySQL'
      ],
      technologies: ['Vue.js', 'Laravel', 'Docker', 'PHP', 'MySQL', 'jQuery'],
      companyColor: '#005A7A'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiência Profissional</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Minha jornada profissional e contribuições em projetos reais
          </p>
        </div>

        <div className="timeline">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Dot */}
              <div 
                className="timeline-dot"
                style={{ backgroundColor: exp.companyColor }}
              ></div>

              {/* Content Card */}
              <div className="experience-card">
                <div className="card-header">
                <div className="card-title-section">
                    <h3 className="position-title">{exp.position}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <ExternalLink className="external-link-icon" />
                </div>

                <div className="card-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="description-list">
                  {exp.description.map((item, i) => (
                    <li key={i} className="description-item">
                      <span className="bullet"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Current Status */}
          <div className="timeline-item current">
            <div className="timeline-dot current-dot"></div>
            <div className="current-status">
              <div className="status-badge">
                <div className="status-indicator"></div>
                <span>Atualmente trabalhando na FDC Sistemas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;