import { Tv, Smartphone, Refrigerator, Flame, Microwave, WashingMachine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: WashingMachine,
    title: 'Máquinas de Lavar',
    description: 'Conserto de máquinas de lavar de todas as marcas. Lavadoras e lava e seca.',
    keywords: ['Brastemp', 'Electrolux', 'LG', 'Samsung'],
  },
  {
    icon: Refrigerator,
    title: 'Geladeiras',
    description: 'Reparo de geladeiras, freezers e refrigeradores. Vazamentos e motor.',
    keywords: ['Consul', 'Brastemp', 'Electrolux', 'Panasonic'],
  },
  {
    icon: Flame,
    title: 'Fogões',
    description: 'Manutenção de fogões a gás, cooktops e fornos elétricos de embutir.',
    keywords: ['Atlas', 'Brastemp', 'Electrolux', 'Fischer'],
  },
  {
    icon: Microwave,
    title: 'Micro-ondas',
    description: 'Conserto de micro-ondas e fornos elétricos. Garantia em todas as peças.',
    keywords: ['Panasonic', 'LG', 'Electrolux', 'Midea'],
  },
  {
    icon: Tv,
    title: 'Smart TVs',
    description: 'Reparo em TVs LED, OLED e QLED. Telas, placas e software.',
    keywords: ['Samsung', 'LG', 'Sony', 'TCL'],
  },
  {
    icon: Smartphone,
    title: 'Celulares',
    description: 'Conserto de iPhone e Android. Telas, baterias, conectores e mais.',
    keywords: ['iPhone', 'Samsung', 'Motorola', 'Xiaomi'],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Assistência Técnica Especializada
          </h2>
          <p className="text-muted-foreground text-lg">
            Consertamos <strong>eletrodomésticos</strong>, <strong>Smart TVs</strong> e <strong>celulares</strong> em <strong>Maringá</strong> e região. 
            Técnicos certificados e peças originais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Keywords/Brands */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <a
                    href={`https://wa.me/5544999999999?text=Olá! Preciso de conserto de ${service.title.toLowerCase()}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Solicitar orçamento para conserto de ${service.title.toLowerCase()} em Maringá`}
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o serviço que procura? Entre em contato conosco!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a
              href="https://wa.me/5544999999999?text=Olá! Preciso de um serviço não listado no site."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
