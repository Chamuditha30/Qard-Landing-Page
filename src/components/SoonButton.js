import React from "react";
import { FaApple } from "react-icons/fa";

export default function SoonButton({ text }) {
  return (
    <button
      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-red-600 px-2 py-1 duration-300 ease-out hover:bg-red-700"
      disabled
    >
      <FaApple className="text-lg text-white md:text-xl" />
      <p className="text-lg font-semibold text-white md:text-xl">{text}</p>
    </button>
  );
}
