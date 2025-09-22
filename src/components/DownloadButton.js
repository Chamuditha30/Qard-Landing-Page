import React from "react";
import { BsAndroid2 } from "react-icons/bs";

export default function DownloadButton({ text, action }) {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-2 py-1 duration-300 ease-out hover:bg-green-700"
      onClick={action}
    >
      <BsAndroid2 className="text-lg text-white md:text-xl" />
      <p className="text-lg font-semibold text-white md:text-xl">{text}</p>
    </button>
  );
}
