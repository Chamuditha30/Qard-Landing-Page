import { db } from "../config/firebaseConfig";
import { getDocs, collection, addDoc } from "firebase/firestore";

//create ref for collection
const reviewCollectionRef = collection(db, "reviews");

//create a review
export const createReview = async ({ name, role, comment, rate }) => {
  try {
    //create data object
    const review = {
      name: name,
      role: role,
      comment: comment,
      rate: rate,
    };

    const res = await addDoc(reviewCollectionRef, review);

    console.log("Review added with ID: ", res.id);
    return true;
  } catch (error) {
    console.error("Server error: ", error);
    return false;
  }
};

//get all reviews
export const getAllReviews = async () => {
  try {
    const data = await getDocs(reviewCollectionRef);

    if (data.empty) {
      console.log("No reviews yet");
      return [];
    }

    //map docs into clean array
    const reviews = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Reviews: ", reviews);
    return reviews;
  } catch (error) {
    console.log("Server error: ", error);
    return [];
  }
};

//get random reviews
export const getRandomReviews = async () => {
  try {
    const data = await getDocs(reviewCollectionRef);

    if (data.empty) {
      console.log("No reviews yet");
      return [];
    }

    //map docs into clean array
    const reviews = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //shuffle array
    const shuffled = reviews.sort(() => 0.5 - Math.random());

    //pick first 5 items
    return shuffled.slice(0, 5);
  } catch (error) {
    console.log("Server error: ", error);
    return [];
  }
};
