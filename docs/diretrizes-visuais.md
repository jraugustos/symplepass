🎨 Diretrizes Visuais – Symplepass
🧭 Princípios Gerais

Diretrizes:
Mobile First: design otimizado para telas pequenas com foco em legibilidade e interação simples.
Interface Light: fundo branco ou cinza muito claro e divisores minimalistas.
Estilo Clean e Minimalista: foco em hierarquia visual e espaçamento respirado.
Foco na Função: cada tela tem um objetivo claro (descobrir evento, inscrever, gerenciar).
Tom de Comunicação: direto, positivo e acessível, inspirado no espírito esportivo.

### 🌈 **Identidade Visual**
Paleta de Cores
Tipo	Cor	Uso Principal
Primary (Gradiente)	#FF7A00 → #FFB347	Botões, CTAs, ícones de destaque
Secondary	#2C2C2C	Títulos, texto principal
Background	#FFFFFF / #F7F7F7	Fundo geral
Neutral Light	#EAEAEA	Divisores, bordas sutis
Success	#34C759	Pagamento confirmado, status positivo
Error	#FF3B30	Erros e alertas
Info	#007AFF	Links e informações complementares

### **Tipografia:**
Primária: Inter — clean, moderna e legível.

Hierarquia:
H1 (Título de Página): 24–28px / Bold
H2 (Subtítulo): 20–22px / Semibold
Body: 16px / Regular
Labels e Botões: 14px / Semibold, caixa alta

### *Componentes-Chave*

**Botões**

- Primário: gradiente laranja, texto branco, bordas arredondadas (8px), sombra suave.
- Secundário: fundo branco, borda 1px laranja, texto em gradiente.
- Desabilitado: fundo cinza claro, texto cinza médio.

**Inputs**

- Bordas arredondadas (8px).
- Placeholder em cinza médio.
- Ícones sutis à direita (ex: lupa, calendário, localização).

**Cards de Evento**

Fundo branco imagem de capa no topo,Título em bold, infos curtas (data, local, modalidade), Botão “Inscreva-se” em gradiente laranja.


🖼️ Estilo de Imagens e Ícones

Fotos reais de eventos esportivos (corridas, triathlon, ciclismo).
Ícones outline minimalistas (Lucide / Remix Icons).
Tons quentes (laranja, dourado, terracota) contrastando com fundos claros.

✨ Interações e Microanimações

Feedback visual ao tocar (hover, ripple suave).
Transições curtas (150–250ms).
Botões e cards com insterações no hover.

📱 Responsividade

Mobile: prioridade absoluta, com botões grandes e filtros colapsáveis.
Tablet/Desktop: aproveitamento de largura para exibir múltiplos cards e colunas.


### **🧰 Stack Visual Ideal para Symplepass**

Base de estilo: Tailwind CSS — responsável pelos tokens de design (cores, espaçamento, tipografia, sombras, gradientes) e pela responsividade do layout.

Componentes: shadcn/ui e 21st.dev — fornecem componentes prontos, acessíveis e personalizáveis (botões, cards, modais, navegação, formulários).

Ícones: Lucide React — conjunto de ícones outline leves e modernos, em sintonia com a estética esportiva e clean do projeto.

Interações e animações: Framer Motion (opcional) — para criar microanimações suaves e transições entre estados (hover, entrada, saída de tela).

Temas e glass effect: Tailwind + backdrop-filter utilities — para aplicar superfícies translúcidas, efeitos de blur e camadas de profundidade nos fundos e painéis.