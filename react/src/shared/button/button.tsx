type variant = "sucesso" | "error" | "neutro";

type ButtonType = {
  buttonLabel: string;
  handleClick: () => void;
  variant?: variant; // propriedade opcional
};
const buttonColor = (variant: variant) => {
    if (variant === "error") {
      return "bg-red-700";
    } else if (variant === "sucesso") {
      return "bg-green-700";
    } else {
      return "bg-blue-700";
    }
  };
  
export function Button({ buttonLabel, handleClick, variant = "neutro" }: ButtonType) {
  return <button onClick={handleClick} className={`${buttonColor(variant)} text-white p-3`}>{buttonLabel}</button>;
}
