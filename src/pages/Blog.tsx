import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { articles } from '@/data/articles';
import { BUSINESS } from '@/data/business-info';

const Blog = () => {
  const canonical = `${BUSINESS.site}/blog`;

  return (
    <>
      <Helmet>
        <title>Blog - Assistência Técnica Maringá | Dicas e Artigos</title>
        <meta
          name="description"
          content="Artigos e dicas sobre eletrodomésticos, manutenção elétrica e serviços técnicos em Maringá. Informação de qualidade."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Blog
          </h1>

          <div className="grid gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {article.heading}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {article.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Blog;
