import {
  Zap,
  Settings,
  Shield,
  Thermometer,
  RotateCcw,
  Lightbulb,
} from 'lucide-react';

export interface MicroondasService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Zap;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  details: string[];
  brands: string[];
  defectSigns: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export const microondasServices: MicroondasService[] = [
  {
    slug: 'conserto-microondas-nao-aquece',
    title: 'Micro-ondas Não Aquece',
    shortDescription: 'Micro-ondas liga mas não esquenta? Reparamos o magnetron e componentes internos.',
    icon: Thermometer,
    heroTitle: 'Conserto de Micro-ondas que Não Aquece em Maringá',
    heroSubtitle: 'Seu micro-ondas liga mas não esquenta a comida?',
    heroDescription: 'Diagnóstico e reparo especializado do sistema de aquecimento em Maringá!',
    introTitle: 'Reparo de Micro-ondas que Não Aquece em Maringá-PR',
    introDescription: 'Quando o micro-ondas liga normalmente mas não aquece os alimentos, geralmente o problema está no magnetron, no diodo de alta tensão ou no capacitor. Nossa equipe realiza o diagnóstico preciso e substitui os componentes com peças originais e garantia.',
    details: [
      'Diagnóstico do magnetron',
      'Troca de diodo de alta tensão',
      'Substituição do capacitor',
      'Verificação do transformador',
      'Teste de potência de aquecimento',
      'Inspeção do sistema de alta tensão',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Prato gira mas não esquenta',
      'Aquecimento fraco ou irregular',
      'Micro-ondas faz barulho mas não aquece',
      'Alimentos saem frios após o tempo programado',
      'Cheiro de queimado ao ligar',
      'Faíscas internas durante o uso',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar um micro-ondas que não aquece?',
        answer: 'O valor varia entre R$150,00 e R$450,00, dependendo da peça a ser substituída (magnetron, capacitor ou diodo). Oferecemos orçamento gratuito.',
      },
      {
        question: 'Vale a pena consertar o magnetron?',
        answer: 'Na maioria dos casos, sim. A troca do magnetron custa em média 40% do valor de um micro-ondas novo e prolonga a vida útil do aparelho por vários anos.',
      },
      {
        question: 'O conserto é feito no mesmo dia?',
        answer: 'Sim! Na maioria dos casos, o reparo é concluído em até 2 horas no mesmo dia.',
      },
      {
        question: 'É perigoso usar micro-ondas que não aquece bem?',
        answer: 'Pode ser, pois indica falha no sistema de alta tensão. Recomendamos não usar o aparelho e chamar um técnico especializado.',
      },
    ],
    metaTitle: 'Micro-ondas Não Aquece em Maringá | Conserto Especializado',
    metaDescription: 'Conserto de micro-ondas que não aquece em Maringá-PR. Reparo de magnetron, capacitor e diodo. Peças originais e garantia de 90 dias.',
    metaKeywords: 'micro-ondas não aquece Maringá, conserto magnetron, reparo micro-ondas, microondas não esquenta',
  },
  {
    slug: 'reparo-painel-microondas',
    title: 'Reparo de Painel e Teclado',
    shortDescription: 'Teclado não responde ou painel apagado? Reparamos a membrana e placa eletrônica.',
    icon: Zap,
    heroTitle: 'Reparo de Painel e Teclado de Micro-ondas em Maringá',
    heroSubtitle: 'O teclado do seu micro-ondas parou de funcionar?',
    heroDescription: 'Conserto especializado de painéis e membranas em Maringá!',
    introTitle: 'Conserto de Painel e Teclado de Micro-ondas em Maringá-PR',
    introDescription: 'O painel e o teclado do micro-ondas são os componentes mais utilizados e, por isso, podem apresentar falhas com o tempo. Realizamos a troca da membrana do teclado, reparo da placa eletrônica e substituição de displays com peças originais.',
    details: [
      'Troca da membrana do teclado',
      'Reparo da placa eletrônica',
      'Substituição do display',
      'Reprogramação do painel',
      'Verificação de fiação e conectores',
      'Limpeza e higienização interna',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Teclas não respondem ao toque',
      'Display apagado ou piscando',
      'Micro-ondas liga sozinho',
      'Botões grudando ou travados',
      'Códigos de erro no painel',
      'Beep constante sem parar',
    ],
    faqs: [
      {
        question: 'Quanto custa trocar a membrana do micro-ondas?',
        answer: 'A troca da membrana do teclado custa entre R$100,00 e R$250,00, incluindo a peça e a mão de obra.',
      },
      {
        question: 'O que causa falha no teclado do micro-ondas?',
        answer: 'As causas mais comuns são desgaste natural, umidade, uso de produtos de limpeza inadequados e curto-circuito na placa.',
      },
      {
        question: 'É possível reparar a placa ou precisa trocar?',
        answer: 'Na maioria dos casos, a placa pode ser reparada. Quando não é possível, realizamos a substituição com peça compatível.',
      },
      {
        question: 'O conserto é feito em domicílio?',
        answer: 'Sim! Em muitos casos o diagnóstico e reparo são feitos no local. Em casos mais complexos, o aparelho pode precisar ir para a bancada.',
      },
    ],
    metaTitle: 'Reparo de Painel e Teclado de Micro-ondas Maringá | Assistência Técnica',
    metaDescription: 'Reparo de painel e teclado de micro-ondas em Maringá-PR. Troca de membrana, reparo de placa eletrônica e display. Garantia de 90 dias.',
    metaKeywords: 'reparo painel micro-ondas Maringá, teclado microondas, membrana micro-ondas, conserto display',
  },
  {
    slug: 'troca-prato-giratório-microondas',
    title: 'Troca de Prato Giratório',
    shortDescription: 'Prato não gira ou faz barulho? Substituímos o motor e peças do sistema giratório.',
    icon: RotateCcw,
    heroTitle: 'Troca de Prato Giratório de Micro-ondas em Maringá',
    heroSubtitle: 'O prato do seu micro-ondas parou de girar?',
    heroDescription: 'Reparo do sistema giratório com peças originais em Maringá!',
    introTitle: 'Reparo do Prato Giratório de Micro-ondas em Maringá-PR',
    introDescription: 'O prato giratório é essencial para o aquecimento uniforme dos alimentos. Quando para de funcionar, pode ser falha no motor, no acoplamento ou na engrenagem. Realizamos o diagnóstico e reparo completo do sistema giratório.',
    details: [
      'Troca do motor do prato giratório',
      'Substituição do acoplamento (coupler)',
      'Troca do suporte e rodinhas do prato',
      'Substituição do prato de vidro',
      'Verificação da engrenagem interna',
      'Teste de funcionamento completo',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Prato não gira durante o uso',
      'Barulho ao girar o prato',
      'Prato gira com dificuldade',
      'Aquecimento desigual dos alimentos',
      'Motor do prato fazendo ruído',
      'Prato trava no meio do ciclo',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o prato giratório?',
        answer: 'O reparo do sistema giratório custa entre R$80,00 e R$200,00, dependendo se é o motor, acoplamento ou prato de vidro.',
      },
      {
        question: 'Posso usar o micro-ondas sem o prato giratório?',
        answer: 'Não é recomendado. O prato giratório garante o aquecimento uniforme dos alimentos. Sem ele, partes da comida podem ficar cruas.',
      },
      {
        question: 'O que causa falha no prato giratório?',
        answer: 'As causas mais comuns são desgaste do motor, acoplamento quebrado, sujeira acumulada no eixo ou engrenagem danificada.',
      },
      {
        question: 'Vocês têm prato de vidro para todas as marcas?',
        answer: 'Sim! Trabalhamos com pratos originais e compatíveis para todas as principais marcas do mercado.',
      },
    ],
    metaTitle: 'Troca de Prato Giratório Micro-ondas Maringá | Reparo com Garantia',
    metaDescription: 'Troca de prato giratório de micro-ondas em Maringá-PR. Reparo de motor, acoplamento e suporte. Peças originais e garantia de 90 dias.',
    metaKeywords: 'prato giratório micro-ondas Maringá, motor prato micro-ondas, micro-ondas não gira, conserto prato',
  },
  {
    slug: 'conserto-porta-microondas',
    title: 'Conserto de Porta',
    shortDescription: 'Porta não fecha ou trava? Reparamos trincos, dobradiças e interruptores de segurança.',
    icon: Shield,
    heroTitle: 'Conserto de Porta de Micro-ondas em Maringá',
    heroSubtitle: 'A porta do seu micro-ondas não fecha ou não trava corretamente?',
    heroDescription: 'Reparo especializado em portas e travas de segurança em Maringá!',
    introTitle: 'Reparo de Porta de Micro-ondas em Maringá-PR',
    introDescription: 'A porta do micro-ondas possui interruptores de segurança que impedem o funcionamento com a porta aberta. Quando danificada, o aparelho não liga ou apresenta riscos. Realizamos o reparo completo da porta, incluindo trincos, dobradiças e switches de segurança.',
    details: [
      'Troca de trinco e trava da porta',
      'Substituição de interruptores de segurança',
      'Reparo de dobradiças',
      'Troca da mola da porta',
      'Ajuste do encaixe da porta',
      'Verificação da vedação contra vazamento de ondas',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Porta não fecha completamente',
      'Micro-ondas não liga com porta fechada',
      'Trinco quebrado ou solto',
      'Porta abre sozinha durante o uso',
      'Dobradiça solta ou desgastada',
      'Barulho ao abrir ou fechar a porta',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar a porta do micro-ondas?',
        answer: 'O reparo da porta varia entre R$80,00 e R$250,00, dependendo da peça (trinco, dobradiça ou switch de segurança).',
      },
      {
        question: 'É perigoso usar micro-ondas com porta danificada?',
        answer: 'Sim! Uma porta com defeito pode permitir vazamento de micro-ondas, representando risco à saúde. Pare de usar o aparelho e procure assistência.',
      },
      {
        question: 'Posso trocar o trinco sozinho?',
        answer: 'Não recomendamos. O micro-ondas armazena alta tensão mesmo desligado, o que pode causar choque elétrico grave. Procure sempre um técnico qualificado.',
      },
      {
        question: 'O conserto é rápido?',
        answer: 'Sim! O reparo da porta geralmente é feito em até 1 hora no próprio local.',
      },
    ],
    metaTitle: 'Conserto de Porta de Micro-ondas Maringá | Trinco e Dobradiça',
    metaDescription: 'Conserto de porta de micro-ondas em Maringá-PR. Reparo de trinco, dobradiça e interruptores de segurança. Atendimento rápido com garantia.',
    metaKeywords: 'conserto porta micro-ondas Maringá, trinco micro-ondas, dobradiça micro-ondas, micro-ondas não fecha',
  },
  {
    slug: 'reparo-placa-eletronica-microondas',
    title: 'Reparo de Placa Eletrônica',
    shortDescription: 'Placa queimada ou com defeito? Reparamos e substituímos placas com garantia.',
    icon: Settings,
    heroTitle: 'Reparo de Placa Eletrônica de Micro-ondas em Maringá',
    heroSubtitle: 'Micro-ondas com placa queimada ou funcionamento irregular?',
    heroDescription: 'Conserto especializado de placas eletrônicas em Maringá!',
    introTitle: 'Reparo de Placa Eletrônica de Micro-ondas em Maringá-PR',
    introDescription: 'A placa eletrônica é o cérebro do micro-ondas, controlando todas as funções do aparelho. Quando apresenta defeito, pode causar funcionamento irregular, desligamentos e até impedir o aparelho de ligar. Nossos técnicos são especializados no reparo e substituição de placas.',
    details: [
      'Diagnóstico completo da placa',
      'Reparo de componentes eletrônicos',
      'Substituição de placa principal',
      'Troca de fusíveis e relés',
      'Verificação de trilhas e soldas',
      'Teste de funcionamento completo',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Micro-ondas não liga',
      'Desliga sozinho durante o uso',
      'Funções não respondem corretamente',
      'Cheiro de componente queimado',
      'Fusível queimando repetidamente',
      'Funcionamento intermitente',
    ],
    faqs: [
      {
        question: 'Quanto custa reparar a placa eletrônica do micro-ondas?',
        answer: 'O reparo varia entre R$120,00 e R$350,00. A substituição completa pode custar mais, dependendo do modelo.',
      },
      {
        question: 'O que causa queima da placa eletrônica?',
        answer: 'As causas mais comuns são oscilações na rede elétrica, curto-circuito, umidade e desgaste natural dos componentes.',
      },
      {
        question: 'É possível reparar ou precisa trocar a placa?',
        answer: 'Na maioria dos casos, a placa pode ser reparada. Apenas em casos graves de queima total é necessária a substituição completa.',
      },
      {
        question: 'O conserto tem garantia?',
        answer: 'Sim! Oferecemos garantia de 90 dias em todos os reparos e substituições de placas eletrônicas.',
      },
    ],
    metaTitle: 'Reparo de Placa Eletrônica Micro-ondas Maringá | Assistência Técnica',
    metaDescription: 'Reparo de placa eletrônica de micro-ondas em Maringá-PR. Diagnóstico preciso, substituição de componentes e garantia de 90 dias.',
    metaKeywords: 'reparo placa micro-ondas Maringá, placa eletrônica microondas, conserto placa, micro-ondas não liga',
  },
  {
    slug: 'limpeza-manutencao-microondas',
    title: 'Limpeza e Manutenção Preventiva',
    shortDescription: 'Manutenção completa para prolongar a vida útil do seu micro-ondas com segurança.',
    icon: Lightbulb,
    heroTitle: 'Limpeza e Manutenção de Micro-ondas em Maringá',
    heroSubtitle: 'Seu micro-ondas precisa de uma manutenção preventiva?',
    heroDescription: 'Serviço completo de limpeza e revisão técnica em Maringá!',
    introTitle: 'Limpeza e Manutenção Preventiva de Micro-ondas em Maringá-PR',
    introDescription: 'A manutenção preventiva do micro-ondas evita problemas futuros, melhora o desempenho e prolonga a vida útil do aparelho. Nosso serviço inclui limpeza interna completa, verificação de componentes e teste de segurança.',
    details: [
      'Limpeza interna completa',
      'Verificação do magnetron e componentes',
      'Teste de potência de aquecimento',
      'Inspeção de segurança contra vazamento',
      'Limpeza do filtro de gordura',
      'Verificação de cabos e conexões',
    ],
    brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'LG', 'Samsung', 'Midea'],
    defectSigns: [
      'Micro-ondas com cheiro forte',
      'Aquecimento mais lento que o normal',
      'Barulhos incomuns durante o uso',
      'Sujeira acumulada internamente',
      'Aparelho não usado há muito tempo',
      'Faíscas ocasionais',
    ],
    faqs: [
      {
        question: 'Quanto custa a manutenção preventiva?',
        answer: 'O serviço de limpeza e manutenção preventiva custa entre R$80,00 e R$180,00, incluindo limpeza completa e revisão técnica.',
      },
      {
        question: 'Com que frequência devo fazer manutenção?',
        answer: 'Recomendamos a manutenção preventiva a cada 12 meses para garantir o bom funcionamento e segurança do aparelho.',
      },
      {
        question: 'A manutenção preventiva evita problemas graves?',
        answer: 'Sim! A revisão periódica identifica problemas antes que se agravem, evitando consertos caros e riscos de segurança.',
      },
      {
        question: 'O serviço é feito em domicílio?',
        answer: 'Sim! A manutenção preventiva é realizada em domicílio, de forma rápida e prática.',
      },
    ],
    metaTitle: 'Limpeza e Manutenção de Micro-ondas Maringá | Revisão Completa',
    metaDescription: 'Limpeza e manutenção preventiva de micro-ondas em Maringá-PR. Revisão completa com teste de segurança e potência. Atendimento em domicílio.',
    metaKeywords: 'limpeza micro-ondas Maringá, manutenção microondas, revisão micro-ondas, limpeza interna',
  },
];

export const getMicroondasServiceBySlug = (slug: string) =>
  microondasServices.find((s) => s.slug === slug);
