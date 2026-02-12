import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
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
  MapPin,
  Star,
  Quote,
  Droplets,
  Zap,
  Settings,
  AlertTriangle,
  CreditCard,
  Search,
  Wrench,
  WashingMachine,
} from 'lucide-react';

const heroServices = [
  {
    title: 'Manutenção de Lava e Seca',
    description: 'Problemas na lavagem ou secagem? Fazemos manutenção com peças originais.',
    icon: Settings,
    slug: 'manutencao-de-lava-e-seca',
  },
  {
    title: 'Manutenção de Máquina de Lavar',
    description: 'Lavadora fazendo barulho? Realizamos diagnóstico e conserto imediato.',
    icon: Wrench,
    slug: 'manutencao-de-maquina-de-lavar',
  },
  {
    title: 'Conserto de Painel Eletrônico',
    description: 'Painel sem resposta? Reparamos placas eletrônicas no mesmo dia em Maringá.',
    icon: Zap,
    slug: 'conserto-de-painel-eletronico-maquina-de-lavar',
  },
  {
    title: 'Assistência Técnica',
    description: 'Atendimento em Maringá com reparos rápidos e garantia no serviço prestado.',
    icon: Shield,
    slug: 'assistencia-tecnica-maquina-de-lavar',
  },
  {
    title: 'Conserto de Secadora',
    description: 'Secadora desregulada? Trocamos peças e regulamos o sistema na hora.',
    icon: Droplets,
    slug: 'conserto-de-secadora',
  },
  {
    title: 'Problema na Centrifugação',
    description: 'Máquina não gira, faz ruído ou acumula água? Resolvemos imediatamente.',
    icon: AlertTriangle,
    slug: 'problema-na-centrifugacao',
  },
];

const machineTypes = [
  'Máquina de lavar convencional',
  'Lava e seca',
  'Máquina automática',
  'Máquina semiautomática',
  'Equipamentos industriais e comerciais',
];

const advantages = [
  { title: 'Atendimento rápido', description: 'Chegamos em poucas horas após o contato para resolver o problema.', icon: Clock },
  { title: 'Diagnóstico preciso', description: 'Identificamos a causa exata da falha para consertos mais eficientes.', icon: Search },
  { title: 'Uso de peças originais', description: 'Trabalhamos apenas com peças originais para maior durabilidade.', icon: CheckCircle2 },
  { title: 'Garantia no serviço', description: 'Serviços com garantia e suporte caso ocorra qualquer imprevisto.', icon: Shield },
  { title: 'Pagamento facilitado', description: 'Aceitamos cartão e Pix para sua maior comodidade na hora do conserto.', icon: CreditCard },
];

const defectSigns = [
  'Vazamento de água pela base ou mangueira',
  'Máquina não liga ou desarma sozinha',
  'Barulhos fortes ou batidas durante a centrifugação',
  'Água não entra ou não sai do cesto',
  'Cesto não gira ou para no meio do ciclo',
  'Erros no painel eletrônico ou código de falha',
];

const whyChooseUs = [
  'Técnicos experientes e certificados',
  'Atendimento a domicílio em cidade e região',
  'Diagnóstico técnico preciso e transparente',
  'Garantia de 90 dias em todos os serviços',
];

const faqs = [
  {
    question: 'Quanto custa o conserto de máquina de lavar em Maringá?',
    answer: 'O preço para consertar uma máquina de lavar varia entre R$150,00 à R$800,00 conforme o defeito, a marca e as peças envolvidas. Oferecemos orçamento gratuito na sua residência, com valores acessíveis.',
  },
  {
    question: 'Vocês consertam Brastemp, Electrolux e Consul?',
    answer: 'Sim! Temos técnicos especializados nas principais marcas do mercado como Electrolux, Brastemp, Consul, Samsung, Midea e LG, com peças originais e garantia por escrito.',
  },
  {
    question: 'Vocês realizam atendimento em domicílio?',
    answer: 'Sim, oferecemos atendimento técnico em domicílio em toda a região. Nossa equipe vai até você com todos os equipamentos necessários para realizar o reparo no local.',
  },
  {
    question: 'Fazem atendimento no mesmo dia?',
    answer: 'Sim! Em muitos casos conseguimos atender no mesmo dia, com técnicos próximos em diversas regiões em Maringá.',
  },
  {
    question: 'Quanto tempo demora o conserto?',
    answer: 'A maioria dos consertos são feitos em até 2 horas. Em casos que exigem peças específicas, agendamos retorno com agilidade.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Trabalhamos com diversas formas de pagamento: dinheiro, Pix, cartões de crédito e débito, além de transferências bancárias.',
  },
  {
    question: 'O conserto de máquina de lavar roupas perto de mim é mais barato?',
    answer: 'Sim. O conserto de máquina de lavar roupas costuma ser mais barato quando sua localização é próxima à nossa base de atendimento, já que a taxa de deslocamento é reduzida.',
  },
];

