"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Input, { CheckboxInput, ShowcaseInput, Dropdown } from "./Input";
import Script from "next/script";
import { cartePrice, calcDiscount } from "@/utils/utils";
import { carteOptions, categories } from "@/utils/carteOptions";

declare global {
  interface Window {
    Square: any;
  }
}

type FormProps = {
  setter: Function;
  formData: any;
};

export type Show = {
  name: string;
  value: number;
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
      <Dropdown
        formData={formData}
        inputName="category"
        labelText={"Industry Category"}
        options={categories}
        req={true}
        setter={setter}
      ></Dropdown>
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
          <strong className="text-ws-green text-[20px]">5%</strong> off, 3 shows
          = <strong className="text-ws-green text-[20px]">7.5%</strong> off, 4
          shows = <strong className="text-ws-green text-[20px]">10%</strong> off
        </p>
      </div>
      <fieldset className="text-xl mt-2 flex-wrap">
        A la carte options:
        <div className="grid grid-cols-2 max-w-[700px] mt-1">
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
        labelText="Billing Contact Name"
        req
        setter={setter}
        placeholder="Charles Darwin"
      />
      <Input
        formData={formData}
        inputName="billingAddress"
        inputType="text"
        labelText="Billing Address"
        req
        setter={setter}
      />
      <Input
        formData={formData}
        inputName="billingEmail"
        inputType="email"
        labelText="Billing Contact Email"
        req
        setter={setter}
        placeholder="jane@google.com"
      />
      <Input
        formData={formData}
        inputName="billingPhone"
        inputType="tel"
        labelText="Billing Contact Phone"
        req
        setter={setter}
        placeholder="+1 999 451 924"
      />
    </>
  );
};

export const PaymentForm = ({ setter, formData }: FormProps) => {
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
      }).then(() => console.log("payment sent"));
    } else {
      console.log("error in payment");
      console.error(tokenResult.errors);
    }
  };

  // Calculate multi-show discount
  // Server side price validation

  const discountFromShows = calcDiscount([
    formData.showcasesLaOct,
    formData.showcasesNyJan,
    formData.showcasesNyNov,
    formData.showcasesLaFeb,
  ]);

  const total =
    cartePrice({
      carte: [
        formData.showcasesLaOct,
        formData.showcasesNyJan,
        formData.showcasesNyNov,
        formData.showcasesLaFeb,
      ],
    }) + cartePrice(formData);

  console.log(
    "DISCOUNTED",
    discountFromShows + "%",
    total - (total * discountFromShows) / 100
  );
  return (
    <>
      <Script
        onLoad={() => {
          initSquare();
          setIsSquareLoaded(true);
        }}
        src="https://sandbox.web.squarecdn.com/v1/square.js"
      />
      <div>
        <p className="text-[16px] text-red-400">
          *Please Note All Credit Card Payments Incur A 3% Admin Fee
        </p>
      </div>
      <h4 className="text-xl mt-2">Card Details</h4>
      <div className="mt-4" id="card"></div>
      <Input
        labelText="Discount Code"
        inputType="text"
        inputName="discount"
        placeholder="If one was provided"
        setter={setter}
        formData={formData}
        req={false}
        short={true}
      ></Input>

      <span className="self-center my-4">
        Total: ${total - (total * discountFromShows) / 100}
      </span>
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
