

# Plano: Aumentar Proporção Texto/HTML de 5.71% para +15%

## Problema
A proporção texto/HTML da pagina inicial esta em 5.71%, muito abaixo do minimo recomendado de 15%. Isso ocorre porque as secoes atuais usam cards com textos curtos e muito markup HTML (classes Tailwind, SVGs de icones, divs decorativos).

## Estrategia
Adicionar blocos de conteudo textual rico e relevante para SEO na pagina inicial, sem prejudicar o design visual atual. As novas secoes serao inseridas entre as existentes para manter o fluxo natural.

## Alteracoes Planejadas

### 1. Nova secao "Sobre Nos" (AboutSection)
- Inserir entre DifferentialsSection e GallerySection
- Paragrafos descritivos sobre a empresa, historia, missao e area de atuacao em Maringa
- Aproximadamente 250-300 palavras de conteudo relevante
- Uso de tags semanticas (article, p, strong, em)
- Palavras-chave naturais: assistencia tecnica, Maringa, conserto de eletrodomesticos

### 2. Nova secao FAQ na pagina inicial (HomeFAQSection)
- Inserir apos NeighborhoodsSection e antes do Footer
- 8-10 perguntas frequentes com respostas detalhadas
- Schema markup FAQ (JSON-LD) para rich snippets no Google
- Aproximadamente 400-500 palavras de conteudo puro
- Uso de Accordion para UX

### 3. Expandir descricoes existentes
- **ServicesSection**: adicionar um paragrafo introdutorio mais longo antes do grid de cards
- **DifferentialsSection**: expandir as descricoes de cada diferencial com mais texto
- **TeamSection**: adicionar paragrafo contextual sobre a equipe e certificacoes
- **TestimonialsSection**: adicionar texto introdutorio mais rico
- **GallerySection**: adicionar paragrafo descritivo sobre o processo de trabalho

### 4. Nova secao "Marcas e Especialidades" com texto rico
- Substituir ou complementar o BrandsCarousel com uma secao textual sobre as marcas atendidas
- Descricoes por categoria de produto (linha branca, eletronicos, celulares)
- Aproximadamente 200 palavras adicionais

## Secoes Tecnicas

### Arquivos a criar
- `src/components/AboutSection.tsx` - Secao institucional com texto rico
- `src/components/HomeFAQSection.tsx` - FAQ com accordion e schema JSON-LD

### Arquivos a editar
- `src/pages/Index.tsx` - Importar e posicionar as novas secoes
- `src/components/ServicesSection.tsx` - Expandir texto introdutorio
- `src/components/DifferentialsSection.tsx` - Expandir descricoes dos diferenciais
- `src/components/TeamSection.tsx` - Adicionar paragrafo contextual
- `src/components/TestimonialsSection.tsx` - Expandir texto introdutorio
- `src/components/GallerySection.tsx` - Adicionar paragrafo descritivo

### Estimativa de texto adicionado
- AboutSection: ~300 palavras
- HomeFAQSection: ~500 palavras
- Expansoes nas secoes existentes: ~300 palavras
- **Total: ~1.100 palavras adicionais de conteudo puro**

Isso deve elevar a proporcao texto/HTML para acima de 15%, mantendo o conteudo 100% relevante para SEO local e a experiencia do usuario intacta.
