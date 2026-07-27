'use client';

import React, { useEffect } from 'react';
import CustomCursor from '@/components/custom-cursor';
import { useReveal } from '@/components/sections';

/* ──────────────────────────────────────────────────────────────────────────
   Página de nicho — Comida & Bebida
   "O sabor é a única cor": a interface segue papel-e-tinta (direção Editorial);
   a comida é a única coisa que aparece em cor. O herói entrega cor de imediato
   (a promessa); os trabalhos entram em grayscale e acendem no hover (a recompensa).
   Conteúdo dos clientes (Gé Sabores, Céu de Brigadeiro) é real; imagens são
   placeholder (fotografia Unsplash) até os Reels finais entrarem.
   ────────────────────────────────────────────────────────────────────────── */

function PlayIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M3 1.5 L12 7 L3 12.5 Z" />
    </svg>
  );
}

/* ─── clientes reais do nicho ─────────────────────────────────────────────── */
const CLIENTS = [
  {
    idx: '01',
    niche: 'Bolos caseiros · Café da tarde',
    name: 'Gé Sabores',
    copy: 'Bolos caseiros, dos simples de fim de tarde aos que viram tradição de família. O trabalho transforma "mais um bolo" em desejo: captação que valoriza a massa, o recheio e a mão de quem fez — e uma comunicação que cabe no orçamento de quem está começando.',
    tags: ['Conteúdo', 'Direção', 'Captação'],
    main: '/assets/comida/ge-main.jpg',
    mainAlt: 'Bolo de pão de ló com creme e morangos polvilhado com açúcar, sobre suporte de bolo — produção de conteúdo para a Gé Sabores',
    reel: '/assets/comida/ge-reel.jpg',
    reelAlt: 'Close de um bolo caseiro simples de duas camadas — frame de Reel para a Gé Sabores',
  },
  {
    idx: '02',
    niche: 'Salgados · Coxinhas',
    name: 'Céu de Brigadeiro',
    copy: 'Salgados que começam pela coxinha e não param por aí. Comunicação que abre o apetite e organiza o pedido — do feed que dá fome ao conteúdo que constrói uma marca de salgado feita para durar e para escalar.',
    tags: ['Conteúdo', 'Social', 'Tráfego'],
    main: '/assets/comida/ceu-main.jpg',
    mainAlt: 'Prato branco com quatro salgados fritos dourados e um buquê de salada — produção de conteúdo para a Céu de Brigadeiro',
    reel: '/assets/comida/ceu-reel.jpg',
    reelAlt: 'Close de um croquete dourado finalizado — frame de Reel para a Céu de Brigadeiro',
  },
];

/* ─── serviços adaptados ao nicho ─────────────────────────────────────────── */
const SERVICES = [
  {
    num: '01',
    name: 'Conteúdo gastronômico',
    desc: 'Reels, fotos e posts que dão fome no primeiro frame. Food styling e captação que respeitam o produto — do bolo de fim de tarde à bandeja de salgado saindo da fritura.',
  },
  {
    num: '02',
    name: 'Direção criativa & captação',
    desc: 'Do roteiro à edição: a estética que faz o simples parecer irresistível e mantém a cara da marca em cada vídeo.',
  },
  {
    num: '03',
    name: 'Social media para comida',
    desc: 'Gestão de redes para confeitaria, salgaderia, delivery e restaurante. Presença consistente que vira encomenda, fila e clientela fiel.',
  },
  {
    num: '04',
    name: 'Tráfego pago para food',
    desc: 'Campanhas no Meta e no Google que enchem a agenda de encomendas e o carrinho do delivery — alcance que termina em pedido.',
  },
];

