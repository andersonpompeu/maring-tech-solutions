import { MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { neighborhoods } from '@/data/neighborhoods';

interface BairroNeighborhoodsSectionProps {
  currentBairro: string;
}

const BairroNeighborhoodsSection = ({ currentBairro }: BairroNeighborhoodsSectionProps) => {
  const otherNeighborhoods = neighborhoods.filter(n => n.name !== currentBairro).slice(0, 12);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Outros Bairros
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Também Atendemos Outros Bairros de Maringá
          </h2>
          <p className="text-muted-foreground text-lg">
            Além do {currentBairro}, atendemos em toda Maringá com rapidez e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {otherNeighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.name}
              to={`/bairros/${neighborhood.slug}`}
              className={`
                group relative flex items-center gap-2 p-3 rounded-xl border transition-all duration-300
                hover:border-primary hover:shadow-card hover:-translate-y-0.5
                ${neighborhood.popular ? 'bg-primary/5 border-primary/15' : 'bg-card border-border'}
              `}
            >
              <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${neighborhood.popular ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
              <span className="text-sm font-medium text-foreground leading-tight truncate">
                {neighborhood.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="whatsapp" size="lg" className="group" asChild>
            <a href="https://wa.me/5544999999999?text=Olá! Gostaria de saber se vocês atendem meu bairro." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Consultar Disponibilidade
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/bairros">
              Ver todos os bairros
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BairroNeighborhoodsSection;
