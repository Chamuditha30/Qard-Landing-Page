import React from "react";
import { LuSend } from "react-icons/lu";

export default function SubmitButton({ text, onClick }) {
  return (
    <button
      className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md bg-blue-600 px-2 py-1 duration-300 ease-out hover:bg-blue-700"
      type="submit"
      onClick={onClick}
    >
      <LuSend className="text-white md:text-lg" />
      <p className="font-semibold text-white md:text-lg">{text}</p>
    </button>
  );
}
