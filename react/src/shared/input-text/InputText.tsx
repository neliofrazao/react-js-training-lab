type InputTextType = {
  placeholder: string;
  value: string
  onChangeValue: (elemnt) => void 
};

export function InputText({ placeholder, value, onChangeValue }: InputTextType) {
  return <input className="border p-2" 
    type="text" 
    value={value}
    onChange={(e) => onChangeValue(e.target.value)}
    placeholder={placeholder} />;
}
