import React from "react";
import { motion } from "framer-motion";

export default function InAnimation({
  children,
  direction,
  fullWidth = false,
}) {
  let initial = {};
  let animate = {};

  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 40 };
      animate = { opacity: 1, y: 0 };
      break;
    case "down":
      initial = { opacity: 0, y: -40 };
      animate = { opacity: 1, y: 0 };
      break;
    case "left":
      initial = { opacity: 0, x: -40 };
      animate = { opacity: 1, x: 0 };
      break;
    case "right":
      initial = { opacity: 0, x: 40 };
      animate = { opacity: 1, x: 0 };
      break;
    default:
      initial = { opacity: 0 };
      animate = { opacity: 1 };
      break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`will-change-transform ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </motion.div>
  );
}
