import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { findNeighborhoodBySlug, neighborhoods } from '@/data/neighborhoods';
import { BUSINESS } from '@/data/business-info';
import { noBairro } from '@/lib/utils';
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
import BairroSchemaGenerator from '@/components/seo/BairroSchemaGenerator';

const BairroPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = slug ? findNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return <Navigate to="/bairros" replace />;
  }

  const bairro = neighborhood.name;

  return (
    <>
      <Helmet>
        <title>{`Assistência Técnica ${noBairro(bairro)} - Maringá | Conserto de Eletrodomésticos, TVs e Celulares`}</title>
        <meta
          name="description"
          content={`Assistência técnica ${noBairro(bairro)}, Maringá-PR. Conserto de geladeiras, máquinas de lavar, fogões, TVs e celulares. Garantia de 90 dias.`}
        />
        <meta
          name="keywords"
          content={`assistência técnica ${bairro} Maringá, conserto eletrodomésticos ${bairro}, reparo geladeira ${bairro}, conserto TV ${bairro}, conserto celular ${bairro}, técnico ${bairro} Maringá`}
        />
        <link rel="canonical" href={`${BUSINESS.site}/bairros/${neighborhood.slug}`} />
        <meta property="og:title" content={`Assistência Técnica ${noBairro(bairro)} - Maringá`} />
        <meta property="og:description" content={`Conserto de eletrodomésticos, TVs e celulares ${noBairro(bairro)}, Maringá-PR. Orçamento grátis!`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BairroSchemaGenerator neighborhood={neighborhood} pageType="bairro" />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <BairroHeroSection bairro={bairro} />
          <BairroServicesSection bairro={bairro} bairroSlug={neighborhood.slug} />
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