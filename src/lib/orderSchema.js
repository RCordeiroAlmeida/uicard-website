import { z } from 'zod';

// ── Regex helpers ─────────────────────────────────────────────────────────────
const BR_PHONE_RE = /^\(?\d{2}\)?[\s\-]?\d{4,5}[\s\-]?\d{4}$/;

// ── Schema de validação do pedido ─────────────────────────────────────────────
export const orderSchema = z.object({
  nome: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres.')
    .max(120, 'Nome muito longo.'),

  whatsapp: z
    .string()
    .regex(BR_PHONE_RE, 'Número de WhatsApp inválido. Ex: (11) 99999-9999'),

  email: z
    .string()
    .email('E-mail inválido.'),

  empresa: z
    .string()
    .max(120, 'Nome da empresa muito longo.')
    .optional()
    .transform(v => v?.trim() || null),

  cargo: z
    .string()
    .max(80, 'Cargo muito longo.')
    .optional()
    .transform(v => v?.trim() || null),

  plano: z.enum(['149', '250', '899'], {
    error: 'Selecione um plano válido.',
  }),

  qty: z
    .number()
    .int()
    .min(0, 'Quantidade não pode ser negativa.')
    .max(500, 'Quantidade máxima excedida.'),

  notes: z
    .string()
    .max(1000, 'Observações muito longas.')
    .optional()
    .transform(v => v?.trim() || null),
});

// ── Tipagem inferida ──────────────────────────────────────────────────────────
// @typedef {import('zod').infer<typeof orderSchema>} OrderFormData
