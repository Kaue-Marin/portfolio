import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-kaue-marin.pdf';
    link.download = 'CV-Kaue-Marin.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Olá, sou{' '}
            <span className="hero-name">Kauê Marin</span>
          </h1>
          
          <p className="hero-subtitle">
            Desenvolvedor Full-stack apaixonado por{' '}
            <span className="hero-highlight">transformar ideias em software</span>
          </p>

          <div className="hero-actions">
            <button onClick={downloadCV} className="btn btn-primary btn-lg">
              <Download size={20} />
              Download CV
            </button>
            
            <button onClick={scrollToContact} className="btn btn-secondary btn-lg">
              <Mail size={20} />
              Entre em Contato
            </button>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Kaue-Marin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/kaue-marin/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;