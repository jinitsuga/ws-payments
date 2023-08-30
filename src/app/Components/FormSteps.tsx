"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Input, { RadioInput, CheckboxInput } from "./Input";
import Script from "next/script";

declare global {
  interface Window {
    Square: any;
  }
}

type FormProps = {
  setter: Function;
  formData: any;
};

export const CompanyForm = ({ setter, formData }: FormProps) => {
  return (
    <>
      <h3 className="mb-2 text-3xl">Tell us about your company</h3>
      <Input
        inputName="companyName"
        labelText="Your company's name:"
        inputType="text"
        placeholder="Google"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="repName"
        labelText="Representative's name:"
        inputType="text"
        placeholder="Jane Smith"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="repEmail"
        labelText="Representative's email:"
        inputType="email"
        placeholder="john@google.com"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="category"
        labelText="Industry Category:"
        inputType="text"
        placeholder="Catering, photography, venues, etc"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="companySite"
        labelText="Website / social media:"
        inputType="text"
        placeholder="https://www.nike.com/"
        setter={setter}
        formData={formData}
        req
      />
    </>
  );
};

export const ShowcaseForm = ({ setter, formData }: FormProps) => {
  return (
    <>
      <h2 className="mb-2 text-3xl">Showcase information</h2>
      <label className="flex flex-col text-xl gap-1" htmlFor="showcase">
        {"Show you're registering for:"}
        <select
          onChange={(e: React.FormEvent<HTMLSelectElement>) => {
            setter({ ...formData, ["showcase"]: e.currentTarget.value });
          }}
          className="p-2 outline-ws-pink text-xl max-w-[350px] "
          name="showcase"
        >
          <option className="p-2 hover:bg-ws-pink" value="">
            Select a show
          </option>
          <option
            className="p-2 h-12 border-2 border-ws-green text-2xl  bg-ws-pink"
            value="October 9th, LA"
          >
            October 9th, Los Angeles
          </option>
          <option
            className="p-2 h-12 border-4 border-black text-2xl  bg-ws-pink"
            value="November 13th, NY"
          >
            November 13th, New York
          </option>
          <option
            className="p-2 h-12 border-4 border-black text-2xl  bg-ws-pink"
            value="January 29th, NY"
          >
            January 29th, New York (2024)
          </option>
        </select>
      </label>
      <fieldset className="text-xl mt-2 flex-wrap ">
        Exhibitor space to purchase:
        <div className="flex flex-wrap gap-4 mt-2">
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText="Artist: $1750"
            value={1750}
            id="artist"
          />
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText='36" table: $2950'
            value={2950}
            id="36inch"
          />
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText="4FT table: $3950"
            value={3950}
            id="4ft"
          />
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText="6FT booth: $5490"
            value={5490}
            id="6ft"
          />
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText="9FT booth: $8240"
            value={8240}
            id="9ft"
          />
          <RadioInput
            formData={formData}
            setter={setter}
            inputName="size"
            labelText="12FT booth: $10715"
            value={10715}
            id="12ft"
          />
        </div>
      </fieldset>
      <fieldset className="text-xl mt-2 flex-wrap">
        A la carte options:
        <div>
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Dedicated email blast: $995"
            value={995}
            id="emailBlast"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Sponsored blog post: $995"
            value={995}
            id="blogPost"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Reception table: $1200"
            value={1200}
            id="reception"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Power: $75"
            value={75}
            id="power"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Internet: $25"
            value={25}
            id="internet"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Social posts: $495"
            value={495}
            id="social"
          />
          <CheckboxInput
            formData={formData}
            setter={setter}
            inputName="carte"
            labelText="Swag bag inclusion/Distribution table: $495"
            value={495}
            id="swag"
          />
        </div>
      </fieldset>
    </>
  );
};

export const BillingForm = ({ setter, formData }: FormProps) => {
  return (
    <>
      <h3>Billing information</h3>
      <Input
        formData={formData}
        inputName="billingName"
        inputType="text"
        labelText="Billing contact name"
        req
        setter={setter}
        placeholder="Charles"
      />
      <Input
        formData={formData}
        inputName="billingAddress"
        inputType="text"
        labelText="Billing address"
        req
        setter={setter}
      />
      <Input
        formData={formData}
        inputName="billingEmail"
        inputType="email"
        labelText="Billing contact email"
        req
        setter={setter}
        placeholder="jane@google.com"
      />
      <Input
        formData={formData}
        inputName="billingPhone"
        inputType="tel"
        labelText="Billing contact phone"
        req
        setter={setter}
        placeholder="+1 999 451 924"
      />
    </>
  );
};

export const PaymentForm = ({ formData }: any) => {
  const [isSquareLoaded, setIsSquareLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (window.Square && !isSquareLoaded) {
      initSquare();
      setIsSquareLoaded(true);
    }
    console.log("load");
  }, [isSquareLoaded]);

  async function initSquare() {
    const payments = window.Square.payments(
      process.env.NEXT_PUBLIC_SQUARE_CLIENT,
      process.env.NEXT_PUBLIC_SQUARE_LOCATION
    );
    const card = await payments.card();
    card.attach("#card");
  }

  const cartePrice = () => {
    let carteTotal = 0;

    formData.carte.map((item: any) => {
      carteTotal = carteTotal + item.value;
    });
    return carteTotal;
  };

  const total = formData.size.value + cartePrice();
  console.log(total);
  return (
    //lol qwewqqweqweqwweEWWEas
    <>
      <Script
        onLoad={() => {
          initSquare();
          setIsSquareLoaded(true);
        }}
        src="https://sandbox.web.squarecdn.com/v1/square.js"
      />
      <h4 className="text-xl mt-2">Card details</h4>
      <div className="mt-4" id="card"></div>
      <span className="self-center mb-4">Total: {total}</span>
      <button
        className="p-4 font-bold rounded bg-teal-500 text-3xl text-center w-3/4 self-center mb-4"
        onClick={(e: SyntheticEvent) => e.preventDefault()}
        type="button"
      >
        Pay
      </button>
    </>
  );
};
