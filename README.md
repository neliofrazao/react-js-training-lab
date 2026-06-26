# 📚 Programação Web — JavaScript & React

Repositório oficial da disciplina **Programação Web — Linguagem de Script**.
Aqui você encontra os materiais, exemplos de código e o enunciado do desafio final.

> **Como usar este repositório:** faça um **fork** para a sua conta e acompanhe as atualizações ao longo do curso. O conteúdo será commitado bloco a bloco conforme as aulas acontecem.

---

## 🗂️ Sobre a disciplina

A disciplina apresenta os fundamentos do desenvolvimento web moderno com foco em **JavaScript** e **React**. O aprendizado é conduzido por um projeto prático — um sistema de cadastro de disciplinas e alunos — que evolui ao longo dos dois finais de semana.

### O que você vai aprender

- Como o JavaScript se comunica com o HTML através do DOM
- Fundamentos do JavaScript moderno: arrow functions, map, filter, spread
- Criação de componentes React com JSX e props
- Gerenciamento de estado com `useState`
- Ciclo de vida de componentes e efeitos com `useEffect`
- Consumo de APIs REST com `fetch` e `async/await`
- Navegação entre páginas com React Router
- Estado global com `useContext`
- Referências ao DOM com `useRef`
- Otimização com `useMemo` e `useCallback`

### Formato

| | |
|---|---|
| **Duração** | 2 finais de semana presenciais |
| **Carga horária** | ~13h (6h30 por dia) |
| **Projeto central** | CRUD de Disciplinas + CRUD de Alunos |

---

## 📅 Estrutura das aulas

### Final de Semana 1 — Fundamentos

| Bloco | Conteúdo |
|---|---|
| Aquecimento | JS no HTML puro, tag `<script>`, projetos sem framework |
| DOM na prática | `getElementById`, `innerHTML`, `addEventListener`, DevTools |
| "Dor" do DOM | Por que o DOM manual não escala |
| Virtual DOM | Como o React resolve o problema; introdução ao JSX |
| Base JS | `const`/`let`, arrow functions, `map`, `filter`, spread |
| Componentes | Componentes funcionais, props, estrutura de pastas |
| `useState` | Estado local, formulários controlados, re-render |
| Prática guiada | CRUD de disciplinas completo |

### Final de Semana 2 — Hooks Avançados

| Bloco | Conteúdo |
|---|---|
| `useEffect` | Ciclo de vida, consumo de API, localStorage |
| React Router | Navegação entre páginas sem recarregar |
| Editar / Deletar | CRUD completo com update e delete |
| `useContext` | Estado global, prop drilling, Context API |
| CRUD de Alunos | Reaproveitamento de componentes |
| `useRef` | Referências ao DOM |
| `useMemo` / `useCallback` | Visão geral de otimização |
| Encerramento | Deploy no Vercel/Netlify, próximos passos |

---

## 🎯 Desafio Final — Rick and Morty App

### Descrição

Construa um app utilizando a **Rick and Morty API** pública (`https://rickandmortyapi.com`).

> Nenhuma chave de API é necessária — a API é totalmente aberta e gratuita.

O app deve ter **quatro páginas**:

**Página 1 — Personagens**
- Ao carregar a página, exibir automaticamente todos os personagens
- Campo de busca por nome + botão pesquisar
- Filtro por status: Todos / Vivo / Morto / Desconhecido
- Cards com foto, nome, espécie e status (com indicador colorido)
- Botão de favoritar em cada card
- Paginação com navegação entre páginas

**Página 2 — Episódios**
- Ao carregar, exibir todos os episódios
- Cards com código do episódio (ex: S01E01), nome, data de exibição e número de personagens
- Filtro por temporada
- Paginação

**Página 3 — Localizações**
- Ao carregar, exibir todas as localizações
- Cards com nome, tipo e dimensão
- Filtro por tipo
- Paginação

**Página 4 — Favoritos**
- Listar todos os personagens favoritados
- Botão para remover dos favoritos
- Contador de favoritos visível no menu de navegação
- Mensagem "Você ainda não tem favoritos" quando lista estiver vazia

### Requisitos técnicos

Para atingir a nota máxima, o projeto deve utilizar:

- [ ] `useState` — busca, filtros, paginação, loading, lista de favoritos
- [ ] `useEffect` — buscar dados ao carregar a página e ao mudar filtros/página
- [ ] `useContext` — compartilhar favoritos entre todas as páginas
- [ ] `useRef` — foco automático no campo de busca ao carregar a página de personagens
- [ ] **React Router** — navegação entre as quatro páginas
- [ ] **Componente** `PersonagemCard` — recebendo dados via props
- [ ] **Consumo de API** — fetch com async/await na Rick and Morty API
- [ ] **Paginação** — implementada nas três páginas de listagem

