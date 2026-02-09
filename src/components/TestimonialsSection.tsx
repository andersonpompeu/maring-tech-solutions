import { Star, Quote, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Zona 7, Maringá',
    rating: 5,
    text: 'Excelente serviço! Minha geladeira voltou a funcionar perfeitamente. Atendimento rápido e profissional. Recomendo!',
    service: 'Conserto de Geladeira',
    initials: 'MS',
  },
  {
    name: 'João Santos',
    location: 'Centro, Maringá',
    rating: 5,
    text: 'Consertaram minha Smart TV em menos de 2 horas. Técnico muito educado e competente. Preço justo.',
    service: 'Reparo de Smart TV',
    initials: 'JS',
  },
  {
    name: 'Ana Oliveira',
    location: 'Zona 5, Maringá',
    rating: 5,
    text: 'A tela do meu iPhone ficou nova! Trabalho impecável e garantia de 90 dias. Muito satisfeita!',
    service: 'Troca de Tela iPhone',
    initials: 'AO',
  },
  {
    name: 'Carlos Mendes',
    location: 'Jardim Alvorada, Maringá',
    rating: 5,
    text: 'Minha máquina de lavar tinha um problema complexo, mas eles resolveram rapidamente. Ótimo custo-benefício.',
    service: 'Conserto de Lavadora',
    initials: 'CM',
  },
  {
    name: 'Fernanda Costa',
    location: 'Zona 2, Maringá',
    rating: 5,
    text: 'Atendimento excepcional! Vieram buscar meu fogão e entregaram consertado no mesmo dia. Top!',
    service: 'Manutenção de Fogão',
    initials: 'FC',
  },
  {
    name: 'Roberto Lima',
    location: 'Paiçandu',
    rating: 5,
    text: 'Mesmo morando em Paiçandu, eles vieram até aqui sem cobrar taxa extra. Serviço de primeira qualidade.',
    service: 'Conserto de Micro-ondas',
    initials: 'RL',
  },
];

const accentColors = [
  'from-primary to-accent',
  'from-secondary to-orange-400',
  'from-accent to-blue-400',
  'from-primary to-blue-500',
  'from-secondary to-amber-400',
  'from-accent to-primary',
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {[
            { value: '500+', label: 'Clientes Satisfeitos' },
            { value: '4.9', label: 'Avaliação Média' },
            { value: '98%', label: 'Recomendam' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative bg-card rounded-2xl p-6 transition-all duration-500 border border-border/50 animate-fade-in cursor-default ${
                activeIndex === index
                  ? 'shadow-card-hover scale-[1.02] border-primary/30'
                  : 'shadow-card hover:shadow-card-hover hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${accentColors[index]} rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Quote & Rating row */}
              <div className="flex items-start justify-between mb-5 pt-2">
                <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed text-[15px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentColors[index]} flex items-center justify-center text-white font-heading font-bold text-sm shrink-0`}>
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-foreground text-sm truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
                </div>
                <span className="ml-auto text-[11px] bg-primary/8 text-primary px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
