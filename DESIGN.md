---
name: Isabelly Paiva — Portfólio
description: Portfólio editorial monocromático em movimento — marketing, vídeo e conteúdo.
colors:
  ink: "#0a0a0a"
  paper: "#f6f5f2"
  muted: "#6b6b66"
  line: "#d8d4cc"
  tint: "#ebe8e1"
  inverse-bg: "#0a0a0a"
  inverse-fg: "#f6f5f2"
typography:
  display:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(80px, 17vw, 280px)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(56px, 9vw, 144px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(28px, 3.4vw, 48px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "4px"
  pill: "999px"
spacing:
  gutter: "32px"
  sm: "32px"
  md: "64px"
  lg: "96px"
  xl: "140px"
components:
  section-label:
    typography: "{typography.label}"
    textColor: "{colors.muted}"
  cta-link:
    typography: "{typography.title}"
    textColor: "{colors.inverse-fg}"
    padding: "0 0 4px 0"
  metric:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-fg}"
    padding: "56px 24px 32px"
  card-surface:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.sm}"
  testimonial:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "40px 32px"
---

# Design System: Isabelly Paiva — Portfólio

## 1. Overview

**Creative North Star: "The Director's Cut"**

Este é um portfólio que se comporta como uma sala de montagem: o material bruto (Reels, cases, números) entra em preto-e-branco e ganha cor quando você se aproxima. Tudo se move com intenção — marquees gigantes do nome ao fundo, títulos serifados que cortam a página, um cursor custom que vira "PLAY" sobre os vídeos. A interface é o monitor de edição; a obra é o filme. Nada na moldura grita; o movimento é a assinatura.

A personalidade é **afiada, autoral e performática** (PRODUCT.md). Densidade editorial alta na tipografia, generosa no espaço em branco. O sistema é rigorosamente monocromático — papel quente e tinta quase-preta — porque a contenção é o argumento: quem domina o ofício não precisa de cor pra impressionar. A cor real está reservada para o trabalho dela, não para a interface. Seções inteiras invertem para preto (métricas, contato) como cortes secos de cena.

O sistema **rejeita explicitamente**: template genérico de freelancer, frieza azul-corporativa de agência grande, estética "cute" pastel de microinfluencer, e cara de startup/SaaS com gradientes neon. Se parecer qualquer um desses quatro, está errado.

