import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
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
import { supabase } from '@/integrations/supabase/client';
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      setIsSuccess(true);
      form.reset();
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou entre em contato via WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '5544999999999';

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Envie sua mensagem e receba um orçamento sem compromisso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6 font-heading">
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
                      (44) 99999-9999
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
                      href="mailto:contato@tecnicomaringa.com.br"
                      title="Enviar e-mail para assistência técnica em Maringá"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@tecnicomaringa.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Seg - Sex: <time dateTime="08:00">8h</time> às <time dateTime="18:00">18h</time></p>
                    <p className="text-muted-foreground">Sábado: <time dateTime="08:00">8h</time> às <time dateTime="12:00">12h</time></p>
                  </div>
                </div>
              </address>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 font-heading">
                Prefere WhatsApp?
              </h3>
              <p className="text-white/90 mb-6">
                Atendimento rápido e direto. Envie fotos do problema e receba orçamento imediato!
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
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
                  Obrigado pelo contato. Responderemos em breve.
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
      </div>
    </section>
  );
};

export default ContactSection;
