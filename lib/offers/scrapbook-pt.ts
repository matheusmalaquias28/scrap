import type { OfferContent } from "./types";

/**
 * Oferta "Scrapbook PT" — versão em português de Portugal (pt-PT) do
 * Diário de Memórias, servida na rota `/scrapbook-pt`.
 *
 * Diferenças face à versão BR: idioma (pt-PT), moeda (€), garantia de 14 dias
 * (direito de livre resolução da UE), métodos de pagamento locais (MB Way,
 * Multibanco, cartão), rodapé/consentimento RGPD e links legais próprios.
 */
export const scrapbookPt: OfferContent = {
  // Offer ID exclusivo de Portugal no Cashflow. Na `/scrapbook-pt` este é o
  // ÚNICO pixel emitido (ver `TrackingHead`): o bloco UTMify padrão não é
  // carregado nesta rota.
  cashflowOfferId: "ba69f5a4-5ef4-4252-8663-6bdc8fa7fd69",
  locale: "pt-PT",
  meta: {
    title:
      "Diário de Memórias — Cria o Teu Scrapbooking de Forma Simples e Prática",
    description:
      "Usa referências visuais para posicionar fotos, papéis, frases e elementos decorativos sem teres de inventar tudo do zero.",
    ogTitle:
      "Diário de Memórias — Cria o Teu Scrapbooking de Forma Simples e Prática",
    ogDescription:
      "Cria o teu Diário de Memórias com modelos prontos que mostram exatamente como montar cada página.",
  },

  theme: {
    // Paleta original — mantém a página visualmente idêntica à versão BR.
    palette: {
      paper: "#fff1c9",
      blush: "#fcd9d0",
      mint: "#d4f0ea",
      peacock: "#1f7a7a",
      plum: "#3e2450",
      raspberry: "#c22745",
      marigold: "#e8a317",
      card: "#fff8ef",
      ink: "#2f241f",
      muted: "#6f5e56",
      cta: "#00db6a",
      badge: "#1f7a7a",
      brand: "#c22745",
      alert: "#c22745",
    },
    heroHeading: {
      highlight: { color: "#FB8804", bg: "#ffffff" },
      title: { color: "#ffffff", bg: "#3E4B1C" },
    },
  },

  offerBar: {
    text: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
  },

  hero: {
    logo: { src: "", alt: "Diário de Memórias", width: 200, height: 60 },
    secureSeal: "",
    titleHighlight: "Cria o teu Diário\nde Memórias Personalizado",
    title: "com modelos prontos que mostram exatamente como montar cada página.",
    image: {
      alt: "Diário de memórias aberto com páginas de viagem, títulos, molduras e elementos prontos para imprimir",
      width: 1024,
      height: 1024,
    },
    poster: { src: "/hero.webp" },
    subtitle:
      "Usa o nosso guia visual para posicionar fotos, papéis, frases e elementos decorativos sem teres de inventar tudo do zero.",
    ctaLabel: "QUERO CRIAR O MEU DIÁRIO DE MEMÓRIAS",
    deliveryNote: "📲 Recebes tudo na hora, diretamente no teu e-mail",
    socialProofLabel: "",
  },

  materials: {
    title: "VÊ OS MATERIAIS QUE VAIS RECEBER JÁ",
    imageSize: { width: 720, height: 900 },
    items: [
      {
        src: "/diarios/diario-01-nova-york.webp",
        alt: "Diário de memórias com páginas de viagem a Nova Iorque",
      },
      {
        src: "/diarios/diario-02-aniversario.webp",
        alt: "Diário de memórias com fotos de aniversário e amigas",
      },
      {
        src: "/diarios/diario-03-vintage.webp",
        alt: "Diário de memórias estilo vintage com recortes e frases",
      },
      {
        src: "/diarios/diario-04-ilha.webp",
        alt: "Diário de memórias de viagem a uma ilha com anotações à mão",
      },
      {
        src: "/diarios/diario-05-narbonne.webp",
        alt: "Diário de memórias de viagem a Narbonne, em França",
      },
    ],
  },

  whySection: {
    title: "",
    cards: [],
  },

  idealSection: {
    title: "ESTE DIÁRIO É IDEAL PARA TI QUE QUERES",
    items: [
      { title: "Tirar as tuas fotos da galeria e transformá-las em recordações a sério", desc: "" },
      { title: "Criar scrapbook sem teres de inventar tudo do zero", desc: "" },
      { title: "Aproveitar melhor os materiais que já tens em casa", desc: "" },
      { title: "Ter mais segurança na hora de montar cada página", desc: "" },
      { title: "Registar viagens, família e momentos especiais de forma mais pessoal", desc: "" },
      { title: "Voltar a criar sem depender de inspiração a toda a hora", desc: "" },
    ],
  },

  offerSection: {
    title: "Tudo o que vais receber no Diário de Memórias",
    pill: "⚡ACESSO IMEDIATO",
    cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
    lead: "Escolhes o modelo e podes começar na mesma hora.",
    image: {
      src: "/kit-diario.webp",
      alt: "Kit do Diário de Memórias: diário aberto com páginas de viagem, títulos, molduras, frases e elementos prontos para imprimir",
      width: 1024,
      height: 1024,
    },
    howItWorks: [
      {
        title: "PARTE 1 — Organiza a tua montagem",
        desc: "Escolhe que fotos, papéis, recortes, elementos e materiais separar antes de começar.",
      },
      {
        title: "PARTE 2 — Monta o teu Diário de Memórias",
        desc: "Percebe a estrutura do diário e visualiza como o projeto completo vai ser montado.",
      },
      {
        title: "PARTE 3 — Modelos Prontos de Montagem para seguires",
        desc: "Segue modelos visuais de capa, abertura e páginas interiores para posicionar as tuas fotos, papéis, frases e elementos com mais facilidade.",
      },
      {
        title: "Em cada modelo vais ver:",
        desc: "Quantidade e tamanho das fotos, posição dos elementos, espaços para títulos e memórias e uma ordem simples de montagem.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E NÃO FICA POR AQUI...", "HÁ MAIS!", "Também vais receber…"],
    pill: "🎁 4 BÓNUS EXCLUSIVOS",
    exclusiveNote: "Bónus incluído apenas no Plano Completo",
    items: [
      {
        label: "BÓNUS #1",
        title: "24 Elementos Prontos para Imprimir e Recortar",
        features: [
          "6 Tags de Data e Lugar",
          "6 Selos de Memória",
          "6 Etiquetas para Fotos",
          "6 Detalhes Decorativos",
        ],
        price: "27 €",
        src: "/bonus/bonus-01-elementos.webp",
      },
      {
        label: "BÓNUS #2",
        title: "20 Frases Prontas para Imprimir e Usar",
        features: [
          "5 Frases para Abertura",
          "5 Frases para Momentos Especiais",
          "5 Frases para Pequenas Memórias do Dia a Dia",
          "5 Frases para Encerramento",
        ],
        price: "27 €",
        src: "/bonus/bonus-02-frases.webp",
      },
      {
        label: "BÓNUS #3",
        title: "8 Molduras para Fotos Prontas para Imprimir",
        features: [
          "2 Molduras Estilo Polaroid",
          "2 Molduras Verticais",
          "2 Molduras Quadradas",
          "2 Molduras Estilo Filme",
        ],
        price: "27 €",
        src: "/bonus/bonus-03-molduras.webp",
      },
      {
        label: "BÓNUS #4",
        title: "6 Papéis de Fundo Prontos para Imprimir",
        features: [
          "2 Fundos Neutros",
          "2 Fundos Estampados Suaves",
          "2 Fundos Texturados",
        ],
        price: "27 €",
        src: "/bonus/bonus-04-papeis.webp",
      },
    ],
  },

  plansSection: {
    pill: "🔥 ÚLTIMA OPORTUNIDADE — A OFERTA TERMINA HOJE",
    title: "ESCOLHE A MELHOR OPÇÃO PARA TI",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/plano-basico.webp",
        alt: "Diário de Memórias aberto com páginas de viagem, fotos, tesoura e washi tape",
        width: 1024,
        height: 1024,
      },
      receiveLabel: "Recebes:",
      features: [
        "Guia de organização da montagem",
        "Estrutura completa do diário",
        "Modelos prontos de capa e páginas",
        "Guias visuais de montagem",
        "Acesso imediato ao material",
      ],
      oldPrice: "37,90 €",
      price: "17,90 €",
      installments: "",
      savings: "🟢 Poupas 20,00 €",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "🔥 ÚLTIMA OPORTUNIDADE — A OFERTA TERMINA HOJE",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/plano-completo.webp",
        alt: "Kit do Plano Completo: diário aberto com títulos, molduras, ilustrações e elementos prontos para imprimir",
        width: 1024,
        height: 1024,
      },
      pill: "⚡4x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "Guia de organização da montagem",
        "Estrutura completa do diário",
        "Modelos prontos de capa e páginas",
        "Guias visuais de montagem",
        "🎁BÓNUS 1 - 24 Elementos Prontos para Imprimir e Recortar",
        "🎁BÓNUS 2 - 20 Frases Prontas para Imprimir e Usar",
        "🎁BÓNUS 3 - 8 Molduras para Fotos Prontas para Imprimir",
        "🎁BÓNUS 4 - 6 Papéis de Fundo Prontos para Imprimir",
        "Acesso imediato ao material",
      ],
      oldPrice: "67,90 €",
      price: "27,90 €",
      installments: "",
      savings: "🟢 Poupas 40,00 €",
      ctaLabel: "QUERO O PLANO COMPLETO",
    },
    upsellNote: {
      alert: "92% das pessoas aproveitam o plano abaixo 👇",
      body: "",
      highlight: "",
    },
    securePurchaseBadge: {
      src: "/entregaveis-v2/compra-segura-hotmart-640.webp",
      alt: "Meios de pagamento",
      width: 640,
      height: 192,
    },
  },

  guarantee: {
    seal: { src: "/selo-14-dias.png", alt: "Selo de garantia de 14 dias", width: 241, height: 242 },
    title: "GARANTIA DE 14 DIAS",
    intro: "🔒 Compra 100% segura e garantida.",
    lead: "Isto significa que, se achares que:",
    bullets: [
      "o material não faz sentido para as tuas criações",
      "os modelos não correspondem às tuas expectativas",
      "ou simplesmente não queres continuar.",
    ],
    outro:
      "Ao abrigo do teu direito de livre resolução, tens 14 dias para desistir da compra. Podes pedir o reembolso, sem perguntas e sem burocracia — devolvemos-te 100% do teu dinheiro.",
    outroStrong: "",
    helpLabel: "",
  },

  contact: {
    email: "",
  },

  testimonials: {
    title: "VÊ OS DIÁRIOS DE ALGUMAS ALUNAS",
    items: [
      {
        src: "/alunas/aluna-01-tbilisi.webp",
        alt: "Diário de memórias de aluna com páginas de viagem a Tbilisi",
        width: 720,
        height: 960,
      },
      {
        src: "/alunas/aluna-02-june.webp",
        alt: "Diário de memórias de aluna com vision board de junho",
        width: 720,
        height: 960,
      },
      {
        src: "/alunas/aluna-03-hawaii-trip.webp",
        alt: "Diário de memórias de aluna com viagem de amigas no Havai",
        width: 720,
        height: 961,
      },
      {
        src: "/alunas/aluna-04-lago.webp",
        alt: "Diário de memórias de aluna com páginas de verão no lago",
        width: 720,
        height: 917,
      },
      {
        src: "/alunas/aluna-05-hawaii.webp",
        alt: "Diário de memórias de aluna com fotos de casal no Havai",
        width: 720,
        height: 961,
      },
      {
        src: "/alunas/aluna-06-2024.webp",
        alt: "Diário de memórias de aluna com retrospetiva de 2024",
        width: 720,
        height: 956,
      },
    ],
  },

  stepsSection: {
    title: "",
    subtitle: "",
    ctaLabel: "",
    steps: [],
  },

  faqTitle: "PERGUNTAS FREQUENTES",

  faq: [
    [
      "O que é o Diário de Memórias?",
      "O Diário de Memórias é um material digital prático, com modelos prontos e guias visuais para te ajudar a montar um scrapbook de forma mais simples, organizada e sem teres de criar tudo do zero.",
    ],
    [
      "O Diário de Memórias é um curso?",
      "Não. É um material digital prático, com orientações, modelos prontos e referências visuais para seguires durante a montagem.",
    ],
    [
      "O que recebo no Plano Básico?",
      "Recebes o Diário de Memórias, com organização da montagem, estrutura do projeto e modelos visuais das páginas.",
    ],
    [
      "O que recebo no Plano Completo?",
      "Além do Diário de Memórias, recebes os 4 bónus com elementos, frases, molduras e papéis de fundo prontos para imprimir.",
    ],
    [
      "Preciso de comprar muitos materiais para começar?",
      "Não necessariamente. O material ajuda-te a aproveitar fotos, papéis, recortes e elementos que já tens, além dos ficheiros imprimíveis disponíveis no Plano Completo.",
    ],
    [
      "Posso usar o material para registar momentos diferentes?",
      "Sim. Podes adaptar as páginas a viagens, momentos em família, acontecimentos especiais e outras memórias que queiras guardar.",
    ],
    [
      "Como vou receber o material?",
      "Vais receber o material imediatamente no teu e-mail assim que concluíres a compra.",
    ],
    [
      "O acesso é libertado imediatamente após a compra?",
      "Sim.",
    ],
    [
      "Quais são as formas de pagamento?",
      "Aceitamos MB Way, Multibanco e Cartão de Crédito.",
    ],
    [
      "O produto tem garantia?",
      "Sim, de 14 dias. Se não gostares, devolvemos-te 100% do teu dinheiro.",
    ],
    [
      "Preciso de saber fazer scrapbook para usar o material?",
      "Não. Os modelos e guias visuais foram pensados precisamente para te mostrar como organizar fotos, papéis, frases e elementos sem teres de criar tudo do zero.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não está associado ao Facebook nem a qualquer entidade do Facebook. Tratamos os teus dados de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD). Utilizamos apenas o essencial: o pixel da Meta para medir e melhorar a nossa publicidade. Não vendemos nem partilhamos os teus dados com terceiros para outros fins. Podes exercer os teus direitos de acesso, retificação e eliminação a qualquer momento através do nosso contacto. Consulta as nossas políticas para saberes como tratamos a tua informação.",
    links: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
      { label: "Termos e Condições", href: "/termos-e-condicoes" },
    ],
  },

  consent: {
    text: "Usamos cookies e o pixel da Meta apenas para medir e melhorar a tua experiência e a nossa publicidade. Ao continuares, aceitas a nossa",
    acceptLabel: "Aceitar",
    declineLabel: "Recusar",
    policyHref: "/politica-de-cookies",
    policyLabel: "Política de Cookies",
  },

  checkout: {
    hero: "#plano-basico",
    basic:
      "https://pay.hotmart.com/U107331805R?off=6axz5xrz&checkoutMode=10&bid=1790035907643",
    complete:
      "https://pay.hotmart.com/R107331870H?off=qsu5jzfd&checkoutMode=10&bid=1790035909041",
  },
};
