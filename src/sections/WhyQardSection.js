import React from "react";
import cards from "../data/cardData";
import FeatureCard from "../components/FeatureCard";
import InAnimation from "../animations/InAnimation";

export default function WhyQardSection() {
  return (
    <div className="z-20 flex h-full w-full flex-col items-center justify-start bg-white px-4 py-20">
      <InAnimation direction={"up"}>
        {/* title */}
        <h1 className="text-center text-4xl text-gray-900 md:text-5xl">
          Why choose <span className="text-blue-600">Qard</span>?
        </h1>

        {/* discription */}
        <p className="mt-8 text-center text-xl text-gray-600 md:w-[800px] md:text-2xl">
          Experience the future of learning with features designed to maximize
          your study efficiency and knowledge retention.
        </p>
      </InAnimation>

      {/* feature cards */}
      <div className="mt-20 flex w-full flex-wrap items-center justify-center gap-10">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            frontTitle={card.frontTitle}
            backTitle={card.backTitle}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
