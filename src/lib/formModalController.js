// Ponte entre "quem quer abrir o formulário de pedido" (Nav, Hero, Pricing,
// CTA, FAQ) e "quem realmente sabe abrir/fechar o modal" (FormModal.js).
// Existe pra nenhum componente precisar de um global em `window` só pra
// chamar um botão de outro componente — FormModal.js registra sua própria
// implementação dentro do próprio initFormModal().

let handlers = {
  open: () => console.warn('[formModalController] open() chamado antes do FormModal registrar handlers.'),
  close: () => {},
};

export function registerFormModalHandlers(next) {
  handlers = next;
}

export function openFormModal(planKey) {
  handlers.open(planKey);
}

export function closeFormModal() {
  handlers.close();
}
