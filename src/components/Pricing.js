import { PLANS, ADDON_PRICE_STANDARD, ADDON_PRICE_BULK } from '../lib/plans.js';
import { registerSectionReveal } from '../lib/animations.js';
import { openFormModal } from '../lib/formModalController.js';
import { pressable } from '../lib/motion-helpers.js';

const CHECK = `<svg class="plan-mark" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>`;

const DASH = `<svg class="plan-mark plan-mark--off" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>`;

function item(text, { off = false, muted = false, badge = '' } = {}) {
  return `<li class="plan-item${off ? ' is-off' : ''}${muted ? ' is-muted' : ''}">
    ${off ? DASH : CHECK}
    <span>${text}${badge ? ` <em class="plan-soon">${badge}</em>` : ''}</span>
  </li>`;
}

export function createPricing() {
  const individual = PLANS['149'];
  const business = PLANS['250'];
  const enterprise = PLANS['899'];

  return `
    <section id="planos">
      <div class="shell">
        <div class="pricing-head">
          <div class="section-eyebrow">Planos e preços</div>
          <h2 class="section-title">Invista uma vez.<br><span class="text-gold">Use para sempre.</span></h2>
          <p class="section-sub pricing-lede">
            Sem mensalidade e sem renovação obrigatória. O site digital e as atualizações do conteúdo já estão
            inclusos em todos os planos.
          </p>
        </div>

        <div class="pricing-table">
          <div class="plan">
            <h3 class="plan-name">${individual.name}</h3>
            <div class="plan-price">
              <span class="plan-currency">R$</span>
              <span class="plan-amount">${individual.price}</span>
              <span class="plan-period">pagamento único</span>
            </div>
            <p class="plan-desc">Para profissionais, freelancers e quem quer se destacar no networking.</p>
            <ul class="plan-items">
              ${item('1 cartão NFC personalizado')}
              ${item('Site / cartão digital completo')}
              ${item('Link personalizado')}
              ${item('Até 3 atualizações no site')}
              ${item('QR Code no verso')}
              ${item('Suporte prioritário', { off: true })}
            </ul>
            <a href="#" data-plan="individual" class="plan-btn plan-btn-quiet">Escolher Individual</a>
          </div>

          <div class="plan is-featured">
            <span class="plan-flag">Mais escolhido</span>
            <h3 class="plan-name">${business.name}</h3>
            <div class="plan-price">
              <span class="plan-currency">R$</span>
              <span class="plan-amount">${business.price}</span>
              <span class="plan-period">pagamento único</span>
            </div>
            <p class="plan-desc">Para empresários e gestores que querem impressionar em cada reunião.</p>
            <ul class="plan-items">
              ${item('1 cartão NFC premium')}
              ${item('Site digital + logo da empresa')}
              ${item('Link personalizado')}
              ${item('Até 10 atualizações no site')}
              ${item('QR Code no verso')}
              ${item('Suporte prioritário (48h)')}
            </ul>
            <a href="#" data-plan="business" class="plan-btn plan-btn-solid">Escolher Business</a>
          </div>

          <div class="plan">
            <h3 class="plan-name">${enterprise.name.replace(/\s*\(.*\)$/, '')}</h3>
            <div class="plan-price">
              <span class="plan-currency">R$</span>
              <span class="plan-amount">${enterprise.price}</span>
              <span class="plan-period">kit com ${enterprise.cardCount} cartões</span>
            </div>
            <p class="plan-desc">Para equipes de até ${enterprise.cardCount} pessoas, com identidade visual unificada.</p>
            <ul class="plan-items">
              ${item(`${enterprise.cardCount} cartões NFC premium`)}
              ${item('Sites digitais individuais')}
              ${item('Identidade visual unificada')}
              ${item('Atualizações ilimitadas no site')}
              ${item('Dashboard da equipe', { muted: true, badge: 'em breve' })}
              ${item('Gerente de conta dedicado')}
              ${item(`Extras por R$ ${ADDON_PRICE_BULK}/un (mín. ${enterprise.addonThreshold})`)}
            </ul>
            <a href="#" data-plan="enterprise" class="plan-btn plan-btn-quiet">Escolher Enterprise</a>
          </div>
        </div>

        <div class="pricing-bulk">
          <div class="bulk-figure">
            <span class="bulk-from">de R$ ${ADDON_PRICE_STANDARD}</span>
            <span class="bulk-to">R$ ${ADDON_PRICE_BULK}</span>
            <span class="bulk-unit">por cartão adicional</span>
          </div>
          <p class="bulk-copy">
            <strong>Quanto mais cartões, menor o preço.</strong>
            A partir de ${individual.addonThreshold} adicionais nos planos Individual e Business — ou
            ${enterprise.addonThreshold} adicionais no Enterprise — cada cartão extra sai por R$ ${ADDON_PRICE_BULK}
            em vez de R$ ${ADDON_PRICE_STANDARD}. O desconto é aplicado automaticamente no formulário de pedido.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function initPricing() {
  const section = document.getElementById('planos');
  if (!section) return;

  registerSectionReveal('#planos .plan', { stagger: 0.1 });
  registerSectionReveal('#planos .pricing-bulk', { y: 18 });

  section.querySelectorAll('.plan-btn[data-plan]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openFormModal(btn.dataset.plan);
    });
    pressable(btn);
  });
}
