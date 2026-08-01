export function createTicker() {
  return `
    <div class="ticker-wrap">
      <div class="ticker-inner" id="ticker"></div>
    </div>
  `;
}

export function initTicker() {
  const items = [
    'NFC Premium', 'Sem App Necessário', 'Site Digital Incluso',
    'Design Personalizado', 'Atualizações Ilimitadas', 'QR Code no Verso',
    'Identidade Digital', 'Suporte Dedicado', 'Tecnologia NFC',
    'Link Exclusivo', 'Zero Papel', 'Conecte em 3 Segundos'
  ];
  const inner = document.getElementById('ticker');
  if (!inner) return;

  const doubled = [...items, ...items];
  inner.innerHTML = doubled.map(i =>
    `<div class="ticker-item"><div class="ticker-dot"></div>${i}</div>`
  ).join('');
}
