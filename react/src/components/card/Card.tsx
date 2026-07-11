
type statusType = 'ativo' | 'inativo' 
type idCard = number

interface cardConfig {
  status: statusType,
  id: number
}

interface CardType extends cardConfig {
  item: string
  item2?: string ; //opcional
  item3: boolean;
  item4: string[];
  item5: (param, param3) => void
}




type CardType2 = {
  item: string
  item2?: string ; //opcional
  status: statusType,
}

type CardType3 = CardType2 & idCard

type test = string

const inputTest:test = 'opa'



console.log(inputTest)

export function Card({item, item2, status}:CardType2) {
  return (
    <ul>
      <li>{item}</li>
      {item2 && <li>{item2}</li>}
      <li>Status:{status === 'ativo' ? 'OK' : 'X'}</li>        
    </ul>
  );
}