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

  const testimonials = [
    {
      name: 'Lucas Mendes',
      location: 'Zona 3, Maringá',
      rating: 5,
      text: 'Minha Smart TV Samsung ficou com a tela escura. Descobriram que era o backlight. Consertaram em 3 dias e ficou perfeita!',
      service: 'Reparo de Backlight',
    },
    {
      name: 'Patrícia Almeida',
      location: 'Centro, Maringá',
      rating: 5,
      text: 'A TV LG OLED estava com manchas na tela. Achei que teria que trocar, mas os técnicos resolveram. Excelente trabalho e preço justo!',
      service: 'Conserto de TV OLED',
    },
    {
      name: 'Marcos Vinícius',
      location: 'Zona 7, Maringá',
      rating: 5,
      text: 'TV de 55 polegadas parou de ligar. Vieram buscar em casa, diagnosticaram problema na placa fonte e consertaram rapidamente. Recomendo!',
      service: 'Conserto Smart TV LED',
    },
    {
      name: 'Camila Santos',
      location: 'Jardim Imperial, Maringá',
      rating: 5,
      text: 'Minha TV Sony estava travando e muito lenta. Fizeram a atualização de software e limpeza geral. Voltou a funcionar como nova!',
      service: 'Atualização de Software',
    },
    {
      name: 'Ricardo Gomes',
      location: 'Parque Industrial, Maringá',
      rating: 5,
      text: 'TV QLED com listras verticais na tela. Os técnicos foram muito competentes, explicaram todo o processo e resolveram perfeitamente.',
      service: 'Conserto de TV QLED',
    },
    {
      name: 'Adriana Lima',
      location: 'Zona 5, Maringá',
      rating: 5,
      text: 'Ótimo atendimento! TV com som mas sem imagem. Consertaram o backlight em tempo recorde. Muito satisfeita com o serviço!',
      service: 'Reparo de Backlight',
    },
  ];

  return (
    <ServicePageLayout
      title="Conserto de Televisores"
      metaTitle="Conserto de TV em Maringá | Smart TV, LED, OLED, QLED"
      metaDescription="Conserto de TV em Maringá-PR. Smart TVs LED, OLED e QLED. Samsung, LG, Sony. Peças originais e garantia de 90 dias."
      keywords="conserto de TV Maringá, assistência técnica TV, conserto Smart TV Maringá, reparo TV LED, conserto TV OLED, conserto TV QLED, conserto TV Samsung LG Sony"
      canonical="https://assistenciatecnica.maringa.br/televisores"
      heroTitle="Conserto de Televisores em Maringá"
      heroSubtitle="Smart TVs e Monitores"
      heroDescription="Assistência técnica especializada para Smart TVs LED, OLED e QLED. Reparo de backlight, tela, placas e software. Garantia de 90 dias."
      icon={<Tv className="w-5 h-5" />}
      services={services}
      faqs={faqs}
      testimonials={testimonials}
      schemaType="Television Repair Service"
      breadcrumbName="Televisores"
    />
  );
};

export default Televisores;
