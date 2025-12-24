import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Onde Estamos
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados no centro de Maringá, com fácil acesso e estacionamento. 
            Atendemos toda a região metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.2461892665507!2d-51.9386!3d-23.4206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0fa5f6f47f7%3A0x1c8e8e5a35b6e6e8!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1703097600000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização TechFix Maringá"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">
                    Av. Brasil, 1234 - Centro<br />
                    Maringá - PR, 87013-000
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-muted-foreground">
                    (44) 99999-9999<br />
                    (44) 3333-3333
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">
                    contato@techfixmaringa.com.br
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma visita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Visita pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
