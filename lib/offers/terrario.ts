import type { OfferContent } from "./types";

/**
 * Oferta "Meu Primeiro Terrário Fechado" — rota `/terrario`.
 *
 * Copy aplicada VERBATIM da landing de origem
 * (site.blogestudos.com/monte-seu-primeiro-terrario-fechado-com-facilidade),
 * sem alterar nenhuma palavra. Visual próprio (paleta botânica verde/terracota)
 * definido em `theme` — não afeta as demais páginas. Os refinos de espaçamento,
 * tipografia e cor ficam no bloco `.theme-terrario` de `app/page.css`.
 *
 * ⚠️ Pendências:
 *   - imagens em `public/offers/terrario/` (enquanto o `src` não existir,
 *     aparece um placeholder no lugar).
 *   - links de checkout do Hotmart (`checkout.basic` / `checkout.complete`)
 *     ainda são placeholders.
 */
export const terrario: OfferContent = {
  meta: {
    title: "Monte Seu Primeiro Terrário Fechado com Facilidade",
    description:
      "Aprenda a montar seu primeiro terrário fechado com mapas visuais e fichas imprimíveis.",
    ogTitle: "Monte Seu Primeiro Terrário Fechado com Facilidade",
    ogDescription:
      "Monte seu primeiro terrário fechado com um guia visual de camadas, plantas e montagem.",
  },

  theme: {
    /**
     * Paleta botânica: marfim de manual impresso → sálvia → vidro esverdeado →
     * folha → floresta, com terracota como única cor quente (urgência + CTA).
     */
    palette: {
      paper: "#f7f4ea",
      blush: "#e6efdd",
      mint: "#d9ece4",
      peacock: "#2f6b4f",
      plum: "#152a1c",
      raspberry: "#a8431d",
      marigold: "#e3a53c",
      card: "#ffffff",
      ink: "#1d2c1b",
      muted: "#5a6b52",
      cta: "#d2571a",
      badge: "#2f6b4f",
      brand: "#a8431d",
      alert: "#b23a24",
    },
    heroHeading: {
      // Headline em Fredoka, bold, tarja verde-folha com texto branco.
      // Sem `scale`: os dois tamanhos são controlados pelo bloco
      // `.theme-terrario` em app/page.css (escala fluida por viewport).
      highlight: {
        color: "#ffffff",
        bg: "#2f6b4f",
        font: "var(--font-fredoka)",
        weight: 700,
      },
      title: { color: "#ffffff", bg: "#152a1c" },
    },
    balanceText: true,
    className: "theme-terrario",
  },

  offerBar: {
    text: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
  },

  hero: {
    logo: { src: "", alt: "Meu Primeiro Terrário Fechado", width: 200, height: 60 },
    secureSeal: "",
    titleHighlight: "Monte seu primeiro terrário fechado",
    title: "com um guia visual de camadas, plantas e montagem.",
    image: {
      alt: "Terrário fechado montado em pote de vidro, sobre mesa de madeira ao sol",
      width: 1024,
      height: 1027,
    },
    poster: { src: "/offers/terrario/hero.webp" },
    subtitle:
      "Veja exatamente o que usar, em qual ordem montar e onde posicionar cada elemento para tirar seu primeiro terrário do papel sem depender de informações espalhadas ou improvisação.",
    description: "",
    ctaLabel: "QUERO MONTAR MEU PRIMEIRO TERRÁRIO",
    deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
    socialProofLabel: "",
  },

  materials: {
    title: "VEJA OS GUIAS QUE VOCÊ VAI RECEBER NA PRÁTICA",
    // Todas as fichas são normalizadas em 3:4, para o carrossel ter uma
    // caixa só e não recortar nenhuma delas.
    imageSize: { width: 768, height: 1024 },
    items: [
      {
        src: "/offers/terrario/guia-01-materiais.webp",
        alt: "Ficha “Materiais para as camadas”: pedrinhas, carvão ativado, musgo esfagno e substrato, com as quantidades estimadas",
      },
      {
        src: "/offers/terrario/guia-02-substrato.webp",
        alt: "Ficha “Qual substrato comprar?”, com a proporção de substrato e material mineral para a mistura",
      },
      {
        src: "/offers/terrario/guia-03-ferramentas.webp",
        alt: "Ficha “Ferramentas”: colher, borrifador, recipiente, pano e pinça — sem precisar de ferramenta profissional",
      },
      {
        src: "/offers/terrario/guia-04-camadas.webp",
        alt: "Ficha “Mapa visual das camadas”, mostrando a ordem de montagem do fundo do recipiente até as plantas",
      },
      {
        src: "/offers/terrario/guia-05-posicionamento.webp",
        alt: "Ficha “Mapa de posicionamento”: o terrário dividido em fundo (fitônia), meio (musgo) e frente (pedras)",
      },
      {
        src: "/offers/terrario/guia-06-musgo.webp",
        alt: "Ficha “Posição do musgo”, com a vista superior indicando onde aplicar os blocos de musgo",
      },
      {
        src: "/offers/terrario/guia-07-montagem.webp",
        alt: "Ficha “Montagem passo a passo”: preparar o recipiente, camada de pedras e carvão ativado",
      },
    ],
  },

  whySection: {
    title: "Tenha mais segurança em cada etapa do seu primeiro terrário.",
    cards: [
      { icon: "🧰", title: "Saiba quais materiais usar antes de começar" },
      { icon: "📍", title: "Veja onde posicionar cada elemento" },
      { icon: "🪴", title: "Visualize a ordem correta das camadas" },
      { icon: "🪜", title: "Acompanhe a montagem passo a passo" },
      { icon: "🌿", title: "Escolha plantas compatíveis com o projeto" },
    ],
  },

  idealSection: {
    title: "ESTE MANUAL É IDEAL PARA VOCÊ QUE DESEJA",
    items: [
      {
        title: "MONTAR UM TERRÁRIO BONITO E SAUDÁVEL",
        desc: "Siga orientações visuais e evite erros comuns na montagem.",
      },
      {
        title: "APRENDER DE FORMA SIMPLES",
        desc: "Com mapas e fichas que facilitam a compreensão do processo.",
      },
      {
        title: "ECONOMIZAR TEMPO E DINHEIRO",
        desc: "Evite compras desnecessárias com a lista de materiais correta.",
      },
      {
        title: "CRIAR SEM PRESSA",
        desc: "Monte seu terrário no seu ritmo, seguindo as etapas do manual.",
      },
      {
        title: "TER INFORMAÇÕES CENTRALIZADAS",
        desc: "Tenha tudo que precisa em um único lugar, sem pesquisas extras.",
      },
      {
        title: "RECEBER SUPORTE EM CASO DE DÚVIDAS",
        desc: "Conte com orientações práticas para resolver problemas comuns.",
      },
    ],
  },

  offerSection: {
    title: "Meu Primeiro Terrário Fechado",
    pill: "⚡ACESSO IMEDIATO",
    cardTitle: "",
    lead: "Um manual visual imprimível para você montar seu primeiro terrário fechado com fitônia e musgo, seguindo uma referência clara em cada etapa.",
    image: {
      src: "/offers/terrario/produto-principal.webp",
      alt: "Mão segurando a ficha “Mapa visual das camadas” ao lado de um terrário fechado montado",
      width: 1024,
      height: 1024,
    },
    howItWorksTitle: "Você recebe:",
    howItWorksNumbered: true,
    howItWorks: [
      {
        title: "Lista de Materiais",
        desc: "Veja o que você precisa separar antes de começar a montagem e organize tudo com antecedência.",
      },
      {
        title: "Mapa Visual das Camadas",
        desc: "Visualize a sequência das camadas do terrário e entenda em qual ordem cada material entra no recipiente.",
      },
      {
        title: "Indicação de Espessura das Camadas",
        desc: "Tenha uma referência visual da espessura sugerida para cada parte da montagem, evitando fazer tudo apenas no “olhômetro”.",
      },
      {
        title: "Mapa de Posicionamento",
        desc: "Veja como distribuir plantas e elementos dentro do recipiente para ter uma referência na hora de organizar o projeto.",
      },
      {
        title: "Plantas Indicadas para o Projeto",
        desc: "Saiba quais plantas utilizar no seu primeiro terrário fechado e evite escolher opções incompatíveis com a proposta.",
      },
      {
        title: "Passo a Passo da Montagem",
        desc: "Acompanhe a sequência completa da execução, do início até o terrário finalizado.",
      },
    ],
  },

  bonusSection: {
    titleLines: ["E NÃO PARA POR AÍ...", "TEM MAIS!", "Você também vai receber…"],
    pill: "🎁 3 BÔNUS EXCLUSIVOS",
    exclusiveNote: "",
    items: [
      {
        label: "BÔNUS #1",
        title: "VARIAÇÕES DO SEU PRIMEIRO TERRÁRIO",
        src: "/offers/terrario/bonus-01.webp",
        desc: "Tenha novas referências para variar a aparência do seu primeiro projeto sem precisar começar do zero. A ideia é ajudar você a explorar diferentes possibilidades visuais a partir da mesma base de montagem, ganhando mais confiança para criar novas versões depois do primeiro terrário.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #2",
        title: "TERRÁRIO SEM FERRAMENTAS PROFISSIONAIS",
        src: "/offers/terrario/bonus-02.webp",
        desc: "Veja como adaptar a montagem mesmo sem ter ferramentas específicas ou profissionais em casa. Esse bônus ajuda você a começar de forma mais simples, usando alternativas acessíveis e evitando deixar o projeto parado por achar que precisa comprar muitos utensílios antes.",
        features: [],
        price: "R$27",
      },
      {
        label: "BÔNUS #3",
        title: "SOS DO PRIMEIRO TERRÁRIO",
        src: "/offers/terrario/bonus-03.webp",
        desc: "Tenha uma referência rápida para consultar quando surgir aquela dúvida depois da montagem: excesso de umidade, aparência das plantas, condensação ou sinais de que algo pode precisar de atenção.",
        features: [],
        price: "R$27",
      },
    ],
  },

  plansSection: {
    pill: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    title: "ESCOLHA A OPÇÃO IDEAL PARA VOCÊ",
    basic: {
      name: "PLANO BÁSICO",
      image: {
        src: "/offers/terrario/plano-basico.webp",
        alt: "Manual Meu Primeiro Terrário Fechado ao lado de um terrário com fitônia e musgo",
        width: 1024,
        height: 1024,
      },
      receiveLabel: "Meu Primeiro Terrário Fechado",
      features: [
        "Manual visual imprimível",
        "Lista de materiais",
        "Mapa visual das camadas",
        "Indicação de espessura das camadas",
        "Mapa de posicionamento",
        "Plantas indicadas para o projeto",
        "Passo a passo da montagem",
        "Cuidados essenciais após finalizar",
      ],
      // Mesma grafia do Plano Completo: a comparação lado a lado fica 1:1.
      unavailableFeatures: [
        "🎁Bônus - Variações do Seu Primeiro Terrário",
        "🎁Bônus - Terrário sem Ferramentas Profissionais",
        "🎁Bônus - SOS do Primeiro Terrário",
      ],
      oldPrice: "R$37,90",
      price: "R$ 27,90",
      installments: "ou 4x de R$7,47 no cartão",
      savings: "Você economiza R$10,00",
      ctaLabel: "QUERO O PLANO BÁSICO",
    },
    complete: {
      badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
      name: "PLANO COMPLETO",
      allBonusesLabel: "",
      image: {
        src: "/offers/terrario/plano-completo.webp",
        alt: "Kit completo: livro Meu Primeiro Terrário Fechado, terrário montado e as fichas do guia sobre a mesa",
        width: 1024,
        height: 1024,
      },
      pill: "🎁 3 BÔNUS EXCLUSIVOS",
      soldLabel: "⚡MAIS VENDIDO",
      features: [
        "Manual visual imprimível",
        "Lista de materiais",
        "Mapa visual das camadas",
        "Indicação de espessura das camadas",
        "Mapa de posicionamento",
        "Plantas indicadas para o projeto",
        "Passo a passo da montagem",
        "Cuidados essenciais após finalizar",
        "🎁Bônus - Variações do Seu Primeiro Terrário",
        "🎁Bônus - Terrário sem Ferramentas Profissionais",
        "🎁Bônus - SOS do Primeiro Terrário",
      ],
      oldPrice: "R$47,90",
      price: "R$ 37,90",
      installments: "ou 6x de R$6,49 no cartão",
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
    title: "Você tem 7 dias para conhecer o material com tranquilidade.",
    intro: "🔒 Compra 100% segura e garantida",
    lead: "",
    bullets: [],
    outro:
      "Isso significa que, Se dentro desse período você entender que o Meu Primeiro Terrário Fechado não faz sentido para você, poderá solicitar o reembolso conforme as condições da plataforma.",
    outroStrong: "",
    helpLabel: "",
  },

  authority: {
    pill: "QUEM CRIOU ESTE MATERIAL",
    name: "Bruna Silva",
    role: "Artesã e criadora do Meu Primeiro Terrário Fechado",
    photo: {
      src: "/offers/terrario/bruna.webp",
      alt: "Bruna Silva, criadora do Meu Primeiro Terrário Fechado, em seu ateliê",
      width: 640,
      height: 640,
    },
    paragraphs: [
      "Brasileira, apaixonada por artesanato e por tudo que envolve fazer com as próprias mãos. Foi montando terrários em casa — testando recipientes, plantas e proporções — que a Bruna começou a anotar o que dava certo e, principalmente, o que não dava.",
      "Com milhares de alunas acompanhadas pelo Brasil, ela percebeu que quase todo mundo trava nos mesmos pontos: a ordem das camadas, a quantidade de cada material e onde posicionar cada planta.",
      "Foi daí que nasceu o Meu Primeiro Terrário Fechado: um material visual e imprimível, feito para ficar ao seu lado durante a montagem e responder as dúvidas que ela mais escuta de quem está começando.",
    ],
  },

  contact: {
    email: "",
  },

  testimonials: {
    title: "VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO",
    subtitle: "Leia os depoimentos de quem já tomou a decisão certa.",
    marquee: {
      duration: 32,
      itemWidth: 260,
      containerClassName: "w-full max-w-[960px] mx-auto",
      // Prints de conversa são 9:16 (formato de tela de celular).
      imageSize: { width: 720, height: 1280 },
    },
    items: [
      { src: "/offers/terrario/depoimento-01.webp", alt: "Print de conversa: cliente agradece e mostra foto do primeiro terrário fechado montado", width: 720, height: 1280 },
      { src: "/offers/terrario/depoimento-02.webp", alt: "Print de conversa: cliente segura o terrário que montou seguindo o material", width: 720, height: 1280 },
      { src: "/offers/terrario/depoimento-03.webp", alt: "Print de conversa: cliente mostra, sorrindo, o primeiro terrário que fez", width: 720, height: 1280 },
      { src: "/offers/terrario/depoimento-04.webp", alt: "Print de conversa: cliente segura, sorrindo, o primeiro terrário fechado com fitônia", width: 720, height: 1280 },
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
      "Eu nunca montei um terrário. Esse material serve para mim?",
      "Sim. O Meu Primeiro Terrário Fechado foi pensado justamente para quem está começando e quer uma referência visual para acompanhar a montagem sem depender de tentativa e erro.",
    ],
    [
      "O que eu vou aprender com o material?",
      "Você vai ter uma orientação prática para montar seu primeiro terrário fechado, incluindo materiais, plantas indicadas, ordem das camadas, posicionamento dos elementos, passo a passo e cuidados depois da montagem.",
    ],
    [
      "Preciso ter experiência com plantas ou jardinagem?",
      "Não. A proposta do material é facilitar o primeiro contato com a montagem de terrários, usando uma estrutura visual e organizada para tornar o processo mais simples de acompanhar.",
    ],
    [
      "Preciso comprar ferramentas profissionais?",
      "Não necessariamente. No Plano Completo, você também recebe o bônus Terrário sem Ferramentas Profissionais, criado para mostrar alternativas mais acessíveis para quem ainda não possui utensílios específicos.",
    ],
    [
      "Onde vou receber o material?",
      "O acesso será disponibilizado pela Hotmart após a confirmação da compra.",
    ],
    [
      "O material pode ser impresso?",
      "Sim. O produto foi pensado como um material visual imprimível, para que você possa deixar a ficha ao seu lado e consultá-la enquanto monta o terrário.",
    ],
    [
      "Qual a diferença entre o Plano Básico e o Plano Completo?",
      "No Plano Básico, você recebe o produto principal Meu Primeiro Terrário Fechado.\n\nNo Plano Completo, além do produto principal, você também recebe os 3 bônus:\n\nVariações do Seu Primeiro Terrário\nTerrário sem Ferramentas Profissionais\nSOS do Primeiro Terrário",
    ],
    [
      "E se alguma coisa parecer errada depois que eu montar o terrário?",
      "No Plano Completo, o bônus SOS do Primeiro Terrário serve como uma referência para revisar situações como umidade, condensação e mudanças na aparência das plantas, ajudando você a entender melhor o que observar após a montagem.",
    ],
    [
      "Tenho garantia?",
      "Sim. Você terá 7 dias de garantia para conhecer o material. Caso entenda que ele não é para você, poderá solicitar o reembolso dentro desse período conforme as condições da plataforma.",
    ],
    [
      "Quais são as formas de pagamento?",
      "As formas de pagamento disponíveis serão apresentadas diretamente no checkout da Hotmart no momento da compra.",
    ],
  ],

  footer: {
    copyright: "Todos os direitos reservados.",
    legal:
      "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. As provas do produto e as imagens exibidas nesta página são meramente ilustrativas e foram geradas por inteligência artificial. Este é um produto digital: você não recebe nenhum item físico — recebe um material em formato digital, que pode ser impresso em casa. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
  },

  checkout: {
    hero: "#planos",
    basic: "#planos",
    complete: "#planos",
  },
};

// touch 1789167784
