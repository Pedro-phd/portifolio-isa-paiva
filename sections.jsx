/* global React */
const { useEffect, useRef, useState } = React;

/* ─── reveal hook ──────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ─── nav ─────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-mark">
        <span className="blink"></span>
        <span>IP — Studio</span>
      </div>
      <div className="nav-links">
        <a href="#work" data-cursor="hover">Trabalhos</a>
        <a href="#about" data-cursor="hover">Sobre</a>
        <a href="#services" data-cursor="hover">Serviços</a>
        <a href="#contact" data-cursor="hover">Contato</a>
      </div>
    </nav>
  );
}

/* ─── hero ────────────────────────────────────────────────────────── */
function Hero() {
  const ref = useReveal();
  return (
    <section className="hero" ref={ref}>
      <div className="hero-marquee" aria-hidden="true">
        <span className="hero-marquee-track">
          Isabelly&nbsp;Paiva&nbsp;·&nbsp;Isabelly&nbsp;Paiva&nbsp;·&nbsp;
          Isabelly&nbsp;Paiva&nbsp;·&nbsp;Isabelly&nbsp;Paiva&nbsp;·&nbsp;
        </span>
      </div>

      <div className="hero-meta reveal">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h1 className="hero-title reveal reveal-d2">
        Isabelly<br />
        <span className="italic">Paiva.</span>
      </h1>

      <div className="hero-meta reveal reveal-d3">
        <div>
          <div>Função</div>
          <strong>Marketing Digital · Vídeo · Conteúdo</strong>
        </div>
        <div style={{ textAlign: "center" }} className="hero-scrollhint">
          <span className="arrow">↓</span>
          <span>Role para começar</span>
          <span className="arrow">↓</span>
        </div>
        <div className="hero-meta-right">
          <div>Index</div>
          <strong>01 / 08</strong>
        </div>
      </div>
    </section>
  );
}

