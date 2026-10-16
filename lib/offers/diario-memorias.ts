import type { OfferContent } from "./types";

/**
 * Oferta da página principal do site (rota `/`). Usa a mesma copy da
 * `/scrapbook-v2`, mas mantém o layout original da home e o checkout Hotmart.
 */
export const diarioMemorias: OfferContent = {
  cashflowOfferId: "0c7a6f56-6bc5-4617-984d-9634a5a26c82",
  meta: {
    title:
      "Scrapbook — Crie Seu Scrapbooking de Forma Simples e Prática",
    description:
      "Use referências visuais para posicionar fotos, papéis, frases e elementos decorativos sem precisar inventar tudo do zero.",
    ogTitle:
      "Scrapbook — Crie Seu Scrapbooking de Forma Simples e Prática",
    ogDescription:
      "Crie seu Scrapbook com modelos prontos que mostram exatamente como montar cada página.",
  },

  theme: {
    // Paleta original — mantém a home visualmente idêntica.
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
      // Título em Google Sans (carregada em app/page.tsx), sem tarja de fundo.
      highlight: {
        color: "#FB8804",
        bg: "transparent",
        font: "var(--font-gsans), var(--font-manrope), sans-serif",
        scale: 1.45,
      },
      title: { color: "#ffffff", bg: "#3E4B1C" },
    },
  },

  hero: {
    logo: { src: "", alt: "Scrapbook", width: 200, height: 60 },
    secureSeal: "",
    titleHighlight: "Crie seu **Scrapbook Personalizado**",
    title: "",
    image: {
      alt: "Scrapbook aberto com páginas de viagem, títulos, molduras e elementos prontos para imprimir",
      width: 1024,
      height: 1024,
    },
    poster: { src: "/hero.webp" },
    subtitle:
      "Use nosso guia visual para posicionar fotos, papéis, frases e elementos decorativos sem ter que inventar tudo do zero.",
    ctaLabel: "QUERO CRIAR MEU SCRAPBOOK",
    deliveryNote: "Você recebe o acesso na hora, no seu Whatsapp e Email",
    socialProofLabel: "+480 alunas",
  },

  materials: {
    title: "Veja os materiais que você vai receber",
    imageSize: { width: 720, height: 900 },
    items: [
      {
        src: "/diarios/diario-01-nova-york.webp",
        alt: "Scrapbook com páginas de viagem a Nova York",
      },
      {
        src: "/diarios/diario-02-aniversario.webp",
        alt: "Scrapbook com fotos de aniversário e amigas",
      },
      {
        src: "/diarios/diario-03-vintage.webp",
        alt: "Scrapbook estilo vintage com recortes e frases",
      },
      {
        src: "/diarios/diario-04-ilha.webp",
        alt: "Scrapbook de viagem à ilha com anotações à mão",
      },
      {
        src: "/diarios/diario-05-narbonne.webp",
        alt: "Scrapbook de viagem a Narbonne, na França",
      },
    ],
  },

  whySection: {
    title: "",
    cards: [],
  },

  idealSection: {
    title: "Este material é ideal pra você que deseja:",
    items: [
      { title: "Tirar suas fotos da galeria e transformar em lembranças de verdade", desc: "" },
      { title: "Criar scrapbook sem precisar inventar tudo do zero", desc: "" },
      { title: "Aproveitar melhor os materiais que já tem em casa", desc: "" },
      { title: "Ter mais segurança na hora de montar cada página", desc: "" },
      { title: "Registrar viagens, família e momentos especiais de um jeito mais pessoal", desc: "" },
      { title: "Voltar a criar sem depender de inspiração o tempo todo", desc: "" },
    ],
  },

  offerSection: {
    title: "Isso é tudo que você vai receber no Scrapbook",
    pill: "ACESSO IMEDIATO",
    cardTitle: "Tudo foi organizado para ser simples e fácil de aplicar.",
    lead: "Você escolhe o modelo que gostou e já pode começar na mesma hora!",
    image: {
      src: "/kit-diario.webp",
      alt: "Kit do Scrapbook: scrapbook aberto com páginas de viagem, títulos, molduras, frases e elementos prontos para imprimir",
      width: 1024,
      height: 1024,
    },
    howItWorksNumbered: true,
    howItWorks: [
      {
        title: "Organize sua montagem",
        desc: "Escolha quais fotos, papéis, recortes, elementos e materiais e os separe antes de começar.",
      },
      {
        title: "Monte seu Scrapbook!",
        desc: "Entenda a estrutura do Scrapbook e visualize como o projeto completo será montado.",
      },
      {
        title: "Modelos prontos de montagem para você!",
        desc: "Siga os modelos visuais de capa, abertura e páginas internas para posicionar suas fotos, papéis, frases e elementos com mais facilidade.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E não para por aí...", "Tem mais!", "Você também vai receber…"],
    pill: "🎁 4 BÔNUS EXCLUSIVOS",
    exclusiveNote: "Bônus incluso somente no Plano Completo",
    items: [
      {
        label: "BÔNUS #1",
        title: "24 Elementos Prontos para Imprimir e Recortar",
        features: [
          "6 Tags de Data e Lugar",
          "6 Selos de Memória",
          "6 Etiquetas para Fotos",
          "6 Detalhes Decorativos",
        ],
        price: "R$27",
        src: "/bonus/bonus-01-elementos.webp",
      },
      {
        label: "BÔNUS #2",
        title: "20 Frases Prontas para Imprimir e Usar",
        features: [
          "5 Frases para Abertura",
          "5 Frases para Momentos Especiais",
          "5 Frases para Pequenas Memórias do Cotidiano",
          "5 Frases para Encerramento",
        ],
        price: "R$27",
        src: "/bonus/bonus-02-frases.webp",
      },
      {
        label: "BÔNUS #3",
        title: "8 Molduras para Fotos Prontas para Imprimir",
        features: [
          "2 Molduras Estilo Polaroid",
          "2 Molduras Verticais",
          "2 Molduras Quadradas",
          "2 Molduras Estilo Filme",
        ],
        price: "R$27",
        src: "/bonus/bonus-03-molduras.webp",
      },
      {
        label: "BÔNUS #4",
        title: "6 Papéis de Fundo Prontos para Imprimir",
        features: [
          "2 Fundos Neutros",
          "2 Fundos Estampados Suaves",
          "2 Fundos Texturizados",
        ],
        price: "R$27",
        src: "/bonus/bonus-04-papeis.webp",
      },
    ],
  },

  plansSection: {
    pill: "",
    title: "Escolha a melhor opção para você",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/plano-basico.webp",
        alt: "Scrapbook aberto com páginas de viagem, fotos, tesoura e washi tape",
        width: 1024,
        height: 1024,
      },
      receiveLabel: "Você recebe:",
      features: [
        "Guia de organização da montagem",
        "Estrutura completa do scrapbook",
        "Modelos prontos de capa e páginas",
        "Guias visuais de montagem",
        "Acesso imediato ao material",
      ],
      oldPrice: "R$37,90",
      price: "R$27,90",
      installments: "ou 4x de R$7,48 no cartão.",
      savings: "Você economiza R$10,00",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/plano-completo.webp",
        alt: "Kit do Plano Completo: scrapbook aberto com títulos, molduras, ilustrações e elementos prontos para imprimir",
        width: 1024,
        height: 1024,
      },
      pill: "⚡4x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "Guia de organização da montagem",
        "Estrutura completa do scrapbook",
        "Modelos prontos de capa e páginas",
        "Guias visuais de montagem",
        "🎁BÔNUS 1 - 24 Elementos Prontos para Imprimir e Recortar",
        "🎁BÔNUS 2 - 20 Frases Prontas para Imprimir e Usar",
        "🎁BÔNUS 3 - 8 Molduras para Fotos Prontas para Imprimir",
        "🎁BÔNUS 4 - 6 Papéis de Fundo Prontos para Imprimir",
        "Acesso imediato ao material",
      ],
      oldPrice: "R$67,90",
      price: "R$37,90",
      installments: "ou 6x de R$6,48 no cartão.",
      savings: "Você economiza R$30,00",
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
    seal: { alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
    title: "Garantia de 7 dias",
    intro: "🔒 Compra 100% segura e garantida.",
    lead: "Isso significa que, se você achar que:",
    bullets: [
      "o material não faz sentido para suas criações",
      "os modelos não atendem suas expectativas",
      "ou simplesmente não quiser continuar.",
    ],
    outro:
      "Você pode solicitar o reembolso, sem perguntas, sem burocracia, não gostou? Devolvemos 100% do seu dinheiro de volta.",
    outroStrong: "",
    helpLabel: "",
  },

  contact: {
    email: "",
  },

  testimonials: {
    title: "Veja os scrapbooks de algumas alunas",
    items: [
      {
        src: "/alunas/aluna-01-tbilisi.webp",
        alt: "Scrapbook de aluna com páginas de viagem a Tbilisi",
        width: 720,
        height: 960,
      },
      {
        src: "/alunas/aluna-02-june.webp",
        alt: "Scrapbook de aluna com vision board de junho",
        width: 720,
        height: 960,
      },
      {
        src: "/alunas/aluna-03-hawaii-trip.webp",
        alt: "Scrapbook de aluna com viagem de amigas no Havaí",
        width: 720,
        height: 961,
      },
      {
        src: "/alunas/aluna-04-lago.webp",
        alt: "Scrapbook de aluna com páginas de verão no lago",
        width: 720,
        height: 917,
      },
      {
        src: "/alunas/aluna-05-hawaii.webp",
        alt: "Scrapbook de aluna com fotos de casal no Havaí",
        width: 720,
        height: 961,
      },
      {
        src: "/alunas/aluna-06-2024.webp",
        alt: "Scrapbook de aluna com recapitulativo de 2024",
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

  faqTitle: "Perguntas frequentes",

  faq: [
    [
      "O que é o Scrapbook?",
      "O Scrapbook é um material digital prático com modelos prontos e guias visuais para ajudar você a montar um scrapbook de forma mais simples, organizada e sem precisar criar tudo do zero.",
    ],
    [
      "O Scrapbook é um curso?",
      "Não. É um material digital prático com orientações, modelos prontos e referências visuais para você seguir durante a montagem.",
    ],
    [
      "O que eu recebo no Plano Básico?",
      "Você recebe o Scrapbook, com organização da montagem, estrutura do projeto e modelos visuais das páginas.",
    ],
    [
      "O que eu recebo no Plano Completo?",
      "Além do Scrapbook, você recebe os 4 bônus com elementos, frases, molduras e papéis de fundo prontos para imprimir.",
    ],
    [
      "Preciso comprar muitos materiais para começar?",
      "Não necessariamente. O material ajuda você a aproveitar fotos, papéis, recortes e elementos que já possui, além dos arquivos imprimíveis disponíveis no Plano Completo.",
    ],
    [
      "Posso usar o material para registrar diferentes momentos?",
      "Sim. Você pode adaptar as páginas para viagens, momentos em família, acontecimentos especiais e outras memórias que queira guardar.",
    ],
    [
      "Como vou receber o material?",
      "Você receberá o material imediatamente no seu e-mail assim que realizar a compra.",
    ],
    [
      "O acesso é liberado imediatamente após a compra?",
      "Sim.",
    ],
    [
      "Quais são as formas de pagamento?",
      "Aceitamos, Pix, Cartão de Crédito e Boleto Bancário.",
    ],
    [
      "O produto possui garantia?",
      "Sim, de 7 dias, se você não gostar, devolvemos 100% do seu dinheiro de volta.",
    ],
    [
      "Preciso saber fazer scrapbook para usar o material?",
      "Não. Os modelos e guias visuais foram pensados justamente para mostrar como organizar fotos, papéis, frases e elementos sem precisar criar tudo do zero.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#plano-basico",
    basic:
      "https://pay.hotmart.com/U107331805R?off=sz8wlcz6&checkoutMode=10&bid=1787952607380",
    complete: "https://pay.hotmart.com/R107331870H?off=wcrp69ev&checkoutMode=10",
  },
};
