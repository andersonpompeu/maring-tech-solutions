import { MessageCircle, ArrowRight, Wrench, ShieldCheck, Clock, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type LucideIcon } from 'lucide-react';

export interface SEOTopic {
  title: string;
  description: string;
  highlights?: string[];
  icon?: LucideIcon;
}

interface SEOTopicsSectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  topics: SEOTopic[];
  city?: string;
}

const defaultIcons: LucideIcon[] = [Wrench, ShieldCheck, Clock, Star, CheckCircle2];

const SEOTopicsSection = ({
  sectionTitle,
  sectionSubtitle,
  topics,
  city = 'Maringá',
}: SEOTopicsSectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {sectionSubtitle && (
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {sectionSubtitle}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça em detalhes todos os serviços que oferecemos em {city} e região.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon || defaultIcons[index % defaultIcons.length];
            const isEven = index % 2 === 0;

            return (
              <article
                key={index}
                className={`
                  group relative rounded-2xl border border-border/50 bg-card p-6 md:p-8 
                  shadow-sm hover:shadow-card transition-all duration-300
                  ${isEven ? '' : 'md:ml-8'}
                `}
              >
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground text-xs font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row gap-5 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2 leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    {/* Highlights */}
                    {topic.highlights && topic.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {topic.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-full"
                          >
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="text-center sm:text-left">
              <p className="font-heading font-bold text-foreground text-lg">
                Precisa de algum desses serviços?
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Solicite um orçamento gratuito e sem compromisso.
              </p>
            </div>
            <Button variant="whatsapp" size="lg" className="rounded-full group whitespace-nowrap" asChild>
              <a
                href={`https://wa.me/5544999999999?text=Olá! Gostaria de um orçamento para serviço em ${city}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Orçamento Grátis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOTopicsSection;
