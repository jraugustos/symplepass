Descrição da estrutura das páginas – Symplepass

# Home

## 🏠 Estrutura Atualizada da Home – **Symplepass**

### **1. Header + Hero (bloco único de descoberta)**

> Integração total — o header e o hero formam uma única área contínua, sem corte de cor ou sombra.
> 
> 
> O foco é a **busca e descoberta de eventos** logo no primeiro scroll.
> 

**Layout:**

- Fundo: imagem ou vídeo leve em overlay translúcido (tons quentes + gradiente sutil de laranja → transparente).
- **Header flutuante (dentro do hero):**
    - Logo Symplepass à esquerda (branco sobre o fundo).
    - Ícones à direita:
        - 🔍 **Busca expandida** (abre overlay fullscreen).
        - 👤 **Login / Conta.**
        - ☰ **Menu mobile.**
- **Conteúdo central do Hero:**
    - Headline: “Encontre seu próximo desafio.”
        - Subheadline opcional: “Corrida, triathlon, ciclismo e muito mais.”
    - **Campo de busca integrado (em destaque):**
        - Input principal com ícone 🔍
        - Filtros em linha: **Data | Local | Modalidade | Tipo (Presencial/Virtual)**
    - **Botão CTA primário:** “Ver todos os eventos” (gradiente laranja).

**💡 Experiência visual:**

- Sem linha de separação entre o header e o hero.
- A busca parece “flutuar” sobre o fundo, com leve sombra e bordas arredondadas.
- Transição suave para o bloco seguinte (categorias), com fade entre imagem e fundo branco.

---

### **2. Seção – Categorias / Modalidades**

> Agora posicionada imediatamente após o hero, funcionando como extensão da busca.
> 

**Layout:**

- Fundo branco.
- Título discreto: “Busque por modalidade”.
- Grade de ícones (6 colunas desktop / 3 mobile):
    
    🏃 Corrida | 🚴 Ciclismo | 🏊 Triathlon | 🏋️ Crossfit | 🏖 Beach Sports | ⛰ Trail
    
- Cada ícone atua como **filtro direto** → leva à página de resultados filtrada.
- Ícones outline minimalistas, com **hover em gradiente laranja**.

---

### **3. Seção – Eventos em Destaque**

- Fundo branco.
- Título: “Eventos em destaque”.
- Carrossel horizontal (mobile) / Grid 3 colunas (desktop).
- Card “Evento da Semana” destacado em tamanho maior.
- CTA secundário: “Explorar todos os eventos”.

---

### **4. Seção – Próximos Eventos**

