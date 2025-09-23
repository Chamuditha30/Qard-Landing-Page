import React, { useEffect, useState } from "react";
import InAnimation from "../animations/InAnimation";
import { getRandomReviews } from "../firebase/controllers/reviewController";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

export default function WhatUsersSaySection() {
  //reviews state
  const [reviews, setReviews] = useState([]);

  //get all reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getRandomReviews();
      setReviews(res);
    };

    fetchReviews();
  }, []);

  return (
    <div className="z-30 flex h-full w-full flex-col items-center justify-start bg-bg px-4 py-20 md:px-28">
      <InAnimation direction={"up"}>
        {/* title */}
        <h1 className="text-center text-4xl text-white md:text-5xl">
          What our users <span className="text-blue-400">say</span>
        </h1>

        {/* discription */}
        <p className="mt-8 text-center text-xl text-white/80 md:w-[800px] md:text-2xl">
          Real feedback from students, professionals & educators who've
          transformed their learning with Qard.
        </p>
      </InAnimation>

      {/* review section */}
      <div className="mt-20 flex h-full w-full flex-col items-start justify-center gap-8 md:flex-row">
        {/* reviews */}
        <div className="flex h-full w-full flex-col items-center justify-start gap-8 md:w-2/3">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              rate={review.rate}
              comment={review.comment}
            />
          ))}
        </div>

        {/* form */}
        <ReviewForm />
      </div>
    </div>
  );
}
