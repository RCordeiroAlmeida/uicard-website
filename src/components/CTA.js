export function createCTA() {
  return `
    <section id="cta-final">
      <div class="cta-label">Pronto para começar?</div>
      <div class="cta-title">
        Sua identidade digital<br>
        a <span style="background:linear-gradient(135deg,var(--gold-lt),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">um toque de distância.</span>
      </div>
      <p class="cta-sub">Sem mensalidade. Sem complicação. Pagamento apenas após aprovação do design.</p>
      <div class="cta-btns">
        <a href="#" onclick="openFmo();return false;" class="btn-primary" style="font-size:1rem;padding:17px 40px">
          Pedir meu UICard
          <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#planos" class="btn-ghost" style="font-size:1rem;padding:17px 32px">Ver planos</a>
      </div>
      <div class="cta-note">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Dados protegidos · Resposta em 24h úteis · Pagamento após aprovação
      </div>
    </section>
  `;
}

export function initCTA() {
  // No special initialization needed
}
