// Vercel serverless function — the ONLY place that knows ERP_API_URL/API_KEY.
// The browser never sees these; it only ever talks to this same-origin route.
import { orderSchema } from '../src/lib/orderSchema.js';
import { getPlanById, calcOrderTotal } from '../src/lib/plans.js';

const ORDER_CODE_RE = /^UIC-[A-Z0-9]{4,10}$/;

// Soft, defense-in-depth signal only — Origin is spoofable by non-browser
// clients and isn't the real trust boundary here. The real boundary is that
// API_KEY only ever exists in this server process, never in shipped JS.
function isOriginAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host;
    const requestHost = req.headers.host;
    if (originHost === requestHost) return true;
    if (/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(originHost)) return true;
    return false;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  try {
    return await handleOrder(req, res);
  } catch (err) {
    // Última rede de segurança: qualquer exceção não prevista aqui vira
    // JSON genérico, nunca a página de erro/stack trace padrão da Vercel.
    console.error('[api/orders] Unexpected error:', err);
    return res.status(500).json({ ok: false, error: 'Erro interno no servidor.', code: 'INTERNAL_ERROR' });
  }
}

async function handleOrder(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Método não permitido.', code: 'METHOD_NOT_ALLOWED' });
  }

  if (!isOriginAllowed(req)) {
    return res.status(403).json({ ok: false, error: 'Origem não permitida.', code: 'FORBIDDEN_ORIGIN' });
  }

  const ERP_API_URL = process.env.ERP_API_URL;
  const API_KEY = process.env.API_KEY;
  if (!ERP_API_URL || !API_KEY) {
    // Detail stays server-side only — never tell the client which var is missing.
    console.error('[api/orders] Missing server env: ERP_API_URL and/or API_KEY not set.');
    return res.status(500).json({ ok: false, error: 'Erro interno no servidor. Tente novamente mais tarde.', code: 'SERVER_MISCONFIGURED' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Corpo da requisição inválido.', code: 'INVALID_BODY' });
  }

  const { orderCode, ...rawOrder } = body;

  // Re-validate server-side — the client's Zod check is a UX convenience,
  // never a trust boundary, since this endpoint is now publicly reachable.
  const parsed = orderSchema.safeParse(rawOrder);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: 'Dados do pedido inválidos.',
      code: 'VALIDATION_ERROR',
      fieldErrors: parsed.error.flatten().fieldErrors,
    });
  }

  if (typeof orderCode !== 'string' || !ORDER_CODE_RE.test(orderCode)) {
    return res.status(400).json({ ok: false, error: 'Código de pedido inválido.', code: 'VALIDATION_ERROR' });
  }

  const data = parsed.data;
  const plan = getPlanById(data.plano);
  const totals = calcOrderTotal(data.plano, data.qty);
  if (!plan || !totals) {
    return res.status(400).json({ ok: false, error: 'Plano inválido.', code: 'VALIDATION_ERROR' });
  }

  // Server is the sole pricing authority — nothing about price is trusted from the client.
  const payload = {
    order: { code: orderCode, created_at: new Date().toISOString() },
    customer: {
      nome: data.nome,
      whatsapp: data.whatsapp,
      email: data.email,
      empresa: data.empresa,
      cargo: data.cargo,
    },
    plan: { id: plan.id, name: plan.name, price: plan.price },
    additionals: {
      quantity: totals.qty,
      unit_price: totals.qty > 0 ? totals.unitPrice : 0,
      subtotal: totals.addonSubtotal,
      discount_applied: totals.discountApplied,
      saving: totals.savings,
    },
    summary: { total: totals.total, currency: 'BRL' },
    notes: data.notes,
  };

  try {
    const upstream = await fetch(`${ERP_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      let detail = '';
      try {
        detail = await upstream.text();
      } catch {
        /* ignore */
      }
      console.error(`[api/orders] Upstream ERP error ${upstream.status}:`, detail);
      return res.status(502).json({
        ok: false,
        error: 'Não foi possível registrar seu pedido no momento. Tente novamente em instantes.',
        code: 'UPSTREAM_ERROR',
      });
    }

    const upstreamData = await upstream.json().catch(() => null);
    return res.status(200).json({ ok: true, orderCode, data: upstreamData });
  } catch (err) {
    console.error('[api/orders] Network error contacting ERP:', err);
    return res.status(502).json({
      ok: false,
      error: 'Não foi possível registrar seu pedido no momento. Tente novamente em instantes.',
      code: 'NETWORK_ERROR',
    });
  }
}