### API de referência

```
Personagens:  https://rickandmortyapi.com/api/character?page=1&name=rick&status=alive
Episódios:    https://rickandmortyapi.com/api/episode?page=1
Localizações: https://rickandmortyapi.com/api/location?page=1
```

Documentação completa: [rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

### Prazo

**15 dias** a partir da data da última aula.

---

## 🎨 Layout de referência

Acesse o layout base do projeto para ver o comportamento esperado:

👉 **[Visualizar o app de referência](https://rick-and-morty-app-rho-rust.vercel.app/personagens)**

> Use como referência visual — não é obrigatório seguir o design à risca. Sinta-se livre para personalizar cores, fontes e organização dos elementos.

---

## 🚀 Criando o projeto com Vite

O projeto deve ser criado com **Vite** — a ferramenta recomendada para aplicações React modernas.

### 1. Criar o projeto

```bash
npm create vite@latest rick-and-morty-app -- --template react
```

### 2. Entrar na pasta e instalar as dependências

```bash
cd rick-and-morty-app
npm install
```

### 3. Instalar o React Router

```bash
npm install react-router-dom
```

### 4. Rodar o projeto localmente

```bash
npm run dev
```

O projeto abre automaticamente em `http://localhost:5173`

### 5. Estrutura de pastas sugerida

```
rick-and-morty-app/
├── src/
│   ├── components/
│   │   └── PersonagemCard.jsx
│   ├── context/
│   │   └── FavoritosContext.jsx
│   ├── pages/
│   │   ├── Personagens.jsx
│   │   ├── Episodios.jsx
│   │   ├── Localizacoes.jsx
│   │   └── Favoritos.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
└── index.html
```

### Comandos úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza a versão de produção localmente |

---

## 📊 Critérios de avaliação

A nota final é de **0 a 10** e é composta pelos critérios abaixo.

### Funcionalidade (8 pontos)

| Critério | Pontos |
|---|---|
| Personagens carregando automaticamente com busca e filtro funcionando | 1,5 pt |
| Episódios e Localizações carregando com filtros | 1,5 pt |
| Cards exibindo os dados corretamente em todas as páginas | 1,0 pt |
| Loading e mensagens de erro implementados | 0,5 pt |
| Favoritar e desfavoritar funcionando | 1,0 pt |
| Contador de favoritos visível no menu | 0,5 pt |
| Navegação entre páginas com React Router | 1,0 pt |
| Paginação funcionando nas três páginas de listagem | 1,0 pt |

### Qualidade do código (2 pontos)

| Critério | Pontos |
|---|---|
| Componentes bem separados e com responsabilidade clara | 1,0 pt |
| Uso adequado dos hooks (`useState`, `useEffect`, `useContext`, `useRef`) | 1,0 pt |

### Nota mínima para aprovação: **7,0**

---

## ⏰ Política de atraso

A nota sofre desconto progressivo por semana de atraso:

| Atraso | Desconto |
|---|---|
| Até a data limite | Sem desconto |
| 1 semana de atraso | −2,0 pontos |
| 2 semanas de atraso | −4,0 pontos |
| 3 semanas de atraso | −6,0 pontos |
| Mais de 3 semanas | Projeto não aceito |

> Exemplo: projeto com nota 8,0 entregue com 1 semana de atraso → nota final **6,0**.

---

## 📬 Como entregar

Envie um e-mail para **neliofrazac@gmail.com** com:

- **Assunto:** `Projeto JavaScript`
- **Corpo do e-mail:**

```
Nome completo:
Matrícula:
Link do repositório:
```

> ⚠️ E-mails fora deste formato ou sem todos os campos podem não ser contabilizados. Confira antes de enviar.

---

## 🔗 Referências

| Recurso | Link |
|---|---|
| Documentação oficial do React | [react.dev](https://react.dev) |
| React Router | [reactrouter.com/docs](https://reactrouter.com/docs) |
| JavaScript moderno | [javascript.info](https://javascript.info) |
| Rick and Morty API | [rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation) |
| Deploy gratuito | [vercel.com](https://vercel.com) / [netlify.com](https://netlify.com) |

---

<p align="center">
  Dúvidas? Envie um e-mail para <strong>neliofrazac@gmail.com</strong>
</p>
