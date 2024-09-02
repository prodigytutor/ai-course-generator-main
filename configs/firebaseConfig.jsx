// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "coursez-7bf27.firebaseapp.com",
  projectId: "coursez-7bf27",
  storageBucket: "coursez-7bf27.appspot.com",
  messagingSenderId: "872960069275",
  appId: "1:872960069275:web:7b189434cc9e894330803e",
  measurementId: "G-4KH22F93SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)