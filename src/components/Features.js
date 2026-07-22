export function createFeatures() {
  return `
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
  `;
}

export function initFeatures() {
  // Animation handled by Intersection Observer in main.js
}
