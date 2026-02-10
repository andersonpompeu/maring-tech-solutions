import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Nossa Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Fácil de Encontrar
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados em Maringá-PR, com fácil acesso e estacionamento gratuito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58736.53385158981!2d-51.98897844179685!3d-23.42551840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd72297c9ef47%3A0x8aa6457bf5a5b90d!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Assistência Técnica Maringá"
            ></iframe>
          </div>

          {/* Contact Info */}
          <address className="not-italic space-y-4">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Brasil, 1234 - Centro<br />
                      <strong>Maringá</strong> - PR, 87000-000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: <time dateTime="08:00">08h</time> às <time dateTime="18:00">18h</time><br />
                      Sábado: <time dateTime="08:00">08h</time> às <time dateTime="12:00">12h</time>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+554499999999" title="Ligar para assistência técnica em Maringá">(44) 99999-9999</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                <a 
                  href="https://wa.me/5544997398826?text=Olá! Gostaria de agendar um atendimento." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Agendar atendimento técnico em Maringá via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a 
                  href="https://www.google.com/maps/dir//Maringá,+PR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Ver rota para assistência técnica em Maringá"
                >
                  <Navigation className="w-5 h-5" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;