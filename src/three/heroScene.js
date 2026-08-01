// Cena 3D do hero — card NFC preto com decal dourado do logo. Carregado
// dinamicamente por Hero.js (só quando WebGL + prefers-reduced-motion
// permitem), então o three.js nunca entra no caminho crítico da página.
//
// Segurança/perf (revisado antes de seguir pro próximo componente):
// - Zero asset remoto: o environment map é gerado localmente (RoomEnvironment
//   + PMREMGenerator) e a textura do logo é desenhada num canvas offscreen a
//   partir dos mesmos paths de src/lib/logo.js — nenhum fetch de rede.
// - Nada é anexado a `window`.
// - O loop de render pausa via IntersectionObserver (fora da viewport) e
//   `visibilitychange` (aba oculta), e `destroy()` dá dispose em toda
//   geometry/material/textura/renderer.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { gsap } from '../lib/animations.js';
import { LOGO_PATHS, LOGO_VIEWBOX, LOGO_GOLD } from '../lib/logo.js';

const CARD_W = 3.4;
const CARD_H = 2.14;
const CARD_D = 0.06;

function buildLogoTexture() {
  const px = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = px;
  canvas.height = Math.round(px * (CARD_H / CARD_W));
  const ctx = canvas.getContext('2d');

  // Mesma composição do logo oficial: marca acima, wordmark abaixo, ambos
  // centrados e na mesma cor (o original não separa "UI" de "CARD").
  const glyphSize = canvas.height * 0.36;
  const scale = glyphSize / LOGO_VIEWBOX;
  const originX = canvas.width * 0.5 - glyphSize / 2;
  const originY = canvas.height * 0.22;

  ctx.save();
  ctx.translate(originX, originY);
  ctx.scale(scale, scale);
  ctx.strokeStyle = LOGO_GOLD;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  LOGO_PATHS.forEach(p => {
    ctx.globalAlpha = p.opacity;
    ctx.lineWidth = p.width;
    ctx.stroke(new Path2D(p.d));
  });
  ctx.restore();
  ctx.globalAlpha = 1;

  const tracking = Math.round(canvas.height * 0.042);
  ctx.fillStyle = LOGO_GOLD;
  ctx.font = `300 ${Math.round(canvas.height * 0.1)}px "Plus Jakarta Sans", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  let trackingNudge = 0;
  try {
    ctx.letterSpacing = `${tracking}px`;
    // `letterSpacing` do canvas também adiciona espaço DEPOIS da última letra,
    // o que desloca o texto centralizado pra esquerda — compensa metade disso.
    trackingNudge = tracking / 2;
  } catch {
    /* propriedade experimental — ignora se o browser não suportar */
  }
  ctx.fillText('UICARD', canvas.width / 2 + trackingNudge, originY + glyphSize + canvas.height * 0.05);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createWebGLRenderer(canvas) {
  try {
    return new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
}

/**
 * Monta a cena no `container` dado. Retorna `null` se WebGL não estiver
 * disponível (chamador deve usar o fallback estático em CSS nesse caso).
 */
export function mountHeroScene(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero-scene-canvas';
  canvas.style.opacity = '0';
  container.appendChild(canvas);

  const renderer = createWebGLRenderer(canvas);
  if (!renderer) {
    canvas.remove();
    return null;
  }

  RectAreaLightUniformsLib.init();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envRT = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;
  pmremGenerator.dispose();

  const cardGroup = new THREE.Group();
  scene.add(cardGroup);

  const bodyGeometry = new RoundedBoxGeometry(CARD_W, CARD_H, CARD_D, 6, 0.12);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0a0a0f,
    roughness: 0.4,
    metalness: 0.7,
    clearcoat: 0.8,
    clearcoatRoughness: 0.2,
  });
  cardGroup.add(new THREE.Mesh(bodyGeometry, bodyMaterial));

  const logoTexture = buildLogoTexture();
  const decalGeometry = new THREE.PlaneGeometry(CARD_W * 0.92, CARD_H * 0.92);
  const decalMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true, depthWrite: false });
  const decal = new THREE.Mesh(decalGeometry, decalMaterial);
  decal.position.z = CARD_D / 2 + 0.002;
  cardGroup.add(decal);

  const keyLight = new THREE.DirectionalLight(0xfff2d8, 1.1);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);

  const rimLight = new THREE.RectAreaLight(0xe3b04b, 6, 4, 4);
  rimLight.position.set(-3, 1, -2);
  rimLight.lookAt(0, 0, 0);
  scene.add(rimLight);

  scene.add(new THREE.AmbientLight(0x404040, 0.6));

  // Folga em volta do cartão: cobre a rotação idle (que amplia a silhueta
  // projetada) e deixa respiro pro glow sem encostar nas bordas do palco.
  const FRAME_MARGIN = 1.34;

  function frameToContainer() {
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;

    // Reenquadra por distância em vez de deixar o cartão encolher/estourar
    // conforme a proporção do palco muda entre desktop e mobile.
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    const distV = (CARD_H * FRAME_MARGIN / 2) / Math.tan(vFov / 2);
    const distH = (CARD_W * FRAME_MARGIN / 2) / Math.tan(hFov / 2);
    camera.position.z = Math.max(distV, distH);

    camera.updateProjectionMatrix();
  }
  frameToContainer();

  const resizeObserver = new ResizeObserver(() => frameToContainer());
  resizeObserver.observe(container);

  // Rotação idle contínua (funciona mesmo sem ponteiro/touch) + offset de
  // ponteiro suavizado por cima, limitado a uma faixa pequena pra idle
  // continuar dominante quando não há interação.
  const pointerTarget = { x: 0, y: 0 };
  const pointerCurrent = { x: 0, y: 0 };
  const BASE_ROTATION = { x: 0.12, y: -0.35, z: -0.02 };

  function onPointerMove(e) {
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pointerTarget.x = THREE.MathUtils.clamp(ny, -1, 1) * 0.15;
    pointerTarget.y = THREE.MathUtils.clamp(nx, -1, 1) * 0.2;
  }
  function onPointerLeave() {
    pointerTarget.x = 0;
    pointerTarget.y = 0;
  }
  container.addEventListener('pointermove', onPointerMove);
  container.addEventListener('pointerleave', onPointerLeave);

  cardGroup.rotation.set(BASE_ROTATION.x, BASE_ROTATION.y, BASE_ROTATION.z);
  cardGroup.scale.setScalar(0.85);

  const clock = new THREE.Clock();
  let rafId = null;

  function renderFrame() {
    const elapsed = clock.getElapsedTime();
    pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.08;
    pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.08;

    cardGroup.rotation.x = BASE_ROTATION.x + Math.sin(elapsed * 0.6) * 0.03 + pointerCurrent.x;
    cardGroup.rotation.y = BASE_ROTATION.y + elapsed * 0.12 + pointerCurrent.y;

    renderer.render(scene, camera);
  }

  function tick() {
    rafId = requestAnimationFrame(tick);
    renderFrame();
  }

  function play() {
    if (rafId !== null) return;
    clock.start();
    tick();
  }

  function pause() {
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
  }

  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => (entry.isIntersecting ? play() : pause()));
  }, { threshold: 0.05 });
  intersectionObserver.observe(container);

  function onVisibilityChange() {
    if (document.hidden) pause();
  }
  document.addEventListener('visibilitychange', onVisibilityChange);

  function reveal() {
    gsap.to(cardGroup.scale, { x: 1, y: 1, z: 1, duration: 1.1, ease: 'power3.out' });
    gsap.to(canvas, { opacity: 1, duration: 0.8, ease: 'power2.out' });
  }

  function destroy() {
    pause();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    container.removeEventListener('pointermove', onPointerMove);
    container.removeEventListener('pointerleave', onPointerLeave);
    bodyGeometry.dispose();
    bodyMaterial.dispose();
    decalGeometry.dispose();
    decalMaterial.dispose();
    logoTexture.dispose();
    envRT.dispose();
    renderer.dispose();
    canvas.remove();
  }

  if (import.meta.hot) {
    import.meta.hot.dispose(() => destroy());
  }

  return { reveal, destroy };
}
