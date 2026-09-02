export const contact = {
  email: "",
};

export const footer = {
  copyright: "Todos os direitos reservados.",
  legal:
    "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
};

export const checkout = {
  hero: "#plano-basico",
  basic: "https://pay.hotmart.com/U107331805R?off=sz8wlcz6&checkoutMode=10&bid=1787952607380",
  complete: "https://pay.hotmart.com/R107331870H?off=wcrp69ev&checkoutMode=10",
};

export const testimonials = {
  title: "VEJA OS DIÁRIOS DE ALGUMAS ALUNAS",
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
      alt: "Diário de memórias de aluna com viagem de amigas no Havaí",
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
      alt: "Diário de memórias de aluna com fotos de casal no Havaí",
      width: 720,
      height: 961,
    },
    {
      src: "/alunas/aluna-06-2024.webp",
      alt: "Diário de memórias de aluna com recapitulativo de 2024",
      width: 720,
      height: 956,
    },
  ] as { src?: string; alt: string; width: number; height: number }[],
};

export const materials = {
  title: "VEJA OS MATERIAIS QUE VOCÊ VAI RECEBER JÁ",
  imageSize: { width: 720, height: 900 },
  items: [
    {
      src: "/diarios/diario-01-nova-york.webp",
      alt: "Diário de memórias com páginas de viagem a Nova York",
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
      alt: "Diário de memórias de viagem à ilha com anotações à mão",
    },
    {
      src: "/diarios/diario-05-narbonne.webp",
      alt: "Diário de memórias de viagem a Narbonne, na França",
    },
  ] as { src?: string; alt: string }[],
};

export const theme = {
  brandColor: "#c22745",
};

export const offerBar = {
  text: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

export const hero = {
  logo: { src: "", alt: "Diário de Memórias", width: 200, height: 60 },
  secureSeal: "",
  titleHighlight: "Crie seu Diário de Memórias Personalizado",
  title: "com modelos prontos que mostram exatamente como montar cada página.",
  image: {
    alt: "Diário de memórias aberto com páginas de viagem, títulos, molduras e elementos prontos para imprimir",
    width: 1024,
    height: 1024,
  },
  poster: { src: "/hero.webp" },
  subtitle:
    "Use nosso guial visual para posicionar fotos, papéis, frases e elementos decorativos sem precisar inventar tudo do zero.",
  ctaLabel: "QUERO CRIAR MEU DIÁRIO DE MEMÓRIAS",
  deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
  socialProofLabel: "",
};

export const whySection = {
  title: "",
  cards: [] as { icon: string; title: string; desc: string }[],
};

export const idealSection = {
  title: "ESTE DIÁRIO É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    { title: "Tirar suas fotos da galeria e transformar em lembranças de verdade", desc: "" },
    { title: "Criar scrapbook sem precisar inventar tudo do zero", desc: "" },
    { title: "Aproveitar melhor os materiais que já tem em casa", desc: "" },
    { title: "Ter mais segurança na hora de montar cada página", desc: "" },
    { title: "Registrar viagens, família e momentos especiais de um jeito mais pessoal", desc: "" },
    { title: "Voltar a criar sem depender de inspiração o tempo todo", desc: "" },
  ],
};

export const offerSection = {
  title: "Tudo o que você vai receber no Diário de Memórias",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
  lead: "Você escolhe o modelo e já pode começar na mesma hora.",
  image: {
    src: "/kit-diario.webp",
    alt: "Kit do Diário de Memórias: diário aberto com páginas de viagem, títulos, molduras, frases e elementos prontos para imprimir",
    width: 1024,
    height: 1024,
  },
  howItWorks: [
    {
      title: "PARTE 1 — Organize sua montagem",
      desc: "Escolha quais fotos, papéis, recortes, elementos e materiais separar antes de começar.",
    },
    {
      title: "PARTE 2 — Monte seu Diário de Memórias",
      desc: "Entenda a estrutura do diário e visualize como o projeto completo será montado.",
    },
    {
      title: "PARTE 3 — Modelos Prontos de Montagem para você seguir",
      desc: "Siga modelos visuais de capa, abertura e páginas internas para posicionar suas fotos, papéis, frases e elementos com mais facilidade.",
    },
    {
      title: "Em cada modelo você verá:",
      desc: "Quantidade e tamanho das fotos, posição dos elementos, espaços para títulos e memórias e uma ordem simples de montagem.",
    },
  ],
};

export const bonusSection = {
  titleLines: ["E NÃO PARA POR AÍ...", "TEM MAIS!", "Você também vai receber…"],
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
  ] as {
    label: string;
    title: string;
    features: string[];
    price: string;
    src?: string;
  }[],
};

export const plansSection = {
  pill: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
  title: "ESCOLHA A MELHOR OPÇÃO PARA VOCÊ",
  basic: {
    name: "PLANO BÁSICO",
    image: {
      src: "/plano-basico.webp",
      alt: "Diário de Memórias aberto com páginas de viagem, fotos, tesoura e washi tape",
      width: 1024,
      height: 1024,
    },
    receiveLabel: "Você recebe:",
    features: [
      "Guia de organização da montagem",
      "Estrutura completa do diário",
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
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
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
};

export const guarantee = {
  seal: { alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "GARANTIA DE 7 DIAS",
  intro: "🔒 Compra 100% segura e garantida.",
  lead: "Isso significa que, se você achar que:",
  bullets: [
    "o material não faz sentido para suas criações",
    "os modelos não atendem suas expectativas",
    "ou simplesmente não quiser continuar.",
  ],
  outro: "Você pode solicitar o reembolso, sem perguntas, sem burocracia, não gostou? Devolvemos 100% do seu dinheiro de volta.",
  outroStrong: "",
  helpLabel: "",
};

export const stepsSection = {
  title: "",
  subtitle: "",
  ctaLabel: "",
  steps: [] as { icon: string; title: string; desc: string; items: string[] }[],
};

export const faqTitle = "PERGUNTAS FREQUENTES";

export const faq: readonly (readonly [string, string])[] = [
  [
    "O que é o Diário de Memórias?",
    "O Diário de Memórias é um material digital prático com modelos prontos e guias visuais para ajudar você a montar um scrapbook de forma mais simples, organizada e sem precisar criar tudo do zero.",
  ],
  [
    "O Diário de Memórias é um curso?",
    "Não. É um material digital prático com orientações, modelos prontos e referências visuais para você seguir durante a montagem.",
  ],
  [
    "O que eu recebo no Plano Básico?",
    "Você recebe o Diário de Memórias, com organização da montagem, estrutura do projeto e modelos visuais das páginas.",
  ],
  [
    "O que eu recebo no Plano Completo?",
    "Além do Diário de Memórias, você recebe os 4 bônus com elementos, frases, molduras e papéis de fundo prontos para imprimir.",
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
];
