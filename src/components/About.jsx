import React from 'react';
import { Code, GraduationCap, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Sou desenvolvedor full-stack na{' '}
              <span className="highlight">FDC Sistemas</span>{' '}
              (mai/2025 – atual), onde evoluo sistemas legados com{' '}
              <span className="highlight">
                Vue.js, Laravel, Docker, jQuery, PHP, MySQL, Javascript
              </span>.
            </p>
            
            <p className="about-description">
              Técnico em Desenvolvimento de Sistemas (ETEC 2024) e cursando Bacharelado em Sistemas de Informação no{' '}
              <span className="highlight">IFF</span>.{' '}
              Busco desafios que unam front-end E back-end.
            </p>

            <div className="about-cards">
              <div className="about-card primary">
                <Code className="card-icon" />
                <p className="card-label">Full-stack</p>
              </div>
              
              <div className="about-card accent">
                <GraduationCap className="card-icon" />
                <p className="card-label">Sistemas de Informação</p>
              </div>
              
              <div className="about-card success">
                <Briefcase className="card-icon" />
                <p className="card-label">Dev na FDC Sistemas</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="avatar-container">
              <div className="avatar">
                <span className="avatar-text">KM</span>
              </div>
              <p className="avatar-subtitle">Desenvolvedor Full-stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;