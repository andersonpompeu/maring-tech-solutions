import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead = ({
  title = 'Assistência Técnica Maringá - Conserto de Eletrodomésticos, TVs e Celulares',
  description = 'Assistência Técnica de Eletrodoméstico em Maringá. Conserto rápido de geladeira, máquina de lavar, fogão e micro-ondas. Atendimento ágil!',
  keywords = 'conserto de celular em Maringá, assistência técnica geladeira Maringá, conserto de TV Maringá, assistência técnica linha branca PR, conserto máquina de lavar Maringá, reparo de eletrodomésticos, assistência técnica Samsung, LG, Brastemp, Electrolux',
  canonical = 'https://assistenciatecnica.maringa.br',
}: SEOHeadProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Assistência Técnica Maringá',
    description: description,
    url: 'https://assistenciatecnica.maringa.br/',
    telephone: '+5544997398826',
    email: 'contato@assistenciatecnica.maringa.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Brasil, 3278 - Zona 01',
      addressLocality: 'Maringá',
      addressRegion: 'PR',
      postalCode: '87013-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.4205,
      longitude: -51.9331,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    image: 'https://assistenciatecnica.maringa.br/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/assistenciatecnicamaringa',
      'https://www.instagram.com/assistenciatecnicamaringa',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Assistência Técnica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Conserto de Máquinas de Lavar',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Conserto de Geladeiras',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparo de Smart TVs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Conserto de Celulares',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="author" content="Assistência Técnica Maringá" />
      <meta name="google-site-verification" content="7nGJadzW9HIUITaZYVoEpFdTk1eRGCqR9MIuDf35Bog" />
      <link rel="canonical" href={canonical} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonical}/og-image.jpg`} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${canonical}/og-image.jpg`} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Maringá" />
      <meta name="geo.position" content="-23.4205;-51.9331" />
      <meta name="ICBM" content="-23.4205, -51.9331" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
