import React from 'react';
import { RevealRoot, Faq } from './interactive';

/* ──────────────────────────────────────────────────────────────────────────
   Rota /food-lp, oferta da Isabelly para o ramo alimentício.
   Construída a partir de docs/lp/food-lp.md. Ângulo: status ("quem prova,
   volta. quem só vê, passa direto"). Linguagem visual exclusiva desta rota:
   papel de padaria (creme + tinta café), laranja-brasa só no CTA, escorrido
   de calda entre as seções e serrilha de comanda nos cards.
   Não herda cursor custom, marquee do nome nem grayscale-no-hover da home.
   ────────────────────────────────────────────────────────────────────────── */

export const metadata = {
  title: 'Marketing para marcas de comida, Isabelly Paiva',
  description:
    'Identidade visual, fotografia de produto, conteúdo e anúncio para confeitaria, salgaderia e delivery. Checkup de marca gratuito pelo WhatsApp.',
  openGraph: {
    title: 'Marketing para marcas de comida, Isabelly Paiva',
    description: 'Quem prova, volta. Quem só vê, passa direto.',
    locale: 'pt_BR',
    type: 'website',
  },
};

/* PENDENTE: trocar por https://wa.me/55DDNNNNNNNNN?text=... quando o número vier. */
const WHATSAPP = '#';
const CTA_LABEL = 'Quero meu checkup de marca';
const CTA_MICRO =
  'Gratuito, pelo WhatsApp. Me manda seu Instagram e uma foto do produto. Eu respondo com o que está travando o seu pedido.';

/* ─── dados ───────────────────────────────────────────────────────────────── */

const SERVICOS = [
  {
    num: '01',
    nome: 'Identidade visual',
    copy: 'Logo, cores, tipografia e a aplicação de tudo isso: embalagem, sacola, rótulo, uniforme, cardápio. A Marcelle Nogueira saiu daqui com um manual de marca de 9 páginas, do logotipo ao copo de café.',
    itens: ['Logotipo', 'Paleta e tipografia', 'Manual de marca', 'Embalagem e uniforme'],
  },
  {
    num: '02',
    nome: 'Fotografia de produto',
    copy: 'Eu fotografo. A sua comida, com a luz certa e o corte certo, sem estúdio caro e sem ela esfriar esperando. Todas as fotos desta página são minhas.',
    itens: ['Captação', 'Food styling', 'Tratamento', 'Banco de imagens da marca'],
  },
  {
    num: '03',
    nome: 'Conteúdo e redes',
    copy: 'Reels, feed, roteiro, edição e legenda. Presença constante com a cara da marca, não com a cara de template.',
    itens: ['Reels e edição', 'Feed e calendário', 'Copy e legendas', 'Gestão de redes'],
  },
  {
    num: '04',
    nome: 'Loja, site e anúncio',
    copy: 'O lugar pra onde o pedido vai. Site, cardápio online e loja pra receber encomenda. E campanha no Meta e no Google levando gente até lá.',
    itens: ['Site e landing page', 'Loja online', 'Meta e Google Ads', 'Relatório mensal'],
  },
];

const PASSOS = [
  {
    num: '01',
    nome: 'Checkup',
    copy: 'Você me manda o Instagram e fotos do produto. Eu respondo com o diagnóstico: o que está travando e o que eu faria primeiro.',
  },
  {
    num: '02',
    nome: 'Proposta',
    copy: 'Escolhemos por onde começar. Pode ser só a foto, pode ser a marca inteira. Você recebe escopo, prazo e valor por escrito.',
  },
  {
    num: '03',
    nome: 'Mão na massa',
    copy: 'Eu produzo, você aprova, a marca vai pro ar. Acompanhamento e ajuste depois da entrega.',
  },
];

const MOCKUPS = [
  {
    src: '/assets/food-lp/marcelle-mockup-caixa.webp',
    w: 1400,
    h: 788,
    legenda: 'Embalagem',
    alt: 'Caixa de bolo da Marcelle Nogueira segurada por duas mãos, com o padrão de manchas da marca',
  },
  {
    src: '/assets/food-lp/marcelle-mockup-uniforme.webp',
    w: 1400,
    h: 788,
    legenda: 'Uniforme e brindes',
    alt: 'Avental, camisetas, bonés, sacola e copo com a marca Marcelle Nogueira aplicada',
  },
  {
    src: '/assets/food-lp/marcelle-mockup-sacola.webp',
    w: 1200,
    h: 939,
    legenda: 'Delivery e retirada',
    alt: 'Sacola de papel da Marcelle Nogueira sendo entregue pela janela de um carro',
  },
];

