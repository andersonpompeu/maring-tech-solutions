import { Wrench, Refrigerator, Flame, Zap, Droplets, Wind, Settings, ShieldCheck, Clock, FileText } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { type SEOTopic } from '@/components/SEOTopicsSection';

const Eletrodomesticos = () => {
  const services = [
    {
      name: 'Conserto de Máquinas de Lavar',
      description: 'Reparo completo de lavadoras de todas as marcas. Troca de peças, manutenção preventiva e corretiva.',
      brands: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul'],
    },
    {
      name: 'Conserto de Geladeiras',
      description: 'Manutenção e reparo de geladeiras Frost Free e convencionais. Troca de gás, compressor e termostato.',
      brands: ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG'],
    },
    {
      name: 'Conserto de Fogões',
      description: 'Reparo de fogões a gás e elétricos. Troca de peças, manutenção de queimadores e fornos.',
      brands: ['Brastemp', 'Electrolux', 'Consul', 'Atlas', 'Dako'],
    },
    {
      name: 'Conserto de Micro-ondas',
      description: 'Manutenção especializada em micro-ondas. Reparo de magnetron, painel e componentes eletrônicos.',
      brands: ['Electrolux', 'LG', 'Samsung', 'Panasonic', 'Brastemp'],
    },
    {
      name: 'Conserto de Lava-Louças',
      description: 'Reparo e manutenção de lava-louças residenciais. Troca de bomba, resistência e vedações.',
      brands: ['Brastemp', 'Electrolux', 'Midea', 'LG'],
    },
    {
      name: 'Conserto de Secadoras',
      description: 'Manutenção de secadoras de roupas. Reparo de resistência, tambor e sistema de exaustão.',
      brands: ['Brastemp', 'Electrolux', 'Samsung', 'LG'],
    },
  ];

  const seoTopics: SEOTopic[] = [
    {
      title: 'Conserto de Máquinas de Lavar Residenciais e Industriais em Maringá',
      description: 'Realizamos o conserto de máquinas de lavar de todos os portes em Maringá-PR. Desde lavadoras residenciais até modelos industriais de alta capacidade, nossos técnicos são especializados em diagnosticar e solucionar qualquer problema com rapidez e eficiência.',
      highlights: ['Lavadoras automáticas', 'Tanquinhos', 'Lava e seca', 'Industriais'],
      icon: Droplets,
    },
    {
      title: 'Assistência Técnica Especializada em Geladeiras e Refrigeradores em Maringá',
      description: 'Oferecemos assistência técnica completa para geladeiras e refrigeradores em Maringá. Trabalhamos com modelos Frost Free, duplex, inverse e side by side. Fazemos troca de gás, compressor, termostato e reparos no sistema de refrigeração com garantia.',
      highlights: ['Frost Free', 'Duplex', 'Side by Side', 'Troca de gás'],
      icon: Refrigerator,
    },
    {
      title: 'Manutenção e Conserto de Fogões a Gás e Elétricos em Maringá',
      description: 'Consertamos fogões a gás, elétricos e cooktops em Maringá-PR. Realizamos troca de queimadores, reparo de forno, ajuste de válvulas, substituição de acendedor automático e manutenção preventiva para garantir segurança e desempenho.',
      highlights: ['Fogão a gás', 'Cooktops', 'Forno elétrico', 'Acendedor automático'],
      icon: Flame,
    },
    {
      title: 'Conserto de Micro-ondas de Todas as Marcas em Maringá',
      description: 'Somos especializados no conserto de micro-ondas em Maringá. Reparamos magnetron, painel eletrônico, prato giratório, porta e componentes internos de todas as marcas como Electrolux, LG, Samsung, Panasonic e Brastemp.',
      highlights: ['Magnetron', 'Painel eletrônico', 'Prato giratório', 'Todas as marcas'],
      icon: Zap,
    },
    {
      title: 'Assistência Técnica para Lava-Louças Residenciais em Maringá',
      description: 'Oferecemos conserto profissional de lava-louças em Maringá-PR. Resolvemos problemas como vazamentos, bomba defeituosa, aquecimento irregular, falha na drenagem e erros no painel digital com peças originais e garantia.',
      highlights: ['Vazamentos', 'Bomba d\'água', 'Aquecimento', 'Painel digital'],
      icon: Droplets,
    },
    {
      title: 'Conserto e Manutenção de Secadoras de Roupas em Maringá',
      description: 'Realizamos o conserto de secadoras de roupas em Maringá com técnicos especializados. Reparamos resistência, tambor, sistema de exaustão, termostato e correias de todas as marcas e modelos disponíveis no mercado.',
      highlights: ['Resistência', 'Tambor', 'Exaustão', 'Correias'],
      icon: Wind,
    },
    {
      title: 'Técnico Especializado em Eletrodomésticos Linha Branca em Maringá',
      description: 'Contamos com técnicos certificados e especializados em eletrodomésticos de linha branca em Maringá-PR. Nossa equipe possui treinamento contínuo nas principais marcas do mercado para oferecer soluções precisas e duradouras.',
      highlights: ['Brastemp', 'Electrolux', 'LG', 'Samsung', 'Consul'],
      icon: Settings,
    },
    {
      title: 'Manutenção Preventiva de Eletrodomésticos em Maringá',
      description: 'A manutenção preventiva prolonga a vida útil dos seus eletrodomésticos e evita quebras inesperadas. Em Maringá, oferecemos planos de manutenção periódica para geladeiras, máquinas de lavar, fogões e outros equipamentos da sua casa.',
      highlights: ['Limpeza técnica', 'Revisão periódica', 'Vida útil', 'Economia'],
      icon: ShieldCheck,
    },
    {
      title: 'Conserto de Eletrodomésticos com Atendimento Rápido em Maringá',
      description: 'Sabemos que eletrodomésticos são essenciais no dia a dia. Por isso, em Maringá, garantimos atendimento rápido com diagnóstico no mesmo dia e prioridade para casos urgentes. Agende uma visita técnica e resolva seu problema rapidamente.',
      highlights: ['Diagnóstico no mesmo dia', 'Atendimento em domicílio', 'Prioridade urgente', 'Todos os bairros'],
      icon: Clock,
    },
    {
      title: 'Orçamento para Conserto de Eletrodomésticos em Maringá',
      description: 'Solicite um orçamento gratuito e sem compromisso para conserto de eletrodomésticos em Maringá-PR. Nosso orçamento é transparente, sem taxas ocultas, e você só paga após aprovar o serviço. Atendemos em todos os bairros de Maringá.',
      highlights: ['Orçamento grátis', 'Sem compromisso', 'Sem taxas ocultas', 'WhatsApp'],
      icon: FileText,
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo demora o conserto de eletrodomésticos em Maringá?',
      answer: 'O tempo de reparo varia de acordo com o problema. Diagnósticos simples podem ser resolvidos no mesmo dia. Reparos mais complexos que necessitam de peças podem levar de 2 a 5 dias úteis após a aprovação do orçamento.',
    },
    {
      question: 'Vocês fazem orçamento grátis para eletrodomésticos em Maringá?',
      answer: 'Sim! O orçamento é totalmente gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou telefone e agendaremos uma visita técnica em qualquer bairro de Maringá.',
    },
    {
      question: 'Qual a garantia do serviço de conserto?',
      answer: 'Oferecemos garantia de 90 dias em todos os nossos serviços de conserto de eletrodomésticos, cobrindo tanto a mão de obra quanto as peças substituídas.',
    },
    {
      question: 'Vocês trabalham com peças originais?',
      answer: 'Sim, utilizamos preferencialmente peças originais ou de qualidade equivalente homologada pelos fabricantes, garantindo a durabilidade do reparo.',
    },
    {
      question: 'Atendem em domicílio em Maringá ou preciso levar o aparelho?',
      answer: 'Atendemos em domicílio em todos os bairros de Maringá e cidades vizinhas. Para alguns reparos mais complexos, pode ser necessário levar o aparelho para nossa oficina.',
    },
    {
      question: 'Quais marcas de eletrodomésticos vocês consertam em Maringá?',
      answer: 'Trabalhamos com todas as principais marcas: Brastemp, Electrolux, Consul, Samsung, LG, Panasonic, Philips, Dako, Atlas, Midea, entre outras.',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Fernanda',
      location: 'Zona 7, Maringá',
      rating: 5,
      text: 'Minha geladeira parou de gelar e achei que teria que comprar outra. O técnico veio no mesmo dia, identificou o problema e consertou rapidamente. Economizei muito!',
      service: 'Conserto de Geladeira',
    },
    {
      name: 'Carlos Eduardo',
      location: 'Centro, Maringá',
      rating: 5,
      text: 'Excelente atendimento! Minha máquina de lavar estava fazendo um barulho estranho e parando no enxágue. Resolveram o problema em poucas horas e com garantia.',
      service: 'Conserto de Máquina de Lavar',
    },
    {
      name: 'Ana Paula',
      location: 'Zona 5, Maringá',
      rating: 5,
      text: 'O fogão da minha casa tinha problemas no forno que não esquentava direito. O técnico foi super atencioso, explicou tudo e deixou funcionando perfeitamente.',
      service: 'Conserto de Fogão',
    },
    {
      name: 'Roberto Silva',
      location: 'Jardim Alvorada, Maringá',
      rating: 5,
      text: 'Micro-ondas parou de funcionar do nada. Vieram buscar, consertaram e entregaram em 2 dias. Preço justo e ótimo serviço!',
      service: 'Conserto de Micro-ondas',
    },
    {
      name: 'Juliana Costa',
      location: 'Zona 2, Maringá',
      rating: 5,
      text: 'Já é a segunda vez que chamo. Desta vez foi para a lava-louças que estava vazando. Serviço impecável como sempre!',
      service: 'Conserto de Lava-Louças',
    },
    {
      name: 'Fernando Oliveira',
      location: 'Parque das Laranjeiras, Maringá',
      rating: 5,
      text: 'Geladeira antiga da minha mãe parou de funcionar. Conseguiram recuperar e ainda ficou melhor que antes. Muito obrigado pelo cuidado!',
      service: 'Conserto de Geladeira',
    },
  ];

  return (
    <ServicePageLayout
      title="Conserto de Eletrodomésticos"
      metaTitle="Conserto de Eletrodomésticos em Maringá | Geladeira, Máquina de Lavar, Fogão"
      metaDescription="Assistência técnica especializada em eletrodomésticos em Maringá-PR. Conserto de geladeiras, máquinas de lavar, fogões e micro-ondas. Garantia de 90 dias. Orçamento grátis!"
      keywords="conserto eletrodomésticos Maringá, assistência técnica linha branca, conserto geladeira Maringá, conserto máquina de lavar Maringá, conserto fogão Maringá, reparo eletrodomésticos PR, técnico eletrodomésticos Maringá"
      canonical="https://techfixmaringa.com.br/eletrodomesticos"
      heroTitle="Conserto de Eletrodomésticos em Maringá"
      heroSubtitle="Linha Branca"
      heroDescription="Assistência técnica especializada para geladeiras, máquinas de lavar, fogões e micro-ondas. Técnicos certificados, peças originais e garantia de 90 dias."
      icon={<Wrench className="w-5 h-5" />}
      services={services}
      faqs={faqs}
      testimonials={testimonials}
      schemaType="Appliance Repair Service"
      breadcrumbName="Eletrodomésticos"
      seoTopics={seoTopics}
      seoTopicsTitle="Todos os Serviços de Eletrodomésticos em Maringá"
      seoTopicsSubtitle="Especialidades"
    />
  );
};

export default Eletrodomesticos;
