export const BUSINESS = {
  name: 'Assistência Técnica Maringá',
  phone: '+5544997398826',
  phoneDisplay: '(44) 99739-8826',
  whatsapp: '5544997398826',
  email: 'contato@hassistenciatecnica.maringa.br',
  site: 'https://assistenciatecnica.maringa.br',
  address: {
    street: 'Av. Brasil, 3278 - Zona 01',
    city: 'Maringá',
    state: 'PR',
    cep: '87013-000',
    country: 'BR',
    full: 'Av. Brasil, 3278 - Zona 01, Maringá - PR, 87013-000',
  },
  hours: '24 horas',
  hoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  geo: {
    lat: -23.4205,
    lng: -51.9331,
  },
  priceRange: '$$',
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '127',
  },
} as const;
