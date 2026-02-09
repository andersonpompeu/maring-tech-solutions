import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  AlertTriangle,
  Search,
  CreditCard,
} from 'lucide-react';
import { getGeladeiraServiceBySlug } from '@/data/geladeira-services';
import BrandsCarousel from '@/components/BrandsCarousel';

const advantages = [
  { title: 'Atendimento rápido', description: 'Chegamos em poucas horas após o contato para resolver o problema.', icon: Clock },
  { title: 'Diagnóstico preciso', description: 'Identificamos a causa exata da falha para consertos mais eficientes.', icon: Search },
  { title: 'Uso de peças originais', description: 'Trabalhamos apenas com peças originais para maior durabilidade.', icon: CheckCircle2 },
  { title: 'Garantia no serviço', description: 'Serviços com garantia e suporte caso ocorra qualquer imprevisto.', icon: Shield },
  { title: 'Pagamento facilitado', description: 'Aceitamos cartão e Pix para sua maior comodidade na hora do conserto.', icon: CreditCard },
];

const GeladeiraServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getGeladeiraServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/geladeira" replace />;

  const whatsappMsg = encodeURIComponent(`Olá! Gostaria de um orçamento para ${service.title.toLowerCase()}.`);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TechFix Maringá',
      url: 'https://techfixmaringa.com.br',
      telephone: '+554499999999',
      address: { '@type': 'PostalAddress', addressLocality: 'Maringá', addressRegion: 'PR', postalCode: '87013-000', addressCountry: 'BR' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
    },
    areaServed: { '@type': 'City', name: 'Maringá' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const ServiceIcon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.metaKeywords} />
        <link rel="canonical" href={`https://techfixmaringa.com.br/geladeira/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
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
              <nav className="flex items-center gap-2 text-sm flex-wrap">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link to="/eletrodomesticos" className="text-muted-foreground hover:text-primary transition-colors">Eletrodomésticos</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link to="/geladeira" className="text-muted-foreground hover:text-primary transition-colors">Geladeira</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{service.title}</span>
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
                  <ServiceIcon className="w-5 h-5" />
                  <span>Assistência Técnica Especializada</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                  {service.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 max-w-2xl mx-auto">
                  <strong>{service.heroSubtitle}</strong>
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  {service.heroDescription}
                </p>
                <Button variant="hero" size="lg" className="rounded-full shadow-lg hover:shadow-secondary/30 text-base" asChild>
                  <a href={`https://wa.me/5544999999999?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" title={`Solicitar orçamento para ${service.title} em Maringá`}>
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

          {/* Intro + Details */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {service.introTitle}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong>{service.title} em Maringá</strong> — {service.introDescription}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">O que fazemos</span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2">
                    Serviços Incluídos
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border/50 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Brands Carousel */}
          <BrandsCarousel />

          {/* CTA Banner */}
          <section className="py-14 bg-gradient-hero text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                {service.title} em Maringá
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Resolvemos com <strong>atendimento rápido</strong> e garantia! <strong>Assistência técnica em Maringá</strong> com peças originais.
              </p>
              <Button variant="hero" size="lg" className="rounded-full shadow-lg hover:shadow-secondary/30" asChild>
                <a href={`https://wa.me/5544999999999?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" title={`Solicitar orçamento para ${service.title} em Maringá`}>
                  <MessageCircle className="w-5 h-5" />
                  Solicite seu orçamento
                </a>
              </Button>
            </div>
          </section>

          {/* Advantages */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Vantagens</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                  Por que escolher nossa assistência técnica?
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
                    Sinais de que você precisa de {service.title}
                  </h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto list-none p-0 m-0">
                  {service.defectSigns.map((sign, i) => (
                    <li key={i} className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-border/50 shadow-sm">
                      <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Banner 2 */}
          <section className="py-14 bg-gradient-hero text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                {service.title} Perto de Mim
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Resolvemos com <strong>atendimento rápido</strong> e garantia! <strong>Assistência técnica em Maringá</strong> com peças originais.
              </p>
              <Button variant="hero" size="lg" className="rounded-full shadow-lg hover:shadow-secondary/30" asChild>
                <a href={`https://wa.me/5544999999999?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" title={`Solicitar orçamento para ${service.title} perto de mim em Maringá`}>
                  <MessageCircle className="w-5 h-5" />
                  Solicite seu orçamento
                </a>
              </Button>
            </div>
          </section>

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
                  {service.faqs.map((faq, index) => (
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
                {service.title} em Maringá
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Resolvemos com <strong>atendimento rápido</strong>, <strong>peças originais</strong> e <em>garantia de 90 dias</em>!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="rounded-full shadow-lg" asChild>
                  <a href={`https://wa.me/5544999999999?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" title={`Solicitar orçamento para ${service.title} em Maringá via WhatsApp`}>
                    <MessageCircle className="w-5 h-5" />
                    Solicite seu orçamento
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="tel:+5544999999999" title="Ligar para assistência técnica em Maringá">
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

export default GeladeiraServicePage;
