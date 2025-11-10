# 🚀 Guia de Início Rápido - Symplepass

Guia para começar a usar o Design System Symplepass imediatamente.

## ✅ O que foi criado

### Estrutura completa:
```
symplepass/
├── design-system/
│   ├── index.html              # 📖 Documentação interativa
│   ├── example.html            # 🎨 Exemplo de página completa
│   ├── README.md               # 📚 Documentação técnica
│   ├── tailwind.config.js      # ⚙️ Config Tailwind customizado
│   ├── tokens/
│   │   └── tokens.css          # 🎨 Tokens de design (variáveis CSS)
│   └── components/
│       ├── buttons/            # 🔘 Componentes de botão
│       ├── cards/              # 🃏 Componentes de card
│       ├── forms/              # 📝 Componentes de formulário
│       └── layout/             # 🏗️ Header e Footer
├── docs/                       # Documentação do projeto
├── html/                       # HTMLs antigos (para referência)
├── pages/                      # Páginas do protótipo (próximo passo)
└── assets/                     # Imagens e ícones
```

## 🎯 Próximos Passos

### 1. Visualizar o Design System

Abra no navegador:
```bash
open design-system/index.html
```

Você verá:
- ✅ Todos os tokens de cor
- ✅ Escala tipográfica completa
- ✅ Sistema de espaçamentos
- ✅ Todos os componentes prontos
- ✅ Exemplos interativos

### 2. Ver Exemplo Prático

Abra no navegador:
```bash
open design-system/example.html
```

Página completa demonstrando:
- Header com navegação
- Hero section com busca
- Grid de cards de eventos
- CTA section
- Footer completo

### 3. Começar a Desenvolver

#### Opção A: Copiar estrutura base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Symplepass</title>

  <!-- Fonte Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Design System Tokens -->
  <link rel="stylesheet" href="../design-system/tokens/tokens.css">
</head>
<body style="font-family: 'Inter', sans-serif;">
  <!-- Seu conteúdo aqui -->
</body>
</html>
```

#### Opção B: Usar componentes prontos

1. Abra `design-system/components/buttons/buttons.html`
2. Copie o HTML + CSS do componente desejado
3. Cole na sua página
4. Customize conforme necessário

## 📋 Tarefas Concluídas

- ✅ Ambiente estruturado (pastas organizadas)
- ✅ Tokens de design completos (cores, tipografia, espaçamentos)
- ✅ Configuração Tailwind customizada
- ✅ Componentes base criados:
  - ✅ Botões (6 variantes)
  - ✅ Cards (4 tipos)
  - ✅ Formulários (8 elementos)
  - ✅ Header com menu mobile
  - ✅ Footer completo
- ✅ Documentação interativa
- ✅ Página de exemplo

## 🎨 Componentes Disponíveis

### Botões
- `btn-primary` - Botão principal (gradiente laranja)
- `btn-secondary` - Botão secundário (branco)
- `btn-ghost` - Botão transparente
- `btn-outline` - Botão com borda
- `btn-destructive` - Botão destrutivo (vermelho)
- `btn-icon` - Botão apenas ícone

### Cards
- `card-event-featured` - Card de evento em destaque
- `card-event` - Card de evento padrão
- `card-info` - Card de informação
- `card-status` - Card de status

### Formulários
- `form-input` - Input de texto
- `form-textarea` - Área de texto
- `form-select` - Select dropdown
- `form-checkbox` - Checkbox
- `form-radio` - Radio button
- `form-search` - Input de busca

### Layout
- Header responsivo com menu mobile
- Footer com newsletter e links

## 🎯 Próxima Fase: Reconstruir as Páginas

Agora que o Design System está pronto, vamos reconstruir os HTMLs:

### 1. Home (`pages/index.html`)
- [ ] Hero com busca
- [ ] Eventos em destaque
- [ ] Modalidades
- [ ] CTA

### 2. Lista de Eventos (`pages/eventos.html`)
- [ ] Filtros
- [ ] Grid de eventos
- [ ] Paginação

### 3. Página do Evento (`pages/evento.html`)
- [ ] Hero do evento
- [ ] Abas (Sobre, Categorias, Kit, etc.)
- [ ] Card de inscrição
- [ ] Detalhes completos

### 4. Confirmação (`pages/confirmacao.html`)
- [ ] Status de sucesso
- [ ] QR Code
- [ ] Resumo da compra
- [ ] Próximos passos

### 5. Painel do Usuário (`pages/perfil.html`)
- [ ] Abas (Visão geral, Eventos, Dados, etc.)
- [ ] Cards de eventos do usuário
- [ ] Formulários de edição

## 💡 Dicas

### Usar Tokens CSS
Sempre use as variáveis CSS ao invés de valores fixos:

```css
/* ❌ Errado */
.meu-elemento {
  color: #FF7A00;
  padding: 16px;
}

/* ✅ Correto */
.meu-elemento {
  color: var(--color-primary-500);
  padding: var(--space-4);
}
```

### Copiar Componentes
1. Abra o component em `design-system/components/`
2. Copie o HTML e CSS
3. Cole na sua página
4. Ajuste conforme necessário

### Mobile First
Sempre desenvolva para mobile primeiro:

```css
/* Mobile (padrão) */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

## 📞 Suporte

Se tiver dúvidas:
1. Consulte `design-system/README.md`
2. Veja exemplos em `design-system/example.html`
3. Navegue pela documentação em `design-system/index.html`

## 🎉 Pronto para começar!

O Design System está completo e pronto para uso. Você pode:

1. **Visualizar**: Abra `design-system/index.html` para ver todos os componentes
2. **Estudar**: Abra `design-system/example.html` para ver uma página completa
3. **Construir**: Comece a criar as páginas em `pages/`

**Próximo comando sugerido:**
```bash
# Visualizar o Design System
open design-system/index.html

# Ver exemplo prático
open design-system/example.html
```

---

**Última atualização**: 07/11/2025
