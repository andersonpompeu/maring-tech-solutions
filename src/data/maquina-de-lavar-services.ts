import {
  Settings,
  Wrench,
  Zap,
  Shield,
  Droplets,
  AlertTriangle,
} from 'lucide-react';

export interface MaquinaDeLavarService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Settings;
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

export const maquinaDeLavarServices: MaquinaDeLavarService[] = [
  {
    slug: 'manutencao-de-lava-e-seca',
    title: 'Manutenção de Lava e Seca',
    shortDescription: 'Problemas na lavagem ou secagem? Fazemos manutenção com peças originais.',
    icon: Settings,
    heroTitle: 'Manutenção de Lava e Seca em Maringá',
    heroSubtitle: 'Sua lava e seca parou de secar ou está deixando as roupas úmidas?',
    heroDescription: 'Roupa acumulando e sem previsão de conserto? Nossa equipe resolve no mesmo dia com peças originais e garantia!',
    introTitle: 'Manutenção Especializada em Lava e Seca em Maringá-PR',
    introDescription: 'A lava e seca é um dos eletrodomésticos mais importantes da casa. Quando apresenta defeito, a rotina para. Nossa equipe é especializada no diagnóstico e reparo de todos os sistemas — lavagem, secagem, drenagem e eletrônica — com peças originais e garantia de 90 dias.',
    details: [
      'Reparo do sistema de secagem (resistência e ventilador)',
      'Troca de correia e rolamentos do tambor',
      'Limpeza e desobstrução do sistema de drenagem',
      'Reparo de placa eletrônica e sensores',
      'Substituição de bomba d\'água',
      'Verificação e ajuste do motor principal',
    ],
    brands: ['Brastemp', 'Electrolux', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Roupas saem úmidas após o ciclo de secagem',
      'Máquina faz barulho forte durante a centrifugação',
      'Vazamento de água pela porta ou base',
      'Painel eletrônico com código de erro',
      'Máquina não inicia o ciclo de secagem',
      'Cheiro de queimado durante o funcionamento',
    ],
    faqs: [
      {
        question: 'Quanto custa a manutenção de lava e seca em Maringá?',
        answer: 'O valor varia entre R$200,00 e R$700,00, dependendo do defeito e da peça a ser substituída. Oferecemos orçamento gratuito em domicílio.',
      },
      {
        question: 'A lava e seca parou de secar. O que pode ser?',
        answer: 'Geralmente é falha na resistência de secagem, no ventilador ou no sensor de temperatura. Nossos técnicos identificam a causa exata com diagnóstico preciso no local.',
      },
      {
        question: 'O conserto da lava e seca é feito no mesmo dia?',
        answer: 'Sim! Na maioria dos casos, o reparo é feito em uma única visita, em até 2 horas. Em casos que exigem peças específicas, agendamos retorno com agilidade.',
      },
      {
        question: 'Vocês atendem todas as marcas de lava e seca?',
        answer: 'Sim! Atendemos Brastemp, Electrolux, Samsung, LG, Midea e demais marcas com peças originais e garantia.',
      },
    ],
    metaTitle: 'Manutenção de Lava e Seca em Maringá | Assistência Técnica',
    metaDescription: 'Manutenção de lava e seca em Maringá-PR. Reparo de secagem, lavagem, placa eletrônica e drenagem. Peças originais e garantia de 90 dias.',
    metaKeywords: 'manutenção lava e seca Maringá, conserto lava e seca, lava e seca não seca, reparo lava e seca',
  },
  {
    slug: 'manutencao-de-maquina-de-lavar',
    title: 'Manutenção de Máquina de Lavar',
    shortDescription: 'Lavadora fazendo barulho? Realizamos diagnóstico e conserto imediato.',
    icon: Wrench,
    heroTitle: 'Manutenção de Máquina de Lavar em Maringá',
    heroSubtitle: 'Sua lavadora parou de funcionar ou está fazendo barulho estranho?',
    heroDescription: 'Roupa suja acumulando em casa? Resolvemos o problema da sua máquina de lavar no mesmo dia, com garantia e peças originais!',
    introTitle: 'Manutenção Completa de Máquina de Lavar em Maringá-PR',
    introDescription: 'A máquina de lavar é essencial no dia a dia. Quando apresenta defeito, a rotina doméstica é diretamente afetada. Nossa equipe realiza manutenção preventiva e corretiva em todas as marcas e modelos, com diagnóstico preciso e peças originais.',
    details: [
      'Troca de rolamentos e mancais',
      'Substituição de correia do motor',
      'Reparo do sistema de drenagem',
      'Troca de amortecedores e molas de suspensão',
      'Verificação e reparo do eletroválvula de entrada',
      'Limpeza e higienização completa do sistema',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Máquina fazendo barulho forte ao centrifugar',
      'Vazamento de água pela base ou mangueira',
      'Máquina não enche de água',
      'Cesto não gira ou trava no meio do ciclo',
      'Máquina não drena a água após a lavagem',
      'Vibração excessiva durante o funcionamento',
    ],
    faqs: [
      {
        question: 'Quanto custa a manutenção de máquina de lavar em Maringá?',
        answer: 'O valor varia entre R$150,00 e R$600,00, conforme o defeito e a marca do aparelho. Oferecemos orçamento gratuito e sem compromisso.',
      },
      {
        question: 'Minha máquina faz muito barulho ao centrifugar. O que pode ser?',
        answer: 'Barulho na centrifugação geralmente indica problema nos rolamentos, amortecedores ou correia. Nossos técnicos identificam e resolvem rapidamente.',
      },
      {
        question: 'A manutenção preventiva é importante?',
        answer: 'Sim! A manutenção preventiva evita quebras inesperadas, prolonga a vida útil do aparelho e garante um funcionamento eficiente, economizando energia e água.',
      },
      {
        question: 'Vocês fazem manutenção em domicílio?',
        answer: 'Sim! Todo o serviço é realizado em domicílio, com equipamentos profissionais. Na maioria dos casos, resolvemos em uma única visita.',
      },
    ],
    metaTitle: 'Manutenção de Máquina de Lavar em Maringá | Assistência Técnica',
    metaDescription: 'Manutenção de máquina de lavar em Maringá-PR. Diagnóstico, reparo de rolamentos, correia, drenagem e centrifugação. Peças originais e garantia de 90 dias.',
    metaKeywords: 'manutenção máquina de lavar Maringá, conserto lavadora, máquina de lavar barulho, reparo máquina de lavar',
  },
  {
    slug: 'conserto-de-painel-eletronico-maquina-de-lavar',
    title: 'Conserto de Painel Eletrônico',
    shortDescription: 'Painel sem resposta? Reparamos placas eletrônicas no mesmo dia em Maringá.',
    icon: Zap,
    heroTitle: 'Conserto de Painel Eletrônico de Máquina de Lavar em Maringá',
    heroSubtitle: 'Painel da sua máquina de lavar travou, apagou ou mostra código de erro?',
    heroDescription: 'Sem conseguir programar a lavagem? Nossa equipe repara placas e painéis eletrônicos no mesmo dia, com garantia!',
    introTitle: 'Conserto de Painel e Placa Eletrônica de Máquina de Lavar em Maringá-PR',
    introDescription: 'Os painéis eletrônicos controlam todos os ciclos da máquina de lavar. Quando apresentam defeito, o aparelho pode parar completamente ou funcionar de forma irregular. Nossa equipe é especializada no reparo de placas e painéis com equipamentos de precisão e peças originais.',
    details: [
      'Reparo de placa eletrônica principal',
      'Conserto de placa de interface (display/painel)',
      'Substituição de componentes eletrônicos queimados',
      'Reprogramação de placa e software',
      'Troca de sensores conectados ao painel',
      'Verificação de fiação, conectores e aterramento',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Display apagado ou piscando sem parar',
      'Código de erro exibido no painel',
      'Botões não respondem ao toque',
      'Ciclo de lavagem não pode ser selecionado',
      'Máquina liga mas não inicia o programa',
      'Painel acende mas a máquina não funciona',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o painel eletrônico da máquina de lavar?',
        answer: 'O reparo de painel eletrônico varia entre R$200,00 e R$500,00. A troca completa da placa pode custar mais, dependendo do modelo. Oferecemos orçamento gratuito.',
      },
      {
        question: 'É possível reparar a placa ou precisa trocar?',
        answer: 'Na maioria dos casos, a placa pode ser reparada, o que é mais econômico. Quando não é possível, realizamos a substituição com peça compatível ou original.',
      },
      {
        question: 'O que causa defeito no painel eletrônico da máquina de lavar?',
        answer: 'As causas mais comuns são oscilações na rede elétrica, umidade, curto-circuito por sobrecarga e desgaste natural dos componentes.',
      },
      {
        question: 'O conserto do painel é feito em domicílio?',
        answer: 'Sim! Na maioria dos casos, o diagnóstico e reparo são feitos no local. Apenas em casos complexos a placa pode precisar ir para a bancada.',
      },
    ],
    metaTitle: 'Conserto de Painel Eletrônico de Máquina de Lavar em Maringá | Reparo de Placa',
    metaDescription: 'Conserto de painel eletrônico e placa de máquina de lavar em Maringá-PR. Reparo de display, sensores e componentes. Atendimento no mesmo dia com garantia.',
    metaKeywords: 'conserto painel máquina de lavar Maringá, reparo placa eletrônica lavadora, display máquina de lavar, código erro lavadora',
  },
  {
    slug: 'assistencia-tecnica-maquina-de-lavar',
    title: 'Assistência Técnica de Máquina de Lavar',
    shortDescription: 'Atendimento em Maringá com reparos rápidos e garantia no serviço prestado.',
    icon: Shield,
    heroTitle: 'Assistência Técnica de Máquina de Lavar em Maringá',
    heroSubtitle: 'Procurando assistência técnica confiável para sua máquina de lavar?',
    heroDescription: 'Roupa acumulando e precisa de um técnico de confiança? Atendemos todas as marcas em Maringá com garantia de 90 dias!',
    introTitle: 'Assistência Técnica Especializada em Máquina de Lavar em Maringá-PR',
    introDescription: 'Somos referência em assistência técnica de máquinas de lavar em Maringá. Nossa equipe atende todas as marcas e modelos, com diagnóstico preciso, peças originais e garantia por escrito. Atendimento rápido em domicílio para que sua rotina não pare.',
    details: [
      'Diagnóstico completo do aparelho',
      'Reparo de motor e sistema de transmissão',
      'Troca de peças com garantia',
      'Manutenção preventiva e corretiva',
      'Instalação e desinstalação de máquinas',
      'Suporte técnico pós-atendimento',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Máquina não liga ou não responde',
      'Problemas recorrentes mesmo após reparos',
      'Ruídos anormais durante qualquer ciclo',
      'Vazamento constante de água',
      'Máquina não completa o ciclo de lavagem',
      'Roupas saem sujas ou mal lavadas',
    ],
    faqs: [
      {
        question: 'Qual o valor da assistência técnica de máquina de lavar em Maringá?',
        answer: 'O valor varia entre R$150,00 e R$800,00, conforme o defeito, marca e peças necessárias. Oferecemos orçamento gratuito sem compromisso.',
      },
      {
        question: 'Vocês atendem todas as marcas de lavadora?',
        answer: 'Sim! Atendemos Brastemp, Electrolux, Consul, Samsung, LG, Midea, Panasonic e todas as demais marcas do mercado.',
      },
      {
        question: 'O atendimento é em domicílio?',
        answer: 'Sim! Nossa equipe vai até sua residência com todos os equipamentos necessários. Na maioria dos casos, o reparo é feito em uma única visita.',
      },
      {
        question: 'Vocês oferecem garantia no serviço?',
        answer: 'Sim! Todos os nossos serviços têm garantia de 90 dias, tanto na mão de obra quanto nas peças utilizadas.',
      },
    ],
    metaTitle: 'Assistência Técnica de Máquina de Lavar em Maringá | Todas as Marcas',
    metaDescription: 'Assistência técnica de máquina de lavar em Maringá-PR. Atendemos todas as marcas com peças originais, diagnóstico preciso e garantia de 90 dias.',
    metaKeywords: 'assistência técnica máquina de lavar Maringá, conserto lavadora Maringá, técnico máquina de lavar, reparo lavadora',
  },
  {
    slug: 'conserto-de-secadora',
    title: 'Conserto de Secadora de Roupas',
    shortDescription: 'Secadora desregulada? Trocamos peças e regulamos o sistema na hora.',
    icon: Droplets,
    heroTitle: 'Conserto de Secadora de Roupas em Maringá',
    heroSubtitle: 'Sua secadora parou de funcionar ou está deixando as roupas molhadas?',
    heroDescription: 'Roupas úmidas acumulando no varal? Consertamos sua secadora no mesmo dia com peças originais e garantia!',
    introTitle: 'Conserto e Reparo de Secadora de Roupas em Maringá-PR',
    introDescription: 'A secadora de roupas é indispensável, especialmente em dias chuvosos. Quando apresenta defeito, a rotina é comprometida. Nossa equipe realiza o conserto de secadoras de todas as marcas, com diagnóstico preciso e peças originais.',
    details: [
      'Troca de resistência de secagem',
      'Reparo do sistema de ventilação e exaustão',
      'Substituição de termostato e sensor de temperatura',
      'Troca de correia e rolamentos',
      'Reparo de placa eletrônica',
      'Limpeza de dutos e filtros de fiapos',
    ],
    brands: ['Brastemp', 'Electrolux', 'Samsung', 'LG', 'Midea', 'Fischer'],
    defectSigns: [
      'Secadora não aquece ou esquenta demais',
      'Roupas saem úmidas após o ciclo completo',
      'Barulho forte ou vibração durante o uso',
      'Secadora não liga ou desliga sozinha',
      'Cheiro de queimado durante a secagem',
      'Tempo de secagem muito longo',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar uma secadora de roupas em Maringá?',
        answer: 'O valor do conserto varia entre R$180,00 e R$600,00, dependendo do defeito e da peça necessária. Oferecemos orçamento gratuito em domicílio.',
      },
      {
        question: 'A secadora não está aquecendo. O que pode ser?',
        answer: 'Geralmente é falha na resistência de aquecimento, no termostato ou no fusível térmico. Nossos técnicos identificam e resolvem rapidamente.',
      },
      {
        question: 'Vocês consertam secadoras a gás e elétricas?',
        answer: 'Sim! Atendemos secadoras elétricas e a gás de todas as marcas, com peças originais e garantia de 90 dias.',
      },
      {
        question: 'O conserto é feito em domicílio?',
        answer: 'Sim! Na maioria dos casos, o reparo é realizado em domicílio em uma única visita, com duração média de 1 a 2 horas.',
      },
    ],
    metaTitle: 'Conserto de Secadora de Roupas em Maringá | Assistência Técnica',
    metaDescription: 'Conserto de secadora de roupas em Maringá-PR. Reparo de resistência, ventilação, placa eletrônica e mais. Peças originais e garantia de 90 dias.',
    metaKeywords: 'conserto secadora Maringá, reparo secadora de roupas, secadora não aquece, assistência técnica secadora',
  },
  {
    slug: 'problema-na-centrifugacao',
    title: 'Conserto de Centrifugação',
    shortDescription: 'Máquina não gira, faz ruído ou acumula água? Resolvemos imediatamente.',
    icon: AlertTriangle,
    heroTitle: 'Conserto de Centrifugação de Máquina de Lavar em Maringá',
    heroSubtitle: 'Sua máquina de lavar parou de centrifugar ou faz barulho forte?',
    heroDescription: 'Roupas encharcadas e máquina travando? Resolvemos o problema de centrifugação no mesmo dia com garantia!',
    introTitle: 'Reparo de Centrifugação de Máquina de Lavar em Maringá-PR',
    introDescription: 'A centrifugação é uma das etapas mais importantes da lavagem. Quando falha, as roupas saem encharcadas e pesadas. Nossa equipe diagnostica e repara problemas de centrifugação em todas as marcas, garantindo o funcionamento perfeito do seu aparelho.',
    details: [
      'Troca de amortecedores e molas de suspensão',
      'Reparo do sistema de transmissão e embreagem',
      'Substituição de rolamentos do cesto',
      'Reparo do motor e capacitor',
      'Troca de correia de acionamento',
      'Balanceamento e nivelamento do aparelho',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Panasonic'],
    defectSigns: [
      'Máquina não centrifuga ou centrifuga fraco',
      'Barulho forte de batida na centrifugação',
      'Roupas saem encharcadas após a lavagem',
      'Máquina trava ou para no meio da centrifugação',
      'Vibração excessiva que move o aparelho',
      'Cheiro de borracha queimada durante o ciclo',
    ],
    faqs: [
      {
        question: 'Quanto custa o conserto de centrifugação em Maringá?',
        answer: 'O valor varia entre R$150,00 e R$500,00, dependendo da causa do problema (amortecedores, correia, motor ou transmissão). Orçamento gratuito.',
      },
      {
        question: 'Por que a máquina de lavar parou de centrifugar?',
        answer: 'As causas mais comuns são desgaste dos amortecedores, correia solta ou gasta, problemas no motor, falha na embreagem ou excesso de carga.',
      },
      {
        question: 'A máquina vibra muito na centrifugação. Isso é grave?',
        answer: 'Pode ser! Vibração excessiva indica problema nos amortecedores, desnivelamento ou desgaste dos rolamentos. É importante consertar para evitar danos maiores.',
      },
      {
        question: 'O reparo é feito no mesmo dia?',
        answer: 'Sim! Na maioria dos casos, o conserto de centrifugação é feito em uma única visita, geralmente em até 2 horas.',
      },
    ],
    metaTitle: 'Conserto de Centrifugação de Máquina de Lavar em Maringá | Assistência Técnica',
    metaDescription: 'Conserto de centrifugação de máquina de lavar em Maringá-PR. Reparo de amortecedores, correia, motor e transmissão. Atendimento no mesmo dia com garantia.',
    metaKeywords: 'conserto centrifugação Maringá, máquina de lavar não centrifuga, reparo centrifugação, lavadora vibra muito',
  },
];

export const getMaquinaDeLavarServiceBySlug = (slug: string) =>
  maquinaDeLavarServices.find((s) => s.slug === slug);
