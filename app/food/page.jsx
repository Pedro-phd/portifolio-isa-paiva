import Image from 'next/image';
import FoodMotion from './food-motion';

export const metadata = {
  title: 'Portfólio Gastronômico 2026 - Isabelly Paiva',
  description:
    'Direção criativa, identidade visual e fotografia gastronômica por Isabelly Paiva.',
};

const SECTIONS = [
  { id: 'capa', label: 'Capa' },
  { id: 'sobre', label: 'Sobre Isabelly' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'marcelle', label: 'Marcelle Nogueira' },
  { id: 'ge-sabores', label: 'Gé Sabores' },
  { id: 'fotografia', label: 'Fotografia profissional' },
  { id: 'galeria-ge', label: 'Galeria Gé Sabores' },
  { id: 'galeria-marcelle', label: 'Galeria Marcelle Nogueira' },
];

const SERVICE_LABELS = [
  'Captação de imagens',
  'Tratamento de imagem',
  'Elaboração de cardápio',
  'Criação da sua presença digital',
  'Foco em delivery',
  'Gravação e edição de vídeos',
  'Elaboração de sites',
];

const GE_GALLERY = [
  {
    src: '/assets/food/ge-hq/01.jpeg',
    alt: 'Bolo de chocolate com cobertura cremosa e morangos',
  },
  {
    src: '/assets/food/ge-hq/02.jpeg',
    alt: 'Fatia de bolo de chocolate com cobertura e morango',
  },
  {
    src: '/assets/food/ge-hq/03.jpeg',
    alt: 'Bolo caseiro com calda de doce de leite',
  },
  {
    src: '/assets/food/ge-hq/04.jpg',
    alt: 'Bolos caseiros com cobertura de chocolate',
  },
];

const MARCELLE_GALLERY = [
  {
    src: '/assets/food/marcelle-hq/01.png',
    alt: 'Salgado aberto mostrando o recheio cremoso',
  },
  {
    src: '/assets/food/marcelle-hq/02.png',
    alt: 'Salgado aberto diante de uma cesta e uma lata de refrigerante',
  },
  {
    src: '/assets/food/marcelle-hq/03.png',
    alt: 'Três salgados dourados em uma cesta de vime',
  },
  {
    src: '/assets/food/marcelle-hq/04.png',
    alt: 'Salgado de chocolate aberto entre duas mãos',
  },
  {
    src: '/assets/food/marcelle-hq/05.png',
    alt: 'Salgado dourado segurado sobre uma cesta',
  },
];

function SectionArt({ number, alt, priority = false }) {
  return (
    <Image
      className="rf-art"
      src={`/assets/food-reference/section-${number}-clean.png`}
      alt={alt}
      fill
      sizes="100vw"
      preload={priority}
      unoptimized
    />
  );
}

function GalleryGrid({ collection, images }) {
  return (
    <div className={`rf-gallery-grid rf-gallery-grid--${collection}`}>
      {images.map((image, index) => (
        <figure className="rf-gallery-item" key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              collection === 'ge'
                ? '(max-width: 560px) 75vw, 45vw'
                : index === images.length - 1
                  ? '(max-width: 560px) 92vw, 34vw'
                  : '(max-width: 560px) 46vw, 34vw'
            }
            quality={95}
          />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </figure>
      ))}
    </div>
  );
}

function Palette({ colors }) {
  return (
    <div className="rf-palette" aria-label="Paleta da marca">
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          className="rf-swatch"
          style={{ '--swatch': color }}
          data-copy-color={color}
          aria-label={`Copiar a cor ${color}`}
        />
      ))}
      <span className="rf-copy-status" aria-live="polite" />
    </div>
  );
}

