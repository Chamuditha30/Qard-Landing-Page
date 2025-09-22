import React from "react";
import logo from "../assets/images/logo.png";
import DownloadButton from "../components/DownloadButton";
import SoonButton from "../components/SoonButton";
import DownloadsStat from "../components/DownloadsStat";
import RatesStat from "../components/RatesStat";
import InAnimation from "../animations/InAnimation";
import OverviewCard from "../components/OverviewCard";

export default function OverviewSection() {
  return (
    <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto bg-bg md:h-screen md:flex-row md:gap-0 md:px-20">
      {/* text section */}
      <div className="flex h-full w-full flex-col items-center justify-center p-4 md:w-1/2">
        <InAnimation direction={"down"}>
          {/* logo */}
          <img
            src={logo}
            alt="logo"
            className="mx-auto mb-10 w-48 md:mx-0 md:w-64"
          />

          {/* headline */}
          <h1 className="text-center font-outfit text-5xl text-white md:text-left md:text-6xl">
            Learn Smarter,
          </h1>
          <h1 className="mb-4 text-center font-outfit text-5xl text-blue-400 md:text-left md:text-6xl">
            Remember Forever
          </h1>

          {/* subtext */}
          <p className="mb-10 text-center text-lg text-white/80 md:text-justify md:text-xl">
            Qard helps you learn smarter with flashcards that adapt to your
            memory, so what you study today stays with you tomorrow.
          </p>

          {/* download buttons */}
          <div className="mb-10 flex w-full flex-col items-start justify-start gap-4 md:flex-row">
            <DownloadButton text={"Download for android"} />
            <SoonButton text={"Soon for ios"} />
          </div>

          {/* stats */}
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <DownloadsStat downloads={10} />
            <RatesStat rates={4} />
          </div>
        </InAnimation>
      </div>

      {/* visual section */}
      <div className="mb-10 flex h-full w-full items-center justify-center md:mb-0 md:w-1/2">
        <InAnimation direction={"right"}>
          <OverviewCard />
        </InAnimation>
      </div>
    </div>
  );
}
