import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Zona 7, Maringá',
    rating: 5,
    text: 'Excelente serviço! Minha geladeira voltou a funcionar perfeitamente. Atendimento rápido e profissional. Recomendo!',
    service: 'Conserto de Geladeira',
  },
  {
    name: 'João Santos',
    location: 'Centro, Maringá',
    rating: 5,
    text: 'Consertaram minha Smart TV em menos de 2 horas. Técnico muito educado e competente. Preço justo.',
    service: 'Reparo de Smart TV',
  },
  {
    name: 'Ana Oliveira',
    location: 'Zona 5, Maringá',
    rating: 5,
    text: 'A tela do meu iPhone ficou nova! Trabalho impecável e garantia de 90 dias. Muito satisfeita!',
    service: 'Troca de Tela iPhone',
  },
  {
    name: 'Carlos Mendes',
    location: 'Jardim Alvorada, Maringá',
    rating: 5,
    text: 'Minha máquina de lavar tinha um problema complexo, mas eles resolveram rapidamente. Ótimo custo-benefício.',
    service: 'Conserto de Lavadora',
  },
  {
    name: 'Fernanda Costa',
    location: 'Zona 2, Maringá',
    rating: 5,
    text: 'Atendimento excepcional! Vieram buscar meu fogão e entregaram consertado no mesmo dia. Top!',
    service: 'Manutenção de Fogão',
  },
  {
    name: 'Roberto Lima',
    location: 'Paiçandu',
    rating: 5,
    text: 'Mesmo morando em Paiçandu, eles vieram até aqui sem cobrar taxa extra. Serviço de primeira qualidade.',
    service: 'Conserto de Micro-ondas',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
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
