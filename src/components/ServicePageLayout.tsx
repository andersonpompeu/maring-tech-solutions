import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import { Button } from './ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from './ui/accordion';
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
  Quote
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  name: string;
  description: string;
  brands?: string[];
}

interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonical: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  icon: ReactNode;
  services: ServiceItem[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  schemaType: string;
  breadcrumbName: string;
}

const ServicePageLayout = ({
  title,
  metaTitle,
  metaDescription,
  keywords,
  canonical,
  heroTitle,
  heroSubtitle,
  heroDescription,
  icon,
  services,
  faqs,
  testimonials,
  schemaType,
  breadcrumbName,
}: ServicePageLayoutProps) => {
  // Schema for LocalBusiness + Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: schemaType,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TechFix Maringá',
      url: 'https://techfixmaringa.com.br',
      telephone: '+554499999999',
      email: 'contato@techfixmaringa.com.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Brasil, 1234 - Centro',
        addressLocality: 'Maringá',
        addressRegion: 'PR',
        postalCode: '87013-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.4206,
        longitude: -51.9386,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Maringá',
      containedInPlace: {
        '@type': 'State',
        name: 'Paraná',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: title,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  // FAQ Schema
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

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://techfixmaringa.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbName,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {/* Geo Tags */}
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Maringá" />

        {/* Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b border-border/50">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm">
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{breadcrumbName}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                  {icon}
                  <span>{heroSubtitle}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                  {heroTitle}
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  {heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="rounded-full shadow-lg hover:shadow-secondary/30 text-base"
                    asChild
                  >
                    <a
                      href="https://wa.me/5544999999999?text=Olá! Gostaria de um orçamento para conserto."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Orçamento pelo WhatsApp
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="tel:+5544999999999">
                      <Phone className="w-5 h-5" />
                      (44) 99999-9999
                    </a>
                  </Button>
                </div>

                {/* Trust Badges */}
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

          {/* Services Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Nossos Serviços
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
                  Serviços Especializados em {breadcrumbName}
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Oferecemos conserto e manutenção com peças originais e garantia de qualidade.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover-lift border border-border/50"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    {service.brands && (
                      <div className="flex flex-wrap gap-2">
                        {service.brands.map((brand, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Preciso de um orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento Grátis
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Depoimentos
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
                  O Que Nossos Clientes Dizem
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Veja a opinião de quem já utilizou nossos serviços de {breadcrumbName.toLowerCase()}.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border/50 relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-3 left-6">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                        <Quote className="w-5 h-5 text-secondary-foreground" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-4 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Service Badge */}
                    <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mb-4">
                      {testimonial.service}
                    </span>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Info */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maringá e Região</p>
                    <p className="text-sm text-muted-foreground">Atendimento em todo o município</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Seg-Sáb: 8h às 18h</p>
                    <p className="text-sm text-muted-foreground">Horário de atendimento</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                    Dúvidas Frequentes
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
                    Perguntas Frequentes
                  </h2>
                  <p className="text-muted-foreground mt-4">
                    Tire suas dúvidas sobre nossos serviços de {breadcrumbName.toLowerCase()}.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Final CTA */}
                <div className="mt-12 text-center bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                    Ainda tem dúvidas?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas.
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/5544999999999?text=Olá! Tenho uma dúvida sobre o serviço."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
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

export default ServicePageLayout;
