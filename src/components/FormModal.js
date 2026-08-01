import { PLANS, ADDON_PRICE_STANDARD, ADDON_PRICE_BULK, getPlanById, getPlanByKey, calcOrderTotal } from '../lib/plans.js';
import { orderSchema } from '../lib/orderSchema.js';
import { submitOrderToApi } from '../lib/orderApi.js';
import { registerFormModalHandlers } from '../lib/formModalController.js';
import { showOverlay, hideOverlay, swapStep, pressable } from '../lib/motion-helpers.js';
import { prefersReducedMotion } from '../lib/animations.js';
import { logoMarkSVG, logoLockup } from '../lib/logo.js';
import { showSuccessModal } from './SuccessModal.js';

const MAX_QTY = 500;           // mesmo teto do orderSchema
const QTY_SHORTCUTS = [5, 10, 25];

// Cada passo declara quais campos ele é responsável por validar — é isso que
// permite bloquear o "Continuar" sem duplicar regra do schema em lugar nenhum.
const STEPS = [
  { id: 1, key: 'cartao', label: 'Seu cartão', title: 'Monte seu cartão', sub: 'Escolha o plano e quantos cartões extras você precisa.', fields: ['plano', 'qty'] },
  { id: 2, key: 'dados', label: 'Seus dados', title: 'Quase lá', sub: 'É com esses dados que vamos montar seu layout e falar com você.', fields: ['nome', 'whatsapp', 'email', 'empresa', 'cargo', 'notes'] },
];

function brl(value) {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

/** "Enterprise (10 cartões)" → "Enterprise": o cartão do seletor já mostra a
 * contagem numa linha própria, então o parêntese vira ruído. */
function shortPlanName(plan) {
  return plan.name.replace(/\s*\([^)]*\)\s*$/, '');
}

function planOptionsMarkup() {
  return Object.values(PLANS)
    .map(plan => {
      const cards = plan.cardCount > 1 ? `${plan.cardCount} cartões` : '1 cartão';
      // Espelha o destaque da tabela de planos (Pricing.js) — mesma leitura de
      // "o mais escolhido" nos dois lugares do site.
      const badge = plan.key === 'business'
        ? '<span class="popt-badge">Mais escolhido</span>'
        : '';

      return `
                <label class="popt" for="f-plano-${plan.id}">
                  <input type="radio" name="plano" value="${plan.id}" id="f-plano-${plan.id}" />
                  <span class="popt-check" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span class="popt-body">
                    <span class="popt-name">${shortPlanName(plan)}${badge}</span>
                    <span class="popt-meta">${cards} · extras a partir de ${brl(ADDON_PRICE_BULK)} acima de ${plan.addonThreshold} un</span>
                  </span>
                  <span class="popt-price"><em>${brl(plan.price)}</em><small>à vista</small></span>
                </label>`;
    })
    .join('\n');
}

function stepperMarkup() {
  return STEPS
    .map((step, i) => {
      const line = i > 0 ? '<li class="stepper-line" aria-hidden="true"><i></i></li>' : '';
      return `${line}
              <li class="stepper-item">
                <button type="button" class="stepper-btn" data-goto-step="${step.id}"${step.id === 1 ? ' aria-current="step"' : ''}>
                  <span class="stepper-dot">
                    <span class="stepper-num">${step.id}</span>
                    <svg class="stepper-tick" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span class="stepper-label">${step.label}</span>
                </button>
              </li>`;
    })
    .join('\n');
}

/** Pré-visualização do cartão: o mesmo objeto que o cliente está comprando,
 * preenchido ao vivo com o que ele digita. É a identidade do modal — a peça
 * que transforma "preencher um formulário" em "montar seu cartão". */
function cardPreviewMarkup() {
  return `
          <div class="cardp" id="cardp">
            <div class="cardp-face">
              <span class="cardp-sheen" aria-hidden="true"></span>
              <div class="cardp-top">
                <span class="cardp-mark">${logoMarkSVG(26)}</span>
                <span class="cardp-chip" aria-hidden="true"></span>
              </div>
              <div class="cardp-bottom">
                <div class="cardp-name is-empty" id="cardp-name">Seu nome</div>
                <div class="cardp-role is-empty" id="cardp-role">Cargo · Empresa</div>
              </div>
            </div>
          </div>`;
}

