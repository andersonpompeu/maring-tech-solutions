import {
  Snowflake,
  Settings,
  Zap,
  Droplets,
  Shield,
  Thermometer,
} from 'lucide-react';

export interface GeladeiraService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Snowflake;
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

export const geladeiraServices: GeladeiraService[] = [
  {
    slug: 'conserto-geladeira-frost-free',
    title: 'Conserto de Geladeira Frost Free',
    shortDescription: 'Geladeira não gela ou congela demais? Reparamos o sistema frost free com peças originais.',
    icon: Snowflake,
    heroTitle: 'Conserto de Geladeira Frost Free em Maringá',
    heroSubtitle: 'Sua geladeira Frost Free parou de gelar ou está congelando demais?',
    heroDescription: 'Encontre a melhor assistência técnica especializada em Frost Free em Maringá!',
    introTitle: 'Assistência Técnica Especializada em Geladeira Frost Free em Maringá-PR',
    introDescription: 'Quando o sistema Frost Free apresenta defeito, sua geladeira pode parar de gelar, congelar excessivamente ou acumular gelo. Nossa equipe é especializada no diagnóstico e reparo do sistema No Frost, com peças originais e garantia de 90 dias.',
    details: [
      'Reparo do sistema de degelo automático',
      'Troca do sensor de temperatura (termistor)',
      'Substituição da resistência de degelo',
      'Reparo do timer de degelo',
      'Limpeza e desobstrução do sistema de drenagem',
      'Verificação e ajuste do ventilador interno',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Acúmulo excessivo de gelo no freezer',
      'Geladeira não gela mas o freezer funciona',
      'Formação de água na parte interna',
      'Alimentos congelando no refrigerador',
      'Barulho constante do ventilador',
      'Geladeira trabalhando sem parar',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o sistema Frost Free?',
        answer: 'O valor varia entre R$200,00 e R$600,00, dependendo da peça a ser substituída (sensor, resistência ou timer). Oferecemos orçamento gratuito em domicílio.',
      },
      {
        question: 'Por que minha geladeira Frost Free está acumulando gelo?',
        answer: 'Isso geralmente indica falha no sistema de degelo automático — pode ser a resistência, o sensor de temperatura ou o timer de degelo. Nossos técnicos identificam a causa exata com diagnóstico preciso.',
      },
      {
        question: 'O conserto é feito no mesmo dia?',
        answer: 'Sim! Na maioria dos casos, o reparo do sistema Frost Free é feito em uma única visita, em até 2 horas.',
      },
      {
        question: 'Vocês trabalham com todas as marcas de Frost Free?',
        answer: 'Sim! Atendemos Brastemp, Electrolux, Consul, Samsung, LG, Midea e demais marcas com peças originais.',
      },
    ],
    metaTitle: 'Conserto de Geladeira Frost Free em Maringá | Assistência Técnica',
    metaDescription: 'Conserto de geladeira Frost Free em Maringá-PR. Reparo do sistema de degelo automático, sensor, resistência e timer. Peças originais e garantia de 90 dias.',
    metaKeywords: 'conserto geladeira frost free Maringá, reparo frost free, geladeira acumulando gelo, sistema degelo',
  },
  {
    slug: 'reparo-compressor-geladeira',
    title: 'Reparo de Compressor',
    shortDescription: 'Compressor com defeito ou fazendo barulho? Realizamos troca e reparo especializado.',
    icon: Settings,
    heroTitle: 'Reparo de Compressor de Geladeira em Maringá',
    heroSubtitle: 'Compressor da sua geladeira parou ou está fazendo barulho?',
    heroDescription: 'Assistência técnica especializada em compressores em Maringá!',
    introTitle: 'Reparo e Troca de Compressor de Geladeira em Maringá-PR',
    introDescription: 'O compressor é o coração da geladeira — quando ele falha, o aparelho para de refrigerar. Nossa equipe realiza diagnóstico preciso para determinar se o compressor precisa de reparo ou substituição, sempre com peças originais e garantia.',
    details: [
      'Diagnóstico completo do compressor',
      'Troca de compressor com peças originais',
      'Recarga de gás refrigerante',
      'Verificação do relé e protetor térmico',
      'Teste de funcionamento e pressão',
      'Limpeza do condensador e sistema de refrigeração',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Bosch'],
    defectSigns: [
      'Geladeira não liga ou não gela',
      'Compressor liga e desliga rapidamente',
      'Barulho forte ou vibração excessiva',
      'Compressor esquentando demais',
      'Geladeira não atinge a temperatura ideal',
      'Ruído de clique ao tentar ligar',
    ],
    faqs: [
      {
        question: 'Quanto custa trocar o compressor da geladeira?',
        answer: 'O valor da troca de compressor varia entre R$400,00 e R$900,00, dependendo da marca e modelo da geladeira. Inclui peça original, mão de obra e recarga de gás.',
      },
      {
        question: 'Vale a pena trocar o compressor ou comprar geladeira nova?',
        answer: 'Na maioria dos casos, a troca do compressor é mais vantajosa, custando entre 30% a 50% do valor de uma geladeira nova. Nossos técnicos orientam sobre a melhor decisão.',
      },
      {
        question: 'Quanto tempo dura um compressor novo?',
        answer: 'Um compressor original bem instalado dura em média de 8 a 15 anos. Oferecemos garantia de 90 dias no serviço e na peça.',
      },
      {
        question: 'O serviço é feito em domicílio?',
        answer: 'Sim! A troca de compressor é realizada em domicílio. Em alguns casos, pode ser necessário levar o aparelho para a oficina.',
      },
    ],
    metaTitle: 'Reparo de Compressor de Geladeira em Maringá | Troca com Garantia',
    metaDescription: 'Reparo e troca de compressor de geladeira em Maringá-PR. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento rápido em domicílio.',
    metaKeywords: 'reparo compressor geladeira Maringá, troca compressor, compressor geladeira barulho, conserto compressor',
  },
  {
    slug: 'conserto-painel-eletronico-geladeira',
    title: 'Conserto de Painel Eletrônico',
    shortDescription: 'Painel sem resposta ou com erro? Reparamos placas eletrônicas no mesmo dia em Maringá.',
    icon: Zap,
    heroTitle: 'Conserto de Painel Eletrônico de Geladeira em Maringá',
    heroSubtitle: 'Painel da geladeira sem resposta ou exibindo código de erro?',
    heroDescription: 'Reparo especializado em placas e painéis eletrônicos em Maringá!',
    introTitle: 'Conserto de Painel e Placa Eletrônica de Geladeira em Maringá-PR',
    introDescription: 'Os painéis eletrônicos das geladeiras modernas controlam temperatura, degelo e funções essenciais. Quando apresentam defeito, todo o funcionamento é comprometido. Nossa equipe é especializada no reparo de placas eletrônicas com equipamentos de precisão.',
    details: [
      'Reparo de placa eletrônica principal',
      'Conserto de placa de interface (display)',
      'Substituição de componentes eletrônicos',
      'Reprogramação de placa',
      'Troca de sensores conectados ao painel',
      'Verificação de fiação e conectores',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Display apagado ou piscando',
      'Códigos de erro no painel',
      'Botões não respondem ao toque',
      'Temperatura não pode ser ajustada',
      'Geladeira não obedece aos comandos do painel',
      'Luzes do painel acendem mas não funcionam',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o painel eletrônico da geladeira?',
        answer: 'O reparo de painel eletrônico varia entre R$200,00 e R$500,00. A troca completa da placa pode custar mais, dependendo do modelo. Oferecemos orçamento gratuito.',
      },
      {
        question: 'É possível reparar a placa ou precisa trocar?',
        answer: 'Na maioria dos casos, a placa pode ser reparada, o que é mais econômico. Quando não é possível, realizamos a substituição com peça compatível ou original.',
      },
      {
        question: 'O que causa defeito no painel eletrônico?',
        answer: 'As causas mais comuns são oscilações na rede elétrica, umidade, curto-circuito e desgaste natural dos componentes eletrônicos.',
      },
      {
        question: 'O conserto do painel é feito em domicílio?',
        answer: 'Sim! Na maioria dos casos o diagnóstico e reparo são feitos no local. Apenas em casos complexos a placa pode precisar ir para a bancada.',
      },
    ],
    metaTitle: 'Conserto de Painel Eletrônico de Geladeira em Maringá | Reparo de Placa',
    metaDescription: 'Conserto de painel eletrônico e placa de geladeira em Maringá-PR. Reparo de display, sensores e componentes. Atendimento no mesmo dia com garantia.',
    metaKeywords: 'conserto painel geladeira Maringá, reparo placa eletrônica geladeira, display geladeira, código erro geladeira',
  },
  {
    slug: 'vazamento-gas-refrigerante-geladeira',
    title: 'Vazamento de Gás Refrigerante',
    shortDescription: 'Geladeira perdendo gás? Identificamos o vazamento e fazemos a recarga completa.',
    icon: Droplets,
    heroTitle: 'Vazamento de Gás Refrigerante de Geladeira em Maringá',
    heroSubtitle: 'Sua geladeira parou de gelar e suspeita de vazamento de gás?',
    heroDescription: 'Detecção e recarga de gás refrigerante com garantia em Maringá!',
    introTitle: 'Reparo de Vazamento de Gás Refrigerante em Geladeira em Maringá-PR',
    introDescription: 'O gás refrigerante é essencial para o funcionamento da geladeira. Quando há vazamento, o aparelho perde a capacidade de refrigeração gradualmente. Nossa equipe utiliza equipamentos de detecção de vazamento e realiza a recarga com gás adequado para cada modelo.',
    details: [
      'Detecção de vazamento com equipamento profissional',
      'Solda e reparo do ponto de vazamento',
      'Recarga completa de gás refrigerante',
      'Teste de pressão e estanqueidade',
      'Verificação do sistema de refrigeração completo',
      'Troca de filtro secador',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Bosch'],
    defectSigns: [
      'Geladeira não gela como antes',
      'Geladeira gela apenas em uma parte',
      'Motor funciona sem parar',
      'Formação de gelo apenas em um ponto',
      'Cheiro estranho vindo da geladeira',
      'Condensação excessiva na parte externa',
    ],
    faqs: [
      {
        question: 'Quanto custa a recarga de gás da geladeira?',
        answer: 'O serviço de detecção de vazamento e recarga de gás varia entre R$250,00 e R$500,00, dependendo do tipo de gás e da complexidade do vazamento.',
      },
      {
        question: 'Como saber se a geladeira está com vazamento de gás?',
        answer: 'Os principais sinais são: geladeira não gela como antes, motor funciona sem parar, gelo acumula apenas em um ponto ou a geladeira para de refrigerar gradualmente.',
      },
      {
        question: 'A recarga de gás é definitiva?',
        answer: 'Sim! Quando o ponto de vazamento é identificado e reparado corretamente, a recarga é definitiva. Oferecemos garantia de 90 dias no serviço.',
      },
      {
        question: 'Qual o gás usado na geladeira?',
        answer: 'Depende do modelo. Os mais comuns são R134a e R600a. Nossos técnicos utilizam o gás correto para cada modelo, garantindo eficiência e segurança.',
      },
    ],
    metaTitle: 'Vazamento de Gás Refrigerante Geladeira Maringá | Detecção e Recarga',
    metaDescription: 'Reparo de vazamento de gás refrigerante em geladeira em Maringá-PR. Detecção com equipamento profissional, recarga completa e garantia de 90 dias.',
    metaKeywords: 'vazamento gás geladeira Maringá, recarga gás geladeira, geladeira não gela, gás refrigerante',
  },
  {
    slug: 'troca-borracha-vedacao-geladeira',
    title: 'Troca de Borracha de Vedação',
    shortDescription: 'Porta não veda corretamente? Substituímos a borracha para manter a temperatura ideal.',
    icon: Shield,
    heroTitle: 'Troca de Borracha de Vedação de Geladeira em Maringá',
    heroSubtitle: 'A porta da sua geladeira não fecha direito ou está com mofo?',
    heroDescription: 'Substituição de borracha de vedação com peças originais em Maringá!',
    introTitle: 'Troca de Borracha de Vedação (Gaxeta) de Geladeira em Maringá-PR',
    introDescription: 'A borracha de vedação (gaxeta) da geladeira é responsável por manter a porta fechada hermeticamente. Quando danificada, permite a entrada de ar quente, fazendo a geladeira trabalhar mais e aumentando o consumo de energia. Realizamos a troca com borrachas originais e compatíveis.',
    details: [
      'Troca da borracha da porta do refrigerador',
      'Troca da borracha da porta do freezer',
      'Ajuste de dobradiças e encaixe da porta',
      'Limpeza e higienização do encaixe',
      'Verificação do alinhamento da porta',
      'Teste de vedação após a troca',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Continental'],
    defectSigns: [
      'Porta da geladeira não fecha corretamente',
      'Borracha ressecada, rachada ou com mofo',
      'Formação de gelo excessivo no freezer',
      'Consumo de energia elétrica elevado',
      'Geladeira trabalhando sem parar',
      'Condensação ou gotejamento na porta',
    ],
    faqs: [
      {
        question: 'Quanto custa trocar a borracha da geladeira?',
        answer: 'O valor da troca de borracha varia entre R$120,00 e R$350,00, incluindo a peça e a mão de obra. O preço depende da marca e modelo da geladeira.',
      },
      {
        question: 'Como saber se preciso trocar a borracha?',
        answer: 'Faça o teste do papel: feche a porta com uma folha de papel na borracha. Se o papel sair facilmente, a borracha precisa ser trocada.',
      },
      {
        question: 'A borracha velha pode aumentar a conta de luz?',
        answer: 'Sim! Uma borracha danificada permite entrada de ar quente, fazendo o motor trabalhar mais e aumentando o consumo de energia em até 20%.',
      },
      {
        question: 'Vocês têm borracha para todas as marcas?',
        answer: 'Sim! Trabalhamos com borrachas originais e compatíveis para todas as principais marcas: Brastemp, Electrolux, Consul, Samsung, LG e outras.',
      },
    ],
    metaTitle: 'Troca de Borracha de Vedação Geladeira Maringá | Gaxeta Original',
    metaDescription: 'Troca de borracha de vedação (gaxeta) de geladeira em Maringá-PR. Peças originais e compatíveis para todas as marcas. Atendimento rápido com garantia.',
    metaKeywords: 'troca borracha geladeira Maringá, gaxeta geladeira, vedação porta geladeira, borracha vedação',
  },
  {
    slug: 'conserto-termostato-geladeira',
    title: 'Problema no Termostato',
    shortDescription: 'Temperatura desregulada? Ajustamos ou trocamos o termostato com garantia.',
    icon: Thermometer,
    heroTitle: 'Conserto de Termostato de Geladeira em Maringá',
    heroSubtitle: 'Temperatura da geladeira desregulada ou fora de controle?',
    heroDescription: 'Reparo e troca de termostato com diagnóstico preciso em Maringá!',
    introTitle: 'Reparo e Troca de Termostato de Geladeira em Maringá-PR',
    introDescription: 'O termostato controla a temperatura interna da geladeira. Quando defeituoso, pode fazer o aparelho gelar demais, não gelar ou funcionar de forma irregular. Nossa equipe realiza o diagnóstico e a troca do termostato com peças originais e garantia.',
    details: [
      'Diagnóstico do termostato mecânico e eletrônico',
      'Troca de termostato com peça original',
      'Calibração de temperatura',
      'Verificação do sensor de temperatura',
      'Teste de funcionamento após o reparo',
      'Ajuste do ciclo de refrigeração',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Geladeira congela todos os alimentos',
      'Geladeira não atinge a temperatura ideal',
      'Temperatura oscila constantemente',
      'Motor liga e desliga com frequência anormal',
      'Geladeira não desliga nunca',
      'Ajuste de temperatura não funciona',
    ],
    faqs: [
      {
        question: 'Quanto custa trocar o termostato da geladeira?',
        answer: 'A troca de termostato varia entre R$150,00 e R$400,00, dependendo se é mecânico ou eletrônico e da marca do aparelho.',
      },
      {
        question: 'Como saber se o termostato está com defeito?',
        answer: 'Se a geladeira congela demais, não gela o suficiente ou a temperatura oscila sem motivo, provavelmente o termostato está com defeito.',
      },
      {
        question: 'Qual a diferença entre termostato mecânico e eletrônico?',
        answer: 'O mecânico usa uma peça física para controlar a temperatura (aquele botão giratório). O eletrônico usa sensores e placa digital. Ambos podem ser reparados ou trocados.',
      },
      {
        question: 'O conserto é rápido?',
        answer: 'Sim! A troca do termostato é um serviço simples, geralmente feito em até 1 hora no próprio local.',
      },
    ],
    metaTitle: 'Conserto de Termostato de Geladeira em Maringá | Reparo com Garantia',
    metaDescription: 'Conserto e troca de termostato de geladeira em Maringá-PR. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em domicílio.',
    metaKeywords: 'conserto termostato geladeira Maringá, troca termostato, geladeira congela demais, temperatura geladeira',
  },
];

export const getGeladeiraServiceBySlug = (slug: string) =>
  geladeiraServices.find((s) => s.slug === slug);
