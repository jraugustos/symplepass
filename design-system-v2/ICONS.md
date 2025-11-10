# Guia de Ícones Lucide - Symplepass Design System

## Sobre

O design system Symplepass utiliza a biblioteca [Lucide Icons](https://lucide.dev/) para todos os ícones do projeto. Lucide é uma biblioteca open-source com mais de 1.000 ícones consistentes, otimizados e fáceis de usar.

## Instalação

Os ícones Lucide já estão incluídos em todas as páginas através do CDN:

```html
<!-- Adicione no <head> -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Inicialize antes do </body> -->
<script>
  lucide.createIcons();
</script>
```

## Como Usar

### Sintaxe Básica

Para usar um ícone, utilize o elemento `<i>` com o atributo `data-lucide`:

```html
<i data-lucide="calendar" class="w-5 h-5"></i>
```

### Tamanhos Recomendados

Use classes Tailwind para definir o tamanho dos ícones:

| Tamanho | Classe Tailwind | Uso Recomendado |
|---------|----------------|-----------------|
| 14px | `w-3.5 h-3.5` | Textos pequenos, badges |
| 16px | `w-4 h-4` | Textos normais, botões pequenos |
| 18px | `w-[18px] h-[18px]` | Botões médios, cards |
| 20px | `w-5 h-5` | Botões grandes, headers |
| 22px | `w-5.5 h-5.5` | Destaque, ícones principais |
| 24px | `w-6 h-6` | Ícones grandes, hero sections |

### Cores

Adicione classes Tailwind para definir a cor:

```html
<!-- Cor neutra (padrão) -->
<i data-lucide="calendar" class="w-5 h-5 text-neutral-700"></i>

<!-- Cor laranja (marca) -->
<i data-lucide="star" class="w-5 h-5 text-orange-600"></i>

<!-- Cor branca -->
<i data-lucide="menu" class="w-5 h-5 text-white"></i>

<!-- Cor com opacidade -->
<i data-lucide="info" class="w-5 h-5 text-neutral-600/60"></i>
```

## Ícones Principais do Projeto

### Navegação
- `menu` - Menu hamburguer
- `x` - Fechar menu/modal
- `chevron-left` - Anterior
- `chevron-right` - Próximo
- `chevron-down` - Expandir/colapsar
- `arrow-right` - Ação/próximo passo
- `external-link` - Link externo
- `search` - Busca

### Eventos
- `calendar` - Data
- `map-pin` - Localização
- `alarm-clock` - Horário
- `flag` - Largada/início
- `trophy` - Troféu/premiação
- `medal` - Medalha
- `map` - Mapa/percurso
- `users` - Participantes

### Kit do Atleta
- `shirt` - Camiseta
- `barcode` - Chip/número de peito
- `shopping-bag` - Sacochila
- `droplets` - Hidratação
- `book-open` - Guia do atleta
- `package` - Pacote/kit

### Segurança e Verificação
- `shield-check` - Pagamento seguro
- `badge-check` - Evento verificado
- `zap` - Confirmação rápida
- `lock` - Segurança

### Ações
- `download` - Download
- `upload` - Upload
- `plus` - Adicionar
- `minus` - Remover
- `edit` - Editar
- `trash` - Excluir
- `share-2` - Compartilhar
- `filter` - Filtrar

### Comunicação
- `mail` - E-mail
- `phone` - Telefone
- `message-circle` - Mensagem
- `globe` - Website
- `credit-card` - Cartão/pagamento

### Arquivos
- `file` - Arquivo genérico
- `file-text` - Documento de texto
- `file-down` - Download de arquivo
- `folder` - Pasta
- `image` - Imagem

### Status
- `check` - Sucesso/confirmado
- `check-circle` - Verificado
- `x-circle` - Erro/cancelado
- `alert-circle` - Atenção/aviso
- `info` - Informação
- `activity` - Status do sistema

## Exemplos de Uso

### Botão com Ícone

```html
<button class="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full">
  Inscreva-se
  <i data-lucide="arrow-right" class="w-4 h-4"></i>
</button>
```

### Card com Ícone

```html
<div class="flex items-center gap-2">
  <i data-lucide="calendar" class="w-5 h-5 text-neutral-700"></i>
  <div>
    <p class="font-medium">Data</p>
    <p class="text-sm text-neutral-600">15 Mar 2025</p>
  </div>
</div>
```

### Badge com Ícone

```html
<span class="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">
  <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
  Inscrições abertas
</span>
```

### Lista com Ícones

```html
<ul class="space-y-2">
  <li class="flex items-center gap-2">
    <i data-lucide="check" class="w-4 h-4 text-green-600"></i>
    <span>Pagamento seguro</span>
  </li>
  <li class="flex items-center gap-2">
    <i data-lucide="badge-check" class="w-4 h-4 text-green-600"></i>
    <span>Evento verificado</span>
  </li>
</ul>
```

## Atualização dos Ícones

Quando novos ícones forem adicionados à página dinamicamente via JavaScript, execute:

```javascript
lucide.createIcons();
```

Isso garantirá que os novos ícones sejam renderizados corretamente.

## Recursos Adicionais

- **Documentação oficial**: https://lucide.dev/
- **Pesquisar ícones**: https://lucide.dev/icons/
- **GitHub**: https://github.com/lucide-icons/lucide

## Página de Teste

Para visualizar todos os ícones disponíveis no projeto, abra o arquivo:

```
design-system-v2/test-icons.html
```

Esta página mostra todos os ícones organizados por categoria com seus respectivos nomes.
