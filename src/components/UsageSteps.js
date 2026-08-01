import { registerSectionReveal } from '../lib/animations.js';

const STEPS = [
  {
    num: '01',
    title: 'Aproxime',
    desc: 'Encoste seu UICard na parte de trás de qualquer smartphone. O chip NFC ativa sozinho — ninguém precisa abrir nenhum app.',
  },
  {
    num: '02',
    title: 'Conecte',
    desc: 'O celular reconhece o cartão na hora e sugere abrir o seu perfil, como uma notificação comum de etiqueta NFC.',
  },
  {
    num: '03',
    title: 'Compartilhe',
    desc: 'Seu site abre direto no navegador: nome, cargo, redes sociais, portfólio e contato, prontos para salvar.',
  },
];

export function createUsageSteps() {
  const stepsHtml = STEPS.map((s, i) => `
    <li class="usage-step">
      <span class="usage-marker">
        ${i === 0 ? '<span class="usage-ripple" aria-hidden="true"></span><span class="usage-ripple usage-ripple--delayed" aria-hidden="true"></span>' : ''}
        <span class="usage-dot"></span>
      </span>
      <span class="usage-num">${s.num}</span>
      <h3 class="usage-title">${s.title}</h3>
      <p class="usage-desc">${s.desc}</p>
    </li>
  `).join('');

  return `
    <section id="como">
      <div class="shell">
        <div class="usage-head">
          <div class="section-eyebrow">Como funciona</div>
          <h2 class="section-title">Três passos.<br><span class="text-gold-gradient">Nenhuma fricção.</span></h2>
          <p class="section-sub usage-sub">
            Da aproximação ao compartilhamento, tudo acontece em segundos e direto no navegador do celular —
            do seu lado e do lado de quem recebe.
          </p>
        </div>

        <ol class="usage-flow">
          ${stepsHtml}
        </ol>
      </div>
    </section>
  `;
}

export function initUsageSteps() {
  registerSectionReveal('#como .usage-step', { stagger: 0.12 });
}