function Hero() {
  return (
    <section className="rf-section rf-section--1 rf-dark" id="capa" aria-labelledby="rf-hero-title">
      <SectionArt
        number="01"
        priority
        alt="Composição de confeitaria com macarons, chocolates, morangos e utensílios"
      />
      <nav className="rf-hero-dots" aria-label="Atalhos do portfólio">
        {SECTIONS.slice(1, 4).map((section, index) => (
          <a
            key={section.id}
            className={`rf-dot rf-dot--${index + 1}`}
            href={`#${section.id}`}
            aria-label={`Ir para ${section.label}`}
          />
        ))}
      </nav>

      <div className="rf-hero-copy">
        <p className="rf-kicker rf-reveal">Estratégia&nbsp; + &nbsp;Design</p>
        <h1 className="rf-hero-title" id="rf-hero-title">
          <span className="rf-reveal rf-delay-1">Portfólio</span>
          <strong className="rf-reveal rf-delay-2">Gastronômico</strong>
        </h1>
        <span className="rf-year rf-reveal rf-delay-3">2026</span>
        <p className="rf-hero-subtitle rf-reveal rf-delay-3">
          Marcas de alimentos feitas para <em>dar água na boca.</em>
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="rf-section rf-section--2 rf-light" id="sobre" aria-labelledby="rf-about-title">
      <SectionArt
        number="02"
        alt="Isabelly Paiva ao lado de três fotos de bastidores de produção gastronômica"
      />
      <div className="rf-made-by rf-reveal">Feito por Isa <span aria-hidden="true">↘</span></div>

      <div className="rf-about-copy">
        <h2 className="rf-about-title rf-reveal" id="rf-about-title">
          Olá! Sou Isabelly Paiva<span>.</span>
        </h2>
        <div className="rf-about-bio rf-reveal rf-delay-1">
          <p>
            Não importa se estou trabalhando, estudando ou simplesmente observando o mundo ao meu
            redor. Meu olhar sempre acaba procurando luz, composição, cores e detalhes que podem
            contar uma história.
          </p>
          <p>
            Sou graduada em Marketing e especializada em tratamento de imagem e fotografia de
            alimentos, unindo estratégia e direção criativa para desenvolver conteúdos que
            valorizam marcas e produtos.
          </p>
        </div>
      </div>

      <div className="rf-about-skills rf-reveal rf-delay-2">
        <div>
          <h3>Especializações</h3>
          <ul>
            <li>Tratamento de Imagem</li>
            <li>Fotografia de Alimentos</li>
            <li>Direção Criativa</li>
            <li>Marketing Digital</li>
          </ul>
        </div>
        <div className="rf-softwares">
          <h3>Softwares</h3>
          <p>Photoshop <span>•</span> Lightroom <span>•</span> Illustrator <span>•</span> CapCut</p>
        </div>
      </div>

      <div className="rf-polaroid-label rf-polaroid-label--1 rf-reveal">Produção</div>
      <div className="rf-polaroid-label rf-polaroid-label--2 rf-reveal rf-delay-1">Food styling</div>
      <div className="rf-polaroid-label rf-polaroid-label--3 rf-reveal rf-delay-2">Bastidores</div>
    </section>
  );
}

