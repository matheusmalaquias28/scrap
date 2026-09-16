import type { OfferContent } from "./types";

/**
 * Oferta "Viva de Resina: Produza sua Primeira Cuba de Apoio" — rota
 * `/cuba-resina`.
 *
 * Estrutura duplicada de `/terrario`. A copy é aplicada VERBATIM da landing de
 * origem (site.blogestudos.com/viva-de-resina-produza-sua-primeira-cuba-de-apoio),
 * sem alterar nenhuma palavra. Onde a origem não tem um bloco (ex.: a faixa
 * "por quê" e a seção de autoridade), o bloco simplesmente não é renderizado —
 * nada foi escrito para preencher.
 *
 * Visual próprio (paleta de resina: vidro turquesa → teal profundo, com
 * âmbar/cobre como única cor quente) definido em `theme`. Os refinos de
 * espaçamento, tipografia e cor ficam no bloco `.theme-resina` de
 * `app/page.css` — nada vaza para as demais ofertas.
 *
 * ⚠️ Pendências:
 *   - imagens em `public/offers/cuba-resina/` (enquanto o `src` não existir,
 *     aparece um placeholder no lugar — igual à página de origem).
 *   - links de checkout do Hotmart (`checkout.basic` / `checkout.complete`)
 *     ainda apontam para `#planos`.
 */
