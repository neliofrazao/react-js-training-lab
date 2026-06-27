// ============================================================
// DESAFIOS — Semana 1
// Abrir este arquivo no segundo monitor durante a aula.
// ============================================================

export const desafios = {

    // ─────────────────────────────────────────────
    // BLOCO 5 — Base JS
    // ─────────────────────────────────────────────
  
    desafio01_arrowFunction: {
      bloco: "Bloco 5 — Arrow Function",
      titulo: "Ordenar frameworks por ano",
      tempo: "5 min",
      problema: `
        Dado o array abaixo, use .sort() com uma arrow function
        para ordenar do mais recente ao mais antigo.
  
        const frameworks = [
          { nome: "React",   ano: 2013 },
          { nome: "Vue",     ano: 2014 },
          { nome: "Svelte",  ano: 2016 },
          { nome: "Angular", ano: 2016 },
        ]
      `,
      esperado: `[ Svelte (2016), Angular (2016), Vue (2014), React (2013) ]`,
      extra: `
        Criar arrow function criarSaudacao que recebe um prefixo
        e retorna outra arrow function que recebe nome.
  
        criarSaudacao("Olá")("Ana")     → "Olá, Ana!"
        criarSaudacao("Olá")("Carlos")  → "Olá, Carlos!"
      `,
    },
  
    desafio02_map: {
      bloco: "Bloco 5 — map",
      titulo: "Renderizar lista com .map()",
      tempo: "5 min",
      problema: `
        Dado ['React', 'Vue', 'Angular'],
        renderizar cada item dentro de um <li>.
      `,
      esperado: `
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
      `,
      extra: `
        Renderizar com índice visível.
  
        → "1. React", "2. Vue", "3. Angular"
      `,
    },
  
    desafio03_filter: {
      bloco: "Bloco 5 — filter",
      titulo: "Filtrar disciplinas por carga horária",
      tempo: "4 min",
      problema: `
        Dado o array abaixo, retornar apenas as disciplinas
        com carga horária >= 60h.
  
        const disciplinas = [
          { nome: "Programação Web",    cargaHoraria: 80 },
          { nome: "Banco de Dados",     cargaHoraria: 60 },
          { nome: "Inglês Técnico",     cargaHoraria: 30 },
          { nome: "Programação Mobile", cargaHoraria: 72 },
          { nome: "Ética",              cargaHoraria: 20 },
        ]
      `,
      esperado: `[ Programação Web, Banco de Dados, Programação Mobile ]`,
      extra: `
        Dado um array de produtos, retornar apenas os que estão
        em estoque E custam menos de R$50, depois pegar só os nomes.
  
        → ["Caneta", "Borracha"]
      `,
    },
  
    desafio04_spread: {
      bloco: "Bloco 5 — Spread",
      titulo: "Copiar objeto sem mutar o original",
      tempo: "4 min",
      problema: `
        Dado o objeto abaixo, criar uma cópia com o nome alterado
        para "Carlos" sem modificar o original.
  
        const aluno = { nome: "Ana", matricula: "2024001", nota: 8 }
      `,
      esperado: `
        aluno     → { nome: "Ana", matricula: "2024001", nota: 8 }  // intacto
        atualizado → { nome: "Carlos", matricula: "2024001", nota: 8 }
      `,
      extra: `
        Atualizar a nota do aluno de id 2 para 7.5 dentro de um array,
        sem mutar o array original.
  
        → [{ id:1, nota:8 }, { id:2, nota:7.5 }, { id:3, nota:9 }]
      `,
    },
  
    // ─────────────────────────────────────────────
    // BLOCO 6 — Componentes
    // ─────────────────────────────────────────────
  
    desafio05_componenteCabecalho: {
      bloco: "Bloco 6 — Componentes",
      titulo: "Primeiro componente: Cabecalho",
      tempo: "10 min",
      problema: `
        Criar componente Cabecalho que receba "titulo" como prop
        e exiba dentro de um <h1>.
  
        Renderizar no App.tsx passando "Cadastro de Disciplinas".
      `,
      esperado: `<h1>Cadastro de Disciplinas</h1>`,
      extra: `
        Aceitar também prop "subtitulo" e exibir em <p> abaixo do <h1>.
        A prop é opcional — se não for passada, o <p> não aparece.
      `,
    },
  
    desafio06_disciplinaCard: {
      bloco: "Bloco 6 — Componentes",
      titulo: "DisciplinaCard com props",
      tempo: "10 min",
      problema: `
        Criar componente DisciplinaCard com props "nome" e "cargaHoraria".
        Renderizar 3 cards com dados diferentes no App.tsx.
      `,
      esperado: `
        Card 1 → nome: "Programação Web" | cargaHoraria: 80
        Card 2 → nome: "Banco de Dados"  | cargaHoraria: 60
        Card 3 → nome: "Inglês Técnico"  | cargaHoraria: 30
      `,
      extra: `
        Adicionar prop "obrigatoria" (boolean).
        Quando true, exibir um badge "Obrigatória" dentro do card.
      `,
    },
  
    // ─────────────────────────────────────────────
    // BLOCO 7 — useState
    // ─────────────────────────────────────────────
  
    desafio07_contador: {
      bloco: "Bloco 7 — useState",
      titulo: "Contador com botão",
      tempo: "5 min",
      problema: `
        Criar um botão que incrementa um contador na tela a cada clique.
      `,
      esperado: `
        Tela exibe o número atual.
        A cada clique no botão "+1", o número aumenta.
      `,
      extra: `
        Adicionar botões de decrementar e zerar.
        O valor não pode ficar abaixo de 0.
      `,
    },
  
  
    // ─────────────────────────────────────────────
    // BLOCO 8 — CRUD de Disciplinas
    // ─────────────────────────────────────────────
    //
    // ⚠️  Este bloco inteiro é o desafio.
    // Não construir ao vivo — a turma monta sozinha
    // usando tudo que foi visto nos blocos anteriores.
    // Circular pela sala e acompanhar enquanto trabalham.
    // Ter o projeto base no repositório para quem travar.
  
    desafio09_crudDisciplinas: {
      bloco: "Bloco 8 — CRUD de Disciplinas",
      titulo: "Juntar tudo: CRUD completo",
      tempo: "110 min (4 etapas)",
      etapas: [
        {
          numero: 1,
          nivel: "Base",
          problema: `
            Usando useState, criar formulário com campos nome, carga horária e descrição.
            Ao salvar: item aparece na lista usando o DisciplinaCard já criado.
            Após salvar: formulário limpa.
          `,
          esperado: `
            Preencher campos → Salvar → card aparece na lista → campos voltam vazios.
          `,
          dica: "spread para adicionar à lista, .map() para renderizar os cards.",
        },
        {
          numero: 2,
          nivel: "Base",
          problema: `
            Quando a lista estiver vazia, exibir a mensagem "Nenhuma disciplina cadastrada."
            Quando tiver itens, exibir os cards normalmente.
          `,
          esperado: `
            Lista vazia → "Nenhuma disciplina cadastrada."
            Com itens  → cards aparecem, mensagem some.
          `,
          dica: "Renderização condicional com ternário: disciplinas.length === 0 ? ... : ...",
        },
        {
          numero: 3,
          nivel: "Extra",
          problema: `
            Adicionar botão "Limpar tudo" que apaga todas as disciplinas após confirmação.
          `,
          esperado: `
            Clica "Limpar tudo" → window.confirm aparece → confirma → lista esvazia.
          `,
          dica: "window.confirm retorna true ou false.",
        },
        {
          numero: 4,
          nivel: "Avançado",
          problema: `
            Campo de busca acima da lista que filtra as disciplinas em tempo real.
          `,
          esperado: `
            Digitar "web" → exibe só disciplinas cujo nome contém "web" (case insensitive).
            Limpar busca  → lista completa volta.
          `,
          dica: ".filter() + .toLowerCase() antes de renderizar com .map().",
        },
      ],
    },
  }