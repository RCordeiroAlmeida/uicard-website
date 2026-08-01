import { registerSectionReveal } from '../lib/animations.js';

const STEPS = [
  {
    num: '01',
    title: 'Escolha seu plano',
    desc: 'Individual, Business ou Enterprise. O formulário leva menos de dois minutos para preencher.',
  },
  {
    num: '02',
    title: 'Personalizamos tudo',
    desc: 'Nossa equipe cria o layout do cartão impresso e configura seu site digital com a sua identidade visual.',
  },
  {
    num: '03',
    title: 'Receba em casa',
    desc: 'O cartão chega pronto para uso, com o chip já programado e o QR Code impresso no verso.',
  },
  {
    num: '04',
    title: 'Toque e conecte',
    desc: 'Aproxime do celular de qualquer pessoa. Em três segundos seu site digital aparece na tela dela.',
  },
];

export function createOrderSteps() {
  const stepsHtml = STEPS.map(s => `
    <li class="order-step">
      <span class="order-num">${s.num}</span>
      <h3 class="order-title">${s.title}</h3>
      <p class="order-desc">${s.desc}</p>
    </li>
  `).join('');

  return `
    <section id="pedido">
      <div class="shell">
        <div class="section-eyebrow">Como pedir</div>
        <h2 class="section-title">Da compra ao primeiro toque<br>em <span class="text-gold">quatro etapas.</span></h2>
        <p class="section-sub">
          O processo é guiado pela nossa equipe do começo ao fim — você só precisa preencher o formulário e
          aprovar o design.
        </p>

        <ol class="order-flow">
          ${stepsHtml}
        </ol>
      </div>
    </section>
  `;
}

export function initOrderSteps() {
  registerSectionReveal('#pedido .order-step', { stagger: 0.1 });
}
