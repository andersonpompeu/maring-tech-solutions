import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead = ({
  title = 'TechFix Maringá - Assistência Técnica Premium | Conserto de Eletrodomésticos, TVs e Celulares',
  description = 'Assistência técnica especializada em Maringá-PR. Conserto de máquinas de lavar, geladeiras, fogões, Smart TVs e celulares. Garantia de 90 dias. Orçamento grátis pelo WhatsApp!',
  keywords = 'conserto de celular em Maringá, assistência técnica geladeira Maringá, conserto de TV Maringá, assistência técnica linha branca PR, conserto máquina de lavar Maringá, reparo de eletrodomésticos, assistência técnica Samsung, LG, Brastemp, Electrolux',
  canonical = 'https://techfixmaringa.com.br',
}: SEOHeadProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TechFix Maringá',
    description: description,
    url: canonical,
    telephone: '+554499999999',
    email: 'contato@techfixmaringa.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Brasil, 1234 - Centro',
      addressLocality: 'Maringá',
      addressRegion: 'PR',
      postalCode: '87013-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.4206,
      longitude: -51.9386,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    priceRange: '$$',
    image: 'https://techfixmaringa.com.br/og-image.jpg',
    sameAs: [
      'https://facebook.com/techfixmaringa',
      'https://instagram.com/techfixmaringa',
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
      <meta name="robots" content="index, follow" />
      <meta name="author" content="TechFix Maringá" />
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
      <meta name="geo.position" content="-23.4206;-51.9386" />
      <meta name="ICBM" content="-23.4206, -51.9386" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
