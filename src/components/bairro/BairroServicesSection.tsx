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
                     variant="whatsapp"
                     size="lg"
                     className="w-full border-0 font-semibold"
                     asChild
                     onClick={(e) => e.stopPropagation()}
                   >
                     <a
                       href={`https://wa.me/5544997398826?text=${encodeURIComponent(`Olá! Preciso de conserto de ${service.title.toLowerCase()} ${noBairro(bairro)}. Gostaria de solicitar um orçamento.`)}`}
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.503-3.867-1.496C4.164 3.402 3.561 1.849 3.561 .283 3.561-.91 4.478-2 5.617-2h2.529C9.323-2 10.24-1.09 10.24.083v2.528c0 1.174-.918 2.075-2.053 2.075h-2.608zM23.94 2.15c0 1.173-.923 2.068-2.061 2.068h-2.521C18.255 4.218 17.34 3.308 17.34.227V-.297C17.34-1.47 18.263-2.36 19.402-2.36h2.521C23.017-2.36 23.94-1.47 23.94-.297v2.447zm-6.506 5.383c1.309 0 2.373-1.069 2.373-2.381 0-1.312-1.064-2.381-2.373-2.381-1.309 0-2.373 1.069-2.373 2.381 0 1.312 1.064 2.381 2.373 2.381z" fill="currentColor" />
                       </svg>
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