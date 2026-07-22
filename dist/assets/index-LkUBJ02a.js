(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function wt(){return`
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
  `}function kt(){window.addEventListener("scroll",()=>{document.getElementById("main-nav").classList.toggle("scrolled",window.scrollY>60)})}function zt(){const e=document.getElementById("hamburger"),t=document.getElementById("mobile-menu");e.classList.toggle("open"),t.classList.toggle("open")}function $t(){return`
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
  `}function Et(){const e=document.getElementById("particles-canvas");if(!e)return;const t=e.getContext("2d");let n,o,r=[];function i(){const l=document.getElementById("hero");l&&(n=e.width=l.offsetWidth,o=e.height=l.offsetHeight)}function s(l,f){return Math.random()*(f-l)+l}function a(){r=[];const l=Math.floor(n/22);for(let f=0;f<l;f++)r.push({x:s(0,n),y:s(0,o),r:s(.4,1.6),vx:s(-.15,.15),vy:s(-.08,-.3),alpha:s(.1,.45),gold:Math.random()>.65})}function c(){t.clearRect(0,0,n,o),r.forEach(l=>{t.beginPath(),t.arc(l.x,l.y,l.r,0,Math.PI*2),t.fillStyle=l.gold?`rgba(201,168,76,${l.alpha})`:`rgba(79,142,255,${l.alpha})`,t.fill(),l.x+=l.vx,l.y+=l.vy,l.y<-4&&(l.y=o+4,l.x=s(0,n)),l.x<-4&&(l.x=n+4),l.x>n+4&&(l.x=-4)}),requestAnimationFrame(c)}i(),a(),c(),window.addEventListener("resize",()=>{i(),a()});const u=document.getElementById("hero-card");if(!u)return;const d=u.parentElement;d.addEventListener("mousemove",l=>{const f=d.getBoundingClientRect(),h=f.left+f.width/2,v=f.top+f.height/2,g=(l.clientX-h)/(f.width/2),z=(l.clientY-v)/(f.height/2);u.style.transform=`rotateY(${g*18-10}deg) rotateX(${-z*10+4}deg) scale(1.04)`,u.style.transition="transform .1s ease"}),d.addEventListener("mouseleave",()=>{u.style.transform="",u.style.transition="transform .6s cubic-bezier(.22,1,.36,1)",setTimeout(()=>{u.style.transition=""},600)})}function It(){return`
    <div class="ticker-wrap">
      <div class="ticker-inner" id="ticker"></div>
    </div>
  `}function Zt(){const e=["NFC Premium","Sem App Necessário","Site Digital Incluso","Design Personalizado","Atualizações Ilimitadas","QR Code no Verso","Identidade Digital","Suporte Dedicado","Tecnologia NFC","Link Exclusivo","Zero Papel","Conecte em 3 Segundos"],t=document.getElementById("ticker"),n=[...e,...e];t.innerHTML=n.map(o=>`<div class="ticker-item"><div class="ticker-dot"></div>${o}</div>`).join("")}function St(){return`
    <section id="como">
      <div class="section-eyebrow">Como funciona</div>
      <div class="section-title">Da compra ao primeiro<br>toque em <span class="text-gold">4 etapas.</span></div>
      <p class="section-sub">Processo 100% guiado pela nossa equipe — você só precisa preencher o formulário.</p>

      <div class="steps-grid">
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">01</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8m-4-4v4" />
            </svg>
          </div>
          <h3>Escolha seu plano</h3>
          <p>Selecione entre Individual, Business ou Enterprise. Preencha o formulário em menos de 2 minutos.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">02</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
            </svg>
          </div>
          <h3>Personalizamos tudo</h3>
          <p>Nossa equipe cria o layout do cartão impresso e configura seu site digital com sua identidade visual.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">03</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h3>Receba em casa</h3>
          <p>Seu cartão NFC chega pronto para uso, chip já programado com seu link digital exclusivo e QR Code no verso.</p>
        </div>
        <div class="step anim-fade">
          <div class="step-num-outer">
            <div class="step-n">04</div>
          </div>
          <div class="step-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <h3>Toque e conecte</h3>
          <p>Aproxime do celular de qualquer pessoa. Em 3 segundos seu site digital aparece — sem app necessário.</p>
        </div>
      </div>
    </section>
  `}function Ot(){return`
    <section id="funcionalidades">
      <div class="section-eyebrow">Funcionalidades</div>
      <div class="section-title">Tudo que você precisa,<br><span class="text-gold">num único produto.</span></div>
      <p class="section-sub">Cada UICard entregue acompanha um ecossistema digital completo, pronto para usar no mesmo dia.</p>

      <div class="features-bento">
        <div class="feat-card span2 anim-fade">
          <div class="feat-visual-row">
            <div>
              <div class="feat-icon">📱</div>
              <h3>Site / Cartão Digital</h3>
              <p>Página responsiva exclusiva com seus dados, foto, links e identidade visual. Funciona em qualquer navegador, sem instalar nada.</p>
              <span class="feat-pill pill-gold">Incluso no pacote</span>
            </div>
            <div style="flex:1;display:flex;justify-content:flex-end;gap:12px;align-items:center;">
              <div class="feat-visual-mini-card" style="transform:rotate(-4deg)">
                <div class="mini-chip"></div>
                <div class="mini-name">J. MENDES</div>
              </div>
              <div class="feat-visual-mini-card" style="transform:rotate(2deg);margin-top:20px">
                <div class="mini-chip"></div>
                <div class="mini-name">A. SILVA</div>
              </div>
            </div>
          </div>
        </div>

        <div class="feat-card anim-fade">
          <div class="feat-icon">🔗</div>
          <h3>Link Personalizado</h3>
          <p>URL própria como <code style="font-size:.8rem;color:var(--gold);background:rgba(201,168,76,.08);padding:2px 7px;border-radius:5px">seunome.uicard.com.br</code> para compartilhar por WhatsApp, e-mail e assinatura.</p>
          <span class="feat-pill pill-gold">Incluso</span>
        </div>

        <div class="feat-card dark anim-fade">
          <div class="feat-icon" style="background:rgba(79,142,255,.08);border-color:rgba(79,142,255,.15)">📊</div>
          <h3>Análise de Acessos</h3>
          <p>Saiba quantas vezes seu cartão foi visualizado, de onde vieram os contatos e quais links foram mais clicados. Funcionalidade em desenvolvimento.</p>
          <span class="feat-pill pill-blue">Em breve</span>
        </div>

        <div class="feat-card anim-fade">
          <div class="feat-icon">✏️</div>
          <h3>Atualizações do Site Digital</h3>
          <p>Mudou de cargo, telefone ou empresa? Atualize seu cartão digital quando precisar. Individual: até 3 atualizações. Business: até 10. Enterprise: ilimitadas.</p>
          <span class="feat-pill pill-gold">Incluso em todos os planos</span>
        </div>

        <div class="feat-card dark anim-fade">
          <div class="feat-icon" style="background:rgba(52,211,153,.07);border-color:rgba(52,211,153,.15)">🏢</div>
          <h3>Kit Empresarial</h3>
          <p>Identidade visual unificada para toda a equipe, dashboard centralizado e gerente de conta dedicado.</p>
          <span class="feat-pill pill-green">Enterprise</span>
        </div>

        <div class="feat-card anim-fade">
          <div class="feat-icon">🎨</div>
          <h3>Design Premium</h3>
          <p>Impressão UV, acabamento metalizado ou fosco e chip NFC embutido de alta durabilidade. QR Code no verso incluso.</p>
          <span class="feat-pill pill-gold">Incluso</span>
        </div>
      </div>
    </section>
  `}function Pt(){return`
    <section id="planos">
      <div class="pricing-header">
        <div>
          <div class="section-eyebrow">Planos e preços</div>
          <div class="section-title" style="margin-bottom:8px">Invista uma vez.<br><span class="text-gold">Use para sempre.</span></div>
          <p style="color:var(--muted2);font-size:.92rem;max-width:440px">Sem mensalidade, sem renovação obrigatória. O site digital e as atualizações são sempre inclusos.</p>
        </div>
      </div>

      <div class="bulk-banner">
        <div class="bulk-icon">⚡</div>
        <div class="bulk-text">
          <h4>Precisa de mais cartões? Quanto mais, menor o preço.</h4>
          <p>A partir de 5 unidades (nos planos Individual e Business) ou 10 unidades (no Enterprise), cada cartão adicional sai por apenas R$ 25.</p>
        </div>
        <div class="bulk-vs">
          <del>R$ 89 / un</del>
          <strong>↓ R$ 25 / un</strong>
        </div>
        <div class="bulk-price">
          <div class="bulk-price-val">R$ 25</div>
          <div class="bulk-price-label">a partir de 5 un.</div>
        </div>
      </div>

      <div class="pricing-grid">
        <div class="plan-card anim-fade">
          <div class="plan-name">Individual</div>
          <div class="plan-price">
            <span class="plan-currency">R$</span>
            <span class="plan-amount">149</span>
            <span class="plan-period">&nbsp;/ único</span>
          </div>
          <div class="plan-desc">Para profissionais, freelancers e quem quer se destacar no networking.</div>
          <div class="plan-divider"></div>
          <ul class="plan-items">
            <li class="yes"><span class="pi-check y">✓</span> 1 cartão NFC personalizado</li>
            <li class="yes"><span class="pi-check y">✓</span> Site / cartão digital completo</li>
            <li class="yes"><span class="pi-check y">✓</span> Link personalizado</li>
            <li class="yes"><span class="pi-check y">✓</span> Até 3 atualizações no site</li>
            <li class="yes"><span class="pi-check y">✓</span> QR Code no verso</li>
            <li><span class="pi-check n">–</span> Suporte prioritário</li>
          </ul>
          <a href="#" onclick="openFmo('individual');return false;" class="plan-btn plan-btn-outline">Escolher Individual</a>
        </div>

        <div class="plan-card featured anim-fade">
          <div class="plan-popular">⭐ Mais Vendido</div>
          <div class="plan-name">Business</div>
          <div class="plan-price">
            <span class="plan-currency">R$</span>
            <span class="plan-amount">250</span>
            <span class="plan-period">&nbsp;/ único</span>
          </div>
          <div class="plan-desc">Para empresários, gestores e profissionais que querem impressionar em cada reunião.</div>
          <div class="plan-divider"></div>
          <ul class="plan-items">
            <li class="yes"><span class="pi-check y">✓</span> 1 cartão NFC premium</li>
            <li class="yes"><span class="pi-check y">✓</span> Site digital + logo da empresa</li>
            <li class="yes"><span class="pi-check y">✓</span> Link personalizado</li>
            <li class="yes"><span class="pi-check y">✓</span> Até 10 atualizações no site</li>
            <li class="yes"><span class="pi-check y">✓</span> QR Code no verso</li>
            <li class="yes"><span class="pi-check y">✓</span> Suporte prioritário (48h)</li>
          </ul>
          <a href="#" onclick="openFmo('business');return false;" class="plan-btn plan-btn-gold">Escolher Business</a>
        </div>

        <div class="plan-card anim-fade">
          <div class="plan-name">Enterprise</div>
          <div class="plan-price">
            <span class="plan-currency">R$</span>
            <span class="plan-amount">899</span>
            <span class="plan-period">&nbsp;/ kit</span>
          </div>
          <div class="plan-desc">Kit para equipes de até 10 pessoas com identidade visual unificada e gestão centralizada.</div>
          <div class="plan-divider"></div>
          <ul class="plan-items">
            <li class="yes"><span class="pi-check y">✓</span> 10 cartões NFC premium</li>
            <li class="yes"><span class="pi-check y">✓</span> Sites digitais individuais (padrão da empresa)</li>
            <li class="yes"><span class="pi-check y">✓</span> Identidade visual unificada</li>
            <li class="yes"><span class="pi-check y">✓</span> Atualizações ilimitadas no site</li>
            <li class="yes" style="opacity:.6"><span class="pi-check y">✓</span> Dashboard da equipe <span style="font-size:.7rem;background:rgba(79,142,255,.12);border:1px solid rgba(79,142,255,.2);color:var(--blue-lt);padding:2px 8px;border-radius:100px;vertical-align:middle;margin-left:4px">Em breve</span></li>
            <li class="yes"><span class="pi-check y">✓</span> Gerente de conta dedicado</li>
            <li class="yes"><span class="pi-check y">✓</span> Extras por R$ 25/un (mín. 10)</li>
          </ul>
          <a href="#" onclick="openFmo('enterprise');return false;" class="plan-btn plan-btn-outline">Escolher Enterprise</a>
        </div>
      </div>

      <div class="addon-note">
        <svg class="addon-note-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4m0-4h.01" />
        </svg>
        <span>Cartões adicionais avulsos: <strong style="color:var(--white)">R$ 89 por unidade</strong>. Individual &amp; Business: a partir de <strong style="color:#34D399">5 adicionais → R$ 25/un</strong>. Enterprise: a partir de <strong style="color:#34D399">10 adicionais → R$ 25/un</strong>. Desconto aplicado automaticamente no formulário.</span>
      </div>
    </section>
  `}function Ct(){return`
    <section id="prova">
      <div style="text-align:center;margin-bottom:52px">
        <div class="section-eyebrow" style="justify-content:center">O que dizem sobre o UICard</div>
        <div class="section-title">Quem usou,<br><span class="text-gold">recomenda.</span></div>
      </div>
      <div class="proof-grid">
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Simplesmente absurdo como isso impressiona clientes. Em toda reunião alguém pede pra tocar no cartão de novo pra ver funcionar. Melhor investimento do ano.</p>
          <div class="testimonial-author">
            <div class="author-avatar">RM</div>
            <div>
              <div class="author-name">Ricardo Melo</div>
              <div class="author-role">CEO · Melo Investimentos</div>
            </div>
          </div>
        </div>
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Comprei o kit Enterprise para minha equipe de vendas. A entrega foi rápida, o design ficou perfeito, e os clientes adoram. Já viralizou no nosso Instagram.</p>
          <div class="testimonial-author">
            <div class="author-avatar">CA</div>
            <div>
              <div class="author-name">Camila Andrade</div>
              <div class="author-role">Diretora Comercial · StrategyBR</div>
            </div>
          </div>
        </div>
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Atualizo meu site digital quando quero, o cartão continua o mesmo. Economizei na gráfica e zero cartão de papel. Qualidade premium do físico também.</p>
          <div class="testimonial-author">
            <div class="author-avatar">FS</div>
            <div>
              <div class="author-name">Felipe Souza</div>
              <div class="author-role">Arquiteto · Estúdio FSA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Nt(){return`
    <section id="faq">
      <div class="faq-layout">
        <div class="faq-sticky">
          <div class="section-eyebrow">FAQ</div>
          <div class="section-title" style="margin-bottom:12px">Dúvidas<br><span class="text-gold">frequentes.</span></div>
          <p style="color:var(--muted2);font-size:.9rem;line-height:1.7">Não encontrou sua dúvida? Nossa equipe responde no WhatsApp em até 2 horas em dias úteis.</p>
          <div class="faq-cta-box">
            <h4>Pronto para pedir?</h4>
            <p>Preencha o formulário e nossa equipe entra em contato para fechar os detalhes.</p>
            <a href="#" onclick="openFmo();return false;" class="btn-primary" style="font-size:.85rem;padding:12px 22px;border-radius:8px">Fazer pedido →</a>
          </div>
        </div>
        <div class="faq-list">
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              O site/cartão digital já está incluso no preço do cartão NFC?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Sim! Todo UICard inclui a criação e hospedagem do seu site/cartão de visita digital, com link próprio. As atualizações do conteúdo do site são inclusas conforme o plano: até 3 no Individual, até 10 no Business e ilimitadas no Enterprise.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Como funciona o desconto para cartões em quantidade?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Cartões adicionais avulsos custam R$ 89 por unidade. Nos planos Individual e Business, a partir de 5 adicionais o preço cai para R$ 25/un. No Enterprise, o desconto de R$ 25/un vale a partir de 10 adicionais. O desconto é calculado automaticamente no formulário de pedido.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Funciona em qualquer celular?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">A leitura NFC funciona em qualquer Android a partir de 2015 e em iPhones a partir do iPhone 7. Para celulares sem NFC, basta escanear o QR Code impresso no verso — o resultado é idêntico.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Quando e como faço o pagamento?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Após o pedido, nossa equipe entra em contato via WhatsApp para validar os dados e apresentar o layout. O pagamento (Pix, cartão ou boleto) ocorre somente após você aprovar o design. Zero cobrança antes disso.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Quanto tempo leva para receber meu cartão?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Após confirmação do pagamento e aprovação do layout, o prazo de produção e entrega é de 7 a 15 dias úteis, dependendo da sua localização. Kits Enterprise podem ter prazos diferenciados informados no atendimento.</div>
          </div>
          <div class="faq-item anim-fade">
            <button class="faq-q" onclick="toggleFaq(this)">
              Posso atualizar meu site digital depois?
              <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div class="faq-a">Sim! O cartão físico permanece o mesmo, mas o conteúdo do seu site digital pode ser atualizado conforme o limite do seu plano: até 3 vezes no Individual, até 10 vezes no Business e sem limite no Enterprise. O chip NFC sempre abre a versão mais recente automaticamente.</div>
          </div>
        </div>
      </div>
    </section>
  `}function xt(){window.toggleFaq=function(e){const t=e.closest(".faq-item"),n=t.classList.contains("open");document.querySelectorAll(".faq-item").forEach(o=>o.classList.remove("open")),n||t.classList.add("open")}}function At(){return`
    <section id="cta-final">
      <div class="cta-label">Pronto para começar?</div>
      <div class="cta-title">
        Sua identidade digital<br>
        a <span style="background:linear-gradient(135deg,var(--gold-lt),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">um toque de distância.</span>
      </div>
      <p class="cta-sub">Sem mensalidade. Sem complicação. Pagamento apenas após aprovação do design.</p>
      <div class="cta-btns">
        <a href="#" onclick="openFmo();return false;" class="btn-primary" style="font-size:1rem;padding:17px 40px">
          Pedir meu UICard
          <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#planos" class="btn-ghost" style="font-size:1rem;padding:17px 32px">Ver planos</a>
      </div>
      <div class="cta-note">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Dados protegidos · Resposta em 24h úteis · Pagamento após aprovação
      </div>
    </section>
  `}function Tt(){return`
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="footer-logo">UI<span>CARD</span></span>
          <p class="footer-tagline">Cartão NFC premium com identidade digital integrada. Um toque, uma conexão inesquecível.</p>
        </div>
        <div class="footer-col">
          <h5>Produto</h5>
          <a href="#como">Como funciona</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#prova">Depoimentos</a>
        </div>
        <div class="footer-col">
          <h5>Suporte</h5>
          <a href="#faq">FAQ</a>
          <a href="#">WhatsApp</a>
          <a href="#">E-mail</a>
        </div>
        <div class="footer-col">
          <h5>Legal</h5>
          <a href="#">Privacidade</a>
          <a href="#">Termos de uso</a>
          <a href="#">Política de entrega</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2025 UICard. Todos os direitos reservados.</div>
        <div class="footer-badges">
          <div class="f-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Dados protegidos
          </div>
          <div class="f-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Pagamento seguro
          </div>
          <div class="f-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Suporte ativo
          </div>
        </div>
      </div>
    </footer>
  `}function Rt(){return`
    <div class="fmo" id="fmo" onclick="handleFmoClick(event)">
      <div class="fmo-panel">
        <button class="fmo-close" onclick="closeFmo()" aria-label="Fechar">✕</button>

        <div class="fmo-sidebar">
          <div class="fmo-brand">UI<span>CARD</span></div>
          <div class="fmo-sidebar-headline">Seu cartão.<br><em>Sua identidade</em><br>digital.</div>
          <div class="fmo-sidebar-sub">Nossa equipe entra em contato em até 24h para fechar todos os detalhes e apresentar seu layout.</div>
          <div class="fmo-trust-list">
            <div class="fmo-trust-item">
              <div class="fmo-ti-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              Dados 100% protegidos
            </div>
            <div class="fmo-trust-item">
              <div class="fmo-ti-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              Retorno em até 24h úteis
            </div>
            <div class="fmo-trust-item">
              <div class="fmo-ti-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Pagamento após aprovação do layout
            </div>
            <div class="fmo-trust-item">
              <div class="fmo-ti-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.62 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6z" />
                </svg>
              </div>
              Suporte via WhatsApp
            </div>
          </div>
          <div class="fmo-plan-tag">
            <div class="fmo-ptag-label">Plano selecionado</div>
            <div class="fmo-ptag-val" id="sidebar-plan">—</div>
          </div>
        </div>

        <div class="fmo-body">
          <div class="fmo-step-label">Fazer pedido</div>
          <div class="fmo-form-title">Dados do pedido</div>

          <div class="fg-row">
            <div class="fg">
              <label>Nome completo *</label>
              <input type="text" id="f-nome" placeholder="João Mendes" />
            </div>
            <div class="fg">
              <label>WhatsApp *</label>
              <input type="tel" id="f-whats" placeholder="(11) 99999-9999" />
            </div>
          </div>
          <div class="fg">
            <label>E-mail *</label>
            <input type="email" id="f-email" placeholder="joao@empresa.com.br" />
          </div>
          <div class="fg-row">
            <div class="fg">
              <label>Empresa</label>
              <input type="text" id="f-empresa" placeholder="Nome da empresa" />
            </div>
            <div class="fg">
              <label>Cargo</label>
              <input type="text" id="f-cargo" placeholder="ex: Diretor Comercial" />
            </div>
          </div>
          <div class="fg">
            <label>Plano desejado *</label>
            <select id="f-plano" onchange="calcTotal()">
              <option value="">Selecione um plano...</option>
              <option value="149">Individual — R$ 149</option>
              <option value="250">Business — R$ 250</option>
              <option value="899">Enterprise (10 cartões) — R$ 899</option>
            </select>
          </div>
          <div class="fg">
            <label>Cartões adicionais <span id="add-price-label" style="color:var(--gold);font-size:.65rem">(R$ 89 / un)</span></label>
            <div class="qty-wrap">
              <button class="qty-btn" onclick="changeQty(-1)">−</button>
              <div class="qty-display" id="qty-display">0</div>
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
            <div id="bulk-hint" style="display:none;margin-top:8px;font-size:.72rem;color:#34D399;display:flex;align-items:center;gap:6px">
              <span>✓</span> Desconto em volume aplicado — R$ 25 / un
            </div>
          </div>
          <div class="fg">
            <label>Observações / Referências visuais</label>
            <textarea id="f-obs" placeholder="Cores da marca, site de referência, acabamento preferido..."></textarea>
          </div>

          <div class="order-summary" id="summary" style="display:none">
            <div class="summary-line"><span id="s-plano-label">Plano</span><span id="s-plano-val">—</span></div>
            <div class="summary-line" id="s-add-row" style="display:none"><span id="s-add-label">Adicionais</span><span id="s-add-val">—</span></div>
            <div class="summary-line" id="s-saving-row" style="display:none;color:#34D399"><span>Você economiza</span><span id="s-saving">—</span></div>
            <div class="summary-line total"><span>Total estimado</span><span id="s-total">—</span></div>
          </div>

          <button class="submit-btn" onclick="submitOrder()">Enviar pedido →</button>
          <p class="submit-note">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Sem cobrança agora — pagamento apenas após aprovação do layout.
          </p>
        </div>
      </div>
    </div>
  `}function Ft(){return`
    <div class="modal-overlay" id="modal">
      <div class="modal">
        <div class="modal-star">✦</div>
        <h3>Pedido recebido!</h3>
        <p>Nossa equipe entrará em contato no WhatsApp informado em até 24 horas úteis para confirmar os detalhes e apresentar seu layout personalizado.</p>
        <div class="order-code" id="modal-code">UIC-000000</div>
        <p style="font-size:.78rem;color:rgba(136,136,153,.35);margin-bottom:0">Guarde este código — é o número do seu pedido.</p>
        <button class="modal-close" onclick="closeModal()">Perfeito, entendido!</button>
      </div>
    </div>
  `}var ye;function p(e,t,n){function o(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:s,traits:new Set},enumerable:!1}),a._zod.traits.has(e))return;a._zod.traits.add(e),t(a,c);const u=s.prototype,d=Object.keys(u);for(let l=0;l<d.length;l++){const f=d[l];f in a||(a[f]=u[f].bind(a))}}const r=(n==null?void 0:n.Parent)??Object;class i extends r{}Object.defineProperty(i,"name",{value:e});function s(a){var c;const u=n!=null&&n.Parent?new i:this;o(u,a),(c=u._zod).deferred??(c.deferred=[]);for(const d of u._zod.deferred)d();return u}return Object.defineProperty(s,"init",{value:o}),Object.defineProperty(s,Symbol.hasInstance,{value:a=>{var c,u;return n!=null&&n.Parent&&a instanceof n.Parent?!0:(u=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:u.has(e)}}),Object.defineProperty(s,"name",{value:e}),s}class L extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Ue extends Error{constructor(t){super(`Encountered unidirectional transform during encode: ${t}`),this.name="ZodEncodeError"}}(ye=globalThis).__zod_globalConfig??(ye.__zod_globalConfig={});const de=globalThis.__zod_globalConfig;function F(e){return de}function Je(e){const t=Object.values(e).filter(o=>typeof o=="number");return Object.entries(e).filter(([o,r])=>t.indexOf(+o)===-1).map(([o,r])=>r)}function ce(e,t){return typeof t=="bigint"?t.toString():t}function pe(e){return{get value(){{const t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function fe(e){return e==null}function he(e){const t=e.startsWith("^")?1:0,n=e.endsWith("$")?e.length-1:e.length;return e.slice(t,n)}function jt(e,t){const n=e/t,o=Math.round(n),r=Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-o)<r?0:n-o}const we=Symbol("evaluating");function _(e,t,n){let o;Object.defineProperty(e,t,{get(){if(o!==we)return o===void 0&&(o=we,o=n()),o},set(r){Object.defineProperty(e,t,{value:r})},configurable:!0})}function D(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function A(...e){const t={};for(const n of e){const o=Object.getOwnPropertyDescriptors(n);Object.assign(t,o)}return Object.defineProperties({},t)}function ke(e){return JSON.stringify(e)}function Dt(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Ve="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function X(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const Mt=pe(()=>{var e;if(de.jitless||typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)!=null&&e.includes("Cloudflare")))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function V(e){if(X(e)===!1)return!1;const t=e.constructor;if(t===void 0||typeof t!="function")return!0;const n=t.prototype;return!(X(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function We(e){return V(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}const qt=new Set(["string","number","symbol"]);function ne(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function T(e,t,n){const o=new e._zod.constr(t??e._zod.def);return(!t||n!=null&&n.parent)&&(o._zod.parent=e),o}function m(e){const t=e;if(!t)return{};if(typeof t=="string")return{error:()=>t};if((t==null?void 0:t.message)!==void 0){if((t==null?void 0:t.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error=="string"?{...t,error:()=>t.error}:t}function Bt(e){return Object.keys(e).filter(t=>e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional")}const Lt={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Ut(e,t){const n=e._zod.def,o=n.checks;if(o&&o.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const i=A(e._zod.def,{get shape(){const s={};for(const a in t){if(!(a in n.shape))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=n.shape[a])}return D(this,"shape",s),s},checks:[]});return T(e,i)}function Jt(e,t){const n=e._zod.def,o=n.checks;if(o&&o.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const i=A(e._zod.def,{get shape(){const s={...e._zod.def.shape};for(const a in t){if(!(a in n.shape))throw new Error(`Unrecognized key: "${a}"`);t[a]&&delete s[a]}return D(this,"shape",s),s},checks:[]});return T(e,i)}function Vt(e,t){if(!V(t))throw new Error("Invalid input to extend: expected a plain object");const n=e._zod.def.checks;if(n&&n.length>0){const i=e._zod.def.shape;for(const s in t)if(Object.getOwnPropertyDescriptor(i,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=A(e._zod.def,{get shape(){const i={...e._zod.def.shape,...t};return D(this,"shape",i),i}});return T(e,r)}function Wt(e,t){if(!V(t))throw new Error("Invalid input to safeExtend: expected a plain object");const n=A(e._zod.def,{get shape(){const o={...e._zod.def.shape,...t};return D(this,"shape",o),o}});return T(e,n)}function Qt(e,t){var o;if((o=e._zod.def.checks)!=null&&o.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n=A(e._zod.def,{get shape(){const r={...e._zod.def.shape,...t._zod.def.shape};return D(this,"shape",r),r},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]});return T(e,n)}function Kt(e,t,n){const r=t._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const s=A(t._zod.def,{get shape(){const a=t._zod.def.shape,c={...a};if(n)for(const u in n){if(!(u in a))throw new Error(`Unrecognized key: "${u}"`);n[u]&&(c[u]=e?new e({type:"optional",innerType:a[u]}):a[u])}else for(const u in a)c[u]=e?new e({type:"optional",innerType:a[u]}):a[u];return D(this,"shape",c),c},checks:[]});return T(t,s)}function Gt(e,t,n){const o=A(t._zod.def,{get shape(){const r=t._zod.def.shape,i={...r};if(n)for(const s in n){if(!(s in i))throw new Error(`Unrecognized key: "${s}"`);n[s]&&(i[s]=new e({type:"nonoptional",innerType:r[s]}))}else for(const s in r)i[s]=new e({type:"nonoptional",innerType:r[s]});return D(this,"shape",i),i}});return T(t,o)}function B(e,t=0){var n;if(e.aborted===!0)return!0;for(let o=t;o<e.issues.length;o++)if(((n=e.issues[o])==null?void 0:n.continue)!==!0)return!0;return!1}function Yt(e,t=0){var n;if(e.aborted===!0)return!0;for(let o=t;o<e.issues.length;o++)if(((n=e.issues[o])==null?void 0:n.continue)===!1)return!0;return!1}function Qe(e,t){return t.map(n=>{var o;return(o=n).path??(o.path=[]),n.path.unshift(e),n})}function K(e){return typeof e=="string"?e:e==null?void 0:e.message}function j(e,t,n){var c,u,d,l,f,h;const o=e.message?e.message:K((d=(u=(c=e.inst)==null?void 0:c._zod.def)==null?void 0:u.error)==null?void 0:d.call(u,e))??K((l=t==null?void 0:t.error)==null?void 0:l.call(t,e))??K((f=n.customError)==null?void 0:f.call(n,e))??K((h=n.localeError)==null?void 0:h.call(n,e))??"Invalid input",{inst:r,continue:i,input:s,...a}=e;return a.path??(a.path=[]),a.message=o,t!=null&&t.reportInput&&(a.input=s),a}function me(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function W(...e){const[t,n,o]=e;return typeof t=="string"?{message:t,code:"custom",input:n,inst:o}:{...t}}const Ke=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,ce,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Ge=p("$ZodError",Ke),Ye=p("$ZodError",Ke,{Parent:Error});function Xt(e,t=n=>n.message){const n={},o=[];for(const r of e.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(t(r))):o.push(t(r));return{formErrors:o,fieldErrors:n}}function Ht(e,t=n=>n.message){const n={_errors:[]},o=(r,i=[])=>{for(const s of r.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>o({issues:a},[...i,...s.path]));else if(s.code==="invalid_key")o({issues:s.issues},[...i,...s.path]);else if(s.code==="invalid_element")o({issues:s.issues},[...i,...s.path]);else{const a=[...i,...s.path];if(a.length===0)n._errors.push(t(s));else{let c=n,u=0;for(;u<a.length;){const d=a[u];u===a.length-1?(c[d]=c[d]||{_errors:[]},c[d]._errors.push(t(s))):c[d]=c[d]||{_errors:[]},c=c[d],u++}}}};return o(e),n}const ve=e=>(t,n,o,r)=>{const i=o?{...o,async:!1}:{async:!1},s=t._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw new L;if(s.issues.length){const a=new((r==null?void 0:r.Err)??e)(s.issues.map(c=>j(c,i,F())));throw Ve(a,r==null?void 0:r.callee),a}return s.value},ge=e=>async(t,n,o,r)=>{const i=o?{...o,async:!0}:{async:!0};let s=t._zod.run({value:n,issues:[]},i);if(s instanceof Promise&&(s=await s),s.issues.length){const a=new((r==null?void 0:r.Err)??e)(s.issues.map(c=>j(c,i,F())));throw Ve(a,r==null?void 0:r.callee),a}return s.value},oe=e=>(t,n,o)=>{const r=o?{...o,async:!1}:{async:!1},i=t._zod.run({value:n,issues:[]},r);if(i instanceof Promise)throw new L;return i.issues.length?{success:!1,error:new(e??Ge)(i.issues.map(s=>j(s,r,F())))}:{success:!0,data:i.value}},en=oe(Ye),re=e=>async(t,n,o)=>{const r=o?{...o,async:!0}:{async:!0};let i=t._zod.run({value:n,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new e(i.issues.map(s=>j(s,r,F())))}:{success:!0,data:i.value}},tn=re(Ye),nn=e=>(t,n,o)=>{const r=o?{...o,direction:"backward"}:{direction:"backward"};return ve(e)(t,n,r)},on=e=>(t,n,o)=>ve(e)(t,n,o),rn=e=>async(t,n,o)=>{const r=o?{...o,direction:"backward"}:{direction:"backward"};return ge(e)(t,n,r)},sn=e=>async(t,n,o)=>ge(e)(t,n,o),an=e=>(t,n,o)=>{const r=o?{...o,direction:"backward"}:{direction:"backward"};return oe(e)(t,n,r)},cn=e=>(t,n,o)=>oe(e)(t,n,o),un=e=>async(t,n,o)=>{const r=o?{...o,direction:"backward"}:{direction:"backward"};return re(e)(t,n,r)},ln=e=>async(t,n,o)=>re(e)(t,n,o),dn=/^[cC][0-9a-z]{6,}$/,pn=/^[0-9a-z]+$/,fn=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,hn=/^[0-9a-vA-V]{20}$/,mn=/^[A-Za-z0-9]{27}$/,vn=/^[a-zA-Z0-9_-]{21}$/,gn=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,_n=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,ze=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,bn=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,yn="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function wn(){return new RegExp(yn,"u")}const kn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,zn=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,$n=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,En=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,In=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Xe=/^[A-Za-z0-9_-]*$/,Zn=/^https?$/,Sn=/^\+[1-9]\d{6,14}$/,He="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",On=new RegExp(`^${He}$`);function et(e){const t="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Pn(e){return new RegExp(`^${et(e)}$`)}function Cn(e){const t=et({precision:e.precision}),n=["Z"];e.local&&n.push(""),e.offset&&n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const o=`${t}(?:${n.join("|")})`;return new RegExp(`^${He}T(?:${o})$`)}const Nn=e=>{const t=e?`[\\s\\S]{${(e==null?void 0:e.minimum)??0},${(e==null?void 0:e.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)},xn=/^-?\d+$/,An=/^-?\d+(?:\.\d+)?$/,Tn=/^[^A-Z]*$/,Rn=/^[^a-z]*$/,C=p("$ZodCheck",(e,t)=>{var n;e._zod??(e._zod={}),e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),tt={number:"number",bigint:"bigint",object:"date"},nt=p("$ZodCheckLessThan",(e,t)=>{C.init(e,t);const n=tt[typeof t.value];e._zod.onattach.push(o=>{const r=o._zod.bag,i=(t.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;t.value<i&&(t.inclusive?r.maximum=t.value:r.exclusiveMaximum=t.value)}),e._zod.check=o=>{(t.inclusive?o.value<=t.value:o.value<t.value)||o.issues.push({origin:n,code:"too_big",maximum:typeof t.value=="object"?t.value.getTime():t.value,input:o.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ot=p("$ZodCheckGreaterThan",(e,t)=>{C.init(e,t);const n=tt[typeof t.value];e._zod.onattach.push(o=>{const r=o._zod.bag,i=(t.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;t.value>i&&(t.inclusive?r.minimum=t.value:r.exclusiveMinimum=t.value)}),e._zod.check=o=>{(t.inclusive?o.value>=t.value:o.value>t.value)||o.issues.push({origin:n,code:"too_small",minimum:typeof t.value=="object"?t.value.getTime():t.value,input:o.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Fn=p("$ZodCheckMultipleOf",(e,t)=>{C.init(e,t),e._zod.onattach.push(n=>{var o;(o=n._zod.bag).multipleOf??(o.multipleOf=t.value)}),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%t.value===BigInt(0):jt(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),jn=p("$ZodCheckNumberFormat",(e,t)=>{var s;C.init(e,t),t.format=t.format||"float64";const n=(s=t.format)==null?void 0:s.includes("int"),o=n?"int":"number",[r,i]=Lt[t.format];e._zod.onattach.push(a=>{const c=a._zod.bag;c.format=t.format,c.minimum=r,c.maximum=i,n&&(c.pattern=xn)}),e._zod.check=a=>{const c=a.value;if(n){if(!Number.isInteger(c)){a.issues.push({expected:o,format:t.format,code:"invalid_type",continue:!1,input:c,inst:e});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!t.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!t.abort});return}}c<r&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!t.abort}),c>i&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:i,inclusive:!0,inst:e,continue:!t.abort})}}),Dn=p("$ZodCheckMaxLength",(e,t)=>{var n;C.init(e,t),(n=e._zod.def).when??(n.when=o=>{const r=o.value;return!fe(r)&&r.length!==void 0}),e._zod.onattach.push(o=>{const r=o._zod.bag.maximum??Number.POSITIVE_INFINITY;t.maximum<r&&(o._zod.bag.maximum=t.maximum)}),e._zod.check=o=>{const r=o.value;if(r.length<=t.maximum)return;const s=me(r);o.issues.push({origin:s,code:"too_big",maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),Mn=p("$ZodCheckMinLength",(e,t)=>{var n;C.init(e,t),(n=e._zod.def).when??(n.when=o=>{const r=o.value;return!fe(r)&&r.length!==void 0}),e._zod.onattach.push(o=>{const r=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;t.minimum>r&&(o._zod.bag.minimum=t.minimum)}),e._zod.check=o=>{const r=o.value;if(r.length>=t.minimum)return;const s=me(r);o.issues.push({origin:s,code:"too_small",minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),qn=p("$ZodCheckLengthEquals",(e,t)=>{var n;C.init(e,t),(n=e._zod.def).when??(n.when=o=>{const r=o.value;return!fe(r)&&r.length!==void 0}),e._zod.onattach.push(o=>{const r=o._zod.bag;r.minimum=t.length,r.maximum=t.length,r.length=t.length}),e._zod.check=o=>{const r=o.value,i=r.length;if(i===t.length)return;const s=me(r),a=i>t.length;o.issues.push({origin:s,...a?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:o.value,inst:e,continue:!t.abort})}}),ie=p("$ZodCheckStringFormat",(e,t)=>{var n,o;C.init(e,t),e._zod.onattach.push(r=>{const i=r._zod.bag;i.format=t.format,t.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=r=>{t.pattern.lastIndex=0,!t.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:t.format,input:r.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(o=e._zod).check??(o.check=()=>{})}),Bn=p("$ZodCheckRegex",(e,t)=>{ie.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Ln=p("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=Tn),ie.init(e,t)}),Un=p("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Rn),ie.init(e,t)}),Jn=p("$ZodCheckIncludes",(e,t)=>{C.init(e,t);const n=ne(t.includes),o=new RegExp(typeof t.position=="number"?`^.{${t.position}}${n}`:n);t.pattern=o,e._zod.onattach.push(r=>{const i=r._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(o)}),e._zod.check=r=>{r.value.includes(t.includes,t.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:r.value,inst:e,continue:!t.abort})}}),Vn=p("$ZodCheckStartsWith",(e,t)=>{C.init(e,t);const n=new RegExp(`^${ne(t.prefix)}.*`);t.pattern??(t.pattern=n),e._zod.onattach.push(o=>{const r=o._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(n)}),e._zod.check=o=>{o.value.startsWith(t.prefix)||o.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:o.value,inst:e,continue:!t.abort})}}),Wn=p("$ZodCheckEndsWith",(e,t)=>{C.init(e,t);const n=new RegExp(`.*${ne(t.suffix)}$`);t.pattern??(t.pattern=n),e._zod.onattach.push(o=>{const r=o._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(n)}),e._zod.check=o=>{o.value.endsWith(t.suffix)||o.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:o.value,inst:e,continue:!t.abort})}}),Qn=p("$ZodCheckOverwrite",(e,t)=>{C.init(e,t),e._zod.check=n=>{n.value=t.tx(n.value)}});class Kn{constructor(t=[]){this.content=[],this.indent=0,this&&(this.args=t)}indented(t){this.indent+=1,t(this),this.indent-=1}write(t){if(typeof t=="function"){t(this,{execution:"sync"}),t(this,{execution:"async"});return}const o=t.split(`
`).filter(s=>s),r=Math.min(...o.map(s=>s.length-s.trimStart().length)),i=o.map(s=>s.slice(r)).map(s=>" ".repeat(this.indent*2)+s);for(const s of i)this.content.push(s)}compile(){const t=Function,n=this==null?void 0:this.args,r=[...((this==null?void 0:this.content)??[""]).map(i=>`  ${i}`)];return new t(...n,r.join(`
`))}}const Gn={major:4,minor:4,patch:3},E=p("$ZodType",(e,t)=>{var r;var n;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Gn;const o=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&o.unshift(e);for(const i of o)for(const s of i._zod.onattach)s(e);if(o.length===0)(n=e._zod).deferred??(n.deferred=[]),(r=e._zod.deferred)==null||r.push(()=>{e._zod.run=e._zod.parse});else{const i=(a,c,u)=>{let d=B(a),l;for(const f of c){if(f._zod.def.when){if(Yt(a)||!f._zod.def.when(a))continue}else if(d)continue;const h=a.issues.length,v=f._zod.check(a);if(v instanceof Promise&&(u==null?void 0:u.async)===!1)throw new L;if(l||v instanceof Promise)l=(l??Promise.resolve()).then(async()=>{await v,a.issues.length!==h&&(d||(d=B(a,h)))});else{if(a.issues.length===h)continue;d||(d=B(a,h))}}return l?l.then(()=>a):a},s=(a,c,u)=>{if(B(a))return a.aborted=!0,a;const d=i(c,o,u);if(d instanceof Promise){if(u.async===!1)throw new L;return d.then(l=>e._zod.parse(l,u))}return e._zod.parse(d,u)};e._zod.run=(a,c)=>{if(c.skipChecks)return e._zod.parse(a,c);if(c.direction==="backward"){const d=e._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return d instanceof Promise?d.then(l=>s(l,a,c)):s(d,a,c)}const u=e._zod.parse(a,c);if(u instanceof Promise){if(c.async===!1)throw new L;return u.then(d=>i(d,o,c))}return i(u,o,c)}}_(e,"~standard",()=>({validate:i=>{var s;try{const a=en(e,i);return a.success?{value:a.data}:{issues:(s=a.error)==null?void 0:s.issues}}catch{return tn(e,i).then(c=>{var u;return c.success?{value:c.data}:{issues:(u=c.error)==null?void 0:u.issues}})}},vendor:"zod",version:1}))}),_e=p("$ZodString",(e,t)=>{var n;E.init(e,t),e._zod.pattern=[...((n=e==null?void 0:e._zod.bag)==null?void 0:n.patterns)??[]].pop()??Nn(e._zod.bag),e._zod.parse=(o,r)=>{if(t.coerce)try{o.value=String(o.value)}catch{}return typeof o.value=="string"||o.issues.push({expected:"string",code:"invalid_type",input:o.value,inst:e}),o}}),w=p("$ZodStringFormat",(e,t)=>{ie.init(e,t),_e.init(e,t)}),Yn=p("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=_n),w.init(e,t)}),Xn=p("$ZodUUID",(e,t)=>{if(t.version){const o={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(o===void 0)throw new Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=ze(o))}else t.pattern??(t.pattern=ze());w.init(e,t)}),Hn=p("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=bn),w.init(e,t)}),eo=p("$ZodURL",(e,t)=>{w.init(e,t),e._zod.check=n=>{var o;try{const r=n.value.trim();if(!t.normalize&&((o=t.protocol)==null?void 0:o.source)===Zn.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:e,continue:!t.abort});return}const i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(":")?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),t.normalize?n.value=i.href:n.value=r;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:e,continue:!t.abort})}}}),to=p("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=wn()),w.init(e,t)}),no=p("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=vn),w.init(e,t)}),oo=p("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=dn),w.init(e,t)}),ro=p("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=pn),w.init(e,t)}),io=p("$ZodULID",(e,t)=>{t.pattern??(t.pattern=fn),w.init(e,t)}),so=p("$ZodXID",(e,t)=>{t.pattern??(t.pattern=hn),w.init(e,t)}),ao=p("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=mn),w.init(e,t)}),co=p("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Cn(t)),w.init(e,t)}),uo=p("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=On),w.init(e,t)}),lo=p("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=Pn(t)),w.init(e,t)}),po=p("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=gn),w.init(e,t)}),fo=p("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=kn),w.init(e,t),e._zod.bag.format="ipv4"}),ho=p("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=zn),w.init(e,t),e._zod.bag.format="ipv6",e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:e,continue:!t.abort})}}}),mo=p("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=$n),w.init(e,t)}),vo=p("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=En),w.init(e,t),e._zod.check=n=>{const o=n.value.split("/");try{if(o.length!==2)throw new Error;const[r,i]=o;if(!i)throw new Error;const s=Number(i);if(`${s}`!==i)throw new Error;if(s<0||s>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:e,continue:!t.abort})}}});function rt(e){if(e==="")return!0;if(/\s/.test(e)||e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const go=p("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=In),w.init(e,t),e._zod.bag.contentEncoding="base64",e._zod.check=n=>{rt(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:e,continue:!t.abort})}});function _o(e){if(!Xe.test(e))return!1;const t=e.replace(/[-_]/g,o=>o==="-"?"+":"/"),n=t.padEnd(Math.ceil(t.length/4)*4,"=");return rt(n)}const bo=p("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=Xe),w.init(e,t),e._zod.bag.contentEncoding="base64url",e._zod.check=n=>{_o(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:e,continue:!t.abort})}}),yo=p("$ZodE164",(e,t)=>{t.pattern??(t.pattern=Sn),w.init(e,t)});function wo(e,t=null){try{const n=e.split(".");if(n.length!==3)return!1;const[o]=n;if(!o)return!1;const r=JSON.parse(atob(o));return!("typ"in r&&(r==null?void 0:r.typ)!=="JWT"||!r.alg||t&&(!("alg"in r)||r.alg!==t))}catch{return!1}}const ko=p("$ZodJWT",(e,t)=>{w.init(e,t),e._zod.check=n=>{wo(n.value,t.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:e,continue:!t.abort})}}),it=p("$ZodNumber",(e,t)=>{E.init(e,t),e._zod.pattern=e._zod.bag.pattern??An,e._zod.parse=(n,o)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const i=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:e,...i?{received:i}:{}}),n}}),zo=p("$ZodNumberFormat",(e,t)=>{jn.init(e,t),it.init(e,t)}),$o=p("$ZodUnknown",(e,t)=>{E.init(e,t),e._zod.parse=n=>n}),Eo=p("$ZodNever",(e,t)=>{E.init(e,t),e._zod.parse=(n,o)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:e}),n)});function $e(e,t,n){e.issues.length&&t.issues.push(...Qe(n,e.issues)),t.value[n]=e.value}const Io=p("$ZodArray",(e,t)=>{E.init(e,t),e._zod.parse=(n,o)=>{const r=n.value;if(!Array.isArray(r))return n.issues.push({expected:"array",code:"invalid_type",input:r,inst:e}),n;n.value=Array(r.length);const i=[];for(let s=0;s<r.length;s++){const a=r[s],c=t.element._zod.run({value:a,issues:[]},o);c instanceof Promise?i.push(c.then(u=>$e(u,n,s))):$e(c,n,s)}return i.length?Promise.all(i).then(()=>n):n}});function H(e,t,n,o,r,i){const s=n in o;if(e.issues.length){if(r&&i&&!s)return;t.issues.push(...Qe(n,e.issues))}if(!s&&!r){e.issues.length||t.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}e.value===void 0?s&&(t.value[n]=void 0):t.value[n]=e.value}function st(e){var o,r,i,s;const t=Object.keys(e.shape);for(const a of t)if(!((s=(i=(r=(o=e.shape)==null?void 0:o[a])==null?void 0:r._zod)==null?void 0:i.traits)!=null&&s.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const n=Bt(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function at(e,t,n,o,r,i){const s=[],a=r.keySet,c=r.catchall._zod,u=c.def.type,d=c.optin==="optional",l=c.optout==="optional";for(const f in t){if(f==="__proto__"||a.has(f))continue;if(u==="never"){s.push(f);continue}const h=c.run({value:t[f],issues:[]},o);h instanceof Promise?e.push(h.then(v=>H(v,n,f,t,d,l))):H(h,n,f,t,d,l)}return s.length&&n.issues.push({code:"unrecognized_keys",keys:s,input:t,inst:i}),e.length?Promise.all(e).then(()=>n):n}const Zo=p("$ZodObject",(e,t)=>{E.init(e,t);const n=Object.getOwnPropertyDescriptor(t,"shape");if(!(n!=null&&n.get)){const a=t.shape;Object.defineProperty(t,"shape",{get:()=>{const c={...a};return Object.defineProperty(t,"shape",{value:c}),c}})}const o=pe(()=>st(t));_(e._zod,"propValues",()=>{const a=t.shape,c={};for(const u in a){const d=a[u]._zod;if(d.values){c[u]??(c[u]=new Set);for(const l of d.values)c[u].add(l)}}return c});const r=X,i=t.catchall;let s;e._zod.parse=(a,c)=>{s??(s=o.value);const u=a.value;if(!r(u))return a.issues.push({expected:"object",code:"invalid_type",input:u,inst:e}),a;a.value={};const d=[],l=s.shape;for(const f of s.keys){const h=l[f],v=h._zod.optin==="optional",g=h._zod.optout==="optional",z=h._zod.run({value:u[f],issues:[]},c);z instanceof Promise?d.push(z.then($=>H($,a,f,u,v,g))):H(z,a,f,u,v,g)}return i?at(d,u,a,c,o.value,e):d.length?Promise.all(d).then(()=>a):a}}),So=p("$ZodObjectJIT",(e,t)=>{Zo.init(e,t);const n=e._zod.parse,o=pe(()=>st(t)),r=f=>{var R,Z;const h=new Kn(["shape","payload","ctx"]),v=o.value,g=N=>{const b=ke(N);return`shape[${b}]._zod.run({ value: input[${b}], issues: [] }, ctx)`};h.write("const input = payload.value;");const z=Object.create(null);let $=0;for(const N of v.keys)z[N]=`key_${$++}`;h.write("const newResult = {};");for(const N of v.keys){const b=z[N],S=ke(N),M=f[N],be=((R=M==null?void 0:M._zod)==null?void 0:R.optin)==="optional",yt=((Z=M==null?void 0:M._zod)==null?void 0:Z.optout)==="optional";h.write(`const ${b} = ${g(N)};`),be&&yt?h.write(`
        if (${b}.issues.length) {
          if (${S} in input) {
            payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${S}, ...iss.path] : [${S}]
            })));
          }
        }
        
        if (${b}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${b}.value;
        }
        
      `):be?h.write(`
        if (${b}.issues.length) {
          payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        if (${b}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${b}.value;
        }
        
      `):h.write(`
        const ${b}_present = ${S} in input;
        if (${b}.issues.length) {
          payload.issues = payload.issues.concat(${b}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        if (!${b}_present && !${b}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${S}]
          });
        }

        if (${b}_present) {
          if (${b}.value === undefined) {
            newResult[${S}] = undefined;
          } else {
            newResult[${S}] = ${b}.value;
          }
        }

      `)}h.write("payload.value = newResult;"),h.write("return payload;");const y=h.compile();return(N,b)=>y(f,N,b)};let i;const s=X,a=!de.jitless,u=a&&Mt.value,d=t.catchall;let l;e._zod.parse=(f,h)=>{l??(l=o.value);const v=f.value;return s(v)?a&&u&&(h==null?void 0:h.async)===!1&&h.jitless!==!0?(i||(i=r(t.shape)),f=i(f,h),d?at([],v,f,h,l,e):f):n(f,h):(f.issues.push({expected:"object",code:"invalid_type",input:v,inst:e}),f)}});function Ee(e,t,n,o){for(const i of e)if(i.issues.length===0)return t.value=i.value,t;const r=e.filter(i=>!B(i));return r.length===1?(t.value=r[0].value,r[0]):(t.issues.push({code:"invalid_union",input:t.value,inst:n,errors:e.map(i=>i.issues.map(s=>j(s,o,F())))}),t)}const Oo=p("$ZodUnion",(e,t)=>{E.init(e,t),_(e._zod,"optin",()=>t.options.some(o=>o._zod.optin==="optional")?"optional":void 0),_(e._zod,"optout",()=>t.options.some(o=>o._zod.optout==="optional")?"optional":void 0),_(e._zod,"values",()=>{if(t.options.every(o=>o._zod.values))return new Set(t.options.flatMap(o=>Array.from(o._zod.values)))}),_(e._zod,"pattern",()=>{if(t.options.every(o=>o._zod.pattern)){const o=t.options.map(r=>r._zod.pattern);return new RegExp(`^(${o.map(r=>he(r.source)).join("|")})$`)}});const n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(o,r)=>{if(n)return n(o,r);let i=!1;const s=[];for(const a of t.options){const c=a._zod.run({value:o.value,issues:[]},r);if(c instanceof Promise)s.push(c),i=!0;else{if(c.issues.length===0)return c;s.push(c)}}return i?Promise.all(s).then(a=>Ee(a,o,e,r)):Ee(s,o,e,r)}}),Po=p("$ZodIntersection",(e,t)=>{E.init(e,t),e._zod.parse=(n,o)=>{const r=n.value,i=t.left._zod.run({value:r,issues:[]},o),s=t.right._zod.run({value:r,issues:[]},o);return i instanceof Promise||s instanceof Promise?Promise.all([i,s]).then(([c,u])=>Ie(n,c,u)):Ie(n,i,s)}});function ue(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(V(e)&&V(t)){const n=Object.keys(t),o=Object.keys(e).filter(i=>n.indexOf(i)!==-1),r={...e,...t};for(const i of o){const s=ue(e[i],t[i]);if(!s.valid)return{valid:!1,mergeErrorPath:[i,...s.mergeErrorPath]};r[i]=s.data}return{valid:!0,data:r}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let o=0;o<e.length;o++){const r=e[o],i=t[o],s=ue(r,i);if(!s.valid)return{valid:!1,mergeErrorPath:[o,...s.mergeErrorPath]};n.push(s.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Ie(e,t,n){const o=new Map;let r;for(const a of t.issues)if(a.code==="unrecognized_keys"){r??(r=a);for(const c of a.keys)o.has(c)||o.set(c,{}),o.get(c).l=!0}else e.issues.push(a);for(const a of n.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)o.has(c)||o.set(c,{}),o.get(c).r=!0;else e.issues.push(a);const i=[...o].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(i.length&&r&&e.issues.push({...r,keys:i}),B(e))return e;const s=ue(t.value,n.value);if(!s.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);return e.value=s.data,e}const Co=p("$ZodEnum",(e,t)=>{E.init(e,t);const n=Je(t.entries),o=new Set(n);e._zod.values=o,e._zod.pattern=new RegExp(`^(${n.filter(r=>qt.has(typeof r)).map(r=>typeof r=="string"?ne(r):r.toString()).join("|")})$`),e._zod.parse=(r,i)=>{const s=r.value;return o.has(s)||r.issues.push({code:"invalid_value",values:n,input:s,inst:e}),r}}),No=p("$ZodTransform",(e,t)=>{E.init(e,t),e._zod.optin="optional",e._zod.parse=(n,o)=>{if(o.direction==="backward")throw new Ue(e.constructor.name);const r=t.transform(n.value,n);if(o.async)return(r instanceof Promise?r:Promise.resolve(r)).then(s=>(n.value=s,n.fallback=!0,n));if(r instanceof Promise)throw new L;return n.value=r,n.fallback=!0,n}});function Ze(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}const ct=p("$ZodOptional",(e,t)=>{E.init(e,t),e._zod.optin="optional",e._zod.optout="optional",_(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),_(e._zod,"pattern",()=>{const n=t.innerType._zod.pattern;return n?new RegExp(`^(${he(n.source)})?$`):void 0}),e._zod.parse=(n,o)=>{if(t.innerType._zod.optin==="optional"){const r=n.value,i=t.innerType._zod.run(n,o);return i instanceof Promise?i.then(s=>Ze(s,r)):Ze(i,r)}return n.value===void 0?n:t.innerType._zod.run(n,o)}}),xo=p("$ZodExactOptional",(e,t)=>{ct.init(e,t),_(e._zod,"values",()=>t.innerType._zod.values),_(e._zod,"pattern",()=>t.innerType._zod.pattern),e._zod.parse=(n,o)=>t.innerType._zod.run(n,o)}),Ao=p("$ZodNullable",(e,t)=>{E.init(e,t),_(e._zod,"optin",()=>t.innerType._zod.optin),_(e._zod,"optout",()=>t.innerType._zod.optout),_(e._zod,"pattern",()=>{const n=t.innerType._zod.pattern;return n?new RegExp(`^(${he(n.source)}|null)$`):void 0}),_(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(n,o)=>n.value===null?n:t.innerType._zod.run(n,o)}),To=p("$ZodDefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",_(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,o)=>{if(o.direction==="backward")return t.innerType._zod.run(n,o);if(n.value===void 0)return n.value=t.defaultValue,n;const r=t.innerType._zod.run(n,o);return r instanceof Promise?r.then(i=>Se(i,t)):Se(r,t)}});function Se(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}const Ro=p("$ZodPrefault",(e,t)=>{E.init(e,t),e._zod.optin="optional",_(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,o)=>(o.direction==="backward"||n.value===void 0&&(n.value=t.defaultValue),t.innerType._zod.run(n,o))}),Fo=p("$ZodNonOptional",(e,t)=>{E.init(e,t),_(e._zod,"values",()=>{const n=t.innerType._zod.values;return n?new Set([...n].filter(o=>o!==void 0)):void 0}),e._zod.parse=(n,o)=>{const r=t.innerType._zod.run(n,o);return r instanceof Promise?r.then(i=>Oe(i,e)):Oe(r,e)}});function Oe(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t}),e}const jo=p("$ZodCatch",(e,t)=>{E.init(e,t),e._zod.optin="optional",_(e._zod,"optout",()=>t.innerType._zod.optout),_(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,o)=>{if(o.direction==="backward")return t.innerType._zod.run(n,o);const r=t.innerType._zod.run(n,o);return r instanceof Promise?r.then(i=>(n.value=i.value,i.issues.length&&(n.value=t.catchValue({...n,error:{issues:i.issues.map(s=>j(s,o,F()))},input:n.value}),n.issues=[],n.fallback=!0),n)):(n.value=r.value,r.issues.length&&(n.value=t.catchValue({...n,error:{issues:r.issues.map(i=>j(i,o,F()))},input:n.value}),n.issues=[],n.fallback=!0),n)}}),Do=p("$ZodPipe",(e,t)=>{E.init(e,t),_(e._zod,"values",()=>t.in._zod.values),_(e._zod,"optin",()=>t.in._zod.optin),_(e._zod,"optout",()=>t.out._zod.optout),_(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(n,o)=>{if(o.direction==="backward"){const i=t.out._zod.run(n,o);return i instanceof Promise?i.then(s=>G(s,t.in,o)):G(i,t.in,o)}const r=t.in._zod.run(n,o);return r instanceof Promise?r.then(i=>G(i,t.out,o)):G(r,t.out,o)}});function G(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}const Mo=p("$ZodReadonly",(e,t)=>{E.init(e,t),_(e._zod,"propValues",()=>t.innerType._zod.propValues),_(e._zod,"values",()=>t.innerType._zod.values),_(e._zod,"optin",()=>{var n,o;return(o=(n=t.innerType)==null?void 0:n._zod)==null?void 0:o.optin}),_(e._zod,"optout",()=>{var n,o;return(o=(n=t.innerType)==null?void 0:n._zod)==null?void 0:o.optout}),e._zod.parse=(n,o)=>{if(o.direction==="backward")return t.innerType._zod.run(n,o);const r=t.innerType._zod.run(n,o);return r instanceof Promise?r.then(Pe):Pe(r)}});function Pe(e){return e.value=Object.freeze(e.value),e}const qo=p("$ZodCustom",(e,t)=>{C.init(e,t),E.init(e,t),e._zod.parse=(n,o)=>n,e._zod.check=n=>{const o=n.value,r=t.fn(o);if(r instanceof Promise)return r.then(i=>Ce(i,n,o,e));Ce(r,n,o,e)}});function Ce(e,t,n,o){if(!e){const r={code:"custom",input:n,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(r.params=o._zod.def.params),t.issues.push(W(r))}}var Ne;class Bo{constructor(){this._map=new WeakMap,this._idmap=new Map}add(t,...n){const o=n[0];return this._map.set(t,o),o&&typeof o=="object"&&"id"in o&&this._idmap.set(o.id,t),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(t){const n=this._map.get(t);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(t),this}get(t){const n=t._zod.parent;if(n){const o={...this.get(n)??{}};delete o.id;const r={...o,...this._map.get(t)};return Object.keys(r).length?r:void 0}return this._map.get(t)}has(t){return this._map.has(t)}}function Lo(){return new Bo}(Ne=globalThis).__zod_globalRegistry??(Ne.__zod_globalRegistry=Lo());const J=globalThis.__zod_globalRegistry;function Uo(e,t){return new e({type:"string",...m(t)})}function Jo(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...m(t)})}function xe(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...m(t)})}function Vo(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...m(t)})}function Wo(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...m(t)})}function Qo(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...m(t)})}function Ko(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...m(t)})}function Go(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...m(t)})}function Yo(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...m(t)})}function Xo(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...m(t)})}function Ho(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...m(t)})}function er(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...m(t)})}function tr(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...m(t)})}function nr(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...m(t)})}function or(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...m(t)})}function rr(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...m(t)})}function ir(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...m(t)})}function sr(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...m(t)})}function ar(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...m(t)})}function cr(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...m(t)})}function ur(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...m(t)})}function lr(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...m(t)})}function dr(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...m(t)})}function pr(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...m(t)})}function fr(e,t){return new e({type:"string",format:"date",check:"string_format",...m(t)})}function hr(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...m(t)})}function mr(e,t){return new e({type:"string",format:"duration",check:"string_format",...m(t)})}function vr(e,t){return new e({type:"number",checks:[],...m(t)})}function gr(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...m(t)})}function _r(e){return new e({type:"unknown"})}function br(e,t){return new e({type:"never",...m(t)})}function Ae(e,t){return new nt({check:"less_than",...m(t),value:e,inclusive:!1})}function se(e,t){return new nt({check:"less_than",...m(t),value:e,inclusive:!0})}function Te(e,t){return new ot({check:"greater_than",...m(t),value:e,inclusive:!1})}function ae(e,t){return new ot({check:"greater_than",...m(t),value:e,inclusive:!0})}function Re(e,t){return new Fn({check:"multiple_of",...m(t),value:e})}function ut(e,t){return new Dn({check:"max_length",...m(t),maximum:e})}function ee(e,t){return new Mn({check:"min_length",...m(t),minimum:e})}function lt(e,t){return new qn({check:"length_equals",...m(t),length:e})}function yr(e,t){return new Bn({check:"string_format",format:"regex",...m(t),pattern:e})}function wr(e){return new Ln({check:"string_format",format:"lowercase",...m(e)})}function kr(e){return new Un({check:"string_format",format:"uppercase",...m(e)})}function zr(e,t){return new Jn({check:"string_format",format:"includes",...m(t),includes:e})}function $r(e,t){return new Vn({check:"string_format",format:"starts_with",...m(t),prefix:e})}function Er(e,t){return new Wn({check:"string_format",format:"ends_with",...m(t),suffix:e})}function U(e){return new Qn({check:"overwrite",tx:e})}function Ir(e){return U(t=>t.normalize(e))}function Zr(){return U(e=>e.trim())}function Sr(){return U(e=>e.toLowerCase())}function Or(){return U(e=>e.toUpperCase())}function Pr(){return U(e=>Dt(e))}function Cr(e,t,n){return new e({type:"array",element:t,...m(n)})}function Nr(e,t,n){return new e({type:"custom",check:"custom",fn:t,...m(n)})}function xr(e,t){const n=Ar(o=>(o.addIssue=r=>{if(typeof r=="string")o.issues.push(W(r,o.value,n._zod.def));else{const i=r;i.fatal&&(i.continue=!1),i.code??(i.code="custom"),i.input??(i.input=o.value),i.inst??(i.inst=n),i.continue??(i.continue=!n._zod.def.abort),o.issues.push(W(i))}},e(o.value,o)),t);return n}function Ar(e,t){const n=new C({check:"custom",...m(t)});return n._zod.check=e,n}function dt(e){let t=(e==null?void 0:e.target)??"draft-2020-12";return t==="draft-4"&&(t="draft-04"),t==="draft-7"&&(t="draft-07"),{processors:e.processors??{},metadataRegistry:(e==null?void 0:e.metadata)??J,target:t,unrepresentable:(e==null?void 0:e.unrepresentable)??"throw",override:(e==null?void 0:e.override)??(()=>{}),io:(e==null?void 0:e.io)??"output",counter:0,seen:new Map,cycles:(e==null?void 0:e.cycles)??"ref",reused:(e==null?void 0:e.reused)??"inline",external:(e==null?void 0:e.external)??void 0}}function O(e,t,n={path:[],schemaPath:[]}){var d,l;var o;const r=e._zod.def,i=t.seen.get(e);if(i)return i.count++,n.schemaPath.includes(e)&&(i.cycle=n.path),i.schema;const s={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,s);const a=(l=(d=e._zod).toJSONSchema)==null?void 0:l.call(d);if(a)s.schema=a;else{const f={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,s.schema,f);else{const v=s.schema,g=t.processors[r.type];if(!g)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);g(e,t,v,f)}const h=e._zod.parent;h&&(s.ref||(s.ref=h),O(h,t,f),t.seen.get(h).isParent=!0)}const c=t.metadataRegistry.get(e);return c&&Object.assign(s.schema,c),t.io==="input"&&P(e)&&(delete s.schema.examples,delete s.schema.default),t.io==="input"&&"_prefault"in s.schema&&((o=s.schema).default??(o.default=s.schema._prefault)),delete s.schema._prefault,t.seen.get(e).schema}function pt(e,t){var s,a,c,u;const n=e.seen.get(t);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=new Map;for(const d of e.seen.entries()){const l=(s=e.metadataRegistry.get(d[0]))==null?void 0:s.id;if(l){const f=o.get(l);if(f&&f!==d[0])throw new Error(`Duplicate schema id "${l}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);o.set(l,d[0])}}const r=d=>{var g;const l=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){const z=(g=e.external.registry.get(d[0]))==null?void 0:g.id,$=e.external.uri??(R=>R);if(z)return{ref:$(z)};const y=d[1].defId??d[1].schema.id??`schema${e.counter++}`;return d[1].defId=y,{defId:y,ref:`${$("__shared")}#/${l}/${y}`}}if(d[1]===n)return{ref:"#"};const h=`#/${l}/`,v=d[1].schema.id??`__schema${e.counter++}`;return{defId:v,ref:h+v}},i=d=>{if(d[1].schema.$ref)return;const l=d[1],{ref:f,defId:h}=r(d);l.def={...l.schema},h&&(l.defId=h);const v=l.schema;for(const g in v)delete v[g];v.$ref=f};if(e.cycles==="throw")for(const d of e.seen.entries()){const l=d[1];if(l.cycle)throw new Error(`Cycle detected: #/${(a=l.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const d of e.seen.entries()){const l=d[1];if(t===d[0]){i(d);continue}if(e.external){const h=(c=e.external.registry.get(d[0]))==null?void 0:c.id;if(t!==d[0]&&h){i(d);continue}}if((u=e.metadataRegistry.get(d[0]))==null?void 0:u.id){i(d);continue}if(l.cycle){i(d);continue}if(l.count>1&&e.reused==="ref"){i(d);continue}}}function ft(e,t){var a,c,u,d;const n=e.seen.get(t);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const o=l=>{const f=e.seen.get(l);if(f.ref===null)return;const h=f.def??f.schema,v={...h},g=f.ref;if(f.ref=null,g){o(g);const $=e.seen.get(g),y=$.schema;if(y.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0")?(h.allOf=h.allOf??[],h.allOf.push(y)):Object.assign(h,y),Object.assign(h,v),l._zod.parent===g)for(const Z in h)Z==="$ref"||Z==="allOf"||Z in v||delete h[Z];if(y.$ref&&$.def)for(const Z in h)Z==="$ref"||Z==="allOf"||Z in $.def&&JSON.stringify(h[Z])===JSON.stringify($.def[Z])&&delete h[Z]}const z=l._zod.parent;if(z&&z!==g){o(z);const $=e.seen.get(z);if($!=null&&$.schema.$ref&&(h.$ref=$.schema.$ref,$.def))for(const y in h)y==="$ref"||y==="allOf"||y in $.def&&JSON.stringify(h[y])===JSON.stringify($.def[y])&&delete h[y]}e.override({zodSchema:l,jsonSchema:h,path:f.path??[]})};for(const l of[...e.seen.entries()].reverse())o(l[0]);const r={};if(e.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":e.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":e.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":e.target,(a=e.external)!=null&&a.uri){const l=(c=e.external.registry.get(t))==null?void 0:c.id;if(!l)throw new Error("Schema is missing an `id` property");r.$id=e.external.uri(l)}Object.assign(r,n.def??n.schema);const i=(u=e.metadataRegistry.get(t))==null?void 0:u.id;i!==void 0&&r.id===i&&delete r.id;const s=((d=e.external)==null?void 0:d.defs)??{};for(const l of e.seen.entries()){const f=l[1];f.def&&f.defId&&(f.def.id===f.defId&&delete f.def.id,s[f.defId]=f.def)}e.external||Object.keys(s).length>0&&(e.target==="draft-2020-12"?r.$defs=s:r.definitions=s);try{const l=JSON.parse(JSON.stringify(r));return Object.defineProperty(l,"~standard",{value:{...t["~standard"],jsonSchema:{input:te(t,"input",e.processors),output:te(t,"output",e.processors)}},enumerable:!1,writable:!1}),l}catch{throw new Error("Error converting schema to JSON.")}}function P(e,t){const n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);const o=e._zod.def;if(o.type==="transform")return!0;if(o.type==="array")return P(o.element,n);if(o.type==="set")return P(o.valueType,n);if(o.type==="lazy")return P(o.getter(),n);if(o.type==="promise"||o.type==="optional"||o.type==="nonoptional"||o.type==="nullable"||o.type==="readonly"||o.type==="default"||o.type==="prefault")return P(o.innerType,n);if(o.type==="intersection")return P(o.left,n)||P(o.right,n);if(o.type==="record"||o.type==="map")return P(o.keyType,n)||P(o.valueType,n);if(o.type==="pipe")return e._zod.traits.has("$ZodCodec")?!0:P(o.in,n)||P(o.out,n);if(o.type==="object"){for(const r in o.shape)if(P(o.shape[r],n))return!0;return!1}if(o.type==="union"){for(const r of o.options)if(P(r,n))return!0;return!1}if(o.type==="tuple"){for(const r of o.items)if(P(r,n))return!0;return!!(o.rest&&P(o.rest,n))}return!1}const Tr=(e,t={})=>n=>{const o=dt({...n,processors:t});return O(e,o),pt(o,e),ft(o,e)},te=(e,t,n={})=>o=>{const{libraryOptions:r,target:i}=o??{},s=dt({...r??{},target:i,io:t,processors:n});return O(e,s),pt(s,e),ft(s,e)},Rr={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Fr=(e,t,n,o)=>{const r=n;r.type="string";const{minimum:i,maximum:s,format:a,patterns:c,contentEncoding:u}=e._zod.bag;if(typeof i=="number"&&(r.minLength=i),typeof s=="number"&&(r.maxLength=s),a&&(r.format=Rr[a]??a,r.format===""&&delete r.format,a==="time"&&delete r.format),u&&(r.contentEncoding=u),c&&c.size>0){const d=[...c];d.length===1?r.pattern=d[0].source:d.length>1&&(r.allOf=[...d.map(l=>({...t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0"?{type:"string"}:{},pattern:l.source}))])}},jr=(e,t,n,o)=>{const r=n,{minimum:i,maximum:s,format:a,multipleOf:c,exclusiveMaximum:u,exclusiveMinimum:d}=e._zod.bag;typeof a=="string"&&a.includes("int")?r.type="integer":r.type="number";const l=typeof d=="number"&&d>=(i??Number.NEGATIVE_INFINITY),f=typeof u=="number"&&u<=(s??Number.POSITIVE_INFINITY),h=t.target==="draft-04"||t.target==="openapi-3.0";l?h?(r.minimum=d,r.exclusiveMinimum=!0):r.exclusiveMinimum=d:typeof i=="number"&&(r.minimum=i),f?h?(r.maximum=u,r.exclusiveMaximum=!0):r.exclusiveMaximum=u:typeof s=="number"&&(r.maximum=s),typeof c=="number"&&(r.multipleOf=c)},Dr=(e,t,n,o)=>{n.not={}},Mr=(e,t,n,o)=>{},qr=(e,t,n,o)=>{const r=e._zod.def,i=Je(r.entries);i.every(s=>typeof s=="number")&&(n.type="number"),i.every(s=>typeof s=="string")&&(n.type="string"),n.enum=i},Br=(e,t,n,o)=>{if(t.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Lr=(e,t,n,o)=>{if(t.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Ur=(e,t,n,o)=>{const r=n,i=e._zod.def,{minimum:s,maximum:a}=e._zod.bag;typeof s=="number"&&(r.minItems=s),typeof a=="number"&&(r.maxItems=a),r.type="array",r.items=O(i.element,t,{...o,path:[...o.path,"items"]})},Jr=(e,t,n,o)=>{var u;const r=n,i=e._zod.def;r.type="object",r.properties={};const s=i.shape;for(const d in s)r.properties[d]=O(s[d],t,{...o,path:[...o.path,"properties",d]});const a=new Set(Object.keys(s)),c=new Set([...a].filter(d=>{const l=i.shape[d]._zod;return t.io==="input"?l.optin===void 0:l.optout===void 0}));c.size>0&&(r.required=Array.from(c)),((u=i.catchall)==null?void 0:u._zod.def.type)==="never"?r.additionalProperties=!1:i.catchall?i.catchall&&(r.additionalProperties=O(i.catchall,t,{...o,path:[...o.path,"additionalProperties"]})):t.io==="output"&&(r.additionalProperties=!1)},Vr=(e,t,n,o)=>{const r=e._zod.def,i=r.inclusive===!1,s=r.options.map((a,c)=>O(a,t,{...o,path:[...o.path,i?"oneOf":"anyOf",c]}));i?n.oneOf=s:n.anyOf=s},Wr=(e,t,n,o)=>{const r=e._zod.def,i=O(r.left,t,{...o,path:[...o.path,"allOf",0]}),s=O(r.right,t,{...o,path:[...o.path,"allOf",1]}),a=u=>"allOf"in u&&Object.keys(u).length===1,c=[...a(i)?i.allOf:[i],...a(s)?s.allOf:[s]];n.allOf=c},Qr=(e,t,n,o)=>{const r=e._zod.def,i=O(r.innerType,t,o),s=t.seen.get(e);t.target==="openapi-3.0"?(s.ref=r.innerType,n.nullable=!0):n.anyOf=[i,{type:"null"}]},Kr=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType},Gr=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType,n.default=JSON.parse(JSON.stringify(r.defaultValue))},Yr=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType,t.io==="input"&&(n._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},Xr=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType;let s;try{s=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}n.default=s},Hr=(e,t,n,o)=>{const r=e._zod.def,i=r.in._zod.traits.has("$ZodTransform"),s=t.io==="input"?i?r.out:r.in:r.out;O(s,t,o);const a=t.seen.get(e);a.ref=s},ei=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType,n.readOnly=!0},ht=(e,t,n,o)=>{const r=e._zod.def;O(r.innerType,t,o);const i=t.seen.get(e);i.ref=r.innerType},ti=p("ZodISODateTime",(e,t)=>{co.init(e,t),k.init(e,t)});function ni(e){return pr(ti,e)}const oi=p("ZodISODate",(e,t)=>{uo.init(e,t),k.init(e,t)});function ri(e){return fr(oi,e)}const ii=p("ZodISOTime",(e,t)=>{lo.init(e,t),k.init(e,t)});function si(e){return hr(ii,e)}const ai=p("ZodISODuration",(e,t)=>{po.init(e,t),k.init(e,t)});function ci(e){return mr(ai,e)}const ui=(e,t)=>{Ge.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:n=>Ht(e,n)},flatten:{value:n=>Xt(e,n)},addIssue:{value:n=>{e.issues.push(n),e.message=JSON.stringify(e.issues,ce,2)}},addIssues:{value:n=>{e.issues.push(...n),e.message=JSON.stringify(e.issues,ce,2)}},isEmpty:{get(){return e.issues.length===0}}})},x=p("ZodError",ui,{Parent:Error}),li=ve(x),di=ge(x),pi=oe(x),fi=re(x),hi=nn(x),mi=on(x),vi=rn(x),gi=sn(x),_i=an(x),bi=cn(x),yi=un(x),wi=ln(x),Fe=new WeakMap;function Q(e,t,n){const o=Object.getPrototypeOf(e);let r=Fe.get(o);if(r||(r=new Set,Fe.set(o,r)),!r.has(t)){r.add(t);for(const i in n){const s=n[i];Object.defineProperty(o,i,{configurable:!0,enumerable:!1,get(){const a=s.bind(this);return Object.defineProperty(this,i,{configurable:!0,writable:!0,enumerable:!0,value:a}),a},set(a){Object.defineProperty(this,i,{configurable:!0,writable:!0,enumerable:!0,value:a})}})}}}const I=p("ZodType",(e,t)=>(E.init(e,t),Object.assign(e["~standard"],{jsonSchema:{input:te(e,"input"),output:te(e,"output")}}),e.toJSONSchema=Tr(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(n,o)=>li(e,n,o,{callee:e.parse}),e.safeParse=(n,o)=>pi(e,n,o),e.parseAsync=async(n,o)=>di(e,n,o,{callee:e.parseAsync}),e.safeParseAsync=async(n,o)=>fi(e,n,o),e.spa=e.safeParseAsync,e.encode=(n,o)=>hi(e,n,o),e.decode=(n,o)=>mi(e,n,o),e.encodeAsync=async(n,o)=>vi(e,n,o),e.decodeAsync=async(n,o)=>gi(e,n,o),e.safeEncode=(n,o)=>_i(e,n,o),e.safeDecode=(n,o)=>bi(e,n,o),e.safeEncodeAsync=async(n,o)=>yi(e,n,o),e.safeDecodeAsync=async(n,o)=>wi(e,n,o),Q(e,"ZodType",{check(...n){const o=this.def;return this.clone(A(o,{checks:[...o.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),{parent:!0})},with(...n){return this.check(...n)},clone(n,o){return T(this,n,o)},brand(){return this},register(n,o){return n.add(this,o),this},refine(n,o){return this.check(ms(n,o))},superRefine(n,o){return this.check(vs(n,o))},overwrite(n){return this.check(U(n))},optional(){return qe(this)},exactOptional(){return ns(this)},nullable(){return Be(this)},nullish(){return qe(Be(this))},nonoptional(n){return cs(this,n)},array(){return Vi(this)},or(n){return Gi([this,n])},and(n){return Xi(this,n)},transform(n){return Le(this,es(n))},default(n){return is(this,n)},prefault(n){return as(this,n)},catch(n){return ls(this,n)},pipe(n){return Le(this,n)},readonly(){return fs(this)},describe(n){const o=this.clone();return J.add(o,{description:n}),o},meta(...n){if(n.length===0)return J.get(this);const o=this.clone();return J.add(o,n[0]),o},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(n){return n(this)}}),Object.defineProperty(e,"description",{get(){var n;return(n=J.get(e))==null?void 0:n.description},configurable:!0}),e)),mt=p("_ZodString",(e,t)=>{_e.init(e,t),I.init(e,t),e._zod.processJSONSchema=(o,r,i)=>Fr(e,o,r);const n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,Q(e,"_ZodString",{regex(...o){return this.check(yr(...o))},includes(...o){return this.check(zr(...o))},startsWith(...o){return this.check($r(...o))},endsWith(...o){return this.check(Er(...o))},min(...o){return this.check(ee(...o))},max(...o){return this.check(ut(...o))},length(...o){return this.check(lt(...o))},nonempty(...o){return this.check(ee(1,...o))},lowercase(o){return this.check(wr(o))},uppercase(o){return this.check(kr(o))},trim(){return this.check(Zr())},normalize(...o){return this.check(Ir(...o))},toLowerCase(){return this.check(Sr())},toUpperCase(){return this.check(Or())},slugify(){return this.check(Pr())}})}),ki=p("ZodString",(e,t)=>{_e.init(e,t),mt.init(e,t),e.email=n=>e.check(Jo(zi,n)),e.url=n=>e.check(Go($i,n)),e.jwt=n=>e.check(dr(Di,n)),e.emoji=n=>e.check(Yo(Ei,n)),e.guid=n=>e.check(xe(je,n)),e.uuid=n=>e.check(Vo(Y,n)),e.uuidv4=n=>e.check(Wo(Y,n)),e.uuidv6=n=>e.check(Qo(Y,n)),e.uuidv7=n=>e.check(Ko(Y,n)),e.nanoid=n=>e.check(Xo(Ii,n)),e.guid=n=>e.check(xe(je,n)),e.cuid=n=>e.check(Ho(Zi,n)),e.cuid2=n=>e.check(er(Si,n)),e.ulid=n=>e.check(tr(Oi,n)),e.base64=n=>e.check(cr(Ri,n)),e.base64url=n=>e.check(ur(Fi,n)),e.xid=n=>e.check(nr(Pi,n)),e.ksuid=n=>e.check(or(Ci,n)),e.ipv4=n=>e.check(rr(Ni,n)),e.ipv6=n=>e.check(ir(xi,n)),e.cidrv4=n=>e.check(sr(Ai,n)),e.cidrv6=n=>e.check(ar(Ti,n)),e.e164=n=>e.check(lr(ji,n)),e.datetime=n=>e.check(ni(n)),e.date=n=>e.check(ri(n)),e.time=n=>e.check(si(n)),e.duration=n=>e.check(ci(n))});function q(e){return Uo(ki,e)}const k=p("ZodStringFormat",(e,t)=>{w.init(e,t),mt.init(e,t)}),zi=p("ZodEmail",(e,t)=>{Hn.init(e,t),k.init(e,t)}),je=p("ZodGUID",(e,t)=>{Yn.init(e,t),k.init(e,t)}),Y=p("ZodUUID",(e,t)=>{Xn.init(e,t),k.init(e,t)}),$i=p("ZodURL",(e,t)=>{eo.init(e,t),k.init(e,t)}),Ei=p("ZodEmoji",(e,t)=>{to.init(e,t),k.init(e,t)}),Ii=p("ZodNanoID",(e,t)=>{no.init(e,t),k.init(e,t)}),Zi=p("ZodCUID",(e,t)=>{oo.init(e,t),k.init(e,t)}),Si=p("ZodCUID2",(e,t)=>{ro.init(e,t),k.init(e,t)}),Oi=p("ZodULID",(e,t)=>{io.init(e,t),k.init(e,t)}),Pi=p("ZodXID",(e,t)=>{so.init(e,t),k.init(e,t)}),Ci=p("ZodKSUID",(e,t)=>{ao.init(e,t),k.init(e,t)}),Ni=p("ZodIPv4",(e,t)=>{fo.init(e,t),k.init(e,t)}),xi=p("ZodIPv6",(e,t)=>{ho.init(e,t),k.init(e,t)}),Ai=p("ZodCIDRv4",(e,t)=>{mo.init(e,t),k.init(e,t)}),Ti=p("ZodCIDRv6",(e,t)=>{vo.init(e,t),k.init(e,t)}),Ri=p("ZodBase64",(e,t)=>{go.init(e,t),k.init(e,t)}),Fi=p("ZodBase64URL",(e,t)=>{bo.init(e,t),k.init(e,t)}),ji=p("ZodE164",(e,t)=>{yo.init(e,t),k.init(e,t)}),Di=p("ZodJWT",(e,t)=>{ko.init(e,t),k.init(e,t)}),vt=p("ZodNumber",(e,t)=>{it.init(e,t),I.init(e,t),e._zod.processJSONSchema=(o,r,i)=>jr(e,o,r),Q(e,"ZodNumber",{gt(o,r){return this.check(Te(o,r))},gte(o,r){return this.check(ae(o,r))},min(o,r){return this.check(ae(o,r))},lt(o,r){return this.check(Ae(o,r))},lte(o,r){return this.check(se(o,r))},max(o,r){return this.check(se(o,r))},int(o){return this.check(De(o))},safe(o){return this.check(De(o))},positive(o){return this.check(Te(0,o))},nonnegative(o){return this.check(ae(0,o))},negative(o){return this.check(Ae(0,o))},nonpositive(o){return this.check(se(0,o))},multipleOf(o,r){return this.check(Re(o,r))},step(o,r){return this.check(Re(o,r))},finite(){return this}});const n=e._zod.bag;e.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function Mi(e){return vr(vt,e)}const qi=p("ZodNumberFormat",(e,t)=>{zo.init(e,t),vt.init(e,t)});function De(e){return gr(qi,e)}const Bi=p("ZodUnknown",(e,t)=>{$o.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Mr()});function Me(){return _r(Bi)}const Li=p("ZodNever",(e,t)=>{Eo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Dr(e,n,o)});function Ui(e){return br(Li,e)}const Ji=p("ZodArray",(e,t)=>{Io.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Ur(e,n,o,r),e.element=t.element,Q(e,"ZodArray",{min(n,o){return this.check(ee(n,o))},nonempty(n){return this.check(ee(1,n))},max(n,o){return this.check(ut(n,o))},length(n,o){return this.check(lt(n,o))},unwrap(){return this.element}})});function Vi(e,t){return Cr(Ji,e,t)}const Wi=p("ZodObject",(e,t)=>{So.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Jr(e,n,o,r),_(e,"shape",()=>t.shape),Q(e,"ZodObject",{keyof(){return gt(Object.keys(this._zod.def.shape))},catchall(n){return this.clone({...this._zod.def,catchall:n})},passthrough(){return this.clone({...this._zod.def,catchall:Me()})},loose(){return this.clone({...this._zod.def,catchall:Me()})},strict(){return this.clone({...this._zod.def,catchall:Ui()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(n){return Vt(this,n)},safeExtend(n){return Wt(this,n)},merge(n){return Qt(this,n)},pick(n){return Ut(this,n)},omit(n){return Jt(this,n)},partial(...n){return Kt(_t,this,n[0])},required(...n){return Gt(bt,this,n[0])}})});function Qi(e,t){const n={type:"object",shape:e??{},...m(t)};return new Wi(n)}const Ki=p("ZodUnion",(e,t)=>{Oo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Vr(e,n,o,r),e.options=t.options});function Gi(e,t){return new Ki({type:"union",options:e,...m(t)})}const Yi=p("ZodIntersection",(e,t)=>{Po.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Wr(e,n,o,r)});function Xi(e,t){return new Yi({type:"intersection",left:e,right:t})}const le=p("ZodEnum",(e,t)=>{Co.init(e,t),I.init(e,t),e._zod.processJSONSchema=(o,r,i)=>qr(e,o,r),e.enum=t.entries,e.options=Object.values(t.entries);const n=new Set(Object.keys(t.entries));e.extract=(o,r)=>{const i={};for(const s of o)if(n.has(s))i[s]=t.entries[s];else throw new Error(`Key ${s} not found in enum`);return new le({...t,checks:[],...m(r),entries:i})},e.exclude=(o,r)=>{const i={...t.entries};for(const s of o)if(n.has(s))delete i[s];else throw new Error(`Key ${s} not found in enum`);return new le({...t,checks:[],...m(r),entries:i})}});function gt(e,t){const n=Array.isArray(e)?Object.fromEntries(e.map(o=>[o,o])):e;return new le({type:"enum",entries:n,...m(t)})}const Hi=p("ZodTransform",(e,t)=>{No.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Lr(e,n),e._zod.parse=(n,o)=>{if(o.direction==="backward")throw new Ue(e.constructor.name);n.addIssue=i=>{if(typeof i=="string")n.issues.push(W(i,n.value,t));else{const s=i;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=n.value),s.inst??(s.inst=e),n.issues.push(W(s))}};const r=t.transform(n.value,n);return r instanceof Promise?r.then(i=>(n.value=i,n.fallback=!0,n)):(n.value=r,n.fallback=!0,n)}});function es(e){return new Hi({type:"transform",transform:e})}const _t=p("ZodOptional",(e,t)=>{ct.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>ht(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function qe(e){return new _t({type:"optional",innerType:e})}const ts=p("ZodExactOptional",(e,t)=>{xo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>ht(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function ns(e){return new ts({type:"optional",innerType:e})}const os=p("ZodNullable",(e,t)=>{Ao.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Qr(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function Be(e){return new os({type:"nullable",innerType:e})}const rs=p("ZodDefault",(e,t)=>{To.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Gr(e,n,o,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function is(e,t){return new rs({type:"default",innerType:e,get defaultValue(){return typeof t=="function"?t():We(t)}})}const ss=p("ZodPrefault",(e,t)=>{Ro.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Yr(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function as(e,t){return new ss({type:"prefault",innerType:e,get defaultValue(){return typeof t=="function"?t():We(t)}})}const bt=p("ZodNonOptional",(e,t)=>{Fo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Kr(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function cs(e,t){return new bt({type:"nonoptional",innerType:e,...m(t)})}const us=p("ZodCatch",(e,t)=>{jo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Xr(e,n,o,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function ls(e,t){return new us({type:"catch",innerType:e,catchValue:typeof t=="function"?t:()=>t})}const ds=p("ZodPipe",(e,t)=>{Do.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Hr(e,n,o,r),e.in=t.in,e.out=t.out});function Le(e,t){return new ds({type:"pipe",in:e,out:t})}const ps=p("ZodReadonly",(e,t)=>{Mo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>ei(e,n,o,r),e.unwrap=()=>e._zod.def.innerType});function fs(e){return new ps({type:"readonly",innerType:e})}const hs=p("ZodCustom",(e,t)=>{qo.init(e,t),I.init(e,t),e._zod.processJSONSchema=(n,o,r)=>Br(e,n)});function ms(e,t={}){return Nr(hs,e,t)}function vs(e,t){return xr(e,t)}const gs=/^\(?\d{2}\)?[\s\-]?\d{4,5}[\s\-]?\d{4}$/,_s=Qi({nome:q().min(3,"Nome deve ter pelo menos 3 caracteres.").max(120,"Nome muito longo."),whatsapp:q().regex(gs,"Número de WhatsApp inválido. Ex: (11) 99999-9999"),email:q().email("E-mail inválido."),empresa:q().max(120,"Nome da empresa muito longo.").optional().transform(e=>(e==null?void 0:e.trim())||null),cargo:q().max(80,"Cargo muito longo.").optional().transform(e=>(e==null?void 0:e.trim())||null),plano:gt(["149","250","899"],{errorMap:()=>({message:"Selecione um plano válido."})}),qty:Mi().int().min(0,"Quantidade não pode ser negativa.").max(500,"Quantidade máxima excedida."),notes:q().max(1e3,"Observações muito longas.").optional().transform(e=>(e==null?void 0:e.trim())||null)}),bs="https://erp-hentechsolutions.lovable.app/api/public/orders",ys="N7ipyXLY31Xp3saRVmW0huIn",ws={149:"Individual",250:"Business",899:"Enterprise (10 cartões)"};function ks(e,t){const{nome:n,whatsapp:o,email:r,empresa:i,cargo:s,plano:a,qty:c,notes:u}=e,d=parseInt(a,10),f=a==="899"?10:5,h=c>=f?25:89,v=c*h,g=d+v,z=c>=f?c*64:0;return{order:{code:t,created_at:new Date().toISOString()},customer:{nome:n,whatsapp:o,email:r,empresa:i??null,cargo:s??null},plan:{id:a,name:ws[a],price:d},additionals:{quantity:c,unit_price:c>0?h:null,subtotal:v,discount_applied:c>=f,saving:z},summary:{total:g,currency:"BRL"},notes:u??null}}async function zs(e,t){const n=ks(e,t),o=await fetch(bs,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":ys},body:JSON.stringify(n)});if(!o.ok){let i=`Erro HTTP ${o.status}`;try{const s=await o.json();i=(s==null?void 0:s.message)||(s==null?void 0:s.error)||i}catch{}throw new Error(i)}return{ok:!0,data:await o.json().catch(()=>null),payload:n}}function $s(){const e=document.getElementById("app");e.innerHTML=`
    ${wt()}
    ${$t()}
    ${It()}
    ${St()}
    ${Ot()}
    ${Pt()}
    ${Ct()}
    ${Nt()}
    ${At()}
    ${Tt()}
    ${Rt()}
    ${Ft()}
  `,kt(),Et(),Zt(),xt(),Es(),Is()}function Es(){const e=document.querySelectorAll(".feat-card, .step, .plan-card, .testimonial, .faq-item");e.forEach((n,o)=>{n.style.transitionDelay=o%3*.08+"s"});const t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),t.unobserve(o.target))})},{threshold:.12});e.forEach(n=>t.observe(n))}function Is(){const e={individual:{val:"149",label:"Individual — R$ 149"},business:{val:"250",label:"Business — R$ 250"},enterprise:{val:"899",label:"Enterprise — R$ 899"}},t={149:"Individual · R$ 149",250:"Business · R$ 250",899:"Enterprise · R$ 899"},n={149:"Individual",250:"Business",899:"Enterprise (10 cartões)"};window.openFmo=function(c){document.getElementById("fmo").classList.add("open"),document.body.style.overflow="hidden",c&&e[c]&&(document.getElementById("f-plano").value=e[c].val,calcTotal())},window.closeFmo=function(){document.getElementById("fmo").classList.remove("open"),document.body.style.overflow=""},window.handleFmoClick=function(c){c.target===document.getElementById("fmo")&&closeFmo()};function o(c){const u=c.replace(/\D/g,"").slice(0,11),d=u.length;return d===0?"":d<=2?`(${u}`:d<=6?`(${u.slice(0,2)}) ${u.slice(2)}`:d<=10?`(${u.slice(0,2)}) ${u.slice(2,6)}-${u.slice(6)}`:`(${u.slice(0,2)}) ${u.slice(2,7)}-${u.slice(7)}`}(function(){const u=document.getElementById("f-whats");u&&(u.setAttribute("maxlength","16"),u.setAttribute("inputmode","numeric"),u.addEventListener("input",function(d){const l=this.selectionStart,f=this.value.length;this.value=o(this.value);const h=this.value.length-f;this.setSelectionRange(l+h,l+h)}),u.addEventListener("keydown",function(d){if(d.key==="Backspace"){const l=this.selectionStart;if(l>0&&this.selectionStart===this.selectionEnd){const f=this.value[l-1];/\d/.test(f)||(this.value=this.value.slice(0,l-1)+this.value.slice(l),this.value=o(this.value),d.preventDefault())}}}),u.addEventListener("paste",function(d){d.preventDefault();const l=(d.clipboardData||window.clipboardData).getData("text");this.value=o(l)}))})();let r=0;window.changeQty=function(c){r=Math.max(0,r+c),document.getElementById("qty-display").textContent=r,calcTotal()};function i(){const d=document.getElementById("f-plano").value==="899"?10:5;return r>=d?25:89}window.calcTotal=function(){const c=document.getElementById("f-plano"),u=parseInt(c.value)||0,d=i(),l=r*d,f=u+l,h=document.getElementById("summary"),v=document.getElementById("bulk-hint"),g=document.getElementById("add-price-label"),y=document.getElementById("f-plano").value==="899"?10:5,R=r>=y?25:89,Z=r>=y;if(g.textContent=Z?"(R$ 25 / un — desconto de volume aplicado!)":`(R$ 89 / un | a partir de ${y} un: R$ 25)`,g.style.color=Z?"#34D399":"var(--gold)",v&&(v.style.display=Z?"flex":"none"),document.getElementById("sidebar-plan").textContent=u?t[c.value]:"—",!u){h.style.display="none";return}h.style.display="block",document.getElementById("s-plano-label").textContent=n[c.value],document.getElementById("s-plano-val").textContent=`R$ ${u.toLocaleString("pt-BR")}`;const N=document.getElementById("s-add-row");r>0?(N.style.display="flex",document.getElementById("s-add-label").textContent=`${r}× adicional (R$ ${R}/un)`,document.getElementById("s-add-val").textContent=`R$ ${l.toLocaleString("pt-BR")}`):N.style.display="none";const b=document.getElementById("s-saving-row");if(Z){const S=r*64;b.style.display="flex",document.getElementById("s-saving").textContent=`− R$ ${S.toLocaleString("pt-BR")}`}else b.style.display="none";document.getElementById("s-total").textContent=`R$ ${f.toLocaleString("pt-BR")}`};function s(c,u){const d=document.getElementById(c);if(!d)return;d.classList.add("field-error");let l=d.parentElement.querySelector(".field-hint");l||(l=document.createElement("span"),l.className="field-hint",d.parentElement.appendChild(l)),l.textContent=u}function a(){document.querySelectorAll(".field-error").forEach(c=>c.classList.remove("field-error")),document.querySelectorAll(".field-hint").forEach(c=>c.remove())}window.submitOrder=async function(){a();const c={nome:document.getElementById("f-nome").value.trim(),whatsapp:document.getElementById("f-whats").value.trim(),email:document.getElementById("f-email").value.trim(),empresa:document.getElementById("f-empresa").value.trim(),cargo:document.getElementById("f-cargo").value.trim(),plano:document.getElementById("f-plano").value,qty:r,notes:document.getElementById("f-obs").value.trim()},u=_s.safeParse(c);if(!u.success){const v={nome:"f-nome",whatsapp:"f-whats",email:"f-email",empresa:"f-empresa",cargo:"f-cargo",plano:"f-plano",notes:"f-obs"};u.error.errors.forEach(z=>{const $=z.path[0],y=v[$];y&&s(y,z.message)});const g=document.querySelector(".field-error");g&&g.focus();return}const d=u.data,l="UIC-"+Math.random().toString(36).substr(2,6).toUpperCase(),f=document.querySelector(".submit-btn"),h=f.textContent;f.disabled=!0,f.textContent="Enviando…";try{await zs(d,l),document.getElementById("modal-code").textContent=l,closeFmo(),setTimeout(()=>{document.body.style.overflow="hidden",document.getElementById("modal").classList.add("open")},200)}catch(v){console.error("[submitOrder] Erro na API:",v),alert(`Não foi possível enviar seu pedido.

${v.message}

Tente novamente ou entre em contato via WhatsApp.`)}finally{f.disabled=!1,f.textContent=h}},window.closeModal=function(){document.getElementById("modal").classList.remove("open"),document.body.style.overflow="",["f-nome","f-whats","f-email","f-empresa","f-cargo","f-obs"].forEach(c=>{document.getElementById(c).value=""}),document.getElementById("f-plano").value="",r=0,document.getElementById("qty-display").textContent="0",document.getElementById("summary").style.display="none",document.getElementById("sidebar-plan").textContent="—",calcTotal()},window.toggleMenu=zt,document.getElementById("modal").addEventListener("click",function(c){c.target===this&&closeModal()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&(closeFmo(),closeModal())})}document.addEventListener("DOMContentLoaded",$s);
