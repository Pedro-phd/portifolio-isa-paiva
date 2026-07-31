import Image from 'next/image';
import GastronomicMotion from '@/components/gastronomic-motion';

const LAYERS = '/assets/barra-gastronomica/layers';
const GENERATED = '/assets/barra-gastronomica/generated';

const SERVICES = [
  'Captação de imagens',
  'Tratamento de imagem',
  'Elaboração de cardápio',
  'Criação da sua presença digital',
  'Foco em delivery',
  'Gravação e edição de vídeos',
  'Elaboração de sites',
];

const MARCELLE_COLORS = ['#c4000d', '#ff7100', '#efd09e', '#00884e'];
const GE_COLORS = ['#c74764', '#d8788d', '#efb9b4', '#8d4c2d', '#f9ecdc'];

const GALLERY_SEVEN = Array.from(
  { length: 9 },
  (_, index) => `${LAYERS}/gallery-7-${index + 1}.webp`,
);

const GALLERY_EIGHT = Array.from(
  { length: 9 },
  (_, index) => `${LAYERS}/gallery-8-${index + 1}.webp`,
);

function Piece({
  src,
  alt,
  className = '',
  motion = 'up',
  delay = 0,
  sizes = '(max-width: 899px) 70vw, 42vw',
  eager = false,
}) {
  return (
    <div
      className={`gp-piece gp-image-piece ${className}`}
      data-motion={motion}
      style={{ '--gp-delay': `${delay}ms` }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} loading={eager ? 'eager' : undefined} />
    </div>
  );
}

