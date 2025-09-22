import React from "react";

export default function WhyQardSection() {
  return (
    <div className="z-20 flex h-full w-full flex-col items-center justify-start bg-white px-4 py-20">
      {/* title */}
      <h1 className="text-center text-4xl text-gray-900 md:text-5xl">
        Why choose <span className="text-blue-600">Qard</span>?
      </h1>
      <p className="mt-8 text-center text-xl text-gray-600 md:w-[800px] md:text-2xl">
        Experience the future of learning with features designed to maximize
        your study efficiency and knowledge retention.
      </p>
    </div>
  );
}
