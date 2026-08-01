// Marca oficial UICard em vetor — "U" com contorno duplo (o traço do topo
// direito tem um degrau, formando o "I" embutido no "U") + três ondas NFC
// concêntricas saindo do canto superior direito.
//
// Fonte única dos traços: tanto o ícone SVG inline (Nav/Footer, `currentColor`)
// quanto a textura do cartão 3D (src/three/heroScene.js, via Path2D no canvas)
// desenham exatamente os mesmos paths, então os dois nunca divergem.

export const LOGO_VIEWBOX = 100;

// Cor oficial da marca. Usada onde não existe contexto de CSS (favicon,
// canvas do WebGL) — no DOM os SVGs herdam `currentColor`.
export const LOGO_GOLD = '#E3B04B';

export const LOGO_PATHS = [
  // Contorno do "U": externo → base → sobe pela direita → degrau do "I" →
  // desce pelo contorno interno → base interna → sobe pela esquerda.
  {
    d: 'M10 27V61a29 29 0 0 0 58 0V27H45v12h12v22a18 18 0 0 1-36 0V27Z',
    width: 5,
    opacity: 1,
  },
  // Ondas NFC — mesma espessura e mesma opacidade das três, como no original.
  { d: 'M77.4 30.8A8.5 8.5 0 0 0 70.2 23.7', width: 4, opacity: 1 },
  { d: 'M84.3 29.8A15.5 15.5 0 0 0 72.2 16.8', width: 4, opacity: 1 },
  { d: 'M91.3 28.7A22.5 22.5 0 0 0 73.7 9.9', width: 4, opacity: 1 },
];

/**
 * Ícone isolado da marca, pronto pra colorir via CSS (`color: var(--gold)`)
 * em quem o incluir no template — usa `currentColor`, não gradiente embutido,
 * pra não colidir IDs quando o mesmo SVG aparece várias vezes na página.
 */
export function logoMarkSVG(size = 28) {
  const paths = LOGO_PATHS
    .map(p => `<path d="${p.d}" fill="none" stroke="currentColor" stroke-width="${p.width}" stroke-linecap="round" stroke-linejoin="round" opacity="${p.opacity}" />`)
    .join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${LOGO_VIEWBOX} ${LOGO_VIEWBOX}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${paths}</svg>`;
}

/**
 * Ícone + wordmark "UICARD" (usado por Nav/Footer). No logo oficial o wordmark
 * é monocromático dourado, peso leve e com tracking largo — sem separação de
 * cor entre "UI" e "CARD". `className` permite customizar o wrapper do ícone
 * sem duplicar o markup em cada consumidor.
 */
export function logoLockup({ size = 28, className = 'logo-mark' } = {}) {
  return `
    <span class="${className}">${logoMarkSVG(size)}</span>
    <span class="logo-word">UICARD</span>
  `;
}
