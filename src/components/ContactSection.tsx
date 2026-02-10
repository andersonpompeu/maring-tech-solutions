import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Clock, Send, CheckCircle, Loader2, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

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

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    const serviceLabel = services.find(s => s.value === data.service)?.label || data.service;

    const whatsappMessage = [
      `*Novo contato via site*`,
      ``,
      `*Nome:* ${data.name}`,
      `*E-mail:* ${data.email}`,
      `*Telefone:* ${data.phone}`,
      `*Serviço:* ${serviceLabel}`,
      ``,
      `*Mensagem:*`,
      data.message,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSuccess(true);
    form.reset();
    toast({
      title: 'Redirecionando para WhatsApp!',
      description: 'Confirme o envio da mensagem no WhatsApp.',
    });

    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Envie sua mensagem e receba um <strong>orçamento sem compromisso</strong>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Row: Contact Info + Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-8 font-heading">
                Informações de Contato
              </h3>

              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      title="Chamar assistência técnica em Maringá no WhatsApp"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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
                    <a
                      href="mailto:contato@hassistenciatecnica.maringa.br"
                      title="Enviar e-mail para assistência técnica em Maringá"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@hassistenciatecnica.maringa.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">
                      Atendimento <strong>24 horas</strong>
                    </p>
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

              {/* WhatsApp CTA */}
              <div className="mt-8 bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2 font-heading">Prefere WhatsApp?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Atendimento rápido e direto. Envie fotos do problema e receba orçamento imediato!
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 border-0 font-semibold"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Solicitar orçamento via WhatsApp em Maringá"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6 font-heading">
                Formulário de Contato
              </h3>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-whatsapp" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">
                    Confirme o envio no WhatsApp para concluir.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(44) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Serviço</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o serviço" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descreva o problema ou dúvida..."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58736.53385158981!2d-51.98897844179685!3d-23.42551840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd72297c9ef47%3A0x8aa6457bf5a5b90d!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Assistência Técnica Maringá"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
