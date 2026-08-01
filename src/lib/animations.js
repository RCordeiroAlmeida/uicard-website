// Infraestrutura compartilhada de GSAP/ScrollTrigger — dono de tudo que é
// dirigido por scroll ou por sequência de carregamento de página. Micro
// interações discretas (hover, accordion, modal) ficam em motion-helpers.js.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Um único matchMedia compartilhado: cada `registerSectionReveal()` só
// adiciona mais uma condição a ele, então o site inteiro liga/desliga
// animação de scroll a partir de um lugar só.
const mm = gsap.matchMedia();

export function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Registra um reveal-on-scroll (fade + subida) para um seletor. Cada
 * componente chama isso uma vez dentro do próprio init(). Sob
 * `prefers-reduced-motion: reduce`, o conteúdo aparece direto, sem animar.
 */
export function registerSectionReveal(selector, opts = {}) {
  const { y = 24, stagger = 0.08, duration = 0.7, start = 'top 85%' } = opts;

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const targets = gsap.utils.toArray(selector);
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y });
    const triggers = ScrollTrigger.batch(targets, {
      start,
      once: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger, duration, ease: 'power3.out' }),
    });

    return () => triggers.forEach(t => t.kill());
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set(gsap.utils.toArray(selector), { clearProps: 'opacity,transform' });
  });
}

export { gsap, ScrollTrigger };