export function createFormModal() {
  return `
    <div class="fmo" id="fmo">
      <div class="fmo-panel" role="dialog" aria-modal="true" aria-labelledby="fmo-title" tabindex="-1">
        <span class="fmo-aura" aria-hidden="true"></span>

        <aside class="fmo-aside">
          <div class="fmo-brand">${logoLockup({ size: 24 })}</div>

          <div class="fmo-aside-lede">
            <p class="fmo-aside-eyebrow">Pré-visualização</p>
            <p class="fmo-aside-copy">Seu cartão vai ficar assim — o layout final é desenhado pela nossa equipe e aprovado por você.</p>
          </div>

${cardPreviewMarkup()}

          <div class="fmo-aside-foot">
            <div class="fmo-trust">
              <div class="fmo-trust-item">
                <span class="fmo-ti-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </span>
                Dados 100% protegidos
              </div>
              <div class="fmo-trust-item">
                <span class="fmo-ti-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </span>
                Retorno em até 24h úteis
              </div>
              <div class="fmo-trust-item">
                <span class="fmo-ti-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Pagamento só após aprovar o layout
              </div>
            </div>
          </div>
        </aside>

        <div class="fmo-main">

          <header class="fmo-head">
            <div class="fmo-head-top">
              <ol class="stepper" id="stepper">
${stepperMarkup()}
              </ol>
              <button type="button" class="fmo-close" id="fmo-close" aria-label="Fechar formulário">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <h2 class="fmo-title" id="fmo-title">${STEPS[0].title}</h2>
            <p class="fmo-sub" id="fmo-sub">${STEPS[0].sub}</p>
          </header>

          <div class="fmo-body" id="fmo-body">

            <!-- ─── PASSO 1 ─── -->
            <section class="fmo-step" id="step-1" tabindex="-1" aria-label="Passo 1: seu cartão">

              <div class="fg" data-field="plano">
                <span class="fg-label" id="plan-picker-label">Escolha seu plano</span>
                <div class="plan-picker" role="radiogroup" aria-labelledby="plan-picker-label">
${planOptionsMarkup()}
                </div>
              </div>

              <div class="fg" data-field="qty">
                <span class="fg-label">Cartões adicionais <span class="fg-opt">opcional</span></span>
                <div class="qty-row">
                  <div class="qty-wrap">
                    <button type="button" class="qty-btn" id="qty-minus" aria-label="Diminuir quantidade">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>
                    </button>
                    <output class="qty-display" id="qty-display" aria-live="polite">0</output>
                    <button type="button" class="qty-btn" id="qty-plus" aria-label="Aumentar quantidade">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                    </button>
                  </div>
                  <div class="qty-chips">
                    ${QTY_SHORTCUTS.map(n => `<button type="button" class="qty-chip" data-qty="${n}">${n}</button>`).join('\n                    ')}
                  </div>
                </div>
                <p class="qty-note" id="add-price-label">${brl(ADDON_PRICE_STANDARD)} por cartão extra</p>
                <p id="bulk-hint" class="bulk-hint">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Desconto em volume aplicado — ${brl(ADDON_PRICE_BULK)} por unidade
                </p>
              </div>

              <div class="order-summary" id="summary" aria-live="polite">
                <p class="summary-title">Resumo</p>
                <div class="summary-line"><span id="s-plano-label">Plano</span><span id="s-plano-val">—</span></div>
                <div class="summary-line" id="s-add-row"><span id="s-add-label">Adicionais</span><span id="s-add-val">—</span></div>
                <div class="summary-line summary-line-success" id="s-saving-row"><span>Você economiza</span><span id="s-saving">—</span></div>
                <div class="summary-line total"><span>Total estimado</span><span id="s-total">—</span></div>
              </div>
            </section>

            <!-- ─── PASSO 2 ─── -->
            <section class="fmo-step" id="step-2" tabindex="-1" aria-label="Passo 2: seus dados" hidden>

              <div class="fg-row">
                <div class="fg" data-field="nome">
                  <label for="f-nome">Nome completo <span class="fg-req" aria-hidden="true">*</span></label>
                  <input type="text" id="f-nome" name="nome" autocomplete="name" placeholder="João Mendes" required />
                </div>
                <div class="fg" data-field="whatsapp">
                  <label for="f-whats">WhatsApp <span class="fg-req" aria-hidden="true">*</span></label>
                  <input type="tel" id="f-whats" name="whatsapp" autocomplete="tel-national" placeholder="(11) 99999-9999" required />
                </div>
              </div>

              <div class="fg" data-field="email">
                <label for="f-email">E-mail <span class="fg-req" aria-hidden="true">*</span></label>
                <input type="email" id="f-email" name="email" autocomplete="email" placeholder="joao@empresa.com.br" required />
              </div>

              <div class="fg-row">
                <div class="fg" data-field="empresa">
                  <label for="f-empresa">Empresa <span class="fg-opt">opcional</span></label>
                  <input type="text" id="f-empresa" name="empresa" autocomplete="organization" placeholder="Nome da empresa" />
                </div>
                <div class="fg" data-field="cargo">
                  <label for="f-cargo">Cargo <span class="fg-opt">opcional</span></label>
                  <input type="text" id="f-cargo" name="cargo" autocomplete="organization-title" placeholder="ex: Diretor Comercial" />
                </div>
              </div>

              <div class="fg" data-field="notes">
                <label for="f-obs">Referências visuais <span class="fg-opt">opcional</span></label>
                <textarea id="f-obs" name="notes" maxlength="1000" rows="3" placeholder="Cores da marca, site de referência, acabamento preferido..."></textarea>
                <span class="fg-count" id="obs-count" aria-hidden="true">0 / 1000</span>
              </div>

              <div class="recap" id="recap">
                <span class="recap-label">Seu pedido</span>
                <span class="recap-val" id="recap-val">—</span>
                <button type="button" class="recap-edit" data-goto-step="1">Alterar</button>
              </div>
            </section>
          </div>

          <footer class="fmo-foot">
            <div class="fmo-alert" id="fmo-alert" role="alert" hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v5M12 16.5v.01" /></svg>
              <span id="fmo-alert-text"></span>
            </div>

            <div class="fmo-foot-row">
              <button type="button" class="btn-back" id="btn-back" hidden>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Voltar
              </button>

              <div class="fmo-foot-total">
                <span class="fmo-foot-total-label">Total estimado</span>
                <strong class="fmo-foot-total-val is-empty" id="foot-total">—</strong>
              </div>

              <button type="button" class="submit-btn" id="submit-order-btn">
                <span class="submit-btn-label" id="submit-btn-label">Continuar</span>
                <svg class="submit-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                <span class="submit-spinner" aria-hidden="true"></span>
              </button>
            </div>

            <p class="submit-note">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Sem cobrança agora — pagamento apenas após aprovação do layout.
            </p>
          </footer>

        </div>
      </div>
    </div>
  `;
}

