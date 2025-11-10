Tree View – Arquitetura de Páginas (Usuário Final)

Symplepass
│
├── 🏠 Home
│    ├── Busca por palavra-chave
│    ├── Filtros (data | local | modalidade | preço)
│    ├── Eventos em destaque
│    └── Próximos eventos
│
├── 🔍 Resultados de Busca
│    ├── Filtros avançados (tipo de evento, distância)
│    ├── Cards de evento
│    └── → Página do Evento
│
├── 🏁 Página do Evento
│    ├── Sobre o evento
│    ├── Categorias e lotes
│    ├── Kit do atleta / benefícios
│    ├── Percurso / mapa
│    ├── Regulamento (PDF)
│    ├── FAQ
│    └── Organizador (outros eventos)
│
├── 🛒 Inscrição e Compra
│    ├── Carrinho
│    │     ├── Listagem de inscrições
│    │     ├── Edição / exclusão
│    │     └── Resumo de valores
│    ├── Checkout
│    │     ├── Dados do atleta
│    │     ├── Métodos de pagamento (cartão | PIX | boleto)
│    │     ├── Cupom de desconto
│    │     └── Confirmar pagamento
│    └── Confirmação
│          ├── QR Code
│          ├── Resumo do pedido
│          └── Link para "Meus Eventos"
│
├── 👤 Área do Usuário
│    ├── Minha Conta
│    │     ├── Dados pessoais
│    │     ├── Alterar senha
│    │     └── Histórico de pagamentos
│    ├── Meus Eventos
│    │     ├── Lista de inscrições
│    │     ├── Status (pago | pendente | cancelado)
│    │     ├── Download de comprovante
│    │     └── QR Code
│    └── Configurações
│          ├── Notificações
│          ├── Preferências esportivas
│          └── Logout
│
├── 🔐 Autenticação
│    ├── Login
│    ├── Cadastro
│    └── Esqueci minha senha
│
├── 📄 Páginas Institucionais
│    ├── Termos de Uso
│    ├── Política de Privacidade
│    └── Contato / Suporte / FAQ
│
└── 🌟 Futuro (pós-MVP)
     ├── Área de Clubes / Assessores
     │     ├── Perfil do clube
     │     ├── Eventos associados
     │     └── Ranking de atletas
     └── Gamificação
           ├── Perfil do atleta
           ├── Badges e conquistas
           └── Histórico esportivo

🧭 Fluxo de Navegação (User Journey)

[Home]
   ↓
[Busca de Eventos]
   ↓
[Resultados com Filtros]
   ↓
[Selecionar Evento]
   ↓
[Página do Evento]
   ↓
[Escolher Categoria / Lote]
   ↓
[Adicionar ao Carrinho]
   ↓
[Checkout]
   ↓
[Pagamento (Cartão / PIX / Boleto)]
   ↓
[Confirmação]
   ↓
[Recebe E-mail + QR Code]
   ↓
[Área do Usuário → Meus Eventos]
   ↓
[Visualizar Status / Comprovante / QR Code]


🔄 Fluxo Secundário (Autenticação e Conta)

[Login / Cadastro]
   ↓
[Minha Conta]
   ↓
[Editar Dados / Preferências]
   ↓
[Ver Meus Eventos]
   ↓
[Baixar Comprovante ou QR Code]

🧩 Observações Estratégicas

Mobile-first: todas as páginas pensadas para navegação fluida com filtros simplificados.
Checkout em etapa única: evita redirecionamentos, diferencial em relação ao Ticket Sports.
Página do evento com âncoras: melhora escaneabilidade e SEO.


🧱 Tree View – Área Interna de Gestão (Admin / Organizador)

Painel Administrativo Symplepass
│
├── 🏠 Dashboard
│    ├── Resumo geral
│    │     ├── Total de inscritos
│    │     ├── Vendas totais (R$)
│    │     ├── Eventos ativos / finalizados
│    │     ├── Status de pagamentos
│    ├── Gráficos e métricas (vendas por lote, modalidade, período)
│    └── Atalhos rápidos:
│           ├── Criar novo evento
│           ├── Ver inscritos recentes
│           └── Acessar relatórios
│
├── 🎯 Eventos
│    ├── Listagem de eventos
│    │     ├── Busca e filtros (nome, data, status)
│    │     ├── Indicadores: vagas, inscritos, receita
│    ├── Criar / Editar Evento
│    │     ├── Informações básicas
│    │     │     ├── Nome, descrição, banner
│    │     │     ├── Local, data, horário
│    │     ├── Categorias e Lotes
│    │     │     ├── Modalidade (5K, 10K, etc.)
│    │     │     ├── Valor, período, limite de vagas
│    │     ├── Regulamento (upload PDF / editor)
│    │     ├── Kit e percurso (imagens / mapa)
│    │     ├── FAQ (perguntas frequentes)
│    │     ├── Configurações adicionais
│    │     │     ├── Ativar cupom de desconto
│    │     │     ├── Exibir contador regressivo
│    │     │     └── Publicar evento
│    └── Gerenciar Inscrições
│           ├── Lista de inscritos (nome, e-mail, status pagamento)
│           ├── Filtros (pago, pendente, cancelado)
│           ├── Exportar CSV/Excel
│           └── Enviar comunicado (e-mail em massa)
│
├── 👥 Usuários
│    ├── Lista de usuários cadastrados
│    │     ├── Nome, e-mail, CPF, eventos inscritos
│    ├── Visualizar perfil do usuário
│    │     ├── Histórico de inscrições
│    │     ├── Status de pagamento
│    │     └── Ações administrativas (cancelar, reembolsar, reemitir QR)
│    └── Busca e filtros (nome, CPF, evento)
│
├── 💰 Vendas e Pagamentos
│    ├── Visão geral financeira
│    │     ├── Total de vendas
│    │     ├── Pendências de pagamento
│    │     ├── Receitas por evento
│    ├── Relatórios
│    │     ├── Exportação (CSV / PDF)
│    │     ├── Período (data inicial/final)
│    │     └── Tipo (inscrições, cupons, reembolsos)
│    └── Integração com Gateway (Stripe / Pagar.me)
│          ├── Logs de transação
│          └── Status de repasse
│
├── 🎟️ Cupons de Desconto *(opcional no MVP)*
│    ├── Listagem de cupons
│    ├── Criar novo cupom
│    │     ├── Código / valor / validade
│    │     └── Vincular a evento específico
│    └── Status (ativo / expirado / usado)
│
├── 📊 Relatórios
│    ├── Relatório de Inscrições
│    ├── Relatório Financeiro
│    ├── Relatório de Eventos
│    └── Relatório de Usuários
│
├── ⚙️ Configurações
│    ├── Perfil do organizador
│    │     ├── Nome / CNPJ / contato / logo
│    ├── Permissões de acesso
│    │     ├── Administrador / Operador / Financeiro
│    ├── Integrações
│    │     ├── Gateway de pagamento
│    │     ├── E-mail transacional (Sendgrid, SES)
│    │     └── Analytics (GA4, Meta Pixel)
│    └── Segurança e autenticação (2FA, redefinir senha)
│
└── 🔒 Sessão
     ├── Logout
     └── Suporte técnico (chat interno / documentação)
