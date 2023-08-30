"use client";
import { useState } from "react";
import { CompanyForm, ShowcaseForm, BillingForm } from "./FormSteps";

// All of the form logic goes in this component
export default function MainForm() {
  const [formData, setFormData] = useState({
    //company form data
    companyName: "",
    repName: "",
    repEmail: "",
    category: "",
    companySite: "",
    // Showcase data
    showcase: "",
    size: 0,
    carte: [],
  });
  const [formSteps, setFormSteps] = useState<number>(0);

  console.log(formData);

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
          <BillingForm setter={setFormData} formData={formData} />
        )}
      </form>
      <ul className="flex justify-between  p-2">
        <li className={`${formSteps > 0 ? "block" : "hidden"}`}>
          <button
            onClick={() => {
              moveSteps("back");
            }}
          >
            Back
          </button>
        </li>
        <li>
          <button
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
