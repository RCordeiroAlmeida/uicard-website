export function createTestimonials() {
  return `
    <section id="prova">
      <div style="text-align:center;margin-bottom:52px">
        <div class="section-eyebrow" style="justify-content:center">O que dizem sobre o UICard</div>
        <div class="section-title">Quem usou,<br><span class="text-gold">recomenda.</span></div>
      </div>
      <div class="proof-grid">
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Simplesmente absurdo como isso impressiona clientes. Em toda reunião alguém pede pra tocar no cartão de novo pra ver funcionar. Melhor investimento do ano.</p>
          <div class="testimonial-author">
            <div class="author-avatar">RM</div>
            <div>
              <div class="author-name">Ricardo Melo</div>
              <div class="author-role">CEO · Melo Investimentos</div>
            </div>
          </div>
        </div>
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Comprei o kit Enterprise para minha equipe de vendas. A entrega foi rápida, o design ficou perfeito, e os clientes adoram. Já viralizou no nosso Instagram.</p>
          <div class="testimonial-author">
            <div class="author-avatar">CA</div>
            <div>
              <div class="author-name">Camila Andrade</div>
              <div class="author-role">Diretora Comercial · StrategyBR</div>
            </div>
          </div>
        </div>
        <div class="testimonial anim-fade">
          <div class="stars">★★★★★</div>
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">Atualizo meu site digital quando quero, o cartão continua o mesmo. Economizei na gráfica e zero cartão de papel. Qualidade premium do físico também.</p>
          <div class="testimonial-author">
            <div class="author-avatar">FS</div>
            <div>
              <div class="author-name">Felipe Souza</div>
              <div class="author-role">Arquiteto · Estúdio FSA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initTestimonials() {
  // Animation handled by Intersection Observer in main.js
}
