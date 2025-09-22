import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import DownloadButton from "../components/DownloadButton";
import SoonButton from "../components/SoonButton";
import DownloadsStat from "../components/DownloadsStat";
import RatesStat from "../components/RatesStat";
import InAnimation from "../animations/InAnimation";

export default function OverviewSection() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-bg md:h-screen">
      {/* text section */}
      <motion.div className="h-screen w-1/2 p-28">
        <InAnimation direction={"down"}>
          {/* logo */}
          <img src={logo} alt="logo" className="mb-10 md:w-64" />

          {/* headline */}
          <h1 className="font-outfit text-white md:text-6xl">Learn Smarter,</h1>
          <h1 className="font-outfit mb-4 text-blue-400 md:text-6xl">
            Remember Forever
          </h1>

          {/* subtext */}
          <p className="mb-10 text-justify text-white/80 md:text-xl">
            Qard helps you learn smarter with flashcards that adapt to your
            memory, so what you study today stays with you tomorrow.
          </p>

          {/* download buttons */}
          <div className="mb-10 flex items-center justify-start gap-4">
            <DownloadButton text={"Download for android"} />
            <SoonButton text={"Soon for ios"} />
          </div>

          {/* stats */}
          <div className="flex items-center justify-start gap-4">
            <DownloadsStat downloads={10} />
            <RatesStat rates={4} />
          </div>
        </InAnimation>
      </motion.div>

      {/* visual section */}
      <motion.div className="h-screen w-1/2 p-16"></motion.div>
    </div>
  );
}
