import { Award, Briefcase, Star } from 'lucide-react';
import technician1 from '@/assets/technician-1.jpg';
import technician2 from '@/assets/technician-2.jpg';
import technician3 from '@/assets/technician-3.jpg';

const team = [
  {
    name: 'Ricardo Souza',
    role: 'Técnico Sênior em Eletrodomésticos',
    experience: '15 anos de experiência',
    specialties: ['Linha Branca', 'Refrigeração', 'Lavadoras'],
    image: technician1,
  },
  {
    name: 'Carla Andrade',
    role: 'Especialista em Eletrônicos',
    experience: '10 anos de experiência',
    specialties: ['Smart TVs', 'Som', 'Projetores'],
    image: technician2,
  },
  {
    name: 'Paulo Mendes',
    role: 'Técnico em Celulares',
    experience: '8 anos de experiência',
    specialties: ['iPhone', 'Android', 'Tablets'],
    image: technician3,
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossos Técnicos Especializados
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Conheça os profissionais que fazem a diferença no conserto do seu equipamento. 
            Equipe treinada e certificada.
          </p>
          <p className="text-muted-foreground">
            Nossos técnicos passam por treinamentos periódicos junto às principais fabricantes de eletrodomésticos e eletrônicos 
            do Brasil. Com especializações em linha branca, eletrônicos e smartphones, cada profissional é referência na sua área 
            de atuação, garantindo que seu equipamento será reparado por quem realmente entende do assunto.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl shadow-card group-hover:shadow-card-hover transition-all duration-300">
              <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} na Assistência Técnica Maringá`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-medium mb-2">{member.role}</p>
              
              {/* Experience */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                <span>{member.experience}</span>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
                <Award className="w-4 h-4 text-secondary" />
                <span>Técnico Certificado</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