export const cubaResina: OfferContent = {
  meta: {
    title: "Viva de Resina: Produza sua Primeira Cuba de Apoio",
    description:
      "Aprenda a produzir uma cuba de resina bonita e bem-acabada com um projeto completo e organizado.",
    ogTitle: "Viva de Resina: Produza sua Primeira Cuba de Apoio",
    ogDescription:
      "Aprenda a produzir uma cuba de resina bonita e bem-acabada com um projeto completo e organizado.",
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
      highlight: {
        color: "#ffffff",
        bg: "#0f6b63",
        font: "var(--font-fredoka)",
        weight: 700,
      },
      title: { color: "#ffffff", bg: "#06322f" },
    },
    balanceText: true,
    className: "theme-resina",
  },

  hero: {
    logo: { src: "", alt: "Viva de Resina", width: 200, height: 60 },
    secureSeal: "",
    // Headline da origem, quebrada em duas tarjas — sem mudar uma palavra.
    titleHighlight: "PROJETO VISUAL COMPLETO",
    title: "PARA PRODUZIR SUA PRIMEIRA CUBA DE RESINA SEM DESPERDÍCIO",
    image: {
      alt: "Mockup principal",
      width: 852,
      height: 852,
    },
    poster: { src: "/offers/cuba-resina/hero.webp" },
    subtitle:
      "Produza uma peça bonita com todas as medidas, etapas e materiais organizados.",
    description: "",
    ctaLabel: "QUERO O PROJETO DA MINHA CUBA",
    deliveryNote: "📲 Você recebe tudo na hora, direto no e-mail",
    socialProofLabel: "",
  },

  materials: {
    title: "VEJA OS MATERIAIS QUE VOCÊ VAI RECEBER JÁ",
    // Páginas reais do guia visual, normalizadas em A4 (1055×1491) para o
    // carrossel ter uma caixa só e não recortar nenhuma ficha.
    imageSize: { width: 1055, height: 1491 },
    items: [
      {
        src: "/offers/cuba-resina/guia-01-materiais.webp",
        alt: "Página 7 do guia — “Tudo o que precisa estar na bancada”: molde e apoio, mistura, pigmentação, acabamento, hidráulica e proteção",
      },
      {
        src: "/offers/cuba-resina/guia-02-mise-en-place.webp",
        alt: "Página 13 — “Organize a mistura antes do relógio começar”: pesagem pronta, pigmentos separados, molde esperando e rota do despejo",
      },
      {
        src: "/offers/cuba-resina/guia-03-mistura.webp",
        alt: "Página 14 — “Resina + endurecedor: siga a proporção do seu sistema”, com exemplo de pesagem, tara e homogeneização",
      },
      {
        src: "/offers/cuba-resina/guia-04-pot-life.webp",
        alt: "Página 15 — “Pot life: o tempo útil começa quando os componentes se encontram”, da mistura ao despejo",
      },
      {
        src: "/offers/cuba-resina/guia-05-pigmentacao.webp",
        alt: "Página 16 — “Cor uniforme começa com uma mistura organizada”: compatibilidade, dosagem, divisão e homogeneidade do pigmento",
      },
      {
        src: "/offers/cuba-resina/guia-06-correcoes.webp",
        alt: "Página 27 — “Se algo não ficou certo, veja onde corrigir antes de refazer”: rebarba, vazamento, bolha superficial e cura mole",
      },
    ],
  },

  // A landing de origem não tem essa faixa — sem cards, a seção não é
  // renderizada (nenhuma copy foi inventada para preenchê-la).
  whySection: {
    title: "",
    cards: [],
  },

  idealSection: {
    title: "ESTE PROJETO É IDEAL PARA VOCÊ QUE DESEJA",
    items: [
      {
        title: "Produzir sua primeira cuba sem ficar adivinhando medidas",
        desc: "Tenha as medidas, quantidades e etapas organizadas para acompanhar o projeto com mais segurança do início ao fim.",
      },
      {
        title: "Evitar desperdício de resina por falta de planejamento",
        desc: "Saiba o que será necessário antes de começar, reduzindo improvisos que podem custar material, tempo e dinheiro.",
      },
      {
        title: "Fazer uma peça bonita e bem-acabada",
        desc: "Siga cada etapa da produção, do preparo do molde ao lixamento e polimento, para chegar a um resultado mais caprichado.",
      },
      {
        title: "Ter todas as informações do projeto em um só lugar",
        desc: "Em vez de procurar uma medida aqui, uma técnica ali e tentar montar tudo sozinho, acompanhe um projeto visual organizado.",
      },
      {
        title: "Produzir uma peça maior mesmo sem já ter feito uma cuba",
        desc: "Se você já conhece a resina, mas ainda não se sente seguro para partir para uma peça desse tipo, o projeto mostra o caminho completo para executar sua primeira cuba.",
      },
      {
        title: "Criar uma cuba para usar, presentear ou comercializar",
        desc: "Ao finalizar o projeto, você terá uma peça de resina que pode fazer parte da sua casa, virar um presente diferente ou até entrar no seu catálogo de produtos.",
      },
    ],
  },

  offerSection: {
    title: "TUDO O QUE VOCÊ VAI RECEBER",
    pill: "⚡ACESSO IMEDIATO",
    cardTitle: "",
    lead: "Tudo o que você precisa para produzir sua primeira cuba, organizado em um único projeto visual",
    image: {
      src: "/offers/cuba-resina/produto-principal.webp",
      alt: "Mockup do pacote",
      width: 1116,
      height: 1116,
    },
    howItWorksTitle: "O QUE VOCÊ VAI ENCONTRAR:",
    howItWorksNumbered: true,
    howItWorks: [
      {
        title: "Imagem e especificações da cuba pronta",
        desc: "Visualize a peça que será produzida e tenha uma referência clara do resultado final antes mesmo de começar.",
      },
      {
        title: "Lista de materiais, medidas e quantidades",
        desc: "Saiba o que será necessário para executar o projeto e prepare tudo antes de colocar a mão na resina.",
      },
      {
        title: "Preparação do molde de silicone",
        desc: "Acompanhe a etapa de preparação do molde que dará forma à sua cuba.",
      },
      {
        title: "Preparação, proporção e pigmentação da resina",
        desc: "Tenha as informações organizadas para preparar a resina utilizada no projeto.",
      },
      {
        title: "Preenchimento do molde passo a passo",
        desc: "Veja a sequência de produção para saber o que fazer na hora de preencher o molde.",
      },
      {
        title: "Cura e desmolde da peça",
        desc: "Entenda essa etapa antes de retirar a cuba do molde e avançar para a finalização.",
      },
      {
        title: "Lixamento, polimento e acabamento",
        desc: "Acompanhe o processo de acabamento para deixar a peça mais bonita e bem finalizada.",
      },
      {
        title: "Colocação da válvula",
        desc: "Veja como avançar da peça em resina para uma cuba pronta para receber os componentes necessários.",
      },
      {
        title: "Teste de funcionamento",
        desc: "Finalize o projeto verificando a cuba depois da instalação.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E NÃO PARA POR AÍ...", "TEM MAIS!", "Você também vai receber…"],
    pill: "🎁 5 BÔNUS EXCLUSIVOS",
    exclusiveNote: "",
    items: [
      {
        label: "BÔNUS #1",
        title: "Cuba com Efeito Mármore",
        src: "/offers/cuba-resina/bonus-01.webp",
        desc: "variação visual com combinação de cores, divisão da mistura e ordem de aplicação para criar o efeito marmorizado.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #2",
        title: "Cuba com Efeito Granilite",
        src: "/offers/cuba-resina/bonus-02.webp",
        desc: "variação com pigmentos e elementos decorativos para reproduzir a aparência de pedra ou granilite.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #3",
        title: "Cuba Translúcida com Flores",
        src: "/offers/cuba-resina/bonus-03.webp",
        desc: "variação com flores secas, mostrando a preparação, o posicionamento e a aplicação das camadas.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #4",
        title: "Cuba com Efeito Perolado",
        src: "/offers/cuba-resina/bonus-04.webp",
        desc: "variação com pigmentos perolados para criar brilho, profundidade e movimento na peça.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #5",
        title: "Cuba com Borda Metalizada",
        src: "/offers/cuba-resina/bonus-05.webp",
        desc: "variação com acabamento dourado, prateado ou cobre aplicado nas bordas da cuba.",
        features: [],
        price: "R$27",
      },
    ],
  },

  plansSection: {
    pill: "🔥 OFERTA VÁLIDA POR TEMPO LIMITADO",
    title: "ESCOLHA A MELHOR OPÇÃO PARA VOCÊ",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/offers/cuba-resina/plano-basico.webp",
        alt: "Mockup do plano básico",
        width: 1106,
        height: 1106,
      },
      receiveLabel: "Você recebe:",
      features: [
        "Imagem e especificações da cuba pronta",
        "Lista de materiais, medidas e quantidades",
        "Preparação do molde de silicone",
        "Preparação, proporção e pigmentação da resina",
        "Preenchimento do molde passo a passo",
        "Cura e desmolde da peça",
        "Lixamento, polimento e acabamento",
        "Colocação da válvula",
        "Teste de funcionamento",
      ],
      // Mesma grafia do Plano Completo: a comparação lado a lado fica 1:1.
      // Renderizados tachados e opacos, deixando explícito o que só vem no
      // Plano Completo.
      unavailableFeatures: [
        "🎁 BÔNUS 1 - Cuba com Efeito Mármore",
        "🎁 BÔNUS 2 - Cuba com Efeito Granilite",
        "🎁 BÔNUS 3 - Cuba Translúcida com Flores",
        "🎁 BÔNUS 4 - Cuba com Efeito Perolado",
        "🎁 BÔNUS 5 - Cuba com Borda Metalizada",
      ],
      oldPrice: "R$47,90",
      price: "R$ 17,90",
      installments: "ou 4x de R$4,48 no cartão",
      // 47,90 − 17,90
      savings: "Você economiza R$30,00",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "🔥 OFERTA VÁLIDA POR TEMPO LIMITADO",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/offers/cuba-resina/plano-completo.webp",
        alt: "Mockup do plano completo",
        width: 1254,
        height: 1254,
      },
      pill: "⚡5x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "Imagem e especificações da cuba pronta",
        "Preparação do molde de silicone",
        "Preparação, proporção e pigmentação da resina",
        "Preenchimento do molde passo a passo",
        "Cura e desmolde da peça",
        "Lixamento, polimento e acabamento",
        "Colocação da válvula",
        "Teste de funcionamento",
        "🎁 BÔNUS 1 - Cuba com Efeito Mármore",
        "🎁 BÔNUS 2 - Cuba com Efeito Granilite",
        "🎁 BÔNUS 3 - Cuba Translúcida com Flores",
        "🎁 BÔNUS 4 - Cuba com Efeito Perolado",
        "🎁 BÔNUS 5 - Cuba com Borda Metalizada",
      ],
      oldPrice: "R$67,90",
      price: "R$ 27,90",
      installments: "ou 6x de R$4,65 no cartão",
      // 67,90 − 27,90
      savings: "Você economiza R$40,00",
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
    intro: "🔒 Compra 100% segura e garantida",
    lead: "Isso significa que, a qualquer momento, se você achar que:",
    bullets: [
      "o projeto não faz sentido para sua produção",
      "as orientações não atendem sua necessidade",
      "ou simplesmente não quiser continuar",
    ],
    outro:
      "Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do nosso lado.",
    outroStrong: "",
    helpLabel: "",
  },

  /**
   * Mesma seção de autoridade da `/terrario` (mesma pessoa, mesma estrutura),
   * com todas as referências ao terrário trocadas pelas da cuba de resina.
   * Renderiza no mesmo campo de cor da garantia.
   */
  authority: {
    pill: "QUEM CRIOU ESTE MATERIAL",
    name: "Bruna Silva",
    role: "Artesã e criadora do Viva de Resina",
    photo: {
      // Reaproveita a foto já publicada em /offers/terrario/.
      src: "/offers/terrario/bruna.webp",
      alt: "Bruna Silva, criadora do Viva de Resina, em seu ateliê",
      width: 640,
      height: 640,
    },
    paragraphs: [
      "Brasileira, apaixonada por artesanato e por tudo que envolve fazer com as próprias mãos. Foi produzindo peças de resina em casa — testando moldes, proporções e pigmentos — que a Bruna começou a anotar o que dava certo e, principalmente, o que não dava.",
      "Com milhares de alunas acompanhadas pelo Brasil, ela percebeu que quase todo mundo trava nos mesmos pontos: a quantidade de resina, o tempo de cura e o acabamento da peça.",
      "Foi daí que nasceu o Viva de Resina: um projeto visual completo, feito para ficar ao seu lado durante a produção e responder as dúvidas que ela mais escuta de quem vai fazer a primeira cuba.",
    ],
  },

  contact: {
    email: "",
  },

  // Sem depoimentos: a landing de origem não tem prints e a seção inteira
  // (com as duas waves) não é renderizada — o fluxo de cores vai direto de
  // peacock (bônus) para mint (planos).
  testimonials: {
    title: "VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO",
    subtitle: "Leia os depoimentos de quem já tomou a decisão certa.",
    items: [],
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
      "Preciso ter experiência com resina para usar o guia?",
      "Não. O guia é feito para iniciantes e inclui todas as etapas detalhadas.",
    ],
    [
      "Os materiais são fáceis de encontrar?",
      "Sim. Todos os materiais estão listados e são facilmente encontrados em lojas de artesanato.",
    ],
    [
      "O acesso ao material é imediato?",
      "Sim. Após a confirmação do pagamento, você recebe o acesso imediatamente.",
    ],
    [
      "Posso pedir reembolso se não gostar do material?",
      "Sim. Você tem 7 dias para solicitar o reembolso sem burocracia.",
    ],
    [
      "O projeto é apenas para uma cuba?",
      "Não. Você também recebe bônus com variações de design para personalizar sua peça.",
    ],
    [
      "Qual é o formato do material?",
      "O guia é um eBook com imagens e instruções passo a passo.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#planos",
    // Plano Básico — R$ 17,90
    basic: "https://pay.hotmart.com/X107628756E?off=trh17d2v&checkoutMode=10",
    // Plano Completo — R$ 27,90
    complete: "https://pay.hotmart.com/K107628648X?off=ecjugstd&checkoutMode=10",
  },
};
