import fs from 'fs';
import path from 'path';

// Define the base URL
const BASE_URL = 'https://assistenciatecnica.maringa.br';

// Define static routes
const staticRoutes = [
    '/',
    '/eletrodomesticos',
    '/maquina-de-lavar',
    '/geladeira',
    '/fogao',
    '/micro-ondas',
    '/televisores',
    '/celulares',
    '/bairros',
    '/termos-de-uso',
    '/politica-de-privacidade',
    '/servicos-por-bairro',
    '/blog',
];

// Helper to extract slugs from TS files using Regex
function extractSlugs(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const slugRegex = /slug:\s*'([^']+)'/g;
        const slugs = [];
        let match;
        while ((match = slugRegex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return slugs;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

// Generate sitemap XML content
function generateSitemap() {
    const sourceDir = path.resolve('src/data');

    // Neighborhoods
    const neighborhoodSlugs = extractSlugs(path.join(sourceDir, 'neighborhoods.ts'));
    const neighborhoodUrls = neighborhoodSlugs.map(slug => `${BASE_URL}/bairros/${slug}`);

    // Blog Posts
    const blogSlugs = extractSlugs(path.join(sourceDir, 'articles.ts'));
    const blogUrls = blogSlugs.map(slug => `${BASE_URL}/blog/${slug}`);

    // Services (assuming standard services have sub-services)
    // Need to identify which service file corresponds to which parent route.
    // Based on App.tsx:
    // /maquina-de-lavar/:slug -> maquina-de-lavar-services.ts
    // /geladeira/:slug -> geladeira-services.ts
    // /fogao/:slug -> fogao-services.ts
    // /micro-ondas/:slug -> microondas-services.ts
    // /bairros/:slug/:serviceSlug -> bairro-services.ts (This is nested, might need careful handling but let's assume flat for now or skip)

    const serviceFiles = [
        { file: 'maquina-de-lavar-services.ts', route: '/maquina-de-lavar' },
        { file: 'geladeira-services.ts', route: '/geladeira' },
        { file: 'fogao-services.ts', route: '/fogao' },
        { file: 'microondas-services.ts', route: '/micro-ondas' },
    ];

    let serviceUrls = [];
    serviceFiles.forEach(({ file, route }) => {
        const slugs = extractSlugs(path.join(sourceDir, file));
        const urls = slugs.map(slug => `${BASE_URL}${route}/${slug}`);
        serviceUrls = [...serviceUrls, ...urls];
    });

    // Combine all URLs
    const allUrls = [
        ...staticRoutes.map(route => route === '/' ? BASE_URL : `${BASE_URL}${route}`),
        ...neighborhoodUrls,
        ...blogUrls,
        ...serviceUrls
    ];

    // Create XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === BASE_URL ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
}

// Write to public/sitemap.xml
const sitemapContent = generateSitemap();
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('Sitemap generated successfully!');
console.log(`Total URLs: ${sitemapContent.match(/<url>/g).length}`);