function Services() {
  return (
    <section
      className="rf-section rf-section--3 rf-dark"
      id="servicos"
      aria-labelledby="rf-services-title"
    >
      <SectionArt number="03" alt="" />
      <h2 className="rf-services-title" id="rf-services-title">
        <span className="rf-reveal">Desenhando uma</span>
        <strong className="rf-reveal rf-delay-1">marca do zero</strong>
      </h2>
      <span className="rf-stamp rf-reveal rf-delay-2">Identidade<br />visual</span>

      <ul className="rf-service-list" aria-label="Serviços disponíveis">
        {SERVICE_LABELS.map((label, index) => (
          <li className="rf-reveal" style={{ '--item-delay': `${index * 45}ms` }} key={label}>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}

function MarcelleCase() {
  return (
    <section
      className="rf-section rf-section--4 rf-light"
      id="marcelle"
      aria-labelledby="rf-marcelle-title"
    >
      <SectionArt
        number="04"
        alt="Aplicações da identidade Marcelle Nogueira em roupas, embalagens e itens de delivery"
      />
      <div className="rf-case-copy rf-case-copy--marcelle">
        <span className="rf-pill rf-reveal">Identidade visual</span>
        <p className="rf-project-meta rf-reveal rf-delay-1">
          <strong>Projeto 01</strong><span>/</span> Gastronomia brasileira
        </p>
        <h2 className="rf-marcelle-logo rf-reveal rf-delay-1" id="rf-marcelle-title">
          <Image
            src="/assets/food-lp/marcelle-logo.png"
            alt="Marcelle Nogueira - Sabor brasileiro"
            width={856}
            height={512}
            sizes="(max-width: 560px) 56vw, (max-width: 900px) 46vw, 26vw"
            unoptimized
          />
        </h2>
        <h3 className="rf-case-heading rf-reveal rf-delay-2">Identidade visual</h3>
        <p className="rf-case-description rf-reveal rf-delay-2">
          A identidade visual da Marcelle Nogueira foi criada para ser uma marca viva, versátil e
          atemporal, sem se limitar à representação de um único alimento. Inspirada na riqueza da
          gastronomia brasileira, sua identidade utiliza cores quentes e vibrantes que despertam
          sensações de fome, alegria e acolhimento. O resultado é uma marca com personalidade,
          capaz de transmitir a paixão pela culinária e se adaptar ao crescimento da marca sem
          perder sua essência.
        </p>
        <div className="rf-palette-block rf-reveal rf-delay-3">
          <span>Paleta da marca</span>
          <Palette colors={['#bd1716', '#f56b08', '#f1d4a6', '#147347']} />
        </div>
      </div>
    </section>
  );
}

function GeCase() {
  return (
    <section
      className="rf-section rf-section--5 rf-dark"
      id="ge-sabores"
      aria-labelledby="rf-ge-title"
    >
      <SectionArt
        number="05"
        alt="Aplicações da identidade Gé Sabores em roupas, embalagens e itens de confeitaria"
      />
      <span className="rf-pill rf-pill--ge rf-reveal">Branding</span>
      <div className="rf-case-copy rf-case-copy--ge">
        <p className="rf-project-meta rf-reveal">
          Projeto 02 <span>/</span> Bolos caseiros
        </p>
        <h2 className="rf-ge-logo rf-reveal rf-delay-1" id="rf-ge-title">
          <Image
            src="/assets/food-lp/ge-logo.png"
            alt="Gé Sabores - Bolos caseiros"
            width={900}
            height={470}
            sizes="(max-width: 560px) 72vw, (max-width: 900px) 42vw, 26vw"
            unoptimized
          />
        </h2>
        <h3 className="rf-case-heading rf-reveal rf-delay-2">Identidade visual</h3>
        <p className="rf-case-description rf-reveal rf-delay-2">
          A identidade visual da Gé Sabores foi desenvolvida para transmitir a essência do sabor
          caseiro e do afeto presente em cada receita. Inspirada nas memórias de um café em família
          e no carinho de um bolo feito em casa, a marca combina delicadeza, acolhimento e
          proximidade. Cada elemento foi pensado para reforçar a ideia de que cada receita é
          preparada com o mesmo cuidado e carinho de um bolo da minha família para a sua.
        </p>
        <div className="rf-palette-block rf-reveal rf-delay-3">
          <span>Paleta da marca</span>
          <Palette colors={['#b7586c', '#e8b4aa', '#fff2df', '#563227']} />
        </div>
      </div>
    </section>
  );
}

function Photography() {
  return (
    <section
      className="rf-section rf-section--6 rf-light"
      id="fotografia"
      aria-labelledby="rf-photo-title"
    >
      <SectionArt number="06" alt="Duas câmeras profissionais em uma composição gráfica" />
      <div className="rf-photo-copy">
        <h2 className="rf-photo-title" id="rf-photo-title">
          <span className="rf-reveal">Fotografia</span>
          <strong className="rf-reveal rf-delay-1">Profissional</strong>
        </h2>
        <p className="rf-photo-ribbon rf-reveal rf-delay-2">Gastronômica&nbsp; e de&nbsp; produtos</p>
        <p className="rf-photo-features rf-reveal rf-delay-3">
          Luz <span>•</span> Composição <span>•</span> Detalhes
        </p>
      </div>
    </section>
  );
}

function DarkGallery() {
  return (
    <section
      className="rf-section rf-section--7 rf-dark"
      id="galeria-ge"
      aria-labelledby="rf-gallery-dark-title"
    >
      <GalleryGrid collection="ge" images={GE_GALLERY} />
      <h2 className="rf-gallery-title rf-gallery-title--dark rf-reveal" id="rf-gallery-dark-title">
        <span />
        Galeria fotográfica
      </h2>
    </section>
  );
}

function LightGallery() {
  return (
    <section
      className="rf-section rf-section--8 rf-light"
      id="galeria-marcelle"
      aria-labelledby="rf-gallery-light-title"
    >
      <GalleryGrid collection="marcelle" images={MARCELLE_GALLERY} />
      <h2 className="rf-gallery-title rf-gallery-title--light rf-reveal" id="rf-gallery-light-title">
        Galeria fotográfica
      </h2>
    </section>
  );
}

export default function FoodPage() {
  return (
    <FoodMotion>
      <main className="rf-page">
        <Hero />
        <About />
        <Services />
        <MarcelleCase />
        <GeCase />
        <Photography />
        <DarkGallery />
        <LightGallery />
      </main>
    </FoodMotion>
  );
}
