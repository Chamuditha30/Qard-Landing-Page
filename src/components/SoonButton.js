import React from "react";
import { FaApple } from "react-icons/fa";

export default function SoonButton({ text }) {
  return (
    <button
      className="flex cursor-not-allowed items-center justify-center gap-2 rounded-md bg-red-600 px-2 py-1 duration-300 ease-out hover:bg-red-700"
      disabled
    >
      <FaApple className="text-xl text-white" />
      <p className="text-xl font-semibold text-white">{text}</p>
    </button>
  );
}
