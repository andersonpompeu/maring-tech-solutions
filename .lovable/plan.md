

# Paginas de Sub-Servicos de Maquina de Lavar por Bairro

## Objetivo

Adicionar os 6 sub-servicos de maquina de lavar ao sistema de bairros existente, gerando automaticamente **67 x 6 = 402 novas paginas** com URLs como:

- `/bairros/zona-01/manutencao-de-lava-e-seca`
- `/bairros/jardim-alvorada/conserto-de-painel-eletronico-maquina-de-lavar`
- `/bairros/centro/conserto-de-secadora`

## Como funciona

O sistema de bairros ja possui a infraestrutura pronta (`BairroServicePage.tsx` renderiza `/bairros/:slug/:serviceSlug`). Basta adicionar os 6 sub-servicos ao array `bairroServices` em `src/data/bairro-services.ts`. Nenhuma nova pagina ou rota precisa ser criada -- o sistema dinamico faz tudo automaticamente.

## Sub-servicos a adicionar

| Servico | Slug |
|---------|------|
| Manutencao de Lava e Seca | `manutencao-de-lava-e-seca` |
| Manutencao de Maquina de Lavar | `manutencao-de-maquina-de-lavar` |
| Conserto de Painel Eletronico | `conserto-de-painel-eletronico-maquina-de-lavar` |
| Assistencia Tecnica de Maquina de Lavar | `assistencia-tecnica-maquina-de-lavar` |
| Conserto de Secadora | `conserto-de-secadora` |
| Problema na Centrifugacao | `problema-na-centrifugacao` |

Cada um tera: titulo localizado, descricao com nome do bairro, descricao longa, 8 problemas comuns, marcas atendidas e 4 FAQs contextualizadas com o bairro.

## Detalhes Tecnicos

### Arquivo a modificar:

**`src/data/bairro-services.ts`** -- Adicionar 6 novos objetos ao array `bairroServices`, seguindo a interface `BairroService` existente (com `slug`, `title`, `shortTitle`, `icon`, `brands`, `problems`, `description(bairro)`, `longDescription(bairro)`, `faqs(bairro)`).

### Arquivos a atualizar:

**`src/pages/ServicoPorBairro.tsx`** -- A pagina de indice ja lista todos os `bairroServices` dinamicamente, entao mostrara automaticamente os novos servicos. Porem, o grid atual usa `lg:grid-cols-6` que ficara apertado com 12 servicos. Ajustar para `lg:grid-cols-4` para acomodar os 12 itens.

**`public/sitemap.xml`** -- Adicionar as 402 novas URLs ao sitemap para garantir indexacao.

### Impacto automatico (sem alteracoes necessarias):

- `BairroServicePage.tsx` -- ja renderiza qualquer servico encontrado em `bairroServices`
- `BairroPage.tsx` -- ja lista todos os servicos disponiveis no bairro
- `BairroSchemaGenerator.tsx` -- ja gera schemas para qualquer servico passado
- Rota `/bairros/:slug/:serviceSlug` -- ja existe em `App.tsx`

### Resultado final:

- 402 novas landing pages SEO (67 bairros x 6 sub-servicos)
- Total de servicos por bairro: 12 (6 existentes + 6 novos)
- Total de paginas de bairro-servico: ~804 (67 x 12)
- Sitemap atualizado com todas as URLs

