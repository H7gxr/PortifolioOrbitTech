# Jack — 3D Creator Portfolio

Landing page de portfólio construída com React + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`, prontos para deploy (Vercel, Netlify, Cloudflare Pages, etc).

## Estrutura

- `src/components/` — componentes reutilizáveis (FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton)
- `src/sections/` — as 5 seções da página (Hero, Marquee, About, Services, Projects)
- `src/App.tsx` — monta as seções na ordem
- `src/index.css` — estilos globais, fonte Kanit, classe `.hero-heading`

## Notas

- Todas as imagens/GIFs são carregadas de URLs externas (Figma Sites, motionsites.ai, CDN Higgsfield) conforme o briefing original — não há assets locais.
