import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const TermosDeUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Assistência Técnica Maringá</title>
        <meta name="description" content="Termos de Uso da Assistência Técnica Maringá. Conheça as condições para utilização dos nossos serviços de assistência técnica." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar os serviços da Assistência Técnica Maringá, você concorda com estes Termos de Uso. 
                Caso não concorde com alguma disposição, recomendamos que não utilize nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Assistência Técnica Maringá oferece serviços de assistência técnica especializada em conserto e 
                manutenção de eletrodomésticos, televisores e celulares na cidade de Maringá e região. 
                Nossos serviços incluem diagnóstico, reparo, manutenção preventiva e corretiva.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">3. Orçamento e Aprovação</h2>
              <p className="text-muted-foreground leading-relaxed">
                Antes de iniciar qualquer reparo, a Assistência Técnica Maringá fornecerá um orçamento detalhado ao cliente. 
                O serviço somente será realizado após a aprovação formal do orçamento pelo cliente. 
                Em caso de desistência após a aprovação, poderá ser cobrada uma taxa de diagnóstico.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">4. Garantia dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os serviços realizados pela Assistência Técnica Maringá possuem garantia de 90 (noventa) dias, 
                contados a partir da data de entrega do equipamento. A garantia cobre exclusivamente o 
                serviço realizado e as peças substituídas, não se estendendo a defeitos pré-existentes 
                ou danos causados por mau uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">5. Responsabilidade do Cliente</h2>
              <p className="text-muted-foreground leading-relaxed">
                O cliente é responsável por fornecer informações precisas sobre o defeito do equipamento, 
                retirar o equipamento no prazo acordado e realizar o pagamento conforme combinado. 
                Equipamentos não retirados em até 90 dias após a conclusão do serviço poderão ser 
                descartados conforme legislação vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Assistência Técnica Maringá não se responsabiliza por dados armazenados em dispositivos deixados 
                para reparo. Recomendamos que o cliente realize backup de seus dados antes de entregar 
                o equipamento. Nossa responsabilidade está limitada ao valor do serviço contratado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">7. Pagamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                O pagamento deve ser realizado no ato da retirada do equipamento, salvo acordo prévio. 
                Aceitamos pagamento em dinheiro, cartão de débito, cartão de crédito e PIX.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">8. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Assistência Técnica Maringá reserva-se o direito de alterar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação nesta página.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco pelo WhatsApp 
                (44) 99739-8826 ou pelo e-mail contato@hassistenciatecnica.maringa.br.
              </p>
            </section>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default TermosDeUso;
