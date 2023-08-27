import { FC } from "react";

type InputTypes = {
  inputName: string;
  placeholder?: string;
  inputType: string;
  labelText: string;
  value?: string | number;
  req: boolean;
  setter: Function;
  formData: any;
};
type RadioTypes = {
  inputName: string;
  labelText: string;
  value: string | number;
  req?: boolean;
  setter: Function;
  id: string;
  formData: any;
};

export default function Input({
  inputName,
  placeholder,
  inputType,
  labelText,
  setter,
  formData,
  value,
  req,
}: InputTypes) {
  const updateData = (e: React.FormEvent<HTMLInputElement>) => {
    setter({ ...formData, [inputName]: e.currentTarget.value });
  };

  return (
    <label className="flex flex-col text-lg gap-1" htmlFor={inputName}>
      {labelText}
      <input
        className="rounded bg-stone-200 max-w-[75%] p-2 outline-ws-green"
        required={req}
        onChange={(e) => {
          updateData(e);
        }}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
      ></input>
    </label>
  );
}

export const RadioInput = ({
  inputName,
  labelText,
  value,
  setter,
  id,
  formData,
}: RadioTypes) => {
  const updateData = (e: React.FormEvent<HTMLInputElement>) => {
    setter({ ...formData, [inputName]: e.currentTarget.value });
  };
  return (
    <div className="flex text-xl">
      <label
        className="flex gap-1 hover:cursor-pointer checked:text-4xl border-ws-green outline-ws-green p-2"
        htmlFor={id}
      >
        <input
          onChange={(e) => {
            updateData(e);
          }}
          className="h-8 w-8 checked:accent-ws-green hover:cursor-pointer"
          type="radio"
          name={inputName}
          value={value}
          id={id}
        />
        {labelText}
      </label>
    </div>
  );
};

export const CheckboxInput = ({
  inputName,
  labelText,
  value,
  setter,
  id,
  formData,
}: RadioTypes) => {
  const updateData = (
    e: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (formData[inputName] == undefined && checked) {
      setter({ ...formData, [inputName]: Number(e.currentTarget.value) });
    } else if (formData[inputName] !== undefined && checked) {
      setter({
        ...formData,
        [inputName]:
          Number(formData[inputName]) + Number(e.currentTarget.value),
      });
    } else if (formData[inputName] !== undefined && !checked) {
      setter({
        ...formData,
        [inputName]:
          Number(formData[inputName]) - Number(e.currentTarget.value),
      });
    }
  };
  return (
    <div className="flex text-lg">
      <label
        className="flex gap-1 hover:cursor-pointer checked:text-4xl border-ws-green outline-ws-green p-2"
        htmlFor={id}
      >
        <input
          onChange={(e) => {
            updateData(e, e.target.checked);
          }}
          className="h-6 w-6 checked:accent-ws-green hover:cursor-pointer"
          type="checkbox"
          name={inputName}
          value={value}
          id={id}
        />
        {labelText}
      </label>
    </div>
  );
};
