import React, { useState } from "react";
import { LuStar } from "react-icons/lu";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { createReview } from "../firebase/controllers/reviewController";
import { motion } from "framer-motion";

export default function ReviewForm() {
  //store user inputs
  const [data, setData] = useState({
    name: "",
    role: "",
    comment: "",
    rate: 1,
  });

  //handle input changes
  const inputChangesHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle rate changes
  const rateChangesHandler = (starValue) => {
    setData((prev) => ({
      ...prev,
      rate: starValue,
    }));
  };

  //submit review
  const submitReview = async (e) => {
    e.preventDefault();

    try {
      const { name, role, comment, rate } = data;

      //validate inputs
      if (!name || !role || !comment) {
        toast.error("Please fill all fields.");
        return;
      }

      //create review
      const success = await createReview({ name, role, comment, rate });

      if (success) {
        toast.success("Review submitted.");

        //reset form
        setData({
          name: "",
          role: "",
          comment: "",
          rate: 1,
        });
      } else {
        toast.error("Failed to submit review. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again");
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:sticky md:top-8 md:w-1/3"
    >
      <form
        onSubmit={submitReview}
        className="flex w-full flex-col items-start justify-center gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-5 md:p-8"
      >
        {/* form title */}
        <h1 className="mb-1 text-xl font-semibold text-white">
          Share Your Experience
        </h1>

        {/* input fields */}
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={data.name}
          onChange={inputChangesHandler}
          className="w-full rounded-lg border-2 border-white/20 bg-white/10 p-2 text-lg text-white"
        />

        <input
          type="text"
          placeholder="Your role (eg: Student, Teacher)"
          name="role"
          value={data.role}
          onChange={inputChangesHandler}
          className="w-full rounded-lg border-2 border-white/20 bg-white/10 p-2 text-lg text-white"
        />

        <div className="flex w-full flex-col items-start justify-center gap-2">
          <p className="text-white/80">Rating</p>
          <div className="flex gap-2">
            {/* <LuStar className="fill-yellow-400 text-yellow-400 md:size-6" /> */}
            {Array(5)
              .fill()
              .map((_, i) => {
                const starValue = i + 1;
                return (
                  <LuStar
                    key={i}
                    onClick={() => rateChangesHandler(starValue)}
                    className={`size-6 cursor-pointer transition-all duration-500 ease-out ${starValue <= data.rate ? "fill-yellow-400 text-yellow-400" : "text-white/40 hover:text-yellow-400"}`}
                  />
                );
              })}
          </div>
        </div>

        <textarea
          placeholder="Tell us about your experience with Qard..."
          name="comment"
          value={data.comment}
          onChange={inputChangesHandler}
          className="min-h-24 w-full resize-none rounded-lg border-2 border-white/20 bg-white/10 p-2 text-lg text-white"
        />

        <SubmitButton text={"Submit Review"} />
      </form>
    </motion.div>
  );
}
