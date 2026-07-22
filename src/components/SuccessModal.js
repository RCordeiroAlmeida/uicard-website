export function createSuccessModal() {
  return `
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
  `;
}

export function initSuccessModal() {
  // Success modal functions will be in main.js
}
