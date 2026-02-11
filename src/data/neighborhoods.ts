export interface Neighborhood {
  name: string;
  slug: string;
  region: string;
  popular: boolean;
  lat: number;
  lng: number;
  cep?: string;
}

export const neighborhoods: Neighborhood[] = [
  // Zonas
  { name: 'Zona 01', slug: 'zona-01', region: 'Região Central', popular: true, lat: -23.4205, lng: -51.9331, cep: '87013-000' },
  { name: 'Zona 02', slug: 'zona-02', region: 'Região Central', popular: true, lat: -23.4180, lng: -51.9380, cep: '87010-000' },
  { name: 'Zona 03', slug: 'zona-03', region: 'Região Central', popular: true, lat: -23.4230, lng: -51.9290, cep: '87050-000' },
  { name: 'Zona 04', slug: 'zona-04', region: 'Região Central', popular: true, lat: -23.4170, lng: -51.9270, cep: '87014-000' },
  { name: 'Zona 05', slug: 'zona-05', region: 'Região Sul', popular: true, lat: -23.4380, lng: -51.9350, cep: '87015-000' },
  { name: 'Zona 06', slug: 'zona-06', region: 'Região Sul', popular: false, lat: -23.4420, lng: -51.9400, cep: '87016-000' },
  { name: 'Zona 07', slug: 'zona-07', region: 'Região Oeste', popular: true, lat: -23.4250, lng: -51.9450, cep: '87020-000' },
  { name: 'Zona 08', slug: 'zona-08', region: 'Região Norte', popular: false, lat: -23.4050, lng: -51.9300, cep: '87060-000' },

  // Jardins
  { name: 'Jardim Alvorada', slug: 'jardim-alvorada', region: 'Região Sul', popular: true, lat: -23.4350, lng: -51.9280 },
  { name: 'Jardim América', slug: 'jardim-america', region: 'Região Central', popular: false, lat: -23.4220, lng: -51.9310 },
  { name: 'Jardim Atami', slug: 'jardim-atami', region: 'Região Norte', popular: false, lat: -23.3980, lng: -51.9250 },
  { name: 'Jardim Bela Vista', slug: 'jardim-bela-vista', region: 'Região Sul', popular: false, lat: -23.4400, lng: -51.9320 },
  { name: 'Jardim Canadá', slug: 'jardim-canada', region: 'Região Norte', popular: false, lat: -23.4000, lng: -51.9350 },
  { name: 'Jardim Cidade Alta', slug: 'jardim-cidade-alta', region: 'Região Norte', popular: false, lat: -23.3950, lng: -51.9280 },
  { name: 'Jardim Colina Verde', slug: 'jardim-colina-verde', region: 'Região Sul', popular: false, lat: -23.4450, lng: -51.9350 },
  { name: 'Jardim Copacabana', slug: 'jardim-copacabana', region: 'Região Oeste', popular: false, lat: -23.4280, lng: -51.9500 },
  { name: 'Jardim Dias', slug: 'jardim-dias', region: 'Região Sul', popular: false, lat: -23.4430, lng: -51.9280 },
  { name: 'Jardim Espanha', slug: 'jardim-espanha', region: 'Região Oeste', popular: false, lat: -23.4260, lng: -51.9480 },
  { name: 'Jardim Guaporé', slug: 'jardim-guapore', region: 'Região Norte', popular: false, lat: -23.4020, lng: -51.9320 },
  { name: 'Jardim Higienópolis', slug: 'jardim-higienopolis', region: 'Região Central', popular: false, lat: -23.4190, lng: -51.9340 },
  { name: 'Jardim Iguaçu', slug: 'jardim-iguacu', region: 'Região Sul', popular: false, lat: -23.4470, lng: -51.9300 },
  { name: 'Jardim Imperial', slug: 'jardim-imperial', region: 'Região Oeste', popular: false, lat: -23.4300, lng: -51.9520 },
  { name: 'Jardim Indaiá', slug: 'jardim-indaia', region: 'Região Norte', popular: false, lat: -23.4010, lng: -51.9290 },
  { name: 'Jardim Itália', slug: 'jardim-italia', region: 'Região Oeste', popular: false, lat: -23.4270, lng: -51.9470 },
  { name: 'Jardim Liberdade', slug: 'jardim-liberdade', region: 'Região Sul', popular: false, lat: -23.4410, lng: -51.9250 },
  { name: 'Jardim Mandacaru', slug: 'jardim-mandacaru', region: 'Região Norte', popular: false, lat: -23.3970, lng: -51.9310 },
  { name: 'Jardim Maringá', slug: 'jardim-maringa', region: 'Região Central', popular: false, lat: -23.4200, lng: -51.9300 },
  { name: 'Jardim Miosótis', slug: 'jardim-miosotis', region: 'Região Sul', popular: false, lat: -23.4440, lng: -51.9340 },
  { name: 'Jardim Monte Rei', slug: 'jardim-monte-rei', region: 'Região Norte', popular: false, lat: -23.3960, lng: -51.9260 },
  { name: 'Jardim Morangueira', slug: 'jardim-morangueira', region: 'Região Leste', popular: false, lat: -23.4210, lng: -51.9200 },
  { name: 'Jardim Novo Horizonte', slug: 'jardim-novo-horizonte', region: 'Região Norte', popular: false, lat: -23.3990, lng: -51.9340 },
  { name: 'Jardim Oriental', slug: 'jardim-oriental', region: 'Região Leste', popular: false, lat: -23.4230, lng: -51.9180 },
  { name: 'Jardim Paris', slug: 'jardim-paris', region: 'Região Oeste', popular: false, lat: -23.4290, lng: -51.9490 },
  { name: 'Jardim Paulista', slug: 'jardim-paulista', region: 'Região Sul', popular: false, lat: -23.4460, lng: -51.9310 },
  { name: 'Jardim Pinheiros', slug: 'jardim-pinheiros', region: 'Região Norte', popular: false, lat: -23.4030, lng: -51.9330 },
  { name: 'Jardim Rebouças', slug: 'jardim-reboucas', region: 'Região Sul', popular: false, lat: -23.4390, lng: -51.9260 },
  { name: 'Jardim Requião', slug: 'jardim-requiao', region: 'Região Norte', popular: false, lat: -23.4040, lng: -51.9360 },
  { name: 'Jardim São Jorge', slug: 'jardim-sao-jorge', region: 'Região Norte', popular: false, lat: -23.3940, lng: -51.9300 },
  { name: 'Jardim São Silvestre', slug: 'jardim-sao-silvestre', region: 'Região Norte', popular: false, lat: -23.3930, lng: -51.9270 },
  { name: 'Jardim Sumaré', slug: 'jardim-sumare', region: 'Região Sul', popular: false, lat: -23.4480, lng: -51.9330 },
  { name: 'Jardim Tarumã', slug: 'jardim-taruma', region: 'Região Oeste', popular: false, lat: -23.4310, lng: -51.9510 },
  { name: 'Jardim Tuiuti', slug: 'jardim-tuiuti', region: 'Região Norte', popular: false, lat: -23.3920, lng: -51.9240 },
  { name: 'Jardim Universo', slug: 'jardim-universo', region: 'Região Oeste', popular: false, lat: -23.4320, lng: -51.9530 },
  { name: 'Jardim Vitória', slug: 'jardim-vitoria', region: 'Região Sul', popular: false, lat: -23.4490, lng: -51.9270 },

  // Parques
  { name: 'Parque Avenida', slug: 'parque-avenida', region: 'Região Central', popular: false, lat: -23.4215, lng: -51.9350 },
  { name: 'Parque das Grevíleas', slug: 'parque-das-grevileas', region: 'Região Oeste', popular: false, lat: -23.4330, lng: -51.9540 },
  { name: 'Parque do Horto', slug: 'parque-do-horto', region: 'Região Norte', popular: false, lat: -23.3910, lng: -51.9290 },
  { name: 'Parque Industrial', slug: 'parque-industrial', region: 'Região Norte', popular: false, lat: -23.3900, lng: -51.9350 },
  { name: 'Parque Tarumã', slug: 'parque-taruma', region: 'Região Oeste', popular: false, lat: -23.4340, lng: -51.9550 },

  // Residenciais
  { name: 'Residencial Cidade Alta', slug: 'residencial-cidade-alta', region: 'Região Norte', popular: false, lat: -23.3945, lng: -51.9275 },
  { name: 'Residencial Cidade Nova', slug: 'residencial-cidade-nova', region: 'Região Norte', popular: false, lat: -23.3935, lng: -51.9295 },
  { name: 'Residencial Guaiapó', slug: 'residencial-guaiapo', region: 'Região Norte', popular: false, lat: -23.3890, lng: -51.9310 },
  { name: 'Residencial Ney Braga', slug: 'residencial-ney-braga', region: 'Região Norte', popular: false, lat: -23.3880, lng: -51.9330 },
  { name: 'Residencial Novo Centro', slug: 'residencial-novo-centro', region: 'Região Central', popular: false, lat: -23.4195, lng: -51.9360 },
  { name: 'Residencial Ouro Cola', slug: 'residencial-ouro-cola', region: 'Região Norte', popular: false, lat: -23.3870, lng: -51.9280 },
  { name: 'Residencial Parque das Palmeiras', slug: 'residencial-parque-das-palmeiras', region: 'Região Norte', popular: false, lat: -23.3860, lng: -51.9300 },
  { name: 'Residencial Parque Industrial', slug: 'residencial-parque-industrial', region: 'Região Norte', popular: false, lat: -23.3895, lng: -51.9340 },
  { name: 'Residencial Parque Itaipu', slug: 'residencial-parque-itaipu', region: 'Região Norte', popular: false, lat: -23.3850, lng: -51.9320 },
  { name: 'Residencial Parque Lagoa Dourada', slug: 'residencial-parque-lagoa-dourada', region: 'Região Norte', popular: false, lat: -23.3840, lng: -51.9290 },
  { name: 'Residencial Parque São Jorge', slug: 'residencial-parque-sao-jorge', region: 'Região Norte', popular: false, lat: -23.3935, lng: -51.9295 },
  { name: 'Residencial Parque São Silvestre', slug: 'residencial-parque-sao-silvestre', region: 'Região Norte', popular: false, lat: -23.3925, lng: -51.9265 },
  { name: 'Residencial Parque Tuiuti', slug: 'residencial-parque-tuiuti', region: 'Região Norte', popular: false, lat: -23.3915, lng: -51.9235 },
  { name: 'Residencial Portal das Torres', slug: 'residencial-portal-das-torres', region: 'Região Norte', popular: false, lat: -23.3905, lng: -51.9315 },
  { name: 'Residencial Recanto dos Magnatas', slug: 'residencial-recanto-dos-magnatas', region: 'Região Norte', popular: false, lat: -23.3875, lng: -51.9270 },
  { name: 'Residencial Santa Felicidade', slug: 'residencial-santa-felicidade', region: 'Região Norte', popular: false, lat: -23.3865, lng: -51.9260 },
  { name: 'Residencial Santa Helena', slug: 'residencial-santa-helena', region: 'Região Norte', popular: false, lat: -23.3855, lng: -51.9250 },
  { name: 'Residencial São Clemente', slug: 'residencial-sao-clemente', region: 'Região Norte', popular: false, lat: -23.3845, lng: -51.9280 },
  { name: 'Residencial São Domingos', slug: 'residencial-sao-domingos', region: 'Região Norte', popular: false, lat: -23.3835, lng: -51.9300 },
];

export const findNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  return neighborhoods.find(n => n.slug === slug);
};
