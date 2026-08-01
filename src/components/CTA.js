import { registerSectionReveal } from '../lib/animations.js';
import { pressable } from '../lib/motion-helpers.js';
import { openFormModal } from '../lib/formModalController.js';

export function createCTA() {
  return `
    <section id="cta-final">
      <div class="cta-label cta-reveal">
        <span class="cta-label-dot" aria-hidden="true"></span>
        Pronto para começar?
      </div>
      <h2 class="cta-title cta-reveal">
        Sua identidade digital<br>
        a <span class="text-gold-gradient">um toque de distância.</span>
      </h2>
      <p class="cta-sub cta-reveal">
        Sem mensalidade e sem complicação. Você só paga depois de aprovar o design do seu cartão.
      </p>
      <div class="cta-btns cta-reveal">
        <a href="#" class="btn-primary cta-btn-lg" id="cta-primary">
          Pedir meu UICard
          <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#planos" class="btn-ghost cta-btn-lg">Ver planos</a>
      </div>
      <div class="cta-note cta-reveal">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Dados protegidos · Resposta em 24h úteis · Pagamento após aprovação
      </div>
    </section>
  `;
}

export function initCTA() {
  const section = document.getElementById('cta-final');
  if (!section) return;

  registerSectionReveal('#cta-final .cta-reveal', { stagger: 0.08, y: 18 });

  const primaryCta = document.getElementById('cta-primary');
  if (primaryCta) {
    primaryCta.addEventListener('click', e => {
      e.preventDefault();
      openFormModal();
    });
    pressable(primaryCta);
  }

  const ghostCta = section.querySelector('.cta-btns .btn-ghost');
  if (ghostCta) pressable(ghostCta);
}
