

## Plano: Novas Páginas de Serviço por Bairro com Design Replica da Home

### Resumo

Criar **10 novos serviços** no sistema de bairros, gerando automaticamente **670 novas landing pages** (10 servicos x 67 bairros). Cada pagina tera o **mesmo layout visual da pagina inicial** (Hero com slider, Servicos, Diferenciais, Sobre, Galeria, Depoimentos, Equipe, Contato, Bairros e FAQ), mas com conteudo adaptado ao H1 e tema especifico.

### Os 10 novos servicos e seus H1s

| # | Slug | H1 (adaptado por bairro) |
|---|------|--------------------------|
| 1 | `motor-geladeira-electrolux-preco` | Motor de Geladeira Electrolux: Preco, Troca e Conserto Especializado |
| 2 | `motor-geladeira-electrolux-original` | Motor Geladeira Electrolux Original com Instalacao Profissional |
| 3 | `motor-geladeira-fazendo-barulho` | Motor da Geladeira Fazendo Barulho? Veja Como Resolver |
| 4 | `motor-geladeira-electrolux-barulho` | Motor de Geladeira Electrolux Fazendo Barulho: Causas e Solucao |
| 5 | `conserto-geladeira-perto-de-mim` | Conserto de Geladeiras Perto de Mim com Atendimento Rapido |
| 6 | `refrigeracao-maringa` | Refrigeracao em Maringa: Conserto de Geladeira com Garantia |
| 7 | `conserto-geladeira-maringa` | Conserto de Geladeira em Maringa -- Atendimento no Mesmo Dia |
| 8 | `conserto-purificador-de-agua` | Conserto de Purificador de Agua Perto de Mim com Tecnico Especializado |
| 9 | `motor-geladeira-electrolux-conserto-maringa` | Motor de Geladeira Electrolux com Conserto em Maringa |
| 10 | `assistencia-tecnica-refrigeracao-maringa` | Assistencia Tecnica em Refrigeracao em Maringa e Regiao |

### Arquitetura da Solucao

**Abordagem**: Criar um novo componente de pagina `BairroServiceHomePage.tsx` que replica a estrutura da Home, reutilizando os componentes existentes com conteudo dinâmico.

```text
Rota: /bairros/:slug/:serviceSlug
                |
                v
    BairroServicePage.tsx (existente)
        detecta se o servico tem flag "homeLayout"
                |
         Sim -> BairroServiceHomePage (novo)
         Nao -> Layout atual (mantido)
```

### Detalhes Tecnicos

#### 1. Atualizar `src/data/bairro-services.ts`

- Expandir a interface `BairroService` com campo opcional `homeLayout: boolean`
- Adicionar os 10 novos objetos de servico com:
  - `homeLayout: true`
  - H1 dinamico com nome do bairro
  - Meta descricao otimizada (max 155 chars)
  - Problemas, marcas, FAQs e descricoes contextuais por tema
  - Icone `Refrigerator` (ou `Droplets` para purificador)

#### 2. Criar `src/components/bairro/BairroServiceHomePage.tsx`

Novo componente que replica a estrutura da Index.tsx, reutilizando os componentes existentes da home com adaptacoes de conteudo:

- **HeroSection** adaptado: H1 dinamico do servico + nome do bairro, sem slider (titulo fixo)
- **ServicesSection**: reutilizado como esta (mostra todos os servicos)
- **DifferentialsSection**: reutilizado como esta
- **AboutSection** adaptado: texto contextualizado ao tema do servico
- **GallerySection**: reutilizado
- **TestimonialsSection**: reutilizado
- **TeamSection**: reutilizado
- **ContactSection** adaptado: com contexto do bairro (como ja feito no BairroContactSection)
- **NeighborhoodsSection**: reutilizado
- **HomeFAQSection** adaptado: FAQs especificas do servico

#### 3. Atualizar `src/pages/BairroServicePage.tsx`

- Verificar `service.homeLayout`
- Se `true`, renderizar `BairroServiceHomePage` em vez do layout atual
- Se `false`, manter o layout existente sem alteracoes

#### 4. Atualizar `public/sitemap.xml`

- Adicionar as 670 novas URLs (10 servicos x 67 bairros)
- Manter `changefreq: monthly`, `priority: 0.7`

### Resultado Final

- **670 novas landing pages** geradas automaticamente
- Design identico a pagina inicial, com conteudo SEO-otimizado por tema
- H1 unico por pagina combinando palavra-chave + nome do bairro
- Meta descricoes dentro do limite de 155 caracteres
- Sem quebra das paginas de servico existentes (mantidas com layout atual)
- Sitemap atualizado com todas as novas URLs

