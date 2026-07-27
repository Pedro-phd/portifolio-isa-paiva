# LP: /food-lp, Isabelly Paiva para marcas de comida

> Documento de especificação. A skill de front-end constrói a partir daqui e não toma decisões próprias.
> Gerado em 2026-07-21 · Idioma da página: pt-BR · Stack: Next.js 16 (App Router), JSX, CSS puro em `app/globals.css` (o projeto não usa Tailwind)
> Rota: `/food-lp` · Arquivo: `app/food-lp/page.jsx`

---

## 1. Contexto

| Campo | Valor |
|---|---|
| Produto | Isabelly Paiva constrói a marca inteira de um negócio de comida (identidade visual, fotografia de produto, conteúdo, loja/site e anúncio) sozinha, como fornecedor único. |
| Público (ICP) | Dono ou dona de negócio de comida no Brasil que **já vende e já tem clientela fiel**, mas cuja marca (logo, foto, Instagram) não representa a qualidade do produto. Confeitaria, salgaderia, bolo no pote, marmitaria, delivery, cafeteria, padaria, restaurante de bairro. Vende por WhatsApp e encomenda. Fatura o suficiente para contratar, não o suficiente para agência. |
| Nível de consciência | **Consciente do problema.** Sabe que o Instagram não converte e que a foto é ruim. Não sabe que existe um fornecedor único que resolve marca, foto, conteúdo e anúncio junto. A página precisa nomear a solução, não descobrir a dor. |
| Dor central | "Todo mundo que come elogia, mas o perfil não vende." / "Minha comida é boa demais pra foto que eu consigo tirar." |
| Resultado prometido | A marca à altura do produto: logo, fotos, redes, loja e anúncio falando a mesma língua, para que quem **nunca provou** peça mesmo assim. Sem promessa numérica (ver seção 10, pendência 2). |
| Modelo de preço | **Sob orçamento. Nenhum valor aparece na página** (decisão do cliente). O ticket varia de uma sessão de fotos a uma identidade completa. A faixa de valor é dada na conversa, dentro do checkup. |
| Prova social disponível | 2 cases reais com asset em mãos: **Marcelle Nogueira** (identidade visual completa, manual de 9 páginas, 8 fotos de produto) e **Gé Sabores** (15 fotos de produto). 23 fotografias autorais. Números de carreira já publicados no site: 4+ anos, 50+ marcas, +2,4M views orgânicos, 18% eng. médio. **Nenhum depoimento**, ver seção 10. |
| Concorrente direto | **Social media freelancer de bairro** (posta o que o dono manda, não fotografa, não desenha marca) e **agência pequena** (terceiriza foto, branding e tráfego em 3 fornecedores, o resultado não combina). Diferencial: uma pessoa só faz as quatro coisas, e o manual de marca da Marcelle prova que o resultado é coerente ponta a ponta. |

---

## 2. Ângulo central

**MAIS STATUS**

Justificativa: o público já vende, então dinheiro existe. O que trava o crescimento é a marca não parecer à altura do produto, e status é a única das cinco compras que a Isabelly consegue **provar hoje** (manual de marca de 9 páginas mais 23 fotos autorais) sem inventar número de faturamento.

Frase-âncora (repetida em variações ao longo da página): **"Quem prova, volta. Quem só vê, passa direto."**

Variações autorizadas (usar exatamente estas, nenhuma outra):
- S2: "A sua comida convence quem já provou. O problema é o resto do mundo."
- S7: "É o único produto que você precisa fazer alguém sentir sem poder oferecer."
- S11: "A sua comida já está pronta. Vamos deixar a marca à altura."

---

## 3. Sistema visual

Direção: **papel de padaria brasileiro.** Creme de saco de pão, tinta cor de café, uma laranja-brasa só no botão, e a cor de comida entrando pelo escorrido de calda entre as seções. Nada aqui se parece com `/` (monocromático editorial), com `/comida` (papel e tinta) ou com `/food` (bandas azul e chita). É uma quarta linguagem, exclusiva desta rota.

### Tokens

| Token | Valor | Uso |
|---|---|---|
| `--fl-bg` | `#FDF6EA` | Fundo padrão. Creme de papel de pão. |
| `--fl-bg-alt` | `#F6EAD6` | Fundo de seções alternadas (S3, S7, S10). |
| `--fl-ink` | `#26160D` | Texto principal. Marrom-espresso, nunca preto puro. |
| `--fl-muted` | `#7A6552` | Texto secundário, labels, metadados, legendas. |
| `--fl-line` | `#E3D2B8` | Divisores e bordas, sempre 1px. |
| `--fl-accent` | `#D53F0E` | **Exclusivo do CTA.** Laranja-brasa. Não usar em mais nada, nem em link, nem em ícone, nem em hover de outro elemento. |
| `--fl-inverse-bg` | `#26160D` | Fundo das seções invertidas (S11). |
| `--fl-inverse-fg` | `#FDF6EA` | Texto sobre fundo invertido. |

### Paleta decorativa "molho" (uso restrito)

Só nas divisórias de escorrido e nos pontos de marcador de lista. Área somada **máxima de 8% de qualquer viewport**. Nunca em texto, nunca em fundo de bloco, nunca em botão.

| Token | Valor |
|---|---|
| `--fl-molho-vermelho` | `#B4221F` |
| `--fl-molho-amarelo` | `#F2A81D` |
| `--fl-molho-verde` | `#1E7A3C` |

### Tipografia

Duas famílias na página. Ambas novas no projeto. Adicionar ao `<link>` do Google Fonts em `app/layout.jsx` sem remover as existentes.

`https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..900,0..100,0..1&family=Instrument+Sans:wght@400;500;600;700&display=swap`

Os eixos `SOFT` e `WONK` da Fraunces são aplicados no CSS via `font-variation-settings: "SOFT" 60, "WONK" 1`, e o `opsz` via `font-optical-sizing` ou `font-variation-settings: "opsz" 144`.

- **Display (H1):** Fraunces, `wght 800`, `opsz 144`, eixos `SOFT 60` e `WONK 1`. `clamp(40px, 7.5vw, 92px)` / line-height `0.96` / letter-spacing `-0.025em`
- **Título de seção (H2):** Fraunces, `wght 700`, `opsz 72`, `SOFT 40`, `WONK 1`. `clamp(32px, 5vw, 60px)` / line-height `1.02` / letter-spacing `-0.02em`
- **Título de bloco (H3):** Fraunces, `wght 600`, `opsz 36`. `clamp(22px, 2.6vw, 30px)` / line-height `1.15` / letter-spacing `-0.01em`
- **Corpo:** Instrument Sans, `400`. `17px` mobile / `19px` desktop / line-height `1.6` / largura máxima `62ch`
- **Corpo pequeno e microcopy:** Instrument Sans, `400`, `15px`, line-height `1.5`
- **Label e eyebrow:** Instrument Sans, `600`, `12px`, `text-transform: uppercase`, letter-spacing `0.14em`, cor `--fl-muted`
- **Botão:** Instrument Sans, `700`, `18px`, letter-spacing `0.01em`

