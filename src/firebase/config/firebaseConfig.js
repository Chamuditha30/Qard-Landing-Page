import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAESpeY0QMfbX8VmPcz7oh3CkMfQjBIy-k",
  authDomain: "qard-59829.firebaseapp.com",
  projectId: "qard-59829",
  storageBucket: "qard-59829.firebasestorage.app",
  messagingSenderId: "832718197942",
  appId: "1:832718197942:web:99d8cad95f8e53695c0217",
  measurementId: "G-D65MMZV8DM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
