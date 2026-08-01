// Client envia só a seleção bruta — nunca preço calculado. O preço é
// recomputado e validado do zero em api/orders.js, que é quem de fato
// conhece a chave da API do ERP. Ver api/orders.js.

/**
 * @param {object} rawFormData - dados brutos do formulário (mesmo shape esperado por orderSchema
 *   ANTES do transform — o servidor roda o orderSchema de novo do zero em api/orders.js)
 * @param {string} orderCode - código único do pedido (ex: "UIC-A3F9K2")
 * @returns {Promise<{ ok: boolean; orderCode: string; data?: any }>}
 */
export async function submitOrderToApi(rawFormData, orderCode) {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...rawFormData, orderCode }),
  });

  let body = null;
  try {
    body = await response.json();
  } catch {
    /* resposta sem corpo JSON — trata abaixo pelo status */
  }

  if (!response.ok || !body?.ok) {
    // A mensagem já vem pré-sanitizada pelo servidor — nunca expõe detalhe
    // interno do ERP para o usuário final.
    const message = body?.error || 'Não foi possível enviar seu pedido. Tente novamente.';
    throw new Error(message);
  }

  return body;
}
