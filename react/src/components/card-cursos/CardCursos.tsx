import { useState } from "react";
import { Button } from "../../shared/button/button";
import { InputText } from "../../shared/input-text";

export function CardCursos() {
  const [inputValue, setInputValue] = useState<string>("");
  const [cursos, setCursos] = useState<string[]>([]);
  const [busca, setBusca] = useState<string>("");

  const handleSave = () => {
    setCursos([...cursos, inputValue]);
    setInputValue("");
  };

  console.log(cursos);
  return (
    // exemplo do React Fragment
    <>
      <div className="max-w-md max-auto p-6 flex flex-col gap-2">
        <h1>Cadastro de Curso</h1>
        <div className="p-6 flex flex-col gap-2 border-2">
          <InputText
            onChangeValue={setBusca}
            value={busca}
            placeholder="Busca por cursos"
          />
        </div>
        <div className="p-6 flex flex-col gap-2 border-2">
          {/* formulário de cadastro */}
          <InputText
            onChangeValue={setInputValue}
            value={inputValue}
            placeholder="Nome do Curso"
          />
          <Button
            handleClick={handleSave}
            buttonLabel="Salvar"
            variant="sucesso"
          />
        </div>
        <div className="p-6 flex flex-col gap-2 border-2 flex-initial">
          <h2 className="text-gray-600">Lista de cursos</h2>
          {cursos.length > 0 ? (
            <>
              <ul>
                {cursos.map((curso) => (
                  <li className="text-cyan-500 border-2 p-2">{curso}</li>
                ))}
              </ul>
              <Button
                handleClick={() => console.log("opa-epa")}
                buttonLabel="Excluir"
                variant="error"
              />
            </>
          ) : (
            <p className="text-red-700">Nenhum Curso Encontrado</p>
          )}
        </div>
      </div>
    </>
  );
}
