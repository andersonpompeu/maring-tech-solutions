import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { neighborhoods } from '@/data/neighborhoods';
import { bairroServices } from '@/data/bairro-services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';

const regions = ['Região Central', 'Região Norte', 'Região Sul', 'Região Leste', 'Região Oeste'];

const ServicoPorBairro = () => {
  const neighborhoodsByRegion = regions.map(region => ({
    region,
    neighborhoods: neighborhoods.filter(n => n.region === region),
  }));

  return (
    <>
      <SEOHead
        title="Serviços por Bairro em Maringá | Assistência Técnica Local"
        description="Encontre assistência técnica especializada no seu bairro em Maringá-PR. Mais de 400 páginas de serviços locais com atendimento rápido e garantia."
        canonical="/servicos-por-bairro"
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              {neighborhoods.length} Bairros · {bairroServices.length} Serviços
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Serviços por Bairro em Maringá
            </h1>
            <p className="text-muted-foreground text-lg">
              Navegue por todas as <strong>{neighborhoods.length * bairroServices.length} páginas</strong> de serviços localizados.
              Encontre assistência técnica especializada no seu bairro.
            </p>
          </div>
        </section>

        {/* Listing */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {neighborhoodsByRegion.map(({ region, neighborhoods: regionNeighborhoods }) => (
              <div key={region} className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {region}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({regionNeighborhoods.length} bairros · {regionNeighborhoods.length * bairroServices.length} páginas)
                  </span>
                </h2>

                <div className="space-y-4">
                  {regionNeighborhoods.map(neighborhood => (
                    <div key={neighborhood.slug} className="bg-card rounded-2xl border border-border/50 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Link
                          to={`/bairros/${neighborhood.slug}`}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {neighborhood.name}
                        </Link>
                        {neighborhood.popular && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Popular</span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {bairroServices.map(service => (
                          <Link
                            key={service.slug}
                            to={`/bairros/${neighborhood.slug}/${service.slug}`}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary text-sm text-muted-foreground transition-all group"
                          >
                            <service.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{service.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServicoPorBairro;
