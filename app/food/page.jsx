import Image from 'next/image';
import {
  CameraIcon,
  ChartBarIcon,
  ListBulletsIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react/ssr';
import FoodMotion from '@/components/food-motion';
import styles from './food.module.css';

const ASSET_ROOT = '/assets/food-hero-generated';
const MARCELLE_ASSET_ROOT = `${ASSET_ROOT}/marcelle`;
const GE_ASSET_ROOT = `${ASSET_ROOT}/ge-sabores`;
const PHOTOGRAPHY_ASSET_ROOT = `${ASSET_ROOT}/photography`;
const FOOD_GALLERY_ASSET_ROOT = `${ASSET_ROOT}/food-gallery`;
const DELIVERY_ASSET_ROOT = `${ASSET_ROOT}/delivery`;
const SITE_MONITOR_ASSET = '/assets/barra-gastronomica/layers/site-monitor.webp';

const FOOD_GALLERY_IMAGES = [
  {
    file: '01.jpg',
    alt: 'Três coxinhas redondas sobre uma esteira de bambu',
  },
  {
    file: '02.jpg',
    alt: 'Coxinha aberta com recheio de creme de avelã',
  },
  {
    file: '03.jpg',
    alt: 'Coxinha aberta com recheio de doce de leite',
  },
  {
    file: '04.jpg',
    alt: 'Coxinha aberta com recheio de frango desfiado',
  },
  {
    file: '05.jpg',
    alt: 'Coxinha redonda segurada diante de outras coxinhas',
  },
  {
    file: '06.jpg',
    alt: 'Coxinha redonda sobre esteira de bambu e tecido xadrez',
  },
  {
    file: '07.jpg',
    alt: 'Três coxinhas redondas em uma cesta de vime',
  },
  {
    file: '08.jpg',
    alt: 'Coxinhas redondas sobre uma bandeja de madeira',
  },
  {
    file: '09.jpg',
    alt: 'Coxinha aberta acompanhada por cesta e refrigerante',
  },
];

const CAKE_GALLERY_IMAGES = [
  {
    file: '01.jpg',
    alt: 'Bolo de chocolate com cobertura e morangos',
  },
  {
    file: '02.jpg',
    alt: 'Fatias de bolo de chocolate com cobertura branca',
  },
  {
    file: '03.jpg',
    alt: 'Fatia de bolo amarelo com cobertura branca e coco',
  },
  {
    file: '04.jpg',
    alt: 'Bolo redondo com cobertura caramelizada visto de cima',
  },
  {
    file: '05.jpg',
    alt: 'Bolo com cobertura de caramelo e castanhas',
  },
  {
    file: '06.jpg',
    alt: 'Bolo amarelo com cobertura de chocolate e uma fatia cortada',
  },
  {
    file: '07.jpg',
    alt: 'Colher com sobremesa de chocolate e creme branco',
  },
  {
    file: '08.jpg',
    alt: 'Três potes de sobremesa sobre uma bandeja de madeira',
  },
  {
    file: '09.jpg',
    alt: 'Sobremesa branca com calda de chocolate e uma colher',
  },
];

function FoodGallerySection({ id, label, folder, images }) {
  return (
    <section className={styles.foodGallery} id={id} aria-label={label}>
      <div className={styles.foodGalleryGrid}>
        {images.map((image) => (
          <figure className={styles.foodGalleryItem} key={image.file}>
            <Image
              className={styles.foodGalleryImage}
              src={`${FOOD_GALLERY_ASSET_ROOT}/${folder}/${image.file}`}
              alt={image.alt}
              fill
              sizes="(max-width: 849px) 34vw, 24vw"
              quality={100}
              loading="eager"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

const SPECIALTIES = [
  'Tratamento de Imagem',
  'Fotografia de Alimentos',
  'Direção Criativa',
  'Marketing Digital',
];

const IDENTITY_SERVICES = [
  'Captação\nde imagens',
  'Tratamento\nde imagem',
  'Elaboração\nde cardápio',
  'Criação da sua\npresença digital',
  'Foco em\ndelivery',
  'Gravação e\nedição de vídeos',
  'Elaboração de sites',
];

const DELIVERY_FEATURES = [
  {
    title: 'Fotos profissionais',
    description: 'para valorizar os produtos.',
    Icon: CameraIcon,
  },
  {
    title: 'Cadastro estratégico',
    description: 'para aumentar as pesquisas.',
    Icon: MagnifyingGlassIcon,
  },
  {
    title: 'Cardápio organizado',
    description: 'para facilitar a escolha.',
    Icon: ListBulletsIcon,
  },
  {
    title: 'Apresentação pensada',
    description: 'para destacar da concorrência.',
    Icon: ChartBarIcon,
  },
];

export const metadata = {
  title: 'Portfólio Gastronômico 2026 | Paiva & Co.',
  description:
    'Estratégia e design para marcas de alimentos que dão água na boca.',
};

export default function FoodPage() {
  return (
    <FoodMotion className={styles.page}>
      <section className={styles.hero} aria-labelledby="food-hero-title">
        <Image
          className={styles.paper}
          src={`${ASSET_ROOT}/paper-texture.png`}
          alt=""
          fill
          sizes="100vw"
          preload
        />

        <Image
          className={styles.topArrangement}
          src={`${ASSET_ROOT}/top-arrangement.png`}
          alt=""
          width={1672}
          height={941}
          sizes="(max-width: 849px) 100vw, min(100vw, 1400px)"
          preload
        />

        <Image
          className={styles.desktopLeftArrangement}
          src={`${ASSET_ROOT}/desktop-left-arrangement.png`}
          alt=""
          width={864}
          height={1821}
          sizes="(min-width: 850px) 48vh, 1px"
          loading="eager"
        />

        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span aria-hidden="true" />
            Estratégia + design
            <span aria-hidden="true" />
          </p>

          <h1 className={styles.title} id="food-hero-title">
            <span>Portfólio</span>
            <strong>Gastronômico</strong>
          </h1>

          <span className={styles.year}>2026</span>

          <p className={styles.lede}>
            Marcas de alimentos feitas para{' '}
            <span>
              dar
              <br className={styles.mobileBreak} /> água na boca.
            </span>
          </p>
        </div>

        <Image
          className={styles.bottomArrangement}
          src={`${ASSET_ROOT}/bottom-arrangement.png`}
          alt=""
          width={1672}
          height={941}
          sizes="(max-width: 849px) 118vw, min(86vw, 1200px)"
        />

        <Image
          className={styles.desktopRightArrangement}
          src={`${ASSET_ROOT}/desktop-right-arrangement.png`}
          alt=""
          width={864}
          height={1821}
          sizes="(min-width: 850px) 48vh, 1px"
        />
      </section>

      <section className={styles.about} id="sobre" aria-labelledby="food-about-title">
        <Image
          className={styles.paper}
          src={`${ASSET_ROOT}/paper-texture.png`}
          alt=""
          fill
          sizes="100vw"
        />

        <header className={styles.aboutBrand} aria-label="Paiva & Co.">
          <span className={styles.aboutWordmark}>
            paiva
            <br />
            &amp;co.
          </span>
          <span className={styles.aboutBrandLine} aria-hidden="true" />
          <span className={styles.aboutMonogram}>p&amp;c</span>
        </header>

        <Image
          className={styles.aboutPortrait}
          src={`${ASSET_ROOT}/about-portrait.png`}
          alt="Retrato de Isabelly Paiva"
          width={941}
          height={1672}
          sizes="(max-width: 849px) 57vw, 50vw"
          loading="eager"
        />

        <div className={styles.aboutDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={styles.aboutInfo}>
          <div className={styles.aboutCopy}>
            <p className={styles.aboutEyebrow}>Olá! Sou</p>
            <h2 id="food-about-title">Isabelly Paiva.</h2>
            <span className={styles.aboutRule} aria-hidden="true" />
            <p>
              Olhar criativo, sensível e estratégico para criar imagens que contam histórias.
            </p>
            <p>
              Graduada em Marketing e especializada em tratamento de imagem e fotografia de
              alimentos, uno estratégia e direção criativa para valorizar marcas e produtos.
            </p>
          </div>

          <aside className={styles.aboutSkills} aria-label="Especializações e softwares">
            <div>
              <h3>Especializações</h3>
              <span className={styles.aboutSmallRule} aria-hidden="true" />
              <ul>
                {SPECIALTIES.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </div>

            <div className={styles.aboutSoftware}>
              <h3>Softwares</h3>
              <span className={styles.aboutSmallRule} aria-hidden="true" />
              <p>
                Photoshop <i aria-hidden="true">•</i> Lightroom
                <br />
                Illustrator <i aria-hidden="true">•</i> CapCut
              </p>
            </div>
          </aside>
        </div>

        <Image
          className={styles.aboutPolaroids}
          src={`${ASSET_ROOT}/about-polaroids.png`}
          alt="Bastidores de produção, food styling e captação de conteúdo"
          width={1672}
          height={941}
          sizes="(max-width: 849px) 62vw, 46vw"
          loading="eager"
        />

        <div className={styles.aboutFooter} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
      </section>

      <section
        className={styles.identity}
        id="identidade-visual"
        aria-labelledby="food-identity-title"
      >
        <Image
          className={styles.paper}
          src={`${ASSET_ROOT}/paper-texture.png`}
          alt=""
          fill
          sizes="100vw"
        />

        <p className={styles.identityLabel}>Identidade visual</p>
        <span className={styles.identitySideLine} aria-hidden="true" />

        <h2 className={styles.identityTitle} id="food-identity-title">
          <span>Desenhando</span>
          <span>uma</span>
          <strong>marca do zero</strong>
        </h2>

        <ul className={styles.identityServices}>
          {IDENTITY_SERVICES.map((service) => (
            <li key={service}>
              <span aria-hidden="true" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={styles.brandCase}
        id="marcelle-nogueira"
        aria-labelledby="marcelle-case-title"
      >
        <Image
          className={styles.paper}
          src={`${ASSET_ROOT}/paper-texture.png`}
          alt=""
          fill
          sizes="100vw"
        />

        <Image
          className={styles.brandBlobTop}
          src={`${MARCELLE_ASSET_ROOT}/blobs.png`}
          alt=""
          width={941}
          height={1672}
          sizes="(max-width: 849px) 22vw, 13vw"
          loading="eager"
        />

        <p className={styles.brandCasePill}>Identidade visual</p>

        <p className={styles.brandCaseProject}>
          <strong>Projeto 01</strong>
          <span aria-hidden="true">/</span>
          Gastronomia brasileira
        </p>

        <Image
          className={styles.brandCaseLogo}
          src={`${MARCELLE_ASSET_ROOT}/logo.png`}
          alt="Marcelle Nogueira — Sabor Brasileiro"
          width={1774}
          height={887}
          sizes="(max-width: 849px) 54vw, 31vw"
          loading="eager"
        />

        <div className={styles.brandCaseText}>
          <h2 id="marcelle-case-title">Identidade visual</h2>
          <p>
            A identidade visual da Marcelle Nogueira foi criada para ser uma marca viva,
            versátil e atemporal, sem se limitar à representação de um único alimento.
            Inspirada na riqueza da gastronomia brasileira, sua identidade utiliza cores
            quentes e vibrantes que despertam sensações de fome, alegria e acolhimento. O
            resultado é uma marca com personalidade, capaz de transmitir a paixão pela
            culinária e se adaptar ao crescimento da marca sem perder sua essência.
          </p>
        </div>

        <div className={styles.brandPalette} aria-label="Paleta da marca">
          <h3>Paleta da marca</h3>
          <div>
            <span aria-label="Vermelho" />
            <span aria-label="Laranja" />
            <span aria-label="Creme" />
            <span aria-label="Verde" />
          </div>
        </div>

        <div className={styles.brandProductCards}>
          <Image
            src={`${MARCELLE_ASSET_ROOT}/cap.png`}
            alt="Boné da identidade Marcelle Nogueira"
            width={941}
            height={1672}
            sizes="(max-width: 849px) 31vw, 17vw"
            loading="eager"
          />
          <Image
            src={`${MARCELLE_ASSET_ROOT}/meal-box.png`}
            alt="Marmita da identidade Marcelle Nogueira"
            width={1023}
            height={1537}
            sizes="(max-width: 849px) 31vw, 17vw"
            loading="eager"
          />
          <Image
            src={`${MARCELLE_ASSET_ROOT}/handled-box.png`}
            alt="Embalagem com alça da identidade Marcelle Nogueira"
            width={1024}
            height={1536}
            sizes="(max-width: 849px) 31vw, 17vw"
            loading="eager"
          />
        </div>

        <div className={styles.brandMerchandise}>
          <Image
            src={`${MARCELLE_ASSET_ROOT}/merchandise.png`}
            alt="Aplicações da identidade Marcelle Nogueira em roupas e embalagens"
            fill
            sizes="(max-width: 849px) 100vw, 55vw"
            loading="eager"
          />
        </div>
      </section>

      <section
        className={styles.geCase}
        id="ge-sabores"
        aria-labelledby="ge-case-title"
      >
        <p className={styles.geCasePill}>Branding</p>

        <p className={styles.geCaseProject}>
          <strong>Projeto 02</strong>
          <span aria-hidden="true">/</span>
          Bolos caseiros
        </p>

        <Image
          className={styles.geCaseLogo}
          src={`${GE_ASSET_ROOT}/logo.png`}
          alt="Gê Sabores — Bolos Caseiros"
          width={1774}
          height={887}
          sizes="(max-width: 849px) 74vw, 38vw"
          loading="eager"
        />

        <div className={styles.geCaseText}>
          <h2 id="ge-case-title">Identidade visual</h2>
          <p>
            A identidade visual da Gê Sabores foi desenvolvida para transmitir a essência
            do sabor caseiro e do afeto presente em cada receita. Inspirada nas memórias de
            um café em família e no carinho de um bolo feito em casa, a marca combina
            delicadeza, acolhimento e proximidade. Cada elemento foi pensado para reforçar
            a ideia de que cada receita é preparada com o mesmo cuidado e carinho de um
            bolo da minha família para a sua.
          </p>
        </div>

        <div className={styles.gePalette} aria-label="Paleta da marca Gê Sabores">
          <h3>Paleta da marca</h3>
          <div>
            <span aria-label="Rosa intenso" />
            <span aria-label="Rosa médio" />
            <span aria-label="Rosa claro" />
            <span aria-label="Marrom" />
            <span aria-label="Creme" />
          </div>
        </div>

        <div className={styles.geShowcase}>
          <Image
            src={`${GE_ASSET_ROOT}/showcase.png`}
            alt="Aplicações da identidade Gê Sabores em sacola, roupas, copo e embalagens"
            fill
            sizes="(max-width: 849px) 100vw, 54vw"
            loading="eager"
          />
        </div>
      </section>

      <section
        className={styles.photography}
        id="fotografia-profissional"
        aria-labelledby="photography-title"
      >
        <Image
          className={styles.photographyDesktopScene}
          src={`${PHOTOGRAPHY_ASSET_ROOT}/camera-desktop-full.png`}
          alt=""
          width={1672}
          height={941}
          sizes="100vw"
          loading="eager"
        />

        <Image
          className={styles.photographyCamera}
          src={`${PHOTOGRAPHY_ASSET_ROOT}/camera.png`}
          alt="Câmera profissional com lente de grande abertura"
          width={941}
          height={1672}
          sizes="(max-width: 849px) 120vw, 50vw"
          loading="eager"
        />

        <span className={styles.photographyTopLine} aria-hidden="true" />
        <span className={styles.photographyCircle} aria-hidden="true" />
        <span className={styles.photographyCross} aria-hidden="true" />

        <div className={styles.photographyCopy}>
          <h2 id="photography-title">
            <span>Fotografia</span>
            <strong>Profissional</strong>
          </h2>

          <p className={styles.photographyBand}>Gastronômica e de produtos</p>

          <p className={styles.photographyDetails}>
            <span>Luz</span>
            <i aria-hidden="true" />
            <span>Composição</span>
            <i aria-hidden="true" />
            <span>Detalhes</span>
          </p>
        </div>
      </section>

      <FoodGallerySection
        id="galeria-gastronomica"
        label="Galeria de coxinhas e recheios"
        folder="originals"
        images={FOOD_GALLERY_IMAGES}
      />

      <FoodGallerySection
        id="galeria-bolos"
        label="Galeria de bolos e sobremesas"
        folder="cake-originals-v2"
        images={CAKE_GALLERY_IMAGES}
      />

      <section
        className={styles.delivery}
        id="delivery"
        aria-labelledby="delivery-title"
      >
        <div className={styles.deliveryCanvas}>
          <header className={styles.deliveryCopy}>
            <span className={styles.deliveryBrand}>paiva&amp;co.</span>
            <p className={styles.deliveryPill}>Nova fase do seu delivery</p>
            <h2 id="delivery-title">
              <span>Um delivery que</span>
              <span>atrai, conquista e</span>
              <span>
                <em>vende</em> todos os dias.
              </span>
            </h2>
            <p className={styles.deliveryDescription}>
              Transformamos perfis comuns em vitrines que geram desejo,
              <br />
              aparecem nas pesquisas e vendem mais que a concorrência.
            </p>
          </header>

          <div className={styles.deliveryPhonesLayer} data-delivery-phones>
            <Image
              src={`${DELIVERY_ASSET_ROOT}/phones-full-v1-tight.png`}
              alt="Cardápio digital Gê Sabores exibido em dois celulares"
              width={850}
              height={1060}
              sizes="(max-width: 849px) 82vw, 38dvh"
              loading="eager"
            />
          </div>

          <h3 className={styles.deliveryHeading}>
            O que fizemos pela <em>Gê Sabores</em>
          </h3>

          <div className={styles.deliveryFeatures}>
            {DELIVERY_FEATURES.map(({ title, description, Icon }) => (
              <article className={styles.deliveryFeature} key={title}>
                <span className={styles.deliveryIcon} aria-hidden="true">
                  <Icon color="currentColor" size="62%" weight="light" />
                </span>
                <strong>{title}</strong>
                <span>{description}</span>
              </article>
            ))}
          </div>

          <div className={styles.deliveryFooter}>
            <div className={styles.deliveryDivider} aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
            <p>
              O que fizemos por esse delivery,
              <br />
              podemos fazer pelo <em>seu também.</em>
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.siteCta}
        id="site-delivery"
        aria-labelledby="site-delivery-title"
      >
        <div className={styles.siteCtaCanvas}>
          <Image
            className={styles.siteCtaDesktopScene}
            src={`${ASSET_ROOT}/site/site-desktop-full.png`}
            alt=""
            width={1672}
            height={941}
            sizes="(min-width: 850px) 100vw, 1px"
            loading="eager"
            unoptimized
          />

          <span className={styles.siteCtaBrand}>paiva&amp;co.</span>

          <div className={styles.siteCtaCopy}>
            <h2 id="site-delivery-title">
              <span>Ou crie o seu</span>
              <em>próprio delivery.</em>
            </h2>
            <p>
              Um site com a sua cara, cardápio organizado
              <br />e pedido direto no WhatsApp.
            </p>
          </div>

          <div className={styles.siteMonitorLayer} data-site-monitor>
            <Image
              src={SITE_MONITOR_ASSET}
              alt="Computador exibindo o cardápio Monte seu pedido"
              width={941}
              height={725}
              sizes="(max-width: 849px) 100vw, 56.28dvh"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </FoodMotion>
  );
}