**Key Characteristics:**
- Monocromático: papel quente (#f6f5f2) + tinta (#0a0a0a), sem acento cromático ativo.
- Tipografia editorial: serifa de display (Instrument Serif) protagonista, mono (JetBrains Mono) para labels.
- Grayscale por padrão, cor no hover — a obra "acende" sob atenção.
- Flat: profundidade por camadas tonais, linhas de grid e inversões de seção, nunca por sombra.
- Movimento como assinatura: marquees, reveals em sequência, cursor custom, easing ease-out.
- Três direções de tema permutáveis (Editorial · Swiss · Cinematic) compartilham a mesma estrutura.

## 2. Colors

Paleta monocromática de papel-e-tinta: nenhum acento cromático ativo — o contraste e o movimento fazem o trabalho que a cor faria.

### Primary
- **Ink** (#0a0a0a): tinta quase-preta. Todo o texto principal, traços de grid, e o fundo das seções invertidas (métricas, contato). É também o "acento" atual — botões e estados de foco usam tinta cheia, não uma cor.

### Neutral
- **Warm Paper** (#f6f5f2): off-white quente. Fundo padrão de toda a página. Levemente fora do branco puro para um tom de papel impresso, não tela.
- **Tint** (#ebe8e1): superfície de papel um degrau acima do fundo. Placeholders de mídia, cards de depoimento em repouso, avatares.
- **Muted** (#6b6b66): cinza-pedra. Labels mono, textos de apoio, índices, metadados. Nunca para corpo de leitura longa.
- **Line** (#d8d4cc): divisores e bordas (token de grid a 1px / rgba(10,10,10,0.08)). A estrutura é desenhada com linhas, não caixas.

### Inverse
- **Inverse Surface** (#0a0a0a) / **Inverse Ink** (#f6f5f2): par invertido para seções "corte de cena" (Métricas, Contato). A transição entre claro e escuro é animada (0.6s) como uma virada de luz.

### Named Rules
**The Monochrome Rule.** A interface não tem cor. Papel e tinta apenas. A única cor na tela vem das fotos e vídeos do trabalho — e só quando o usuário passa o mouse. A contenção é o ponto.

**The Reserved Accent Rule.** Existe **um** slot de acento reservado para o futuro (`--pink`, hoje apontando para a própria tinta). Se um acento cromático for introduzido, ele é único, quente, e usado em ≤5% de qualquer tela — exclusivamente em estados de hover/foco, nunca em superfícies grandes. Introduzir mais de uma cor de acento quebra o sistema.

### Sub-brand palettes (rota `/food` apenas — exceção intencional à Monochrome Rule)

A vitrine gastronômica `/food` é a **única** superfície que rompe a regra monocromática, de propósito: cada marca de comida ocupa a tela inteira com a sua própria cor, separadas por divisórias de papel rasgado. O portfólio principal (`/`) e a página de nicho (`/comida`) permanecem papel-e-tinta. Estes tokens vivem escopados em `.fd-shell`; não vazam para o resto do sistema.

**Bridge / Intro** — fundo papel quente `#f4efe6`, texto `#161310` / `#3a3530`, metadados `#9a8a6f` e `#8a7a5f`. Faz a ponte do editorial da home para a cor.

**Marcelle Nogueira (azul bandeira · salgaderia/boteco):**
- **Azul bandeira** `#0a3fbf` (fundo da banda) / **Azul fundo** `#062c8f` (sombras, texto sobre dourado).
- **Dourado de fritura** `#f6a823` (faixa marquee, hover/foco) — a cor da coxinha frita.
- Texto e títulos em branco `#fff` (Archivo Black, pôster de boteco). Galeria em fundo branco puro.

**Gé Sabores (chita de vó · confeitaria caseira):**
- **Creme** `#faf0dd` / `#f4e8d0` (fundo da banda, toalha de mesa).
- **Vermelho-geleia** `#c33149` (títulos, pills, marquee) — o vermelho da chita.
- **Verde-folha** `#5f8b4c` (acento secundário, palavra manuscrita) — o verde da estampa floral.
- **Mel** `#f6a823` (compartilhado com Marcelle, usado na textura de bolinhas chita).
- Texto `#2a1d16` / `#4a3a30` (marrom quente de cozinha).

**Footer `/food`** — corte escuro `#161310` sobre `#f4efe6`, mesmo gesto de "corte de cena" do portfólio, fechando a página antes de voltar ao monocromático.

## 3. Typography

**Display Font:** Instrument Serif (fallback Times New Roman, serif)
**Body Font:** System sans (-apple-system, Helvetica Neue, Arial)
**Label/Mono Font:** JetBrains Mono (fallback ui-monospace, Menlo)

**Sub-brand display (rota `/food` apenas):** Archivo Black e Caveat. Adição de marca intencional e escopada — a vitrine gastronômica `/food` rompe de propósito com o editorial preto-no-creme e fala em cor vibrante. **Archivo Black** (grotesca pesada, caixa alta, tracking apertado) é o título-pôster de boteco da marca Marcelle Nogueira (azul bandeira). **Caveat** (manuscrita) é o toque de cartão-de-receita-da-vó da marca Gé Sabores (chita). Estas fontes vivem só em `/food`; o portfólio principal continua Instrument Serif + JetBrains Mono.

**Character:** Pareamento por eixo de contraste — serifa de alto contraste e desenho editorial contra mono técnica e neutra. A serifa carrega emoção e voz autoral; a mono carrega precisão e metadado. O corpo em sans de sistema desaparece de propósito, deixando a serifa e a mono definirem a personalidade. O itálico da serifa é usado como ênfase ("crescer de verdade", "converter.") — é a voz da Isabelly grifando a própria fala.

### Hierarchy
- **Display** (400, clamp(80px, 17vw, 280px), lh 0.88, ls -0.04em): título do hero e CTA gigante de contato. Serifa, frequentemente em itálico no sobrenome.
- **Headline** (400, clamp(56px, 9vw, 144px), lh 0.92, ls -0.04em): títulos de seção (Serviços, Cases, Depoimentos). Itálico na palavra-chave final.
- **Title** (400, clamp(28px, 3.4vw, 48px), lh 1.05, ls -0.02em): nomes de serviço, títulos de card/case, links de contato.
- **Body** (400, 17px, lh 1.55, cor Ink): parágrafos de texto. Largura máxima ~52ch (apoio menor em 38–46ch).
- **Label** (400, 11px, ls 0.16em, UPPERCASE, mono, cor Muted): rótulos de seção, navegação, índices, metadados, footer. Sempre caixa alta com tracking largo.

### Named Rules
**The Italic Emphasis Rule.** Ênfase é feita com o itálico da serifa de display, não com negrito nem cor. Cada título de seção termina numa palavra em itálico que carrega a intenção. Na direção Swiss, o itálico vira sublinhado — nunca negrito colorido.

**The Mono-Label Rule.** Todo metadado (números de seção, índices, funções, datas, footer) é JetBrains Mono, 10–11px, uppercase, tracking 0.16em. É a "régua técnica" que emoldura a obra editorial. Nunca use a serifa para metadado nem a mono para leitura.

## 4. Elevation

Sistema **flat por princípio**. Não existe uma única `box-shadow` em repouso. A profundidade é construída por três meios: (1) camadas tonais — superfícies `tint` um degrau acima do fundo `paper`; (2) linhas de grid de 1px que dividem o espaço como uma grade de revista; (3) inversões de seção inteiras (fundo tinta, texto papel) que funcionam como cortes de cena. O único "levantar" é um `translateY(-4px)` nos cards de depoimento no hover — e mesmo esse é movimento, não sombra.

### Named Rules
**The No-Shadow Rule.** Sombras são proibidas. Se algo precisa "saltar", troque a superfície (tint → paper), inverta a seção, ou mova com transform. Sombra aqui leria como SaaS 2014 — exatamente uma das anti-referências.

**The Grid-Line Rule.** A estrutura é desenhada com traços de 1px (`--line`), não com caixas e cantos arredondados. Divisórias entre seções, listas de serviço e grades de métrica são linhas. Cards são a exceção, não a regra.

## 5. Components

### Buttons / CTAs
- **Não há botão preenchido.** A ação primária é o **CTA-link**: o email de contato em serifa gigante (clamp(28px, 3.6vw, 56px)) com borda inferior de 1px.
- **Hover:** o `padding-bottom` cresce (4px → 12px), afastando o texto da linha — um gesto de "abrir". Cor e borda passam para o acento reservado (`--pink`, hoje = ink).
- **Secondary:** links de serviço e contato com seta mono (`→` / `↗`) que desliza no hover (`translateX`).

### Cards / Containers
- **Corner Style:** raio sutil de 4px (`--radius`); na direção Swiss vira 0px (cantos retos).
- **Background:** superfície `tint` em repouso; placeholders de mídia recebem uma textura de listras diagonais (`repeating-linear-gradient`).
- **Shadow Strategy:** nenhuma — ver Elevation.
- **Border:** depoimentos usam `--grid-line` (1px) como borda completa; nunca uma faixa lateral colorida.
- **Internal Padding:** 40px 32px (depoimentos), 20px (cards de vídeo).

### Video Card (signature)
- Mosaico assimétrico de 12 colunas com spans variados (`v-1`…`v-6`) — nunca uma grade de cards idênticos.
- Vídeo em **grayscale + contraste** por padrão; no hover vira cor cheia e escala 1.03.
- Marca de "play" central (círculo de 56px, borda 1px) que aparece e escala no hover; o cursor custom também vira um disco "PLAY".
- Índice mono no topo, título serifado + meta mono surgindo de baixo no hover (overlay gradiente).

### Service Row (signature)
- Linha de grid de 4 colunas (`num · nome · descrição · seta`) separada por `--grid-line`.
- **Hover:** a linha desliza para a direita (`padding-left` 0 → 24px), uma barra de 8px do acento cresce na borda esquerda, número e seta acendem no acento. Movimento como feedback, não decoração.

### Metric (inverted)
- Vive na seção invertida (fundo Ink, texto Paper). Números display gigantes (clamp(64px, 8vw, 130px)) com expoente mono em `super`.
- Divididos por linhas de 1px em `currentColor`; o último sem borda.

### Navigation
- Fixa no topo, mono uppercase 11px, `mix-blend-mode: difference` — fica legível sobre qualquer fundo, invertendo conforme rola sobre seções claras/escuras.
- Marca "IP — Studio" com um ponto que pisca (`blink` 1.6s). Links com `opacity 0.6` no hover.
- Mobile: meta colapsa para uma coluna; descrição de serviço some.

### Custom Cursor (signature)
- Ponto de 6px + anel de 36px, `mix-blend-mode: difference`. Cresce para 72px sobre links, 96px com label "PLAY" sobre vídeos. Escondido em telas touch (`pointer: coarse`).

### Motion
- **Easing assinatura:** `cubic-bezier(.2, .8, .2, 1)` (ease-out) em quase tudo.
- **Reveal:** elementos sobem 40px e fazem fade-in ao entrar na viewport (IntersectionObserver), em cascata via `reveal-d2/d3/d4`.
- **Marquees:** nome do hero e marcas rolam em loop (`scroll-x` 40–50s).

## 6. Do's and Don'ts

### Do:
- **Do** manter tudo monocromático — papel (#f6f5f2) e tinta (#0a0a0a). A única cor vem da obra (fotos/vídeos), e só no hover.
- **Do** usar o itálico da serifa Instrument Serif para ênfase; cada título de seção fecha numa palavra em itálico.
- **Do** desenhar estrutura com linhas de grid de 1px (`--line`), não com caixas.
- **Do** colocar grayscale por padrão em toda mídia e revelar a cor no hover (`filter: grayscale(1) → 0`).
- **Do** tratar metadado como régua mono: JetBrains Mono, uppercase, tracking 0.16em.
- **Do** usar inversão de seção (fundo Ink) como "corte de cena" para Métricas e Contato.
- **Do** animar com `cubic-bezier(.2,.8,.2,1)` (ease-out), sem bounce nem elastic.
- **Do** garantir que o mobile (público vindo de Reels) tenha o mesmo impacto — testar todos os títulos em clamp nos breakpoints.

### Don't:
- **Don't** introduzir uma cor de acento sem ser pelo único slot reservado (`--pink`), e mesmo assim ≤5% da tela, só em hover/foco.
- **Don't** usar sombras (`box-shadow`). Profundidade é por camada tonal, linha ou inversão — sombra lê como **SaaS 2014**, uma anti-referência.
- **Don't** cair no **template genérico**: nada de grade de cards idênticos icon+título+texto. O mosaico de vídeo é assimétrico de propósito.
- **Don't** parecer **agência corporativa**: sem azul corporativo, stock photos, ou cantos arredondados grandes "amigáveis".
- **Don't** parecer **influencer fofo**: nada de pastel, emoji decorativo, ou serifa "romântica" fininha demais.
- **Don't** parecer **tech/SaaS**: sem gradientes neon, sem o template hero-métrica colorido, sem cara de dashboard.
- **Don't** usar faixa lateral colorida (`border-left` > 1px) como acento — bordas são completas e de 1px, ou inexistentes.
- **Don't** usar a serifa para metadado nem a mono para leitura de corpo. Cada fonte no seu papel.