const MARCELLE_FOTOS = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `/assets/food/marcelle/${n}.webp`,
    w: 1050,
    h: 1400,
    alt: `Salgado da Marcelle Nogueira, foto ${n} de 08`,
  };
});

const GE_DIMS = {
  '01': [1024, 1024], '02': [1024, 1024], '03': [1050, 1400], '04': [1050, 1400],
  '05': [1024, 1024], '06': [1024, 1024], '07': [1024, 1024], '08': [1024, 1024],
  '09': [1024, 1024], '10': [1050, 1400], '11': [1050, 1400], '12': [1050, 1400],
  '13': [1050, 1400], '14': [1050, 1400], '15': [1050, 1400],
};

const GE_FOTOS = Object.entries(GE_DIMS).map(([n, [w, h]]) => ({
  src: `/assets/food/ge/${n}.webp`,
  w,
  h,
  alt: `Bolo da Gé Sabores, foto ${n} de 15`,
}));

const SEGMENTOS = [
  'Confeitaria', 'Salgaderia', 'Bolo no pote', 'Marmitaria', 'Delivery', 'Cafeteria',
  'Padaria', 'Doceria', 'Food truck', 'Hamburgueria', 'Açaí', 'Restaurante de bairro',
];

const PERGUNTAS = [
  {
    q: 'Quanto custa?',
    a: 'Depende do que você precisa. Uma sessão de fotos e uma identidade visual completa não custam a mesma coisa. No checkup eu já te dou uma faixa de valor pro que faz sentido no seu caso, sem compromisso.',
  },
  {
    q: 'Meu negócio é pequeno demais pra isso?',
    a: 'A Marcelle vendia por encomenda no WhatsApp quando a gente começou. Dá pra começar por uma coisa só, normalmente foto, e crescer daí.',
  },
  {
    q: 'Você atende fora de São Paulo?',
    a: 'Identidade visual, site, conteúdo e tráfego são 100% remotos, pra qualquer cidade. Fotografia é presencial em São Paulo e região.',
  },
  {
    q: 'Preciso fechar tudo de uma vez?',
    a: 'Não. A gente escolhe por onde começar. A maioria começa pela foto, porque é o que muda mais rápido.',
  },
];

const NUMEROS = [
  { n: '+4', l: 'anos de mercado' },
  { n: '50+', l: 'marcas atendidas' },
  { n: '+2,4M', l: 'views orgânicos gerados' },
  { n: '18%', l: 'engajamento médio por post' },
];

const SLOTS = [
  {
    marca: 'Marcelle Nogueira, Sabor Brasileiro',
    logo: '/assets/food-lp/marcelle-logo.png',
    w: 856,
    h: 512,
    alt: 'Logotipo da Marcelle Nogueira',
    pergunta: 'O que mudou no seu negócio depois que a marca ficou pronta?',
  },
  {
    marca: 'Gé Sabores, Bolos Caseiros',
    logo: '/assets/food-lp/ge-logo.png',
    w: 900,
    h: 470,
    alt: 'Logotipo da Gé Sabores',
    pergunta: 'O que você percebeu depois que trocou as fotos?',
  },
];

/* ─── escorrido (divisória de calda) ──────────────────────────────────────── */

const DRIPS = {
  a: 'M0,0 H1200 V16 C1172,16 1170,46 1150,46 C1130,46 1128,16 1100,16 H986 C958,16 954,56 930,56 C906,56 902,16 874,16 H706 C682,16 679,40 662,40 C645,40 642,16 618,16 H436 C406,16 402,60 376,60 C350,60 346,16 316,16 H186 C162,16 159,42 142,42 C125,42 122,16 98,16 H0 Z',
  b: 'M0,0 H1200 V16 C1178,16 1175,40 1158,40 C1141,40 1138,16 1114,16 H930 C900,16 896,58 870,58 C844,58 840,16 810,16 H660 C636,16 633,38 616,38 C599,38 596,16 572,16 H400 C372,16 368,50 344,50 C320,50 316,16 288,16 H120 C96,16 93,44 76,44 C59,44 56,16 32,16 H0 Z',
  c: 'M0,0 H1200 V16 C1166,16 1162,52 1136,52 C1110,52 1106,16 1076,16 H900 C878,16 875,38 858,38 C841,38 838,16 814,16 H648 C618,16 614,58 588,58 C562,58 558,16 528,16 H360 C338,16 335,42 318,42 C301,42 298,16 274,16 H140 C114,16 110,48 86,48 C62,48 58,16 30,16 H0 Z',
};

