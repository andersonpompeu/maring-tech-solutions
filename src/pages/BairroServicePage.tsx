import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { findNeighborhoodBySlug, neighborhoods } from '@/data/neighborhoods';
import { findBairroServiceBySlug, bairroServices } from '@/data/bairro-services';
import { BUSINESS } from '@/data/business-info';
import { noBairro } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BairroContactSection from '@/components/bairro/BairroContactSection';
import BairroSchemaGenerator from '@/components/seo/BairroSchemaGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield, Clock, Zap, CheckCircle, Wrench, Star } from 'lucide-react';
import heroImage from '@/assets/hero-technician.jpg';

const BairroServicePage = () => {
  const { slug, serviceSlug } = useParams<{ slug: string; serviceSlug: string }>();
  const neighborhood = slug ? findNeighborhoodBySlug(slug) : undefined;
  const service = serviceSlug ? findBairroServiceBySlug(serviceSlug) : undefined;

  if (!neighborhood || !service) {
    return <Navigate to={neighborhood ? `/bairros/${neighborhood.slug}` : '/bairros'} replace />;
  }

  const bairro = neighborhood.name;
  const Icon = service.icon;
  const faqs = service.faqs(bairro);
  const pageTitle = `${service.title} ${noBairro(bairro)} | Maringá`;
  const fullDescription = service.description(bairro);
  const pageDescription = fullDescription.length > 155 ? fullDescription.substring(0, 152) + '...' : fullDescription;

  const otherServices = bairroServices.filter(s => s.slug !== service.slug);
  const nearbyNeighborhoods = neighborhoods
    .filter(n => n.region === neighborhood.region && n.slug !== neighborhood.slug)
    .slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${service.title.toLowerCase()} ${bairro}, conserto ${service.shortTitle.toLowerCase()} ${bairro} Maringá, assistência técnica ${bairro}`} />
        <link rel="canonical" href={`${BUSINESS.site}/bairros/${neighborhood.slug}/${service.slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BairroSchemaGenerator
        neighborhood={neighborhood}
        pageType="bairro-service"
        service={{
          title: service.title,
          shortTitle: service.shortTitle,
          slug: service.slug,
          description: pageDescription,
          problems: service.problems,
          faqs,
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative min-h-[50vh] flex items-center overflow-hidden">
            <div className="absolute inset-0">
              <img src={heroImage} alt={`${service.title} ${noBairro(bairro)}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
            </div>
            <div className="container relative z-10 px-4 py-16">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-white/70 hover:text-white">Início</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50" />
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/bairros" className="text-white/70 hover:text-white">Bairros</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50" />
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to={`/bairros/${neighborhood.slug}`} className="text-white/70 hover:text-white">{bairro}</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50" />
                  <BreadcrumbItem><BreadcrumbPage className="text-white">{service.title}</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <Icon className="w-5 h-5 text-secondary" />
                  <span className="text-white/90 text-sm font-medium">{service.shortTitle}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                  {service.title} em Maringá {noBairro(bairro)}
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-xl page-description">{pageDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <a href={`https://wa.me/${BUSINESS.whatsapp}?text=Olá! Preciso de ${service.title.toLowerCase()} ${noBairro(bairro)}.`} target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento Grátis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Problems Section */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Defeitos Comuns</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Problemas que Resolvemos {noBairro(bairro)}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Nossos técnicos estão preparados para diagnosticar e reparar os defeitos mais comuns de {service.shortTitle.toLowerCase()} {noBairro(bairro)}.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.problems.map((problem) => (
                  <Card key={problem} className="border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-5 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground font-medium">{problem}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* About / Long Description */}
          <section className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/10">
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-14 items-start">
                <div>
                  <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Sobre o Serviço</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    {service.title} {noBairro(bairro)}, Maringá
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.longDescription(bairro)}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Clock, label: 'Mesmo Dia', sub: 'Atendimento rápido' },
                      { icon: Shield, label: '90 Dias', sub: 'De garantia' },
                      { icon: Wrench, label: 'Peças Originais', sub: 'Qualidade garantida' },
                    ].map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={item.label} className="text-center p-5 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <ItemIcon className="w-6 h-6 text-secondary" />
                          </div>
                          <strong className="text-foreground block text-sm font-heading">{item.label}</strong>
                          <span className="text-muted-foreground text-xs">{item.sub}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-5">Marcas Atendidas {noBairro(bairro)}</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.brands.map((brand) => (
                      <span key={brand} className="px-5 py-2.5 bg-card rounded-full border border-border/80 text-foreground font-medium text-sm hover:border-primary/40 transition-colors">
                        {brand}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-7 text-primary-foreground shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                        <Star className="w-5 h-5" />
                      </div>
                      <strong className="text-lg font-heading">Orçamento Gratuito</strong>
                    </div>
                    <p className="text-primary-foreground/85 mb-5 leading-relaxed">
                      Solicite um orçamento sem compromisso para {service.title.toLowerCase()} {noBairro(bairro)}. Nossos técnicos avaliam e informam o melhor custo-benefício.
                    </p>
                    <Button variant="hero-outline" asChild>
                      <a href={`https://wa.me/${BUSINESS.whatsapp}?text=Olá! Gostaria de orçamento para ${service.title.toLowerCase()} ${noBairro(bairro)}.`} target="_blank" rel="noopener noreferrer">
                        Pedir Orçamento
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-background">
            <div className="container px-4 max-w-3xl">
              <div className="text-center mb-14">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Dúvidas Frequentes</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Perguntas sobre {service.title} {noBairro(bairro)}
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Other Services in this Neighborhood */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Mais Serviços</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Outros Serviços {noBairro(bairro)}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherServices.map((s) => {
                  const SIcon = s.icon;
                  return (
                    <Link key={s.slug} to={`/bairros/${neighborhood.slug}/${s.slug}`} className="group">
                      <Card className="h-full border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <SIcon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                            {s.title} {noBairro(bairro)}
                          </h3>
                          <p className="text-muted-foreground text-sm">{s.description(bairro)}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Nearby Neighborhoods */}
          {nearbyNeighborhoods.length > 0 && (
            <section className="py-20 bg-background">
              <div className="container px-4">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Regiões Próximas</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {service.title} em Bairros Próximos
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {nearbyNeighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      to={`/bairros/${n.slug}/${service.slug}`}
                      className="px-4 py-2 bg-card rounded-full border border-border hover:border-primary hover:bg-primary/5 text-foreground text-sm font-medium transition-colors"
                    >
                      {service.title} {noBairro(n.name)}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Contact */}
          <BairroContactSection bairro={bairro} />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default BairroServicePage;
