import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { noBairro } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import heroImage from '@/assets/hero-technician.jpg';

interface BairroHeroSectionProps {
  bairro: string;
}

const getSlides = (bairro: string) => [
  {
    title: `Técnico de Geladeira ${noBairro(bairro)} - Assistência Técnica em Maringá`,
    subtitle: `Assistência Técnica da Geladeira Continental e Todas as Marcas`,
    description: `Técnico geladeira em Maringá ${noBairro(bairro)}. Conserto de geladeira Continental, Brastemp, Electrolux, Consul e mais. Atendimento rápido!`,
    icon: Zap,
    highlight: 'Mesmo Dia',
  },
  {
    title: `Garantia de 90 Dias ${noBairro(bairro)}`,
    subtitle: 'Qualidade que você pode confiar',
    description: `Todos os nossos serviços ${noBairro(bairro)} possuem garantia estendida. Sua satisfação é nossa prioridade.`,
    icon: Shield,
    highlight: '90 Dias',
  },
  {
    title: `Atendimento Especializado ${noBairro(bairro)}`,
    subtitle: 'Mais de 10 anos de experiência',
    description: `Equipe técnica qualificada para resolver qualquer problema ${noBairro(bairro)}. Linha branca e eletrônicos.`,
    icon: Clock,
    highlight: '10+ Anos',
  },
];

const BairroHeroSection = ({ bairro }: BairroHeroSectionProps) => {
  const slides = getSlides(bairro);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt={`Técnico consertando eletrodoméstico ${noBairro(bairro)}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-16 lg:py-20">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-white/70 hover:text-white">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/50" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/bairros" className="text-white/70 hover:text-white">Bairros</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/50" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{bairro}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Icon className="w-5 h-5 text-secondary" />
            <span className="text-white/90 text-sm font-medium">{currentSlideData.highlight}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-slide-up">
            {currentSlideData.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 animate-slide-up stagger-1">
            {currentSlideData.subtitle}
          </p>

          <p className="text-lg text-white/80 mb-8 max-w-xl animate-slide-up stagger-2">
            {currentSlideData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <a
                href={`https://wa.me/5544997398826?text=Olá! Moro ${noBairro(bairro)} e gostaria de solicitar um orçamento.`}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-secondary w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default BairroHeroSection;