/* ─── about ───────────────────────────────────────────────────────── */
function About() {
  const ref = useReveal();
  return (
    <section className="about" id="about" data-screen-label="About" ref={ref}>
      <div className="section-label reveal">02 — Sobre</div>
      <div className="about-grid">
        <div className="about-portrait reveal">
          <img src="assets/isabelly.jpg" alt="Isabelly Paiva" className="about-portrait-img" />
          <div className="about-portrait-corner">IP / 26</div>
          <div className="about-portrait-label">São Paulo, BR — 2026</div>
        </div>
        <div className="about-copy">
          <h2 className="reveal">
            Marketing e tráfego pago para marcas que querem <span className="italic">crescer de verdade.</span>
          </h2>
          <p className="reveal reveal-d2">
            Há mais de 4 anos, transformo ideias em estratégias que conectam marcas, pessoas e resultados.
          </p>
          <p className="reveal reveal-d3">
            Meu trabalho une marketing, tráfego pago, direção criativa, produção de conteúdo e edição de vídeo para criar presenças digitais mais fortes, autênticas e estratégicas.
          </p>
          <p className="reveal reveal-d4">
            Acredito que marcas não crescem apenas aparecendo, mas comunicando da forma certa.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── video mosaic ────────────────────────────────────────────────── */
const VIDEOS = [
  { idx: "01", title: "@fleurity", meta: "Reels", dur: "", src: "assets/videos/fleurity.mp4" },
  { idx: "02", title: "@tocave", meta: "Reels", dur: "", src: "assets/videos/tocave.mp4" },
  { idx: "03", title: "@spamovel.sp", meta: "Reels", dur: "", src: "assets/videos/spamovelsp.mp4" },
  { idx: "04", title: "@danigodoyoficial", meta: "Reels", dur: "", src: "assets/videos/danigodoyoficial.mp4" },
  { idx: "05", title: "@dragiseleguerra", meta: "Reels", dur: "", src: "assets/videos/dragiseleguerra.mp4" },
  { idx: "06", title: "@afha48", meta: "Reels", dur: "", src: "assets/videos/afha48.mp4" },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M3 1.5 L12 7 L3 12.5 Z" />
    </svg>
  );
}

function VideoMosaic() {
  const ref = useReveal();
  return (
    <section className="videos" id="work" data-screen-label="Videos" ref={ref}>
      <div className="videos-head">
        <div>
          <div className="section-label reveal">03 — Vídeos / Trabalhos selecionados</div>
          <h2 className="reveal reveal-d2">
            Criativos desenvolvidos para<br />
            conectar e <span className="italic">converter.</span>
          </h2>
        </div>
        <div className="intro reveal reveal-d3">
          Cada produção apresentada aqui foi desenvolvida com intenção estratégica.
          Do roteiro à direção criativa, da captação à edição final, cada detalhe foi pensado para fortalecer o posicionamento da marca, gerar conexão com o público e criar conteúdos com potencial real de performance.
        </div>
      </div>

      <div className="mosaic">
        {VIDEOS.map((v, i) => (
          <article
            key={v.idx}
            className={`video-card v-${i + 1} reveal`}
            data-cursor="video"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {v.src && (
              <video
                className="video-media"
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={(e) => { e.target.play().catch(() => {}); }}
                onCanPlay={(e) => { if (e.target.paused) e.target.play().catch(() => {}); }}
              />
            )}
            <div className="idx">{v.idx}</div>
            {v.dur && <div className="dur">{v.dur}</div>}
            <div className="playmark">
              <PlayIcon />
            </div>
            <div className="overlay"></div>
            <div className="info">
              <h3 className="info-title">{v.title}</h3>
              <div className="info-meta">{v.meta}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── services ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    name: "Estratégia de Conteúdo",
    desc: "Planejamento editorial, posicionamento de marca, construção de narrativa, calendário estratégico e direcionamento de conteúdo para redes sociais.",
  },
  {
    num: "02",
    name: "Vídeo & Direção Criativa",
    desc: "Roteirização, direção criativa, captação e edição de conteúdos para Reels, TikTok, campanhas e vídeos voltados para performance.",
  },
  {
    num: "03",
    name: "Social Media Management",
    desc: "Gestão estratégica de redes sociais, copywriting, acompanhamento de canais e construção de presença digital com foco em conexão e consistência.",
  },
  {
    num: "04",
    name: "Performance & Ads",
    desc: "Planejamento, criação e gerenciamento de campanhas pagas no Meta Ads, TikTok Ads e Google Ads, com foco em alcance, conversão e crescimento de marca.",
  },
];

function Services() {
  const ref = useReveal();
  return (
    <section className="services" id="services" data-screen-label="Services" ref={ref}>
      <div className="section-label reveal">04 — Serviços</div>
      <h2 className="reveal reveal-d2">
        Quatro formas<br />
        de <span className="italic">trabalharmos juntos.</span>
      </h2>
      <div className="services-list">
        {SERVICES.map((s) => (
          <div className="service-row reveal" key={s.num} data-cursor="hover">
            <div className="service-num">{s.num}</div>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── metrics ─────────────────────────────────────────────────────── */
function Metrics() {
  const ref = useReveal();
  return (
    <section className="metrics" data-screen-label="Metrics" ref={ref}>
      <div className="section-label reveal">05 — Em números</div>
      <h2 className="display display-section reveal reveal-d2" style={{ marginBottom: 80, maxWidth: "16ch" }}>
        Quatro anos, <span className="italic">milhões</span> de olhos.
      </h2>
      <div className="metrics-grid">
        <div className="metric reveal">
          <div className="metric-num">+2,4<span className="sup">M</span></div>
          <div className="metric-label">Views orgânicos gerados</div>
        </div>
        <div className="metric reveal reveal-d2">
          <div className="metric-num">50<span className="sup">+</span></div>
          <div className="metric-label">Marcas atendidas</div>
        </div>
        <div className="metric reveal reveal-d3">
          <div className="metric-num">18<span className="sup">%</span></div>
          <div className="metric-label">Eng. médio por post</div>
        </div>
        <div className="metric reveal reveal-d4">
          <div className="metric-num">04<span className="sup">y</span></div>
          <div className="metric-label">Anos no mercado</div>
        </div>
      </div>
    </section>
  );
}

/* ─── brands ──────────────────────────────────────────────────────── */
const BRANDS = [
  "@vulvasautonomas",
  "@lorealparis",
  "@boticario",
  "@avon",
  "@kokeshi",
  "@natura",
  "@fleurity",
  "@feel",
];

function Brands() {
  return (
    <section className="brands" data-screen-label="Brands">
      <div className="section-label">05 — Marcas com quem trabalhei</div>
      <div className="brands-marquee">
        <span>
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <React.Fragment key={i}>
              <span style={{ fontStyle: "italic" }}>{b}</span>
              <span className="sep">◆</span>
            </React.Fragment>
          ))}
        </span>
      </div>
    </section>
  );
}

/* ─── cases ───────────────────────────────────────────────────────── */
const CASES = [
  {
    tag: "Assinaturas / Recorrência",
    title: "Como faturei 100 mil reais com um produto de recorrência.",
    desc: "Desenvolvimento estratégico da presença digital da marca, unindo posicionamento, conteúdo, campanhas pagas e narrativa de produto para fortalecer aquisição, retenção e recorrência. O projeto envolveu estratégia de marketing, direção criativa, estrutura de funil e comunicação focada em crescimento sustentável.",
    image: "assets/case-fleurity.png",
  },
];

function Cases() {
  const ref = useReveal();
  return (
    <section className="cases" data-screen-label="Cases" ref={ref}>
      <div className="section-label reveal">06 — Cases</div>
      <h2 className="reveal reveal-d2">
        Cases de<br />
        <span className="italic">sucesso.</span>
      </h2>
      <div className="case-list">
        {CASES.map((c, i) => (
          <article className="case" key={i}>
            <div className="case-visual reveal" data-cursor="hover">
              {c.image && <img src={c.image} alt={c.title} className="case-visual-img" />}
              <div className="case-tag">{c.tag}</div>
            </div>
            <div className="case-content">
              <h3 className="reveal reveal-d2">{c.title}</h3>
              <p className="reveal reveal-d3">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── testimonials ────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "A Isa entende o jogo. Ela não entrega só vídeo bonito — entrega vídeo que vende e constrói marca ao mesmo tempo.",
    name: "Mariana Costa",
    role: "Head of Brand · Nova",
  },
  {
    quote: "Trabalhar com a Isabelly mudou nosso relacionamento com conteúdo. Pela primeira vez, social não é mais firefighting.",
    name: "Rafael Lima",
    role: "Founder · Atlas Coffee",
  },
  {
    quote: "Performance pesada, estética leve. É raríssimo encontrar quem entrega as duas coisas no mesmo trabalho.",
    name: "Camila Rocha",
    role: "Marketing Lead · Volt",
  },
];

function Testimonials() {
  const ref = useReveal();
  return (
    <section className="testimonials" data-screen-label="Testimonials" ref={ref}>
      <div className="section-label reveal">08 — Depoimentos</div>
      <h2 className="reveal reveal-d2">
        O que as<br />
        marcas <span className="italic">dizem.</span>
      </h2>
      <div className="test-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className={`test reveal reveal-d${i + 1}`} key={i} data-cursor="hover">
            <p className="test-quote">{t.quote}</p>
            <div className="test-author">
              <div className="test-avatar"></div>
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── contact ─────────────────────────────────────────────────────── */
function Contact() {
  const ref = useReveal();
  return (
    <section className="contact" id="contact" data-screen-label="Contact" ref={ref}>
      <div className="section-label reveal">07 — Vamos conversar</div>
      <h2 className="reveal reveal-d2">
        Precisa de ajuda<br />
        com sua <span className="italic">marca?</span>
      </h2>
      <a className="contact-email reveal reveal-d3" href="mailto:isabelly.paivaassessoria@gmail.com" data-cursor="hover">
        isabelly.paivaassessoria@gmail.com →
      </a>

      <div className="contact-grid">
        <div className="contact-col reveal">
          <h3>Onde me encontrar</h3>
          <div className="contact-links">
            <a className="contact-link" href="#" data-cursor="hover">Instagram <span className="arr">↗</span></a>
            <a className="contact-link" href="#" data-cursor="hover">LinkedIn <span className="arr">↗</span></a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>© 2026 — Isabelly Paiva</div>
        <div className="footer-mid">Feito à mão · São Paulo</div>
        <div className="footer-right">v04 · last updated 05/2026</div>
      </div>
    </section>
  );
}

/* expose globals */
Object.assign(window, {
  Nav, Hero, About, VideoMosaic, Services, Metrics, Brands, Cases, Testimonials, Contact,
});