Máximo de 2 famílias tipográficas na página. Nenhuma outra fonte, nem para citação, nem para número.

### Espaçamento e grid

- Escala base: **8px**
- Padding vertical de seção: `72px` mobile / `140px` desktop
- Padding horizontal: `20px` mobile / `48px` desktop
- Largura máxima do conteúdo: `1200px`. Blocos de texto corrido: `62ch`
- Breakpoints: `480px`, `768px`, `1024px`, `1280px`

### Gestos de assinatura (os dois únicos)

**1. O escorrido.** Divisória entre seções: uma borda SVG de calda pingando (`viewBox="0 0 1200 48"`, `preserveAspectRatio="none"`), preenchida com a cor da seção seguinte. Três variantes de path alternadas para não repetir o mesmo desenho. Aparece entre S2 e S3, entre S4 e S5, entre S6 e S7, entre S8 e S9. **Em nenhum outro lugar.**

**2. A comanda.** Cards de serviço (S3) e de FAQ (S10) usam borda serrilhada de comanda de pedido no lado inferior, via `mask-image` com `radial-gradient` repetido, dentes de 10px. Sem sombra, sem raio de canto nos outros lados.

### Regras invioláveis

- A cor `--fl-accent` (`#D53F0E`) aparece **somente** no preenchimento do botão de CTA. Em nenhum outro elemento da página.
- Uma única ideia por seção.
- O hero cabe em 380px de largura com o CTA visível sem rolagem.
- Nenhuma sombra (`box-shadow`) na página. Profundidade por camada tonal (`--fl-bg` para `--fl-bg-alt`), linha de 1px, ou inversão de seção.
- Sem lorem ipsum. Sem imagem de banco. **Toda fotografia de comida na página é arquivo real de `public/assets/food/`. Nenhuma foto de comida é gerada por IA** (ver seção 7).
- Nenhum cursor custom, nenhum painel de tweaks, nenhum marquee do nome. Esta rota não herda os gestos da home.

---

## 4. Copy global

- **Headline recomendada:** "Quem prova, volta. Quem só vê, passa direto."
  - Alternativa A: "Sua comida já é boa. Agora ela precisa parecer."
  - Alternativa B: "Boa demais pra continuar sendo indicação de boca a boca."
  - Critério da escolha: a recomendada nomeia o mecanismo exato que o ICP vive todo dia (boca a boca funciona, tela não converte) em 8 palavras de leitura de 5ª série, sem prometer número que não pode ser provado. É aforística, sobrevive 24h na cabeça de quem leu.
- **Subheadline:** "Cuido da marca inteira do seu negócio de comida: identidade, fotos, redes, loja e anúncio. Pra que quem nunca provou peça mesmo assim."
- **CTA primário (texto exato do botão, idêntico nas 3 ocorrências):** "Quero meu checkup de marca"
- **Microcopy sob o CTA (idêntico nas 3 ocorrências):** "Gratuito, pelo WhatsApp. Me manda seu Instagram e uma foto do produto. Eu respondo com o que está travando o seu pedido."
- **Meta title:** "Marketing para marcas de comida, Isabelly Paiva" (46 caracteres)
- **Meta description:** "Identidade visual, fotografia de produto, conteúdo e anúncio para confeitaria, salgaderia e delivery. Checkup de marca gratuito pelo WhatsApp." (145 caracteres)
- **Texto da imagem OG:** "Quem prova, volta. Quem só vê, passa direto."

**Palavras banidas nesta página:** solução completa, revolucionário, inovador, robusto, poderoso, transformador, game-changer, geralmente, muitos, diversos, elevar, potencializar, alavancar, próximo nível, estratégias personalizadas, resultados reais, delicioso, irresistível, apaixonado por, paixão pelo que faz, sob medida, seu parceiro, jornada, universo, descomplicar, expertise, know-how, mergulhar, desbloquear.

**Construções banidas:** "não é só X, é Y" (tique de IA, e já usada em `/food`). "mais do que apenas". Qualquer frase começando com "No mundo de hoje". Qualquer bullet de três itens onde o terceiro é redundante.

---

## 5. Arquitetura de seções

Ordem obrigatória. O cliente pediu explicitamente **serviços antes dos cases**, então S3 vem antes de S5 e S6, e essa ordem não muda.

---

### S1, Hero

- **Ideia única:** a sua comida convence quem prova, não quem vê, e é isso que eu conserto.
- **Objetivo:** o visitante entende em 4 segundos o que ela faz, para quem, e que existe uma porta de entrada sem custo.
- **Layout:** duas colunas em desktop (60% texto à esquerda, 40% mídia à direita). Mosaico de 3 fotos reais na coluna de mídia, em pilha assimétrica com sobreposição de 24px. Faixa de credenciais em linha única abaixo do CTA, separada por `·`.
- **Comportamento mobile:** coluna única. Ordem: eyebrow, H1, subheadline, CTA, microcopy, faixa de credenciais, mosaico (colapsa para 2 fotos lado a lado, a terceira some). O CTA fica visível sem rolagem em 380px.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Eyebrow | "Marketing para o ramo alimentício · São Paulo e remoto" |
| H1 | "Quem prova, volta.<br>Quem só vê, passa direto." |
| Subheadline | "Cuido da marca inteira do seu negócio de comida: identidade, fotos, redes, loja e anúncio. Pra que quem nunca provou peça mesmo assim." |
| CTA | "Quero meu checkup de marca" |
| Microcopy | "Gratuito, pelo WhatsApp. Me manda seu Instagram e uma foto do produto. Eu respondo com o que está travando o seu pedido." |
| Faixa de credenciais | "+4 anos · 50+ marcas atendidas · +2,4M de views orgânicos" |

**Elementos**
- Quebra de linha do H1 obrigatória no ponto final da primeira frase, em todos os breakpoints.
- A faixa de credenciais usa Instrument Sans 600, 13px, cor `--fl-muted`, sem caixa e sem borda. São números de carreira, não do nicho. Não rotular como "em comida".
- Nenhum outro link ou botão acima da dobra. A navegação do topo tem **apenas** a marca "IP, Studio" (link para `/`) e o CTA. Sem menu de âncoras.

**Imagem:** não gerada. **Usar assets reais.**
- Foto grande: `/assets/food/ge/10.webp` (bolo com calda de doce de leite escorrendo, amarra visualmente com o gesto do escorrido). Alt: "Bolo caseiro coberto por calda de doce de leite escorrendo pela lateral"
- Foto média: `/assets/food/marcelle/01.webp` (cesta de croquetes dourados, fundo branco). Alt: "Três croquetes dourados em cesta de vime forrada com papel"
- Foto pequena: `/assets/food/ge/03.webp` (bolo de chocolate com morangos). Alt: "Fatia de bolo de chocolate com calda e morangos frescos ao lado"
- Todas em cor cheia, sem filtro grayscale. Nesta rota a comida entra em cor desde o primeiro frame. `loading="eager"` e `fetchPriority="high"` só na primeira.

---

### S2, O problema

