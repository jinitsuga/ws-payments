import { FC } from "react";

type InputTypes = {
  inputName: string;
  placeholder: string;
  inputType: string;
  labelText: string;
  req: boolean;
  setter: Function;
  formData: any;
};

export default function Input({
  inputName,
  placeholder,
  inputType,
  labelText,
  setter,
  formData,
  req,
}: InputTypes) {
  const updateData = (e: React.FormEvent<HTMLInputElement>) => {
    setter({ ...formData, [inputName]: e.currentTarget.value });
  };

  return (
    <label className="flex flex-col text-xl gap-1" htmlFor={inputName}>
      {labelText}
      <input
        className="rounded bg-stone-200 max-w-[70%] p-2 outline-ws-green"
        required={req}
        onChange={(e) => {
          updateData(e);
        }}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
      ></input>
    </label>
  );
}
