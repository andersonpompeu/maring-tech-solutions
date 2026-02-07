export interface Neighborhood {
  name: string;
  slug: string;
  region: string;
  popular: boolean;
}

export const neighborhoods: Neighborhood[] = [
  { name: 'Centro', slug: 'centro', region: 'Região Central', popular: true },
  { name: 'Zona 01', slug: 'zona-01', region: 'Região Central', popular: true },
  { name: 'Zona 02', slug: 'zona-02', region: 'Região Central', popular: true },
  { name: 'Zona 03', slug: 'zona-03', region: 'Região Central', popular: true },
  { name: 'Zona 04', slug: 'zona-04', region: 'Região Central', popular: false },
  { name: 'Zona 05', slug: 'zona-05', region: 'Região Sul', popular: true },
  { name: 'Zona 06', slug: 'zona-06', region: 'Região Sul', popular: false },
  { name: 'Zona 07', slug: 'zona-07', region: 'Região Oeste', popular: true },
  { name: 'Zona 08', slug: 'zona-08', region: 'Região Norte', popular: false },
  { name: 'Zona 10', slug: 'zona-10', region: 'Região Norte', popular: false },
  { name: 'Vila Operária', slug: 'vila-operaria', region: 'Região Sul', popular: true },
  { name: 'Jardim Alvorada', slug: 'jardim-alvorada', region: 'Região Sul', popular: true },
  { name: 'Vila Morangueira', slug: 'vila-morangueira', region: 'Região Leste', popular: true },
  { name: 'Jardim Universitário', slug: 'jardim-universitario', region: 'Região Leste', popular: true },
  { name: 'Jardim Aclimação', slug: 'jardim-aclimacao', region: 'Região Sul', popular: false },
  { name: 'Parque das Laranjeiras', slug: 'parque-das-laranjeiras', region: 'Região Sul', popular: false },
  { name: 'Jardim Mandacaru', slug: 'jardim-mandacaru', region: 'Região Norte', popular: false },
  { name: 'Parque Industrial', slug: 'parque-industrial', region: 'Região Norte', popular: false },
  { name: 'Jardim Imperial', slug: 'jardim-imperial', region: 'Região Oeste', popular: false },
  { name: 'Parque das Grevíleas', slug: 'parque-das-grevileas', region: 'Região Oeste', popular: false },
  { name: 'Jardim Olímpico', slug: 'jardim-olimpico', region: 'Região Oeste', popular: false },
  { name: 'Jardim Real', slug: 'jardim-real', region: 'Região Norte', popular: false },
  { name: 'Parque Avenida', slug: 'parque-avenida', region: 'Região Central', popular: false },
  { name: 'Vila Esperança', slug: 'vila-esperanca', region: 'Região Sul', popular: false },
];

export const findNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  return neighborhoods.find(n => n.slug === slug);
};
