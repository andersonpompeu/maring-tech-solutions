import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { neighborhoods as neighborhoodData } from '@/data/neighborhoods';

const regions = ['Região Central', 'Região Norte', 'Região Sul', 'Região Leste', 'Região Oeste'];

const Bairros = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Assistência Técnica Maringá",
    "description": "Assistência técnica especializada em eletrodomésticos, televisores e celulares. Atendemos todos os bairros de Maringá-PR.",
    "areaServed": neighborhoodData.map(n => ({
      "@type": "City",
      "name": `${n.name}, Maringá-PR`
    })),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Maringá",
      "addressRegion": "PR",
      "addressCountry": "BR"
    }
  };

  const groupedNeighborhoods = regions.map(region => ({
    region,
    neighborhoods: neighborhoodData.filter(n => n.region === region)
  }));

  return (
    <>
      <Helmet>
        <title>Bairros Atendidos em Maringá | Assistência Técnica</title>
        <meta 
          name="description" 
          content="Atendemos todos os bairros de Maringá-PR. Assistência técnica para eletrodomésticos, televisores e celulares com atendimento rápido na sua região." 
        />
        <meta name="keywords" content="assistência técnica Maringá, bairros atendidos, técnico zona 7, conserto zona 5, reparo Jardim Alvorada" />
        <link rel="canonical" href="https://maringa-tech-care.lovable.app/bairros" />
        <meta property="og:title" content="Bairros Atendidos em Maringá | Assistência Técnica" />
        <meta property="og:description" content="Atendemos todos os bairros de Maringá-PR com rapidez e qualidade." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary-dark pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/70 hover:text-white">Início</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Bairros Atendidos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Cobertura completa em Maringá-PR</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Bairros Atendidos
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Oferecemos atendimento técnico especializado em <strong className="text-secondary">todos os bairros de Maringá</strong>. 
                Agende uma visita técnica na sua região.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="whatsapp" size="lg" className="group" asChild>
                  <a href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar um atendimento técnico no meu bairro." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Agendar Visita
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="tel:+5544999999999">
                    <Phone className="w-5 h-5" />
                    (44) 99999-9999
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{neighborhoodData.length}+</p>
                <p className="text-muted-foreground text-sm">Bairros Atendidos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">5</p>
                <p className="text-muted-foreground text-sm">Regiões Cobertas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">24h</p>
                <p className="text-muted-foreground text-sm">Resposta Rápida</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-sm">Maringá Coberta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Encontre seu Bairro
              </h2>
              <p className="text-muted-foreground text-lg">
                Selecione sua região para verificar a cobertura do nosso atendimento técnico
              </p>
            </div>

            <div className="space-y-12">
              {groupedNeighborhoods.map(({ region, neighborhoods: regionNeighborhoods }) => (
                <div key={region} className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                      {region}
                    </h3>
                    <div className="flex-1 h-px bg-border"></div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {regionNeighborhoods.length} bairros
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {regionNeighborhoods.map((neighborhood) => (
                      <Link 
                        key={neighborhood.slug}
                        to={`/bairros/${neighborhood.slug}`}
                        className={`
                          relative p-4 rounded-xl border transition-all duration-300 cursor-pointer
                          hover:border-primary hover:shadow-md hover:-translate-y-0.5
                          ${neighborhood.popular 
                            ? 'bg-primary/5 border-primary/20' 
                            : 'bg-card border-border'
                          }
                        `}
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            neighborhood.popular ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span className="text-sm font-medium text-foreground leading-tight">
                            {neighborhood.name}
                          </span>
                        </div>
                        {neighborhood.popular && (
                          <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Não encontrou seu bairro?
              </h2>
              <p className="text-white/80 mb-8">
                Atendemos toda a região metropolitana de Maringá. Entre em contato e confirme a disponibilidade para seu endereço.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/5544999999999?text=Olá! Gostaria de saber se vocês atendem meu bairro." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Consultar Disponibilidade
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Bairros;
