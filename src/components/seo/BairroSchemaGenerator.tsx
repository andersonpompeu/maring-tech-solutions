import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/business-info';
import type { Neighborhood } from '@/data/neighborhoods';

interface BairroSchemaProps {
  neighborhood: Neighborhood;
  pageType: 'bairro' | 'bairro-service';
  service?: {
    title: string;
    shortTitle: string;
    slug: string;
    description: string;
    problems?: string[];
    faqs?: { question: string; answer: string }[];
  };
}

const BairroSchemaGenerator = ({ neighborhood, pageType, service }: BairroSchemaProps) => {
  const bairro = neighborhood.name;
  const bairroLat = neighborhood.lat ?? BUSINESS.geo.lat;
  const bairroLng = neighborhood.lng ?? BUSINESS.geo.lng;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.site}/#business`,
    name: BUSINESS.name,
    description: `Assistência técnica especializada no ${bairro}, Maringá-PR. Conserto de eletrodomésticos, Smart TVs e celulares com atendimento 24h e garantia.`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.site,
    image: `${BUSINESS.site}/og-image.png`,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.cep,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: bairroLat,
      longitude: bairroLng,
    },
    openingHoursSpecification: BUSINESS.hoursSpecification,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: bairroLat,
        longitude: bairroLng,
      },
      geoRadius: '3000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Serviços de Assistência Técnica no ${bairro}`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Conserto de Máquinas de Lavar no ${bairro}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Conserto de Geladeiras no ${bairro}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Reparo de Smart TVs no ${bairro}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Conserto de Celulares no ${bairro}` } },
      ],
    },
  };

  // Breadcrumb
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: BUSINESS.site },
    { '@type': 'ListItem', position: 2, name: 'Bairros', item: `${BUSINESS.site}/bairros` },
    { '@type': 'ListItem', position: 3, name: bairro, item: `${BUSINESS.site}/bairros/${neighborhood.slug}` },
  ];

  if (service) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 4,
      name: service.title,
      item: `${BUSINESS.site}/bairros/${neighborhood.slug}/${service.slug}`,
    });
  }

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': '#breadcrumb',
    itemListElement: breadcrumbItems,
  };

  // WebPage
  const pageUrl = service
    ? `${BUSINESS.site}/bairros/${neighborhood.slug}/${service.slug}`
    : `${BUSINESS.site}/bairros/${neighborhood.slug}`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    name: service
      ? `${service.title} no ${bairro} - Maringá`
      : `Assistência Técnica no ${bairro} - Maringá`,
    description: service
      ? service.description
      : `Assistência técnica especializada no ${bairro}, Maringá-PR. Conserto de eletrodomésticos, Smart TVs e celulares.`,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: BUSINESS.name,
      url: BUSINESS.site,
    },
    breadcrumb: { '@id': '#breadcrumb' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.page-description'],
    },
  };

  // Organization
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS.site}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.site,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: localBusiness.address,
    contactPoint: localBusiness.contactPoint,
  };

  const schemas: object[] = [localBusiness, breadcrumbList, webPage, organization];

  // Service schema (for service pages)
  if (service) {
    const serviceSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': '#service',
      name: `${service.title} no ${bairro}, Maringá`,
      description: service.description,
      provider: { '@id': `${BUSINESS.site}/#business` },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: bairroLat,
          longitude: bairroLng,
        },
        geoRadius: '3000',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'WhatsApp',
        serviceUrl: `https://wa.me/${BUSINESS.whatsapp}`,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BUSINESS.aggregateRating.ratingValue,
        reviewCount: BUSINESS.aggregateRating.reviewCount,
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Maria S.' },
          reviewRating: { '@type': 'Rating', ratingValue: 5 },
          reviewBody: `Excelente serviço de ${service.shortTitle.toLowerCase()} no ${bairro}! Profissional e rápido.`,
          datePublished: '2025-10-15',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Carlos R.' },
          reviewRating: { '@type': 'Rating', ratingValue: 5 },
          reviewBody: `Recomendo a assistência técnica no ${bairro}. Atendimento 24h e preço justo.`,
          datePublished: '2025-11-20',
        },
      ],
    };

    if (service.problems) {
      serviceSchema.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        name: `${service.title} no ${bairro}`,
        itemListElement: service.problems.map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `${p} - ${bairro}` },
        })),
      };
    }

    schemas.push(serviceSchema);

    // FAQ schema
    if (service.faqs && service.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }
  }

  return (
    <Helmet>
      {/* Geo meta tags */}
      <meta name="geo.position" content={`${bairroLat};${bairroLng}`} />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content={`${bairro}, Maringá`} />
      <meta name="ICBM" content={`${bairroLat}, ${bairroLng}`} />
      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default BairroSchemaGenerator;
