// Mostrar o mesmo exemplo da mini-lista reescrito em React
// Slide
// var let const
// objetos
const obj = {
  chave: 'valor',
  qualquerNome: 'QualqueroCalor',
  string: 'texto',
  boolean: true,
  funcao: function teste () {return 'texto'},
  obejeto: { chave: 'valor'},
  array: ['a', 'b', 'c']
}
           //0     1    2               3
const arr = ['a', true, () => {'opa'}, ['a', 'b', 'c']]
const nossoUseState = ['valor 1', function set() { return 'param1' }]
const [get, setState] = nossoUseState

// console.log('nossoUseState', get)
// console.log('nossoUseState', setState)


console.log(obj.array)
console.log(arr[3])
// Arrow Function
// function nomeada() {
//   return 'valor'
// }

// const arrowFunc = () => {
//   return 'valor'
// }

// const arrowFunc = () => 'valor'



// DESAFIO 01 — Arrow Function
const frameworks = [
  { nome: "React",   ano: 2013 },
  { nome: "Vue",     ano: 2014 },
  { nome: "Svelte",  ano: 2016 },
  { nome: "Angular", ano: 2016 },
]

const ordenacao = () => frameworks.sort((a, b) => { 
  console.log('a', `${a.nome}-${a.ano}`)
  console.log('b', `${b.nome}-${b.ano}`)
  return a.ano - b.ano} 
)

// console.log(ordenacao())

// O que é closure (Slide) - pra semana que vem
// map
const newMap = frameworks.map((framework) => {
  return{
    frameworkName: framework.nome,
    frameworkYear: framework.ano,
    novaChave: 'novoValor'
  }
})

console.log(newMap)


// DESAFIO 02 — map
// Filter
const disciplinas = [
  { nome: "Programação Web",    cargaHoraria: 80 },
  { nome: "Banco de Dados",     cargaHoraria: 60 },
  { nome: "Inglês Técnico",     cargaHoraria: 30 },
  { nome: "Programação Mobile", cargaHoraria: 72 },
  { nome: "Ética",              cargaHoraria: 20 },
]

const newFilter = disciplinas.filter(
  (disciplina) => disciplina.cargaHoraria >= 60
)

console.log(newFilter)

// DESAFIO 03 — Filter
// Spread

const array = ['a', 'b', 'c']
const arrb = [ 'd', ...array, 'e', 'f']
console.log('arrb', arrb)

const disciplina = [
  { nome: "Programação Web",    cargaHoraria: 80 }
]


const turma = {
  ...disciplina,
  alunos: ['Ruy', 'Carlos']
}

console.log('turma', turma)


// Condicionais if e else
// falsos no JS: false, 0, null, undefined, NaN, ''
// Condicionais ternárias
// contando o número de itens em uma lista
// DESAFIO 04 — Spread
// Slides
// Primeiro componente
// Props
// Organização de pastas
// DESAFIO 05 — Primeiro component
// DESAFIO 06 — DisciplinaCard com props
// Slides
// #### Introdução ao hook (
// - [ ] Mostrar campo sem estado — digitar não atualiza nada
// - [ ] Adicionar `useState` — mostrar o re-render acontecendo
// - [ ] Explicar a desestruturação `[valor, setValor]`
// DESAFIO 07 — Contador
// #### Estado de lista - formulário para adicionar itens de compras
// - [ ] Criar estado para a lista: `useState([])`
// - [ ] Adicionar item à lista com spread: `[...lista, novoItem]`
// DESAFIO 08 — CRUD de Disciplinas

import { useState } from "react";
import { Card  } from "./components/card"

function App() {
  //     get          set                     Valor default
  const [disciplina, setDisciplina] = useState("");
  const [lista, setLista] = useState([]);
  function saveList() {
    setLista([...lista, disciplina])
    setDisciplina('')
  }
  // const texto = "opa";
  // const tipo = typeof texto;
  // console.log(texto);
  // console.log(tipo);

  return (
    <div className="max-w-md max-auto p-6 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Digite o nome da disciplina"
        className="border p-2"
        value={disciplina}
        // addEventListener
        onChange={function handleChange(event) {
          return setDisciplina(event.target.value);
        }}
      />
      <button
        className="bg-amber-300 p-2"
        // addevent
        onClick={saveList}
      >
        Salvar
      </button>
      <div>
        <Card item='item' status='inativo'/>
        {/* <ul>
          {
            // if(lista.length > 0)
            lista.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul> */}
      </div>
    </div>
  );
}

export default App;
