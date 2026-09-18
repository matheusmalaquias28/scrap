import type { OfferContent } from "./types";

/**
 * Oferta "Guia Mágico do Concreto Decorativo — Do Pó ao Lucro" — rota
 * `/concreto-decorativo`.
 *
 * Estrutura clonada de `/cuba-resina` (mesmo visual, reaproveita o tema
 * `.theme-resina` de `app/page.css`). A copy foi aplicada VERBATIM da landing de
 * origem (site.blogestudos.com/guia-magico-do-concreto-decorativo-do-po-ao-lucro),
 * sem alterar nenhuma palavra.
 *
 * Adaptações de estrutura para receber toda a copy:
 *   - o hero ganhou uma checklist de destaques (`hero.highlights`) para a faixa
 *     de 4 bullets logo abaixo da headline;
 *   - a seção "por quê" (`whySection`) recebeu o bloco "O PROJETO VISUAL DA
 *     BANDEJA DE CONCRETO POSSUI:";
 *   - a seção de passos (`stepsSection`) recebeu o bloco "COMO É O ACESSO";
 *   - sem autor nomeado na origem, o bloco de autoridade não é renderizado.
 *
 * Elementos de "chrome" que a origem não traz explicitamente (pílulas de
 * urgência dos planos) reutilizam o padrão das ofertas irmãs.
 *
 * ⚠️ Pendências:
 *   - imagens em `public/offers/concreto-decorativo/` (enquanto o `src` não
 *     existir, aparece um placeholder no lugar). Depois de subir as artes, rode
 *     `scripts/gen-responsive.mjs` para gerar as variantes responsivas.
 */
