// Import styles
import './styles/index.css';

// Import components
import { createNav, initNav } from './components/Nav.js';
import { createHero, initHero } from './components/Hero.js';
import { createTicker, initTicker } from './components/Ticker.js';
import { createProduct, initProduct } from './components/Product.js';
import { createUsageSteps, initUsageSteps } from './components/UsageSteps.js';
import { createFeatures, initFeatures } from './components/Features.js';
import { createOrderSteps, initOrderSteps } from './components/OrderSteps.js';
import { createPricing, initPricing } from './components/Pricing.js';
import { createTestimonials, initTestimonials } from './components/Testimonials.js';
import { createFAQ, initFAQ } from './components/FAQ.js';
import { createCTA, initCTA } from './components/CTA.js';
import { createFooter, initFooter } from './components/Footer.js';
import { createFormModal, initFormModal } from './components/FormModal.js';
import { createSuccessModal, initSuccessModal } from './components/SuccessModal.js';

// Initialize app — cada componente renderiza seu próprio HTML e depois
// registra seus próprios listeners dentro do próprio init(). Nenhuma
// interação passa por globals em `window`.
function initApp() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${createNav()}
    ${createHero()}
    ${createTicker()}
    ${createProduct()}
    ${createUsageSteps()}
    ${createFeatures()}
    ${createOrderSteps()}
    ${createPricing()}
    ${createTestimonials()}
    ${createFAQ()}
    ${createCTA()}
    ${createFooter()}
    ${createFormModal()}
    ${createSuccessModal()}
  `;

  initNav();
  initHero();
  initTicker();
  initProduct();
  initUsageSteps();
  initFeatures();
  initOrderSteps();
  initPricing();
  initTestimonials();
  initFAQ();
  initCTA();
  initFooter();
  initFormModal();
  initSuccessModal();
}

document.addEventListener('DOMContentLoaded', initApp);
