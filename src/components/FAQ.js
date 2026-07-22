export function createFAQ() {
  return `
    <section id="faq">
      <div class="faq-layout">
        <div class="faq-sticky">
          <div class="section-eyebrow">FAQ</div>
          <div class="section-title" style="margin-bottom:12px">Dúvidas<br><span class="text-gold">frequentes.</span></div>
          <p style="color:var(--muted2);font-size:.9rem;line-height:1.7">Não encontrou sua dúvida? Nossa equipe responde no WhatsApp em até 2 horas em dias úteis.</p>
          <div class="faq-cta-box">
            <h4>Pronto para pedir?</h4>
            <p>Preencha o formulário e nossa equipe entra em contato para fechar os detalhes.</p>
            <a href="#" onclick="openFmo();return false;" class="btn-primary" style="font-size:.85rem;padding:12px 22px;border-radius:8px">Fazer pedido →</a>
          </div>
        </div>
        <div class="faq-list">
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              O site/cartão digital já está incluso no preço do cartão NFC?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Sim! Todo UICard inclui a criação e hospedagem do seu site/cartão de visita digital, com link próprio. As atualizações do conteúdo do site são inclusas conforme o plano: até 3 no Individual, até 10 no Business e ilimitadas no Enterprise.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Como funciona o desconto para cartões em quantidade?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Cartões adicionais avulsos custam R$ 89 por unidade. Nos planos Individual e Business, a partir de 5 adicionais o preço cai para R$ 25/un. No Enterprise, o desconto de R$ 25/un vale a partir de 10 adicionais. O desconto é calculado automaticamente no formulário de pedido.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Funciona em qualquer celular?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">A leitura NFC funciona em qualquer Android a partir de 2015 e em iPhones a partir do iPhone 7. Para celulares sem NFC, basta escanear o QR Code impresso no verso — o resultado é idêntico.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Quando e como faço o pagamento?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Após o pedido, nossa equipe entra em contato via WhatsApp para validar os dados e apresentar o layout. O pagamento (Pix, cartão ou boleto) ocorre somente após você aprovar o design. Zero cobrança antes disso.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Quanto tempo leva para receber meu cartão?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Após confirmação do pagamento e aprovação do layout, o prazo de produção e entrega é de 7 a 15 dias úteis, dependendo da sua localização. Kits Enterprise podem ter prazos diferenciados informados no atendimento.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Posso atualizar meu site digital depois?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Sim! O cartão físico permanece o mesmo, mas o conteúdo do seu site digital pode ser atualizado conforme o limite do seu plano: até 3 vezes no Individual, até 10 vezes no Business e sem limite no Enterprise. O chip NFC sempre abre a versão mais recente automaticamente.</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initFAQ() {
  // Toggle function
  window.toggleFaq = function(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  };
}
