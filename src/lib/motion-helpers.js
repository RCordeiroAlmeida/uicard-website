// Helpers de micro-interação com Motion (motion.dev, API vanilla) — dono de
// tudo que é clique/hover/toggle isolado num único componente. Reveal por
// scroll fica em animations.js (GSAP).
import { animate } from 'motion';
import { prefersReducedMotion } from './animations.js';

const EASE = [0.22, 1, 0.36, 1]; // mesma curva de --ease-out

function dur(seconds) {
  return prefersReducedMotion() ? 0 : seconds;
}

/** Feedback de press/hover num botão ou elemento clicável. */
export function pressable(el, { pressScale = 0.96 } = {}) {
  if (!el) return () => {};

  const press = () => animate(el, { scale: pressScale }, { duration: dur(0.15), easing: EASE });
  const release = () => animate(el, { scale: 1 }, { duration: dur(0.25), easing: EASE });

  el.addEventListener('pointerdown', press);
  el.addEventListener('pointerup', release);
  el.addEventListener('pointerleave', release);
  el.addEventListener('pointercancel', release);

  return () => {
    el.removeEventListener('pointerdown', press);
    el.removeEventListener('pointerup', release);
    el.removeEventListener('pointerleave', release);
    el.removeEventListener('pointercancel', release);
  };
}

/** Expande um painel de altura 0 até o conteúdo (accordion do FAQ). */
export async function expandPanel(panel) {
  panel.style.display = 'block';
  panel.style.overflow = 'hidden';
  const target = panel.scrollHeight;
  await animate(
    panel,
    { height: [0, `${target}px`], opacity: [0, 1] },
    { duration: dur(0.32), easing: EASE }
  ).finished;
  panel.style.height = 'auto';
  panel.style.overflow = '';
}

/** Recolhe um painel de accordion até altura 0. */
export async function collapsePanel(panel) {
  const current = panel.scrollHeight;
  panel.style.overflow = 'hidden';
  panel.style.height = `${current}px`;
  await animate(
    panel,
    { height: [`${current}px`, '0px'], opacity: [1, 0] },
    { duration: dur(0.26), easing: EASE }
  ).finished;
  panel.style.display = 'none';
  panel.style.overflow = '';
}

/** Entrada de um único elemento autocontido (ex: menu mobile em tela cheia). */
export async function showPanel(el) {
  await animate(el, { opacity: [0, 1], y: [-12, 0] }, { duration: dur(0.3), easing: EASE }).finished;
}

/** Saída de um único elemento autocontido. */
export async function hidePanel(el) {
  await animate(el, { opacity: [1, 0], y: [0, -12] }, { duration: dur(0.2), easing: EASE }).finished;
}

/** Troca de passo dentro de um mesmo painel (wizard do formulário de pedido).
 * O passo que sai desliza contra o sentido da navegação, o que entra vem do
 * lado oposto — é o que faz "avançar" e "voltar" parecerem direções, não
 * dois estados sem relação. */
export async function swapStep(outEl, inEl, { back = false } = {}) {
  const shift = back ? -20 : 20;

  if (outEl && !outEl.hidden) {
    await animate(outEl, { opacity: [1, 0], x: [0, -shift] }, { duration: dur(0.16), easing: EASE }).finished;
    outEl.hidden = true;
  }

  inEl.hidden = false;
  await animate(inEl, { opacity: [0, 1], x: [shift, 0] }, { duration: dur(0.3), easing: EASE }).finished;
}

/** Entrada de overlay+painel (modais). */
export async function showOverlay(overlayEl, panelEl) {
  animate(overlayEl, { opacity: [0, 1] }, { duration: dur(0.25), easing: EASE });
  await animate(
    panelEl,
    { opacity: [0, 1], scale: [0.96, 1], y: [24, 0] },
    { duration: dur(0.35), easing: EASE }
  ).finished;
}

/** Saída de overlay+painel — resolve só depois da animação, pra quem chama
 * poder esconder o elemento (display:none) sem cortar a transição. */
export async function hideOverlay(overlayEl, panelEl) {
  await Promise.all([
    animate(panelEl, { opacity: [1, 0], scale: [1, 0.96], y: [0, 16] }, { duration: dur(0.22), easing: EASE }).finished,
    animate(overlayEl, { opacity: [1, 0] }, { duration: dur(0.22), easing: EASE }).finished,
  ]);
}
