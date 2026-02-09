
# Redesign da Secao "Sobre o Servico" nas Paginas de Bairro

## Objetivo
Modernizar a secao "Sobre o Servico" presente nas paginas de servico por bairro (`BairroServicePage`), seguindo o design de referencia enviado, e replicar esse padrao visual em todas as paginas de bairro.

## Mudancas Visuais (Referencia vs Atual)

A secao atual ja possui a estrutura de 2 colunas, mas o redesign trara refinamentos:

1. **Fundo da secao**: Trocar o `bg-muted/30` por um fundo mais limpo e claro (cinza sutil com gradiente)
2. **Cards de diferenciais (Mesmo Dia, 90 Dias, Pecas Originais)**: Redesenhar com fundo branco, bordas arredondadas mais suaves, icones laranja/secondary mais proeminentes e layout centralizado
3. **Pills de marcas**: Bordas mais definidas, estilos de pill mais limpos com borda solida
4. **Card de Orcamento Gratuito**: Gradiente azul mais rico com cantos mais arredondados e tipografia refinada
5. **Separador visual**: Adicionar linha divisoria sutil entre a secao e o restante do conteudo

## Arquivos a Modificar

### 1. `src/pages/BairroServicePage.tsx`
- Redesign da secao "Sobre o Servico" (linhas 153-207)
- Fundo mais limpo com gradiente sutil
- Cards de diferenciais com sombras mais suaves e icones maiores
- Melhor espacamento e tipografia nos brand pills
- Card CTA com gradiente mais sofisticado

### 2. `src/components/bairro/BairroDifferentialsSection.tsx`
- Modernizar os cards de diferenciais para seguir o mesmo padrao visual
- Cards com fundo mais limpo, icones com cores consistentes
- Melhor contraste e legibilidade

### 3. `src/components/bairro/BairroServicesSection.tsx`
- Refinar os cards de servicos com o mesmo padrao de sombras e bordas
- Consistencia visual com o novo design

### 4. `src/components/bairro/BairroTeamSection.tsx`
- Aplicar o mesmo padrao de cards e espacamentos modernizados

### 5. `src/components/bairro/BairroGallerySection.tsx`
- Ajustar bordas e sombras para manter consistencia visual

### 6. `src/components/bairro/BairroTestimonialsSection.tsx`
- Padronizar cards de depoimentos com o novo estilo

## Detalhes Tecnicos

- Todas as mudancas sao puramente de CSS/Tailwind, sem alteracao de logica ou dados
- Padrao de cards: `bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md`
- Icones diferenciais: cor `text-secondary` (laranja) com tamanho aumentado
- Card CTA: `bg-gradient-to-br from-primary via-primary to-accent` com bordas `rounded-2xl`
- Brand pills: `border border-gray-200 rounded-full px-5 py-2.5`
- Separadores: `border-t border-border/30` entre secoes quando necessario
