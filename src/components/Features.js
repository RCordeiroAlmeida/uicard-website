import { registerSectionReveal } from '../lib/animations.js';

const FEATURES = [
  {
    name: 'Site / cartão digital',
    desc: 'Uma página exclusiva com seus dados, foto, links e identidade visual. Abre em qualquer navegador, sem instalar nada.',
    tag: 'Incluso',
  },
  {
    name: 'Link personalizado',
    desc: 'Um endereço próprio, no formato <code>seunome.uicard.com.br</code>, pra usar no WhatsApp, no e-mail e na assinatura.',
    tag: 'Incluso',
  },
  {
    name: 'Atualizações do site',
    desc: 'Mudou de cargo, telefone ou empresa? Você atualiza o conteúdo e o cartão continua o mesmo. Individual: até 3. Business: até 10. Enterprise: ilimitadas.',
    tag: 'Incluso',
  },
  {
    name: 'Acabamento premium',
    desc: 'Impressão UV, acabamento fosco ou metalizado, chip NFC embutido de alta durabilidade e QR Code no verso.',
    tag: 'Incluso',
  },
  {
    name: 'Kit empresarial',
    desc: 'Identidade visual unificada para toda a equipe, gestão centralizada dos perfis e gerente de conta dedicado.',
    tag: 'Enterprise',
  },
  {
    name: 'Análise de acessos',
    desc: 'Quantas vezes seu cartão foi aberto, de onde vieram os contatos e quais links receberam mais cliques.',
    tag: 'Em breve',
    muted: true,
  },
];

export function createFeatures() {
  const rowsHtml = FEATURES.map((f, i) => `
    <li class="feature-row${f.muted ? ' is-upcoming' : ''}">
      <span class="feature-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="feature-body">
        <h3 class="feature-name">${f.name}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>
      <span class="feature-tag">${f.tag}</span>
    </li>
  `).join('');

  return `
    <section id="funcionalidades">
      <div class="shell feature-layout">
        <div class="feature-intro">
          <div class="section-eyebrow">Funcionalidades</div>
          <h2 class="section-title">Tudo que acompanha<br><span class="text-gold">o seu UICard.</span></h2>
          <p class="feature-lede">
            Você recebe o cartão físico e o ecossistema digital junto — pronto pra usar no mesmo dia, sem
            configuração e sem mensalidade.
          </p>
        </div>

        <ol class="feature-index">
          ${rowsHtml}
        </ol>
      </div>
    </section>
  `;
}

export function initFeatures() {
  registerSectionReveal('#funcionalidades .feature-row', { stagger: 0.07, y: 18 });
}
