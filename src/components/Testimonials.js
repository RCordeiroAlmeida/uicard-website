import { registerSectionReveal } from '../lib/animations.js';

// TODO(conteudo-real): depoimentos ilustrativos — substituir por depoimentos
// reais (com autorização de uso de nome/empresa) antes de ir ao ar.
const TESTIMONIALS = [
  {
    text: 'Simplesmente absurdo como isso impressiona clientes. Em toda reunião alguém pede pra tocar no cartão de novo pra ver funcionar.',
    name: 'Ricardo Melo',
    role: 'CEO · Melo Investimentos',
  },
  {
    text: 'Comprei o kit Enterprise para minha equipe de vendas. A entrega foi rápida, o design ficou perfeito e os clientes adoram.',
    name: 'Camila Andrade',
    role: 'Diretora Comercial · StrategyBR',
  },
  {
    text: 'Atualizo meu site digital quando quero e o cartão continua o mesmo. Economizei na gráfica e zerei o cartão de papel.',
    name: 'Felipe Souza',
    role: 'Arquiteto · Estúdio FSA',
  },
];

export function createTestimonials() {
  const quotesHtml = TESTIMONIALS.map(t => `
    <blockquote class="testimonial">
      <span class="testimonial-stars" aria-label="5 de 5 estrelas">★★★★★</span>
      <p class="testimonial-text">${t.text}</p>
      <footer class="testimonial-author">
        <cite class="author-name">${t.name}</cite>
        <span class="author-role">${t.role}</span>
      </footer>
    </blockquote>
  `).join('');

  return `
    <section id="prova">
      <div class="shell">
        <div class="proof-head">
          <div class="section-eyebrow">Depoimentos</div>
          <h2 class="section-title">Quem usou, <span class="text-gold">recomenda.</span></h2>
        </div>
        <div class="proof-grid">
          ${quotesHtml}
        </div>
      </div>
    </section>
  `;
}

export function initTestimonials() {
  registerSectionReveal('#prova .testimonial', { stagger: 0.1 });
}
