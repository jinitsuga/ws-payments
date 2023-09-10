"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Input, { RadioInput, CheckboxInput, ShowcaseInput } from "./Input";
import Script from "next/script";
import { cartePrice } from "@/utils/utils";
import { carteOptions } from "@/utils/carteOptions";
import { sizes } from "@/utils/sizes";

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
      <h3 className="mb-2 text-3xl">Company information</h3>
      <Input
        inputName="companyName"
        labelText="Company Name:"
        inputType="text"
        placeholder="Google"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="repName"
        labelText="Contact Name:"
        inputType="text"
        placeholder="Jane Smith"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="repEmail"
        labelText="Contact Email:"
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
        labelText="Website"
        inputType="text"
        placeholder="https://www.nike.com/"
        setter={setter}
        formData={formData}
        req
      />
      <Input
        inputName="socials"
        labelText="Social Media"
        inputType="text"
        placeholder="instagram, twitter, etc"
        setter={setter}
        formData={formData}
        req
      />
    </>
  );
};

export const ShowcaseForm = ({ setter, formData }: FormProps) => {
  const alacarteOptions = carteOptions.map((option, id) => {
    return (
      <CheckboxInput
        formData={formData}
        setter={setter}
        inputName="carte"
        labelText={option.name}
        key={id}
        id={option.name}
        value={option.value}
      />
    );
  });

  const Span: React.FC<any> = ({ text }) => {
    return (
      <span className="row-start-1 font-[600] col-span-1 p-1 text-center text-lg border-[1px]">
        {text}
      </span>
    );
  };

  return (
    <>
      <h2 className="mb-2 text-3xl">Showcase information</h2>
      <div className="grid auto-cols-auto mb-4">
        <Span text="Show" />
        <Span text="Artist" />
        <Span text='36" Table' />
        <Span text="4FT Table" />
        <Span text="6FT Booth" />
        <Span text="9FT Booth" />
        <Span text="12FT Booth" />
        <ShowcaseInput
          formData={formData}
          inputName="showcasesLaOct"
          setter={setter}
          show="Los Angeles, October 9th"
        />
        <ShowcaseInput
          formData={formData}
          inputName="showcasesNyNov"
          setter={setter}
          show="New York, November 13th"
        />
        <ShowcaseInput
          formData={formData}
          inputName="showcasesNyJan"
          setter={setter}
          show="New York, January 29th"
        />
        <ShowcaseInput
          formData={formData}
          inputName="showcasesLaFeb"
          setter={setter}
          show="Los Angeles, February 19th"
        />
      </div>
      {/* <label className="flex flex-col text-xl gap-1" htmlFor="showcase">
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

      <fieldset className="text-xl  flex-wrap ">
        Exhibitor space to purchase:
        <div className="flex flex-wrap gap-4 my-4">{exhibitorSizes}</div>
      </fieldset>
*/}
      <div className="p-2 border-2 border-black">
        <p className="text-[18px]">
          The following benefits are included for all sizes:{" "}
          <strong className="text-ws-green font-[600]">
            Social Media Mentions, Database of opted-in Guests, Raffle
            Promotions, Website Vendor Profile
          </strong>
        </p>
      </div>
      <div className="p-2 border-2 bg-pink-100 border-black">
        <p className="text-[18px]">
          Multi-Show Discount: 2 shows ={" "}
          <strong className="text-ws-green text-[20px]">5%</strong> off 3 shows
          = <strong className="text-ws-green text-[20px]">7.5%</strong> off 4
          shows = <strong className="text-ws-green text-[20px]">10%</strong> off
        </p>
      </div>
      <fieldset className="text-xl mt-2 flex-wrap">
        A la carte options:
        <div className="flex flex-wrap max-w-[700px] mt-1">
          {alacarteOptions}
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
  const [card, setCard] = useState<any>(null);

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
    setCard(card);
  }

  const handlePayment = async () => {
    const tokenResult = await card?.tokenize();
    if (tokenResult.status === "OK") {
      const token = tokenResult.token;
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, token }),
      });
    } else {
      console.error(tokenResult.errors);
    }
  };

  const total = formData.size.value + cartePrice(formData);
  console.log(total);
  return (
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
      <span className="self-center mb-4">Total: ${total}</span>
      <button
        className="p-4 font-bold rounded active:scale-110 active:bg-ws-pink active:text-black bg-teal-500 text-3xl text-center w-3/4 self-center mb-4 hover:text-ws-pink hover:bg-teal-400"
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handlePayment();
        }}
        type="button"
      >
        Pay
      </button>
    </>
  );
};