export const concretoDecorativo: OfferContent = {
  cashflowOfferId: "908ce44b-d781-4c25-b932-7829416805f0",
  meta: {
    title: "Guia Mágico do Concreto Decorativo — Do Pó ao Lucro",
    description:
      "Projeto visual da bandeja de concreto decorativo para executar do começo ao fim sem perder material.",
    ogTitle: "Guia Mágico do Concreto Decorativo — Do Pó ao Lucro",
    ogDescription:
      "Projeto visual da bandeja de concreto decorativo para executar do começo ao fim sem perder material.",
  },

  theme: {
    /**
     * Paleta de resina: marfim frio → água clara → vidro turquesa → teal →
     * teal profundo, com âmbar/cobre como ÚNICA cor quente (urgência + CTA).
     */
    palette: {
      paper: "#f3f6f4",
      blush: "#dfeeec",
      mint: "#cbe5e2",
      peacock: "#0f6b63",
      plum: "#06322f",
      raspberry: "#b0421f",
      marigold: "#e2a33c",
      card: "#ffffff",
      ink: "#0e2f2c",
      muted: "#4d6764",
      cta: "#d97316",
      badge: "#0f6b63",
      brand: "#b0421f",
      alert: "#b8442a",
    },
    heroHeading: {
      // `scale: 0.7` reduz cada tarja do título "PROJETO VISUAL…" em 30% —
      // escopado a esta oferta (a /cuba-resina não tem `scale`).
      highlight: {
        color: "#ffffff",
        bg: "#0f6b63",
        font: "var(--font-fredoka)",
        weight: 700,
        scale: 0.9,
      },
      title: { color: "#ffffff", bg: "#06322f", scale: 0.9 },
    },
    balanceText: true,
    className: "theme-resina",
  },

  hero: {
    logo: { src: "", alt: "Guia Mágico do Concreto Decorativo", width: 200, height: 60 },
    secureSeal: "",
    // Título do hero em duas tarjas com visuais distintos:
    //   1ª tarja (highlight) — "PROJETO VISUAL DA BANDEJA DE CONCRETO DECORATIVO"
    //   2ª tarja (title)     — "PARA EXECUTAR DO COMEÇO AO FIM SEM PERDER MATERIAL"
    titleHighlight: "PROJETO VISUAL DA BANDEJA DE CONCRETO DECORATIVO",
    title: "PARA EXECUTAR DO COMEÇO AO FIM SEM PERDER MATERIAL",
    image: {
      alt: "Bandejas de concreto decorativo empilhadas em várias cores",
      width: 1274,
      height: 1274,
    },
    poster: { src: "/offers/concreto-decorativo/img-hero-concreto.png" },
    subtitle: "",
    description: "",
    highlights: [
      "Projeto organizado para imprimir ou consultar ao lado da bancada",
      "Materiais, quantidades exatas e utensílios por etapa",
      "Sequência visual detalhada da preparação ao acabamento",
      "Evita desperdício na primeira produção da peça",
    ],
    ctaLabel: "QUERO O PROJETO VISUAL AGORA",
    deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
    socialProofLabel: "",
  },

  materials: {
    title: "VEJA OS MATERIAIS QUE VOCÊ VAI RECEBER JÁ",
    imageSize: { width: 1055, height: 1491 },
    items: [
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(1).png",
        alt: "Página do guia: “Você já sabe produzir com as mãos. O que falta é um projeto fechado” — as quatro decisões que o concreto traz",
      },
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(2).png",
        alt: "Página do guia: “Prepare o molde e o efeito decorativo” — passo a passo de preparação do molde",
      },
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(3).png",
        alt: "Página do guia: “Misture nesta ordem e pare neste ponto” — sequência de pesagem e mistura do concreto",
      },
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(4).png",
        alt: "Página do guia: “Retire o ar sem deformar a bandeja” — como remover bolhas com batidas leves",
      },
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(5).png",
        alt: "Página do guia: “Se algo saiu diferente, comece por aqui” — soluções para esfarelar, bolhas, trincas e manchas",
      },
      {
        src: "/offers/concreto-decorativo/materiais-receber-concreto%20(6).png",
        alt: "Página do guia: “Você já sabe produzir com as mãos. O que falta é um projeto fechado” — as quatro decisões que o concreto traz",
      },
    ],
  },

  whySection: {
    title: "O PROJETO VISUAL DA BANDEJA DE CONCRETO POSSUI:",
    cards: [
      {
        icon: "📝",
        title: "Instruções detalhadas",
        desc: "cada etapa organizada com clareza",
      },
      {
        icon: "🖼️",
        title: "Referências visuais",
        desc: "imagens para guiar sua produção",
      },
      {
        icon: "🧾",
        title: "Lista de materiais",
        desc: "tudo que você precisa em uma só ficha",
      },
      {
        icon: "📐",
        title: "Formato prático",
        desc: "versão resumida para consultar na bancada",
      },
      {
        icon: "⚡",
        title: "Acesso imediato",
        desc: "comece a produzir assim que comprar",
      },
    ],
  },

  idealSection: {
    title: "ESTE GUIA É IDEAL PARA VOCÊ QUE DESEJA",
    items: [
      {
        title: "EXPLORE NOVAS TÉCNICAS DE ARTESANATO",
        desc: "Aprenda a trabalhar com concreto decorativo e amplie suas habilidades manuais.",
      },
      {
        title: "PRODUZIR PEÇAS ÚNICAS E PERSONALIZADAS",
        desc: "Desenvolva bandejas com acabamentos que refletem seu estilo pessoal.",
      },
      {
        title: "EVITAR DESPERDÍCIO DE MATERIAIS",
        desc: "Tenha um guia claro com quantidades exatas para cada etapa do processo.",
      },
      {
        title: "TRABALHAR COM UM PROJETO VISUAL CLARO",
        desc: "Siga um passo a passo visual que facilita a execução da peça.",
      },
      {
        title: "TRANSFORMAR IDEIAS EM REALIDADE",
        desc: "Tire suas ideias do papel e comece a produzir suas bandejas decorativas.",
      },
      {
        title: "APROVEITAR OPORTUNIDADES DE RENDA EXTRA",
        desc: "Venda suas peças e aumente sua renda com artesanato de qualidade.",
      },
    ],
  },

  offerSection: {
    title: "TUDO O QUE VOCÊ VAI RECEBER",
    pill: "⚡ACESSO IMEDIATO",
    cardTitle: "",
    lead: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR. Você escolhe o modelo e já pode começar na mesma hora.",
    image: {
      src: "/offers/concreto-decorativo/tudo-organizado.png",
      alt: "Materiais e utensílios do projeto organizados sobre a bancada, com as fichas de mistura e acabamento",
      width: 1536,
      height: 2048,
    },
    howItWorksNumbered: true,
    howItWorks: [
      { title: "Ficha Visual da Peça", desc: "" },
      { title: "Materiais e Quantidades", desc: "" },
      { title: "Mapa Visual de Produção", desc: "" },
      { title: "Mapa Visual de Acabamento", desc: "" },
      { title: "Versão resumida para consulta rápida", desc: "" },
      { title: "Acesso imediato por e-mail e área de membros", desc: "" },
      { title: "E muito mais...", desc: "" },
    ],
  },

  bonusSection: {
    titleLines: ["E NÃO PARA POR AÍ...", "TEM MAIS!", "Você também vai receber…"],
    pill: "🎁 4 BÔNUS EXCLUSIVOS",
    exclusiveNote: "",
    items: [
      {
        label: "BÔNUS #1",
        title: "6 Cores para Sua Bandeja de Concreto",
        src: "/offers/concreto-decorativo/BONUS%201.png",
        desc: "Seis referências visuais de cores que podem ser aplicadas ao mesmo projeto, incluindo bege, terracota, verde, preto, branco e cinza. Cada opção apresenta a referência final e a quantidade de pigmento utilizada na mistura testada.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #2",
        title: "5 Composições de Granilite para a Bandeja",
        src: "/offers/concreto-decorativo/BONUS%202.jpg",
        desc: "Cinco formas de distribuir cores e fragmentos na mesma bandeja: delicada, colorida, terrosa, monocromática e contrastante. As composições alteram apenas o efeito visual, preservando o projeto principal.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #3",
        title: "4 Formatos de Bandeja de Concreto Decorativo",
        src: "/offers/concreto-decorativo/BONUS%203.png",
        desc: "Referências de bandejas oval, redonda, retangular e orgânica produzidas com a mesma sequência visual. Inclui as dimensões dos moldes e a quantidade ajustada de material para cada formato.",
        features: [],
        price: "R$27",
      },
    ],
  },

  plansSection: {
    // A origem não traz uma pílula de urgência nos planos — reutiliza o padrão
    // das ofertas irmãs.
    pill: "🔥 OFERTA VÁLIDA POR TEMPO LIMITADO",
    title: "ESCOLHA A OPÇÃO IDEAL PARA VOCÊ",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/offers/concreto-decorativo/plano-basico-concreto%20(1).jpg",
        alt: "Mockup do plano básico",
        width: 1062,
        height: 1062,
      },
      receiveLabel: "Você recebe:",
      features: [
        "Projeto Visual da Bandeja de Concreto Decorativo",
        "Ficha Visual com materiais e quantidades",
        "Mapas visuais de produção e acabamento",
        "Acesso imediato por e-mail",
      ],
      // Bônus que só vêm no Plano Completo, listados tachados na comparação.
      unavailableFeatures: [
        "Bônus: 6 Cores para Sua Bandeja",
        "Bônus: 5 Composições de Granilite",
        "Bônus: 4 Formatos de Bandeja",
      ],
      oldPrice: "R$17,90",
      price: "R$ 17,90",
      installments: "ou 2x de R$9,00",
      savings: "Você economiza R$0,00",
      ctaLabel: "QUERO GARANTIR O MEU",
    },
    complete: {
      // Sem urgência explícita na origem — reutiliza o padrão das irmãs.
      badge: "🔥 OFERTA VÁLIDA POR TEMPO LIMITADO",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/offers/concreto-decorativo/plano-completo-concreto%20(1).jpg",
        alt: "Mockup do plano completo",
        width: 1062,
        height: 1062,
      },
      pill: "⚡3x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "Projeto Visual da Bandeja de Concreto Decorativo",
        "Ficha Visual com materiais e quantidades",
        "Mapas visuais de produção e acabamento",
        "Bônus: 6 Cores para Sua Bandeja",
        "Bônus: 5 Composições de Granilite",
        "Bônus: 4 Formatos de Bandeja",
      ],
      oldPrice: "R$27,90",
      price: "R$ 27,90",
      installments: "ou 3x de R$9,30",
      savings: "Você economiza R$0,00",
      ctaLabel: "QUERO GARANTIR O MEU",
    },
    upsellNote: {
      alert: "",
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
      "o material não faz sentido para sua produção",
      "os passos não atendem suas expectativas",
      "ou simplesmente não quiser continuar",
    ],
    outro:
      "Você pode solicitar o reembolso sem burocracia. O risco fica todo do nosso lado.",
    outroStrong: "",
    helpLabel: "",
  },

  /**
   * Mesma seção de autoridade da `/cuba-resina` (mesma pessoa, mesma estrutura),
   * com todas as referências à cuba de resina trocadas pelas do concreto
   * decorativo. Renderiza no mesmo campo de cor da garantia.
   */
  authority: {
    pill: "QUEM CRIOU ESTE MATERIAL",
    name: "Bruna Silva",
    role: "Artesã e criadora do Guia Mágico do Concreto Decorativo",
    photo: {
      // Reaproveita a foto já publicada em /offers/terrario/.
      src: "/offers/terrario/bruna.webp",
      alt: "Bruna Silva, criadora do Guia Mágico do Concreto Decorativo, em seu ateliê",
      width: 640,
      height: 640,
    },
    paragraphs: [
      "Brasileira, apaixonada por artesanato e por tudo que envolve fazer com as próprias mãos. Foi produzindo peças de concreto decorativo em casa — testando moldes, proporções e pigmentos — que a Bruna começou a anotar o que dava certo e, principalmente, o que não dava.",
      "Com milhares de alunas acompanhadas pelo Brasil, ela percebeu que quase todo mundo trava nos mesmos pontos: a quantidade de concreto, o tempo de cura e o acabamento da peça.",
      "Foi daí que nasceu o Guia Mágico do Concreto Decorativo: um projeto visual completo, feito para ficar ao seu lado durante a produção e responder as dúvidas que ela mais escuta de quem vai fazer a primeira bandeja.",
    ],
  },

  contact: {
    email: "",
  },

  // Sem depoimentos: a origem não traz prints, então a seção inteira (com as
  // duas waves) não é renderizada.
  testimonials: {
    title: "VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO",
    subtitle: "Leia os depoimentos de quem já tomou a decisão certa.",
    items: [],
  },

  stepsSection: {
    title: "COMO É O ACESSO",
    subtitle: "(Siga esses passos simples para começar.)",
    ctaLabel: "QUERO GARANTIR O MEU",
    steps: [
      {
        icon: "🛒",
        title: "Conclua sua compra",
        desc: "Após o pagamento, seu acesso é liberado automaticamente.",
        items: [
          "Receba o material por e-mail",
          "Acesse a área de membros",
          "Baixe os arquivos",
        ],
      },
      {
        icon: "🧱",
        title: "Use e aplique",
        desc: "Siga as orientações e comece a produção.",
        items: [
          "Consulte a ficha visual",
          "Prepare os materiais",
          "Produza sua bandeja",
        ],
      },
      {
        icon: "✨",
        title: "Finalize seu projeto",
        desc: "Aplique o acabamento e aproveite sua peça.",
        items: [
          "Lixe e limpe a superfície",
          "Aplique o selador",
          "Exiba sua bandeja",
        ],
      },
      {
        icon: "📣",
        title: "Compartilhe sua criação",
        desc: "Mostre suas bandejas para amigos e familiares.",
        items: [
          "Tire fotos do resultado",
          "Receba elogios",
          "Venda se desejar",
        ],
      },
    ],
  },

  faqTitle: "PERGUNTAS FREQUENTES",

  faq: [
    [
      "Preciso saber muito sobre concreto para usar o guia?",
      "Não. O guia é completo e ensina tudo que você precisa para começar.",
    ],
    [
      "O acesso é imediato?",
      "Sim. Após a confirmação do pagamento, o acesso é liberado automaticamente.",
    ],
    [
      "Posso usar outros moldes?",
      "Sim. O projeto é adaptável a diferentes moldes que você tiver.",
    ],
    [
      "O guia é em PDF?",
      "Sim. Você receberá o material em formato PDF, fácil de acessar e imprimir.",
    ],
    [
      "Tem garantia?",
      "Sim. Você tem 7 dias para solicitar reembolso se não ficar satisfeito.",
    ],
    [
      "Posso vender as peças que produzir?",
      "Sim. As peças produzidas podem ser vendidas como você desejar.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. As provas do produto e as imagens exibidas nesta página são meramente ilustrativas e foram geradas por inteligência artificial. Este é um produto digital: você não recebe nenhum item físico — recebe um material em formato digital, que pode ser impresso em casa. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#planos",
    basic:
      "https://pay.hotmart.com/J107649593H?off=8z96pi6c&checkoutMode=10&bid=1789698456916",
    complete:
      "https://pay.hotmart.com/E107649871A?off=skx649ds&checkoutMode=10&bid=1789698425475",
  },
};
