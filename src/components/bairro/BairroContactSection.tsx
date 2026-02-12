import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Clock, Send, CheckCircle, Loader2, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { noBairro } from '@/lib/utils';

interface BairroContactSectionProps {
  bairro: string;
}

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().trim().email('E-mail inválido').max(255, 'E-mail muito longo'),
  phone: z.string().trim().min(10, 'Telefone inválido').max(20, 'Telefone muito longo'),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000, 'Mensagem muito longa'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: 'maquina-lavar', label: 'Máquina de Lavar' },
  { value: 'geladeira', label: 'Geladeira / Freezer' },
  { value: 'fogao', label: 'Fogão / Cooktop' },
  { value: 'microondas', label: 'Micro-ondas' },
  { value: 'smart-tv', label: 'Smart TV' },
  { value: 'celular', label: 'Celular / Smartphone' },
  { value: 'outro', label: 'Outro' },
];

const whatsappNumber = '5544997398826';

const BairroContactSection = ({ bairro }: BairroContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', service: '', message: '' },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    const serviceLabel = services.find(s => s.value === data.service)?.label || data.service;
    const whatsappMessage = [
      `*Novo contato via site - ${bairro}*`,
      ``,
      `*Nome:* ${data.name}`,
      `*E-mail:* ${data.email}`,
      `*Telefone:* ${data.phone}`,
      `*Serviço:* ${serviceLabel}`,
      `*Bairro:* ${bairro}`,
      ``,
      `*Mensagem:*`,
      data.message,
    ].join('\n');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
    form.reset();
    toast({ title: 'Redirecionando para WhatsApp!', description: 'Confirme o envio da mensagem no WhatsApp.' });
    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-12 md:py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Contato - Assistência Técnica {noBairro(bairro)}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Envie sua mensagem do <strong>{bairro}</strong> e receba um <strong>orçamento sem compromisso</strong>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card rounded-2xl p-5 sm:p-8 shadow-card border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8 font-heading">
                Informações de Contato - {bairro}
              </h3>
              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                    <a href={`https://wa.me/${whatsappNumber}`} title={`Chamar assistência técnica ${noBairro(bairro)} via WhatsApp`} className="text-muted-foreground hover:text-primary transition-colors">
                      (44) 99739-8826
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <a href="mailto:contato@assistenciatecnica.maringa.br" title={`Enviar e-mail para assistência técnica ${noBairro(bairro)}`} className="text-muted-foreground hover:text-primary transition-colors">
                      contato@assistenciatecnica.maringa.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Atendimento <strong>24 horas</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">
                      Av. Brasil, 3278 - Zona 01<br />
                      <strong>Maringá</strong> - PR, 87013-000
                    </p>
                  </div>
                </div>
              </address>
              <div className="mt-6 sm:mt-8 bg-gradient-to-br from-primary to-accent rounded-xl p-4 sm:p-6 text-white">
                <h4 className="text-base sm:text-lg font-bold mb-2 font-heading">Prefere WhatsApp?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Atendimento rápido {noBairro(bairro)}. Envie fotos do problema e receba orçamento imediato!
                </p>
                 <Button variant="whatsapp" size="xl" className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold" asChild>
                   <a
                     href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Moro ${noBairro(bairro)} e gostaria de solicitar um orçamento.`)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     title={`Solicitar orçamento via WhatsApp ${noBairro(bairro)}`}
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.503-3.867-1.496C4.164 3.402 3.561 1.849 3.561 .283 3.561-.91 4.478-2 5.617-2h2.529C9.323-2 10.24-1.09 10.24.083v2.528c0 1.174-.918 2.075-2.053 2.075h-2.608zM23.94 2.15c0 1.173-.923 2.068-2.061 2.068h-2.521C18.255 4.218 17.34 3.308 17.34.227V-.297C17.34-1.47 18.263-2.36 19.402-2.36h2.521C23.017-2.36 23.94-1.47 23.94-.297v2.447zm-6.506 5.383c1.309 0 2.373-1.069 2.373-2.381 0-1.312-1.064-2.381-2.373-2.381-1.309 0-2.373 1.069-2.373 2.381 0 1.312 1.064 2.381 2.373 2.381z" fill="currentColor" />
                     </svg>
                     Chamar no WhatsApp
                   </a>
                 </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 sm:p-8 shadow-card border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5 sm:mb-6 font-heading">Formulário de Contato</h3>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-whatsapp" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">Confirme o envio no WhatsApp para concluir.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Nome Completo</FormLabel><FormControl><Input placeholder="Seu nome" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>E-mail</FormLabel><FormControl><Input type="email" placeholder="seu@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Telefone</FormLabel><FormControl><Input type="tel" placeholder="(44) 99999-9999" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Serviço</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Selecione o serviço" /></SelectTrigger></FormControl>
                          <SelectContent>{services.map((service) => (<SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>))}</SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Mensagem</FormLabel><FormControl><Textarea placeholder="Descreva o problema ou dúvida..." className="min-h-[120px] resize-none" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Enviando...</>) : (<><Send className="w-5 h-5" />Enviar Mensagem</>)}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[280px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58736.53385158981!2d-51.98897844179685!3d-23.42551840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd72297c9ef47%3A0x8aa6457bf5a5b90d!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização Assistência Técnica ${noBairro(bairro)} - Maringá`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BairroContactSection;