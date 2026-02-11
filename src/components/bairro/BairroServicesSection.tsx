import { Tv, Smartphone, Refrigerator, Flame, Microwave, WashingMachine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { neighborhoods } from '@/data/neighborhoods';
import { noBairro } from '@/lib/utils';

interface BairroServicesSectionProps {
  bairro: string;
  bairroSlug?: string;
}

const services = [
  { icon: WashingMachine, title: 'Máquinas de Lavar', slug: 'conserto-de-maquina-de-lavar', keywords: ['Brastemp', 'Electrolux', 'LG', 'Samsung'] },
  { icon: Refrigerator, title: 'Geladeiras', slug: 'conserto-de-geladeira', keywords: ['Consul', 'Brastemp', 'Electrolux', 'Panasonic'] },
  { icon: Flame, title: 'Fogões', slug: 'conserto-de-fogao', keywords: ['Atlas', 'Brastemp', 'Electrolux', 'Fischer'] },
  { icon: Microwave, title: 'Micro-ondas', slug: 'conserto-de-micro-ondas', keywords: ['Panasonic', 'LG', 'Electrolux', 'Midea'] },
  { icon: Tv, title: 'Smart TVs', slug: 'conserto-de-tv', keywords: ['Samsung', 'LG', 'Sony', 'TCL'] },
  { icon: Smartphone, title: 'Celulares', slug: 'conserto-de-celular', keywords: ['iPhone', 'Samsung', 'Motorola', 'Xiaomi'] },
];

const BairroServicesSection = ({ bairro, bairroSlug }: BairroServicesSectionProps) => {
  const resolvedSlug = bairroSlug || neighborhoods.find(n => n.name === bairro)?.slug || '';
  const getDescription = (title: string) => {
    const descriptions: Record<string, string> = {
      'Máquinas de Lavar': `Conserto de máquinas de lavar ${noBairro(bairro)}. Lavadoras e lava e seca de todas as marcas.`,
      'Geladeiras': `Reparo de geladeiras, freezers e refrigeradores ${noBairro(bairro)}. Vazamentos e motor.`,
      'Fogões': `Manutenção de fogões a gás, cooktops e fornos elétricos ${noBairro(bairro)}.`,
      'Micro-ondas': `Conserto de micro-ondas e fornos elétricos ${noBairro(bairro)}. Garantia em todas as peças.`,
      'Smart TVs': `Reparo em TVs LED, OLED e QLED ${noBairro(bairro)}. Telas, placas e software.`,
      'Celulares': `Conserto de iPhone e Android ${noBairro(bairro)}. Telas, baterias, conectores e mais.`,
    };
    return descriptions[title] || '';
  };

  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Assistência Técnica Especializada {noBairro(bairro)}
          </h2>
          <p className="text-muted-foreground text-lg">
            Consertamos eletrodomésticos, Smart TVs e celulares {noBairro(bairro)}, Maringá. 
            Técnicos certificados e peças originais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={`/bairros/${resolvedSlug}/${service.slug}`}
                className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Conserto de {service.title} {noBairro(bairro)}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-[15px]">
                  {getDescription(service.title)}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.keywords.map((keyword) => (
                    <span key={keyword} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full border border-border/30">
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Ver Detalhes
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={`https://wa.me/5544997398826?text=${encodeURIComponent(`Olá! Preciso de conserto de ${service.title.toLowerCase()} ${noBairro(bairro)}. Gostaria de solicitar um orçamento.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                    </a>
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o serviço que procura {noBairro(bairro)}? Entre em contato!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a
              href={`https://wa.me/5544997398826?text=Olá! Moro ${noBairro(bairro)} e preciso de um serviço não listado no site.`}
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

export default BairroServicesSection;