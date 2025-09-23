import React from "react";
import { LuStar } from "react-icons/lu";

export default function RatesStat({ rates }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <LuStar className="text-yellow-400" />
      <p className="text-sm text-white/60">{rates}/5 rating</p>
    </div>
  );
}
