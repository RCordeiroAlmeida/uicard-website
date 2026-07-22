export function createNav() {
  return `
    <nav id="main-nav">
      <div class="logo">UI<span>CARD</span></div>
      <ul>
        <li><a href="#como">Como funciona</a></li>
        <li><a href="#funcionalidades">Funcionalidades</a></li>
        <li><a href="#planos">Planos</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#" onclick="openFmo();return false;" class="nav-cta">Pedir agora</a></li>
      </ul>
      <div class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </div>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#como" onclick="toggleMenu()">Como funciona</a>
      <a href="#funcionalidades" onclick="toggleMenu()">Funcionalidades</a>
      <a href="#planos" onclick="toggleMenu()">Planos</a>
      <a href="#faq" onclick="toggleMenu()">FAQ</a>
      <a href="#" onclick="openFmo();toggleMenu();return false;" class="mm-cta">Pedir agora →</a>
    </div>
  `;
}

export function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 60);
  });
}

export function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobile-menu');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
