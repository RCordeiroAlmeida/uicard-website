import { registerSectionReveal, gsap, prefersReducedMotion } from '../lib/animations.js';

const SPECS = [
  {
    title: 'Cartão premium',
    desc: 'Corpo em PVC de alta densidade, acabamento fosco, do tamanho de um cartão de crédito.',
  },
  {
    title: 'Chip NFC embutido',
    desc: 'Tecnologia sem contato — compatível com Android desde 2015 e iPhone 7 ou superior.',
  },
  {
    title: 'Site digital incluso',
    desc: 'Perfil, redes sociais, portfólio e contato reunidos num link só, editável quando quiser.',
  },
];

export function createProduct() {
  const specsHtml = SPECS.map(s => `
    <li class="product-spec">
      <span class="product-spec-title">${s.title}</span>
      <span class="product-spec-desc">${s.desc}</span>
    </li>
  `).join('');

  return `
    <section id="produto">
      <div class="shell product-layout">
        <div class="product-text">
          <div class="section-eyebrow">O produto</div>
          <h2 class="section-title">Seu cartão de visita,<br><span class="text-gold-gradient">reinventado.</span></h2>
          <p class="section-sub product-lede">
            O UICard é um cartão físico premium com um chip NFC embutido. Uma aproximação no celular abre o
            seu site digital — sem instalar nada, sem digitar nada.
          </p>
          <ul class="product-specs">
            ${specsHtml}
          </ul>
        </div>

        <div class="product-visual">
          <div class="product-image-frame">
            <img
              src="/assets/uicard.jpg"
              width="1254"
              height="1254"
              alt="Cartão UICard preto fosco com a logo dourada, encostado num smartphone exibindo o mesmo logo — ilustrando a conexão por NFC entre o cartão físico e o perfil digital."
              class="product-image"
            >
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProduct() {
  const section = document.getElementById('produto');
  if (!section) return;

  registerSectionReveal('#produto .product-spec', { stagger: 0.1 });
  registerSectionReveal('#produto .product-image-frame', { y: 32, duration: 0.9 });

  // Parallax fica no wrapper (.product-visual); o reveal de entrada acima
  // anima o filho (.product-image-frame) — elementos diferentes, então os
  // dois tweens de translateY não competem pela mesma transform.
  const visual = section.querySelector('.product-visual');
  if (visual && !prefersReducedMotion()) {
    gsap.to(visual, {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}
