"use client";
import { useState } from "react";
import {
  CompanyForm,
  ShowcaseForm,
  BillingForm,
  PaymentForm,
} from "./FormSteps";
// SHow client the discounted amount next to total
// Code field for discounts
// Admin fee 3%
// wire transfer option, capitalize a la carte options, and make a grid
// Email notificatiosn: concierge@weddingsalon + their email

// All of the form logic goes in this component
export default function MainForm() {
  const [formData, setFormData] = useState({
    //company form data
    companyName: "",
    repName: "",
    repEmail: "",
    category: "",
    companySite: "",
    socials: "",
    // Showcase data
    showcasesLaOct: "",
    showcasesNyNov: "",
    showcasesNyJan: "",
    showcasesLaFeb: "",
    billingName: "",
    billingAddress: "",
    billingEmail: "",
    billingPhone: "",
    carte: [],
    showsCart: [],
    discount: "",
  });
  const [formSteps, setFormSteps] = useState<number>(0);

  console.log(formData);
  console.log(formSteps);

  // Validation will come after fields per step are settled in stone

  // const validateCompany = (form:any) => {
  //   if (form.companyName.length > 0 && form.repName.length > 0) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  const moveSteps = (direction: string) => {
    direction === "forward"
      ? setFormSteps(formSteps + 1)
      : setFormSteps(formSteps - 1);
  };
  return (
    <div>
      <form className="flex flex-col gap-2">
        {formSteps == 0 && (
          <CompanyForm setter={setFormData} formData={formData} />
        )}
        {formSteps == 1 && (
          <ShowcaseForm setter={setFormData} formData={formData} />
        )}
        {formSteps == 2 && (
          <>
            <BillingForm setter={setFormData} formData={formData} />
            <PaymentForm formData={formData} setter={setFormData} />
          </>
        )}
      </form>
      <ul className="flex justify-between  p-2">
        <li className={`${formSteps > 0 ? "block" : "hidden"}`}>
          <button
            className="border-2 border-black m-2 hover:text-ws-pink active:text-ws-green
            active:border-ws-green hover:border-ws-pink rounded p-2"
            onClick={() => {
              moveSteps("back");
            }}
          >
            Back
          </button>
        </li>
        <li className={`${formSteps >= 2 ? "hidden" : "block"}`}>
          <button
            className="border-2 border-black m-2 hover:text-ws-pink 
            active:border-ws-green hover:border-ws-pink active:text-ws-green rounded p-2"
            onClick={() => {
              moveSteps("forward");
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
