import { db } from "../config/firebaseConfig";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  increment,
  getDoc,
} from "firebase/firestore";

//create ref for collections
const reviewCollectionRef = collection(db, "reviews");
const statCollectionRef = collection(db, "stats");

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

    //increment totalRates & totalReviews if review submit
    if (res) {
      const statsRef = doc(statCollectionRef, "appStats");
      await updateDoc(statsRef, {
        totalRates: increment(rate),
        totalReviews: increment(1),
      });
      console.log("Review rates saved");
    }

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

//update downloads
export const updateDownloads = async () => {
  try {
    const statsRef = doc(statCollectionRef, "appStats");
    await updateDoc(statsRef, {
      downloads: increment(1),
    });
    console.log("Downloads saved");
    return true;
  } catch (error) {
    console.log("Server error: ", error);
    return false;
  }
};

//get stats
export const getStats = async () => {
  try {
    const statsRef = doc(statCollectionRef, "appStats");
    const snapshot = await getDoc(statsRef);

    if (!snapshot.exists()) {
      console.log("No stats found");
      return [];
    }

    const stats = snapshot.data();

    //calculate avg rate
    const avgRate =
      stats.totalReviews > 0
        ? parseFloat((stats.totalRates / stats.totalReviews).toFixed(1))
        : 0;

    return { ...stats, avgRate };
  } catch (error) {
    console.log("Server error: ", error);
    return [];
  }
};
