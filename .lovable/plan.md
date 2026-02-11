
# Corrigir Meta Tags Estaticas no index.html

## Problema
O arquivo `index.html` ainda contem meta tags antigas com "TechFix Maringa" e uma imagem OG generica do Lovable. Crawlers de redes sociais (Facebook, WhatsApp, Telegram) e motores de busca que nao executam JavaScript (Bing, DuckDuckGo) leem APENAS essas tags estaticas, resultando em previews de link incorretos.

O `react-helmet-async` funciona corretamente para o Google (que executa JS), mas serve apenas como sobrescrita dinamica para navegadores. As tags do `index.html` sao o fallback universal.

## Solucao

### 1. Atualizar index.html com meta tags corretas
- Corrigir titulo para "Assistencia Tecnica Maringa"
- Atualizar description com a descricao padrao do negocio (max 155 caracteres)
- Corrigir author para "Assistencia Tecnica Maringa"
- Adicionar canonical: `https://assistenciatecnica.maringa.br`
- Atualizar OG tags (og:title, og:description, og:url, og:image)
- Atualizar Twitter cards com dados corretos
- Remover referencia "@TechFixMaringa"

### 2. Consistencia de dados
- Usar os mesmos valores do `BUSINESS` em `src/data/business-info.ts`
- Manter a imagem OG apontando para `https://assistenciatecnica.maringa.br/og-image.jpg`

## Observacao importante
Isso NAO resolve o problema de paginas internas (ex: `/blog/conserto-de-geladeira`) terem previews personalizados em redes sociais. Para isso seria necessario SSR/SSG, que nao e suportado neste stack (Vite + React SPA). Porem, com as tags do index.html corrigidas, pelo menos TODAS as paginas terao um preview consistente e correto com os dados da marca principal, o que e muito melhor do que o cenario atual com "TechFix Maringa".

## Arquivo a editar
- `index.html`
