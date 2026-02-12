import { Helmet } from 'react-helmet-async';
import { noBairro } from '@/lib/utils';
import { BUSINESS } from '@/data/business-info';
import { Neighborhood } from '@/data/neighborhoods';
import { BairroService } from '@/data/bairro-services';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import NeighborhoodsSection from '@/components/NeighborhoodsSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BairroSchemaGenerator from '@/components/seo/BairroSchemaGenerator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-technician.jpg';
import { Clock, Shield, Zap } from 'lucide-react';

interface BairroServiceHomePageProps {
  neighborhood: Neighborhood;
  service: BairroService;
}

const BairroServiceHomePage = ({ neighborhood, service }: BairroServiceHomePageProps) => {
  const bairro = neighborhood.name;
  const bairroPrep = noBairro(bairro);
  const h1 = service.h1 ? service.h1(bairroPrep) : `${service.title} ${bairroPrep}`;
  const metaDesc = service.metaDescription
    ? service.metaDescription(bairroPrep)
    : service.description(bairroPrep);
  const pageDescription = metaDesc.length > 155 ? metaDesc.substring(0, 152) + '...' : metaDesc;
  const faqs = service.faqs(bairroPrep);
  const aboutText = service.aboutText ? service.aboutText(bairroPrep) : service.longDescription(bairroPrep);

  return (
    <>
      <Helmet>
        <title>{`${service.title} ${bairroPrep} | Maringá`}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${BUSINESS.site}/bairros/${neighborhood.slug}/${service.slug}`} />
        <meta property="og:title" content={`${service.title} ${bairroPrep} | Maringá`} />
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
          {/* Custom Hero with dynamic H1 */}
          <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img src={heroImage} alt={h1} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            <div className="container relative z-10 px-4 py-16 lg:py-20">
              <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span className="text-white/90 text-sm font-medium">Mesmo Dia</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-slide-up">
                  {h1}
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-xl animate-slide-up stagger-2">
                  <strong className="font-normal">{pageDescription}</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
                  <Button variant="hero" size="xl" asChild>
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Olá! Preciso de ${service.title.toLowerCase()} ${bairroPrep}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Orçamento pelo WhatsApp
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <a href="#servicos">Ver Serviços</a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start animate-fade-in stagger-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Atendimento Rápido</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Garantia Estendida</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Zap className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Técnicos Certificados</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServicesSection />
          <DifferentialsSection />

          {/* About Section with dynamic content */}
          <section id="sobre" className="py-20 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                  Sobre o Serviço
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  {service.title} {bairroPrep}, Maringá
                </h2>
                <article className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                  <p>{aboutText}</p>
                  <p>
                    A <strong className="text-foreground">Assistência Técnica Maringá</strong> atende {bairroPrep} e toda
                    a região com <strong className="text-foreground">técnicos certificados</strong>, peças originais e
                    <strong className="text-foreground"> garantia de 90 dias</strong>. Nosso compromisso é devolver o
                    conforto da sua casa o mais rápido possível, com atendimento no mesmo dia e orçamento gratuito.
                  </p>
                  <p>
                    Trabalhamos com as principais marcas do mercado: {service.brands.join(', ')} e outras.
                    Solicite seu orçamento gratuito pelo WhatsApp: <strong className="text-foreground">{BUSINESS.phoneDisplay}</strong>.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <GallerySection />
          <TestimonialsSection />
          <TeamSection />
          <ContactSection />
          <NeighborhoodsSection />

          {/* FAQ Section with service-specific FAQs */}
          <section id="faq" className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                    <HelpCircle className="w-4 h-4" />
                    <span className="font-semibold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    Perguntas sobre {service.title} {bairroPrep}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Reunimos as principais dúvidas sobre <strong className="text-foreground">{service.title.toLowerCase()} {bairroPrep}</strong>. Se a sua pergunta não estiver aqui, entre em contato pelo WhatsApp.
                  </p>
                </div>
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
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default BairroServiceHomePage;
