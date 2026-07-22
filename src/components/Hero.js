export function createHero() {
  return `
    <section id="hero">
      <canvas id="particles-canvas"></canvas>

      <div class="hero-left">
        <div class="eyebrow">
          <div class="eyebrow-dot"></div>
          Tecnologia NFC &middot; Identidade Digital Premium
        </div>
        <h1>
          Um toque.<br>
          Uma <span class="accent">impressão</span><br>
          <span class="underline-word">inesquecível.</span>
        </h1>
        <p class="hero-sub">
          Cartão NFC impresso com site e identidade digital integrada. Compartilhe seus dados com qualquer smartphone —
          sem app, sem papel, sem complicação.
        </p>
        <div class="hero-btns">
          <a href="#" onclick="openFmo();return false;" class="btn-primary">
            Quero meu UICard
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#planos" class="btn-ghost">Ver planos e preços</a>
        </div>
        <div class="hero-trust">
          <div class="trust-item">
            <div>
              <div class="trust-num">3s</div>
              <div class="trust-label">Para<br>compartilhar</div>
            </div>
          </div>

          <div style="width:1px;background:rgba(255,255,255,.06);"></div>
          <div class="trust-item">
            <div>
              <div class="trust-num">0</div>
              <div class="trust-label">Apps<br>necessários</div>
            </div>
          </div>
          <div style="width:1px;background:rgba(255,255,255,.06);"></div>
          <div class="trust-item">
            <div>
              <div class="trust-num">100%</div>
              <div class="trust-label">Sem<br>papel</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="card-scene">
          <div class="card-3d" id="hero-card">
            <div class="card-face">
              <div class="card-holo"></div>
              <div class="card-top">
                <div class="chip"></div>
                <div class="card-brand">
                  <div class="nfc-waves">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12a8 8 0 0 0-8-8" stroke="#4F8EFF" stroke-width="1.8" stroke-linecap="round"
                        opacity=".4" />
                      <path d="M17 12a5 5 0 0 0-5-5" stroke="#4F8EFF" stroke-width="1.8" stroke-linecap="round"
                        opacity=".65" />
                      <path d="M14 12a2 2 0 0 0-2-2" stroke="#4F8EFF" stroke-width="1.8" stroke-linecap="round"
                        opacity=".9" />
                      <circle cx="12" cy="12" r="1" fill="#4F8EFF" />
                    </svg>
                  </div>
                  <div class="card-brand-text">UICARD</div>
                </div>
              </div>
              <div class="card-mid">
                <div class="card-mid-line"></div>
              </div>
              <div class="card-bottom">
                <div class="card-name-block">
                  <div class="card-holder-name">JOÃO MENDES</div>
                  <div class="card-holder-role">Diretor Comercial · UICard</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-shadow"></div>
          <div class="card-tag-float">
            <div class="tag-dot"></div>
            Cartão ativo e pronto para uso
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  // Particles
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    W = canvas.width = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function rand(min, max) { 
    return Math.random() * (max - min) + min; 
  }

  function init() {
    particles = [];
    const count = Math.floor(W / 22);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: rand(0, W), y: rand(0, H),
        r: rand(0.4, 1.6),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.08, -0.3),
        alpha: rand(0.1, 0.45),
        gold: Math.random() > 0.65
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(201,168,76,${p.alpha})`
        : `rgba(79,142,255,${p.alpha})`;
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.y < -4) { p.y = H + 4; p.x = rand(0, W); }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;
    });
    requestAnimationFrame(draw);
  }

  resize(); 
  init(); 
  draw();
  
  window.addEventListener('resize', () => { 
    resize(); 
    init(); 
  });

  // Card 3D Mouse Tilt
  const card = document.getElementById('hero-card');
  if (!card) return;
  
  const parent = card.parentElement;
  parent.addEventListener('mousemove', e => {
    const rect = parent.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `rotateY(${dx * 18 - 10}deg) rotateX(${-dy * 10 + 4}deg) scale(1.04)`;
    card.style.transition = 'transform .1s ease';
  });
  parent.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
    setTimeout(() => { card.style.transition = ''; }, 600);
  });
}