const CTABanner = () => (
  <section className="py-14 bg-gradient-hero text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-4 relative text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
        Conserto de Máquina de Lavar Perto de Mim
      </h2>
      <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
        Máquina de lavar parou, faz barulho ou está com vazamento? Resolvemos com <strong className="font-normal">atendimento rápido</strong> e garantia!
        <strong className="font-normal">Assistência técnica em Maringá</strong> com peças originais.
      </p>
      <Button
        variant="hero"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-secondary/30"
        asChild
      >
        <a
          href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento para conserto de máquina de lavar."
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

const MaquinaDeLavar = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Washing Machine Repair Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Assistência Técnica Maringá',
      url: 'https://assistenciatecnica.maringa.br/',
      telephone: '+5544997398826',
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
        <title>Conserto de Máquina de Lavar em Maringá-PR</title>
        <meta name="description" content="Conserto de máquina de lavar em Maringá-PR. Lavadoras, lava e seca e secadoras. Peças originais e garantia de 90 dias." />
        <meta name="keywords" content="conserto máquina de lavar Maringá, assistência técnica lavadora, conserto lava e seca, reparo máquina de lavar perto de mim, técnico máquina de lavar Maringá" />
        <link rel="canonical" href="https://assistenciatecnica.maringa.br/maquina-de-lavar" />
        <meta property="og:title" content="Conserto de Máquina de Lavar em Maringá" />
        <meta property="og:description" content="Assistência técnica especializada em máquinas de lavar em Maringá-PR. Peças originais e garantia." />
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
                <span className="text-foreground font-medium">Máquina de Lavar</span>
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
                  <Droplets className="w-5 h-5" />
                  <span>Assistência Técnica Especializada</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                  Conserto de Máquina de Lavar em Maringá
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 max-w-2xl mx-auto">
                  Sua máquina parou de funcionar?
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Encontre a melhor assistência técnica em Maringá!
                </p>
       <Button
         variant="whatsapp"
         size="xl"
         className="rounded-full shadow-lg hover:shadow-secondary/30"
         asChild
       >
                   <a
                     href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento para conserto de máquina de lavar."
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.503-3.867-1.496C4.164 3.402 3.561 1.849 3.561 .283 3.561-.91 4.478-2 5.617-2h2.529C9.323-2 10.24-1.09 10.24.083v2.528c0 1.174-.918 2.075-2.053 2.075h-2.608zM23.94 2.15c0 1.173-.923 2.068-2.061 2.068h-2.521C18.255 4.218 17.34 3.308 17.34.227V-.297C17.34-1.47 18.263-2.36 19.402-2.36h2.521C23.017-2.36 23.94-1.47 23.94-.297v2.447zm-6.506 5.383c1.309 0 2.373-1.069 2.373-2.381 0-1.312-1.064-2.381-2.373-2.381-1.309 0-2.373 1.069-2.373 2.381 0 1.312 1.064 2.381 2.373 2.381z" fill="#25D366" />
                     </svg>
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
                  Assistência Técnica para Conserto de Máquina de Lavar Roupa em Maringá-PR
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Quando você busca por "<strong>conserto de máquina de lavar perto de mim</strong>" em <strong>Maringá</strong>, nós entregamos um serviço completo, com equipe experiente e atendimento rápido no melhor preço perto de você!
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {heroServices.map((service, index) => (
                  <article
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link
                      to={`/maquina-de-lavar/${service.slug}`}
                      title={`Saiba mais sobre ${service.title} em Maringá`}
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      Saiba Mais <ChevronRight className="w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Machine Types */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Especialidades</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                    Tipos de Máquina de Lavar que Consertamos
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Atendemos residências, comércios e indústrias, com reparos técnicos para máquinas de lavar roupa de diversos modelos, incluindo:
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {machineTypes.map((type, i) => (
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
                  Vantagens de contratar uma Assistência Técnica de Lavadoras perto de mim
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {advantages.map((adv, i) => (
                  <article key={i} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <adv.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{adv.title}</h3>
                    <p className="text-muted-foreground text-sm">{adv.description}</p>
                  </article>
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
                    Máquina de Lavar com defeito em Maringá? Veja os sinais
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Problemas na máquina de lavar podem ser causados por falhas elétricas, vazamentos ou peças desgastadas.
                    Fique atento aos sintomas e evite danos maiores ao equipamento ou roupas danificadas no processo:
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
                      Por que escolher Conserto de Máquina de Lavar Maringá?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Precisando de conserto urgente? Nossa equipe de Conserto de Máquina de Lavar em Maringá atende rapidamente em casos emergenciais, com técnicos prontos para agir.
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
                Conserto de Máquina de Lavar Perto de Mim
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Máquina de lavar parou, faz barulho ou está com vazamento? Resolvemos com atendimento rápido e garantia!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="rounded-full shadow-lg" asChild>
                  <a
                    href="https://wa.me/5544997398826?text=Olá! Gostaria de um orçamento para conserto de máquina de lavar."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicite seu orçamento
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="tel:+5544997398826">
                    <Phone className="w-5 h-5" />
                    (44) 99739-8826
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

export default MaquinaDeLavar;
