import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import InAnimation from "../animations/InAnimation";

export default function FeatureCard({
  icon,
  frontTitle,
  backTitle,
  description,
}) {
  //set flip state
  const [isFront, setIsFront] = useState(true);

  //ref for card
  const cardRef = useRef(null);

  //flip handler
  const flipHandler = () => {
    setIsFront((prev) => !prev);
  };

  //handle click outside of the card
  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsFront(true); //reset card to front
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  return (
    <InAnimation direction={"up"}>
      <motion.div
        className="relative h-[280px] w-[320px] cursor-pointer [perspective:1000px] md:w-[400px]"
        ref={cardRef}
        onClick={flipHandler}
      >
        <div
          className={`relative h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${isFront ? "" : "[transform:rotateY(180deg)]"}`}
        >
          {/* front side */}
          <div className="absolute inset-0 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-white shadow-lg [backface-visibility:hidden]">
            {icon}
            <h1 className="mt-5 text-xl text-gray-900">{frontTitle}</h1>
            <p className="mt-2 text-gray-600">Tap to discover</p>
          </div>

          {/* back side */}
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-bg p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-xl text-white">{backTitle}</p>
            <p className="text-center text-white/80">{description}</p>
          </div>
        </div>
      </motion.div>
    </InAnimation>
  );
}
