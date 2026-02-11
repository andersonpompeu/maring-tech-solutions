import { BUSINESS } from '@/data/business-info';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Assistência Técnica de Confiança em Maringá
          </h2>

          <article className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            <p>
              A <strong className="text-foreground">Assistência Técnica Maringá</strong> é uma empresa especializada no
              <em> conserto e manutenção de eletrodomésticos, Smart TVs e celulares</em> em Maringá e em toda a região
              metropolitana, incluindo Sarandi, Paiçandu e Marialva. Com anos de atuação no mercado, construímos uma
              reputação sólida baseada na <strong className="text-foreground">qualidade do serviço</strong>, na
              transparência dos orçamentos e no compromisso com a satisfação do cliente.
            </p>

            <p>
              Nossa equipe é formada por <strong className="text-foreground">técnicos certificados</strong> e
              continuamente treinados pelas principais fabricantes do mercado brasileiro, como Brastemp, Electrolux,
              Samsung, LG, Consul, Panasonic e Midea. Isso nos permite oferecer diagnósticos precisos e reparos
              duradouros para uma ampla variedade de equipamentos, desde <em>geladeiras, máquinas de lavar, fogões e
              micro-ondas</em> até <em>televisores de última geração e smartphones</em>.
            </p>

            <p>
              Trabalhamos exclusivamente com <strong className="text-foreground">peças originais e de primeira
              linha</strong>, garantindo que cada reparo prolongue a vida útil do seu aparelho. Todos os nossos serviços
              incluem <strong className="text-foreground">garantia de 90 dias</strong> tanto na mão de obra quanto nas
              peças substituídas, proporcionando total segurança para você e sua família.
            </p>

            <p>
              Sabemos que um eletrodoméstico quebrado pode atrapalhar a rotina de qualquer lar. Por isso, oferecemos
              <strong className="text-foreground"> atendimento 24 horas</strong>, incluindo finais de semana e feriados,
              com a possibilidade de <em>conserto no mesmo dia</em> para a maioria dos serviços. Nosso objetivo é
              devolver o conforto da sua casa o mais rápido possível, com o menor custo e a maior qualidade.
            </p>

            <p>
              Atendemos todos os bairros de Maringá — da Zona 01 ao Jardim Alvorada, do Centro ao Parque Industrial —
              além dos municípios vizinhos. Seja para uma simples revisão, uma manutenção preventiva ou um conserto de
              urgência, a <strong className="text-foreground">Assistência Técnica Maringá</strong> está pronta para
              atender você com agilidade e profissionalismo. Solicite seu orçamento gratuito e sem compromisso pelo
              WhatsApp: <strong className="text-foreground">{BUSINESS.phoneDisplay}</strong>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
