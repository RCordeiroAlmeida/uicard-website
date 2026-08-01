# UICard — Landing Page

Landing page do cartão NFC premium UICard: identidade em preto + dourado, hero com cena 3D (three.js), animações de scroll (GSAP) e micro-interações (Motion). Vite + JavaScript vanilla, sem framework de UI.

## 📁 Estrutura do Projeto

```
projeto/
├── api/
│   └── orders.js            # Vercel serverless function — único lugar que conhece a API key do ERP
├── public/
│   ├── favicon.svg
│   └── assets/               # Imagens estáticas (uicard.jpg, mockups)
├── src/
│   ├── components/           # Um módulo por seção: create<X>() + init<X>()
│   ├── three/
│   │   └── heroScene.js      # Cena 3D do hero (carregada sob demanda)
│   ├── lib/
│   │   ├── plans.js          # Única fonte de verdade dos planos/preços
│   │   ├── orderSchema.js    # Validação Zod do formulário de pedido
│   │   ├── orderApi.js       # Client → POST /api/orders (sem chave, sem cálculo de preço)
│   │   ├── formModalController.js  # Ponte entre "abrir modal" e o FormModal
│   │   ├── animations.js     # GSAP + ScrollTrigger (reveals de scroll)
│   │   ├── motion-helpers.js # Motion (hover, accordion, transições de modal)
│   │   └── logo.js           # Marca em SVG (ícone "U" + onda NFC)
│   ├── styles/
│   │   ├── variables.css     # Tokens de design (cor, espaçamento, easing)
│   │   ├── global.css        # Reset, botões, utilitários compartilhados
│   │   ├── index.css         # Agrega global.css + sections/*.css
│   │   └── sections/         # Um CSS por componente
│   └── main.js                # Orquestrador: renderiza e inicializa cada componente
├── index.html
├── vercel.json
├── .env.example                # Variáveis de servidor esperadas por api/orders.js
├── package.json
└── vite.config.js
```

## 🚀 Como usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Sobe o Vite em `http://localhost:5173`. **`/api/orders` não fica disponível nesse modo** (Vite não serve funções serverless) — o envio do formulário vai falhar com um erro genérico, o que é esperado.

Para testar o fluxo completo (incluindo `/api/orders`) localmente:

```bash
npm run dev:vercel
```

Isso roda `npx vercel dev`, que serve o front-end e as funções em `api/` juntos. Requer as variáveis de `.env.example` preenchidas num `.env.local`.

### Build de produção

```bash
npm run build
```

Gera os arquivos otimizados em `dist/`.

## ⚙️ Variáveis de ambiente

Configuradas no painel da Vercel (ou em `.env.local` para `npm run dev:vercel`) — **nunca** com prefixo `VITE_`, senão ficam embutidas no bundle público:

```
ERP_API_URL=
API_KEY=
```

Só `api/orders.js` lê essas variáveis. O client nunca tem acesso a elas.

## 🎨 Stack

- **Vite** — build e dev server
- **three.js** — cena 3D do hero (carregada via `import()` dinâmico, com fallback estático em CSS sob `prefers-reduced-motion` ou sem suporte a WebGL)
- **GSAP + ScrollTrigger** — reveals de scroll e timeline de entrada do hero
- **Motion** — micro-interações (hover/press de botões, accordion do FAQ, entrada/saída de modais)
- **Zod** — validação do formulário de pedido, no client e de novo no servidor

## 🧩 Padrão dos componentes

Cada arquivo em `src/components/` exporta:
- `create<Nome>()` — retorna o HTML do componente (template string)
- `init<Nome>()` — liga os próprios `addEventListener`s depois que o HTML já está no DOM

Nenhum componente depende de globals em `window`; interação entre componentes (ex: um botão de Pricing abrir o formulário de pedido) passa por módulos compartilhados em `src/lib/` (`formModalController.js`) ou por import direto.

## 🔒 Notas de segurança

- A chave do ERP nunca chega ao client — `api/orders.js` é o único lugar que a lê, e o preço do pedido é recalculado e validado no servidor a partir de `src/lib/plans.js`, nunca confiando no valor enviado pelo navegador.
- `orderSchema` (Zod) roda duas vezes: no client (feedback imediato) e de novo em `api/orders.js` (fonte de verdade — o client nunca é tratado como confiável).
- Erros de backend nunca são ecoados crus para o usuário — sempre uma mensagem genérica na UI, com o detalhe completo só no console/log do servidor.