/* ─── nav (variante de subpágina) ─────────────────────────────────────────── */
function FoodNav() {
  return (
    <nav className="nav food-nav">
      <a className="nav-mark" href="/" data-cursor="hover">
        <span className="blink"></span>
        <span>IP — Studio</span>
      </a>
      <div className="nav-links">
        <a href="#trabalhos" data-cursor="hover">Trabalhos</a>
        <a href="#servicos" data-cursor="hover">Serviços</a>
        <a href="#contato" data-cursor="hover">Contato</a>
        <a href="/" data-cursor="hover" className="food-nav-back">Portfólio <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
}

/* ─── hero ────────────────────────────────────────────────────────────────── */
function FoodHero() {
  return (
    <header className="food-hero">
      <div className="food-hero-marquee" aria-hidden="true">
        <span className="food-hero-track">
          Gastronomia&nbsp;·&nbsp;Food&nbsp;&amp;&nbsp;Beverage&nbsp;·&nbsp;
          Gastronomia&nbsp;·&nbsp;Food&nbsp;&amp;&nbsp;Beverage&nbsp;·&nbsp;
        </span>
      </div>

      <div className="food-hero-top reveal">
        <div className="section-label" style={{ margin: 0 }}>Nicho — Comida &amp; Bebida</div>
        <div className="food-hero-loc">São Paulo, BR · 2026</div>
      </div>

      <h1 className="food-hero-title reveal reveal-d2">
        O sabor entra<br />
        pelos <span className="italic">olhos.</span>
      </h1>

      <div className="food-hero-lede reveal reveal-d3">
        <p>
          Conteúdo, direção criativa e tráfego pago para marcas de comida.
          Porque ninguém prova pela tela — mas é por ela que decide.
        </p>
        <a className="food-hero-cta" href="#trabalhos" data-cursor="hover">
          Ver os trabalhos <span aria-hidden="true">↓</span>
        </a>
      </div>

      <figure className="food-hero-figure reveal reveal-d4" data-cursor="hover">
        <img
          src="/assets/comida/hero.jpg"
          alt="Bolo de chocolate caseiro recebendo uma chuva de açúcar de confeiteiro, sob luz baixa"
          width="1600"
          height="1000"
          fetchPriority="high"
        />
        <figcaption>Direção & captação · doçaria artesanal</figcaption>
      </figure>
    </header>
  );
}

/* ─── posicionamento ──────────────────────────────────────────────────────── */
function FoodIntro() {
  return (
    <section className="food-intro" aria-labelledby="food-intro-title">
      <div className="section-label reveal">01 — Por que comida</div>
      <div className="food-intro-grid">
        <h2 id="food-intro-title" className="food-intro-title reveal">
          Comida é o conteúdo mais sensorial que existe — e o mais fácil de
          fazer <span className="italic">errado.</span>
        </h2>
        <div className="food-intro-copy">
          <p className="reveal reveal-d2">
            Marca de comida não vende foto bonita: vende vontade. O quadro certo,
            a luz certa, o corte no segundo certo — é isso que faz a boca encher
            d'água antes de o dedo parar de rolar.
          </p>
          <p className="reveal reveal-d3">
            Eu junto as duas coisas que quase nunca andam juntas: a estética que
            faz o seu produto parecer irresistível e a estratégia que transforma
            esse desejo em encomenda, fila e recompra.
          </p>
          <ul className="food-principles reveal reveal-d4">
            <li><span>01</span> Fome já no primeiro frame</li>
            <li><span>02</span> Estética que respeita o produto</li>
            <li><span>03</span> Performance que enche a mesa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── trabalhos no nicho ──────────────────────────────────────────────────── */
function FoodWork() {
  return (
    <section className="food-work" id="trabalhos" aria-labelledby="food-work-title">
      <div className="food-work-head">
        <div className="section-label reveal">02 — Trabalhos no nicho</div>
        <h2 id="food-work-title" className="food-work-title reveal reveal-d2">
          Marcas de comida que já<br />
          confiam no meu <span className="italic">olhar.</span>
        </h2>
      </div>

      <div className="food-clients">
        {CLIENTS.map((c, i) => (
          <article className={`food-client${i % 2 === 1 ? ' is-rev' : ''}`} key={c.name}>
            <div className="food-client-media reveal">
              <figure className="food-client-main" data-cursor="hover">
                <img src={c.main} alt={c.mainAlt} width="1100" height="880" loading="lazy" />
              </figure>
              <figure className="food-client-reel" data-cursor="video">
                <img src={c.reel} alt={c.reelAlt} width="720" height="1280" loading="lazy" />
                <span className="food-reel-mark"><PlayIcon /></span>
                <figcaption>Reel · em breve</figcaption>
              </figure>
            </div>

            <div className="food-client-text reveal reveal-d2">
              <div className="food-client-meta">
                <span className="food-client-idx">{c.idx}</span>
                <span className="food-client-niche">{c.niche}</span>
              </div>
              <h3 className="food-client-name">{c.name}</h3>
              <p className="food-client-copy">{c.copy}</p>
              <ul className="food-client-tags">
                {c.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── serviços ────────────────────────────────────────────────────────────── */
function FoodServices() {
  return (
    <section className="food-services" id="servicos" aria-labelledby="food-services-title">
      <div className="section-label reveal">03 — O que faço para marcas de comida</div>
      <h2 id="food-services-title" className="food-services-title reveal reveal-d2">
        Do forno ao <span className="italic">feed.</span>
      </h2>
      <div className="food-services-list">
        {SERVICES.map((s) => (
          <div className="food-service-row reveal" key={s.num} data-cursor="hover">
            <div className="food-service-num">{s.num}</div>
            <div className="food-service-name">{s.name}</div>
            <p className="food-service-desc">{s.desc}</p>
            <div className="food-service-arrow" aria-hidden="true">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── método (statement) ──────────────────────────────────────────────────── */
function FoodMethod() {
  return (
    <section className="food-method" aria-labelledby="food-method-title">
      <div className="section-label reveal">04 — Método</div>
      <h2 id="food-method-title" className="food-method-title reveal reveal-d2">
        Comida não se vende mostrando.<br />
        Se vende dando <span className="italic">vontade.</span>
      </h2>
      <p className="food-method-copy reveal reveal-d3">
        Estratégia antes da estética, estética a serviço do apetite. Cada peça
        nasce de uma pergunta simples: isso faz alguém querer pedir agora?
      </p>

      {/*
        NÚMEROS DO NICHO — preencher quando os dados estiverem prontos.
        Descomente este bloco e troque os valores. Mantém o padrão de métrica
        invertida do portfólio (não inventar números aqui).
        <div className="food-metrics">
          <div className="food-metric"><div className="food-metric-num">+0,0<span>M</span></div><div className="food-metric-lbl">Views no nicho de comida</div></div>
          <div className="food-metric"><div className="food-metric-num">00<span>+</span></div><div className="food-metric-lbl">Marcas de comida atendidas</div></div>
          <div className="food-metric"><div className="food-metric-num">00<span>%</span></div><div className="food-metric-lbl">Engajamento médio</div></div>
        </div>
      */}
    </section>
  );
}

/* ─── contato ─────────────────────────────────────────────────────────────── */
function FoodContact() {
  return (
    <section className="food-contact" id="contato" aria-labelledby="food-contact-title">
      <div className="section-label reveal">05 — Vamos conversar</div>
      <h2 id="food-contact-title" className="food-contact-title reveal reveal-d2">
        Tem uma marca de comida<br />
        pra fazer <span className="italic">crescer?</span>
      </h2>
      <a
        className="food-contact-email reveal reveal-d3"
        href="mailto:isabelly.paivaassessoria@gmail.com?subject=Marca%20de%20comida"
        data-cursor="hover"
      >
        isabelly.paivaassessoria@gmail.com <span aria-hidden="true">→</span>
      </a>

      <div className="food-contact-grid reveal">
        <div className="food-contact-col">
          <h3>Onde me encontrar</h3>
          <div className="food-contact-links">
            <a className="food-contact-link" href="https://instagram.com/" data-cursor="hover">Instagram <span className="arr" aria-hidden="true">↗</span></a>
            <a className="food-contact-link" href="/" data-cursor="hover">Portfólio completo <span className="arr" aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="food-contact-col">
          <h3>Atendo</h3>
          <p className="food-contact-note">
            Confeitaria, salgaderia, delivery e restaurante — de quem está
            começando a quem quer escalar. São Paulo e remoto.
          </p>
        </div>
      </div>

      <div className="footer food-footer">
        <div>© 2026 — Isabelly Paiva</div>
        <div className="footer-mid">O sabor é a única cor</div>
        <div className="footer-right">Nicho · Comida</div>
      </div>
    </section>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */
export default function FoodNichePage() {
  const ref = useReveal();

  useEffect(() => {
    const prev = document.documentElement.getAttribute('data-dir');
    document.documentElement.setAttribute('data-dir', 'editorial');
    return () => {
      if (prev) document.documentElement.setAttribute('data-dir', prev);
    };
  }, []);

  return (
    <div className="shell food" data-dir="editorial" ref={ref}>
      <CustomCursor enabled />
      <FoodNav />
      <main>
        <FoodHero />
        <FoodIntro />
        <FoodWork />
        <FoodServices />
        <FoodMethod />
        <FoodContact />
      </main>
    </div>
  );
}
