import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const PoliticaDePrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Assistência Técnica Maringá</title>
        <meta name="description" content="Política de Privacidade da Assistência Técnica Maringá. Saiba como coletamos, utilizamos e protegemos seus dados pessoais." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Assistência Técnica Maringá está comprometida com a proteção da privacidade dos seus clientes. 
                Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e 
                protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção 
                de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">2. Dados Coletados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos coletar os seguintes dados pessoais:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Endereço residencial (para atendimento domiciliar)</li>
                <li>Informações sobre o equipamento a ser reparado</li>
                <li>Dados de navegação no site (cookies)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">3. Finalidade da Coleta</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os dados coletados são utilizados para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Prestação dos serviços de assistência técnica</li>
                <li>Comunicação sobre o andamento dos serviços</li>
                <li>Envio de orçamentos e informações solicitadas</li>
                <li>Melhoria da experiência no nosso site</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Assistência Técnica Maringá não vende, aluga ou compartilha seus dados pessoais com terceiros 
                para fins comerciais. Os dados podem ser compartilhados apenas com prestadores de 
                serviço essenciais para nossa operação (como fornecedores de peças), sempre com as 
                devidas proteções contratuais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">5. Armazenamento e Segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas 
                e administrativas adequadas. Adotamos protocolos de criptografia, controle de acesso 
                e monitoramento para prevenir acessos não autorizados, perdas ou vazamentos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site utiliza cookies para melhorar sua experiência de navegação. Cookies são 
                pequenos arquivos de texto armazenados no seu navegador que nos ajudam a entender 
                como você interage com nosso site. Você pode configurar seu navegador para recusar 
                cookies, mas isso pode afetar a funcionalidade do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">7. Direitos do Titular</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em conformidade com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados tratados com consentimento</li>
                <li>Revogação do consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados pessoais serão retidos pelo tempo necessário para cumprir as finalidades 
                descritas nesta política, ou conforme exigido por lei. Após este período, os dados 
                serão eliminados de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">9. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações 
                significativas serão comunicadas através do nosso site. Recomendamos que você revise 
                esta página regularmente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelo e-mail 
                contato@assistenciatecnica.maringa.br ou pelo WhatsApp (44) 99739-8826.
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

export default PoliticaDePrivacidade;
