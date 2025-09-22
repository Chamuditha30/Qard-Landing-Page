import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function RatesStat({ rates }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <FaRegStar className="text-yellow-400" />
      <p className="text-sm text-white/60">{rates}/5 rating</p>
    </div>
  );
}