- **Ideia única:** o boca a boca funciona e trava, e quem decide pela tela decide pela foto.
- **Objetivo:** o visitante sentir que ela descreve a situação dele melhor do que ele descreveria. Empatia antes de qualquer venda.
- **Layout:** coluna única centralizada, `62ch`. H2 grande, dois parágrafos, três falas em bloco de citação, uma frase de virada isolada em Fraunces 600.
- **Comportamento mobile:** idêntico, sem mudança estrutural. As três falas viram lista vertical com marcador `--fl-molho-vermelho` de 6px.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "01 · Por que o Instagram não vende a sua comida" |
| H2 | "A sua comida convence quem já provou. O problema é o resto do mundo." |
| Parágrafo 1 | "Boca a boca funciona, e trava. Quem provou indica, volta, elogia. Mas quem só passou o dedo pela tela decide em um segundo, com uma foto tirada às pressas na bancada, uma logo feita no Canva e um perfil que não conta direito o que você vende." |
| Parágrafo 2 | "Comida se decide pelos olhos antes da boca. Se a foto não dá fome, o preço parece caro. Se a marca parece amadora, o cliente supõe que a comida também é." |
| Falas | • "Todo mundo elogia, mas o perfil não converte." • "Minha comida é boa demais pra foto que eu consigo tirar." • "Já postei tudo. Continua chegando pedido só de conhecido." |
| Virada | "Não é falta de esforço. É que a sua marca ainda não está à altura do que sai da sua cozinha." |

**Elementos**
- As três falas são aspas do público, não depoimentos. Formatá-las em itálico com aspas curvas, sem nome e sem foto. **Não podem ser confundidas com testemunho de cliente real.** Legenda acima do bloco, 12px, `--fl-muted`: "O que eu mais escuto:".
- A frase de virada fica sozinha, com 48px de respiro acima e abaixo.
- Sem CTA nesta seção. A pessoa ainda não tem motivo.

**Imagem:** sim. **Única foto gerada da página** (ver seção 7, linha `S2`).
- **Proporção:** 4:3
- **Nome do arquivo:** `s2-problema.webp`, em `public/assets/food-lp/`
- **Alt text:** "Bolo caseiro em pote plástico fotografado sob luz dura de cozinha, sobre bancada bagunçada"
- Posicionada à direita do bloco em desktop (1024px pra cima), abaixo do parágrafo 2 em mobile. Largura máxima 440px. Recebe `filter: saturate(0.85)` para reforçar que é o "antes".

---

### S3, Serviços

- **Ideia única:** você contrata uma pessoa e recebe a marca inteira combinando.
- **Objetivo:** o visitante entender o escopo completo e perceber que o concorrente dele (freelancer de social, agência que terceiriza) não faz isso.
- **Layout:** fundo `--fl-bg-alt`. Grade de 2 por 2 em desktop (1024px pra cima), 1 coluna em mobile. Cada bloco é uma **comanda**: número em Fraunces 800 de 56px em `--fl-line`, título H3, parágrafo, e lista de 4 itens separados por `·` em Instrument Sans 500 de 14px. Callout do checkup em bloco de largura total abaixo da grade, com o CTA.
- **Comportamento mobile:** blocos empilhados, número reduzido para 40px, listas quebram em duas linhas.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "02 · O que eu faço" |
| H2 | "Da logo ao anúncio, uma pessoa só." |
| Subheadline | "Você não precisa contratar designer, fotógrafo, social media e gestor de tráfego separados, e depois torcer pra que as quatro coisas combinem." |

**Bloco 01, Identidade visual**
- Parágrafo: "Logo, cores, tipografia e a aplicação de tudo isso: embalagem, sacola, rótulo, uniforme, cardápio. A Marcelle Nogueira saiu daqui com um manual de marca de 9 páginas, do logotipo ao copo de café."
- Itens: "Logotipo · Paleta e tipografia · Manual de marca · Embalagem e uniforme"

**Bloco 02, Fotografia de produto**
- Parágrafo: "Eu fotografo. A sua comida, com a luz certa e o corte certo, sem estúdio caro e sem ela esfriar esperando. Todas as fotos desta página são minhas."
- Itens: "Captação · Food styling · Tratamento · Banco de imagens da marca"

**Bloco 03, Conteúdo e redes**
- Parágrafo: "Reels, feed, roteiro, edição e legenda. Presença constante com a cara da marca, não com a cara de template."
- Itens: "Reels e edição · Feed e calendário · Copy e legendas · Gestão de redes"

**Bloco 04, Loja, site e anúncio**
- Parágrafo: "O lugar pra onde o pedido vai. Site, cardápio online e loja pra receber encomenda. E campanha no Meta e no Google levando gente até lá."
- Itens: "Site e landing page · Loja online · Meta e Google Ads · Relatório mensal"

**Callout do checkup (largura total, borda 1px `--fl-line`, fundo `--fl-bg`)**
- Título (H3): "Não sabe por onde começar?"
- Parágrafo: "Comece pelo checkup de marca. Eu olho o seu Instagram, as suas fotos e o seu produto, e te digo numa mensagem o que está travando a venda e o que muda mais rápido. Não custa nada."
- CTA: "Quero meu checkup de marca"
- Microcopy: "Gratuito, pelo WhatsApp. Me manda seu Instagram e uma foto do produto. Eu respondo com o que está travando o seu pedido."

**Elementos**
- Os 7 serviços que o cliente listou estão todos cobertos: identidade visual (01), fotografia (02), conteúdo e social (03), tráfego pago (04), site (04), loja online (04), checkup de marca (callout). **Não expandir de volta para 7 blocos.** Sete decisões numa tela matam a seção.
- Nenhum ícone. Nenhum emoji. O número é o único ornamento.

**Imagem:** não. A seção é tipográfica. O peso visual vem do número de 56px e da serrilha da comanda. Uma imagem por bloco criaria quatro focos concorrentes e a grade viraria template de agência.

---

### S4, Como funciona

- **Ideia única:** chamar no WhatsApp não te compromete com nada e você já sai sabendo de algo.
- **Objetivo:** remover a incerteza de "o que acontece depois que eu mandar mensagem", a objeção silenciosa número um numa página sem preço.
- **Layout:** três passos em linha horizontal (desktop) separados por linha de 1px `--fl-line`, numerados. Vertical em mobile, com a linha virando divisor horizontal.
- **Comportamento mobile:** empilhado, sem numeração gigante. Número inline antes do título.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "03 · Como funciona" |
| H2 | "Três passos. Sem reunião de duas horas." |
| Passo 01 | **Checkup.** "Você me manda o Instagram e fotos do produto. Eu respondo com o diagnóstico: o que está travando e o que eu faria primeiro." |
| Passo 02 | **Proposta.** "Escolhemos por onde começar. Pode ser só a foto, pode ser a marca inteira. Você recebe escopo, prazo e valor por escrito." |
| Passo 03 | **Mão na massa.** "Eu produzo, você aprova, a marca vai pro ar. Acompanhamento e ajuste depois da entrega." |

