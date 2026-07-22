// Import styles
import './styles/global.css';
import './styles/components.css';

// Import components
import { createNav, initNav, toggleMenu } from './components/Nav.js';
import { createHero, initHero } from './components/Hero.js';
import { createTicker, initTicker } from './components/Ticker.js';
import { createHowItWorks, initHowItWorks } from './components/HowItWorks.js';
import { createFeatures, initFeatures } from './components/Features.js';
import { createPricing, initPricing } from './components/Pricing.js';
import { createTestimonials, initTestimonials } from './components/Testimonials.js';
import { createFAQ, initFAQ } from './components/FAQ.js';
import { createCTA, initCTA } from './components/CTA.js';
import { createFooter, initFooter } from './components/Footer.js';
import { createFormModal, initFormModal } from './components/FormModal.js';
import { createSuccessModal, initSuccessModal } from './components/SuccessModal.js';
import { orderSchema } from './lib/orderSchema.js';
import { submitOrderToApi } from './lib/orderApi.js';

// Initialize app
function initApp() {
  const app = document.getElementById('app');

  // Render all components
  app.innerHTML = `
    ${createNav()}
    ${createHero()}
    ${createTicker()}
    ${createHowItWorks()}
    ${createFeatures()}
    ${createPricing()}
    ${createTestimonials()}
    ${createFAQ()}
    ${createCTA()}
    ${createFooter()}
    ${createFormModal()}
    ${createSuccessModal()}
  `;

  // Initialize all components
  initNav();
  initHero();
  initTicker();
  initHowItWorks();
  initFeatures();
  initPricing();
  initTestimonials();
  initFAQ();
  initCTA();
  initFooter();
  initFormModal();
  initSuccessModal();

  // Initialize intersection observer for animations
  initObserver();

  // Initialize form modal functions
  initFormFunctions();
}

// Intersection Observer for fade-in animations
function initObserver() {
  const targets = document.querySelectorAll('.feat-card, .step, .plan-card, .testimonial, .faq-item');
  targets.forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => obs.observe(el));
}

