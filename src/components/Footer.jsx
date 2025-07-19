import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-name">Kauê Marin</div>
            <p className="brand-description">
              Desenvolvedor Full-stack apaixonado por criar soluções inovadoras e impactantes.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/kauemarin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kauemarin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kauemarindev@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Links Rápidos</h3>
            <ul className="link-list">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="footer-link"
                  >
                    {section === 'about' && 'Sobre Mim'}
                    {section === 'skills' && 'Skills'}
                    {section === 'experience' && 'Experiência'}
                    {section === 'projects' && 'Projetos'}
                    {section === 'contact' && 'Contato'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="section-title">Contato</h3>
            <div className="contact-info">
              <p>📧 kauemarindev@gmail.com</p>
              <p>📍 Brasil (Remoto)</p>
              <p>💼 Disponível para oportunidades</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <span>© {currentYear} Kauê Marin. Feito com</span>
            <Heart size={16} className="heart-icon" />
            <span>e muito café ☕</span>
          </div>
          
          <button onClick={scrollToTop} className="back-to-top">
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;