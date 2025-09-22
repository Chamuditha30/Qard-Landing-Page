import React from "react";
import { BsAndroid2 } from "react-icons/bs";

export default function DownloadButton({ text, action }) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-2 py-1 duration-300 ease-out hover:bg-green-700"
      onClick={action}
    >
      <BsAndroid2 className="text-xl text-white" />
      <p className="text-xl font-semibold text-white">{text}</p>
    </button>
  );
}
