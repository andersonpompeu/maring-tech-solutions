import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { findNeighborhoodBySlug, neighborhoods } from '@/data/neighborhoods';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BairroHeroSection from '@/components/bairro/BairroHeroSection';
import BairroServicesSection from '@/components/bairro/BairroServicesSection';
import BairroDifferentialsSection from '@/components/bairro/BairroDifferentialsSection';
import BairroGallerySection from '@/components/bairro/BairroGallerySection';
import BairroTestimonialsSection from '@/components/bairro/BairroTestimonialsSection';
import BairroTeamSection from '@/components/bairro/BairroTeamSection';
import BairroContactSection from '@/components/bairro/BairroContactSection';
import BairroNeighborhoodsSection from '@/components/bairro/BairroNeighborhoodsSection';

const BairroPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = slug ? findNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return <Navigate to="/bairros" replace />;
  }

  const bairro = neighborhood.name;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `TechFix Maringá - Assistência Técnica no ${bairro}`,
    "description": `Assistência técnica especializada no ${bairro}, Maringá-PR. Conserto de eletrodomésticos, Smart TVs e celulares com atendimento rápido e garantia.`,
    "areaServed": {
      "@type": "Place",
      "name": `${bairro}, Maringá-PR`
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Maringá",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+554499999999",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Serviços de Assistência Técnica no ${bairro}`,
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Conserto de Máquinas de Lavar no ${bairro}` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Conserto de Geladeiras no ${bairro}` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Reparo de Smart TVs no ${bairro}` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Conserto de Celulares no ${bairro}` } },
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Assistência Técnica no ${bairro} - Maringá | Conserto de Eletrodomésticos, TVs e Celulares`}</title>
        <meta
          name="description"
          content={`Assistência técnica especializada no ${bairro}, Maringá-PR. Conserto de geladeiras, máquinas de lavar, fogões, Smart TVs e celulares. Garantia de 90 dias. Orçamento grátis!`}
        />
        <meta
          name="keywords"
          content={`assistência técnica ${bairro} Maringá, conserto eletrodomésticos ${bairro}, reparo geladeira ${bairro}, conserto TV ${bairro}, conserto celular ${bairro}, técnico ${bairro} Maringá`}
        />
        <link rel="canonical" href={`https://techfixmaringa.com.br/bairros/${neighborhood.slug}`} />
        <meta property="og:title" content={`Assistência Técnica no ${bairro} - Maringá`} />
        <meta property="og:description" content={`Conserto de eletrodomésticos, TVs e celulares no ${bairro}, Maringá-PR. Orçamento grátis!`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <BairroHeroSection bairro={bairro} />
          <BairroServicesSection bairro={bairro} />
          <BairroDifferentialsSection bairro={bairro} />
          <BairroGallerySection bairro={bairro} />
          <BairroTestimonialsSection bairro={bairro} />
          <BairroTeamSection bairro={bairro} />
          <BairroContactSection bairro={bairro} />
          <BairroNeighborhoodsSection currentBairro={bairro} />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default BairroPage;