**Elementos**
- PENDENTE: o passo 01 pode ganhar o prazo real de resposta do checkup. Redação alvo: "Em até [X] dias úteis eu respondo com o diagnóstico". Enquanto não houver o número confirmado, publicar a frase como está acima, que funciona sem prazo. **Não inventar "24 horas".**
- Sem CTA. O CTA de S3 ainda está a uma rolagem de distância.

**Imagem:** não. Três passos com imagem viram infográfico de agência. Linha de 1px e numeração em Fraunces bastam.

---

### S5, Case 01, Marcelle Nogueira

- **Ideia única:** essa marca não existia, e eu construí ela inteira, dá pra ver aplicada em tudo.
- **Objetivo:** provar o escopo máximo (identidade visual) com evidência física, não com adjetivo.
- **Layout:** faixa de largura total. Cabeçalho com logo real da marca, eyebrow, H2 e copy em `62ch`. Abaixo, tira horizontal com 3 mockups do manual (embalagem, uniforme, sacola). Abaixo, galeria masonry de 3 colunas com as 8 fotos de produto. Linha de entregáveis fechando.
- **Comportamento mobile:** logo reduzido a 180px de largura. Mockups viram carrossel de rolagem horizontal com `scroll-snap`. Masonry cai para 2 colunas.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "04 · Case 01" |
| Eyebrow | "Salgados e confeitaria brasileira · São Paulo" |
| H2 | "Marcelle Nogueira" |
| Tagline da marca | "Sabor brasileiro" |
| Parágrafo 1 | "A Marcelle fazia coxinha de salgaderia de verdade e vendia por encomenda, sem marca. Não existia logo, não existia embalagem, não existia o nome escrito em lugar nenhum além do WhatsApp." |
| Parágrafo 2 | "Construí a marca inteira: o logotipo em letra gorda e redonda, uma paleta que abre o apetite (vermelho, laranja, amarelo e verde, as cores da comida brasileira) e as manchas de molho que viraram a assinatura visual. Depois apliquei em tudo que o cliente toca: caixa, sacola, marmita, copo, avental, boné, etiqueta." |
| Parágrafo 3 | "E fotografei os salgados. As oito fotos abaixo são da captação." |
| Entregues | "Identidade visual · Manual de marca (9 páginas) · Embalagem e uniforme · Fotografia de produto" |

**Elementos**
- Logo: extrair a página 1 do PDF `ref/marcelle nogueira.pdf` e recortar o logotipo em PNG com fundo transparente, salvando como `marcelle-logo.png`. Nunca redesenhar nem redigitar o nome em outra fonte.
- Mockups, extraídos do mesmo PDF e exportados em webp de até 1400px. Página 3 (caixa de bolo nas mãos) vira `marcelle-mockup-caixa.webp`. Página 5 (avental, camisetas e bonés) vira `marcelle-mockup-uniforme.webp`. Página 8 (sacola de delivery na janela do carro) vira `marcelle-mockup-sacola.webp`. Legendas: "Embalagem", "Uniforme e brindes", "Delivery e retirada".
- Galeria: `/assets/food/marcelle/01.webp` até `08.webp`, nessa ordem. Alt de cada uma: "Salgado da Marcelle Nogueira, foto NN de 08", substituindo NN.
- **Correção obrigatória:** a rota `/food` pinta a Marcelle de azul bandeira `#0a3fbf`. Isso não é a marca dela. Aqui a única cor associada à Marcelle é a real do manual: vermelho `#B4221F` sobre creme. Usar essa dupla apenas no cabeçalho da seção (eyebrow e tagline), nunca no corpo da página.
- PENDENTE: depoimento da Marcelle (ver S8 e seção 10).

**Imagem:** não gerada. Todos os assets são reais: logo, mockups do manual e 8 fotografias autorais. Gerar imagem aqui seria mentir sobre um trabalho que existe em PDF.

---

### S6, Case 02, Gé Sabores

- **Ideia única:** a marca já existia, o que faltava era a foto acompanhar o bolo.
- **Objetivo:** mostrar que dá pra contratar **uma coisa só** e ainda assim mudar o jogo. Remove a objeção "não tenho dinheiro pra marca inteira".
- **Layout:** espelhado em relação a S5, com o cabeçalho à direita em desktop. Masonry de 3 colunas com as 15 fotos. Bloco antes e depois opcional acima da galeria, como par lado a lado.
- **Comportamento mobile:** cabeçalho volta ao topo. Masonry em 2 colunas. Antes e depois vira par empilhado com rótulos "Antes" e "Depois".

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "05 · Case 02" |
| Eyebrow | "Bolos caseiros e bolo no pote · São Paulo" |
| H2 | "Gé Sabores" |
| Tagline da marca | "Bolos caseiros" |
| Parágrafo 1 | "A Gé já tinha marca e já tinha clientela. O que faltava era a foto acompanhar o bolo." |
| Parágrafo 2 | "Bolo no pote é difícil de fotografar: o plástico reflete, as camadas somem e a luz da cozinha deixa tudo amarelo. O trabalho foi achar o ângulo em que as camadas aparecem inteiras (massa, recheio, massa, recheio) e a luz em que o doce de leite brilha sem estourar." |
| Parágrafo 3 | "Quinze fotos, feitas para o feed, para o cardápio e para o anúncio." |
| Entregues | "Fotografia de produto · Direção de conteúdo · Feed" |

**Elementos**
- Logo: `ref/Ge Sabores.jpeg`. Recortar sobre o fundo rosa e exportar PNG transparente como `ge-logo.png`. É um script vermelho-framboesa com um bolinho e "BOLOS CASEIROS" em caixa alta espaçada. Não substituir a fonte.
- Galeria: `/assets/food/ge/01.webp` até `15.webp`. Alt: "Bolo da Gé Sabores, foto NN de 15".
- Bloco antes e depois: `ref/ge-sabores-v1.jpeg` (segurado na mão, luz de cozinha) como "Antes" e `ref/ge-sabores-v2.jpeg` (dois potes sobre tábua, luz de estúdio) como "Depois". **PENDENTE: confirmar com a Isabelly qual das duas é foto do cliente e qual é dela.** Sem confirmação, cortar o bloco inteiro e publicar S6 só com a galeria. A seção funciona sem ele.
- PENDENTE: depoimento da Gé (ver S8 e seção 10).

**Imagem:** não gerada. 15 fotografias autorais reais mais o logotipo da cliente.

---

### S7, Quem faz

