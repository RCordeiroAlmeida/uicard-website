export function createPricing() {
  return `
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
  `;
}

export function initPricing() {
  // Animation handled by Intersection Observer in main.js
}
