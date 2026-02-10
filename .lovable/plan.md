
# Schema SEO Avancado com Dados Reais do Negocio

## Dados do Negocio (fornecidos pelo cliente)

| Campo | Valor |
|-------|-------|
| Telefone/WhatsApp | +5544997398826 |
| E-mail | contato@hassistenciatecnica.maringa.br |
| Site | https://assistenciatecnica.maringa.br/ |
| Endereco (NAP) | Av. Brasil, 3278 - Zona 01, Maringa - PR, CEP 87013-000 |
| Horario | 24 horas |

---

## Escopo das Mudancas

### 1. Criar constante centralizada de dados do negocio

Criar `src/data/business-info.ts` com todos os dados do negocio em um unico lugar, evitando duplicacao e facilitando manutencao futura:

```text
PHONE: +5544997398826
PHONE_DISPLAY: (44) 99739-8826
WHATSAPP: 5544997398826
EMAIL: contato@hassistenciatecnica.maringa.br
SITE: https://assistenciatecnica.maringa.br/
ADDRESS: Av. Brasil, 3278 - Zona 01
CITY: Maringa
STATE: PR
CEP: 87013-000
HOURS: 24 horas
```

### 2. Atualizar coordenadas e CEP nos bairros (`neighborhoods.ts`)

Expandir a interface `Neighborhood` com `lat`, `lng` e `cep`, adicionando coordenadas reais de Maringa para os 67 bairros.

### 3. Criar componente `BairroSchemaGenerator.tsx`

Componente centralizado que gera schemas JSON-LD multi-camada:

- **LocalBusiness**: com `geo` (lat/lng do bairro), `telephone` real (+5544997398826), `email`, `url`, `address` completo (Av. Brasil, 3278), `openingHoursSpecification` (24h), `priceRange`
- **WebPage**: com `name`, `url`, `isPartOf` (WebSite), `breadcrumb`, `speakable`
- **BreadcrumbList**: hierarquia completa (Inicio > Bairros > Bairro > Servico)
- **Service** (nas paginas de servico): com `areaServed` usando `GeoCircle`, `availableChannel` (WhatsApp real), `aggregateRating`, `review`
- **FAQPage**: vinculado ao conteudo de perguntas frequentes existente
- **Organization**: com `sameAs`, `logo`, `contactPoint` (telefone real e email real)

### 4. Atualizar `BairroPage.tsx`

- Substituir schema inline pelo `BairroSchemaGenerator`
- Adicionar meta tags geo dinamicas (`geo.position`, `geo.region`, `ICBM`, `geo.placename`)
- Atualizar telefone de `+554499999999` para `+5544997398826`

### 5. Atualizar `BairroServicePage.tsx`

- Substituir schema inline pelo `BairroSchemaGenerator`
- Adicionar meta tags geo dinamicas
- Atualizar telefone no schema

### 6. Atualizar WhatsApp e telefone em TODOS os arquivos

Substituir o numero placeholder `5544999999999` pelo numero real `5544997398826` em todos os 24 arquivos que o utilizam, incluindo:

- Componentes de contato (`ContactSection`, `BairroContactSection`, `FloatingButtons`)
- Paginas de servico (`Fogao`, `Geladeira`, `Microondas`, `MaquinaDeLavar`, `Celulares`, `Televisores`, `Eletrodomesticos`)
- Paginas de servico por bairro (`BairroServicePage`, `FogaoServicePage`, `GeladeiraServicePage`, `MicroondasServicePage`)
- Componentes de bairro (`BairroServicesSection`, `BairroHeroSection`)
- Secao de bairros (`NeighborhoodsSection`)
- Pagina de listagem (`ServicoPorBairro`)
- Header e Footer

O numero exibido sera formatado como `(44) 99739-8826`.

## Detalhes Tecnicos

### Arquivos a criar:
- `src/data/business-info.ts` - constantes centralizadas do negocio
- `src/components/seo/BairroSchemaGenerator.tsx` - gerador de schema multi-camada

### Arquivos a modificar:
- `src/data/neighborhoods.ts` - adicionar lat, lng, cep aos 67 bairros
- `src/pages/BairroPage.tsx` - usar BairroSchemaGenerator + meta geo
- `src/pages/BairroServicePage.tsx` - usar BairroSchemaGenerator + meta geo
- ~24 arquivos com substituicao do numero de WhatsApp/telefone placeholder pelo real

### Exemplo de schema gerado (BairroServicePage):

```text
LocalBusiness:
  name: "Assistencia Tecnica Maringa"
  telephone: "+5544997398826"
  email: "contato@hassistenciatecnica.maringa.br"
  url: "https://assistenciatecnica.maringa.br/"
  address: Av. Brasil, 3278 - Zona 01, Maringa-PR, 87013-000
  geo: lat/lng do bairro especifico
  openingHours: Mo-Su 00:00-23:59 (24h)
  areaServed: GeoCircle com raio de 3km do bairro

WebPage:
  url canonica da pagina
  breadcrumb vinculado
  speakable: h1 + descricao

BreadcrumbList:
  Inicio > Bairros > [Bairro] > [Servico]

Service:
  provider -> LocalBusiness
  areaServed -> GeoCircle do bairro
  availableChannel -> WhatsApp (+5544997398826)
  aggregateRating: 4.9 / 127 reviews
```

### Impacto SEO esperado:
- Rich snippets com breadcrumbs e estrelas no Google
- Presenca no Google Maps / Local Pack com NAP consistente
- Sinais de geolocalizacao precisos por bairro
- Horario 24h destacado nos resultados de busca
- Autoridade topica com WebPage + Organization + Service interligados
