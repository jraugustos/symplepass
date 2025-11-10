# Symplepass Design System

Sistema de design completo para a plataforma Symplepass. Este design system fornece tokens, componentes e guidelines para criar interfaces consistentes, acessíveis e responsivas.

## 🎯 Princípios

- **Mobile First**: Todos os componentes são otimizados primeiro para mobile
- **Consistência**: Tokens centralizados garantem uniformidade visual
- **Acessibilidade**: Seguimos as diretrizes WCAG 2.1
- **Responsividade**: Adaptável a todos os tamanhos de tela

## 📁 Estrutura

```
design-system/
├── index.html              # Documentação interativa
├── tailwind.config.js      # Configuração do Tailwind CSS
├── tokens/
│   └── tokens.css          # Tokens de design (CSS Variables)
├── components/
│   ├── buttons/            # Componentes de botão
│   ├── cards/              # Componentes de card
│   ├── forms/              # Componentes de formulário
│   ├── layout/             # Header e Footer
│   └── navigation/         # Componentes de navegação
└── README.md
```

## 🎨 Tokens

### Cores

#### Primary (Orange Gradient)
- `--color-primary-500`: #FF7A00 (cor principal)
- `--color-primary-300`: #FFB347 (variante clara)
- `--gradient-primary`: linear-gradient(135deg, #FF7A00 0%, #FFB347 100%)

#### Neutral (Gray Scale)
- `--color-neutral-50` a `--color-neutral-900`

#### Semantic Colors
- Success: #34C759
- Error: #FF3B30
- Info: #007AFF
- Warning: #F59E0B

### Tipografia

**Fonte:** Inter (Google Fonts)

**Tamanhos:**
- xs: 12px
- sm: 14px
- base: 16px
- lg: 18px
- xl: 20px
- 2xl: 24px
- 3xl: 30px
- 4xl: 36px
- 5xl: 48px

### Espaçamentos

Sistema baseado em múltiplos de 4px:
- space-1: 4px
- space-2: 8px
- space-4: 16px
- space-6: 24px
- space-8: 32px
- space-12: 48px
- space-16: 64px

### Border Radius
- sm: 4px
- base/md: 8px
- lg: 12px
- xl: 16px
- 2xl: 20px
- 3xl: 24px
- full: 9999px

### Shadows
- sm: Sombra sutil
- base: Sombra padrão
- md: Sombra média
- lg: Sombra grande
- xl: Sombra extra grande

## 🧩 Componentes

### Botões

**Variantes:**
- `btn-primary`: Botão principal com gradiente
- `btn-secondary`: Botão secundário branco
- `btn-ghost`: Botão transparente
- `btn-outline`: Botão com borda
- `btn-destructive`: Botão destrutivo (vermelho)
- `btn-icon`: Botão apenas ícone

**Tamanhos:**
- `btn-sm`: Pequeno
- (padrão): Médio
- `btn-lg`: Grande

**Estados:**
- `:hover` - Hover state
- `:active` - Active state
- `:disabled` - Disabled state
- `:focus-visible` - Focus state

### Cards

**Tipos:**
- `card-event-featured`: Card de evento em destaque
- `card-event`: Card de evento padrão
- `card-info`: Card de informação
- `card-status`: Card de status com ícone

### Formulários

**Elementos:**
- `form-input`: Input de texto
- `form-textarea`: Área de texto
- `form-select`: Select dropdown
- `form-checkbox`: Checkbox
- `form-radio`: Radio button
- `form-search`: Input de busca

**Estados:**
- Normal
- Hover
- Focus
- Error
- Disabled

### Layout

**Componentes:**
- Header: Navegação principal com menu mobile
- Footer: Rodapé com links e newsletter

## 🚀 Como Usar

### 1. Abrir a Documentação

Abra o arquivo `design-system/index.html` no navegador para visualizar todos os componentes e tokens.

### 2. Incluir no Projeto

```html
<!-- Importar tokens -->
<link rel="stylesheet" href="design-system/tokens/tokens.css">

<!-- Importar Tailwind Config -->
<script src="design-system/tailwind.config.js"></script>

<!-- Importar fonte Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Usar Componentes

Copie o HTML e CSS dos componentes da documentação para suas páginas.

Exemplo de botão:
```html
<button class="btn-primary">
  Inscrever-se
</button>
```

### 4. Usar Tokens CSS

```css
.meu-componente {
  color: var(--color-primary-500);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
}
```

## 📱 Responsividade

Todos os componentes seguem a abordagem **mobile first**:

```css
/* Mobile (padrão) */
.component { ... }

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .component { ... }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  .component { ... }
}
```

## 🎯 Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## ✨ Boas Práticas

1. **Use os tokens**: Sempre use as variáveis CSS ao invés de valores hardcoded
2. **Componentes reutilizáveis**: Copie os componentes da documentação
3. **Consistência**: Mantenha o mesmo estilo em todas as páginas
4. **Acessibilidade**: Use labels, aria-labels e foco visível
5. **Performance**: Otimize imagens e use lazy loading

## 🔄 Atualizações

Para atualizar o design system:

1. Edite os tokens em `tokens/tokens.css`
2. Edite os componentes em `components/`
3. Atualize a documentação em `index.html`

## 📝 Changelog

### v1.0.0 (2025-01-07)
- ✨ Lançamento inicial do Design System
- 🎨 Tokens de design completos
- 🧩 Componentes base: Botões, Cards, Forms, Layout
- 📱 Suporte completo mobile-first
- 📖 Documentação interativa

---

**Criado com ❤️ pela equipe Symplepass**