/**
 * Faixa de calda entre seções. `color` é o molho que escorre (paleta decorativa,
 * teto de 8% da viewport), `to` é o fundo da seção seguinte.
 */
function Drip({ color, to, variant = 'a' }) {
  return (
    <div className="fl-drip" style={{ background: to }} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" focusable="false">
        <path d={DRIPS[variant]} fill={color} />
      </svg>
    </div>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────────── */

function Cta({ className = '' }) {
  return (
    <div className={`fl-cta-group ${className}`}>
      <a className="fl-cta" href={WHATSAPP}>
        {CTA_LABEL}
      </a>
      <p className="fl-cta-micro">{CTA_MICRO}</p>
    </div>
  );
}

/* ─── galeria masonry por colunas ─────────────────────────────────────────── */

function Galeria({ fotos }) {
  return (
    <div className="fl-galeria">
      {fotos.map((f) => (
        <figure className="fl-tile reveal" key={f.src}>
          <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

/* ─── nav ─────────────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fl-nav" aria-label="Principal">
      <a className="fl-nav-mark" href="/">
        <span className="fl-blink" aria-hidden="true" />
        IP, Studio
      </a>
      <a className="fl-cta fl-cta--sm" href={WHATSAPP}>
        {CTA_LABEL}
      </a>
    </nav>
  );
}

/* ─── S1, hero ────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <header className="fl-sec fl-hero">
      <div className="fl-wrap">
        <p className="fl-eyebrow">
          Marketing para o ramo alimentício <span aria-hidden="true">·</span> São Paulo e remoto
        </p>
        <h1 className="fl-h1">
          Quem prova, volta.
          <br />
          Quem só vê, passa direto.
        </h1>
      </div>

      <div className="fl-wrap fl-hero-grid">
        <div className="fl-hero-text">
          <p className="fl-lede">
            Cuido da marca inteira do seu negócio de comida: identidade, fotos, redes, loja e
            anúncio. Pra que quem nunca provou peça mesmo assim.
          </p>
          <Cta />
          <p className="fl-credenciais">
            +4 anos <span aria-hidden="true">·</span> 50+ marcas atendidas{' '}
            <span aria-hidden="true">·</span> +2,4M de views orgânicos
          </p>
        </div>

        <div className="fl-hero-mosaic">
          <figure className="fl-shot fl-shot-a">
            <img
              src="/assets/food/ge/10.webp"
              width="1050"
              height="1400"
              alt="Bolo caseiro coberto por calda de doce de leite escorrendo pela lateral"
              fetchPriority="high"
            />
          </figure>
          <figure className="fl-shot fl-shot-b">
            <img
              src="/assets/food/marcelle/01.webp"
              width="1050"
              height="1400"
              alt="Três croquetes dourados em cesta de vime forrada com papel"
            />
          </figure>
          <figure className="fl-shot fl-shot-c">
            <img
              src="/assets/food/ge/03.webp"
              width="1050"
              height="1400"
              alt="Fatia de bolo de chocolate com calda e morangos frescos ao lado"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </header>
  );
}

/* ─── S2, o problema ──────────────────────────────────────────────────────── */

function Problema() {
  return (
    <section className="fl-sec fl-problema" aria-labelledby="fl-problema-t">
      <div className="fl-wrap fl-narrow">
        <p className="fl-label reveal">01 · Por que o Instagram não vende a sua comida</p>
        <h2 id="fl-problema-t" className="fl-h2 reveal reveal-d2">
          A sua comida convence quem já provou. O problema é o resto do mundo.
        </h2>
        <p className="fl-p reveal reveal-d2">
          Boca a boca funciona, e trava. Quem provou indica, volta, elogia. Mas quem só passou o
          dedo pela tela decide em um segundo, com uma foto tirada às pressas na bancada, uma logo
          feita no Canva e um perfil que não conta direito o que você vende.
        </p>
        <p className="fl-p reveal reveal-d3">
          Comida se decide pelos olhos antes da boca. Se a foto não dá fome, o preço parece caro. Se
          a marca parece amadora, o cliente supõe que a comida também é.
        </p>

        <p className="fl-falas-label reveal">O que eu mais escuto:</p>
        <ul className="fl-falas reveal reveal-d2">
          <li>&ldquo;Todo mundo elogia, mas o perfil não converte.&rdquo;</li>
          <li>&ldquo;Minha comida é boa demais pra foto que eu consigo tirar.&rdquo;</li>
          <li>&ldquo;Já postei tudo. Continua chegando pedido só de conhecido.&rdquo;</li>
        </ul>

        <p className="fl-virada reveal">
          Não é falta de esforço. É que a sua marca ainda não está à altura do que sai da sua
          cozinha.
        </p>
      </div>
    </section>
  );
}

/* ─── S3, serviços ────────────────────────────────────────────────────────── */

function Servicos() {
  return (
    <section className="fl-sec fl-alt" aria-labelledby="fl-servicos-t">
      <div className="fl-wrap">
        <p className="fl-label reveal">02 · O que eu faço</p>
        <h2 id="fl-servicos-t" className="fl-h2 reveal reveal-d2">
          Da logo ao anúncio, uma pessoa só.
        </h2>
        <p className="fl-p fl-p--wide reveal reveal-d3">
          Você não precisa contratar designer, fotógrafo, social media e gestor de tráfego
          separados, e depois torcer pra que as quatro coisas combinem.
        </p>

        <div className="fl-servicos-grid">
          {SERVICOS.map((s) => (
            <article className="fl-comanda reveal" key={s.num}>
              <p className="fl-comanda-num" aria-hidden="true">
                {s.num}
              </p>
              <h3 className="fl-h3">{s.nome}</h3>
              <p className="fl-p fl-p--sm">{s.copy}</p>
              <ul className="fl-itens">
                {s.itens.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="fl-checkup reveal">
          <div className="fl-checkup-text">
            <h3 className="fl-h3">Não sabe por onde começar?</h3>
            <p className="fl-p fl-p--sm">
              Comece pelo checkup de marca. Eu olho o seu Instagram, as suas fotos e o seu produto,
              e te digo numa mensagem o que está travando a venda e o que muda mais rápido. Não
              custa nada.
            </p>
          </div>
          <Cta />
        </div>
      </div>
    </section>
  );
}

/* ─── S4, como funciona ───────────────────────────────────────────────────── */

function ComoFunciona() {
  return (
    <section className="fl-sec" aria-labelledby="fl-como-t">
      <div className="fl-wrap">
        <p className="fl-label reveal">03 · Como funciona</p>
        <h2 id="fl-como-t" className="fl-h2 reveal reveal-d2">
          Três passos. Sem reunião de duas horas.
        </h2>
        <ol className="fl-passos">
          {PASSOS.map((p) => (
            <li className="fl-passo reveal" key={p.num}>
              <span className="fl-passo-num" aria-hidden="true">
                {p.num}
              </span>
              <h3 className="fl-h3 fl-passo-nome">{p.nome}</h3>
              <p className="fl-p fl-p--sm">{p.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── S5, case Marcelle ───────────────────────────────────────────────────── */

function CaseMarcelle() {
  return (
    <section className="fl-sec fl-case" id="marcelle" aria-labelledby="fl-marcelle-t">
      <div className="fl-wrap">
        <div className="fl-case-head">
          <div className="fl-case-intro">
            <p className="fl-label reveal">04 · Case 01</p>
            <img
              className="fl-case-logo reveal reveal-d2"
              src="/assets/food-lp/marcelle-logo.png"
              width="856"
              height="512"
              alt="Logotipo da Marcelle Nogueira, Sabor Brasileiro"
              loading="lazy"
            />
            <h2 id="fl-marcelle-t" className="fl-case-nome reveal reveal-d2">
              Marcelle Nogueira
            </h2>
            <p className="fl-case-meta reveal reveal-d2">
              Salgados e confeitaria brasileira <span aria-hidden="true">·</span> São Paulo
            </p>
          </div>
          <div className="fl-case-copy">
            <p className="fl-p reveal reveal-d2">
              A Marcelle fazia coxinha de salgaderia de verdade e vendia por encomenda, sem marca.
              Não existia logo, não existia embalagem, não existia o nome escrito em lugar nenhum
              além do WhatsApp.
            </p>
            <p className="fl-p reveal reveal-d3">
              Construí a marca inteira: o logotipo em letra gorda e redonda, uma paleta que abre o
              apetite (vermelho, laranja, amarelo e verde, as cores da comida brasileira) e as
              manchas de molho que viraram a assinatura visual. Depois apliquei em tudo que o
              cliente toca: caixa, sacola, marmita, copo, avental, boné, etiqueta.
            </p>
            <p className="fl-p reveal reveal-d3">
              E fotografei os salgados. As oito fotos abaixo são da captação.
            </p>
            <p className="fl-entregues reveal reveal-d4">
              Identidade visual <span aria-hidden="true">·</span> Manual de marca (9 páginas){' '}
              <span aria-hidden="true">·</span> Embalagem e uniforme{' '}
              <span aria-hidden="true">·</span> Fotografia de produto
            </p>
          </div>
        </div>
      </div>

      <ul className="fl-mockups">
        {MOCKUPS.map((m) => (
          <li key={m.src}>
            <figure className="fl-mockup reveal">
              <img src={m.src} width={m.w} height={m.h} alt={m.alt} loading="lazy" />
              <figcaption>{m.legenda}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="fl-wrap">
        <Galeria fotos={MARCELLE_FOTOS} />
      </div>
    </section>
  );
}

/* ─── S6, case Gé Sabores ─────────────────────────────────────────────────── */

function CaseGe() {
  return (
    <section className="fl-sec fl-case fl-case--rev" id="ge" aria-labelledby="fl-ge-t">
      <div className="fl-wrap">
        <div className="fl-case-head">
          <div className="fl-case-intro">
            <p className="fl-label reveal">05 · Case 02</p>
            <img
              className="fl-case-logo fl-case-logo--ge reveal reveal-d2"
              src="/assets/food-lp/ge-logo.png"
              width="900"
              height="470"
              alt="Logotipo da Gé Sabores, Bolos Caseiros"
              loading="lazy"
            />
            <h2 id="fl-ge-t" className="fl-case-nome reveal reveal-d2">
              Gé Sabores
            </h2>
            <p className="fl-case-meta reveal reveal-d2">
              Bolos caseiros e bolo no pote <span aria-hidden="true">·</span> São Paulo
            </p>
          </div>
          <div className="fl-case-copy">
            <p className="fl-p reveal reveal-d2">
              A Gé já tinha marca e já tinha clientela. O que faltava era a foto acompanhar o bolo.
            </p>
            <p className="fl-p reveal reveal-d3">
              Bolo no pote é difícil de fotografar: o plástico reflete, as camadas somem e a luz da
              cozinha deixa tudo amarelo. O trabalho foi achar o ângulo em que as camadas aparecem
              inteiras (massa, recheio, massa, recheio) e a luz em que o doce de leite brilha sem
              estourar.
            </p>
            <p className="fl-p reveal reveal-d3">
              Quinze fotos, feitas para o feed, para o cardápio e para o anúncio.
            </p>
            <p className="fl-entregues reveal reveal-d4">
              Fotografia de produto <span aria-hidden="true">·</span> Direção de conteúdo{' '}
              <span aria-hidden="true">·</span> Feed
            </p>
          </div>
        </div>

        <Galeria fotos={GE_FOTOS} />
      </div>
    </section>
  );
}

/* ─── S7, quem faz ────────────────────────────────────────────────────────── */

function QuemFaz() {
  return (
    <section className="fl-sec fl-alt" aria-labelledby="fl-quemfaz-t">
      <div className="fl-wrap fl-quemfaz-grid">
        <figure className="fl-retrato reveal">
          <img
            src="/assets/isabelly.jpg"
            width="900"
            height="1100"
            alt="Isabelly Paiva"
            loading="lazy"
          />
          <figcaption>
            Isabelly Paiva <span aria-hidden="true">·</span> São Paulo, BR
          </figcaption>
        </figure>
        <div className="fl-quemfaz-text">
          <p className="fl-label reveal">06 · Quem faz</p>
          <h2 id="fl-quemfaz-t" className="fl-h2 reveal reveal-d2">
            Oi, eu sou a Isabelly.
          </h2>
          <p className="fl-p reveal reveal-d2">
            Trabalho com marketing digital há mais de quatro anos, em São Paulo. Já passei por mais
            de 50 marcas, de beleza a serviço, e o que mais me diverte é comida. É o único produto
            que você precisa fazer alguém sentir sem poder oferecer.
          </p>
          <p className="fl-p reveal reveal-d3">
            Eu mesma faço tudo: desenho a marca, fotografo o produto, edito o vídeo e rodo o
            anúncio. Você fala com uma pessoa só, e é a mesma pessoa que aperta o botão.
          </p>
          <dl className="fl-numeros reveal reveal-d4">
            {NUMEROS.map((m) => (
              <div className="fl-numero" key={m.l}>
                <dt>{m.n}</dt>
                <dd>{m.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─── S8, depoimentos (slots à espera de fala real) ───────────────────────── */

function Depoimentos() {
  return (
    <section className="fl-sec" aria-labelledby="fl-depo-t">
      <div className="fl-wrap">
        <p className="fl-label reveal">07 · O que elas dizem</p>
        <h2 id="fl-depo-t" className="fl-h2 reveal reveal-d2">
          Nas palavras de quem cozinha.
        </h2>
        <div className="fl-depo-grid">
          {SLOTS.map((s) => (
            <article className="fl-slot reveal" key={s.marca}>
              <p className="fl-slot-tag">Depoimento em coleta</p>
              <p className="fl-slot-q">&ldquo;{s.pergunta}&rdquo;</p>
              <div className="fl-slot-foot">
                <img src={s.logo} width={s.w} height={s.h} alt={s.alt} loading="lazy" />
                <span>{s.marca}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── S9, para quem é ─────────────────────────────────────────────────────── */

function ParaQuem() {
  return (
    <section className="fl-paraquem" aria-labelledby="fl-paraquem-t">
      <h2 id="fl-paraquem-t" className="fl-sr">
        Para quem é
      </h2>
      <p className="fl-sr">{SEGMENTOS.join(', ')}.</p>
      <div className="fl-marquee" aria-hidden="true">
        <span className="fl-marquee-track">
          {[0, 1].map((rep) => (
            <span className="fl-marquee-set" key={rep}>
              {SEGMENTOS.map((s) => (
                <React.Fragment key={s}>
                  <span>{s}</span>
                  <span className="fl-losango">◆</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </span>
      </div>
      <p className="fl-paraquem-nota reveal">
        De quem vende no WhatsApp a quem já tem loja. São Paulo presencialmente, Brasil inteiro
        remoto.
      </p>
    </section>
  );
}

/* ─── S10, perguntas ──────────────────────────────────────────────────────── */

function Perguntas() {
  return (
    <section className="fl-sec fl-alt" aria-labelledby="fl-perguntas-t">
      <div className="fl-wrap fl-narrow">
        <p className="fl-label reveal">08 · Perguntas</p>
        <h2 id="fl-perguntas-t" className="fl-h2 reveal reveal-d2">
          O que todo mundo pergunta antes de chamar.
        </h2>
        <Faq items={PERGUNTAS} />
      </div>
    </section>
  );
}

/* ─── S11, fechamento ─────────────────────────────────────────────────────── */

function Fechamento() {
  return (
    <section className="fl-fecho" aria-labelledby="fl-fecho-t">
      <div className="fl-wrap">
        <h2 id="fl-fecho-t" className="fl-h1 fl-fecho-t reveal">
          A sua comida já está pronta.
          <br />
          Vamos deixar a marca à altura.
        </h2>
        <Cta className="fl-cta-group--center reveal reveal-d2" />

        <footer className="fl-footer">
          <span>© 2026, Isabelly Paiva</span>
          <span className="fl-footer-mid">Quem prova, volta.</span>
          <span className="fl-footer-links">
            <a href="/">
              Portfólio <span aria-hidden="true">↗</span>
            </a>
            <a href="/food">
              Galeria de comida <span aria-hidden="true">↗</span>
            </a>
          </span>
        </footer>
        <a
          className="fl-email"
          href="mailto:isabelly.paivaassessoria@gmail.com?subject=Marca%20de%20comida"
        >
          isabelly.paivaassessoria@gmail.com
        </a>
      </div>
    </section>
  );
}

/* ─── página ──────────────────────────────────────────────────────────────── */

export default function FoodLpPage() {
  return (
    <RevealRoot>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Drip color="var(--fl-molho-amarelo)" to="var(--fl-bg-alt)" variant="a" />
        <Servicos />
        <ComoFunciona />
        <Drip color="var(--fl-molho-vermelho)" to="var(--fl-bg)" variant="b" />
        <CaseMarcelle />
        <CaseGe />
        <Drip color="var(--fl-molho-amarelo)" to="var(--fl-bg-alt)" variant="c" />
        <QuemFaz />
        <Depoimentos />
        <Drip color="var(--fl-molho-vermelho)" to="var(--fl-bg)" variant="b" />
        <ParaQuem />
        <Perguntas />
        <Fechamento />
      </main>
    </RevealRoot>
  );
}
