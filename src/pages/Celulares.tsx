import { Smartphone } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Celulares = () => {
  const services = [
    {
      name: 'Conserto de iPhone',
      description: 'Reparo completo de iPhones. Troca de tela, bateria, conector de carga, câmera e botões.',
      brands: ['iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone SE'],
    },
    {
      name: 'Conserto de Android',
      description: 'Manutenção de celulares Android. Troca de display, bateria, alto-falante e reparo de placa.',
      brands: ['Samsung', 'Motorola', 'Xiaomi', 'Redmi', 'Poco'],
    },
    {
      name: 'Conserto de Tablets',
      description: 'Assistência técnica para tablets iPad e Android. Troca de tela, bateria e conectores.',
      brands: ['iPad', 'Samsung Tab', 'Xiaomi Pad'],
    },
    {
      name: 'Troca de Tela de Celular',
      description: 'Substituição de telas originais e compatíveis para todos os modelos de smartphones.',
      brands: ['Todas as marcas'],
    },
    {
      name: 'Troca de Bateria',
      description: 'Substituição de baterias originais com calibração e garantia. Resolva problemas de carga.',
      brands: ['iPhone', 'Samsung', 'Motorola', 'Xiaomi'],
    },
    {
      name: 'Reparo de Placa',
      description: 'Microsoldagem e reparo de placas. Solução para celulares que não ligam, não carregam ou com curto.',
      brands: ['Todas as marcas'],
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo demora a troca de tela de celular?',
      answer: 'A troca de tela geralmente é realizada no mesmo dia, em média de 1 a 2 horas, dependendo do modelo e disponibilidade da peça.',
    },
    {
      question: 'A troca de tela do iPhone é cara?',
      answer: 'O valor varia conforme o modelo do iPhone. Trabalhamos com telas originais e compatíveis de alta qualidade. Solicite um orçamento gratuito pelo WhatsApp.',
    },
    {
      question: 'Vocês usam peças originais Apple?',
      answer: 'Trabalhamos com peças originais e compatíveis de alta qualidade. Informamos todas as opções e você escolhe a que melhor atende suas necessidades e orçamento.',
    },
    {
      question: 'Meu celular caiu na água, tem conserto?',
      answer: 'Sim! Temos técnicos especializados em recuperação de celulares com danos por líquido. O sucesso depende da extensão do dano e do tempo que o aparelho ficou molhado.',
    },
    {
      question: 'Quanto tempo dura a garantia do conserto de celular?',
      answer: 'Oferecemos garantia de 90 dias em todos os serviços de reparo de celulares e tablets, cobrindo a mão de obra e as peças substituídas.',
    },
    {
      question: 'Vocês fazem backup dos dados antes do conserto?',
      answer: 'Recomendamos que o cliente faça o backup antes de trazer o aparelho. Porém, se não for possível, podemos auxiliar na recuperação de dados em alguns casos.',
    },
  ];

  return (
    <ServicePageLayout
      title="Conserto de Celulares"
      metaTitle="Conserto de Celular em Maringá | iPhone, Samsung, Xiaomi - TechFix"
      metaDescription="Conserto de celular em Maringá-PR. Assistência técnica para iPhone, Samsung, Motorola e Xiaomi. Troca de tela e bateria no mesmo dia. Garantia de 90 dias!"
      keywords="conserto celular Maringá, troca de tela celular, conserto iPhone Maringá, conserto Samsung Maringá, assistência técnica celular, troca bateria celular"
      canonical="https://techfixmaringa.com.br/celulares"
      heroTitle="Conserto de Celulares em Maringá"
      heroSubtitle="Smartphones e Tablets"
      heroDescription="Assistência técnica especializada para iPhone, Samsung, Motorola e Xiaomi. Troca de tela, bateria e reparo de placa. Garantia de 90 dias."
      icon={<Smartphone className="w-5 h-5" />}
      services={services}
      faqs={faqs}
      schemaType="Cell Phone Repair Service"
      breadcrumbName="Celulares"
    />
  );
};

export default Celulares;
