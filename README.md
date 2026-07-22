# UICard - Premium NFC Card Landing Page

Um projeto modular e responsivo de landing page para cartão NFC premium, construído com Vite e JavaScript vanilla.

## 📁 Estrutura do Projeto

```
projeto/
├── src/
│   ├── components/          # Componentes individuais
│   │   ├── Nav.js          # Navegação e menu mobile
│   │   ├── Hero.js         # Seção hero com card 3D e partículas
│   │   ├── Ticker.js       # Marquee com items de destaque
│   │   ├── HowItWorks.js   # Seção de 4 passos
│   │   ├── Features.js     # Grid de funcionalidades (bento layout)
│   │   ├── Pricing.js      # Seção de planos de preço
│   │   ├── Testimonials.js # Depoimentos de clientes
│   │   ├── FAQ.js          # Perguntas frequentes
│   │   ├── CTA.js          # Call-to-action final
│   │   ├── Footer.js       # Rodapé
│   │   ├── FormModal.js    # Modal de formulário de pedido
│   │   └── SuccessModal.js # Modal de sucesso
│   ├── styles/              # Estilos CSS
│   │   ├── variables.css   # Variáveis CSS (cores, fontes, etc)
│   │   ├── global.css      # Estilos globais e resets
│   │   └── components.css  # Estilos de todos os componentes
│   └── main.js             # Arquivo principal - orquestra componentes
├── index.html              # HTML de entrada (mínimo)
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
└── .gitignore             # Arquivos ignorados pelo git
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

Visualiza a build de produção localmente

## ⚙️ Tecnologias

- **Vite** - Build tool moderno e rápido
- **JavaScript Vanilla** - Sem dependências externas de framework
- **CSS3** - Animações, gradientes, e responsividade
- **HTML5** - Semântica

## 🎨 Componentes

Cada componente é um módulo que exporta:
- `create[ComponentName]()` - Retorna o HTML do componente
- `init[ComponentName]()` - Inicializa interatividades do componente

Exemplo:
```javascript
import { createHero, initHero } from './components/Hero.js';

// Renderizar
const html = createHero();

// Inicializar
initHero();
```

## 📱 Funcionalidades

✅ **Hero com card 3D animado** - Efeito de tilt com mouse
✅ **Partículas animadas** - Canvas com partículas floating
✅ **Marquee ticker** - Items scrollando infinitamente
✅ **Grids responsivos** - Bento layout para features
✅ **Modais de formulário** - Pedido e sucesso
✅ **FAQ com accordion** - Perguntas e respostas expandíveis
✅ **Animações fade-in** - Intersection observer
✅ **Mobile menu** - Hamburger responsivo
✅ **Cálculo de preços** - Com desconto em volume
✅ **Totalmente responsivo** - Mobile, tablet e desktop

## 🎯 Animações Preservadas

- ✅ Partículas flutuantes no Hero
- ✅ Card 3D com tilt do mouse
- ✅ Efeito float do card
- ✅ Marquee infinito do ticker
- ✅ Pulse dos pontos e badges
- ✅ Fade-in ao scroll dos elementos
- ✅ Animações de abertura dos modais
- ✅ Transições suaves em todos os elementos

## 🎯 Estilos Preservados

- ✅ Tema premium dark/gold
- ✅ Gradientes e glassmorphism
- ✅ Tipografia Premium
- ✅ Layout com CSS Grid
- ✅ Responsive design completo
- ✅ Sistema de cores consistente
- ✅ Shadows e depth

## 📝 Notas

- Todos os estilos estão em CSS modular
- As animações são nativas (CSS + Canvas + requestAnimationFrame)
- Sem dependências externas - apenas Vite como dev dependency
- Otimizado para performance e SEO
- Compatível com navegadores modernos

## 🔧 Personalizações

Para personalizar cores, fontes ou variáveis:
- Edite `src/styles/variables.css`

Para adicionar novos componentes:
1. Crie um novo arquivo em `src/components/`
2. Exporte `createNomeComponente()` e `initNomeComponente()`
3. Importe e use em `src/main.js`

---


