import { MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { neighborhoods as neighborhoodData } from '@/data/neighborhoods';

const neighborhoods = neighborhoodData.map(n => ({
  name: n.name,
  slug: n.slug,
  region: n.region.replace('Região ', ''),
  popular: n.popular,
}));

const regionColors: Record<string, string> = {
  Central: 'bg-primary/10 text-primary border-primary/20',
  Norte: 'bg-accent/10 text-accent border-accent/20',
  Sul: 'bg-secondary/10 text-secondary border-secondary/20',
  Leste: 'bg-success/10 text-success border-success/20',
  Oeste: 'bg-destructive/10 text-destructive border-destructive/20',
};

const regionDotColors: Record<string, string> = {
  Central: 'bg-primary',
  Norte: 'bg-accent',
  Sul: 'bg-secondary',
  Leste: 'bg-success',
  Oeste: 'bg-destructive',
};

const regions = ['Central', 'Norte', 'Sul', 'Leste', 'Oeste'];

const NeighborhoodsSection = () => {
  return (
    <section id="bairros" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Cobertura em Maringá
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Bairros que Atendemos
          </h2>
          <p className="text-muted-foreground text-lg">
            Atendemos em toda <strong>Maringá</strong> com rapidez e qualidade. Confira a cobertura na sua região.
          </p>
        </div>

        {/* Region Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {regions.map((region) => (
            <span
              key={region}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${regionColors[region]}`}
            >
              <span className={`w-2 h-2 rounded-full ${regionDotColors[region]}`} />
              {region}
            </span>
          ))}
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {neighborhoods.map((neighborhood) => (
            <Link
              to={`/bairros/${neighborhood.slug}`}
              key={neighborhood.name}
              className={`
                group relative flex items-center gap-2 p-3 rounded-xl border transition-all duration-300
                hover:border-primary hover:shadow-card hover:-translate-y-0.5
                ${neighborhood.popular
                  ? 'bg-primary/5 border-primary/15'
                  : 'bg-card border-border'
                }
              `}
            >
              <CheckCircle
                className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                  neighborhood.popular ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                }`}
              />
              <span className="text-sm font-medium text-foreground leading-tight truncate">
                {neighborhood.name}
              </span>
              {neighborhood.popular && (
                <span className={`absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full ${regionDotColors[neighborhood.region]}`} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="whatsapp" size="lg" className="group" asChild>
            <a
              href="https://wa.me/5544997398826?text=Olá! Gostaria de saber se vocês atendem meu bairro."
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default NeighborhoodsSection;
