import { Wrench } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

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

  const faqs = [
    {
      question: 'Quanto tempo demora o conserto de eletrodomésticos?',
      answer: 'O tempo de reparo varia de acordo com o problema. Diagnósticos simples podem ser resolvidos no mesmo dia. Reparos mais complexos que necessitam de peças podem levar de 2 a 5 dias úteis após a aprovação do orçamento.',
    },
    {
      question: 'Vocês fazem orçamento grátis para eletrodomésticos?',
      answer: 'Sim! O orçamento é totalmente gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou telefone e agendaremos uma visita técnica.',
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
      question: 'Atendem em domicílio ou preciso levar o aparelho?',
      answer: 'Atendemos em domicílio em toda a região de Maringá e cidades vizinhas. Para alguns reparos mais complexos, pode ser necessário levar o aparelho para nossa oficina.',
    },
    {
      question: 'Quais marcas de eletrodomésticos vocês consertam?',
      answer: 'Trabalhamos com todas as principais marcas: Brastemp, Electrolux, Consul, Samsung, LG, Panasonic, Philips, Dako, Atlas, Midea, entre outras.',
    },
  ];

  return (
    <ServicePageLayout
      title="Conserto de Eletrodomésticos"
      metaTitle="Conserto de Eletrodomésticos em Maringá | Geladeira, Máquina de Lavar, Fogão - TechFix"
      metaDescription="Assistência técnica especializada em eletrodomésticos em Maringá-PR. Conserto de geladeiras, máquinas de lavar, fogões e micro-ondas. Garantia de 90 dias. Orçamento grátis!"
      keywords="conserto eletrodomésticos Maringá, assistência técnica linha branca, conserto geladeira Maringá, conserto máquina de lavar Maringá, conserto fogão Maringá, reparo eletrodomésticos PR"
      canonical="https://techfixmaringa.com.br/eletrodomesticos"
      heroTitle="Conserto de Eletrodomésticos em Maringá"
      heroSubtitle="Linha Branca"
      heroDescription="Assistência técnica especializada para geladeiras, máquinas de lavar, fogões e micro-ondas. Técnicos certificados, peças originais e garantia de 90 dias."
      icon={<Wrench className="w-5 h-5" />}
      services={services}
      faqs={faqs}
      schemaType="Appliance Repair Service"
      breadcrumbName="Eletrodomésticos"
    />
  );
};

export default Eletrodomesticos;