- **Ideia única:** é uma pessoa, ela tem rosto e nome, e é ela mesma que aperta o botão.
- **Objetivo:** numa página sem preço, a confiança se transfere pela pessoa. Gente compra de gente.
- **Layout:** fundo `--fl-bg-alt`. Duas colunas: retrato à esquerda (40%), texto à direita (60%). Quatro números em linha abaixo do texto, divididos por linha de 1px.
- **Comportamento mobile:** retrato no topo em largura total com altura máxima de 420px e `object-fit: cover`. Números em grade de 2 por 2.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "06 · Quem faz" |
| H2 | "Oi, eu sou a Isabelly." |
| Parágrafo 1 | "Trabalho com marketing digital há mais de quatro anos, em São Paulo. Já passei por mais de 50 marcas, de beleza a serviço, e o que mais me diverte é comida. É o único produto que você precisa fazer alguém sentir sem poder oferecer." |
| Parágrafo 2 | "Eu mesma faço tudo: desenho a marca, fotografo o produto, edito o vídeo e rodo o anúncio. Você fala com uma pessoa só, e é a mesma pessoa que aperta o botão." |
| Número 01 | "+4" / "anos de mercado" |
| Número 02 | "50+" / "marcas atendidas" |
| Número 03 | "+2,4M" / "views orgânicos gerados" |
| Número 04 | "18%" / "engajamento médio por post" |

**Elementos**
- Retrato: `/assets/isabelly.jpg`. Alt: "Isabelly Paiva". Legenda em 12px `--fl-muted`: "Isabelly Paiva · São Paulo, BR".
- Números em Fraunces 800, `clamp(40px, 5vw, 68px)`, cor `--fl-ink`. Rótulo em Instrument Sans 500, 13px, `--fl-muted`.
- Estes são números de carreira inteira, não do nicho de comida. **Não escrever "em marcas de comida" em nenhum rótulo.**

**Imagem:** não gerada. Retrato real obrigatório. Um rosto gerado destrói exatamente a confiança que a seção existe para construir.

---

### S8, Depoimentos (PENDENTE)

- **Ideia única:** duas donas de negócio de comida dizem, com as palavras delas, que valeu.
- **Objetivo:** fechar a última dúvida antes do CTA final.
- **Layout:** dois cards lado a lado em desktop, empilhados em mobile. Borda 1px `--fl-line`, fundo `--fl-bg`, sem sombra. Citação em Fraunces 500 de 22px. Assinatura em Instrument Sans 600 de 14px com o logo da marca em 80px de largura.
- **Comportamento mobile:** empilhados, citação em 19px.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "07 · O que elas dizem" |
| H2 | "Nas palavras de quem cozinha." |
| Depoimento 01 | PENDENTE, Marcelle Nogueira. Coletar 2 a 3 frases, no WhatsApp, respondendo "o que mudou no seu negócio depois que a marca ficou pronta?". Assinatura: "Marcelle Nogueira · Marcelle Nogueira, Sabor Brasileiro". |
| Depoimento 02 | PENDENTE, Gé Sabores. Coletar 2 a 3 frases respondendo "o que você percebeu depois que trocou as fotos?". Assinatura: "[PENDENTE nome próprio] · Gé Sabores, Bolos Caseiros". |

**Elementos**
- **Plano B declarado.** Se nenhum depoimento chegar até a publicação, **remover a seção inteira** e substituí-la por um bloco de bastidor: as 4 páginas restantes do manual da Marcelle (tipografia, paleta, embalagem de delivery, kit de embalagens) em grade de 2 por 2, com o label "07 · O manual, página por página" e o H2 "A marca que entreguei, por dentro.". Prova de ofício vale mais que uma seção de depoimento vazia ou inventada.
- **Nunca escrever um depoimento fictício, nem "cliente satisfeita", nem iniciais no lugar do nome.** Ou é fala real e atribuída, ou a seção não existe.

**Imagem:** não. Foto real de quem deu o depoimento, ou o logo da marca, ou nada.

---

### S9, Para quem é

- **Ideia única:** o seu tipo de negócio está nesta lista.
- **Objetivo:** qualificação por reconhecimento. A pessoa procura o próprio segmento e se encontra.
- **Layout:** banda fina, altura reduzida (`64px` mobile e `96px` desktop de padding vertical). Marquee horizontal em loop lento (50s) com os segmentos separados por `◆` em `--fl-molho-amarelo`. Uma linha de texto centralizada abaixo.
- **Comportamento mobile:** marquee mantém a velocidade. A linha de texto quebra em duas.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Marquee | "Confeitaria ◆ Salgaderia ◆ Bolo no pote ◆ Marmitaria ◆ Delivery ◆ Cafeteria ◆ Padaria ◆ Doceria ◆ Food truck ◆ Hamburgueria ◆ Açaí ◆ Restaurante de bairro" |
| Linha de apoio | "De quem vende no WhatsApp a quem já tem loja. São Paulo presencialmente, Brasil inteiro remoto." |

**Elementos**
- Marquee em Fraunces 600, `clamp(24px, 3vw, 40px)`, cor `--fl-ink`. Duplicar a lista no DOM para o loop ficar contínuo.
- Respeitar `prefers-reduced-motion`. Com a preferência ativa, o marquee para e vira lista estática quebrada em linhas.

**Imagem:** não. A seção é uma frase grande em movimento. Uma imagem aqui a transformaria em banner.

---

### S10, Perguntas

- **Ideia única:** as cinco coisas que você ia perguntar já estão respondidas.
- **Objetivo:** derrubar as objeções que a ausência de preço na página cria.
- **Layout:** fundo `--fl-bg-alt`. Acordeão de 5 itens, o primeiro aberto por padrão. Cada item é uma comanda: pergunta em Fraunces 600 de 20px, resposta em Instrument Sans 400 de 17px, divisor de 1px.
- **Comportamento mobile:** idêntico. Alvo de toque da linha inteira, mínimo 56px de altura.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| Label | "08 · Perguntas" |
| H2 | "O que todo mundo pergunta antes de chamar." |

| # | Pergunta | Resposta |
|---|---|---|
| 1 | "Quanto custa?" | "Depende do que você precisa. Uma sessão de fotos e uma identidade visual completa não custam a mesma coisa. No checkup eu já te dou uma faixa de valor pro que faz sentido no seu caso, sem compromisso." |
| 2 | "Meu negócio é pequeno demais pra isso?" | "A Marcelle vendia por encomenda no WhatsApp quando a gente começou. Dá pra começar por uma coisa só, normalmente foto, e crescer daí." |
| 3 | "Você atende fora de São Paulo?" | PENDENTE. Resposta alvo: "Identidade visual, site, conteúdo e tráfego são 100% remotos, pra qualquer cidade. Fotografia é presencial em São Paulo e região." Confirmar se ela atende fotografia fora de SP antes de publicar. |
| 4 | "Em quanto tempo fica pronto?" | PENDENTE. Coletar prazos reais por serviço (identidade, sessão de fotos, site). Se não houver prazo confirmado até a publicação, **remover esta pergunta** em vez de estimar. |
| 5 | "Preciso fechar tudo de uma vez?" | "Não. A gente escolhe por onde começar. A maioria começa pela foto, porque é o que muda mais rápido." |

**Elementos**
- A pergunta 1 é obrigatoriamente a primeira e obrigatoriamente aberta por padrão. Numa página sem preço, essa é a primeira coisa na cabeça de quem lê.
- Sem CTA dentro do acordeão. O CTA final está logo abaixo.

**Imagem:** não. É texto estruturado.

---

### S11, CTA final e rodapé

