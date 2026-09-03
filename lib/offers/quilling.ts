import type { OfferContent } from "./types";

/**
 * Oferta "Quilling" — rota `/quilling`.
 *
 * Copy aplicada da landing de origem. Visual próprio (paleta lilás/violeta/rosa)
 * definido em `theme` — não afeta as demais páginas.
 *
 * ⚠️ Ainda placeholder:
 *   - `checkout.basic` / `checkout.complete`: trocar pelos links reais da Hotmart;
 *   - imagens em `public/offers/quilling/` (enquanto o `src` não existir, aparece
 *     um placeholder no lugar).
 */
export const quilling: OfferContent = {
  meta: {
    title: "Quilling: 12 Projetos para Montar e Experimentar seu Hobby",
    description:
      "12 projetos de quilling com moldes e mapas de montagem para produzir suas primeiras peças sem erro.",
    ogTitle: "Quilling: 12 Projetos para Montar e Experimentar seu Hobby",
    ogDescription:
      "Siga os moldes, prepare cada forma no tamanho indicado e use os mapas de montagem para saber exatamente onde posicionar cada peça.",
  },

  theme: {
    // Paleta própria do quilling: lilás/violeta/rosa/aqua (arte em papel colorido).
    palette: {
      paper: "#f6f1ff",
      blush: "#ffe3ee",
      mint: "#d8f3ef",
      peacock: "#6d3bd1",
      plum: "#2c1a52",
      raspberry: "#e23a7a",
      marigold: "#f7b32b",
      card: "#fffdfa",
      ink: "#2a2140",
      muted: "#6b6484",
      cta: "#00db6a",
      badge: "#6d3bd1",
      brand: "#e23a7a",
      alert: "#e23a7a",
    },
    heroHeading: {
      // Headline em Fredoka, bold, 10% menor que o padrão.
      highlight: {
        color: "#e23a7a",
        bg: "#ffffff",
        font: "var(--font-fredoka)",
        scale: 0.9,
        weight: 700,
      },
      title: { color: "#ffffff", bg: "#6d3bd1", scale: 0.8 },
    },
    balanceText: true,
  },

  offerBar: {
    text: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
  },

  hero: {
    logo: { src: "", alt: "Quilling", width: 200, height: 60 },
    secureSeal: "",
    titleHighlight: "Quilling: 12 Projetos para Montar\ne Experimentar seu Hobby",
    title:
      "com moldes e mapas de montagem para produzir suas primeiras peças sem erro",
    image: {
      alt: "12 projetos de quilling para montar com flor emoldurada e selo de 4 bônus exclusivos",
      width: 1024,
      height: 1024,
    },
    poster: { src: "/offers/quilling/hero.webp" },
    subtitle:
      "Siga os moldes, prepare cada forma no tamanho indicado e use os mapas de montagem para saber exatamente onde posicionar cada peça.",
    ctaLabel: "QUERO MONTAR MEUS PROJETOS AGORA",
    deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail.",
    socialProofLabel: "",
  },

  materials: {
    title: "VEJA NA PRÁTICA OS PROJETOS QUE VOCÊ VAI RECEBER",
    imageSize: { width: 720, height: 900 },
    items: [
      { src: "/offers/quilling/projeto-01.webp", alt: "Cartões decorados com quilling em formato de coração" },
      { src: "/offers/quilling/projeto-02.webp", alt: "Projeto de buquê de flores rosas em quilling" },
      { src: "/offers/quilling/projeto-03.webp", alt: "Projeto floral em quilling com tons pastel em moldura" },
      { src: "/offers/quilling/projeto-04.webp", alt: "Projeto de lavanda em quilling com laço amarelo" },
      { src: "/offers/quilling/projeto-05.webp", alt: "Projeto de buquê floral colorido em quilling" },
      { src: "/offers/quilling/projeto-06.webp", alt: "Projeto de coração com tulipas em quilling" },
    ],
  },

  whySection: {
    title: "",
    cards: [],
  },

  idealSection: {
    title: "ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA",
    items: [
      {
        title: "Fazer suas primeiras peças de quilling",
        desc: "Tenha acesso a projetos prontos que facilitam o aprendizado e a execução das peças.",
      },
      {
        title: "Criar peças decorativas lindas",
        desc: "Siga os moldes e guias visuais para montar suas criações de forma simples.",
      },
      {
        title: "Aprender de maneira divertida",
        desc: "Experimente a satisfação de produzir suas próprias peças decorativas.",
      },
      {
        title: "Usar materiais que já tem em casa",
        desc: "Com as orientações, você pode utilizar itens que já possui para começar.",
      },
      {
        title: "Compartilhar suas criações",
        desc: "Mostre suas peças para amigos e familiares, e receba elogios pelo seu talento.",
      },
      {
        title: "Desenvolver um novo hobby",
        desc: "Descubra a alegria de criar e relaxar enquanto faz artesanato.",
      },
    ],
  },

  offerSection: {
    title: "Tudo o que você vai receber",
    pill: "⚡ACESSO IMEDIATO",
    cardTitle: "TUDO O QUE VOCÊ VAI RECEBER PARA MONTAR SEUS PROJETOS DE QUILLING",
    lead: "Você escolhe o projeto e já pode começar na mesma hora.",
    image: {
      src: "/offers/quilling/kit.webp",
      alt: "Guia de colagem e acabamento de quilling com passo a passo e borboleta finalizada",
      width: 1024,
      height: 1024,
    },
    howItWorks: [
      {
        title: "Guia de Materiais e Preparação",
        desc: "Saiba quais materiais usar, quais são opcionais e como deixar tudo pronto antes de começar.",
      },
      {
        title: "Guia Visual das Formas",
        desc: "Veja como preparar as principais formas de quilling usadas nos projetos.",
      },
      {
        title: "Folhas de Conferência de Tamanhos",
        desc: "Confira o tamanho das espirais e componentes antes de montar sua peça.",
      },
      {
        title: "12 Projetos de Quilling para Montar",
        desc: "Projetos florais, afetivos e inspirados na natureza para você praticar com peças completas.",
      },
      {
        title: "Moldes e Mapas de Montagem",
        desc: "Veja quais formas preparar, quantas fazer e onde posicionar cada componente.",
      },
      {
        title: "Guia de Colagem e Acabamento",
        desc: "Aprenda a colar com mais controle e deixar suas peças mais limpas, alinhadas e bem finalizadas.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E NÃO PARA POR AÍ...", "TEM MAIS!", "Você também vai receber…"],
    pill: "🎁 4 BÔNUS EXCLUSIVOS",
    exclusiveNote: "Bônus incluso somente no Plano Completo",
    items: [
      {
        label: "BÔNUS #1",
        title: "3 Marcadores de Página Decorados com Quilling",
        desc: "Monte 3 modelos delicados e transforme seus quillings em peças úteis e criativas.",
        features: [],
        price: "R$27",
        src: "/offers/quilling/bonus-01.webp",
      },
      {
        label: "BÔNUS #2",
        title: "5 Tags de Presente Decoradas com Quilling",
        desc: "Crie tags especiais para deixar presentes e lembranças ainda mais personalizados.",
        features: [],
        price: "R$27",
        src: "/offers/quilling/bonus-02.webp",
      },
      {
        label: "BÔNUS #3",
        title: "3 Vasos Florais em Quilling para Montar",
        desc: "Tenha mais 3 projetos florais para praticar a técnica e ampliar suas possibilidades de criação.",
        features: [],
        price: "R$27",
        src: "/offers/quilling/bonus-03.webp",
      },
      {
        label: "BÔNUS #4",
        title: "6 Novas Combinações de Cores para os 12 Projetos",
        desc: "Veja novas formas de combinar as cores dos 12 projetos e criar versões diferentes das mesmas peças.",
        features: [],
        price: "R$27",
        src: "/offers/quilling/bonus-04.webp",
      },
    ],
  },

  plansSection: {
    pill: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    title: "ESCOLHA COMO VOCÊ QUER COMEÇAR",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/offers/quilling/plano-basico.webp",
        alt: "Livro 12 Projetos de Quilling para montar com guia passo a passo",
        width: 1024,
        height: 1024,
      },
      receiveLabel: "Você recebe:",
      features: [
        "Guia de Materiais e Preparação",
        "Guia Visual das Formas",
        "Folhas de Conferência de Tamanhos",
        "Moldes e Mapas de Montagem",
        "Guia de Colagem e Acabamento",
      ],
      oldPrice: "R$37,90",
      price: "R$27,90",
      installments: "ou 4x de R$7,00 no cartão",
      savings: "Você economiza R$10,00",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/offers/quilling/plano-completo.webp",
        alt: "12 Projetos de Quilling para montar com os 4 bônus exclusivos",
        width: 1024,
        height: 1024,
      },
      pill: "⚡4x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "12 Projetos de Quilling para Montar",
        "🎁Bônus 1 — 3 Marcadores de Página Decorados com Quilling",
        "🎁Bônus 2 — 5 Tags de Presente Decoradas com Quilling",
        "🎁Bônus 3 — 3 Vasos Florais em Quilling para Montar",
        "🎁Bônus 4 — 6 Novas Combinações de Cores",
      ],
      oldPrice: "R$47,90",
      price: "R$37,90",
      installments: "ou 6x de R$6,30 no cartão",
      savings: "Você economiza R$10,00",
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
    title: "GARANTIA DE 7 DIAS — ZERO RISCO PRA VOCÊ",
    intro: "🔒 Compra 100% segura e garantida.",
    lead: "Isso significa que, em 7 dias, se você achar que:",
    bullets: [
      "o material não faz sentido para suas criações",
      "os projetos não atendem sua necessidade",
      "ou simplesmente não quiser continuar.",
    ],
    outro: "Você pode solicitar o reembolso.",
    outroStrong: "",
    helpLabel: "",
  },

  contact: {
    email: "",
  },

  testimonials: {
    title: "VEJA OS PROJETOS QUE NOSSAS ALUNAS ESTÃO FAZENDO",
    marquee: {
      duration: 32,
      itemWidth: 260,
      containerClassName: "w-full max-w-[960px] mx-auto",
      imageSize: { width: 819, height: 1024 },
    },
    items: [
      { src: "/offers/quilling/depoimento-01.webp", alt: "Três cartões com corações decorados em quilling", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-02.webp", alt: "Quatro cartões artesanais com flores em quilling", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-03.webp", alt: "Cartão com coração de rosas em quilling feito por cliente", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-04.webp", alt: "Buquê de tulipas em quilling feito por cliente", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-05.webp", alt: "Cartão com flor rosa e arabescos em quilling", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-06.webp", alt: "Xícara com flores em quilling feita por cliente", width: 819, height: 1024 },
      { src: "/offers/quilling/depoimento-07.webp", alt: "Buquê de rosas e flores em quilling feito por cliente", width: 819, height: 1024 },
    ],
  },

  stepsSection: {
    title: "",
    subtitle: "",
    ctaLabel: "",
    steps: [],
  },

  faqTitle: "AINDA FICOU COM ALGUMA DÚVIDA?",

  faq: [
    [
      "O que é o material?",
      "É um material digital com 12 projetos de quilling para montar, acompanhado de guias, moldes imprimíveis, referências de tamanho e mapas de montagem para ajudar você a preparar e posicionar cada componente.",
    ],
    [
      "Preciso já saber fazer quilling?",
      "Não. O material foi pensado para quem está começando e quer seguir projetos prontos com orientações visuais.",
    ],
    [
      "O que eu vou receber?",
      "Você recebe os 12 Projetos de Quilling para Montar, com guias, moldes, referências de tamanho e mapas de montagem.",
    ],
    [
      "Os moldes podem ser impressos?",
      "Sim. Os projetos incluem arquivos preparados para impressão e orientações para conferir a escala correta.",
    ],
    [
      "Preciso comprar muitos materiais?",
      "Não necessariamente. O guia mostra quais materiais são necessários, quais são opcionais e possíveis alternativas para alguns itens.",
    ],
    [
      "Vou saber onde colocar cada peça?",
      "Sim. Os mapas de montagem indicam o posicionamento dos componentes para você não precisar montar tudo 'no olho'.",
    ],
    [
      "E se eu não souber fazer as formas?",
      "Você terá um guia visual mostrando como preparar as principais formas utilizadas nos projetos.",
    ],
    [
      "Qual a diferença entre o Plano Básico e o Completo?",
      "O Plano Básico inclui o produto principal. Já o Plano Completo inclui o produto principal + os 4 bônus extras.",
    ],
    [
      "Como vou receber o material?",
      "Assim que a compra for confirmada, você recebe o acesso imediatamente no seu e-mail. Lá você encontra os dados para entrar na área de membros da Hotmart, onde todo o material fica disponível para baixar quando quiser — sem prazo de expiração.",
    ],
    [
      "O produto tem garantia?",
      "Sim. Você tem 7 dias de garantia incondicional. Se o material não atender suas expectativas, basta solicitar o reembolso pela própria Hotmart — sem burocracia, sem perguntas difíceis e com 100% do valor devolvido.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#planos",
    basic: "#", // TODO: substituir pelo link real da Hotmart (plano básico)
    complete: "#", // TODO: substituir pelo link real da Hotmart (plano completo)
  },
};
