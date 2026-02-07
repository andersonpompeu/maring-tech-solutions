import { Clock, Shield, Award, MapPin, Zap, ThumbsUp } from 'lucide-react';

interface BairroDifferentialsSectionProps {
  bairro: string;
}

const BairroDifferentialsSection = ({ bairro }: BairroDifferentialsSectionProps) => {
  const differentials = [
    {
      icon: Clock,
      title: `Atendimento Rápido no ${bairro}`,
      description: `Conserto no mesmo dia para a maioria dos serviços no ${bairro}. Agilidade sem perder qualidade.`,
    },
    {
      icon: Shield,
      title: 'Garantia de 90 Dias',
      description: `Todos os serviços no ${bairro} possuem garantia estendida. Sua segurança é nossa prioridade.`,
    },
    {
      icon: Award,
      title: 'Técnicos Certificados',
      description: 'Equipe treinada e certificada pelas principais marcas do mercado.',
    },
    {
      icon: MapPin,
      title: `Atendemos o ${bairro}`,
      description: `Atendimento local no ${bairro} e toda a região de Maringá com eficiência.`,
    },
    {
      icon: Zap,
      title: 'Peças Originais',
      description: 'Trabalhamos apenas com peças originais e de primeira qualidade.',
    },
    {
      icon: ThumbsUp,
      title: 'Orçamento Grátis',
      description: `Orçamento sem compromisso no ${bairro}. Você só paga se aprovar o serviço.`,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Nossos Diferenciais no {bairro}
          </h2>
          <p className="text-white/80 text-lg">
            Somos referência em assistência técnica no {bairro}, Maringá. 
            Confira o que nos torna a melhor escolha para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BairroDifferentialsSection;