function TextPiece({ children, className = '', motion = 'up', delay = 0 }) {
  return (
    <div
      className={`gp-piece ${className}`}
      data-motion={motion}
      style={{ '--gp-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function BrandRule() {
  return (
    <TextPiece className="gp-brand-rule" motion="down" delay={40}>
      <span className="gp-brand">paiva<br />&amp;co.</span>
      <span className="gp-rule" aria-hidden="true" />
      <span className="gp-brand-mini">p&amp;c</span>
    </TextPiece>
  );
}

function Dots({ className = '' }) {
  return (
    <div className={`gp-dots ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="gp-section gp-section--hero" id="capa" aria-labelledby="gp-hero-title">
      <div className="gp-scene">
        <Piece
          src={`${LAYERS}/hero-flour.webp`}
          alt="Tigela com farinha"
          className="gp-hero-flour"
          motion="left"
          delay={0}
          sizes="25vw"
        />
        <Piece
          src={`${GENERATED}/hero-whisk.png`}
          alt="Batedor de arame"
          className="gp-hero-whisk"
          motion="right"
          delay={90}
          sizes="38vw"
        />
        <TextPiece className="gp-hero-dots" motion="scale" delay={190}>
          <Dots />
        </TextPiece>
        <TextPiece className="gp-hero-copy" motion="up" delay={240}>
          <p className="gp-kicker"><span />Estratégia + design<span /></p>
          <h1 id="gp-hero-title">Portfólio<br /><strong>Gastronômico</strong></h1>
          <span className="gp-year">2026</span>
          <p className="gp-hero-lede">
            Marcas de alimentos feitas para <em>dar<br className="gp-mobile-break" /> água na boca.</em>
          </p>
        </TextPiece>
        <Piece
          src={`${LAYERS}/hero-bowl-v2.webp`}
          alt="Chocolate e espátula de confeitaria"
          className="gp-hero-bowl"
          motion="left"
          delay={330}
          sizes="30vw"
        />
        <Piece
          src={`${LAYERS}/hero-tools.webp`}
          alt="Saco de confeitar, flores de açúcar e utensílios"
          className="gp-hero-tools"
          motion="up"
          delay={390}
          sizes="(max-width: 899px) 100vw, 68vw"
          eager
        />
        <Piece
          src={`${GENERATED}/hero-spatula.png`}
          alt=""
          className="gp-hero-spatula"
          motion="left"
          delay={470}
          sizes="22vw"
        />
        <Piece
          src={`${GENERATED}/hero-flowers.png`}
          alt=""
          className="gp-hero-flowers"
          motion="scale"
          delay={540}
          sizes="24vw"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="gp-section gp-section--about" id="sobre" aria-labelledby="gp-about-title">
      <div className="gp-scene">
        <BrandRule />
        <Piece
          src={`${LAYERS}/about-portrait.webp`}
          alt="Retrato de Isabelly Paiva"
          className="gp-about-portrait"
          motion="left"
          delay={90}
          sizes="(max-width: 899px) 56vw, 38vw"
        />
        <TextPiece className="gp-about-copy" motion="right" delay={180}>
          <Dots />
          <p className="gp-eyebrow">Olá! Sou</p>
          <h2 id="gp-about-title">Isabelly Paiva.</h2>
          <span className="gp-short-rule" aria-hidden="true" />
          <p>Olhar criativo, sensível e estratégico para criar imagens que contam histórias.</p>
          <p>
            Graduada em Marketing e especializada em tratamento de imagem e fotografia de
            alimentos, uno estratégia e direção criativa para valorizar marcas e produtos.
          </p>
        </TextPiece>
        <Piece
          src={`${LAYERS}/about-polaroids.webp`}
          alt="Bastidores de produção, food styling e captação"
          className="gp-about-polaroids"
          motion="tilt"
          delay={300}
          sizes="(max-width: 899px) 65vw, 40vw"
        />
        <TextPiece className="gp-about-skills" motion="up" delay={350}>
          <h3>Especializações</h3>
          <ul>
            <li>Tratamento de Imagem</li>
            <li>Fotografia de Alimentos</li>
            <li>Direção Criativa</li>
            <li>Marketing Digital</li>
          </ul>
          <h3>Softwares</h3>
          <p>Photoshop&nbsp; • &nbsp;Lightroom<br />Illustrator&nbsp; • &nbsp;CapCut</p>
        </TextPiece>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="gp-section gp-section--services" id="servicos" aria-labelledby="gp-services-title">
      <div className="gp-scene">
        <TextPiece className="gp-vertical-label" motion="right" delay={40}>
          <span />Identidade visual
        </TextPiece>
        <TextPiece className="gp-services-title" motion="scale" delay={110}>
          <h2 id="gp-services-title">
            Desenhando<br />uma<br /><strong>marca do zero</strong>
          </h2>
        </TextPiece>
        <ul className="gp-services-grid">
          {SERVICES.map((service, index) => (
            <li
              className="gp-piece"
              data-motion="up"
              style={{ '--gp-delay': `${260 + index * 55}ms` }}
              key={service}
            >
              <span aria-hidden="true" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Palette({ colors }) {
  return (
    <div className="gp-palette" aria-label="Paleta da marca">
      {colors.map((color) => (
        <span key={color} style={{ '--gp-swatch': color }} />
      ))}
    </div>
  );
}

function MarcelleSection() {
  return (
    <section className="gp-section gp-section--marcelle" id="marcelle" aria-labelledby="gp-marcelle-title">
      <div className="gp-scene">
        <TextPiece className="gp-case-label" motion="left" delay={0}>Identidade visual</TextPiece>
        <TextPiece className="gp-marcelle-meta" motion="up" delay={70}>
          <strong>Projeto 01</strong><span>/</span> Gastronomia brasileira
        </TextPiece>
        <Piece
          src={`${LAYERS}/marcelle-logo.webp`}
          alt="Marcelle Nogueira, sabor brasileiro"
          className="gp-marcelle-logo"
          motion="scale"
          delay={120}
          sizes="(max-width: 899px) 55vw, 40vw"
        />
        <TextPiece className="gp-marcelle-copy" motion="left" delay={190}>
          <h2 id="gp-marcelle-title">Identidade visual</h2>
          <p>
            A identidade visual da Marcelle Nogueira foi criada para ser uma marca viva, versátil
            e atemporal, sem se limitar à representação de um único alimento. Inspirada na riqueza
            da gastronomia brasileira, sua identidade utiliza cores quentes e vibrantes que
            despertam sensações de fome, alegria e acolhimento. O resultado é uma marca com
            personalidade, capaz de transmitir a paixão pela culinária e se adaptar ao crescimento
            da marca sem perder sua essência.
          </p>
          <h3>Paleta da marca</h3>
          <Palette colors={MARCELLE_COLORS} />
        </TextPiece>
        <Piece
          src={`${LAYERS}/marcelle-hat.webp`}
          alt="Boné com a identidade Marcelle Nogueira"
          className="gp-marcelle-hat"
          motion="right"
          delay={180}
          sizes="32vw"
        />
        <Piece
          src={`${LAYERS}/marcelle-box.webp`}
          alt="Embalagem com a identidade Marcelle Nogueira"
          className="gp-marcelle-box"
          motion="right"
          delay={250}
          sizes="32vw"
        />
        <Piece
          src={`${LAYERS}/marcelle-carry.webp`}
          alt="Caixa para viagem com a identidade Marcelle Nogueira"
          className="gp-marcelle-carry"
          motion="right"
          delay={320}
          sizes="32vw"
        />
        <Piece
          src={`${LAYERS}/marcelle-collection-v2.webp`}
          alt="Coleção de uniformes e embalagens Marcelle Nogueira"
          className="gp-marcelle-collection"
          motion="up"
          delay={390}
          sizes="(max-width: 899px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}

function GeSection() {
  return (
    <section className="gp-section gp-section--ge" id="ge-sabores" aria-labelledby="gp-ge-title">
      <div className="gp-scene">
        <TextPiece className="gp-case-label gp-case-label--ge" motion="left" delay={0}>
          Branding
        </TextPiece>
        <TextPiece className="gp-ge-meta" motion="up" delay={60}>
          Projeto 02 <span>/</span> Bolos caseiros
        </TextPiece>
        <Piece
          src={`${LAYERS}/ge-logo.webp`}
          alt="Gé Sabores, bolos caseiros"
          className="gp-ge-logo"
          motion="scale"
          delay={120}
          sizes="(max-width: 899px) 72vw, 42vw"
        />
        <TextPiece className="gp-ge-copy" motion="left" delay={190}>
          <h2 id="gp-ge-title">Identidade visual</h2>
          <p>
            A identidade visual da Gé Sabores foi desenvolvida para transmitir a essência do sabor
            caseiro e do afeto presente em cada receita. Inspirada nas memórias de um café em
            família e no carinho de um bolo feito em casa, a marca combina delicadeza, acolhimento e
            proximidade. Cada elemento foi pensado para reforçar a ideia de que cada receita é
            preparada com o mesmo cuidado e carinho de um bolo da minha família para a sua.
          </p>
          <h3>Paleta da marca</h3>
          <Palette colors={GE_COLORS} />
        </TextPiece>
        <Piece
          src={`${LAYERS}/ge-collection-v2.webp`}
          alt="Coleção de embalagens e uniformes Gé Sabores"
          className="gp-ge-collection"
          motion="up"
          delay={300}
          sizes="(max-width: 899px) 100vw, 58vw"
        />
      </div>
    </section>
  );
}

function PhotographySection() {
  return (
    <section className="gp-section gp-section--photo" id="fotografia" aria-labelledby="gp-photo-title">
      <div className="gp-scene">
        <TextPiece className="gp-photo-copy" motion="down" delay={60}>
          <h2 id="gp-photo-title"><span>Fotografia</span><strong>Profissional</strong></h2>
          <p className="gp-photo-ribbon">Gastronômica e de produtos</p>
          <p className="gp-photo-features">Luz <i /> Composição <i /> Detalhes</p>
        </TextPiece>
        <Piece
          src={`${LAYERS}/camera-v2.webp`}
          alt="Câmera fotográfica profissional"
          className="gp-camera"
          motion="left"
          delay={230}
          sizes="(max-width: 899px) 96vw, 62vw"
        />
      </div>
    </section>
  );
}

function GallerySection({ number, images, title }) {
  return (
    <section
      className={`gp-section gp-section--gallery gp-section--gallery-${number}`}
      id={`galeria-${number}`}
    >
      <h2 className="gp-sr">{title}</h2>
      <div className="gp-scene gp-gallery-grid">
        {images.map((src, index) => (
          <Piece
            src={src}
            alt={`${title}, fotografia ${index + 1}`}
            className={`gp-gallery-item gp-gallery-item--${index + 1}`}
            motion={index % 3 === 0 ? 'left' : index % 3 === 2 ? 'right' : 'up'}
            delay={index * 55}
            sizes="(max-width: 899px) 34vw, 30vw"
            key={src}
          />
        ))}
      </div>
    </section>
  );
}

function DeliverySection() {
  const FEATURES = [
    ['Fotos profissionais', 'para valorizar os produtos.'],
    ['Cadastro estratégico', 'para aumentar as pesquisas.'],
    ['Cardápio organizado', 'para facilitar a escolha.'],
    ['Apresentação pensada', 'para destacar da concorrência.'],
  ];

  return (
    <section className="gp-section gp-section--delivery" id="delivery" aria-labelledby="gp-delivery-title">
      <div className="gp-scene">
        <TextPiece className="gp-delivery-copy" motion="down" delay={20}>
          <span className="gp-delivery-brand">paiva&amp;co.</span>
          <p className="gp-delivery-pill">Nova fase do seu delivery</p>
          <h2 id="gp-delivery-title">
            Um delivery que<br />atrai, conquista e<br /><em>vende</em> todos os dias.
          </h2>
          <p>
            Transformamos perfis comuns em vitrines que geram desejo,<br />
            aparecem nas pesquisas e vendem mais que a concorrência.
          </p>
        </TextPiece>
        <Piece
          src={`${LAYERS}/delivery-phones-clean.webp`}
          alt="Cardápio digital Gé Sabores exibido em dois celulares"
          className="gp-delivery-phones"
          motion="up"
          delay={220}
          sizes="(max-width: 899px) 85vw, 56vw"
        />
        <TextPiece className="gp-delivery-heading" motion="up" delay={330}>
          O que fizemos pela <em>Gé Sabores</em>
        </TextPiece>
        <div className="gp-delivery-features">
          {FEATURES.map(([title, body], index) => (
            <div
              className="gp-piece gp-delivery-feature"
              data-motion="up"
              style={{ '--gp-delay': `${390 + index * 65}ms` }}
              key={title}
            >
              <span className="gp-delivery-icon">
                <Image
                  src={`${LAYERS}/delivery-icon-${index + 1}.webp`}
                  alt=""
                  fill
                  sizes="8vw"
                />
              </span>
              <strong>{title}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
        <TextPiece className="gp-delivery-closing" motion="scale" delay={650}>
          O que fizemos por esse delivery,<br />podemos fazer pelo <em>seu também.</em>
        </TextPiece>
      </div>
    </section>
  );
}

function SiteSection() {
  return (
    <section className="gp-section gp-section--site" id="site" aria-labelledby="gp-site-title">
      <div className="gp-scene">
        <TextPiece className="gp-site-copy" motion="down" delay={40}>
          <span>paiva&amp;co.</span>
          <h2 id="gp-site-title">Ou crie o seu<br /><em>próprio delivery.</em></h2>
          <p>Um site com a sua cara, cardápio organizado<br />e pedido direto no WhatsApp.</p>
        </TextPiece>
        <Piece
          src={`${LAYERS}/site-monitor.webp`}
          alt="Site de pedidos gastronômicos exibido em um computador"
          className="gp-site-monitor"
          motion="up"
          delay={250}
          sizes="(max-width: 899px) 100vw, 62vw"
        />
      </div>
    </section>
  );
}

export default function GastronomicPortfolio() {
  return (
    <GastronomicMotion>
      <main className="gp-page">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MarcelleSection />
        <GeSection />
        <PhotographySection />
        <GallerySection
          number={7}
          images={GALLERY_SEVEN}
          title="Galeria de fotografia de salgados"
        />
        <GallerySection
          number={8}
          images={GALLERY_EIGHT}
          title="Galeria de fotografia de bolos caseiros"
        />
        <DeliverySection />
        <SiteSection />
      </main>
    </GastronomicMotion>
  );
}
