import { Tv, Smartphone, Refrigerator, Flame, Microwave, WashingMachine, LucideIcon } from 'lucide-react';

export interface BairroService {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  brands: string[];
  problems: string[];
  description: (bairro: string) => string;
  longDescription: (bairro: string) => string;
  faqs: (bairro: string) => { question: string; answer: string }[];
}

export const bairroServices: BairroService[] = [
  {
    slug: 'conserto-de-maquina-de-lavar',
    title: 'Conserto de Máquina de Lavar',
    shortTitle: 'Máquinas de Lavar',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul', 'Midea'],
    problems: [
      'Máquina não liga',
      'Não centrifuga',
      'Vazamento de água',
      'Barulho excessivo',
      'Não enche de água',
      'Erro no painel',
      'Não drena a água',
      'Tambor não gira',
    ],
    description: (bairro) =>
      `Serviço especializado de conserto de máquinas de lavar no ${bairro}, Maringá-PR. Atendemos lavadoras automáticas, semi-automáticas e lava e seca de todas as marcas com garantia de 90 dias.`,
    longDescription: (bairro) =>
      `Nossa equipe de técnicos certificados oferece o melhor serviço de conserto de máquinas de lavar no ${bairro}, Maringá. Com mais de 10 anos de experiência, diagnosticamos e reparamos qualquer defeito em lavadoras automáticas, semi-automáticas e lava e seca. Utilizamos peças originais e oferecemos garantia de 90 dias em todos os serviços. Atendemos no ${bairro} e regiões próximas com rapidez e eficiência, muitas vezes com conserto no mesmo dia.`,
    faqs: (bairro) => [
      { question: `Quanto custa o conserto de máquina de lavar no ${bairro}?`, answer: `O valor varia conforme o defeito. Oferecemos orçamento gratuito no ${bairro}. Entre em contato pelo WhatsApp para uma avaliação.` },
      { question: `Vocês atendem no ${bairro} no mesmo dia?`, answer: `Sim! Temos equipe disponível para atendimento no mesmo dia no ${bairro} e região, sujeito à disponibilidade.` },
      { question: 'A garantia cobre quais serviços?', answer: 'Nossa garantia de 90 dias cobre o serviço realizado e as peças substituídas.' },
      { question: 'Consertam todas as marcas de máquina de lavar?', answer: 'Sim, trabalhamos com Brastemp, Electrolux, LG, Samsung, Consul, Midea e todas as demais marcas.' },
    ],
  },
  {
    slug: 'conserto-de-geladeira',
    title: 'Conserto de Geladeira',
    shortTitle: 'Geladeiras',
    icon: Refrigerator,
    brands: ['Consul', 'Brastemp', 'Electrolux', 'Panasonic', 'LG', 'Samsung'],
    problems: [
      'Geladeira não gela',
      'Faz barulho estranho',
      'Vazamento de água',
      'Gelo excessivo no freezer',
      'Motor não para de funcionar',
      'Porta não veda',
      'Luz interna não acende',
      'Compressor com defeito',
    ],
    description: (bairro) =>
      `Conserto de geladeiras, freezers e refrigeradores no ${bairro}, Maringá-PR. Reparamos todas as marcas com peças originais e garantia de 90 dias.`,
    longDescription: (bairro) =>
      `Somos especialistas em conserto de geladeiras no ${bairro}, Maringá. Reparamos geladeiras frost-free, duplex, side by side e freezers de todas as marcas. Problemas como geladeira que não gela, vazamentos, compressor com defeito e formação excessiva de gelo são resolvidos com agilidade. Nossos técnicos vão até o ${bairro} com ferramentas e peças para resolver no mesmo dia sempre que possível.`,
    faqs: (bairro) => [
      { question: `Consertam geladeira frost-free no ${bairro}?`, answer: `Sim! Somos especializados em geladeiras frost-free e atendemos no ${bairro} com orçamento gratuito.` },
      { question: 'Minha geladeira está fazendo barulho, é grave?', answer: 'Pode ser um problema no compressor, ventilador ou borracha de vedação. Recomendamos uma avaliação técnica para diagnóstico preciso.' },
      { question: `Qual o prazo para conserto de geladeira no ${bairro}?`, answer: `Na maioria dos casos, realizamos o conserto no mesmo dia no ${bairro}. Casos que exigem peças especiais podem levar até 3 dias úteis.` },
      { question: 'Vale a pena consertar uma geladeira antiga?', answer: 'Depende do defeito. Nossos técnicos avaliam e orientam se o conserto é viável financeiramente.' },
    ],
  },
  {
    slug: 'conserto-de-fogao',
    title: 'Conserto de Fogão',
    shortTitle: 'Fogões',
    icon: Flame,
    brands: ['Atlas', 'Brastemp', 'Electrolux', 'Fischer', 'Consul', 'Itatiaia'],
    problems: [
      'Boca não acende',
      'Chama fraca ou irregular',
      'Forno não esquenta',
      'Vazamento de gás',
      'Acendimento automático com defeito',
      'Trempe quebrada',
      'Válvula com problema',
      'Botão com defeito',
    ],
    description: (bairro) =>
      `Conserto de fogões a gás, cooktops e fornos elétricos no ${bairro}, Maringá-PR. Manutenção preventiva e corretiva com garantia.`,
    longDescription: (bairro) =>
      `Realizamos conserto de fogões no ${bairro}, Maringá, com segurança e profissionalismo. Atendemos fogões a gás, cooktops, fornos elétricos e fogões industriais de todas as marcas. Nossos técnicos são treinados para lidar com vazamentos de gás, problemas no acendimento, fornos que não esquentam e demais defeitos. Atendimento rápido no ${bairro} com garantia de 90 dias.`,
    faqs: (bairro) => [
      { question: `Vocês consertam cooktop no ${bairro}?`, answer: `Sim! Consertamos cooktops a gás, elétricos e por indução no ${bairro}.` },
      { question: 'Meu fogão está com vazamento de gás, o que fazer?', answer: 'Desligue o registro de gás, ventile o ambiente e entre em contato conosco imediatamente. Não acione interruptores elétricos.' },
      { question: 'Consertam forno elétrico embutido?', answer: 'Sim, trabalhamos com fornos elétricos embutidos de todas as marcas e modelos.' },
      { question: `Quanto tempo leva o conserto de fogão no ${bairro}?`, answer: `A maioria dos consertos de fogão no ${bairro} é realizada no mesmo dia da visita técnica.` },
    ],
  },
  {
    slug: 'conserto-de-micro-ondas',
    title: 'Conserto de Micro-ondas',
    shortTitle: 'Micro-ondas',
    icon: Microwave,
    brands: ['Panasonic', 'LG', 'Electrolux', 'Midea', 'Brastemp', 'Consul'],
    problems: [
      'Não aquece os alimentos',
      'Prato giratório parado',
      'Faíscas internas',
      'Painel não funciona',
      'Porta não fecha direito',
      'Barulho anormal',
      'Não liga',
      'Desliga sozinho',
    ],
    description: (bairro) =>
      `Conserto de micro-ondas no ${bairro}, Maringá-PR. Reparamos todas as marcas e modelos com peças originais e garantia.`,
    longDescription: (bairro) =>
      `Oferecemos serviço completo de conserto de micro-ondas no ${bairro}, Maringá. Reparamos micro-ondas convencionais, de embutir e com grill de todas as marcas. Problemas como não aquecer, faíscas, painel com defeito e porta que não fecha são resolvidos com rapidez e segurança. Contamos com peças originais e garantia de 90 dias em todos os reparos no ${bairro}.`,
    faqs: (bairro) => [
      { question: `Quanto custa o conserto de micro-ondas no ${bairro}?`, answer: `O custo depende do defeito. Oferecemos orçamento sem compromisso no ${bairro}. Consulte-nos pelo WhatsApp.` },
      { question: 'Micro-ondas com faíscas é perigoso?', answer: 'Sim, pode indicar problema no magnetron ou na pintura interna. Pare de usar e procure assistência técnica imediatamente.' },
      { question: 'Consertam micro-ondas de embutir?', answer: 'Sim, trabalhamos com todos os tipos de micro-ondas, incluindo modelos de embutir.' },
      { question: `Fazem orçamento gratuito no ${bairro}?`, answer: `Sim! Realizamos orçamento gratuito e sem compromisso no ${bairro}.` },
    ],
  },
  {
    slug: 'conserto-de-tv',
    title: 'Conserto de Smart TV',
    shortTitle: 'Smart TVs',
    icon: Tv,
    brands: ['Samsung', 'LG', 'Sony', 'TCL', 'Philco', 'AOC'],
    problems: [
      'Tela quebrada',
      'Não liga',
      'Sem imagem',
      'Sem som',
      'Listras na tela',
      'Smart TV travando',
      'Wi-Fi não conecta',
      'Controle remoto não funciona',
    ],
    description: (bairro) =>
      `Conserto de Smart TVs LED, OLED e QLED no ${bairro}, Maringá-PR. Reparo de telas, placas e software com garantia.`,
    longDescription: (bairro) =>
      `Somos referência em conserto de Smart TVs no ${bairro}, Maringá. Reparamos TVs LED, OLED, QLED e LCD de todas as marcas e tamanhos. Resolvemos problemas como tela quebrada, TV que não liga, listras, sem som, travamentos e falhas de conexão Wi-Fi. Nossos técnicos atendem no ${bairro} com rapidez, utilizando equipamentos de última geração para diagnóstico preciso.`,
    faqs: (bairro) => [
      { question: `Consertam TV com tela quebrada no ${bairro}?`, answer: `Sim! Realizamos a troca de telas de TV no ${bairro}. Consulte disponibilidade para o seu modelo.` },
      { question: 'Minha Smart TV está travando, tem conserto?', answer: 'Na maioria dos casos sim. Pode ser problema de software, memória ou placa principal. Realizamos diagnóstico completo.' },
      { question: 'Quanto tempo leva o conserto de TV?', answer: 'Consertos simples são feitos no mesmo dia. Troca de tela ou placa pode levar de 3 a 7 dias úteis dependendo da disponibilidade da peça.' },
      { question: `Atendem TV de todas as marcas no ${bairro}?`, answer: `Sim, atendemos Samsung, LG, Sony, TCL, Philco, AOC e todas as demais marcas no ${bairro}.` },
    ],
  },
  {
    slug: 'conserto-de-celular',
    title: 'Conserto de Celular',
    shortTitle: 'Celulares',
    icon: Smartphone,
    brands: ['iPhone', 'Samsung', 'Motorola', 'Xiaomi', 'LG', 'Asus'],
    problems: [
      'Tela quebrada',
      'Bateria viciada',
      'Não carrega',
      'Conector com defeito',
      'Câmera com problema',
      'Alto-falante não funciona',
      'Botão power quebrado',
      'Celular molhou',
    ],
    description: (bairro) =>
      `Conserto de celulares iPhone e Android no ${bairro}, Maringá-PR. Troca de telas, baterias, conectores e mais com garantia.`,
    longDescription: (bairro) =>
      `Especialistas em conserto de celulares no ${bairro}, Maringá. Reparamos iPhones e smartphones Android de todas as marcas. Realizamos troca de tela, bateria, conector de carga, câmera, alto-falante e recuperação de aparelhos molhados. Atendimento ágil no ${bairro} com peças de qualidade e garantia de 90 dias em todos os serviços.`,
    faqs: (bairro) => [
      { question: `Trocam tela de iPhone no ${bairro}?`, answer: `Sim! Realizamos troca de tela de todos os modelos de iPhone no ${bairro} com peças de qualidade e garantia.` },
      { question: 'Quanto tempo demora a troca de tela?', answer: 'A troca de tela de celular geralmente é realizada em até 1 hora.' },
      { question: 'Meu celular caiu na água, tem conserto?', answer: 'Em muitos casos sim. Quanto mais rápido trouxer, maiores as chances de recuperação. Não tente ligar o aparelho.' },
      { question: `Consertam celular Xiaomi no ${bairro}?`, answer: `Sim, consertamos Xiaomi, Motorola, Samsung e todas as demais marcas no ${bairro}.` },
    ],
  },
];

export const findBairroServiceBySlug = (slug: string): BairroService | undefined => {
  return bairroServices.find(s => s.slug === slug);
};