// Form modal functions
function initFormFunctions() {
  const planMap = {
    individual: { val: '149', label: 'Individual — R$ 149' },
    business: { val: '250', label: 'Business — R$ 250' },
    enterprise: { val: '899', label: 'Enterprise — R$ 899' },
  };

  const sidebarLabels = {
    '149': 'Individual · R$ 149',
    '250': 'Business · R$ 250',
    '899': 'Enterprise · R$ 899'
  };

  const planNames = {
    '149': 'Individual',
    '250': 'Business',
    '899': 'Enterprise (10 cartões)'
  };

  // Global functions
  window.openFmo = function (plan) {
    document.getElementById('fmo').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (plan && planMap[plan]) {
      document.getElementById('f-plano').value = planMap[plan].val;
      calcTotal();
    }
  };

  window.closeFmo = function () {
    document.getElementById('fmo').classList.remove('open');
    document.body.style.overflow = '';
  };

  window.handleFmoClick = function (e) {
    if (e.target === document.getElementById('fmo')) closeFmo();
  };

  // ── Máscara de telefone BR: (11) 99999-9999 / (11) 9999-9999 ─────────────
  function applyPhoneMask(value) {
    // Remove tudo que não for dígito
    const digits = value.replace(/\D/g, '').slice(0, 11);
    const len = digits.length;

    if (len === 0) return '';
    if (len <= 2)  return `(${digits}`;
    if (len <= 6)  return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    if (len <= 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
    // 11 dígitos → celular com 9 na frente
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  }

  (function initPhoneMask() {
    const input = document.getElementById('f-whats');
    if (!input) return;

    input.setAttribute('maxlength', '16');
    input.setAttribute('inputmode', 'numeric');

    input.addEventListener('input', function (e) {
      const pos = this.selectionStart;
      const prevLen = this.value.length;
      this.value = applyPhoneMask(this.value);
      // Reposiciona o cursor ajustado pela diferença de tamanho
      const diff = this.value.length - prevLen;
      this.setSelectionRange(pos + diff, pos + diff);
    });

    input.addEventListener('keydown', function (e) {
      // Permite backspace apagar um char "real" mesmo sobre separador
      if (e.key === 'Backspace') {
        const pos = this.selectionStart;
        if (pos > 0 && this.selectionStart === this.selectionEnd) {
          // Se o char anterior for separador, apaga dois chars
          const prev = this.value[pos - 1];
          if (!/\d/.test(prev)) {
            this.value = this.value.slice(0, pos - 1) + this.value.slice(pos);
            this.value = applyPhoneMask(this.value);
            e.preventDefault();
          }
        }
      }
    });

    input.addEventListener('paste', function (e) {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text');
      this.value = applyPhoneMask(pasted);
    });
  })();

  // Quantity and pricing
  let qty = 0;

  window.changeQty = function (d) {
    qty = Math.max(0, qty + d);
    document.getElementById('qty-display').textContent = qty;
    calcTotal();
  };

  function getUnitPrice() {
    const planVal = document.getElementById('f-plano').value;
    const isEnterprise = planVal === '899';
    const threshold = isEnterprise ? 10 : 5;
    return qty >= threshold ? 25 : 89;
  }

  window.calcTotal = function () {
    const sel = document.getElementById('f-plano');
    const planVal = parseInt(sel.value) || 0;
    const unitPrice = getUnitPrice();
    const addVal = qty * unitPrice;
    const total = planVal + addVal;
    const summary = document.getElementById('summary');
    const bulkHint = document.getElementById('bulk-hint');
    const addPriceLabel = document.getElementById('add-price-label');

    // Unit price label
    const planVal2 = document.getElementById('f-plano').value;
    const isEnt = planVal2 === '899';
    const threshold = isEnt ? 10 : 5;
    const unitPrice2 = qty >= threshold ? 25 : 89;
    const discountActive = qty >= threshold;
    addPriceLabel.textContent = discountActive
      ? '(R$ 25 / un — desconto de volume aplicado!)'
      : `(R$ 89 / un | a partir de ${threshold} un: R$ 25)`;
    addPriceLabel.style.color = discountActive ? '#34D399' : 'var(--gold)';

    // Bulk hint
    if (bulkHint) {
      bulkHint.style.display = discountActive ? 'flex' : 'none';
    }

    // Sidebar
    document.getElementById('sidebar-plan').textContent = planVal ? sidebarLabels[sel.value] : '—';

    if (!planVal) {
      summary.style.display = 'none';
      return;
    }
    summary.style.display = 'block';

    document.getElementById('s-plano-label').textContent = planNames[sel.value];
    document.getElementById('s-plano-val').textContent = `R$ ${planVal.toLocaleString('pt-BR')}`;

    const addRow = document.getElementById('s-add-row');
    if (qty > 0) {
      addRow.style.display = 'flex';
      document.getElementById('s-add-label').textContent = `${qty}× adicional (R$ ${unitPrice2}/un)`;
      document.getElementById('s-add-val').textContent = `R$ ${addVal.toLocaleString('pt-BR')}`;
    } else {
      addRow.style.display = 'none';
    }

    // Savings row
    const savingRow = document.getElementById('s-saving-row');
    if (discountActive) {
      const saving = qty * (89 - 25);
      savingRow.style.display = 'flex';
      document.getElementById('s-saving').textContent = `− R$ ${saving.toLocaleString('pt-BR')}`;
    } else {
      savingRow.style.display = 'none';
    }

    document.getElementById('s-total').textContent = `R$ ${total.toLocaleString('pt-BR')}`;
  };

  // ── Helpers de feedback visual nos campos ──────────────────────────────────
  function setFieldError(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('field-error');
    let hint = el.parentElement.querySelector('.field-hint');
    if (!hint) {
      hint = document.createElement('span');
      hint.className = 'field-hint';
      el.parentElement.appendChild(hint);
    }
    hint.textContent = msg;
  }

  function clearFieldErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.classList.remove('field-error'));
    document.querySelectorAll('.field-hint').forEach(el => el.remove());
  }

  // ── Submit com validação Zod + envio para API ──────────────────────────────
  window.submitOrder = async function () {
    clearFieldErrors();

    // Coleta dados brutos do formulário
    const rawData = {
      nome:     document.getElementById('f-nome').value.trim(),
      whatsapp: document.getElementById('f-whats').value.trim(),
      email:    document.getElementById('f-email').value.trim(),
      empresa:  document.getElementById('f-empresa').value.trim(),
      cargo:    document.getElementById('f-cargo').value.trim(),
      plano:    document.getElementById('f-plano').value,
      qty,
      notes:    document.getElementById('f-obs').value.trim(),
    };

    // ── Validação Zod ──────────────────────────────────────────────────────
    const result = orderSchema.safeParse(rawData);

    if (!result.success) {
      const fieldMap = {
        nome:     'f-nome',
        whatsapp: 'f-whats',
        email:    'f-email',
        empresa:  'f-empresa',
        cargo:    'f-cargo',
        plano:    'f-plano',
        notes:    'f-obs',
      };

      result.error.errors.forEach(err => {
        const field = err.path[0];
        const inputId = fieldMap[field];
        if (inputId) setFieldError(inputId, err.message);
      });

      // Foca no primeiro campo com erro
      const firstError = document.querySelector('.field-error');
      if (firstError) firstError.focus();
      return;
    }

    const validatedData = result.data;

    // ── Código único do pedido ─────────────────────────────────────────────
    const orderCode = 'UIC-' + Math.random().toString(36).substr(2, 6).toUpperCase();

    // ── Botão: estado de carregamento ──────────────────────────────────────
    const btn = document.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    try {
      await submitOrderToApi(validatedData, orderCode);

      // ✅ Sucesso → abre modal de confirmação
      document.getElementById('modal-code').textContent = orderCode;
      closeFmo();
      setTimeout(() => {
        document.body.style.overflow = 'hidden';
        document.getElementById('modal').classList.add('open');
      }, 200);

    } catch (err) {
      console.error('[submitOrder] Erro na API:', err);
      alert(`Não foi possível enviar seu pedido.\n\n${err.message}\n\nTente novamente ou entre em contato via WhatsApp.`);

    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  };

  window.closeModal = function () {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
    ['f-nome', 'f-whats', 'f-email', 'f-empresa', 'f-cargo', 'f-obs'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('f-plano').value = '';
    qty = 0;
    document.getElementById('qty-display').textContent = '0';
    document.getElementById('summary').style.display = 'none';
    document.getElementById('sidebar-plan').textContent = '—';
    calcTotal();
  };

  // Global toggle menu
  window.toggleMenu = toggleMenu;

  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeFmo();
      closeModal();
    }
  });
}

// Start the app
document.addEventListener('DOMContentLoaded', initApp);
