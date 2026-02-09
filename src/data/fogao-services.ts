import {
  Flame,
  Zap,
  Settings,
  Shield,
  Thermometer,
  AlertTriangle,
} from 'lucide-react';

export interface FogaoService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Flame;
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

export const fogaoServices: FogaoService[] = [
  {
    slug: 'conserto-fogao-a-gas',
    title: 'Conserto de Fogão a Gás',
    shortDescription: 'Fogão não acende ou chama irregular? Reparamos queimadores e válvulas com peças originais.',
    icon: Flame,
    heroTitle: 'Conserto de Fogão a Gás em Maringá',
    heroSubtitle: 'Seu fogão a gás não acende ou a chama está irregular?',
    heroDescription: 'Assistência técnica especializada em fogões a gás em Maringá!',
    introTitle: 'Assistência Técnica para Conserto de Fogão a Gás em Maringá-PR',
    introDescription: 'Problemas no fogão a gás podem ser perigosos e precisam de reparo imediato. Nossa equipe realiza diagnóstico completo de queimadores, válvulas de segurança e sistema de ignição, com peças originais e garantia de 90 dias.',
    details: [
      'Reparo e troca de queimadores',
      'Ajuste e regulagem de chama',
      'Troca de válvulas de segurança',
      'Reparo do sistema de ignição',
      'Desobstrução de saídas de gás',
      'Verificação de vazamento de gás',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Atlas', 'Dako', 'Mueller', 'Fischer'],
    defectSigns: [
      'Fogão não acende ou demora para acender',
      'Chama amarela ou irregular',
      'Cheiro de gás mesmo com boca fechada',
      'Queimador apaga sozinho',
      'Acendimento automático não funciona',
      'Chama muito alta ou muito baixa',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar um fogão a gás?',
        answer: 'O valor varia entre R$100,00 e R$400,00, dependendo do defeito e das peças necessárias. Oferecemos orçamento gratuito em domicílio.',
      },
      {
        question: 'É seguro continuar usando o fogão com cheiro de gás?',
        answer: 'Não! Se sentir cheiro de gás, desligue o registro, abra janelas e entre em contato imediatamente. Nossos técnicos fazem atendimento emergencial.',
      },
      {
        question: 'Vocês consertam fogões de todas as marcas?',
        answer: 'Sim! Atendemos Brastemp, Electrolux, Consul, Atlas, Dako, Mueller, Fischer e demais marcas com peças originais.',
      },
      {
        question: 'O conserto é feito no mesmo dia?',
        answer: 'Sim! Na maioria dos casos atendemos no mesmo dia, com técnicos prontos em diversas regiões de Maringá.',
      },
    ],
    metaTitle: 'Conserto de Fogão a Gás em Maringá | Assistência Técnica',
    metaDescription: 'Conserto de fogão a gás em Maringá-PR. Reparo de queimadores, válvulas e ignição. Peças originais e garantia de 90 dias.',
    metaKeywords: 'conserto fogão a gás Maringá, reparo queimador fogão, fogão não acende, chama irregular fogão',
  },
  {
    slug: 'conserto-forno-eletrico',
    title: 'Conserto de Forno Elétrico',
    shortDescription: 'Forno não aquece ou temperatura irregular? Reparamos resistências e termostatos.',
    icon: Thermometer,
    heroTitle: 'Conserto de Forno Elétrico em Maringá',
    heroSubtitle: 'Seu forno elétrico não aquece ou a temperatura está desregulada?',
    heroDescription: 'Reparo especializado em fornos elétricos com garantia em Maringá!',
    introTitle: 'Conserto de Forno Elétrico e Embutido em Maringá-PR',
    introDescription: 'O forno elétrico é essencial na cozinha moderna. Quando apresenta defeito na resistência, termostato ou painel, pode comprometer o preparo dos alimentos. Nossa equipe é especializada no reparo de fornos elétricos de todas as marcas.',
    details: [
      'Troca de resistência superior e inferior',
      'Reparo e troca de termostato',
      'Conserto do painel de controle',
      'Troca de lâmpada interna',
      'Reparo da dobradiça da porta',
      'Verificação e troca de ventilador (convecção)',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Fischer', 'Tramontina', 'Midea', 'Samsung'],
    defectSigns: [
      'Forno não aquece ou aquece parcialmente',
      'Temperatura não atinge o valor programado',
      'Forno desliga sozinho durante o uso',
      'Painel de controle não responde',
      'Lâmpada interna não funciona',
      'Porta do forno não fecha corretamente',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar um forno elétrico?',
        answer: 'O reparo varia entre R$150,00 e R$500,00, dependendo da peça a ser substituída. Troca de resistência e termostato são os serviços mais comuns.',
      },
      {
        question: 'Vocês consertam fornos embutidos?',
        answer: 'Sim! Trabalhamos com fornos embutidos de todas as marcas, incluindo modelos de alta tecnologia com painel digital.',
      },
      {
        question: 'O forno pode ser consertado em casa?',
        answer: 'Sim! A maioria dos reparos é feita em domicílio, sem necessidade de remover o forno da bancada.',
      },
      {
        question: 'Quanto tempo dura o conserto?',
        answer: 'A maioria dos reparos são concluídos em até 2 horas. Em casos de peças específicas, agendamos retorno com agilidade.',
      },
    ],
    metaTitle: 'Conserto de Forno Elétrico em Maringá | Reparo com Garantia',
    metaDescription: 'Conserto de forno elétrico em Maringá-PR. Troca de resistência, termostato e painel. Atendimento em domicílio com garantia de 90 dias.',
    metaKeywords: 'conserto forno elétrico Maringá, reparo forno embutido, forno não aquece, resistência forno',
  },
  {
    slug: 'conserto-cooktop',
    title: 'Conserto de Cooktop',
    shortDescription: 'Cooktop não acende ou com falha na ignição? Reparamos cooktops a gás e elétricos.',
    icon: Zap,
    heroTitle: 'Conserto de Cooktop em Maringá',
    heroSubtitle: 'Seu cooktop não acende ou apresenta falha na ignição?',
    heroDescription: 'Assistência técnica para cooktops a gás, elétricos e por indução em Maringá!',
    introTitle: 'Conserto de Cooktop a Gás, Elétrico e Indução em Maringá-PR',
    introDescription: 'O cooktop é um dos eletrodomésticos mais utilizados na cozinha. Quando apresenta problemas na ignição, queimadores ou painel touch, é preciso de assistência técnica especializada. Reparamos cooktops de todas as marcas e tecnologias.',
    details: [
      'Reparo de ignição eletrônica',
      'Troca de queimadores e espalhadores',
      'Conserto de painel touch/sensitivo',
      'Reparo de cooktop por indução',
      'Troca de válvulas de segurança',
      'Verificação de fiação e conexões elétricas',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Fischer', 'Tramontina', 'Midea', 'Suggar'],
    defectSigns: [
      'Cooktop não acende nenhuma boca',
      'Ignição fica estalando sem parar',
      'Painel touch não responde',
      'Chama apaga sozinha ao soltar o botão',
      'Cooktop por indução não detecta a panela',
      'Vidro do cooktop trincado ou quebrado',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar um cooktop?',
        answer: 'O valor varia entre R$120,00 e R$450,00, dependendo do tipo (gás, elétrico ou indução) e do defeito apresentado.',
      },
      {
        question: 'Vocês consertam cooktop por indução?',
        answer: 'Sim! Temos técnicos especializados em cooktops por indução, incluindo reparo de placa eletrônica e sensores.',
      },
      {
        question: 'É possível trocar o vidro do cooktop?',
        answer: 'Sim, realizamos a troca do vidro do cooktop quando disponível para o modelo. Consulte disponibilidade para sua marca.',
      },
      {
        question: 'O conserto do cooktop é feito em domicílio?',
        answer: 'Sim! O diagnóstico e a maioria dos reparos são realizados diretamente na sua cozinha.',
      },
    ],
    metaTitle: 'Conserto de Cooktop em Maringá | Gás, Elétrico e Indução',
    metaDescription: 'Conserto de cooktop em Maringá-PR. Reparo de cooktop a gás, elétrico e por indução. Todas as marcas com peças originais e garantia.',
    metaKeywords: 'conserto cooktop Maringá, reparo cooktop indução, cooktop não acende, ignição cooktop',
  },
  {
    slug: 'conserto-acendimento-automatico',
    title: 'Conserto de Acendimento Automático',
    shortDescription: 'Acendimento automático não funciona? Reparamos o sistema de ignição com rapidez.',
    icon: Zap,
    heroTitle: 'Conserto de Acendimento Automático de Fogão em Maringá',
    heroSubtitle: 'O acendimento automático do seu fogão parou de funcionar?',
    heroDescription: 'Reparo de ignição automática com atendimento rápido em Maringá!',
    introTitle: 'Reparo de Acendimento Automático de Fogão em Maringá-PR',
    introDescription: 'O sistema de acendimento automático traz praticidade e segurança. Quando falha, pode ser causado por desgaste da vela de ignição, problemas no módulo eletrônico ou umidade. Nossa equipe resolve rapidamente com peças originais.',
    details: [
      'Troca de vela de ignição (eletrodo)',
      'Reparo do módulo de ignição',
      'Limpeza e secagem do sistema',
      'Verificação de fiação e conexões',
      'Teste de funcionamento de todas as bocas',
      'Ajuste de posição da vela',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Atlas', 'Dako', 'Mueller', 'Fischer'],
    defectSigns: [
      'Acendimento não gera faísca',
      'Faísca fraca ou intermitente',
      'Acendimento funciona em algumas bocas e outras não',
      'Estalido contínuo mesmo com boca apagada',
      'Fogão toma choque ao acender',
      'Botão de acendimento travado ou solto',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o acendimento automático?',
        answer: 'O reparo varia entre R$80,00 e R$250,00, dependendo se é necessário trocar a vela, o módulo ou apenas fazer limpeza.',
      },
      {
        question: 'Por que o acendimento fica estalando sem parar?',
        answer: 'Isso geralmente é causado por umidade no sistema de ignição ou curto-circuito na fiação. Uma limpeza e secagem resolve na maioria dos casos.',
      },
      {
        question: 'O acendimento pode dar choque?',
        answer: 'Se o fogão está dando choque, pode haver fio desencapado ou problema no aterramento. Desligue o aparelho e chame um técnico imediatamente.',
      },
      {
        question: 'O conserto é rápido?',
        answer: 'Sim! O reparo do acendimento automático é geralmente feito em até 1 hora no próprio local.',
      },
    ],
    metaTitle: 'Conserto de Acendimento Automático Fogão Maringá | Ignição',
    metaDescription: 'Conserto de acendimento automático de fogão em Maringá-PR. Troca de vela de ignição, módulo e fiação. Atendimento rápido com garantia.',
    metaKeywords: 'conserto acendimento automático fogão Maringá, ignição fogão, vela fogão, fogão não acende',
  },
  {
    slug: 'conserto-valvula-seguranca-fogao',
    title: 'Conserto de Válvula de Segurança',
    shortDescription: 'Válvula de segurança com defeito? Garantimos o funcionamento seguro do seu fogão.',
    icon: Shield,
    heroTitle: 'Conserto de Válvula de Segurança de Fogão em Maringá',
    heroSubtitle: 'A válvula de segurança do seu fogão não está funcionando?',
    heroDescription: 'Reparo de válvulas de segurança com técnicos certificados em Maringá!',
    introTitle: 'Reparo de Válvula de Segurança de Fogão em Maringá-PR',
    introDescription: 'A válvula de segurança (termopar) é um dispositivo essencial que corta o gás automaticamente quando a chama se apaga, prevenindo acidentes. Quando defeituosa, pode causar risco de vazamento. Nossa equipe realiza o reparo com total segurança.',
    details: [
      'Troca do termopar (sensor de chama)',
      'Reparo e substituição de válvulas',
      'Verificação do sistema de corte de gás',
      'Teste de segurança completo',
      'Ajuste de pressão de gás',
      'Inspeção preventiva de segurança',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Atlas', 'Dako', 'Mueller', 'Fischer'],
    defectSigns: [
      'Chama apaga ao soltar o botão',
      'Gás não sai mesmo com registro aberto',
      'Botão do fogão trava ou fica duro',
      'Cheiro de gás com boca apagada',
      'Fogão não mantém a chama acesa',
      'Válvula faz barulho ao abrir ou fechar',
    ],
    faqs: [
      {
        question: 'Quanto custa trocar a válvula de segurança do fogão?',
        answer: 'A troca da válvula ou termopar varia entre R$100,00 e R$300,00, dependendo da marca e modelo do fogão.',
      },
      {
        question: 'O que é o termopar do fogão?',
        answer: 'O termopar é um sensor que detecta se a chama está acesa. Se a chama apagar, ele corta o gás automaticamente, evitando vazamentos.',
      },
      {
        question: 'É perigoso usar fogão sem válvula de segurança?',
        answer: 'Sim! Sem a válvula funcionando, o gás pode continuar saindo mesmo com a chama apagada, causando risco de explosão ou intoxicação.',
      },
      {
        question: 'Todos os fogões têm válvula de segurança?',
        answer: 'Os modelos mais modernos possuem. Fogões antigos podem não ter este sistema, mas é possível instalar em muitos casos.',
      },
    ],
    metaTitle: 'Conserto de Válvula de Segurança Fogão Maringá | Termopar',
    metaDescription: 'Conserto de válvula de segurança e termopar de fogão em Maringá-PR. Reparo para segurança total do seu fogão com garantia.',
    metaKeywords: 'conserto válvula segurança fogão Maringá, termopar fogão, fogão apaga sozinho, válvula gás fogão',
  },
  {
    slug: 'conserto-forno-fogao',
    title: 'Conserto de Forno do Fogão',
    shortDescription: 'Forno não aquece ou temperatura desregulada? Reparamos com peças originais e garantia.',
    icon: Settings,
    heroTitle: 'Conserto de Forno do Fogão em Maringá',
    heroSubtitle: 'O forno do seu fogão não aquece ou a temperatura está desregulada?',
    heroDescription: 'Reparo especializado em fornos de fogão com garantia em Maringá!',
    introTitle: 'Conserto de Forno de Fogão a Gás em Maringá-PR',
    introDescription: 'O forno do fogão pode apresentar diversos problemas como falha no acendimento, temperatura irregular ou porta desalinhada. Nossa equipe tem experiência no reparo de fornos de todas as marcas, com diagnóstico preciso e peças originais.',
    details: [
      'Reparo do queimador do forno',
      'Troca do termostato do forno',
      'Ajuste da dobradiça e vedação da porta',
      'Troca da borracha de vedação do forno',
      'Reparo do acendimento do forno',
      'Regulagem de temperatura',
    ],
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Atlas', 'Dako', 'Mueller', 'Fischer'],
    defectSigns: [
      'Forno não acende ou demora para aquecer',
      'Temperatura do forno muito alta ou muito baixa',
      'Forno apaga sozinho durante o uso',
      'Porta do forno não fecha direito',
      'Forno aquece por fora excessivamente',
      'Gás saindo pelo forno sem acender',
    ],
    faqs: [
      {
        question: 'Quanto custa consertar o forno do fogão?',
        answer: 'O reparo do forno varia entre R$120,00 e R$400,00, dependendo do defeito. Troca de termostato e queimador são os serviços mais comuns.',
      },
      {
        question: 'Por que o forno não mantém a temperatura?',
        answer: 'Pode ser defeito no termostato, borracha de vedação gasta ou problema no queimador. Nossos técnicos identificam a causa exata.',
      },
      {
        question: 'O forno pode ser consertado em casa?',
        answer: 'Sim! Todos os reparos do forno do fogão são realizados em domicílio, sem necessidade de remover o aparelho.',
      },
      {
        question: 'É perigoso usar forno com a porta desalinhada?',
        answer: 'Sim, pode causar perda de calor, aumento no consumo de gás e risco de queimaduras. Recomendamos o ajuste imediato.',
      },
    ],
    metaTitle: 'Conserto de Forno do Fogão em Maringá | Reparo com Garantia',
    metaDescription: 'Conserto de forno de fogão em Maringá-PR. Reparo de queimador, termostato e vedação. Atendimento rápido em domicílio com garantia.',
    metaKeywords: 'conserto forno fogão Maringá, forno não aquece, termostato forno, reparo forno fogão',
  },
];

export const getFogaoServiceBySlug = (slug: string) =>
  fogaoServices.find((s) => s.slug === slug);
