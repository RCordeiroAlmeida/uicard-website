import { registerSectionReveal } from '../lib/animations.js';
import { expandPanel, collapsePanel, pressable } from '../lib/motion-helpers.js';
import { openFormModal } from '../lib/formModalController.js';

const FAQ_ITEMS = [
  {
    q: 'O site/cartão digital já está incluso no preço do cartão NFC?',
    a: 'Sim! Todo UICard inclui a criação e hospedagem do seu site/cartão de visita digital, com link próprio. As atualizações do conteúdo do site são inclusas conforme o plano: até 3 no Individual, até 10 no Business e ilimitadas no Enterprise.',
  },
  {
    q: 'Como funciona o desconto para cartões em quantidade?',
    a: 'Cartões adicionais avulsos custam R$ 89 por unidade. Nos planos Individual e Business, a partir de 5 adicionais o preço cai para R$ 25/un. No Enterprise, o desconto de R$ 25/un vale a partir de 10 adicionais. O desconto é calculado automaticamente no formulário de pedido.',
  },
  {
    q: 'Funciona em qualquer celular?',
    a: 'A leitura NFC funciona em qualquer Android a partir de 2015 e em iPhones a partir do iPhone 7. Para celulares sem NFC, basta escanear o QR Code impresso no verso — o resultado é idêntico.',
  },
  {
    q: 'Quando e como faço o pagamento?',
    a: 'Após o pedido, nossa equipe entra em contato via WhatsApp para validar os dados e apresentar o layout. O pagamento (Pix, cartão ou boleto) ocorre somente após você aprovar o design. Zero cobrança antes disso.',
  },
  {
    q: 'Quanto tempo leva para receber meu cartão?',
    a: 'Após confirmação do pagamento e aprovação do layout, o prazo de produção e entrega é de 7 a 15 dias úteis, dependendo da sua localização. Kits Enterprise podem ter prazos diferenciados informados no atendimento.',
  },
  {
    q: 'Posso atualizar meu site digital depois?',
    a: 'Sim! O cartão físico permanece o mesmo, mas o conteúdo do seu site digital pode ser atualizado conforme o limite do seu plano: até 3 vezes no Individual, até 10 vezes no Business e sem limite no Enterprise. O chip NFC sempre abre a versão mais recente automaticamente.',
  },
];

export function createFAQ() {
  const itemsHtml = FAQ_ITEMS.map((item, i) => `
    <div class="faq-item">
      <button class="faq-q" id="faq-q-${i}" aria-expanded="false" aria-controls="faq-a-${i}">
        ${item.q}
        <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">${item.a}</div>
    </div>
  `).join('');

  return `
    <section id="faq">
      <div class="shell faq-layout">
        <div class="faq-sticky">
          <div class="section-eyebrow">Dúvidas</div>
          <h2 class="section-title faq-title">Perguntas<br><span class="text-gold">frequentes.</span></h2>
          <p class="faq-lede">
            Não encontrou a sua? Nossa equipe responde no WhatsApp em até 2 horas nos dias úteis — e o pedido
            só avança depois que você aprovar tudo.
          </p>
          <a href="#" class="btn-primary faq-cta-btn">
            Fazer meu pedido
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div class="faq-list">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initFAQ() {
  const section = document.getElementById('faq');
  if (!section) return;

  registerSectionReveal('#faq .faq-item', { stagger: 0.06 });

  const items = Array.from(section.querySelectorAll('.faq-item'));

  items.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const panel = item.querySelector('.faq-a');

    btn.addEventListener('click', async () => {
      const wasOpen = item.classList.contains('open');

      // Remove a classe `.open` só DEPOIS da animação terminar — ela controla
      // o padding-bottom do painel, e removê-la antes de medir a altura pro
      // collapse cortaria 22px de repente, antes do height começar a encolher.
      const others = items.filter(i => i !== item && i.classList.contains('open'));
      others.forEach(async other => {
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        await collapsePanel(other.querySelector('.faq-a'));
        other.classList.remove('open');
      });

      if (wasOpen) {
        btn.setAttribute('aria-expanded', 'false');
        await collapsePanel(panel);
        item.classList.remove('open');
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        await expandPanel(panel);
      }
    });
  });

  const ctaBtn = section.querySelector('.faq-cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', e => {
      e.preventDefault();
      openFormModal();
    });
    pressable(ctaBtn);
  }
}
