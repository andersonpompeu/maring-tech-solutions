export interface Neighborhood {
  name: string;
  slug: string;
  region: string;
  popular: boolean;
}

export const neighborhoods: Neighborhood[] = [
  // Zonas
  { name: 'Zona 01', slug: 'zona-01', region: 'Região Central', popular: true },
  { name: 'Zona 02', slug: 'zona-02', region: 'Região Central', popular: true },
  { name: 'Zona 03', slug: 'zona-03', region: 'Região Central', popular: true },
  { name: 'Zona 04', slug: 'zona-04', region: 'Região Central', popular: true },
  { name: 'Zona 05', slug: 'zona-05', region: 'Região Sul', popular: true },
  { name: 'Zona 06', slug: 'zona-06', region: 'Região Sul', popular: false },
  { name: 'Zona 07', slug: 'zona-07', region: 'Região Oeste', popular: true },
  { name: 'Zona 08', slug: 'zona-08', region: 'Região Norte', popular: false },

  // Jardins
  { name: 'Jardim Alvorada', slug: 'jardim-alvorada', region: 'Região Sul', popular: true },
  { name: 'Jardim América', slug: 'jardim-america', region: 'Região Central', popular: false },
  { name: 'Jardim Atami', slug: 'jardim-atami', region: 'Região Norte', popular: false },
  { name: 'Jardim Bela Vista', slug: 'jardim-bela-vista', region: 'Região Sul', popular: false },
  { name: 'Jardim Canadá', slug: 'jardim-canada', region: 'Região Norte', popular: false },
  { name: 'Jardim Cidade Alta', slug: 'jardim-cidade-alta', region: 'Região Norte', popular: false },
  { name: 'Jardim Colina Verde', slug: 'jardim-colina-verde', region: 'Região Sul', popular: false },
  { name: 'Jardim Copacabana', slug: 'jardim-copacabana', region: 'Região Oeste', popular: false },
  { name: 'Jardim Dias', slug: 'jardim-dias', region: 'Região Sul', popular: false },
  { name: 'Jardim Espanha', slug: 'jardim-espanha', region: 'Região Oeste', popular: false },
  { name: 'Jardim Guaporé', slug: 'jardim-guapore', region: 'Região Norte', popular: false },
  { name: 'Jardim Higienópolis', slug: 'jardim-higienopolis', region: 'Região Central', popular: false },
  { name: 'Jardim Iguaçu', slug: 'jardim-iguacu', region: 'Região Sul', popular: false },
  { name: 'Jardim Imperial', slug: 'jardim-imperial', region: 'Região Oeste', popular: false },
  { name: 'Jardim Indaiá', slug: 'jardim-indaia', region: 'Região Norte', popular: false },
  { name: 'Jardim Itália', slug: 'jardim-italia', region: 'Região Oeste', popular: false },
  { name: 'Jardim Liberdade', slug: 'jardim-liberdade', region: 'Região Sul', popular: false },
  { name: 'Jardim Mandacaru', slug: 'jardim-mandacaru', region: 'Região Norte', popular: false },
  { name: 'Jardim Maringá', slug: 'jardim-maringa', region: 'Região Central', popular: false },
  { name: 'Jardim Miosótis', slug: 'jardim-miosotis', region: 'Região Sul', popular: false },
  { name: 'Jardim Monte Rei', slug: 'jardim-monte-rei', region: 'Região Norte', popular: false },
  { name: 'Jardim Morangueira', slug: 'jardim-morangueira', region: 'Região Leste', popular: false },
  { name: 'Jardim Novo Horizonte', slug: 'jardim-novo-horizonte', region: 'Região Norte', popular: false },
  { name: 'Jardim Oriental', slug: 'jardim-oriental', region: 'Região Leste', popular: false },
  { name: 'Jardim Paris', slug: 'jardim-paris', region: 'Região Oeste', popular: false },
  { name: 'Jardim Paulista', slug: 'jardim-paulista', region: 'Região Sul', popular: false },
  { name: 'Jardim Pinheiros', slug: 'jardim-pinheiros', region: 'Região Norte', popular: false },
  { name: 'Jardim Rebouças', slug: 'jardim-reboucas', region: 'Região Sul', popular: false },
  { name: 'Jardim Requião', slug: 'jardim-requiao', region: 'Região Norte', popular: false },
  { name: 'Jardim São Jorge', slug: 'jardim-sao-jorge', region: 'Região Norte', popular: false },
  { name: 'Jardim São Silvestre', slug: 'jardim-sao-silvestre', region: 'Região Norte', popular: false },
  { name: 'Jardim Sumaré', slug: 'jardim-sumare', region: 'Região Sul', popular: false },
  { name: 'Jardim Tarumã', slug: 'jardim-taruma', region: 'Região Oeste', popular: false },
  { name: 'Jardim Tuiuti', slug: 'jardim-tuiuti', region: 'Região Norte', popular: false },
  { name: 'Jardim Universo', slug: 'jardim-universo', region: 'Região Oeste', popular: false },
  { name: 'Jardim Vitória', slug: 'jardim-vitoria', region: 'Região Sul', popular: false },

  // Parques
  { name: 'Parque Avenida', slug: 'parque-avenida', region: 'Região Central', popular: false },
  { name: 'Parque das Grevíleas', slug: 'parque-das-grevileas', region: 'Região Oeste', popular: false },
  { name: 'Parque do Horto', slug: 'parque-do-horto', region: 'Região Norte', popular: false },
  { name: 'Parque Industrial', slug: 'parque-industrial', region: 'Região Norte', popular: false },
  { name: 'Parque Tarumã', slug: 'parque-taruma', region: 'Região Oeste', popular: false },

  // Residenciais
  { name: 'Residencial Cidade Alta', slug: 'residencial-cidade-alta', region: 'Região Norte', popular: false },
  { name: 'Residencial Cidade Nova', slug: 'residencial-cidade-nova', region: 'Região Norte', popular: false },
  { name: 'Residencial Guaiapó', slug: 'residencial-guaiapo', region: 'Região Norte', popular: false },
  { name: 'Residencial Ney Braga', slug: 'residencial-ney-braga', region: 'Região Norte', popular: false },
  { name: 'Residencial Novo Centro', slug: 'residencial-novo-centro', region: 'Região Central', popular: false },
  { name: 'Residencial Ouro Cola', slug: 'residencial-ouro-cola', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque das Palmeiras', slug: 'residencial-parque-das-palmeiras', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque Industrial', slug: 'residencial-parque-industrial', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque Itaipu', slug: 'residencial-parque-itaipu', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque Lagoa Dourada', slug: 'residencial-parque-lagoa-dourada', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque São Jorge', slug: 'residencial-parque-sao-jorge', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque São Silvestre', slug: 'residencial-parque-sao-silvestre', region: 'Região Norte', popular: false },
  { name: 'Residencial Parque Tuiuti', slug: 'residencial-parque-tuiuti', region: 'Região Norte', popular: false },
  { name: 'Residencial Portal das Torres', slug: 'residencial-portal-das-torres', region: 'Região Norte', popular: false },
  { name: 'Residencial Recanto dos Magnatas', slug: 'residencial-recanto-dos-magnatas', region: 'Região Norte', popular: false },
  { name: 'Residencial Santa Felicidade', slug: 'residencial-santa-felicidade', region: 'Região Norte', popular: false },
  { name: 'Residencial Santa Helena', slug: 'residencial-santa-helena', region: 'Região Norte', popular: false },
  { name: 'Residencial São Clemente', slug: 'residencial-sao-clemente', region: 'Região Norte', popular: false },
  { name: 'Residencial São Domingos', slug: 'residencial-sao-domingos', region: 'Região Norte', popular: false },
];

export const findNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  return neighborhoods.find(n => n.slug === slug);
};