- **Ideia única:** a comida já está pronta, falta a marca.
- **Objetivo:** o visitante que rolou a página inteira sai com uma frase na cabeça e um botão na mão.
- **Layout:** seção invertida (`--fl-inverse-bg`, texto `--fl-inverse-fg`), corte seco sem escorrido. H2 gigante centralizado, CTA, microcopy, e o rodapé em linha única abaixo de um divisor de 1px em `rgba(253,246,234,0.18)`.
- **Comportamento mobile:** H2 em `clamp(32px, 8vw, 48px)`. Rodapé quebra em três linhas centralizadas.

**Copy final**

| Elemento | Conteúdo |
|---|---|
| H2 | "A sua comida já está pronta.<br>Vamos deixar a marca à altura." |
| CTA | "Quero meu checkup de marca" |
| Microcopy | "Gratuito, pelo WhatsApp. Me manda seu Instagram e uma foto do produto. Eu respondo com o que está travando o seu pedido." |
| Rodapé esquerda | "© 2026, Isabelly Paiva" |
| Rodapé meio | "Quem prova, volta." |
| Rodapé direita | "Portfólio ↗ · Galeria de comida ↗ · Instagram ↗" |

**Elementos**
- Botão sobre fundo escuro: preenchimento `--fl-accent` `#D53F0E`, texto `#FFFFFF`. Mesma cor e mesmo texto das outras duas ocorrências.
- Links do rodapé: "Portfólio" aponta para `/`. "Galeria de comida" aponta para `/food`. "Instagram" está PENDENTE.
- E-mail visível abaixo do rodapé, 14px, `rgba(253,246,234,0.6)`: `isabelly.paivaassessoria@gmail.com`.

**Imagem:** não. A última tela é tipográfica de propósito. Uma frase grande sozinha no escuro é o que fica.

---

## 6. Regras de execução

**Hierarquia visual**
- Uma única `<h1>` na página, em S1.
- Cada seção tem exatamente um `<h2>`.
- O tamanho de fonte nunca aumenta ao descer dentro de uma mesma seção.
- Nenhuma seção usa mais de 3 pesos tipográficos.
- Contraste de superfície alterna assim: S1 `--fl-bg`, S2 `--fl-bg`, S3 `--fl-bg-alt`, S4 `--fl-bg`, S5 `--fl-bg`, S6 `--fl-bg`, S7 `--fl-bg-alt`, S8 `--fl-bg`, S9 `--fl-bg`, S10 `--fl-bg-alt`, S11 invertida.

**Copy**
- Nenhuma palavra da lista banida em seção 4 aparece na página, inclusive em `alt` e em `meta`.
- Nenhum número que não esteja neste documento entra na página.
- Nenhum depoimento, logo de cliente ou métrica de resultado é inventado ou estimado.
- Todo texto marcado PENDENTE é resolvido ou o elemento é removido. Nunca publicado como está.
- Português do Brasil, segunda pessoa ("você"), voz da Isabelly em primeira pessoa ("eu fotografo", "eu respondo").

**Interação**
- O CTA aparece exatamente 3 vezes (S1, S3, S11), sempre com o texto "Quero meu checkup de marca" e sempre em `--fl-accent`.
- Todos os três CTAs apontam para o mesmo destino: `https://wa.me/[PENDENTE numero]?text=Oi%20Isabelly!%20Vim%20pela%20p%C3%A1gina%20de%20comida%20e%20quero%20meu%20checkup%20de%20marca.`
- Nenhum outro link ou botão compete com o CTA acima da dobra.
- A navegação do topo tem 2 elementos e mais nada: a marca "IP, Studio" (link para `/`) e o CTA. Sem menu de âncoras, porque âncora é uma saída e esta página só tem uma saída.
- Nenhum popup, nenhum modal de saída, nenhum chat widget.
- Animação de entrada: reveal de 24px para cima com fade, `cubic-bezier(.2,.8,.2,1)`, 0.6s, via `IntersectionObserver`. Reutilizar o hook `useReveal` de `components/sections.jsx`.
- `prefers-reduced-motion: reduce` desliga o marquee de S9 e todos os reveals.

**Acessibilidade**
- Contraste mínimo 4.5:1 em texto de corpo. Verificado: `#26160D` sobre `#FDF6EA` passa com folga, e `#FFFFFF` sobre `#D53F0E` dá 4.49:1.
- `--fl-muted` `#7A6552` sobre `#FDF6EA` só em texto de 13px ou maior com peso 500 pra cima. Nunca em parágrafo longo.
- Alvos de toque com no mínimo 44px de altura. Linhas do acordeão em S10 com 56px.
- Toda imagem tem `alt` descritivo. Elementos decorativos (escorrido, serrilha, marcadores) recebem `aria-hidden="true"`.
- O acordeão de S10 usa `<button aria-expanded>`, não `<div onClick>`.
- Foco visível em todos os elementos interativos: contorno de 2px em `--fl-ink`, deslocamento de 3px.

**Performance**
- Todas as imagens em `.webp`. As 23 fotos já estão convertidas em `public/assets/food/`.
- Extrair e converter os assets do PDF da Marcelle para `.webp` com largura máxima de 1400px antes do build.
- `loading="eager"` e `fetchPriority="high"` apenas na primeira foto do hero. Todas as outras `loading="lazy"`.
- Todas as `<img>` declaram `width` e `height` para reservar espaço e evitar CLS.
- Sem biblioteca de animação. Sem JavaScript bloqueante acima da dobra.
- As duas famílias novas entram com `display=swap` no `<link>` existente de `app/layout.jsx`.
- A rota define seu próprio `metadata`. Ela não herda o `title` da home.

---

## 7. Prompts de imagem (consolidado)

**Decisão de partida: nenhuma fotografia de comida desta página é gerada por IA.** Existem 23 fotografias autorais reais mais um manual de marca de 9 páginas. Gerar comida aqui produziria uma imagem melhor que o trabalho real, e a página passaria a mentir sobre o próprio portfólio.

Só uma imagem é gerada, e ela representa o **antes** (S2), que por definição não existe no acervo.

| ID | Arquivo | Proporção | Prompt |
|---|---|---|---|
| S2 | `s2-problema.webp` | 4:3 | `A homemade layered cake in a clear plastic pot sitting on a cluttered kitchen counter, photographed badly with a phone . harsh overhead fluorescent light flattening the food, a yellow-green colour cast, a dish rack and a folded cloth intruding at the frame edge, the cake looking dull and unappetising . straight-on eye-level snapshot, subject slightly off-centre in the lower right, a plain painted wall occupying the upper left third as negative space for text overlay . deliberately amateur phone-camera photography, flat direct on-camera flash, faint motion blur, unflattering realistic lighting, no styling . washed warm creams and dull ochres with a single burnt-orange accent, low saturation, no vivid brand colours . 4:3, no text, no logos, no identifiable faces, no stock-photo aesthetic, no watermark` |
| TEX | `textura-papel.webp` (opcional) | 1:1 | `A sheet of unbleached kraft baking paper, lightly creased and softly crumpled . lying flat and evenly lit, two faint spots of grease translucency . perfectly top-down flat lay filling the whole frame, no subject, uniform across the surface so it tiles seamlessly as a page background . subtle analogue paper-texture photography, very low contrast, diffuse soft light, almost flat . warm cream base matching #FDF6EA with faint ochre fibre variation, no other colour . 1:1 seamless tileable, no text, no logos, no identifiable faces, no stock-photo aesthetic, no watermark` |

