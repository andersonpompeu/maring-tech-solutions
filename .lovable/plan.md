
# Paginas de Sub-Servicos de Maquina de Lavar com Estrategia de Conteudo On-Page

## Objetivo

Criar 6 sub-paginas de servico para Maquina de Lavar (`/maquina-de-lavar/:slug`), replicando a arquitetura de Geladeira (`geladeira-services.ts` + `GeladeiraServicePage.tsx`), com conteudo otimizado para alivio de ansiedade, autoridade tecnica e headings H1-H6 otimizados para CTR e relevancia geografica.

## Estrategia de Conteudo Aplicada

Cada pagina seguira as diretrizes de psicologia e tecnica:

- **H1**: Palavra-chave principal + localizacao (ex: "Conserto de Painel Eletronico de Maquina de Lavar em Maringa")
- **H2**: Topicos de beneficio e urgencia (ex: "Por que sua maquina parou de centrifugar?", "Sinais de que voce precisa de reparo")
- **H3**: Detalhamento tecnico (ex: "Servicos Incluidos", "Problemas no motor")
- **Subtitulos Hero**: Linguagem empática focada no problema urgente do usuario (roupa acumulando, comida estragando)
- **Descricoes**: Tom direto, transmitindo autoridade tecnica e facilitando o contato

## Sub-servicos a Criar

| Servico | Slug | H1 Otimizado |
|---------|------|-------------|
| Manutencao de Lava e Seca | `manutencao-de-lava-e-seca` | Manutencao de Lava e Seca em Maringa |
| Manutencao de Maquina de Lavar | `manutencao-de-maquina-de-lavar` | Manutencao de Maquina de Lavar em Maringa |
| Conserto de Painel Eletronico | `conserto-de-painel-eletronico-maquina-de-lavar` | Conserto de Painel Eletronico de Maquina de Lavar em Maringa |
| Assistencia Tecnica | `assistencia-tecnica-maquina-de-lavar` | Assistencia Tecnica de Maquina de Lavar em Maringa |
| Conserto de Secadora | `conserto-de-secadora` | Conserto de Secadora de Roupas em Maringa |
| Problema na Centrifugacao | `problema-na-centrifugacao` | Conserto de Centrifugacao de Maquina de Lavar em Maringa |

Cada servico incluira: heroTitle, heroSubtitle (empatico/urgente), introDescription, 6 detalhes de servico, marcas atendidas, 6 sinais de defeito, 4 FAQs com precos e metaTitle/metaDescription/metaKeywords otimizados.

## Detalhes Tecnicos

### Arquivos a criar:

1. **`src/data/maquina-de-lavar-services.ts`** -- Dados dos 6 sub-servicos com interface `MaquinaDeLavarService` identica a `GeladeiraService`, conteudo completo de SEO com linguagem empática (alivio de ansiedade) e palavras-chave geolocalizadas.

2. **`src/pages/MaquinaDeLavarServicePage.tsx`** -- Pagina dinamica identica em layout ao `GeladeiraServicePage.tsx`:
   - Breadcrumb: Inicio > Eletrodomesticos > Maquina de Lavar > [Servico]
   - Hero com gradiente, icone, subtitle empatico e CTA WhatsApp
   - Secao intro com H2 otimizado + detalhes/servicos incluidos
   - Carrossel de marcas (BrandsCarousel)
   - CTA Banner intermediario
   - Vantagens (5 cards)
   - Sinais de defeito com icone AlertTriangle
   - CTA Banner 2
   - FAQ com Accordion + schema FAQPage JSON-LD
   - CTA final com WhatsApp + telefone
   - Schemas JSON-LD: Service + FAQPage

### Arquivos a modificar:

3. **`src/App.tsx`** -- Adicionar rota `/maquina-de-lavar/:slug` apontando para `MaquinaDeLavarServicePage`

4. **`src/pages/MaquinaDeLavar.tsx`** -- Atualizar os 6 cards de `heroServices` para que "Saiba Mais" aponte para `/maquina-de-lavar/:slug` em vez do WhatsApp generico. Adicionar propriedade `slug` a cada item e transformar o link em `<Link to={...}>`.

### Schemas JSON-LD por pagina:
- `Service` com `provider` (LocalBusiness com dados reais do BUSINESS)
- `FAQPage` com perguntas especificas de cada sub-servico

### Paginas geradas:
- 6 paginas em `/maquina-de-lavar/:slug`
- Todas com SEO completo (meta tags, canonical, Open Graph, FAQPage schema, Service schema)
- WhatsApp com mensagem personalizada por servico
- Titulos H1-H3 seguindo a diretriz de conteudo on-page
