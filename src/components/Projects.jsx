import React from 'react';
import { ExternalLink, Github, Code, Smartphone, ShoppingCart } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Adoção de Pets',
      description: 'Plataforma completa para conectar pets abandonados com famílias. Sistema de busca avançada, perfis detalhados e processo de adoção digital.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Kaue-Marin/adocao-de-pets-tcc',
      demo: '#',
      icon: <Code size={24} />,
      status: 'Em desenvolvimento'
    },
    {
      title: 'Terra do Café - E-commerce',
      description: 'Loja virtual completa para venda de cafés especiais. Carrinho de compras, sistema de pagamento e painel administrativo.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'http://github.com/Kaue-Marin/Terra-Do-Cafe',
      demo: '#',
      icon: <ShoppingCart size={24} />,
      status: 'Concluído'
    },
    {
      title: 'SnapClima - App do Tempo',
      description: 'Aplicativo de previsão do tempo com interface moderna. Geolocalização, mapas interativos e alertas meteorológicos.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Kaue-Marin/Snapclima',
      demo: '#',
      icon: <Smartphone size={24} />,
      status: 'Concluído'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos em Destaque</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Alguns dos projetos que desenvolvi para demonstrar minhas habilidades técnicas
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
                
                {/* Status Badge */}
                <div className="status-badge">
                  <span className={project.status === 'Concluído' ? 'completed' : 'in-progress'}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="project-icon">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                 
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/Kaue-Marin"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Ver mais projetos no GitHub
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;