function applyPhoneMask(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  const len = digits.length;

  if (len === 0) return '';
  if (len <= 2) return `(${digits}`;
  if (len <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (len <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  // 11 dígitos → celular com 9 na frente
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function initPhoneMask(input) {
  if (!input) return;

  input.setAttribute('maxlength', '16');
  input.setAttribute('inputmode', 'numeric');

  input.addEventListener('input', function () {
    const pos = this.selectionStart;
    const prevLen = this.value.length;
    this.value = applyPhoneMask(this.value);
    const diff = this.value.length - prevLen;
    this.setSelectionRange(pos + diff, pos + diff);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
      const pos = this.selectionStart;
      if (pos > 0 && this.selectionStart === this.selectionEnd) {
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
}

let resetFormRef = () => {};

/** Chamado por SuccessModal.js quando o usuário fecha a confirmação —
 * o formulário só é limpo nesse momento, não ao simplesmente fechar o fmo. */
export function resetForm() {
  resetFormRef();
}

export function initFormModal() {
  const fmo = document.getElementById('fmo');
  const panel = fmo?.querySelector('.fmo-panel');
  if (!fmo || !panel) return;

  const scrollArea = document.getElementById('fmo-body');
  const closeBtn = document.getElementById('fmo-close');
  const titleEl = document.getElementById('fmo-title');
  const subEl = document.getElementById('fmo-sub');
  const stepEls = { 1: document.getElementById('step-1'), 2: document.getElementById('step-2') };
  const stepBtns = Array.from(fmo.querySelectorAll('[data-goto-step]'));
  const stepperItems = Array.from(fmo.querySelectorAll('#stepper .stepper-btn'));
  const stepperLine = fmo.querySelector('.stepper-line i');

  const planRadios = Array.from(fmo.querySelectorAll('input[name="plano"]'));
  const qtyDisplay = document.getElementById('qty-display');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyChips = Array.from(fmo.querySelectorAll('.qty-chip'));
  const addPriceLabel = document.getElementById('add-price-label');
  const bulkHint = document.getElementById('bulk-hint');
  const summary = document.getElementById('summary');
  const recapVal = document.getElementById('recap-val');

  const cardName = document.getElementById('cardp-name');
  const cardRole = document.getElementById('cardp-role');
  const cardp = document.getElementById('cardp');

  const footTotal = document.getElementById('foot-total');
  const backBtn = document.getElementById('btn-back');
  const submitBtn = document.getElementById('submit-order-btn');
  const submitLabel = document.getElementById('submit-btn-label');
  const alertBox = document.getElementById('fmo-alert');
  const alertText = document.getElementById('fmo-alert-text');
  const obsCount = document.getElementById('obs-count');

  // Um único mapa campo→input: validação, erros, reset e preview leem daqui,
  // pra nenhum deles sair de sincronia com o markup.
  const textInputs = {
    nome: document.getElementById('f-nome'),
    whatsapp: document.getElementById('f-whats'),
    email: document.getElementById('f-email'),
    empresa: document.getElementById('f-empresa'),
    cargo: document.getElementById('f-cargo'),
    notes: document.getElementById('f-obs'),
  };

  initPhoneMask(textInputs.whatsapp);

  let qty = 0;
  let step = 1;
  let isOpen = false;
  let isAnimating = false;
  let lastFocused = null;

  // ─── Leitura de estado ───────────────────────────────────────────────────
  function selectedPlanId() {
    return planRadios.find(r => r.checked)?.value ?? '';
  }

  function readForm() {
    return {
      nome: textInputs.nome.value.trim(),
      whatsapp: textInputs.whatsapp.value.trim(),
      email: textInputs.email.value.trim(),
      empresa: textInputs.empresa.value.trim(),
      cargo: textInputs.cargo.value.trim(),
      plano: selectedPlanId(),
      qty,
      notes: textInputs.notes.value.trim(),
    };
  }

  function controlFor(field) {
    if (field === 'plano') return planRadios.find(r => r.checked) ?? planRadios[0];
    if (field === 'qty') return qtyPlus;
    return textInputs[field] ?? null;
  }

  function stepOfField(field) {
    return STEPS.find(s => s.fields.includes(field))?.id ?? 1;
  }

  // ─── Erros ───────────────────────────────────────────────────────────────
  function setFieldError(field, msg) {
    const group = fmo.querySelector(`.fg[data-field="${field}"]`);
    if (!group) return;

    group.classList.add('has-error');
    let hint = group.querySelector('.field-hint');
    if (!hint) {
      hint = document.createElement('span');
      hint.className = 'field-hint';
      group.appendChild(hint);
    }
    hint.textContent = msg;

    const control = controlFor(field);
    if (control) {
      control.classList.add('field-error');
      control.setAttribute('aria-invalid', 'true');
    }
  }

  function clearFieldError(field) {
    const group = fmo.querySelector(`.fg[data-field="${field}"]`);
    if (!group) return;
    group.classList.remove('has-error');
    group.querySelector('.field-hint')?.remove();
    group.querySelectorAll('.field-error').forEach(el => {
      el.classList.remove('field-error');
      el.removeAttribute('aria-invalid');
    });
  }

  function clearFieldErrors() {
    fmo.querySelectorAll('.fg[data-field]').forEach(g => clearFieldError(g.dataset.field));
  }

  /** Valida um campo isolado com o MESMO schema do envio — nenhuma regra de
   * validação vive duplicada só pra dar feedback inline. */
  function fieldError(field, value) {
    const shape = orderSchema.shape[field];
    if (!shape) return null;
    const result = shape.safeParse(value);
    return result.success ? null : (result.error.issues[0]?.message ?? 'Valor inválido.');
  }

  function showAlert(msg) {
    alertText.textContent = msg;
    alertBox.hidden = false;
  }

  function hideAlert() {
    alertBox.hidden = true;
  }

  // ─── Pré-visualização do cartão ──────────────────────────────────────────
  function updateCardPreview() {
    const nome = textInputs.nome.value.trim();
    const cargo = textInputs.cargo.value.trim();
    const empresa = textInputs.empresa.value.trim();
    const role = [cargo, empresa].filter(Boolean).join(' · ');

    cardName.textContent = nome || 'Seu nome';
    cardName.classList.toggle('is-empty', !nome);

    cardRole.textContent = role || 'Cargo · Empresa';
    cardRole.classList.toggle('is-empty', !role);
  }

  // Inclinação sutil seguindo o ponteiro: o cartão parece um objeto físico, não
  // um retângulo impresso na tela. Desligado sob prefers-reduced-motion.
  if (!prefersReducedMotion()) {
    cardp.addEventListener('pointermove', e => {
      const rect = cardp.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cardp.style.setProperty('--tilt-x', `${(-py * 8).toFixed(2)}deg`);
      cardp.style.setProperty('--tilt-y', `${(px * 12).toFixed(2)}deg`);
    });

    cardp.addEventListener('pointerleave', () => {
      cardp.style.setProperty('--tilt-x', '0deg');
      cardp.style.setProperty('--tilt-y', '0deg');
    });
  }

  // ─── Totais ──────────────────────────────────────────────────────────────
  function calcTotal() {
    const plan = getPlanById(selectedPlanId());

    if (!plan) {
      addPriceLabel.textContent = `${brl(ADDON_PRICE_STANDARD)} por cartão extra`;
      addPriceLabel.classList.remove('is-discounted');
      bulkHint.classList.remove('is-visible');
      summary.classList.remove('is-visible');
      recapVal.textContent = '—';
      footTotal.textContent = '—';
      footTotal.classList.add('is-empty');
      return;
    }

    const { unitPrice, addonSubtotal, discountApplied, savings, total } = calcOrderTotal(plan.id, qty);

    addPriceLabel.textContent = discountApplied
      ? `${brl(unitPrice)} por unidade — desconto aplicado`
      : `${brl(unitPrice)} por unidade · ${brl(ADDON_PRICE_BULK)} a partir de ${plan.addonThreshold} un`;
    addPriceLabel.classList.toggle('is-discounted', discountApplied);
    bulkHint.classList.toggle('is-visible', discountApplied);

    summary.classList.add('is-visible');
    document.getElementById('s-plano-label').textContent = plan.name;
    document.getElementById('s-plano-val').textContent = brl(plan.price);

    const addRow = document.getElementById('s-add-row');
    addRow.classList.toggle('is-visible', qty > 0);
    if (qty > 0) {
      document.getElementById('s-add-label').textContent = `${qty}× adicional (${brl(unitPrice)}/un)`;
      document.getElementById('s-add-val').textContent = brl(addonSubtotal);
    }

    const savingRow = document.getElementById('s-saving-row');
    savingRow.classList.toggle('is-visible', discountApplied);
    if (discountApplied) {
      document.getElementById('s-saving').textContent = `− ${brl(savings)}`;
    }

    document.getElementById('s-total').textContent = brl(total);

    recapVal.textContent = qty > 0
      ? `${shortPlanName(plan)} + ${qty} extra${qty > 1 ? 's' : ''} · ${brl(total)}`
      : `${shortPlanName(plan)} · ${brl(total)}`;

    footTotal.textContent = brl(total);
    footTotal.classList.remove('is-empty');
  }

  // ─── Navegação entre passos ──────────────────────────────────────────────
  function syncStepChrome() {
    const current = STEPS.find(s => s.id === step);
    titleEl.textContent = current.title;
    subEl.textContent = current.sub;

    stepperItems.forEach(btn => {
      const id = Number(btn.dataset.gotoStep);
      btn.classList.toggle('is-active', id === step);
      btn.classList.toggle('is-done', id < step);
      if (id === step) btn.setAttribute('aria-current', 'step');
      else btn.removeAttribute('aria-current');
      // Só dá pra pular pra frente com o passo atual já válido — assim o
      // stepper nunca oferece um caminho que goToStep() vai recusar.
      btn.disabled = id > step && !isStepValid(step);
    });

    if (stepperLine) stepperLine.style.transform = `scaleX(${step > 1 ? 1 : 0})`;

    backBtn.hidden = step === 1;
    submitLabel.textContent = step === STEPS.length ? 'Enviar pedido' : 'Continuar';
    fmo.dataset.step = String(step);
  }

  function isStepValid(stepId) {
    const data = readForm();
    return (STEPS.find(s => s.id === stepId)?.fields ?? [])
      .every(f => !fieldError(f, data[f]));
  }

  /** Valida o passo, marca os erros e leva o usuário ao primeiro deles.
   * Retorna true quando pode seguir. */
  function validateStep(stepId) {
    const data = readForm();
    const fields = STEPS.find(s => s.id === stepId)?.fields ?? [];
    let firstBad = null;

    fields.forEach(f => {
      const err = fieldError(f, data[f]);
      if (!err) return;
      setFieldError(f, err);
      if (!firstBad) firstBad = f;
    });

    if (!firstBad) return true;

    fmo.querySelector(`.fg[data-field="${firstBad}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    controlFor(firstBad)?.focus({ preventScroll: true });
    showAlert('Revise os campos destacados para continuar.');
    return false;
  }

  async function goToStep(next, { back = false } = {}) {
    if (isAnimating || next === step) return;
    if (next > step && !validateStep(step)) return;

    isAnimating = true;
    hideAlert();
    const from = stepEls[step];
    const to = stepEls[next];
    step = next;
    syncStepChrome();

    scrollArea.scrollTo({ top: 0, behavior: 'auto' });
    await swapStep(from, to, { back });
    // Foca a região do passo, não o primeiro input: no celular abrir o teclado
    // automaticamente esconderia metade do formulário que acabou de entrar.
    to.focus({ preventScroll: true });
    isAnimating = false;
  }

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.gotoStep);
      goToStep(target, { back: target < step });
    });
  });

  backBtn.addEventListener('click', () => goToStep(step - 1, { back: true }));
  pressable(backBtn, { pressScale: 0.94 });

  // ─── Abrir / fechar ──────────────────────────────────────────────────────
  async function open(planKey) {
    if (isOpen) return;
    isOpen = true;
    lastFocused = document.activeElement;
    hideAlert();
    fmo.classList.add('open');
    document.body.style.overflow = 'hidden';

    const planEntry = getPlanByKey(planKey);
    if (planEntry) setPlan(planEntry.id);

    scrollArea.scrollTop = 0;
    await showOverlay(fmo, panel);
    panel.focus({ preventScroll: true });
  }

  async function close({ restoreFocus = true } = {}) {
    if (!isOpen) return;
    isOpen = false;
    await hideOverlay(fmo, panel);
    fmo.classList.remove('open');
    document.body.style.overflow = '';
    if (restoreFocus && lastFocused?.focus) lastFocused.focus({ preventScroll: true });
  }

  registerFormModalHandlers({ open, close });

  closeBtn.addEventListener('click', () => close());
  pressable(closeBtn, { pressScale: 0.9 });

  fmo.addEventListener('click', e => {
    if (e.target === fmo) close();
  });

  document.addEventListener('keydown', e => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'Tab') trapFocus(e);
  });

  /** Mantém o Tab dentro do modal enquanto ele está aberto. */
  function trapFocus(e) {
    const focusables = Array.from(
      panel.querySelectorAll('button:not([disabled]):not([hidden]), input:not([disabled]), textarea:not([disabled]), a[href]')
    ).filter(el => el.offsetParent !== null);

    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ─── Plano ───────────────────────────────────────────────────────────────
  function setPlan(planId) {
    planRadios.forEach(radio => {
      radio.checked = radio.value === planId;
      radio.closest('.popt')?.classList.toggle('is-selected', radio.checked);
    });
    clearFieldError('plano');
    hideAlert();
    calcTotal();
    syncStepChrome();
  }

  planRadios.forEach(radio => {
    radio.addEventListener('change', () => setPlan(radio.value));
  });

  // ─── Quantidade ──────────────────────────────────────────────────────────
  function setQty(next) {
    qty = Math.min(MAX_QTY, Math.max(0, next));
    qtyDisplay.textContent = qty;
    qtyMinus.disabled = qty === 0;
    qtyPlus.disabled = qty === MAX_QTY;
    qtyChips.forEach(chip => chip.classList.toggle('is-active', Number(chip.dataset.qty) === qty));
    calcTotal();
  }

  qtyMinus.addEventListener('click', () => setQty(qty - 1));
  qtyPlus.addEventListener('click', () => setQty(qty + 1));
  pressable(qtyMinus, { pressScale: 0.85 });
  pressable(qtyPlus, { pressScale: 0.85 });

  qtyChips.forEach(chip => {
    const value = Number(chip.dataset.qty);
    // Reclicar o mesmo atalho desmarca — senão não há como voltar a zero sem
    // martelar o botão de menos.
    chip.addEventListener('click', () => setQty(qty === value ? 0 : value));
    pressable(chip, { pressScale: 0.9 });
  });

  // ─── Validação inline + preview ──────────────────────────────────────────
  Object.entries(textInputs).forEach(([field, input]) => {
    if (!input) return;

    input.addEventListener('blur', () => {
      const value = input.value.trim();
      // Passar tabulando por um campo vazio não pinta o formulário de vermelho:
      // campo obrigatório vazio só reclama na hora de avançar/enviar.
      if (!value) return clearFieldError(field);
      const err = fieldError(field, value);
      if (err) setFieldError(field, err);
      else clearFieldError(field);
    });

    input.addEventListener('input', () => {
      clearFieldError(field);
      hideAlert();
      updateCardPreview();
      syncStepChrome();
    });

    // Não existe <form> aqui (o envio é via fetch), então Enter precisa ser
    // ligado à mão — sem isso o teclado do celular mostra "ir" e não faz nada.
    if (input.tagName !== 'TEXTAREA') {
      input.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        input.blur();
        advance();
      });
    }
  });

  textInputs.notes.addEventListener('input', () => {
    obsCount.textContent = `${textInputs.notes.value.length} / 1000`;
  });

  // ─── Envio ───────────────────────────────────────────────────────────────
  function setLoading(loading) {
    submitBtn.disabled = loading;
    submitBtn.classList.toggle('is-loading', loading);
    submitBtn.setAttribute('aria-busy', String(loading));
  }

  async function submitOrder() {
    clearFieldErrors();
    hideAlert();

    const rawData = readForm();
    const result = orderSchema.safeParse(rawData);

    if (!result.success) {
      let jumpTo = null;
      result.error.issues.forEach(err => {
        const field = err.path[0];
        setFieldError(field, err.message);
        const owner = stepOfField(field);
        if (jumpTo === null || owner < jumpTo) jumpTo = owner;
      });

      if (jumpTo !== null && jumpTo !== step) {
        await goToStep(jumpTo, { back: jumpTo < step });
      }
      showAlert('Revise os campos destacados para continuar.');
      return;
    }

    const orderCode = 'UIC-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setLoading(true);

    try {
      // Envia rawData (pré-transform), não result.data: o servidor
      // (api/orders.js) roda o mesmo orderSchema de novo do zero, e
      // z.string().optional() aceita `undefined`/string mas não `null` —
      // mandar o já-transformado quebraria pedidos com empresa/cargo vazios.
      await submitOrderToApi(rawData, orderCode);
      // Sem devolver o foco a quem abriu o modal: quem recebe o foco agora é o
      // modal de confirmação que abre em seguida.
      await close({ restoreFocus: false });
      showSuccessModal(orderCode);
    } catch (err) {
      // Detalhe completo só no console — a UI nunca ecoa texto vindo do
      // servidor/ERP diretamente, mesmo que api/orders.js já sanitize.
      console.error('[FormModal] Erro na API:', err);
      showAlert('Não foi possível enviar seu pedido. Tente novamente em instantes ou fale com a gente pelo WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  /** Ação principal do passo atual: avançar ou enviar. */
  function advance() {
    if (step < STEPS.length) goToStep(step + 1);
    else submitOrder();
  }

  submitBtn.addEventListener('click', advance);

  resetFormRef = function resetFormImpl() {
    Object.values(textInputs).forEach(input => {
      if (input) input.value = '';
    });
    planRadios.forEach(radio => {
      radio.checked = false;
      radio.closest('.popt')?.classList.remove('is-selected');
    });
    obsCount.textContent = '0 / 1000';
    clearFieldErrors();
    hideAlert();
    setQty(0);
    updateCardPreview();

    // Volta ao passo 1 sem animar: o modal já está fechado nesse ponto.
    step = 1;
    stepEls[2].hidden = true;
    stepEls[1].hidden = false;
    stepEls[1].style.opacity = '';
    stepEls[1].style.transform = '';
    syncStepChrome();
  };

  setQty(0);
  updateCardPreview();
  syncStepChrome();
}
