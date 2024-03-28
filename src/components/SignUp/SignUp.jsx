import { useState } from "react";

export default function SignUp() {
  const [hide, setHide] = useState(true);
  return (
    <form className="grid gap-5 border border-red-500">
      <label className="" htmlFor="Email">
        Email:{" "}
        <input className="border-b-2 border-black" type="text" id="Email" />
      </label>
      <label htmlFor="Email">
        Password:{" "}
        <input
          className="border-b-2 border-black"
          type={hide ? "password" : "text"}
          id="PassWord"
        />
      </label>
      <button
        className="border border-green-500 w-fit mx-auto px-5 py-2 hover:bg-green-500 hover:text-white rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
