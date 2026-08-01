import { gsap, prefersReducedMotion } from '../lib/animations.js';
import { pressable } from '../lib/motion-helpers.js';
import { openFormModal } from '../lib/formModalController.js';
import { logoMarkSVG } from '../lib/logo.js';

const FACTS = [
  '3 segundos para compartilhar',
  'Nenhum aplicativo para instalar',
  'Funciona em qualquer celular',
];

export function createHero() {
  const factsHtml = FACTS
    .map(f => `<li class="hero-fact">${f}</li>`)
    .join('');

  return `
    <section id="hero">
      <div class="hero-dawn" aria-hidden="true"></div>

      <div class="hero-inner">
        <p class="hero-greet hero-rise">
          <span class="hero-greet-dot" aria-hidden="true"></span>
          Prazer, somos a UICard
        </p>

        <h1 class="hero-title">
          <span class="hero-line hero-rise">Apresente-se</span>
          <span class="hero-line hero-rise">com <span class="text-gold-gradient">um toque</span>.</span>
        </h1>

        <p class="hero-sub hero-rise">
          Um cartão NFC feito com cuidado que abre o seu site de apresentação no celular de quem você
          acabou de conhecer. Sem app, sem papel, sem digitar nada.
        </p>

        <div class="hero-actions hero-rise">
          <a href="#" class="btn-primary" id="hero-cta-primary">
            Quero meu UICard
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#como" class="btn-ghost">Ver como funciona</a>
        </div>

        <ul class="hero-facts hero-rise">
          ${factsHtml}
        </ul>

        <div class="card-stage hero-stage">
          <div class="hero-scene-mount" id="hero-scene-mount" aria-hidden="true"></div>
          <div class="hero-card-static" id="hero-card-fallback" aria-hidden="true">
            <div class="hero-card-face">
              <span class="hero-card-mark">${logoMarkSVG(58)}</span>
              <span class="hero-card-word">UICARD</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#produto" class="hero-scroll" aria-label="Rolar para conhecer o produto">
        <span>Conheça o produto</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  `;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext
      && (canvas.getContext('webgl2') || canvas.getContext('webgl')));
  } catch {
    return false;
  }
}

async function mountScene() {
  const mount = document.getElementById('hero-scene-mount');
  const fallback = document.getElementById('hero-card-fallback');
  if (!mount) return;

  // Sob reduced-motion ou sem WebGL, o cartão estático em CSS (já visível
  // por padrão) é o resultado final — nem carregamos o módulo do three.js.
  if (prefersReducedMotion() || !supportsWebGL()) return;

  try {
    const { mountHeroScene } = await import('../three/heroScene.js');
    const scene = mountHeroScene(mount);
    if (!scene) return; // contexto WebGL falhou ao criar — mantém o fallback

    if (fallback) fallback.style.display = 'none';
    requestAnimationFrame(() => scene.reveal());
  } catch (err) {
    console.error('[Hero] Não foi possível carregar a cena 3D, mantendo o cartão estático:', err);
  }
}

function deferMountScene() {
  const run = () => mountScene();
  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, { timeout: 2000 });
  } else {
    window.addEventListener('load', run, { once: true });
  }
}

export function initHero() {
  const section = document.getElementById('hero');
  if (!section) return;

  const primaryCta = document.getElementById('hero-cta-primary');
  if (primaryCta) {
    primaryCta.addEventListener('click', e => {
      e.preventDefault();
      openFormModal();
    });
    pressable(primaryCta);
  }

  const ghostCta = section.querySelector('.hero-actions .btn-ghost');
  if (ghostCta) pressable(ghostCta);

  const rise = section.querySelectorAll('.hero-rise');
  const stage = section.querySelector('.hero-stage');
  const scrollHint = section.querySelector('.hero-scroll');

  if (prefersReducedMotion()) {
    gsap.set([...rise, stage, scrollHint], { clearProps: 'opacity,transform' });
    deferMountScene();
    return;
  }

  gsap.set(rise, { opacity: 0, y: 22 });
  gsap.set(stage, { opacity: 0, y: 46 });
  gsap.set(scrollHint, { opacity: 0 });

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to(rise, { opacity: 1, y: 0, duration: 0.85, stagger: 0.09 })
    .to(stage, { opacity: 1, y: 0, duration: 1.1 }, '-=0.55')
    .to(scrollHint, { opacity: 1, duration: 0.6 }, '-=0.3');

  deferMountScene();
}
