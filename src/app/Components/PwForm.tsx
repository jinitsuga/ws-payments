"use client";
import React from "react";

export default function PwInput() {
  return (
    <form className="w-64">
      <label
        className=" flex flex-col text-2xl text-left mb-2"
        htmlFor="password"
      >
        Password:
        <input
          className=" p-2 bg-stone-200 inline rounded-lg border-fuchsia-500 outline-fuchsia-500"
          placeholder="password"
          type="password"
        ></input>
      </label>
      <button className="rounded border-2 p-4 text-2xl">Enter </button>
    </form>
  );
}
