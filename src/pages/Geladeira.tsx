import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { geladeiraServices } from '@/data/geladeira-services';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  ChevronRight,
  AlertTriangle,
  CreditCard,
  Search,
  Wrench,
  Zap,
  Settings,
  Thermometer,
  Snowflake,
  Droplets,
} from 'lucide-react';

const heroServices = geladeiraServices;

const applianceTypes = [
  'Geladeira Frost Free',
  'Geladeira Duplex',
  'Geladeira Inverse',
  'Geladeira Side by Side',
  'Frigobar e Frigorífico',
  'Geladeira comercial e industrial',
];

const advantages = [
  { title: 'Atendimento rápido', description: 'Chegamos em poucas horas após o contato para resolver o problema.', icon: Clock },
  { title: 'Diagnóstico preciso', description: 'Identificamos a causa exata da falha para consertos mais eficientes.', icon: Search },
  { title: 'Uso de peças originais', description: 'Trabalhamos apenas com peças originais para maior durabilidade.', icon: CheckCircle2 },
  { title: 'Garantia no serviço', description: 'Serviços com garantia e suporte caso ocorra qualquer imprevisto.', icon: Shield },
  { title: 'Pagamento facilitado', description: 'Aceitamos cartão e Pix para sua maior comodidade na hora do conserto.', icon: CreditCard },
];

const defectSigns = [
  'Geladeira não gela ou gela pouco',
  'Motor ligado o tempo todo sem parar',
  'Acúmulo de gelo excessivo no freezer',
  'Vazamento de água na parte interna ou externa',
  'Barulhos estranhos ou vibrações anormais',
  'Painel eletrônico com erro ou sem funcionar',
  'Porta não fecha ou veda corretamente',
  'Geladeira desliga sozinha ou não liga',
];

const whyChooseUs = [
  'Técnicos experientes e certificados',
  'Atendimento a domicílio em cidade e região',
  'Diagnóstico técnico preciso e transparente',
  'Garantia de 90 dias em todos os serviços',
];

const faqs = [
  {
    question: 'Quanto custa o conserto de geladeira em Maringá?',
    answer: 'O preço para consertar uma geladeira varia entre R$150,00 à R$900,00 conforme o defeito, a marca e as peças envolvidas. Oferecemos orçamento gratuito na sua residência, com valores acessíveis.',
  },
  {
    question: 'Vocês consertam geladeiras Brastemp, Electrolux e Consul?',
    answer: 'Sim! Temos técnicos especializados nas principais marcas do mercado como Electrolux, Brastemp, Consul, Samsung, Midea e LG, com peças originais e garantia por escrito.',
  },
  {
    question: 'Vocês realizam atendimento em domicílio?',
    answer: 'Sim, oferecemos atendimento técnico em domicílio em toda a região de Maringá. Nossa equipe vai até você com todos os equipamentos necessários para realizar o reparo no local.',
  },
  {
    question: 'Fazem atendimento no mesmo dia?',
    answer: 'Sim! Em muitos casos conseguimos atender no mesmo dia, com técnicos próximos em diversas regiões em Maringá.',
  },
  {
    question: 'Quanto tempo demora o conserto de uma geladeira?',
    answer: 'A maioria dos consertos são feitos em até 2 horas. Em casos que exigem peças específicas ou troca de compressor, agendamos retorno com agilidade.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Trabalhamos com diversas formas de pagamento: dinheiro, Pix, cartões de crédito e débito, além de transferências bancárias.',
  },
  {
    question: 'Vale a pena consertar uma geladeira antiga?',
    answer: 'Na maioria dos casos, sim. O conserto costuma ser significativamente mais barato do que comprar um aparelho novo. Nossos técnicos avaliam e orientam sobre a melhor decisão para o seu caso.',
  },
];

const CTABanner = () => (
  <section className="py-14 bg-gradient-hero text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-4 relative text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
        Conserto de Geladeira Perto de Mim
      </h2>
      <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
        Geladeira parou de gelar, faz barulho ou está vazando? Resolvemos com atendimento rápido e garantia!
        Assistência técnica em Maringá com peças originais.
      </p>
      <Button
        variant="hero"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-secondary/30"
        asChild
      >
        <a
          href="https://wa.me/5544999999999?text=Olá! Gostaria de um orçamento para conserto de geladeira."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5" />
          Solicite seu orçamento
        </a>
      </Button>
    </div>
  </section>
);

