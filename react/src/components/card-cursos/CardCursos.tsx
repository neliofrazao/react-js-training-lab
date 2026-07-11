import { useEffect, useState } from "react";
import { Button } from "../../shared/button/button";
import { InputText } from "../../shared/input-text";

type cursosRespose = {
  id: number;
  name: string;
};

export function CardCursos() {
  const [inputValue, setInputValue] = useState<string>("");
  const [cursos, setCursos] = useState<cursosRespose[]>([]);
  const [busca, setBusca] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sempre que o componente montar executa apenas uma vez
  useEffect(() => {
    const getCuros = async () => {
      const resp = await fetch("http://localhost:3000/cursos");
      if(!resp.ok) {
        setHasError(true)
        setIsLoading(false)
        throw new Error('Falha na api')
      }
      const data = await resp.json();
      setCursos(data);
      setIsLoading(false)
      console.log("data", data);
    };
    console.log("montei Cursos no render");
    // nao precisa do setTimeout, utilizamos apenas para simular uma demora na conexao
    setTimeout(() => {
      getCuros();
    }, 2000);
    // Array de dependência
  }, []);

  // Sempre que o componente montar e sempre que cursos receber um novo valor reexecuta
  useEffect(() => {
    console.log("montei Cursos no render e na atualização");
    // Array de dependência
  }, [cursos]);

  // const handleSave = () => {
  //   setCursos([...cursos, inputValue]);
  //   setInputValue("");
  // };

  const handleSave = async () => {
    await fetch("http://localhost:3000/cursos/", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: inputValue})
    });
    // setCursos([...cursos, inputValue]);
    setInputValue("");
  };

  const handleDelete = async (id:number) => {
    await fetch(`http://localhost:3000/cursos/${id}`, {
      method: 'DELETE',
    });
  };

  // const valoresFiltrados = cursos.filter((curso) => {
  //   return curso.toLocaleLowerCase().includes(busca.toLocaleLowerCase());
  // });

  // const handleDelete = (index: number) => {
  //   const cursosApagados = cursos.filter((_, i) => i !== index);
  //   console.log("cursosApagados", cursosApagados);
  //   return setCursos(cursosApagados);
  // };

  if (isLoading) {
    return (
      <div className="max-w-md max-auto flex">
        <p>Carregando...</p>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="max-w-md max-auto flex">
        <p>Error na api, por favor tente novamente</p>
        <Button buttonLabel="Tentar novamente" handleClick={() => {}} />
      </div>
    );
  }
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
          {cursos?.length > 0 ? (
            <>
              <ul className="flex flex-col gap-2">
                {cursos.map((curso, index) => (
                  <div className="flex flex-row gap-2 p-3">
                    <li className="text-cyan-500 border-2 p-2">{curso.name}</li>
                    <Button
                      handleClick={() => handleDelete(index)}
                      buttonLabel="Excluir"
                      variant="error"
                    />
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-red-700">Nenhum Curso Encontrado</p>
          )}
        </div>
      </div>
    </>
  );
}

// http://localhost:3000/cursos/2
// http://localhost:3000/cursos/?name=Pisocologia
