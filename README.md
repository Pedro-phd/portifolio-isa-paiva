# Isabelly Paiva — Portfólio

Site de portfólio em **Next.js 16** (App Router). Convertido do protótipo original em React/CDN — design, textos e conteúdo idênticos.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

O projeto está 100% pronto para a Vercel — não precisa de configuração extra.

1. Suba a pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. A Vercel detecta o Next.js automaticamente. Clique em **Deploy**.

Ou pela CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # produção
```

## Estrutura

```
app/
  layout.jsx      → <html>, fontes, metadata
  page.jsx        → App (cursor custom, painel de tweaks)
  globals.css     → estilos (portfolio.css original)
components/
  sections.jsx    → Nav, Hero, About, VideoMosaic, Services, Brands, Cases, Contact
  tweaks-panel.jsx→ painel de ajustes e controles
public/assets/    → imagens e vídeos
```
