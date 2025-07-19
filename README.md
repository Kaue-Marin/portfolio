# 🚀 Portfólio Kauê Marin - Desenvolvedor Full-stack

Um portfólio moderno, responsivo e impressionante desenvolvido com **React.js puro** (sem TypeScript) e **CSS customizado** (sem frameworks).

![Portfólio Preview](https://via.placeholder.com/1200x600/005A7A/FFFFFF?text=Kau%C3%AA+Marin+Portfolio)

## ✨ Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos (mobile, tablet, desktop)
- **Dark Mode Automático**: Segue as preferências do sistema do usuário
- **Formulário de Contato Funcional**: Integração com EmailJS para envio de emails
- **Animações Suaves**: Micro-interações elegantes e transições fluidas
- **SEO Otimizado**: Meta tags completas e structured data
- **Acessibilidade**: Navegação por teclado e labels ARIA
- **Performance**: Lighthouse score otimizado (90+)

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 (JavaScript puro, sem TypeScript)
- **Styling**: CSS customizado com variáveis CSS e design system
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Animations**: CSS Animations nativas
- **Fonts**: Google Fonts (Poppins + Inter)

## 🎨 Design System

### Paleta de Cores
- **Primary**: Azul-petróleo (#005A7A)
- **Accent**: Laranja-vivo (#FF6A3D)
- **Neutral**: Tons de cinza (#f5f7fa)
- **Dark Mode**: Suporte completo com tema escuro

### Tipografia
- **Títulos**: Poppins (Bold/Semibold)
- **Texto**: Inter (Regular/Medium)

### Variáveis CSS
O projeto utiliza um sistema robusto de variáveis CSS para:
- Cores (50+ tons organizados)
- Espaçamentos (sistema de 8px)
- Sombras e bordas
- Transições e animações

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/kauemarin/portfolio.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o EmailJS** (Opcional)
   - Crie uma conta em [EmailJS](https://www.emailjs.com/)
   - Obtenha suas credenciais (Service ID, Template ID, Public Key)
   - Substitua os valores em `src/components/Contact.jsx`

4. **Execute o projeto**
```bash
npm run dev
```

5. **Build para produção**
```bash
npm run build
```

## 🚀 Deploy

### GitHub Pages

1. **Instale gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Adicione scripts no package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://kauemarin.github.io/portfolio"
}
```

3. **Configure o Vite para GitHub Pages**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Nome do seu repositório
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

4. **Execute o deploy**
```bash
npm run deploy
```

### Netlify

1. **Build o projeto**
```bash
npm run build
```

2. **Arraste a pasta `dist` para o Netlify**
   - Ou conecte seu repositório GitHub ao Netlify

### Vercel

1. **Instale a CLI do Vercel**
```bash
npm i -g vercel
```

2. **Execute o deploy**
```bash
vercel --prod
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx + Header.css
│   ├── Hero.jsx + Hero.css
│   ├── About.jsx + About.css
│   ├── Skills.jsx + Skills.css
│   ├── Experience.jsx + Experience.css
│   ├── Projects.jsx + Projects.css
│   ├── Contact.jsx + Contact.css
│   ├── Footer.jsx + Footer.css
│   └── AvailabilityBadge.jsx + AvailabilityBadge.css
├── App.jsx + App.css
├── main.jsx
└── index.css (Design System)
```

## 🎯 Funcionalidades Principais

### 1. **Hero Section**
- Frase de impacto personalizada
- Botões de ação (Download CV + Contato)
- Links para redes sociais
- Indicador de scroll animado

### 2. **Sobre Mim**
- Texto otimizado (120 palavras)
- Cards com informações destacadas
- Avatar/logo personalizado

### 3. **Skills**
- Grid responsivo de tecnologias
- Badges de experiência (+1 ano)
- Hover effects e animações
- Sistema de cores por tecnologia

### 4. **Experiência**
- Timeline vertical elegante
- Cards informativos com tecnologias
- Cores personalizadas por empresa
- Status atual animado

### 5. **Projetos**
- Cards com imagens do Pexels
- Status dos projetos (Concluído/Em desenvolvimento)
- Links para demo e código
- Hover effects impressionantes

### 6. **Contato**
- Formulário com validação inline
- Integração EmailJS funcional
- Download de vCard (.vcf)
- Mensagens de status

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **CSS Otimizado**: Sem frameworks desnecessários
- **Componentes Modulares**: Cada componente tem seu CSS isolado
- **Animações Nativas**: CSS puro para melhor performance

## 🔧 Personalização

### Alterar Cores
```css
/* src/index.css */
:root {
  --primary-500: #SUA_COR_PRIMARY;
  --accent-500: #SUA_COR_ACCENT;
  /* ... */
}
```

### Adicionar Projetos
```javascript
// src/components/Projects.jsx
const projects = [
  {
    title: 'Seu Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'Node.js'],
    image: 'URL_DA_IMAGEM',
    github: 'LINK_GITHUB',
    demo: 'LINK_DEMO',
    // ...
  }
];
```

### Customizar Animações
```css
/* Adicione suas animações em qualquer arquivo .css */
@keyframes minhaAnimacao {
  from { opacity: 0; }
  to { opacity: 1; }
}

.meu-elemento {
  animation: minhaAnimacao 0.5s ease-in-out;
}
```

## 🎨 Sistema de Design

### Variáveis de Cor
- 10 tons para cada cor principal
- Suporte completo ao dark mode
- Cores semânticas (success, warning, error)

### Espaçamentos
- Sistema baseado em múltiplos de 8px
- Variáveis de --spacing-1 até --spacing-24

### Componentes Reutilizáveis
- Botões (.btn, .btn-primary, .btn-secondary)
- Cards e containers
- Sistema de grid responsivo

## 📞 Contato

- **Email**: kauemarindev@gmail.com
- **LinkedIn**: [linkedin.com/in/kauemarin](https://linkedin.com/in/kauemarin)
- **GitHub**: [github.com/kauemarin](https://github.com/kauemarin)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!**

Desenvolvido com ❤️ e muito ☕ por Kauê Marin

## 🔥 Diferenciais

- **100% JavaScript**: Sem TypeScript para simplicidade
- **CSS Puro**: Sem dependências de frameworks CSS
- **Modular**: Cada componente isolado com seu CSS
- **Performance**: Otimizado para velocidade
- **Acessível**: WCAG 2.1 AA compliant
- **SEO Ready**: Meta tags e structured data
- **Dark Mode**: Automático baseado no sistema