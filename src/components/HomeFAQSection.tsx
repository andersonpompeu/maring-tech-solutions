import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/business-info';

const faqs = [
  {
    question: 'Quais tipos de eletrodomésticos vocês consertam?',
    answer: `Consertamos uma ampla variedade de eletrodomésticos, incluindo geladeiras, freezers, máquinas de lavar, lava e seca, fogões, cooktops, fornos elétricos, micro-ondas, Smart TVs (LED, OLED e QLED) e celulares (iPhone e Android). Trabalhamos com as principais marcas do mercado, como Brastemp, Electrolux, Samsung, LG, Consul, Panasonic e Midea.`,
  },
  {
    question: 'Vocês atendem em todos os bairros de Maringá?',
    answer: `Sim! Atendemos em todos os bairros de Maringá, desde a Zona 01 até os bairros mais afastados, como Jardim Alvorada, Parque Industrial, Jardim Aclimação, Vila Esperança e muitos outros. Também atendemos nas cidades vizinhas como Sarandi, Paiçandu e Marialva, sem cobrar taxa extra de deslocamento na maioria dos casos.`,
  },
  {
    question: 'Qual é o prazo para o conserto?',
    answer: `Para a maioria dos serviços, realizamos o conserto no mesmo dia. Casos mais complexos que exigem a encomenda de peças específicas podem levar de 2 a 5 dias úteis. Sempre informamos o prazo estimado antes de iniciar o serviço, para que você possa se programar.`,
  },
  {
    question: 'O orçamento é gratuito?',
    answer: `Sim, o orçamento é totalmente gratuito e sem compromisso. Nosso técnico avalia o equipamento, identifica o problema e informa o valor do reparo. Você só paga se aprovar o serviço. Não cobramos taxa de visita na maioria dos bairros de Maringá.`,
  },
  {
    question: 'Vocês oferecem garantia nos serviços?',
    answer: `Todos os nossos serviços possuem garantia de 90 dias, cobrindo tanto a mão de obra quanto as peças substituídas. Caso o mesmo problema volte a ocorrer dentro do período de garantia, retornamos e fazemos o reparo sem custo adicional. Essa é a nossa forma de demonstrar confiança na qualidade do nosso trabalho.`,
  },
  {
    question: 'As peças utilizadas são originais?',
    answer: `Sim, trabalhamos exclusivamente com peças originais e de primeira linha adquiridas diretamente de distribuidores autorizados. Peças originais garantem o desempenho correto do equipamento e prolongam a vida útil do aparelho. Nunca utilizamos peças genéricas ou de procedência duvidosa.`,
  },
  {
    question: 'Como funciona o atendimento 24 horas?',
    answer: `Nossa assistência técnica funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Você pode entrar em contato a qualquer momento pelo WhatsApp ${BUSINESS.phoneDisplay} ou pelo telefone. Para emergências noturnas, como vazamentos de geladeira ou problemas elétricos em fogões, priorizamos o atendimento para garantir a sua segurança.`,
  },
  {
    question: 'Qual a forma de pagamento?',
    answer: `Aceitamos diversas formas de pagamento para sua conveniência: dinheiro, PIX, cartões de débito e crédito (com possibilidade de parcelamento). O pagamento é realizado somente após a conclusão e aprovação do serviço pelo cliente. Emitimos nota fiscal em todos os atendimentos.`,
  },
  {
    question: 'Vocês fazem manutenção preventiva?',
    answer: `Sim, oferecemos serviços de manutenção preventiva para todos os tipos de equipamentos. A manutenção preventiva ajuda a evitar problemas futuros, reduz o consumo de energia e prolonga a vida útil dos seus eletrodomésticos. Recomendamos realizar a manutenção preventiva pelo menos uma vez ao ano, especialmente em geladeiras, máquinas de lavar e ar-condicionado.`,
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer: `Solicitar um orçamento é muito simples! Basta entrar em contato pelo WhatsApp ${BUSINESS.phoneDisplay}, enviar uma mensagem descrevendo o problema e, se possível, fotos ou vídeos do equipamento. Nosso atendente responderá rapidamente com as informações sobre prazos e agendamento. Você também pode nos ligar ou preencher o formulário de contato no site.`,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const HomeFAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Reunimos as principais dúvidas dos nossos clientes sobre <strong className="text-foreground">assistência técnica de eletrodomésticos em Maringá</strong>. Se a sua pergunta não estiver aqui, entre em contato pelo WhatsApp.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
