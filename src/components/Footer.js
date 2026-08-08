import { logoLockup } from '../lib/logo.js';

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">${logoLockup({ size: 24 })}</div>
          <p class="footer-tagline">Cartão NFC premium com identidade digital integrada. Um toque, uma conexão inesquecível.</p>
        </div>
        <div class="footer-col">
          <h5>Produto</h5>
          <a href="#produto">O produto</a>
          <a href="#como">Como funciona</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#prova">Depoimentos</a>
        </div>
        <div class="footer-col">
          <h5>Suporte</h5>
          <a href="#faq">FAQ</a>
          <a href="https://wa.me/5511982652190" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div class="footer-col">
          <h5>Legal</h5>
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de uso</a>
          <a href="/entrega">Política de entrega</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© ${new Date().getFullYear()} UICard. Todos os direitos reservados.</div>
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
  `;
}

export function initFooter() {
  // Sem interatividade própria — só âncoras internas e links a preencher.
}
