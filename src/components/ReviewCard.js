import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import InAnimation from "../animations/InAnimation";

export default function ReviewCard({ name, role, comment, rate }) {
  return (
    <InAnimation direction={"up"} fullWidth>
      <div className="flex w-full items-start justify-center gap-5 rounded-2xl border-2 border-white/10 bg-white/5 p-4 md:gap-10 md:p-8">
        {/* user icon */}
        <FaCircleUser className="text-6xl text-white/80" />
        <div className="flex w-full flex-col items-start justify-center gap-5">
          <div className="flex w-full items-center justify-between">
            {/* name and role */}
            <div>
              <p className="font-semibold text-white md:text-lg">{name}</p>
              <p className="text-white/60 md:text-lg">{role}</p>
            </div>

            {/* rate stars */}
            <div className="flex gap-1">
              {Array(rate)
                .fill()
                .map((_, i) => (
                  <LuStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400 md:size-6"
                  />
                ))}
            </div>
          </div>

          {/* comment */}
          <p className="text-white/90 md:text-lg">{comment}</p>
        </div>
      </div>
    </InAnimation>
  );
}
