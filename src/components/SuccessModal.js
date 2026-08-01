import { showOverlay, hideOverlay, pressable } from '../lib/motion-helpers.js';
import { resetForm } from './FormModal.js';

export function createSuccessModal() {
  return `
    <div class="modal-overlay" id="modal">
      <div class="modal">
        <div class="modal-star">✦</div>
        <h3>Pedido recebido!</h3>
        <p>Nossa equipe entrará em contato no WhatsApp informado em até 24 horas úteis para confirmar os detalhes e apresentar seu layout personalizado.</p>
        <div class="order-code" id="modal-code">UIC-000000</div>
        <p class="modal-hint">Guarde este código — é o número do seu pedido.</p>
        <button type="button" class="modal-close" id="modal-close-btn">Perfeito, entendido!</button>
      </div>
    </div>
  `;
}

let openRef = () => {};

/** Chamado por FormModal.js após um envio de pedido bem-sucedido. */
export function showSuccessModal(orderCode) {
  openRef(orderCode);
}

export function initSuccessModal() {
  const overlay = document.getElementById('modal');
  const panel = overlay?.querySelector('.modal');
  const codeEl = document.getElementById('modal-code');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!overlay || !panel || !codeEl || !closeBtn) return;

  let isOpen = false;

  async function open(orderCode) {
    if (isOpen) return;
    isOpen = true;
    codeEl.textContent = orderCode;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    await showOverlay(overlay, panel);
  }

  async function close() {
    if (!isOpen) return;
    isOpen = false;
    await hideOverlay(overlay, panel);
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    // O formulário só é limpo quando a confirmação é fechada — enquanto ela
    // está na tela, os dados do pedido continuam visíveis por trás dela.
    resetForm();
  }

  openRef = open;

  closeBtn.addEventListener('click', close);
  pressable(closeBtn);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) close();
  });
}
