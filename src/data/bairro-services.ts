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
  // === Sub-serviços de Máquina de Lavar ===
  {
    slug: 'manutencao-de-lava-e-seca',
    title: 'Manutenção de Lava e Seca',
    shortTitle: 'Lava e Seca',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Midea', 'Panasonic'],
    problems: [
      'Lava e seca não seca as roupas',
      'Barulho excessivo ao centrifugar',
      'Vazamento de água pela porta',
      'Erro no painel eletrônico',
      'Não inicia o ciclo de secagem',
      'Roupas saem com mau cheiro',
      'Tambor não gira',
      'Aquecimento insuficiente na secagem',
    ],
    description: (bairro) =>
      `Manutenção especializada de lava e seca no ${bairro}, Maringá-PR. Reparamos todas as marcas com peças originais e garantia de 90 dias.`,
    longDescription: (bairro) =>
      `Sua lava e seca parou de funcionar no ${bairro}? Nossa equipe técnica é especializada em manutenção de lavadoras e secadoras combinadas. Diagnosticamos e reparamos problemas de secagem, centrifugação, vazamentos e erros no painel eletrônico. Atendemos no ${bairro} com agilidade, utilizando peças originais e oferecendo garantia de 90 dias. Não deixe a roupa acumular — entre em contato agora!`,
    faqs: (bairro) => [
      { question: `Quanto custa a manutenção de lava e seca no ${bairro}?`, answer: `O valor depende do defeito identificado. Oferecemos orçamento gratuito no ${bairro}. Chame no WhatsApp para agendar a visita.` },
      { question: `Vocês atendem lava e seca no ${bairro} no mesmo dia?`, answer: `Sim! Temos técnicos disponíveis para atendimento no mesmo dia no ${bairro}, sujeito à disponibilidade da agenda.` },
      { question: 'Minha lava e seca não está secando, qual o problema?', answer: 'Pode ser resistência queimada, sensor de temperatura defeituoso ou filtro entupido. Nossos técnicos fazem o diagnóstico completo.' },
      { question: 'A garantia cobre quais tipos de reparo?', answer: 'Nossa garantia de 90 dias cobre o serviço realizado e todas as peças substituídas durante o reparo.' },
    ],
  },
  {
    slug: 'manutencao-de-maquina-de-lavar',
    title: 'Manutenção de Máquina de Lavar',
    shortTitle: 'Manutenção Lavadora',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul', 'Midea'],
    problems: [
      'Máquina não liga',
      'Ciclo de lavagem não completa',
      'Vazamento de água',
      'Barulho durante a lavagem',
      'Não enche de água',
      'Mau cheiro na máquina',
      'Não drena a água',
      'Excesso de espuma',
    ],
    description: (bairro) =>
      `Manutenção preventiva e corretiva de máquinas de lavar no ${bairro}, Maringá-PR. Todas as marcas com garantia e orçamento grátis.`,
    longDescription: (bairro) =>
      `Precisa de manutenção na sua máquina de lavar no ${bairro}? Nossos técnicos certificados realizam manutenção preventiva e corretiva em lavadoras automáticas e semi-automáticas de todas as marcas. Resolvemos problemas como vazamentos, falhas no ciclo, barulhos anormais e mau cheiro. Atendemos no ${bairro} e arredores com rapidez e garantia de 90 dias.`,
    faqs: (bairro) => [
      { question: `Fazem manutenção preventiva no ${bairro}?`, answer: `Sim! Realizamos manutenção preventiva no ${bairro} para evitar defeitos e prolongar a vida útil da sua lavadora.` },
      { question: 'Qual a diferença entre manutenção preventiva e corretiva?', answer: 'A preventiva é feita periodicamente para evitar problemas. A corretiva é quando já existe um defeito a ser reparado.' },
      { question: `Quanto custa a manutenção de máquina de lavar no ${bairro}?`, answer: `Depende do tipo de serviço. Oferecemos orçamento gratuito no ${bairro}. Consulte pelo WhatsApp.` },
      { question: 'Atendem todas as marcas de lavadora?', answer: 'Sim, trabalhamos com Brastemp, Electrolux, LG, Samsung, Consul, Midea e todas as demais marcas.' },
    ],
  },
  {
    slug: 'conserto-de-painel-eletronico-maquina-de-lavar',
    title: 'Conserto de Painel Eletrônico de Máquina de Lavar',
    shortTitle: 'Painel Eletrônico',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul', 'Midea'],
    problems: [
      'Painel não responde ao toque',
      'Erro de código no display',
      'Luzes piscando sem parar',
      'Botões não funcionam',
      'Display apagado',
      'Painel travado em um programa',
      'Erro E1, E2, F5 ou similar',
      'Placa eletrônica queimada',
    ],
    description: (bairro) =>
      `Conserto de painel eletrônico de máquina de lavar no ${bairro}, Maringá-PR. Reparo de placas, displays e módulos com garantia.`,
    longDescription: (bairro) =>
      `O painel da sua máquina de lavar está com erro no ${bairro}? Somos especialistas em reparo de painéis eletrônicos e placas de lavadoras. Resolvemos códigos de erro, displays apagados, botões sem resposta e placas queimadas de todas as marcas. Atendimento rápido no ${bairro} com diagnóstico preciso e garantia de 90 dias.`,
    faqs: (bairro) => [
      { question: `Consertam placa eletrônica de máquina de lavar no ${bairro}?`, answer: `Sim! Reparamos e substituímos placas eletrônicas de todas as marcas no ${bairro} com garantia.` },
      { question: 'Minha máquina mostra erro no painel, o que pode ser?', answer: 'Códigos de erro indicam falhas específicas como problemas na drenagem, sensor ou motor. Nosso diagnóstico identifica a causa exata.' },
      { question: 'Vale a pena consertar o painel ou trocar a máquina?', answer: 'Na maioria dos casos o conserto do painel custa uma fração do valor de uma máquina nova. Nossos técnicos orientam a melhor decisão.' },
      { question: `Quanto tempo leva o conserto do painel no ${bairro}?`, answer: `Reparos simples são feitos no mesmo dia. Substituição de placa pode levar de 2 a 5 dias úteis dependendo da peça.` },
    ],
  },
  {
    slug: 'assistencia-tecnica-maquina-de-lavar',
    title: 'Assistência Técnica de Máquina de Lavar',
    shortTitle: 'Assistência Técnica',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul', 'Midea'],
    problems: [
      'Máquina não funciona',
      'Necessidade de revisão geral',
      'Peça de reposição necessária',
      'Instalação incorreta',
      'Problema intermitente',
      'Máquina fora da garantia de fábrica',
      'Ruído excessivo no motor',
      'Vibração excessiva ao centrifugar',
    ],
    description: (bairro) =>
      `Assistência técnica especializada de máquina de lavar no ${bairro}, Maringá-PR. Diagnóstico, reparo e peças originais com garantia.`,
    longDescription: (bairro) =>
      `Procurando assistência técnica de máquina de lavar no ${bairro}? Somos referência em Maringá no atendimento técnico de lavadoras de todas as marcas. Oferecemos diagnóstico completo, reparo com peças originais, revisão geral e orientação técnica. Nossa equipe atende no ${bairro} com pontualidade, profissionalismo e garantia de 90 dias em todos os serviços.`,
    faqs: (bairro) => [
      { question: `Vocês são assistência técnica autorizada no ${bairro}?`, answer: `Somos assistência técnica multimarcas com mais de 10 anos de experiência, atendendo no ${bairro} com peças originais e garantia.` },
      { question: 'Fazem orçamento gratuito?', answer: `Sim! Oferecemos orçamento gratuito e sem compromisso no ${bairro}. Entre em contato pelo WhatsApp.` },
      { question: 'Minha máquina está fora da garantia, vocês consertam?', answer: 'Sim, consertamos máquinas de lavar de qualquer idade e marca, mesmo fora da garantia de fábrica.' },
      { question: `Qual o prazo de atendimento no ${bairro}?`, answer: `Atendemos no ${bairro} geralmente no mesmo dia ou no dia seguinte, conforme disponibilidade.` },
    ],
  },
  {
    slug: 'conserto-de-secadora',
    title: 'Conserto de Secadora de Roupas',
    shortTitle: 'Secadoras',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Midea', 'Fischer'],
    problems: [
      'Secadora não seca as roupas',
      'Não liga',
      'Barulho excessivo',
      'Aquecimento insuficiente',
      'Secadora desliga sozinha',
      'Filtro entupido',
      'Tambor não gira',
      'Cheiro de queimado',
    ],
    description: (bairro) =>
      `Conserto de secadoras de roupas no ${bairro}, Maringá-PR. Reparamos secadoras a gás e elétricas de todas as marcas com garantia.`,
    longDescription: (bairro) =>
      `Sua secadora parou de funcionar no ${bairro}? Nossos técnicos são especialistas em conserto de secadoras de roupas elétricas e a gás. Resolvemos problemas como falta de aquecimento, barulhos, tambor parado e erros no painel. Atendemos no ${bairro} com rapidez, peças originais e garantia de 90 dias. Não fique sem secar suas roupas!`,
    faqs: (bairro) => [
      { question: `Consertam secadora a gás no ${bairro}?`, answer: `Sim! Reparamos secadoras a gás e elétricas de todas as marcas no ${bairro}.` },
      { question: 'Minha secadora está fazendo barulho, é grave?', answer: 'Pode ser problema no rolamento, correia ou ventilador. Recomendamos avaliação técnica para evitar danos maiores.' },
      { question: `Quanto custa o conserto de secadora no ${bairro}?`, answer: `O valor varia conforme o defeito. Oferecemos orçamento gratuito no ${bairro}. Consulte-nos pelo WhatsApp.` },
      { question: 'A secadora está com cheiro de queimado, o que fazer?', answer: 'Desligue imediatamente e entre em contato conosco. Pode ser acúmulo de fiapos, problema na resistência ou no motor.' },
    ],
  },
  {
    slug: 'problema-na-centrifugacao',
    title: 'Problema na Centrifugação da Máquina de Lavar',
    shortTitle: 'Centrifugação',
    icon: WashingMachine,
    brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul', 'Midea'],
    problems: [
      'Não centrifuga',
      'Centrifugação fraca',
      'Roupas saem encharcadas',
      'Barulho forte na centrifugação',
      'Vibração excessiva',
      'Máquina se desloca durante centrifugação',
      'Centrifugação intermitente',
      'Para no meio do ciclo',
    ],
    description: (bairro) =>
      `Conserto de problemas na centrifugação de máquinas de lavar no ${bairro}, Maringá-PR. Diagnóstico rápido e garantia de 90 dias.`,
    longDescription: (bairro) =>
      `Sua máquina de lavar não está centrifugando direito no ${bairro}? Somos especialistas em resolver problemas de centrifugação: roupas encharcadas, vibrações, barulhos e máquina que para no meio do ciclo. Nossos técnicos atendem no ${bairro} com diagnóstico rápido, peças originais e garantia de 90 dias. Resolva hoje e pare de torcer roupa na mão!`,
    faqs: (bairro) => [
      { question: `Minha máquina não centrifuga no ${bairro}, vocês consertam?`, answer: `Sim! Somos especialistas em problemas de centrifugação e atendemos no ${bairro} com orçamento gratuito.` },
      { question: 'Por que minha máquina não centrifuga?', answer: 'Pode ser problema na correia, motor, placa eletrônica, sensor de carga ou presostato. Nosso diagnóstico identifica a causa exata.' },
      { question: 'Roupas saem encharcadas, tem conserto?', answer: 'Sim! Geralmente é um problema na centrifugação que pode ser resolvido com troca de peças ou ajustes técnicos.' },
      { question: `Quanto tempo leva para resolver o problema de centrifugação no ${bairro}?`, answer: `Na maioria dos casos, resolvemos no mesmo dia no ${bairro}. Casos com troca de peças podem levar até 3 dias úteis.` },
    ],
  },
  // === Serviços de Geladeira por Bairro ===
  {
    slug: 'assistencia-tecnica-geladeira-continental',
    title: 'Assistência Técnica da Geladeira Continental',
    shortTitle: 'Geladeira Continental',
    icon: Refrigerator,
    brands: ['Continental', 'Consul', 'Brastemp', 'Electrolux', 'Samsung', 'LG'],
    problems: [
      'Geladeira Continental não gela',
      'Compressor Continental com defeito',
      'Vazamento de gás na Continental',
      'Motor Continental não para',
      'Borracha de vedação ressecada',
      'Geladeira Continental fazendo barulho',
      'Freezer Continental não congela',
      'Painel eletrônico Continental com erro',
    ],
    description: (bairro) =>
      `Assistência técnica da geladeira Continental no ${bairro}, Maringá-PR. Conserto especializado com peças originais e garantia de 90 dias.`,
    longDescription: (bairro) =>
      `Precisa de assistência técnica da geladeira Continental no ${bairro}? Nossa equipe é especializada no reparo de geladeiras e refrigeradores Continental. Diagnosticamos e consertamos todos os modelos: frost free, duplex, side by side e freezers Continental. Atendemos no ${bairro} com agilidade, peças originais e garantia de 90 dias. Não deixe sua geladeira Continental parada — entre em contato agora!`,
    faqs: (bairro) => [
      { question: `Vocês consertam geladeira Continental no ${bairro}?`, answer: `Sim! Somos especializados em assistência técnica de geladeira Continental e atendemos no ${bairro} com orçamento gratuito.` },
      { question: 'A Continental ainda fabrica peças de reposição?', answer: 'A marca Continental foi incorporada pela Bosch/Continental. Trabalhamos com peças originais e compatíveis para todos os modelos, mesmo os mais antigos.' },
      { question: `Quanto custa o conserto de geladeira Continental no ${bairro}?`, answer: `O valor varia conforme o defeito. Oferecemos orçamento gratuito no ${bairro}. Chame no WhatsApp para agendar a visita técnica.` },
      { question: 'Vale a pena consertar geladeira Continental antiga?', answer: 'Depende do defeito. Geladeiras Continental são robustas e duráveis. Nossos técnicos avaliam e orientam sobre a viabilidade do conserto.' },
    ],
  },
  {
    slug: 'tecnico-geladeira-maringa',
    title: 'Técnico de Geladeira em Maringá',
    shortTitle: 'Técnico Geladeira',
    icon: Refrigerator,
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Continental', 'Panasonic'],
    problems: [
      'Geladeira não gela',
      'Geladeira fazendo barulho',
      'Vazamento de água na geladeira',
      'Compressor com defeito',
      'Geladeira congela demais',
      'Motor não para de funcionar',
      'Luz interna apagada',
      'Geladeira com mau cheiro',
    ],
    description: (bairro) =>
      `Técnico de geladeira em Maringá no ${bairro}. Conserto rápido de todas as marcas com garantia de 90 dias e orçamento grátis.`,
    longDescription: (bairro) =>
      `Procurando técnico de geladeira em Maringá no ${bairro}? Nossos técnicos especializados atendem no ${bairro} e região com rapidez e profissionalismo. Realizamos conserto, manutenção preventiva e corretiva de geladeiras de todas as marcas e modelos. Seja frost free, duplex, side by side ou freezer — resolvemos qualquer defeito com peças originais e garantia de 90 dias. Atendimento no mesmo dia!`,
    faqs: (bairro) => [
      { question: `Tem técnico de geladeira disponível no ${bairro}?`, answer: `Sim! Temos técnicos de geladeira prontos para atender no ${bairro} no mesmo dia, sujeito à disponibilidade.` },
      { question: 'O técnico vai até minha casa?', answer: `Sim! Nosso técnico de geladeira faz atendimento em domicílio no ${bairro}. O orçamento é gratuito e sem compromisso.` },
      { question: 'Quanto cobra um técnico de geladeira em Maringá?', answer: 'O valor depende do defeito encontrado. Oferecemos orçamento gratuito antes de qualquer serviço. Consulte pelo WhatsApp.' },
      { question: 'O técnico conserta todas as marcas de geladeira?', answer: 'Sim! Nossos técnicos consertam Brastemp, Electrolux, Consul, Samsung, LG, Midea, Continental e todas as demais marcas.' },
    ],
  },
  {
    slug: 'tecnico-de-geladeira',
    title: 'Técnico de Geladeira',
    shortTitle: 'Técnico Geladeira',
    icon: Refrigerator,
    brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Midea', 'Continental', 'Bosch'],
    problems: [
      'Geladeira parou de funcionar',
      'Geladeira não gela direito',
      'Formação excessiva de gelo',
      'Geladeira com vazamento',
      'Porta não fecha corretamente',
      'Consumo elevado de energia',
      'Geladeira liga e desliga sozinha',
      'Temperatura desregulada',
    ],
    description: (bairro) =>
      `Técnico de geladeira no ${bairro}, Maringá-PR. Diagnóstico e reparo rápido com peças originais, garantia de 90 dias e orçamento grátis.`,
    longDescription: (bairro) =>
      `Sua geladeira apresentou defeito no ${bairro}? Conte com nosso técnico de geladeira para diagnóstico preciso e reparo rápido. Atendemos no ${bairro} com toda a estrutura necessária para resolver qualquer problema: compressor, termostato, placa eletrônica, borracha de vedação, gás refrigerante e muito mais. Técnico de geladeira com experiência em todas as marcas, peças originais e garantia de 90 dias.`,
    faqs: (bairro) => [
      { question: `Como chamar um técnico de geladeira no ${bairro}?`, answer: `É simples! Entre em contato pelo nosso WhatsApp e agende a visita do técnico de geladeira no ${bairro}. O orçamento é gratuito.` },
      { question: 'O técnico de geladeira atende no mesmo dia?', answer: `Sim! Na maioria dos casos nosso técnico de geladeira atende no mesmo dia no ${bairro} e região.` },
      { question: 'Qual a garantia do serviço do técnico de geladeira?', answer: 'Oferecemos garantia de 90 dias em todos os serviços e peças substituídas pelo nosso técnico de geladeira.' },
      { question: `O técnico de geladeira atende aos sábados no ${bairro}?`, answer: `Sim! Nosso técnico de geladeira atende de segunda a sábado no ${bairro}. Aos sábados, consulte horários disponíveis.` },
    ],
  },
];

export const findBairroServiceBySlug = (slug: string): BairroService | undefined => {
  return bairroServices.find(s => s.slug === slug);
};