- Fundo cinza-claro (#F7F7F7).
- Título: “Próximos eventos perto de você”.
- Cards menores com scroll horizontal e botão “Ver mais”.

---

### **5. Seção – Clube de Benefícios (Teaser Futuro)**

- Fundo branco.
- Bloco ilustrado:
    - Texto: “Faz parte de uma assessoria esportiva? Ganhe benefícios exclusivos.”
    - CTA: “Saiba mais sobre o Clube Symplepass.”

---

### **6. Seção – Como Funciona**

- Três colunas (mobile: empilhado):
    1. 🔍 Encontre seu evento.
    2. 💳 Faça sua inscrição.
    3. 🏅 Participe e conquiste.
- Fundo branco, ícones grandes e espaçamento generoso.

---

### **7. Seção – Benefícios Symplepass**

- Fundo com gradiente suave (laranja → pêssego).
- 3 colunas destacando:
    - 💳 Pagamentos rápidos e seguros
    - 🏁 Eventos verificados
    - 📱 Tudo no seu celular

---

### **8. Footer**

- Fundo #F7F7F7.
- 3 colunas:
    - Institucional (Sobre, Termos, Privacidade)
    - Suporte (FAQ, Contato, Ajuda)
    - Redes sociais (Instagram, Strava, YouTube)
- Rodapé com selo de pagamento seguro e texto legal.

# Lista de eventos

## 🏷️ Página: **Lista de Eventos**

### **1. Banner de Destaque (topo da página)**

> Área hero visual para reforçar eventos em alta e contextualizar a busca.
> 
- **Fundo:** imagem ou gradiente suave (laranja → branco).
- **Conteúdo:**
    - Título principal: “Descubra eventos esportivos perto de você.”
    - Subtítulo curto: “Explore por modalidade, data ou local.”
    - Carrossel horizontal com **3 a 5 eventos em destaque**, exibindo:
        - Imagem do evento
        - Título
        - Local + Data
        - Botão “Ver detalhes”

---

### **2. Barra de Filtros (fixa no topo após rolagem)**

> Controle principal para refinar os resultados.
> 
- **Filtros principais (com ícones outline):**
    - ⚽ **Esporte** — corrida, triathlon, ciclismo, beach sports, etc.
    - 🚻 **Gênero** — masculino, feminino, misto.
    - 📅 **Data** — calendário seletor (com range).
    - 📍 **Localização** — cidade / estado (input com autocomplete).
- **Filtro avançado (opcional dropdown):**
    - Tipo de evento (presencial/virtual)
    - Distância (para corridas e triathlon)
    - Preço (slider ou range numérico)
- **Botão:** “Limpar filtros” (texto cinza pequeno no canto direito).

---

### **3. Lista de Eventos**

> Corpo principal da página — exibição contínua de cards, com carregamento progressivo (“infinite scroll”).
> 

### Estrutura do Card de Evento

Cada card deve seguir um padrão **clean, responsivo e clicável**:

```
Card do Evento
 ├── Imagem (topo, 16:9)
 ├── Título (nome do evento)
 ├── Data (dia + mês)
 ├── Localização (cidade / estado)
 ├── Modalidade (ícone e texto)
 └── Botão “Ver opções” (gradiente laranja)

```

**Comportamentos:**

- Hover: leve sombra + animação de zoom.
- Clique: redireciona para **Página do Evento**.
- Tag opcional: “Novo”, “Últimos lugares” ou “Encerrando”.

---

### **4. Paginação / Scroll**

- **Carregamento automático (lazy load)** em mobile.
- Desktop: opção “Carregar mais eventos”.
- Contador: “Exibindo 12 de 126 eventos”.

---

### **5. Estado Vazio**

> Quando nenhum evento corresponde ao filtro.
> 
- Ícone ilustrativo (ex: 🏃‍♂️)
- Texto: “Nenhum evento encontrado com esses filtros.”
- Botão: “Limpar filtros e tentar novamente.”

---

### **6. Footer (consistente com o restante do site)**

- Mesmo padrão visual da Home.
- Links institucionais e redes sociais.


# Página do evento

### **1. Header fixo**

> Mesmo padrão do site, mas com foco no evento.
> 
- Logo Symplepass (link para Home)
- Ícone de perfil (👤)
- Menu hambúrguer (☰)
- Fundo branco com leve sombra
- Ao rolar: título do evento substitui o logo (para contexto fixo)

---

### **2. Banner Principal do Evento**

> O elemento de maior impacto visual e emocional.
> 
- **Imagem ou vídeo do evento** (hero full width)
- **Sobreposição com degradê (preto → transparente)**
- **Conteúdo sobreposto:**
    - 🏁 **Título do evento**
    - 📍 Localização
    - 📅 Data e horário
    - 🏃 Modalidade (ícone + texto)
    - **Botão CTA “Inscreva-se agora”** (gradiente laranja fixo)
- **Selo opcional:** “Evento verificado” ou “Últimos lugares”

---

### **3. Menu Âncora (sticky após scroll)**

> Navegação fluida pelas seções da página.
> 
- Itens:
    
    `Sobre o evento | Categorias | Kit do atleta | Percurso | Regulamento | FAQ | Organizador`
    
- Scroll suave para as seções correspondentes.
- Destaque visual da aba ativa (underline gradiente laranja).

---

### **4. Seção – Sobre o Evento**

> Contexto, história e detalhes práticos.
> 
- Texto descritivo do evento (organizado em blocos curtos).
- Ícones de apoio:
    - 📍 Local
    - 📅 Data
    - ⏰ Horário
    - 🏃 Modalidade
    - 🎽 Tipo (Presencial/Virtual)
- **Botão CTA secundário:** “Ver no mapa”.
- Se disponível: **contador regressivo** (“Faltam X dias para a largada!”).

---

### **5. Seção – Categorias e Lotes**

> Área funcional para selecionar inscrição.
> 
- **Cards ou tabela de categorias**, por exemplo:
    - 5km • Corrida de rua
    - 10km • Corrida de rua
    - 21km • Meia maratona
- Cada item inclui:
    - Nome da categoria
    - Valor (com lote ativo)
    - Status (“Inscrições abertas” / “Encerrado”)
    - Botão “Selecionar”
- Ao clicar, abre **modal** ou redireciona para o **Checkout**.

---

### **6. Seção – Kit do Atleta / Benefícios**

> Incentiva a inscrição visualmente.
> 
- Galeria de imagens (carrossel horizontal).
- Lista curta de benefícios:
    - 🎽 Camiseta oficial
    - 🎖 Medalha de participação
    - 🧃 Hidratação
    - 📦 Retirada antecipada
- Texto: “Retire seu kit no dia anterior, das 10h às 18h.”

---

### **7. Seção – Percurso / Mapa**

> Mostra o trajeto e a estrutura do evento.
> 
- Mapa interativo ou imagem estática do percurso.
- Informações complementares:
    - Distâncias, altimetria, pontos de hidratação.
    - Botão “Abrir no Google Maps”.

---

### **8. Seção – Regulamento (PDF)**

> Área de confiança e transparência.
> 
- Resumo do regulamento (3 a 5 linhas).
- **Botão de download:** “Baixar regulamento completo (PDF)”.
- Exibe tamanho e data do arquivo.

---

### **9. Seção – FAQ**

> Perguntas frequentes do evento.
> 
- Lista expansível (acordeão):
    - “Posso transferir minha inscrição?”
    - “Há desconto para grupos?”
    - “Onde retiro meu kit?”
    - “Como funciona o reembolso?”
- Opção “Ver mais perguntas”.

---

### **10. Seção – Organizador**

> Gera confiança e promove outros eventos.
> 
- Nome e logo do organizador.
- Link para perfil (página de organizador).
- Mini carrossel com outros eventos promovidos.
- Botão: “Ver todos os eventos deste organizador”.

---

### **11. Footer**

> Mesmo padrão do site principal (links institucionais, suporte e redes).
>

# Resumo de inscrição

## 🛒 **Tela 1 – Resumo da Inscrição**

> Primeira etapa do fluxo de compra — exibe o resumo do pedido, identifica o usuário e coleta informações básicas antes do redirecionamento para o pagamento.
> 

---

### 🎯 **Objetivo**

- Confirmar a categoria e valor do evento escolhido.
- Identificar o usuário (login/cadastro rápido).
- Captar dados base (nome e e-mail) antes do Stripe.
- Conduzir para o checkout com o mínimo de atrito.

---

### 🧩 **Estrutura Atualizada**

```
🛒 Resumo da Inscrição
 ├── Cabeçalho
 │    ├── Logo Symplepass
 │    └── Título: “Revise suas informações antes do pagamento”
 │
 ├── Identificação do Usuário
 │    ├── Verificação de login
 │    │    ├── Se logado → mostra nome e e-mail do usuário
 │    │    ├── Se não logado → exibe campos:
 │    │          ├── Nome completo
 │    │          ├── E-mail
 │    │          └── Botão: “Criar conta e continuar”
 │    │    └── Texto auxiliar: “Sua conta será criada automaticamente com estes dados.”
 │
 ├── Detalhes do Evento
 │    ├── Nome do evento
 │    ├── Categoria / Distância
 │    ├── Data e Local
 │    ├── Tipo (Presencial / Virtual)
 │    └── Ícone ilustrativo da modalidade
 │
 ├── Resumo de Valores
 │    ├── Subtotal
 │    ├── Taxa de serviço (transparente)
 │    ├── Desconto (se houver)
 │    └── Total a pagar (destaque)
 │
 ├── Termos e Política
 │    ├── Checkbox: “Confirmo que li e aceito o regulamento do evento.”
 │    └── Link: “Ver regulamento completo”
 │
 └── CTA
      ├── Botão primário: “Prosseguir para pagamento”
      └── Subtexto: “Pagamento seguro via Stripe”

```

---

### 💡 **Comportamentos e Lógica**

- Se o usuário **já estiver logado**, o bloco de identificação mostra os dados pré-preenchidos e desabilitados (apenas leitura).
- Se **não estiver logado**, o sistema cria um **pré-cadastro rápido** (nome + e-mail) e salva antes de abrir o Stripe.
- O botão “Prosseguir para pagamento” só é habilitado após aceitar o regulamento.
- Nenhum botão de “adicionar mais eventos” — foco total na conversão.

### 🔄 **Fluxo de Transição**

1. Usuário chega à tela após clicar em “Inscreva-se” na página do evento.
2. Se logado → dados e evento são carregados automaticamente.
3. Se não logado → preenche nome e e-mail → cria conta leve no backend.
4. Clica em “Prosseguir para pagamento” → redireciona para **Stripe Checkout (Tela 2)**.

# Checkout

### **Checkout (Stripe)**

> A compra é finalizada dentro do ambiente de checkout seguro da Stripe, preservando a identidade visual da Symplepass.
> 

### 🎯 Objetivo:

Finalizar o pagamento com segurança e fluidez.

### Estrutura (seguindo IU nativa do Stripe Checkout):

```
💳 Checkout (Stripe UI)
 ├── Cabeçalho
 │    ├── Logo Symplepass
 │    └── Título: “Pagamento seguro”
 │
 ├── Dados do atleta
 │    ├── Nome completo
 │    ├── E-mail (pré-preenchido do login)
 │    └── Documento (CPF)
 │
 ├── Métodos de pagamento (Stripe)
 │    ├── Cartão de crédito (default)
 │    ├── PIX (link de pagamento QR code)
 │    └── Boleto (Stripe Payment Link)
 │
 ├── Cupom de desconto
 │    ├── Campo de texto
 │    └── Botão “Aplicar”
 │
 ├── Confirmação
 │    └── Botão “Confirmar pagamento”
 │
 └── Rodapé (Stripe)
      ├── Selo de segurança
      └── Texto: “Pagamentos processados via Stripe • PCI DSS Compliant”

```

### 🧩 Observações:

- O layout **herda a UI da Stripe** (não customizada, apenas com logo Symplepass e cores do tema).
- O retorno de sucesso/falha é **redirecionado automaticamente**:
    - ✅ **Success URL → /confirmacao**
    - ❌ **Cancel URL → /inscricao**


# Confirmação de inscrição

### **Tela 3 – Confirmação da Inscrição**

> Mostra o comprovante digital e resumo da compra, com QR Code para acesso rápido.
> 

### 🎯 Objetivo:

Confirmar visualmente a inscrição e permitir download ou compartilhamento do comprovante.

### Estrutura:

```
✅ Confirmação
 ├── Cabeçalho
 │    ├── Logo Symplepass
 │    └── Ícone de sucesso (✔️)
 │
 ├── Mensagem principal
 │    ├── “Inscrição confirmada!”
 │    └── Subtexto: “Você receberá um e-mail com o comprovante e QR Code.”
 │
 ├── QR Code
 │    ├── Código único do participante
 │    └── Botão: “Baixar comprovante (PDF)”
 │
 ├── Resumo do pedido
 │    ├── Evento e categoria
 │    ├── Data e local
 │    ├── Valor pago
 │    ├── Código da transação (Stripe)
 │    └── Status: “Pago”
 │
 ├── Ações rápidas
 │    ├── Botão: “Ver Meus Eventos”
 │    └── Link: “Adicionar ao calendário”
 │
 └── Rodapé
      └── Links institucionais (padrão Symplepass)

```

### 💡 Interações:

- QR Code gerado automaticamente via backend (ex: API SendGrid ou Supabase function).
- Botão “Ver Meus Eventos” redireciona para `/conta/meus-eventos`.
- Design leve e festivo (fundo claro com destaque laranja, ícone de medalha ou troféu).


## 👤 **Área do Usuário – Estrutura Completa**

> Ambiente pessoal onde o atleta gerencia dados, eventos e preferências.
> 
> 
> Deve ter experiência contínua, intuitiva e com foco em acesso rápido a informações relevantes.
> 

---

### 🧭 **1. Layout Geral**

- **Menu lateral (desktop)** ou **menu inferior fixo (mobile)** com ícones:
    - 🏠 Home
    - 🏁 Meus Eventos
    - 💳 Pagamentos
    - ⚙️ Configurações
    - 🚪 Logout
- **Topo fixo:** foto ou avatar do usuário + saudação (“Olá, Rafael 👋”).
- **Fundo branco**, cards com sombra leve (#EAEAEA).
- **Navegação fluida:** todas as seções carregam sem reload (SPA style).

---

## 🔹 **2. Seção: Minha Conta**

### Objetivo:

Gerenciar dados pessoais e informações de acesso.

### Estrutura:

```
👤 Minha Conta
 ├── Dados Pessoais
 │    ├── Nome completo
 │    ├── E-mail (não editável)
 │    ├── CPF (não editável)
 │    ├── Data de nascimento
 │    ├── Telefone
 │    └── Botão “Salvar alterações”
 │
 ├── Alterar Senha
 │    ├── Senha atual
 │    ├── Nova senha
 │    ├── Confirmar nova senha
 │    └── Botão “Atualizar senha”
 │
 └── Histórico de Pagamentos
      ├── Lista de transações
      │    ├── Evento
      │    ├── Data
      │    ├── Valor
      │    ├── Status (Pago | Pendente | Cancelado)
      │    └── Botão “Ver detalhes”

```

### Detalhes de UI:

- **Campos editáveis** com bordas arredondadas e placeholders cinza.
- **Feedback visual:** “Alterações salvas com sucesso ✅”.
- **Pagamentos**: exibidos em formato de tabela no desktop / cards no mobile.

---

## 🏁 **3. Seção: Meus Eventos**

### Objetivo:

Centralizar as inscrições do atleta com status e acesso rápido ao comprovante.

### Estrutura:

```
🏁 Meus Eventos
 ├── Lista de Inscrições
 │    ├── Card do evento
 │    │    ├── Imagem
 │    │    ├── Nome do evento
 │    │    ├── Data / Local
 │    │    ├── Categoria
 │    │    └── Status (Pago | Pendente | Cancelado)
 │
 ├── Ações do Card
 │    ├── Botão “Ver Detalhes”
 │    ├── Botão “Download Comprovante (PDF)”
 │    └── Ícone “QR Code”
 │
 └── QR Code
      ├── Exibido em modal
      ├── Código único da inscrição
      └── Botão “Baixar QR Code”

```

### Interações:

- Cards clicáveis → abrem modal ou expandem detalhes.
- Ícones de status coloridos:
    - 🟢 Pago
    - 🟡 Pendente
    - 🔴 Cancelado
- Botão “Ver detalhes” abre resumo da inscrição e comprovante.

---

## ⚙️ **4. Seção: Configurações**

### Objetivo:

Gerenciar notificações, preferências esportivas e sair da conta.

### Estrutura:

```
⚙️ Configurações
 ├── Notificações
 │    ├── Checkbox: “Receber novidades e promoções”
 │    ├── Checkbox: “Alertas sobre inscrições e eventos”
 │    └── Botão “Salvar preferências”
 │
 ├── Preferências Esportivas
 │    ├── Esportes favoritos (multi-seleção)
 │    │    ├── Corrida
 │    │    ├── Ciclismo
 │    │    ├── Triathlon
 │    │    ├── Crossfit
 │    │    └── Beach Sports
 │    └── Botão “Atualizar”
 │
 └── Logout
      ├── Botão vermelho “Sair da conta”
      └── Confirmação: “Deseja realmente sair?”

```

### Interações:

- As opções são salvas instantaneamente via autosave.
- Feedback: “Preferências atualizadas com sucesso.”
- Logout → redireciona para a Home.

---

## 🧱 **Tree View Consolidado**

```
👤 Área do Usuário
 ├── Minha Conta
 │    ├── Dados pessoais
 │    ├── Alterar senha
 │    └── Histórico de pagamentos
 │
 ├── Meus Eventos
 │    ├── Lista de inscrições
 │    │    ├── Status (pago | pendente | cancelado)
 │    │    ├── Download de comprovante
 │    │    └── QR Code
 │
 └── Configurações
      ├── Notificações
      ├── Preferências esportivas
      └── Logout

```

---

## 🎨 **Diretrizes de Design**

- **Tipografia:** Inter (H1 24px, Body 16px).
- **Cores:**
    - Fundo: #FFFFFF
    - Neutros: #EAEAEA e #F7F7F7
    - Ações: Gradiente laranja `#FF7A00 → #FFB347`
    - Status:
        - Pago → #34C759
        - Pendente → #FFCC00
        - Cancelado → #FF3B30
- **Cards:** borda 8px, sombra leve, ícones outline Lucide.
- **Microinterações:** fade-in nos cards e ripple nos botões.

---

## 🔄 **Fluxo de Navegação**

1. **Login / Cadastro** → direciona para “Minha Conta”.
2. Da aba inferior (ou menu lateral), o usuário pode:
    - Editar dados pessoais.
    - Consultar histórico de pagamentos.
    - Ver inscrições e QR Codes.
    - Ajustar notificações e preferências.
3. Ao clicar em “Sair da conta” → confirmação + redirecionamento à Home.


Login
🔐 Página de Login – Estrutura Completa
Tela de entrada do usuário para acessar sua conta, inscrever-se em eventos e acompanhar suas inscrições.
🎯 Objetivo
Permitir login rápido e fluido, com uma experiência visual imersiva e esportiva, inspirando o usuário a continuar no fluxo de descoberta e inscrição.
🧩 Estrutura Visual
🔐 Login
 ├── Fundo
 │    ├── Imagem esportiva em full-screen
 │    ├── Overlay gradiente escuro (para contraste de texto)
 │
 ├── Cabeçalho
 │    ├── Logo Symplepass (branca)
 │    └── Slogan: “Seu próximo desafio está a um clique.”
 │
 ├── Título
 │    └── “Acesse sua conta”
 │
 ├── Formulário de Login
 │    ├── Campo: E-mail
 │    ├── Campo: Senha
 │    ├── Link: “Esqueci minha senha”
 │    ├── Botão primário: “Entrar”
 │
 ├── Separador visual
 │    └── Linha com texto central: “ou continue com”
 │
 ├── Login social (opcional)
 │    ├── Botão Google
 │    └── Botão Apple (iOS)
 │
 ├── Rodapé / Acesso alternativo
 │    ├── Texto: “Ainda não tem uma conta?”
 │    └── Link: “Criar conta”
 │
 └── Marca d’água inferior
      └── Texto: “Symplepass © 2025”


​
💡 Fluxo e Comportamento
O usuário acessa via botão “Login / Sign Up” da home.
Preenche e-mail e senha.
Ao clicar em “Entrar”:
Backend valida credenciais (Supabase / Clerk / Auth0).
Se sucesso → redireciona para /area-usuario (Minha Conta).
Se falha → mensagem “E-mail ou senha incorretos.”
O link “Esqueci minha senha” abre página separada de recuperação.
Se clicar em “Criar conta”, vai para o fluxo de Cadastro.
🎨 Diretrizes de Design
Fundo: imagem esportiva (corrida, ciclismo ou triathlon) com gradiente escuro (rgba(0,0,0,0.6) overlay).
Tipografia: Inter, Bold nos títulos (24px), Regular nos campos (16px).
Campos:
Fundo branco translúcido (rgba(255,255,255,0.1))
Bordas arredondadas (8px)
Placeholder branco 70% opacidade
Ícones à esquerda (envelope e cadeado)
Botão principal: gradiente laranja #FF7A00 → #FFB347
Texto em branco
Sombra suave e animação de “press”
Botão social: fundo branco, ícone colorido (Google / Apple).
Transição: fade-in da imagem de fundo + leve slide-up do formulário.
🧱 Tree View Estruturada
🔐 Autenticação
 ├── Login
 │    ├── Fundo (imagem + overlay)
 │    ├── Logo e slogan
 │    ├── Formulário
 │    │    ├── E-mail
 │    │    ├── Senha
 │    │    ├── Link “Esqueci minha senha”
 │    │    └── Botão “Entrar”
 │    ├── Login social (Google / Apple)
 │    ├── Link “Criar conta”
 │    └── Rodapé com direitos
 │
 ├── Cadastro
 │    ├── Nome completo
 │    ├── E-mail
 │    ├── Senha
 │    ├── Confirmar senha
 │    └── Botão “Criar conta”
 │
 └── Esqueci minha senha
      ├── Campo e-mail
      ├── Botão “Enviar link de recuperação”
      └── Mensagem de sucesso “Verifique seu e-mail.”


​
📱 Experiência Mobile
O fundo cobre 100% da tela (sem header fixo).
O formulário é centralizado verticalmente (modo flex).
No iOS e Android, o teclado não sobrepõe o botão principal.
“Login social” e “Criar conta” aparecem somente após scroll ou no final do fluxo (para reduzir distração).
🧭 Fluxo de Navegação
Home
  ↓
Login (/login)
  ↓
Cadastro (/cadastro)
  ↓
Esqueci minha senha (/recuperar)
  ↓
Área do Usuário (/conta)