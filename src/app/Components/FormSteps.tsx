"use client";
import React from "react";
import Input from "./Input";

type FormProps = {
  setter: Function;
  formData: any;
};

export const CompanyForm = ({ setter, formData }: FormProps) => {
  return (
    <>
      <h3 className="mb-2">Tell us about your company</h3>
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
    </>
  );
};
