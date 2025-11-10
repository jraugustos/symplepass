# Symplepass Design System v2

## Cores e Gradientes

### Gradient Principal (CTAs)
Usado para botões de ação principal em fundos neutros ou brancos.

```css
background-image: linear-gradient(to right, rgb(249, 115, 22), rgb(245, 158, 11));
/* Tailwind: from-orange-400 to-orange-600 */
```

### Gradient Escuro (CTAs sobre Gradient)
**Regra de aplicação:** Sempre que um CTA com gradient estiver sobre um fundo que também tem gradient (como headers coloridos), utilizar esta versão mais escura para garantir contraste adequado.

```css
background-image: linear-gradient(to right, rgb(138, 55, 10), rgb(82, 32, 3));
/* Cores mais escuras para contraste sobre fundos com gradient */
```

### Exemplos de Uso

#### CTA em fundo neutro/branco
```html
<button style="background-image: linear-gradient(to right, rgb(249, 115, 22), rgb(245, 158, 11));">
  Ver detalhes
</button>
```

#### CTA em header com gradient
```html
<!-- Header com gradient de fundo -->
<header class="bg-gradient-to-br from-orange-400 to-orange-600">
  <!-- Botão usa gradient escuro para contraste -->
  <button style="background-image: linear-gradient(to right, rgb(138, 55, 10), rgb(82, 32, 3));">
    Buscar
  </button>
</header>
```

## Tipografia

### Fontes
- **Títulos e elementos UI:** Geist
- **Texto corrido:** Inter

### Classes Utilitárias
```css
.font-geist {
  font-family: 'Geist', sans-serif !important;
}
```

## Componentes

### Botões

#### Primário (CTA)
- Fundo neutro: Gradient principal
- Fundo com gradient: Gradient escuro
- Hover: `opacity: 95%`
- Bordas arredondadas: `rounded-full` ou `rounded-2xl`

#### Secundário
- Fundo branco com borda
- Hover: `bg-neutral-50`
- Texto: `text-neutral-700` ou `text-neutral-900`

### Cards
- Background: `bg-white`
- Borda: `border border-neutral-200`
- Arredondamento: `rounded-2xl`
- Hover (quando aplicável): `hover:bg-neutral-50`

### Tags e Badges
- Pequenas: `text-xs rounded-full px-2 py-1`
- Com borda: `border border-neutral-200`
- Sobre imagens: `backdrop-blur bg-black/40 border-white/10 text-white/90`

## Espaçamento

### Containers
- Max width: `max-w-7xl`
- Padding lateral mobile: `px-5` ou `px-6`
- Padding lateral desktop: `lg:px-8`

### Seções
- Padding vertical: `pt-8 pb-8` a `pt-16 pb-16`
- Gap entre elementos: `gap-6` ou `gap-8`

## Animações

### Fade Slide In
```css
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

### Uso com Scroll Trigger
```html
<div class="animate-on-scroll" style="animation: fadeSlideIn 1.0s ease-out 0.1s both;">
  <!-- Conteúdo -->
</div>
```

## Diretrizes de Uso

### Contraste em Fundos com Gradient
Quando elementos CTAs com gradient são posicionados sobre fundos que também possuem gradients (headers coloridos, seções com background gradient), sempre utilize a versão escura do gradient para manter contraste adequado e legibilidade.

### Hierarquia Visual
1. CTAs principais: Sempre com gradient (claro ou escuro conforme contexto)
2. Ações secundárias: Botões brancos com borda
3. Links e ações terciárias: Texto simples com underline ou ícones

### Acessibilidade
- Manter contraste WCAG AA entre texto e fundo
- Usar gradient escuro em fundos com gradient para garantir legibilidade
- Incluir estados de hover e focus visíveis