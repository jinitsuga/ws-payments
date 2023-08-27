"use client";
import { useState } from "react";
import { CompanyForm } from "./FormSteps";

// All of the form logic goes in this component
export default function MainForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    repName: "",
    repEmail: "",
    category: "",
  });
  const [formSteps, setFormSteps] = useState<number>(0);
  console.log(formData);
  return (
    <form className="flex flex-col gap-2">
      <CompanyForm setter={setFormData} formData={formData} />
    </form>
  );
}
