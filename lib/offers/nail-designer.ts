import type { OfferContent } from "./types";

/**
 * Oferta "Nail Designer" (rota `/nail-designer`) — mesmo layout da
 * `/scrapbook-v2` (`.theme-diario`), com paleta rosé/berry (`.theme-nail`)
 * e copy do Kit Aula Pronta para instrutoras de nail design.
 */
export const nailDesigner: OfferContent = {
  cashflowOfferId: "2ecaaffa-4c36-4774-9f03-f4c594c25b23",
  meta: {
    title: "Kit Aula Pronta — Materiais Editáveis para Aulas de Nail Design",
    description:
      "Mais de 60 arquivos digitais editáveis para instrutoras de nail design: apostila, folhas de treino, atividades, lâminas e certificados.",
    ogTitle: "Kit Aula Pronta — Materiais Editáveis para Aulas de Nail Design",
    ogDescription:
      "Apostila, exercícios, lâminas e certificados prontos: coloque sua logo, imprima e dê aula.",
  },

  theme: {
    palette: {
      paper: "#fdf0f1",
      blush: "#fae1e6",
      mint: "#fff6f6",
      peacock: "#8c2451",
      plum: "#4a1a33",
      raspberry: "#d63a6e",
      marigold: "#ffc2d4",
      card: "#fffafb",
      ink: "#2a1820",
      muted: "#6f5561",
      cta: "#00db6a",
      badge: "#b5306a",
      brand: "#b5306a",
      alert: "#d63a6e",
    },
    heroHeading: {
      highlight: {
        color: "#2a1820",
        bg: "transparent",
        font: "var(--font-gsflex), var(--font-manrope), sans-serif",
        weight: 400,
      },
      title: { color: "#2a1820", bg: "transparent" },
    },
    // Layout da scrapbook-v2 + cores rosé — ver `.theme-nail` em app/page.css.
    className: "theme-diario theme-nail",
  },

  hero: {
    logo: { src: "", alt: "Kit Aula Pronta", width: 200, height: 60 },
    secureSeal: "",
    titleHighlight: "Suas aulas de **Nail Design**\ncom **material pronto**",
    title: "",
    image: {
      alt: "Mockup do Kit Aula Pronta: apostila, folhas de treino e certificados de nail design",
      width: 1254,
      height: 1254,
    },
    poster: { src: "/offers/nail-designer/hero.webp" },
    subtitle:
      "São +60 arquivos editáveis para você abrir a próxima turma com apostila e certificado na mão.",
    highlights: [
      "Apostila ilustrada de 25 páginas",
      "20 folhas de treino e 15 atividades práticas",
      "10 lâminas para projetar em aula",
      "5 certificados e 9 documentos de turma",
    ],
    ctaLabel: "QUERO O MATERIAL DA MINHA TURMA",
    deliveryNote: "Acesso liberado na hora, no seu e-mail",
    socialProofLabel: "+1000 alunas atendidas",
  },

  materials: {
    title: "Uma prévia do que\nchega *pra você*",
    imageSize: { width: 1018, height: 1440 },
    items: [
      {
        src: "/offers/nail-designer/material-01-sequencia-didatica.webp",
        alt: "Página da apostila: sequência didática da prática em tips",
      },
      {
        src: "/offers/nail-designer/material-02-acabamento-visual.webp",
        alt: "Página da apostila: acabamento visual, luz e contorno",
      },
      {
        src: "/offers/nail-designer/material-03-correcao-util.webp",
        alt: "Página da apostila: como dar uma correção útil à aluna",
      },
      {
        src: "/offers/nail-designer/material-04-treino-amendoada.webp",
        alt: "Folha de treino: formato amendoado e afunilamento",
      },
      {
        src: "/offers/nail-designer/material-05-materiais.webp",
        alt: "Página da apostila: materiais organizados por função",
      },
      {
        src: "/offers/nail-designer/material-06-demonstre-antes.webp",
        alt: "Página da apostila: demonstre antes de pedir a prática",
      },
    ],
  },

  whySection: {
    title: "Como fica sua aula\n**antes** e *depois* do kit",
    cards: [
      { icon: "❌", title: "Noites montando apostila do zero, sem saber por onde começar." },
      { icon: "❌", title: "Folhas soltas e conteúdo que muda a cada turma." },
      { icon: "❌", title: "Insegurança na frente das alunas por falta de material de apoio." },
      { icon: "❌", title: "Presença, evolução e pagamentos anotados em qualquer lugar." },
      { icon: "✅", title: "Apostila, exercícios e certificados prontos para abrir e usar." },
      { icon: "✅", title: "Aulas com cara de curso profissional, do primeiro ao último dia." },
      { icon: "✅", title: "Mais firmeza para ensinar, com um roteiro claro em mãos." },
      { icon: "✅", title: "Turma acompanhada de perto, com fichas de controle prontas." },
    ],
  },

  idealSection: {
    title: "O kit foi feito ==pra você==\nque *quer:*",
    items: [
      {
        title: "Ganhar tempo no preparo das aulas",
        desc: "Os arquivos já vêm estruturados. Você só ajusta o que quiser e imprime.",
      },
      {
        title: "Passar mais profissionalismo",
        desc: "Material bonito e organizado faz a aluna perceber o valor do seu curso.",
      },
      {
        title: "Deixar a prática mais leve",
        desc: "Exercícios e atividades ilustradas mantêm a turma participando.",
      },
      {
        title: "Ensinar com mais segurança",
        desc: "Com o conteúdo em ordem, você foca em explicar, não em improvisar.",
      },
      {
        title: "Acompanhar cada aluna",
        desc: "Fichas e documentos de turma para registrar presença e evolução.",
      },
      {
        title: "Cuidar do que importa: ensinar",
        desc: "A papelada fica resolvida e sobra energia para a parte prática.",
      },
    ],
  },

  offerSection: {
    title: "Tudo o que vem no **Kit Aula Pronta**",
    pill: "ACESSO IMEDIATO",
    cardTitle: "Tudo foi organizado para ser __simples e fácil de aplicar.__",
    lead: "Escolha o arquivo, coloque sua marca e comece hoje mesmo.",
    image: {
      src: "/offers/nail-designer/kit.webp",
      alt: "Mockup do pacote completo do Kit Aula Pronta",
      width: 1254,
      height: 1254,
    },
    howItWorksNumbered: true,
    howItWorks: [
      {
        title: "Apostila ilustrada editável (25 páginas)",
        desc: "O conteúdo teórico da sua aula, pronto para receber sua logo.",
      },
      {
        title: "20 folhas de treino",
        desc: "Para as alunas praticarem no papel antes de partir para a unha.",
      },
      {
        title: "15 atividades práticas ilustradas",
        desc: "Dinâmicas para fixar o conteúdo e movimentar a turma.",
      },
      {
        title: "10 lâminas de apresentação",
        desc: "Para projetar ou imprimir e conduzir a explicação.",
      },
      {
        title: "5 certificados de conclusão editáveis",
        desc: "Com seu nome, sua marca e os dados de cada aluna.",
      },
      {
        title: "9 documentos de organização da turma",
        desc: "Fichas de controle para manter tudo em ordem, e muito mais.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E não para por aí...", "**Tem mais!**", "*Você também vai receber…*"],
    pill: "🎁 4 BÔNUS EXCLUSIVOS",
    exclusiveNote: "Bônus incluso somente no Plano Completo",
    items: [
      {
        label: "BÔNUS #1",
        title: "30 Moldes de Unhas para Treinar Nail Art",
        desc: "Contornos de unha para as alunas planejarem a decoração no papel.",
        features: ["Unhas curtas", "Unhas médias", "Unhas longas", "Prontos para imprimir"],
        price: "R$27",
        src: "/offers/nail-designer/bonus-01.webp",
      },
      {
        label: "BÔNUS #2",
        title: "20 Cartões Ilustrados de Ferramentas",
        desc: "Jogo de associação para a aluna reconhecer cada ferramenta e sua função.",
        features: ["20 cartões para imprimir", "Espaço para nome e função", "Gabarito para a instrutora"],
        price: "R$27",
        src: "/offers/nail-designer/bonus-02.webp",
      },
      {
        label: "BÔNUS #3",
        title: "10 Exercícios de Correção de Erros",
        desc: "Imagens de unhas com problemas para a turma identificar e corrigir.",
        features: ["Simetria", "Formato", "Acabamento", "Gabarito com orientações"],
        price: "R$27",
        src: "/offers/nail-designer/bonus-03.webp",
      },
      {
        label: "BÔNUS #4",
        title: "Checklist da Primeira Aula",
        desc: "Um roteiro visual para não esquecer nada no dia da estreia da turma.",
        features: ["Antes da aula", "Durante a aula", "Depois da aula"],
        price: "R$27",
        src: "/offers/nail-designer/bonus-04.webp",
      },
    ],
  },

  plansSection: {
    pill: "",
    title: "Escolha a ==melhor opção==\n*para você*",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/offers/nail-designer/plano-basico.webp",
        alt: "Mockup do Plano Básico do Kit Aula Pronta",
        width: 1254,
        height: 1254,
      },
      receiveLabel: "Você recebe:",
      features: [
        "20 folhas de treino para imprimir",
        "10 lâminas ilustradas para apresentação",
        "5 certificados de conclusão editáveis",
        "9 documentos de organização da turma",
      ],
      oldPrice: "R$27,90",
      price: "R$17,90",
      installments: "ou 4x de R$4,48 no cartão.",
      savings: "Você economiza R$10,00",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/offers/nail-designer/plano-completo.webp",
        alt: "Mockup do Plano Completo do Kit Aula Pronta com os 4 bônus",
        width: 1254,
        height: 1254,
      },
      pill: "⚡4x MAIS CONTEÚDOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "20 folhas de treino para imprimir",
        "15 atividades práticas ilustradas",
        "10 lâminas ilustradas para apresentação",
        "5 certificados de conclusão editáveis",
        "9 documentos de organização da turma",
        "🎁BÔNUS 1 - 30 Moldes de Unhas para Treinar Nail Art",
        "🎁BÔNUS 2 - 20 Cartões Ilustrados de Ferramentas",
        "🎁BÔNUS 3 - 10 Exercícios de Correção de Erros",
        "🎁BÔNUS 4 - Checklist da Primeira Aula",
      ],
      oldPrice: "R$37,90",
      price: "R$27,90",
      installments: "ou 6x de R$4,65 no cartão.",
      savings: "Você economiza R$10,00",
      ctaLabel: "QUERO O PLANO COMPLETO",
    },
    upsellNote: {
      alert: "A maioria das instrutoras escolhe o plano abaixo 👇",
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
    title: "**Garantia** de *7 dias*",
    intro: "🔒 Compra 100% segura e garantida.",
    lead: "Você tem 7 dias para conhecer o kit. Se nesse prazo perceber que:",
    bullets: [
      "o conteúdo não combina com o seu curso",
      "os arquivos não resolvem o que você precisava",
      "ou apenas mudou de ideia,",
    ],
    outro: "é só pedir o reembolso. Sem burocracia: o risco é todo nosso.",
    outroStrong: "",
    helpLabel: "",
  },

  authority: {
    pill: "QUEM ESTÁ POR TRÁS",
    name: "Equipe de Nail Design",
    role: "Profissionais da beleza que também ensinam",
    photo: {
      src: "/offers/nail-designer/equipe.webp",
      alt: "Equipe de nail designers reunida na bancada do estúdio",
      width: 1254,
      height: 1254,
    },
    paragraphs: [
      "Somos profissionais do nail design com anos de salão e de sala de aula. Sabemos quanto tempo se perde preparando material — e foi para isso que criamos o kit.",
      "Já são mais de 1000 alunas atendidas com materiais testados na prática. Nosso objetivo é que toda instrutora tenha um material à altura do que ensina.",
    ],
  },

  contact: {
    email: "",
  },

  testimonials: {
    title: "O que dizem as *instrutoras*",
    items: [],
  },

  stepsSection: {
    title: "Como funciona o **acesso**",
    subtitle: "Rápido e simples para começar.",
    ctaLabel: "QUERO ACESSAR AGORA",
    steps: [
      {
        icon: "",
        title: "Finalize a compra",
        desc: "O acesso é liberado automaticamente após o pagamento.",
        items: ["Link de acesso no seu e-mail", "Entrada na área de membros", "Download dos arquivos"],
      },
      {
        icon: "",
        title: "Personalize no Canva",
        desc: "Edite cada arquivo do seu jeito.",
        items: ["Coloque sua logo e suas cores", "Preencha os dados das alunas", "Salve e imprima"],
      },
      {
        icon: "",
        title: "Organize suas aulas",
        desc: "Use o material como base do seu planejamento.",
        items: ["Monte o cronograma", "Escolha os exercícios", "Aplique com tranquilidade"],
      },
      {
        icon: "",
        title: "Dê aula",
        desc: "Agora é com você.",
        items: ["Encante suas alunas", "Fortaleça sua autoridade", "Aproveite o processo"],
      },
    ],
  },

  faqTitle: "Perguntas *frequentes*",

  faq: [
    [
      "Dá para editar os materiais?",
      "Sim. Todos os arquivos abrem no Canva, onde você troca textos, cores e coloca sua logo.",
    ],
    [
      "Como vou receber o kit?",
      "Assim que o pagamento é aprovado, você recebe no e-mail o link da área de membros para baixar tudo.",
    ],
    [
      "Preciso saber design para usar?",
      "Não. Os arquivos já vêm diagramados; basta trocar as informações que quiser.",
    ],
    [
      "Posso colocar minha marca nos certificados?",
      "Pode. Os certificados são editáveis: nome da aluna, do curso, sua logo e assinatura.",
    ],
    [
      "E se eu não gostar?",
      "Você tem 7 dias de garantia. Se não fizer sentido para você, devolvemos o valor pago.",
    ],
    [
      "Serve para turmas iniciantes e avançadas?",
      "Sim. Você escolhe quais exercícios e atividades usar de acordo com o nível da turma.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#plano-basico",
    basic: "https://pay.wiapy.com/W5K_rMrb0jvG",
    complete: "https://pay.wiapy.com/2jjmjB5byZyf",
  },
};
