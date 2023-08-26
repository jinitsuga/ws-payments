"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function PwInput() {
  const [pwInput, setPwInput] = useState<string>("");
  const [showErr, setShowErr] = useState<boolean>(false);

  const router = useRouter();

  console.log(pwInput);

  const updatePw = (e: React.FormEvent<HTMLInputElement>) => {
    setPwInput(e.currentTarget.value);
  };

  return (
    <form className="flex flex-col p-6 rounded-lg">
      <label
        className=" flex flex-col text-2xl text-left mb-4 gap-2"
        htmlFor="password"
      >
        Password:
        <input
          onChange={(e) => {
            updatePw(e);
          }}
          className=" p-2 bg-fuchsia-200 rounded-md"
          placeholder="enter provided password"
          type="password"
        ></input>
        <span className={`${showErr ? "block" : "invisible"} text-red-700`}>
          Wrong password.
        </span>
      </label>
      <button
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          const pw = process.env.NEXT_PUBLIC_PASS;

          if (pwInput !== pw) {
            console.log(setShowErr(true));
          } else if (pwInput === pw) {
            console.log("you are in");
            setShowErr(false);
            router.push("/register");
          }
        }}
        className=" w-24 self-center rounded border-2 p-4 text-2xl"
      >
        Enter
      </button>
    </form>
  );
}
