import { Award, Briefcase } from 'lucide-react';
import { noBairro } from '@/lib/utils';
import technician1 from '@/assets/technician-1.jpg';
import technician2 from '@/assets/technician-2.jpg';
import technician3 from '@/assets/technician-3.jpg';

interface BairroTeamSectionProps {
  bairro: string;
}

const team = [
  { name: 'Ricardo Souza', role: 'Técnico Sênior em Eletrodomésticos', experience: '15 anos de experiência', specialties: ['Linha Branca', 'Refrigeração', 'Lavadoras'], image: technician1 },
  { name: 'Carla Andrade', role: 'Especialista em Eletrônicos', experience: '10 anos de experiência', specialties: ['Smart TVs', 'Som', 'Projetores'], image: technician2 },
  { name: 'Paulo Mendes', role: 'Técnico em Celulares', experience: '8 anos de experiência', specialties: ['iPhone', 'Android', 'Tablets'], image: technician3 },
];

const BairroTeamSection = ({ bairro }: BairroTeamSectionProps) => {
  return (
    <section id="equipe" className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Técnicos que Atendem o {bairro}
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça os profissionais que atendem o {bairro} e fazem a diferença no conserto do seu equipamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={member.name} className="group text-center bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="relative mb-6 mx-auto w-44 h-44 overflow-hidden rounded-2xl shadow-sm">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-2 text-sm">{member.role}</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                <span>{member.experience}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((specialty) => (
                  <span key={specialty} className="text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/10">{specialty}</span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
                <Award className="w-4 h-4 text-secondary" />
                <span>Técnico Certificado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BairroTeamSection;