const Geladeira = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Refrigerator Repair Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'TechFix Maringá',
      url: 'https://techfixmaringa.com.br',
      telephone: '+554499999999',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Maringá',
        addressRegion: 'PR',
        postalCode: '87013-000',
        addressCountry: 'BR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    areaServed: { '@type': 'City', name: 'Maringá' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Conserto de Geladeira em Maringá | Assistência Técnica Especializada</title>
        <meta name="description" content="Conserto de geladeira em Maringá-PR. Assistência técnica para geladeiras Frost Free, Duplex, Inverse e Side by Side. Atendimento rápido, peças originais e garantia de 90 dias." />
        <meta name="keywords" content="conserto geladeira Maringá, assistência técnica geladeira, conserto refrigerador, reparo geladeira perto de mim, técnico geladeira Maringá" />
        <link rel="canonical" href="https://techfixmaringa.com.br/geladeira" />
        <meta property="og:title" content="Conserto de Geladeira em Maringá" />
        <meta property="og:description" content="Assistência técnica especializada em geladeiras em Maringá-PR. Peças originais e garantia." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Maringá" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b border-border/50">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link to="/eletrodomesticos" className="text-muted-foreground hover:text-primary transition-colors">Eletrodomésticos</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">Geladeira</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                  <Snowflake className="w-5 h-5" />
                  <span>Assistência Técnica Especializada</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                  Conserto de Geladeira em Maringá
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 max-w-2xl mx-auto">
                  Sua geladeira parou de gelar?
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Encontre a melhor assistência técnica em Maringá!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full shadow-lg hover:shadow-secondary/30 text-base"
                  asChild
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de um orçamento para conserto de geladeira."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicite Já
                  </a>
                </Button>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span>Atendimento Rápido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span>Garantia de 90 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span>Técnicos Certificados</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Assistência Técnica para Conserto de Geladeira em Maringá-PR
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Quando você busca por "conserto de geladeira perto de mim" em Maringá, nós entregamos um serviço completo, com equipe experiente e atendimento rápido no melhor preço perto de você!
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {heroServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                    <Link
                      to={`/geladeira/${service.slug}`}
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      Saiba Mais <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Appliance Types */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Especialidades</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                    Tipos de Geladeira que Consertamos
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Atendemos residências, comércios e indústrias, com reparos técnicos para geladeiras e refrigeradores de diversos modelos, incluindo:
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {applianceTypes.map((type, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border/50 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium text-sm">{type}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground text-sm mt-8">
                  Todos os serviços são realizados por técnicos especializados, com uso de ferramentas adequadas e peças originais.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Banner 1 */}
          <CTABanner />

          {/* Advantages */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Vantagens</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                  Vantagens de contratar uma Assistência Técnica de Geladeiras perto de mim
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {advantages.map((adv, i) => (
                  <div key={i} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <adv.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{adv.title}</h3>
                    <p className="text-muted-foreground text-sm">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Defect Signs */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Atenção</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                    Geladeira com defeito em Maringá? Veja os sinais
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Problemas na geladeira podem ser causados por falhas no compressor, vazamento de gás ou peças desgastadas.
                    Fique atento aos sintomas e evite danos maiores ao equipamento e perda de alimentos:
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {defectSigns.map((sign, i) => (
                    <div key={i} className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-border/50 shadow-sm">
                      <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      Por que escolher Conserto de Geladeira Maringá?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Precisando de conserto urgente? Nossa equipe de Conserto de Geladeira em Maringá atende rapidamente em casos emergenciais, com técnicos prontos para agir.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                    {whyChooseUs.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Banner 2 */}
          <CTABanner />

          {/* FAQ */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Dúvidas</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
                    Perguntas Frequentes
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
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

          {/* Final CTA */}
          <section className="py-14 bg-gradient-hero text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Conserto de Geladeira Perto de Mim
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Geladeira parou de gelar, faz barulho ou está vazando? Resolvemos com atendimento rápido e garantia!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="rounded-full shadow-lg" asChild>
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de um orçamento para conserto de geladeira."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicite seu orçamento
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="tel:+5544999999999">
                    <Phone className="w-5 h-5" />
                    (44) 99999-9999
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Geladeira;
