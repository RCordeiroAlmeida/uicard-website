export function createFormModal() {
  return `
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
  `;
}

export function initFormModal() {
  // Form modal functions will be in main.js
}
