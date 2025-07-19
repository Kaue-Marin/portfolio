import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 'Avançado', color: 'orange', experience: '+2 anos', featured: true},
    { name: 'CSS3', level: 'Avançado', color: 'blue', experience: '+2 anos', featured: true },
    { name: 'JavaScript', level: 'Avançado', color: 'yellow', experience: '+2 anos', featured: true },
    { name: 'Vue.js', level: 'Intermediário', color: 'green',},
    { name: 'React.js', level: 'Avançado', color: 'cyan', experience: '1 ano', featured: true },
    { name: 'PHP', level: 'Intermediário', color: 'purple', },
    { name: 'Laravel', level: 'Intermediário', color: 'red' },
    { name: 'MySQL', level: 'Intermediário', color: 'blue-dark', experience: '+1 ano', featured: true },
    { name: 'Docker', level: 'Básico', color: 'blue-light' },
    { name: 'Git', level: 'Intermediário', color: 'orange-dark', experience: '+2 anos', featured: true },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Tecnologias</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${skill.featured ? 'featured' : ''}`}
            >
              {skill.featured && (
                <div className="skill-badge">
                  <span>{skill.experience}</span>
                </div>
              )}
              
              <div className="skill-content">
                <div className={`skill-icon ${skill.color}`}>
                  <span>{skill.name.slice(0, 2)}</span>
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                
                {!skill.featured && (
                  <p className="skill-experience">{skill.experience}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <div className="learning-badge">
            <div className="status-dot"></div>
            <span>Sempre aprendendo novas tecnologias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;