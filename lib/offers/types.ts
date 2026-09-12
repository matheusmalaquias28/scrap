/**
 * Forma de UMA oferta. Toda página de oferta (a home e as rotas /[offer])
 * é montada a partir de um objeto que implementa `OfferContent`.
 *
 * Para criar uma nova página: crie um arquivo em `lib/offers/<slug>.ts` que
 * exporte um objeto deste tipo e registre-o em `lib/offers/index.ts`.
 */

export interface ImageAsset {
  src?: string;
  alt: string;
  width: number;
  height: number;
}

/** Metadados de SEO/compartilhamento da rota. */
export interface OfferMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

/**
 * Paleta da oferta. Alimenta tanto os fundos de seção (usados em `style`
 * inline) quanto os tokens de cor do Tailwind/CSS (`--color-*`, `--p-*`),
 * que o `OfferPage` sobrescreve por rota. Assim cada página tem seu visual
 * sem afetar as demais.
 */
export interface Palette {
  /* Fundos de seção */
  paper: string;
  blush: string;
  mint: string;
  peacock: string;
  plum: string;
  raspberry: string;
  marigold: string;
  card: string;
  /* Tokens de texto/acento */
  ink: string;
  muted: string;
  cta: string;
  badge: string;
  brand: string;
  alert: string;
}

/** Cores das duas “tarjas” do título do hero. */
export interface HeroHeading {
  highlight: {
    color: string;
    bg: string;
    /** Fonte da tarja (CSS font-family). Padrão: `var(--font-agbalumo)`. */
    font?: string;
    /** Fator de escala do tamanho (ex.: 0.9 = 10% menor). Padrão: 1. */
    scale?: number;
    /** Peso da fonte (ex.: 700 = bold). Padrão: herdado (400). */
    weight?: number;
  };
  title: { color: string; bg: string; /** Fator de escala (ex.: 0.8 = 20% menor). Padrão: 1. */ scale?: number };
}

export interface Theme {
  palette: Palette;
  heroHeading: HeroHeading;
  /**
   * Classe CSS extra aplicada ao `<main>` da oferta. Serve de gancho para
   * refinos visuais escopados a UMA rota (ex.: `.theme-terrario` em
   * `app/page.css`), sem tocar no visual das demais ofertas.
   */
  className?: string;
  /**
   * Ativa o tratamento tipográfico que evita “palavras viúvas”
   * (`text-wrap: pretty`/`balance`) em todos os blocos de texto da página.
   */
  balanceText?: boolean;
}

export interface Hero {
  logo: { src: string; alt: string; width: number; height: number };
  secureSeal: string;
  titleHighlight: string;
  title: string;
  image: { alt: string; width: number; height: number };
  poster: { src: string };
  subtitle: string;
  /** Parágrafo de apoio opcional, renderizado abaixo do subtítulo do hero. */
  description?: string;
  ctaLabel: string;
  deliveryNote: string;
  socialProofLabel: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  /** Descrição opcional; quando ausente o card mostra só o título. */
  desc?: string;
}

export interface IdealItem {
  title: string;
  desc: string;
}

export interface HowStep {
  title: string;
  desc: string;
}

export interface BonusItem {
  label: string;
  title: string;
  /** Frase descritiva opcional (renderizada abaixo do título). */
  desc?: string;
  features: string[];
  price: string;
  src?: string;
}

export interface BasicPlan {
  name: string;
  image: ImageAsset;
  receiveLabel: string;
  features: string[];
  /**
   * Itens que NÃO vêm neste plano, listados tachados e opacos logo abaixo
   * dos entregáveis — deixa explícito o que só existe no Plano Completo.
   * Opcional: sem o campo, nada é renderizado (comportamento antigo).
   */
  unavailableFeatures?: string[];
  oldPrice: string;
  price: string;
  installments: string;
  savings: string;
  ctaLabel: string;
}

export interface CompletePlan {
  badge: string;
  name: string;
  allBonusesLabel: string;
  image: ImageAsset;
  pill: string;
  soldLabel: string;
  features: string[];
  oldPrice: string;
  price: string;
  installments: string;
  savings: string;
  ctaLabel: string;
}

export interface PlansSection {
  pill: string;
  title: string;
  basic: BasicPlan;
  complete: CompletePlan;
  upsellNote: { alert: string; body: string; highlight: string };
  securePurchaseBadge: ImageAsset;
}

export interface Guarantee {
  seal: { alt: string; width: number; height: number };
  title: string;
  intro: string;
  lead: string;
  bullets: string[];
  outro: string;
  outroStrong: string;
  helpLabel: string;
}

export interface StepItem {
  icon: string;
  title: string;
  desc: string;
  items: string[];
}

/**
 * Bloco de autoridade (quem assina o material). Opcional: sem ele a seção
 * simplesmente não é renderizada, e as ofertas antigas seguem iguais.
 */
export interface Authority {
  /** Kicker acima do nome (ex.: "QUEM CRIOU ESTE MATERIAL"). */
  pill?: string;
  name: string;
  /** Linha curta de papel/credencial, abaixo do nome. */
  role?: string;
  photo: ImageAsset;
  /** Parágrafos de apresentação, na ordem. */
  paragraphs: string[];
}

export interface OfferContent {
  meta: OfferMeta;
  theme: Theme;
  offerBar: { text: string };
  hero: Hero;
  materials: {
    title: string;
    imageSize: { width: number; height: number };
    items: { src?: string; alt: string }[];
  };
  whySection: { title: string; cards: WhyCard[] };
  idealSection: { title: string; items: IdealItem[] };
  offerSection: {
    title: string;
    pill: string;
    cardTitle: string;
    lead: string;
    image: ImageAsset;
    /** Título opcional acima da lista de entregáveis (ex.: "Você recebe:"). */
    howItWorksTitle?: string;
    /**
     * Numera os itens de `howItWorks` na linha do tempo mesmo quando os
     * títulos não seguem a convenção "PARTE 1 — …". Padrão: `false`
     * (mantém o comportamento das ofertas antigas).
     */
    howItWorksNumbered?: boolean;
    howItWorks: HowStep[];
  };
  bonusSection: {
    titleLines: string[];
    pill: string;
    exclusiveNote: string;
    items: BonusItem[];
  };
  plansSection: PlansSection;
  guarantee: Guarantee;
  /** Seção "quem está por trás", renderizada logo abaixo da garantia. */
  authority?: Authority;
  contact: { email: string };
  testimonials: {
    title: string;
    /** Subtítulo opcional, renderizado abaixo do título da seção. */
    subtitle?: string;
    items: ImageAsset[];
    /** Quando definido, usa carrossel contínuo (Marquee) em vez de slides. */
    marquee?: {
      duration?: number;
      itemWidth?: number;
      containerClassName?: string;
      imageSize?: { width: number; height: number };
    };
  };
  stepsSection: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    steps: StepItem[];
  };
  faqTitle: string;
  faq: readonly (readonly [string, string])[];
  footer: { copyright: string; legal: string };
  checkout: { hero: string; basic: string; complete: string };
}
