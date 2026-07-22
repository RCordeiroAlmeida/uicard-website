// ── Config ────────────────────────────────────────────────────────────────────
const API_URL    = 'https://erp-hentechsolutions.lovable.app/api/public/orders';
const API_KEY    = import.meta.env.VITE_API_KEY;

const PLAN_NAMES = {
  '149': 'Individual',
  '250': 'Business',
  '899': 'Enterprise (10 cartões)',
};

// ── Monta o payload ───────────────────────────────────────────────────────────
function buildPayload(data, orderCode) {
  const { nome, whatsapp, email, empresa, cargo, plano, qty, notes } = data;

  const planVal   = parseInt(plano, 10);
  const isEnt     = plano === '899';
  const threshold = isEnt ? 10 : 5;
  const unitPrice = qty >= threshold ? 25 : 89;
  const addVal    = qty * unitPrice;
  const total     = planVal + addVal;
  const saving    = qty >= threshold ? qty * (89 - 25) : 0;

  return {
    order: {
      code:       orderCode,
      created_at: new Date().toISOString(),
    },
    customer: {
      nome,
      whatsapp,
      email,
      empresa: empresa ?? null,
      cargo:   cargo   ?? null,
    },
    plan: {
      id:    plano,
      name:  PLAN_NAMES[plano],
      price: planVal,
    },
    additionals: {
      quantity:         qty,
      unit_price:       qty > 0 ? unitPrice : null,
      subtotal:         addVal,
      discount_applied: qty >= threshold,
      saving,
    },
    summary: {
      total,
      currency: 'BRL',
    },
    notes: notes ?? null,
  };
}

// ── Envia pedido para a API ───────────────────────────────────────────────────
/**
 * @param {import('./orderSchema').OrderFormData} validatedData - dados já validados pelo Zod
 * @param {string} orderCode - código único do pedido (ex: "UIC-A3F9K2")
 * @returns {Promise<{ ok: boolean; data?: any; error?: string }>}
 */
export async function submitOrderToApi(validatedData, orderCode) {
  const payload = buildPayload(validatedData, orderCode);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key':    API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = `Erro HTTP ${response.status}`;
    try {
      const errBody = await response.json();
      message = errBody?.message || errBody?.error || message;
    } catch { /* ignora parse error */ }
    throw new Error(message);
  }

  const responseData = await response.json().catch(() => null);
  return { ok: true, data: responseData, payload };
}