**Diretriz de consistência visual (aplicar a todos):** warm natural-light food photography on a cream paper base, low saturation, one burnt-orange accent (`#D53F0E`), no props that read as generic stock, nothing styled beyond what a real home kitchen would have.

**Evitar em todos:** texto renderizado dentro da imagem, rostos identificáveis de pessoas reais, logos de marcas, estética genérica de banco de imagens, watermark.

### Mapa de assets reais (o que vai em cada seção)

| Seção | Asset | Origem | Ação necessária |
|---|---|---|---|
| S1 | `/assets/food/ge/10.webp`, `/assets/food/marcelle/01.webp`, `/assets/food/ge/03.webp` | já no repositório | nenhuma |
| S2 | `s2-problema.webp` | gerar | gerar e converter para webp |
| S5 | `marcelle-logo.png` | `ref/marcelle nogueira.pdf`, página 1 | extrair, recortar, fundo transparente |
| S5 | `marcelle-mockup-caixa.webp` | PDF, página 3 | extrair, converter, máximo 1400px |
| S5 | `marcelle-mockup-uniforme.webp` | PDF, página 5 | extrair, converter, máximo 1400px |
| S5 | `marcelle-mockup-sacola.webp` | PDF, página 8 | extrair, converter, máximo 1400px |
| S5 | `/assets/food/marcelle/01.webp` até `08.webp` | já no repositório | nenhuma |
| S6 | `ge-logo.png` | `ref/Ge Sabores.jpeg` | recortar do fundo rosa, fundo transparente |
| S6 | `ge-antes.webp` e `ge-depois.webp` | `ref/ge-sabores-v1.jpeg` e `v2.jpeg` | PENDENTE, confirmar qual é qual antes de usar |
| S6 | `/assets/food/ge/01.webp` até `15.webp` | já no repositório | nenhuma |
| S7 | `/assets/isabelly.jpg` | já no repositório | nenhuma |
| S8 (plano B) | páginas 2, 4, 7 e 9 do manual | `ref/marcelle nogueira.pdf` | extrair só se o plano B for acionado |
| OG | `og-food-lp.png` | recorte de `/assets/food/marcelle/01.webp` | recortar em 1200x630, texto da seção 4 como camada por cima, não dentro do prompt |

Destino de todos os arquivos novos: `public/assets/food-lp/`.

---

## 8. O que fica de fora

