import { logoLockup } from '../lib/logo.js';
import { openFormModal } from '../lib/formModalController.js';
import { pressable, showPanel, hidePanel } from '../lib/motion-helpers.js';

export function createNav() {
  return `
    <nav id="main-nav">
      <a href="#hero" class="logo" aria-label="UICard — início">${logoLockup({ size: 26 })}</a>
      <ul>
        <li><a href="#como">Como funciona</a></li>
        <li><a href="#funcionalidades">Funcionalidades</a></li>
        <li><a href="#planos">Planos</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#" class="nav-cta">Pedir agora</a></li>
      </ul>
      <button type="button" class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#como">Como funciona</a>
      <a href="#funcionalidades">Funcionalidades</a>
      <a href="#planos">Planos</a>
      <a href="#faq">FAQ</a>
      <a href="#" class="mm-cta">Pedir agora →</a>
    </div>
  `;
}

export function initNav() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!nav || !hamburger || !mobileMenu) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  let isOpen = false;

  async function openMenu() {
    isOpen = true;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    await showPanel(mobileMenu);
  }

  async function closeMenu() {
    if (!isOpen) return;
    isOpen = false;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    await hidePanel(mobileMenu);
    mobileMenu.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    if (isOpen) closeMenu();
    else openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      if (link.classList.contains('mm-cta')) {
        e.preventDefault();
        closeMenu();
        openFormModal();
      } else {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  const navCta = nav.querySelector('.nav-cta');
  if (navCta) {
    navCta.addEventListener('click', e => {
      e.preventDefault();
      openFormModal();
    });
    pressable(navCta);
  }

  pressable(hamburger, { pressScale: 0.9 });
}
