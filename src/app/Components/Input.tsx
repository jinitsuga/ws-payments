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
        className="rounded bg-stone-100 max-w-[100%] p-2 outline-ws-green"
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
    setter({
      ...formData,
      [inputName]: { name: id, value: Number(e.currentTarget.value) },
    });
  };
  return (
    <div className="flex text-lg border-ws-pink border-[1px]">
      <label
        className="flex gap-1 hover:cursor-pointer checked:text-4xl border-ws-green outline-ws-green p-2"
        htmlFor={id}
      >
        <input
          onChange={(e) => {
            updateData(e);
          }}
          className="h-6 w-6 checked:accent-ws-green hover:cursor-pointer"
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

type showcaseTypes = {
  inputName: string;
  setter: Function;
  formData: any;
  show: string;
};

export const ShowcaseInput = ({
  inputName,
  setter,
  formData,
  show,
}: showcaseTypes) => {
  return (
    <>
      <span className="text-left text-lg border-2 p-2">{show}</span>
      <RadioInput
        inputName={inputName}
        labelText={"$1750"}
        value={1750}
        setter={setter}
        id={"Artist"}
        formData={formData}
      />
      <RadioInput
        inputName={inputName}
        labelText={"$2950"}
        value={2950}
        setter={setter}
        id={'36" Table'}
        formData={formData}
      />
      <RadioInput
        inputName={inputName}
        labelText={"$3950"}
        value={3950}
        setter={setter}
        id={"4FT Table"}
        formData={formData}
      />
      <RadioInput
        inputName={inputName}
        labelText={"$5490"}
        value={5490}
        setter={setter}
        id={"6FT Booth"}
        formData={formData}
      />
      <RadioInput
        inputName={inputName}
        labelText={"$8240"}
        value={8240}
        setter={setter}
        id={"9FT Booth"}
        formData={formData}
      />
      <RadioInput
        inputName={inputName}
        labelText={"$10715"}
        value={10715}
        setter={setter}
        id={"12FT Booth"}
        formData={formData}
      />
    </>
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
    if (formData[inputName].length == 0) {
      setter({
        ...formData,
        [inputName]: [
          ...formData[inputName],
          { name: id, value: Number(e.currentTarget.value) },
        ],
      });
    } else if (!formData[inputName].find((item: any) => item.name === id)) {
      console.log(id);
      setter({
        ...formData,
        [inputName]: [
          ...formData[inputName],
          { name: id, value: Number(e.currentTarget.value) },
        ],
      });
    } else {
      const itemIndex = formData[inputName].findIndex(
        (item: any) => item.name == id
      );
      const newCarte = formData[inputName].toSpliced(itemIndex, 1);
      console.log(newCarte);
      setter({
        ...formData,
        [inputName]: newCarte,
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
