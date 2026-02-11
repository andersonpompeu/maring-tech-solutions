import { Clock, Shield, Award, MapPin, Zap, ThumbsUp } from 'lucide-react';

const differentials = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Realizamos o conserto no mesmo dia para a maioria dos serviços de eletrodomésticos em Maringá. Nossa logística permite atender com rapidez sem comprometer a qualidade do reparo.',
  },
  {
    icon: Shield,
    title: 'Garantia de 90 Dias',
    description: 'Todos os serviços possuem garantia de 90 dias na mão de obra e nas peças substituídas. Caso o problema persista, retornamos sem custo adicional para o cliente.',
  },
  {
    icon: Award,
    title: 'Técnicos Certificados',
    description: 'Nossa equipe é formada por técnicos com certificações das principais fabricantes brasileiras, como Brastemp, Electrolux, Samsung e LG, garantindo diagnósticos precisos.',
  },
  {
    icon: MapPin,
    title: 'Atendimento Local',
    description: 'Atendemos todos os bairros de Maringá e cidades da região metropolitana, incluindo Sarandi, Paiçandu e Marialva, com deslocamento rápido e sem taxa extra.',
  },
  {
    icon: Zap,
    title: 'Peças Originais',
    description: 'Utilizamos exclusivamente peças originais de distribuidores autorizados, assegurando o desempenho correto e a durabilidade do equipamento após o conserto.',
  },
  {
    icon: ThumbsUp,
    title: 'Orçamento Grátis',
    description: 'Oferecemos orçamento gratuito e sem compromisso. Nosso técnico avalia o equipamento, informa o valor do reparo e você decide se aprova o serviço.',
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-white/80 text-lg mb-4">
            Somos referência em <strong className="text-white">assistência técnica em Maringá</strong>. 
            Confira o que nos torna a melhor escolha para você.
          </p>
          <p className="text-white/70">
            Com mais de 500 clientes atendidos e avaliação média de 4.9 estrelas, nos destacamos pela combinação de agilidade, 
            qualidade técnica e atendimento humanizado. Nosso compromisso é resolver o problema do seu equipamento no menor tempo 
            possível, com transparência no orçamento e respeito ao seu bolso.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
