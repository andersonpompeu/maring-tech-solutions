import { Tv } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Televisores = () => {
  const services = [
    {
      name: 'Conserto de Smart TVs LED',
      description: 'Reparo completo de Smart TVs LED. Troca de tela, backlight, placa principal e fonte.',
      brands: ['Samsung', 'LG', 'Sony', 'TCL', 'Philips'],
    },
    {
      name: 'Conserto de TVs OLED',
      description: 'Manutenção especializada em TVs OLED. Reparo de painel, placa T-CON e módulos de imagem.',
      brands: ['LG', 'Sony', 'Samsung'],
    },
    {
      name: 'Conserto de TVs QLED',
      description: 'Assistência técnica para TVs QLED. Troca de LEDs, reparo de placa e atualização de firmware.',
      brands: ['Samsung', 'TCL', 'Hisense'],
    },
    {
      name: 'Reparo de Backlight',
      description: 'Substituição e reparo de barras de LED e backlight em TVs de todas as marcas e tamanhos.',
      brands: ['Todas as marcas'],
    },
    {
      name: 'Troca de Tela de TV',
      description: 'Substituição de telas quebradas ou danificadas. Avaliamos a viabilidade técnica e econômica.',
      brands: ['Samsung', 'LG', 'Sony', 'Philips'],
    },
    {
      name: 'Atualização de Software',
      description: 'Atualização de firmware e sistema operacional de Smart TVs. Resolução de travamentos e lentidão.',
      brands: ['Samsung', 'LG', 'Sony', 'TCL'],
    },
  ];

  const faqs = [
    {
      question: 'Quanto custa o conserto de TV em Maringá?',
      answer: 'O valor do conserto varia de acordo com o problema e modelo da TV. Oferecemos orçamento gratuito e sem compromisso. Entre em contato pelo WhatsApp para uma avaliação.',
    },
    {
      question: 'Vale a pena consertar uma TV ou comprar uma nova?',
      answer: 'Depende do problema e da idade da TV. Na maioria dos casos, o conserto é mais vantajoso economicamente. Fazemos uma avaliação honesta e informamos se o reparo é viável.',
    },
    {
      question: 'Vocês consertam TV com a tela quebrada?',
      answer: 'Sim, realizamos a troca de tela em diversos modelos. Porém, dependendo do tamanho e modelo, pode não ser economicamente viável. Fazemos a avaliação e informamos todas as opções.',
    },
    {
      question: 'Minha TV está sem imagem, qual pode ser o problema?',
      answer: 'A falta de imagem pode ser causada por problemas no backlight (barras de LED), placa fonte, placa principal ou cabos internos. Nossos técnicos fazem o diagnóstico preciso.',
    },
    {
      question: 'Quanto tempo demora o conserto de uma Smart TV?',
      answer: 'O diagnóstico é feito em até 48 horas. O reparo pode variar de 1 a 5 dias úteis dependendo da disponibilidade de peças e complexidade do serviço.',
    },
    {
      question: 'A garantia do conserto de TV é de quanto tempo?',
      answer: 'Oferecemos garantia de 90 dias para todos os serviços de reparo de televisores, cobrindo mão de obra e peças substituídas.',
    },
  ];

  return (
    <ServicePageLayout
      title="Conserto de Televisores"
      metaTitle="Conserto de TV em Maringá | Smart TV, LED, OLED, QLED - TechFix"
      metaDescription="Conserto de TV em Maringá-PR. Assistência técnica para Smart TVs LED, OLED e QLED. Samsung, LG, Sony. Garantia de 90 dias. Orçamento grátis pelo WhatsApp!"
      keywords="conserto de TV Maringá, assistência técnica TV, conserto Smart TV Maringá, reparo TV LED, conserto TV OLED, conserto TV QLED, conserto TV Samsung LG Sony"
      canonical="https://techfixmaringa.com.br/televisores"
      heroTitle="Conserto de Televisores em Maringá"
      heroSubtitle="Smart TVs e Monitores"
      heroDescription="Assistência técnica especializada para Smart TVs LED, OLED e QLED. Reparo de backlight, tela, placas e software. Garantia de 90 dias."
      icon={<Tv className="w-5 h-5" />}
      services={services}
      faqs={faqs}
      schemaType="Television Repair Service"
      breadcrumbName="Televisores"
    />
  );
};

export default Televisores;
