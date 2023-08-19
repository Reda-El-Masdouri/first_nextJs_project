"use client";

//@ts-ignore
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Head from "@/node_modules/next/head";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div>
      <div>
        <h1>Enter your name:</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          placeholder="Type your name ..."
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
