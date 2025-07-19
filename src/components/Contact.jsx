import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuração do EmailJS (você precisará configurar sua conta)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kauemarindev@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Kauê Marin
ORG:FDC Sistemas
TITLE:Desenvolvedor Full-stack
EMAIL:kauemarindev@gmail.com
URL:https://kauemarin.dev
NOTE:Desenvolvedor Full-stack especializado em Vue.js, Laravel, Docker e React
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kaue-marin.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="info-title">Informações de Contato</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon email">
                  <Mail size={20} />
                </div>
                <div className="info-content">
                  <p className="info-label">Email</p>
                  <a 
                    href="mailto:kauemarindev@gmail.com"
                    className="info-value"
                  >
                    kauemarindev@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon location">
                  <MapPin size={20} />
                </div>
                <div className="info-content">
                  <p className="info-label">Localização</p>
                  <p className="info-value">Brasil (Remoto)</p>
                </div>
              </div>
            </div>

            {/* Download vCard */}
            <div className="vcard-section">
              <h4 className="vcard-title">Adicionar aos Contatos</h4>
              <p className="vcard-description">
                Baixe meu cartão de visita digital para ter minhas informações sempre à mão.
              </p>
              <button onClick={downloadVCard} className="btn btn-primary">
                <Download size={16} />
                Baixar vCard
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="error-message">
                    <AlertCircle size={16} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="error-message">
                    <AlertCircle size={16} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Sua mensagem..."
                />
                {errors.message && (
                  <p className="error-message">
                    <AlertCircle size={16} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  <CheckCircle size={20} />
                  <span>Sua mensagem foi enviada com sucesso!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  <AlertCircle size={20} />
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;