| Item | Motivo |
|---|---|
| Preço, tabela de pacotes e faixa de valor | Decisão do cliente. O ticket varia de uma sessão de fotos a uma identidade completa, e um número na página afasta os dois extremos. A faixa é dada dentro do checkup. |
| Marcas grandes do portfólio (L'Oréal, Boticário, Natura, Avon, Fleurity) | Só entram como o número agregado "50+ marcas" em S7. Nomeá-las diante de uma dona de salgaderia cria distância e medo de preço. |
| Case Céu de Brigadeiro | O cliente citou duas marcas, e não há asset dessa terceira na pasta de referência. Continua vivo em `/comida`. |
| Vídeos e Reels do portfólio geral | Nenhum é do ramo alimentício. Ficam na home. |
| Os 7 serviços listados como 7 blocos separados | Agrupados em 4 blocos mais o checkup como oferta de entrada. Sete decisões numa tela é o mesmo que nenhuma. |
| Tabela comparativa com concorrente | Vira uma frase na subheadline de S3. Nomear o freelancer de social do bairro num mercado que funciona por indicação é hostil e volta contra ela. |
| Cursor custom, painel de tweaks, marquee do nome, grayscale no hover | Gestos da home e das outras rotas. Esta página tem um objetivo só e não empresta assinatura de nenhuma outra. |
| Menu de navegação com âncoras | Cada âncora é uma saída. A página tem um caminho. |
| Formulário de contato | O CTA vai para o WhatsApp, onde o público já vive e já vende. |

---

## 9. Princípios adaptados

Conflito de base resolvido primeiro: `lp-viral-rules` pressupõe micro-SaaS indie de pagamento único, e aqui é **serviço consultivo com venda por conversa**. Onde os dois modelos brigaram, decidi pelo modelo de negócio real, ou seja, por `revenue-centric-design`.

| Origem | Princípio | Adaptação | Motivo |
|---|---|---|---|
| lp-viral-rules | 16, Pricing visível no header | Removido | Serviço sob orçamento com ticket muito variável. Um preço no topo afasta tanto quem quer só uma foto quanto quem quer a marca inteira. |
| lp-viral-rules | 8, Paywall duro e 25, Deixar experimentar antes de pagar | O "paywall" virou o checkup gratuito | Cartão antes da conversa não existe neste mercado. O checkup entrega valor real antes de qualquer cobrança, que é o espírito do princípio 25. |
| lp-viral-rules | 12, Pricing de pipoca (3 tiers) | Substituído por 4 blocos de serviço sem valor | Não há produto empacotado para tierizar. Os 4 blocos cumprem o papel de mostrar amplitude sem forçar uma escolha. |
| lp-viral-rules | 29, Não lançar sem depoimentos | Não cumprido hoje, plano B declarado em S8 | A prova disponível é densa e material: 23 fotos autorais e um manual de marca de 9 páginas aplicado em embalagem e uniforme. Vale mais que uma frase genérica de cliente. Pendência registrada na seção 10. |
| lp-viral-rules | 31, Comparação com concorrentes | Sem tabela, virou uma frase em S3 | Mercado de indicação. Tabela apontando para o freelancer local seria lida como agressão e voltaria contra ela. |
| lp-viral-rules | 2, Três cores | 3 cores funcionais mais 3 decorativas confinadas | Creme, tinta e a laranja do CTA fazem o trabalho. Vermelho, amarelo e verde entram só nos escorridos e marcadores, com teto de 8% da viewport. O suficiente para a página ser de comida sem disputar com o botão. |
| lp-viral-rules | 11, Fazer uma coisa | Tensão real, porque ela faz sete | Resolvido em duas camadas. Os serviços agrupam em 4, e a página inteira vende **uma coisa só**, o checkup. Todo o resto é justificativa para clicar. |
| lp-viral-rules | 32, Mais caro que o concorrente | Aplicado sem número | O posicionamento de fornecedor único que também fotografa já ancora acima do social media avulso. Dizer "sou mais cara" sem mostrar preço não convence ninguém. |
| lp-viral-rules | 15, Fundador visível | Aplicado integralmente em S7 | Numa página sem preço, a confiança se transfere pela pessoa. É o princípio mais importante desta LP. |
| revenue-centric-design | Positioning e ICP | ICP estreitado de "todo o ramo alimentício" para "negócio de comida que já vende e cuja marca não acompanha" | O pedido original era amplo demais para a headline. A banda S9 recupera a amplitude por segmento, sem diluir a mensagem central. |
| revenue-centric-design | Behavioral science, redução de atrito | O CTA pede o Instagram, não o orçamento | Pedir o que a pessoa já tem no bolso converte muito mais que pedir uma decisão de compra. |
| revenue-centric-design | Behavioral science, ancoragem | Identidade visual é o bloco 01 de S3, e o case 01 é o de escopo máximo | Ver a marca inteira primeiro faz "só uma sessão de fotos" parecer um pedido pequeno, e é exatamente o que a pergunta 5 do FAQ e o case da Gé oferecem como porta de entrada. |
| revenue-centric-design | Pricing e monetização | Nenhuma menção a valor na página | Consequência direta da decisão do cliente. Registrado aqui para que a skill de front não invente uma seção de planos. |

---

## 10. Pendências antes do lançamento

| # | Pendência | Ação concreta | Bloqueia o build? |
|---|---|---|---|
| 1 | **Número do WhatsApp** | Pegar o número com DDI e DDD e montar `https://wa.me/55DDNNNNNNNNN?text=...`. Os 3 CTAs apontam para ele. | Não bloqueia o build (usar `#` como href temporário). **Bloqueia a publicação.** |
| 2 | Depoimento da Marcelle Nogueira | Mandar no WhatsApp: "o que mudou no seu negócio depois que a marca ficou pronta?". Pedir 2 a 3 frases e autorização de uso. | Não. S8 tem plano B na seção 5. |
| 3 | Depoimento e nome próprio da Gé Sabores | Mandar no WhatsApp: "o que você percebeu depois que trocou as fotos?". Confirmar como ela quer ser nomeada. | Não. Mesmo plano B. |
| 4 | Prazo de resposta do checkup | Definir um número honesto (por exemplo, 2 dias úteis) e inserir em S4, passo 01. Sem número, publicar a frase sem promessa de prazo. | Não. |
| 5 | Antes e depois da Gé (`ge-sabores-v1` contra `v2`) | Confirmar com a Isabelly qual foto é do cliente e qual é dela. Sem confirmação, cortar o bloco. | Não. |
| 6 | Instagram da Isabelly | Pegar o handle para o link do rodapé. | Não. Remover o link se não vier. |
| 7 | Atende fotografia fora de São Paulo? | Confirmar e ajustar a resposta 3 de S10. | Não. |
| 8 | Prazos de entrega por serviço | Coletar prazo de identidade, sessão de fotos e site. Sem eles, remover a pergunta 4 de S10. | Não. |
| 9 | Autorização das duas clientes para uso de logo e manual | Mensagem curta pedindo ok para exibir logo, mockups e fotos no portfólio. | Não. Mas resolver antes de divulgar a página. |
| 10 | Extração dos assets do PDF da Marcelle | Exportar as páginas 1, 3, 5 e 8 (mais 2, 4, 7 e 9 se o plano B for acionado) em webp de até 1400px para `public/assets/food-lp/`. | **Sim.** S5 não existe sem isso. |

---

## 11. Registro de implementação (2026-07-21)

A página está em `app/food-lp/page.jsx` (Server Component, prerenderizada como estática), com os dois pedaços interativos isolados em `app/food-lp/interactive.jsx`. Os estilos vivem em `app/globals.css`, escopados em `.fl-shell`, mesma convenção de `/food` e `/comida`.

Onde o build divergiu da spec, e por quê:

| Item | O que a spec pedia | O que foi feito | Motivo |
|---|---|---|---|
| Imagem de S2 | Uma foto gerada representando o "antes" | Seção construída só com tipografia. O prompt continua na seção 7, pronto para gerar | Não havia gerador de imagem disponível nesta sessão. A seção funciona sem, e um retângulo vazio seria pior que nada |
| S8, depoimentos | Plano B (grade do manual) se não houvesse fala real | Dois slots marcados "Depoimento em coleta", com a pergunta a fazer e o logo da marca | O cliente pediu explicitamente placeholders. Nenhum texto fictício foi escrito |
| Cor do escorrido | Texto de S5/S6 dizia "cor da seção seguinte", a seção 3 dizia "paleta molho" | Paleta molho: amarelo e vermelho alternados | O documento se contradizia. Tonal sobre tonal deixava o gesto invisível, e a direção visual pede a cor da comida entrando pela calda |
| Hero | H1 dentro da coluna de texto | H1 em largura total acima da grade de duas colunas | Fraunces 800 é larga. Na coluna, "Quem só vê, passa direto." quebrava em quatro linhas e destruía a frase-âncora |
| Reveal no hero | Não especificado | O hero não usa `reveal` | Com `reveal`, o CTA ficava invisível acima da dobra até a pessoa rolar. A dobra tem que renderizar sem depender de JS |
| `--fl-accent` | `#D8410F` | `#D53F0E` | `#D8410F` dava 4.48:1 com texto branco, um fio abaixo do mínimo. `#D53F0E` dá 4.62:1 |
| FAQ | 5 perguntas | 4 perguntas | "Em quanto tempo fica pronto?" foi removida, como a própria spec manda fazer quando não há prazo confirmado |
| Antes e depois da Gé | Bloco opcional em S6 | Não construído. `ge-antes.webp` e `ge-depois.webp` já estão exportados | Continua PENDENTE saber qual foto é do cliente e qual é dela |
| Escorrido | `viewBox="0 0 1200 48"` | `viewBox="0 0 1200 60"` | As gotas precisavam de mais altura para escorrer de verdade |

### Verificação feita

- `next build` passa. `/food-lp` prerenderiza como estático.
- Renderizado em Chromium headless a 1280px e a 390px, página inteira (cerca de 13.800px de altura).
- Reveals confirmados disparando com `IntersectionObserver` em viewport real de 1280x820.
- `prefers-reduced-motion` forçado: reveals desligados, marquee vira lista estática centralizada de uma cópia só.
- Acordeão no HTML servidor: um `aria-expanded="true"`, três `"false"`, quatro `role="region"`.
- Contraste medido: corpo 16,25:1, corpo secundário 12,64:1, muted 5,13:1 (4,63:1 sobre o fundo alternado), botão 4,62:1, meta em vermelho 6,13:1.
- Rotas `/`, `/food` e `/comida` renderizadas depois da mudança. O único seletor não escopado adicionado é `body:has(.fl-shell)`, que não casa fora desta rota. As seis famílias do Google Fonts carregam.

### Não verificado

- Nenhum teste automatizado. O projeto não tem suíte de testes nem configuração de ESLint (`next lint` foi removido no Next 16).
- Navegação por teclado e leitor de tela não foram exercidas manualmente. A marcação usa `button` nativo com `aria-expanded` e `aria-controls`, e o foco tem contorno visível, mas isso é inferência da marcação, não observação.
- Não testado em Safari, Firefox nem em aparelho real. O `:has()` e o `overflow: clip` do `.fl-shell` merecem uma olhada no Safari.
