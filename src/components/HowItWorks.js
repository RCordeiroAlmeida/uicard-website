export function createHowItWorks() {
  return `
    <section id="como">
      <div class="section-eyebrow">Como funciona</div>
      <div class="section-title">Da compra ao primeiro<br>toque em <span class="text-gold">4 etapas.</span></div>
      <p class="section-sub">Processo 100% guiado pela nossa equipe — você só precisa preencher o formulário.</p>

      <div class="steps-grid">
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">01</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8m-4-4v4" />
            </svg>
          </div>
          <h3>Escolha seu plano</h3>
          <p>Selecione entre Individual, Business ou Enterprise. Preencha o formulário em menos de 2 minutos.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">02</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
            </svg>
          </div>
          <h3>Personalizamos tudo</h3>
          <p>Nossa equipe cria o layout do cartão impresso e configura seu site digital com sua identidade visual.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">03</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h3>Receba em casa</h3>
          <p>Seu cartão NFC chega pronto para uso, chip já programado com seu link digital exclusivo e QR Code no verso.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">04</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <h3>Toque e conecte</h3>
          <p>Aproxime do celular de qualquer pessoa. Em 3 segundos seu site digital aparece — sem app necessário.</p>
        </div>
      </div>
    </section>
  `;
}

export function initHowItWorks() {
  // Animation handled by Intersection Observer in main.js
}
