// Fonte única de verdade das regras de preço — importado pelo client (Vite)
// e pela serverless function (Node), por isso não pode tocar em `window`/DOM.

export const ADDON_PRICE_STANDARD = 89;
export const ADDON_PRICE_BULK = 25;

export const PLANS = {
  '149': {
    id: '149',
    key: 'individual',
    name: 'Individual',
    price: 149,
    cardCount: 1,
    addonThreshold: 5,
  },
  '250': {
    id: '250',
    key: 'business',
    name: 'Business',
    price: 250,
    cardCount: 1,
    addonThreshold: 5,
  },
  '899': {
    id: '899',
    key: 'enterprise',
    name: 'Enterprise (10 cartões)',
    price: 899,
    cardCount: 10,
    addonThreshold: 10,
  },
};

export const PLAN_IDS = Object.keys(PLANS);

export function getPlanById(planId) {
  return PLANS[planId] ?? null;
}

export function getPlanByKey(key) {
  return PLAN_IDS.map(id => PLANS[id]).find(p => p.key === key) ?? null;
}

export function getAddonUnitPrice(planId, qty) {
  const plan = getPlanById(planId);
  if (!plan) return ADDON_PRICE_STANDARD;
  return qty >= plan.addonThreshold ? ADDON_PRICE_BULK : ADDON_PRICE_STANDARD;
}

// Recalcula o pedido inteiro a partir do plano + quantidade de adicionais.
// Usado tanto na pré-visualização do form (client) quanto na cotação
// autoritativa do pedido (server) — os dois DEVEM concordar sempre.
export function calcOrderTotal(planId, qty) {
  const plan = getPlanById(planId);
  if (!plan) return null;

  const safeQty = Math.max(0, Math.floor(Number(qty) || 0));
  const discountApplied = safeQty >= plan.addonThreshold;
  const unitPrice = discountApplied ? ADDON_PRICE_BULK : ADDON_PRICE_STANDARD;
  const addonSubtotal = safeQty * unitPrice;
  const savings = discountApplied ? safeQty * (ADDON_PRICE_STANDARD - ADDON_PRICE_BULK) : 0;
  const total = plan.price + addonSubtotal;

  return {
    plan,
    qty: safeQty,
    unitPrice,
    addonSubtotal,
    discountApplied,
    savings,
    total,
  };
}
