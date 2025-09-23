import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import visual from "../assets/images/visual.png";

export default function OverviewCard() {
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
    <motion.div
      className="relative h-[320px] w-[320px] cursor-pointer [perspective:1000px] md:h-[500px] md:w-[500px]"
      ref={cardRef}
      onClick={flipHandler}
    >
      <div
        className={`relative h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${isFront ? "" : "[transform:rotateY(180deg)]"}`}
      >
        {/* front side */}
        <div className="absolute inset-0 w-full rounded-2xl bg-white [backface-visibility:hidden]">
          <img
            src={visual}
            alt="visual"
            className="w-full rounded-2xl object-cover"
          />
          <p className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 text-gray-600">
            Tap to discover
          </p>
        </div>

        {/* back side */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-blue-500 p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-xl font-semibold text-white md:text-3xl">
            Overview
          </p>
          <p className="text-center text-white/80 md:text-lg">
            Qard is a smart flashcard app that makes memorization effortless.
            You can create decks for any subject, review cards & rate your
            memory as Easy, Normal or Hard. Based on your rating, Qard
            automatically decides when to show the card again using a simplified
            SuperMemo algorithm. This way, you focus only on what matters & your
            learning becomes faster, easier & more effective.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
